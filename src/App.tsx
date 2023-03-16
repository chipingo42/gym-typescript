import { useEffect, useState } from 'react'
import { SelectedPage } from './shared/types';
import Navbar from './scenes/Navbar';
import Home from './scenes/Home';
import Benefits from './scenes/Benefits';
import OurClasses from './scenes/OurClases';
import Footer from './scenes/Footer';
import ContactUs from './scenes/ContactUs';







function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopPage, setIsTopPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) { // if you want to check if u re at the of the window bg
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopPage(false);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  

  return (
    <div className="App bg-gray-20 h-screen ">
      <Navbar
        isTopPage={isTopPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
      /> 
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage}  />
      <Footer />
      
    </div>
  )
}

export default App;
