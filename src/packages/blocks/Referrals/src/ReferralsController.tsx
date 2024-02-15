import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  txtInputValue: string;
  txtSavedValue: string;
  enableField: boolean;
  // Customizable Area Start
  results: string[] ;
  name : string;
  offset: number;
  

  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class ReferralsController extends BlockComponent<
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
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.NavigationPayLoadMessage),
    ];

    this.state = {
      txtInputValue: "",
      txtSavedValue: "A",
      enableField: false,
      // Customizable Area Start
      results: [],
      name: "",
      offset: 10,
      
      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    // Customizable Area Start
    // Customizable Area End
  }

  callId: string = "";

  async receive(from: string, message: Message) {

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
      if (apiRequestCallId === this.callId) {
        console.log('response gathered');
        // console.log(JSON.stringify(responseJson));
        console.log(responseJson.results);
        this.setState({results : responseJson.results})
        
        
      }
    }

    // Customizable Area Start
    // Customizable Area End
  }

  // txtInputWebProps = {
  //   onChangeText: (text: string) => {
  //     this.setState({ txtInputValue: text });
  //   },
  //   secureTextEntry: false,
  // };

  // txtInputMobileProps = {
  //   ...this.txtInputWebProps,
  //   autoCompleteType: "email",
  //   keyboardType: "email-address",
  // };

  // txtInputProps = this.isPlatformWeb()
  //   ? this.txtInputWebProps
  //   : this.txtInputMobileProps;

  // btnShowHideProps = {
  //   onPress: () => {
  //     this.setState({ enableField: !this.state.enableField });
  //     this.txtInputProps.secureTextEntry = !this.state.enableField;
  //     this.btnShowHideImageProps.source = this.txtInputProps.secureTextEntry
  //       ? imgPasswordVisible
  //       : imgPasswordInVisible;
  //   },
  // };

  // btnShowHideImageProps = {
  //   source: this.txtInputProps.secureTextEntry
  //     ? imgPasswordVisible
  //     : imgPasswordInVisible,
  // };

  // btnExampleProps = {
  //   onPress: () => this.doButtonPressed(),
  // };

  // doButtonPressed() {
  //   let msg = new Message(getName(MessageEnum.AccoutLoginSuccess));
  //   msg.addData(
  //     getName(MessageEnum.AuthTokenDataMessage),
  //     this.state.txtInputValue
  //   );
  //   this.send(msg);
  // }

  // // web events
  // setInputValue = (text: string) => {
  //   this.setState({ txtInputValue: text });
  // };

  // setEnableField = () => {
  //   this.setState({ enableField: !this.state.enableField });
  // };


  apiCall = () => {
    console.log("api call");
    const header = {
      "Content-Type": configJSON.validationApiContentType,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage) // do not change this
    );
    this.callId = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `${configJSON.exampleAPiEndPoint}?offset=${this.state.offset}&limit=10` // Update the API endpoint with offset and limit
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.validationApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };

  // Customizable Area Start

  

  handleApi =() => {
    console.log("btn-clicked");
    this.apiCall()
  }

  getMorePokemon = () => {
    console.log("getMorePokemon Clicked");
    this.setState(
      (prevState) => ({
        offset: prevState.offset + 10, // Increase offset by 10 to fetch next 10 Pokemon
      }),
      () => this.apiCall() // Call API after updating the offset
    );
  };

  
  // Customizable Area End
}
