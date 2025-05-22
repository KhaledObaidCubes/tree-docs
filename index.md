---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TreeManager Documentation"
  text: "A generic, extensible class for tree structure with custom behaviors."
  tagline: A Lightweight and Extensible TypeScript Tree Data Structure
  image:
    src: assets/king.png
    alt: Tree
  actions:
    - theme: brand
      text: Introduction
      link: /introduction
    - theme: alt
      text: Tree Node
      link: /nestDeeperLevels

features:
  - title: Typescript
    details: Type-safe tree node management
  - title: Generic
    details: Supports any data type via generics
  - title: JSON
    details: JSON export of tree structure
---

```scheme
Instances Tree
TREEI created by adding new instances for each node
═══ treeI root (IIP=0)
    ╠══ 1 (IIP=0)
    ║   ╠══ 1.1 (IIP=0)
    ║   ║   ╚══ 1.1.1 (IIP=0)
    ║   ║       ╚══ 1.1.1.1 (IIP=0)
    ║   ╠══ 1.2 (IIP=1)
    ║   ╚══ 1.3 (IIP=2)
    ╠══ 2 (IIP=1)
    ╚══ 3 (IIP=2)
        ╚══ 3.1 (IIP=0)

```
