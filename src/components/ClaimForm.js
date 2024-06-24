import React, { useState } from 'react';

function ClaimForm() {
  const [policyId, setPolicyId] = useState('');
  const [incidentDetails, setIncidentDetails] = useState('');
  const [claimAmount, setClaimAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submit claim logic here
  };

  return (
    <div>
      <h2>Submit Claim</h2>
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
        <div className="form-group">
          <label>Incident Details</label>
          <textarea
            className="form-control"
            value={incidentDetails}
            onChange={(e) => setIncidentDetails(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Claim Amount</label>
          <input
            type="number"
            className="form-control"
            value={claimAmount}
            onChange={(e) => setClaimAmount(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ClaimForm;
