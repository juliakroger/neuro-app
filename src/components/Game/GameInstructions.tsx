import { useMemo, useState } from "react";
import { GameConfigProps } from "@/utils/gameConfig";
import AboutTheGame from "@/components/Steps/AboutTheGame";
import FirstStep from "@/components/Steps/FirstStep";
import SecondStep from "@/components/Steps/SecondStep";
import ThirdStep from "@/components/Steps/ThirdStep";
import FourthStep from "@/components/Steps/FourthStep";
import FifthStep from "@/components/Steps/FifthStep";
import KeyboardDemo from "@/components/Steps/KeyboardDemo";
import InstructionSteps from "@/components/Game/InstructionSteps";
import InstructionButtons from "@/components/Game/InstructionButtons";

const steps = [
  { content: AboutTheGame },
  { content: FirstStep },
  { content: SecondStep },
  { content: ThirdStep },
  { content: FourthStep },
  { content: FifthStep },
  { content: KeyboardDemo },
];

interface Props {
  gameConfig: GameConfigProps;
  startGame: () => void;
}

const GameInstructions = ({ gameConfig, startGame }: Props) => {
  const [step, setStep] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const StepComponent = useMemo(() => steps[step].content, [step]);

  return (
    <div className="fixed overflow-y-auto flex flex-col items-center w-full h-full top-0 left-0">
      <div className="flex flex-col justify-between items-center w-full h-full p-5 mt-[20%]">
        <InstructionButtons
          step={step}
          goBack={() => [setIsNextDisabled(false), setStep((prev) => prev - 1)]}
          startGame={startGame}
          nextStep={() => setStep((prev) => prev + 1)}
          isNextDisabled={isNextDisabled}
          stepsLength={steps.length}
        />

        <StepComponent
          feedbackColor={gameConfig.feedbackColor}
          setIsNextDisabled={(value: boolean) => setIsNextDisabled(value)}
        />

        <div className="instructions-bottom">
          <InstructionSteps steps={steps} step={step} />
        </div>
      </div>
    </div>
  );
};

export default GameInstructions;
