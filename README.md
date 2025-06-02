# LWS Shop - E-commerce Shopping Cart

A modern, responsive e-commerce shopping cart application built with React.js, featuring dynamic product management, real-time cart operations, and advanced state management using Context API and useReducer.

![LWS Shop Preview](https://via.placeholder.com/800x400/007bff/ffffff?text=LWS+Shop+E-commerce+Application)

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.com) | [GitHub Repository](https://github.com/your-username/lws-shop)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Concepts Learned](#key-concepts-learned)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🛍️ Product Management

- **Dynamic Product Rendering**: Products are rendered from a dummy data array
- **Product Information**: Each product displays name, price, stock, rating, and image
- **Stock Management**: Real-time stock updates based on cart operations
- **Out of Stock Handling**: Automatic button disabling when products are unavailable

### 🛒 Shopping Cart

- **Add to Cart**: Seamlessly add products to shopping cart
- **Remove from Cart**: Remove products with automatic stock restoration
- **Quantity Management**: Increase/decrease product quantities with +/- buttons
- **Stock Validation**: Prevents adding more items than available stock
- **Visual Feedback**: Button text changes based on cart status

### 🔍 Search & Filter

- **Real-time Search**: Search products by name with instant results
- **Advanced Sorting**: Sort by popularity, newest arrivals, and price
- **No Results Handling**: Displays "Not Found" message when no products match

### 💰 Order Management

- **Dynamic Calculations**: Real-time subtotal, discount, and total calculations
- **Fixed Discount**: 20% discount applied to all orders
- **Delivery Fee**: Fixed delivery charge included in total
- **Order Summary**: Detailed breakdown of all charges

### 📱 User Experience

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Intuitive Interface**: Clean, modern UI following e-commerce best practices
- **Real-time Updates**: Instant UI updates without page refreshes

## 🛠️ Tech Stack

### Frontend

- **React.js 18.2.0** - Component-based UI library
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling with Flexbox and Grid
- **Vite** - Fast build tool and development server

### State Management

- **Context API** - Global state management
- **useReducer Hook** - Complex state logic handling
- **React Hooks** - useState, useEffect, useContext

### Development Tools

- **Vite** - Build tool and development server
- **ESLint** - Code linting and quality assurance
- **React Developer Tools** - Browser extension for debugging

## 🎯 Learning Objectives

This project demonstrates mastery of the following React concepts:

### Core React Concepts

- ✅ **Functional Components** - Modern React component patterns
- ✅ **React Hooks** - useState, useEffect, useContext, useReducer
- ✅ **Props & State** - Data flow and component communication
- ✅ **Event Handling** - User interaction management
- ✅ **Conditional Rendering** - Dynamic UI based on state

### Advanced State Management

- ✅ **Context API** - Global state without prop drilling
- ✅ **useReducer** - Complex state logic and actions
- ✅ **State Normalization** - Efficient data structure management
- ✅ **Immutable Updates** - Proper state mutation patterns

### Real-world Application Features

- ✅ **CRUD Operations** - Create, Read, Update, Delete functionality
- ✅ **Search & Filter** - Data manipulation and display
- ✅ **Form Handling** - User input management
- ✅ **Responsive Design** - Mobile-first development approach

## 📋 Requirements

### System Requirements

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0 or **yarn** >= 1.22.0
- **Modern Web Browser** (Chrome, Firefox, Safari, Edge)

### Development Environment

- **Code Editor** (VS Code recommended)
- **Git** for version control
- **React Developer Tools** browser extension (optional but recommended)

## 🚀 Installation

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/lws-shop.git
cd lws-shop
\`\`\`

### 2. Install Dependencies

\`\`\`bash

# Using npm

npm install

# Using yarn

yarn install
\`\`\`

### 3. Start Development Server

\`\`\`bash

# Using npm

npm run dev

# Using yarn

yarn dev
\`\`\`

### 4. Open in Browser

Navigate to `http://localhost:5173` in your web browser.

### 5. Build for Production

\`\`\`bash

# Using npm

npm run build

# Using yarn

yarn build
\`\`\`

## 🎮 Usage

### Adding Products to Cart

1. Browse the product grid in the "Your Products" section
2. Click "Add to Cart" button on any available product
3. Product will appear in the "YOUR CART" section
4. Stock will automatically decrease

### Managing Cart Items

1. **Increase Quantity**: Click the "+" button next to any cart item
2. **Decrease Quantity**: Click the "-" button (minimum quantity is 1)
3. **Remove Item**: Click the "×" button to remove item completely

### Searching Products

1. Use the search bar in the header
2. Type product name to filter results
3. Clear search to show all products

### Sorting Products

1. Use the "Sort by" dropdown next to "Your Products"
2. Choose from:
   - **Most Popular** - Based on popularity rating
   - **Newest** - Based on date added
   - **Price** - Lowest to highest price

## 📁 Project Structure

\`\`\`
lws-shop/
├── public/
│ ├── vite.svg
│ └── placeholder.svg
├── src/
│ ├── components/
│ │ ├── Header.jsx # Navigation and search
│ │ ├── ProductGrid.jsx # Product listing container
│ │ ├── ProductCard.jsx # Individual product display
│ │ ├── Cart.jsx # Shopping cart container
│ │ └── CartItem.jsx # Individual cart item
│ ├── context/
│ │ └── CartContext.jsx # Global state management
│ ├── App.jsx # Main application component
│ ├── App.css # Global styles
│ └── main.jsx # Application entry point
├── index.html # HTML template
├── package.json # Dependencies and scripts
├── vite.config.js # Vite configuration
└── README.md # Project documentation
\`\`\`

## 🧠 Key Concepts Learned

### 1. Context API Implementation

\`\`\`javascript
// Creating Context
const CartContext = createContext()

// Provider Component
export const CartProvider = ({ children }) => {
const [state, dispatch] = useReducer(cartReducer, initialState)

return (
<CartContext.Provider value={{ ...state, ...actions }}>
{children}
</CartContext.Provider>
)
}

// Custom Hook
export const useCart = () => {
const context = useContext(CartContext)
if (!context) {
throw new Error('useCart must be used within a CartProvider')
}
return context
}
\`\`\`

### 2. useReducer for Complex State

\`\`\`javascript
const cartReducer = (state, action) => {
switch (action.type) {
case 'ADD_TO_CART':
// Complex state update logic
return { ...state, /_ updated state _/ }
case 'REMOVE_FROM_CART':
// Another state update
return { ...state, /_ updated state _/ }
default:
return state
}
}
\`\`\`

### 3. State Management Patterns

- **Immutable Updates**: Always return new state objects
- **Action Creators**: Consistent action dispatching
- **State Normalization**: Efficient data structure organization
- **Derived State**: Computing values from existing state

### 4. Component Communication

- **Props Down**: Passing data to child components
- **Events Up**: Handling user interactions
- **Context**: Sharing state across component tree
- **Custom Hooks**: Reusable stateful logic

### 5. Real-world Application Patterns

- **CRUD Operations**: Create, Read, Update, Delete
- **Search & Filter**: Data manipulation techniques
- **Form Handling**: User input validation and processing
- **Error Boundaries**: Graceful error handling

## 🔧 API Reference

### CartContext Methods

#### `addToCart(product)`

Adds a product to the shopping cart and decreases stock.

**Parameters:**

- `product` (Object) - Product object to add

#### `removeFromCart(productId)`

Removes a product from cart and restores stock.

**Parameters:**

- `productId` (Number) - ID of product to remove

#### `increaseQuantity(productId)`

Increases quantity of cart item by 1.

**Parameters:**

- `productId` (Number) - ID of product to update

#### `decreaseQuantity(productId)`

Decreases quantity of cart item by 1.

**Parameters:**

- `productId` (Number) - ID of product to update

#### `setSearchTerm(term)`

Updates the search filter.

**Parameters:**

- `term` (String) - Search term to filter products

#### `setSortBy(sortType)`

Updates the sort criteria.

**Parameters:**

- `sortType` (String) - One of: 'popularity', 'newest', 'price'

### State Structure

\`\`\`javascript
{
products: [
{
id: Number,
name: String,
price: Number,
originalStock: Number,
currentStock: Number,
image: String,
rating: Number,
popularity: Number,
dateAdded: Date
}
],
cartItems: [
{
id: Number,
name: String,
price: Number,
image: String,
quantity: Number
}
],
searchTerm: String,
sortBy: String
}
\`\`\`

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the Repository**
2. **Create Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to Branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

### Development Guidelines

- Follow existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Learn with Sumit** - For providing the assignment requirements
- **React Team** - For the amazing React library
- **Vite Team** - For the fast build tool
- **Community** - For inspiration and best practices

## 📞 Contact

**Your Name** - [your.email@example.com](mailto:your.email@example.com)

**Project Link** - [https://github.com/your-username/lws-shop](https://github.com/your-username/lws-shop)

---

⭐ **Star this repository if you found it helpful!**

---

_This project was created as part of a React.js learning assignment focusing on Context API, useReducer, and modern React patterns._
\`\`\`

This comprehensive README file includes:

1. **Complete project overview** with features and screenshots
2. **Detailed tech stack** explanation
3. **Learning objectives** that align with your assignment
4. **Step-by-step installation** instructions
5. **Usage guide** for all features
6. **Project structure** breakdown
7. **Key concepts learned** with code examples
8. **API reference** for the Context methods
9. **Contributing guidelines** for collaboration
10. **Professional formatting** with emojis and clear sections

The README demonstrates your understanding of:

- React fundamentals
- Context API and useReducer
- State management patterns
- Component architecture
- Real-world application development
- Documentation best practices
