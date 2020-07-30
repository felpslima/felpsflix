import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch, //Faz o "if" para validar as rotas
  Route   //Declaração da rota
} from 'react-router-dom';
import Home from './pages/Home';
import CadatroVideo from './pages/cadastro/Video';
import CadatroCategoria from './pages/cadastro/Categoria';

// CRIAR UMA PÁGINA 404
const Pagina404 = () => (<div>404</div>); 

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadatroVideo} exact />
      <Route path="/cadastro/categoria" component={CadatroCategoria} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
  // SEM USAR REACT ROUTER
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
