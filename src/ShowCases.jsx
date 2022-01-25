import React from "react";

function ShowCase(props) {
  if (props.left) {
    return (
      <div className="ShowCase left">
        <img src={props.img}></img>
        <div className="ShowCaseContent">
          <h1>
            <span>{props.title}</span>
          </h1>
          <p>{props.text}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ShowCase right">
        <div className="ShowCaseContent">
          <h1>
            <span>{props.title}</span>
          </h1>
          <p>{props.text}</p>
        </div>
        <img src={props.img}></img>
      </div>
    );
  }
}

function ShowCases() {
  return (
    <div className="ShowCases">
      <div className="ShowCasesContainer">
        <ShowCase
          title="Fast"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid."
          img="https://www.pngall.com/wp-content/uploads/5/Cardboard-Box-PNG-Image.png"
          left
        />
        <ShowCase
          title="Secure"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid."
          img="https://www.pngall.com/wp-content/uploads/5/Cardboard-Box-PNG-Image.png"
        />
      </div>
    </div>
  );
}

export default ShowCases;
