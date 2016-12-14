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
                    {this.props.gameInfo.HomeTeam} vs {this.props.gameInfo.AwayTeam}
                </a>

                <hr className='separar' />
            </div>

            
        );
    }
}

export default Game;