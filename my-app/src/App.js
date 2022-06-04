import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import {Routes, Route} from 'react-router-dom'
import PortfolioPage from "./pages/portfolioPage/PorfolioPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SocialPage from "./pages/socialPage/SocialPage";
import NewsPage from "./pages/newsPage/NewsPage";


function App() {
  return (
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={ <MainPage/> }/>
          <Route path="/about" element={ <AboutPage/> }/>
          <Route path="/contacts" element={ <ContactsPage/> }/>
          <Route path="/portfolio" element={ <PortfolioPage/> }/>
          <Route path="/social" element={ <SocialPage/> }/>
          <Route path="/news" element={ <NewsPage/> }/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
