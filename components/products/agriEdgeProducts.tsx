import { useContext, useEffect, useState } from "react";
import { G_Context } from "../contexts/globalContext";

type ProductType = {
    title: string
    image?: string
    pdf: string
    pfd_img_pref : string
    pdf_img_ext : string
    pdf_img_nb : number
}

const products: ProductType[] = [
    {
        title: "fertyEdge",
        image: "/products/images/Ferti.svg",
        pdf: "/pdf-reader/FertiEdge.pdf",
        pfd_img_pref : "pdf-reader/ferty/ferty",
        pdf_img_ext : "png",
        pdf_img_nb : 1
    },
    {
        title: "aquaEdge",
        image: "/products/images/Aqua.png",
        pdf: "",
        pfd_img_pref : "/pdf-reader/aqua/aqua",
        pdf_img_ext : "png",
        pdf_img_nb : 2
    },
    {
        title: "et0",
        image: "/products/images/ET0.png",
        pdf: "",
        pfd_img_pref : "/pdf-reader/et0/et0",
        pdf_img_ext : "png",
        pdf_img_nb : 1
    },
    {
        title: "phyto",
        image: "/products/images/phyto.svg",
        pdf: "",
        pfd_img_pref : "/pdf-reader/phyto/phyto",
        pdf_img_ext : "png",
        pdf_img_nb : 0
    }
]


export const AgriEdgeProducts = () => {

    const context = useContext(G_Context)
    const isVisible = context.onDisplay == 1

    const item_posi = [
        "col-span-2 row-span-2  col-start-2  row-start-1 ",
        "col-span-2 row-start-3  ",
        "col-span-2 row-start-3 ",
        "col-span-2 row-span-4  col-start-2  row-start-4",
    ]

    return (
        <div className="w-screen h-screen flex justify-center items-center overflow-y-scroll  ">
            <div className={` grid grid-cols-4 md:grid-cols-2 gap-8 py-8 w-full h-fit  rounded-sm ring-1 d:ring-0 ring-white/50  backdrop-blur-sm d:backdrop-blur-none   transition-all duration-1000 ease-in-out overflow-y-scroll `}>
                {products.map((product, index) => (
                    <div key={index} className={`h-full w-full  flex justify-center items-center bg-blak/10 ${item_posi[index]} md:col-auto md:row-auto`}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <div className="flex-1 bg-lime-900"></div>
        </div>
    )
}

type productPropsType = {
    product : ProductType
}

const ProductCard = ({ product }: productPropsType) => {
    const context = useContext(G_Context)
    const setImagePref = context.productsDisplayData.setImagePref
    const setImgExt = context.productsDisplayData.setImgExt
    const setImagNb = context.productsDisplayData.setImagNb

    const goToPdf = () => {
        context.changeDisplay(2)
    }

    const clickHandler = (e: any) => {
        console.log("product -> : ", product)
        setImagePref(product.pfd_img_pref)
        setImgExt(product.pdf_img_ext)
        setImagNb(product.pdf_img_nb)
        goToPdf()
    }

    return (

        <div className="relative h-full w-full flex justify-center items-center cursor-pointer ">
            <div
                // data-aos="flip-right"
                className="relative  h-24 w-24 md:h-48 md:w-48  flex flex-col justify-start items-center p-3 m-10 bg-white rounded-full transition-all transform duration-500 ease-out shadow-lg translate-y-0 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 cursor-pointer "
                onClick={clickHandler}
            >
                <div className="h-full w-full p-4 overflow-hidden ">
                    <img className="w-full h-full object-contain object-center" src={product.image} alt="" />
                </div>
            </div>
        </div>
    )
}