import React,{useState} from 'react'
import Navbar from "./components/Navbar"
import Textarea from './components/TextArea';



function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.color = 'white';
      document.body.style.backgroundColor = '#03203C'
      
    } else {
      setMode('light')
      document.body.style.color = '#03203C';
      document.body.style.backgroundColor = '#C5C9CC'
     
    }
  }
  

    return (
    <div>
        <Navbar title={'TextUTILITIES'} mode={mode} toggleMode={toggleMode} />
        <Textarea mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
