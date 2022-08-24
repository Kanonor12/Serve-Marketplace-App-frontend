import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VendorService from '../services/VendorService';

//Internal imports 
import {ServiceProvider, ServiceCard} from '../components';

const ServiceProvidersList = () => {
    const [servicesProviders, setServicesProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        console.log("entered useEffect")
        try {
            const response = await VendorService.getServiceProviders();
            console.log(response.data)
            setServicesProviders(response.data);
        } catch (error) {
            console.log(error.response.data)
        }
        setLoading(false);
      }
      fetchData();
    }, [])

    const deleteServiceProvider = (e, id) => {
        e.preventDefault();
        console.log(id)
         VendorService.deleteServiceProvider(id).then((res) => {
            if(servicesProviders) {
                setServicesProviders((prevElement) => {
                    return prevElement.filter((servicesProvider) => servicesProvider.id !== id)
                })
            }
        })
        window.location.reload(false);
    }
    
  
  return (
    <div className='container mx-auto my-8'>
        <div className='h-12'>
            <button  onClick={() => navigate('/login')} className='rounded bg-slate-600 text-white px-6 py-4 font-semibold'>
                Add Your Service
            </button>
        </div>
        
        <div className='flex shadow border-b mt-10'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr >
                        <th className='text-left font-medium text-gray-500 py-3 px-6 text-xl'>Business Name</th>
                        <th className='text-left font-medium text-gray-500 py-3 px-6 text-xl'>Service Category</th>
                        <th className='text-left font-medium text-gray-500 py-3 px-6 text-xl'>City</th>
                        <th className='text-left font-medium text-gray-500 py-3 px-6 text-xl'>Address</th>
                        <th className='text-left font-medium text-gray-500 py-3 px-6 text-xl'>Description</th>
                        <th className='text-left font-medium text-gray-500 py-3 px-6 text-xl'>Telephone</th>
                        <th className='text-left font-medium text-gray-500 py-3 px-6 text-xl'>Email</th>
                        <th className='text-left font-medium text-gray-500  py-3 px-6 text-xl'>Reviews</th>
                        <th className='text-right font-medium text-gray-500  py-3 px-6 text-xl'>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody className='bg-white'>
                    {servicesProviders.map((service) => (
                        <ServiceProvider service={service} deleteServiceProvider={deleteServiceProvider} key={service.serviceId}/>
                     ))}
                </tbody>
                )}
            </table>
                    </div>*
        <div className=' flex gap-4 flex-wrap mt-10 justify-center'>
        {servicesProviders.map((service) => (
                        <ServiceCard service={service} key={service.serviceId}/>
                     ))}
        </div>
    </div>
  )
}

export default ServiceProvidersList