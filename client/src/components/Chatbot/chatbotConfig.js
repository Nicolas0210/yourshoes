import { borderRadius, height } from "@mui/system";
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import HighSchoolBranches from "./HighSchoolBranches";
import List from "./List";

const botName = "Yourbot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hola! soy ${botName}. Estoy aqui para ayudarte`
    ),
    createChatBotMessage(
      "Cual es tu consulta?",
      {
        withAvatar: true,
        widget: "highSchoolBranches"
      }
    )
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#a1c5",
    },
    chatButton: {
      backgroundColor: "#a1c5",
      
    }
  },
  widgets: [
    {
      widgetName: "highSchoolBranches",
      widgetFunc: (props) => <HighSchoolBranches {...props} />
    },
  ]
};

export default config;