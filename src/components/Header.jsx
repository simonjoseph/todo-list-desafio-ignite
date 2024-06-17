import './Header.module.css'
import Logo from '../assets/Logo.png' 

export function Header(){
    return( 
        <header>
            <img src={Logo} alt="" />
        </header>
        )
}