function compilation () {
    GO_VERSION=1.10.3

    sudo rm -f /usr/local/go/bin/go && sudo rm -rf /usr/local/go

    GOOGLE_URL=https://storage.googleapis.com/golang
    DOWNLOAD_URL=${GOOGLE_URL}

    sudo curl -s ${DOWNLOAD_URL}/go$GO_VERSION.linux-amd64.tar.gz | sudo tar -v -C /usr/local/ -xz

    if grep -q GOPATH "$(echo ${HOME})/.bashrc"; then
      echo "bashrc already has GOPATH";
    else
      echo "adding GOPATH to bashrc";
      echo "export GOPATH=$(echo ${HOME})/go" >> ${HOME}/.bashrc;
      PATH_VAR=$PATH":/usr/local/go/bin:$(echo ${HOME})/go/bin";
      echo "export PATH=$(echo $PATH_VAR)" >> ${HOME}/.bashrc;
      source ${HOME}/.bashrc;
    fi

    mkdir -p $GOPATH/bin/
    go version
}

function sources () {
    if [[ "${GOPATH}" == "" ]]; then
      echo "GOPATH does not exist!"
      exit 255
    else
      echo "GOPATH: ${GOPATH}"
    fi

    export GIT_PATH=github.com/coreos/etcd

    USER_NAME=coreos
    BRANCH_NAME=main

    rm -rf ${GOPATH}/src/${GIT_PATH}
    git clone https://github.com/${USER_NAME}/etcd \
      --branch ${BRANCH_NAME} \
      ${GOPATH}/src/${GIT_PATH}

    cd ${GOPATH}/src/${GIT_PATH} && make

    sudo cp ${GOPATH}/src/${GIT_PATH}/bin/* /tmp

    /tmp/etcd --version
    ETCDCTL_API=3 /tmp/etcdctl version
}

compilation
sources