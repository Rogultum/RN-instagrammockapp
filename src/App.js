import React from "react";
import { ScrollView, FlatList, SafeAreaView } from "react-native";
import Uppertoolbar from "./components/upper_toolbar/Uppertoolbar";
import Story from "./components/story/Story";
import Post from "./components/post/Post";
import Bottomtoolbar from "./components/bottom_toolbar/Bottomtoolbar";

function App()  {
  
  const selfPpUrl = 'https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png'

  return(
    <ScrollView>
      <Uppertoolbar />
      <Story selfPp={selfPpUrl}/>
      <Post selfPp={selfPpUrl}/>
      <Bottomtoolbar selfPp={selfPpUrl}/>
    </ScrollView>

  )
}

export default App;
