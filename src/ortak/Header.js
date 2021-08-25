import React from 'react';
import { Text, View } from 'react-native';

const Header = ({headerText}) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style  = {viewStyle}>
        <Text style={textStyle}> {headerText}</Text>
        </View>

    );
}

const styles = {
textStyle:{
    fontSize:20
},
viewStyle: {
    backgroundColor: '#8C9EFF',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, //yukardan boşluk verdi
    shadowOffset: {widht: 0, height: 2}, //gölgeleme için 
    shadowOpacity: 0.2,

}
};
export default Header;