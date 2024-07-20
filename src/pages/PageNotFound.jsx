import React, { useEffect } from "react";
import gsap from "gsap";

function PageNotFound() {
  useEffect(() => {
    let t1 = gsap.timeline();
    let t2 = gsap.timeline();
    let t3 = gsap.timeline();

    t1.to(".cog1", {
      transformOrigin: "50% 50%",
      rotation: "+=360",
      repeat: -1,
      ease: "none",
      duration: 8
    });

    t2.to(".cog2", {
      transformOrigin: "50% 50%",
      rotation: "-=360",
      repeat: -1,
      ease: "none",
      duration: 8
    });

    t3.fromTo(
      ".wrong-para",
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1,
        stagger: {
          repeat: -1,
          yoyo: true
        }
      }
    );
  }, []);

  return (
    <>
      <main className="container">
        <div className="container">
          <h1 className="first-four">4</h1>
          <div className="cog-wheel1">
            <div className="cog1">
              <div className="top"></div>
              <div className="down"></div>
              <div className="left-top"></div>
              <div className="left-down"></div>
              <div className="right-top"></div>
              <div className="right-down"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </div>

          <div className="cog-wheel2">
            <div className="cog2">
              <div className="top"></div>
              <div className="down"></div>
              <div className="left-top"></div>
              <div className="left-down"></div>
              <div className="right-top"></div>
              <div className="right-down"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </div>
          <h1 className="second-four">4</h1>
          <p className="wrong-para">Uh Oh! Page not found!</p>
        </div>
      </main>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
          @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700");

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            overflow: hidden;
            background-color: #f4f6ff;
          }

          main {
            height: 100vh;
            overflow: scroll;
          }

          .container {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Poppins", sans-serif;
            position: relative;
            left: 6vmin;
            text-align: center;
          }

          .cog-wheel1,
          .cog-wheel2 {
            transform: scale(0.7);
          }

          .cog1,
          .cog2 {
            width: 40vmin;
            height: 40vmin;
            border-radius: 50%;
            border: 6vmin solid #f3c623;
            position: relative;
          }

          .cog2 {
            border: 6vmin solid #4f8a8b;
          }

          .top,
          .down,
          .left,
          .right,
          .left-top,
          .left-down,
          .right-top,
          .right-down {
            width: 10vmin;
            height: 10vmin;
            background-color: #f3c623;
            position: absolute;
          }

          .cog2 .top,
          .cog2 .down,
          .cog2 .left,
          .cog2 .right,
          .cog2 .left-top,
          .cog2 .left-down,
          .cog2 .right-top,
          .cog2 .right-down {
            background-color: #4f8a8b;
          }

          .top {
            top: -14vmin;
            left: 9vmin;
          }

          .down {
            bottom: -14vmin;
            left: 9vmin;
          }

          .left {
            left: -14vmin;
            top: 9vmin;
          }

          .right {
            right: -14vmin;
            top: 9vmin;
          }

          .left-top {
            transform: rotateZ(-45deg);
            left: -8vmin;
            top: -8vmin;
          }

          .left-down {
            transform: rotateZ(45deg);
            left: -8vmin;
            top: 25vmin;
          }

          .right-top {
            transform: rotateZ(45deg);
            right: -8vmin;
            top: -8vmin;
          }

          .right-down {
            transform: rotateZ(-45deg);
            right: -8vmin;
            top: 25vmin;
          }

          .cog2 {
            position: relative;
            left: -10.2vmin;
            bottom: 10vmin;
          }

          h1 {
            color: #142833;
          }

          .first-four {
            position: relative;
            left: 6vmin;
            font-size: 40vmin;
          }

          .second-four {
            position: relative;
            right: 18vmin;
            z-index: -1;
            font-size: 40vmin;
          }

          .wrong-para {
            font-family: "Montserrat", sans-serif;
            position: absolute;
            bottom: 15vmin;
            padding: 3vmin 12vmin 3vmin 3vmin;
            font-weight: 600;
            color: #092532;
          }
        `}
      </style>
    </>
  );
}

export default PageNotFound;
