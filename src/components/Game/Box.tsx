interface Props {
  color?: string;
  selected?: boolean;
  small?: boolean;
  text?: string | null;
}

const Box = ({ color, selected = false, small = false, text }: Props) => {
  let customStyle = "bg-empty-box shadow-inner";

  if (selected) {
    customStyle = "bg-orange-box border border-orange-500 shadow-orange-600";
    if (color === "blue") {
      customStyle = "bg-blue-box border border-blue-100 shadow-blue-300";
    }
    if (color === "yellow") {
      customStyle = "bg-yellow-box border border-orange-100 shadow-orange-300";
    }
  }

  const size = small ? "w-24 h-24" : "w-48 h-48";
  const margin = small ? "m-2.5 mb-8" : "m-5";
  const textSize = small ? "text-[50px]" : "text-[100px]";

  return (
    <div
      className={`flex justify-center items-center align-center ${margin} ${size} rounded-2xl ${customStyle}`}
    >
      <span className={`text-white ${textSize} mb-1`}>{text}</span>
    </div>
  );
};

export default Box;
