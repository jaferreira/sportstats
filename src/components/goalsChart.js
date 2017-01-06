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


class GoalsChart extends React.Component {

  componentDidMount() {


    var homeData = [];
    var awayData = [];
    var globalData = [];
    for (var i = 0; i < this.props.goalsData.length; i++) {
      if (this.props.goalsData[i].Home == '-') this.props.goalsData[i].Home = 0;
      if (this.props.goalsData[i].Away == '-') this.props.goalsData[i].Away = 0;
      if (this.props.goalsData[i].Global == '-') this.props.goalsData[i].Global = 0;

      if (typeof (this.props.goalsData[i].Home) == 'string')
        this.props.goalsData[i].Home = this.props.goalsData[i].Home.replace('%', '');
      if (typeof (this.props.goalsData[i].Away) == 'string')
        this.props.goalsData[i].Away = this.props.goalsData[i].Away.replace('%', '');
      if (typeof (this.props.goalsData[i].Global) == 'string')
        this.props.goalsData[i].Global = this.props.goalsData[i].Global.replace('%', '');

      if (this.props.type == 1) {
        if (this.props.goalsData[i].Desc == 'Average goals scored each match') {
          homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Home });
          awayData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
          globalData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Global });
        }

        if (this.props.goalsData[i].Desc == 'Average goals conceded each match') {
          homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Home });
          awayData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
          globalData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Global });
        }

        if (this.props.goalsData[i].Desc == 'Average goals scored+conceded') {
          homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Home });
          awayData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
          globalData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Global });
        }
      } else {

        if (this.props.goalsData[i].Desc == 'Clean sheets') {
          homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Home });
          awayData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
          globalData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Global });
        }


        if (this.props.goalsData[i].Desc == 'Failed to score') {
          homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Home });
          awayData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
          globalData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Global });
        }


        if (this.props.goalsData[i].Desc == 'Matches Over 2,5 Goals') {
          homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Home });
          awayData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
          globalData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Global });
        }


        if (this.props.goalsData[i].Desc == 'Matches Under 2,5 Goals') {
          homeData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Home });
          awayData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Away });
          globalData.push({ x: this.props.goalsData[i].Desc, y: this.props.goalsData[i].Global });
        }
      }
    }

    if (this.props.type == 2) {
      console.log('homeData:');
      console.log(homeData);
    }
    (() => {
      var chart = new Rubix('#' + this.props.id, {
        hideAxisAndGrid: false,
        hideLegend: true,
        titleColor: '#EE682F',
        subtitleColor: '#EE682F',
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
          color: '#EE682F',
          format: {
            y: '.0f'
          },
          label: {
            x: '', y: ''
          }
        },
        grouped: true,
        show_markers: false
      });

      var home = chart.bar_series({
        name: 'golos casa',
        color: '#D8E5B0'
      });
      home.addData(homeData);

      var away = chart.bar_series({
        name: 'golos fora',
        color: '#F2D7CD'
      });
      away.addData(awayData);

      var global = chart.bar_series({
        name: 'golos global',
        color: '#BEC9D5'
      });
      global.addData(globalData);
    })();


  }

  render() {
    return (

      <div id={this.props.id}></div>

    );
  }
}

export default GoalsChart;