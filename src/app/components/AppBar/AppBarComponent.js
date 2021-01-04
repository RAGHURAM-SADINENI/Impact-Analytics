import { AppBar, makeStyles, Tab, Tabs, Toolbar } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';
import Search from './Search';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

const AppBarComponent = (props) => {

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        props.history.push(newValue)
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar className={classes.toolbar}>
                    <Tabs
                        value={props.location.pathname}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollButtons="on"
                        variant="scrollable"
                        className={classes.tabs}
                    >
                        <Tab label="Impact Analytics" value="/home" />
                        <Tab label="Shortlisted" value="/shortlisted" />
                        <Tab label="Rejected" value="/rejected" style={{ flexGrow: 1 }} />
                    </Tabs>
                    <div>
                        <Search />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(AppBarComponent);