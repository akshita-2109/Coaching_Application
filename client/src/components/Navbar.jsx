import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center">
      
      {/* LEFT: LOGO */}
      <h1 className="text-xl font-bold">Coaching App</h1>

      {/* CENTER: NAV LINKS */}
      <div className="space-x-6 font-medium">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/centres">Centres</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/books">Books</Link>
        <Link to="/admin/orders">Book Orders</Link>
      </div>

      {/* RIGHT: USER SECTION */}
      <div className="flex items-center space-x-4">
        
        {/* 👤 NOT LOGGED IN */}
        {!user && (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}

        {/* 👤 LOGGED IN */}
        {user && (
          <>
            {/* Hi Name */}
            <span>Hi, {user.name}</span>

            {/* 👑 ADMIN LINK */}
            {user.role === "admin" && (
              <Link to="/admin">Admin</Link>
            )}

            {/* Logout */}
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;