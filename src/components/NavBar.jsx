import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    let navigate = useNavigate()

   

    return (
        <header id="header">
            <nav className="nav-container flex-row">
                <div className="nav-logo flex-row">
                    <img src=" https://i.imgur.com/h9UQAlE.png" id='nav-logo-photo'/>
                    <Link to='/' id='nav-name'>RF</Link>
                </div>
                <div className="center-column flex-row">
                    <Link to='/'>Home</Link>
                    
                    <a href='https://www.linkedin.com/in/fulkersonrebecca/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href='https://github.com/ralicynf' target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </nav>
        </header>
        
    )
}

export default NavBar