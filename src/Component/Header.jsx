import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
    
        return (
           <div className ="header-nav">
                <div className="header-menu-left">
                   <Link to={`/`}> <p>Homepage</p> </Link>
                </div>
                <div className="header-menu-right">
                    <p>Credit: <CurrencyFormat value={this.props.credit} displayType={'text'} thousandSeparator={true} prefix={'Rp '} renderText={value => <div>{value}</div>} /></p>
                </div>
           </div>
        );
    }
}


  export default Header