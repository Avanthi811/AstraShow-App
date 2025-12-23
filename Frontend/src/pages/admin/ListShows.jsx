import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import { dateFormat } from '../../lib/dateFormat';

const ListShows = () => {
    const currency = import.meta.env.VITE_CURRENCY_SYMBOL || '₹';
    const [shows,setShows] = useState([]);
    const [loading,setLoading] = useState(true);
    const getAllShows = async ()=>{
        try{
                setShows([{
                    movie: dummyShowsData[0],
                    ShowDateTime: "2024-08-15T18:30:00Z",
                    showPrice:59,
                    occupiedSeats: {
                        A1: "User_1",
                        B1: "User_2",
                        C1: "User_3",
                    }
                }]);
                setLoading(false);
        }catch(err){
            console.error(err)
        }
    }
    useEffect(()=>{
        getAllShows();
    },[])

  return ! loading ? (
    <>
      <Title text1="List" text2="Shows" />
      <div className='max-w-4xl mt-6 overflow-x-auto'>
        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
            <thead>
                <tr className='bg-blue-500/30 text-left text-white'>
                    <th className='p-2 font-medium pl-5'>Movie Name</th>
                    <th className='p-2 font-medium'>Show Time</th>
                    <th className='p-2 font-medium'>Total Bookings</th>
                    <th className='p-2 font-medium'>Earnings</th>
                </tr>
            </thead>
            <tbody className='text-sm font-light'>
                {shows.map((show,index)=>(
                    <tr key={index} className='border-b border-blue-400/30 bg-blue-400/10 even:bg-blue-400/20'>
                        <td className='p-2 min-w-45 pl-5'>{show.movie.title}</td>
                        <td className='p-2'>{dateFormat(show.ShowDateTime)}</td>
                        <td className='p-2'>{Object.keys(show.occupiedSeats).length}</td>
                        <td className='p-2'>{currency}{Object.keys(show.occupiedSeats).length * show.showPrice}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div> 
    </>
  ) : (
    <Loading />
  )
}

export default ListShows
