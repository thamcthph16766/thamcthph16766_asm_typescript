import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
        <header>
        Header web
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
            Footer web
        </footer>
    </div>
  )
}

export default WebsiteLayout