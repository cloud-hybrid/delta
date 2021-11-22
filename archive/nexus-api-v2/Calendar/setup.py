#!/usr/bin/python3

# -*- Coding: UTF-8 -*-
# -*- System: Linux -*-
# -*- Usage:   *.*  -*-

# Owner:    Cloud-Technology LLC.
# Project:  Nexus-API - Python
# License:  BSD 3-Clause License

#
# Copyright 2021 Jacob B. Sanders - Cloud Hybrid LLC. & Affiliates
#
# Redistribution and use in source and binary forms, with or without modification, are permitted
# provided that the following conditions are met:
#
# 1.  Redistributions of source code must retain the above copyright notice, this list of
#     conditions and the following disclaimer.
# 2.  Redistributions in binary form must reproduce the above copyright notice, this list of
#     conditions and the following disclaimer in the documentation and/or other materials
#     provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
# OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
# AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER
# OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
# CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
# SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
# THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
# OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
# OF SUCH DAMAGE.
#

"""\
Nexus API

- https://packaging.python.org/tutorials/installing-packages

Before running setup.py, please follow the *README.md*.

Installation:

    >>> python3 -m pip install --use-feature in-tree-build --upgrade .

Usage:

    >>> Nexus-API


@Task-Board:
    - [ ] Abstract the Packager's name from a git-ignored `PACKAGER` File
        - [ ] Update Documentation in Setup Section(s)


File-Safery:
    In order for a python package to become "zip-safe", anything that is generated as runtime (setup.py runtime)
    needs to be read as input, and thrown back out as a python *.py file.

Contributors:
    - Artifact/Contributors.md
"""

import os
import sys
import glob
import time
import json
import shlex
import shutil
import urllib
import typing
import platform
import textwrap
import warnings
import setuptools
import subprocess
import configparser

import urllib.request

warnings.filterwarnings("ignore")

class Meta:
    Copyright = textwrap.dedent("""\
        #!/usr/bin/env python3

        # -*- Coding: UTF-8 -*-
        # -*- System: Linux -*-
        # -*- Usage:   *.*  -*-

        # Owner:    Cloud-Technology LLC.
        # Project:  Nexus-API - Python
        # License:  BSD 3-Clause License

        #
        # Copyright 2021 Jacob B. Sanders - Cloud Hybrid LLC. & Affiliates
        #
        # Redistribution and use in source and binary forms, with or without modification, are permitted
        # provided that the following conditions are met:
        #
        # 1.  Redistributions of source code must retain the above copyright notice, this list of
        #     conditions and the following disclaimer.
        # 2.  Redistributions in binary form must reproduce the above copyright notice, this list of
        #     conditions and the following disclaimer in the documentation and/or other materials
        #     provided with the distribution.
        #
        # THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
        # OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
        # AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER
        # OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
        # CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
        # SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
        # THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
        # OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
        # OF SUCH DAMAGE.
        #
    """)

CWD = Path = os.path.abspath(os.path.dirname(__file__))

assert os.path.isfile(os.path.join(CWD, "Environment.ini"))

subprocess.run(shlex.split("{0} {1} Environment.ini".format(sys.executable, os.path.join(CWD, "Sanitize.py"))))

Version = ".".join(open(CWD + os.sep + "VERSION", "r").readline().split())
URL = "https://gitlab.cloud-technology.io/Nexus/API.git"
if sys.argv[-1] == "--Install":
    Install = True
    sys.argv.pop()
else:
    Install = False

sys.stdout.write("[Nexus-API]: API CI-CD Build ➜ {0}".format(Version) + "\n")
sys.stdout.flush()

sys.stdout.write("[Nexus-API]: Initializing Target(s) ➜ ")
sys.stdout.flush()

Name = "Nexus-API"
Debugging = os.environ["DISTUTILS_DEBUG"] = "0"
Distribution = Path + os.sep + "Artifact" + os.sep + "Distribution"
Environment = os.environ.get("VIRTUAL_ENV", False)
System = platform.system() in ["Linux", "Darwin", "Java"]
TTY = os.isatty(sys.stdin.fileno())

sys.stdout.write("Initialized" + "\n")
sys.stdout.flush()

Any = typing.Any
List = typing.List

exit(128) if System == False else ...

if Environment == False and TTY == True:
    if Environment is False and os.path.isdir(os.path.dirname(__file__) + os.sep + ".venv"):
        os.environ["VIRTUAL_ENV"] = os.path.dirname(__file__) + os.sep + ".venv"
        os.system("alias python=python3")
    else:
        sys.stdout.write("Error: Virtual Environment Not Activated" + "\n")
        exit(129)
elif Environment == False and TTY == False:
    sys.stdout.write("Warning: Virtual Environment Not Activated; TTY Unavailable" + "\n")
else:
    os.system("alias python=python3")

sys.stdout.write("[Nexus-API]: Writing Configurations ➜ ")
sys.stdout.flush()

Installer = setuptools.setup
Packages = setuptools.find_packages

Configuration = """\
[global]
verbose = 0

[options]
zip_safe = True
include_package_data = True

[build]
build_base    = Artifact/Build
build_purelib = Artifact/Build/Standard
build_scripts = Artifact/Build/Scripting
build_lib     = Artifact/Build/Library

[bdist_rpm]
vendor = Cloud-Technology

[sdist]
dist_dir = Artifact/Distribution/Source

[bdist]
bdist_base  = Artifact/Distribution/Binary
dist_dir    = Artifact/Distribution
formats     = zip

[bdist_egg]
dist_dir                = Artifact/Distribution
keep_temp               = False
bdist_dir               = Artifact/Distribution/Egg
skip_build              = False
exclude_source_files    = True

[bdist_wheel]
bdist_dir       = Artifact/Distribution/Binary
dist_dir        = Artifact/Distribution

[bdist_msi]
vendor      = Cloud-Technology
doc_files   = README.md
""".format(CWD)

CFG = open(CWD + os.sep + "setup.cfg", "w+")
CFG.write(Configuration)
CFG.close()
sys.stdout.write("Wrote" + "\n")
sys.stdout.flush()

sys.stdout.write("[Nexus-API]: Updating __version__.py ➜ ")
sys.stdout.flush()

Target = open(CWD + os.sep + "API" + os.sep + "__version__.py", "w+")

Delimited = Version.split(".")
Major, Minor, Patch = Delimited[0], Delimited[1], Delimited[2]

Target.write(Meta.Copyright + "\n"
    + "__version__ = (%s, %s, %s)" % (Major, Minor, Patch)
    + "\n"
); Target.close()

sys.stdout.write("Updated" + "\n")

sys.stdout.write("[Nexus-API]: Generating TLS Certificate ➜ ")
sys.stdout.flush()

Subject = "/C=US/ST=MN/O=Cloud Technology LLC./CN=nexus.cloud-technology.io/subjectAltName=DNS:*.nexus.cloud-technology.io,DNS:nexus.cloud-technology.io,localhost,0.0.0.0"

denormalized = """\
openssl req -x509 -newkey rsa:8192 -nodes \
    -sha256 -subj "{0}"                   \
        -keyout "{1}/Key.PEM" -out        \
           {1}/Key.PEM
""".format(Subject, CWD)

command = shlex.split(denormalized)
TLS = subprocess.Popen(
    args = command,
    shell = False,
    stdin = subprocess.PIPE,
    stdout = subprocess.PIPE,
    stderr = subprocess.PIPE
)

try:
    Response = TLS.communicate(timeout = 60)

    TLS.poll()

    sys.stdout.write("Key.PEM - 8192 Bytes" + "\n")
    sys.stdout.flush()

except subprocess.TimeoutExpired as Error:
    sys.stdout.write("[WARNING] - Open-SSL TLS Certificate Was Not Generated." + "\n")
    sys.stdout.write("    Please Install OpenSSL if Applicable. A Development PEM" + "\n")
    sys.stdout.write("    will be Issued as a Temporary Solution " + "\n")
    sys.stdout.flush()

    shutil.copy(Path + os.sep + "Artifact" + os.sep + "Key.PEM", Path + os.sep + "Key.PEM")

sys.stdout.write("[Nexus-API]: Copying Data to Target(s) ➜ ")
sys.stdout.flush()

shutil.copy("VERSION", CWD + os.sep + "API/ASGI/VERSION")
File = open(CWD + os.sep + "API" + os.sep + "Version.py", "w+")
Content = "Value = \"{0}\"".format(open(CWD + os.sep + "VERSION", "r").readline().strip())
File.write(Content)
File.close()

shutil.copy(CWD + os.sep + "Key.PEM", CWD + os.sep + "API/ASGI/Key.PEM")
File = open(CWD + os.sep + "API" + os.sep + "PEM.py", "w+")
Content = """\
Value = \"\"\"\\
{0}
\"\"\"
""".format(
    open(CWD + os.sep + "Key.PEM", "r").read().strip()
)
File.write(Content)
File.close()

URLs = {
    "Documentation": "https://gitlab.cloud-technology.io/Nexus/Nexus-API",
    "Support":       "https://gitlab.cloud-technology.io/Nexus/Nexus-API",
    "Source":        "https://gitlab.cloud-technology.io/Nexus/Nexus-API.git",
    "Tracker":       "https://gitlab.cloud-technology.io/Nexus/Nexus-API/-/boards",
}

Classifiers = [
    "Development Status :: 4 - Beta",
    "Environment :: Console",
    "Environment :: Web Environment",
    "Intended Audience :: End Users/Desktop",
    "Intended Audience :: Developers",
    "Intended Audience :: System Administrators",
    "License :: OSI Approved :: Python Software Foundation License",
    "Operating System :: MacOS :: MacOS X",
    "Operating System :: POSIX",
    "Programming Language :: Python",
    "Topic :: Communications :: Email",
    "Topic :: Office/Business",
    "Topic :: Software Development :: Bug Tracking"
]

sys.stdout.write("Exported" + "\n")
sys.stdout.flush()

sys.stdout.write("[Nexus-API]: Performing Pre-Flight Checks ➜ ")
sys.stdout.flush()

command = shlex.split("{0} -m pip check".format(sys.executable))
install = subprocess.Popen(
    args = shlex.split("{0} -m pip check".format(sys.executable)),
    shell = False,
    stdin = subprocess.DEVNULL,
    stdout = subprocess.PIPE,
    stderr = subprocess.STDOUT
)

command = shlex.split("{0} {1}.py".format(
    sys.executable,
    Path + os.sep + "Install-Certificate")
); certificate = subprocess.Popen(
    args = command,
    shell = False,
    stdin = subprocess.DEVNULL,
    stdout = subprocess.PIPE,
    stderr = subprocess.STDOUT
)

command = shlex.split("{0} -m pip install --upgrade pip".format(
    sys.executable
));

process = subprocess.Popen(
    args = command,
    shell = False,
    stdin = subprocess.DEVNULL,
    stdout = subprocess.PIPE,
    stderr = subprocess.STDOUT
)

process.wait(300); install.wait(300); certificate.wait(300)

exit(130) if process.returncode != 0 and install.returncode == 1 and certificate.returncode != 0 else time.sleep(1.0)

sys.stdout.write("(4/4), Ready" + "\n")
sys.stdout.flush()

sys.stdout.write("[Nexus-API]: Checking Environment File(s) ➜ ")
sys.stdout.flush()

sys.stdout.write("Exported" + "\n")
sys.stdout.flush()

sys.stdout.write("[Nexus-API]: Generating Distribution ➜ (Long-Running)" + "\n")
sys.stdout.flush()

try:
    setuptools.setup(
        name = Name,
        version = Version,
        author = "Jacob B. Sanders",
        author_email = "jacob.sanders@cloudhybrid.io",
        download_url = "https://gitlab.cloud-technology.io/Nexus/Nexus-API/-/releases",
        description = "Cloud Nexus API Service(s)",
        project_urls = URLs,
        long_description = open(os.path.join(CWD, "README.md"), "r").read(),
        long_description_content_type = "text/markdown",
        url = "https://gitlab.cloudhybrid.io/Nexus/Nexus-API",
        packages = Packages(where = ".", include = [
            "Database", "Parser", "API", "Mongo", "Utility", "Calendar"
        ]) + Packages(),
        classifiers = Classifiers,
        package_data = {
            ".": ["README.md", "LICENSE"],
            "API": ["Environment.json"],
            "API.ASGI": ["VERSION", "Key.PEM"]
            # "Database": [".env"],
            # "Mongo": [".env"],
            # "API.ASGI": ["VERSION", "Key.PEM"],
            # "API.ASGI.Authentication": [".env"],
            # "API.Git": [".env"]
        },
        python_requires = ">=3.9.0",
        include_package_data = True,
        install_requires = [
            "wheel>=0.36",
            "virtualenv>=20.4"
            "setuptools>=41",
            "httptools>=0.2.0",
            "itsdangerous>=2.0.1",
            "aiofiles>=0.7.0",
            "python-multipart>=0.0.5",
            "bcrypt>=3.2.0",
            "email-validator>=1.1.3",
            "boto3>=1.18.9",
            "dnspython>=1.15",
            "fastapi>=0.67.0",
            "asyncpg>=0.23.0",
            "passlib>=1.7.4",
            "pydantic>=1.8.2",
            "motor>=2.5.0",
            "websockets>=9.1",
            "certifi>=2020.12",
            "SQLAlchemy>=1.4.22",
            "psycopg2-binary>=2.9",
            "python-jose>=3.3.0",
            "multidict>=5.1.0",
            "uvicorn==0.14.0",
            "PyYAML>=5.4.1",
            "python-dotenv>=0.19.0",
            "psutil>=5.8.0"
        ],
        include_dirs = True,
        zip_safe = True,
        entry_points = {
            "console_scripts": [
                "Nexus-API=API.__main__:Runtime",
                "Uninstall-Nexus-API=API.__del__:Uninstall"
            ]
        }
    )

    Wheel = [
        Distribution + os.sep + Name.replace("-", "_") + "-" + "{0}-py3-none-any.whl".format(Version),
        Path + os.sep + Name + "-" + "{0}-py3-none-any.whl".format(Version),
        Name + "-" + "{0}-py3-none-any.whl".format(Version)
    ]

    if sys.argv[1].casefold() == "bdist_egg":
        os.system("mv ./Artifact/Distribution/Nexus*.egg ./Nexus-API-{0}.egg".format(Version))
        sys.stdout.write("  ﬌ Generated (Egg)" + "\n")
    elif sys.argv[1].casefold() == "bdist_wheel":
        sys.stdout.write("  ﬌ Generated (Wheel)" + "\n")
        shutil.move(Wheel[0], Wheel[1])
    elif sys.argv[1].casefold() == "install":
        sys.stdout.write("  ﬌  Generated (Source-Binary)" + "\n")
    else: sys.stdout.write("  ﬌ Installed (Source)" + "\n")

    sys.stdout.flush()

except Exception as Error: sys.stderr.write("\n" + "%s" % Error + "\n")

finally:
    os.remove(os.path.join(CWD, "setup.cfg"))
    os.remove(os.path.join(CWD, "Key.PEM"))

    shutil.rmtree(os.path.join(CWD, "Nexus_API.egg-info")) if os.path.isdir(os.path.join(CWD, "Nexus_API.egg-info")) else ...

    if Install:
        try:
            sys.stdout.write("[Nexus-API]: Installing ➜ ")
            sys.stdout.flush()

            command = "{0} -m pip install certifi --force".format(
                sys.executable,
                Version.split(".")[0],
                Version.split(".")[1],
                Version.split(".")[2]
            ); Certifi = subprocess.Popen(
                args = shlex.split(command),
                shell = False,
                stdin = subprocess.PIPE,
                stdout = subprocess.PIPE,
                stderr = subprocess.PIPE
            ); Certifi.wait(30)

            command = "{0} -m pip install {1}/Nexus-API-{2}.{3}.{4}-py3-none-any.whl --force".format(
                sys.executable,
                CWD,
                Version.split(".")[0],
                Version.split(".")[1],
                Version.split(".")[2]
            )

            Wheeler = subprocess.Popen(
                args = shlex.split(command),
                shell = False,
                stdin = subprocess.PIPE,
                stdout = subprocess.PIPE,
                stderr = subprocess.PIPE
            )

            Wheeler.wait(60 * 5)

            sys.stdout.flush()
            sys.stdout.write("Complete" + "\n")
            sys.stdout.flush()
        except subprocess.TimeoutExpired as Error:
            sys.stdout.write("[WARNING] - Wheel was Unsuccessful; Attempting" + "\n")
            sys.stdout.write("    Installation via Development Mode" + "\n")
            sys.stdout.flush()
        finally:
            Source = open(os.path.join(CWD, "Install-Certificate.py"))
            Contents = Source.read()
            Source.close()

            exec(compile(Contents, "Install-Certificate.py", mode="exec"))

            exit(0)
