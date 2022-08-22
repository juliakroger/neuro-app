const BUTTON_BASE_CLASS =
  "flex justify-center items-center h-[30px] px-10 rounded border-none";

const BUTTON_COLOR_STYLES = {
  purple: "bg-purple-300 hover:bg-purple-300/90",
  green: "bg-green-300 hover:bg-green-300/90",
  blue: "bg-blue-300 hover:bg-blue-300/90",
  orange: "bg-orange-300 hover:bg-orange-300/90",
};

interface Props extends React.HTMLAttributes<HTMLElement> {
  customClasses?: string;
  disabled?: boolean;
  buttonColor?: "purple" | "green" | "blue" | "orange";
}

const Button = ({
  children,
  disabled,
  customClasses = "",
  buttonColor = "green",
  ...htmlAttributes
}: Props) => {
  const buttonClassName = [
    customClasses ? customClasses : null,
    disabled ? "bg-zinc-400 hover:bg-zinc-400 text-zinc-500 cursor-not-allowed" : null,
    BUTTON_BASE_CLASS,
    BUTTON_COLOR_STYLES[buttonColor],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={buttonClassName} {...htmlAttributes}>
      {children}
    </div>
  );
};

export default Button;
