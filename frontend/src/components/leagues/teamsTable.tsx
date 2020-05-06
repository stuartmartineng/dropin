import React from 'react';

class TeamsTable extends React.Component{
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
                        <th>Team Name</th>                    
                        <th>Owner</th>
                        <th>Players</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>My Team</td>
                            <td>Stuart Martin</td>
                            <td>6</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TeamsTable;