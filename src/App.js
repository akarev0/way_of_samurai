import './App.css';
import Header from "./components/Header/Header.js";
import {BrowserRouter} from "react-router-dom";
import Board from "./components/Board/Board.js";
import Sidebar from "./components/Sidebar/Sidebar.js";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar categories={props.categories}/>
                <Board products={props.products}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
