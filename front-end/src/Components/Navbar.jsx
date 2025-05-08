import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
const Navbar = () => {

    const navigate = useNavigate();
    
    const {token,setToken, userData} = useContext(AppContext)

    const [showMenu,setShowMenu] = useState(false);
    
    const logout=()=>{
        setToken(false)
        localStorage.removeItem('token')
    }
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-indigo-500 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-indigo-500 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-indigo-500 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-indigo-500 w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token && userData
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={userData.image} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor:pointer'>My Profile</p>
                            <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor:pointer'>My Appointments</p>
                            <p onClick={logout} className='hover:text-black cursor:pointer'>Logout</p>
                        </div>
                    </div>
                </div>
                :
                <button onClick={()=>navigate('/login')} className='bg-indigo-500 text-white px-8 py-3 rounded-full font-light hidden md:block '>Create Account</button>
            }
            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

            {/* Mobile Menu */}
            <div className={` ${showMenu ? 'fixed-w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className='w-36' src={assets.logo} alt="" />
                    <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul>
                    <NavLink>Home</NavLink>
                    <NavLink>ALL Doctors</NavLink>
                    <NavLink>ABOUT</NavLink>
                    <NavLink>CONTACT</NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar