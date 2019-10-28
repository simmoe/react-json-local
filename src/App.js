import React from 'react'
import Colors from './components/Colors'
import WebColors from './components/WebColors'
import WikiColors from './components/WikiColors'

const App = () => {
    return (
      <div> 
        <h1>Data!</h1>
        <p>These are different examles of using a local or remote json file to parse a react page.</p>
        <Colors />
        <WebColors />
        <WikiColors />
      </div>
    )
}   

export default App;
