import { useState } from "react";
import { TrialAnalysisProps } from "@/components/Game/PlayGame";

interface Props {
  gameResults?: TrialAnalysisProps[];
  timeToRespond: number;
  background?: string;
  gameColor?: string;
}

const ExpandableResults = ({
  gameResults,
  timeToRespond,
  background,
  gameColor,
}: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`mt-4 p-4 rounded-xl ${background}`}>
      <div className="flex justify-between">
        <div>Session Details</div>
        <button
          type="button"
          className="text-sm underline"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? "Hide details" : "Show details"}
        </button>
      </div>

      {isOpen && (
        <div className="w-full mt-4 text-xs shadow-2xl text-white"></div>
      )}
    </div>
  );
};

export default ExpandableResults;
