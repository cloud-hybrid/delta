#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:   Jacob B. Sanders
# Source:  code.cloud-technology.io
# License: BSD 2-Clause License

#
# BSD 2-Clause License
#
# Copyright (c) 2020, Cloud Hybrid LLC. & Affiliates
#
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:
#
# * Redistributions of source code must retain the above copyright notice, this
#   list of conditions and the following disclaimer.
#
# * Redistributions in binary form must reproduce the above copyright notice,
#   this list of conditions and the following disclaimer in the documentation
#   and/or other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
# SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
# CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
# OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
#

"""
Usage: $ Nexus-API --Help
"""

from __future__ import annotations

import os
import ssl
import signal
import pprint
import textwrap

import Utility.Color

global UMASK

from . import *

ssl._create_unverified_context = ssl._create_default_https_context

Arguments = [Argument.casefold() for Argument in sys.argv]

Encrypted = any([
    "--tls" in Arguments,
    "--https" in Arguments
])

Debug = any([
    "--debug" in Arguments
])

Color = Utility.Color.TTY()

def Unit() -> Boolean:
    PendingDeprecationWarning(
        "Unit() Will be Removed in the Future"
    )

    Valid = False
    Validation = {}

    Assertion = os.environ.get("NEXUS_API_ASSERTION", False)

    if os.environ.get("NEXUS_API_UNIT_TESTING", False) or Assertion:
        Validation["Authentication"] = os.path.isfile(
            os.path.abspath(
                os.path.dirname(
                    __file__
                ) + os.sep + "ASGI"
                + os.sep + "Authentication"
                + os.sep + ".env"
            )
        )

        Validation["Environment"] = os.path.isfile(
            os.path.abspath(
                os.path.dirname(
                    __file__
                ) + os.sep + os.pardir
                + os.sep + ".env"
            )
        )

    assert (Valid := all(Validation.values())) if Assertion else ...

    return Valid

async def Environment(Semaphore: Lock):
    """
    Environment (Callable) -> None:

        Await `Parser` to have parsed and stored intended Environment
        Variables; continue through evaluation to ensure propogation.

    """

    await Semaphore.acquire() if not Semaphore.locked() else ...

    Stateful:   Callable = lambda: os.environ.get(ENVIRONMENT, False)
    Default:    Callable = lambda K, _ = None: os.environ.get(K, _)
    Update:     Callable = lambda K, V: os.environ.update({K: V})

    try:
        while Default(ENVIRONMENT, "STATELESS") != "STATEFUL":
            Update(ENVIRONMENT, Stateful()) if Stateful() else ASGI.wait(2.5)

    except Exception as Error: raise Error
    except KeyboardInterrupt:
        sys.stdout.write("\r" + "Asynchronous Interrupt ... "
             + "\n" + " - SIGKILL (1)" + "\n"
        ); exit(0)

    finally:
        Semaphore.release()

    sys.stdout.flush()

def Runtime():
    Entry = CLI.arguments()

    sys.stdout.write(Color.green("[Nexus-API]") + "%s"
        % Color.normalized(": %s" % "Awaiting Environment Lock ➜ ")
    )
    sys.stdout.flush()

    Semaphore = Lock()
    ASGI.run(Semaphore.acquire())

    Awaiter = ASGI.create_task(
        Environment(Semaphore)
    ); ASGI.queue(Awaiter)

    sys.stdout.write("Successful" + "\n")
    sys.stdout.flush()

    sys.stdout.write(Color.green("[Nexus-API]") + "%s"
        % Color.normalized(": %s" % "Retrieving Event-Loop ➜ ")
    )
    sys.stdout.flush()

    sys.stdout.write("ASGI" + "\n")
    sys.stdout.flush()

    Main(ASGI)

    sys.stdout.write("\r" + String(" " * os.get_terminal_size(sys.stdout.fileno()).columns if os.isatty(sys.stdout.fileno()) else 0) + "\r"),
    sys.stdout.flush()
    sys.stdout.write(
        "\n" + "[Nexus-API]" + " " +
        "Asynchronous Interrupt ... " + "\n" +
        " - SIGKILL (1)" + "\n"
    )

    exit(0)


def Main(ASGI):
    """ Application Entry Point """

    sys.stdout.write(Color.green("[Nexus-API]") + "%s"
        % Color.normalized(": %s" % "Calculating Compute ➜ ")
    ); sys.stdout.flush()

    Count = os.cpu_count()

    sys.stdout.write("%i" % Count + " " + "Available CPUs" + "\n")
    sys.stdout.flush()

    sys.stdout.write(Color.green("[Nexus-API]") + "%s"
        % Color.normalized(": %s" % "Indexing Cloud Profile ➜ ")
    ); sys.stdout.flush()

    sys.stdout.write(Cloud.AWS.Profile.capitalize() + "\n")
    sys.stdout.flush()

    sys.stdout.write(Color.green("[Nexus-API]") + "%s"
        % Color.normalized(": %s" % "Parsing AWS Access ID ➜ ")
    ); sys.stdout.flush()

    sys.stdout.write("*" * len(Cloud.AWS.Credentials.Access) + "\n")
    sys.stdout.flush()

    URL = String("https://" if Encrypted else "http://") + "localhost" + ":" + "3000" + "/Documentation" + "\n"

    sys.stdout.write(Color.green("[Nexus-API]") + "%s"
        % Color.normalized(": API ➜ " + URL)
    ); sys.stdout.flush()

    sys.stdout.write(Color.green("[Nexus-API]") + "%s"
        % Color.normalized(": %s" % "Flushing Input & Output Buffers ➜ ")
    ); sys.stdout.flush()

    sys.stdout.write("Cleared" + "\n")
    sys.stdout.flush()

    sys.stdout.write(Color.green("[Nexus-API]") + "%s"
        % Color.normalized(": %s" % "Updating Logger Setting(s) ➜ ")
    ); sys.stdout.flush()

    Logger = logging.basicConfig(level = logging.DEBUG) if Debug else logging.basicConfig()

    sys.stdout.write("[DEFAULT]" + "\n" if not Debug else "[DEBUG]" + "\n")
    sys.stdout.flush()

    Server = ASGI.create_task(
        Application.Server.serve(),
            name = "Nexus-API"
    )

    # PostgreSQL = ASGI.create_task(
    #     Driver.Async.Instantiate(),
    #         name = "PostgreSQL"
    # )

    # ASGI.queue(PostgreSQL)

    ASGI.queue(Server)


if __name__ == "__main__":
    Runtime()
