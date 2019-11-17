import React from 'react';
import { View, StyleSheet} from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        width: 300,
       maxWidth: '80%',
       alignItems: 'center',
       shadowColor: 'black',//IOS
       shadowOffset:{width: 0, height: 2},//IOS
       textShadowRadius: 6,//IOS
       shadowOpacity: 0.26,//IOS
       elevation: 5,//Android
       backgroundColor: 'white',
       padding: 20,
       borderRadius: 10
    }
});

export default Card;