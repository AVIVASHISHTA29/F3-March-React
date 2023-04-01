import "./styles.css";

// function Card(props) {
//   console.log(props);
//   return (
//     <div className="card-wrapper">
//       <h2>{props.title}</h2>
//       <h3>{props.subHeading}</h3>
//     </div>
//   );
// }

function Card({ imgSrc, name, time, text, sayMyName }) {
  var myDate = new Date(parseInt(time));
  console.log(myDate);
  return (
    <div className={`card`}>
      <img src={imgSrc} className="card-img" />
      <div className="info-div">
        <div className="card-info">
          <h3>{name ? name : "Undefined"}</h3>
          <p>
            {time
              ? myDate.getUTCDate() +
                "/" +
                myDate.getUTCMonth() +
                "/" +
                myDate.getUTCFullYear()
              : "Recently"}
          </p>
        </div>
        <p>{text ? text : "No Text"}</p>
        <button onClick={() => sayMyName(name)}>Say My Name</button>
      </div>
    </div>
  );
}

export default Card;
