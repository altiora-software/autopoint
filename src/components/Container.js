// components/Container.js
export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl ${className}`}
    >
      {children}
    </div>
  );
}
