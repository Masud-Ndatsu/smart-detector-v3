import React from "react";
import Iot from "../Assets/iot.webp";
import Dev from "../Assets/dev.jpg";
import "../../App.css";

function HardWare() {
  return (
    <div>
      <div className="hardware-container">
        <div className="hardware-contents">
          <h1>Smart Detector also provide and IOT monitoring system</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            explicabo rerum corporis quaerat labore! Quam enim architecto, unde
            repellat, error aliquid est voluptates necessitatibus eum
            perspiciatis illo! Voluptas eum iure quaerat dolorum asperiores
            reprehenderit atque odit laudantium delectus dolorem ut laborum quis
            recusandae a debitis dolore eius, placeat voluptatibus rem.
            Asperiores, repudiandae cumque? Explicabo sint molestias laudantium
            quas ratione enim velit doloremque beatae nobis accusamus
            aspernatur, odio cupiditate temporibus eos vitae? Expedita quaerat,
            nostrum illo nemo nesciunt officia. Fugiat et, temporibus cumque
            perspiciatis ipsa ad enim incidunt nihil omnis? Non quibusdam
            voluptatibus placeat vel totam veniam illum aliquid enim reiciendis
            asperiores illo neque inventore perferendis, praesentium cumque
            temporibus dolorem possimus officia itaque suscipit? Quaerat ipsa
            quod porro, soluta dicta optio incidunt necessitatibus eum officiis.
          </p>

          <div className="sub-contents-container">
            <h2>ScreenShots</h2>
            <div className="sub-contents">
              <img src={Dev} alt="screen shot" />
              <img src={Dev} alt="screen shot" />
              <img src={Dev} alt="screen shot" />
            </div>
          </div>
        </div>
        <img src={Iot} alt="" />
      </div>
    </div>
  );
}

export default HardWare;
