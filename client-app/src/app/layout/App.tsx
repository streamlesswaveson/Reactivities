import React, {useState, useEffect, Fragment} from 'react';
import {Header, Icon, Container} from 'semantic-ui-react';
import {List} from 'semantic-ui-react'

import axios from 'axios';
import {IActivity} from '../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";


const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);

    useEffect(() => {
        axios.get<IActivity[]>('http://localhost:5000/api/activities')
            .then((response) => {
                setActivities(response.data)

            });

    }, []); // this second array argument is magic. Don't leave it out or the useEffect hook will enter a loop

    return (
        <Fragment>
            <NavBar/>
            <Container style={{marginTop: '7em'}}>
                <ActivityDashboard activities={activities}/>
            </Container>
        </Fragment>
    );
}

export default App;
