import React, {Component} from 'react';

class Header extends Component {
    constructor(){
        super();

        this.state = {}
    }

    render(){
        return(
            <header className='header'>
                <h1 className='head-task'>TASK LIST</h1>
                
            </header>
        );
    }
}


export default Header;