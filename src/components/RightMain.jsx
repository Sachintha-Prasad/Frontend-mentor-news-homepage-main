import React from "react"

const RightMain = () => {
    const newNewsList = [
        {
            title: "Hydrogen VS Electric Cars",
            desc: "Will hydrogen-fueled cars ever catch up to EVs?"
        },
        {
            title: "The Downsides of Al Artistry",
            desc: "What are the possible adverse effects of on-demand Al image generation?"
        },
        {
            title: "Is VC Funding Drying Up?",
            desc: "Private funding by VC firms is down 50% YOM. We take a 100k at what that means."
        }
    ]

    return (
        <div className="bg-very-dark-blue h-full p-6 flex flex-col gap-6 lg:gap-12 items-start">
            <h2 className="text-4xl text-soft-orange font-bold">New</h2>

            {newNewsList.map((item, index) => (
                <div
                    key={index}
                    className="w-full flex flex-col gap-6 lg:gap-12 after:w-full after:h-[1px] after:bg-off-white after:last:hidden"
                >
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-semibold text-off-white hover:text-soft-orange transition-all duration-200 ease-linear cursor-pointer">
                            {item.title}
                        </h3>
                        <p className="text-dark-grayish-blue">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RightMain
