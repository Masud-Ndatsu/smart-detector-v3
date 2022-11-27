import React from "react";
import StoryImage from "../Assets/story.jpeg";
import TayyibImage from "../Assets/tayyib.jpeg";
import "../../App.css";

function AboutContents() {
  return (
    <div>
      <div className="section1">
        <img src={StoryImage} alt="our story image" className="storyIMG" />

        <div className="section1-content">
          <h1>Our story</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sunt eligendi molestias vero exercitationem nisi non minus officia,
            ex facere amet repellat delectus impedit. Aut sapiente
            exercitationem placeat repellat, eos nisi perspiciatis sunt
            deserunt, impedit officiis blanditiis molestiae. Nobis, id! Laborum
            sed possimus, obcaecati similique est asperiores ex numquam nobis?
            Eos, repellendus vitae ipsum dignissimos quisquam iusto explicabo
            cum deleniti facere dolores nemo dolorem possimus saepe similique,
            facilis animi atque dicta blanditiis perspiciatis corporis, non
            cupiditate commodi expedita consectetur. Sequi, nemo eius? Id
            incidunt cupiditate ratione nostrum totam asperiores aspernatur,
            magnam suscipit ad molestiae quasi iure officia vitae in eveniet.
            Nisi voluptate expedita, dolor perspiciatis nam incidunt ex
            repudiandae. Beatae, itaque. Eos ex vitae perferendis beatae et
            sequi nesciunt, exercitationem veniam sed, aperiam blanditiis
            officiis ab velit odit saepe similique sunt? Nihil, temporibus et
            aliquid tempore labore expedita dolorum, culpa ab maiores neque nemo
            ex itaque sint. Nostrum, consectetur ratione doloribus obcaecati
            fugit officiis! Totam quisquam sequi ullam animi fugiat. Culpa sint
            doloremque nulla pariatur excepturi.
          </p>
        </div>
      </div>

      <div className="section2 section2-container">
        <div className="">
          <div className="section2-content">
            <h1>Why Smart Detector?</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              sunt eligendi molestias vero exercitationem nisi non minus
              officia, ex facere amet repellat delectus impedit. Aut sapiente
              exercitationem placeat repellat, eos nisi perspiciatis sunt
              deserunt, impedit officiis blanditiis molestiae. Nobis, id!
              Laborum
            </p>
          </div>
          <div className="section2-content">
            <h1>Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              sunt eligendi molestias vero exercitationem nisi non minus
              officia, ex facere amet repellat delectus impedit. Aut sapiente
              exercitationem placeat repellat, eos nisi perspiciatis sunt
              deserunt, impedit officiis blanditiis molestiae. Nobis, id!
              Laborum
            </p>
          </div>

          <div className="section2-content">
            <h1>Work with us</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              sunt eligendi molestias vero exercitationem nisi non minus
              officia, ex facere amet repellat delectus impedit. Aut sapiente
              exercitationem placeat repellat, eos nisi perspiciatis sunt
              deserunt, impedit officiis blanditiis molestiae. Nobis, id!
              Laborum
            </p>
          </div>
        </div>

        <img src={TayyibImage} alt="our story image" className="TayyibIMG" />
      </div>
    </div>
  );
}

export default AboutContents;
