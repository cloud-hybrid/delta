#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   gitlab.cloud-technology.io
# License:  BSD 3-Clause License

"""

[...]

"""

# =============================================================================
# Standard Library
# =============================================================================

import dataclasses

# =============================================================================
# Local Imports
# =============================================================================

import Utility.AWS

# =============================================================================
# Exportable
# =============================================================================

from API.AWS.S3 import (
    Interface as S3
)

from API.AWS.SSM import (
    Interface as SSM
)

from API.AWS.DNS import (
    Interface as DNS
)

# =============================================================================
# Module Assignment
# =============================================================================

Wrapper: Utility.AWS.Wrapper = Utility.AWS.Wrapper()

@Utility.AWS.Type
class SDK:
    """
    ...
    """

    Session: Utility.AWS.Session = Wrapper.Session
    Credentials: Utility.AWS.Credential = Wrapper.Credentials
    Account: Utility.AWS.Wrapper = Wrapper

    Profile: Utility.AWS.Profile =  Wrapper.Profile
    Region: Utility.AWS.Region = Wrapper.Region

    DNS: DNS = DNS.HTTP
    SSM: SSM = SSM.HTTP
    S3: S3 = S3.HTTP

@dataclasses.dataclass()
class Profile:
    AWS: SDK = SDK

Cloud = Profile()

__all__ = [
    "SSM", "S3", "Cloud"
]
