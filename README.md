
# React - Book Service
I built a front end, _Book Service_, for a book catalog and inventory manager. It lets users browse books in a card grid and manage the catalog by adding, editing, and deleting titles, authors, and prices, all through a REST API. This was a project for CWEB2136 - Web Tooling.
## Project - Book Catalog and Book Management Front End

- **Catalog Page**: `Catalog`, `BookCard`

  The home page (`/`) fetches every book from the API and displays each one as a card with its title, author, and price formatted to two decimals. The page handles loading, error, and empty states separately, so users see "Loading...", an error message, or "No books are available." instead of a blank screen. Each card has an Add to Cart button wired to a placeholder handler for a future cart feature.

- **Manage Books Page**: `ManageBooks`, `BookForm`

  The manage page (`/manage`) combines an add/edit form with a table of every current book. Clicking Edit loads a book into the form, which switches from "Add Book" to "Update Book" and sends a `PUT` instead of a `POST`. Clicking Delete sends a `DELETE` request and reloads the table. A Cancel Edit button returns the form to add mode.

- **Form Validation**: `BookForm`

  Before anything is sent to the API, the form checks that the title and author are not blank and that the price is present, numeric, and not negative. Errors appear under each field with `aria-invalid` and `aria-describedby` so they are announced by screen readers, and each error clears as the user edits that field.

- **Routing and Navigation**: `App`, `Navigation`

  React Router handles the two routes, and a shared header highlights the active page and updates its title between "Book Catalog" and "Manage Books". Icons throughout the app come from Lucide React.

## Running the Project
1. Clone the repository: `git clone https://github.com/joey-augsutin/book-service-frontend.git`
2. Start the book service REST API so it is running at `http://localhost:8080` with `GET /books`, `POST /books`, `PUT /books/{id}`, and `DELETE /books/{id}` endpoints
3. In the project folder, install dependencies with `npm install`
4. Start the development server with `npm run dev`
5. Open the local URL Vite prints (usually `http://localhost:5173`) in your browser

## Technologies Used
- React
- JavaScript (JSX)
- Lucide React
- CSS
- Node.js and npm
