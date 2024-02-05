'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Sidebar } from '../_components/container/Sidebar/index'
import LocalStorageManager from '../_utils/storageManager'

// Props Types
type WorkspaceProps = {
  children?: React.ReactNode
}

export default function Workspace(props: WorkspaceProps) {
  // States
  const [language, setLanguage] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  const router = useRouter()

  // Hooks
  useEffect(() => {
    const authenticated =
      !!LocalStorageManager.session && !!LocalStorageManager.bearer

    setAuthenticated(true)
    // if (!authenticated) {
    //   router.replace('/login')
    // }
  }, [])

  return (
    <>
      {authenticated && (
        <div className="min-h-screen flex bg-bx-white-100 overflow-y-scroll">
          <Sidebar />
          <div className="flex-grow">
            <main className="py-6 w-full min-h-screen bx-text-normal">
              <div className="px-4 sm:px-6 lg:px-8">{props.children}</div>
            </main>
          </div>
        </div>
      )}
    </>
  )
}
