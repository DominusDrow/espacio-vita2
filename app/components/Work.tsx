"use client"
import type { Work } from 'app/utils/types/Work'
import Link from 'next/link';
import React from 'react'

interface WorkComponentProps extends Work {
    id: string;
    imgClass: string;
    url: string;
}

const Work: React.FC<WorkComponentProps> = ({ name, id, description, state, year, urlImage, url, imgClass }) => {
  return (
    <div className="">
        <Link 
            href={url} 
            className="flex flex-col justify-between group"
        >
            <div className="relative overflow-hidden group flex items-center h-full w-auto ">
                <img 
                    src={urlImage} 
                    loading="lazy" 
                    className={`object-cover ${imgClass}`}
                />
                <div className="overlay absolute inset-0 bg-black opacity-100 z-10 pointer-events-none group-[.reveal]:opacity-0 transition-opacity duration-[1000ms]"></div>
            </div>
            <div className="flex items-center justify-between w-full h-[50px] overflow-hidden uppercase text-[11px] lg:text-[16px]">
                <div className="flex gap-4 font-bold ">
                    <div className="flex">
                    <div className="g_deco">(</div>
                    <div className="works_content_dynamic">{id}</div>
                    <div className="g_deco">)</div>
                    </div>
                    <div className="works_content_project">{name}</div>
                </div>
                <div className="flex flex-col relative h-[2em] w-[250px] overflow-hidden text-right">
                    {/* Texto "2024 Under Construction" */}
                    <div className="absolute inset-0 transition-transform duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-full">
                    <div className="flex justify-end gap-4 text-gray-500 font-semibold opacity-75">
                        <div>{year}</div>
                        <div>{state}</div>
                    </div>
                    </div>
                    {/* Texto "View project →" */}
                    <div className="absolute inset-0 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                    <div className="text-black font-bold">View project →</div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Work