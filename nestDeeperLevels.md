## Nest Deeper Levels

In a tree structure, nesting deeper levels refers to adding nodes inside existing nodes — essentially creating children of children. This allows for multi-level hierarchies, just like in a file system:

```txt
Root
├── Child 1
├── Child 2
│   └── Grandchild 1
│       └── Great-Grandchild 1
└── Child 3
```

```ts
const secondChild = new TreeManager();

secondChild.addNode({
  propertyI: "grandchild-1",
  propertyII: "123",
  .
  .
  .
  propertyIII: true
  children: [],
});
```
## Nesting allows your tree to:
<ul>
<li>Represent complex hierarchical data</li>
<li>Track relationships between nodes (parent ↔ child)</li>
<li>Handle features like depth-based rendering, indentation, or checkbox state propagation</li>
</ul>

## Nesting Grandchildren exampe:

```ts
const root = new TreeManager({
  id: 'root',
  name: 'Root Node',
  children: []
})

// Add two child nodes
const child1 = new TreeManager({
  id: 'child-1',
  name: 'Child 1',
  children: []
})

const child2 = new TreeManager({
  id: 'child-2',
  name: 'Child 2',
  children: []
})

// Nest a child under 'child2'
const grandchild1 = new TreeManager({
  id: 'grandchild-1',
  name: 'Grandchild of Child 2',
  children: []
})

// Add a third level (great-grandchild)
grandchild1.addNode(child2)
root.addNode(child1)
root.addNode(grandchild1)
```



