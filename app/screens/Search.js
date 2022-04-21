import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Post from '../components/Post'

const Search = () => {
    const posts=[{ownername:'ttatata',petname:'rocky',likes:20,comments:10,img:'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg'},{ownername:'wael',petname:'nader',likes:20,comments:10,img:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/black-chiweenie-royalty-free-image-511504986-1563378924.jpg'},{ownername:'ahmed',petname:'rocky',likes:20,comments:10,img:''}] 
  return (
    <View>
  <ScrollView>
      {posts.map((element)=>
      <Post post={element}/>
      
      )}
      </ScrollView>
    </View>
  )
}

export default Search