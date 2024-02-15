import 'antd/dist/reset.css';

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Itempage from './pages/Itempage';
import Customerpage from './pages/Customerpage';
import Billpage from './pages/Billpage';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
 <>
   <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/items"
            element={
              <ProtectedRoute>
                <Itempage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bills"
            element={
              <ProtectedRoute>
                <Billpage/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <ProtectedRoute>
                <Customerpage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
export function ProtectedRoute({ children }) {
  if (localStorage.getItem("auth")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
