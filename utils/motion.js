export function slideInFromTop(delay){
  return {
    hidden: {y: -100, opacity:0},
    visible:{
      y:0,
      opacity:1,
      transition:{
        delay:delay,
        duration:0.5,
      },
    },
  };
}

export function slideInFromBottom(delay){
  return {
    hidden: {y: 100, opacity:0},
    visible:{
      y:0,
      opacity:1,
      transition:{
        delay:delay,
        duration:0.5,
      },
    },
  };
}

export function slideInFromLeft(delay){
  return {
    hidden: {x: -100, opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{
        delay:delay,
        duration:0.5,
      },
    },
  };
  
}

export function slideInFromRight(delay){
  return {
    hidden: {x: 100, opacity:0},
    visible:{
      x:0,
      opacity:1,
      transition:{
        delay:delay,
        duration:0.5,
      },
    },
  };
}

export const fadeInText = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

export const slideInImage = {
  hidden: {
    opacity: 0,
    y: 120,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}