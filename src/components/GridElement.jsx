import React from "react"

const GridElement = ({ children, gridType }) => {
    return <div className={gridType}>{children}</div>
}

export default GridElement
