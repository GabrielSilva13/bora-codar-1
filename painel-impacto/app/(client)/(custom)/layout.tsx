'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import LocalStorageManager from '../_utils/storageManager'

// Props Types
type CustomProps = {
  children?: React.ReactNode
}

export default function Custom(props: CustomProps) {
  // States
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  // Hooks
  useEffect(() => {
    const authenticated =
      !!LocalStorageManager.session && !!LocalStorageManager.bearer

    setAuthenticated(authenticated)
    if (authenticated) {
      router.replace('/')
    }
  }, [])

  return <>{!authenticated && props.children}</>
}
