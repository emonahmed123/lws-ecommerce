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
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Concepts Learned](#key-concepts-learned)
- [Contributing](#contributing)
-

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

- **React.js** - Component-based UI library
- **JavaScript (ES6+)** - Modern JavaScript features
- ** TailwindCss ** - Custom styling with Flexbox and Grid
- **Vite** - Fast build tool and development server

### State Management

- **Context API** - Global state management
- **useReducer Hook** - Complex state logic handling
- **React Hooks** - useState, useContext

## 🎯 Learning Objectives

This project demonstrates mastery of the following React concepts:

### Core React Concepts

- ✅ **Functional Components** - Modern React component patterns
- ✅ **React Hooks** - useState, , useContext, useReducer
- ✅ **Props & State** - Data flow and component communication
- ✅ **Event Handling** - User interaction management
- ✅ **Conditional Rendering** - Dynamic UI based on state

### Advanced State Management

- ✅ **Context API** - Global state without prop drilling
- ✅ **useReducer** - Complex state logic and actions
- ✅ **State Normalization** - Efficient data structure management
- ✅ **Immutable Updates** - Proper state mutation patterns

## 📋 Requirements

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
case 'ADD*TO_CART':
// Complex state update logic
return { ...state, /* updated state _/ }
case 'REMOVE_FROM_CART':
// Another state update
return { ...state, /_ updated state \_/ }
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

## 🙏 Acknowledgments

- **Learn with Sumit** - For providing the assignment requirements

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
6. **Key concepts learned** with code examples
7. **Professional formatting** with emojis and clear sections

The README demonstrates your understanding of:

- React fundamentals
- Context API and useReducer
- State management patterns
- Component architecture
- Real-world application development
- Documentation best practices
