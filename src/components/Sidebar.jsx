import React from 'react'
import SmallCard from './SmallCard';
import SidebarCard from './SidebarCard'
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
  Card,
  MenuItem,
} from 'semantic-ui-react'
const SidebarDash = () => {
  const [visible, setVisible] = React.useState(true)

  return (
    
    <Grid columns={1} className='sidebarDash'>
      <Button color='violet' floated='left'
             onClick={(e, data) => setVisible(!visible)}>
            <Icon name="close"></Icon>
      </Button>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible={visible}
            width='very wide'
            direction='right'
            style={{backgroundColor:'orange'}}
          >
            <div>
              
              <Button style={{color:'white'}} size='tiny'inverted basic white floated='right'
                    onClick={(e, data) => setVisible(!visible)}>
                    <Icon name="close"></Icon>
              </Button>
              <h1 style={{color:'darkblue'}} floated='left'><Icon floated='left' name='gift'></Icon> Ior De Poster</h1>

            </div><br></br><br></br>
            <div>
              <SidebarCard fluid></SidebarCard>
            </div>
          </Sidebar>
    </Grid>
  )
}

export default SidebarDash
