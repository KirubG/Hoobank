import styles from "../style";
import { arrowUp } from "../assets";

const Getstarted = () => {
  return (
    <div className="rounded-full w-36 h-36 bg-blue-gradient items-center flex justify-center p-0.5 cursor-pointer">
      <div className="bg-primary rounded-full w-full h-full items-center flex flex-col justify-center text-2xl">
        <div className="flex mx-auto items-center">
          <span className=" mx-auto text-gradient">Get</span>
          <img src={arrowUp} alt="arrow" />
        </div>
          <span className=" mx-auto text-gradient">Started</span>
      </div>
    </div>
  );
};

export default Getstarted;
