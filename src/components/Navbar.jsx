import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import images from '../assets/index';
import logo from '../assets/logo.svg';
import logo1 from '../assets/logo1.svg';

const Navbar  = () => {

  const navigate = useNavigate();

  const [navbar, setNavbar] = useState(false);

  return (
    <div className='bg-gray-800'>
      {navbar ?
       (
        <div className='container mx-auto flex justify-between items-center'>
        <div className='h-20 px-8 flex items-center'>
            <img src={logo1} alt='logo' className='h-20 w-20'/>
            {/*<p className='text-white font-bold'>Service Providers Marketplace</p>*/}
        </div>
        <ul className='text-white flex flex-1 justify-center gap-10'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>HowItWorks</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div>
          <button onClick={() => navigate('/addserviceprovider')} className='text-white rounded bg-slate-600 px-6 py-2 font-semibold'>Login</button>
        </div>
      </div>
       ) : (
        <div className='container mx-auto flex justify-between items-center'>
        <div className='h-24 px-8 flex items-center'>
          <img src={logo} alt='logo' className='h-24 w-24'/>
        </div>
        <ul className='text-white flex flex-1 justify-center gap-10'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>My Services</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div>
          <button onClick={() => setNavbar(!navbar)} className='text-white rounded bg-slate-600 px-6 py-2 font-semibold'>Logout</button>
        </div>
      </div>
       )}
        
    </div>
  )
}

export default Navbar;