import React from 'react';

const Hero = () => {
  return (
    <div className='p-11 w-full justify-center bg-gray-100'>
        <section>
    <div className='w-full justify-center pl-10'>
          <div>
                <h1 className='text-center text-2xl'>Sell Your Car On Pakwheels and Get The Best Price</h1>
            </div>
            <div className='flex rows-span-3 p-4'>
         <div className='space-y-4'>
         <div>  
                  <h1 className='text-blue-700'>Post Your Adds on PakWheels</h1>
         </div>
        
                <div>
                 <ul className='text-sm'>
                        <li>✔️Post your add for freein 3 Easy Steps </li>
                        <li>✔️Get Genuine offers from Verified Buyers</li>
                        <li>✔️Sell your car Fast at the Best Price </li>
                    </ul>
                    <div className='mt-3'>
                    <button className='bg-red-800 text-sm px-6 text-white p-1 rounded-md'>Post Your Ad</button>

                    </div>

                </div>
     </div>
     <div className='text-center mt-20'>
          <h1 className='justify-center pl-36'>OR</h1>
         </div>



         <div className='justify-end pl-36 space-y-4'>
                <div>  
                  <h1 className='text-blue-700'>Try PakWheels Sell It For Me
                  </h1>
               </div>
                <div>
                    <ul className='text-sm'>
                        <li>✔️Dedicated Sales Expert to Sell your Car </li>
                        <li>✔️We Bargain for you and share the Best Offer</li>
                        <li>✔️We ensure Safe & Secure Transaction</li>
                    </ul>
                    <div className='mt-3 text-sm'>
                    <button className='bg-blue-500 rounded-md px-6 p-1 text-white'>Register Your Car</button>
                    </div>
         </div>
         </div>
             
         </div>
    </div>  
                 
      </section> 
    </div>
  )
}

export default Hero
