import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import DashboardPage from "./pages/Dashboard"
import CoinPage from "./pages/Coin"
import ComparePage from "./pages/ComparePage"
import WatchlistPage from "./pages/WatchlistPage"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
   <div className="app">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/coin/:id" element={<CoinPage/>}/>
          <Route path="/compare" element={<ComparePage/>}/>
          <Route path="/watchlist" element={<WatchlistPage/>}/>
        </Routes>
     </BrowserRouter>
     <ToastContainer/>
   </div>
  )
}

export default App
