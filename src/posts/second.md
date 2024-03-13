---
title: Test
description: Test test
date: '24-3-2024'
published: true
---

## Hello

Test

### "Hello world"

```ts
export async function load({ params }) {
  try {
    const post = await import(`../../posts/${params.slug}.md`);
    return { content: post.default, metadata: post.metadata };
  } catch (e) {
    throw error(404, 'error');
  }
}
```
