import * as React from 'react';
import { StyleSheet,View,TouchableWithoutFeedback, Animated} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

const FabButtonMenu = (props) => {

  let animation = new Animated.Value(0);
 

  const toogleMenu = () => {

    let open;
    const toValue = open ? 0 : 1;

    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true
    }).start();

    open = !open;

  }

  const likeStyle = {

    transform: [
      { scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -140]
        })
      }
    ]
    
  }

  const cameraStyle = {

    transform: [
      { scale: animation},
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80]
        })
      }
    ]
  }

  const rotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0,1],
          outputRange: ["0deg", "45deg"]
        })
      }
    ]
  }


  return (
      <View style={[StyleSheet.container, props.stilo]}>
            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.submenu, likeStyle]}>
                    <AntDesign name="heart" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.submenu, cameraStyle]}>
                    <AntDesign name="camera" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => toogleMenu()}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <AntDesign name="plus" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>
      </View>
  );
};

export default FabButtonMenu;

const styles = StyleSheet.create({

    container:{
      alignItems: 'center',
      position: 'absolute'
    },
    button:{
      position: 'absolute',
      width: 60,
      height: 60,
      borderRadius: 60 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      shadowRadius: 10,
      shadowColor: '#00213B',
      shadowOpacity: 0.3,
      shadowOffset:{
         height: 10
      }
    },
    menu: {
      backgroundColor: '#00213b'
    },
    submenu:{
      width: 48,
      height: 48,
      borderRadius: 48 / 2,
      backgroundColor: '#00213B'
    }
});