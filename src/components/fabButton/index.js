import React from 'react';
import { StyleSheet,View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FabButton({navigation}) {
   
  return (


        <View style={styles.containerbtn}>
            
                <Ionicons name="add-sharp" size={24} color="white" />
        
        </View>

   
  );
}

const styles = StyleSheet.create({
    containerbtn:{
    width: 60,
    height: 60,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#15062c'
  }

});