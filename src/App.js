import "./App.css";
import Card from "./components/Card";
import person from "./assets/person.png";

function App() {
  const users = [
    {
      imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "sam",
      time: "1680195304820",
      text: "Good class",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "alex",
      time: "1670295304820",
      text: "hey What's up!",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "jane",
      time: "1680295304820",
      text: "Gn!",
    },
  ];

  return (
    <div>
      {users.map((item) => (
        <Card
          imgSrc={item.imgSrc}
          name={item.name}
          time={item.time}
          text={item.text}
        />
      ))}
      {/* <img src={person} /> */}
    </div>
  );
}

export default App;
