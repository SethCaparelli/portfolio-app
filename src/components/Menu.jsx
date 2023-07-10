import React, { Component } from "react"

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        }
    }

    changeCactus = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon-color.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeBackCactus = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeTree = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon-color.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeBackTree = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeSculpture = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon-color.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeBackSculpture = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeVessel = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon-color.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeBackVessel = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changePainting = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon-color.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeBackPainting = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeAdvertising = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon-color.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeBackAdvertising = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeDesign = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon-color.png"
            }
        })
    }

    changeBackDesign = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    changeApp = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon-color.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon-color.png"
            }
        })
    }

    changeBackApp = () => {
        this.setState({
            image: {
                app: "/assets/icons/app-icon.png",
                cactus: "/assets/icons/cactus-icon.png",
                tree: "/assets/icons/tree-icon.png",
                sculpture: "/assets/icons/sculpture-icon.png",
                vessel: "/assets/icons/vessel-icon.png",
                painting: "/assets/icons/painting-icon.png",
                advertising: "/assets/icons/advertising-icon.png",
                design: "/assets/icons/design-icon.png"
            }
        })
    }

    render(){
        return(
            <div id="menu">
                    <img onMouseEnter={this.changeApp} 
                        onMouseLeave={this.changeBackApp} 
                        className="icon-image" id="app-icon" 
                        src={this.state.image.app} alt="menu-item" 
                        onClick={this.props.getApp} />
                    <img onMouseEnter={this.changeCactus} 
                        onMouseLeave={this.changeBackCactus} 
                        className="icon-image" id="cactus-icon" 
                        src={this.state.image.cactus} alt="menu-item" 
                        onClick={this.props.getCactus} />
                    <img onMouseEnter={this.changeTree} 
                        onMouseLeave={this.changeBackTree} 
                        className="icon-image" id="tree-icon" 
                        src={this.state.image.tree} alt="menu-item" 
                        onClick={this.props.getTree} />
                    <img onMouseEnter={this.changeSculpture} 
                        onMouseLeave={this.changeBackSculpture} 
                        className="icon-image" id="sculpture-icon" 
                        src={this.state.image.sculpture} alt="menu-item" 
                        onClick={this.props.getSculpture} />
                    <img onMouseEnter={this.changeVessel} 
                        onMouseLeave={this.changeBackVessel} 
                        className="icon-image" id="vessel-icon" 
                        src={this.state.image.vessel} alt="menu-item" 
                        onClick={this.props.getVessel} />
                    <img onMouseEnter={this.changePainting} 
                        onMouseLeave={this.changeBackPainting} 
                        className="icon-image" id="painting-icon" 
                        src={this.state.image.painting} alt="menu-item" 
                        onClick={this.props.getPainting} />
                    <img onMouseEnter={this.changeAdvertising} 
                        onMouseLeave={this.changeBackAdvertising} 
                        className="icon-image" id="advertising-icon" 
                        src={this.state.image.advertising} alt="menu-item" 
                        onClick={this.props.getAdvertising} />
                    <img onMouseEnter={this.changeDesign} 
                        onMouseLeave={this.changeBackDesign} 
                        className="icon-image" id="design-icon" 
                        src={this.state.image.design} alt="menu-item" 
                        onClick={this.props.getDesign} />
            </div>
        )
    }
}


export default Menu