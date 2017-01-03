
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

class ResultsChart extends React.Component {

  componentDidMount() {

    var homeData = this.props.home;
    var awayData = this.props.away;

    console.log('homedata: ' + homeData);

    (() => {
      var chart = new Rubix('#' + this.props.id, {
        hideAxisAndGrid: true,
        hideLegend: true,
        titleColor: '#0080FF',
        subtitleColor: '#0080FF',
        height: 300,
        axis: {
          x: {
            type: 'ordinal'
          },
          y: {
            type: 'linear',
            tickFormat: ',.0f',

          }
        },
        tooltip: {
          color: 'white',
          format: {
            y: ',.0f'
          },
          label: {
            x: 'Casa', y: 'Fora'
          }
        },
        show_markers: false
      });

      var home = chart.column_series({
        name: 'Casa',
        color: '#D8E5B0'
      });
      home.addData(homeData);

      var away = chart.column_series({
        name: 'Fora',
        color: '#F2D7CD',
        marker: 'square'
      });
      away.addData(awayData);
    })();
  }

  render() {
    return (

      <div id={this.props.id}></div>

    );
  }
}

export default ResultsChart;