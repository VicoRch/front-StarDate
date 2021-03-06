import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar, Modal, Button } from 'react-onsenui';
import ReactSwipe from 'react-swipe';
import Main from './Main'
import '../style/Login.css'
import logo from '../icons/logo.png';
import planet from '../icons/planet.png';
import stars1 from '../icons/stars1.png';
import stars2 from '../icons/stars2.png';
import placeholder from '../icons/placeholder.png';
import placeholder2 from '../icons/placeholder2.png';
import oval from '../icons/oval.png';
import OvalToggle from '../icons/OvalToggle.png';
import Inscription from './Inscription';
import MediaQuery from 'react-responsive';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            modalIsOpen: false
        };
        this.pushPageMain = this.pushPageMain.bind(this);
        this.pushPageInscription = this.pushPageInscription.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    pushPageMain(e) {
        e.preventDefault();
        this.props.navigator.pushPage({component: Main})
    }

    pushPageInscription(e) {
        e.preventDefault();
        this.props.navigator.pushPage({component: Inscription})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal() {

           this.setState({
                modalIsOpen: false
            })
    }

  render() {
        let that = this;
      function setIndex(index) {
          that.setState({
              index
          });
      }
    function renderSwitch(index) {
          let tab = [];

        for(let i = 0; i<3;i++) {
            let classe = "oval"+i;
              if(index === i) {
                  tab.push(<img key={i} src={OvalToggle} alt="oval" className={classe} />)
              } else {
                  tab.push(<img key={i} src={oval} alt="oval" className={classe}/>)
              }

        }
        return tab
    }
    return (
        
        <Page className="LoginPage">
            <ReactSwipe className="LoginPage_carousel" swipeOptions={{
                continuous: false,
                speed: 400,
                transitionEnd: function(index, elem) {
                   setIndex(index)
                }
            }} key={3}>
                <div>
                    <div className="LoginPage_carousel_textLogin">
                            <p className="LoginPage_carousel_textLogin_textLoginContainer">
                                Bienvenue sur Star Date <br/>
                                le <span>1er site de rencontre <br/>
                                intergalactique.</span>
                        </p>
                    </div>
                    <img src={planet} alt="logo" className="LoginPage_carousel_planet"/>
                    <img src={logo} alt="logo" className="LoginPage_carousel_logo"/>
                    <img src={stars1} alt="logo" className="LoginPage_carousel_stars1"/>
                    <img src={stars2} alt="logo" className="LoginPage_carousel_stars2"/>
                </div>
                <div className="LoginPage_carousel_div">
                    <div className="LoginPage_carousel_textLogin">
                        <p className="LoginPage_carousel_textLogin_textLoginContainer">
                        Découvrez des profiles 
                        <br/>
                      <span>
                          dans tous l’univers.
                          </span>
                        </p>
                    </div>
                    <img src={placeholder} alt="logo" className="LoginPage_carousel_div_img2"/>
                </div>
                <div className="LoginPage_carousel_div">
                    <div className="LoginPage_carousel_textLogin">
                        <p className="LoginPage_carousel_textLogin_textLoginContainer">
                        Trouvez celui qui <br/>
                            <span>vous complète.</span>
                        </p>
                    </div>
                    <img src={placeholder2} alt="logo" className="LoginPage_carousel_div_img3"/>
                </div>
            </ReactSwipe>

            <div>

            </div>
            <MediaQuery query="(max-device-width: 420px)">
            <div className="LoginPage_index">
            {renderSwitch(this.state.index)}
            </div>
            </MediaQuery>

            <Modal
                isOpen={this.state.modalIsOpen}
            >
                <div className="LoginPage_modal">
                    <p className="LoginPage_modal_p">
                        Ecrivez votre email
                    </p>
                    <input type="text" placeholder="Email"/>
                    <p>
                        <button onClick={this.closeModal}>
                            Envoyer
                        </button>
                    </p>
                </div>
            </Modal>

            <div className="containerLogin">
                <form action="" method="post" className="containerLogin_formLogin">
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Mot de passe"/>
                    <div className="containerLogin_params">
                        <div className="containerLogin_params_checkbox">
                        <input
                            name="ResterConnecter"
                            type="checkbox"
                            checked={this.state.ResterConnecter}
                            onChange={this.handleInputChange} />
                        <p> Rester connecté </p>
                        </div>
                        <p onClick={this.openModal}> Mot de passe oublié ? </p>
                    </div>
                    <div className="containerLogin_formLogin_buttons">
                    <button className="containerLogin_formLogin_buttons_create" type="submit" onClick={this.pushPageInscription}>Créer un compte</button>
                    <button className="containerLogin_formLogin_buttons_connect" type="submit" onClick={this.pushPageMain}>Se connecter </button>
                    </div>
                </form>
            </div>


      </Page>
    );
  }
}

export default Login;
