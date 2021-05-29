import React, { Component } from  'react';
import Intro from "./component/Intro";
import MusicList from './component/MusicList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isIntro: true,
    }
  }

  movePage = () => {
    const { isIntro } = this.state;
    this.setState({
      isIntro: !isIntro
    })
  }

  render () {
    return (
      <div className="container">
        { this.state.isIntro ? 
          <Intro movePage={this.movePage}/> :
          <MusicList movePage={this.movePage}/>
        }
      </div>
    )
  } 

}

export default App;
