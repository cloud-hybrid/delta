#!/bin/bash --posix

# -*-  Coding: UTF-8  -*- #
# -*-  System: Linux  -*- #
# -*-  Usage:   *.*   -*- #

set -euo pipefail

# ------------------------------------------------------------------------
# Global Variable(s)
# ------------------------------------------------------------------------

CLI=(${@})
GWT="$(git rev-parse --show-toplevel)"
CWD="$(cd "$(dirname "${0}")" &>/dev/null 2>&1; pwd -P)"

Evaluate () { command -v ${1} &>/dev/null; printf "%i" "${?}"; }

SIGNALS=(
    "$(Evaluate "node")"          # Node            (127 + 0)
    "$(Evaluate "npm")"           # NPM             (127 + 1)
    "$(Evaluate "mongo")"         # Mongo-Shell     (127 + 2)
    "$(Evaluate "mongorestore")"  # Mongo-Restore   (127 + 3)
    "$(Evaluate "aws")"           # AWS             (127 + 4)
)

# ------------------------------------------------------------------------
# Program Entry Point
# ------------------------------------------------------------------------

Main () {
    for (( i = 0; i < ${#SIGNALS[@]}; i++ )) {
        if [[ "${SIGNALS[${i}]}" != "0" ]]; then
            return $(( 127 + $i ))
        fi
    }
}

Main && exit 0 || exit ${?}
