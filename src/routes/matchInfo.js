import React from 'react';
import MatchInfoStore from '../stores/MatchInfoStore';
import MatchInfoActions from '../actions/MatchInfoActions';

import {
    Row,
    Col,
    Nav,
    Tab,
    Icon,
    Grid,
    Table,
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
    Progress, Label
} from '@sketchpixy/rubix';

import TeamResultsChart from '../components/teamResultsChart'

import GoalsChart from '../components/goalsChart'
import GameTimeGoalsChart from '../components/gameTimeGoalsChart'

import HomeTab from '../components/homeTab'
import AwayTab from '../components/awayTab'

import LastGamesWins from '../components/lastGamesWins'


class HomeTeamGamesPanel extends React.Component {
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
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="home">
                <Panel className='cor'>
                    <PanelHeader className='bg-greend fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="home">
                                Casa
                            </NavItem>
                            <NavItem eventKey="user">
                                Fora
                            </NavItem>
                            <NavItem eventKey="cog">
                                C. Directo
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="home">
                                            <HomeTab id='h1' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="user">
                                            <AwayTab id='a1' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="cog">
                                            <Progress label='' className="progbar" value={50} color='#D8E5B0' min={0} max={100} />
                                            <table className='todo'>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home'>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                            </table>

                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                    <PanelFooter>
                        <div className="container-fluid">
                            <div className="row fundo">
                                <div className="col-sm-12 top">
                                    <table className="todo">
                                        <tbody>
                                            <tr className="ent">
                                                <td> Vitórias </td>
                                                <td className='dir'> X </td>
                                            </tr>

                                            <tr className="ent">
                                                <td> Empates </td>
                                                <td className='dir'> X </td>
                                            </tr>
                                            <tr className="ent">
                                                <td> Derrotas </td>
                                                <td className='dir'> X </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </PanelFooter>
                </Panel>
            </PanelTabContainer>
        );
    }
}

class AwayTeamGamesPanel extends React.Component {
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
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="user">
                <Panel className='cor'>
                    <PanelHeader className='bg-greend fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="home">
                                Casa
                            </NavItem>
                            <NavItem eventKey="user">
                                Fora
                            </NavItem>
                            <NavItem eventKey="cog">
                                C. Directo
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="home">
                                            <HomeTab id='h2' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="user">
                                            <AwayTab id='a2' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="cog">
                                            <Progress label='' className="progbar" value={50} color='#D8E5B0' min={0} max={100} />
                                            <table className='todo'>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home'>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                            </table>

                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                    <PanelFooter>
                        <div className="container-fluid">
                            <div className="row fundo">
                                <div className="col-sm-12 top">
                                    <table className="todo">
                                        <tbody>
                                            <tr className="ent">
                                                <td> Vitórias </td>
                                                <td className='dir'> X </td>
                                            </tr>

                                            <tr className="ent">
                                                <td> Empates </td>
                                                <td className='dir'> X </td>
                                            </tr>
                                            <tr className="ent">
                                                <td> Derrotas </td>
                                                <td className='dir'> X </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </PanelFooter>
                </Panel>
            </PanelTabContainer>
        );
    }
}

class GoalPeriodPanel extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            activeTab: ''
        };
    }

    handleActiveState(eventKey) {
        this.setState({
            activeTab: eventKey
        });
    }

    getItemProps(eventKey) {
        return {
            eventKey,
            active: this.state.activeTab === eventKey
        };
    }

    render() {
        return (
            <PanelTabContainer id='pills-basic' defaultActiveKey="home">
                <Panel className='cor'>
                    <PanelHeader className='bg-greend fg-white'>
                        <Grid>
                            <Row>
                                <Col sm={12}>
                                    <h4>Momento dos Golos</h4>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={6}>
                                    <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>
                                        <NavItem eventKey="home">Casa</NavItem>
                                        <NavItem eventKey="user">Global</NavItem>
                                    </Nav>
                                </Col>
                                <Col xs={6}>
                                    <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>
                                        <NavItem eventKey="home">Fora</NavItem>
                                        <NavItem eventKey="user">Global</NavItem>
                                    </Nav>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12}>
                                    <Tab.Content className="tabela">
                                        <Tab.Pane eventKey="home">
                                            <Grid>
                                                <Row>
                                                    <Col xs={12} className="sempad">
                                                        <Table bordered striped className='table table-bordered' data-tablesaw-mode='swipe'>
                                                            <tbody>
                                                                {this.props.data}
                                                            </tbody>
                                                        </Table>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="user">
                                            <Grid>
                                                <Row>
                                                    <Col xs={12} className="sempad">
                                                        <Table bordered striped className='table table-bordered' data-tablesaw-mode='swipe'>
                                                            <tbody>
                                                                {this.props.data}
                                                            </tbody>
                                                        </Table>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel >
            </PanelTabContainer >
        );
    }
}

class Menu extends React.Component {

    constructor() {
        super();
        this.state = {
            activeTab: ''
        };
    }

    handleActiveState(eventKey) {
        this.setState({
            activeTab: eventKey
        });
    }

    getItemProps(eventKey) {
        return {
            eventKey,
            active: this.state.activeTab === eventKey
        };
    }

    componentDidMount() {
        $('.tablesaw').table();
    }


    render() {




        var goalsHomeChartData = this.props.goalsHomeChartData;
        var goalsAwayChartData = this.props.goalsAwayChartData;

        console.log('-->');
        console.log(goalsHomeChartData);
        var wins = [0, 1, 2, 0, 1];

        return (
            <PanelTabContainer id='panel-body-header-footer-normal-tab' defaultActiveKey="user">
                <Panel>


                    <PanelHeader className='bg-grayishcyan fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="home">
                                Ficha de Jogo
                            </NavItem>
                            <NavItem eventKey="user">
                                Estatísticas
                            </NavItem>
                            <NavItem eventKey="cog">
                                ODDS
                            </NavItem>
                        </Nav>
                    </PanelHeader>

                    <PanelBody>
                        <Grid>

                            <Tab.Content animation={false}>
                                <Tab.Pane eventKey="home">
                                    <div className='imagemestadio'>
                                        <h3>Imagem Estádio</h3>
                                    </div>

                                </Tab.Pane>

                                <Tab.Pane eventKey="user">
                                    <PanelTabContainer id='pills-basic' defaultActiveKey="home">
                                        <PanelBody>
                                             <Grid>
                                                <div className='row'>
                                                    <div className='col-sm-12'>
                                                        <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>
                                                            <NavItem eventKey="home" className='col-sm-6 botao1'>Últimos 5 Jogos</NavItem>

                                                            <NavItem eventKey="user" className='col-sm-6 botao2'>Próximos 5 Jogos</NavItem>
                                                        </Nav>
                                                    </div>
                                                </div>

               
                                                    <Tab.Content>
                                                            <Tab.Pane eventKey="home">
                                                                <div className='row'>
                                                                    <div className='col-sm-12'>
                                                                        <div className='ola'>
                                                                            <table className='resultados'>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className=' bo'>Braga</td>
                                                                                    <td className='dir padr bo'>Rio Ave</td>
                                                                                    <td className=' bo'>1-2</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='bo'>1-0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Braga</td>
                                                                                    <td className='dir padr bo'>Rio Ave</td>
                                                                                    <td className='bo'>1-2</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='bo'>1-0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='bo'>1-0</td>
                                                                                </tr>
                                                                            </table>
                                                                            <table className='resultados'>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className=' bo'>Braga</td>
                                                                                    <td className='dir padr bo'>Rio Ave</td>
                                                                                    <td className='dir bo'>1-2</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='bo dir'>1-0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Braga</td>
                                                                                    <td className='dir padr bo'>Rio Ave</td>
                                                                                    <td className='bo dir'>1-2</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='bo dir'>1-0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='bo dir'>1-0</td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className='row'>
                                                                    <div className='col-sm-12'>
                                                                        <div className='ola'>
                                                                            <LastGamesWins wins={wins} />
                                                                            <LastGamesWins wins={wins} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="user">
                                                                <div className='row'>
                                                                    <div className='col-sm-12'>
                                                                        <div className='ola'>
                                                                            <table className='resultados'>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className=' bo'>Braga</td>
                                                                                    <td className='dir padr bo'>Rio Ave</td>
                                                                                    <td className=' bo'>1-2</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='bo'>1-0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Braga</td>
                                                                                    <td className='dir padr bo'>Rio Ave</td>
                                                                                    <td className='bo'>1-2</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='bo'>1-0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='bo'>1-0</td>
                                                                                </tr>
                                                                            </table>
                                                                            <table className='resultados'>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className=' bo'>Braga</td>
                                                                                    <td className='dir padr bo'>Rio Ave</td>
                                                                                    <td className='dir bo'>1-2</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='dir bo'>1-0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Braga</td>
                                                                                    <td className='dir padr bo'>Rio Ave</td>
                                                                                    <td className='dir bo'>1-2</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='dir bo'>1-0</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td className=' qua'><p className="qua2">22 DEZ '16</p></td>
                                                                                    <td className=' bo padl'>Primeira Liga</td>
                                                                                    <td className='bo'>Chaves</td>
                                                                                    <td className='dir padr bo'>Estoril</td>
                                                                                    <td className='dir bo'>1-0</td>
                                                                                </tr>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                        </Tab.Content>
                                                    </Grid>
                                                </PanelBody>
                                            </PanelTabContainer>

                                        


                                        
                                        <div className='row'>
                                            <div className='col-sm-12 ola2'>
                                                <div className='padr'>
                                                    <HomeTeamGamesPanel />
                                                </div>
                                                    <AwayTeamGamesPanel />
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <p className='golos'> Golos</p>
                                                <hr className='goloslinha'></hr>
                                            </div>
                                        </div>

                                        <PanelTabContainer id='pills-basic' defaultActiveKey="home">

                                            <PanelBody>
                                                <Grid>
                                                    <div className='row'>
                                                        <div className='col-sm-12 sempad'>

                                                            <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>

                                                                <NavItem eventKey="home" className='col-sm-6 botao1'>Últimos 5 Jogos</NavItem>
                                                                <NavItem eventKey="user" className='col-sm-6 botao2'>Próximos 5 Jogos</NavItem>
                                         
                                                            </Nav>
                                                        </div>
                                                    </div> 
                                                                
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="home">

                                                        <div className='row'>
                                                            <div className='col-sm-12'>
                                                                <div className='ola'>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goalsHome1' type={1} goalsData={this.props.goalsHomeChartData} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goalsAway1' type={1} goalsData={this.props.goalsAwayChartData} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-sm-12'>
                                                                <div className='ola'>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goalsHome3' type={2} goalsData={goalsHomeChartData} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goalsAway3' type={2} goalsData={goalsAwayChartData} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-sm-12'>
                                                                <div className='ola'>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GameTimeGoalsChart id='g_1' goalsData={goalsHomeChartData} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GameTimeGoalsChart id='g_2' goalsData={goalsAwayChartData} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="user">

                                                        <div className='row'>
                                                            <div className='col-sm-12'>
                                                                <div className='ola'>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goalsHome2' type={1} goalsData={this.props.goalsHomeChartData} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goalsAway2' type={1} goalsData={this.props.goalsAwayChartData} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-sm-12'>
                                                                <div className='ola'>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goalsHome4' type={2} goalsData={goalsHomeChartData} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goalsAway4' type={2} goalsData={goalsAwayChartData} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-sm-12'>
                                                                <div className='ola'>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GameTimeGoalsChart id='g_3' goalsData={goalsHomeChartData} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GameTimeGoalsChart id='g_4' goalsData={goalsAwayChartData} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Grid>
                                        </PanelBody>
                                    </PanelTabContainer>


                                    <div className='row'>
                                        <div className='col-sm-12 ola'>
                                        <table className="colleg">
                                            <tr>
                                                <td className='casa'></td>
                                                <td className="text"> Casa </td>
                                                <td className='fora'></td>
                                                <td className="text">Fora</td>
                                                <td className='global'></td>
                                                <td className="text">Global</td>
                                            </tr>
                                            </table>

                                        </div>
                                    </div>

                                    <div className="row mt">
                                        <div className='col-sm-12'>
                                            <GoalPeriodPanel data={this.props.tableContent} />
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <p className='golos'> Resultados </p>
                                            <hr className='goloslinha'></hr>
                                        </div>
                                    </div>



                                    <PanelTabContainer id='pills-basic' defaultActiveKey="home">
                                        <PanelBody>
                                            <Grid>
                                                <div className='row'>
                                                    <div className='col-sm-12 sempad'>
                                                        <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>
                                                            <NavItem eventKey="home" className='col-sm-6 botao1'>Nesta Competição</NavItem>
                                                            <NavItem eventKey="user" className='col-sm-6 botao2'>Últimos 10 Jogos</NavItem>
                                                        </Nav>
                                                    </div>
                                                </div>
                                    
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="home">
                                                            <div className='row'>
                                                                <div className='col-sm-12 ola2'>
                                                                    <div className='padr'>
                                                                        <HomeTeamResultPanel />
                                                                    </div>
                                                                        <AwayTeamResultPanel />
                                                                </div>
                                                            </div>

                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="user">
                                                            <div className='row'>
                                                                <div className='col-sm-12 ola2'>
                                                                    <div className='padr'>
                                                                        <HomeTeamResultPanel2 />
                                                                    </div>
                                                                        <AwayTeamResultPanel2 />
                                                                </div>
                                                            </div>


                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                </Grid>
                                            </PanelBody>
                                        </PanelTabContainer>
                                    </Tab.Pane>
                            <Tab.Pane eventKey="cog">
                                <h3>Cog (header)</h3>
                                <p><LoremIpsum query='4s' /></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="home-1">
                                <h3>Home (footer)</h3>
                                <p><LoremIpsum query='4s' /></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="user-1">
                                <h3>User (footer)</h3>
                                <p><LoremIpsum query='4s' /></p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="cog-1">
                                <h3>Cog (footer)</h3>
                                <p><LoremIpsum query='4s' /></p>
                            </Tab.Pane>
                            </Tab.Content>
                            
                        </Grid>
                    </PanelBody >
                </Panel >
            </PanelTabContainer >
        );
    }
}

class HomeTeamResultPanel extends React.Component {
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
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="casa">
                <Panel className='cor'>
                    <PanelHeader className='bg-greend fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="casa">
                                Casa
                            </NavItem>
                            <NavItem eventKey="global">
                                Global
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="casa">
                                            <table className="todo">
                                                <thead>
                                                    <tr className="ent">
                                                        <th colSpan="2">Resultado ao Intervalo</th>
                                                        <th colSpan="2">Resultado Final</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="ent">
                                                        <td>1 - 0</td>
                                                        <td> 80%</td>
                                                        <td>3 - 0</td>
                                                        <td> 40%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>0 - 0</td>
                                                        <td> 20%</td>
                                                        <td>4 - 0</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>3 - 1</td>
                                                        <td> 20%</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>1 - 1</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="global">
                                            <table className="todo">
                                                <thead>
                                                    <tr className="ent">
                                                        <th colSpan="2">Resultado ao Intervalo</th>
                                                        <th colSpan="2">Resultado Final</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="ent">
                                                        <td>1 - 0 </td>
                                                        <td>70%</td>
                                                        <td>3 - 0</td>
                                                        <td> 40%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>0 - 0 </td>
                                                        <td> 20%</td>
                                                        <td>4 - 0 </td>
                                                        <td>20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>1 - 1</td>
                                                        <td> 10%</td>
                                                        <td>3 - 1</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">

                                                        <td>1 - 1</td>
                                                        <td> 20%</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Tab.Pane>

                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                    <PanelFooter>
                        <div className="container-fluid">
                            <div className="row fundo">
                                <div className="col-xs-12 top">
                                    <table className="todo">
                                        <tbody>
                                            <tr className="ent">
                                                <td> Total</td>
                                                <td> 100%</td>
                                                <td> Total </td>
                                                <td> 100% </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </PanelFooter>
                </Panel>
            </PanelTabContainer>
        );
    }
}

class AwayTeamResultPanel extends React.Component {
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
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="fora">
                <Panel className='cor'>
                    <PanelHeader className='bg-greend fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="fora">
                                Fora
                            </NavItem>
                            <NavItem eventKey="global">
                                Global
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="fora">
                                            <table className="todo">
                                                <thead>
                                                    <tr className="ent">
                                                        <th colSpan="2">Resultado ao Intervalo</th>
                                                        <th colSpan="2">Resultado Final</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="ent">
                                                        <td>1 - 0</td>
                                                        <td> 80%</td>
                                                        <td>0 - 1 </td>
                                                        <td>40%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>0 - 0</td>
                                                        <td> 20%</td>
                                                        <td>0 - 0</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>0 - 2</td>
                                                        <td> 80%</td>
                                                        <td>3 - 3</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>3 - 0</td>
                                                        <td> 20%</td>
                                                        <td>3 - 1</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="global">
                                            <table className="todo">
                                                <thead>
                                                    <tr className="ent">
                                                        <th colSpan="2">Resultado ao Intervalo</th>
                                                        <th colSpan="2">Resultado Final</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="ent">
                                                        <td>1 - 0</td>
                                                        <td> 80%</td>
                                                        <td>0 - 1</td>
                                                        <td> 40%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>0 - 0</td>
                                                        <td> 20%</td>
                                                        <td>0 - 0</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>0 - 2</td>
                                                        <td> 80%</td>
                                                        <td>3 - 3</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>3 - 0</td>
                                                        <td> 20%</td>
                                                        <td>3 - 1</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                    <PanelFooter>
                        <div className="container-fluid">
                            <div className="row fundo">
                                <div className="col-sm-12 top">
                                    <table className="todo">
                                        <tbody>
                                            <tr className="ent">
                                                <td> Total 100%</td>
                                                <td className=''> Total 100% </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </PanelFooter>
                </Panel>
            </PanelTabContainer>
        );
    }
}

class HomeTeamResultPanel2 extends React.Component {
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
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="casa">
                <Panel className='cor'>
                    <PanelHeader className='bg-greend fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="casa">
                                Casa
                            </NavItem>
                            <NavItem eventKey="global">
                                Global
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="casa">
                                            <table className="todo">
                                                <thead>
                                                    <tr className="ent">
                                                        <th colSpan="2">Resultado ao Intervalo</th>
                                                        <th colSpan="2">Resultado Final</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="ent">
                                                        <td>3 - 1</td>
                                                        <td> 80%</td>
                                                        <td>2 - 0</td>
                                                        <td> 40%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>1 - 1</td>
                                                        <td> 20%</td>
                                                        <td>4 - 0</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>2 - 1</td>
                                                        <td> 20%</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>1 - 2</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="global">
                                            <table className="todo">
                                                <thead>
                                                    <tr className="ent">
                                                        <th colSpan="2">Resultado ao Intervalo</th>
                                                        <th colSpan="2">Resultado Final</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="ent">
                                                        <td>2 - 0 </td>
                                                        <td>70%</td>
                                                        <td>3 - 1</td>
                                                        <td> 40%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>1 - 1 </td>
                                                        <td> 20%</td>
                                                        <td>4 - 0 </td>
                                                        <td>20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>1 - 1</td>
                                                        <td> 10%</td>
                                                        <td>3 - 1</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">

                                                        <td>1 - 1</td>
                                                        <td> 20%</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Tab.Pane>

                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                    <PanelFooter>
                        <div className="container-fluid">
                            <div className="row fundo">
                                <div className="col-xs-12 top">
                                    <table className="todo">
                                        <tbody>
                                            <tr className="ent">
                                                <td> Total</td>
                                                <td> 100%</td>
                                                <td> Total </td>
                                                <td> 100% </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </PanelFooter>
                </Panel>
            </PanelTabContainer>
        );
    }
}

class AwayTeamResultPanel2 extends React.Component {
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
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="fora">
                <Panel className='cor'>
                    <PanelHeader className='bg-greend fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="fora">
                                Fora
                            </NavItem>
                            <NavItem eventKey="global">
                                Global
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="fora">
                                            <table className="todo">
                                                <thead>
                                                    <tr className="ent">
                                                        <th colSpan="2">Resultado ao Intervalo</th>
                                                        <th colSpan="2">Resultado Final</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="ent">
                                                        <td>1 - 0</td>
                                                        <td> 80%</td>
                                                        <td>0 - 1 </td>
                                                        <td>40%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>0 - 0</td>
                                                        <td> 20%</td>
                                                        <td>0 - 0</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>0 - 2</td>
                                                        <td> 80%</td>
                                                        <td>3 - 3</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>3 - 0</td>
                                                        <td> 20%</td>
                                                        <td>3 - 1</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="global">
                                            <table className="todo">
                                                <thead>
                                                    <tr className="ent">
                                                        <th colSpan="2">Resultado ao Intervalo</th>
                                                        <th colSpan="2">Resultado Final</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="ent">
                                                        <td>1 - 0</td>
                                                        <td> 80%</td>
                                                        <td>0 - 1</td>
                                                        <td> 40%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>0 - 0</td>
                                                        <td> 20%</td>
                                                        <td>0 - 0</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>0 - 2</td>
                                                        <td> 80%</td>
                                                        <td>3 - 3</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                    <tr className="ent">
                                                        <td>3 - 0</td>
                                                        <td> 20%</td>
                                                        <td>3 - 1</td>
                                                        <td> 20%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                    <PanelFooter>
                        <div className="container-fluid">
                            <div className="row fundo">
                                <div className="col-sm-12 top">
                                    <table className="todo">
                                        <tbody>
                                            <tr className="ent">
                                                <td> Total 100%</td>
                                                <td className=''> Total 100% </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </PanelFooter>
                </Panel>
            </PanelTabContainer>
        );
    }
}

class MatchInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = MatchInfoStore.getState();
        this.onChange = this.onChange.bind(this);




    }

    componentDidMount() {
        MatchInfoStore.listen(this.onChange);
        MatchInfoActions.getMatchInfo(this.props.params.perma);

        $('.tablesaw').table();
    }

    componentWillUnmount() {
        MatchInfoStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {

    }

    onChange(state) {
        this.setState(state);
    }

    render() {





        let isLoading = (this.state.matchInfo.homeTeam) ? false : true;

        if (isLoading) {
            return (<div><h1>Is Loading</h1></div>);
        }
        else {

            let matchInfo = this.state.matchInfo;
            let gamesBetweenTeams = matchInfo.nextGameStats.gamesBetweenTeams.map((game, index) => {
                return (
                    <tr key={game.Date.toString()}>
                        <td>{game.Date}</td>
                        <td>{game.Competicion}</td>
                        <td>{game.HomeTeam}</td>
                        <td>{game.AwayTeam}</td>
                        <td>{game.Result}</td>
                    </tr>
                );
            });


            var resultsBetweenTeams = [];
            for (var i = 0; i < 5; i++) {
                var game = matchInfo.nextGameStats.gamesBetweenTeams[i];
                resultsBetweenTeams.push({
                    homeResult: game.HomeScore,
                    awayResult: game.AwayScore
                });
            }


            let homeScores = matchInfo.nextGameStats.homeScores.slice(0, 5).map((game, index) => {
                return (
                    <tr key={game.Date.toString()}>
                        <td>{game.Date}</td>
                        <td>{game.Competicion}</td>
                        <td>{game.HomeTeam}</td>
                        <td>{game.AwayTeam}</td>
                        <td>{game.Result}</td>
                    </tr>
                );
            });

            let awayScores = matchInfo.nextGameStats.awayScores.slice(0, 5).map((game, index) => {
                return (
                    <tr key={game.Date.toString()}>
                        <td>{game.Date}</td>
                        <td>{game.Competicion}</td>
                        <td>{game.HomeTeam}</td>
                        <td>{game.AwayTeam}</td>
                        <td>{game.Result}</td>
                    </tr>
                );
            });

            let generalTable = matchInfo.nextGameStats.generalTable.map((classification, index) => {
                return (
                    <tr key={classification.Team.toString()}>
                        <td>{classification.Team}</td>
                        <td>{classification.Points}</td>
                        <td>{classification.Games}</td>
                        <td>{classification.Victories}</td>
                        <td>{classification.Draws}</td>
                        <td>{classification.Defeats}</td>
                    </tr>
                );
            });


            let goalsHome = matchInfo.nextGameStats.goalsHome.map((goals, index) => {
                return (
                    <tr key={goals.Desc.toString()}>
                        <td>{goals.Desc}</td>
                        <td>{goals.Global}</td>
                        <td>{goals.Home}</td>
                        <td>{goals.Away}</td>
                    </tr>
                );
            });

            let goalsAway = matchInfo.nextGameStats.goalsAway.map((goals, index) => {
                return (
                    <tr key={goals.Desc.toString()}>
                        <td>{goals.Desc}</td>
                        <td>{goals.Global}</td>
                        <td>{goals.Home}</td>
                        <td>{goals.Away}</td>
                    </tr>
                );
            });

            let homeRoad = matchInfo.nextGameStats.homeRoad.map((road, index) => {
                return (
                    <tr key={road.Desc.toString()}>
                        <td>{road.Desc}</td>
                        <td>{road.Global}</td>
                        <td>{road.Home}</td>
                        <td>{road.Away}</td>
                    </tr>
                );
            });

            let awayRoad = matchInfo.nextGameStats.awayRoad.map((road, index) => {
                return (
                    <tr key={road.Desc.toString()}>
                        <td>{road.Desc}</td>
                        <td>{road.Global}</td>
                        <td>{road.Home}</td>
                        <td>{road.Away}</td>
                    </tr>
                );
            });

            let homeTable = matchInfo.nextGameStats.homeTable.map((classification, index) => {
                return (
                    <tr key={classification.Order.toString()}>
                        <td>{classification.Order}</td>
                        <td>{classification.Team}</td>
                        <td>{classification.Points}</td>
                        <td>{classification.Games}</td>
                        <td>{classification.Victories}</td>
                        <td>{classification.Draws}</td>
                        <td>{classification.Defeats}</td>
                    </tr>
                );
            });

            let awayTable = matchInfo.nextGameStats.awayTable.map((classification, index) => {
                return (
                    <tr key={classification.Order.toString()}>
                        <td>{classification.Order}</td>
                        <td>{classification.Team}</td>
                        <td>{classification.Points}</td>
                        <td>{classification.Games}</td>
                        <td>{classification.Victories}</td>
                        <td>{classification.Draws}</td>
                        <td>{classification.Defeats}</td>
                    </tr>
                );
            });

            let homePeriodGoals = matchInfo.nextGameStats.homePeriodGoals.map((periodInfo, index) => {
                return (
                    <tr key={periodInfo.Desc.toString() + periodInfo.Goals.toString() + periodInfo.Period.toString()}>
                        <td>{periodInfo.Desc}</td>
                        <td>{periodInfo.Goals}</td>
                        <td>{periodInfo.Period}</td>
                    </tr>
                );
            });

            let awayPeriodGoals = matchInfo.nextGameStats.awayPeriodGoals.map((periodInfo, index) => {
                return (
                    <tr key={periodInfo.Desc.toString() + periodInfo.Goals.toString() + periodInfo.Period.toString()}>
                        <td>{periodInfo.Desc}</td>
                        <td>{periodInfo.Goals}</td>
                        <td>{periodInfo.Period}</td>
                    </tr>
                );
            });


            let homeResultsHome = matchInfo.nextGameStats.homeResultsHome.map((result, index) => {
                return (
                    <tr key={index + result.Result.toString() + result.Percent.toString()}>
                        <td>{result.Result}</td>
                        <td>{result.Percent}</td>
                    </tr>
                );
            });

            let awayResultsAway = matchInfo.nextGameStats.awayResultsAway.map((result, index) => {
                return (
                    <tr key={index + result.Result.toString() + result.Percent.toString()}>
                        <td>{result.Result}</td>
                        <td>{result.Percent}</td>
                    </tr>
                );
            });



            let goalMomentsHome = matchInfo.nextGameStats.homePeriodGoals.map((periodInfo, index) => {
                var even = (index % 2) == 0;
                if (even) {
                    return (

                        <tr>

                            <td rowSpan="2">{periodInfo.Period}</td>
                            <td>{periodInfo.Desc}</td>
                            <td>{periodInfo.Goals}</td>
                            <td className="grafgolo"><Progress label='' className="progbar2" value={periodInfo.Goals} color='#D8E5B0' min={0} max={10} /></td>
                            <td rowSpan="2">{periodInfo.Period}</td>
                            <td>{periodInfo.Desc}</td>
                            <td>{periodInfo.Goals}</td>
                            <td className="grafgolo"><Progress label='' className="progbar2" value={periodInfo.Goals} color='#D8E5B0' min={0} max={10} /></td>

                        </tr>
                    );
                }
                else {
                    return (
                        <tr>
                            <td>{periodInfo.Desc}</td>
                            <td>{periodInfo.Goals}</td>
                            <td className="grafgolo"><Progress label='' className="progbar2" value={periodInfo.Goals} color='#D8E5B0' min={0} max={10} /></td>
                            <td>{periodInfo.Desc}</td>
                            <td>{periodInfo.Goals}</td>
                            <td className="grafgolo"><Progress label='' className="progbar2" value={periodInfo.Goals} color='#D8E5B0' min={0} max={10} /></td>
                        </tr>
                    );
                }
            });


            // ------------------------------------------

            return (
                <div className='container-fluid'>

                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 className='titulo'>{matchInfo.homeTeam} vs {matchInfo.awayTeam}</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='conteudo'>
                                <hr className='linha' />
                                <hr className='linha2' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='data'>
                                {matchInfo.date} ({matchInfo.hour})
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='conf'>
                                Confronto Directo - Últimos
                            </div>
                        </div>
                    </div>
                    <div className='row pad'>
                        <div className='col-sm-12'>
                            <div className='ola'>
                                <div className='imagem'>
                                    <img src={'/imgs/teams/' + matchInfo.homeTeam + '.png'} width='65%' />
                                    <div className='equipa'>
                                        {matchInfo.homeTeam}
                                    </div>
                                </div>
                                <div className='grafico2'>
                                    <TeamResultsChart id='teamResultsChart' result={resultsBetweenTeams} />
                                </div>
                                <div className='imagem2'>
                                    <img src={'/imgs/teams/' + matchInfo.awayTeam + '.png'} width='65%' />
                                    <div className='equipa'>
                                        {matchInfo.awayTeam}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <Menu tableContent={goalMomentsHome} goalsHomeChartData={matchInfo.nextGameStats.goalsHome} goalsAwayChartData={matchInfo.nextGameStats.goalsAway} />
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>FIM</h2>
                            <h2 className='titulo'>{matchInfo.homeTeam} vs {matchInfo.awayTeam}</h2>
                            <p>{matchInfo.competition}</p>
                            <p>{matchInfo.date} ({matchInfo.hour})</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Home Scores</h2>
                            {homeScores}
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Away Scores</h2>
                            {awayScores}
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Games Between Teams</h2>
                            {gamesBetweenTeams}
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>General Table</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Equipa</th>
                                        <th>Pontos</th>
                                        <th>Jogos</th>
                                        <th>Vitórias</th>
                                        <th>Empates</th>
                                        <th>Derrotas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {generalTable}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Home</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Global</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {goalsHome}
                                </tbody>
                            </table>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Away</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Global</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {goalsAway}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Home Road</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Global</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {homeRoad}
                                </tbody>
                            </table>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Away Road</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Global</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awayRoad}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Home Table</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Equipa</th>
                                        <th>Pontos</th>
                                        <th>Jogos</th>
                                        <th>Vitórias</th>
                                        <th>Empates</th>
                                        <th>Derrotas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {homeTable}
                                </tbody>
                            </table>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Away Table</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Equipa</th>
                                        <th>Pontos</th>
                                        <th>Jogos</th>
                                        <th>Vitórias</th>
                                        <th>Empates</th>
                                        <th>Derrotas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awayTable}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Home</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Golos</th>
                                        <th>Periodo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {homePeriodGoals}
                                </tbody>
                            </table>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Away</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Golos</th>
                                        <th>Periodo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awayPeriodGoals}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Home</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Resultado</th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {homeResultsHome}
                                </tbody>
                            </table>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Away</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Resultado</th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awayResultsAway}
                                </tbody>
                            </table>
                        </div>
                    </div>




                </div>
            );
        }
    }
}

export default MatchInfo;