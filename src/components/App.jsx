import React, { Component } from "react"
import Header from "./Header"
import Work from "./Work"
import Menu from "./Menu"
import Footer from "./Footer"
import Modal from "react-responsive-modal"

class App extends Component {
  constructor() {
    super()
    this.state = {
      openModal: false,
      work: [{
        name: "Fridge Vision",
        description: "A Native app that allows users to capture a photo of their fridge or pantry with their mobile device.  Fridge Vision then uses an image recognition API to create a list of ingredients. Users are then presented with recipes that they can make with the available food items they already have.",
        technologies: ["/assets/technologies/react-native-logo.png", "/assets/technologies/express-icon.png", "/assets/technologies/node-icon.png", "/assets/technologies/aws-icon.png", "/assets/technologies/postgresql-icon.png", "/assets/technologies/jest-icon.png", "/assets/technologies/knex-icon.png"],
        url: "/assets/gifs/fridge-vision.gif",
        type: "app",
        code: "https://github.com/SethCaparelli/fridge-vision",
        site: ""

      }, {
        name: "Music@",
        description: "Oauth2 connects users to their Spotify account and populates the page with their followed artists. With a click of a button, users are able to bring up the tour information from the Bands In Town Api for their favorite artists",
        technologies: ["/assets/technologies/react-icon-2.png", "/assets/technologies/html-logo.png", "/assets/technologies/css-icon.png", "/assets/technologies/bootstrap-icon.png", "/assets/technologies/node-icon.png", "/assets/technologies/cypress-icon.png"],
        url: "/assets/gifs/music.gif",
        type: "app",
        code: "https://github.com/SethCaparelli/music-app-frontend",
        site: "http://www.music-at.surge.sh"
      }, {
        name: "Cocktail=>",
        description: "An app that allows users to search for cocktails based off name, ingredient, or random. It then prompts users to search for the corresponding recipe.",
        technologies: ["/assets/technologies/react-icon-2.png", "/assets/technologies/html-logo.png", "/assets/technologies/css-icon.png", "/assets/technologies/bootstrap-icon.png", "/assets/technologies/cypress-icon.png"],
        url: "/assets/gifs/cocktail.gif",
        type: "app",
        code: "https://github.com/SethCaparelli/cocktail-app-react",
        site: "http://www.cocktail.surge.sh"
      }],
      workTitle: "Apps"
    }
  }

  addWork = (event) => {
    const url = `https://aqueous-dusk-19159.herokuapp.com/${this.state.work[0].type}`
    event.preventDefault()
    const data = {
        name: this.nameInput.value,
        material: this.materialInput.value,
        url: this.urlInput.value,
        type: this.state.work[0].type,
    }
    fetch(url, {
        method: "Post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if(response.status === 201) {
            this.setState({
                openModal: false
            })
        }
    })
  }

  onOpenModal = () => {
    this.setState({ openModal: true });
  }

  onCloseModal = () => {
      this.setState({ openModal: false });
  }

  getApp = () => {
    this.setState({
      work: [{
        name: "Fridge Vision",
        description: "A Native app that allows users to capture a photo of their fridge or pantry with their mobile device.  Fridge Vision then uses an image recognition API to create a list of ingredients. Users are then presented with recipes that they can make with the available food items they already have.",
        technologies: ["/assets/technologies/react-native-logo.png", "/assets/technologies/express-icon.png", "/assets/technologies/node-icon.png", "/assets/technologies/aws-icon.png", "/assets/technologies/postgresql-icon.png", "/assets/technologies/jest-icon.png", "/assets/technologies/knex-icon.png"],
        url: "/assets/gifs/fridge-vision.gif",
        type: "app",
        code: "https://github.com/SethCaparelli/fridge-vision",
        site: ""

      }, {
        name: "Music@",
        description: "Oauth2 connects users to their Spotify account and populates the page with their followed artists. With a click of a button, users are able to bring up the tour information from the Bands In Town Api for their favorite artists",
        technologies: ["/assets/technologies/react-icon-2.png", "/assets/technologies/html-logo.png", "/assets/technologies/css-icon.png", "/assets/technologies/bootstrap-icon.png", "/assets/technologies/node-icon.png", "/assets/technologies/cypress-icon.png"],
        url: "/assets/gifs/music.gif",
        type: "app",
        code: "https://github.com/SethCaparelli/music-app-frontend",
        site: "http://www.music-at.surge.sh"
      }, {
        name: "Cocktail=>",
        description: "An app that allows users to search for cocktails based off name, ingredient, or random. It then prompts users to search for the corresponding recipe.",
        technologies: ["/assets/technologies/react-icon-2.png", "/assets/technologies/html-logo.png", "/assets/technologies/css-icon.png", "/assets/technologies/bootstrap-icon.png", "/assets/technologies/cypress-icon.png"],
        url: "/assets/gifs/cocktail.gif",
        type: "app",
        code: "https://github.com/SethCaparelli/cocktail-app-react",
        site: "http://www.cocktail.surge.sh"
      }],
      workTitle: "Apps"
    })
  }

  getCactus = () => {
      this.setState({
        work: [{
          url: "/assets/cactus/cactus^3_ver_1.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_1_close_1.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_1_close_2.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_2.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_2_close.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_3.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_3_close.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_4.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_5.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_5_close.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_6.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_6_close.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_7.jpg"
        }, {
          url: "/assets/cactus/cactus^3_ver_7_close.jpg"
        }],
        workTitle: "Cactus^3"
      })
  }

  getTree = () => {
      this.setState({
        work: [{
          url: "/assets/tree/reclaim_tree_ver_1.jpg"
        }, {
          url: "/assets/tree/reclaim_tree_ver_2.jpg"
        }, {
          url: "/assets/tree/reclaim_tree_ver_2_close_1.jpg"
        }, {
          url: "/assets/tree/reclaim_tree_ver_2_close_2.jpg"
        }, {
          url: "/assets/tree/reclaim_tree_ver_3.jpg"
        }, {
          url: "/assets/tree/reclaim_tree_ver_3_close.jpg"
        }],
        workTitle: "Reclaim Tree"
      })
  }

  getSculpture = () => {
    this.setState({
      work: [{
        url: "/assets/sculpture/struggling_pose.jpg"
      }, {
        url: "/assets/sculpture/head_front.jpg"
      }, {
        url: "/assets/sculpture/head_side.jpg"
      }, {
        url: "/assets/sculpture/head_right.jpg"
      }, {
        url: "/assets/sculpture/head_left.jpg"
      }, {
        url: "/assets/sculpture/head_back.jpg"
      }, {
        url: "/assets/sculpture/sky^3.jpg"
      }, {
        url: "/assets/sculpture/sky^3_close.jpg"
      }, {
        url: "/assets/sculpture/stone_hammers.jpg"
      }, {
        url: "/assets/sculpture/stone_hammers_close.jpg"
      }, {
        url: "/assets/sculpture/ring_and_container.jpg"
      }, {
        url: "/assets/sculpture/ring_and_container_close.jpg"
      }, {
        url: "/assets/sculpture/gear_postcard_front.jpg"
      }, {
        url: "/assets/sculpture/gear_postcard_back.jpg"
      }],
      workTitle: "Sculpture"
    })
  }

  getVessel = () => {
    this.setState({
      work: [{
        url: "/assets/vessel/tea_pot_1.jpg"
      }, {
        url: "/assets/vessel/tea_pot_2.jpg"
      }, {
        url: "/assets/vessel/tea_pot_3.jpg"
      }, {
        url: "/assets/vessel/tea_pot_4.jpg"
      }, {
        url: "/assets/vessel/pitcher_1.jpg"
      }, {
        url: "/assets/vessel/pitcher_2.jpg"
      }, {
        url: "/assets/vessel/cup_5.jpg"
      }, {
        url: "/assets/vessel/cup_6.jpg"
      }, {
        url: "/assets/vessel/cup_1.jpg"
      }, {
        url: "/assets/vessel/cup_2.jpg"
      }, {
        url: "/assets/vessel/cup_3.jpg"
      }, {
        url: "/assets/vessel/cup_4.jpg"
      }, {
        url: "/assets/vessel/plate_1.jpg"
      }, {
        url: "/assets/vessel/plate_2.jpg"
      }, {
        url: "/assets/vessel/plate_3.jpg"
      }, {
        url: "/assets/vessel/plate_4.jpg"
      }, {
        url: "/assets/vessel/watering_can_1.jpg"
      }, {
        url: "/assets/vessel/puzzle_plate_1.jpg"
      }, {
        url: "/assets/vessel/puzzle_plate_2.jpg"
      }],
      workTitle: "Vessel"
    })
  }

  getPainting = () => {
    this.setState({
      work: [{
        url: "/assets/painting/leaving_las_vegas.jpg"
      }, {
        url: "/assets/painting/the_future^3_installation.jpg"
      }, {
        url: "/assets/painting/the_future^3.jpg"
      }, {
        url: "/assets/painting/the_future^3_close.jpg"
      }, {
        url: "/assets/painting/tomato_soup.jpg"
      }, {
        url: "/assets/painting/happy_tree.jpg"
      }, {
        url: "/assets/painting/sad_tree.jpg"
      }, {
        url: "/assets/painting/me_jean.jpg"
      }],
      workTitle: "Painting"
    })
  }

  getAdvertising = () => {
    this.setState({
      work: [{
        url: "/assets/advertising/etch_a_sketch_1.jpg"
      }, {
        url: "/assets/advertising/etch_a_sketch_2.jpg"
      }, {
        url: "/assets/advertising/etch_a_sketch_3.jpg"
      }, {
        url: "/assets/advertising/shout_wine.jpg"
      }, {
        url: "/assets/advertising/shout_mustard.jpg"
      }, {
        url: "/assets/advertising/shout_grass.jpg"
      }, {
        url: "/assets/advertising/vans_ur_print_cover.jpg"
      }, {
        url: "/assets/advertising/vans_ur_print_1.jpg"
      }, {
        url: "/assets/advertising/vans_ur_print_2.jpg"
      }, {
        url: "/assets/advertising/vans_ur_print_3.jpg"
      }, {
        url: "/assets/advertising/gphone_1.jpg"
      }, {
        url: "/assets/advertising/gphone_2.jpg"
      }, {
        url: "/assets/advertising/gphone_3.jpg"
      }, {
        url: "/assets/advertising/best_if_used_by_1.jpg"
      }, {
        url: "/assets/advertising/best_if_used_by_2.jpg"
      }, {
        url: "/assets/advertising/best_if_used_by_3.jpg"
      }],
      workTitle: "Vessel"
    })
  }

  getPainting = () => {
    this.setState({
      work: [{
        url: "/assets/painting/leaving_las_vegas.jpg"
      }, {
        url: "/assets/painting/the_future^3_installation.jpg"
      }, {
        url: "/assets/painting/the_future^3.jpg"
      }, {
        url: "/assets/painting/the_future^3_close.jpg"
      }, {
        url: "/assets/painting/tomato_soup.jpg"
      }, {
        url: "/assets/painting/happy_tree.jpg"
      }, {
        url: "/assets/painting/sad_tree.jpg"
      }, {
        url: "/assets/painting/me_jean.jpg"
      }],
      workTitle: "Painting"
    })
  }

  getDesign = () => {
    this.setState({
      work: [{
        url: "/assets/graphic-design/surrealism_poster.jpg"
      }, {
        url: "/assets/graphic-design/nourish_1.jpg"
      }, {
        url: "/assets/graphic-design/nourish_de_muertos.jpg"
      }, {
        url: "/assets/graphic-design/spirit_thing.jpg"
      }, {
        url: "/assets/graphic-design/next_thing.jpg"
      }, {
        url: "/assets/graphic-design/lost_bulldog_poster.jpg"
      }, {
        url: "/assets/graphic-design/bobble_logo.jpg"
      }, {
        url: "/assets/graphic-design/elm_and_oak_shirt_1.jpg"
      }, {
        url: "/assets/graphic-design/elm_and_oak_shirt_2.jpg"
      }, {
        url: "/assets/graphic-design/elm_and_oak_shirt_3.jpg"
      }, {
        url: "/assets/graphic-design/elm_and_oak_shirt_4.jpg"
      }],
      workTitle: "Design"
    })
  }

  render() {
    const {openModal} = this.state
    return (
      <div className="App">
        <Header />
        <div id="work-body-container">
          <h3 id="work-header">{this.state.workTitle}</h3>
          <div className={this.state.work.length > 3 ? "work-body" : "work-body-small"}>
          {this.state.work.length > 0
            ? this.state.work.map((work, index, collection) => <Work key={work.id} index={index} collection={collection} allWork={this.state.work} work={work}/>)
            : <div id="loader-container"><div className="loader">Loading...</div></div>}
          </div>
          <Menu
            getApp={this.getApp}
            getTree={this.getTree}
            getCactus={this.getCactus}
            getSculpture={this.getSculpture}
            getVessel={this.getVessel}
            getPainting={this.getPainting}
            getAdvertising={this.getAdvertising}
            getDesign={this.getDesign}
          />
        </div>
        <Modal classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }} open={openModal} onClose={this.onCloseModal} little>
        </Modal>
        <Footer />
      </div>
    );
  }
}

export default App
