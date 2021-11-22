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
#
# import dataclasses
#
# from . import *
#
# __module__ = __name__
#
# Serialization = {
#     "skipkeys": True,
#     "ensure_ascii": False,
#     "check_circular": True,
#     "allow_nan": True,
#     "indent": 4,
#     "separators": (", ", ": "),
#     "sort_keys": True,
#     "encode_html_chars": True,
#     "escape_forward_slashes": False
# }
#
# Dump = lambda _: JSON.dumps(_, **Serialization)
#
# class Model(Scheme):
#     """
#     ...
#     """
#
#     class Configuration(Scheme.Config):
#         """
#         ...
#         """
#
#         orm_mode = True
#
#         allow_population_by_field_name = True
#
#         json_loads = JSON.loads
#         json_dumps = Dump
#
#         @property
#         def settings(self):
#             """
#             ...
#             """
#
#             return {
#                 "title": self.title,
#                 "orm_mode": self.orm_mode,
#                 "allow_population_by_field_name": self.allow_population_by_field_name,
#                 "json_loads": self.json_loads,
#                 "json_dumps": self.json_dumps
#             }
#
# __all__ = [
#     "Model"
# ]
