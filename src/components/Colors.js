import React from 'react'
import myColors from '../data/colors.js'
import Color from './Color'

const Colors = (props) => {
    return(
        <div className="section">
            <h2>Colors - local json in javascript file</h2>
            <p>
                {myColors.description}. The Technique here is to create a separate file with the json object (including an object array with all the crayon colors). Define the json as a const and export it in the end of the file. After that you can import and parse the object in your component.
            </p>
            <p><a href="https://github.com/dariusk/corpora/blob/master/data/colors/crayola.json">The colors.json file cvan be found in this excellent repo</a></p>
            <div className="section colors">
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