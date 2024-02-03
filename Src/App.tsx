import React, {useState} from 'react';
import type { PropsWithChildren } from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from '../Assets/Images/One.png'
import DiceTwo from '../Assets/Images/Two.png'
import DiceThree from '../Assets/Images/Three.png'
import DiceFour from '../Assets/Images/Four.png'
import DiceFive from '../Assets/Images/Five.png'
import DiceSix from '../Assets/Images/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps) : JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
}

function App(): React.JSX.Element {
  const [diceImage1, setDiceImage1] = useState<ImageSourcePropType>(DiceOne)
  const [diceImage2, setDiceImage2] = useState<ImageSourcePropType>(DiceOne)


  const rollDiceOnTop1 = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;

    switch (randomNum) {
      case 1:
        setDiceImage1(DiceOne)
        break;
      case 2:
        setDiceImage1(DiceTwo)
        break;
      case 3:
        setDiceImage1(DiceThree)
        break;
      case 4:
        setDiceImage1(DiceFour)
        break;
      case 5:
        setDiceImage1(DiceFive)
        break;
      case 6:
        setDiceImage1(DiceSix)
        break;
    
      default:
        setDiceImage1(DiceThree)
        break;
    }

    ReactNativeHapticFeedback.trigger("impactLight", options);

  }

  const rollDiceOnTop2 = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;

    switch (randomNum) {
      case 1:
        setDiceImage2(DiceOne)
        break;
      case 2:
        setDiceImage2(DiceTwo)
        break;
      case 3:
        setDiceImage2(DiceThree)
        break;
      case 4:
        setDiceImage2(DiceFour)
        break;
      case 5:
        setDiceImage2(DiceFive)
        break;
      case 6:
        setDiceImage2(DiceSix)
        break;
    
      default:
        setDiceImage2(DiceThree)
        break;
    }
  }

  return (

    <View style={[styles.container, {backgroundColor: '#000000'}]}>
      <Dice imageUrl={diceImage1} />
      <Dice imageUrl={diceImage2} />
      <Pressable onPress={() => {
        rollDiceOnTop1();
        rollDiceOnTop2();
      }}>
        <Text style={styles.rollDiceBtnText}>
          Roll The Dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
