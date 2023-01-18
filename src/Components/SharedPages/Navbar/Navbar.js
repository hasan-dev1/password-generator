import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [navbar, setNavbar]= useState()
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => {
            setNavbar(data)
        })
    },[])
    console.log(navbar)
    return (
        <div>
            <h1 className='text-xl font-semibold'>Media Name</h1>
            <ul>
                <li><NavLink to={'/'} className={({isActive}) => isActive ? 'my-1 bg-[#ced0d18e] text-black block p-1 rounded' : 'my-1 bg-[#3334358e] block p-1 rounded'}>Gmail</NavLink></li>
                <li><NavLink to={'/facebook'} className={({isActive}) => isActive ? 'my-1 bg-[#ced0d18e] text-black block p-1 rounded' : 'my-1 bg-[#3334358e] block p-1 rounded'}>Facebook</NavLink></li>
                <li><NavLink to={'/instagram'} className={({isActive}) => isActive ? 'my-1 bg-[#ced0d18e] text-black block p-1 rounded' : 'my-1 bg-[#3334358e] block p-1 rounded'}>Instagram</NavLink></li>
                <li><NavLink to={'/github'} className={({isActive}) => isActive ? 'my-1 bg-[#ced0d18e] text-black block p-1 rounded' : 'my-1 bg-[#3334358e] block p-1 rounded'}>Github</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;