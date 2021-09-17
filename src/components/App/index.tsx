import {Component} from 'react';
import './App.css';

import Users from "../../domain/Users";
import {Box, Grid} from "@mui/material";

export default class App extends Component<{}, {}> {

    render() {
        return (
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2} className="App">
                    <Grid item xs={1}/>
                    <Grid item xs={10}>
                        <Users/>
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            </Box>
        );
    }
}
