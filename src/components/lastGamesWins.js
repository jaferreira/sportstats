


import React from 'react';

class LastGamesWins extends React.Component {


    render() {

        let wins = this.props.wins.map((win, index) => {
            if (win == 0)
                return (
                    <p className='win'>V</p>
                );
            else if (win == 1)
                return (
                    <p className='emp'>E</p>
                );
            else if (win == 2)
                return (
                    <p className='los'>D</p>
                );
            else
                return (
                    <p></p>
                );
        });

        return (
            <div className='resultados'>
                {wins}
            </div>);
    }
}


export default LastGamesWins;