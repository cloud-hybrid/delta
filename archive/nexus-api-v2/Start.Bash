#!/bin/bash --posix

.venv/bin/activate

.venv/bin/python3 -m API --Debug Server --TLS --Port 3050
