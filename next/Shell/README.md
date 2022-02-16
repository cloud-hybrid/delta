[//]: # (<!-- BEGIN_TF_DOCS -->)

[//]: # ([User-Input] | configuration/documentation/overview.md)

# [`shell`](https://gitlab.mycapstone.com/Pebble-Go/Front-End/Shell.git) - *Terraform* #

*Infrastructure as Code*

## Table of Contents ##

[[_TOC_]]

---

## Overview ##

[//]: # ([User-Input] | configuration/documentation/overview.md)

**::: --- Boilerplate --- :::**

## IaC ##

### Setup & Runtime ###

The following package(s) & Terraform provider(s) are required
in order to manage the following infrastructure.

#### Requirements

No requirements.

## Package ##

### Pipeline & Local Input ###

The following variables are required for an autonomous deployment.

##### Example Input File(s) #####

***`terraform.tfvars`*** - **Note**: empty string(s) are required to be populated via the user, or the ci-cd runtime.

```hcl
application      = "Pebble-Go"
certificate      = ""
cloud            = "AWS"
creator          = "Jacob Sanders"
environment      = ""
hosted-zone-fqdn = "pebblego.com"
hosted-zone-id   = "Z3HAEUAWJJTLQB"
organization     = "Capstone"
profile          = "default"
region           = "us-east-2"
service          = "Shell-UI"
subdomain        = "shell"
```

***`terraform.tfvars.json`*** - **Note**: `null` value(s) are required to be populated via the user, or the ci-cd runtime.

```json
{
  "application": "Pebble-Go",
  "certificate": null,
  "cloud": "AWS",
  "creator": "Jacob Sanders",
  "environment": null,
  "hosted-zone-fqdn": "pebblego.com",
  "hosted-zone-id": "Z3HAEUAWJJTLQB",
  "organization": "Capstone",
  "profile": "default",
  "region": "us-east-2",
  "service": "Shell-UI",
  "subdomain": "shell"
}
```

#### Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_certificate"></a> [certificate](#input\_certificate) | Certificate ARN | `string` | n/a | yes |
| <a name="input_environment"></a> [environment](#input\_environment) | Target Cloud Environment | `string` | n/a | yes |
| <a name="input_application"></a> [application](#input\_application) | Application Name | `string` | `"Pebble-Go"` | no |
| <a name="input_cloud"></a> [cloud](#input\_cloud) | Cloud Provider | `string` | `"AWS"` | no |
| <a name="input_creator"></a> [creator](#input\_creator) | Name (Human Identifiable) | `string` | `"Jacob Sanders"` | no |
| <a name="input_hosted-zone-fqdn"></a> [hosted-zone-fqdn](#input\_hosted-zone-fqdn) | Hosted Zone Name | `string` | `"pebblego.com"` | no |
| <a name="input_hosted-zone-id"></a> [hosted-zone-id](#input\_hosted-zone-id) | Hosted Zone ID | `string` | `"Z3HAEUAWJJTLQB"` | no |
| <a name="input_organization"></a> [organization](#input\_organization) | Organization Name | `string` | `"Capstone"` | no |
| <a name="input_profile"></a> [profile](#input\_profile) | Target Cloud Profile | `string` | `"default"` | no |
| <a name="input_region"></a> [region](#input\_region) | Target Cloud Region | `string` | `"us-east-2"` | no |
| <a name="input_service"></a> [service](#input\_service) | Application's Service Name | `string` | `"Shell-UI"` | no |
| <a name="input_subdomain"></a> [subdomain](#input\_subdomain) | Service's Subdomain | `string` | `"shell"` | no |

Additionally, please note that **only the `terraform.tfvars` file is automatically searched for**; if `terraform.tfvars.json`
-- or any arbitrary `*.json` file -- is instead the target input file, then the `--var-file` flag needs to be
included.

With the required variables defined via `terraform.tfvars`, execute a `terraform`
related command(s) via:

```bash
terraform validate
terraform plan --out "local-state"
terraform apply --state "local-state" --state-out "local-state.archive"
```

or via a `terraform.tfvars.json` (or another type of `*.json` file) ...

```bash
terraform validate --json
terraform plan --out "local-state" --var-file "terraform.tfvars.json"
terraform apply --state "local-state" --state-out "local-state.archive" --var-file "terraform.tfvars.json"
```

---

#### Resources

| Name | Type |
|------|------|
| [aws_cloudfront_distribution.target-cdn](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_distribution) | resource |
| [aws_cloudfront_origin_access_identity.cdn-identity](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudfront_origin_access_identity) | resource |
| [aws_s3_bucket.failover-bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.logging-bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.redirect-target-bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.target-bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket_policy.failover-bucket-policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_policy.target-bucket-policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) | resource |
| [aws_canonical_user_id.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/canonical_user_id) | data source |
| [aws_iam_policy_document.s3-failover-policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.s3-target-policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |

#### Modules

No modules.

#### Outputs

| Name | Description |
|------|-------------|
| <a name="output_canonical_user_id"></a> [canonical\_user\_id](#output\_canonical\_user\_id) | n/a |
| <a name="output_cdn"></a> [cdn](#output\_cdn) | n/a |
| <a name="output_fqdn"></a> [fqdn](#output\_fqdn) | n/a |
| <a name="output_zone"></a> [zone](#output\_zone) | n/a |

#### Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | n/a |

---

[//]: # ([Static] | configuration/documentation/footer.md)

## Auto-Generating Documentation ##

In order to successfully generate `terraform` documentation, the following steps need to be
performed in order:

1. `brew install terraform-docs` - Install Documentation Dependency
2. `terraform init` - Initialize Terraform Local Requirements
3. `eval "${PWD}/ci-cd/tfvars"` - Generate the `terraform.tfvars` & `terraform.tfvars.json` Files
4. `eval "${PWD}/ci-cd/inject"` - Inject `README.md` via Configuration Settings + `*.md` Files

Lastly, Commit & Push to VCS.


[//]: # (<!-- END_TF_DOCS -->)

## Certificates ##

### API Gateway Custom URL Certificates ###

|   Environment    |                                          ARN                                          |
|:----------------:|:-------------------------------------------------------------------------------------:|
| **Development**  | `arn:aws:acm:us-east-2:700423713782:certificate/42fc8234-dcb4-4f8e-9ba6-080941754683` |
|      **QA**      | `arn:aws:acm:us-east-2:700423713782:certificate/36025c62-2708-4266-abd6-19543779eac0` |
|   **Staging**    | `arn:aws:acm:us-east-2:700423713782:certificate/8585cb2e-d8b4-4991-bfa9-9408dbaf2cce` |
|  **Editorial**   | `arn:aws:acm:us-east-2:028463879607:certificate/00b01282-6b4f-48a1-8eb3-187706fe9de6` |
|  **Production**  | `arn:aws:acm:us-east-2:028463879607:certificate/b88f8dcf-60c1-4283-afd8-9ab7be45591d` |

### CDN Certificates ###

|   Environment    |                                          ARN                                          |
|:----------------:|:-------------------------------------------------------------------------------------:|
| **Development**  | `arn:aws:acm:us-east-1:700423713782:certificate/ef54476d-60a1-43d5-881e-ed47bec88646` |
|      **QA**      | `arn:aws:acm:us-east-1:700423713782:certificate/a2509f13-07f9-4e47-8fb8-d257f8c498b6` |
|   **Staging**    | `arn:aws:acm:us-east-1:700423713782:certificate/60d62f36-c2e1-4ece-be36-4f70736f7f70` |
|  **Editorial**   |                                        `N/A`                                          |
|  **Production**  | `arn:aws:acm:us-east-1:028463879607:certificate/0c0802ad-ade3-4bc2-b27f-bd767f38fa3b` |
