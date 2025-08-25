import React from 'react'
import { Link } from "react-router-dom";
import './Maincards.css'
import mc1img from '../imgs/mc1img.jpg'
import mc2img from '../imgs/mc2img.avif'
import mc3img from '../imgs/mc3img.jpg'
import mc4img from '../imgs/mc4img.avif'
import mc5img from '../imgs/mc5img.avif'
import mc6img from '../imgs/mc6img.avif'
import mkap3 from '../imgs/mkap3.jpg'
import men2 from '../imgs/men2.jpg'
export default function Maincards() {
    
  return (
    <div>
        <h1 className='c-heading'>SHOP BY CATEGORY</h1>
        < hr/>
        
        <div className='main-images'>
            <Link to="/secondsection">
            <div className='imgdiv1'><img src={mc1img} alt=""  />
            <p>UNSTITCHED</p></div>
            </Link>
            <div className='images2'>
                <div className="topimg">
             <Link to="/secondsection">
                <div><img src={mc6img} alt="" />
                <p>LUXURY</p></div>
             </Link>
             <Link to="/thirdsction">
                <div className='wo'><img src={men2} alt="" />
                <p>LUXURY MEN</p></div>
            </Link>
                </div>
             <Link to="/secondsection">
            <div className='imgg2'><img src={mc3img} alt="" />
            <p>STITCHED</p></div>
            </Link>

            </div>
        </div>


        <div  className='main-images'>

             <div className='images3'>
            <Link to="/thirdsction">
            <div><img src={mc5img} alt="" /> 
            <p>MEN</p></div>
            </Link>
            <Link to="/secondsection">
            <div><img src={mc4img} alt="" />
                    <p>SUITS</p></div>
            </Link>
            <Link to="/thirdsction">
             <div className='new'><img src={mkap3} alt="" />
                    <p>FREEDOM TO BUY</p></div>
                </Link>
            </div>
            <Link to="/secondsection">
            <div className='card4imgg'><img src={mc2img} alt="" />
            <p>PRET</p></div>
            </Link>
           
        </div>

    </div>
  )
}