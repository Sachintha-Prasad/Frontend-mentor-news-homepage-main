import React from "react"

const BottomMain = () => {
    const recentNewsList = [
        {
            image: "../src/assets/images/image-retro-pcs.jpg",
            title: "Reviving Retro PCs",
            desc: "What happens when old PCs are given modern upgrades?"
        },
        {
            image: "../src/assets/images/image-top-laptops.jpg",
            title: "Top 10 Laptops of 2022",
            desc: "Our best picks for various needs and budgets."
        },
        {
            image: "../src/assets/images/image-gaming-growth.jpg",
            title: "The Growth of Gaming",
            desc: "How the pandemic has sparked fresh opportunities."
        }
    ]

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {recentNewsList.map((item, index) => (
                <div key={index} className="flex gap-6">
                    <img src={item.image} alt="" className="max-w-[120px]" />

                    <div className="flex flex-col items-start justify-between">
                        <h2 className="text-4xl font-bold text-soft-red">
                            {`00${index + 1}`.slice(-2, 4)}
                        </h2>
                        <h3 className="text-xl font-extrabold text-very-dark-blue hover:text-soft-red cursor-pointer transition-all duration-200 ease-linear">
                            {item.title}
                        </h3>
                        <p className="text-dark-blue">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BottomMain
