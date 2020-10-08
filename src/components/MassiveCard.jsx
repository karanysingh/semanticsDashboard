import React from 'react';
import {Image, Grid, GridColumn, Segment, Sidebar} from 'semantic-ui-react';
class MassiveCard extends React.Component {
    render(){
    return(
        <Segment className='MassiveCard shadowLight'>
        <Grid centered stackable columns={16} padded> 
        <Grid.Row className="uniformRow">
            <Grid.Column width={6}>
                <Image className='productImage' padded src={this.props.image}></Image>
            </Grid.Column>
            <Grid.Column width={8} padded>
                <Grid.Row>
                    <h2 className="productTitle">{this.props.title}</h2>
                </Grid.Row>
                <Grid.Row>
                    <p className="descFormat">{this.props.desc}</p>
                </Grid.Row>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
    )}
}


export default MassiveCard;