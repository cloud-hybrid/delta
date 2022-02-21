mkdir -p /tmp/certs

cat > /tmp/certs/etcd-root-ca-csr.json <<EOF
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
  "CN": "Cloud-Technology-Nexus-CA"
}
EOF
cfssl gencert --initca=true /tmp/certs/etcd-root-ca-csr.json | cfssljson --bare /tmp/certs/etcd-root-ca

# verify
openssl x509 -in /tmp/certs/etcd-root-ca.pem -text -noout


# cert-generation configuration
cat > /tmp/certs/etcd-gencert.json <<EOF
{
  "signing": {
    "default": {
        "usages": [
          "signing",
          "key encipherment",
          "server auth",
          "client auth"
        ],
        "expiry": "87600h"
    }
  }
}
EOF
