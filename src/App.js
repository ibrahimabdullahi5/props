import logo from './logo.svg';
import './App.css';
import Props from './Props';
import Company from './Company';
import Pupills from './Pupil';
import Product from './Product';
function App() {
  const studentName="ibro"
  return (
    <div className="App">
      <Props/>
      <Company/>
      <Pupills/>
      <Product/>
   
    
    </div>
  );
}

export default App;
