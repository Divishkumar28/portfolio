import './App.css';
import Certification from './components/Certification';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <h1>PORTFOLIO</h1>
      <Experience/>
      <Education/>
      <Certification/>
    </div>
  );
}

export default App;