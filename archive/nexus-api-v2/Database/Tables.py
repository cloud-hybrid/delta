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

# =============================================================================
# Website (Site) Table(s)
# =============================================================================

# import Database.Web.Models.Website
# import Database.Web.Models.Breadcrumb
# import Database.Web.Models.Route

# Web = {
#     "Website":      Database.Web.Models.Website.Meta,
#     "Breadcrumb":   Database.Web.Models.Breadcrumb.Meta,
#     "Route":        Database.Web.Models.Route.Meta,
# }

# =============================================================================
# Database AGILE Table(s)
# =============================================================================

# import Database.AGILE.Models.Note
# import Database.AGILE.Models.Synopsis

# AGILE = {
#     "Note":     Database.AGILE.Models.Note.Meta,
#     "Synopsis": Database.AGILE.Models.Synopsis.Meta
# }

# =============================================================================
# Database Business Table(s)
# =============================================================================

# import Database.Business.Models.Company
# import Database.Business.Models.Unit

# Business = {
#     "Company":  Database.Business.Models.Company.Meta,
#     "Unit":     Database.Business.Models.Unit.Meta
# }

# =============================================================================
# Database CMS Table(s)
# =============================================================================

# import Database.CMS.Models.Discord
# import Database.CMS.Models.General

# CMS = {
#     "Discord":  Database.CMS.Models.Discord.Meta,
#     "General":     Database.CMS.Models.General.Meta
# }

# =============================================================================
# Database Server Table(s)
# =============================================================================

# import Database.Server.Models.Server

# Server = {
#     "Server":  Database.Server.Models.Server.Meta
# }

# =============================================================================
# Database Discord Table(s)
# =============================================================================

# import Database.Discord.Models.Avatar
# import Database.Discord.Models.JSON
# import Database.Discord.Models.Note
# import Database.Discord.Models.Role
# import Database.Discord.Models.User

# Discord = {
#     "Avatar":   Database.Discord.Models.Avatar.Meta,
#     "JSON":     Database.Discord.Models.JSON.Meta,
#     "Note":     Database.Discord.Models.Note.Meta,
#     "Role":     Database.Discord.Models.Role.Meta,
#     "User":     Database.Discord.Models.User.Meta
# }

# =============================================================================
# Database User Table(s)
# =============================================================================

import Database.User.Models.Name
import Database.User.Models.Nexus
import Database.User.Models.Note
import Database.User.Models.Verification

User = {
    "Name":             Database.User.Models.Name.Meta,
    "Nexus":            Database.User.Models.Nexus.Meta,
    "Note":             Database.User.Models.Note.Meta,
    "Verification":     Database.User.Models.Verification.Meta
}

# =============================================================================
# Associative Table(s)
# =============================================================================

# import Database.Association

# Association = {
#     "UCA":      Database.Association.UCA.Meta(),
#     "UBUA":     Database.Association.UBUA.Meta()
# }

# =============================================================================
# Package Exportable(s) & Metadata
# =============================================================================

Exports = {
    # "AGILE": Database.AGILE.Models,
    # "Business": Database.Business.Models,
    # "CMS": Database.CMS.Models,
    # "Server": Database.Server.Models,
    # "Discord": Database.Discord.Models,
    "User": Database.User.Models,
    # "Web": Database.Web.Models
    # ... "Associative": Database.Association
}

Meta = [
    # Web,
    # AGILE,
    # Business,
    # CMS,
    # Server,
    # Discord,
    User,
    # Association
]

__all__ = [ "Exports", "Meta" ]
