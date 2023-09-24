import './Styles/app.css';
import "./components/Signup"
// import Signup from './components/Signup';
// import Secpage from './components/Secpage';
import FifthPage from './components/FifthPage';
// import ForthPage from './components/ForthPage';
// import Thirdpage from './components/Thirdpage';
import Navbar from './components/Navbar';
// import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <FifthPage/>
    {/* <ForthPage/> */}
    {/* <Thirdpage/> */}
    {/* <Secpage/> */}
    </>
// {/* <BrowserRouter>
// <Routes>

// <Route path='/' element={<Navbar title="Goru2k18"/>}>
//         <Route index element={<Home />}/>
        

//         <Route path='/about' element={<Quality/>}/>
// </Route>
//     <Signup/>
//     </Routes>
//   </BrowserRouter> */}

  );
}

export default App;
