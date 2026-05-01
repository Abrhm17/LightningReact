import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
//import FeaturesPage from "./FeaturesPage";
import DocumentationPage from "./DocumentationPage";
import DrawerPage from './DrawerPage';
import DrawerPage1 from './DrawerPage1';
import ContactPage from './ContactPage';
import AboutUsPage from './AboutUsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/features" element={<FeaturesPage />} /> */}
         <Route path="/documentation" element={<DrawerPage />} />
         <Route path="/drawer" element={<DrawerPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
         <Route path="/drawer1" element={<DrawerPage1 />} />

      </Routes>
    </BrowserRouter>
  );
}