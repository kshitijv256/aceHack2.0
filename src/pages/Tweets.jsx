const Tweets = () => {
  return (
    <div
      id="about"
      className="py-12 bg-gray-900/30 backdrop-blur-lg relative scroll-smooth w-full"
    >
      <div className="flex flex-col text-white text-center items-center">
        {/* <h1 className="text-5xl font-bold pb-12 flex-wrap">
          <span className="grad-text">Tweets</span>
        </h1> */}
        <div className="w-4/5">
        <iframe className="w-full h-[80vh]" allowfullscreen id="wallsio-iframe" src="https://my.walls.io/d6pfn?nobackground=1&show_header=0" loading="lazy" title="My social wall"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
