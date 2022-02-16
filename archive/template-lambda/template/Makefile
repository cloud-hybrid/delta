#!/usr/bin/env make

UNAME 			= $(shell uname)

SHELL          	:= $(shell command -v bash)
CWD 			:= $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

Directory 		= $(shell git rev-parse --show-toplevel)

Remote   		= $(shell git remote | xargs echo)
Branch 	  		= $(shell git rev-parse --abbrev-ref HEAD)
Branches  		= $(shell git for-each-ref --format="%(refname:short)" refs/heads/ | xargs printf)

Remotes   		= $(shell git remote -v | xargs echo)

Dirty 			= $(shell git diff --shortstat 2>/dev/null | tail -n1)

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

Node = $(shell command -v node)

Install = install --no-audit --no-fund

Wipe = rm -r -f node_modules

Packages = $(sort $(dir $(wildcard ./packages/*/)))
Folders = $(foreach _, $(Packages), $_)

.PHONY: informational

#remove:
#	$(foreach Target, $(Folders), ( cd $(Target) && $(Wipe) || true ) ; )

install:
	$(foreach Target, $(Folders), ( cd $(Target) && npm $(Install) ) ; )

build: install
	@sam build --config-file configuration.toml

package: build
	@sam package --config-file configuration.toml

deploy: package
	@sam deploy --config-file configuration.toml

delete:
	@sam delete --config-file configuration.toml --no-prompts

overwrite:
	@sam package --config-file configuration.toml
	@sam deploy --config-file configuration.toml

informational:
	@echo "UNAME    := $(UNAME)"
	@echo "SHELL    := $(SHELL)"
	@echo "CWD      := $(CWD)"
	@echo ""
	@echo "Directory := $(Directory)"
	@echo ""
	@echo "Remote 		:= $(Remote)"
	@echo "Branch 		:= $(Branch)"
	@echo "Branches 	:= $(Branches)"
	@echo ""
	@echo "Remotes := $(Remotes)"
	@echo ""
	@echo "Dirty := $(Dirty)"
	@echo ""
	@echo "Version := $(Version)"
	@echo ""
	@echo "Build := $(Build)"
	@echo ""
	@echo "Major := $(Major)"
	@echo "Minor := $(Minor)"
	@echo "Patch := $(Patch)"
	@echo ""
	@echo "Major-Upgrade := $(Major-Upgrade)"
	@echo "Minor-Upgrade := $(Minor-Upgrade)"
	@echo "Patch-Upgrade := $(Patch-Upgrade)"
	@echo ""
	@echo "Major-Build-Upgrade := $(Major-Build-Upgrade)"
	@echo "Minor-Build-Upgrade := $(Minor-Build-Upgrade)"
	@echo "Patch-Build-Upgrade := $(Patch-Build-Upgrade)"
	@echo ""
	@echo "Node := $(Node)"
	@echo ""
	@echo "Deployment-Packages := $(sort $(dir $(wildcard ./packages/*/)))"
