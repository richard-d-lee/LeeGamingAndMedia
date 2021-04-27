import React from 'react';
import Sidebar from './components/Sidebar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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
                <div className="topbar">
                    <Sidebar open={this.openNav} close={this.closeNav}/>
                    <div className="banner">
                        Welcome to Lee Gaming and Media!
                    </div>
                    <label className="login">
                        login
                    </label>
                </div>
            </div>
        );
    }
}

export default App;