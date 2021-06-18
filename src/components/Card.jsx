import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(propos) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{propos.name}</h2>
          <Avatar img={propos.img} />
        </div>
        <div className="bottom">
          <Detail detailInfo={propos.tel} />
          <Detail detailInfo={propos.email} />
        </div>
      </div>
    </div>
  );
}
export default Card;
