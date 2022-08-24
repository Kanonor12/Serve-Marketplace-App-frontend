import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VendorService from '../services/VendorService';

const AddServiceProvider = () => {
   const navigate = useNavigate()
  const [serviceProvider, setServiceProvider] = useState({
    businessName: " ",
    serviceCategory: " ",
    city: " ",
    address: " ",
    description: " ",
    telephone: " ",
    email: " ",  
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setServiceProvider({...serviceProvider, [e.target.name]: value});
  }

  const reset = (e) =>{
    e.preventDefault();
    setServiceProvider({
    businessName: " ",
    serviceCategory: " ",
    city: " ",
    address: " ",
    description: " ",
    telephone: " ",
    email: " ",  
    })
  }


  const addServiceProvider = (e) => {
    e.preventDefault();
    VendorService.createServiceProvider(serviceProvider).then((response) => {
      console.log(response);
      navigate('/serviceproviders')
    }).catch((error) => {
      console.log(error);
    })

  }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
      <div className='px-8 py-8'>
        <div className='font-thin text-2xl tracking-wider'>
          <h1>
            Add Service Provider
          </h1>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>Business Name</label>
          <input
             type='text' 
             name='businessName'
             value={serviceProvider.businessName}
             onChange={(e) => handleChange(e)}
             className='h-10 w-96 border mt-2 px-2 py-2 outline-none'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>Service Category</label>
          <input 
            type='text' 
            name='serviceCategory'
            value={serviceProvider.serviceCategory}
            onChange={(e) => handleChange(e)}
            className='h-10 w-96 border mt-2 px-2 py-2 outline-none'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>City/Town</label>
          <input 
            type='text' 
            name='city'
            value={serviceProvider.city}
            onChange={(e) => handleChange(e)}
            className='h-10 w-96 border mt-2 px-2 py-2 outline-none'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>Address</label>
          <input 
            type='text' 
            name='address'
            value={serviceProvider.address}
            onChange={(e) => handleChange(e)}
            className='h-10 w-96 border mt-2 px-2 py-2 outline-none'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>Description</label>
          <input
            type='text' 
            name='description'
            value={serviceProvider.description}
            onChange={(e) => handleChange(e)}
            className='h-10 w-96 border mt-2 px-2 py-2 outline-none'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>Telephone</label>
          <input 
            type='text' 
            name='telephone'
            value={serviceProvider.telephone}
            onChange={(e) => handleChange(e)}
            className='h-10 w-96 border mt-2 px-2 py-2 outline-none'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4'>
          <label className='block text-gray-600 text-sm font-normal'>Email</label>
          <input 
            type='email' 
            name='email'
            value={serviceProvider.email}
            onChange={(e) => handleChange(e)}
            className='h-10 w-96 border mt-2 px-2 py-2 outline-none'/>
        </div>
        <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-2'>
          <button onClick={addServiceProvider} className='rounded text-white font-semibold bg-green-400 hover:bg-green-800 py-2 px-6 mt-2'>Summit</button>
          <button onClick={reset} className='rounded text-white font-semibold bg-gray-400 hover:bg-gray-800 py-2 px-6 mt-2'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default AddServiceProvider