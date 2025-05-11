import React from 'react';
import Image from 'next/image';
import {logoVitaSimple as logoFooter} from './Logos';
import useDrawerStore from '../store/contactStore';

const Footer = () => {
  const { setIsOpen } = useDrawerStore();

  return (
    <footer className='w-full z-20 pt-12 bg-black p-5 lg:p-10'>
      <div className='grid grid-cols-3 lg:gap-10'>
        <div className='flex flex-col items-center'>
          <div className='w-full h-[40px] lg:h-[100px] mb-5'>
            <Image src={logoFooter} alt={""} className='w-full h-full object-cover' />
          </div>
          <div className='w-full h-[200px] lg:h-[400px]'>
            <Image src="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/67b5cecf0984d99b23200bce_image.avif" width={400} height={200} alt={''} className='w-full h-full object-cover'/>
          </div>
        </div>

        <div className='w-full px-5 lg:px-10 flex flex-col lg:gap-5 text-white'>
          <div className='font-bold text-[9px] lg:text-[16px] uppercase mb-4'>(navigation)</div>

          {['Home', 'Works'].map((text, idx) => (
            <div key={idx}>
              <a className='font-semibold text-[20px] lg:text-[42px] relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                {text}
              </a>
            </div>
          ))}
          <div>
            <a 
              onClick={() => setIsOpen(true)}
              className='font-semibold text-[20px] lg:text-[42px] relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className='flex flex-col gap-2 lg:gap-5 text-white'>
          <div className='mb-5'>
            <div className='font-bold text-[9px] lg:text-[16px] uppercase mb-4'>
              (Social media)
            </div>
          </div>

          <div>
            <div className='font-bold text-[9px] lg:text-[16px] uppercase mb-4'>
              (info)
            </div>
            <div className='flex flex-col gap-2 text-[8px] lg:text-[16px]'>
              <div className='flex gap-2'>
                <span className='font-semibold'>A:</span>
                <span className='font-light'> 101 Days Rd, Grange QLD 4051</span>
              </div>
              <div className='flex gap-2'>
                <span className='font-semibold'>E:</span>
                <span className='font-light'> info@vita.com</span>
              </div>
              <div className='flex gap-2'>
                <span className='font-semibold'>P:</span>
                <span className='font-light'> 222 345 5678</span>
              </div>
              <div className='flex gap-2'>
                <span className='font-semibold'>H:</span>
                <span className='font-light'> Monday to Friday, 8:30am - 5:00pm</span>
              </div>
            </div>
          </div>
        </div>
        

      </div>
      <div className='flex justify-between mt-4 text-white font-semibold text-[8px] lg:text-[16px] uppercase'>
        <div className=''>© 2025 Grupo Espacio Vita</div>
        <div> instagram</div>
        <div>facebook</div>
        <div>MADE BY <span>YAZ RUEDA</span></div>
      </div>
    </footer>
  );
};

export default Footer;
