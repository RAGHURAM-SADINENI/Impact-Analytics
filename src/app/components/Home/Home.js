import { Container, fade, InputBase, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import User from './User';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { setSearch } from '../../../redux/Search/SearchActions';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: '100%',
        margin: 5,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        marginRight: "auto",
        marginLeft: "auto"
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={event => props.setSearch(event.target.value)}
                    value={props.search}
                />
            </div>
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

const mapDispatchToProps=(dispatch)=>({
    setSearch:search=>dispatch(setSearch(search))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);