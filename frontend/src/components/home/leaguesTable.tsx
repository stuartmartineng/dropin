import React from 'react';

class LeaguesTable extends React.Component{
    constructor(props: any){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <th>League Name</th>                    
                        <th>Owner</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hard Coded League</td>
                            <td>Stuart Martin</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default LeaguesTable;