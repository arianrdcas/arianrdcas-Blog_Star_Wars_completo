import React from 'react'
import "./welcome.css";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <>
      <div className="box container position-absolute top-50 start-50 translate-middle text-white">
          <Link to='/home'><h1>Bienvenidos al Blog de STAR WARS</h1></Link> 
      </div>
    </>
  )
}

export default Welcome;