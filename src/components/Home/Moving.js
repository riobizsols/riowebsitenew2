import React, { useState, useEffect } from "react";
import Riologo from '../../assets/images/riologo.png';

function InfiniteMovingIcon() {
  const Riologo ="https://res.cloudinary.com/dhzg3dnfc/image/upload/v1732599933/rio_main_website/wx9qqfbghlhzhykmqx6v.png"
  const [position, setPosition] = useState(0); // Initial position of the icon
  const [direction, setDirection] = useState(1); // Direction: 1 means forward, -1 means backward
  const [maxPosition, setMaxPosition] = useState(0); // Maximum position (dynamic based on screen width)
  const [minPosition] = useState(20); // Minimum position

  const step = 5; // Define how many pixels the icon should move with each step

  // This function calculates the maximum boundary based on the window width
  const iconWidth = 36;
  const calculateMaxPosition = () => {
    const windowWidth = window.innerWidth;
    setMaxPosition(windowWidth - iconWidth - 24);
  };

  useEffect(() => {
    // Calculate the max position whenever the screen size changes (responsive)
    calculateMaxPosition();
    window.addEventListener("resize", calculateMaxPosition); // Listen for window resize

    return () => {
      window.removeEventListener("resize", calculateMaxPosition); // Clean up the event listener on component unmount
    };
  }, []);

  useEffect(() => {
    // Set up a timer to move the icon every 50ms
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        // Determine the next position
        const nextPosition = prevPosition + step * direction;

        // Check if the icon has reached either boundary
        if (nextPosition >= maxPosition) {
          setDirection(-1); // Change direction to backward
          return maxPosition; // Ensure position is set to the maximum position
        } else if (nextPosition <= minPosition) {
          setDirection(1); // Change direction to forward
          return minPosition; // Ensure position is set to the minimum position
        }

        return nextPosition; // Update to the next position
      });
    }, 50); // Adjust the interval timing as needed

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [direction, maxPosition]); // Dependency array includes direction and maxPosition to ensure the effect runs when they change

  return (
    <div className="moving-icon-wrap">
      <img
        src={Riologo}
        alt="Logo"
        style={{
          position: "absolute",
          left: `${position}px`,
          transition: "left 0.05s linear",
          width: 36,
          height: 36,
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default InfiniteMovingIcon;
