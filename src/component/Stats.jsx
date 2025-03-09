import { stats } from "../constant";

const Stats = () => {
  return (
    <div className=" flex sm:flex-row flex-col items-center justify-around mt-20 lg:gap-20 gap-4">
      {stats.map((stat, index) => {
        return (
          <div
            key={stat.id}
            className=" h-fit  flex flex-1  justify-start items-center" //border-r-5 border-white
          >
            <span className="text-white text-2xl font-semibold font-poppins">
              {stat.value}{" "}
            </span>
            <span className="text-gradient ml-4 font-semibold w-fit items-center uppercase">
              {stat.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Stats