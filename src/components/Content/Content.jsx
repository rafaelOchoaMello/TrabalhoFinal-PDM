import React from "react";
import { Routes, Route } from 'react-router-dom';

import DataPanel from "../DataPanel";
import Search from "../../screens/Search";
import GraphScreen from "../../screens/Graph";

const Content = () => {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={<DataPanel />} />
                <Route exact path="/search" element={<Search />} />
                <Route exact path="/est" element={<GraphScreen />} />
            </Routes>
        </main>
    );
}

export default Content;