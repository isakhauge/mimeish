# mimeish

> Browser Compatible MIME Toolkit

# Geting started

## Lookup MIME type

```js
import { lookup } from 'mimeish'
const filePath = lookup('file.txt')
lookup.mime('file.txt') // text/plain
```

## Lookup extension

```js
import { lookup } from 'mimeish'
const mimeType = 'text/plain'
lookup.extension(mimeType) // txt
```
