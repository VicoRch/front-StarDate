import React, { Component } from 'react';
import { Page, Toolbar, Tab, Tabbar } from 'react-onsenui';
import ReactSwipe from 'react-swipe';
import '../style/Home.css';
import mask1 from '../icons/mask1.svg';
import mask2 from '../icons/mask2.svg';
import mask3 from '../icons/mask3.svg';
import mask4 from '../icons/mask4.svg';
import profilePic from '../icons/profilePic.png';
import MediaQuery from 'react-responsive';
import UserProfile from './UserProfile';
import Inscription from "./Inscription";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
  }

  pushPageProfile() {
      this.props.nav.pushPage({component: UserProfile})
  }


  render() {
    return (
        <Page key="HomePage" className="HomePage">
            <MediaQuery query="(min-width: 421px)">
                <h2 style={{color: 'white'}}>Coucou</h2>
            </MediaQuery>

            <MediaQuery query="(max-width: 420px)">
                <ReactSwipe className="HomePage_carousel" swipeOptions={{
                    startSlide: 1,
                    continuous: true,
                    speed: 700
                }} key={3}>
                    <div className="HomePage_carousel1" style={{color: "white", height: '90vh'}}></div>
                    <div className="HomePage_carousel2" style={{color: "white", height: '90vh'}}>
                        <img onClick={this.pushPageProfile.bind(this)} src={profilePic} alt="profilePic" className="HomePage_carousel2_profile"/>
                        <div className="HomePage_carousel2_loading">
                            <img src={mask1} className="HomePage_carousel2_loading_mask1"/>
                            <img src={mask2} className="HomePage_carousel2_loading_mask2"/>
                            <img src={mask3} className="HomePage_carousel2_loading_mask3"/>
                            <img src={mask4} className="HomePage_carousel2_loading_mask4"/>
                        </div>
                    </div>
                    <div className="HomePage_carousel3" style={{color: "white", height: '90vh'}}></div>

                </ReactSwipe>
            </MediaQuery>

      </Page>
    );
  }
}

export default Home;
