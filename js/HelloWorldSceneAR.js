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
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <Viro3DObject
        source={require('./res/icecreamman_anim/icecreamman_anim_a.vrx')}
        resources={[require('./res/icecreamman_anim/icecreamman_diffuse.png'),
                    require('./res/icecreamman_anim/icecreamman_normal.png'),
                    require('./res/icecreamman_anim/icecreamman_specular.png')]}
        position={[0, -1, -2]}
        scale={[.5, .5, .5]}
        type="VRX"
        //dragType="FixedToWorld" onDrag={()=>{}}
        //onClick={this._onTappedIcecream}
        //animation={{name:"02", run:this.state.runAnimation, loop:true,}}
      />
      </ViroARScene>
      /*<ViroARScene onTrackingUpdated={this._onInitialized}>
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
      /*<ViroARScene onTrackingUpdated={this._onInitialized} >
        <Viro3DObject
          source={require('./res/emoji_smile/emoji_smile.vrx')}
          resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
              require('./res/emoji_smile/emoji_smile_normal.png'),
              require('./res/emoji_smile/emoji_smile_specular.png')]}
          position={[0, 0, -1]}
          scale={[.2, .2, .2]}
          type="VRX" />
      </ViroARScene>
      <Viro3DObject 
              source={require('./res/IphoneX/Iphone_seceond_version_finished.obj')}
              resources={require('./res/IphoneX/Iphone_seceond_version_finished.mtl')}
              position={[-0.0, -5.5, -1.15]}
              //materials={["heart"]}
              type="OBJ" />
      */
      
      /*<ViroARScene>
      <ViroDirectionalLight color="#ffffff" direction={[0,-1,-.2]}/>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
      <Viro3DObject 
              source={require('./res/IphoneX/Iphone_seceond_version_finished.obj')}
              //resources={[require('./res/IphoneX/Iphone_seceond_version_finished.mtl'),
              //require('./res/IphoneX/camera-lens-icon.jpg'),
              //require('./res/IphoneX/iphone-x-creens-status-bar.jpg')]}
              position={[0.0, 0.0, -1]}
              scale={[0.1, 0.1, 0.1]}
              type="OBJ"/>

      </ViroARScene>*/
      /*<ViroARScene onTrackingUpdated={this._onInitialized}>
      <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
      <ViroAmbientLight color={"#aaaaaa"} />
      <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0,-1,-.2]}
        position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
      <Viro3DObject
          source={require('./res/emoji_smile/emoji_smile.vrx')}
          resources={[require('./res/emoji_smile/emoji_smile_diffuse.png'),
              require('./res/emoji_smile/emoji_smile_normal.png'),
              require('./res/emoji_smile/emoji_smile_specular.png')]}
          position={[-.5, .5, -1]}
          scale={[.2, .2, .2]}
          type="VRX" />
      <Viro3DObject source={require('./res/bugatti.obj')}
              resources={require('./res/bugatti.mtl')}
              position={[0, -1, -2]}
              scale={[.2, .2, .2]}
              materials={[require('./res/bugatti.mtl')]}
              type="OBJ" />
      </ViroARScene>*/
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Lelijk gezicht"
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


/*
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
      />*/