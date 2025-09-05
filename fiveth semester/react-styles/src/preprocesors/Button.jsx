import "./Button.scss";
export default function Button({ children, variant }) {
  return <button className={`button button-${variant}`}>{children}</button>;
}
