import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import {AlertState} from "./context/Alert/AlertState";
import {FirebaseState} from "./context/firebase/FirebaseState";
import {Navbar} from "./components/Navbar";
import Alert from "./components/Alert";

function App() {
    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert/>
                        <Switch>
                            <Route path={'/'} exact component={Home}/>
                            <Route path={'/about'} component={About}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    );
}

export default App;