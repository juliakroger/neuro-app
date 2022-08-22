interface Props {
  steps: {}[];
  step: number;
}

const InstructionSteps = ({ steps, step }: Props) => (
  <div className="flex gap-1.5">
    {steps.map((s, i) => (
      <div
        className={`h-3 w-3 rounded-full ${
          i === step ? "bg-white" : "bg-zinc-500"
        }`}
      />
    ))}
  </div>
);

export default InstructionSteps;
