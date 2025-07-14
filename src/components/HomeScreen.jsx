import {Devvit} from "@devvit/public-api";

export default function HomeScreen() {
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
}