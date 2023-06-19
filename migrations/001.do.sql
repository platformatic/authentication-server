
-- Add SQL in this file to create the database tables for your API
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  provider VARCHAR(255) NOT NULL,
  providerId VARCHAR(255) NOT NULL
);
