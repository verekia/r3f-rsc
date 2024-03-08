'use client'

import { useRouter } from 'next/navigation'

export default () => {
  const { push } = useRouter()

  return (
    <>
      <button onClick={() => push('/html/one')}>One</button>
      <button onClick={() => push('/html/two')}>Two</button>
      <button onClick={() => push('/html/three')}>Three</button>
    </>
  )
}
