import { type } from "os";
import { createContext, useState } from "react";

// types
type FormData_Type = {
    firstName: string
    lastName: string
    email: string
    logo : string
}

type productsDisplayData_Type = {
    title? : string
    setImagePref : React.Dispatch<React.SetStateAction<string>>
    setImagNb : React.Dispatch<React.SetStateAction<number>>
    setImgExt : React.Dispatch<React.SetStateAction<string>>
}
type PdfReaderData_Type = {
    pdf_file?: string
    img_prefix : string
    img_nb : number
    imgExt : string
}


type G_Context_Type = {
    onDisplay : number // 1: form | 2: products | 3: pdf_Reader
    changeDisplay : React.Dispatch<React.SetStateAction<number>>
    formData : FormData_Type
    productsDisplayData : productsDisplayData_Type
    pdfReaderData : PdfReaderData_Type
}

// default values
const default_G_Context = {
    onDisplay : 0,
    changeDisplay : (x:any) => x,
    formData: {
        firstName : "",
        lastName : "",
        email : "",
        logo : "/form/images/agriedge-logo.png",
    },
    productsDisplayData: {
        title: "",
        setImagePref : (x:any) => x,
        setImagNb : (x:any) => x,
        setImgExt : (x:any) => x
    },
    pdfReaderData: {
        pdf_file : "",
        img_prefix : "",
        img_nb : 0,
        imgExt : ""
    },
}



export const G_Context = createContext<G_Context_Type>(default_G_Context)




export const G_Context_Wrraper = ({children}: any) => {
    const [currentDisplay, setCurrentDisplay] = useState<number>(default_G_Context.onDisplay)

    const [imagePref, setImagePref] = useState("")
    const [imagNb, setImagNb] = useState(0)
    const [imgExt, setImgExt] = useState("")

    
    
    return (
        <G_Context.Provider
            value={{
                onDisplay : currentDisplay,
                changeDisplay : setCurrentDisplay,
                formData: {
                    firstName : "",
                    lastName : "",
                    email : "",
                    logo : default_G_Context.formData.logo
                },
                productsDisplayData: {
                    title: "",
                    setImagePref : setImagePref,
                    setImgExt : setImgExt,
                    setImagNb : setImagNb,
                },
                pdfReaderData: {
                    pdf_file : "",
                    img_prefix : imagePref,
                    img_nb : imagNb,
                    imgExt : imgExt 
                },
            }}
        >
            {children}
        </G_Context.Provider>
    )
}