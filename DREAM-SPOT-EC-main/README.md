# Dream Spot E-Commerce

A modern, responsive e-commerce web app for ordering authentic Tamil Nadu snacks and sweets. Built with React, Vite, and Tailwind CSS.

## Features

- 🏠 **Home Page**: Hero section, featured products, and highlights of traditional flavors.
- 🍲 **Menu**: Browse snacks and sweets, filter by category, add to cart, and buy instantly.
- 🛒 **Cart**: View, update, or remove items; adjust quantities; see order summary; place orders.
- 📦 **Orders**: View your order history with details and status.
- 🧭 **Navigation**: Sticky header with navigation links and cart/order badges.
- 📱 **Responsive Design**: Mobile-friendly layout and navigation.
- ⚡ **Fast & Modern**: Powered by Vite, React 19, and Tailwind CSS.

## Screenshots

_Screenshots are available in the `Screenshot-finsl-image/` directory._

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
Dream-Spot-Ec/
├── public/                # Static assets (images, logos, etc.)
├── src/
│   ├── components/        # React components (Home, Menu, Cart, Orders, etc.)
│   ├── context/           # React Context for cart and orders
│   ├── datas/             # Product data (snacks, sweets, featured)
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # Entry point
│   └── ...
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config (if present)
└── README.md              # Project documentation
```

## Main Dependencies
- [React](https://react.dev/) (v19)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/icons/)

## Customization
- **Product Data**: Edit `src/datas/Products` to add or modify snacks and sweets.
- **Images**: Add product images to the appropriate folders in `public/`.
- **Branding**: Update logo and site name in `src/components/Header.jsx` and `public/general/DS-Logo.png`.


---

## Developer

Developed by **LOKIiii**

---

Enjoy the taste of tradition with Dream Spot! ✨
