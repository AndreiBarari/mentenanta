import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { About } from "../pages/About";

import { Contact } from "../pages/Contact";
import { FAQ } from "../pages/FAQ";
import { Termeni } from "../pages/Termeni";
import { DataProcessing } from "../pages/DataProcessing";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicii" element={<Services />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/termeni-si-conditii" element={<Termeni />} />
        <Route path="/prelucrare-date" element={<DataProcessing />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
