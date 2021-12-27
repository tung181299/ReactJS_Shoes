import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

// import LearningOptions from "components/LearningOptions/LearningOptions";
import LinkList from "components/LinkList/LinkList";

const config = {
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What do you want to find?", {
            widget: "learningOptions",
        }),
    ],
    botName: "Friendly Bot",
    widgets: [
        // {
        //     widgetName: "learningOptions",
        //     widgetFunc: (props) => <LearningOptions {...props} />,
        // },
        {
            widgetName: "shoesLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Men",
                        url:
                            "https://www.nike.com/vn/w/new-mens-shoes-3n82yznik1zy7ok",
                        id: 1,
                    },
                    {
                        text: "Women",
                        url:
                            "https://www.nike.com/vn/w/womens-shoes-5e1x6zy7ok",
                        id: 2,
                    },
                    {
                        text: "Kids",
                        url: "https://www.nike.com/vn/kids",
                        id: 3,
                    },
                ],
            },
        },
    ],
};

export default config;