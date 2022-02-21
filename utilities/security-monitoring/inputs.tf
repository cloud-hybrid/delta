variable "organization" {
  description = "Organization Name"
  type        = string
}

variable "environment" {
  description = "Target Cloud Environment"
  default     = "Production"
  type        = string
}

variable "region" {
  description = "Target Cloud Region"
  type        = string
}
