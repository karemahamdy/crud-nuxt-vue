import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dialog from "primevue/dialog";
import Aura from '@primeuix/themes/aura';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
    theme: {
      // preset: Aura, // الافتراضي
      options: {
        // darkModeSelector: '.dark' // يربط مع Tailwind Dark Mode
      }
    }
  });
  nuxtApp.vueApp.component("InputText", InputText);
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("DataTable", DataTable);
  nuxtApp.vueApp.component("Column", Column);
  nuxtApp.vueApp.component("Dialog", Dialog);
});
