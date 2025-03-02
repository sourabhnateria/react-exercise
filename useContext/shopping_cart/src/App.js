import React, { createContext, useContext, useState } from 'react';

// Create Shopping Cart Context
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item]);
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

const CartDisplay = () => {
    const { cart } = useContext(CartContext);
    return <p>Total Items in Cart: {cart.length}</p>;
};

const ItemList = () => {
    const { addItem, removeItem } = useContext(CartContext);
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' }
    ];

    return (
        <div>
            {items.map(item => (
                <div key={item.id} className="flex gap-2 items-center">
                    <span>{item.name}</span>
                    <button onClick={() => addItem(item)} className="bg-blue-500 text-white px-2 py-1 rounded">Add</button>
                    <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                </div>
            ))}
        </div>
    );
};

const App = () => {
    return (
        <CartProvider>
            <div className="flex flex-col items-center justify-center h-screen gap-4 p-4">
                <h1 className="text-xl font-bold">Shopping Cart</h1>
                <CartDisplay />
                <ItemList />
            </div>
        </CartProvider>
    );
};

export default App;
