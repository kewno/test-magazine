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
        <Route path='/ui-kit' element={<UiKit/>}>
          <Route path=':sellectCategory' element={<UiKit />}/>
        </Route>
        <Route path='/header' element={<Header/>}/>
        <Route exact path='/' element={<MainPage/>}>
          <Route path=':category/:subcategory' element={<MainPage />}/>
          <Route path=':category/:subcategory/:tab' element={<MainPage />}/>
          {/* <Route path=':category/:subcategory/:id-pop-up' element={<MainPage />}/> */}
          {/* <Route path="/*" element={<MainPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
