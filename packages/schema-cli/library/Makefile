include Environment

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

Organization := https://github.com/cloud-hybrid

Repositories ?= ""

Folders = $(patsubst $(Organization)/%.git, %, $(Repositories))

Node = $(shell command -v node)

clean:
	@rm -r -f *.zip
	@rm -r -f build
	@rm -r -f distribution

	@rm -r -f $(Folders)

clone: clean
	$(foreach _, $(Repositories), git clone $_;)

install:
	@node index.js -- $(Folders)

.PHONY: clean
