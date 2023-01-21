import React from 'react'
import { Sidebar } from './Sidebar';

function SidebarItem() {
  return (
    <div className='flex-col sm:w-25 md:w-60  bg-white 
       '>
       <ul className='mx-auto p-10 '>
         {Sidebar.map((val,key) => (
              <li key={key}  
                  className={`
                    rounded-md flex my-5 items-center p-2
                    ${window.location.pathname=== val.link 
                       || (window.location.pathname=== '/' && val.link==='/dashbord')  ? 'text-blue-600 bg-blue-200 border-l-4 border-l-blue-900 '
                    :''}
                  hover:bg-blue-200 hover:text-blue-600 
                  `}
                  onClick={()=> {window.location.pathname=val.link
              }}>
                <div className=' '>{val.icon}</div>
                <div className=' ml-3 hidden md:block'>{val.title}</div></li>

         ))
         }
       </ul>
    </div>
  )
}

export default SidebarItem
