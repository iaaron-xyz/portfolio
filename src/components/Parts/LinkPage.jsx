import Arrow from "./icons/Arrow";

const LinkPage = ({
  text = "Link-Page",
  url = "",
  extraClasses = "",
  iconColor = "black",
}) => {
  let arrowClasses = "";
  if (iconColor === "white") {
    arrowClasses = "ml-3 h-6 stroke-1 fill-white stroke-white";
  } else {
    arrowClasses = "ml-3 h-6 stroke-1 fill-black stroke-black";
  }

  return (
    <a
      href={url}
      className={`flex items-center font-satoshiBlack ${extraClasses}`}
    >
      {text.toUpperCase()} <Arrow className={arrowClasses} />
    </a>
  );
};

export default LinkPage;
