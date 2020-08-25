import React from 'react';
import Container from '@material-ui/core/Container';
import './landing-page.css';
import Navigation from '../navigation/navigation';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Container maxWidth="sm">
            <Navigation />
            <div name="content">“For instance, on the planet Earth, 
            man had always assumed that he was more intelligent 
            than dolphins because he had achieved so much—the wheel, 
            New York, wars and so on—whilst all the dolphins had ever 
            done was muck about in the water having a good time. 
            But conversely, the dolphins had always believed that 
            they were far more intelligent than man—for precisely the same reasons.”
            ― Douglas Adams, The Hitchhiker's Guide to the Galaxy</div>
            </Container>
    }
}

export default LandingPage;