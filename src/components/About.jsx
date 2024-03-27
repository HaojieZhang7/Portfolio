const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm RJ, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              As a front-end developer, I'm driven by a passion for building
              clean, user-friendly web applications. I thrive on tackling
              challenges head-on and constantly seek opportunities to learn and
              grow in this dynamic field. Let's bring creativity and innovation
              to the table together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
