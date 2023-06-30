import SortedTable from "./components/SortedTable.vue";
import SortLink from "./components/SortLink.vue";

const SortedTablePlugin = {
  install: (app) => {
    app.component("SortedTable", SortedTable);
    app.component("SortLink", SortLink);

    // if (config) {
    //   app.config.globalProperties.$sortedTable = config;
    // } else {
    //   app.config.globalProperties.$sortedTable = {};
    // }

    // if (!app.config.globalProperties.$sortedTable.ascIcon) {
    //   app.config.globalProperties.$sortedTable.ascIcon = "<span> ▲</span>";
    // }

    // if (!app.config.globalProperties.$sortedTable.descIcon) {
    //   app.config.globalProperties.$sortedTable.descIcon = "<span> ▼</span>";
    // }

    // if (!app.config.globalProperties.$_ && typeof window !== "undefined" && window._) {
    //   app.config.globalProperties.$_ = window._;
    // }
  },
};

// // Automatic installation if Vue has been added to the global scope.
// if (typeof window !== "undefined" && window.Vue) {
//   window.Vue.use(SortedTablePlugin);
// }

export default SortedTablePlugin;

export { SortedTable, SortLink };
