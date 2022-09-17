CREATE DATABASE rarDataBase;

USE rarDataBase;

CREATE TABLE Products (
  product_id INT PRIMARY KEY,
  "name" TEXT
);

CREATE TABLE Reviews (
  review_id INT PRIMARY KEY,
  product_id INT,
  rating INT,
  summary TEXT,
  recommend TEXT,
  response TEXT,
  body TEXT,
  "date" DATE,
  helpfulness INT
);
  -- FOREIGN KEY (product_id)
  -- REFERENCES Products(product_id)

CREATE TABLE Photos (
  image_id INT PRIMARY KEY,
  review_id INT,
  "url" TEXT
);
  -- FOREIGN KEY (review_id)
  -- REFERENCES Reviews (review_id)

CREATE TABLE Metadata (
  review_id INT,
  oneStar INT,
  twoStars INT,
  threeStars INT,
  fourStars INT,
  fiveStars INT
);
  -- FOREIGN KEY (review_id)
  -- REFERENCES Reviews (review_id)

CREATE TABLE Users (
  review_id INT,
  emailAddress TEXT,
  reviewerName TEXT
);
  -- FOREIGN KEY (review_id)
  -- REFERENCES Reviews (review_id)

  -- two tables?
CREATE TABLE Characteristics (
  characteristic_id INT,
  product_id INT,
  "name" TEXT
);
  -- FOREIGN KEY (review_id)
  -- REFERENCES Reviews (review_id)

CREATE TABLE Characteristics_Reviews (
  id INT,
  characteristic_id INT,
  review_id INT,
  "value" INT
);
