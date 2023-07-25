import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='grid grid-cols-3 items-center fixed top-0 left-0 w-full p-5 bg-transparent z-50'>
      <div className='justify-self-start'>
        <ul className='flex items-center space-x-6 pl-4'>
          <li>
            <Link href='/menu'>Menu</Link>
          </li>
          <li>
            <Link href='/specials'>Specials</Link>
          </li>
          <li>
            <Link href='/order'>Order Online</Link>
          </li>
          <li>
            <Link href='/location'>Location</Link>
          </li>
        </ul>
      </div>
      <div className='justify-self-center'>
        <Link href='/'>
          <Image src='/coffee.jpg' alt='logo' className='w-12 h-12 object-contain' width={69} height={69}></Image>
        </Link>
      </div>
      <div className='justify-self-end'>
        <ul className='flex items-center space-x-6 pr-4'>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <Link href='https://www.facebook.com/popefrancis/' target='_blank' rel='noopener noreferrer'>
              Facebook
            </Link>
          </li>
          <li>
            <Link href='https://twitter.com/elonmusk' target='_blank' rel='noopener noreferrer'>
              Twitter
            </Link>
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
