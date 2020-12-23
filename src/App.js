import './App.css';
import Header from "./components/Header/Header.js";
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Board from "./components/Board/Board";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar/>
                <div>
                    <Route path="/clothes" render={() => <Board state={props.state.clothesPage}/>}/>
                    <Route path="/footwear" render={() => <Board state={props.state.footwearPage}/>}/>
                    <Route path="/accessory" render={() => <Board state={props.state.accessoryPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
