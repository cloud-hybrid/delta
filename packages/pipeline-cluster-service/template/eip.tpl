#!/bin/env bash --posix

# -*-  Coding: UTF-8  -*- #
# -*-  System: Linux  -*- #
# -*-  Usage:   *.*   -*- #

set -euo pipefail

#
# ========================================================================
# Elastic IP Helper
# ========================================================================
# * Ensure to Sanitize Sensitive, Hard-Coded Information
#

echo "Installing Additional Software for Assigning EIP ..."

function exportable () {
    export PATH="$HOME/.local/bin:$PATH:/usr/local/bin"

    echo "$PATH" >> /etc/environments
}

function dependencies () {
    yum install -y jq python3
    curl --fail --retry 5 -O "https://bootstrap.pypa.io/get-pip.py"
    python3 get-pip.py --user

    exportable && pip install "aws-ec2-assign-elastic-ip"
}

function region () {
    export AWS_DEFAULT_REGION="$(curl -s http://169.254.169.254/latest/dynamic/instance-identity/document | jq -r ".region")"
}

function main () {
    dependencies && region

    aws-ec2-assign-elastic-ip --valid-ips ${eip}
}

main