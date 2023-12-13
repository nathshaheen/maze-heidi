import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Notes from './pages/Notes';
import NoPage from './pages/NoPage';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
