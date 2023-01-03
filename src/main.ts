import { createApp } from "vue";
import App from "./App.vue";
import router from "./route";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).use(router).mount("#app");
