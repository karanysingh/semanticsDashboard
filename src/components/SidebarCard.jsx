import React from 'react';
import {Image, Grid,Label, GridColumn, Segment, Progress, Card, Button} from 'semantic-ui-react';
class SidebarCard extends React.Component{ 
    constructor(props){
        super(props);
    }
    render() {
    
        // const color = this.props.active ? 'orange':'white';
        
        var test = [1,2,3,4,5];
        return(  
            <Grid stackable doubling relaxed centered columns={1}>
                <Grid.Column>
                {test.map((i)=>(
            <Card fluid className='SidebarCard'>
            <Card.Content>
                <Card.Description as={'div'}>
                 <h2>{'Description '}<span style={{color:'blue',fontSize:'20px'}}> {'x'+i}</span>
                 <Label className='ui top blue basic label statusLabel'>Done</Label> 
               
               </h2>
             <br></br>
                </Card.Description>
                <div class="ui fluid buttons">
                <button class="ui classic white button" >Download Files</button>
                <Button.Or />
                <button class="ui classic orange button">Request Change</button>
                </div>
            </Card.Content>
        
                </Card>))
            }
            </Grid.Column>
            </Grid>
            )
}
}


export default SidebarCard;