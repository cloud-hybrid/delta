variable "organization" {
    description = "Organization Name"
    default = "Capstone"
    type        = string
}

variable "environment" {
    description = "Target Cloud Environment"
    type        = string
}

variable "profile" {
    description = "Target Cloud Profile"
    default     = "default"
    type        = string
}

variable "region" {
    description = "Target Cloud Region"
    default     = "us-east-2"
    type        = string
}

variable "certificate" {
    description = "Certificate ARN"
    type        = string
}

variable "hosted-zone-fqdn" {
    description = "Hosted Zone Name"
    default = "pebblego.com"
    type        = string
}

variable "hosted-zone-id" {
    description = "Hosted Zone ID"
    type        = string
    default     = "Z3HAEUAWJJTLQB"
}

variable "creator" {
    description = "Name (Human Identifiable)"
    type = string
    default = "Jacob Sanders"
}

variable "cloud" {
    description = "Cloud Provider"
    type = string
    default = "AWS"
}

variable "application" {
    description = "Application Name"
    type = string
    default = "Pebble-Go"
}

variable "service" {
    description = "Application's Service Name"
    type = string
    default = "Shell-UI"
}

variable "subdomain" {
    description = "Service's Subdomain"
    type = string
    default = "shell"
}
