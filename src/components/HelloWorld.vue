<template>
  <div class="hello">
    <h1>Teste pdfMAKE</h1>
    <button @click="gerarPDF()">Gerar PDF</button>
  </div>
</template>

<script>
import { pdfTemplate } from "./demonstrativo";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      pdfMake: null,
      pdfFonts: null,
    };
  },
  methods: {
    async getPDFmake() {
      if (!this.pdfMake) {
        this.pdfMake = (await import("pdfmake/build/pdfmake.js")).default;
      }
      return this.pdfMake;
    },
    async getPDFfonts() {
      if (!this.pdfFonts) {
        this.pdfFonts = (await import("pdfmake/build/vfs_fonts.js")).default;
      }
      return this.pdfFonts;
    },
    async gerarPDF() {
      console.log("entrou");
      const filename = "informe-rendimentos-2023-2020";
      const pdfMake = await this.getPDFmake();
      console.log("pdfMake: ", pdfMake);
      const pdfFonts = await this.getPDFfonts();
      console.log("pdfFonts: ", pdfFonts);
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
      console.log("pdfMake.vfs: ", pdfMake.vfs);

      const template = await pdfTemplate("oi!");
      console.log("template: ", template);

      pdfMake.createPdf(template).download(filename);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
