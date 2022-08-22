import Button from "@/components/Button";

interface Props {
  step: number;
  goBack: () => void;
  startGame: () => void;
  nextStep: () => void;
  isNextDisabled: boolean;
  stepsLength: number;
}

const InstructionButtons = ({
  step,
  goBack,
  startGame,
  nextStep,
  isNextDisabled,
  stepsLength = 0,
}: Props) => (
  <>
    {step >= 1 ? (
      <div className="fixed left-4 top-4">
        <Button buttonColor="blue" onClick={goBack}>
          Back
        </Button>
      </div>
    ) : null}

    <div className="fixed right-4 top-4">
      {step >= stepsLength ? (
        <Button
          disabled={isNextDisabled}
          onClick={() => {
            if (!isNextDisabled) startGame();
          }}
        >
          Begin
        </Button>
      ) : (
        <Button
          disabled={isNextDisabled}
          onClick={() => {
            if (!isNextDisabled) nextStep();
          }}
        >
          Next
        </Button>
      )}
    </div>
  </>
);

export default InstructionButtons;