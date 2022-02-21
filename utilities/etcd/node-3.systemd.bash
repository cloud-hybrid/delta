# after transferring certs to remote machines
mkdir -p ${HOME}/.nexus.etcd/certificates
cp /tmp/certs/* ${HOME}/.nexus.etcd/certificates


# make sure etcd process has write access to this directory
# remove this directory if the cluster is new; keep if restarting etcd
# rm -rf ${HOME}/.nexus.etcd/node-3/data


# to write service file for etcd
cat > /tmp/nexus-node-3.service <<EOF
[Unit]
Description=etcd
Documentation=https://github.com/coreos/etcd
Conflicts=etcd.service
Conflicts=etcd2.service

[Service]
Type=notify
Restart=always
RestartSec=5s
LimitNOFILE=40000
TimeoutStartSec=0

ExecStart=/tmp/test-etcd/etcd --name nexus-node-3 \
  --data-dir ${HOME}/.nexus.etcd/node-3/data \
  --listen-client-urls https://localhost:32379 \
  --advertise-client-urls https://localhost:32379 \
  --listen-peer-urls https://localhost:32380 \
  --initial-advertise-peer-urls https://localhost:32380 \
  --initial-cluster nexus-node-1=https://localhost:2380,nexus-node-2=https://localhost:22380,nexus-node-3=https://localhost:32380 \
  --initial-cluster-token nexus-node-3-token \
  --initial-cluster-state new \
  --auto-compaction-retention 1 \
  --client-cert-auth \
  --trusted-ca-file ${HOME}/.nexus.etcd/certificates/etcd-root-ca.pem \
  --cert-file ${HOME}/.nexus.etcd/certificates/certificate-3.pem \
  --key-file ${HOME}/.nexus.etcd/certificates/certificate-3.private.pem \
  --peer-client-cert-auth \
  --peer-trusted-ca-file ${HOME}/.nexus.etcd/certificates/etcd-root-ca.pem \
  --peer-cert-file ${HOME}/.nexus.etcd/certificates/certificate-3.pem \
  --peer-key-file ${HOME}/.nexus.etcd/certificates/certificate-3.private.pem \
  --enable-pprof \
  --debug

[Install]
WantedBy=multi-user.target
EOF
sudo mv /tmp/nexus-node-3.service /etc/systemd/system/nexus-node-3.service



# to start service
sudo systemctl daemon-reload
sudo systemctl cat nexus-node-3.service
sudo systemctl enable nexus-node-3.service
sudo systemctl start nexus-node-3.service

# to get logs from service
sudo systemctl status nexus-node-3.service -l --no-pager
sudo journalctl -u nexus-node-3.service -l --no-pager|less
sudo journalctl -f -u nexus-node-3.service

# to stop service
sudo systemctl stop nexus-node-3.service
sudo systemctl disable nexus-node-3.service
