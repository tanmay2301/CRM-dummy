import { useState } from 'react';

function ContactManager({ onAddContact, activeFilter, setActiveFilter }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: '',
    status: '',
  });

  const filters = ['All', 'Media', 'Partners', 'Beta Users'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(formData);
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      type: '',
      status: '',
    });
  };

  return (
    <div className="con-manage">
      <div className="con-filter">
        {filters.map((filter) => (
          <div
            key={filter}
            className={`con-items ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </div>
        ))}
      </div>
      <button className="con-add" onClick={() => setIsModalOpen(true)}>
        Add Contact
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Add New Contact</h2>
              <button className="close-button" onClick={() => setIsModalOpen(false)}>
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="type">Type</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="w-full h-10 p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Type</option>
                  <option value="media">Media</option>
                  <option value="partners">Partners</option>
                  <option value="beta">Beta</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  className="w-full h-10 p-2 border border-gray-300 rounded"
                >
                  <option value="">Select Status</option>
                  <option value="contacted">Contacted</option>
                  <option value="meeting scheduled">Meeting Scheduled</option>
                  <option value="onboarded">Onboarded</option>
                </select>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-button">
                  Add Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactManager;