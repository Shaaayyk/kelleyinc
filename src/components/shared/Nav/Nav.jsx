import { NavLink } from 'react-router-dom'
import logo from '../../../assets/kelleyinc-logo.png'

export default function Nav() {
  return (
    <div className='nav'>
      <div className='nav-left'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/self-storage'>Self Storage</NavLink>
      </div>
      <NavLink to='/'>
        <img src={logo} alt='Kelley Enterprises' />
      </NavLink>
      <div className='nav-right'>
        <NavLink to='/k-wash+pet-wash'>K-Wash + Pet Wash</NavLink>
        <NavLink to='/truck-wash'>Truck Wash</NavLink>
      </div>
    </div>
  )
}
