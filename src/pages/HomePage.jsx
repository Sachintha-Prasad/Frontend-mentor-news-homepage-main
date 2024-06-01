import React from "react"
import GridElement from "../components/GridElement"
import LeftMain from "../components/LeftMain"
import RightMain from "../components/RightMain"
import BottomMain from "../components/BottomMain"

const HomePage = () => {
    return (
        <div className="container grid gap-6 grid-cols-1 lg:grid-cols-3 my-4">
            <GridElement gridType="lg:col-span-2">
                <LeftMain />
            </GridElement>
            <GridElement>
                <RightMain />
            </GridElement>
            <GridElement gridType="lg:col-span-3">
                <BottomMain />
            </GridElement>
        </div>
    )
}

export default HomePage
