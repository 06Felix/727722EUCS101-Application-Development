import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LandPage from './components/LandPage';
import Login from './components/Login';
import Orders from './components/Dashboard/pages/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element={<LandPage />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/dashboard' element = {<Dashboard />} />
        <Route path="/dashboard" element={<Orders />} />
        <Route path="/dashboard/courses" element={<div></div>} />
        <Route path="/dashboard/fees" element={<Orders />} />
        <Route path="/dashboard/inquiries" element={<div></div>} />
        <Route path="/dashboard/profile" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
