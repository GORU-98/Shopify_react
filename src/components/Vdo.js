import React from 'react'

const Vdo = (props) => {
  return (
    <div>
       <video autoPlay muted loop id="myVideo">
            <source src={props.src} type="video/mp4"/>
            </video>
    </div>
  )
}

export default Vdo
