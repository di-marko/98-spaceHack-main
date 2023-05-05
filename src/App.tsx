import './App.scss';
import Header from './components/Header/Header';
import Featured from './components/Featured/Featured';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import GitButton from './components/GitButton/GitButton';

function App() {
  return (
    <div className="app">
      <GitButton />
      <Header />
      <Featured />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
