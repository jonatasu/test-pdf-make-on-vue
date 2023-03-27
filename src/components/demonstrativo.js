export const pdfTemplate = (msg) => {
  const template = {
    content: [
      {
        style: "defaultTable",
        table: {
          widths: ["*", "45%"],
          body: [
            [
              [
                {
                  table: {
                    widths: ["*"],
                    border: [false, false, false, false],
                    fillColor: 'blue',
                    body: [
                      [
                        {
                          border: [false, false, false, false],
                          fillColor: 'red',
                          text: [
                            {
                              text: "Ministério da Fazenda",
                              style: "header"
                            }
                          ]
                        }
                      ]
                    ]
                  },
                }
              ],
              [
                { text: " ", style: "header" },
                {
                  alignment: "center",
                  text: "Informe de Rendimentos Pagos e de\n",
                  lineHeight: 1.6
                },
                {
                  alignment: "center",
                  text: "Imposto sobre a Renda Retido na Fonte\n",
                  lineHeight: 1.6
                },
                {
                  alignment: "center",
                  bold: true,
                  italics: true,
                  text: "Ano-calendário de 2023",
                  lineHeight: 1.6
                },
                {
                  alignment: "center",
                  bold: true,
                  italics: true,
                  text: msg,
                  lineHeight: 1.6
                }
              ]
            ]
          ]
        },
        layout: {
          fillColor: function (rowIndex) {
            return (rowIndex === 0) ? 'blue' : 'white';
          }
        }
      },
      {
        style: "defaultTable",
        table: {
          widths: ["*"],
          body: [
            [
              {
                alignment: "center",
                text: "Teste"
              }
            ]
          ]
        },
        layout: {
          hLineColor() {
            return "#dddddd";
          },
          vLineColor() {
            return "#dddddd";
          }
        }
      },
      {
        text: "1. Fonte Pagadora Pessoa Jurídica",
        style: "subheader"
      }
    ],
    styles: {
      header: {
        fontSize: 11,
        bold: true,
        alignment: "center",
        margin: [0, 14, 0, 0]
      },
      subheader: {
        fontSize: 10,
        margin: [0, 10, 0, 0]
      },
      defaultTable: {
        margin: [0, 5, 0, 15]
      },
      defaultTableNoMargin: {
        margin: [0, 0, 0, 0]
      }
    },
    defaultStyle: {
      fontSize: 9
    }
  };
  console.log(template);
  return template;
};
