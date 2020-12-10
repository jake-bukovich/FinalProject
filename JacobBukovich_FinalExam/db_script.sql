-- Create a new database called 'uni_review'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'uni_review'
    
)
CREATE DATABASE uni_review;
GO

-- Create a new table called 'reviews' in schema 'uni_review'
-- Drop the table if it already exists
IF OBJECT_ID('uni_review.reviews', 'U') IS NOT NULL
DROP TABLE uni_review.reviews
GO
-- Create the table in the specified schema
CREATE TABLE uni_review.reviews
(

    web_page TEXT NOT NULL,
    country [NVARCHAR](70) NOT NULL,
    domain [NVARCHAR](60) NOT NULL,
    name [NVARCHAR](120) NOT NULL
    -- specify more columns here
);
GO
