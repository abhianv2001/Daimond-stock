import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Daimondlist from './Component/Daimonndlist/Daimondlist';
import Daimondcard from './Component/Dashboard/Daimondcard';
import Dashboard from './Component/Dashboard/Dashboard';
import ApiState from './context/ApiState';
import Loader from './Loader';
import MultiFilterComponent from './Component/Dashboard/Example';
import CvdCard from './Component/Dashboard/CvdCard';
import ShareListPage from './Component/Dashboard/ShareLinkPage';
import StockId from './Component/Dashboard/StockId';

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
                        {/* <Route path="/cvdcard" element={<CvdCard />} /> */}
                        <Route path="/daimondcard" element={<Daimondcard />} />
                        <Route
                            path="/daimondcard/:category/:value"
                            element={<Daimondcard />}
                        />
                        <Route
                            path="/daimond"
                            element={<StockId />}
                        />
                         <Route
                            path="/daimond/:id"
                            element={<StockId />}
                        />
                        <Route
                            path="/daimondcardfilter"
                            element={<ShareListPage />}
                        />
                        <Route
                            path="/daimondcardfilter/:shape/:color/:clarity/:size"
                            element={<ShareListPage />}
                        />

                        <Route path="/daimondlist" element={<Daimondlist />} />
                        <Route path="/filter" element={<MultiFilterComponent />} />
                        <Route path="/loader" element={null} />
                    </Routes>
                )}
            </BrowserRouter>
        </ApiState>
    );
}

export default App;
