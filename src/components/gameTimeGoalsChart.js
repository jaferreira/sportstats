
import React from 'react';
import {
    Row,
    Col,
    Nav,
    Tab,
    Icon,
    Grid,
    Panel,
    NavItem,
    MenuItem,
    PanelLeft,
    PanelBody,
    LoremIpsum,
    PanelRight,
    PanelHeader,
    PanelFooter,
    NavDropdown,
    PanelContainer,
    PanelTabContainer,
} from '@sketchpixy/rubix';

class GameTimeGoalsChart extends React.Component {

  componentDidMount() {


    var homeData = [];

if(this.props.goalsData){


    for (var i = 0; i < this.props.goalsData.length; i++) {
          
      if (typeof (this.props.goalsData[i].Away) == 'string')
        this.props.goalsData[i].Away = this.props.goalsData[i].Away.replace('%', '');

      if (this.props.goalsData[i].Desc == 'Scores first (anytime)') {
        homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
      }

      if (this.props.goalsData[i].Desc.indexOf('and leads at half-time') > -1) {
        homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
      }

      if (this.props.goalsData[i].Desc.indexOf('and wins the match') > -1) {
        homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
      }

      if (this.props.goalsData[i].Desc == 'Turnarounds') {
        homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
      }

    }
}

    (() => {
      var chart = new Rubix('#' + this.props.id, {
        hideAxisAndGrid: false,
        hideLegend: true,
        titleColor: '#2EB398',
        subtitleColor: '#2EB398',
        height: 300,
        axis: {
          x: {
            type: 'ordinal',
          },
          y: {
            type: 'linear',
            tickFormat: 'd'
          }
        },
        tooltip: {
          color: '#2EB398',
          format: {
            y: '.0f'
          }
        },
        grouped: true,
        show_markers: false
      });

      var home = chart.column_series({
        name: '2006',
        color: '#D8E5B0'
      });

      home.addData(homeData);

      
    })();
  }

  render() {
    return (
      
            <div id={this.props.id}></div>
      
    );
  }

}

export default GameTimeGoalsChart;