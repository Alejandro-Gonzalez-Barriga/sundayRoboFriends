import React from "react";

import Card from "./Card.js";
const CardList = ({robots})=>{
const cardComp = robots.map((user, i) =>{
  return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
})
return (<div>
 {cardComp}
</div>
)

}
export default CardList;
