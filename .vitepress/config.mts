import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tree documentation",
  description:
    "Welcome to the official documentation for the Dynamic Tree Data Structure.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Usage", link: "/usage" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Usage", link: "/usage" },
          { text: "Tree Features", link: "/introduction" },
          { text: "requirements", link: "/Requirements" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Nest Deeper Levels", link: "/nestDeeperLevels" },
          { text: "Export as JSON", link: "/exportJSON" },
          { text: "Tree with check boxes", link: "/checkedTree" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
