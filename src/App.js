import './App.css';
import Card from './components/card';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Card />
      </header>
    </div>
  );
}


  //Movement Animation to happen
  const container = document.querySelector(".container");
  const card = document.querySelector(".card");
  //Items
  const profile = document.querySelector(".profile img");
  const title = document.querySelector(".title");
  const description = document.querySelector(".info h3");
  const chosse = document.querySelector(".chosse");


if(card) {
  //Moving Animation Event
  container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / -25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  //Animate In
  container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    profile.style.transform = "translateZ(180px) rotateZ(-360deg)";
    description.style.transform = "translateZ(150px)";
    chosse.style.transform = "translateZ(150px)";
  });

  //Animate Out
  container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    profile.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    chosse.style.transform = "translateZ(0px)";
  });
};


export default App;