export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] },
};

export const softLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};
