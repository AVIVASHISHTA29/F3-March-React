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

  function sayMyName(name) {
    console.log("Name is " + name);
  }

  var showTwo = true;

  return (
    <div>
      {/* {users.map((item) => (
        <Card
          imgSrc={item.imgSrc}
          name={item.name}
          time={item.time}
          text={item.text}
          flag={true}
          sayMyName={sayMyName}
        />
      ))} */}

      <h1 style={{ backgroundColor: showTwo ? "orange" : "blue" }}>First</h1>
      {showTwo ? (
        <div>
          <h1>Second</h1>
          <p>Second says hi</p>
        </div>
      ) : (
        <></>
      )}
      <h1 className={showTwo ? "hi" : "bye"}>Third</h1>

      {/* <img src={person} /> */}
    </div>
  );
}

export default App;
