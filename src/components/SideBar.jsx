import {Link} from 'react-router-dom'

function SideBar() {
    return (
        <>
            <div className="sidebar">
                <Link to="/Dashboard"  style={{ textDecoration: 'none' }}>  
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-solid fa-list"></i>
                        </div>
                            <li className="sidebar-list">Dashboard</li>
                        
                    </div>
                </Link>
                <Link to="/Contacts"  style={{ textDecoration: 'none' }}>
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-solid fa-users"></i>
                        </div>
                            <li className="sidebar-list">Contacts</li>
                        
                    </div>
                </Link>
                <Link to="/Messages"  style={{ textDecoration: 'none' }}>
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-regular fa-message"></i>
                        </div>
                            <li className="sidebar-list">Messages</li>
                        
                    </div>
                </Link>
                <Link to="/Calendar"  style={{ textDecoration: 'none' }}>
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-solid fa-calendar"></i>
                        </div>
                            <li className="sidebar-list">Calendar</li>
                        
                    </div>
                </Link>
                <Link to="/Analytics"  style={{ textDecoration: 'none' }}>
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-solid fa-signal"></i>
                        </div>
                            <li className="sidebar-list">Analytics</li>
                    </div>
                </Link>
                <Link to="/Settings"  style={{ textDecoration: 'none' }}>
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-solid fa-gear"></i>
                        </div>
                            <li className="sidebar-list">Settings</li>
                        
                    </div>
                </Link>


            </div>
        </>
    )
}

export default SideBar  