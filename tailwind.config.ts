import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "cust-pink": {
          100: "#F7F2EE",
          200: "#E7DDD5",
          300: "#E0CCBE",
        },
        "cust-brown": {
          100: "#3C3633",
          200: "#1D1A19",
        },
        "cust-orange": {
          100: "#DA673D",
        },
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};

export default config;