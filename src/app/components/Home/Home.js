import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import User from '../Common/User';
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    
}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.container}>
                {props.search.length !== 0 ?
                    props.users.filter(item => item.name.toLocaleLowerCase().indexOf(props.search) !== -1).map((user, index) => <User {...user} key={index} />)
                    :
                    props.users.map((user, index) => <User {...user} key={index} click={() => props.history.push({ pathname: '/' + user.id, state: user })} />)
                }
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    search: state.search,
    users: state.users
})

export default connect(mapStateToProps)(Home);