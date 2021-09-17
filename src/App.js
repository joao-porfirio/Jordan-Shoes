import '../src/css/reset.css';
import '../src/css/style.css';
import Destaques from './Components/Destaques/Destaques';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Destaques/>
      <Footer/>
    </div>
  );
}

export default App;
