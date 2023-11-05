import React from "react";
import Card from './context';
import Bank from './bank.png';

function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the Bank"
      text="For all your banking needs."
      body={(<img src={Bank} className="img-fluid" alt="Responsive image"/>)}
    />   
    );
}

export default Home;
