/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Home } from '@/pages/(home)/page'
import { createBrowserRouter } from 'react-router-dom'

const router: any = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

export { router }
