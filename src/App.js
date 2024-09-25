import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from "./components/Header/Header"
import { Form, Route, Routes } from 'react-router-dom';
import Form from "./components/Form/Form"
import Product from "./components/Product/Product"

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'form'} element={<Forma />}/>
        <Route index element={<Product/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
