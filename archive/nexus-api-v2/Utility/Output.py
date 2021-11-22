import os
import sys
import shlex
import shutil
import subprocess
import dataclasses

@dataclasses.dataclass()
class Console:
    TTY: bool = sys.stdout.isatty()

    def Header(self, input: str):
        if self.TTY:
            sys.stdout.flush()

            sys.stdout.write("\n")
            sys.stdout.write("-" * os.get_terminal_size()[0] + "\n")
            sys.stdout.write("\n" + "{0}".center(
                os.get_terminal_size()[0], " "
            ).format(input) + "\n")
            sys.stdout.write("-" * os.get_terminal_size()[0] + "\n")
            sys.stdout.write("\n")

            sys.stdout.flush()
        else:
            sys.stderr.flush()
            sys.stderr.write("[Error] - TTY Device Not Found" + "\n")
            sys.stderr.flush()
