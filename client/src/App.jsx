import React from 'react';
import Banner from './components/Banner.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Banner />
                Welcome to Lee Gaming and Media!
            </div>
        );
    }
}

export default App;