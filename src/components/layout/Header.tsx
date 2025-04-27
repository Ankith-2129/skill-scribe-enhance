
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header className="bg-resume-blue text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">ResumeEnhancer</Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-resume-lightBlue transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-resume-lightBlue transition-colors">About</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/dashboard" className="hover:text-resume-lightBlue transition-colors">Dashboard</Link>
                </li>
                <li>
                  <Button variant="ghost" className="hover:text-resume-lightBlue" onClick={logout}>
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-resume-lightBlue transition-colors">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-resume-lightBlue transition-colors">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
