import "./styles.css";

// function Header(props) {
//   console.log("Props", props.name, props.age);

//   const name = props.name;
//   const age = props.age;
//   console.log("name", name, age);
//   return (
//     <div id="my-header" className="ui card">
//       <p style={{ color: "white", marginTop: "1rem", padding: "20px" }}>
//         This is my header, and I am {props.name}
//       </p>
//     </div>
//   );
// }

function Header({ name, age, xyz }) {
  console.log("name", name, age, xyz);
  return (
    <div id="my-header" className="ui card">
      <p style={{ color: "white", marginTop: "1rem", padding: "20px" }}>
        This is my header, and I am {name}
      </p>
    </div>
  );
}

export default Header;
