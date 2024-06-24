import React from 'react'
import MobileSidebar from './mobile-sidebar'

const MobileHeader = () => {
  return (
    <nav className='lg:hidden fixed px-6 h-[50px] flex items-center bg-green-500 border-b top-0 w-full z-50'>
      <MobileSidebar />
    </nav>

  )
}

export default MobileHeader