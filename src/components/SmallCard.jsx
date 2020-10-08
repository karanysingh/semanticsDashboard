import React from 'react';
import {Image,Label, Grid, Icon,GridColumn, Segment, Progress, Card} from 'semantic-ui-react';
class SmallCard extends React.Component{ 
    constructor(props){
        super(props);
        console.log(super.props);
        var activity=[];
        this.props.details.map((active)=>{
            activity.push(active[1]);
        });
        this.state={
            activity
        }
    }

    toggle = i =>{
        this.setState(state => {
            var activity = this.state.activity;
            activity[i] = !activity[i];
        return{
            activity
        }
        });
    }
    render() {
        const color = this.props.active ? 'orange':'white';
        
        return(  
            <Grid stackable doubling relaxed columns={4}>
            <Grid.Row>
                      

                {this.props.details.map(([title,active,time,progress],index) => (
                    <Grid.Column>
                <Card onClick={()=>{this.toggle(index)}} style={{backgroundColor: this.state.activity[index]?'orange':'white'}} className='SmallCard shadowLight'>
                <Card.Content>
                    
                    <Card.Header className='smallcardtitle'><Icon
                    floated='left'
                    size='big'
                    name='gift'
                    />{title}</Card.Header>
                    <Card.Description>{'Due Date: '+ time}</Card.Description>
                    <br></br>
                    <Progress size='tiny' percent={progress} progress/>
                </Card.Content>
                </Card>
                <br></br>
                </Grid.Column>
                ))}

           
            </Grid.Row>
            </Grid>
            
            )
}
}


export default SmallCard;