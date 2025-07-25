export const capitilizeFirstLetter = (string) => {
  if (string === "" || string === null) return "";
  return string?.substring(0, 1)?.toUpperCase() + string?.slice(1);
};
