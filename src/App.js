import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SellerPage from "./pages/SellerPage";
import BuyerPage from "./pages/BuyerPage";
import InitiateNFTPage from "./pages/InitiateNFTPage";
import DropPage from "./pages/DropPage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";
import Marketplace from "./pages/Marketplace";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/initiate" element={<InitiateNFTPage />} />
        <Route path="/drop" element={<DropPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;