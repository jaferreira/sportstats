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



class MyPanel extends React.Component {
    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="home">
                <Panel className='cor'>
                    <PanelHeader className='bg-palegreen fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="home">
                                Casa
                            </NavItem>
                            <NavItem eventKey="user">
                                Fora
                            </NavItem>
                            <NavItem eventKey="cog">
                                Confronto Directo
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="home">
                                            <p>Gráfico</p>
                                            <p>últimos jogos em casa do HomeTeam</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="user">
                                            <p>Gráfico</p>
                                            <p>últimos jogos fora do HomeTeam</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelTabContainer>
        );
    }
}
class MyPanel2 extends React.Component {
    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="home">
                <Panel className='cor'>
                    <PanelHeader className='bg-palegreen fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="home">
                                Casa
                            </NavItem>
                            <NavItem eventKey="user">
                                Fora
                            </NavItem>
                            <NavItem eventKey="cog">
                                Confronto Directo
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="home">
                                            <p>Gráfico</p>
                                            <p>últimos jogos em casa do AwayTeam</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="user">
                                            <p>Gráfico</p>
                                            <p>últimos jogos fora do AwayTeam</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="cog">
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                            <tr>
                                                                <td className=''>29/12/16</td>
                                                                <td className=''>Taça da Liga</td>
                                                                <td className='result'>Braga</td>
                                                                <td className=''>Rio Ave</td>
                                                                <td className='result'>1-2</td>
                                                            </tr>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelTabContainer>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-normal-tab' defaultActiveKey="home">
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
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                    <div className='ola'>
                                                        <div className='ultimos'>
                                                            <p className='ult'>Últimos 5 Jogos</p>
                                                        </div>
                                                        <div className='ultimos'>
                                                            <p className='prox'>Próximos 5 Jogos</p>
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
                                                            <p className='win'>V</p>
                                                            <p className='los'>D</p>
                                                            <p className='emp'>E</p>
                                                            <p className='win'>V</p>
                                                            <p className='emp'>E</p>
                                                        </div>
                                                        <div className='resultados'>
                                                            <p className='win'>V</p>
                                                            <p className='los'>D</p>
                                                            <p className='emp'>E</p>
                                                            <p className='win'>V</p>
                                                            <p className='emp'>E</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                    <div className='ola'>
                                                        <div className='estilo1 padr'>
                                                            <MyPanel />
                                                        </div>
                                                        <div className='estilo1'>
                                                            <MyPanel2 />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                    <p className='golos'> Golos </p>
                                                    <hr className='goloslinha'></hr>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-12'>
                                                    <div className='ola'>
                                                        <div className='ultimos'>
                                                            <p className='ult'>Primeira Liga</p>
                                                        </div>
                                                        <div className='ultimos'>
                                                            <p className='prox'>Últimos 10 Jogos</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
                    </PanelBody>
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
    }

    componentWillUnmount() {
        MatchInfoStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {

    }

    onChange(state) {
        console.log(state);
        this.setState(state);
    }

    render() {
        let isLoading = (this.state.matchInfo.homeTeam) ? false : true;

        if (isLoading) {
            return (<div><h1>Is Loading</h1></div>);
        }
        else {
            let matchInfo = this.state.matchInfo;
            console.log(matchInfo.nextGameStats);
            let gamesBetweenTeams = matchInfo.nextGameStats.gamesBetweenTeams.map((game, index) => {
                return (
                    <tr>
                        <td>{game.Date}</td>
                        <td>{game.Competicion}</td>
                        <td>{game.HomeTeam}</td>
                        <td>{game.AwayTeam}</td>
                        <td>{game.Result}</td>
                    </tr>
                );
            });

            let homeScores = matchInfo.nextGameStats.homeScores.slice(0,5).map((game, index) => {
                return (
                    <tr>
                        <td>{game.Date}</td>
                        <td>{game.Competicion}</td>
                        <td>{game.HomeTeam}</td>
                        <td>{game.AwayTeam}</td>
                        <td>{game.Result}</td>
                    </tr>
                );
            });

            let awayScores = matchInfo.nextGameStats.awayScores.slice(0,5).map((game, index) => {
                return (
                    <tr>
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
                    <tr>
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
                    <tr>
                        <td>{goals.Desc}</td>
                        <td>{goals.Global}</td>
                        <td>{goals.Home}</td>
                        <td>{goals.Away}</td>
                    </tr>
                );
            });

            let goalsAway = matchInfo.nextGameStats.goalsAway.map((goals, index) => {
                return (
                    <tr>
                        <td>{goals.Desc}</td>
                        <td>{goals.Global}</td>
                        <td>{goals.Home}</td>
                        <td>{goals.Away}</td>
                    </tr>
                );
            });

            let homeRoad = matchInfo.nextGameStats.homeRoad.map((road, index) => {
                return (
                    <tr>
                        <td>{road.Desc}</td>
                        <td>{road.Global}</td>
                        <td>{road.Home}</td>
                        <td>{road.Away}</td>
                    </tr>
                );
            });

            let awayRoad = matchInfo.nextGameStats.awayRoad.map((road, index) => {
                return (
                    <tr>
                        <td>{road.Desc}</td>
                        <td>{road.Global}</td>
                        <td>{road.Home}</td>
                        <td>{road.Away}</td>
                    </tr>
                );
            });

            let homeTable = matchInfo.nextGameStats.homeTable.map((classification, index) => {
                return (
                    <tr>
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
                    <tr>
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
                    <tr>
                        <td>{periodInfo.Desc}</td>
                        <td>{periodInfo.Goals}</td>
                        <td>{periodInfo.Period}</td>
                    </tr>
                );
            });

            let awayPeriodGoals = matchInfo.nextGameStats.awayPeriodGoals.map((periodInfo, index) => {
                return (
                    <tr>
                        <td>{periodInfo.Desc}</td>
                        <td>{periodInfo.Goals}</td>
                        <td>{periodInfo.Period}</td>
                    </tr>
                );
            });


            let homeResultsHome = matchInfo.nextGameStats.homeResultsHome.map((result, index) => {
                return (
                    <tr>
                        <td>{result.Result}</td>
                        <td>{result.Percent}</td>
                    </tr>
                );
            });

            let awayResultsAway = matchInfo.nextGameStats.awayResultsAway.map((result, index) => {
                return (
                    <tr>
                        <td>{result.Result}</td>
                        <td>{result.Percent}</td>
                    </tr>
                );
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
                                    Gráfico Confronto Directo
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
                            <Menu />
                        </div>
                    </div>
                    <div className='row pad2'>
                        <div className='col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className='ola'>
                                        <div className='ultimos'>
                                            <p className='ult'>Últimos 5 Jogos</p>
                                        </div>
                                        <div className='ultimos'>
                                            <p className='prox'>Próximos 5 Jogos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <p className='golos'> Golos </p>
                                    <hr className='goloslinha'></hr>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className='ola'>
                                        <div className='ultimos'>
                                            <p className='ult'>Primeira Liga</p>
                                        </div>
                                        <div className='ultimos'>
                                            <p className='prox'>Últimos 10 Jogos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>




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