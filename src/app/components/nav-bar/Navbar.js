import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    root: {
        marginTop: 0,
        width: '100%'
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    list: {
        width: 250,
        margin: 0,
        paddingLeft: 15,
        paddingRight: 15
    },
    fullList: {
        width: 'auto',
    },
    icon: {
        marginRight: 10,
        lineHeight: '35px',
    },
    anchor: {
        color: '#000',
        textDecoration: 'none'        
    }
});

class Navbar extends Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
                <div className={classes.list}>
                    <Link to='/home' className={classes.anchor}>
                        <List><Icon className={classes.icon}>home</Icon>Home</List>
                    </Link>
                    <Link to='/bar-chart' className={classes.anchor}>
                        <List><Icon className={classes.icon}>bar_chart</Icon>Bar Charts</List>
                    </Link>
                </div>
        );

        return (
            <div className={classes.root}>
                <AppBar position="static" elevation={5}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                            <Icon>dashboard</Icon>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Widget Hub
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div tabIndex={0} role="button" onClick={this.toggleDrawer('left', false)} onKeyDown={this.toggleDrawer('left', false)}>
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);
