import React from 'react'
import TestCard from './TestCard'
 

function Services() {
  return (
    <>
{/*  */}
      <div className="bg-[url(/images/bg.jpg)] w-[100vw] h-[50vh] relative flex justify-center items-center bg-center bg-no-repeat bg-cover">
        <div className="absolute h-[50vh] w-[100vw]  bg-blue-700 opacity-60 z-0"></div>
        <div className="z-1 justify-center  flex items-center  relative text-5xl font-bold text-white">
          <div className=""> Services</div>
        </div>
      </div> 
{/*  */}



{/*  */}

       <div className='flex justify-center mt-20'>
       <div className=' flex justify-center cursor-pointer '>
       <input type="text" placeholder='⌕ Search tests ' className='hover:border-gray-500 text-lg  border-2 rounded-md p-2 border-gray-300 w-[40vw]' />
        </div>
       
        </div> 
        


<div className='flex justify-center'>
    

<div className=' flex flex-col items-center  sm:flex-row  sm:flex lg:w-[100vw] pb-10 xl:w-[70vw] p-5  w-[90vw]  mx-auto mb-20 justify-around flex-wrap'>

  <TestCard heading="Weakness" rate="₹ 700/-" des="Thyroyd + Vitamin B12 + Vitamin D + Hormone Profile"/>
  <TestCard heading="Thyroyd Function Test" rate="₹ 700/-" des="T3 + T4 + TSH"/>
  <TestCard heading="Bone Package" rate="₹ 700/-" des="Calcium + Phosporous + Alkatine Phosporous + Vitamin D"/>
  <TestCard heading="Heart Package" rate="₹ 700/-" des="Blood Sugar + Lipid Profile + Cholestrol + HDL + LDL + CRP + SGOT"/>
  <TestCard heading="Hair Loss" rate="₹ 700/-" des="Thyroyd + Iron Studies + Testosterone + Hormone Profile"/>
  <TestCard heading="Weight Gain/ Loss" rate="₹ 700/-" des="Thyroyd + HbA1c + Cortisol + Hormone Profile"/>
  <TestCard heading="Joint Package" rate="₹ 700/-" des="Calcium + Blood Sugar + ESR + Uric Acid + CRP"/>
  <TestCard heading="Fever Package" rate="₹ 700/-" des="CBC + ESR + Widal + MP + Urine Analysis"/>
  <TestCard heading="Preganancy Package" rate="₹ 700/-" des="CBC + Thyroyd Function Test + HIV + Blood Sugar + HCV + VDRL + HbsAg"/>
  <TestCard heading="Diabetic Package" rate="₹ 700/-" des="Blood Sugar + HBA1c + Lipid Profile + Cholestrol + Triglycerides + HDL + VLDL + Urine Analysis + Urea + Uric Acid"/>
  <TestCard heading="Hypertension Package" rate="₹ 700/-" des="Blood Sugar + Cholestrol + Triglycerides + LDL + Sodium + Potassium + Creatinine + Lipid Profile"/>
    </div>
</div>
{/*  */}


{/*  */}







<div className='flex  justify-center mb-20' >

<div className='lg:flex-row flex flex-col justify-around h-[80vh] lg:h-[20vh] items-center sm:w-[80vw] md:w-[70vw] w-[90vw] lg:w-[90vw] '>


<div className='bg-blue-700 w-[100%]  h-[20vh] lg:bg-blue-800 lg:w-1/3 flex items-center '>
    <div className='h-[50%] w-[30%] ml-2 sm:w-[20%] '>
<img src="images/doc.png" alt="" className='h-[100%]'/>
    </div>
    <div className='text-white p-1'>
<h1 className='text-lg font-semibold md:text-xl mb-2'>Online Reports</h1>
<p className='text-sm md:text-md'>With reports available online, you can get to view your results wherever you want. </p>
    </div>
</div>
<div className='bg-blue-700 w-[100%] h-[20vh] lg:bg-blue-700 lg:w-1/3  flex items-center '>
<div className='h-[50%] w-[30%] ml-2 sm:w-[20%]  '>
<img src="images/stetho.png" alt="" className='h-[100%]'/>
    </div>
    <div className='text-white p-1'>
<h1 className='text-lg font-semibold md:text-xl mb-2'>Health Checkups</h1>
<p className='text-sm md:text-md'>The best time to go for health checkup is when you don't need one. </p>
    </div>

</div>
<div className='bg-blue-700 w-[100%] h-[20vh] lg:bg-blue-600 lg:w-1/3 flex items-center '>
<div className='h-[50%] w-[30%] ml-2 sm:w-[20%] '>
<img src="images/homee.png" alt="" className='h-[100%]'/>
    </div>
    <div className='text-white p-1 '>
<h1 className='text-lg font-semibold md:text-xl mb-2'>Home Collection</h1>
<p className='text-sm md:text-md xl:w-[90%]'>It covers all the vital parameters of your body! </p>
    </div></div>

</div>

</div>




{/*  */}
    </>
  )
}

export default Services
