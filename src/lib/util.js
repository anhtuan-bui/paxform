const navigateToHomePage = () => {
    window.location.href = "/";
}
const scrollIntoViewWithOffset = (element, offset) => {
    window.scrollTo({
      behavior: "smooth",
      top:
        element.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    });
  };


  const convertToSlug = (text) => {
    return text.toLowerCase().split(" ").join("-");
  };
export {navigateToHomePage, scrollIntoViewWithOffset, convertToSlug};