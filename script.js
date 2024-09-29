const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');
const recipeTitle = document.getElementById('recipe-title');
const recipeImage = document.getElementById('recipe-image');
const recipeVegStatus = document.getElementById('recipe-veg-status');
const recipePrice = document.getElementById('recipe-price');

// Custom recipe data for modal information
const customRecipes = [
    {
        name: 'Veggie Delight',
        imgSrc: '/food1.jpg',
        isVegetarian: true,
        price: (Math.random() * 10 + 5).toFixed(2)
    },
    {
        name: 'Chicken Curry',
        imgSrc: './food2.jpeg',
        isVegetarian: false,
        price: (Math.random() * 10 + 5).toFixed(2)
    },
    {
        name: 'Pasta Primavera',
        imgSrc: './food3.jpg',
        isVegetarian: true,
        price: (Math.random() * 10 + 5).toFixed(2)
    },
    {
        name: 'Beef Steak',
        imgSrc: './food4.jpg',
        isVegetarian: false,
        price: (Math.random() * 10 + 5).toFixed(2)
    }
];

// Attach click events to recipe cards to show modal
document.querySelectorAll('.recipe-card img').forEach((img, index) => {
    img.addEventListener('click', () => {
        const recipe = customRecipes[index];
        showRecipeDetails(recipe.name, recipe.imgSrc, recipe.isVegetarian, recipe.price);
    });
});

// Function to show recipe details in the modal
function showRecipeDetails(title, image, isVegetarian, price) {
    recipeTitle.innerText = title;
    recipeImage.src = image;
    recipePrice.innerText = price;

    // Set veg or non-veg status
    if (isVegetarian) {
        recipeVegStatus.innerText = "Vegetarian";
        recipeVegStatus.classList.remove('non-veg');
    } else {
        recipeVegStatus.innerText = "Non-Vegetarian";
        recipeVegStatus.classList.add('non-veg');
    }

    modal.style.display = 'flex'; // Show the modal
}

// Close modal when the close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal if clicked outside the modal content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
