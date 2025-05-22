## Export tree schematics as JSON

TreeManager includes a toJSONFormat() method that lets you convert the entire tree structure — starting from any node — into a plain JavaScript object formatted as JSON.

## Use Case
<ul>
<li>Save the current tree state (e.g. in local storage, a database, or server)</li>
<li>Reconstruct the tree later (e.g. when a user reloads the app)</li>
<li>Share tree data between systems or components</li>
</ul>

## Example 

```ts
const root = new TreeManager({
  id: 'root',
  name: 'Root Node',
  children: []
})

root.addNode({
  id: 'child-1',
  name: 'Child Node',
  children: []
})

console.log(JSON.stringify(root.toJSONFormat(), null, 2))
```
output JSON

```JSON
{
  "id": "root",
  "name": "Root Node",
  "children": [
    {
      "id": "child-1",
      "name": "Child Node",
      "children": []
    }
  ]
}
```

Rebuilding the Tree:

```ts
const treeData = {
  id: 'root',
  name: 'Root Node',
  children: [
    {
      id: 'child-1',
      name: 'Child Node',
      children: []
    }
  ]
}

// Restore the tree
const restoredTree = new TreeManager(treeData)
console.log(restoredTree)
```