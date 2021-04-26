import React from 'react';
import Banner from './components/Banner.jsx';

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
      
      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      } 
    render() {
        return (
            <div>
                Welcome to Lee Gaming and Media!
                <Banner open={this.openNav} close={this.closeNav}/>
            </div>
        );
    }
}

export default App;