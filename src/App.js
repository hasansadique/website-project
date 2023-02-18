import { Header } from './components/Header';
import './App.css';
import { Banner } from './components/Banner';
import { Expert } from './components/Expert';
import { NewsLetter } from './components/NewsLetter';
import { Plans } from './components/Plans';

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <Expert />
      <NewsLetter />
      <Plans />
    </div>
  );
}

export default App;
