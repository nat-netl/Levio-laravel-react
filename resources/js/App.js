import './assets/fonts/FontsStyle.scss'
import './assets/css/template.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main/Main';
import About from './routes/About/About';
import Services from './routes/Services/Services';
import Header from './modules/Navigation/Header/Header';



function App() {
  return (
    <div className='app'>
    <Header />
    <Routes>
      <Route path='/' exact element={<Main />} ></Route>
      <Route path='/o-nas' element={<About />} ></Route>
      <Route path='/uslugi' element={<Services />} ></Route>
    </Routes>
    </div>
  );
}

export default App;
