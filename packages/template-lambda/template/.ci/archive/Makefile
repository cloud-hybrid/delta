include Environment

#
# Global Runtime Variable(s)
#

SHELL          	:= $(shell command -v bash)

UNAME 			= $(shell uname)

Directory 		= $(shell git rev-parse --show-toplevel)

Branch 	  		= $(shell git rev-parse --abbrev-ref HEAD)
Branches  		= $(shell git for-each-ref --format='%(refname:short)' refs/heads/ | xargs echo)
Remotes   		= $(shell git remote | xargs echo )

Dirty 			= $(shell git diff --shortstat 2> /dev/null | tail -n1 )

Version  		= $(shell [ -f VERSION ] && head VERSION || echo "0.0.0")

Build    		= $(shell git log --oneline | wc -l | sed -e "s/[ \t]*//g")

Major      		= $(shell echo $(Version) | sed "s/^\([0-9]*\).*/\1/")
Minor      		= $(shell echo $(Version) | sed "s/[0-9]*\.\([0-9]*\).*/\1/")
Patch      		= $(shell echo $(Version) | sed "s/[0-9]*\.[0-9]*\.\([0-9]*\).*/\1/")

Major-Upgrade 	= $(shell expr $(Major) + 1).$(Minor).$(Patch)
Minor-Upgrade 	= $(Major).$(shell expr $(Minor) + 1).$(Patch)
Patch-Upgrade 	= $(Major).$(Minor).$(shell expr $(Patch) + 1)

Major-Build-Upgrade 	= $(shell expr $(Major) + 1).$(Minor).$(Patch)-Build-$(Build)
Minor-Build-Upgrade 	= $(Major).$(shell expr $(Minor) + 1).$(Patch)-Build-$(Build)
Patch-Build-Upgrade 	= $(Major).$(Minor).$(shell expr $(Patch) + 1)-Build-$(Build)

#
# User Defined Variable(s)
#

Organization := https://github.com/[organization-name]-global

Repositories =                                                             \
    https://github.com/[organization-name]-global/post_auth_cookie.git                \
    https://github.com/[organization-name]-global/utils_lambda_layer.git              \
    https://github.com/[organization-name]-global/post_long_token_for_short_token.git

Folders = $(patsubst $(Organization)/%.git, %, $(Repositories))

Node = $(shell command -v node)

#
# Functional Entry-Point
#

clean:
	@rm -r -f *.zip
	@rm -r -f .aws-sam
	@rm -r -f nodejs

	@rm -f package.yml

	@rm -r -f distribution
	@rm -r -f node_modules

	@find "." -type "d" -name "node_modules" -delete

clone: clean
	$(foreach _, $(Repositories), git clone $_;)

compress: clone
	@mkdir -p ./nodejs
	@cp -r -f ./utils_lambda_layer/layer_code/nodejs/* ./nodejs/
	@zip Layer-Artifacts.zip -r nodejs
	@rm -r -f ./nodejs
	@rm -r -f $(Folders)

package: compress
	@sam build --config-file "configuration.toml" --template "template.Yaml" --debug

run: package
	@sam local start-api --debug

test-stack-deployment:
	@sam sync --stack-name "${STACK}"

install:
	@node index.js -- $(Folders)

pre-package:
	@find "packages" -type "d" -name "node_modules" -delete

post-install:
	@find "packages" -type "d" -name "node_modules" -delete

#
# --> Default
#

.PHONY: clean
