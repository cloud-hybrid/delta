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

import dataclasses

from . import *

__module__ = __name__

Serialization = {
    "skipkeys":               True,
    "ensure_ascii":           False,
    "check_circular":         True,
    "allow_nan":              True,
    "indent":                 4,
    "separators":             (", ", ": "),
    "sort_keys":              True
    # "encode_html_chars":      True,
    # "escape_forward_slashes": False
}

Dump = lambda _: JSON.dumps(_, **Serialization)

class Model(Scheme):
    """
    ...
    """

    class Configuration(Scheme.Config):
        """
        ...
        """

        title = "{0}".format(__module__)

        orm_mode = True

        allow_population_by_field_name = True

        json_loads = JSON.loads
        json_dumps = Dump


        anystr_strip_whitespace = Scheme.Config.anystr_strip_whitespace

        min_anystr_length = Scheme.Config.min_anystr_length
        max_anystr_length = Scheme.Config.max_anystr_length
        validate_all = Scheme.Config.validate_all
        extra = Scheme.Config.extra
        allow_mutation = Scheme.Config.allow_mutation

        use_enum_values = Scheme.Config.use_enum_values
        fields = Scheme.Config.fields
        validate_assignment = Scheme.Config.validate_assignment
        error_msg_templates = Scheme.Config.error_msg_templates
        arbitrary_types_allowed = True

        getter_dict = Scheme.Config.getter_dict
        alias_generator = Scheme.Config.alias_generator
        keep_untouched = Scheme.Config.keep_untouched
        schema_extra = Scheme.Config.schema_extra

        json_encoders = Scheme.Config.json_encoders
        underscore_attrs_are_private = False

__all__ = [
    "Model"
]
