import { ReactNode } from 'react'

import ClientCanvas from './ClientCanvas'
import Nav from './Nav'

import './index.css'

export default ({ children }: { children: ReactNode }) => (
  <html>
    <body>
      <ClientCanvas>
        <ambientLight />
        <Nav />
        {children}
      </ClientCanvas>
    </body>
  </html>
)
