import React, { Component } from "react"
import Modal from "react-responsive-modal"

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            openAbout: false,
            openResume: false,
            openContact: false,
        }
    }

    onOpenAboutModal = () => {
        this.setState({ openAbout: true });
      }

    onCloseAboutModal = () => {
        this.setState({ openAbout: false });
    }

    onOpenResumeModal = () => {
        this.setState({ openResume: true });
      }

    onCloseResumeModal = () => {
        this.setState({ openResume: false });
    }

    render(){
        const { openAbout } = this.state
        const { openResume } = this.state
        return(
            <div id="nav">
                <a href="mailto:sethcaparelli@gmail.com">
                    <h5 onClick={this.onOpenContactModal} className="nav-target">Contact</h5>
                </a>
                <h5 onClick={this.onOpenAboutModal} className="nav-target">About</h5>
                <h5 onClick={this.onOpenResumeModal} className="nav-target">Resume</h5>
                <Modal classNames={{ overlay: 'about-overlay', modal: 'about-modal' }} open={openAbout} onClose={this.onCloseAboutModal} little>
                    <img id="profile-picture" src="/assets/icons/profile.png" alt="/assets/icons/camera-logo.png"/>
                    <p id="about-description">I am an artist turned web developer. I have always loved building with my hands; but as a programmer, my mind
                    is my tool of choice.  The passion I have as an artist has transformed into creative problem solving in the form of code.
                    Bridging the gap between art and code is something I continually think about and to actually make an impact on the world with my work is what drives me.
                    I embrace the challenges of this industry and its constant evolution that I am excited to be apart of.</p>
                </Modal>
                <Modal classNames={{ overlay: 'resume-overlay', modal: 'resume-modal' }} open={openResume} onClose={this.onCloseResumeModal} little>
                    <img id="resume" src="/assets/seth_capareli_resume.png" alt="resume"/>
                    <a href="https://drive.google.com/file/d/1rZ_xxq5kBboSFmpk2UEtfGwEuFhFw7fi/view?usp=sharing" target="_blank">
                        <i className="fas fa-download"></i>
                    </a>
                </Modal>
            </div>
        )
    }
}

export default Nav
