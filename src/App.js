import './App.css';
import Titles from './components/Titles';
import TitleDescription from './components/TitleDescription';
import StatsFlex from './components/StatsFlex';
import BusinesDescription from './components/BusinesDescription';
import Preview from './components/Preview';

function App() {
  return (
    <div className="App">
      <header>
        <Titles />
        <TitleDescription />
        <StatsFlex />
      </header>
      <main>
        <BusinesDescription />
        <Preview />
      </main>
    </div>
  );
}

export default App;
