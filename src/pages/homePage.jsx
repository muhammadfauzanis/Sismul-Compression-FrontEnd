import { IoCloudUploadOutline } from 'react-icons/io5';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-start items-start ">
        <h1 className="font-bold mt-20 text-3xl pb-5 ">Audio Compression</h1>
        <h3 className="font-bold text-xl pb-3">
          Upload your audio file and compress it
        </h3>

        <p>Upload an audio file</p>
      </div>
      <div className="flex items-center justify-center mt-4 gap-x-8 bg-[#252730] p-6 rounded-lg cursor-pointer">
        <IoCloudUploadOutline size={35} className="text-gray-200" />
        <div className="">
          <p className="">Drag and drop file here</p>
          <p className="text-sm ">Limit 200MB per file • MP3, WAV</p>
        </div>
        <div className="mt-4 my-auto">
          <label className=" bg-[#0e1117] border-2 border-gray-700 rounded-lg  hover:border-red-500 hover:text-red-500 text-white font-bold py-2 px-4 ">
            Browse files
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
