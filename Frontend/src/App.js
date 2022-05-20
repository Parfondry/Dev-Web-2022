import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import PageInscription from "./assets/Pages/Inscription";
import PageConnexion from "./assets/Pages/Connexion";
import Profil from './assets/Pages/Profil';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>} />
          <Route path={"/inscription"} element={<PageInscription/>}/>
          <Route path={"/connexion"} element={<PageConnexion/>}/>
          <Route path={"/profil"} element={<Profil/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
