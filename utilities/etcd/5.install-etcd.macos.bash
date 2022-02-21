ETCD_VER=v3.5.2

# choose either URL
GOOGLE_URL=https://storage.googleapis.com/etcd
GITHUB_URL=https://github.com/coreos/etcd/releases/download
DOWNLOAD_URL=${GITHUB_URL}

rm -f /tmp/etcd-${ETCD_VER}-darwin-amd64.zip
rm -rf /tmp/test-etcd && mkdir -p /tmp/test-etcd

rm -rf /tmp/etcd-*

curl -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-darwin-amd64.zip -o /tmp/etcd-${ETCD_VER}-darwin-amd64.zip
unzip /tmp/etcd-${ETCD_VER}-darwin-amd64.zip -d /tmp/etcd-installation
rm -rf ${HOME}/.nexus.etcd/etcd-binaries
mkdir -p ${HOME}/.nexus.etcd/etcd-binaries
mv /tmp/etcd-installation/etcd* ${HOME}/.nexus.etcd/etcd-binaries

sudo mkdir -p /usr/local/bin/ && sudo cp -rf ${HOME}/.nexus.etcd/etcd-binaries/**/etcd* /usr/local/bin/

etcd --version
ETCDCTL_API=3 etcdctl version
