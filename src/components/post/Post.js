import React from 'react';
import { ScrollView } from 'react-native';
import User from './User';
import Photo from './Photo';
import Interactions from './Interactions';
import Description from './Description';

function Post({selfPp}) {
    return(
        <ScrollView>
            <User profilePhoto={'https://reactnative.dev/img/tiny_logo.png'} userName={'username'} />
            <Photo imgUrl='https://picsum.photos/id/237/200/300'/>
            <Interactions />
            <Description numLikes={3879} descriptionText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt pellentesque posuere. Etiam in consequat ligula, at suscipit dolor. Suspendisse quis feugiat ipsum."} userName={'username'} numComment={333} selfPp={selfPp} postedTime={5}/>
        </ScrollView>
    )
}

export default Post;
