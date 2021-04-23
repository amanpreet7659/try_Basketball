import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ComposeTeam from './ComposeTeam';
import { BorderBottom } from '@material-ui/icons';
import FirstQuater from './FirstQuater';
import First_Quater2 from './First_Quater2';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "#fff",
        fontSize: "30px",
    },
}));

let border = {
    color: "red"
}

export default function Navebar() {
    const [propbtn, setpropbtn] = useState(false)
    const classes = useStyles();
    let obj = {
        fname: "",
        lname: "",
        height: "",
        position: ""
    };

    const finalarr = [
        {
            fname: "Amanpreet",
            lname: "Singh",
            height: "172",
            id: 1,
            position:
                [
                    {
                        value: "Small Forward (SF)",
                        label: "Small Forward (SF)"
                    },
                    {
                        value: "Shooting Guard (SG)",
                        label: "Shooting Guard (SG)"
                    },
                ]
        },
        {
            fname: "Player",
            height: "179",
            id: 2,
            lname: "1",
            position:
                [
                    {
                        value: "Power Forward (PF)",
                        label: "Power Forward (PF)"
                    },
                    {
                        value: "Shooting Guard (SG)",
                        label: "Shooting Guard (SG)"
                    },
                ]
        },
        {
            fname: "Amanpreet",
            lname: "Singh",
            height: "172",
            id: 3,
            position:
                [
                    {
                        value: "Center (C)",
                        label: "Center (C)"
                    },
                    {
                        value: "Shooting Guard (SG)",
                        label: "Shooting Guard (SG)"
                    },
                ]
        },
        {
            fname: "Amanpreet",
            lname: "Singh",
            height: "172",
            id: 4,
            position:
                [
                    {
                        value: "Point Guard (PG)",
                        label: "Point Guard (PG)"
                    },
                    {
                        value: "Shooting Guard (SG)",
                        label: "Shooting Guard (SG)"
                    },
                ]
        },
        {
            fname: "Amanpreet",
            lname: "Singh",
            height: "172",
            id: 5,
            position:
                [
                    {
                        value: "Shooting Guard (SG)",
                        label: "Shooting Guard (SG)"
                    },
                ]
        }
    ]

    const [players, setplayers] = useState({
        fname: "",
        lname: "",
        height: "",
        position: ""
    });
    const [final, setFinal] = useState([])

    const [fPos, setfPos] = useState([])

    const [show, setShow] = useState(true);

    const handleChange = (e) => {
        e.preventDefault();
        if (final.length > 0) {
            setShow(pre => !pre)
        }
    }
    const handleChange1 = (e) => {
        e.preventDefault()
        setShow(pre => !pre)
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {show ? <Button style={border} className={classes.title} onClick={handleChange}>Compose Team</Button> : <Button style={{ color: "#fff" }} className={classes.title} onClick={handleChange}>Compose Team</Button>}
                    {!show ? <Button style={border} className={classes.title} onClick={handleChange1} disabled={propbtn} >First Quater</Button> : <Button className={classes.title} onClick={handleChange1} disabled={propbtn}>First Quater</Button>}
                </Toolbar>
            </AppBar>
            <br></br>
            <br></br>
            <br></br>
            { show && <ComposeTeam setpropbtn={setpropbtn} propbtn={propbtn} obj={obj} players={players} setplayers={setplayers} final={final} setFinal={setFinal} fPos={fPos} setfPos={setfPos} />}
            {!show && <First_Quater2 final={finalarr} />}
        </div>
    );
}
