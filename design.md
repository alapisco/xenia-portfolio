# Design Documentation

## Hamburger Menu

### Overview

The hamburger menu provides a responsive navigation solution for smaller screen sizes. On larger screens, the navigation links are displayed horizontally. On smaller screens, they are collapsed into a hamburger icon that, when clicked, reveals a full-screen mobile menu.

### Functionality

1.  **State Management**: The visibility of the mobile menu is controlled by a React state variable, `isMenuOpen`, which is initialized to `false`.

2.  **Responsive Visibility**:
    - The main navigation bar (`<nav>`) is visible on medium screens and larger (`md:flex`) and hidden on smaller screens (`hidden`).
    - The hamburger button is hidden on medium screens and larger (`md:hidden`) and visible on smaller screens.

3.  **User Interaction**:
    - **Opening the Menu**: Clicking the hamburger icon triggers the `toggleMenu` function, which sets `isMenuOpen` to `true`, causing the mobile menu to be rendered.
    - **Closing the Menu**: The menu can be closed in two ways:
      - Clicking a navigation link within the mobile menu.
      - (If implemented) Clicking an overlay or a close button.

### Component Structure (`App.jsx`)

```jsx
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="absolute right-28 top-10 hidden gap-20 text-brand-text/90 md:flex">
        {/* ... navigation links ... */}
      </nav>

      {/* Hamburger Button */}
      <div className="absolute right-10 top-10 z-50 md:hidden">
        <button onClick={toggleMenu} className="text-brand-text/90">
          <svg
            className="h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-bg md:hidden">
          <nav className="mt-24 flex flex-col items-center gap-10">
            {/* ... mobile navigation links ... */}
          </nav>
        </div>
      )}
    </>
  );
}
```

### SVG Icon

The SVG icon is inlined directly into the JSX. This allows the SVG's `stroke` property to be set to `currentColor`, which makes it inherit the text color of its parent button. This is a reliable method for ensuring the icon's color matches the surrounding UI elements.

Using an `<img>` tag with an SVG source does not allow for color inheritance in the same way.
