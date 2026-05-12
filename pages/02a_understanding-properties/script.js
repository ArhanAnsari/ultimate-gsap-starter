import gsap from "gsap";

gsap.to(".box", {
  //   x: 200, // Move the box 200 pixels to the right
  //   x: -200, // Move the box 200 pixels to the right
  y: -200, // Move the box 100 pixels down
  opacity: 1,
  rotation: 360, // Rotate the box 360 degrees
  background: "#ff6f61", // Change the background color to a vibrant red
  borderRadius: "50%", // Make the box circular
  scale: 1.25, // Scale the box up to 125% of its original size
  duration: 2, // Animation duration of 2 seconds
  delay: 1, // Delay the animation by 1 seconds
  ease: "power1.inOut", // Use an easing function for a smoother animation
  //   repeat: 2, // Repeat the animation 2 times
  repeat: -1, // Repeat the animation infinitely
  yoyo: true, // Make the animation reverse back and forth
  repeatDelay: 1, // Add a delay between repeats
  pause: true, // Start the animation in a paused state
  stagger: 1, // Stagger the animation of multiple elements by 1 seconds
  //   onComplete: () => console.log("Animation complete!"), // Callback function when the animation completes
  //   onStart: () => console.log("Animation started!"), // Callback function when the animation starts
  //   onUpdate: () => console.log("Animation updated!"), // Callback function on every update of the animation
  //   rotationY: 360, // Rotate the box 360 degrees along the Y-axis for a 3D effect
  //   rotationX: 360, // Rotate the box 360 degrees along the X-axis for a 3D effect
  //   scaleX: 1.25, // Scale the box up to 125% of its original size along the X-axis
  //   scaleY: 1.25, // Scale the box up to 125% of its original size along the Y-axis
});
