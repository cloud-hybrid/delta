# Nexus-API #

*The **Nexus** Cloud-Technology API*

[[_TOC_]]

## Overview ##

Cloud-Technology's API is a set of HTTP endpoints that adhere to RESTful design principles and CRUD
actions with predictable URIs. It uses standard HTTP response codes & messages. The
API has consistent and well-formed JSON communication patterns with cursor-based, variable pagination
to simplify list handling. Error messages are descriptive and easy to understand.

All functional endpoints a part of the Cloud-Technology customer portal are accessible via the API, enabling Users to
script complex unattended scenarios with any tool capable of HTTP.

## Setup & Usage ##

### Requirements ###

- PIP-3
- OpenSSL
- Python3.9+
- PostgreSQL 13
    - [UUID-OSCP](https://www.postgresql.org/docs/13/uuid-ossp.html) (Extension)
- MongoDB *or* DocumentDB

1. **Set the *Source* Repository URL** (Subject to Change):
    ```bash
    export URL="*.API.git"
    ```
2. **Clone the Repository**:
    ```bash
    git clone "${URL}"
    ```
3. **Change Working Directories & Update PIP**:
    ```bash
    cd ./API && python3 -m pip install pip --upgrade
    ```
4. **Enable a Virtual Environment**:
    ```bash
    python3 -m venv .venv && source .venv/bin/activate
    ```
5. **Initialize a Hash Token**:
    ```bash
    export HASH_KEY="$(python3 -c "import secrets, sys; sys.stdout.write(secrets.token_urlsafe(32))")"
    ```
6. **Create `Environment.ini`**:
    ```ini
    [Database]
    PostgreSQL  = ****************************************************
    Mongo       = *********************************************************************************
    
    Secret      =
        %(PostgreSQL)s
        %(Mongo)s
    
    [Authentication]
    Token       = [Step-1-Hash-Token]
    Algorithm   = HS256
    Expiration  = 60
    
    Secret      =
        %(Token)s
    
    [Gitlab]
    URL         = gitlab.cloud.technology.io
    Username    = **************
    Token       = ********************
    
    Secret      =
        %(Token)s
        %(Username)s
    
    [Github]
    Username    = **************
    Token       = ****************************************
    
    Secret      =
        %(Token)s
        %(Username)s
    ```
7. **Lastly**:
    ```bash
    python -m pip install --force --upgrade . && Nexus-API --Debug Server --TLS
    ```
    - Optionally, Developers & Contributors ***can and should*** run `Nexus-API` *in Development-Mode*:
        ```bash
        python -m API --Debug Server --TLS 
        ```

Please reach out to Jacob Sanders for additional details, permissions, and for help
getting started.

## Releases ##

1. **Create a `requirements.txt` File**.
    ```bash
    python -m pip freeze > requirements.txt
    ```
2. **Zip `.venv` Dependencies**.
   1. MacOS:
       ```bash
       zip Virtual-Environment.Darwin.zip -r .venv
       ```
   2. Ubuntu || Debian:
       ```bash
       zip Virtual-Environment.Debian.zip -r .venv
       ```
   3. CentOS 8, CentOS Stream, Fedora, RHEL:
       ```bash
       zip Virtual-Environment.Fedora.zip -r .venv
       ```
3. **Clean File Structure**.
    ```bash
    rm -r -f Artifact/Build
    rm -r -f Artifact/Distribution
    ```
4. **Compile Source Distribution**.
    ```bash
    python setup.py sdist
    ```
5. **Compile Wheel**.
    ```bash
    python setup.py bdist_wheel
    ```
6. **Copy State Object(s)**.
    ```bash
    cp VERSION ./Artifact
    cp requirements.txt ./Artifact
    cp Environment.ini ./Artifact
    
    cp *.py ./Artifact
    cp *.whl ./Artifact
    cp *.zip ./Artifact
    
    cp Key.PEM ./Artifact
    
    cp *.crt ./Artifact
    cp *.key ./Artifact
    cp *.pem ./Artifact
    
    cp LICENSE ./Artifact
    
    cp setup.py ./Artifact
    
    cp Install-Certificate.py ./Artifact
    ```
7. **Zip Artifact(s)**.
    ```bash
    zip Artifacts.zip -r ./Artifact
    ```
8. **Move Artifacts.zip to Target-Version**.
    ```bash
    mv Artifacts.zip ./$(cat VERSION).zip
    ```
9. **Force Add ./$(cat VERSION).zip to `git`**.
    ```bash
    git add --force ./$(cat VERSION).zip
    ```
 
## Debugging ##

### SSL Verification Failure ###

```log
urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1129)
```

**Run `python[3] Install-Certificate.py`**.

---

### MongoDB Setup (MacOS) ###

#### Requirements ####

- Brew

1. **Tap MongoDB**:
   ```bash
   brew tap mongodb/brew
   ```
1. **Install**:
   ```bash
   brew install mongodb-community@4.4
   ```

---

## Clustering ##

<details>

<summary>
    <strong>
        Service Management
    </strong>
</summary>

In the production environment, an "EKS" (AWS Elastic K8s Service) cluster
exists; please refer to the following section(s) regarding state management.

### EC2 Instance Access ###

**AWS-Shell CLI Generation**

- [Official AWS Documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#having-ec2-create-your-key-pair)

```bash
aws ec2 create-key-pair --key-name "Nexus-API-EKS-Instance-Key"  \
    --query "KeyMaterial" --output text > \
        ~/.ssh/Nexus-API-EKS-Instance.PEM

chmod 400 ~/.ssh/Nexus-API-EKS-Instance.PEM
```

### Security Group ###

```bash
export ID="sg-0213ebb7f4ea54257"
export OWNER="983281742669"
export VPC_ID="vpc-a2fe3dc9"

export NAME="Nexus-API-EKS-Security-Group"
```

### Provisioning ###

![EKS Screenshot of Gitlab Provisioning Form](./Artifact/EKS-Screenshot-Form.png)

### Service Token Look-Up ###

```bash
curl -o kubectl https://amazon-eks.s3.us-west-2.amazonaws.com/1.20.4/2021-04-12/bin/darwin/amd64/kubectl
openssl sha1 -sha256 kubectl
chmod +x ./kubectl
mkdir -p $HOME/bin && cp ./kubectl $HOME/bin/kubectl && export PATH=$HOME/bin:$PATH
echo 'export PATH=$PATH:$HOME/bin' >> ~/.profile
kubectl version --short --client

brew unlink eksctl || true

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

brew tap weaveworks/tap
brew install weaveworks/tap/eksctl
brew upgrade eksctl && brew link --overwrite eksctl

eksctl version

printf "%s" "Nexus-API-EKS-Cluster"                           > Cluster.Name
printf "%s" "Nexus-K8s-Service-EKS-Cluster-Development-Stack" > Cluster.Stack-Name

printf "%s" "$(aws sts get-caller-identity | jq -r .Account)" > Cluster.Account
printf "%s" "$(aws eks get-token --cluster-name "${CLUSTER}" --output "json" | jq -r ".status.token" --)" \
                                                              > Cluster.Token
printf "%s" "cluster.{certificateAuthorityData: certificateAuthority.data}.certificateAuthorityData" \
                                                              > Cluster.CA.Query
printf "%s" "$(aws eks describe-cluster --name "$(cat Cluster.Name)" --output "text" --query "$(cat Cluster.CA.Query)" | base64 --decode)" \
                                                              > Cluster.CA
printf "%s" "arn:aws:iam::$(cat Cluster.Account):user/Segmentational" > Cluster.Role
#printf "%s" "$(aws cloudformation describe-stack-resources --stack-name Nexus-K8s-Service-EKS-Cluster-Development-Stack | jq -r ".StackResources[-2].PhysicalResourceId")" \
#                                                              > Cluster.Role
aws eks update-kubeconfig --region "us-east-2" --name "${CLUSTER}" --role-arn "$(cat Cluster.Role)"

export TOKEN="$(aws eks get-token --cluster-name "${CLUSTER}" --output "json" | jq -r ".status.token" --)"
export CA="$(aws eks describe-cluster --name "${CLUSTER}" --output "text" --query "${CERTIFICATE}" | base64 --decode)"

# ... aws eks describe-cluster --name "${CLUSTER}" --output "text" --query "${CERTIFICATE}" | base64 --decode | pbcopy

# ... https://aws.amazon.com/premiumsupport/knowledge-center/eks-cluster-connection
```

</details>

---

## IDE Environment Variables ##

- `$USER_HOME$`: TTY Home Directory
- `$PROJECT_DIR$`: Where the Project is Located
- `$MODULE_DIR$`: The Directory where Module Configuration Files (IML) are Located

## References ##

### Contributors ###

- [*Contributors.md*](./Artifact/CONTRIBUTING.md)

### Time-Zones ###
|...|...|....|
|--- |--- |--- |
|Hawaii Time|Alaska Time|Pacific Time|
|Thursday, 6/24/2021, 9:20 AM, HST|Thursday, 6/24/2021, 11:20 AM, AKDT|Thursday 6/24/2021, 12:20 PM, PDT|
|Mountain Time|Central Time|Eastern Time|
|Thursday, 6/24/20211:20 PM, MDT|Thursday 6/24/20212:20 PM, CDT|Thursday 6/24/2021, 3:20 PM, EDT|

### Pipeline Environment Variables ###

<details>

<summary>
    <strong>
        Variables Table
    </strong>
</summary>

| Variable                                      | GitLab | Runner | Description                                                                                                                                                                                                                                                                                                                                                |
|-----------------------------------------------|--------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `CHAT_CHANNEL`                                | 10.6   | all    | Source chat channel which triggered the [ChatOps](../chatops/README.md) command                                                                                                                                                                                                                                                                            |
| `CHAT_INPUT`                                  | 10.6   | all    | Additional arguments passed in the [ChatOps](../chatops/README.md) command                                                                                                                                                                                                                                                                                 |
| `CI`                                          | all    | 0.4    | Mark that job is executed in CI environment                                                                                                                                                                                                                                                                                                                |
| `CI_API_V4_URL`                               | 11.7   | all    | The GitLab API v4 root URL                                                                                                                                                                                                                                                                                                                                 |
| `CI_BUILDS_DIR`                               | all    | 11.10  | Top-level directory where builds are executed.                                                                                                                                                                                                                                                                                                             |
| `CI_COMMIT_BEFORE_SHA`                        | 11.2   | all    | The previous latest commit present on a branch. Is always `0000000000000000000000000000000000000000` in pipelines for merge requests.                                                                                                                                                                                                           |
| `CI_COMMIT_DESCRIPTION`                       | 10.8   | all    | The description of the commit: the message without first line, if the title is shorter than 100 characters; full message in other case.                                                                                                                                                                                                                    |
| `CI_COMMIT_MESSAGE`                           | 10.8   | all    | The full commit message.                                                                                                                                                                                                                                                                                                                                   |
| `CI_COMMIT_REF_NAME`                          | 9.0    | all    | The branch or tag name for which project is built                                                                                                                                                                                                                                                                                                          |
| `CI_COMMIT_REF_PROTECTED`                     | 11.11  | all    | `true` if the job is running on a protected reference, `false` if not                                                                                                                                                                                                                                                                                                               |
| `CI_COMMIT_REF_SLUG`                          | 9.0    | all    | `$CI_COMMIT_REF_NAME` lowercased, shortened to 63 bytes, and with everything except `0-9` and `a-z` replaced with `-`. No leading / trailing `-`. Use in URLs, host names and domain names.                                                                                                                                                                |
| `CI_COMMIT_SHA`                               | 9.0    | all    | The commit revision for which project is built                                                                                                                                                                                                                                                                                                             |
| `CI_COMMIT_SHORT_SHA`                         | 11.7   | all    | The first eight characters of `CI_COMMIT_SHA`                                                                                                                                                                                                                                                                                                              |
| `CI_COMMIT_BRANCH`                            | 12.6   | 0.5    | The commit branch name. Present only when building branches.                                                                                                                                                                                                                                                                                                      |
| `CI_COMMIT_TAG`                               | 9.0    | 0.5    | The commit tag name. Present only when building tags.                                                                                                                                                                                                                                                                                                      |
| `CI_COMMIT_TITLE`                             | 10.8   | all    | The title of the commit - the full first line of the message                                                                                                                                                                                                                                                                                               |
| `CI_COMMIT_TIMESTAMP`                         | 13.4   | all    | The timestamp of the commit in the ISO 8601 format.                                                                                                                                                                                                                                                                                               |
| `CI_CONCURRENT_ID`                            | all    | 11.10  | Unique ID of build execution within a single executor.                                                                                                                                                                                                                                                                                                     |
| `CI_CONCURRENT_PROJECT_ID`                    | all    | 11.10  | Unique ID of build execution within a single executor and project.                                                                                                                                                                                                                                                                                         |
| `CI_CONFIG_PATH`                              | 9.4    | 0.5    | The path to CI configuration file. Defaults to `.gitlab-ci.yml`                                                                                                                                                                                                                                                                                                   |
| `CI_DEBUG_TRACE`                              | all    | 1.7    | Whether [debug logging (tracing)](README.md#debug-logging) is enabled                                                                                                                                                                                                                                                                                      |
| `CI_DEFAULT_BRANCH`                           | 12.4   | all    | The name of the default branch for the project.                                                                                                                                                                                                                                                                                                            |
| `CI_DEPLOY_FREEZE`                            | 13.2   | all    | Included with the value `true` if the pipeline runs during a [deploy freeze window](../../user/project/releases/index.md#prevent-unintentional-releases-by-setting-a-deploy-freeze).                                                                                                                                                                                                                                    |
| `CI_DEPLOY_PASSWORD`                          | 10.8   | all    | Authentication password of the [GitLab Deploy Token](../../user/project/deploy_tokens/index.md#gitlab-deploy-token), only present if the Project has one related.                                                                                                                                                                                                                                    |
| `CI_DEPLOY_USER`                              | 10.8   | all    | Authentication username of the [GitLab Deploy Token](../../user/project/deploy_tokens/index.md#gitlab-deploy-token), only present if the Project has one related.                                                                                                                                                                                                                                    |
| `CI_DISPOSABLE_ENVIRONMENT`                   | all    | 10.1   | Marks that the job is executed in a disposable environment (something that is created only for this job and disposed of/destroyed after the execution - all executors except `shell` and `ssh`). If the environment is disposable, it is set to true, otherwise it is not defined at all.                                                                  |
| `CI_ENVIRONMENT_NAME`                         | 8.15   | all    | The name of the environment for this job. Only present if [`environment:name`](../yaml/README.md#environmentname) is set.                                                                                                                                                                                                                                  |
| `CI_ENVIRONMENT_SLUG`                         | 8.15   | all    | A simplified version of the environment name, suitable for inclusion in DNS, URLs, Kubernetes labels, etc. Only present if [`environment:name`](../yaml/README.md#environmentname) is set.                                                                                                                                                                 |
| `CI_ENVIRONMENT_URL`                          | 9.3    | all    | The URL of the environment for this job. Only present if [`environment:url`](../yaml/README.md#environmenturl) is set.                                                                                                                                                                                                                                     |
| `CI_EXTERNAL_PULL_REQUEST_IID`                | 12.3   | all    | Pull Request ID from GitHub if the [pipelines are for external pull requests](../ci_cd_for_external_repos/index.md#pipelines-for-external-pull-requests). Available only if `only: [external_pull_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the pull request is open.                                                                                                         |
| `CI_EXTERNAL_PULL_REQUEST_SOURCE_REPOSITORY`  | 13.3   | all    | The source repository name of the pull request if [the pipelines are for external pull requests](../ci_cd_for_external_repos/index.md#pipelines-for-external-pull-requests). Available only if `only: [external_pull_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the pull request is open.                                                                                          |
| `CI_EXTERNAL_PULL_REQUEST_TARGET_REPOSITORY`  | 13.3   | all    | The target repository name of the pull request if [the pipelines are for external pull requests](../ci_cd_for_external_repos/index.md#pipelines-for-external-pull-requests). Available only if `only: [external_pull_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the pull request is open.                                                                                          |
| `CI_EXTERNAL_PULL_REQUEST_SOURCE_BRANCH_NAME` | 12.3   | all    | The source branch name of the pull request if [the pipelines are for external pull requests](../ci_cd_for_external_repos/index.md#pipelines-for-external-pull-requests). Available only if `only: [external_pull_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the pull request is open.                                                                                          |
| `CI_EXTERNAL_PULL_REQUEST_SOURCE_BRANCH_SHA`  | 12.3   | all    | The HEAD SHA of the source branch of the pull request if [the pipelines are for external pull requests](../ci_cd_for_external_repos/index.md#pipelines-for-external-pull-requests). Available only if `only: [external_pull_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the pull request is open.                                                                               |
| `CI_EXTERNAL_PULL_REQUEST_TARGET_BRANCH_NAME` | 12.3   | all    | The target branch name of the pull request if [the pipelines are for external pull requests](../ci_cd_for_external_repos/index.md#pipelines-for-external-pull-requests). Available only if `only: [external_pull_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the pull request is open.                                                                                          |
| `CI_EXTERNAL_PULL_REQUEST_TARGET_BRANCH_SHA`  | 12.3   | all    | The HEAD SHA of the target branch of the pull request if [the pipelines are for external pull requests](../ci_cd_for_external_repos/index.md#pipelines-for-external-pull-requests). Available only if `only: [external_pull_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the pull request is open.                                                                               |
| `CI_HAS_OPEN_REQUIREMENTS`                    | 13.1   | all    | Included with the value `true` only if the pipeline's project has any open [requirements](../../user/project/requirements/index.md). Not included if there are no open requirements for the pipeline's project.                                                                                                                                                                                        |
| `CI_JOB_ID`                                   | 9.0    | all    | The unique ID of the current job that GitLab CI/CD uses internally                                                                                                                                                                                                                                                                                            |
| `CI_JOB_IMAGE`                                | 12.9   | 12.9   | The name of the image running the CI job                                                                                                                                                                                                                                                                                                                   |
| `CI_JOB_MANUAL`                               | 8.12   | all    | The flag to indicate that job was manually started                                                                                                                                                                                                                                                                                                         |
| `CI_JOB_NAME`                                 | 9.0    | 0.5    | The name of the job as defined in `.gitlab-ci.yml`                                                                                                                                                                                                                                                                                                         |
| `CI_JOB_STAGE`                                | 9.0    | 0.5    | The name of the stage as defined in `.gitlab-ci.yml`                                                                                                                                                                                                                                                                                                       |
| `CI_JOB_TOKEN`                                | 9.0    | 1.2    | Token used for authenticating with the [GitLab Container Registry](../../user/packages/container_registry/index.md), downloading [dependent repositories](../../user/project/new_ci_build_permissions_model.md#dependent-repositories), and accessing [GitLab-managed Terraform state](../../user/infrastructure/index.md#gitlab-managed-terraform-state).         |
| `CI_JOB_JWT`                                  | 12.10  | all    | RS256 JSON web token that can be used for authenticating with third party systems that support JWT authentication, for example [HashiCorp's Vault](../secrets/index.md). |
| `CI_JOB_URL`                                  | 11.1   | 0.5    | Job details URL                                                                                                                                                                                                                                                                                                                                            |
| `CI_KUBERNETES_ACTIVE`                        | 13.0   | all    | Included with the value `true` only if the pipeline has a Kubernetes cluster available for deployments. Not included if no cluster is available. Can be used as an alternative to [`only:kubernetes`/`except:kubernetes`](../yaml/README.md#onlykubernetesexceptkubernetes) with [`rules:if`](../yaml/README.md#rulesif)                                    |
| `CI_MERGE_REQUEST_ASSIGNEES`                  | 11.9   | all    | Comma-separated list of username(s) of assignee(s) for the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                              |
| `CI_MERGE_REQUEST_ID`                         | 11.6   | all    | The instance-level ID of the merge request. Only available if [the pipelines are for merge requests](../merge_request_pipelines/index.md) and the merge request is created.                                                                                                                                                           |
| `CI_MERGE_REQUEST_IID`                        | 11.6   | all    | The project-level IID (internal ID) of the merge request. Only available If [the pipelines are for merge requests](../merge_request_pipelines/index.md) and the merge request is created.                                                                                                                                                          |
| `CI_MERGE_REQUEST_LABELS`                     | 11.9   | all    | Comma-separated label names of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                                                      |
| `CI_MERGE_REQUEST_MILESTONE`                  | 11.9   | all    | The milestone title of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                                                              |
| `CI_MERGE_REQUEST_PROJECT_ID`                 | 11.6   | all    | The ID of the project of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                                                            |
| `CI_MERGE_REQUEST_PROJECT_PATH`               | 11.6   | all    | The path of the project of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md) (e.g. `namespace/awesome-project`). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                       |
| `CI_MERGE_REQUEST_PROJECT_URL`                | 11.6   | all    | The URL of the project of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md) (e.g. `http://192.168.10.15:3000/namespace/awesome-project`). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                              |
| `CI_MERGE_REQUEST_REF_PATH`                   | 11.6   | all    | The ref path of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). (e.g. `refs/merge-requests/1/head`). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                                |
| `CI_MERGE_REQUEST_SOURCE_BRANCH_NAME`         | 11.6   | all    | The source branch name of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                                                           |
| `CI_MERGE_REQUEST_SOURCE_BRANCH_SHA`          | 11.9   | all    | The HEAD SHA of the source branch of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used, the merge request is created, and the pipeline is a [merged result pipeline](../merge_request_pipelines/pipelines_for_merged_results/index.md). **(PREMIUM)**   |
| `CI_MERGE_REQUEST_SOURCE_PROJECT_ID`          | 11.6   | all    | The ID of the source project of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                                                     |
| `CI_MERGE_REQUEST_SOURCE_PROJECT_PATH`        | 11.6   | all    | The path of the source project of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                                                   |
| `CI_MERGE_REQUEST_SOURCE_PROJECT_URL`         | 11.6   | all    | The URL of the source project of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                                                    |
| `CI_MERGE_REQUEST_TARGET_BRANCH_NAME`         | 11.6   | all    | The target branch name of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                                                           |
| `CI_MERGE_REQUEST_TARGET_BRANCH_SHA`          | 11.9   | all    | The HEAD SHA of the target branch of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or [`rules`](../yaml/README.md#rules) syntax is used, the merge request is created, and the pipeline is a [merged result pipeline](../merge_request_pipelines/pipelines_for_merged_results/index.md). **(PREMIUM)**   |
| `CI_MERGE_REQUEST_TITLE`                      | 11.9   | all    | The title of the merge request if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Available only if `only: [merge_requests]` or  [`rules`](../yaml/README.md#rules) syntax is used and the merge request is created.                                                                                                                                                        |
| `CI_MERGE_REQUEST_EVENT_TYPE`                 | 12.3   | all    | The event type of the merge request, if [the pipelines are for merge requests](../merge_request_pipelines/index.md). Can be `detached`, `merged_result` or `merge_train`. |
| `CI_NODE_INDEX`                               | 11.5   | all    | Index of the job in the job set. If the job is not parallelized, this variable is not set.                                                                                                                                                                                                                                                                 |
| `CI_NODE_TOTAL`                               | 11.5   | all    | Total number of instances of this job running in parallel. If the job is not parallelized, this variable is set to `1`.                                                                                                                                                                                                                                    |
| `CI_PAGES_DOMAIN`                             | 11.8   | all    | The configured domain that hosts GitLab Pages.                                                                                                                                                                                                                                                                                                             |
| `CI_PAGES_URL`                                | 11.8   | all    | URL to GitLab Pages-built pages. Always belongs to a subdomain of `CI_PAGES_DOMAIN`.                                                                                                                                                                                                                                                                       |
| `CI_PIPELINE_ID`                              | 8.10   | all    | The instance-level ID of the current pipeline.                                                                                                                                                                                                                                                                                                             |
| `CI_PIPELINE_IID`                             | 11.0   | all    | The project-level IID (internal ID) of the current pipeline.                                                                                                                                                                                                                                                                                               |
| `CI_PIPELINE_SOURCE`                          | 10.0   | all    | Indicates how the pipeline was triggered. Possible options are: `push`, `web`, `schedule`, `api`, `external`, `chat`, `webide`, `merge_request_event`, `external_pull_request_event`, `parent_pipeline`, [`trigger`, or `pipeline`](../triggers/README.md#authentication-tokens) (renamed to `cross_project_pipeline` since 13.0). For pipelines created before GitLab 9.5, this is displayed as `unknown`. |
| `CI_PIPELINE_TRIGGERED`                       | all    | all    | The flag to indicate that job was [triggered](../triggers/README.md)                                                                                                                                                                                                                                                                                       |
| `CI_PIPELINE_URL`                             | 11.1   | 0.5    | Pipeline details URL                                                                                                                                                                                                                                                                                                                                       |
| `CI_PROJECT_DIR`                              | all    | all    | The full path where the repository is cloned and where the job is run. If the GitLab Runner `builds_dir` parameter is set, this variable is set relative to the value of `builds_dir`. For more information, see [Advanced configuration](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-runners-section) for GitLab Runner. |
| `CI_PROJECT_ID`                               | all    | all    | The unique ID of the current project that GitLab CI/CD uses internally                                                                                                                                                                                                                                                                                        |
| `CI_PROJECT_NAME`                             | 8.10   | 0.5    | The name of the directory for the project that is currently being built. For example, if the project URL is `gitlab.example.com/group-name/project-1`, the `CI_PROJECT_NAME` would be `project-1`.                                                                                                                                                         |
| `CI_PROJECT_NAMESPACE`                        | 8.10   | 0.5    | The project namespace (username or group name) that is currently being built                                                                                                                                                                                                                                                                                |
| `CI_PROJECT_ROOT_NAMESPACE`                   | 13.2   | 0.5    | The **root** project namespace (username or group name) that is currently being built. For example, if `CI_PROJECT_NAME` is `root-group/child-group/grandchild-group`, `CI_PROJECT_ROOT_NAMESPACE` would be `root-group`.                                                                                                                                  |
| `CI_PROJECT_PATH`                             | 8.10   | 0.5    | The namespace with project name                                                                                                                                                                                                                                                                                                                            |
| `CI_PROJECT_PATH_SLUG`                        | 9.3    | all    | `$CI_PROJECT_PATH` lowercased and with everything except `0-9` and `a-z` replaced with `-`. Use in URLs and domain names.                                                                                                                                                                                                                                  |
| `CI_PROJECT_REPOSITORY_LANGUAGES`             | 12.3   | all    | Comma-separated, lowercased list of the languages used in the repository (e.g. `ruby,javascript,html,css`)                                                                                                                                                                                                                                                 |
| `CI_PROJECT_TITLE`                            | 12.4   | all    | The human-readable project name as displayed in the GitLab web interface.                                                                                                                                                                                                                                                                                  |
| `CI_PROJECT_URL`                              | 8.10   | 0.5    | The HTTP(S) address to access project                                                                                                                                                                                                                                                                                                                      |
| `CI_PROJECT_VISIBILITY`                       | 10.3   | all    | The project visibility (internal, private, public)                                                                                                                                                                                                                                                                                                         |
| `CI_REGISTRY`                                 | 8.10   | 0.5    | If the Container Registry is enabled it returns the address of GitLab's Container Registry. This variable includes a `:port` value if one has been specified in the registry configuration.                                                                                                                                                           |
| `CI_REGISTRY_IMAGE`                           | 8.10   | 0.5    | If the Container Registry is enabled for the project it returns the address of the registry tied to the specific project                                                                                                                                                                                                                                   |
| `CI_REGISTRY_PASSWORD`                        | 9.0    | all    | The password to use to push containers to the GitLab Container Registry, for the current project.                                                                                                                                                                                                                                                                |
| `CI_REGISTRY_USER`                            | 9.0    | all    | The username to use to push containers to the GitLab Container Registry, for the current project.                                                                                                                                                                                                                                                                 |
| `CI_REPOSITORY_URL`                           | 9.0    | all    | The URL to clone the Git repository                                                                                                                                                                                                                                                                                                                        |
| `CI_RUNNER_DESCRIPTION`                       | 8.10   | 0.5    | The description of the runner as saved in GitLab                                                                                                                                                                                                                                                                                                           |
| `CI_RUNNER_EXECUTABLE_ARCH`                   | all    | 10.6   | The OS/architecture of the GitLab Runner executable (note that this is not necessarily the same as the environment of the executor)                                                                                                                                                                                                                        |
| `CI_RUNNER_ID`                                | 8.10   | 0.5    | The unique ID of runner being used                                                                                                                                                                                                                                                                                                                         |
| `CI_RUNNER_REVISION`                          | all    | 10.6   | GitLab Runner revision that is executing the current job                                                                                                                                                                                                                                                                                                   |
| `CI_RUNNER_SHORT_TOKEN`                       | all    | 12.3   | First eight characters of the runner's token used to authenticate new job requests. Used as the runner's unique ID                                                                                                                                                                                                                                         |
| `CI_RUNNER_TAGS`                              | 8.10   | 0.5    | The defined runner tags                                                                                                                                                                                                                                                                                                                                    |
| `CI_RUNNER_VERSION`                           | all    | 10.6   | GitLab Runner version that is executing the current job                                                                                                                                                                                                                                                                                                    |
| `CI_SERVER`                                   | all    | all    | Mark that job is executed in CI environment                                                                                                                                                                                                                                                                                                                |
| `CI_SERVER_URL`                               | 12.7   | all    | The base URL of the GitLab instance, including protocol and port (like `https://gitlab.example.com:8080`)                                                                                                                                                                                                                                                           |
| `CI_SERVER_HOST`                              | 12.1   | all    | Host component of the GitLab instance URL, without protocol and port (like `gitlab.example.com`)                                                                                                                                                                                                                                                           |
| `CI_SERVER_PORT`                              | 12.8   | all    | Port component of the GitLab instance URL, without host and protocol (like `3000`)                                                                                                                                                                                                                                                                         |
| `CI_SERVER_PROTOCOL`                          | 12.8   | all    | Protocol component of the GitLab instance URL, without host and port (like `https`)                                                                                                                                                                                                                                                                        |
| `CI_SERVER_NAME`                              | all    | all    | The name of CI server that is used to coordinate jobs                                                                                                                                                                                                                                                                                                      |
| `CI_SERVER_REVISION`                          | all    | all    | GitLab revision that is used to schedule jobs                                                                                                                                                                                                                                                                                                              |
| `CI_SERVER_VERSION`                           | all    | all    | GitLab version that is used to schedule jobs                                                                                                                                                                                                                                                                                                               |
| `CI_SERVER_VERSION_MAJOR`                     | 11.4   | all    | GitLab version major component                                                                                                                                                                                                                                                                                                                             |
| `CI_SERVER_VERSION_MINOR`                     | 11.4   | all    | GitLab version minor component                                                                                                                                                                                                                                                                                                                             |
| `CI_SERVER_VERSION_PATCH`                     | 11.4   | all    | GitLab version patch component                                                                                                                                                                                                                                                                                                                             |
| `CI_SHARED_ENVIRONMENT`                       | all    | 10.1   | Marks that the job is executed in a shared environment (something that is persisted across CI invocations like `shell` or `ssh` executor). If the environment is shared, it is set to true, otherwise it is not defined at all.                                                                                                                            |
| `GITLAB_CI`                                   | all    | all    | Mark that job is executed in GitLab CI/CD environment                                                                                                                                                                                                                                                                                                         |
| `GITLAB_FEATURES`                             | 10.6   | all    | The comma separated list of licensed features available for your instance and plan                                                                                                                                                                                                                                                                         |
| `GITLAB_USER_EMAIL`                           | 8.12   | all    | The email of the user who started the job                                                                                                                                                                                                                                                                                                                  |
| `GITLAB_USER_ID`                              | 8.12   | all    | The ID of the user who started the job                                                                                                                                                                                                                                                                                                                     |
| `GITLAB_USER_LOGIN`                           | 10.0   | all    | The login username of the user who started the job                                                                                                                                                                                                                                                                                                         |
| `GITLAB_USER_NAME`                            | 10.0   | all    | The real name of the user who started the job                                                                                                                                                                                                                                                                                                              |

</details>

## Serverless Technologies ##

<details>

<summary>Fargate</summary>

**AWS Fargate** is a *serverless* compute engine for containers that works with both Amazon Elastic 
Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS). Fargate makes it easy 
for you to focus on building your applications. Fargate removes the need to provision and manage 
servers, lets you specify and pay for resources per application, and improves security through 
application isolation by design.

Fargate allocates the right amount of compute, eliminating the need to choose instances and scale 
cluster capacity. You only pay for the resources required to run your containers, so there is no 
over-provisioning and paying for additional servers. Fargate runs each task or pod in its own kernel 
providing the tasks and pods their own isolated compute environment. This enables your application 
to have workload isolation and improved security by design. This is why customers such as Vanguard,
Accenture, Foursquare, and Ancestry have chosen to run their mission critical applications on 
Fargate.

</details>

### TLS Development Key(s) ###

<details>

<summary>
    <strong>
        OpenSSL CLI Instructions
    </strong>
</summary>

<br/>

```bash
#!/bin/bash --posix

#
# A CSR or Certificate Signing request is a block of encoded text that is given to a Certificate Authority
# when applying for an SSL Certificate. It is usually generated on the server where the certificate will be
# installed and contains information that will be included in the certificate such as the organization name,
# common name (domain name), locality, and country. It also contains the public key that will be included in
# the certificate. A private key is usually created at the same time that you create the CSR, making a key pair.
#
# CSRs are generally encoded using ASN.1 according to the PKCS #10 specification.
#

# ... export SUB="/C=US/ST=MN/O=Cloud Technology LLC./CN=localhost/subjectAltName=DNS:*.nexus.cloud-technology.io,DNS:nexus.cloud-technology.io,localhost,0.0.0.0"
# ...
# ... openssl req -x509 -newkey rsa:8192 -nodes -sha256   \
# ...     -days 365 -passin "pass:Development"            \
# ...         -subj "${SUB}" -keyout Development.key      \
# ...             -out Development.pem

# --> Debian & Ubuntu
# ... sudo apt install libnss3-tools --yes

# --> OS Agnostic
cat << "EOF" | tee Development.conf
[ req ]
prompt              = no
default_bits        = 2048
default_keyfile     = Development.pem
distinguished_name  = subject
req_extensions      = req_ext
x509_extensions     = x509_ext
string_mask         = utf8only

# RFC 4514, RFC 4519

[ subject ]
countryName              = US
stateOrProvinceName      = MN
localityName             = Minneapolis
organizationName         = Localhost

# Friendly Name

commonName          = Development Certificate
emailAddress        = development@localhost.com

[ x509_ext ]

subjectKeyIdentifier        = hash
authorityKeyIdentifier      = keyid,issuer
basicConstraints        = CA:FALSE
keyUsage                = digitalSignature, keyEncipherment
subjectAltName          = @alternate_names
nsComment               = "OpenSSL Generated Certificate"

# RFC 5280, Section 4.2.1.12 makes EKU optional

[ req_ext ]

subjectKeyIdentifier        = hash

basicConstraints            = CA:FALSE
keyUsage                    = digitalSignature, keyEncipherment
subjectAltName              = @alternate_names
nsComment                   = "OpenSSL Generated Certificate"

# CA/Browser Baseline Requirements, Appendix (B)(3)(G)

[ alternate_names ]

DNS.1       = localhost
DNS.7       = 127.0.0.1

# IPv6 localhost
# DNS.8     = ::1
EOF

openssl req -config Development.conf -new -x509 -sha256 -newkey rsa:2048 -nodes \
    -days "1024" -keyout "Development.key" -out "Development.crt"

openssl pkcs12 -export -out "Development.pfx" -inkey "Development.key" -in "Development.crt"

# --> MacOS Only
# ... sudo security -v add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain Development.crt

# --> Debian & Ubuntu
# ... pk12util -d "sql:${HOME}/.pki/nssdb" -i Development.pfx
# ... certutil -d sql:$HOME/.pki/nssdb -A -t "P,," -n "Development Certificate" -i Development.crt

# Reference
#   - https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate
```

</details>

---

# Schema Types #

<details>

<summary>
    <strong>
        Type Definitions
    </strong>
</summary>

Where possible *pydantic* uses [standard library types](#standard-library-types) to define fields, thus smoothing
the learning curve. For many useful applications, however, no standard library type exists,
so *pydantic* implements [many commonly used types](#pydantic-types).

If no existing type suits your purpose you can also implement your [own pydantic-compatible types](#custom-data-types)
with custom properties and validation.

## Standard Library Types

*pydantic* supports many common types from the python standard library. If you need stricter processing see
[Strict Types](#strict-types); if you need to constrain the values allowed (e.g. to require a positive int) see
[Constrained Types](#constrained-types).

`None`, `type(None)` or `Literal[None]` (equivalent according to [PEP 484](https://www.python.org/dev/peps/pep-0484/#using-none))
: allows only `None` value

`bool`
: see [Booleans](#booleans) below for details on how bools are validated and what values are permitted

`int`
: *pydantic* uses `int(v)` to coerce types to an `int`;
  see [this](models.md#data-conversion) warning on loss of information during data conversion

`float`
: similarly, `float(v)` is used to coerce values to floats

`str`
: strings are accepted as-is, `int` `float` and `Decimal` are coerced using `str(v)`, `bytes` and `bytearray` are
  converted using `v.decode()`, enums inheriting from `str` are converted using `v.value`,
  and all other types cause an error

`bytes`
: `bytes` are accepted as-is, `bytearray` is converted using `bytes(v)`, `str` are converted using `v.encode()`,
  and `int`, `float`, and `Decimal` are coerced using `str(v).encode()`

`list`
: allows `list`, `tuple`, `set`, `frozenset`, `deque`, or generators and casts to a list;
  see `typing.List` below for sub-type constraints

`tuple`
: allows `list`, `tuple`, `set`, `frozenset`, `deque`, or generators and casts to a tuple;
  see `typing.Tuple` below for sub-type constraints

`dict`
: `dict(v)` is used to attempt to convert a dictionary;
  see `typing.Dict` below for sub-type constraints

`set`
: allows `list`, `tuple`, `set`, `frozenset`, `deque`, or generators and casts to a set;
  see `typing.Set` below for sub-type constraints

`frozenset`
: allows `list`, `tuple`, `set`, `frozenset`, `deque`, or generators and casts to a frozen set;
  see `typing.FrozenSet` below for sub-type constraints

`deque`
: allows `list`, `tuple`, `set`, `frozenset`, `deque`, or generators and casts to a deque;
  see `typing.Deque` below for sub-type constraints

`datetime.date`
: see [Datetime Types](#datetime-types) below for more detail on parsing and validation

`datetime.time`
: see [Datetime Types](#datetime-types) below for more detail on parsing and validation

`datetime.datetime`
: see [Datetime Types](#datetime-types) below for more detail on parsing and validation

`datetime.timedelta`
: see [Datetime Types](#datetime-types) below for more detail on parsing and validation

`typing.Any`
: allows any value include `None`, thus an `Any` field is optional

`typing.Annotated`
: allows wrapping another type with arbitrary metadata, as per [PEP-593](https://www.python.org/dev/peps/pep-0593/). The
  `Annotated` hint may contain a single call to the [`Field` function](schema.md#typingannotated-fields), but otherwise
  the additional metadata is ignored and the root type is used.

`typing.TypeVar`
: constrains the values allowed based on `constraints` or `bound`, see [TypeVar](#typevar)

`typing.Union`
: see [Unions](#unions) below for more detail on parsing and validation

`typing.Optional`
: `Optional[x]` is simply short hand for `Union[x, None]`;
  see [Unions](#unions) below for more detail on parsing and validation and [Required Fields](models.md#required-fields) for details about required fields that can receive `None` as a value.

`typing.List`
: see [Typing Iterables](#typing-iterables) below for more detail on parsing and validation

`typing.Tuple`
: see [Typing Iterables](#typing-iterables) below for more detail on parsing and validation

`subclass of typing.NamedTuple`
: Same as `tuple` but instantiates with the given namedtuple and validates fields since they are annotated.
  See [Annotated Types](#annotated-types) below for more detail on parsing and validation

`subclass of collections.namedtuple`
: Same as `subclass of typing.NamedTuple` but all fields will have type `Any` since they are not annotated

`typing.Dict`
: see [Typing Iterables](#typing-iterables) below for more detail on parsing and validation

`subclass of typing.TypedDict`
: Same as `dict` but _pydantic_ will validate the dictionary since keys are annotated.
  See [Annotated Types](#annotated-types) below for more detail on parsing and validation

`typing.Set`
: see [Typing Iterables](#typing-iterables) below for more detail on parsing and validation

`typing.FrozenSet`
: see [Typing Iterables](#typing-iterables) below for more detail on parsing and validation

`typing.Deque`
: see [Typing Iterables](#typing-iterables) below for more detail on parsing and validation

`typing.Sequence`
: see [Typing Iterables](#typing-iterables) below for more detail on parsing and validation

`typing.Iterable`
: this is reserved for iterables that shouldn't be consumed. See [Infinite Generators](#infinite-generators) below for more detail on parsing and validation

`typing.Type`
: see [Type](#type) below for more detail on parsing and validation

`typing.Callable`
: see [Callable](#callable) below for more detail on parsing and validation

`typing.Pattern`
: will cause the input value to be passed to `re.compile(v)` to create a regex pattern

`ipaddress.IPv4Address`
: simply uses the type itself for validation by passing the value to `IPv4Address(v)`;
  see [Pydantic Types](#pydantic-types) for other custom IP address types

`ipaddress.IPv4Interface`
: simply uses the type itself for validation by passing the value to `IPv4Address(v)`;
  see [Pydantic Types](#pydantic-types) for other custom IP address types

`ipaddress.IPv4Network`
: simply uses the type itself for validation by passing the value to `IPv4Network(v)`;
  see [Pydantic Types](#pydantic-types) for other custom IP address types

`ipaddress.IPv6Address`
: simply uses the type itself for validation by passing the value to `IPv6Address(v)`;
  see [Pydantic Types](#pydantic-types) for other custom IP address types

`ipaddress.IPv6Interface`
: simply uses the type itself for validation by passing the value to `IPv6Interface(v)`;
  see [Pydantic Types](#pydantic-types) for other custom IP address types

`ipaddress.IPv6Network`
: simply uses the type itself for validation by passing the value to `IPv6Network(v)`;
  see [Pydantic Types](#pydantic-types) for other custom IP address types

`enum.Enum`
: checks that the value is a valid Enum instance

`subclass of enum.Enum`
: checks that the value is a valid member of the enum;
  see [Enums and Choices](#enums-and-choices) for more details

`enum.IntEnum`
: checks that the value is a valid IntEnum instance

`subclass of enum.IntEnum`
: checks that the value is a valid member of the integer enum;
  see [Enums and Choices](#enums-and-choices) for more details

`decimal.Decimal`
: *pydantic* attempts to convert the value to a string, then passes the string to `Decimal(v)`

`pathlib.Path`
: simply uses the type itself for validation by passing the value to `Path(v)`;
  see [Pydantic Types](#pydantic-types) for other more strict path types

`uuid.UUID`
: strings and bytes (converted to strings) are passed to `UUID(v)`, with a fallback to `UUID(bytes=v)` for `bytes` and `bytearray`;
  see [Pydantic Types](#pydantic-types) for other stricter UUID types

`ByteSize`
: converts a bytes string with units to bytes

### Typing Iterables

*pydantic* uses standard library `typing` types as defined in PEP 484 to define complex objects.

```py
{!.tmp_examples/types_iterables.py!}
```
_(This script is complete, it should run "as is")_

### Infinite Generators

If you have a generator you can use `Sequence` as described above. In that case, the
generator will be consumed and stored on the model as a list and its values will be
validated with the sub-type of `Sequence` (e.g. `int` in `Sequence[int]`).

But if you have a generator that you don't want to be consumed, e.g. an infinite
generator or a remote data loader, you can define its type with `Iterable`:

```py
{!.tmp_examples/types_infinite_generator.py!}
```
_(This script is complete, it should run "as is")_

!!! warning
    `Iterable` fields only perform a simple check that the argument is iterable and
    won't be consumed.

    No validation of their values is performed as it cannot be done without consuming
    the iterable.

!!! tip
    If you want to validate the values of an infinite generator you can create a
    separate model and use it while consuming the generator, reporting the validation
    errors as appropriate.

    pydantic can't validate the values automatically for you because it would require
    consuming the infinite generator.

#### Validating the first value

You can create a [validator](validators.md) to validate the first value in an infinite generator and still not consume it entirely.

```py
{!.tmp_examples/types_infinite_generator_validate_first.py!}
```
_(This script is complete, it should run "as is")_

### Unions

The `Union` type allows a model attribute to accept different types, e.g.:

!!! warning
    This script is complete, it should run "as is". However, it may not reflect the desired behavior; see below.

```py
{!.tmp_examples/types_union_incorrect.py!}
```

However, as can be seen above, *pydantic* will attempt to 'match' any of the types defined under `Union` and will use
the first one that matches. In the above example the `id` of `user_03` was defined as a `uuid.UUID` class (which
is defined under the attribute's `Union` annotation) but as the `uuid.UUID` can be marshalled into an `int` it
chose to match against the `int` type and disregarded the other types.

As such, it is recommended that, when defining `Union` annotations, the most specific type is included first and
followed by less specific types. In the above example, the `UUID` class should precede the `int` and `str`
classes to preclude the unexpected representation as such:

```py
{!.tmp_examples/types_union_correct.py!}
```
_(This script is complete, it should run "as is")_

!!! tip
    The type `Optional[x]` is a shorthand for `Union[x, None]`.

    `Optional[x]` can also be used to specify a required field that can take `None` as a value.

    See more details in [Required Fields](models.md#required-fields).

### Enums and Choices

*pydantic* uses python's standard `enum` classes to define choices.

```py
{!.tmp_examples/types_choices.py!}
```
_(This script is complete, it should run "as is")_


### Datetime Types

*Pydantic* supports the following [datetime](https://docs.python.org/library/datetime.html#available-types)
types:

* `datetime` fields can be:

  * `datetime`, existing `datetime` object
  * `int` or `float`, assumed as Unix time, i.e. seconds (if >= `-2e10` or <= `2e10`) or milliseconds (if < `-2e10`or > `2e10`) since 1 January 1970
  * `str`, following formats work:

    * `YYYY-MM-DD[T]HH:MM[:SS[.ffffff]][Z or [±]HH[:]MM]]]`
    * `int` or `float` as a string (assumed as Unix time)

* `date` fields can be:

  * `date`, existing `date` object
  * `int` or `float`, see `datetime`
  * `str`, following formats work:

    * `YYYY-MM-DD`
    * `int` or `float`, see `datetime`

* `time` fields can be:

  * `time`, existing `time` object
  * `str`, following formats work:

    * `HH:MM[:SS[.ffffff]][Z or [±]HH[:]MM]]]`

* `timedelta` fields can be:

  * `timedelta`, existing `timedelta` object
  * `int` or `float`, assumed as seconds
  * `str`, following formats work:

    * `[-][DD ][HH:MM]SS[.ffffff]`
    * `[±]P[DD]DT[HH]H[MM]M[SS]S` (ISO 8601 format for timedelta)

```py
{!.tmp_examples/types_dt.py!}
```

### Booleans

!!! warning
    The logic for parsing `bool` fields has changed as of version **v1.0**.

    Prior to **v1.0**, `bool` parsing never failed, leading to some unexpected results.
    The new logic is described below.

A standard `bool` field will raise a `ValidationError` if the value is not one of the following:

* A valid boolean (i.e. `True` or `False`),
* The integers `0` or `1`,
* a `str` which when converted to lower case is one of
  `'0', 'off', 'f', 'false', 'n', 'no', '1', 'on', 't', 'true', 'y', 'yes'`
* a `bytes` which is valid (per the previous rule) when decoded to `str`

!!! note
    If you want stricter boolean logic (e.g. a field which only permits `True` and `False`) you can
    use [`StrictBool`](#strict-types).

Here is a script demonstrating some of these behaviors:

```py
{!.tmp_examples/types_boolean.py!}
```
_(This script is complete, it should run "as is")_

### Callable

Fields can also be of type `Callable`:

```py
{!.tmp_examples/types_callable.py!}
```
_(This script is complete, it should run "as is")_

!!! warning
    Callable fields only perform a simple check that the argument is
    callable; no validation of arguments, their types, or the return
    type is performed.

### Type

*pydantic* supports the use of `Type[T]` to specify that a field may only accept classes (not instances)
that are subclasses of `T`.

```py
{!.tmp_examples/types_type.py!}
```
_(This script is complete, it should run "as is")_

You may also use `Type` to specify that any class is allowed.

```py
{!.tmp_examples/types_bare_type.py!}
```
_(This script is complete, it should run "as is")_

### TypeVar

`TypeVar` is supported either unconstrained, constrained or with a bound.

```py
{!.tmp_examples/types_typevar.py!}
```
_(This script is complete, it should run "as is")_

## Literal Type

!!! note
    This is a new feature of the python standard library as of python 3.8;
    prior to python 3.8, it requires the [typing-extensions](https://pypi.org/project/typing-extensions/) package.

*pydantic* supports the use of `typing.Literal` (or `typing_extensions.Literal` prior to python 3.8)
as a lightweight way to specify that a field may accept only specific literal values:

```py
{!.tmp_examples/types_literal1.py!}
```
_(This script is complete, it should run "as is")_

One benefit of this field type is that it can be used to check for equality with one or more specific values
without needing to declare custom validators:

```py
{!.tmp_examples/types_literal2.py!}
```
_(This script is complete, it should run "as is")_

With proper ordering in an annotated `Union`, you can use this to parse types of decreasing specificity:

```py
{!.tmp_examples/types_literal3.py!}
```
_(This script is complete, it should run "as is")_

## Annotated Types

### NamedTuple

```py
{!.tmp_examples/annotated_types_named_tuple.py!}
```
_(This script is complete, it should run "as is")_

### TypedDict

!!! note
    This is a new feature of the python standard library as of python 3.8.
    Prior to python 3.8, it requires the [typing-extensions](https://pypi.org/project/typing-extensions/) package.
    But required and optional fields are properly differentiated only since python 3.9.
    We therefore recommend using [typing-extensions](https://pypi.org/project/typing-extensions/) with python 3.8 as well.


```py
{!.tmp_examples/annotated_types_typed_dict.py!}
```
_(This script is complete, it should run "as is")_

## Pydantic Types

*pydantic* also provides a variety of other useful types:

`FilePath`
: like `Path`, but the path must exist and be a file

`DirectoryPath`
: like `Path`, but the path must exist and be a directory

`PastDate`
: like `date`, but the date should be in the past

`FutureDate`
: like `date`, but the date should be in the future

`EmailStr`
: requires [email-validator](https://github.com/JoshData/python-email-validator) to be installed;
  the input string must be a valid email address, and the output is a simple string



`NameEmail`
: requires [email-validator](https://github.com/JoshData/python-email-validator) to be installed;
  the input string must be either a valid email address or in the format `Fred Bloggs <fred.bloggs@example.com>`,
  and the output is a `NameEmail` object which has two properties: `name` and `email`.
  For `Fred Bloggs <fred.bloggs@example.com>` the name would be `"Fred Bloggs"`;
  for `fred.bloggs@example.com` it would be `"fred.bloggs"`.


`PyObject`
: expects a string and loads the python object importable at that dotted path;
  e.g. if `'math.cos'` was provided, the resulting field value would be the function `cos`

`Color`
: for parsing HTML and CSS colors; see [Color Type](#color-type)

`Json`
: a special type wrapper which loads JSON before parsing; see [JSON Type](#json-type)

`PaymentCardNumber`
: for parsing and validating payment cards; see [payment cards](#payment-card-numbers)

`AnyUrl`
: any URL; see [URLs](#urls)

`AnyHttpUrl`
: an HTTP URL; see [URLs](#urls)

`HttpUrl`
: a stricter HTTP URL; see [URLs](#urls)

`FileUrl`
: a file path URL; see [URLs](#urls)

`PostgresDsn`
: a postgres DSN style URL; see [URLs](#urls)

`RedisDsn`
: a redis DSN style URL; see [URLs](#urls)

`stricturl`
: a type method for arbitrary URL constraints; see [URLs](#urls)

`UUID1`
: requires a valid UUID of type 1; see `UUID` [above](#standard-library-types)

`UUID3`
: requires a valid UUID of type 3; see `UUID` [above](#standard-library-types)

`UUID4`
: requires a valid UUID of type 4; see `UUID` [above](#standard-library-types)

`UUID5`
: requires a valid UUID of type 5; see `UUID` [above](#standard-library-types)

`SecretBytes`
: bytes where the value is kept partially secret; see [Secrets](#secret-types)

`SecretStr`
: string where the value is kept partially secret; see [Secrets](#secret-types)

`IPvAnyAddress`
: allows either an `IPv4Address` or an `IPv6Address`

`IPvAnyInterface`
: allows either an `IPv4Interface` or an `IPv6Interface`

`IPvAnyNetwork`
: allows either an `IPv4Network` or an `IPv6Network`

`NegativeFloat`
: allows a float which is negative; uses standard `float` parsing then checks the value is less than 0;
  see [Constrained Types](#constrained-types)

`NegativeInt`
: allows an int which is negative; uses standard `int` parsing then checks the value is less than 0;
  see [Constrained Types](#constrained-types)

`PositiveFloat`
: allows a float which is positive; uses standard `float` parsing then checks the value is greater than 0;
  see [Constrained Types](#constrained-types)

`PositiveInt`
: allows an int which is positive; uses standard `int` parsing then checks the value is greater than 0;
  see [Constrained Types](#constrained-types)

`conbytes`
: type method for constraining bytes;
  see [Constrained Types](#constrained-types)

`condecimal`
: type method for constraining Decimals;
  see [Constrained Types](#constrained-types)

`confloat`
: type method for constraining floats;
  see [Constrained Types](#constrained-types)

`conint`
: type method for constraining ints;
  see [Constrained Types](#constrained-types)

`conlist`
: type method for constraining lists;
  see [Constrained Types](#constrained-types)

`conset`
: type method for constraining sets;
  see [Constrained Types](#constrained-types)

`constr`
: type method for constraining strs;
  see [Constrained Types](#constrained-types)

### URLs

For URI/URL validation the following types are available:

- `AnyUrl`: any scheme allowed, TLD not required, host required
- `AnyHttpUrl`: scheme `http` or `https`, TLD not required, host required
- `HttpUrl`: scheme `http` or `https`, TLD required, host required, max length 2083
- `FileUrl`: scheme `file`, host not required
- `PostgresDsn`: scheme `postgres`, `postgresql`, user info required, TLD not required, host required. Also, its supported DBAPI dialects:
  - `postgresql+asyncpg`
  - `postgresql+pg8000`
  - `postgresql+psycopg2`
  - `postgresql+psycopg2cffi`
  - `postgresql+py-postgresql`
  - `postgresql+pygresql`
- `RedisDsn`: scheme `redis` or `rediss`, user info not required, tld not required, host not required (CHANGED: user info
  not required from **v1.6** onwards), user info may be passed without user part (e.g., `rediss://:pass@localhost`)
- `stricturl`: method with the following keyword arguments:
    - `strip_whitespace: bool = True`
    - `min_length: int = 1`
    - `max_length: int = 2 ** 16`
    - `tld_required: bool = True`
    - `host_required: bool = True`
    - `allowed_schemes: Optional[Set[str]] = None`

The above types (which all inherit from `AnyUrl`) will attempt to give descriptive errors when invalid URLs are
provided:

```py
{!.tmp_examples/types_urls.py!}
```
_(This script is complete, it should run "as is")_

If you require a custom URI/URL type, it can be created in a similar way to the types defined above.

#### URL Properties

Assuming an input URL of `http://samuel:pass@example.com:8000/the/path/?query=here#fragment=is;this=bit`,
the above types export the following properties:

- `scheme`: always set - the url scheme (`http` above)
- `host`: always set - the url host (`example.com` above)
- `host_type`: always set - describes the type of host, either:

  - `domain`: e.g. `example.com`,
  - `int_domain`: international domain, see [below](#international-domains), e.g. `exampl£e.org`,
  - `ipv4`: an IP V4 address, e.g. `127.0.0.1`, or
  - `ipv6`: an IP V6 address, e.g. `2001:db8:ff00:42`

- `user`: optional - the username if included (`samuel` above)
- `password`: optional - the password if included (`pass` above)
- `tld`: optional - the top level domain (`com` above),
  **Note: this will be wrong for any two-level domain, e.g. "co.uk".** You'll need to implement your own list of TLDs
  if you require full TLD validation
- `port`: optional - the port (`8000` above)
- `path`: optional - the path (`/the/path/` above)
- `query`: optional - the URL query (aka GET arguments or "search string") (`query=here` above)
- `fragment`: optional - the fragment (`fragment=is;this=bit` above)

If further validation is required, these properties can be used by validators to enforce specific behaviour:

```py
{!.tmp_examples/types_url_properties.py!}
```
_(This script is complete, it should run "as is")_

#### International Domains

"International domains" (e.g. a URL where the host or TLD includes non-ascii characters) will be encoded via
[punycode](https://en.wikipedia.org/wiki/Punycode) (see
[this article](https://www.xudongz.com/blog/2017/idn-phishing/) for a good description of why this is important):

```py
{!.tmp_examples/types_url_punycode.py!}
```
_(This script is complete, it should run "as is")_


!!! warning
    #### Underscores in Hostnames

    In *pydantic* underscores are allowed in all parts of a domain except the tld.
    Technically this might be wrong - in theory the hostname cannot have underscores, but subdomains can.

    To explain this; consider the following two cases:

    - `exam_ple.co.uk`: the hostname is `exam_ple`, which should not be allowed since it contains an underscore
    - `foo_bar.example.com` the hostname is `example`, which should be allowed since the underscore is in the subdomain

    Without having an exhaustive list of TLDs, it would be impossible to differentiate between these two. Therefore
    underscores are allowed, but you can always do further validation in a validator if desired.

    Also, Chrome, Firefox, and Safari all currently accept `http://exam_ple.com` as a URL, so we're in good
    (or at least big) company.

### Color Type

You can use the `Color` data type for storing colors as per
[CSS3 specification](http://www.w3.org/TR/css3-color/#svg-color). Colors can be defined via:

- [name](http://www.w3.org/TR/SVG11/types.html#ColorKeywords) (e.g. `"Black"`, `"azure"`)
- [hexadecimal value](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet)
  (e.g. `"0x000"`, `"#FFFFFF"`, `"7fffd4"`)
- RGB/RGBA tuples (e.g. `(255, 255, 255)`, `(255, 255, 255, 0.5)`)
- [RGB/RGBA strings](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#RGB_colors)
  (e.g. `"rgb(255, 255, 255)"`, `"rgba(255, 255, 255, 0.5)"`)
- [HSL strings](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#HSL_colors)
  (e.g. `"hsl(270, 60%, 70%)"`, `"hsl(270, 60%, 70%, .5)"`)

```py
{!.tmp_examples/types_color.py!}
```
_(This script is complete, it should run "as is")_

`Color` has the following methods:

**`original`**
: the original string or tuple passed to `Color`

**`as_named`**
: returns a named CSS3 color; fails if the alpha channel is set or no such color exists unless
  `fallback=True` is supplied, in which case it falls back to `as_hex`

**`as_hex`**
: returns a string in the format `#fff` or `#ffffff`; will contain 4 (or 8) hex values if the alpha channel is set,
  e.g. `#7f33cc26`

**`as_rgb`**
: returns a string in the format `rgb(<red>, <green>, <blue>)`, or `rgba(<red>, <green>, <blue>, <alpha>)`
  if the alpha channel is set

**`as_rgb_tuple`**
: returns a 3- or 4-tuple in RGB(a) format. The `alpha` keyword argument can be used to define whether
  the alpha channel should be included;
  options: `True` - always include, `False` - never include, `None` (default) - include if set

**`as_hsl`**
: string in the format `hsl(<hue deg>, <saturation %>, <lightness %>)`
  or `hsl(<hue deg>, <saturation %>, <lightness %>, <alpha>)` if the alpha channel is set

**`as_hsl_tuple`**
: returns a 3- or 4-tuple in HSL(a) format. The `alpha` keyword argument can be used to define whether
  the alpha channel should be included;
  options: `True` - always include, `False` - never include, `None` (the default)  - include if set

The `__str__` method for `Color` returns `self.as_named(fallback=True)`.

!!! note
    the `as_hsl*` refer to hue, saturation, lightness "HSL" as used in html and most of the world, **not**
    "HLS" as used in python's `colorsys`.

### Secret Types

You can use the `SecretStr` and the `SecretBytes` data types for storing sensitive information
that you do not want to be visible in logging or tracebacks.
`SecretStr` and `SecretBytes` can be initialized idempotently or by using `str` or `bytes` literals respectively.
The `SecretStr` and `SecretBytes` will be formatted as either `'**********'` or `''` on conversion to json.

```py
{!.tmp_examples/types_secret_types.py!}
```
_(This script is complete, it should run "as is")_

### Json Type

You can use `Json` data type to make *pydantic* first load a raw JSON string.
It can also optionally be used to parse the loaded object into another type base on
the type `Json` is parameterised with:

```py
{!.tmp_examples/types_json_type.py!}
```
_(This script is complete, it should run "as is")_

### Payment Card Numbers

The `PaymentCardNumber` type validates [payment cards](https://en.wikipedia.org/wiki/Payment_card)
(such as a debit or credit card).

```py
{!.tmp_examples/types_payment_card_number.py!}
```
_(This script is complete, it should run "as is")_

`PaymentCardBrand` can be one of the following based on the BIN:

* `PaymentCardBrand.amex`
* `PaymentCardBrand.mastercard`
* `PaymentCardBrand.visa`
* `PaymentCardBrand.other`

The actual validation verifies the card number is:

* a `str` of only digits
* [luhn](https://en.wikipedia.org/wiki/Luhn_algorithm) valid
* the correct length based on the BIN, if Amex, Mastercard or Visa, and between
  12 and 19 digits for all other brands

## Constrained Types

The value of numerous common types can be restricted using `con*` type functions:

```py
{!.tmp_examples/types_constrained.py!}
```
_(This script is complete, it should run "as is")_

Where `Field` refers to the [field function](schema.md#field-customisation).

### Arguments to `conlist`
The following arguments are available when using the `conlist` type function

- `item_type: Type[T]`: type of the list items
- `min_items: int = None`: minimum number of items in the list
- `max_items: int = None`: maximum number of items in the list

### Arguments to `conset`
The following arguments are available when using the `conset` type function

- `item_type: Type[T]`: type of the set items
- `min_items: int = None`: minimum number of items in the set
- `max_items: int = None`: maximum number of items in the set

### Arguments to `conint`
The following arguments are available when using the `conint` type function

- `strict: bool = False`: controls type coercion
- `gt: int = None`: enforces integer to be greater than the set value
- `ge: int = None`: enforces integer to be greater than or equal to the set value
- `lt: int = None`: enforces integer to be less than the set value
- `le: int = None`: enforces integer to be less than or equal to the set value
- `multiple_of: int = None`: enforces integer to be a multiple of the set value

### Arguments to `confloat`
The following arguments are available when using the `confloat` type function

- `strict: bool = False`: controls type coercion
- `gt: float = None`: enforces float to be greater than the set value
- `ge: float = None`: enforces float to be greater than or equal to the set value
- `lt: float = None`: enforces float to be less than the set value
- `le: float = None`: enforces float to be less than or equal to the set value
- `multiple_of: float = None`: enforces float to be a multiple of the set value

### Arguments to `condecimal`
The following arguments are available when using the `condecimal` type function

- `gt: Decimal = None`: enforces decimal to be greater than the set value
- `ge: Decimal = None`: enforces decimal to be greater than or equal to the set value
- `lt: Decimal = None`: enforces decimal to be less than the set value
- `le: Decimal = None`: enforces decimal to be less than or equal to the set value
- `max_digits: int = None`: maximum number of digits within the decimal. it does not include a zero before the decimal point or trailing decimal zeroes
- `decimal_places: int = None`: max number of decimal places allowed. it does not include trailing decimal zeroes
- `multiple_of: Decimal = None`: enforces decimal to be a multiple of the set value

### Arguments to `constr`
The following arguments are available when using the `constr` type function

- `strip_whitespace: bool = False`: removes leading and trailing whitespace
- `to_lower: bool = False`: turns all characters to lowercase
- `strict: bool = False`: controls type coercion
- `min_length: int = None`: minimum length of the string
- `max_length: int = None`: maximum length of the string
- `curtail_length: int = None`: shrinks the string length to the set value when it is longer than the set value
- `regex: str = None`: regex to validate the string against

### Arguments to `conbytes`
The following arguments are available when using the `conbytes` type function

- `strip_whitespace: bool = False`: removes leading and trailing whitespace
- `to_lower: bool = False`: turns all characters to lowercase
- `min_length: int = None`: minimum length of the byte string
- `max_length: int = None`: maximum length of the byte string
- `strict: bool = False`: controls type coercion


## Strict Types

You can use the `StrictStr`, `StrictBytes`, `StrictInt`, `StrictFloat`, and `StrictBool` types
to prevent coercion from compatible types.
These types will only pass validation when the validated value is of the respective type or is a subtype of that type.
This behavior is also exposed via the `strict` field of the `ConstrainedStr`, `ConstrainedBytes`,
`ConstrainedFloat` and `ConstrainedInt` classes and can be combined with a multitude of complex validation rules.

The following caveats apply:

- `StrictBytes` (and the `strict` option of `ConstrainedBytes`) will accept both `bytes`,
   and `bytearray` types.
- `StrictInt` (and the `strict` option of `ConstrainedInt`) will not accept `bool` types,
    even though `bool` is a subclass of `int` in Python. Other subclasses will work.
- `StrictFloat` (and the `strict` option of `ConstrainedFloat`) will not accept `int`.

```py
{!.tmp_examples/types_strict.py!}
```
_(This script is complete, it should run "as is")_

## ByteSize

You can use the `ByteSize` data type to convert byte string representation to
raw bytes and print out human readable versions of the bytes as well.

!!! info
    Note that `1b` will be parsed as "1 byte" and not "1 bit".

```py
{!.tmp_examples/types_bytesize.py!}
```
_(This script is complete, it should run "as is")_

## Custom Data Types

You can also define your own custom data types. There are several ways to achieve it.

### Classes with `__get_validators__`

You use a custom class with a classmethod `__get_validators__`. It will be called
to get validators to parse and validate the input data.

!!! tip
    These validators have the same semantics as in [Validators](validators.md), you can
    declare a parameter `config`, `field`, etc.

```py
{!.tmp_examples/types_custom_type.py!}
```
_(This script is complete, it should run "as is")_

Similar validation could be achieved using [`constr(regex=...)`](#constrained-types) except the value won't be
formatted with a space, the schema would just include the full pattern and the returned value would be a vanilla string.

See [schema](schema.md) for more details on how the model's schema is generated.

### Arbitrary Types Allowed

You can allow arbitrary types using the `arbitrary_types_allowed` config in the
[Model Config](model_config.md).

```py
{!.tmp_examples/types_arbitrary_allowed.py!}
```
_(This script is complete, it should run "as is")_

### Generic Classes as Types

!!! warning
    This is an advanced technique that you might not need in the beginning. In most of
    the cases you will probably be fine with standard *pydantic* models.

You can use
[Generic Classes](https://docs.python.org/3/library/typing.html#typing.Generic) as
field types and perform custom validation based on the "type parameters" (or sub-types)
with `__get_validators__`.

If the Generic class that you are using as a sub-type has a classmethod
`__get_validators__` you don't need to use `arbitrary_types_allowed` for it to work.

Because you can declare validators that receive the current `field`, you can extract
the `sub_fields` (from the generic class type parameters) and validate data with them.

```py
{!.tmp_examples/types_generics.py!}
```
_(This script is complete, it should run "as is")_

</details>