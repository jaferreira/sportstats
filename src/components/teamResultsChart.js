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



    // console.log('All: ' +  allValues);
    // var baselineValue = Math.max.apply(null,allValues);
    var baselineValue = 15;
    var zeroBaseLine = 0 / baselineValue;

    // console.log('values:');
    // console.log(result);

    var allValues = result.map(function (item) {
      return Math.max(parseInt(item.homeResult), parseInt(item.awayResult));
    });

    console.log('max');


    var max = Math.max(...allValues);
    console.log(max);

    (() => {
      var chart = new Rubix('#' + chartId, {
        // title: 'Stacked bar chart with negative values',
        // subtitle: 'Profit/Expense chart',
        hideAxisAndGrid: true,
        hideLegend: true,

        height: 300,

        axis: {
          x: {
            type: 'ordinal',
          },
          y: {
            type: 'linear',
          }
        },
        tooltip: {
          color: 'white',
        },
        show_markers: false
      });

      var homeInfo = chart.bar_series({
        color: '#0080FF',
        name: 'CASA'
      });
      // homeInfo.addData([
      //   { x: '1', y: (-zeroBaseLine - result[0].homeResult) / baselineValue },
      //   { x: '2', y: (-zeroBaseLine - result[1].homeResult) / baselineValue },
      //   { x: '3', y: (-zeroBaseLine - result[2].homeResult) / baselineValue },
      //   { x: '4', y: (-zeroBaseLine - result[3].homeResult) / baselineValue },
      //   { x: '5', y: (-zeroBaseLine - result[4].homeResult) / baselineValue }
      // ]);

      homeInfo.addData([
        { x: '1', y: 0 - (result[0].homeResult / max) },
        { x: '2', y: 0 - (result[1].homeResult / max) },
        { x: '3', y: 0 - (result[2].homeResult / max) },
        { x: '4', y: 0 - (result[3].homeResult / max) },
        { x: '5', y: 0 - (result[4].homeResult / max) },
        { x: '6', y: 0 - (max/max) }
      ]);

      var awayInfo = chart.bar_series({
        name: 'FORA',
        color: '#FF6666'
      });
      // awayInfo.addData([
      //   { x: '1', y: (zeroBaseLine + result[0].awayResult) / baselineValue },
      //   { x: '2', y: (zeroBaseLine + result[1].awayResult) / baselineValue },
      //   { x: '3', y: (zeroBaseLine + result[2].awayResult) / baselineValue },
      //   { x: '4', y: (zeroBaseLine + result[3].awayResult) / baselineValue },
      //   { x: '5', y: (zeroBaseLine + result[4].awayResult) / baselineValue }
      // ]);
      awayInfo.addData([
        { x: '1', y: (result[0].awayResult / max) },
        { x: '2', y: (result[1].awayResult / max) },
        { x: '3', y: (result[2].awayResult / max) },
        { x: '4', y: (result[3].awayResult / max) },
        { x: '5', y: (result[4].awayResult / max) },
        { x: '6', y: max/max }
      ]);


      $('#teamResultsChart > div > svg > g > g.cb_series > g')[0].children[$('#teamResultsChart > div > svg > g > g.cb_series > g')[0].children.length - 1].setAttribute('fill-opacity', 0)
      $('#teamResultsChart > div > svg > g > g.cb_series > g')[0].children[$('#teamResultsChart > div > svg > g > g.cb_series > g')[0].children.length - 1].setAttribute('stroke-width', 0)
      $('#teamResultsChart > div > svg > g > g.cb_series > g')[1].children[$('#teamResultsChart > div > svg > g > g.cb_series > g')[1].children.length - 1].setAttribute('fill-opacity', 0)
      $('#teamResultsChart > div > svg > g > g.cb_series > g')[1].children[$('#teamResultsChart > div > svg > g > g.cb_series > g')[1].children.length - 1].setAttribute('stroke-width', 0)
    })();
  }

  render() {


    return (
      <div id={this.props.id}></div>
    );
  }
}

export default TeamResultsChart;