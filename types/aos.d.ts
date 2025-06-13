declare module 'aos' {
  const AOS: {
    init: (options?: {
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
      offset?: number;
      delay?: number;
    }) => void;
    refresh: () => void;
    refreshHard: () => void;
  };
  export default AOS;
} 