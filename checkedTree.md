## Tree with Checkboxes

Extending the Core: TreeManagerWithCheckBox`<T>`

The TreeManagerWithCheckBox class extends the base TreeManager`<T>` class to handle tree nodes that include checkbox states — like checked and indeterminate. This class is particularly useful when you're building UI components like:

<ul>
<li>Application navigation sidebar (Site map or router)</li>
<li>Nested checkable lists</li>
<li>Category selectors</li>
<li>File/folder trees with multi-select logic</li>
</ul>

## Inheritance at Work

```ts
export class TreeManagerWithCheckBox<T extends TCheckedTree> extends TreeManager<T> {
  // Adds checkbox-aware logic
}
```

This means:
<ul>
<li>It inherits all functionality from TreeManager (add/remove nodes, depth tracking, JSON export, etc.)</li>
<li>It augments the behavior with checkbox-specific logic:</li>
<ul>
<li>checkMe() to set node and children checked state</li>
<li>checked and indeterminate getters for derived states</li>
</ul></ul>

## Example Usage

```ts
import { TreeManagerWithCheckBox } from 'your-tree-manager-lib'

const tree = new TreeManagerWithCheckBox({
  id: 'root',
  name: 'Root Node',
  checked: false,
  children: [
    {
      id: 'child-1',
      name: 'Child 1',
      checked: false,
      children: []
    },
    {
      id: 'child-2',
      name: 'Child 2',
      checked: false,
      children: []
    }
  ]
})

// Check the root, and all children will follow
tree.checkMe(true)

console.log(tree.checked) // true
console.log(tree.children.map(c => c.data.checked)) // [true, true]
```

## Inherited Features from TreeManager
Since TreeManagerWithCheckBox extends TreeManager, you also get:

```addNode()```, ```removeNode()```

```addNodeInstance()```, ```addNodeToTarget()```

depth tracking

parent / children relationships

```toJSONFormat()``` to export the tree

Recursive ```updateChildDepths()``` when moving nodes