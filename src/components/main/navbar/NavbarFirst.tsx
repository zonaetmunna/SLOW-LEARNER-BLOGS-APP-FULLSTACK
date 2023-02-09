import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../assets/images/Electronics-logo.png';
import { BsCart3, BsHeart,BsSearch } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc'

const NavbarFirst = () => {

  const user = false;

  return (
    
    <header className="border-gray-200">
      <div className="py-3 px-3">
        <div className='flex items-center justify-between'>
          {/* logo link */}
          <div className='border rounded'>
            <Link href="/">
              <Image src={logo} alt='logo' width={50}
        height={50}
         />
            </Link>
          </div>
          {/* search input filed */}
          <div >
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <BsSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" size={20} />
              </div>
              <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700" placeholder="Search Mockups, Logos..." required />
            </div>
          </div>
          <div className='flex justify-around align-center'>
            {/* wishlist */}
            <div className='mx-2 rounded-full font-bold'>
              <Link href="/">
                <span><BsHeart size={20} className="text-yellow-500" /></span>
              </Link>
            </div>
            {/* cart */}
            <div className='mx-2'>
              <Link href="/">
                <span><BsCart3 size={20} className="text-yellow-500" /></span>
              </Link>
            </div>
            {/* dashboard link */}
            <div className='mx-2'>
              <Link href="/">Dashboard</Link>
            </div>
            {!user ? <div>
              <Link href="/">
                <span><VscAccount size={20} /></span>
              </Link>
            </div> :
              <div>
                <Link href="/">Login</Link>
              </div>
            }
          </div>
        </div>
      </div>
    </header>
   
  );
};

export default NavbarFirst;