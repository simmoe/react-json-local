import React from 'react'
import myColors from '../data/colors.js'
import Color from './Color'

const Colors = (props) => {
    return(
        <div className="section">
            <div className="intro">
                <h2>Local json in js file</h2>
                <p>
                    Here the JSON object is put into a separate file and imported in the component. 
                </p>
                <p><a href="https://github.com/dariusk/corpora/blob/master/data/colors/crayola.json">The colors.json file cvan be found in this excellent repo</a></p>
            </div>
            <div className="colors">
            {
                myColors.colors.map(
                    (col, i) => <Color key={i} hex={col.hex} col={col.color} />    
                )
            }
            </div>
        </div>
    )
}
export default Colors