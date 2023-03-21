import { FC } from "react";
import { allDataType } from "../shared/types";

interface SkillsProps {
  skills: allDataType["skills"];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1
        
        className="text-center text-3xl lg:text-4xl"
      >
        Mis Skills
      </h1>
      <p
        
        className="description text-lg text-center my-[30px]"
      >
        Tecnología que uso a diario con mis clientes
      </p>
      <div className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[50vh] items-center justify-center flex-col md:flex-row">
        
        <div>
        <p data-scroll className="title text-[40px]">  
          
          <a
            className="underline underline-offset-2"
            href="https://www.researchgate.net/publication/312496102_Validity_and_reliability_of_a_novel_iPhone_app_for_the_measurement_of_barbell_velocity_and_1-RM_on_the_bench-press_exercise"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
            
            className="w-[150px] h-[150px] squared"
            src="/mylift.png"
            alt=""
          />
          <p  className="text-lg text-gray-200 flex flex-col lg:min-h-[10vh] items-center justify-center z-[4]" id="story">
          MY LIFT
          </p>
          </a>
        </p>
        </div>
        
        <div>
        <p  className="title text-[40px]">  
          
          <a
            className="underline underline-offset-2"
            href="https://www.frontiersin.org/articles/10.3389/fphys.2015.00343/full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
            
            className="w-[160px] h-[160px] squared"
            src="/hrv4training.png"
            alt=""
          />
          <p  className="text-lg text-gray-200 flex flex-col lg:min-h-[10vh] items-center justify-center z-[4]" id="story">
          HRV4TRAINING
          </p>
          </a>
        </p>
        </div>

        <div>
        <p  className="title text-[40px]">  
          
          <a
            className="underline underline-offset-2"
            href="https://www.researchgate.net/publication/287995954_Interpreting_Power-Force-Velocity_Profiles_for_Individualized_and_Specific_Training"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
            
            className="w-[150px] h-[150px] squared"
            src="/myjump.png"
            alt=""
          />
          <p  className="text-lg text-gray-200 flex flex-col lg:min-h-[10vh] items-center justify-center z-[4]" id="story">
          MY JUMP
          </p>
          </a>
        </p>
        </div>
      </div>


    </div>
  );
};

export default Skills;
