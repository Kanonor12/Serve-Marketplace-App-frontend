import React from 'react'
import { useNavigate } from 'react-router-dom'
console.log("Outside Service Provider")
const ServiceProvider = ({service, deleteServiceProvider}) => {
  
  const navigate = useNavigate();
  
 
  const editServiceProvider = (e, id) => {
    e.preventDefault();
    navigate(`/updateserviceprovider/${id}`);
  };


  return (
    
        <tr key={service.serviceId}>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>{service.businessName}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'> 
                        <div className='text-sm text-gray-500'>{service.serviceCategory}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'> 
                        <div className='text-sm text-gray-500'>{service.city}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'> 
                        <div className='text-sm text-gray-500'>{service.address}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'> 
                        <div className='text-sm text-gray-500'>{service.description}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'> 
                        <div className='text-sm text-gray-500'>{service.telephone}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'> 
                        <div className='text-sm text-gray-500'>{service.email}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>Unrated</div> 
                        </td>
                        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                          <button  className='text-indigo-600 hover:text-indigo-800 px-0 hover:cursor-pointer' onClick={(e,id) => editServiceProvider(e,service.serviceId)}>Edit</button>
                          <span>/</span>
                          <button className='text-red-600 hover:text-red-800 px-0 hover:cursor-pointer' onClick={(e,id) => deleteServiceProvider(e, service.serviceId)} >Delete</button>
                        </td>
                    </tr>  
    
  )
}

export default ServiceProvider