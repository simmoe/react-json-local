import React, {useState} from 'react'
import Color from './Color'


const WikiColors = () => {
    let [colors, setColors] = useState([])
    
    fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/colors/wikipedia.json')
        .then(response => response.json()) 
        .then(data => setColors (data))

    return (
        <div className="section">
            <div className="intro">
                <h2>JSON fetched from github</h2>
                <p>
                    This component gets colors via fetch to github. The technique is really far more simple than the othre two, but its propably easier to learn the structure by having them at hand first.</p>
                <p><a href="https://github.com/dariusk/corpora/blob/master/data/colors/crayola.json">The colors.json file can be found in this excellent repo</a></p>
            </div>
            <div className="colors">
            {
                colors.map(
                    (col, i) => <Color key={i} hex={col.color} col={col.name} />    
                )
            }
            </div>
        </div>
    )
}




export default WikiColors