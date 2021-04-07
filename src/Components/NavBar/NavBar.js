import React from "react";
/** Import react-router-dom components */
import { Link } from "react-router-dom";

/** Import material-ui features */
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

/** Import css files */
import "./NavBar.css";

/** Style material-ui components */
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuLink: {
        "& > * + *": {
            marginLeft: theme.spacing(3),
        },
        marginLeft: theme.spacing(18),
        color: "plum",
    },
    menuIcon: {
        marginLeft: theme.spacing(6),
    },
    menuButton: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

/** Exported function */
const NavBar = () => {
    /** Style material-ui exported components */
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header>
                <AppBar position="static">
                    <Toolbar className="ToolBar">
                        {/** Booking luxury logo */}
                        <img
                            src="./AppLogo.png"
                            alt="BookingLuxury"
                            width="250"
                            height="80"
                        />

                        {/** Menu list */}
                        <Typography className={classes.menuLink}>
                            {/** Home page link */}
                            <Link
                                className={classes.menuLink}
                                to={{ pathname: "/" }}
                                style={{ color: "plum" }}
                            >
                                <span className="navLink">Home</span>
                            </Link>

                            {/** Accommodations page link */}
                            <Link
                                to={{ pathname: "/accommodations" }}
                                style={{ color: "plum" }}
                            >
                                <span className="navLink">Accommodations</span>
                            </Link>

                            {/** Owner Service page link */}
                            <Link
                                to={{ pathname: "/owner-service" }}
                                style={{ color: "plum" }}
                            >
                                <span className="navLink">Owner Service</span>
                            </Link>

                            {/** About page link */}
                            <Link
                                to={{ pathname: "/about" }}
                                style={{ color: "plum" }}
                            >
                                <span className="navLink">About</span>
                            </Link>

                            {/** Contact page link */}
                            <Link
                                to={{ pathname: "/contact" }}
                                style={{ color: "plum" }}
                            >
                                <span className="navLink">Contact</span>
                            </Link>

                            {/** Sign in page link */}
                            <Link
                                to={{ pathname: "/sign-in" }}
                                style={{ color: "plum" }}
                            >
                                <span className="navLink">Sign in</span>
                            </Link>

                            {/** Sign up page link */}
                            <Link
                                to={{ pathname: "/sign-up" }}
                                style={{ color: "plum" }}
                            >
                                <span className="navLink">Sign up</span>
                            </Link>
                        </Typography>

                        {/** Social media icons */}
                        <div className={classes.menuIcon}>
                            <Link
                                to="/errors"
                                target="blank"
                                style={{ color: "plum" }}
                            >
                                {/** Facebook icon */}
                                <i class="fab fa-facebook-f social-media-icon"></i>
                                {/** Instagram icon */}
                                <i class="fab fa-instagram social-media-icon"></i>
                                {/** Twitter icon */}
                                <i class="fab fa-twitter social-media-icon"></i>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </header>
        </div>
    );
};

/** Exported component */
export default NavBar;
