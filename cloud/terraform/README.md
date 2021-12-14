# Terraform Cloud-Development Kit #

## Requirements ##

- Terraform >= `1.00`
- [Terraform CDK](https://learn.hashicorp.com/tutorials/terraform/cdktf-install])
- Node.js >= `14.10`
- NPM ~ `8`
- Docker LTS

### Setup ###

Place the following into a script, or copy and paste into an applicable commandline.

```bash
#!/bin/bash --posix

# --> NVM
function NVM () {
    if [[ "$(command -v nvm)" == "" ]]; then 
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        
        chmod a+x "${HOME}/.nvm/nvm.sh" || true
        
        source "${HOME}/.nvm/nvm.sh" || echo "NVM Installation was Unsuccessful"
        
        echo "$(command -v nvm)" &>/dev/null;
        
        return ${?}
    else 
        return 0
    fi
}

# --> Node.js + NPM
function Node () {
    nvm install --lts && nvm use --lts || true
    
    echo "Node Version: $(node --version)"
    echo "NPM Version: $(npm --version)"
    
    return ${?}
}

function Unlink () {
    if [[ "$(command -v homebrew)" != "" ]];
        then
            brew unlink "tfenv" &>/dev/null || true
    fi
} 

function CDK () {
    # --> CDKTF Installation via Homebrew
    # ...     -  Faster Bindings; MacOS only
    if [[ "$(command -v brewbrew)" != "" ]];
        then
            Unlink; brew install "cdktf"
    fi
    
    # --> CDKTF Installation via NPM
    # ...     - Slower Bindings but OS Agnostic
    if [[ "$(command -v npm)" != "" ]];
        then
            npm install --global cdktf-cli@next
    fi
}

Main () {
    NVM && Node && CDK
    
    [[ "${?}" == "0" ]] && echo "Successful"
    
    return ${?}      
}

Main
```

Test the ABI:

```bash
cdktf --version && cdktf --help
```

Lastly, open `Docker`

- MacOS: `open -a Docker`

## Development, Local ##

```bash
mkdir -p "aws-lambda" && cd "${_}"

cdktf init --template "typescript" --local

npm install --save-dev cdktf-cli
```

```typescript
import {Construct} from 'constructs'
import {App, TerraformStack, TerraformOutput} from 'cdktf'
import {AwsProvider, Instance} from './.gen/providers/aws'

class MyStack extends TerraformStack {
    constructor(scope: Construct, id: string) {
        super(scope, id)

        new AwsProvider(this, 'aws', {
            region: 'us-west-1',
        })

        const instance = new Instance(this, 'compute', {
            ami: 'ami-01456a894f71116f2',
            instanceType: 't2.micro',
        })

        new TerraformOutput(this, 'public_ip', {
            value: instance.publicIp,
        })

    }
}

const app = new App()
new MyStack(app, 'typescript-aws')
app.synth()
```

---

## NPM CDK Providers ##

- `npm install --save-dev @cdktf/provider-aws`
- `npm install --save-dev @cdktf/provider-google`
- `npm install --save-dev @cdktf/provider-azurerm`
- `npm install --save-dev @cdktf/provider-docker`
- `npm install --save-dev @cdktf/provider-github`
- `npm install --save-dev @cdktf/provider-null`
- `npm install --save-dev @cdktf/provider-local`
- `npm install --save-dev @cdktf/provider-random`
- `npm install --save-dev @cdktf/provider-archive`
- `npm install --save-dev @cdktf/provider-tls`
