# React Three Fiber + RSC

What works, what doesn't.

## ❌ Having the Canvas in a server-side component:

```jsx
import { Canvas } from '@react-three/fiber'

export default ({ children }) => (
  <html>
    <body>
      <Canvas>{children}</Canvas>
    </body>
  </html>
)
```

Stack trace:

```
Server Error
Error: Class extends value undefined is not a constructor or null

This might be caused by a React Class Component being rendered in a Server Component, React Class Components only works in Client Components. Read more: https://nextjs.org/docs/messages/class-component-in-server-component

This error happened while generating the page. Any console logs will be displayed in the terminal window.
Call Stack
eval
(rsc)/node_modules/@react-three/fiber/dist/index-e6b5343a.esm.js (396:28)
(rsc)/./node_modules/@react-three/fiber/dist/index-e6b5343a.esm.js
file:///Users/verekia/Local/Code/r3f-rsc/.next/server/vendor-chunks/@react-three.js (20:1)
__webpack_require__
file:///Users/verekia/Local/Code/r3f-rsc/.next/server/webpack-runtime.js (33:42)
eval
webpack-internal:///(rsc)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js (33:80)
```

## ❌ Next useRouter inside the canvas

Because context is not shared from the outside of the Canvas to the inside? Use its-fine?

```jsx
'use client'

import { useRouter } from 'next/navigation'

export default () => {
  const { push } = useRouter()

  return (
    <>
      <mesh position={[-2, 2, 0]} onClick={() => push('/red')}>
        <boxGeometry />
        <meshLambertMaterial color="red" />
      </mesh>
      // ...
```

Stack trace:

```
Unhandled Runtime Error
TypeError: dispatcher.use is not a function

Call Stack
use
(app-pages-browser)/node_modules/next/dist/compiled/react/cjs/react.development.js (1812:0)
Next.js
renderWithHooks
(app-pages-browser)/node_modules/react-reconciler/cjs/react-reconciler.development.js (7363:0)
mountIndeterminateComponent
(app-pages-browser)/node_modules/react-reconciler/cjs/react-reconciler.development.js (12327:0)
beginWork
(app-pages-browser)/node_modules/react-reconciler/cjs/react-reconciler.development.js (13831:0)
beginWork$1
(app-pages-browser)/node_modules/react-reconciler/cjs/react-reconciler.development.js (19513:0)
```

## ❌ Event handlers on server components

```jsx
export default () => (
  <mesh
    onClick={() => console.log('hello')}
  >
```

Stack trace:

```
Unhandled Runtime Error
Error: Event handlers cannot be passed to Client Component props.
  <mesh onClick={function} children=...>
                                 ^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.

Call Stack
<unknown>
/Users/verekia/Local/Code/r3f-rsc/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:280828)
Object.toJSON
/Users/verekia/Local/Code/r3f-rsc/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:281723)
stringify
<anonymous>
<unknown>
/Users/verekia/Local/Code/r3f-rsc/node_modules/next/dist/compiled/next-server/app-page.runtime.dev.js (35:268079)
```

## ❌ Navigating with pushState doesn't update the R3F "page" that should be shown

Clicking on a nav cube doesn't update the R3F scene.
