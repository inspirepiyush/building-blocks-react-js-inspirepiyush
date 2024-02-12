import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
import { log } from "console";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  email : string;
  password : string;
  loginSuccess: boolean
  // Customizable Area Start
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class History5Controller extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      // Customizable Area Start
      // Customizable Area End
    ];

    this.state = {
    
      email: "",
      password: "",
      loginSuccess:  false,
      // Customizable Area Start
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    // Customizable Area Start
    // Customizable Area End
  }
  loginApiCallID = "";
  //This is to receive the response from an api
  async receive(from: string, message: Message) {
    // Customizable Area Start
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );
      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      var errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );
      if (apiRequestCallId === this.loginApiCallID) {
        console.log(responseJson);
        if(responseJson?.success == true){

        }else{
          
        }
      }
    }
  }
  apiCall = () => {
    const header = {
      "Content-Type": configJSON.validationApiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage) // do not change this
    );
    this.loginApiCallID = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.exampleAPiEndPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    const attrs = {
      email: this.state.email,
      password: this.state.password,
    };
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(attrs)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.exampleAPiMethodPost
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  // Customizable Area Start
  handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.apiCall();
    if (this.state.email && this.state.password) {
      // Set loginSuccess to true and open the modal
      this.setState({ loginSuccess: true });
    }
  };
  // Customizable Area End
}
  // Customizable Area End

