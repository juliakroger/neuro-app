import React from "react";
import Image from "@/images/image_computer.png";

interface Props {
  setIsNextDisabled: (value: boolean) => void;
  feedbackColor?: string;
}

const KeyboardDemo = (props: Props) => (
  <div className="flex flex-col items-center">
    <div className="max-w-[800px]">
      You must arrange your fingers on the keyboard as demonstrated below.
      Please place your fingers on the keys now and practice.
    </div>
    <img src={Image} alt="instructions" className="w-[500px]" />
  </div>
);

export default KeyboardDemo;
