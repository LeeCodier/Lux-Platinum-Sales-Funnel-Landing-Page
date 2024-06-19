import ScrollToPlugin from "gsap/ScrollToPlugin";
import gsap from "gsap";

gsap.registerPlugin(ScrollToPlugin);

export const ScrollToHook = (location: string) => {
  gsap.to(window, { scrollTo: { y: location }, duration: 2 });
};
