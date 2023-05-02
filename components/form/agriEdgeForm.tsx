import { useContext, useEffect, useState } from "react";
import { G_Context } from "../contexts/globalContext";

import { setData } from "../firebaseServices/fireStoreUtils"
import { setAuthCookie } from '../../utils/auth';



export const AgriEdgeForm = () => {

    const context = useContext(G_Context)
    const isVisible = context.onDisplay == 0
    const formLogo = context.formData.logo
    const goToProduct = () => context.changeDisplay(1)

    const [formData, setFormData] = useState(context.formData)
    const [readyToSubmit, setReadyToSubmit] = useState<boolean>(false)
    const [email_error, set_email_error] = useState<boolean>(false)


    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    }

    useEffect(() => {
        if (formData.email.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$") == null && formData.email != "")
            set_email_error(true)
        else
            set_email_error(false)
    }, [formData.email])

    useEffect(() => {
        if ( formData.firstName != "" && formData.lastName != "" && formData.email != "" &&  !email_error)
            setReadyToSubmit(true)
        else if (readyToSubmit)
            setReadyToSubmit(false)

    }, [formData, email_error])

    const onSubmit = (e:any) => {
        e.preventDefault()
        setData('agriEdge-kit', formData)
        const token = 'agri-kit';
        setAuthCookie(token);
        goToProduct()
    }

    return (
        <div className={`relative w-80 min-w-max max-w-4xl md:w-96 h-fit p-0 m-2 ring-1  ring-white rounded-sm overflow-hidden bg-white/80 backdrop-blur-2xl  hover:scale-105 shadow-xl hover:shadow-2xl transition  duration-700 ease-in-out `}>
            {/* texture image */}
            {/* <div className="absolute top-0 left-0 w-full h-full  backdrop-blur-lg overflow-hidden p-1 opacity-30">
                <img className="h-full w-full object-cover object-center" src="/form/images/agriEdge_shape.jpg" alt=""/>
            </div> */}
            {/* card bg */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-lime-100/50 backdrop-blur-md p-0 m-0"></div> */}
            {/* card content */}
            <div className="relative w-full h-fit flex flex-col justify-center items-center px-6  py-8">
                <div className="w-36 h-24  rounded-lg bg-white/70 ring-white ring-1 overflow-hidden p-4 shadow-md mb-6">
                    <img className="h-full w-full object-contain object-center" src={formLogo} alt="" />
                </div>
                <form id="form" method='POST' className='w-full h-fit overscroll-none'>
                    <div className="w-full mb-6">
                        <label className="block text-gray-900/90 text-sm font-bold mb-1">Non</label>
                        <input
                            className=' appearance-none border rounded w-full  py-2 px-3 focus:px-4 text-gray-800/70 leading-tight outline-none focus:outline-none focus:shadow-none  transform transition-all duration-200 '
                            type="text"
                            name="lastName"
                            placeholder='Nom'
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                        {/* {firstName_error && <label className=' absolute top-full left-1 mx-1 text-orange-500/90 font-medium tracking-wider font-Poppins text-xs' htmlFor="">Exemple@gmail.com</label>} */}
                    </div>
                    <div className="w-full mb-6" >
                        <label className="block text-gray-900/90 text-sm font-bold mb-1 " >Prénom</label>
                        <input
                            className=' appearance-none border border-gray-300/50 rounded w-full  py-2 px-3 focus:px-4 bg-white text-gray-800/70 leading-tight outline-none focus:outline-none focus:shadow-outline transform transition-all duration-200'
                            type="text"
                            name="firstName"
                            placeholder='Prénom'
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {/* {last_error && <label className=' absolute top-full left-1 mx-1 text-orange-500/90 font-medium tracking-wider font-Poppins text-xs' htmlFor="">Exemple@gmail.com</label>} */}
                    <div className="relative w-full mb-6">
                        <label className="block text-gray-700/90 text-sm font-bold mb-1 ">Email</label>
                        <input
                            className=' appearance-none border rounded w-full  py-2 px-3 focus:px-4 text-gray-700/70 leading-tight outline-none focus:outline-none focus:shadow-outline transform transition-all duration-200'
                            type="text"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            title={`Not Valid Email => ${formData.email}`}
                            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                        />
                        {email_error && <label className=' absolute top-full left-1 mx-1 text-orange-700/90 font-medium tracking-wider font-Poppins text-xs' htmlFor="">*Exemple@gmail.com</label>}
                    </div>
                    {/* submit button */}
                    <div className={`w-full h-fit flex flex-row justify-center items-start ${readyToSubmit ? "opacity-100 " : "opacity-0 pointer-events-none"} transition-opacity duration-150 ease-in-out`}>
                        <button
                            className="h-fit w-32 rounded-full hover:inner-shadow   bg-gradient-to-b from-lime-700/0 via-lime-700/5 to-lime-700/5 hover:from-lime-700/0 hover:via-lime-700/10 hover:to-lime-700/20    hover:ring-lime-800/5 text-lime-800/50 hover:text-lime-800/60 text-base  font-black py-2 px-3 tracking-wider capitalize transition-all duration-400 ease-in"
                            onClick={onSubmit}
                        >submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}