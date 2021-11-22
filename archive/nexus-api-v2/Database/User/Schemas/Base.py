# #!/usr/bin/env python3
#
# # -*- Coding: UTF-8 -*- #
# # -*- System: Linux -*- #
# # -*- Usage:  *.py  -*- #
#
# # Owner:    Jacob B. Sanders
# # Source:   code.cloud-technology.io
# # License:  BSD 2-Clause License
#
# """
# ...
# """
#
# import dataclasses
#
# # import ujson
# import json
#
# from . import *
#
# __module__ = __name__
#
# # Serialization = {
# #     "skipkeys":               False,
# #     "ensure_ascii":           False,
# #     "check_circular":         False,
# #     "allow_nan":              True,
# #     "indent":                 4,
# #     "separators":             (", ", ": "),
# #     "sort_keys":              False,
# #     "encode_html_chars":      False,
# #     "escape_forward_slashes": False,
# #     "reject_bytes": False
# # }
#
# Serialization = {
#     "skipkeys":               False,
#     "ensure_ascii":           False,
#     "check_circular":         False,
#     "allow_nan":              True,
#     "indent":                 4,
#     "separators":             (", ", ": "),
#     "sort_keys":              False,
#     # "encode_html_chars":      False,
#     # "escape_forward_slashes": False,
#     # "reject_bytes": False
# }
#
# # Dump = lambda JSON: ujson.dumps(JSON, **Serialization)
# Dump = lambda JSON: json.dumps(JSON, **Serialization)
# # Load = lambda JSON: ujson.loads(JSON, **Serialization)
# Load = lambda JSON: json.loads(JSON, **Serialization)
#
# # Scheme = Scheme()
#
# # Scheme.Config.orm_mode = True
# #
# # Scheme.Config.title = "{0}".format(__module__)
# #
# # Scheme.Config.json_loads = ujson.loads
# # Scheme.Config.json_dumps = lambda JSON: ujson.dumps(JSON, **Serialization)
# # Scheme.Config.json_encoders = lambda JSON: ujson.encode(JSON, **Serialization)
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
#         title = "{0}".format(__module__)
#
#         orm_mode = True
#
#         allow_population_by_field_name = True
#
#         json_loads = Load
#         json_dumps = Dump
#
# __all__ = [
#     "Model",
#     "Serialization"
# ]
