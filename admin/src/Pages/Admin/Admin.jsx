import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Admin = ({ children }) => {
  return (
    <div className='admin'>
      <Sidebar />
      {children}
    </div>
  )
}

export default Admin