<script setup lang="ts">
const md = `
# ToolHaven

## About
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
mollis blandit, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Sed euismod, nisl quis mollis blandit, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.

[ToolHaven](https://tools.iconical.dev)
`;
</script>

<template>
  <c-markdown :markdown="md" />
</template>
