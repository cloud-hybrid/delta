#!/bin/bash --posix

source "/etc/os-release"

# --> AWS Amazon Linux 1

[[ "${PRETTY_NAME}" == "Amazon Linux AMI 2018.03" ]] && declare TARGET="LINUX"

# --> AWS Amazon Linux 2

[[ "${PRETTY_NAME}" == "Amazon Linux 2" ]] && declare TARGET="LINUX-2"

# --> Fedora CentOS

[[ "${PRETTY_NAME}" == "CentOS Linux 7" ]] && declare TARGET="CENTOS-7"
[[ "${PRETTY_NAME}" == "CentOS Linux 8" ]] && declare TARGET="CENTOS-8"

# --> Debian

[[ "${PRETTY_NAME}" == "Debian GNU/Linux 7 (wheezy)" ]] && declare TARGET="DEBIAN-7"
[[ "${PRETTY_NAME}" == "Debian GNU/Linux 8 (jessie)" ]] && declare TARGET="DEBIAN-8"
[[ "${PRETTY_NAME}" == "Debian GNU/Linux 9 (stretch)" ]] && declare TARGET="DEBIAN-9"

# --> Debian Ubuntu

[[ "${PRETTY_NAME}" == "Ubuntu 12.04 LTS" ]] && declare TARGET="PANGOLIN"
[[ "${PRETTY_NAME}" == "Ubuntu 14.04 LTS" ]] && declare TARGET="TAHR"
[[ "${PRETTY_NAME}" == "Ubuntu 16.04 LTS" ]] && declare TARGET="XENIAL"
[[ "${PRETTY_NAME}" == "Ubuntu 18.04 LTS" ]] && declare TARGET="BIONIC"
[[ "${PRETTY_NAME}" == "Ubuntu 20.04 LTS" ]] && declare TARGET="FOCAL"

echo "${TARGET}"
