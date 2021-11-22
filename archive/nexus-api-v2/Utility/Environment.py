#!/usr/bin/env python
import ctypes
import functools
import os


_environ = None


def get_libc_environb_items():
    """Get envvars from C environ as bytestrings (unsplit on b'=')."""
    global _environ
    if _environ is None:
        libc = ctypes.CDLL(None)
        _environ = ctypes.POINTER(ctypes.c_char_p).in_dll(libc, 'environ')
    return iter(functools.partial(next, iter(_environ)), None)


def get_libc_environb():
    """Get a copy of C environ as a key,value mapping of bytestrings."""
    return dict(k_v.split(b'=', 1) for k_v in get_libc_environb_items()
                if b'=' in k_v)  # like CPython



def get_libc_environ():
    """Get a copy of C environ as a key,value mapping of strings."""
    environb = get_libc_environb()
    # XXX sys.getfilesystemencoding()+'surrogateescape'
    fsdecode = getattr(os, 'fsdecode', None)
    if fsdecode is None:  # Python 2
        return environb  # keep bytestrings as is (`str` type)
    else:  # Python 3, decode to Unicode
        return {fsdecode(k): fsdecode(v) for k, v in environb.items()}


def synchronize_environ():
    """Synchronize os.environ with C environ."""
    libc_environ = get_libc_environ()
    os.environ.clear()
    os.environ.update(libc_environ)
