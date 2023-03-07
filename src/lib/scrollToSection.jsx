export default function scrollToSection(elementRef) {
  console.log('FIRED---scrollToSection', elementRef)
  if (window) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
}
