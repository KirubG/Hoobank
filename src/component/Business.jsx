import styles from "../style";
import { features } from "../constant";
import Button from "./Button";

const Business = () => {
  return (
    <div className="container items-center grid sm:grid-cols-2 grid-cols-1 mt-20 gap-10">
      {/* left side */}
      <div className="flex flex-col w-full ">
        <h2 className="text-white sm:leading-20 text-[45px] font-poppins font-semibold">
          You do the business, we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} mt-8`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

         <Button />
      </div>

      {/* right side  */}
      <div className="flex flex-col w-full justify-center items-center">
          {features.map((feature, index)=>{
            return(
              <div key={feature.id} className="flex flex-row w-[75%] gap-4 py-4 px-2 feature-card rounded-3xl">
                   <div className="flex items-center">
                    <img src={feature.icon} alt={feature.title} width={70}/>
                   </div>
                   <div className="flex flex-col items-start ">
                      <h1 className="font-semibold text-white items-center justify-center">{feature.title}</h1>
                      <p className={`${styles.paragraph}`}>{feature.content}</p>
                   </div>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default Business