import React, { useState, useEffect } from "react";
import "./ExampleCard.css";

export default function ExampleCard({ num, onClick }) {
  const [img_url, setImg_url] = useState("");
  useEffect(() => {
    if (num != 1) {
      setImg_url(
        "https://scontent-hkg4-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/123658981_856861958382508_2333833865310086567_n.jpg?_nc_ht=scontent-hkg4-2.cdninstagram.com&_nc_cat=104&_nc_ohc=lXOdlzupgh0AX8Bsejj&tp=1&oh=f53b8efaf1bcb6c66eda2ab8a88848ed&oe=60310086"
      );
    } else {
      setImg_url(
        "https://scontent-hkg4-2.cdninstagram.com/v/t51.2885-15/e35/129231469_779884266219011_580355827099263536_n.jpg?_nc_ht=scontent-hkg4-2.cdninstagram.com&_nc_cat=111&_nc_ohc=s3uwgZ-plZgAX8cU7yk&tp=1&oh=950dbec825081ee6b9fb9ca838263649&oe=6032FA58"
      );
    }
  }, []);
  return (
    <>
      <div onClick={onClick} className="example-card-container">
        <div
          className="ex-img-container"
          style={{ "background-image": `url(${img_url})` }}
        ></div>
        <div className="ex-stats">
          <div className="ex-dummy-1"></div>
          <div className="ex-dummy-2"></div>
        </div>
      </div>
    </>
  );
}
