import { ReactNode } from 'react'

import './index.css'

export default ({ children }: { children: ReactNode }) => (
  <html>
    <body>{children}</body>
  </html>
)
