import './App.css';
import Header from './Header';
import Menu from './Menu';
import Login from './Component/Login';
import Footer from './Footer';
import  Register  from './Component/Regiter';
import { ToastContainer } from 'react-toastify';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ListArticlesDatatable from './Component/Articles/ListArticlesDatatable';
import Insertarticle from './Component/Articles/Insertarticle';
import Editarticle from "./Component/Articles/Editarticle";
import ListUsers  from "./Component/Users/ListUsers";
import PdfArticle from './Component/Articles/PdfArticle';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Header/>
    <div className='content-wrapper'>
    <Menu/>
  
  <Routes>
    
    
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path='/art/listarticlesTable' element={<ListArticlesDatatable/>}/>
    <Route path='/art/addArticle' element={<Insertarticle/>}/>
    <Route path='/art/editArticle/:id' element={<Editarticle/>}/>
    <Route path='/user/listusers' element={<ListUsers/>}/>
    <Route path='/art/printarticle' element={<PdfArticle/>}/>
    
  </Routes>
  
  </div>
  <Footer/>
    </BrowserRouter>
  
);
  
}

export default App;
