import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <main>
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
