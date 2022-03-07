import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header.js";
import {Footer} from "./components/Footer.js";
import {ProductionList} from "./components/ProductionList.js";

function App() {
  return (
    <div id="page">

        <Header />

        <div id="main">
            <nav className="filter">
                <label htmlFor="filter">Filter</label>
                <input type="text" name="filter" id="filter" placeholder="enter search term" />
            </nav>

            <div className="content">
                
              <ProductionList />

            </div>

        </div>

        <Footer />

    </div>
  );
}

export default App;
