import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  const [activePage, setActivePage] = useState('home');

  const pages = {
    home: <HomePage />,
    about: <AboutPage />,
    activities: <ActivitiesPage />,
    contact: <ContactPage />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Menu activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-6 bg-gray-50">
            {pages[activePage] || <HomePage />}
          </main>
      <Footer />
    </div>
  );
}

// Page components remain the same
function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p className="text-gray-700">Welcome to our website! This is the home page content.</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700">Learn more about our company and team.</p>
    </div>
  );
}

function ActivitiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Activities</h1>
      <p className="text-gray-700">Explore the various activities we offer.</p>
      {/* You can add more content related to activities here */}
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700">Get in touch with our team for more information.</p>
    </div>
  );
}

export default App;