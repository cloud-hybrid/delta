import os
import sys

Directory = os.path.dirname(sys.modules["API"].__file__)
Canonical = os.path.abspath(Directory)
