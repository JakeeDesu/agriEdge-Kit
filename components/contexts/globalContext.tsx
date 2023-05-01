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
}
type PdfReaderData_Type = {
    pdf_file?: string
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
        title: ""
    },
    pdfReaderData: {
        pdf_file : ""
    },
}



export const G_Context = createContext<G_Context_Type>(default_G_Context)




export const G_Context_Wrraper = ({children}: any) => {
    const [currentDisplay, setCurrentDisplay] = useState<number>(default_G_Context.onDisplay)
    
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
                    title: ""
                },
                pdfReaderData: {
                    pdf_file : ""
                },
            }}
        >
            {children}
        </G_Context.Provider>
    )
}