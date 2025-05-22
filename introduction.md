## Introduction to TreeManager

TreeManager is a powerful, generic class for creating and managing hierarchical tree data.<br>Easily extensible, this tool allows for advanced operations like parent-child linking, node depth tracking, and custom behaviors like checkbox handling.

## Features

<ol>
<li>Type-safe tree node management</li>
<li>Supports any data type via generics</li>
<li>Parent-child linking and depth tracking</li>
<li>JSON export of tree structure</li>
<li>Extendable via inheritance (TreeManagerWithCheckBox)</li>
<li>Supports checkbox state propagation (checked / indeterminate)</li>
</ol>

## scheme

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
