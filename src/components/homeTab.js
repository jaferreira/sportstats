

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

import ResultsChart from './resultsChart'

class HomeTab extends React.Component {


    componentDidMount() {

    }


    render() {
        var homeResults = [
            { x: '3-0', y: 3 },
            { x: '2-0', y: 2 },
            { x: '2-1', y: 2 },
            { x: '0-2', y: 0 },
            { x: '3-1', y: 3 },
            { x: '2-5', y: 2 }
        ];
        var awayResults = [
            { x: '3-0', y: 0 },
            { x: '2-0', y: 0 },
            { x: '2-1', y: -1 },
            { x: '0-2', y: -2 },
            { x: '3-1', y: -1 },
            { x: '2-5', y: -5 }
        ];

        
        return (
            <div>
                <p>Nesta Competição</p>
                <ResultsChart id={this.props.id} home={homeResults} away={awayResults} />
                <div className="row fundo">
                    <div className="col-sm-12 top">
                        <table className="todo">
                            <tbody>
                                
                                <tr className="ent">
                                    <td> Não ganha há.. </td>
                                    <td className='dir'> X </td>
                                </tr>

                                <tr className="ent">
                                    <td> Não empata há... </td>
                                    <td className='dir'> X </td>
                                </tr>
                                <tr className="ent">
                                    <td> Não perde há... </td>
                                    <td className='dir' d> X </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}




export default HomeTab;