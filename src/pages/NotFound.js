import React, { useEffect } from 'react'
import { setPageTitle } from '../components/updatePageTitle'

const NotFound = () => {
  useEffect(() => {
    setPageTitle('Page Not Found')
  }, [])

  return (
    <div>
      <h1>404 page</h1>
    </div>
  )
}

export default NotFound
