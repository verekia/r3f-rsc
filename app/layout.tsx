import { ReactNode } from 'react'

import './index.css'

export default ({ children }: { children: ReactNode }) => (
  <html>
    <body>
      {children}
      <div style={{ position: 'fixed', bottom: 5, left: 5 }}>
        <a href="/html">HTML</a> - <a href="/r3f">R3F</a>
      </div>
    </body>
  </html>
)
