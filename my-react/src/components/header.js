import React from 'react'
import sky from './img/sky.jpg'

function Imgheader (){
return (
    <div className= 'jumbotron-fluid'>
    <h1 className='display-5 p-3'>Employee Directory</h1>
    <img className='front-img mb-4' src={sky} alt="img not found"></img>
    </div>
)
}

export default Imgheader