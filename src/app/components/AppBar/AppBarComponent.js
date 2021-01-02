import { AppBar, makeStyles, Tab, Tabs, Toolbar } from '@material-ui/core';
import React from 'react';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const AppBarComponent = (props) => {

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        props.history.push(newValue)
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
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
                        <Tab label="Rejected" value="/rejected" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(AppBarComponent);