import React from "react";

interface Props {
  setIsNextDisabled: (value: boolean) => void;
  feedbackColor?: string;
}

const AboutTheGame = ({ setIsNextDisabled }: Props) => (
  <div className="flex flex-col text-center">
    <div className="max-w-[800px]">
      You are about to perform a brain health activity. This will take less than
      10 minutes, but it is very important that you play this game in a quiet
      and private area where you will not be distracted.
    </div>
    <div className="max-w-[800px]">
      Once you begin, it is important that you complete the test to the end. Are
      you ready to start?
    </div>
  </div>
);

export default AboutTheGame;
