import React, { useState, useContext } from 'react';
import { G_Context } from "../contexts/globalContext";

import PdfViewer from "./pdfViewer"


export const PDFReader = () => {
    const context = useContext(G_Context)
    const img_prefix = context.pdfReaderData.img_prefix
    const img_nb = context.pdfReaderData.img_nb
    const imgExt = context.pdfReaderData.imgExt
    
    const goBack = () => {
        context.productsDisplayData.setImagePref("")
        context.productsDisplayData.setImgExt("")
        context.productsDisplayData.setImagNb(0)

        context.changeDisplay(1)
    }
    
    return (
        <div className='relative flex justify-center md:items-start items-center md:pt-8  w-screen h-screen overflow-scroll '>
            <div className='fixed z-50 left-0 top-0 '>
            <div className='relative h-36 w-52 rounded-full ring-gray-700 rig-1 bg-gradient-to-b from-lime-600 to-lime-300 -translate-x-1/2 -translate-y-1/2 hover:-translate-x-1/3 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer'
                onClick={goBack}
            >
                <div className='absolute h-fit w-fit left-1/2 top-1/2 p-4 '>
                    <p className='font-bold text-gray-100 tracking-wider'>Retour</p>
                </div>
            </div>
            </div>
            
            {/* <div className='fixed z-50 w-fit h-fit top-0 right-0 translate-x-1/2'>
                <div className='w-50 h-fit overflow-hidden'>
                    <img src='/pdf-reader/shapes/s1.png'/>
                </div>
                <div className='w-full h-fit overflow-hidden'>
                    <img src='/pdf-reader/shapes/s2.png'/>
                </div>
            </div> */}

            <PdfViewer
                img_prefix={img_prefix}
                img_nb={img_nb}
                imgExt={imgExt}
            />
        </div>
        )
    }
    