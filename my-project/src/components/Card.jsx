import React from 'react';
import "../assets/main.css";

function Card() {
  return (
    <div>
      <main>
        <div $className="h-12"></div>
        <div
          className="h-44   md:h-100  bg-cover bg-no-repeat bg-top"
          style={{
            backgroundImage:
              'url("https://i.pinimg.com/originals/8d/96/72/8d9672c9338f36d99f5e785f62b06bb3.jpg")',
          }}
        ></div>
        <div className="container mx-auto text-2xl">
          <div>
            <div className=" mt-4 md:flex md:items-center">
              <div className>
                <img
                  className="rounded-lg w-70 "
                  src="./img/cards/TCTD_conceptart_Contagion.jpg"
                  alt=""
                />
              </div>

              <div className="relative ml-2 ">
                <p className="narrative md:hover:text-primary">
                  We used to be ordinary people with ordinary lives, trained in
                  secret only to be activated if the worst happened.{" "}
                </p>
              </div>
            </div>
            <div className=" mt-4 md:flex flex-row-reverse md:items-center">
              <div className>
                <img
                  className="rounded-lg w-70"
                  src="./img/cards/TCTD_ConcepArt_Cleaners.jpg"
                  alt=""
                />
              </div>
              <div className="relative ml-2 ">
                <p className="narrative  md:hover:text-primary">
                  Three years ago that day came... Dark forces are moving to
                  take control of our nation and we are the only hope to stop
                  it.
                </p>
              </div>
            </div>
            <div className=" mt-4 md:flex md:items-center md:mb-2 ">
              <div className>
                <img
                  className="rounded-lg w-70"
                  src="./img/cards/TCTD_December_NewYear.jpg"
                  alt=""
                />
              </div>
              <div className="relative ml-2 ">
                <p className=" narrative  md:hover:text-primary">
                  This is a call for those agents that are still active, I am
                  TH_Greed and I want to create an attack force to recover DC
                  from the hands of the factions that terrorize it, I'm looking
                  for 3 committed agents to face the hardest missions, if you
                  want to be part of this elite team look for me in DC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Card;
