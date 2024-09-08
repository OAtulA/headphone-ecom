import React, { useEffect, useState } from "react";

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Set the drawer to be open on larger screens
      if (window.innerWidth > 640) {
        setIsChecked(true); // Open the drawer for larger screens
      } else {
        setIsChecked(false); // Close the drawer for small screens
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-yellow-100">
      <div className="drawer max-sm:drawer-end relative">
        <input 
          id="my-drawer-4" 
          type="checkbox" 
          checked={isChecked} 
          className="drawer-toggle" 
          onChange={() => setIsChecked(!isChecked)} // Toggle the drawer state
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary sm:float-end"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side fixed sm:absolute">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-4/5 sm:w-2/5 md:w-1/3 lg:w-[20%] xl:w-[24%] 2xl:w-[18%] p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
