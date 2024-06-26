const useInitialClass = (i: number, length: number, activeIndex: number) => {
  let initialClass = ''

  if (length === 1) {
    initialClass = 'active'
  } else if (length === 2) {
    if (i === activeIndex) {
      initialClass = 'active'
    } else if (i === (activeIndex + 1) % length) {
      initialClass = 'next'
    } else if (i === (activeIndex - 1 + length) % length) {
      initialClass = 'prev'
    }
  } else {
    if (i === activeIndex) {
      initialClass = 'active'
    } else if (i === (activeIndex + 1) % length) {
      initialClass = 'next'
    } else if (i === (activeIndex - 1 + length) % length) {
      initialClass = 'prev'
    } else {
      initialClass = 'nonactive'
    }

    if (activeIndex === 0 && i === length - 1) {
      initialClass = 'prev'
    } else if (activeIndex === length - 1 && i === 0) {
      initialClass = 'next'
    }
  }

  return initialClass
}

export default useInitialClass
