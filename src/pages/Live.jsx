const Live = () => {
  return (
    <div
      id="about"
      className="py-12 bg-gray-900/30 backdrop-blur-lg relative scroll-smooth w-full"
    >
      <div className="flex flex-row text-white text-center gap-10 mx-10 justify-between">
        <h1 className="text-5xl font-bold pb-12 grad-text">
          Tweets
        </h1>
        <div className="w-full md:w-4/6">
        <iframe className="w-full h-[80vh]" allowfullscreen id="wallsio-iframe" src="https://my.walls.io/d6pfn?nobackground=1&show_header=0" loading="lazy" title="My social wall"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Live;
