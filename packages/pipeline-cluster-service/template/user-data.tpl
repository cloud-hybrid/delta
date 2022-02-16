#!/bin/env bash --posix

# -*-  Coding: UTF-8  -*- #
# -*-  System: Linux  -*- #
# -*-  Usage:   *.*   -*- #

set -xeuo pipefail

#
# ========================================================================
# EC2 User-Data Definition
# ========================================================================
# * Ensure to Sanitize Sensitive, Hard-Coded Information
#

exec > >(tee /var/log/user-data.log | logger -t user-data -s 2>/dev/console) 2>&1

cat << EOF | tee /etc/hosts
127.0.0.1   localhost localhost.localdomain $(hostname)
EOF

${eip}

for attempt in {1..10}; do
    echo "Update Attempt: ($attempt)"
    yum -y update && break || sleep 60
done

${logging}

${gitlab_runner}
