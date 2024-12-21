function SideBar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <li className="sidebar-list">Dashboard</li>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <li className="sidebar-list">Contacts</li>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i class="fa-regular fa-message"></i>
                    </div>
                    <li className="sidebar-list">Messages</li>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i class="fa-solid fa-calendar"></i>
                    </div>
                    <li className="sidebar-list">Calendar</li>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i class="fa-solid fa-signal"></i>
                    </div>
                    <li className="sidebar-list">Analytics</li>
                </div>
                <div className="sidebar-items">
                    <div className="sidebar-logo">
                        <i class="fa-solid fa-gear"></i>
                    </div>
                    <li className="sidebar-list">Settings</li>
                </div>


            </div>
        </>
    )
}

export default SideBar  