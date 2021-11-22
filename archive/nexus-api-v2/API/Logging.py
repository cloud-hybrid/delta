""" ... """

import os
import logging
import textwrap

# =============================================================================
# Module Definitions
# =============================================================================

__module__ = "Logging"

# =============================================================================
# Normalizing
# =============================================================================

# =============================================================================
# System Path(s)
# =============================================================================

# =============================================================================
# Local Imports
# =============================================================================

# =============================================================================
# Type Declarations & Importable(s)
# =============================================================================

from logging import handlers

logger = logging.getLogger(__module__)

# =============================================================================
# Class Initialization + Module Entry-Point
# =============================================================================

import threading

import asyncio


class Log:
    """
    Formatting Log Messages:
        Formatter instances are used to convert a LogRecord to text.

        Formatters need to know how a LogRecord is constructed. They are
        responsible for converting a LogRecord to (usually) a string which can
        be interpreted by either a human or an external system. The base Formatter
        allows a formatting string to be specified. If none is supplied, the
        the style-dependent default value, "%(message)s", "{message}", or
        "${message}", is used.

        The Formatter can be initialized with a format string which makes use of
        knowledge of the LogRecord attributes - e.g. the default value mentioned
        above makes use of the fact that the user's message and arguments are pre-
        formatted into a LogRecord's message attribute. Currently, the useful
        attributes in a LogRecord are described by:

        %(name)s            Name of the logger (logging channel)
        %(levelno)s         Numeric logging level for the message (DEBUG, INFO,
                            WARNING, ERROR, CRITICAL)
        %(levelname)s       Text logging level for the message ("DEBUG", "INFO",
                            "WARNING", "ERROR", "CRITICAL")
        %(pathname)s        Full pathname of the source file where the logging
                            call was issued (if available)
        %(filename)s        Filename portion of pathname
        %(module)s          Module (name portion of filename)
        %(lineno)d          Source line number where the logging call was issued
                            (if available)
        %(funcName)s        Function name
        %(created)f         Time when the LogRecord was created (time.time()
                            return value)
        %(asctime)s         Textual time when the LogRecord was created
        %(msecs)d           Millisecond portion of the creation time
        %(relativeCreated)d Time in milliseconds when the LogRecord was created,
                            relative to the time the logging module was loaded
                            (typically at application startup time)
        %(thread)d          Thread ID (if available)
        %(threadName)s      Thread name (if available)
        %(process)d         Process ID (if available)
        %(message)s         The result of record.getMessage(), computed just as
                            the record is emitted

    Attributes:
        __meta__ (str):                         ...
            [Extended-Description ...]
        __name__ (logger.name):                ...
            [Extended-Description ...
        __level__ (logger.level):              ...
            [Extended-Description ...
        __parent__ (logger.parent):            ...
            [Extended-Description ...
        __propagation__ (logger.propagate):    ...
            [Extended-Description ...
        __handlers__ (logger.handlers):        ...
            [Extended-Description ...
        __disabled__ (logger.disabled):        ...
            [Extended-Description ...
        __fatal__ (logger.fatal):              ...
            [Extended-Description ...
        __filters__ (logger.filters):          ...
            [Extended-Description ...

    Description:
        Logging Levels (Key: Flag):
            - 50: CRITICAL
            - 40: ERROR
            - 30: WARNING
            - 20: INFO
            - 10: DEBUG
            - 0:  NOTSET

        Logging Handlers (`logging.Handler.[Sub-Type]`):
            - `StreamHandler`: Instances send messages to streams (file-like objects).
            - `FileHandler`: Instances send messages to disk files.
            - `BaseRotatingHandler`: Is the base class for handlers that rotate log files at a certain point. It is not meant to be instantiated directly. Instead, use RotatingFileHandler or TimedRotatingFileHandler.
            - `RotatingFileHandler`: Instances send messages to disk files, with support for maximum log file sizes and log file rotation.
            - `TimedRotatingFileHandler`: Instances send messages to disk files, rotating the log file at certain timed intervals.
            - `SocketHandler`: Instances send messages to TCP/IP sockets. Since 3.4, Unix domain sockets are also supported.
            - `DatagramHandler`: Instances send messages to UDP sockets. Since 3.4, Unix domain sockets are also supported.
            - `SMTPHandler`: Instances send messages to a designated email address.
            - `SysLogHandler`: Instances send messages to a Unix syslog daemon, possibly on a remote machine.
            - `NTEventLogHandler`: Instances send messages to a Windows NT/2000/XP event log.
            - `MemoryHandler`: Instances send messages to a buffer in memory, which is flushed whenever specific criteria are met.
            - `HTTPHandler`: Instances send messages to an HTTP server using either GET or POST semantics.
            - `WatchedFileHandler`: Instances watch the file they are logging to. If the file changes, it is closed and reopened using the file name. This handler is only useful on Unix-like systems; Windows does not support the underlying mechanism used.
            - `QueueHandler`: Instances send messages to a queue, such as those implemented in the queue or multiprocessing modules.
            - `NullHandler`: Instances do nothing with error messages. They are used by library developers who want to use logging, but want to avoid the ‘No handlers could be found for logger XXX’ message which can be displayed if the library user has not configured logging. See Configuring Logging for a Library for more information.

        Public `__slots__` Value(s):
            >>> __slots__: tuple = (
            ...     "Module",
            ...     "Verbosity",
            ...     "Name",
            ...     "Parent",
            ...     "Propagate",
            ...     "Handlers",
            ...     "Disabled",
            ...     "Fatal",
            ...     "Filters",
            ...
            ...     "__meta__",
            ...     "__level__",
            ...     "__name__",
            ...     "__parent__",
            ...     "__propagation__",
            ...     "__handlers__",
            ...     "__disabled__",
            ...     "__fatal__",
            ...     "__filters__",
            ...     "__directory__"
            ... )
    """

    __meta__: str = __module__

    __name__: logger.name = logger.name

    __level__: logger.level = logger.level
    __parent__: logger.parent = logger.parent
    __propagation__: logger.propagate = logger.propagate
    __handlers__: logger.handlers = logger.handlers
    __disabled__: logger.disabled = logger.disabled
    __fatal__: logger.fatal = logger.fatal
    __filters__: logger.filters = logger.filters

    __directory__: str = os.path.abspath(
        os.path.dirname(__file__) + os.sep + os.pardir + os.sep + os.pardir)

    IO = logger

    Loggers = []

    __slots__ = ("Module", "Verbosity", "Logger", "Name", "File", "Parent", "Propagate", "Handlers",
                 "Disabled", "Fatal", "IO"

                                      "Name",  # --> @Task: Update Docstring
                 "Data",  # --> @Task: Update Docstring
    )

    def __init__(self, name: __name__ = __name__, verbosity: __level__ = __level__,
        propagate: __propagation__ = __propagation__, disabled: __disabled__ = __disabled__,
        fatal: __fatal__ = __fatal__, filename: str = os.path.abspath(os.path.dirname(__file__))
            + os.sep + os.pardir + os.sep + "Nexus-API-Log.YAML", filters = None, *argv,
        **kwargs):
        self.Module = Log.__module__

        self.Verbosity = Log.__level__
        self.Parent = Log.__parent__
        self.Handlers = Log.__handlers__

        self.Name = name
        self.Propagate = propagate
        self.Disabled = disabled
        self.Fatal = fatal
        self.Data: {} = {"Filters": filters if filters is not None else filters}

        self.Logger = logging.getLogger()
        self.Logger.setLevel(logging.DEBUG) # @TASK !!!
        # self.File = logging.handlers.RotatingFileHandler(filename = filename, encoding = "UTF-8",
        #     mode = "wb+", maxBytes = 250 * 1024 * 1024, backupCount = 1)
        #
        # self.File.setFormatter(logging.Formatter(textwrap.dedent("""\
        #     Name: "%(name)s"
        #     Message: |
        #         %(message)s
        #     Time: "%(asctime)s"
        #     Level: [ "%(levelname)s", %(levelno)d ]
        #     System:
        #         File: "%(filename)s"
        #         Path: "%(pathname)s"
        #         Module: "%(module)s"
        #         Line: %(lineno)d
        #         Function: "%(funcName)s"
        #     Kernel:
        #         Thread: %(thread)d
        #         Thread-Name: "%(threadName)s"
        #         Process: %(process)d
        #
        #     ---
        #     """)))
        #
        # self.Logger.addHandler(self.File)

        # map(lambda Function: Function(), self.Loggers)

    @property
    def Directory(self): return self.__directory__

    @property
    def Filters(self): return self.Data["Filters"]

# Log = asyncio.threads.to_thread(Log())

__all__ = ["Log"]
