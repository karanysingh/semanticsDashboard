import React from 'react';
import {Image, Grid, GridColumn, Segment, Sidebar} from 'semantic-ui-react';
class MassiveCard extends React.Component {
    render(){
    return(
        <Segment className="shadownLight">
        <Grid centered stackable columns={3} padded> 
        <Grid.Row className="uniformRow">
            <Grid.Column width={1}>
                <Image className='productImage' padded src={this.props.image}></Image>
            </Grid.Column>
            <Grid.Column width={2} padded>
                <h1>Hi</h1>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    )}
}


export default MassiveCard;