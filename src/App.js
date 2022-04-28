import './App.css';
import {Routes} from "react-router";
import {Route, BrowserRouter} from "react-router-dom";
import UiKit from './components/ui-kit/UiKit';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/ui-kit' element={<UiKit/>}/>{/*  reg MainPage*/}
        <Route path='/header' element={<Header/>}/>
        <Route exact path='/' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
