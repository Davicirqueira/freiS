import Inicio from './pages/inicio';
import Sobre from './pages/sobre';
import Exercicio1 from './pages/ex01';
import Exercicio2 from './pages/ex02';
import Exercicio3 from './pages/ex03';
import Exercicio4 from './pages/ex04';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Navegacao(){

    return(

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/ex01' element={<Exercicio1 />} />
              <Route path='/ex02' element={<Exercicio2 />} />
              <Route path='/ex03' element={<Exercicio3 />} />
              <Route path='/ex04' element={<Exercicio4 />} />
         </Routes>
      </BrowserRouter>

    )

}