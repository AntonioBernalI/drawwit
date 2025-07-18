import {Devvit, useState, svg, useWebView} from '@devvit/public-api';
import HomeScreen from "./components/HomeScreen.jsx";
Devvit.configure({
  redditAPI: true,
});

Devvit.addMenuItem({
  label: 'Add Screen',
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    ui.showToast("Submitting your post - upon completion you'll navigate there.");

    const subreddit = await reddit.getCurrentSubreddit();
    const post = await reddit.submitPost({
      title: 'Welcome to drawwit!',
      subredditName: subreddit.name,
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <text size="large">Loading ...</text>
        </vstack>
      ),
    });
    ui.navigateTo(post);
  },
});

Devvit.addCustomPostType({
  name: 'drawwit',
  height: 'regular',
  render: (context) => {
    const [counter, setCounter] = useState(0);
    const mount = useWebView({
      url:"index.html",
      onMessage:()=>{}
    }).mount
    return (
        <HomeScreen mount={mount}/>
    )
  },
});

export default Devvit;
