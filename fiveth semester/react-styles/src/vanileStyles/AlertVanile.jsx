import "./AlertVanile.css";
export default function AlertVanile({
  children,
  variant = "info",
  isOutlined,
  isElevated,
}) {
  const classNames = ["alert", variant];
  if (isOutlined) classNames.push("isOutlined");
  if (isElevated) classNames.push("isElevated");

  return <p className={classNames.join(" ")}>{children}</p>;
}
