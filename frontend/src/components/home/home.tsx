import React from 'react';
import LeaguesTable from './leaguesTable';
import {Navbar} from './navbar';

class Home extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <p>My Leagues</p>
                </div>
                <div className='row'>
                    <div className='col-xs-9'>
                        <LeaguesTable></LeaguesTable>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;