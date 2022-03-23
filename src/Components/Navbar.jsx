import { Link } from "react-router-dom";

const links = [
  { to: "/", title: "Home Page" },
  { to: "/products", title: "Products Page" }
];

export const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" ,backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)"}}>
        {links.map((el) => {
          return (
            <Link key={el.to} style={{ padding: "10px", color:"white" }} to={el.to}>
              {el.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
