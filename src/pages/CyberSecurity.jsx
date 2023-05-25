import React from "react";
import {
  BsFillCalendarEventFill,
  BsFillClockFill,
  BsFillCreditCardFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import Image from "../images/banners/desktop-hero.jpg";

const CyberSecurity = () => {
  return (
    <div>
      <section className="md:bg-hero-tablet bg-cover bg-no-repeat lg:bg-about-hero bg-hero-mobile pb-10 lg:min-h-[60vh] min-h-[60vh] relative">
        <div className="absolute bg-black/50 w-full h-full top-0 left-0"></div>
        <div className="md:pt-48 pt-32 text-white text-xl font-semibold absolute mx-auto w-full h-full">
          <h1 className="lg:text-5xl md:text-3xl text-3xl font-bold text-center capitalize leading-normal mb-5 mt-5">
            become a certified professional in <br />{" "}
            <span className="text-orange-500">cyber security</span>
          </h1>
          <div>
            <p className="md:text-3xl text-xl md:mt-10 mt-5 font-semibold text-center capitalize">
              cyber security is the aspect of protecting an orgaination and its
              employees assets against cyber threats
            </p>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="text-center lg:mx-20 md:mx-10 mx-5">
          <div>
            <h2 className="text-2xl font-semibold text-orange-600 uppercase text-center">
              <span className="hover:border-b-4 border-black duration-200 ease-in-out capitalize">
                course details
              </span>
            </h2>
            <p className="text-lg font-normal py-7 text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus, dolores ipsa omnis nemo numquam ab et molestiae, natus
              animi earum fugiat. Expedita iste odit minus soluta necessitatibus
              asperiores consequatur in ut, magni dolorem corrupti voluptates
              ducimus blanditiis nisi. Doloremque aspernatur minus nostrum
              explicabo veritatis eligendi odio nemo repudiandae, aperiam aut
              rem similique voluptas nisi alias quod esse cumque! Enim, quis.
              Sed, corrupti? Suscipit aspernatur illo quo ipsum vero enim fugiat
              obcaecati soluta nobis vel consectetur repellendus, laboriosam
              inventore reiciendis natus blanditiis eum assumenda nihil, quaerat
              ab nostrum aliquid officia dolores esse. Hic fugit iure,
              accusantium beatae minima sit doloribus neque.
            </p>
          </div>
         
          <div
            style={{ backgroundImage: `url(${Image})` }}
            className="bg-cover bg-no-repeat min-h-[20vh] rounded-md my-10"
          >
            <div className="flex sm:flex-row flex-col justify-around items-center gap-10 py-20">
              <span className="text-white font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 md:justify-center justify-start items-center">
                <BsFillCalendarEventFill className="text-4xl" />
                <span>5 Weeks</span>
              </span>
              <span className="text-white font-semibold text-lg text-center flex sm:flex-col flex-row gap-5 justify-center items-center">
                <BsFillClockFill className="text-4xl" />
                <span>10am - 2:30pm</span>
              </span>
              <span className="text-white font-semibold text-lg text-center flex  sm:flex-col flex-row gap-5 justify-center items-center">
                <BsFillCreditCardFill className="text-4xl" />
                <span>150,000</span>
              </span>
            </div>
          </div>

          <div className="py-10">
            <h2 className="text-2xl font-semibold text-orange-600 uppercase text-center">
              <span className="hover:border-b-4 border-black duration-200 ease-in-out">
                who should attend
              </span>
            </h2>

            <div className="py-10">
              <ul className="text-left text-xl font-normal grid gap-5 justify-start items-center">
                <li>Those who are switching career to tech industry.</li>
                <li>
                  Those who have no prior knowledge on web development but want
                  to learn how to build website and work remotely.
                </li>
                <li>
                  Those who have programming skills but want to take their skill
                  to next level with hands-on projects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
