import { Devvit, useState, svg } from '@devvit/public-api';

Devvit.configure({
  redditAPI: true,
});

// Add a menu item to the subreddit menu for instantiating the new experience post
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
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <text size="large">Loading ...</text>
        </vstack>
      ),
    });
    ui.navigateTo(post);
  },
});

// Add a post type definition
Devvit.addCustomPostType({
  name: 'drawwit',
  height: 'regular',
  render: (context) => {
    const [counter, setCounter] = useState(0);

    return (
        <vstack height={"100%"} width={"100%"} backgroundColor={"#f0f0f0"} alignment={"center middle"} borderColor={"#000"} border={"thick"}>
          <hstack width={"100%"} height={"30%"} alignment={"bottom center"}>
            <hstack width={"100%"} height={"100%"}>
              <image
                  width={"100%"}
                  height={"100%"}
                  url={"Drawwit.png"}
                  imageWidth={622}
                  imageHeight={226}
              />
            </hstack>
          </hstack>
          <hstack width={"100%"} height={"35%"} alignment={"bottom center"}>
            <hstack width={"60%"} height={"60%"} backgroundColor={"#fff"} cornerRadius={"medium"} alignment={"center middle"} borderColor={"#000"} border={"thick"}>
              <hstack width={"90%"} height={"90%"}>
                <image
                    width={"100%"}
                    height={"100%"}
                    url={"CreateContest.png"}
                    imageWidth={378}
                    imageHeight={60}
                />
              </hstack>
            </hstack>
          </hstack>
          <hstack width={"100%"} height={"35%"} alignment={"center middle"}>
            <hstack width={"45%"} height={"65%"} backgroundColor={"#fff"} cornerRadius={"medium"} borderColor={"#000"} border={"thick"} alignment={"middle center"}>
              <hstack width={"90%"} height={"90%"}>
                <image
                    width={"100%"}
                    height={"100%"}
                    url={"HowToPlay.png"}
                    imageWidth={1134}
                    imageHeight={836}
                />
              </hstack>
            </hstack>
            <spacer></spacer>
            <hstack width={"45%"} height={"65%"} backgroundColor={"#fff"} cornerRadius={"medium"} borderColor={"#000"} border={"thick"} alignment={"middle center"}>
              <hstack width={"90%"} height={"90%"}>
                <image
                    width={"100%"}
                    height={"100%"}
                    url={"ViewGlobalLeaderboard.png"}
                    imageWidth={1987}
                    imageHeight={836}
                />
              </hstack>
            </hstack>
          </hstack>
        </vstack>
    );
  },
});

export default Devvit;
