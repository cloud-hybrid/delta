#!/usr/bin/env python3

# -*- Coding: UTF-8 -*- #
# -*- System: Linux -*- #
# -*- Usage:  *.py  -*- #

# Owner:    Jacob B. Sanders
# Source:   code.cloud-technology.io
# License:  BSD 2-Clause License

"""
...
"""

# import Database.AGILE.Interfaces.Synopsis.API

# AGILE = {
#     "Synopsis": Database.AGILE.Interfaces.Synopsis.API
# }

import Database.Business.Interfaces.Company.API
import Database.Business.Interfaces.Unit.API

Business = {
    "Company":  Database.Business.Interfaces.Company.API,
    "Unit":     Database.Business.Interfaces.Unit.API
}

# import Database.CMS.Interfaces.Discord.API
# import Database.CMS.Interfaces.General.API

# CMS = {
#     "Discord":  Database.CMS.Interfaces.Discord.API,
#     "General":  Database.CMS.Interfaces.General.API
# }

# import Database.Server.Interfaces.Server.API

# Server = {
#     "Server":   Database.Server.Interfaces.Server.API
# }

import Database.User.Interfaces.User.API
import Database.User.Interfaces.Note.API

User = {
    "User": Database.User.Interfaces.User.API,
    "Note": Database.User.Interfaces.Note.API
}

# import Database.Web.Interfaces.Website.API
# import Database.Web.Interfaces.Breadcrumb.API

# Web = {
#     "Website": Database.Web.Interfaces.Website.API,
#     "Breadcrumb": Database.Web.Interfaces.Breadcrumb.API
# }

Exports = {
    # "AGILE":    AGILE,
    "Business": Business,
    # "CMS":      CMS,
    # "Server":   Server,
    "User":     User,
    # "Web":      Web
}

__all__ = [
    "Exports"
]
