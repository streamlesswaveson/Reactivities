import React from 'react'
import {Container, Grid, List} from 'semantic-ui-react'
import {IActivity} from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
}

const ActivityDashboard: React.FC<IProps> = ({
                                                 activities,
                                                 selectActivity,
                                                 selectedActivity,
    editMode,
    setEditMode,
    setSelectedActivity
                                             }) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectedActivity={selectActivity}/>
            </Grid.Column>
            <Grid.Column width={6}>
                
                {selectedActivity && !editMode &&
                <ActivityDetail 
                    activity={selectedActivity} 
                    setEditMode={setEditMode} 
                    setSelectedActivity={setSelectedActivity}/>}
                    
                {editMode && 
                <ActivityForm setEditMode={setEditMode}/>}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard