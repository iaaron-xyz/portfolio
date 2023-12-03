import Arrow from "./icons/Arrow";

const LinkPage = ({
  text = "Link-Page",
  url = "",
  extraClasses = "",
  iconColor = "black",
}) => {
  return (
    <a
      href={url}
      className={`flex items-center my-12 font-satoshiBlack ${extraClasses}`}
    >
      {text.toUpperCase()}{" "}
      <Arrow
        className={`ml-3 h-6 rotate-45 stroke-1 fill-${iconColor} stroke-${iconColor}`}
      />
    </a>
  );
};

export default LinkPage;
