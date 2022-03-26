function lazyLoad() {
  let imgs = document.querySelectorAll('img[data-src]')
  let viewHeight = window.innerHeight
  imgs.forEach((item) => {
    if (item.dataset.src === '') return
    let rect = item.getBoundingClientRect()
    if (rect.bottom >= 0 && rect.top <= viewHeight) {
      item.src = item.dataset.src
      item.removeAttribute('data-src')
    }
  })
}
function throttle(fn, time) {
  let timer = false
  return (...args) => {
    if (timer) return
    fn.call(undefined, ...args)
    timer = true
    setTimeout(() => {
      timer = false
    }, time)
  }
}
window.addEventListener('scroll', throttle(lazyLoad, 1000))
//第一版实现
