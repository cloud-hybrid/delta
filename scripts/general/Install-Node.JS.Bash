#!/bin/bash --posix

# -*-  Coding: UTF-8  -*- #
# -*-  System: Linux  -*- #
# -*-  Usage:   *.*   -*- #

set -eo pipefail

# ------------------------------------------------------------------------
# Global Variable(s)
# ------------------------------------------------------------------------

CLI=$(${@})
GWT="$(git rev-parse --show-toplevel)"
CWD="$(cd "$(dirname "${0}")" &>/dev/null 2>&1; pwd -P)"

export NVM_DIR="${HOME}/.nvm"

# ------------------------------------------------------------------------
# Program Entry Point
# ------------------------------------------------------------------------

Main () {
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

    [ -s "${NVM_DIR}/nvm.sh" ] && \. "${NVM_DIR}/nvm.sh"
    [ -s "${NVM_DIR}/bash_completion" ] && \. "${NVM_DIR}/bash_completion"

    . ~/.nvm/nvm.sh

    nvm install node
}

Validate () {
    node -e "console.log('Running Node.js ' + process.version)" && return 0;
}

Main > /dev/null 2>&1

Validate && exit 0 || exit ${?}
