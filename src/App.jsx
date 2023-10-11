import React from 'react';
import './index.css';
import { Navbar, Header, About, Skills, Projects, Contact, Footer, Animation} from './components';

function App() {
  
  return (
    <div>
      <Animation/>
      <Navbar/>
      <div className='max-w box-border m-auto'>
       <Header/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>
      </div>
    </div>
  )
}

export default App
