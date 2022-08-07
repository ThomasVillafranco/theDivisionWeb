import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './assets/main.css';
import '../src/assets/main.css';

import Layout from "./containers/Layout";
import Card from "./components/Card";
import Home from "./pages/Home";
import TheDivision from "./components/TheDivision";
import Division2 from "./components/Division2";
import NotFound from "./pages/NotFound";



function App() {
  return (

<BrowserRouter>
<Layout>
<Routes>
  <Route exact path="/" element={<Home/>}/>
    <Route exact path="/Card" element={<Card/>}/>
    <Route exact path="/TheDivision" element={<TheDivision/>}/>
    <Route exact path="/Division2" element={<Division2/>}/>
    <Route path="*" element= {<NotFound/>}/>
</Routes>
</Layout>
</BrowserRouter>



  );
}

export default App;
