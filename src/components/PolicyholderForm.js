import React, { useState } from 'react';
import axios from 'axios';

const PolicyholderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email) {
      setError('All fields are required');
      return;
    }

    try {
      await axios.post('http://localhost:3001/policyholders', { name, email });
      setSuccess('Policyholder created successfully!');
      setName('');
      setEmail('');
    } catch (err) {
      setError('Error creating policyholder. Please try again.');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Create Policyholder</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">{success}</p>}
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PolicyholderForm;
