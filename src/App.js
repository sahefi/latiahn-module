import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';  
import './style.css';
import Alert from './components/Alert';  
import Alert from './components/me'; 
class App extends Component {  
  render(){  
    return (  
      <div className="App container col-sm-6">  
        <Alert type="danger" header="Fatal Error">  
          Ini adalah alert dengan tipe danger  
        </Alert>  
        <Alert type="success" header="Berhasil">  
          Ini adalah alert dengan tipe success  
        </Alert>  
        <Alert type="warning" header="Warning">  
          Ini adalah alert dengan tipe warning  
        </Alert>  
      </div>  



      
    );  
  } 
  
  constructor(){  
    super();  
    this.state = {  
      type: "danger",  
      header: "Fatal Error",  
      content: "ini content dari alert"  
    }  
  }  
}  
export default App;  

