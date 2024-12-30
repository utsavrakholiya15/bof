import logo from './logo.svg';
import './App.css';
import Header from './components/shared/header';
import Home from './modules/home';
import Footer from './components/shared/footer';
import Topimage from './modules/home/topimage';
import Explore from './modules/explore';

function App() {
  return (
    <div>
      <Topimage/>
      <Header/>
      <Home/>
      {/* <Explore/> */}
      <Footer/>
    </div>
  );
}

export default App;
