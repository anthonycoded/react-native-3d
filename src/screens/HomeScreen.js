import React, { Component } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SpriteSheet from "rn-sprite-sheet";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.mummy = null;
  }
  play = () => {
    this.mummy.play({
      type: "walk",
      fps: 18,
      loop: true,
    });
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.play()}>
          <Text>Play</Text>
        </TouchableOpacity>
        <SpriteSheet
          ref={(ref) => (this.mummy = ref)}
          source={require("../../assets/hero.png")}
          columns={8}
          rows={5}
          //height={200} // set either, none, but not both
          width={100}
          // frameHeight={50} // manually set size of your sprite
          // frameWidth={50} // overrides auto calculation of frame size based on height, width, columns, and rows.
          // offsetX={0}
          // offsetY={0}
          imageStyle={{ marginTop: -1 }}
          animations={{
            walk: [9, 10, 11, 12, 13, 14, 13, 12, 11, 10, 9],
            appear: Array.from({ length: 15 }, (v, i) => i + 18),
            die: Array.from({ length: 21 }, (v, i) => i + 33),
          }}
        />
      </View>
    );
  }
}
