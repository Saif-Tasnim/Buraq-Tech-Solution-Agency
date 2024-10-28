// index.tsx
import dynamic from "next/dynamic";

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import("./Map"), { ssr: false });

export default Map;
