import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#1e1e1e" }}>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-white">NFT Marketplace</Link>
      </div>
      <div className="flex-none space-x-4">
        <Link to="/marketplace" className="btn btn-ghost text-white">Marketplace</Link>
        <Link to="/initiate" className="btn btn-ghost text-white">Initiate My NFT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
