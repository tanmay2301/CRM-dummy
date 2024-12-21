import { useState } from 'react';

function ContactManager() {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const filters = ['All', 'Media', 'Partners', 'Beta Users'];
    
    return (
        <div className="con-manage">
            <div className="con-filter">
                {filters.map(filter => (
                    <div 
                        key={filter}
                        className={`con-items ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </div>
                ))}
            </div>
            <button className="con-add">Add Contact</button>
        </div>
    );
}

export default ContactManager;