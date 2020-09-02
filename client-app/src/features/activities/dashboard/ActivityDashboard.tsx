import React from 'react'
import {Container, Grid, List} from 'semantic-ui-react'
import {IActivity} from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

interface IProps {
    activities: IActivity[];
    selectActivity: (id:string) => void;
    selectedActivity: IActivity | null;
}

const ActivityDashboard: React.FC<IProps> = ({activities, selectActivity, selectedActivity}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectedActivity={selectActivity}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && 
                <ActivityDetail activity={selectedActivity}/> }
                <ActivityForm/>
            </Grid.Column>
        </Grid>
    )
 }
 
 export default ActivityDashboard