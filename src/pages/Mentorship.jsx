import mentorship from "../images/mentorship.jpg";
import career from "../images/career.jpg";

const Mentorship = () => {
  return (
    <div className="w-full">
      <section className="md:bg-hero-tablet bg-cover bg-no-repeat lg:bg-about-hero bg-hero-mobile pb-10 lg:min-h-[40vh] min-h-[40vh] relative">
        <div className="absolute bg-black/50 w-full h-full top-0 left-0"></div>
        <div className="md:pt-48 pt-32 text-white text-xl font-semibold absolute mx-auto w-full h-full">
          <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold text-center uppercase leading-normal mb-5 mt-5">
            our <span className="text-orange-500">mentorship</span> programs
          </h2>
        </div>
      </section>
      <div className="w-full mt-16">
        <div className="lg:mx-20 md:mx-10 mx-5">
          <div>
            <h2 className="md:text-2xl text-lg font-medium">
              This is a 5 week mentorship program in Career Development. We help
              guide you in your professional career especially if you need next
              steps before or after getting certified. Our instructors will
              provide you both technical and soft skills, and guidance on
              developing teamwork, communication, network building.
            </h2>
          </div>

          <div className="pt-10 px-5">
            <h3 className="md:text-2xl text-xl font-semibold capitalize">
              this mentorship program is to help you :
            </h3>

            <ul className="list-outside list-disc leading-10 text-lg font-medium">
              <li>Access to knowledge and experience</li>
              <li>Guidance and support</li>
              <li>Advice on career development</li>
              <li>Networking opportunities</li>
              <li>A sounding board for ideas</li>
              <li>A role model to emulate</li>
            </ul>
          </div>

          <p className="text-xl font-medium capitalize py-10">
            Once you have found a career mentor, be sure to set clear
            expectations for the relationship. Discuss what you hope to learn
            from your mentor and how often you would like to meet. It is also
            important to be respectful of your mentor's time and expertise.
            Career mentorship can be a valuable asset for anyone looking to
            advance their career. By working with a mentor, you can gain the
            knowledge, skills, and experience you need to succeed in your chosen
            field.And our instructors will be willing to help in those areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
