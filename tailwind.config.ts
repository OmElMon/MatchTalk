import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050B18",
        panel: "#0C1628",
        line: "#1A2940",
        electric: "#367BFF",
        flare: "#FF7A1A",
        mist: "#93A4BE",
      },
      boxShadow: {
        glow: "0 0 30px rgba(54, 123, 255, 0.18)",
        card: "0 18px 55px rgba(0, 0, 0, 0.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;
