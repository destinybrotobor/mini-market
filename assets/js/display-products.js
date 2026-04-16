let displayFeaturedProduct = (products) => {
    let featureProduct = products.filter((product) => product.isFeatured == true)
    let productCard = '';

    featureProduct.forEach((productData, index) => {
        // console.log(productData);

        if (index < 6) {
            productCard += `<div class="min-w-40 relative">
            <div class="w-full bg-slate-200 h-32 overflow-hidden flex justify-center items-center">
                <img src="${productData.images[0]}" alt="${productData.name}" class="object-cover" />
            </div>
            <div class="flex flex-col p-1">
                <h4>${productData.name}</h4>
                <span class="font-semibold">₦ ${productData.price}</span>
                <span class="line-through text-gray-500">₦ ${productData.originalPrice}</span>
                <span>${productData.stock} items left</span>
                <div class="w-35 lg:w-40 bg-gray-200 h-2 rounded-full mt-4">
                    <div class="bg-red-600 h-2 rounded-full w-1/5"></div>
                </div>
            </div>
            <div class="absolute top-0 left-25.25">
                <span class="bg-amber-300 text-amber-800 rounded-[5px] px-2.5">-${productData.discountPercent}%</span>
            </div>
        </div>`;
        }

        document.getElementById('featured-product-element').innerHTML = productCard;
    });
}

// Fetching Products
fetch('../assets/store/products.json')
    .then((response) => response.json())
    .then((data) => {
        displayFeaturedProduct(data.products);
    })


// Display Categories
let displayCategories = (categoryList) => {
    let categoriesContainer = document.getElementById('categories-container');
    let categoriesCard = '';

    categoryList.forEach((category, index) => {
        categoriesCard += `<div class="min-h-20 hover:shadow-lg bg-white hover:scale-105 transition-all duration-200 rounded-lg">
                <aside class="h-64 overflow-hidden flex justify-center items-center rounded-lg">
                    <img src="${category.thumbnail}" class="w-full min-h-full object-cover" />
                </aside>
                <p class="text-center text-base py-2 px-4">${category.name}</p>
            </div>`
    })
    categoriesContainer.innerHTML = categoriesCard;
}

// Fetch the categories
fetch('../assets/store/products.json')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        displayCategories(data.categories)
    })

