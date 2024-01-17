import React from 'react'
import '../styles/header.css';
import { useState } from "react";

const Header = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
      };
      const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
    
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false)
        }
      };
  return (
    <>
      <header>
    <nav className="bg-black flex sm:justify-end xl:justify-center items-center py-10 relative">
        <div className="logo text-indigo-500 font-semibold text-4xl">
            {'<B/>'}
        </div>
        <div className="open-menu md:hidden cursor-pointer" onClick={toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>      
        </div>
        <ul className="hidden md:flex">
            <li className="mr-20" >
                <a href="#" className="uppercase text-gray-200" onClick={() => scrollToSection('about-me')}>about me</a>
            </li>
            <li className="mr-20">
                <a href="#" className="uppercase text-gray-200" onClick={() => scrollToSection('projects')}>projects</a>
            </li>
            <li className="mr-20">
                <a href="#" className="uppercase text-gray-200" onClick={() => scrollToSection('skills')}>skills</a>
            </li>
            <li className="mr-20">
                <a href="#" className="uppercase text-gray-200" onClick={() => scrollToSection('contact')}>contact</a>
            </li>
        </ul>
    </nav>
</header>

        {isOpen && (
            
<header className='sidebar'>
    <nav className="relative py-20">
        <div className="close-menu" onClick={toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
        </div>
        <ul className="flex flex-col">
            <li className="mb-10 px-10">
                <a href="#" className="uppercase text-gray-900 font-bold" onClick={() => scrollToSection('about-me')}>about me</a>
            </li>
            <li className="mb-10 px-10">
                <a href="#" className="uppercase text-gray-900 font-bold" onClick={() => scrollToSection('projects')}>projects</a>
            </li>
            <li className="mb-10 px-10">
                <a href="#" className="uppercase text-gray-900 font-bold" onClick={() => scrollToSection('skills')}>skills</a>
            </li>
            <li className="mb-10 px-10">
                <a href="#" className="uppercase text-gray-900 font-bold" onClick={() => scrollToSection('contact')}>contact</a>
            </li>
        </ul>
    </nav>
</header>
        )}
    </>
  )
}

export default Header
