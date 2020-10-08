import React from 'react';
import { Input, Image, Card, Grid, Icon} from 'semantic-ui-react';

class header extends React.Component{
    render(){
    return(
        <Grid columns={16}>
               
            <Grid.Column width={12}>
            <Image floated='left' size='tiny'  src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
            
                <div className='searchBar'>
                <Input icon='search' placeholder="Search.." left iconPosition='left' size='massive' transparent ></Input>
                </div>
            </Grid.Column>
        </Grid>
    )}
}

export default header;