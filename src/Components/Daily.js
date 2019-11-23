import React, {Component} from 'react';

class Daily extends Component {
    constructor(){
        super();

        this.state = {
            entry: []
        }
    }

    render(){
        return(
            <div>
                <div>
                    <button>COMPLETE</button>
                    <input type="text"/>
                </div>
                <button>Add Day to Index</button>
            </div>
        )
    }
}

export default Daily;

