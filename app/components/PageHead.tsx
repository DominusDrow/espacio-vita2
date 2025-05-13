"use client"
import React from 'react';
import Image from 'next/image';
import { logoVitaRegular,logoGalaRegular } from './Logos';
import Button from './Button';
import useDrawerStore from '../store/contactStore';

const PageHead: React.FC = () => {
  const menuItems = ["WORKS"];
  const { setIsOpen } = useDrawerStore();

  return (
    <div className='absolute top-0 w-full z-30 d'>
      {/* Header con el menú */}
      <header className="px-6 md:px-12 lg:px-24 py-8 relative">
        <div className="flex justify-between items-center relative">
          {/* Logo a la izquierda */}
          <a 
            href='#'
            className='flex gap-5 tracking-tight items-center group'
          >
            <div className='hidden lg:block w-3 h-3 border border-black rounded-full group-hover:bg-black group-hover:scale-80 transition-all ease-in-out duration-300'></div>
            <div className='flex'>
              <div className='relative w-[100px] h-[100px] overflow-hidden flex items-center justify-center'>
                <Image
                  src={logoVitaRegular}
                  alt=""
                  className='absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 object-cover'
                />
              </div>
              
              <div className='relative w-[100px] h-[100px] overflow-hidden flex items-center justify-center'>
                <Image
                  src={logoGalaRegular}
                  alt=""
                  className='absolute top-1/2 left-1/2 w-[170px] h-[170px] -translate-x-1/2 -translate-y-1/2 object-cover'
                />
              </div>
            </div>
          </a>

          {/* Menú centrado absolutamente */}
          <nav className="flex items-center gap-2 lg:gap-10 ">
            <ul className="flex gap-6 text-sm font-medium">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href="/projects" className="relative font-bold text-[16px] lg:text-[24px] overflow-hidden group block ">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-7">
                      {item}
                    </span>
                    <span className="block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-8 text-black text-[16px] lg:text-[24px]">
                      {item}
                    </span>
                  </a>
                </li>
                )
              )}
            </ul>
            <div>
              <Button 
                label={"Get in touch"}
                onClick={() => setIsOpen(true)}
              />
            </div>
          </nav>
        </div>
      </header>
  </div>
  );
};

export default PageHead;
