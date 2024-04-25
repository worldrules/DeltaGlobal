// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListaAlunos from "./components/ListaAlunos";
import AdicionarAluno from "./components/AdicionarAluno";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListaAlunos />}></Route>
          <Route path="/adicionar-aluno" element={<AdicionarAluno />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
