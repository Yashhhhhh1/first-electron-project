const infoContainer = document.getElementById("info");

infoContainer.innerHTML = `This app is using Electron (v${window.versions.electron()}), Node (v${window.versions.node()}), and Chromium (v${window.versions.chrome()}).<br><br>My name is ${
  window.versions.myName
}.`;

const getPong = async () => {
  const pong = await versions.ping();
  console.log(pong, "Hello from the other side");
  infoContainer.innerHTML = infoContainer.innerHTML + `<br><br> ${pong}`;
};

getPong();
