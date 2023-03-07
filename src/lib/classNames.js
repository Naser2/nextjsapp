export default function classNames(...classes) {
  return classes.filter((Boolean) => classes.join(''))
}
