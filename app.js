// Application State
const state = {
    cart: [],
    selectedCategory: 'all',
    searchQuery: '',
    isCartOpen: false,
    isMobileMenuOpen: false
  };
  
  // Categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'mens', name: "Men's" },
    { id: 'womens', name: "Women's" },
    { id: 'streetwear', name: 'Streetwear' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'footwear', name: 'Footwear' },
    { id: 'outerwear', name: 'Outerwear' },
  ];
  
  // Mock Products
  const products = [
    {
      id: '1',
      name: 'Classic Black Tee',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1516082669438-2d2bb5082626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwdHNoaXJ0fGVufDF8fHx8MTc2NTE2NTU2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'mens',
      description: 'Premium cotton tee with minimalist design',
      rating: 4.8,
      inStock: true,
    },
    {
      id: '2',
      name: 'Oversized Hoodie',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1578470507807-3fc541d5f544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBob29kaWV8ZW58MXx8fHwxNzY1MjQ2OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'womens',
      description: 'Cozy oversized hoodie with premium fleece',
      rating: 4.9,
      inStock: true,
    },
    {
      id: '3',
      name: 'Vintage Denim Jacket',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwxfHx8fDE3NjUxODk1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'outerwear',
      description: 'Classic denim jacket with distressed finish',
      rating: 4.7,
      inStock: true,
    },
    {
      id: '4',
      name: 'Street High-Top Sneakers',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1656944227480-98180d2a5155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc2NTI0NTc1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'footwear',
      description: 'Premium leather high-top sneakers',
      rating: 4.9,
      inStock: true,
    },
    {
      id: '5',
      name: 'Urban Backpack',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1627803589917-65023f4a0e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc2NTE3NzI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'accessories',
      description: 'Durable backpack with multiple compartments',
      rating: 4.6,
      inStock: true,
    },
    {
      id: '6',
      name: 'Graphic Print Tee',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1516082669438-2d2bb5082626?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwdHNoaXJ0fGVufDF8fHx8MTc2NTE2NTU2NXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'streetwear',
      description: 'Bold graphic print on premium cotton',
      rating: 4.8,
      inStock: true,
    },
    {
      id: '7',
      name: 'Cargo Pants',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1538329972958-465d6d2144ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjUxOTEzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'streetwear',
      description: 'Utility cargo pants with multiple pockets',
      rating: 4.7,
      inStock: true,
    },
    {
      id: '8',
      name: 'Leather Belt',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1627803589917-65023f4a0e70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc2NTE3NzI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'accessories',
      description: 'Genuine leather belt with metal buckle',
      rating: 4.5,
      inStock: true,
    },
    {
      id: '9',
      name: 'Slim Fit Jeans',
      price: 64.99,
      image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwxfHx8fDE3NjUxODk1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'mens',
      description: 'Classic slim fit denim jeans',
      rating: 4.8,
      inStock: true,
    },
    {
      id: '10',
      name: 'Cropped Sweatshirt',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1578470507807-3fc541d5f544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBob29kaWV8ZW58MXx8fHwxNzY1MjQ2OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'womens',
      description: 'Trendy cropped sweatshirt for casual wear',
      rating: 4.6,
      inStock: true,
    },
    {
      id: '11',
      name: 'Running Sneakers',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1656944227480-98180d2a5155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc2NTI0NTc1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'footwear',
      description: 'Lightweight running shoes with cushioned sole',
      rating: 4.9,
      inStock: true,
    },
    {
      id: '12',
      name: 'Bomber Jacket',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwxfHx8fDE3NjUxODk1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'outerwear',
      description: 'Classic bomber jacket with zipper closure',
      rating: 4.8,
      inStock: true,
    },
  ];
  
  // Initialize App
  function init() {
    renderCategories();
    renderProducts();
    setupEventListeners();
  }
  
  // Render Categories
  function renderCategories() {
    const categoryNav = document.getElementById('categoryNav');
    const mobileCategoryNav = document.getElementById('mobileCategoryNav');
    
    categoryNav.innerHTML = categories.map(cat => 
      `<button class="category-pill ${state.selectedCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
        ${cat.name}
      </button>`
    ).join('');
  
    mobileCategoryNav.innerHTML = categories.map(cat =>
      `<button class="btn ${state.selectedCategory === cat.id ? 'btn-dark' : 'btn-outline-dark'} text-start" data-category="${cat.id}">
        ${cat.name}
      </button>`
    ).join('');
  }
  
  // Filter Products
  function getFilteredProducts() {
    let filtered = products;
  
    // Filter by category
    if (state.selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === state.selectedCategory);
    }
  
    // Filter by search query
    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }
  
    return filtered;
  }
  
  // Render Products
  function renderProducts() {
    const filtered = getFilteredProducts();
    const grid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const categoryTitle = document.getElementById('categoryTitle');
    const productCount = document.getElementById('productCount');
  
    // Update title
    const selectedCat = categories.find(c => c.id === state.selectedCategory);
    categoryTitle.textContent = selectedCat ? selectedCat.name : 'All Products';
    productCount.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
  
    // Show/hide no results
    if (filtered.length === 0) {
      grid.classList.add('d-none');
      noResults.classList.remove('d-none');
      return;
    }
  
    grid.classList.remove('d-none');
    noResults.classList.add('d-none');
  
    // Render products
    grid.innerHTML = filtered.map(product => `
      <div class="col">
        <div class="product-card">
          <div class="image-container position-relative">
            <img src="${product.image}" alt="${product.name}">
            ${!product.inStock ? '<span class="badge-out-of-stock">Out of Stock</span>' : ''}
          </div>
          
          <div class="product-card-body">
            <h5 class="line-clamp-2 mb-2">${product.name}</h5>
            <p class="text-muted line-clamp-2 mb-2" style="font-size: 0.875rem">
              ${product.description}
            </p>
            
            <div class="d-flex align-items-center gap-1 mb-2">
              <div class="star-rating d-flex">
                ${renderStars(product.rating)}
              </div>
              <span class="text-muted ms-1" style="font-size: 0.75rem">
                (${product.rating})
              </span>
            </div>
            
            <div class="d-flex align-items-center justify-content-between mb-3">
              <span class="h5 mb-0">
                $${product.price.toFixed(2)}
              </span>
              <span class="badge-category">
                ${product.category}
              </span>
            </div>
            
            <button
              class="btn btn-dark w-100 d-flex align-items-center justify-content-center gap-2"
              onclick="addToCart('${product.id}')"
              ${!product.inStock ? 'disabled' : ''}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // Render Stars
  function renderStars(rating) {
    return Array(5).fill(0).map((_, i) => {
      const filled = i < Math.floor(rating);
      return `<svg width="14" height="14" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" class="${filled ? '' : 'star-empty'}">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>`;
    }).join('');
  }
  
  // Add to Cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) return;
  
    const existingItem = state.cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      state.cart.push({ ...product, quantity: 1 });
    }
  
    updateCart();
  }
  
  // Remove from Cart
  function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    updateCart();
  }
  
  // Update Quantity
  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
  
    const item = state.cart.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      updateCart();
    }
  }
  
  // Update Cart Display
  function updateCart() {
    const itemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
    // Update badge
    const badge = document.getElementById('cartBadge');
    if (itemCount > 0) {
      badge.textContent = itemCount;
      badge.classList.remove('d-none');
    } else {
      badge.classList.add('d-none');
    }
  
    // Update cart panel
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartTotal = document.getElementById('cartTotal');
    const cartItems = document.getElementById('cartItems');
  
    cartItemCount.textContent = `${state.cart.length} item${state.cart.length !== 1 ? 's' : ''}`;
    cartTotal.textContent = `$${total.toFixed(2)}`;
  
    if (state.cart.length === 0) {
      emptyCart.classList.remove('d-none');
      cartContent.classList.add('d-none');
    } else {
      emptyCart.classList.add('d-none');
      cartContent.classList.remove('d-none');
  
      cartItems.innerHTML = state.cart.map(item => `
        <div class="cart-item">
          <div class="row g-3">
            <div class="col-4">
              <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 80px; object-fit: cover; border-radius: 6px;">
            </div>
            
            <div class="col-8">
              <h6 class="line-clamp-2 mb-1">${item.name}</h6>
              <p class="text-muted mb-2" style="font-size: 0.875rem">
                $${item.price.toFixed(2)} each
              </p>
              
              <div class="d-flex align-items-center justify-content-between">
                <div class="quantity-controls">
                  <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14"></path>
                    </svg>
                  </button>
                  
                  <span class="quantity-display">${item.quantity}</span>
                  
                  <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </div>
                
                <button class="btn btn-sm btn-link text-danger p-0" onclick="removeFromCart('${item.id}')">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
              
              <p class="mb-0 mt-2" style="font-size: 0.875rem">
                <strong>Subtotal: $${(item.price * item.quantity).toFixed(2)}</strong>
              </p>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
  
  // Toggle Cart
  function toggleCart(show) {
    state.isCartOpen = show;
    const backdrop = document.getElementById('cartBackdrop');
    const panel = document.getElementById('cartPanel');
  
    if (show) {
      backdrop.style.display = 'block';
      panel.classList.add('show');
      backdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
    } else {
      backdrop.classList.remove('show');
      panel.classList.remove('show');
      document.body.style.overflow = '';
      setTimeout(() => {
        backdrop.style.display = 'none';
      }, 300);
    }
  }
  
  // Setup Event Listeners
  function setupEventListeners() {
    // Cart button
    document.getElementById('cartButton').addEventListener('click', () => toggleCart(true));
    document.getElementById('closeCart').addEventListener('click', () => toggleCart(false));
    document.getElementById('cartBackdrop').addEventListener('click', () => toggleCart(false));
    document.getElementById('continueShopping1').addEventListener('click', () => toggleCart(false));
    document.getElementById('continueShopping2').addEventListener('click', () => toggleCart(false));
  
    // Search
    const searchInput = document.getElementById('searchInput');
    const searchInputMobile = document.getElementById('searchInputMobile');
    
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      searchInputMobile.value = e.target.value;
      renderProducts();
    });
  
    searchInputMobile.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      searchInput.value = e.target.value;
      renderProducts();
    });
  
    // Categories
    document.getElementById('categoryNav').addEventListener('click', (e) => {
      if (e.target.classList.contains('category-pill')) {
        state.selectedCategory = e.target.dataset.category;
        renderCategories();
        renderProducts();
      }
    });
  
    document.getElementById('mobileCategoryNav').addEventListener('click', (e) => {
      if (e.target.classList.contains('btn')) {
        state.selectedCategory = e.target.dataset.category;
        state.isMobileMenuOpen = false;
        document.getElementById('mobileMenu').classList.add('d-none');
        document.getElementById('menuIcon').classList.remove('d-none');
        document.getElementById('closeIcon').classList.add('d-none');
        renderCategories();
        renderProducts();
      }
    });
  
    // Mobile menu toggle
    document.getElementById('mobileMenuToggle').addEventListener('click', () => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
      const mobileMenu = document.getElementById('mobileMenu');
      const menuIcon = document.getElementById('menuIcon');
      const closeIcon = document.getElementById('closeIcon');
  
      if (state.isMobileMenuOpen) {
        mobileMenu.classList.remove('d-none');
        menuIcon.classList.add('d-none');
        closeIcon.classList.remove('d-none');
      } else {
        mobileMenu.classList.add('d-none');
        menuIcon.classList.remove('d-none');
        closeIcon.classList.add('d-none');
      }
    });
  }
  
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', init);
  