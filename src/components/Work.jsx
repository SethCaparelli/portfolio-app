import React, { Component } from "react"
import Modal from "react-responsive-modal"
import Lightbox from 'react-image-lightbox'

class Work extends Component {
    constructor() {
        super()
        this.state = {
            openUpdate: false,
            openDelete: false,
            openApp: false,
            isOpen: false,
            photoIndex: 0
        }
    }

    updateWork = (event) => {
        const url = `https://aqueous-dusk-19159.herokuapp.com/${this.props.work.type}/${this.props.work.id}`
        event.preventDefault()
        const data = {
            name: this.nameInput.value,
            material: this.materialInput.value,
            url: this.urlInput.value,
            type: this.props.work.type
        }
        fetch(url, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if(response.status === 200) {
                this.setState({
                    openUpdate: false
                })
            }
        })
        .catch(error => console.log(error))
    }

    deleteWork = () => {
        const url = `https://aqueous-dusk-19159.herokuapp.com/${this.props.work.type}/${this.props.work.id}`
        fetch(url, {
            method: "DELETE"
        })
        .then(response => {
            if(response.status === 204) {
                this.setState({
                    openDelete: false
                })
            }
        })
    }

    onOpenUpdateModal = () => {
        this.setState({ openUpdate: true });
      }

    onCloseUpdateModal = () => {
        this.setState({ openUpdate: false });
    }

    onOpenDeleteModal = () => {
        this.setState({ openDelete: true });
      }

    onCloseDeleteModal = () => {
        this.setState({ openDelete: false });
    }

    onOpenAppModal = () => {
        this.setState({ openApp: true });
      }

    onCloseAppModal = () => {
        this.setState({ openApp: false });
    }

    render(){
        const images = this.props.collection.map(work => {
            return work.url
        })
        const captions = this.props.collection.map(work => {
            return work.material
        })
        const titles = this.props.collection.map(work => {
            return work.name
        })
        const { isOpen, photoIndex } = this.state
        const { openUpdate } = this.state
        const { openDelete } = this.state
        const { openApp } = this.state

        if(this.props.work.type === "app") {
            return (
               <div className="work">
                    <small id="work-title">{this.props.work.name}</small>
                    <img src={this.props.work.url} alt="work" id="work-img" onClick={() => this.setState({ openApp: true })} />
                    <Modal classNames={{ overlay: 'app-overlay', modal: 'app-modal' }} open={openApp} onClose={this.onCloseAppModal} little>
                        <img id="app-gif" src={this.props.work.url} alt="app-gif"/>
                        <div id="tech-icon-container">
                            {this.props.work.technologies.map(tech => <img className="tech-icon" key={tech} src={tech} alt="tech" />)}
                        </div>
                        <p id="app-description">{this.props.work.description}</p>
                        <div id="app-button-container">
                            <button id="code-button" className="app-button" onClick={() => window.open(this.props.work.code, "_blank")}>See Code</button>
                            {this.props.work.site !== "" ? <button id="site-button" className="app-button" onClick={() => window.open(this.props.work.site, "_blank")}>Visit Site</button> : ""}
                        </div>
                    </Modal>
               </div>
            )
        } else {
            return (
                <div className="work">
                    <small id="work-title">{this.props.work.name}</small>
                    <div>
                        <img id="work-img" onClick={() => this.setState({ isOpen: true, photoIndex: this.props.index })} src={this.props.work.url} alt="work"/>
                        {isOpen && (
                        <Lightbox
                            imageTitle={titles[photoIndex]}
                            imageCaption={captions[photoIndex]}
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                            }
                        />
                        )}
                    </div>
                    <Modal classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }} open={openUpdate} onClose={this.onCloseUpdateModal} little>
                        <h2>Update</h2>
                        <form ref={(input) => {this.updateForm = input}} onSubmit={(e) => {this.updateWork(e)}} id="update-form">
                            <div className="input" id="name-input">
                                <label htmlFor="name">Name</label>
                                <input ref={(i) => {this.nameInput = i}} type="text" placeholder={this.props.work.name}/>
                            </div>
                            <div className="input" id="material-input">
                                <label htmlFor="material">Material</label>
                                <input ref={(i) => {this.materialInput = i}} type="text"/>
                            </div>
                            <div className="input" id="url-input">
                                <label htmlFor="url">Picture URL</label>
                                <input ref={(i) => {this.urlInput = i}} type="text"/>
                            </div>
                            <input type="submit"/>
                        </form>
                    </Modal>
                    <Modal classNames={{ overlay: 'custom-overlay-2', modal: 'custom-modal-2' }} open={openDelete} onClose={this.onCloseDeleteModal} little>
                        <h3 id="delete-modal-header">Are you sure you want to delete {this.props.work.name}?</h3>
                        <div id="delete-buttons">
                            <button onClick={this.deleteWork}>YES</button>
                            <button onClick={this.deleteWork}>NO</button>
                        </div>
                    </Modal>
                </div>
            )
        }
    }
}

export default Work
