import Nav from "./components/Nav/Nav";

export default function layout({ children }) {
  return (
    <>
      <Nav/>
      {children}
    </>
  );
}
