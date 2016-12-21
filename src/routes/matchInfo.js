import React from 'react';
import MatchInfoStore from '../stores/MatchInfoStore';
import MatchInfoActions from '../actions/MatchInfoActions';

import {
    Row,
    Col,
    Panel,
    PanelBody,
    PanelContainer,
} from '@sketchpixy/rubix';

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
                    <div>
                        <p>{game.HomeTeam} {game.Result} {game.AwayTeam}</p>
                    </div>
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

            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='titulo'>{matchInfo.homeTeam} vs {matchInfo.awayTeam}</h2>
                            <p>{matchInfo.competition}</p>
                            <p>{matchInfo.date} ({matchInfo.hour})</p>
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