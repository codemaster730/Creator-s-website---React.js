import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
