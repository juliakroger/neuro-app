import { useEffect, useState } from "react";
import Box from "@/components/Game/Box";

interface Props {
  setIsNextDisabled: (value: boolean) => void;
  feedbackColor?: string;
}

const KEY = "V";

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
      document.addEventListener("keydown", _detectKey, false);
    }, 800);

    return () => {
      document.removeEventListener("keydown", _detectKey, false);
    };
  });

  useEffect(() => {
    setIsNextDisabled(!lightOff);
  }, [lightOff, setIsNextDisabled]);

  return (
    <div className="h-full">
      <div className="flex justify-center">
        <Box small text="C" />
        <Box
          small
          color={feedbackColor}
          text={!lightOff && lightBox ? KEY : ""}
          selected={!lightOff && lightBox}
        />
        <Box small />
        <Box small />
      </div>
      <div className="text-center max-w-[800px]">
        The switch for the second light is the 'V' key.
      </div>
    </div>
  );
};

export default Tutorial;
