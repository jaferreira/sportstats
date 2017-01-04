
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
    (() => {
      var chart = new Rubix('#' + this.props.id, {
        
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
        show_markers: true
      });

      var home = chart.column_series({
        name: '2006',
        color: '#D8E5B0'
      });

      home.addData(this.props.home);

      var global = chart.column_series({
        name: '2007',
        color: '#BEC9D5'
      });

      global.addData(this.props.global);
    })();
  }

  render() {
    return (
      
            <div id={this.props.id}></div>
      
    );
  }

}

export default GameTimeGoalsChart;