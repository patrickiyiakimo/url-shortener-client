const Advanced = () => {
  return (
    <div className="font-abc " id="advanced">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-5">
        Advanced Statistics
      </h2>
      <p className="text-center md:mb-16">
        Track how your link are performing across the web with <br className="hidden md:block"/>
        our advanced statistics dashboard
      </p>
      <div className="md:grid grid-cols-3 mb-20 md:ml-20 md:mr-20">
        <div className="shadow-2xl mb-14 p-10 m-5 ">
          <h3 className="font-bold text-2xl pb-3">Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>
        <div className="shadow-2xl mb-14 p-10 m-5 ">
          <h3 className="font-bold text-2xl pb-3">Detailed Records</h3>
          <p>
            Gain insight into whois clicking your links. Knowing where and when
            people engage with your content help install better information.
          </p>
        </div>
        <div className="shadow-2xl mb-14 p-10 m-5 ">
          <h3 className="font-bold text-2xl pb-3">Fully Customisable</h3>
          <p>
            Improve brand awareness and content discovarability through
            customisable link, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
