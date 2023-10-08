import{Route,Routes} from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
    </>
  );
}
export default App;