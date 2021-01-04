import { fade, InputBase, makeStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { setSearch } from '../../../redux/Search/SearchActions';

const useStyles = makeStyles((theme) => ({
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
    }
}));

const Search = (props) => {

    const classes = useStyles();
    
    return (
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
    )
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    setSearch: search => dispatch(setSearch(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);