import React, { Component } from "react"

class Footer extends Component {
    render(){
        return(
            <footer>
                <small>&copy; Seth Caparelli 2018</small>
                <div id="social-links">
                    <a href="https://www.linkedin.com/in/seth-caparelli/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://soundcloud.com/bear_remington" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-soundcloud"></i>
                    </a>
                </div>
            </footer>
        )
    }
}
export default Footer