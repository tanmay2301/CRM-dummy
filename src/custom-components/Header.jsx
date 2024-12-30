import {Link} from 'react-router-dom'

function Header(){
    return(
        <>
            <nav className="navbar">
                <div className="navbar-content">
                    <i className="fa-solid fa-chart-line"></i>
                    <Link to="/Dashboard"  style={{ textDecoration: 'none' }}> 
                        <h1>LaunchSync</h1>
                    </Link>
                </div>
                <hr /> 
            </nav>  
        </>
    )
}

export default Header;