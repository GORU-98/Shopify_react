import './Styles/app.css';
import "./components/Signup"
// import Signup from './components/Signup';
import Home from './components/Home';
import Secpage from './components/Secpage';
import LastPage from './components/LastPage';
import WelcomePage from './components/WelcomePage';
// import FifthPage from './components/FifthPage';
import ForthPage from './components/ForthPage';
import Thirdpage from './components/Thirdpage';
import Shop from './components/Shop';
import ShopNow from './components/ShopNow';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <> 
 <BrowserRouter>
<Routes>
<Route path='/' element={<Navbar/>}>
        <Route index element={<Home />}/>     
        <Route path="/sec" element={ <Secpage/>}/>
        <Route path='/third' element={ <Thirdpage/>}/>
        <Route path='/fourth' element={  <ForthPage/>}/>
        {/* <Route path='/fifth' element={ <FifthPage/>}/> */}
        <Route path='/last' element={  <LastPage/>}/>
        <Route path='/welcome' element={ <WelcomePage/>}/>
        <Route path='/Shop' element={ <Shop/>}/>
        <Route path='/ShopNow' element={ <ShopNow/>}/>
</Route>
    </Routes>
  </BrowserRouter> 
  </>
  );
}

export default App;
