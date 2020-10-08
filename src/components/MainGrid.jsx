import React from 'react'; 
import { Grid } from 'semantic-ui-react';
class MainGrid extends React.Component {
  render(){
    return (
       <Grid columns={14} centered padded>
       <Grid.Row stretched>
         <Grid.Column width={11}>
           {this.props.main}
         </Grid.Column>
         <Grid.Column only='computer' width={3}>
           {this.props.side}
         </Grid.Column>
       </Grid.Row>
       </Grid>
    )
  }
}

export default MainGrid;