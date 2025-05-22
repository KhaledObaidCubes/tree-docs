import DefaultTheme from "vitepress/theme";
import { VueLiveEditor, VueLivePreview } from "vue-live";
import MyComponent from "../components/generic-tree.vue";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("LiveEditor", VueLiveEditor);
    app.component("LivePreview", VueLivePreview);
    app.component("green", MyComponent);
  },
};

// enhanceApp({ app, router, siteData }) {
//   router.onAfterRouteChanged = (to)  => {
//     document.querySelector('#app').setAttribute('data-route', to)
//   }
// },
// #app[data-route="/"] {
//   --vp-sidebar-bg-color: none;

//   #VPSidebarNav {
//     display: none;
//   }

//   .VPNavBarTitle .title {
//     border-bottom-color: transparent;
//   }
// }