import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/AppHeader";
import AppHero from "./components/Hero";
import AppAbout from "./components/About";
import AppService from "./components/Sevices";
import AppTeams from "./components/Teams";
import AppTestimonials from "./components/Testimonials";
import AppPricing from "./components/Pricing";
import AppBlog from "./components/Blog";
import AppContact from "./components/Contact";
import AppFooter from "./components/Footer";

function App() {
  return (
    <div>
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppService />
        <AppTeams />
        <AppTestimonials />
        <AppPricing />
        <AppBlog />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
