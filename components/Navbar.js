"use client";

import {React , useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
import useRouter from 'next/navigation';

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)

  return (
    <nav className='bg-[#1a1a1a] text-white flex items-center justify-between px-4 h-12'>
      <Link href={"/"}>
      <div className='logo font-bold flex'>
        <img className="invert-100 w-6" src="cup.png" alt="" /> &nbsp;  Get Me a Chai
      </div>
      </Link>
      {/* <ul className='flex justify-between gap-4 '>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}
      <div>
        {session && <><button onClick={()=>{setshowdropdown(!showdropdown)}} onBlur={()=> {setTimeout(() => {
          setshowdropdown(false)
        }, 150);}} id="dropdownDefaultButton" 
        data-dropdown-toggle="dropdown" className="text-white  mx-3 bg-blue-700 relative
         hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
         text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
         type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>

          <div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute right-[120px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link  href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
              </li>
              <li>
                <Link onClick={()=>signOut()} href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
        </>
        }
        {session && <button className='text-gray-900 font-bold bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradent-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg text-sm px-5
       py-2.5 text-center me-2 mb-2 my-2.5' onClick={() => { signOut() }}>Logout</button>}
        {!session &&
          <Link href={"/login"}>
            <button className='text-gray-900 font-bold bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradent-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  rounded-lg text-sm px-5
       py-2.5 text-center me-2 mb-2 my-2.5' >Login</button></Link>
        }
</div >
    </nav>
  )
}

export default Navbar
