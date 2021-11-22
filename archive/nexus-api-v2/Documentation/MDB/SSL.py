import os

import os.path

import sys
import ssl
import stat
import shutil
import subprocess

SSL = shutil.which("openssl")

assert SSL is not None

command = shlex.split(SSL + + " " + "version")

Process = subprocess.Popen(
    args = command,
    shell = False,
    stdin = subprocess.PIPE,
    stdout = subprocess.PIPE,
    stderr = subprocess.PIPE
)

Process = Process.split(" ").pop().split(".")

assert int(Process[0]) >= 2

STAT_0o775 = ( stat.S_IRUSR | stat.S_IWUSR | stat.S_IXUSR
             | stat.S_IRGRP | stat.S_IWGRP | stat.S_IXGRP
             | stat.S_IROTH |                stat.S_IXOTH )

def main():
    openssl_dir, openssl_cafile = os.path.split(
        ssl.get_default_verify_paths().openssl_cafile)

    subprocess.check_call([sys.executable,
        "-E", "-s", "-m", "pip", "install", "--upgrade", "certifi"])

    import certifi

    os.chdir(openssl_dir)
    relpath_to_certifi_cafile = os.path.relpath(certifi.where())
    print(" -- Clearing Previous Certificate Symbolic(s)")

    try:
        os.remove(openssl_cafile)
    except FileNotFoundError as Error:
        print("Warning", Error)

    print(" -- Creating Symbolic-Link to Certificate Bundle")
    os.symlink(relpath_to_certifi_cafile, openssl_cafile)
    print(" -- Setting Permissions")
    os.chmod(openssl_cafile, STAT_0o775)
    print(" -- Update Completed Successfully")

if __name__ == "__main__":
    main()
