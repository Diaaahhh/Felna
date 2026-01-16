import React from 'react'
import './Body.css'

const TextCard = ({ headline, description }) => {
  return (
    <div className="text_card">
      <h1>{headline}</h1>
      <p>{description}</p>
 </div>
  )
}

function Body() {
  return (
    <div>
      <TextCard headline="Our New Arrivals" description="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
      <TextCard headline="Our New Arrivals" description="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
      <TextCard headline="Our New Arrivals" description="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
      <TextCard headline="Our New Arrivals" description="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
    </div>
  )
}

export default Body
