-- Create a new database called 'reviews

-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'reviews'
)
CREATE DATABASE reviews
GO

-- Create a new table called 'review' in schema 'reviews'
-- Drop the table if it already exists
IF OBJECT_ID('SchemaName.review', 'U') IS NOT NULL
DROP TABLE reviews.review
GO
-- Create the table in the specified schema
CREATE TABLE reviews.review
(
    reviewId INT NOT NULL PRIMARY KEY, -- primary key column
    uni_name [NVARCHAR](50) NOT NULL,
    input TEXT NOT NULL,
    r_date DATE NOT NULL
    -- specify more columns here
);
GO

-- Create a new database called 'search'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'search'
)
CREATE DATABASE search
GO
-- Create a new table called 'output' in schema 'search'
-- Drop the table if it already exists
IF OBJECT_ID('search.output', 'U') IS NOT NULL
DROP TABLE search.output
GO
-- Create the table in the specified schema
CREATE TABLE search.output
(
    output

    web_page TEXT NOT NULL PRIMARY KEY,
    Country [NVARCHAR](50) NOT NULL,
    
    -- specify more columns here
);
GO