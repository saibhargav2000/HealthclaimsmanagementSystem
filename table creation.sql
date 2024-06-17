CREATE TABLE policyholders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE policies (
    id SERIAL PRIMARY KEY,
    policyholder_id INTEGER REFERENCES policyholders(id),
    policy_number VARCHAR(255) NOT NULL,
    coverage_amount INTEGER NOT NULL
);

CREATE TABLE claims (
    id SERIAL PRIMARY KEY,
    policy_id INTEGER REFERENCES policies(id),
    incident_details TEXT NOT NULL,
    claim_amount INTEGER NOT NULL,
    status VARCHAR(50) NOT NULL
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES policyholders(id),
    message TEXT NOT NULL
);
