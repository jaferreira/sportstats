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


class TeamResultsChart extends React.Component {

  componentDidMount() {
    var result = this.props.result;
    var chartId = this.props.id;

    // var allValues = result.map(function (item) {
    //   return Math.max(parseInt(item.homeResult), parseInt(item.awayResult));
    // });

    // console.log('All: ' +  allValues);
    // var baselineValue = Math.max.apply(null,allValues);
    var zeroBaseLine = 0.1;
    var baselineValue = 15;

    
    (() => {
      var chart = new Rubix('#' + chartId, {
        // title: 'Stacked bar chart with negative values',
        // subtitle: 'Profit/Expense chart',
        hideAxisAndGrid: true,
        hideLegend: true,
        titleColor: '#0080FF',
        subtitleColor: '#0080FF',
        height: 250,
        axis: {
          x: {
            type: 'ordinal'
          },
          y: {
            type: 'linear',
            tickFormat: ',.0f',
            label: 'Revenue',
            tickCount: 5
          }
        },
        tooltip: {
          color: 'white',
          format: {
            y: ',.0f'
          }
        },
        show_markers: false
      });

      var homeInfo = chart.bar_series({
        color: '#0080FF'
      });
      homeInfo.addData([
        { x: '1', y: (-zeroBaseLine - result[0].homeResult) / baselineValue },
        { x: '2', y: (-zeroBaseLine - result[1].homeResult) / baselineValue },
        { x: '3', y: (-zeroBaseLine - result[2].homeResult) / baselineValue },
        { x: '4', y: (-zeroBaseLine - result[3].homeResult) / baselineValue },
        { x: '5', y: (-zeroBaseLine - result[4].homeResult) / baselineValue }
      ]);


      var awayInfo = chart.bar_series({
        name: this.props.text,
        color: '#FF6666',
        marker: 'square'
      });
      awayInfo.addData([
        { x: '1', y: (zeroBaseLine + result[0].awayResult) / baselineValue },
        { x: '2', y: (zeroBaseLine + result[1].awayResult) / baselineValue },
        { x: '3', y: (zeroBaseLine + result[2].awayResult) / baselineValue },
        { x: '4', y: (zeroBaseLine + result[3].awayResult) / baselineValue },
        { x: '5', y: (zeroBaseLine + result[4].awayResult) / baselineValue }
      ]);
    })();
  }

  render() {


    return (
      <div id={this.props.id}></div>
    );
  }
}

export default TeamResultsChart;