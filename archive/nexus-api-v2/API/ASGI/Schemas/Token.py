#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""

[...]

"""

# =============================================================================
# Standard Library
# =============================================================================

import hmac
import base64

# =============================================================================
# Module Global Namespace
# =============================================================================

HMAC = hmac.HMAC

HEADER_DEFAULT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
PAYLOAD_DEFAULT = "eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
SIGNATURE_DEFAULT = "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

# =============================================================================
# Local Imports
# =============================================================================

from . import *

# =============================================================================
# API Schema Initialization
# =============================================================================

class Header(Scheme):
    """
    ...
    """
    
    Algorithm: String = Field("HS256", alias = "alg")
    Type: String = Field("JWT", alias = "typ")
    
    Decoded: {} = {
        "alg": Algorithm,
        "typ": Type
    }
    
    Encoded: Optional[String] = None

class Payload(Scheme):
    """
    ...
    """
    
    SHA: String = h
    
    Decoded: {} = {
        "sub": Algorithm,
        "name": Type,
        "iat": Expiration
    }
    
    Encoded: Optional[String] = None

class Signature(Scheme):
    """
    ...
    """

    Secret: Binary = String("8739554512e7687f883df83cd6ba8d8a874e04796fe1553bfcd7485504ccc7d064", encoding = "UTF-8")

    Hash: HMAC = HMAC(
        msg = base64.urlsafe_b64encode(
            bytes(Header.Encoded, encoding = "UTF-8")
        ) + base64.urlsafe_b64encode(
            bytes(Payload.Encoded, encoding = "UTF-8")
        ),
        key = bytes(Secret, encoding = "UTF-8")
    )

# =============================================================================
# Packaged Exportable(s)
# =============================================================================

__all__ = [
    "Header",
    "Payload",
    "Signature"
]
