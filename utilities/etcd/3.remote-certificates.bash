function node-1 () {
mkdir -p /tmp/certs

# 10.0.0.x are remote ip addresses

mkdir -p /tmp/certs

cat > /tmp/certs/nexus-node-1-ca-csr.json <<EOF
{
  "key": {
    "algo": "rsa",
    "size": 4192
  },
  "names": [
    {
      "O": "Cloud-Technology LLC",
      "OU": "Security",
      "L": "Minneapolis",
      "ST": "Minnesota",
      "C": "USA"
    }
  ],
  "CN": "nexus-node-1",
  "hosts": [
    "127.0.0.1",
    "localhost"
  ]
}
EOF
mkdir -p /tmp/certs

cat > /tmp/certs/nexus-node-1-ca-csr.json <<EOF
{
  "key": {
    "algo": "rsa",
    "size": 4192
  },
  "names": [
    {
      "O": "Cloud-Technology LLC",
      "OU": "Security",
      "L": "Minneapolis",
      "ST": "Minnesota",
      "C": "USA"
    }
  ],
  "CN": "nexus-node-1",
  "hosts": [
    "127.0.0.1",
    "localhost"
  ]
}
EOF
cfssl gencert \
  --ca /tmp/certs/etcd-root-ca.pem \
  --ca-key /tmp/certs/etcd-root-ca-key.pem \
  --config /tmp/certs/etcd-gencert.json \
  /tmp/certs/nexus-node-1-ca-csr.json | cfssljson --bare /tmp/certs/nexus-node-1

# verify
openssl x509 -in /tmp/certs/nexus-node-1.pem -text -noout
}

function node-2 () {
mkdir -p /tmp/certs

cat > /tmp/certs/nexus-node-2-ca-csr.json <<EOF
{
  "key": {
    "algo": "rsa",
    "size": 4192
  },
  "names": [
    {
      "O": "Cloud-Technology LLC",
      "OU": "Security",
      "L": "Minneapolis",
      "ST": "Minnesota",
      "C": "USA"
    }
  ],
  "CN": "nexus-node-2",
  "hosts": [
    "127.0.0.1",
    "localhost"
  ]
}
EOF
cfssl gencert \
  --ca /tmp/certs/etcd-root-ca.pem \
  --ca-key /tmp/certs/etcd-root-ca-key.pem \
  --config /tmp/certs/etcd-gencert.json \
  /tmp/certs/nexus-node-2-ca-csr.json | cfssljson --bare /tmp/certs/nexus-node-2

# verify
openssl x509 -in /tmp/certs/nexus-node-2.pem -text -noout
}

function node-3 () {
mkdir -p /tmp/certs

cat > /tmp/certs/nexus-node-3-ca-csr.json <<EOF
{
  "key": {
    "algo": "rsa",
    "size": 4192
  },
  "names": [
    {
      "O": "Cloud-Technology LLC",
      "OU": "Security",
      "L": "Minneapolis",
      "ST": "Minnesota",
      "C": "USA"
    }
  ],
  "CN": "nexus-node-3",
  "hosts": [
    "127.0.0.1",
    "localhost"
  ]
}
EOF
cfssl gencert \
  --ca /tmp/certs/etcd-root-ca.pem \
  --ca-key /tmp/certs/etcd-root-ca-key.pem \
  --config /tmp/certs/etcd-gencert.json \
  /tmp/certs/nexus-node-3-ca-csr.json | cfssljson --bare /tmp/certs/nexus-node-3

# verify
openssl x509 -in /tmp/certs/nexus-node-3.pem -text -noout
}

node-1
node-2
node-3

[[ $(command -v tree) ]] && tree ${HOME}/.nexus.etcd || true
[[ $(command -v tree) ]] || ls -lahr ${HOME}/.nexus.etcd || true
[[ $(command -v tree) ]] || ls -lahr ${HOME}/.nexus.etcd/certificates || true
