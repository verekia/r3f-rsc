import ClientCanvas from './ClientCanvas'
import CubeNav from './CubeNav'

export default ({ children }) => (
  <ClientCanvas>
    <ambientLight />
    <CubeNav />
    {children}
  </ClientCanvas>
)
