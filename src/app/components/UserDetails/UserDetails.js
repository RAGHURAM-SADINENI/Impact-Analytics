import { Card, CardActions, CardContent, CardMedia, Container, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { userRejected, userSelected } from '../../../redux/Users/UsersActions';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    root: {
        margin: 15,
        maxWidth: "60%",
        minWidth: "fit-content",
    },
    text: {
        textAlign: "center"
    },
    actions: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

const UserDetails = (props) => {

    const classes = useStyles();
    const index = props.users.findIndex(user => user.id === props.match.params.id)

    return (
        <Container className={classes.container}>
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    alt="User Photo"
                    height="200"
                    image={props.users[index].Image}
                    title="User Photo"
                />
                <CardContent>
                    <Typography className={classes.text}>
                        {props.users[index].name}
                    </Typography>
                    <Typography className={classes.text}>
                        Status: {props.users[index].status}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <IconButton aria-label="selected" onClick={() => props.userSelected(props.users[index].id)}>
                        <DoneIcon color={props.users[index].status !== 'shortlisted' ? 'disabled' : 'secondary'} />
                    </IconButton>
                    <IconButton aria-label="rejected" onClick={() => props.userRejected(props.users[index].id)}>
                        <CloseIcon color={props.users[index].status !== 'rejected' ? 'disabled' : 'secondary'} />
                    </IconButton>
                </CardActions>
            </Card>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    userSelected: id => dispatch(userSelected(id)),
    userRejected: id => dispatch(userRejected(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);