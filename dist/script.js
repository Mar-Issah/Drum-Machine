const drumSounds = [
{
  key: "Q",
  soundName: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

{
  key: "W",
  soundName: "Heater-2",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

{
  key: "E",
  soundName: "Heater-3",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

{
  key: "A",
  soundName: "Heater-4",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

{
  key: "S",
  soundName: "Clap",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

{
  key: "D",
  soundName: "Open-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

{
  key: "Z",
  soundName: "Kick-n'-Hat",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  key: "X",
  soundName: "Kick",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  key: "C",
  soundName: "Closed-HH",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];



///------------------App.js---------------
function App() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement(DrumMachine, null)));


}

//----------------Drumpmachine component inside the drum---
class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drumPads: drumSounds,
      displayName: "" };


    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnMount() {
    window.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyPress(e) {
    const keyPad = drumSounds.find(item => item.key === e.key.toUpperCase());
    //if the key press is the alphabet then click the button
    if (keyPad) document.getElementById(keyPad.soundName).click();
  }

  handleClick(key, soundName) {
    return () => {
      document.getElementById(key).play();
      this.setState({
        displayName: soundName });

    };
  }

  render() {
    const { displayName } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { id: "root" }, /*#__PURE__*/
      React.createElement("div", { id: "drum-machine", className: "mt-4" }, /*#__PURE__*/
      React.createElement("h1", { className: "text-center p-2 m-0" }, " The Drum Machine"), /*#__PURE__*/
      React.createElement("div", { id: "display" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-center pt-2" }, displayName)), /*#__PURE__*/


      React.createElement("div", { id: "drumpad-container", className: "justify-content-center mt-5" },
      this.state.drumPads.map((item) => /*#__PURE__*/
      React.createElement("button", {
        id: item.soundName,
        className: "drum-pad btn p-2",
        onClick: this.handleClick(item.key, item.soundName) },

      item.key, /*#__PURE__*/
      React.createElement("audio", { className: "clip", src: item.url, id: item.key }))))), /*#__PURE__*/




      React.createElement("footer", { className: "p-2 text-dark mt-2" }, /*#__PURE__*/
      React.createElement("p", { className: "text-center" }, "-- made by", /*#__PURE__*/

      React.createElement("a", {
        className: "text-dark",
        href: "https://codepen.io/marsiya-issah",
        target: "_blank" }, /*#__PURE__*/

      React.createElement("strong", null, " Marsiya Issah"))))));





  }}


//---INDEX.JS---place it at the bottom so it renders last--------
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));