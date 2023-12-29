import foto from "../assets/perfil.png";
import './App.css';
import Soft_Skills from "../Pages/soft_skills/SS";
import Card from "../components/Card/Card";
import React from "react";
import experiencias from "../assets/ex.png";
import formacao from "../assets/formacao.png";
import sobre_mim from "../assets/sobremim.png";
import soft_skills from "../assets/Skills.png";
import redes from "../assets/redes_sociais.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experiencias from "../Pages/experiencias/experiencias";
import RS from "../Pages/redes_sociais/redes_sociais";
import Formacoes from "../Pages/formacao/formacao";
import Sobre_Mim from "../Pages/sobre_mim/SM";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/experiencias" element={<Experiencias/>}/>
        <Route path="/redes" element={<RS/>}/>
        <Route path="/formacoes" element={<Formacoes/>}/>
        <Route path="/soft_skills" element={<Soft_Skills/>}/>
        <Route path="/sobre_mim" element={<Sobre_Mim/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function AppContent() {
  return (
    <>
      <div className="header">
        <img id="foto" src={foto} alt="" />
        <h1>Nathalia de Macedo Martins</h1>
        <div className="info_contato">
          <span>
            <b>Telefone:</b> 71987257532
            <br />
            <b>Idade:</b> 21
            <br />
            <b>Estado Civil:</b> solteira <br />
            <b>Endereço:</b> Rua Alto do Bom Viver n 28, Lobato
            <br />
            <b>Email: </b> nathaliademacedomartins@gmail.com
          </span>
        </div>
        <div className="links">
          <Card path="/experiencias" title="Experiências" url={experiencias} />
          <Card  path="/formacoes" title="Formação e Certificados" url={formacao} />
          <Card  path="/sobre_mim" title="Sobre mim" url={sobre_mim} />
          <Card  path="/redes" title="Redes Sociais" url={redes} />
          <Card path="/soft_skills" title="Soft Skills" url={soft_skills} />
        </div>
      </div>
    </>
  );
}

export default App;
