import React from 'react'

const ServiceCard = ({service}) => {
  return (
    <div key={service.serviceId} className='w-64 h-64 border-2 rounded-xl shadow-md bg-gray-500 text-white p-2'>
        <h3 className='text-lg'>{service.businessName}</h3>             
        <div>
                   
            <h4 className='text-sm'>{service.serviceCategory}</h4>
            <p className='text-sm '>{service.description}</p>  
        </div>
        <div>
            <p className='text-sm '>{service.city}</p>
            <p className='text-sm '>{service.address}</p>
        </div>                 
        <div>
            <p className='text-sm '>{service.telephone}</p>
            <p className='text-sm '>{service.email}</p>
        </div>        
        <p className='text-sm '>Unrated</p>             
    </div>
  )
}

export default ServiceCard