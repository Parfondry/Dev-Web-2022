import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import PageInscription from "./assets/Pages/Inscription";
import PageConnexion from "./assets/Pages/Connexion";
import Profil from './assets/Pages/Profil';
import Supression from './assets/Pages/Supr_compte';
import PostImage from './assets/Pages/PostImage';
import Contact from './assets/Pages/Contact'
import Mention from './assets/Pages/Mention_legal'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/inscription"} element={<PageInscription/>}/>
          <Route path={"/connexion"} element={<PageConnexion/>}/>
          <Route path={"/profil"} element={<Profil/>}/>
          <Route path={"/supression"} element={<Supression/>}/>
          <Route path={"/image"} element={<PostImage/>}/>
          <Route path={"/contact"} element={<Contact/>}/>
          <Route path={"/mention"} element={<Mention/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
