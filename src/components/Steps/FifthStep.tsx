import { useEffect, useState } from "react";
import Box from "@/components/Game/Box";

interface Props {
  setIsNextDisabled: (value: boolean) => void;
  feedbackColor?: string;
}

const KEY = "M";

const Tutorial = ({ feedbackColor, setIsNextDisabled }: Props) => {
  const [lightBox, setLightBox] = useState(false);
  const [lightOff, setLightOff] = useState(false);

  useEffect(() => {
    setIsNextDisabled(!lightOff);
  }, [lightOff, setIsNextDisabled]);

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

  return (
    <div className="h-full">
      <div className="flex justify-center">
        <Box small text="C" />
        <Box small text="V" />
        <Box small text="N" />
        <Box
          small
          color={feedbackColor}
          text={!lightOff && lightBox ? KEY : ""}
          selected={!lightOff && lightBox}
        />
      </div>
      <div className="text-center max-w-[800px]">
        The last light is the 'M' key.
      </div>
    </div>
  );
};

export default Tutorial;
