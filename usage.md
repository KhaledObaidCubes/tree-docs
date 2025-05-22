## Usage

There is no need to install TreeManager as an external package. Instead, link your consuming project to the tree library using a symbolic link **_npm link tree_**

## Create a Root Node

```ts
import { TreeManager } from "tree";

const root = new TreeManager({
  id: "root-1",
  name: "Root Node",
  children: [],
});
```

## Add Children

```ts
root.addNode({
  id: "child-1",
  name: "First Child",
  children: [],
});

root.addNode({
  id: "child-2",
  name: "Second Child",
  children: [],
});
```

## Add instance

```ts
const child1 = new TreeManager({
  id: "child-1",
  name: "Root Node",
  children: [],
});

root.addNode(child1);
```
