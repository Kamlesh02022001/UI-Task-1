import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaUser } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FiChevronDown } from "react-icons/fi";
import { GiStarFormation } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import { FaRegFileAlt } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { SiWebmoney } from "react-icons/si";
import { FaHeartbeat } from "react-icons/fa";
import { RiCoinsLine } from "react-icons/ri";
import { CiCoins1 } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";
import { TbCoins } from "react-icons/tb";
import { GiNetworkBars } from "react-icons/gi";

import './App.css'

function App() {
  
  return (
    <>
    <div className='h-full w-full bg-gray-100 '>
      {/* header  */}
       <div  className='h-[60px]  bg-white flex  justify-end items-end w-full'> 
          <div className='flex mb-2 px-14 items-center'>
              <div className="mr-2 ">
              <FaUser className="text-2xl text-white mt-[3px] bg-blue-600  rounded-full h-9 w-9 p-2" />
            </div>

              <div className='mr-3 flex flex-col  '>
                <p className='font-'>Kamlesh Janawale</p>
                <p className='text-xs text-gray-500'>Web Developer</p>
              </div>
              <IoChevronDown />
          </div>        
       </div>

      {/* product */}
       <div  className='h-[410px] p-5 overflow-hidden mt-5 bg-gradient-to-b from-blue-800 to-blue-500 mx-16 rounded-2xl'>
         <div className='flex justify-between overflow-hidden'>
          <div className='text-white '>
              <p className='font-extralight shadow-xl bg-blue-600 px-4 py-0.5 rounded-full w-fit'>WELCOME KAMLESH</p>
              <div className='flex my-2 text-2xl overflow-hidden w-fit fontsemibold'>
                <p className=''>Select a product to </p> 
                <p className='ml-2 text-yellow-400'>Generate the Quote</p>
              </div>
            </div>
            
            {/* search bar */}
            <div className="flex h-[45px] items-center border border-gray-300 rounded-lg px-4 py-2 w-full max-w-sm bg-white shadow-sm">
              <FaSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search for a product"
                className="outline-none w-full bg-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
         </div>

          {/* form  */}
          <div className='h-[290px] overflow-hidden flex mt-1 w-full bg-white rounded-2xl'>
            <div className='w-[670px]  px-4 py-3'>
            <p className='font-bold text-gray-600 ml-4  mb-4'>Browse product</p>
            <div className="grid grid-cols-3 gap-4 ">
              
              {/* Top Row: 2 boxes */}
              <div className="col-span-3  flex  w[500px] rounded">
                <div className='w-full justify-center mr-4 text-white p-2  border border-blue-500 rounded-lg bg-gradient-to-l from-blue-800 to-blue-500 flex items-center '><FaHeartbeat className='mr-2'/>Term</div>
                <div className='w-full justify-center flex mx border border-blue-500 rounded-lg p-2  items-center'><TbMoneybag className='mr-1'/>PAR</div>
              </div>
              

              {/* Second Row: 3 boxes */}
              <div className="col-span-1 justify-center flex bg p-2  border border-blue-500 rounded-lg rounded items-center"><RiCoinsLine className='mr-1'/>ULIP</div>
              <div className="col-span-1 justify-center flex  p-2  border border-blue-500 rounded-lg rounded items-center"><TbCoins className='mr-1'/>Annuity</div>
              <div className="col-span-1 justify-center flex  p-2  border border-blue-500 rounded-lg rounded items-center"><SiWebmoney className='mr-1'/>Non Par</div>

              {/* Third Row: 1 box */}
              <div className="col-span-3 items-center  p-2 border border-blue-500 rounded-lg rounded justify-between flex">
                <div className='text-gray-700'>Choose Product</div> <IoChevronDown />
              </div>

              <div className="col-span-2  p-2 border border-blue-500 rounded-lg rounded justify-center flex bg-blue-700 text-white">Continue</div>
            </div>

            </div>

            <div className='w-[600px] py-5 overflow-hidden pr-4 '>
              <div className='h-[170px] overflow-hidden w-full mb-3 bg-blue-100 rounded-lg p-3'>
                <p className='text-blue-700 font-bold mb-2 flex items-center'><GiStarFormation className='mr-2'/> Your recently pitched products</p>

              <div className="grid grid-cols-3 gap-4 ">
                <div className="bg-white overflow-hidden px-4 py-3 rounded-lg shadow border border-blue-300">
                  <div>
                    <p className='text-blue-700 mb-1'>eTOUCH</p>
                    <p className='text-blue-700 mb-5 rounded-full w-fit px-2 bg-blue-100 text-xs'>Term</p>
                  </div>
                  <p className='text-blue-700 border border-blue-700 rounded-full w-fit px-2 text-sm'>Genrate Quote</p>
                </div>

                <div className="bg-white px-4 overflow-hidden py-3 rounded-lg shadow border border-blue-300">
                <div>
                    <p className='text-blue-700 mb-1'>ACE</p>
                    <p className='text-blue-700 mb-5 rounded-full w-fit px-2 bg-blue-100 text-xs '>PAR</p>
                  </div>
                  <p className='text-blue-700 border border-blue-700 rounded-full w-fit px-2 text-sm'>Genrate Quote</p>
                </div>

                <div className="bg-white px-4 overflow-hidden py-3 rounded-lg shadow border border-blue-300">
                   <div>
                    <p className='text-blue-700 mb-1'>Smart Wealth Goal</p>
                    <p className='text-blue-700 mb-5 rounded-full w-fit px-2 bg-blue-100 text-xs'>Term</p>
                  </div>
                  <p className='text-blue-700 border border-blue-700 rounded-full w-fit px-2 text-sm'>Genrate Quote</p>
                </div>
              </div>

              </div>
              <div className='h-[70px] items-center justify-between flex  justify-center p-5 text-white w-full bg-orange-400 rounded-lg'>
               <div className=''>
                 <p className=''>Smart Suggest</p>
                <p className='text-xs'>Get recommendations basis on your customer profile</p>
               </div>
                <CgArrowTopRight className='text-xl bg-orange-300 w-8 h-8 p-2 rounded-lg text-white'/>
              </div>
            </div>
          </div>
       </div>

        {/* List  */}
       <div  className='h-[175px] bg-white mt-5 mx-16 p-4 rounded-2xl'>
          <div className='flex justify-between mb-2 '>
            <p className='font-semibold text-gray-600'>Recent Quotes</p>
            <button className='text-blue-700'>View All</button>
          </div>

          <div className='flex  space-x-4 '>
            <div className='h-[110px] px-3 w-[200px] p-2 overflow-hidden border rounded-2xl border-blue-400'>
                <div className='flex mb-2 '>
                    <div className="mr-2 ">
                    <FaUser className="text-2xl text-white mt-[3px] bg-blue-600  rounded-full h-9 w-9 p-2" />
                    </div>

                    <div className='mr-5 flex flex-col  '>
                      <p className='font-'>Kamlesh J.</p>
                      <p className='text-xs text-gray-500'>8080289281</p>
                    </div>
                </div>  
                <div className='mt-6 flex justify-between items-center'>
                  <p className='text-xs text-blue-700 bg-blue-100 w-fit font-semibold px-3 py-1 rounded-lg'>3 QUOTES</p>  
                  <div className='border border-gray-200 rounded-full shadow-lg h-6 w-6 flex items-center justify-center bg-white hover:bg-blue-100 transition'>
                    <FaAngleRight className=' text-sm' />
                  </div>
                  </div> 
              
            </div>

            <div className='h-[110px] overflow-hidden px-3 w-[200px] p-2 border rounded-2xl border-blue-400'>
              <div className='flex mb-2'>
                  <div className="mr-2 ">
                  <FaUser className="text-2xl text-white mt-[3px] bg-blue-600  rounded-full h-9 w-9 p-2" />
                  </div>

                  <div className='mr-5 flex flex-col  '>
                    <p className='font-'>Kamlesh J.</p>
                    <p className='text-xs text-gray-500'>8080289281</p>
                  </div>
              </div>  
              <div className='mt-6 flex justify-between items-center'>
                  <p className='text-xs text-blue-700 bg-blue-100 w-fit font-semibold px-3 py-1 rounded-lg'>3 QUOTES</p>  
                  <div className='border border-gray-200 rounded-full shadow-lg h-6 w-6 flex items-center justify-center bg-white hover:bg-blue-100 transition'>
                    <FaAngleRight className=' text-sm' />
                  </div>
                  </div> 
            
            </div>

            <div className='h-[110px] overflow-hidden px-3 w-[200px] p-2 border rounded-2xl border-blue-400'>
              <div className='flex mb-2'>
                  <div className="mr-2 ">
                  <FaUser className="text-2xl text-white mt-[3px] bg-blue-600  rounded-full h-9 w-9 p-2" />
                  </div>

                  <div className='mr-5 flex flex-col  '>
                    <p className='font-'>Kamlesh J.</p>
                    <p className='text-xs text-gray-500'>8080289281</p>
                  </div>
              </div>  
              <div className='mt-6 flex justify-between items-center'>
                  <p className='text-xs text-blue-700 bg-blue-100 w-fit font-semibold px-3 py-1 rounded-lg'>3 QUOTES</p>  
                  <div className='border border-gray-200 rounded-full shadow-lg h-6 w-6 flex items-center justify-center bg-white hover:bg-blue-100 transition'>
                    <FaAngleRight className=' text-sm' />
                  </div>
                  </div> 
            
          </div>

          <div className='h-[110px] overflow-hidden px-3 w-[200px] p-2 border rounded-2xl border-blue-400'>
              <div className='flex mb-2'>
                  <div className="mr-2 ">
                  <FaUser className="text-2xl text-white mt-[3px] bg-blue-600  rounded-full h-9 w-9 p-2" />
                  </div>

                  <div className='mr-5 flex flex-col  '>
                    <p className='font-'>Kamlesh J.</p>
                    <p className='text-xs text-gray-500'>8080289281</p>
                  </div>
              </div>  
              <div className='mt-6 flex justify-between items-center'>
                  <p className='text-xs text-blue-700 bg-blue-100 w-fit font-semibold px-3 py-1 rounded-lg'>3 QUOTES</p>  
                  <div className='border border-gray-200 rounded-full shadow-lg h-6 w-6 flex items-center justify-center bg-white hover:bg-blue-100 transition'>
                    <FaAngleRight className=' text-sm' />
                  </div>
                  </div> 
            
          </div>

          <div className='h-[110px] overflow-hidden px-3 w-[200px] p-2 border rounded-2xl border-blue-400'>
              <div className='flex mb-2'>
                  <div className="mr-2 ">
                  <FaUser className="text-2xl text-white mt-[3px] bg-blue-600  rounded-full h-9 w-9 p-2" />
                  </div>

                  <div className='mr-5 flex flex-col  '>
                    <p className='font-'>Kamlesh J.</p>
                    <p className='text-xs text-gray-500'>8080289281</p>
                  </div>
              </div>  
              <div className='mt-6 flex justify-between items-center'>
                  <p className='text-xs text-blue-700 bg-blue-100 w-fit font-semibold px-3 py-1 rounded-lg'>3 QUOTES</p>  
                  <div className='border border-gray-200 rounded-full shadow-lg h-6 w-6 flex items-center justify-center bg-white hover:bg-blue-100 transition'>
                    <FaAngleRight className=' text-sm' />
                  </div>
                  </div> 
            
          </div>

          <div className='h-[110px] overflow-hidden px-3 w-[200px] p-2 border rounded-2xl border-blue-400'>
              <div className='flex mb-2'>
                  <div className="mr-2 ">
                  <FaUser className="text-2xl text-white mt-[3px] bg-blue-600  rounded-full h-9 w-9 p-2" />
                  </div>

                  <div className='mr-5 flex flex-col  '>
                    <p className='font-'>Kamlesh J.</p>
                    <p className='text-xs text-gray-500'>8080289281</p>
                  </div>
              </div>  
              <div className='mt-6 flex justify-between items-center'>
                  <p className='text-xs text-blue-700 bg-blue-100 w-fit font-semibold px-3 py-1 rounded-lg'>3 QUOTES</p>  
                  <div className='border border-gray-200 rounded-full shadow-lg h-6 w-6 flex items-center justify-center bg-white hover:bg-blue-100 transition'>
                    <FaAngleRight className=' text-sm' />
                  </div>
                  </div> 
            
          </div>

          </div>
           

          
       </div>

        {/* info  */}
       <div  className='h-[100px] overflow-hidden bg-white mt-5 mb-4 mx-16 p-2 px-3 rounded-2xl'>
          <div className='font-bold text-gray-600 mb-1'>Info Corner</div>

          <div className='flex space-x-4'>
              <div className='w-full border pt-1 rounded-lg'>
                <div className='flex mb-2 justify-between items-center'>
                  <div className='flex'>
                  <div className="mr-2 ">
                <FaRegFileAlt className="text-2xl text-red-300 h-[40px] w-9 p-2" />
                  </div>

                    <div className='mr-5 flex flex-col  '>
                      <p className='font-xs'>Products Info</p>
                      <p className='text-xs text-gray-500'>
                        Get recommendations basis on your customer profile
                      </p>
                    </div>
                  </div>

                  <div className='mr-2'>
                   <FaAngleRight className=' text-sm' />
                </div>
                </div> 
              </div>

              <div className='w-full border rounded-lg pt-1 '>
              <div className='flex mb-2 justify-between items-center'>
                <div className='flex '>
                <div className="mr-2 ">
                  <GiNetworkBars className="text-3xl  text-red-300 h-[40px] w-9 p-2" />
                  
                  </div>

                    <div className='mr-5 flex flex-col  '>
                      <p className='font-xs'>Fund Reports</p>
                      <p className='text-xs text-gray-500'>
                        Get recommendations basis on your customer profile
                      </p>
                    </div>
                </div>
                
                <div className='mr-2'>
                   <FaAngleRight className=' text-sm' />
                </div>
                </div> 
              </div>
          </div>

       </div>

    </div>
     
    
    
    </>
  )
}

export default App
