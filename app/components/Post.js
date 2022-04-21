import { View, Text, Image } from "react-native";
import { useState } from "react";

const Post = (props) => {
  const [post, setPost] = useState(props.post);
  return (
    <View style={{ flexDirection: "column", display: "flex" }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 25,
        }}
      >
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text>image</Text>
          <View style={{ marginLeft: 20 }}>
            <Text>{post.petname}</Text>
            <Text>{post.ownername}</Text>
          </View>
        </View>
        <Text>3dots</Text>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <Image  source = {{uri:post.img}}
   style = {{ width: '80%', height: 300 }}
   />
      </View>
      <View></View>
    </View>
  );
};

export default Post;
