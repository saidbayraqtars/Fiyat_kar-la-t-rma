
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

// Sayfa yüklendiğinde dark mode durumunu kontrol et
window.onload = function () {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }

  // Ürün kategorisi kontrolü
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  const categoryTitle = document.getElementById('category-title');
  const productsDiv = document.getElementById('products');

  const products = {
    laptops: [
      {
        name: "HP Victus 15-fa1082nt",
        prices: {
          "Hepsiburada": "35,900 TL",
          "Trendyol": "36,250 TL",
          "Teknoloji": "37,000 TL"
        },
        image: "https://cdn.akakce.com/z/hp/hp-victus-15-fa1082nt-b03c7ea-i5-12500h-16-gb-512-gb-ssd-rtx4060-15-6-full-hd-gaming-laptop.jpg"
      },
      {
        name: "HP Victus 16-s0020nt",
        prices: {
          "Trendyol": "30,560 TL",
          "Hepsiburada": "31,250 TL"
        },
        image: "https://cdn.akakce.com/z/hp/hp-victus-16-s0020nt-7z4m9ea-ryzen-5-7640hs-16-gb-512-gb-ssd-rtx4050-16-1-full-hd-notebook.jpg"
      }
    ],
    monitors: [
      {
        name: "MSI G274QPF E2",
        prices: {
          "Trendyol": "8,459 TL",
          "Hepsiburada": "10,471 TL"
        },
        image: "https://cdn.akakce.com/z/msi/msi-g274qpf-e2-27-1-ms-wqhd-pivot-ips-oyuncu-u.jpg"
      },
      {
        name: "Dell Alienware AW2723DF",
        prices: {
          "Trendyol": "17,999 TL",
          "Hepsiburada": "18,500 TL"
        },
        image: "https://cdn.akakce.com/z/dell/dell-alienware-aw2723df-27-1-ms-qhd-freesync-g-sync-ips-oyuncu-u.jpg"
      }
    ],
    mice: [
      {
        name: "Logitech G502 Hero RGB",
        prices: {
          "Trendyol": "1,959 TL",
          "Hepsiburada": "1,799 TL"
        },
        image: "https://cdn.akakce.com/z/logitech/logitech-g502-hero-rgb-910-005471-kablolu-oyuncu-mouse.jpg"
      },
      {
        name: "Asus ROG Gladius II Core",
        prices: {
          "Trendyol": "1,989 TL",
          "Hepsiburada": "1,799 TL"
        },
        image: "https://cdn.akakce.com/asus/asus-rog-gladius-ii-core-optik-kablolu-oyuncu-z.jpg"
      }
    ]
  };

  if (category && products[category]) {
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    products[category].forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = "product";
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 5px;">
        <p><strong>${product.name}</strong></p>
        <ul>
          ${Object.entries(product.prices)
            .map(([site, price]) => `<li>${site}: ${price}</li>`)
            .join('')}
        </ul>
      `;
      productsDiv.appendChild(productDiv);
    });
  } else {
    categoryTitle.textContent = 'Kategori seçilmedi veya ürün bulunamadı!';
  }
};
