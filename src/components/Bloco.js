import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";



class Bloco extends React.Component {
  render() {
		const { flex,centro, meio,bg, row,children,scroll,...props} = this.props;
		const styles = [
			Base.Bloco,
			flex && {flex},
			bg && {backgroundColor:bg},
			centro && { alignItems:'center' },
			meio && { justifyContent:'center' },
			row && stl.row
		]
    return (
      <View style={styles} {...props}>
					{typeof children === 'string' ? <Text>{children}</Text> : children}
      </View>
    );
  }
}

export default Bloco;

const Base = StyleSheet.create({
	Bloco:{
		flex:1
	},
	row:{
		flexDirection:'row'
	}
})