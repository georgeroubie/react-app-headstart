function scrollToElement(id: string, yOffset: number = 0) {
  const element = document.getElementById(id);

  const top = (element?.getBoundingClientRect().top || 0) + window.screenY - yOffset;

  window.scrollTo({ top });
}

export default scrollToElement;
