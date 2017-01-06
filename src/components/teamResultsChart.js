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


    // console.log('values:');
    // console.log(result);

    var allValues = result.map(function (item) {
      return Math.max(parseInt(item.homeResult), parseInt(item.awayResult));
    });



    var max = Math.max(...allValues);
    var zeroBaseLine = 0.05 / max;

    (() => {
      var chart = new Rubix('#' + chartId, {
        // title: 'Stacked bar chart with negative values',
        // subtitle: 'Profit/Expense chart',
        hideAxisAndGrid: true,
        hideLegend: true,

        height: 250,

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
        color: '#D8E5B0',
        name: 'CASA'
      });
      homeInfo.addData([
        { x: '1', y: 0 - zeroBaseLine - (result[0].homeResult / max) },
        { x: '2', y: 0 - zeroBaseLine - (result[1].homeResult / max) },
        { x: '3', y: 0 - zeroBaseLine - (result[2].homeResult / max) },
        { x: '4', y: 0 - zeroBaseLine - (result[3].homeResult / max) },
        { x: '5', y: 0 - zeroBaseLine - (result[4].homeResult / max) },
        { x: '6', y: 0 - (max / max) }
      ]);

      var awayInfo = chart.bar_series({
        name: 'FORA',
        color: '#F2D7CD'
      });
      awayInfo.addData([
        { x: '1', y: 0 + zeroBaseLine + (result[0].awayResult / max) },
        { x: '2', y: 0 + zeroBaseLine + (result[1].awayResult / max) },
        { x: '3', y: 0 + zeroBaseLine + (result[2].awayResult / max) },
        { x: '4', y: 0 + zeroBaseLine + (result[3].awayResult / max) },
        { x: '5', y: 0 + zeroBaseLine + (result[4].awayResult / max) },
        { x: '6', y: max / max }
      ]);


      $('#' + chartId + ' > div > svg > g > g.cb_series > g')[0].children[$('#' + chartId + ' > div > svg > g > g.cb_series > g')[0].children.length - 1].setAttribute('fill-opacity', 0)
      $('#' + chartId + ' > div > svg > g > g.cb_series > g')[0].children[$('#' + chartId + ' > div > svg > g > g.cb_series > g')[0].children.length - 1].setAttribute('stroke-width', 0)
      $('#' + chartId + ' > div > svg > g > g.cb_series > g')[1].children[$('#' + chartId + ' > div > svg > g > g.cb_series > g')[1].children.length - 1].setAttribute('fill-opacity', 0)
      $('#' + chartId + ' > div > svg > g > g.cb_series > g')[1].children[$('#' + chartId + ' > div > svg > g > g.cb_series > g')[1].children.length - 1].setAttribute('stroke-width', 0)
    })();
  }

  render() {


    return (
      <div id={this.props.id}></div>
    );
  }
}

export default TeamResultsChart;