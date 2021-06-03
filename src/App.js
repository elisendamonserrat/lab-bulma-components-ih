import './App.css'
import FormField from './components/FormField';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      < Navbar />
      <div className="form">
        < FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        < FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      </div>
    </div>
  );
}

export default App;
