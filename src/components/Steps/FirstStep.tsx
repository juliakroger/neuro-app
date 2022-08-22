import Box from "@/components/Game/Box";

interface Props {
  setIsNextDisabled: (value: boolean) => void;
  feedbackColor?: string;
}

const Tutorial = ({ feedbackColor }: Props) => (
  <div className="h-full">
    <div className="flex justify-center">
      <Box selected color={feedbackColor} small />
      <Box small />
      <Box small />
      <Box small />
    </div>
    <div className="text-center max-w-[800px]">
      When the light comes on, your job is to turn it off as quickly as possible
      without pressing the wrong lightswitch!
    </div>
  </div>
);

export default Tutorial;
