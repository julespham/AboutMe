import React from 'react';
import './navigation.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function TitleLists(props) {
    const titles = props.titles;
    const listTitles = titles.map((title) => 
        <li style={{ color: 'white' }} key={title}>
            <Link to= {"/" + title}>{title}</Link>
        </li>
    );
    return (
        <ul>{listTitles}</ul>
    );
}

class Navigation extends React.Component {
    titles = ["Home","Projects", "Blog"];
 
    render() {
      return (
        <Router>
        <div>
          <nav>
         <TitleLists titles={this.titles} />
         </nav>
         </div>
         </Router>
      )
    }
    
}

export default Navigation;
