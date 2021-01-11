
const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function appendHumanText(text) {
  text="You: "+text
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function appendBotText(text) {
  text="Bot: "+text
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  chatContainer.classList.add("darker");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I did not understand that.";
    if (message.includes('hello')) {
        speech.text = "Hello there! How can i help you?";
      }

    if (message.includes('hear me')) {
      speech.text = "Loud and clear!";
    }

    if (message.includes('eat')) {
      speech.text = "Here are some nearby places: Dristor, McDonalds, KFC.";
    }

    if (message.includes('available rooms')) {
      speech.text = "The available rooms are Room 1, Room 2 and Room3.";
    }

    if (message.includes('rooms available')) {
        speech.text = "The available rooms are Room 1, Room 2 and Room3.";
      }

    if (message.includes('reserve a room')) {
      speech.text = "You can make a room reservation by navigating to Schedule Meeting in the main page.";
    }

    if (message.includes('room reservation')) {
        speech.text = "You can make a room reservation by navigating to Schedule Meeting in the main page.";
    }

    if (message.includes('book a room')) {
        speech.text = "You can make a room reservation by navigating to Schedule Meeting in the main page.";
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var container = document.getElementById("container");
    container.appendChild(appendBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var container = document.getElementById("container");
  container.appendChild(appendHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
  if(voice.classList.contains("active")){
      voice.classList.remove("active")
  }else{
      voice.classList.add("active")
  }
});
