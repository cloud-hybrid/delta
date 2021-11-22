from . import *
from . import Base as Scheme

__module__ = __name__

Schema = Scheme.Model

class Base(Schema):
    """
    ...
    """

    class Config(Schema.Configuration): title = "Gitlab" + "-" + "{0}".format(__module__.split(".").pop())

class Query(Base):
    """
    API Search-Query Schema
    """

    archived: Optional[Boolean] = Field(
        alias = "Archived",
        title = "archived",
        description = "Limit by archived status"
    )

    id_after: Integer = Field(
        alias = "ID-Greater-Than",
        title = "id_after",
        description = "Limit results to projects with IDs greater than the specified ID"
    )

    id_before: Integer = Field(
        alias = "ID-Less-Than",
        title = "id_before",
        description = "Limit results to projects with IDs less than the specified ID"
    )

    last_activity_after: Date = Field(
        alias = "Last-Activity-After",
        title = "last_activity_after",
        description = "Limit results to projects with last_activity after specified time. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ"
    )

    last_activity_before: Date = Field(
        alias = "Last-Activity-Before",
        title = "last_activity_before",
        description = "Limit results to projects with last_activity before specified time. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ"
    )

    membership: Optional[Boolean] = Field(
        alias = "Membership",
        title = "membership",
        description = "Limit by projects that the current user is a member of"
    )

    min_access_level: Integer  = Field(
        alias = "Minimum-Access-Level",
        title = "min_access_level",
        description = "Limit by current user minimal access level"
    )

    order_by: String = Field(
        alias = "Order-By",
        title = "order_by",
        description = "Return projects ordered by id, name, path, created_at, updated_at, or last_activity_at fields. repository_size, storage_size, packages_size or wiki_size fields are only allowed for admins. Default is created_at"
    )

    owned: Optional[Boolean] = Field(
        alias = "Owned",
        title = "owned",
        description = "Limit by projects explicitly owned by the current user"
    )

    repository_checksum_failed: Optional[Union[String, Boolean]] = Field("Premium-Required",
        alias = "Checksum-Failure",
        title = "repository_checksum_failed",
        description = "Limit projects where the repository checksum calculation has failed (Introduced in GitLab Premium 11.2)"
    )

    repository_storage: String  = Field(
        alias = "Storage",
        title = "repository_storage",
        description = "Limit results to projects stored on repository_storage. (admins only)"
    )

    search_namespaces: Optional[Boolean] = Field(
        alias = "Search-Namespace",
        title = "search_namespaces",
        description = "Include ancestor namespaces when matching search criteria. Default is false"
    )

    search: String = Field(
        alias = "Search",
        title = "search",
        description = "Return list of projects matching the search criteria"
    )

    simple: Optional[Boolean] = Field(
        alias = "Simple",
        title = "simple",
        description = "Return only limited fields for each project. This is a no-op without authentication as then only simple fields are returned"
    )

    sort: String = Field(
        alias = "Sortable-Function",
        title = "sort",
        description = "Return projects sorted in asc or desc order. Default is desc"
    )

    starred: Optional[Boolean] = Field(
        alias = "Starred",
        title = "starred",
        description = "Limit by projects starred by the current user"
    )

    statistics: Optional[Boolean] = Field(
        alias = "Statistics",
        title = "statistics",
        description = "Include project statistics"
    )

    visibility: String = Field(
        alias = "Visibility",
        title = "visibility",
        description = "Limit by visibility public, internal, or private"
    )

    wiki_checksum_failed: Optional[Union[String,Boolean]] = Field("Premium-Required",
        alias = "Wiki-Checksum-Failure",
        title = "wiki_checksum_failed",
        description = "Limit projects where the wiki checksum calculation has failed (Introduced in GitLab Premium 11.2)"
    )

    with_custom_attributes: Optional[Boolean] = Field(
        alias = "Custom-Attributes",
        title = "with_custom_attributes",
        description = "Include custom attributes in response. (admins only)"
    )

    with_issues_enabled: Optional[Boolean] = Field(
        alias = "Issues-Enabled",
        title = "with_issues_enabled",
        description = "Limit by enabled issues feature"
    )

    with_merge_requests_enabled: Optional[Boolean] = Field(
        alias = "MR-Enabled",
        title = "with_merge_requests_enabled",
        description = "Limit by enabled merge requests feature"
    )

    with_programming_language: String = Field(
        alias = "Programming-Language",
        title = "with_programming_language",
        description = "Limit by projects which use the given programming language"
    )

class Namespace(Base):
    id: Integer = Field(alias = "id", title = "id", description = "id")
    name: String = Field(alias = "name", title = "name", description = "name")
    path: String = Field(alias = "path", title = "path", description = "path")
    kind: String = Field(alias = "kind", title = "kind", description = "kind")
    full_path: String = Field(alias = "full_path", title = "full_path", description = "full_path")
    parent_id: Optional[Integer] = Field(None, alias = "parent_id", title = "parent_id", description = "parent_id")
    avatar_url: Optional[String] = Field(None, alias = "avatar_url", title = "avatar_url", description = "avatar_url")
    web_url: String = Field(alias = "web_url", title = "web_url", description = "web_url")

    class Config(Base.Config): title = Base.Config.title + "-" + "Namespace"

class Statistics(Base):
    commit_count: Integer = Field(0,
        alias = "Total-Commits",
        title = "commit_count",
        description = ""
    )

    storage_size: Integer = Field(0,
        alias = "Storage-Size",
        title = "storage_size",
        description = ""
    )

    repository_size: Integer = Field(0,
        alias = "Programming-Language",
        title = "Repository-Size",
        description = ""
    )

    wiki_size: Integer = Field(0,
        alias = "Programming-Language",
        title = "wiki_size",
        description = ""
    )

    lfs_objects_size: Integer = Field(0,
        alias = "LFS-Objects-Size",
        title = "lfs_objects_size",
        description = ""
    )

    job_artifacts_size: Integer = Field(0,
        alias = "Artifacts-Size",
        title = "job_artifacts_size",
        description = ""
    )

    packages_size: Integer = Field(0,
        alias = "Packages-Size",
        title = "packages_size",
        description = ""
    )

    snippets_size: Integer = Field(0,
        alias = "Snippets-Size",
        title = "snippets_size",
        description = ""
    )

    class Config(Base.Config): title = Base.Config.title + "-" + "Statistics"

class Links(Base):
    self: String = Field(
        alias = "self",
        title = "self",
        description = "self"
    )

    issues: String = Field(
        alias = "issues",
        title = "issues",
        description = "issues"
    )

    merge_requests: String = Field(
        alias = "merge_requests",
        title = "merge_requests",
        description = "merge_requests"
    )

    repo_branches: String = Field(
        alias = "repo_branches",
        title = "repo_branches",
        description = "repo_branches"
    )

    labels: String = Field(
        alias = "labels",
        title = "labels",
        description = "labels"
    )

    events: String = Field(
        alias = "events",
        title = "events",
        description = "events"
    )

    members: String = Field(
        alias = "members",
        title = "members",
        description = "members"
    )

    class Config(Base.Config): title = Base.Config.title + "-" + "Links"

class Access(Base):
    notification_level: Optional[Integer] = None
    access_level: Optional[Integer] = None

    class Config(Base.Config): title = Base.Config.title + "-" + "Access"

class Permissions(Base):
    project_access: Optional[Access] = None
    group_access: Optional[Access] = None

    class Config(Base.Config): title = Base.Config.title + "-" + "Permissions"

class Owner(Base):
    id: String = Field(
        alias = "id",
        title="id",
        description = "id")

    name: String = Field(
        alias = "name",
        title="name",
        description = "name")

    created_at: Optional[String] = Field(
        alias = "created_at",
        title="created_at",
        description = "created_at")

    class Config(Base.Config): title = Base.Config.title + "-" + "Owner"

class Project(Base):
    """
    [...]
    """

    id: Integer = Field(
        alias = "id",
        title = "id",
        description = "id"
    )

    created_at: Date = Field(
        alias = "created_at",
        title = "created_at",
        description = "created_at"
    )

    forks_count: Integer = Field(
        alias = "forks_count",
        title = "forks_count",
        description = "forks_count"
    )

    star_count: Integer = Field(
        alias = "star_count",
        title = "star_count",
        description = "star_count"
    )

    description: Optional[String] = Field(
        alias = "description",
        title = "description",
        description = "description"
    )

    default_branch: String = Field(
        alias = "default_branch",
        title = "default_branch",
        description = "default_branch"
    )

    visibility: Optional[String] = Field(
        alias = "visibility",
        title = "visibility",
        description = "visibility"
    )

    ssh_url_to_repo: String = Field(
        alias = "ssh_url_to_repo",
        title = "ssh_url_to_repo",
        description = "ssh_url_to_repo"
    )

    http_url_to_repo: String = Field(
        alias = "http_url_to_repo",
        title = "http_url_to_repo",
        description = "http_url_to_repo"
    )

    web_url: String = Field(
        alias = "web_url",
        title = "web_url",
        description = "web_url"
    )

    readme_url: Optional[String] = Field(
        alias = "readme_url",
        title = "readme_url",
        description = "readme_url"
    )

    tag_list: Optional[List] = Field(
        alias = "tag_list",
        title = "tag_list",
        description = "tag_list"
    )

    owner: Optional[Owner] = Field(
        alias = "owner",
        title = "owner",
        description = "owner"
    )

    name: String = Field(
        alias = "name",
        title = "name",
        description = "name"
    )

    name_with_namespace: String = Field(
        alias = "name_with_namespace",
        title = "name_with_namespace",
        description = "name_with_namespace"
    )

    path: String = Field(
        alias = "path",
        title = "path",
        description = "path"
    )

    path_with_namespace: String = Field(
        alias = "path_with_namespace",
        title = "path_with_namespace",
        description = "path_with_namespace"
    )

    issues_enabled: Optional[Boolean] = Field(
        alias = "issues_enabled",
        title = "issues_enabled",
        description = "issues_enabled"
    )

    open_issues_count: Optional[Integer] = Field(
        alias = "open_issues_count",
        title = "open_issues_count",
        description = "open_issues_count"
    )

    merge_requests_enabled: Optional[Boolean] = Field(
        alias = "merge_requests_enabled",
        title = "merge_requests_enabled",
        description = "merge_requests_enabled"
    )

    jobs_enabled: Optional[Boolean] = Field(
        alias = "jobs_enabled",
        title = "jobs_enabled",
        description = "jobs_enabled"
    )

    wiki_enabled: Optional[Boolean] = Field(
        alias = "wiki_enabled",
        title = "wiki_enabled",
        description = "wiki_enabled"
    )

    snippets_enabled: Optional[Boolean] = Field(
        alias = "snippets_enabled",
        title = "snippets_enabled",
        description = "snippets_enabled"
    )

    can_create_merge_request_in: Optional[Boolean] = Field(
        alias = "can_create_merge_request_in",
        title = "can_create_merge_request_in",
        description = "can_create_merge_request_in"
    )

    resolve_outdated_diff_discussions: Optional[Boolean] = Field(
        alias = "resolve_outdated_diff_discussions",
        title = "resolve_outdated_diff_discussions",
        description = "resolve_outdated_diff_discussions"
    )

    container_registry_enabled: Optional[Boolean] = Field(
        alias = "container_registry_enabled",
        title = "container_registry_enabled",
        description = "container_registry_enabled"
    )

    last_activity_at: Optional[Date] = Field(
        alias = "last_activity_at",
        title = "last_activity_at",
        description = "last_activity_at"
    )

    creator_id: Optional[Integer] = Field(
        alias = "creator_id",
        title = "creator_id",
        description = "creator_id"
    )

    namespace: Namespace = Field(
        alias = "namespace",
        title = "namespace",
        description = "namespace"
    )

    import_status: Optional[String] = Field(
        alias = "import_status",
        title = "import_status",
        description = "import_status"
    )

    import_error: Optional[String] = Field(
        alias = "import_error",
        title = "import_error",
        description = "import_error"
    )

    permissions: Optional[Permissions] = Field(
        alias = "permissions",
        title = "permissions",
        description = "permissions"
    )

    archived: Optional[Boolean] = Field(
        alias = "archived",
        title = "archived",
        description = "archived"
    )

    avatar_url: Optional[String] = Field(
        alias = "avatar_url",
        title = "avatar_url",
        description = "avatar_url"
    )

    shared_runners_enabled: Optional[Integer] = Field(
        alias = "shared_runners_enabled",
        title = "shared_runners_enabled",
        description = "shared_runners_enabled"
    )

    runners_token: Optional[String] = Field(
        alias = "runners_token",
        title = "runners_token",
        description = "runners_token"
    )

    ci_default_git_depth: Optional[Integer] = Field(
        alias = "ci_default_git_depth",
        title = "ci_default_git_depth",
        description = "ci_default_git_depth"
    )

    ci_forward_deployment_enabled: Optional[Boolean] = Field(
        alias = "ci_forward_deployment_enabled",
        title = "ci_forward_deployment_enabled",
        description = "ci_forward_deployment_enabled"
    )

    public_jobs: Optional[Boolean] = Field(
        alias = "public_jobs",
        title = "public_jobs",
        description = "public_jobs"
    )

    shared_with_groups: Optional[List] = Field(
        alias = "shared_with_groups",
        title = "shared_with_groups",
        description = "shared_with_groups"
    )

    only_allow_merge_if_pipeline_succeeds: Optional[Boolean] = Field(
        alias = "only_allow_merge_if_pipeline_succeeds",
        title = "only_allow_merge_if_pipeline_succeeds",
        description = "only_allow_merge_if_pipeline_succeeds"
    )

    allow_merge_on_skipped_pipeline: Optional[Boolean] = Field(
        alias = "allow_merge_on_skipped_pipeline",
        title = "allow_merge_on_skipped_pipeline",
        description = "allow_merge_on_skipped_pipeline"
    )

    restrict_user_defined_variables: Optional[Boolean] = Field(
        alias = "restrict_user_defined_variables",
        title = "restrict_user_defined_variables",
        description = "restrict_user_defined_variables"
    )

    only_allow_merge_if_all_discussions_are_resolved: Optional[Boolean] = Field(
        alias = "only_allow_merge_if_all_discussions_are_resolved",
        title = "only_allow_merge_if_all_discussions_are_resolved",
        description = "only_allow_merge_if_all_discussions_are_resolved"
    )

    remove_source_branch_after_merge: Optional[Boolean] = Field(
        alias = "remove_source_branch_after_merge",
        title = "remove_source_branch_after_merge",
        description = "remove_source_branch_after_merge"
    )

    request_access_enabled: Optional[Boolean] = Field(
        alias = "request_access_enabled",
        title = "request_access_enabled",
        description = "request_access_enabled"
    )

    merge_method: Optional[String] = Field(
        alias = "merge_method",
        title = "merge_method",
        description = "merge_method"
    )

    auto_devops_enabled: Optional[Boolean] = Field(
        alias = "auto_devops_enabled",
        title = "auto_devops_enabled",
        description = "auto_devops_enabled"
    )

    auto_devops_deploy_strategy: Optional[String] = Field(
        alias = "auto_devops_deploy_strategy",
        title = "auto_devops_deploy_strategy",
        description = "auto_devops_deploy_strategy"
    )

    repository_storage: Optional[String] = Field(
        alias = "repository_storage",
        title = "repository_storage",
        description = "repository_storage"
    )

    approvals_before_merge: Optional[Integer] = Field(
        alias = "approvals_before_merge",
        title = "approvals_before_merge",
        description = "approvals_before_merge"
    )

    mirror: Optional[Boolean] = Field(
        alias = "mirror",
        title = "mirror",
        description = "mirror"
    )

    mirror_user_id: Optional[Integer] = Field(
        alias = "mirror_user_id",
        title = "mirror_user_id",
        description = "mirror_user_id"
    )

    mirror_trigger_builds: Optional[Boolean] = Field(
        alias = "mirror_trigger_builds",
        title = "mirror_trigger_builds",
        description = "mirror_trigger_builds"
    )

    only_mirror_protected_branches: Optional[Boolean] = Field(
        alias = "only_mirror_protected_branches",
        title = "only_mirror_protected_branches",
        description = "only_mirror_protected_branches"
    )

    mirror_overwrites_diverged_branches: Optional[Boolean] = Field(
        alias = "mirror_overwrites_diverged_branches",
        title = "mirror_overwrites_diverged_branches",
        description = "mirror_overwrites_diverged_branches"
    )

    external_authorization_classification_label: Optional[String] = Field(
        alias = "external_authorization_classification_label",
        title = "external_authorization_classification_label",
        description = "external_authorization_classification_label"
    )

    packages_enabled: Optional[Boolean] = Field(
        alias = "packages_enabled",
        title = "packages_enabled",
        description = "packages_enabled"
    )

    service_desk_enabled: Optional[Boolean] = Field(
        alias = "service_desk_enabled",
        title = "service_desk_enabled",
        description = "service_desk_enabled"
    )

    service_desk_address: Optional[String] = Field(
        alias = "service_desk_address",
        title = "service_desk_address",
        description = "service_desk_address"
    )

    autoclose_referenced_issues: Optional[Boolean] = Field(
        alias = "autoclose_referenced_issues",
        title = "autoclose_referenced_issues",
        description = "autoclose_referenced_issues"
    )

    suggestion_commit_message: Optional[String] = Field(
        alias = "suggestion_commit_message",
        title = "suggestion_commit_message",
        description = "suggestion_commit_message"
    )

    statistics: Optional[Statistics] = Field(
        alias = "statistics",
        title = "statistics",
        description = "statistics"
    )

    container_registry_image_prefix: Optional[String] = Field(
        alias = "container_registry_image_prefix",
        title = "container_registry_image_prefix",
        description = "container_registry_image_prefix"
    )

    _links: Optional[Links] = Field(
        alias = "_links",
        title = "_links",
        description = "_links"
    )

    class Config(Base.Config): title = Base.Config.title + "-" + "Project"

class Projects(Base):
    Response: List[Project]

    class Config(Base.Config): title = Base.Config.title + "-" + "Projects"

class Pages(Base):
    Response: Dictionary[Integer, List[Project]]

    class Config(Base.Config): title = Base.Config.title + "-" + "Pages"
