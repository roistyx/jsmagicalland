import "./Box.css";

export const Box = ({
  boxMargin,
  bgColor,
  borderRadius,
  gap,
  textAlign,
  children,
}) => {
  const style = {
    ...(boxMargin ? { "--boxMargin": boxMargin } : {}),
    ...(bgColor ? { "--background": bgColor } : {}),
    ...(borderRadius ? { "--border-radius": borderRadius } : {}),
    ...(gap ? { "--gap": gap } : {}),
    ...(textAlign ? { "--text-align": textAlign } : {}),
  };

  return (
    <div className="Box" style={style}>
      {children}
    </div>
  );
};
