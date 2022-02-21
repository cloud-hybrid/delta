brew install cfssl

rm -f "${HOME}/.nexus.etcd/certificates"* && rm -rf /tmp/certs && mkdir -p "${HOME}/.nexus.etcd/certificates"

curl -L https://pkg.cfssl.org/R1.2/cfssl_darwin-amd64 -o "${HOME}/.nexus.etcd/cfssl"
chmod +x "${HOME}/.nexus.etcd/cfssl"
sudo mv "${HOME}/.nexus.etcd/cfssl" /usr/local/bin/cfssl

curl -L https://pkg.cfssl.org/R1.2/cfssljson_darwin-amd64 -o "${HOME}/.nexus.etcd/cfssljson"
chmod +x "${HOME}/.nexus.etcd/cfssljson"
sudo mv "${HOME}/.nexus.etcd/cfssljson" /usr/local/bin/cfssljson

/usr/local/bin/cfssl version
/usr/local/bin/cfssljson -h

mkdir -p "${HOME}/.nexus.etcd/certificates"
