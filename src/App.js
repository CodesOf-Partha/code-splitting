import React, {useState, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

// import AddPet from './pages/AddPet';
// import PetList from './pages/PetList';

// Dynamically import a React component and convert
// it to a React component.
const PetList = lazy(() => import ('./pages/PetList'));
const AddPet = lazy(() => import ('./pages/AddPet'));

const App = () => {
    const [pets, setPets] = useState([]);

    return (
        <div className="container p-5">
            <div className="row justify-content-sm-center">
                <div className="col-sm-6">
                    <Suspense fallback={
                        <span>Loading...</span>
                    }>
                        <Router>
                            <ol>
                                <NavLink to="/" className="breadcrumb-item" activeClassName="active">
                                    Home
                                </NavLink>
                                <NavLink to="/add" className="breadcrumb-item" activeClassName="active">
                                    Add Pet
                                </NavLink>
                            </ol>
                            <Switch>
                                <Route exact path="/"
                                    render={
                                        () => <PetList pets={pets}/>
                                    }/>
                                <Route path="/add"
                                    render={
                                        props => {
                                            return <AddPet onSubmit={
                                                pet => {
                                                    setPets([
                                                        ...pets,
                                                        pet
                                                    ])
                                                    props.history.push('/')
                                                }
                                            }/>
                                        }
                                    }/>
                            </Switch>
                    </Router>
                </Suspense>
            </div>
        </div>
    </div>
    )
}

export default App;
