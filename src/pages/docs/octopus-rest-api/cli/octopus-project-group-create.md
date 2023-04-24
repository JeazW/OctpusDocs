---
layout: src/layouts/Default.astro
pubDate: 2023-01-01
modDate: 2023-01-01
title: octopus project-group create
description: Create a project group
navOrder: 82
---

Create a project group in Octopus Deploy


```
Usage:
  octopus project-group create [flags]

Aliases:
  create, new

Flags:
  -n, --name string          Name of the project group
  -d, --description string   Description of the project group


Global Flags:
  -h, --help                   Show help for a command
      --no-prompt              Disable prompting in interactive mode
  -f, --output-format string   Specify the output format for a command ("json", "table", or "basic") (default "table")
  -s, --space string           Specify the space for operations

```

## Examples

!include <samples-instance>


```
$ octopus project-group create

```

## Learn more

- [Octopus CLI](/docs/octopus-rest-api/cli)
- [Creating API keys](/docs/octopus-rest-api/how-to-create-an-api-key)