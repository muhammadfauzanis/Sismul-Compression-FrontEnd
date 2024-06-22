import { IoCloudUploadOutline } from 'react-icons/io5';
import { Helper } from '../helper/helper';
import { useState } from "react";
import axios from "axios";

const HomePage = () => {
  const {baseURLAPI} = Helper();
  const [compression1, setCompression1] = useState([]);
  const [compression2, setCompression2] = useState([]);
  const [onProcess, setOnProcces] = useState(0);

  const uploadFile = async (event) => {
    setOnProcces(1)

    let formData = new FormData();
    formData.append('file', event.target.files[0]);
    const config = {
      headers: {
        'Accept': 'application/json', // Just an example, adjust as needed
      },
    };  

    try {
      await axios
      .post(baseURLAPI('audio/mp3'), formData, config)
      .then((response) => {
        setCompression1(response);
      });
    } catch (error) {
      console.error(error);
    }
    /* try {
      await axios
      .post(baseURLAPI('audio/ogg'), formData, config)
      .then((response) => {
        setCompression1(response);
      });
    } catch (error) {
      console.error(error);
    } */
    setOnProcces(0)
    event.target.value = '';
  };

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
          <p className="text-sm ">Limit 200MB per file • WAV</p>
        </div>
        <div className="mt-4 my-auto">
          <label className={` ${onProcess === 1 ? 'cursor-wait' : ''} bg-[#0e1117] border-2 border-gray-700 rounded-lg  hover:border-red-500 hover:text-red-500 text-white font-bold py-2 px-4 `}>
            Browse files
            <input type="file" disabled={ onProcess === 1 ? 'disabled' : '' } onChange={uploadFile} className="hidden" accept='.wav' />
          </label>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start ">
        <h1 className="font-bold mt-20 text-3xl pb-5 ">Audio Compression</h1>
        <h3 className="font-bold text-xl pb-3">
          Upload your audio file and compress it
        </h3>

        <p>Upload an audio file</p>
      </div>
    </div>
  );
};

export default HomePage;
