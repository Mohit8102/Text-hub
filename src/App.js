import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React ,{useState}from 'react';
import Alert from './components/Alert';

function App() {

  const[click, setClick] = useState({color:'black', backgroundColor:'white'});
  const[text, setText] = useState("Enable Dark mode");
    const toggel = () => {
      if (click.backgroundColor === 'white') {
        setClick({ color: 'white', backgroundColor: 'black'});
        setText("Enable Light mode");
        showAlert("Dark mode has been enabled", "success");
      } else {
        setClick({ color: 'black', backgroundColor: 'white' });
        setText("Enable Dark mode");
        showAlert("Light mode has been enabled", "success");
      }
    };

  const[alert, setAlert] = useState(null);  
    const showAlert = (message, type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
          setAlert(null);
      }, 3000);
    }
  return (
    <>
    <div style={{...click, minHeight: '100vh'}}>
        
    <Navbar title = "  ..."/>  {/*props example*/}
                <div className="form-check form-switch" id="mode">
                <input className="form-check-input mx-2" type="checkbox" role="switch" id="switchCheckDefault" onClick={toggel}/>
                <label className="form-check-label" htmlFor="switchCheckDefault">{text}</label>
                </div>
    <Alert alert = {alert}/> 
    <div className="container my-5">
      <Form heading = "Enter text here" mode={click.backgroundColor}/>
    </div>
    </div>
    </>
  );
}

export default App;
