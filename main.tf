
variable "environment" {
  default = "dev"
  description = "Environment name"
}

location = "West Europe"

# We strongly recommend using the required_providers block to set the
# Azure Provider source and version being used
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 3.0.0"
    }
  }
}

# Configure the Microsoft Azure Provider
provider "azurerm" {
  features {}
}



resource "azurerm_resource_group" "rg" {
  location = "${var.location}"
  name     = "rg-azure-infra-${var.environment}"

}

# # Create a resource group
# resource "azurerm_resource_group" "example" {
#   name     = "example-resources"
#   location = "West Europe"
# }
