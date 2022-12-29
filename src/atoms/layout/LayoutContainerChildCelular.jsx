import { Link, useLocation } from "react-router-dom";

const LayoutContainerChildCelular = ({ url, image, alt = "", title }) => {
  const location = useLocation();
  const urlActual = location.pathname;

  // Styles
  const liStyles =
    "block items-center p-3 hover:cursor-pointer transition duration-200 ease-in-out hover:duration-200  cursor-pointer hover:scale-105 active:scale-105";
  const imgStyles = "h-8 mx-auto  ";

  // Active Styles
  const activeStyles = `duration-200 border-b-4 hover:border-b-lime-50 `;

  const notActiveStyles = "block mt-3 ";

  const hover =
    "text-white duration-200 hover:pl-2 hover:border-l-2  hover:border-r-lime-50 ";

  const LinkStyles = `${
    `${urlActual}` === `${url}` ? `${activeStyles}` : `${hover}`
  } ${notActiveStyles} `;

  return (
    <Link className={LinkStyles} to={url}>
      <li className={liStyles}>
        <img src={image} className={imgStyles} alt={alt} />
        <p className="text-sm">{title}</p>
      </li>
    </Link>
  );
};

export default LayoutContainerChildCelular;
