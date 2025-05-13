"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../public/styles/index.css';

import ofice from "../public/assets/images/ofice.jpg"
import carpinteria from "../public/assets/images/carpinteria.jpg"
import { logoVitaText, logoVitaRegular, logoVitaWhite } from './components/Logos';
import { logoGalaWhite, logoGalaRegular} from './components/Logos';
import WorkContainer from './components/Work';
import Button from './components/Button';
import useDrawerStore from './store/contactStore';

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Page: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { setIsOpen } = useDrawerStore();

  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const aboutSectionRef = useRef(null);

  useGSAP(() => {
    const targets = gsap.utils.toArray(".rise-up");
    const works = gsap.utils.toArray(".overlay");

    gsap.to(bgRef.current, {
      yPercent: 60, // Intensifica el efecto parallax
      opacity: 0.3, // Reduce la opacidad al desplazarse
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from(contentRef.current, {
      y:100,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    targets.forEach((el: any) => {
      gsap.fromTo(
        el,
        { y: 100, scale: 0.95, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    works.forEach((overlay: any) => {
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: overlay,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div className="">

      <section ref={containerRef} className="w-full h-screen">
        <div ref={bgRef}  className='relative w-full h-full flex flex-col justify-end items-end overflow-hidden'>
          <div className='absolute flex justify-center items-center w-full h-full lg:h-screen'>
            <div  className='relative h-full w-full flex items-center justify-center'>
              <div className='h-[80%]'>
                {/* PARA CARPINTERIA */}
                <Image 
                  src={logoVitaRegular} 
                  alt="Logo Espacio Vita" 
                  className="lg:hidden w-full h-full object-cover"
                />
                <Image 
                  src={logoVitaText} 
                  alt="" 
                  className="hidden lg:block w-full h-full object-cover"
                />
              </div>
            </div>
            <div className={`relative h-full bg-black ${isHovered ? 'w-full' : 'w-0'} flex items-center justify-center transition-all ease-in-out duration-600`}>
              <div className='h-[80%]'>
                {/* PARA CARPINTERIA */}
                <Image
                  src={logoGalaWhite}
                  alt=''
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div className="-z-30 pointer-events-none w-full h-full absolute bg-[linear-gradient(#08080752,_#302c2633)] opacity-25"></div>
            <div className="w-full hero_collection_details flex justify-end px-6">
              <div 
                className="peer g_link is-hero w-inline-block group relative inline-block cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(!isHovered)}
              >
                <div className={`${isHovered ? 'text-white' : 'text-black'} `}>
                  <div className="btn_default_text">Carpintería</div>
                </div>
                <div className={`w-3 h-3 ${isHovered ? 'border border-white bg-white scale-50':'border border-black '} rounded-full transition-all duration-300 ease-in-out`}></div>
              </div>
            </div>
          </div>

          <div className="z-4 p-6 w-full flex relative">
            <div className="flex justify-between items-end self-end w-full">
              <h1 className="text-[1.5rem] break-words max-w-[25ch] whitespace-nowrap clip-[rect(0,0,0,0)] border-0 w-px h-px mx-auto p-0 absolute inset-x-0 top-0 overflow-hidden">We design homes and spaces guided by your vision, bringing together thoughtful design, collaboration, and creativity to shape homes that simply work for how you live.</h1>
              <h1 data-lines-split="" data-split-animation="" className="text-[1.5rem] break-words max-w-[25ch] font-light">We design homes and spaces guided by your vision, bringing together thoughtful design, collaboration, and creativity to shape homes that simply work for how you live.</h1>
              <div className="hero_home_scroll">(SCROLL down)</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us"ref={contentRef} className="w-full z-20 pt-12 lg:pb-20 bg-[#fcfcfc] lg:p-10">
        <div className="flex flex-col items-center lg:flex-row w-full px-4 p-4 lg:py-8 lg:mt-10">
          {/* Columna izquierda (texto) */}
          <div className="rise-up text-black font-bold text-[40px] sm:text-[48px] lg:text-[96px] uppercase leading-none text-center lg:text-right lg:mr-8 lg:self-start">
            <div>Designing</div>
            <div>Homes With</div>
          </div>

          {/* Imagen en el centro */}
          <div className="rise-up my-6 lg:my-0">
            <img
              src="https://cdn.prod.website-files.com/6762bbe3294789635ee71fdb/67b686931de6bcfb778ce746_OH_SIDNEY%C2%A9ANDYMACPHERSON-15_EDIT_FILMGRAIN%20(1).avif"
              alt=""
              className="w-[220px] sm:w-[260px] lg:w-[280px] object-cover"
            />
          </div>

          {/* Columna derecha (texto) */}
          <div className="rise-up text-black font-bold text-[40px] sm:text-[48px] lg:text-[96px] uppercase leading-none text-center lg:text-left lg:ml-8 lg:self-end">
            <div>People</div>
            <div>At Heart</div>
          </div>
        </div>

        <div className="rise-up w-full flex flex-col items-center lg:px-10">
          <div className=' text-[24px] text-justify font-thin px-10 lg:p-0 lg:w-[50%] '>
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
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </section>

      <section className="w-full z-20 pt-12 lg:pb-20 bg-[#fcfcfc] p-10">
        <div className="flex justify-between mb-[2rem] items-end">
          <div className="flex text-[42px] lg:text-[102px] uppercase font-bold">Featured Works</div>
          <a href='/projects' 
            className="flex relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full uppercase lg:text-[24px] font-light items-center gap-4">
            <div className="">Works</div>
            <div className="works_home_dynamic u-text-display">(06)</div>
          </a >
        </div>
        <div className="works_collection_wrap w-dyn-list">
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-20">
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

      <section className='w-full z-20 lg:pt-12 pb-20 bg-[#fcfcfc] p-10'>
        <div className='rise-up flex'>
          <div className='w-full lg:w-2/3 flex items-center font-bold text-[42px] lg:text-[84px] leading-none uppercase'>
            <span>Let's build a space that inspures and feels like home</span>
          </div>
          <div className="hidden lg:flex w-1/3 items-center justify-center">
            <div className="flex items-center text-center text-sm md:text-lg gap-4 tracking-wide uppercase text-black">
              <span className="lg:text-[84px] mr-4">[</span>
              <span className='font-light text-[9px] lg:text-[20px]'>AN INTERIOR IS THE NATURAL<br />PROJECTION OF THE SOUL</span>
              <span className="lg:text-[84px] ml-4">]</span>
            </div>
          </div>
        </div>

        <div className="rise-up mt-8 group relative h-[400px] overflow-hidden">
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
              <Image src={logoGalaWhite} alt="Logo Carpintería" className="w-auto h-auto lg:h-[900px] md:h-full" />
            </div>
          </div>
        </div>



      </section>

    </div>
  );
};

export default Page;
