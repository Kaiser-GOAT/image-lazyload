const imgs = document.querySelectorAll('img[data-src]')

let observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target
      if (img.dataset.src) {
        img.src = img.dataset.src
        img.removeAttribute('data-src')
      }
      self.unobserve(entry.target)
    }
  })
})

imgs.forEach((item) => {
  observer.observe(item)
})
//第二种实现
