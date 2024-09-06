import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { GloabalProvider } from './Context/GlobalState';
import Menu from './components/Menu';
function App() {
  return (
    <div className="container">
      <div className="row">
     <GloabalProvider>
     <Menu/>
     <Header/>
     </GloabalProvider>
      
      </div>

    </div>
  );
}

export default App;
