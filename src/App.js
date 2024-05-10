import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        

          
          <Route path="/ContactForm" element={<ContactForm/>}></Route>
          
        </Routes>

        </BrowserRouter>
        
        </>
        
         
        
      </header>
    </div>
  );
}
export default App;