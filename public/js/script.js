const banners = [
    "https://media.istockphoto.com/id/1441217865/tr/foto%C4%9Fraf/gaming-pc-with-rainbow-led-light-liquid-cooled-computer-powerful-pc-in-a-glass-case-with.jpg?s=612x612&w=0&k=20&c=CmiymGOgmy4oAMXgH_yNjrOJcr-SL0yZqc-lRQsAJZo=",
    "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2FtaW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80",
    "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80",
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
];
let currentIndex = 0;
let slideInterval;

// On Page Load
window.onload = function() {
    initSlider();
    startAutoSlide();
};

// InitSlider
function initSlider() {
    const track = document.getElementById('sliderTrack');
    if (!track) return;

    banners.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "Kampanya Görseli";
        img.className = 'slider-img';
        track.appendChild(img);
    });
}

// Slide
function showSlide(index) {
    const track = document.getElementById('sliderTrack');
    const translateXValue = -index * 100;
    track.style.transform = `translateX(${translateXValue}%)`;
}

// --- Forward / Back / Automatic ---
function nextSlide() {
    currentIndex = (currentIndex + 1) % banners.length;
    showSlide(currentIndex);
    resetTimer();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + banners.length) % banners.length;
    showSlide(currentIndex);
    resetTimer();
}

function startAutoSlide() {
    // 3 seconds
    slideInterval = setInterval(nextSlide, 3000);
}

function resetTimer() {
    clearInterval(slideInterval);
    startAutoSlide();
}


function updateTotal(inputEl) {
    if (!inputEl) return;

    const price = parseFloat(inputEl.dataset.price || inputEl.getAttribute('data-price') || inputEl.getAttribute('price'));
    const id = inputEl.id.replace('qty-', '');
    let quantity = parseInt(inputEl.value, 10);

    if (!quantity || quantity < 1) {
        quantity = 1;
        inputEl.value = 1;
    }

    const total = (price * quantity).toFixed(2);

    const displayElement = document.getElementById('total-display-' + id);
    if (displayElement) {
        displayElement.innerText = `Toplam: ${total} TL`;
    }
}


function purchase(name, price, id) {
    const qty = document.getElementById('qty-' + id).value;
    const total = (price * qty).toFixed(2);
    alert(`Order: ${qty}, ${name}\n Total Price: ${total} $`);
}