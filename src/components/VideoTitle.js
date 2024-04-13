const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen pt-[20%] px-24 aspect-video bg-gradient-to-r from-black  m-auto text-white">
      <div className="max-w-[1216px] m-auto">
        <h1 className="font-bold text-6xl mb-8">{title}</h1>
        <p className="mb-8 w-1/2">{overview}</p>
        <div className="flex">
          <button className="flex justify-center items-center bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
            <img
              className="w-[24px] h-[24px] mr-2"
              src="https://www.pngall.com/wp-content/uploads/5/Black-Play-Button-Transparent.png"
            />
            Play
          </button>
          <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
