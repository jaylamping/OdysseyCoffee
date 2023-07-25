import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between fixed top-0 left-0 w-full p-4 bg-transparent z-50'>
      <div className='flex items-center space-x-4'>
        <ul className='flex items-center space-x-4'>
          <li>
            <Link href='/menu'>Menu</Link>
          </li>
          <li>
            <Link href='/location'>Location</Link>
          </li>
          <li>
            <Link href='/about-us'>About Us</Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center space-x-4 flex-grow justify-center'>
        <div>
          <Link href='/'>
            <Image src='/coffee.jpg' alt='logo' className='w-12 h-12 object-contain' width={69} height={69}></Image>
          </Link>
        </div>
      </div>
      <div className='flex items-center space-x-4'>
        <ul className='flex items-center space-x-4'>
          <li>
            <Link href='/facebook'>Facebook</Link>
          </li>
          <li>
            <Link href='/twitter'>Twitter</Link>
          </li>
          <li>
            <Link href='/onlyfans'>Onlyfans</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
