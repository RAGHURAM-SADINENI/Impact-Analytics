import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';

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
    const [depth, setDepth] = useState(2);

    return (
        <Card
            className={classes.root}
            onMouseOver={() => setDepth(10)}
            onMouseOut={() => setDepth(2)}
            linkButton={true}
            onClick={() => props.click()}
            elevation={depth}
        >
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
                </Typography>
            </CardContent>
        </Card>
    );
}

export default User;