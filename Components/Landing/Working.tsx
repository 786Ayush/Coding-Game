import { BiRightArrow } from "react-icons/bi";
import Card1 from "../Common/Card1";

export const Working = () => {
  return (
    <div className=" h-screen px-6 py-10 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white w-full">
      <h2 className="text-4xl font-bold mb-10 text-center mb-10">
        Level Up Your Skills Through Gamified Learning
      </h2>
      <div className="flex justify-center items-center w-full mt-20">
        <Card1
          title={"Enhance Your Knowledge"}
          description={
            "Our game encourages continuous learning and knowledge growth through fun challenges and interactive gameplay."
          }
          imageUrl={"/images/ach1.jpg"} // Replace with actual image URL
        />
        <BiRightArrow />
        <Card1
          title={"Compete with Others"}
          description={
            "Join a global community and test your skills against others in a competitive environment."
          }
          imageUrl={"/images/ach2.jpg"}
        />
        <BiRightArrow />
        <Card1
          title={"Track Your Progress"}
          description={
            "Measure your progress and growth in real time with in-game metrics and leaderboards."
          }
          imageUrl={"/images/ach3.jpg"}
        />
        <BiRightArrow />
        <Card1
          title={"Achieve Milestones"}
          description={
            "Set goals and achieve milestones to enhance your abilities and unlock new challenges."
          }
          imageUrl={"images/ach4.jpg"}
        />
      </div>
    </div>
  );
};
