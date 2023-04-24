---
layout: src/layouts/Default.astro
pubDate: 2023-01-01
modDate: 2023-01-01
title: octopus account token
description: Manage Token accounts
navOrder: 17
---

Manage Token accounts in Octopus Deploy


```
Usage:
  octopus account token [command]

Available Commands:
  create Create a Token account
  help Help about any command
  list List Token accounts

Global Flags:
  -h, --help                   Show help for a command
      --no-prompt              Disable prompting in interactive mode
  -f, --output-format string   Specify the output format for a command ("json", "table", or "basic") (default "table")
  -s, --space string           Specify the space for operations


Use "octopus account token [command] --help" for more information about a command.
```

## Examples

!include <samples-instance>


```
$ octopus account token list

```

## Learn more

- [Octopus CLI](/docs/octopus-rest-api/cli)
- [Creating API keys](/docs/octopus-rest-api/how-to-create-an-api-key)