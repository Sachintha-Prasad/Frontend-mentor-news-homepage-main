import React from "react"
import notFoundImg from "../assets/images/not-found.svg"

const NotFoundPage = () => {
    return (
        <div className="container flex flex-col items-center my-16">
            <img src={notFoundImg} alt="" className="w-full max-w-[450px]" />

            <h2 className="text-soft-red text-5xl lg:text-7xl text-center font-bold">
                404
            </h2>
            <p className="text-very-dark-blue text-xl lg:text-2xl text-center ">
                Page Not Found
            </p>
            <p className="text-dark-grayish-blue text-center">
                The page you were looking for doesn't exist. isn't available or
                was loading incorrectly.
            </p>
        </div>
    )
}

export default NotFoundPage
