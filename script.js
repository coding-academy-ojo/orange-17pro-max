    /* ============================
       Replace placeholder with actual image
       ============================
       IMPORTANT: Change the src below to the Apple 4K image URL or local file.
       Example local: "assets/iphone17-4k.jpg"
       Example remote (if hotlink allowed): "https://www.example.com/iphone17-4k.jpg"
    */
    (function init(){
      const phoneImg = document.getElementById('phoneImg');

      // If the developer left the placeholder text, show a subtle fallback placeholder
      if(!phoneImg.src || phoneImg.src.includes('APPLE_4K_IMAGE_URL_HERE')){
        phoneImg.src = "data:image/svg+xml;utf8," + encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1600" viewBox="0 0 1200 1600"><rect width="100%" height="100%" fill="#111"/><text x="50%" y="50%" fill="#888" font-family="Inter, Arial" font-size="36" text-anchor="middle">Replace this image with Apple 4K image</text></svg>'
        );
        phoneImg.style.objectFit = "contain";
      }

      // mobile toggle (simple)
      const mobileToggle = document.getElementById('mobileToggle');
      const navLinks = document.querySelector('.nav-links');
      if(window.innerWidth <= 860){
        mobileToggle.style.display = "inline-flex";
      }
      mobileToggle.addEventListener('click', ()=>{
        if(navLinks.style.display === 'flex') navLinks.style.display = 'none';
        else navLinks.style.display = 'flex';
      });

      // Buy buttons open modal
      document.getElementById('buyNowTop').addEventListener('click', ()=> openBuy(1099,'iPhone 17 Pro 256GB'));
      document.getElementById('buyNowCard').addEventListener('click', ()=> openBuy(1099,'iPhone 17 Pro 256GB'));

      // Learn more scroll
      document.getElementById('learnMore').addEventListener('click', ()=> {
        window.scrollTo({top: document.querySelector('.features').offsetTop - 24, behavior:'smooth'});
      });

      // confirm buy
      document.getElementById('confirmBuy').addEventListener('click', ()=> {
        const qty = Number(document.getElementById('modalQty').value || 1);
        alert('Order placed — thank you! (this is a demo). Qty: ' + qty);
        closeModal();
      });

      // small accessibility: close modal on escape
      window.addEventListener('keydown', (e)=> {
        if(e.key === 'Escape') closeModal();
      });
    })();

    function openBuy(price, title){
      document.getElementById('buyModal').style.display = 'flex';
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalBody').textContent = 'Total: JD ' + price + '.00 — Review quantity and confirm to proceed to checkout.';
      document.getElementById('modalQty').value = 1;
    }
    function closeModal(){
      document.getElementById('buyModal').style.display = 'none';
    }
    // ===== SLIDER FUNCTIONALITY =====
(function initSlider() {
  const track = document.getElementById('sliderTrack');
  const slides = Array.from(track.children);
  const dotsContainer = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  // Event listener for the new full-screen "احجز الآن" button
document.getElementById('buyNowFullHero').addEventListener('click', () => {
  openBuy(1099, 'iPhone 17 Pro 256GB');
});

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    updateSlider();
  }

  prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

  // Auto advance every 5 seconds (optional)
  // setInterval(() => goToSlide(currentIndex + 1), 5000);

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
    if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
  });

  // Touch support for mobile
  let startX = 0;
  let endX = 0;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  track.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      goToSlide(currentIndex + 1);
    } else if (endX - startX > 50) {
      goToSlide(currentIndex - 1);
    }
  });

  // Initialize
  updateSlider();

  // Resize handler
  window.addEventListener('resize', updateSlider);
})();
