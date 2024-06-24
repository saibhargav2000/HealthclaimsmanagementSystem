import React, { useState } from 'react';

function ChoosePolicy() {
  const [policyId, setPolicyId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement choose policy logic here
  };

  return (
    <div>
      <h2>Choose Policy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Policy ID</label>
          <input
            type="text"
            className="form-control"
            value={policyId}
            onChange={(e) => setPolicyId(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Choose</button>
      </form>
    </div>
  );
}

export default ChoosePolicy;
