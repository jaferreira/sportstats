import React, { Component } from 'react';

class Game extends Component {
    constructor(props, context) {
        super(props, context);


        console.log(props);
    };

    render() {
        return (
            <div>
                <a href='/teams/livestats/ {this.state.game.HomeTeam}'>
                    {this.props.gameInfo.homeTeam}vs {this.props.gameInfo.awayTeam}
                </a>

                <hr className='separar' />
            </div>


        );
    }

    componentWillMount() {
        console.log('========g==================================== componentWillMount ===============================');
    }

    // componentDidMount() {
    //   console.log('============================================ componentWillUpdate ===============================');
    // }

    componentWillReceiveProps(nextProps) {
        console.log('============g================================ componentWillReceiveProps ===============================');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('===========g================================= shouldComponentUpdate ===============================');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('===============g============================= componentWillUpdate ===============================');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('===============g============================= componentDidUpdate ===============================');
    }

    componentWillUnmount() {
        console.log('===============g============================= componentWillUnmount ===============================');
    }
}



export default Game;