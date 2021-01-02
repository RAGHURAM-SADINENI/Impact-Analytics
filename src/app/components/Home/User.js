import { Button, Card, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 15,
        maxWidth: "25%",
        minWidth: "fit-content",
        [theme.breakpoints.down("lg")]: {
            maxWidth: "33%"
        },
        [theme.breakpoints.down("md")]: {
            maxWidth: "50%"
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "100%"
        }
    },
    image: {
        height: 200,
        width: 200,
        objectFit: "contain"
    },
    text: {
        textAlign: "center"
    }
}));

const User = (props) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt="User Photo"
                className={classes.image}
                image={props.Image}
                title="User Photo"
            />
            <CardContent>
                <Typography className={classes.text}>
                    {props.name}
                    <IconButton color="primary" aria-label="more info" component="span" onClick={()=>props.click()}>
                        <LaunchIcon />
                    </IconButton>
                </Typography>

            </CardContent>

        </Card>
    );
}

export default User;