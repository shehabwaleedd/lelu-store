import React from 'react'
import './Socials.css'
import { Link } from 'react-router-dom'

const Socials = () => {
  return (
    <div className="nav-social-media">
      <ul>
        <li>
          <Link className="link link--carme" to="https://www.instagram.com/shehabwaleedd/" target="_blank" rel="noreferrer">INSTAGRAM</Link>
          <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
            <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
          </svg>
        </li>
        <li className='nav__link-footer'>
          <Link className="link link--carme" to="https://www.facebook.com/people/LELU-store/100064053341630/" target="_blank" rel="noreferrer">FACEBOOK</Link>
          <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
            <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
          </svg>
        </li>
        <li>
          <Link className="link link--carme" to="https://wa.me/+2001030013746?text=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.%20" target="_blank" rel="noreferrer">WHATSAPP</Link>
          <svg className="link__graphic link__graphic--stroke link__graphic--scribble" width="100%" height="9" viewBox="0 0 101 9">
            <path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1" />
          </svg>
        </li>
        <br />
      </ul>
    </div>
  )
}

export default Socials
