// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListaAlunos from "./components/ListaAlunos";
import AdicionarAluno from "./components/AdicionarAluno";
import EditarAluno from './components/EditarAluno';
import './global.css';


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListaAlunos />} exact></Route>
          <Route path="/adicionar-aluno" element={<AdicionarAluno />}></Route>
          <Route path="/editar-aluno/:id" element={<EditarAluno />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
