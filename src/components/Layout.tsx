import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-sky-100">
      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
