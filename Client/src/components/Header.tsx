import React from "react";


type HeaderProps={
  name?:string
}

export default function Header(props:HeaderProps) {

  const { name="Developer" } = props;
  return (
    <div>
      <img src={"/"} alt={"Welcome image"} />
      <h1>Welcome, {name}</h1>
    </div>
  );
}
