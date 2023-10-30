import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Daimondlist from './Component/Daimonndlist/Daimondlist';
import Daimondcard from './Component/Dashboard/Daimondcard';
import Dashboard from './Component/Dashboard/Dashboard';
import ApiState from './context/ApiState';
import Loader from './Loader';

function App() {
    const [loading, setloading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3000);
    }, []);

    return (
        <ApiState>
            <BrowserRouter>
                {loading ? (
                    <Loader />
                ) : (
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/daimondcard" element={<Daimondcard />} />
                        <Route
                            path="/daimondcard/:category/:value"
                            element={<Daimondcard />}
                        />
                        <Route path="/daimondlist" element={<Daimondlist />} />
                        <Route path="/loader" element={null} />
                    </Routes>
                )}
            </BrowserRouter>
        </ApiState>
    );
}

export default App;
