import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast.one", {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".toast.one", {
        delay: 2.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power.in",
        onComplete: () => {
        //   Now display second toast after first completes
        gsap.to(".toast.two", {
            y: -120,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power4.out",
            onComplete: () => {
              gsap.to(".toast.two", {
                delay: 2.5,
                y: 0,
                opacity: 0,
                scale: 0.95,
                duration: 0.7,
                ease: "power.in",
                onComplete: () => {
                    setTimeout(showToastLoop, 2500);
                },
              });
            },
        });
        },
      });
    },
  });
};

showToastLoop();
