import os

import ssl
import sys
import stat

import subprocess

global UMASK

UMASK = (       stat.S_IRUSR | stat.S_IWUSR | stat.S_IXUSR
             |  stat.S_IRGRP | stat.S_IWGRP | stat.S_IXGRP
             |  stat.S_IROTH |                stat.S_IXOTH
        )

def main():
    openssl_dir, openssl_cafile = os.path.split(
        ssl.get_default_verify_paths().openssl_cafile
    )

    sys.stdout.write("[Nexus-API]: Upgrading Certificate Service ➜ ")
    sys.stdout.flush()

    Process = subprocess.Popen([
        sys.executable, "-E", "-s", "-m",
            "pip", "install", "--upgrade", "certifi"
        ], shell = False,
        stderr = subprocess.PIPE,
        stdin = subprocess.PIPE,
        stdout = subprocess.PIPE,
        encoding = "UTF-8"
    )

    while Process.poll(): Process.wait(30)

    sys.stdout.write("Done" + "\n")
    sys.stdout.flush()

    sys.stdout.write("[Nexus-API]: Attempting Import ➜ ")
    sys.stdout.flush()

    import certifi

    os.chdir(openssl_dir)
    relpath_to_certifi_cafile = os.path.relpath(certifi.where())

    sys.stdout.write("Successful" + "\n")
    sys.stdout.flush()

    sys.stdout.write("[Nexus-API]: Removing Previous Certificate ➜ ")
    sys.stdout.flush()

    try: os.remove(os.path.join(openssl_dir, openssl_cafile))
    except Exception as Error: ...
    finally:
        sys.stdout.write("Removed Certificate Authority" + "\n")
        sys.stdout.flush()

        sys.stdout.write("[Nexus-API]: Linking Certificate Bundle ➜ ")
        sys.stdout.flush()

        try: os.symlink(relpath_to_certifi_cafile, os.path.join(openssl_dir, openssl_cafile))
        except FileExistsError: ...
        finally:
            sys.stdout.write("Symbolics Linked" + "\n")
            sys.stdout.flush()

            sys.stdout.write("[Nexus-API]: Setting Permissions ➜ ")
            sys.stdout.flush()

            os.chmod(openssl_cafile, UMASK)

        sys.stdout.write("%i" % UMASK + " " + "(0755)" + "\n")
        sys.stdout.flush()

if __name__ == "__main__":
    main()
