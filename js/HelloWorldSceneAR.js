'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroSceneNavigator,
  ViroMaterials,
  ViroDirectionalLight,
  ViroAnimations,
  ViroParticleEmitter,
  ViroSurface
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroDirectionalLight color="#ffffff" direction={[0,-1,-.2]}/>
      <ViroAmbientLight color="#ffffff" intensity={200}/>

      <Viro3DObject
        source={require('./res/icecreamman_anim/icecreamman_anim_a.vrx')}
        resources={[require('./res/icecreamman_anim/icecreamman_diffuse.png'),
                    require('./res/icecreamman_anim/icecreamman_normal.png'),
                    require('./res/icecreamman_anim/icecreamman_specular.png')]}
        position={[0, -1, -2]}
        scale={[.5, .5, .5]}
        type="VRX"
        dragType="FixedToWorld" onDrag={()=>{}}
        onClick={this._onTappedIcecream}
        animation={{name:"02", run:this.state.runAnimation, loop:true,}}
      />
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Test"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});


module.exports = HelloWorldSceneAR;




/*</ViroARScene><ViroARScene onTrackingUpdated={this._onInitialized}>
        <Viro3DObject
        source={require('./res/watch_tower/wooden_watch_tower2.obj')}
        resources={[require('./res/watch_tower/textures/wood_tower_col.png'),
                    require('./res/watch_tower/textures/wood_tower_nor.png')]}
        //materials={[require('./res/watch_tower/wooden watch tower2.mtl')]}
        position={[0, -1, -2]}
        scale={[.5, .5, .5]}
        type="OBJ"
      />
    </ViroARScene>*/