import React from 'react';
import Container from '@material-ui/core/Container';
import './landing-page.css';

import Typed from 'typed.js';
import Girl from '../images/girl.jpg';

class LandingPage extends React.Component {
    
    adjectives =  [
        " ", "creative", "collaborative", "gregarious", ""
    ]



    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }    

    changeAdjective() {
        this.setState({index: (this.state.index + 1) % this.adjectives.length});
    }

     componentDidMount() {
        this.typed = new Typed('#typedAdjectives', {
            strings: this.adjectives,
            typeSpeed: 100,
            backSpeed: 50
        });
    }

    render() {
        return (
            <Container maxWidth="sm">
            <div className="contents">
                <div>
                    <div>I am a <span id="typedAdjectives"> </span> <span id="title">Software Engineer</span>
                </div>
            </div>
            <img id="girl" src={Girl}/>
            </div>
            </Container>
        );}
}

export default LandingPage;
