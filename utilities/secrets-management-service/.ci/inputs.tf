variable "organization" {
    description = "Organization Name"
    type = string
}

variable "environment" {
    description = "Target Cloud Environment"
    default = "Development"
    type = string
}

variable "profile" {
    description = "Target Cloud Profile"
    default = "default"
    type = string
}

variable "region" {
    description = "Target Cloud Region"
    default = "us-east-2"
    type = string
}
