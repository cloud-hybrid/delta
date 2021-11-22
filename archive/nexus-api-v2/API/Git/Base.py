import os
import json
import typing
import pkgutil
import dataclasses

Data = json.loads(pkgutil.get_data("API", "Environment.json"))

Gitlab = Data["Gitlab"]
Github = Data["Github"]

Type = dataclasses.dataclass(init = False)
Schema = dataclasses.dataclass(init = True)

String = str
Integer = int
Union = typing.Union
Optional = typing.Optional
Any = typing.Any
Table = typing.Dict

@Type
class Lab:
    URL: String         = Gitlab["Url"] # ... = Environment("GITLAB_URL", default = "gitlab.com")
    Username: String    = Gitlab["Username"] # ... = Environment("GITLAB_USERNAME", default = "")

    Default: String     = Gitlab["Token"] # ... = Environment("GITLAB_API_TOKEN", default = "")
    Read: String        = Gitlab["Token"] # ... = Environment("GITLAB_API_TOKEN", default = "")
    Write: String       = Gitlab["Token"] # ... = Environment("GITLAB_API_TOKEN", default = "")
    Registry: String    = Gitlab["Token"] # ... = Environment("GITLAB_API_TOKEN", default = "")
    Packages: String    = Gitlab["Token"] # ... = Environment("GITLAB_API_TOKEN", default = "")

@Type
class Hub:
    URL: String = "github.com"
    Username: String   = Github["Username"] # ... = Environment("GITHUB_USERNAME", default = "")

    Default: String    = Github["Token"] # ... = Environment("GITHUB_API_TOKEN", default = "")
    Read: String       = Github["Token"] # ... = Environment("GITHUB_API_TOKEN_READ_ONLY", default = "")
    Write: String      = Github["Token"] # ... = Environment("GITHUB_API_TOKEN_WRITE_ONLY", default = "")


@Schema
class Git:
    Lab: Lab = Lab
    Hub: Hub = Hub

__all__ = [
    "Git",
    "Lab",
    "Hub"
]
