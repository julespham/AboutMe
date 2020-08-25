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
            Hello
            <Navigation />
            </Container>
    }
}

export default LandingPage;