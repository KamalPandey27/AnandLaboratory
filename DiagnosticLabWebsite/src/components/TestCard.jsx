import React from 'react'

function TestCard(props) {
  return (
    <>
       {/* <div className=' hover:text-white mt-10 flex flex-col justify-between w-[60vw] sm:w-[40vw] sm:h-[60vh] lg:w-[25vw] h-[45vh] md:w-[35vw] md:h-[50vh] lg:h-[45vh] xl:w-[20vw]  p-5 border-1 border-gray-400 rounded-md relative hover:bg-linear-to-br from-blue-700 to-gray-300  transition-all duration-300 hover:scale-105 ' >
           <div className=''>
           <h1 className='text-xl sm:text-2xl  font-semibold md:text-3xl'>{props.heading}</h1>
            <h1 className='text-lg sm:text-xl md:text-2xl font-semibold mt-2'>{props.rate}</h1>
            <p className=' font-mono mt-2 text-sm sm:text-lg md:text-xl'>{props.des}</p>
           </div>
            <button className=' p-2  w-[100%] text-white bg-blue-700 font-medium text-lg rounded-md'>Book Now</button>
            </div>   */}

<div className="mt-10 flex flex-col justify-between p-5 border border-gray-400 rounded-md relative transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-700 hover:to-gray-300 hover:text-white
  w-[50vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] xl:w-[20vw]
  h-[50vh] sm:h-[55vh] md:h-[55vh] lg:h-[45vh] xl:h-[50vh]
">
  <div>
    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">{props.heading}</h1>
    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2">{props.rate}</h2>
    <p className="font-mono mt-2 text-sm sm:text-base md:text-lg">{props.des}</p>
  </div>
  <button className="p-2 w-full mt-4 text-white bg-blue-700 font-medium text-base sm:text-lg rounded-md">
    Book Now
  </button>
</div>
    </>
  )
}

export default TestCard
