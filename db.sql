CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    notes TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    date_read DATE,
    cover_id VARCHAR(50)
);
