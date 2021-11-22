# Graph-QL #

## Table of Contents ##

[[_TOC_]]

## Metadata ##

- [Documentation](https://docs.gitlab.com/ee/api/graphql/reference/index.html#metadata)

### Version ###

```gql
{ metadata { version } }
```

### Revision ###

```gql
{ metadata { revision } }
```

## Projects ##

```gql
query {
 	projects {
 	  edges {
 	    node {
 	      name
        fullPath
        createdAt
        webUrl
        group {
          id
          name
        }
        description
        pipelines(last: 1) {
          edges {
            node {
              id
            }
          }
        }
      }
    } pageInfo {
      startCursor
      hasNextPage
      hasPreviousPage
      endCursor
    }
 	}
}
```

```gql
{
  projects {
    edges {
      node {
        name
        createdAt
        webUrl
        group {
          name
          webUrl
        }
        description
      }
    }
    pageInfo {
      startCursor
      hasNextPage
      hasPreviousPage
      endCursor
    }
  }
}


```
