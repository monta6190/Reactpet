import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { LogoutUser } from '../utils/AsyncStorageFunctions'
const Feed = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={()=>{LogoutUser().then(()=> navigation.reset({
            index: 0,
            routes: [{ name: "Signin" }],
          }))}}><Text>Logout</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Feed