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
          <div className="w-full mb-5 flex justify-center">
            <div className="relative w-full h-[90px] lg:h-[140px] overflow-hidden">
              <Image
                src={logoFooter}
                alt="Logo Espacio Vita"
                fill
                className="object-contain scale-[2.7] lg:scale-[3] transition-transform"
              />
            </div>
          </div>

          <div className='w-full h-[200px] lg:h-[400px]'>
            <Image src="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/67b5cecf0984d99b23200bce_image.avif" width={400} height={200} alt={''} className='w-full h-full object-cover'/>
          </div>
        </div>

        <div className='w-full px-5 lg:px-10 flex flex-col lg:gap-5 text-white'>
          <div className='font-bold text-[9px] lg:text-[16px] uppercase mb-4'>(navigation)</div>
          <div >
            <a
              href='/' 
              className='font-semibold text-[20px] lg:text-[42px] relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
              Home
            </a>
          </div>
          <div >
            <a 
              href='/projects'
              className='font-semibold text-[20px] lg:text-[42px] relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
              Works
            </a>
          </div>
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

            <div className="flex gap-3">
              {/* Email */}
              <a
                href="mailto:informacion@grupoespaciovita.com"
                className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" />
                </svg>

              </a>

              {/* WhatsApp */}
              <a
                href="https://api.whatsapp.com/send/?phone=529231082365&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 3C9.4 3 4 8.4 4 15c0 2.5.8 4.8 2.1 6.7L4 29l7.5-2c1.8 1 3.9 1.5 6.1 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3z" />
                  <path d="M12.3 11.1c.3-.6.5-1 .9-1.1.2-.1.5-.1.9-.1s.6 0 .8.4c.3.4.9 1.3 1 1.4.1.1.2.2.2.3s0 .2-.1.3l-.5.6c-.2.2-.4.4-.2.7.1.3.4.7.9 1.1s1.1.7 1.6.9c.4.1.7.1 1-.1.2-.1.3-.3.5-.4.1-.1.2-.2.3-.2s.2 0 .3.1c.1.1 1.4.7 1.7.8.3.1.5.2.5.4 0 .1.1.5-.2 1-.3.6-1.2 1.1-2.1 1.1-1.1.1-2.5-.3-4.1-1.5-1.5-1.2-2.3-2.5-2.7-3.4-.3-.8-.3-1.3 0-1.7z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/espaciovita.interiorismo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 11-4.63-4.63 4 4 0 014.63 4.63z" />
                  <circle cx="17.5" cy="6.5" r="0.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/espaciovita.interiorismo/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v9h4v-9h3l1-4h-4V6a1 1 0 011-1h3V2z" />
                </svg>
              </a>
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
        <div>MADE BY <span>YAZ RUEDA</span></div>
      </div>

    </footer>
  );
};

export default Footer;
