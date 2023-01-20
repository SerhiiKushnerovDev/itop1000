import { MainContainer } from "./MainContainer";

export const Footer = () => {
  return (
    <div style={{ marginTop: "50vh" }}>
      <footer>
        <span className="text-sm">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <ul>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Licensing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
