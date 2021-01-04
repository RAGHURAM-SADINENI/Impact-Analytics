import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppBarComponent from '../components/AppBar/AppBarComponent';
import Home from '../components/Home/Home';
import UserDetails from '../components/UserDetails/UserDetails';
import { connect } from 'react-redux';
import DataService from '../services/DataServices';
import { setUsers } from '../../redux/Users/UsersActions';
import Results from '../components/Results/Results';

const AppRouting = (props) => {

    useEffect(() => {
        DataService.getData().then(res => {
            res.forEach(element => {
                element.status = "na"
            });
            props.setUsers(res)
        })
    }, [])

    return (
        <BrowserRouter basename={'/'}>
            <AppBarComponent />
            <Switch>
                <Route path="/shortlisted" exact component={Results} />
                <Route path="/rejected" exact component={Results} />
                <Route path="/home" exact component={Home} />
                <Route path="/:id" exact component={UserDetails} />
                <Redirect from="/" to="/home" />
                <Redirect from="*" to="/home" />
            </Switch>
        </BrowserRouter>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setUsers: users => dispatch(setUsers(users)),
})

export default connect(null, mapDispatchToProps)(AppRouting);