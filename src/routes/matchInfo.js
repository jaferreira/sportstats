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
import ResultsChart from '../components/resultsChart'
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
                                            <tr className="padtr">
                                                <td> Vitórias </td>
                                                <td className='dir'> X </td>
                                            </tr>

                                            <tr className="padtr">
                                                <td> Empates </td>
                                                <td className='dir'> X </td>
                                            </tr>
                                            <tr className="padtr">
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
                                            <tr className="padtr">
                                                <td> Vitórias </td>
                                                <td className='dir'> X </td>
                                            </tr>

                                            <tr className="padtr">
                                                <td> Empates </td>
                                                <td className='dir'> X </td>
                                            </tr>
                                            <tr className="padtr">
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
                                <Col sm={12}>
                                    <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>
                  <NavItem eventKey="home">Casa</NavItem>
                                    <NavItem eventKey="user">Global</NavItem>
                                    <NavItem eventKey="home">Fora</NavItem>
                                    <NavItem eventKey="user">Global</NavItem>
                </Nav>
                                <Tab.Content>
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
        </Panel>
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
        var homeGoals = [
            { x: 'Média de golos marcados por jogo', y: 5 },
            { x: 'Média de golos sofridos por jogo', y: 1 },
            { x: 'Média de golos marcados+sofridos', y: 3 }
        ];

        var awayGoals = [
            { x: 'Média de golos marcados por jogo', y: 3 },
            { x: 'Média de golos sofridos por jogo', y: 1 },
            { x: 'Média de golos marcados+sofridos', y: 2 }
        ];

        var globalGoals = [
            { x: 'Média de golos marcados por jogo', y: 3 },
            { x: 'Média de golos sofridos por jogo', y: 2 },
            { x: 'Média de golos marcados+sofridos', y: 3 }
        ];

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
                            <Row>
                                <Col xs={12}>
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
                                                        <Row>
                                                            <Col sm={12}>
                                                                <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>

                                                                        <NavItem eventKey="home" className='col-sm-6 botao1'>Últimos 5 Jogos</NavItem>

                                                                <NavItem eventKey="user" className='col-sm-6 botao2'>Próximos 5 Jogos</NavItem>
                                         
                                                                    </Nav>

               
                                                            <Tab.Content>
                                                                <Tab.Pane eventKey="home">
                                                                    <div className='row'>
                                                                        <div className='col-sm-12'>
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='result'>1-0</td>
                                                                                    </tr>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-sm-12'>
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='result'>1-0</td>
                                                                                    </tr>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-sm-12'>
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='result'>1-0</td>
                                                                                    </tr>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-sm-12'>
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='result'>1-0</td>
                                                                                    </tr>
                                                                                </div>
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
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='result'>1-0</td>
                                                                                    </tr>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-sm-12'>
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='result'>1-0</td>
                                                                                    </tr>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className='row'>
                                                                        <div className='col-sm-12'>
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='result'>1-0</td>
                                                                                    </tr>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>

                                                            </Tab.Content>
             </Col>
           </Row>
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
                                                <p className='golos'> Golos </p>
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
                                                                            <GoalsChart id='goals1' home={homeGoals} away={awayGoals} global={globalGoals} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goals2' home={homeGoals} away={awayGoals} global={globalGoals} />
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
                                                                            <GoalsChart id='goals3' home={homeGoals} away={awayGoals} global={globalGoals} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goals4' home={homeGoals} away={awayGoals} global={globalGoals} />
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
                                                                            <GameTimeGoalsChart id='goals5' home={homeGoals} away={awayGoals} global={globalGoals} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GameTimeGoalsChart id='goals6' home={homeGoals} away={awayGoals} global={globalGoals} />
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
                                                                            <GoalsChart id='goals7' home={homeGoals} away={awayGoals} global={globalGoals} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goals8' home={homeGoals} away={awayGoals} global={globalGoals} />
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
                                                                            <GoalsChart id='goals9' home={homeGoals} away={awayGoals} global={globalGoals} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GoalsChart id='goals10' home={homeGoals} away={awayGoals} global={globalGoals} />
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
                                                                            <GameTimeGoalsChart id='goals11' home={homeGoals} away={awayGoals} global={globalGoals} />
                                                                        </div>
                                                                    </div>
                                                                    <div className='graf'>
                                                                        <div className='graf1'>
                                                                            <GameTimeGoalsChart id='goals12' home={homeGoals} away={awayGoals} global={globalGoals} />
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
                                        <div className='col-sm-12'>
                                            <div className='ola'>
                                                <div className='casa'></div>Casa
                                                            <div className='fora'></div>Fora
                                                            <div className='global'></div>Global
                                                    </div>
                                        </div>
                                    </div>

                                    <div className="row">
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
                                                <Row>
                                                    <Col sm={12} className="sempad">
                                                        <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>
                                                                <NavItem eventKey="home">Nesta Competição</NavItem>
                                                        <NavItem eventKey="user">Últimos 10 Jogos</NavItem>
                                                            </Nav>
                                    
                                                    <Tab.Content>
                                                        <Tab.Pane eventKey="home">
                                                            <div className='row'>
                                                                <div className='col-sm-12 ola2'>
                                                                    <div className='padr'>
                                                                        <HomeTeamResultPanel/>
                                                                         </div>
                                                           
                                                                            <HomeTeamResultPanel/>
                                                                        </div>
                                                                </div>
                                                         
                                                        </Tab.Pane>
                                                        <Tab.Pane eventKey="user">
                                                            <div className='row'>
                                                                <div className='col-sm-12'>
                                                                    <div className='ola'>
                                                                        Últimos 10 Jogos_ Casa Global
                                                                        </div>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-sm-12'>
                                                                    <div className='ola'>
                                                                        Últimos 10 Jogos_ Fora Global
                                                                        </div>
                                                                </div>
                                                            </div>


                                                        </Tab.Pane>
                                                    </Tab.Content>
                                                        </Col>
                                                    </Row>
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
                                </Col>
                            </Row>
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
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="user">
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
                                            <HomeTab id='h1' />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="global">
                                            <AwayTab id='a1' />
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
                                            <tr className="padtr">
                                                <td> Vitórias </td>
                                                <td className='dir'> X </td>
                                            </tr>

                                            <tr className="padtr">
                                                <td> Empates </td>
                                                <td className='dir'> X </td>
                                            </tr>
                                            <tr className="padtr">
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
                                            <tr className="padtr">
                                                <td> Vitórias </td>
                                                <td className='dir'> X </td>
                                            </tr>

                                            <tr className="padtr">
                                                <td> Empates </td>
                                                <td className='dir'> X </td>
                                            </tr>
                                            <tr className="padtr">
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
                            <td className="grafgolo"><Progress label='' value={periodInfo.Goals} color='#EBA068' min={0} max={10} /></td>
                            <td rowSpan="2">{periodInfo.Period}</td>
                            <td>{periodInfo.Desc}</td>
                            <td>{periodInfo.Goals}</td>
                            <td className="grafgolo"><Progress label='' value={periodInfo.Goals} color='#EBA068' min={0} max={10} /></td>

                        </tr>
                    );
                }
                else {
                    return (
                        <tr>
                            <td>{periodInfo.Desc}</td>
                            <td>{periodInfo.Goals}</td>
                            <td className="grafgolo"><Progress label='' value={periodInfo.Goals} color='#EBA068' min={0} max={10} /></td>
                            <td>{periodInfo.Desc}</td>
                            <td>{periodInfo.Goals}</td>
                            <td className="grafgolo"><Progress label='' value={periodInfo.Goals} color='#EBA068' min={0} max={10} /></td>
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
                            <Menu tableContent={goalMomentsHome} />
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