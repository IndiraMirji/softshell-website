import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    license: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!form.company.trim()) newErrors.company = 'Company name is required';
    if (!form.license) newErrors.license = 'Select a license type';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Form submitted successfully!');
      setErrors({});
      setForm({ name: '', email: '', company: '', license: '', message: '' });
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Company</label>
          <input type="text" name="company" value={form.company} onChange={handleChange} className="form-control" />
          {errors.company && <small className="text-danger">{errors.company}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">License Type</label>
          <select name="license" value={form.license} onChange={handleChange} className="form-select">
            <option value="">-- Select License --</option>
            <option value="basic">Basic</option>
            <option value="enterprise">Enterprise</option>
            <option value="custom">Custom</option>
          </select>
          {errors.license && <small className="text-danger">{errors.license}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="4"></textarea>
          {errors.message && <small className="text-danger">{errors.message}</small>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
