"use client";
import React from 'react';
import Image from 'next/image';
import '../public/styles/index.css';
import image from '../public/assets/images/logo/vita/Logo_VITA.png';
import logo from '../public/assets/images/logo/vita/EspacioVita_Transp.png';
import ofice from "../public/assets/images/ofice.avif"
import carpinteria from "../public/assets/images/carpinteria.jpg"
import logoVitaWhite from "../public/assets/images/logo/vita/EspacioVitaInteriorismo_TranspWhite.png"
import logoGala from "../public/assets/images/logo/gala/gala_TransWhite.png"
import logoFooter from "../public/assets/images/logo/vita/Logo_E_02.jpeg"
import WorkContainer from './components/Work';
import Button from './components/Button';

const Page: React.FC = () => {
  return (
    <div className="">

      <section className="w-full h-screen">
        <div className='relative w-full h-full flex flex-col justify-end items-end overflow-hidden'>

          <div className='absolute flex justify-center items-center w-full h-full lg:h-screen'>
            <div className='h-[80%]'>
              <Image src={logo} alt="Logo Espacio Vita" className="lg:hidden w-full h-full object-cover"/>
              <Image src={image} alt="Wide shot of Haig viewing from a green back yard into the living space" className="hidden lg:block w-full h-full object-cover"/>
            </div>
            <div className="-z-30 pointer-events-none w-full h-full absolute bg-[linear-gradient(#08080752,_#302c2633)] opacity-25"></div>
            <div className="w-full hero_collection_details flex justify-end px-6">
              <a href="http://www.oharchitecture.com.au/project/haig" className="g_link is-hero w-inline-block group relative inline-block">
                <div className="btn_default_contain">
                  <div className="btn_default_text">Carpintería</div>
                </div>
                <div className="g_circle w-6 h-6 border border-black rounded-full transition-all duration-300 ease-in-out group-hover:scale-50 group-hover:bg-black"></div>
              </a>
            </div>
          </div>

          <div className="z-4 p-6 w-full flex relative">
            <div className="flex justify-between items-end self-end w-full">
              <h1 className="text-[1.5rem] break-words max-w-[25ch] whitespace-nowrap clip-[rect(0,0,0,0)] border-0 w-px h-px mx-auto p-0 absolute inset-x-0 top-0 overflow-hidden">We design homes and spaces guided by your vision, bringing together thoughtful design, collaboration, and creativity to shape homes that simply work for how you live.</h1>
              <h1 data-lines-split="" data-split-animation="" className="text-[1.5rem] break-words max-w-[25ch]">We design homes and spaces guided by your vision, bringing together thoughtful design, collaboration, and creativity to shape homes that simply work for how you live.</h1>
              <div className="hero_home_scroll">(SCROLL down)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full z-20 pt-12 pb-20 bg-[#fcfcfc] p-10">
        <div className="flex flex-col items-center lg:flex-row w-full px-4 py-8">
          {/* Columna izquierda (texto) */}
          <div className="text-black font-bold text-[40px] sm:text-[48px] lg:text-[96px] uppercase leading-none text-center lg:text-right lg:mr-8 lg:self-start">
            <div>Designing</div>
            <div>Homes With</div>
          </div>

          {/* Imagen en el centro */}
          <div className="my-6 lg:my-0">
            <img
              src="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/67b686931de6bcfb778ce746_OH_SIDNEY%C2%A9ANDYMACPHERSON-15_EDIT_FILMGRAIN%20(1).avif"
              alt=""
              className="w-[220px] sm:w-[260px] lg:w-[280px] object-cover"
            />
          </div>

          {/* Columna derecha (texto) */}
          <div className="text-black font-bold text-[40px] sm:text-[48px] lg:text-[96px] uppercase leading-none text-center lg:text-left lg:ml-8 lg:self-end">
            <div>People</div>
            <div>At Heart</div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center px-10 ">
          <div className='text-[24px] text-justify font-thin w-[50%]'>
            <p className=''>
              We design spaces for people. No matter
              the scale of the projects, our down-to-earth
              approach stays the same. We listen first,
              design second. We take the time to
              understand how you live, work, and move
              through your space.
            </p>
            <p>
              Then, we bring your vision to life. Drawing
              from real experience, we create
              contemporary, aspirational spaces that feel
              effortless and truly yours.
            </p>
          </div>

          <div className="flex justify-center items-center mt-6">
            <Button 
              label={"Contact Us"}
              onClick={()=>{
                console.log('Abrir el contact us');
              }}
            />
          </div>
        </div>
      </section>

      <section className="w-full z-20 pt-12 pb-20 bg-[#fcfcfc] p-10">
        <div className="flex justify-between mb-[2rem] items-end">
          <div className="flex text-[102px] uppercase font-bold">Featured Works</div>
          <div className="flex text-[24px] font-light items-center gap-4">
            <div className="works_home_works u-text-display">Works</div>
            <div className="works_home_dynamic u-text-display">(06)</div>
          </div>
        </div>
        <div className="works_collection_wrap w-dyn-list">
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-20">
            <WorkContainer 
              name={"Myrtle Pool House"} 
              id={"01"} 
              state={"Under Construction"} 
              year={2025} 
              urlImage={"https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67ec864b321b2073a6618701_OH_POOLHOUSE%C2%A9ANDYMACPHERSON-21%20(1).avif"} 
              url={"http://www.oharchitecture.com.au/project/myrtle-pool-house"} 
              imgClass={"w-full h-auto"}
            />
            <WorkContainer 
              name={"Haig"} 
              id={"02"} 
              state={""} 
              year={2024} 
              urlImage={"https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67be91596f129dc684d4c711_OG%20HAIG%20Andy%20Macpherson%204.avif"} 
              url={"http://www.oharchitecture.com.au/project/haig"}
              imgClass={"w-full h-auto"}
            />
            <WorkContainer 
              name={"Sidney house"} 
              id={"03"} 
              state={"Under Construction"} 
              year={2023} 
              urlImage={"https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67bea5e36abd92ebf2bbabed_OH_SIDNEYANDYMACPHERSON-23.avif"} 
              url={"http://www.oharchitecture.com.au/project/hawken"}
              imgClass={"w-full h-auto"}
            />

            <WorkContainer 
              name={"Clifton"} 
              id={"04"} 
              state={""} 
              year={2023} 
              urlImage={"https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67cae1a8c4cbd6b6c175fa5c_A12.avif"} 
              url={"http://www.oharchitecture.com.au/project/clifton"}
              imgClass={"w-full h-auto"}
            />

            <WorkContainer 
              name={"Heal"} 
              id={"05"} 
              state={""} 
              year={2023} 
              urlImage={"https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67c90160500ec1ec18d1d2f1_A2.avif"} 
              url={"http://www.oharchitecture.com.au/project/heal"}
              imgClass={"w-full h-auto"}
            />

            <WorkContainer 
              name={"Hawken"} 
              id={"06"} 
              state={""} 
              year={2023} 
              urlImage={"https://cdn.prod.website-files.com/678f62698d1043f9f15c0cec/67cb9dd68d07464c05bdfa69_A1.avif"} 
              url={"http://www.oharchitecture.com.au/project/sidney"}
              imgClass={"w-full h-auto"}
            />

          </div>
        </div>
        <div className="flex w-full justify-center mt-10">
          <Button 
            label={"Portfolio"}
            onClick={()=>{
              console.log('Abrir el contact us');
            }}
          />
        </div>
      </section>

      <section className='w-full z-20 pt-12 pb-20 bg-[#fcfcfc] p-10'>
        <div className='flex'>
          <div className='w-2/3 flex items-center font-bold text-[84px] leading-none uppercase'>
            <span>Let's build a space that inspures and feels like home</span>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <div className="flex items-center text-center text-sm md:text-lg gap-4 tracking-wide uppercase text-black">
              <span className="text-[84px] mr-4">[</span>
              <span className='font-light text-[20px]'>AN INTERIOR IS THE NATURAL<br />PROJECTION OF THE SOUL</span>
              <span className="text-[84px] ml-4">]</span>
            </div>
          </div>
        </div>

        <div className="mt-8 group relative h-[400px] overflow-hidden">
          {/* Imagen 1 + sombra + logo */}
          <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:-translate-x-full">
            {/* Imagen */}
            <Image src={ofice} alt="Oficina" className="h-full w-full object-cover" />

            {/* Sombra sobre la imagen */}
            <div className="absolute inset-0 bg-black opacity-40 z-0 pointer-events-none" />

            {/* Logo encima */}
            <div className="absolute inset-0 flex items-center justify-end z-10 pointer-events-none">
              <Image src={logoVitaWhite} alt="Logo Oficina" className="w-auto h-auto lg:h-[900px] md:h-full" />
            </div>
          </div>

          {/* Imagen 2 + sombra + logo */}
          <div className="absolute inset-0 transition-transform duration-700 ease-in-out translate-x-full group-hover:translate-x-0">
            {/* Imagen */}
            <Image src={carpinteria} alt="Carpintería" className="h-full w-full object-cover" />

            {/* Sombra sobre la imagen */}
            <div className="absolute inset-0 bg-black opacity-40 z-0 pointer-events-none" />

            {/* Logo encima */}
            <div className="absolute inset-0 flex items-center justify-end z-10 pointer-events-none">
              <Image src={logoGala} alt="Logo Carpintería" className="w-auto h-auto lg:h-[900px] md:h-full" />
            </div>
          </div>
        </div>



      </section>

      <footer className='w-full z-20 pt-12 bg-black p-10'>
        <div className='grid grid-cols-3 gap-10'>
          <div className='flex flex-col items-center'>
            <div className='w-full h-[100px] mb-5'>
              <Image src={logoFooter} alt={""} className='w-full h-full object-cover' />
            </div>
            <div className='w-full h-[400px]'>
              <Image src="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/67b5cecf0984d99b23200bce_image.avif" width={400} height={200} alt={''} className='w-full h-full object-cover'/>
            </div>
          </div>

          <div className='w-full px-10 flex flex-col gap-5 text-white'>
            <div className='font-bold uppercase mb-4'>(navigation)</div>

            {['Home', 'Works', 'Contact Us'].map((text, idx) => (
              <div key={idx}>
                <a className='font-semibold text-[42px] relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'>
                  {text}
                </a>
              </div>
            ))}
          </div>

          <div className='flex flex-col gap-5 text-white'>
            <div className='mb-5'>
              <div className='font-bold uppercase mb-4'>
                (Social media)
              </div>
            </div>

            <div>
              <div className='font-bold uppercase mb-4'>
                (info)
              </div>
              <div className='flex flex-col gap-2'>
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
        <div className='flex justify-between mt-4 text-white font-semibold uppercase'>
          <div className=''>© 2025 Grupo Espacio Vita</div>
          <div> instagram</div>
          <div>facebook</div>
          <div>MADE BY <span>YAZ RUEDA</span></div>
        </div>
      </footer>
      
    </div>
  );
};

export default Page;
