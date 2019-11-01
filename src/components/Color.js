import React from 'react'

const Color = (props) => {
    const colorStyle = {
        backgroundColor: props.hex
    }
    const handleClick = () => {
        if (props.onClick)
        props.onClick( {col: props.col, hex:props.hex} )
    }
    return(
        <div className="color" onClick={handleClick} style={colorStyle}>{props.col}<br/>{props.hex}</div>
    )
}
export default Color 