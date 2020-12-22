import './App.css';
import Header from "./components/Header/Header.js";
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.js";
import Product from "./components/Board/Products/Product/Product";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar categories={props.categories}/>
                <div>
                    <Route path="/clothes" render={() => <Product state={props.state.categories.clothes}/>}/>
                    <Route path="/footwear" render={() => <Product state={props.state.categories.footwear}/>}/>
                    <Route path="/accessory" render={() => <Product state={props.state.categories.accessory}/>}/>
                </div>

                {/*<Board products={props.products}/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
