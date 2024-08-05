import { BrowserRouter, Route, Routes} from 'react-router-dom';
import BMI from './components/bmi'
import Calculator from './components/cal';

function App() {
  return (
    <>
      <header >
    <BrowserRouter>
    <Routes>
    <Route path="" element={<BMI/>}/>
      <Route path="/calculate" element={<Calculator/>} />
    </Routes>
    </BrowserRouter>
      </header>

     </> 
  );
}

export default App;
