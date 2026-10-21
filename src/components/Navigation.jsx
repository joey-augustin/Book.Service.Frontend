import { Link, useLocation } from 'react-router-dom';
import { BookOpen, House, Settings } from "lucide-react";

function Navigation() {
    const location = useLocation();

const isManagerPage = location.pathname === "/manage";
const pageTitle = isManagerPage ? "Manage Books" : "Book Catalog";

    return (
        <header className="app-header">
            <Link to="/" className="brand">
                <BookOpen size={34} strokeWidth={2.2} />
                <span>{pageTitle}</span>
            </Link>

        <nav className="main-nav">
            <Link to="/" className={!isManagerPage ? "nav-link active" : "nav-link"}>
                <House size={18} />
                <span>Book Catalog</span>
            </Link>
            <Link to="/manage" className={isManagerPage ? "nav-link active" : "nav-link"}>
                <Settings size={18} />
                <span>Manage Books</span>
            </Link>
        </nav>
        </header>
    );

}

export default Navigation;