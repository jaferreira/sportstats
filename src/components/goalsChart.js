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
      home.addData(this.props.home);

      var away = chart.bar_series({
        name: 'golos fora',
        color: '#F2D7CD'
      });
      away.addData(this.props.away);

      var global = chart.bar_series({
        name: 'golos global',
        color: '#BEC9D5'
      });
      global.addData(this.props.global);
    })();


  }

  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{ padding: 25 }}>
            <div id={this.props.id}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}

export default GoalsChart;