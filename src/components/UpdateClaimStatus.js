import React, { useState } from 'react';

function UpdateClaimStatus() {
  const [claimId, setClaimId] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement update claim status logic here
  };

  return (
    <div>
      <h2>Update Claim Status</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Claim ID</label>
          <input
            type="text"
            className="form-control"
            value={claimId}
            onChange={(e) => setClaimId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input
            type="text"
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default UpdateClaimStatus;
