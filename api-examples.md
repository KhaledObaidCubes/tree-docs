---
outline: deep
---

# Runtime API Examples

# Using custom anchors [#my-anchor](https://thefwa.com/cases/malvahstudio)

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
    import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## More

<script setup>
import { ref } from 'vue'
import YourComponent from 'your-lib'
</script>

## Live Preview

<LivePreview code="<YourComponent msg='Live message' />" :components="{ YourComponent }" />

<LiveEditor
  code="<MyComponent msg='Live from VitePress!' />"
  :components="{ MyComponent }"
/>
```
