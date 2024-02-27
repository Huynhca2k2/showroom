import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NewsLetter from './Components/NewsLetter';
import Home from './Components/Home';
import Blog from './Components/Blog';
import { useState } from 'react';
import DetailProduct from './Components/DetailProduct';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

function App() {

  const [notifi, setNotifi] = useState(true);
  const [showLayout, setShowLayout] = useState(true);

  return (
    <>
      <BrowserRouter>
        {showLayout && <Header notifi={notifi} setNotifi={setNotifi}/>}
        <Routes>
          <Route path='/' element={<Home notifi={notifi} setNotifi={setNotifi}/>}/>
          <Route path='/blog' element={<Blog notifi={notifi} setNotifi={setNotifi}/>}/>
          <Route path='/products/:id' element={<DetailProduct notifi={notifi} setNotifi={setNotifi}/>} />
          <Route path="/signup" element={<SignUp setShowLayout={setShowLayout} />} />
          <Route path="/signin" element={<SignIn setShowLayout={setShowLayout} />} />
        </Routes>
        {showLayout && <NewsLetter/>}
        {showLayout && <Footer/>}
      </BrowserRouter>
      
    </>
    
  );
}

export default App;
