import {Link} from 'react-router-dom'

function SideBar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i className="fa-solid fa-list"></i>
                    </div>
                    <Link to="/Dashboard"  style={{ textDecoration: 'none' }}>
                        <li className="sidebar-list">Dashboard</li>
                    </Link>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <Link to="/Contacts"  style={{ textDecoration: 'none' }}>
                        <li className="sidebar-list">Contacts</li>
                    </Link>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i className="fa-regular fa-message"></i>
                    </div>
                    <Link to="/Messages"  style={{ textDecoration: 'none' }}>
                        <li className="sidebar-list">Messages</li>
                    </Link>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i className="fa-solid fa-calendar"></i>
                    </div>
                    <Link to="/Calendar"  style={{ textDecoration: 'none' }}>
                        <li className="sidebar-list">Calendar</li>
                    </Link>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i className="fa-solid fa-signal"></i>
                    </div>
                    <Link to="/Analytics"  style={{ textDecoration: 'none' }}>
                        <li className="sidebar-list">Analytics</li>
                    </Link>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i className="fa-solid fa-gear"></i>
                    </div>
                    <Link to="/Settings"  style={{ textDecoration: 'none' }}>
                        <li className="sidebar-list">Settings</li>
                    </Link>
                </div>


            </div>
        </>
    )
}

export default SideBar  