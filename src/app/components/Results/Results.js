import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import User from '../Home/User';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
}));

const Results = (props) => {
    console.log(props)
    const classes = useStyles();
    return (
        <Container>
            <div className={classes.container}>
                {props.search.length !== 0 ?
                    props.users.filter(user => user.status === props.match.path.substring(1)).filter(item => item.name.toLocaleLowerCase().indexOf(props.search) !== -1).map((user, index) => <User {...user} key={index} />)
                    :
                    props.users.filter(user => user.status === props.match.path.substring(1)).map((user, index) => <User {...user} key={index} click={() => props.history.push({ pathname: '/' + user.id, state: user })} />)
                }
            </div>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    search: state.search,
    users: state.users
})

export default connect(mapStateToProps)(Results);