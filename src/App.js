import './Styles/app.css';
import "./components/Signup"
import Signup from './components/Signup';
import Home from './components/Home';
import Secpage from './components/Secpage';
import LastPage from './components/LastPage';
// import WelcomePage from './components/WelcomePage';
import WelcomePage from './components/WelcomePage';
import ForthPage from './components/ForthPage';
import Thirdpage from './components/Thirdpage';
import Shop from './components/Shop';
import ShopNow from './components/ShopNow';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
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
        <Route path='/welcome' element={ <WelcomePage/>}/>
        <Route path='/Shop' element={ <Shop/>}/>
        <Route path='/ShopNow/*' element={ <ShopNow/>}/>
</Route>
        <Route path='/last' element={  <LastPage/>}/>
        <Route path='/signup' element={  <Signup/>}/>
        <Route path='/welcome' element={  <WelcomePage/>}/>
        <Route path='/pay' element={ <Payment/>}/>
    </Routes>
  </BrowserRouter> 
  </>
  );
}

export default App;
