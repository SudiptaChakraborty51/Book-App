import { Header } from "./components/Header";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favourite } from "./pages/Favourite";
import { Profile } from "./pages/Profile";
import { Read } from "./pages/Read";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/read" element={<Read />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
