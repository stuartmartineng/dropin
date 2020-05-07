import React from 'react';

class TeamsTable extends React.Component{
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Team Name</th>                    
                            <th>Owner</th>
                            <th>Players</th>
                        </tr>
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