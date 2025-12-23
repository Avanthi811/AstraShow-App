import React  from 'react'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate= useNavigate();
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("https://res.cloudinary.com/dyihlpt5n/image/upload/v1761366393/Nani_background_hht5bu.jpg")] bg-cover bg-center h-[600px]  md:h-[600px] lg:h-[727px] text-white'>
      <h1 className='text-5xl md:text-[70px] md-leading-18 font-semibold max-w-110'>HIT</h1>
      <h1 className='text-5xl md:text-[40px] md-leading-18 font-semibold max-w-110'>The 3rd Case</h1>
      <div className='flex items-center gap-4 text-gray-300'>
        <span> Action | Crime | Thriller</span>
        <div className='flex items-center gap-1'>
            <CalendarIcon className="w-4 h-4"/> 2025
        </div>
        <div className='flex items-center gap-1'>
            <ClockIcon className="w-4 h-4"/> 2h 34m
        </div>
      </div>
      <p className='max-w-md text-gray-300'>The Homicide Intervention Team (HIT) sends ruthless police officer
         Arjun Sarkaar to find a group of killers and stop their grisly murder spree.</p>
         <button onClick={() => navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-blue-500 hover:bg-blue-600 transition rounded-full font-medium cursor-pointer'>
            Explore Movies
           <ArrowRight className='w-5 h-5'/>
         </button>
    </div>
  )
}

export default HeroSection
