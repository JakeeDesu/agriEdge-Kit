
type LyoutPropsType = {
    children?: React.ReactNode
}


export const Layout = ({ children }: LyoutPropsType) => {
    return (
        <main
        className={`relative flex w-screen h-screen min-h-screen flex-col items-center justify-center  bg-white  overflow-hidden overflow-y-scroll
        `}
      >
            {/* texture image */}
            {/* <div className="absolute h-screen w-screen top-0 left-0  backdrop-blur- overflow-hidden">
                <img className=" w-full h-full  object-cover object-center" src="/shapes.webp" alt=""/>
            </div> */}
            {/* card bg */}
            {/* <div className="absolute top-0 left-0 bottom-0 right-0 w-screen h-screen bg-gradient-to-br opacity0  bg-whie/20 backdrop-blur-sm "></div> */}
            {/* agriEdge Logo */}
            <div className="absolute h-screen w-screen flex justify-center items-center top-0 left-0  backdrop-blur- ">
                <div className=" w-48 h-48 md:w-96 md:h-96 overflow-hidden">
                    <img className=" w-full h-full  object-contain object-center backdrop-blur-sm" src="/agriEdge-logo.webp" alt=""/>

                </div>
            </div>
        {children}
        </main>
    )
}
