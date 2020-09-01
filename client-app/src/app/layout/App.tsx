import React, {useState, useEffect} from 'react';
import {Header, Icon} from 'semantic-ui-react';
import {List} from 'semantic-ui-react'

import axios from 'axios';
import {IActivity} from '../models/activity';


const App = () => {
    const [activities, setActivities] = useState<IActivity[]>([]);

    useEffect(() => {
        axios.get<IActivity[]>('http://localhost:5000/api/activities')
            .then((response) => {
                setActivities(response.data)

            });

    }, []); // this second array argument is magic. Don't leave it out or the useEffect hook will enter a loop

    return (
        <div>
            <Header as='h2'>
                <Icon name='users'/>
                <Header.Content>Reactivities</Header.Content>
            </Header>
            <List>
                {activities.map((activity) => (
                    <List.Item key={activity.id}>{activity.title}</List.Item>
                ))}
            </List>
        </div>
    );
}

export default App;
