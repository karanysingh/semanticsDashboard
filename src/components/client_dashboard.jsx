import React from 'react';
import MainGrid from './MainGrid';
import MassiveCard from './MassiveCard';
import SmallCard from './SmallCard';
import Header from './Header';
import { Segment,Grid,Card } from 'semantic-ui-react';
import Clock from './clock';
import Sidebar from './Sidebar';
import './dashboard.css';

class Dashboard extends React.Component{
    
    render(){
        const details = [
            //ItemTitle cardActivity Time progress
            ['Item 1',true,'26 Jan 2020',25],
            ['Item 2',false,'26 Jan 2020',6],
            ['Item 3',false,'26 Jan 2020',78],
            ['Item 4',false,'26 Jan 2020',50],
            ['Item 5',false,'26 Jan 2020',13], 
            ];
        return( 
                    <div> 
                    <MainGrid main={<Header></Header>} side={<Segment className="headerCard"><Sidebar></Sidebar></Segment>}></MainGrid>
                    <MainGrid main={<MassiveCard image="https://www.clipartmax.com/png/full/92-924153_ecommerce-website-development-services-ecommerce-website-vector-png.png" title='Title of the Product' desc='A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.'></MassiveCard>} side={<MassiveCard></MassiveCard>}></MainGrid>   
                    <MainGrid main={<SmallCard details={details} ></SmallCard>} side={<MassiveCard></MassiveCard>}></MainGrid>
                    </div>
                );
           
    }
    
}

export default Dashboard;