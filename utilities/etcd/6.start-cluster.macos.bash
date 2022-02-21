# make sure etcd process has write access to this directory
# remove this directory if the cluster is new; keep if restarting etcd
rm -rf ${HOME}/.nexus.etcd/node-1/data


/usr/local/bin/etcd --name nexus-node-1 \
  --data-dir ${HOME}/.nexus.etcd/node-1/data \
  --listen-client-urls https://localhost:12379 \
  --advertise-client-urls https://localhost:12379 \
  --listen-peer-urls https://localhost:12380 \
  --initial-advertise-peer-urls https://localhost:12380 \
  --initial-cluster nexus-node-1=https://localhost:12380,nexus-node-2=https://localhost:22380,nexus-node-3=https://localhost:32380 \
  --initial-cluster-token nexus-secret-cluster-token \
  --initial-cluster-state new \
  --auto-compaction-retention 1 \
  --client-cert-auth \
  --trusted-ca-file ${HOME}/.nexus.etcd/certificates/etcd-root-ca.pem \
  --cert-file ${HOME}/.nexus.etcd/certificates/nexus-node-1.pem \
  --key-file ${HOME}/.nexus.etcd/certificates/nexus-node-1-key.pem \
  --peer-client-cert-auth \
  --peer-trusted-ca-file ${HOME}/.nexus.etcd/certificates/etcd-root-ca.pem \
  --peer-cert-file ${HOME}/.nexus.etcd/certificates/nexus-node-1.pem \
  --peer-key-file ${HOME}/.nexus.etcd/certificates/nexus-node-1-key.pem \
  --enable-pprof &

# sudo security -v add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${HOME}/.nexus.etcd/certificates/etcd-root-ca.pem"
# sudo security -v add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "${HOME}/.nexus.etcd/certificates/nexus-node-1.pem"


# make sure etcd process has write access to this directory
# remove this directory if the cluster is new; keep if restarting etcd
#
rm -rf ${HOME}/.nexus.etcd/node-2/data


/usr/local/bin/etcd --name nexus-node-2 \
  --data-dir ${HOME}/.nexus.etcd/node-2/data \
  --listen-client-urls https://localhost:22379 \
  --advertise-client-urls https://localhost:22379 \
  --listen-peer-urls https://localhost:22380 \
  --initial-advertise-peer-urls https://localhost:22380 \
  --initial-cluster nexus-node-1=https://localhost:12380,nexus-node-2=https://localhost:22380,nexus-node-3=https://localhost:32380 \
  --initial-cluster-token nexus-secret-cluster-token \
  --initial-cluster-state new \
  --auto-compaction-retention 1 \
  --client-cert-auth \
  --trusted-ca-file ${HOME}/.nexus.etcd/certificates/etcd-root-ca.pem \
  --cert-file ${HOME}/.nexus.etcd/certificates/nexus-node-2.pem \
  --key-file ${HOME}/.nexus.etcd/certificates/nexus-node-2-key.pem \
  --peer-client-cert-auth \
  --peer-trusted-ca-file ${HOME}/.nexus.etcd/certificates/etcd-root-ca.pem \
  --peer-cert-file ${HOME}/.nexus.etcd/certificates/nexus-node-2.pem \
  --peer-key-file ${HOME}/.nexus.etcd/certificates/nexus-node-2-key.pem \
  --enable-pprof &

## after transferring certs to remote machines
#mkdir -p ${HOME}/.nexus.etcd/certificates
#cp /tmp/certs/* ${HOME}/.nexus.etcd/certificates


# make sure etcd process has write access to this directory
# remove this directory if the cluster is new; keep if restarting etcd
rm -rf ${HOME}/.nexus.etcd/node-3/data


/usr/local/bin/etcd --name nexus-node-3 \
  --data-dir ${HOME}/.nexus.etcd/node-3/data \
  --listen-client-urls https://localhost:32379 \
  --advertise-client-urls https://localhost:32379 \
  --listen-peer-urls https://localhost:32380 \
  --initial-advertise-peer-urls https://localhost:32380 \
  --initial-cluster nexus-node-1=https://localhost:12380,nexus-node-2=https://localhost:22380,nexus-node-3=https://localhost:32380 \
  --initial-cluster-token nexus-secret-cluster-token \
  --initial-cluster-state new \
  --auto-compaction-retention 1 \
  --client-cert-auth \
  --trusted-ca-file ${HOME}/.nexus.etcd/certificates/etcd-root-ca.pem \
  --cert-file ${HOME}/.nexus.etcd/certificates/nexus-node-3.pem \
  --key-file ${HOME}/.nexus.etcd/certificates/nexus-node-3-key.pem \
  --peer-client-cert-auth \
  --peer-trusted-ca-file ${HOME}/.nexus.etcd/certificates/etcd-root-ca.pem \
  --peer-cert-file ${HOME}/.nexus.etcd/certificates/nexus-node-3.pem \
  --peer-key-file ${HOME}/.nexus.etcd/certificates/nexus-node-3-key.pem \
  --enable-pprof &

ETCDCTL_API=3 /usr/local/bin/etcdctl \
  --endpoints localhost:12379,localhost:22379,localhost:32379 \
  --cacert ${HOME}/.nexus.etcd/certificates/etcd-root-ca.pem \
  --cert ${HOME}/.nexus.etcd/certificates/nexus-node-1.pem \
  --key ${HOME}/.nexus.etcd/certificates/nexus-node-1-key.pem \
  endpoint health