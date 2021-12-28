/**
 * Lazy-loading photos custom directive
 */

export default {
  mounted(el: HTMLElement) {
    function loadImage() {
      el.classList.add('fade-in');
      el.style.backgroundImage = `url(${el.dataset.url})`;
    }

    function onIntersect(
      entries: Array<IntersectionObserverEntry>,
      observer: IntersectionObserver
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function init() {
      const options = {
        root: null,
        threshold: 0
      };

      const observer = new IntersectionObserver(onIntersect, options);
      observer.observe(el);
    }

    if (window.IntersectionObserver) {
      init();
    } else {
      loadImage();
    }
  }
};
