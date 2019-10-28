import React from 'react'

const Color = (props) => {
    const colorStyle = {
        backgroundColor: props.hex
    }
    return(
        <div style={colorStyle}>{props.col}<br/>{props.hex}</div>
    )
}
export default Color 