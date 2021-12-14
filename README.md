# delta #

> *Constructs are classes which define a “piece of system state”. Constructs can be composed together to form higher-level building blocks which represent more complex state. Constructs are often used to represent the desired state of cloud applications. For example, in the AWS CDK, which is used to define the desired state for AWS infrastructure using CloudFormation, the lowest-level construct represents a resource definition in a CloudFormation template. These resources are composed to represent higher-level logical units of a cloud application, etc.*

## Overview ## 

[...] (*Under Development*)

## Workspace(s) ##

```bash
npm run start --workspace packages/api
```

## Updating NPM Dependencies ##

In order to update all dependencies across all module(s) or package(s):

```bash
npm update
```

Updates can also be safely checked via a ***dry-run***:

```bash
npm update dry-run
```

or

```bash
npm outdated
```
