import {Component} from 'react';
import './App.css';

import Users from "../../domain/Users";
import {Grid} from "@mui/material";

export default class Index extends Component<{}, {}> {

    render() {
        return (
            <Grid container spacing={2} className="App">
                <Grid item xs={1}/>
                <Grid item xs={10}>
                    <Users/>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        );
    }
}
