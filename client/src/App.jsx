import React from 'react';
import Topbar from './components/Topbar.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home"
        }
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }
    openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      } 
    render() {
        return (
            <div>
                <Topbar open={this.openNav} close={this.closeNav}>Hello world</Topbar>
            </div>
        );
    }
}

export default App;