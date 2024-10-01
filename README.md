## 1.1 Define the Project Features
- User can add new books they've read, including notes, ratings, and the date they read them.
- Update previous reviews or any details about the books.
- Delete entries if needed.
- Display book covers using the Open Library Covers API.
- Sort books by rating, recency, and title.
- View all books in a user-friendly interface.

## 1.2 Data to Store 
- For each book, we'll need to store:
- Book ID (Primary Key)
- Title
- Author
- Notes
- Rating
- Date Read
- Cover ID (to fetch the cover from the Open Library API)

## 1.3 Database Diagram
Since we have a single entity (books), we can start with one table called books.

- id: Auto-incrementing primary key.
- title: Book title, cannot be null.
- author: Author of the book.
- notes: User's notes on the book.
- rating: An integer between 1 and 5.
- date_read: The date when the book was read.
- cover_id: ID used to fetch the book cover from the Open Library Covers API.


