import React from 'react'
import { useState } from 'react'

export default function Card() {
    const[image ,setImage] = useState('https://www.mmppicture.co.in/wp-content/uploads/2020/08/CB-Background-35-857x1080.jpg')
 const Next = () => {
    setImage('https://www.mmppicture.co.in/wp-content/uploads/2020/08/Blur-Background-43-857x1080.jpg')
    setImage('https://burst.shopifycdn.com/photos/elaborate-building-interior-with-light-teal-walls.jpg?width=1200&format=pjpg&exif=1&iptc=1')
 }
 const Prev = () => {
    setImage('https://www.mmppicture.co.in/wp-content/uploads/2020/08/Blur-Background-43-857x1080.jpg')
    setImage('https://burst.shopifycdn.com/photos/elaborate-building-interior-with-light-teal-walls.jpg?width=1200&format=pjpg&exif=1&iptc=1') 
    setImage('https://www.mmppicture.co.in/wp-content/uploads/2020/08/Blur-Background-43-857x1080.jpg') 
 }
  return (
    
    <div
    className="arrow"
    style={{
      width: "80%",
      height: "500px",
      backgroundColor: "black",
      margin: "0 auto",
      borderRadius: "10px",
      position: "relative",
      marginBottom: "80px",
      marginTop:'10%'
    }}
  >
    <img
      style={{
        width: "100%",
        height: "500px",
        borderRadius: "10px",
        position: "relative",
        objectFit:'contain'
      }}
      src={image}
      alt=""
    />
    <i
      style={{
        fontSize: "50px",
        color: "white",
        margin: "20% 0% 0% -10%",
        position: "absolute",
      }}
      onClick={() => Prev()}
      class="fa-solid fa-angle-right"
    ></i>
    <i
      style={{
        fontSize: "50px",
        color: "white",
        margin: "20% 0% 0% -95%",
        zIndex: "5",
        position: "absolute",
      }}
      onClick={() => Next()}
      class="fa-solid fa-angle-left"
    ></i>
   
  </div>
  )
}
