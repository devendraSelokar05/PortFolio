// Add a layout component to ensure proper width constraints
// Create a new layout component:

"use client";

export default function Layout({
  children
}) {
  return <div className="max-w-[100vw] overflow-x-hidden">{children}</div>;
}