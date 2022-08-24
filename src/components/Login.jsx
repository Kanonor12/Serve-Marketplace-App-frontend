import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  
  const navigate = useNavigate() 
  return (
    <div className='py-2'>
        <button onClick={() => navigate('/addserviceprovider')} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Login</button>
    </div>
  )
}

export default Login