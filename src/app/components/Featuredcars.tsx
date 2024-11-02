import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Featuredcars = () => {
  return (
    <div className='bg-gray-100'>
        <main className='pl-10'>
          
                <div className='flex space-x-4 w-full py-4 pl-20'>  
                   <h1 className='text-2xl font-bold'>Featured New Cars</h1>
                <h2 className='justify-end pl-96 text-sm text-blue-600'>View All New Cars</h2></div>
                <div>
                    <ul className='flex space-x-8 text-sm pl-20'>
                        <li><Link href="/">Popular</Link></li>
                        <li><Link href="/">Upcoming</Link></li>
                        <li><Link href="/">Newly Launched</Link></li>
                    </ul>
                </div>
              
              <div className='flex span-x-4 p-4 justify-center gap-10'>
                   <div className='bg-white w-64'>

                  <Image src="/car3.jpg" alt='car' width={200} height={200}/>
                    <Link href="/car1detail" className='text-blue-500 font-bold px-6'>Toyota Corolla</Link><br />
                    <div className='px-6'>
                    <span className='text-green-400 text-sm'>PKR 59.5 - 75.5 lacs</span><br />
                    <span className='text-orange-500'>★★★★★</span>
                    <span className='text-sm'> 621 Reviews</span><br />
                    </div>
              
                    </div>  
                    <div className='bg-white w-64'>
                    <Image src="/car2.jpg" alt='car' width={200} height={200} />
                    <Link href="/car2details" className='text-blue-500 font-bold px-6'>Suzuki Alto</Link><br />
                    <div className='px-6'>
                    <span className='text-green-400 text-sm'>PKR 23.5 - 25.5 lacs</span><br />
                    <span className='text-orange-500'>★★★★★</span>
                    <span className='text-sm'>894 Reviews</span><br />
                    </div>
                    </div> 
                    
                      <div className='bg-white w-64 justify-center'>
                    <Image src="/car3.jpg" alt='car' width={200} height={200} />
                    <Link href="/car3details" className='text-blue-500 font-bold px-6'>Honda City</Link><br />
                   <div className='px-6'>
                   <span className='text-green-400 text-sm'>PKR 46.5 - 58.5 lacs</span><br />
                    <span className='text-orange-500'>★★★★★</span>
                    <span className='text-sm'> 781 Reviews</span><br />
                    </div>
                    </div>

                      <div className='bg-white w-64'>
                    <Image src="/car4.jpg" alt='car' width={200} height={200} />
                    <Link href="/car4details" className='text-blue-500 font-bold px-6'>Honda Civic</Link><br />
                    <div className='px-6'>
                    <span className='text-green-400 text-sm'>PKR 86.5 - 99.5 lacs</span><br />
                    <span className='text-orange-500'>★★★★★</span>
                    <span className='text-sm'>645 Reviews</span><br />
                    </div>
                
                    </div> 
               </div>
         </main>
      
      </div>
  )
}

export default Featuredcars
