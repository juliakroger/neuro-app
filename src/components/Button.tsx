const BUTTON_BASE_CLASS =
  "flex justify-center items-center h-[30px] px-10 disabled:bg-zinc-400 rounded border-none disabled:text-grey-400 disabled:cursor-not-allowed";

const BUTTON_COLOR_STYLES = {
  purple: "bg-purple-300 hover:bg-purple-300/90",
  green: "bg-green-300 hover:bg-green-300/90",
  blue: "bg-blue-300 hover:bg-blue-300/90",
  orange: "bg-orange-300 hover:bg-orange-300/90",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClasses?: string;
  buttonColor?: "purple" | "green" | "blue" | "orange";
}

const Button = ({
  children,
  customClasses = "",
  buttonColor = "green",
  ...htmlAttributes
}: Props) => {
  const buttonClassName = [
    customClasses ? customClasses : null,
    BUTTON_BASE_CLASS,
    BUTTON_COLOR_STYLES[buttonColor],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClassName} {...htmlAttributes}>
      {children}
    </button>
  );
};

export default Button;
