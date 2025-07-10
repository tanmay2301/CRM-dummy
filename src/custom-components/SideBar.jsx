import { NavLink } from 'react-router-dom';

function SideBar() {
    return (
        <>
            <div className="sidebar">
                <NavLink to="/Dashboard" style={{ textDecoration: 'none' }} activeClassName="active">
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-solid fa-list"></i>
                        </div>
                        <li className="sidebar-list">Dashboard</li>
                    </div>
                </NavLink>
                <NavLink to="/Contacts" style={{ textDecoration: 'none' }} activeClassName="active">
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-solid fa-users"></i>
                        </div>
                        <li className="sidebar-list">Contacts</li>
                    </div>
                </NavLink>
                <NavLink to="/Calendar" style={{ textDecoration: 'none' }} activeClassName="active">
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-solid fa-calendar"></i>
                        </div>
                        <li className="sidebar-list">Calendar</li>
                    </div>
                </NavLink>
                <NavLink to="/Analytics" style={{ textDecoration: 'none' }} activeClassName="active">
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-solid fa-signal"></i>
                        </div>
                        <li className="sidebar-list">Analytics</li>
                    </div>
                </NavLink>
                <NavLink to="/Settings" style={{ textDecoration: 'none' }} activeClassName="active">
                    <div className="sidebar-items">
                        <div className="sidebar-logo">
                            <i className="fa-solid fa-gear"></i>
                        </div>
                        <li className="sidebar-list">Settings</li>
                    </div>
                </NavLink>
            </div>
        </>
    );
}

export default SideBar;