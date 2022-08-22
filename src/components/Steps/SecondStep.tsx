import { useEffect, useState } from "react";
import Box from "@/components/Game/Box";

interface Props {
  setIsNextDisabled: (value: boolean) => void;
  feedbackColor?: string;
}

const KEY = "C";

const Tutorial = ({ feedbackColor, setIsNextDisabled }: Props) => {
  const [lightBox, setLightBox] = useState(false);
  const [lightOff, setLightOff] = useState(false);

  useEffect(() => {
    const _detectKey = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();

      if (key === KEY) {
        setLightOff(true);
      }
    };

    setTimeout(() => {
      setLightBox(true);
      window.addEventListener("keydown", _detectKey, false);
    }, 800);

    return () => {
      window.removeEventListener("keydown", _detectKey, false);
    };
  });

  useEffect(() => {
    setIsNextDisabled(!lightOff);
  }, [lightOff, setIsNextDisabled]);

  return (
    <div className="h-full">
      <div className="flex justify-center">
        <Box
          small
          color={feedbackColor}
          text={!lightOff && lightBox ? KEY : ""}
          selected={!lightOff && lightBox}
        />
        <Box small />
        <Box small />
        <Box small />
      </div>
      <div className="text-center max-w-[800px]">
        Each light has an off switch on your keyboard. The switch for the first
        light is the letter 'C' on your keyboard.
      </div>
    </div>
  );
};

export default Tutorial;
