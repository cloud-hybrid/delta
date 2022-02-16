#!/bin/env bash --posix

# -*-  Coding: UTF-8  -*- #
# -*-  System: Linux  -*- #
# -*-  Usage:   *.*   -*- #

set -xeuo pipefail

echo "Installing Additional Logging Software"

for attempt in {1..10}; do
    echo "Installation Attempt ($attempt)"

    yum install -y aws-cli awslogs jq && break || sleep 60
done

# Inject the CloudWatch Logs configuration file contents

cat << EOF > /etc/awslogs/awslogs.conf
[general]
state_file = /var/lib/awslogs/agent-state

[/var/log/dmesg]
file = /var/log/dmesg
log_stream_name = {instanceId}/dmesg
log_group_name = ${log_group_name}
initial_position = start_of_file

[/var/log/messages]
file = /var/log/messages
log_stream_name = {instanceId}/messages
log_group_name = ${log_group_name}
datetime_format = %b %d %H:%M:%S
initial_position = start_of_file

[/var/log/user-data.log]
file = /var/log/user-data.log
log_stream_name = {instanceId}/user-data
log_group_name = ${log_group_name}
initial_position = start_of_file
EOF

# Replace Region
declare REGION="$(curl -s 169.254.169.254/latest/dynamic/instance-identity/document | jq -r .region)"

sed -i -e "s/region = us-east-1/region = $REGION/g" /etc/awslogs/awscli.conf

# Replace Instance ID
declare ID="$(curl -s 169.254.169.254/latest/dynamic/instance-identity/document | jq -r .instanceId)"

sed -i -e "s/{instanceId}/$ID/g" /etc/awslogs/awslogs.conf

if grep -q ':2$' /etc/system-release-cpe; then
    systemctl enable awslogsd
    systemctl start awslogsd
else
    service awslogs start
    chkconfig awslogs on
fi
