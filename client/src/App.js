import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListOrders from './components/Orders/ListOrders';
import NotFound from "./components/NotFound";
import { isAuthenticated } from "./utils/authOperation";
import Login from './components/Home/Login';
import "./components/reset.css"
import Register from "./components/Home/Register";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route 
        path="/orders"
        element={
          <RequireAuth redirectTo ="/">
            <ListOrders/>
          </RequireAuth>
        }
      />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  );
}

function RequireAuth({ children, redirectTo }) {
  const auth = isAuthenticated();
  return auth ? children : <Navigate to={redirectTo} />;
}

export default App;
