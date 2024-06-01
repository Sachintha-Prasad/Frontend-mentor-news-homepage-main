import React from "react"
import { Link } from "react-router-dom"

const LeftMain = () => {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            <div className="sm:col-span-2 w-full min-h-[375px] bg-[url('../src/assets/images/image-web-3-mobile.jpg')] md:bg-[url('../src/assets/images/image-web-3-desktop.jpg')] bg-cover bg-no-repeat bg-center"></div>

            <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold text-very-dark-blue">
                The Bright Future of Web 3.0?
            </h1>

            <div className="flex flex-col items-start gap-6 justify-between">
                <p className="text-dark-grayish-blue sm:text-lg">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                </p>
                <Link
                    to="/"
                    className="px-8 py-3 bg-soft-red text-sm sm:text-base text-off-white uppercase tracking-[0.2em] font-bold hover:bg-very-dark-blue transition-all duration-200 ease-linear"
                >
                    read more
                </Link>
            </div>
        </div>
    )
}

export default LeftMain
