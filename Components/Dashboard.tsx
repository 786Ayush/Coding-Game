import Image from "next/image";
import { Navbar } from "./Common/Navbar";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="mx-10">
        <div className="flex">
          <div className="w-[300px] h-[300px] bg-gray-200 rounded-full overflow-hidden  m-10">
            <Image
              src={"https://randomuser.me/api/portraits/men/10.jpg"}
              alt="Hero"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl font-bold">Ayush Gupta</h1>
          </div>
        </div>
        <div className="">
          <span className="">Calender</span>
        </div>
      </div>
    </>
  );
};
