


var widgetProps = {};

var booleandisplaybutton = true;

var configuration = [
    {
        data_shape_column_name: "time",
        header_name: "Time",
        width: "84",
    },

    {
        data_shape_column_name: "shift",
        header_name: "Shift",
        width: "64",
    },
    {
        data_shape_column_name: "potlife",
        header_name: "Potlife",
        width: "124",
    },
    
];






var data_from_thingworx = [
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 2,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 2,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 2,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 2,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 2,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 2,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 2,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 2,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },
    {
        time: 1,
        shift: 1,
        potlife: 1,
    },

    {
        time: 2,
        shift: 1,
        potlife: 1,
    },
];

// var doc_information = [];
// var jsondocinfomration =  {"Document No.": 'STRING', "Revision No.": 'STRING'}
// for (x in jsondocinfomration){

//     doc_information.push({name : x ,value : widgetProps.x })

// }
var doc_information = [

];

var widhtimage = 20;
var heightimage = 20;
var booleanpdf = true;
var booleanexcell = true;

var file_name = "filename-data";
var header_name = "Form - EX-MACHINE INSPECTION SHEET";

var header_information = [];
// var jsonheader_information =  {"Country": 'STRING', "Plant": 'STRING'}

// for ( x in jsonheader_information){

//     header_information  .push({name : x ,value : widgetProps.x })

// }

var dashboard_information = [];

// var jsondashboard_information =  {"MACHINE SPEED": 'STRING'}

// for ( x in jsondashboard_information){
//     dashboard_information .push({name : x ,value : widgetProps.x })

// }

//batas inpput

var header_column = [];

configuration.forEach((element) => {
    header_column.push(element.header_name);
});

var datatable = [];

data_from_thingworx.forEach((elementi, i) => {
    var tempdatatable = [];

    configuration.forEach((elementj, j) => {
        var tempelemnt = null;

        if (elementi[elementj.data_shape_column_name]) {
            tempelemnt = elementi[elementj.data_shape_column_name];
        }

        tempdatatable.push(tempelemnt);
    });

    datatable.push(tempdatatable);
});

var colgroupdata = [
    { name: "colum1", width: "161" },
    { name: "colum2", width: "84" },
    { name: "colum3", width: "64" },
    { name: "colum4", width: "94" },
    { name: "colum5", width: "84" },
    { name: "colum6", width: "64" },
    { name: "colum7", width: "124" },
    { name: "colum8", width: "64" },
    { name: "colum9", width: "64" },
    { name: "colum10", width: "104" },
    { name: "colum11", width: "64" },
    { name: "colum12", width: "64" },
    { name: "colum13", width: "64" },
    { name: "colum14", width: "64" },
    { name: "colum15", width: "64" },
];

configuration.forEach((element, i) => {
    colgroupdata[i + 1] = {
        name: element.data_shape_column_name,
        width: element.width,
    };
});

colgroupdata.push({ name: "colum16", width: "64" });
var idRandom =  "ExtractableProtein_ASTMD5712_" ;
//   Math.floor(Math.random() * 1000000)
var imageexport = d3
    .select("body")
    .append("img")
    .style("cursor", "pointer")
    .style("display", function () {
        if (booleandisplaybutton) {
            return "";
        } else {
            return "none";
        }
    })
    .attr(
        "src",
        "data:image/png;base64,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"
    )
    .attr("id", "buttonimage"+idRandom)
    .attr("alt", "button-export")
    .attr("width", widhtimage + "px")
    .attr("height", heightimage + "px")
    .attr("title", function () {
        if (booleanpdf && booleanexcell) {
            return "Export to PDF & Excel";
        } else if (!booleanpdf && !booleanexcell) {
            return "Select Type Export";
        } else if (!booleanexcell) {
            return "Export to PDF";
        } else {
            return "Export to Excel";
        }
    })
    .on("click", function (d, i) {
        if (booleanpdf && booleanexcell) {
            converHTMLToCanvas("testTable"+idRandom, file_name, true);
        } else if (!booleanpdf && !booleanexcell) {
        } else if (!booleanexcell) {
            converHTMLToCanvas("testTable"+idRandom, file_name);
        } else {
            tableToExcel("testTable"+idRandom, "worksheet", file_name);
        }
    });

var divbody = d3.select("body").append("div").attr("id", "root"+idRandom);


function makeTable(idtable, classtable) {
    var table = divbody
        .append("table")
        .attr("cellspacing", "0")
        .attr("border", "0")
        .attr("id", idtable)
        .attr("class", classtable)
        .style("box-sizing", "border-box")
        .style("border-collapse", "collapse")
        .style("table-layout", "fixed")
        .style("width", "fit-content")
        
       


    table
        .selectAll("colgroup")
        .data(colgroupdata)
        .enter()
        .append("colgroup")

        .attr("width", function (d, i) {
            return d.width;
        });

    var tbody = table.append("tbody");
    var rowheader1 = tbody.append("tr").attr("id", "header_table" + idtable);
    rowheader1
        .append("td")
        .attr("rowspan", function () {
            if (doc_information.length > 0) return doc_information.length;
            return 1;
        })
        .attr("id", "image_hansell")
        .attr("height", "141")
        .attr("align", "center")
        .style("border", "1px solid #000000")
        .style("vertical-align", "middle")
        .style("font-size", "30px")
        .style("font-weight", "bold")
        .style("font-family", "Arial")
        .style("color", "#000000")

        .text("")
        .append("img")
        .attr("id", "image_hansell_img" + idtable)
        .attr("src", "");

    rowheader1
        .append("td")
        .attr("rowspan", function () {
            if (doc_information.length > 0) return doc_information.length;
            return 1;
        })
        .attr("colspan", colgroupdata.length - 7)
        .style("border", "1px solid #000000")
        .style("vertical-align", "middle")
        .style("font-weight", "bold")
        .style("text-align", "center")
        .style("font-size", "30px")
        .style("font-family", "Arial")
        .style("color", "#000000")
        // .style("text-transform", "uppercase")

        .text(header_name);
    if (doc_information.length == 0) {
        d3.select("#header_table" + idtable)
            .append("td")
            .attr("colspan", "3")
            .style("border", "1px solid #000000")
            .style("vertical-align", "middle")
            .style("text-align", "left")
            .style("font-size", "18px")
            .style("font-family", "Arial")
            .style("color", "#000000")
            .text("");

        d3.select("#header_table" + idtable)
            .append("td")
            .attr("colspan", "3")
            .style("border", "1px solid #000000")
            .style("vertical-align", "middle")
            .style("text-align", "left")
            .style("font-size", "18px")
            .style("font-family", "Arial")
            .style("color", "#000000")
            .text("");
    } else {
        doc_information.forEach((element, i) => {
            if (i == 0) {
                // tr1

                d3.select("#header_table" + idtable)
                    .append("td")
                    .attr("colspan", "3")

                    .style("border", "1px solid #000000")
                    .style("vertical-align", "middle")
                    .style("text-align", "left")
                    .style("font-size", "18px")
                    .style("font-family", "Arial")
                    .style("color", "#000000")

                    .text(element.name);

                d3.select("#header_table" + idtable)
                    .append("td")
                    .attr("colspan", "3")
                    .attr("id", element.name + idtable)
                    .style("border", "1px solid #000000")
                    .style("vertical-align", "middle")
                    .style("text-align", "left")
                    .style("font-size", "18px")
                    .style("font-family", "Arial")
                    .style("color", "#000000")

                    .text(element.value);
            } else {
                var rowheader1 = tbody.append("tr");
                rowheader1
                    .append("td")
                    .attr("colspan", "3")
                    .style("border", "1px solid #000000")
                    .style("vertical-align", "middle")
                    .style("text-align", "left")
                    .style("font-size", "18px")
                    .style("font-family", "Arial")
                    .style("color", "#000000")

                    .text(element.name);
                rowheader1
                    .append("td")
                    .attr("colspan", "3")
                    .attr("id", element.name + idtable)
                    .style("border", "1px solid #000000")
                    .style("vertical-align", "middle")
                    .style("text-align", "left")
                    .style("font-size", "18px")
                    .style("font-family", "Arial")
                    .style("color", "#000000")

                    .text(element.value);
            }
        });
    }

    var row_header_information = Math.ceil(header_information.length / 5);
    var count_row_header_information = 1;

    //header_information
    while (count_row_header_information <= row_header_information) {
        var rowheader1 = tbody.append("tr");
        var countcolumn = 0;

        header_information
            .slice(
                0 + (count_row_header_information - 1) * 5,
                5 + (count_row_header_information - 1) * 5
            )
            .forEach((element_header_information, i_header_information) => {
                countcolumn += 3;
                rowheader1
                    .append("td")
                    .attr("height", "21")
                    .style("border-top", function () {
                        if (count_row_header_information == 1)
                            return "1px solid #000000";
                        return "";
                    })
                    .style("border-bottom", function () {
                        if (
                            count_row_header_information ==
                            row_header_information
                        )
                            return "1px solid #000000";
                        return "";
                    })
                    .style("border-left", function () {
                        if (i_header_information == 0) {
                            return "1px solid #000000";
                        }
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")

                    .text(element_header_information.name + " :");

                rowheader1
                    .append("td")
                    .style("border-top", function () {
                        if (count_row_header_information == 1)
                            return "1px solid #000000";
                        return "";
                    })
                    .style("border-bottom", function () {
                        if (
                            count_row_header_information ==
                            row_header_information
                        )
                            return "1px solid #000000";
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .style("background-color", "#FFFF00")

                    .text(element_header_information.value);

                rowheader1
                    .append("td")
                    .style("border-top", function () {
                        if (count_row_header_information == 1)
                            return "1px solid #000000";
                        return "";
                    })
                    .style("border-bottom", function () {
                        if (
                            count_row_header_information ==
                            row_header_information
                        )
                            return "1px solid #000000";
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text("");
            });

        countcolumn++;
        while (countcolumn <= colgroupdata.length) {
            if (countcolumn !== colgroupdata.length) {
                rowheader1
                    .append("td")
                    .style("border-top", function () {
                        if (count_row_header_information == 1)
                            return "1px solid #000000";
                        return "";
                    })
                    .style("border-bottom", function () {
                        if (
                            count_row_header_information ==
                            row_header_information
                        )
                            return "1px solid #000000";
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text("");
            } else {
                rowheader1
                    .append("td")

                    .style("border-top", function () {
                        if (count_row_header_information == 1)
                            return "1px solid #000000";
                        return "";
                    })
                    .style("border-right", "1px solid #000000")
                    .style("border-bottom", function () {
                        if (
                            count_row_header_information ==
                            row_header_information
                        )
                            return "1px solid #000000";
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000");
            }
            countcolumn++;
        }

        if (count_row_header_information !== row_header_information) {
            var rowheader1 = tbody.append("tr");
            for (let i = 0; i < colgroupdata.length; i++) {
                if (i == 0) {
                    rowheader1
                        .append("td")
                        .attr("height", "21")
                        .style("border-left", "1px solid #000000")
                        .style("text-align", "left")
                        .style("vertical-align", "bottom")
                        .style("font-family", "Arial")
                        .style("font-size", "16px")
                        .style("color", "#000000")
                        .text("");
                } else if (i == colgroupdata.length - 1) {
                    rowheader1
                        .append("td")

                        .style("border-right", "1px solid #000000")

                        .style("text-align", "left")
                        .style("vertical-align", "bottom")
                        .style("font-family", "Arial")
                        .style("font-size", "16px")
                        .style("color", "#000000");
                } else {
                    rowheader1
                        .append("td")
                        // .style("border-top", "1px solid #000000")

                        .style("text-align", "left")
                        .style("vertical-align", "bottom")
                        .style("font-family", "Arial")
                        .style("font-size", "16px")
                        .style("color", "#000000")
                        .text("");
                }
            }
        }

        count_row_header_information++;
    }

    //dashboar_information

    var row_dashboard_information = Math.ceil(dashboard_information.length / 5);
    var count_row_dashboard_information = 1;

    while (count_row_dashboard_information <= row_dashboard_information) {
        var rowheader1 = tbody.append("tr");
        for (let i = 0; i < colgroupdata.length; i++) {
            if (i == 0) {
                rowheader1
                    .append("td")
                    .attr("height", "21")
                    .style("border-left", "1px solid #000000")
                    .style("border-top", function () {
                        if (count_row_dashboard_information == 1)
                            return "1px solid #000000";

                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text("");
            } else if (i == colgroupdata.length - 1) {
                rowheader1
                    .append("td")

                    .style("border-right", "1px solid #000000")
                    .style("border-top", function () {
                        if (count_row_dashboard_information == 1)
                            return "1px solid #000000";

                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000");
            } else {
                rowheader1
                    .append("td")
                    .style("border-top", function () {
                        if (count_row_dashboard_information == 1)
                            return "1px solid #000000";

                        return "";
                    })

                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text("");
            }
        }
        var rowheader1 = tbody.append("tr");
        var countcolumn = 0;

        dashboard_information
            .slice(
                0 + (count_row_dashboard_information - 1) * 5,
                5 + (count_row_dashboard_information - 1) * 5
            )
            .forEach((element_header_information, i_header_information) => {
                countcolumn += 3;
                rowheader1
                    .append("td")
                    .attr("height", "21")

                    .style("border-bottom", function () {
                        if (
                            count_row_dashboard_information ==
                            row_dashboard_information
                        )
                            return "1px solid #000000";
                        return "";
                    })
                    .style("border-left", function () {
                        if (i_header_information == 0) {
                            return "1px solid #000000";
                        }
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text(element_header_information.name + " :");

                rowheader1
                    .append("td")

                    .style("border-bottom", function () {
                        if (
                            count_row_dashboard_information ==
                            row_dashboard_information
                        )
                            return "1px solid #000000";
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .style("background-color", "#FFFF00")
                    .text(element_header_information.value);

                rowheader1
                    .append("td")

                    .style("border-bottom", function () {
                        if (
                            count_row_dashboard_information ==
                            row_dashboard_information
                        )
                            return "1px solid #000000";
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text("");
            });

        countcolumn++;
        while (countcolumn <= colgroupdata.length) {
            if (countcolumn !== colgroupdata.length) {
                rowheader1
                    .append("td")

                    .style("border-bottom", function () {
                        if (
                            count_row_dashboard_information ==
                            row_dashboard_information
                        )
                            return "1px solid #000000";
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text("");
            } else {
                rowheader1
                    .append("td")

                    .style("border-right", "1px solid #000000")
                    .style("border-bottom", function () {
                        if (
                            count_row_dashboard_information ==
                            row_dashboard_information
                        )
                            return "1px solid #000000";
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000");
            }
            countcolumn++;
        }

        count_row_dashboard_information++;
    }

    var sum_count_row_data =
        datatable.length + 1 > 16 ? datatable.length + 1 : 16;

    var count_row_data = 1;

    //data table
    var rowheader1 = tbody.append("tr");
    for (let i = 0; i < colgroupdata.length; i++) {
        if (i == 0) {
            rowheader1
                .append("td")
                .attr("height", "21")

                .style("border-left", "1px solid #000000")

                .style("text-align", "left")
                .style("vertical-align", "bottom")
                .style("font-family", "Arial")
                .style("font-size", "16px")
                .style("color", "#000000")
                .text("");
        } else if (i == colgroupdata.length - 1) {
            rowheader1
                .append("td")

                .style("border-right", "1px solid #000000")

                .style("text-align", "left")
                .style("vertical-align", "bottom")
                .style("font-family", "Arial")
                .style("font-size", "16px")
                .style("color", "#000000");
        } else {
            rowheader1
                .append("td")

                .style("border", function () {
                    // if (datatable[count_row_data - 1]) {
                    //     if (datatable[count_row_data - 1][i - 1] !== undefined)
                    //         return "1px solid #000000";
                    // }
                    return "";
                })
                .style("text-align", "left")
                .style("vertical-align", "bottom")
                .style("font-family", "Arial")
                .style("font-size", "16px")
                .style("color", "#000000")
                .text(function () {
                    // if (datatable[count_row_data - 1]) {
                    //     return datatable[count_row_data - 1][i - 1];
                    // }
                    return "";
                });
        }
    }

    var rowheader1 = tbody.append("tr");
    for (let i = 0; i < colgroupdata.length; i++) {
        if (i == 0) {
            rowheader1
                .append("td")
                .attr("height", "21")

                .style("border-left", "1px solid #000000")

                .style("text-align", "left")
                .style("vertical-align", "bottom")
                .style("font-family", "Arial")
                .style("font-size", "16px")
                .style("color", "#000000")
                .text(function () {
                    "";
                });
        } else if (i == colgroupdata.length - 1) {
            rowheader1
                .append("td")

                .style("border-right", "1px solid #000000")

                .style("text-align", "left")
                .style("vertical-align", "bottom")
                .style("font-family", "Arial")
                .style("font-size", "16px")
                .style("color", "#000000");
        } else {
            rowheader1
                .append("td")

                .style("border", function () {
                    if (header_column[i - 1]) {
                        return "1px solid #000000";
                    }
                    return "";
                })
                .style("text-align", "left")
                .style("vertical-align", "bottom")
                .style("font-family", "Arial")
                .style("font-size", "16px")
                .style("color", "#000000")

                .text(function () {
                    return header_column[i - 1];
                });
        }
    }

    var tbody = table.append("tbody").attr("id", "tabody_data" + idtable);

    var tbody = table.append("tbody");
    var rowheader1 = tbody.append("tr");
    rowheader1
        .append("td")
        .attr("id", "image_buttom")
        .attr("rowspan", "2")
        .attr("colspan", colgroupdata.length)
        .attr("height", "40")
        .attr("align", "center")
        .style("border", "1px solid #000000")
        .style("border-width", "1px 1px 0 1px")
        .style("vertical-align", "bottom")
        .text("")
        .append("img")
        .attr("id", "img_image_button" + idtable)
        .attr("src", "");

    var rowheader1 = tbody.append("tr");
    var rowheader1 = tbody.append("tr");
    rowheader1
        .append("td")

        .attr("colspan", colgroupdata.length)
        .attr("height", "30")
        .attr("align", "center")
        .style("border", "1px solid #000000")
        .style("border-width", "0 1px 1px 1px")
        .style("font-style", "italic")
        .style("vertical-align", "center")
        .text("This document is generated from AIMS");
}

function tableToExcel(tableold, name, file_name) {
    makeTable(tableold);
    d3.select("#image_hansell").text("ANSELL");
    d3.select("#image_buttom").text("");
    //data
    var sum_count_row_data =
        datatable.length + 1 > 16 ? datatable.length + 1 : 16;

    var count_row_data = 1;
    while (count_row_data <= sum_count_row_data) {
        var rowheader1 = d3
            .select("#tabody_data" + tableold)
            .append("tr")
            .attr("id", "row_data_table" + tableold)
            .attr("class", "row_data_table" + tableold);
        for (let i = 0; i < colgroupdata.length; i++) {
            if (i == 0) {
                rowheader1
                    .append("td")
                    .attr("height", "21")

                    .style("border-left", "1px solid #000000")

                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text("");
            } else if (i == colgroupdata.length - 1) {
                rowheader1
                    .append("td")

                    .style("border-right", "1px solid #000000")

                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000");
            } else {
                rowheader1
                    .append("td")

                    .style("border", function () {
                        if (datatable[count_row_data - 1]) {
                            if (
                                datatable[count_row_data - 1][i - 1] !==
                                undefined
                            )
                                return "1px solid #000000";
                        }
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text(function () {
                        if (datatable[count_row_data - 1]) {
                            return datatable[count_row_data - 1][i - 1];
                        }
                        return "";
                    });
            }
        }
        count_row_data++;
    }
    var style = "<style> </style>";
    var uri = "data:application/vnd.ms-excel;base64,",
        template =
            '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->' +
            style +
            "</head><body><table>{table}</table></body></html>",
        base64 = function (s) {
            return window.btoa(unescape(encodeURIComponent(s)));
        },
        format = function (s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            });
        };
    if (!tableold.nodeType) table = document.getElementById(tableold);

    var ctx = {
        worksheet: name || "Worksheet",
        table: table.innerHTML,
    };
    var link = document.createElement("a");
    link.download = file_name + ".xls";
    link.href = uri + base64(format(template, ctx));
    link.click();

    // $('#'+tableold).tableExport({type: 'excel', mso: {fileFormat: 'xlsx'}})
    d3.selectAll("#"+tableold).remove();
  
  
}

async function converHTMLToCanvas(
    elementold,
    file_name,
    withexcel
) {
    //
    // var element = $("#"+ elementold)[0];
    makeTable(elementold);

    var element = d3.select("#" + elementold)[0][0];

    console.log(element);

    d3.select("#image_hansell_img" + elementold)
        .attr(
            "src",
            "data:image/png;base64,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"
        )
        .attr("width", "119")
        .attr("height", "73")
        .attr("hspace", "21")
        .attr("vspace", "22");

    d3.select("#img_image_button" + elementold)
        .attr(
            "src",
            "data:image/png;base64,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"
        )
        .attr("width", "442")
        .attr("height", "25")
        .attr("hspace", "185")
        .attr("vspace", "8");

    var sum_count_row_data = datatable.length + 1;

    var count_row_data = 1;
    while (count_row_data <= sum_count_row_data) {
        var rowheader1 = d3
            .select("#tabody_data" + elementold)
            .append("tr")
            .attr("id", "row_data_table" + elementold)
            .attr("class", "row_data_table" + elementold);
        for (let i = 0; i < colgroupdata.length; i++) {
            if (i == 0) {
                rowheader1
                    .append("td")
                    .attr("height", "21")

                    .style("border-left", "1px solid #000000")

                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text("");
            } else if (i == colgroupdata.length - 1) {
                rowheader1
                    .append("td")

                    .style("border-right", "1px solid #000000")

                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000");
            } else {
                rowheader1
                    .append("td")

                    .style("border", function () {
                        if (datatable[count_row_data - 1]) {
                            if (
                                datatable[count_row_data - 1][i - 1] !==
                                undefined
                            )
                                return "1px solid #000000";
                        }
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text(function () {
                        if (datatable[count_row_data - 1]) {
                            return datatable[count_row_data - 1][i - 1];
                        }
                        return "";
                    });
            }
        }
        count_row_data++;
    }

    var jspdf = new jsPDF("l", "pt", "a4", true);

    // var width = $(element).width() ;
    var width = d3
        .select("#" + elementold)
        .node()
        .getBoundingClientRect().width;

    // var height = $(element).height();
    var height = d3
        .select("#" + elementold)
        .node()
        .getBoundingClientRect().height;

        console.log("widht", width , "height" ,height)
    var widthvar = jspdf.internal.pageSize.width;
    var heightvar = jspdf.internal.pageSize.height;

    var sizeheightpdfmax = (916 / 1302.015625) * width;


    // console.log("sizeheightpdfmax");
    // console.log(sizeheightpdfmax);
    var sizeheightpdf = height;

    var sizeheighdata = d3
    .select("#" + "row_data_table" + elementold)
    .node()
    .getBoundingClientRect().height;

  
    console.log( "sizeheightpdf > sizeheightpdfmax",sizeheightpdf , sizeheightpdfmax)
        

    if (sizeheightpdf > sizeheightpdfmax) {
        d3.selectAll(".row_data_table" + elementold).remove();

        var sisapage = Math.ceil(
            (sizeheightpdf - sizeheightpdfmax) / sizeheighdata
        );
        console.log( "banyak data", sisapage )

                console.log( "datatable.length", datatable.length )

        var allpage = Math.ceil(
            datatable.length / (datatable.length - sisapage)
        );
        var page = 1;
        console.log( "allpage",allpage )
        while (page <= allpage) {
            if (page == allpage) {
                makeTable("page" + page + idRandom, "nextpage1");

             

                addImage(
                    "page" + page + idRandom,
                    datatable.slice(
                        0 + (page - 1) * (datatable.length - sisapage),
                        page * (datatable.length - sisapage)
                    ),
                    page,
                    allpage
                );

                var height = d3
                .select("#" + "page" + page + idRandom)
                .node()
                .getBoundingClientRect().height;
                console.log("height")
                console.log(height)

                // d3.select("#" + ("page" + page +idRandom)).style("margin-top", 20 + "px");

                await exportpdfnow(width, file_name, withexcel);

                await remove(1, allpage);

                if (withexcel) {
                    tableToExcel(elementold, "worksheet", file_name);
                }
            } else {
                if (page == 1) {
                    addImage(
                        elementold,
                        datatable.slice(
                            0 + (page - 1) * (datatable.length - sisapage),
                            page * (datatable.length - sisapage)
                        ),
                        page,
                        allpage
                    );
                    var height = d3
                    .select("#" +elementold)
                    .node()
                    .getBoundingClientRect().height;
                    console.log("height")
                    console.log(height)
                    d3.select("#" + elementold).style(
                        "margin-bottom",
                        (sizeheightpdfmax - height + 6) + "px"
                    );
                } else {
                    makeTable("page" + page +idRandom, "nextpage1");

                    addImage(
                        "page" + page +idRandom,
                        datatable.slice(
                            0 + (page - 1) * (datatable.length - sisapage),
                            page * (datatable.length - sisapage)
                        ),
                        page,
                        allpage
                    );
                    var height = d3
                    .select("#" + "page" + page + idRandom)
                    .node()
                    .getBoundingClientRect().height;
                    console.log("height")
                    console.log(height)
                    // d3.select("#" + ("page" + page +idRandom)).style(
                    //     "margin-top",
                    //     20 + "px"
                    // );
                }
            }

            page++;
        }
    } else {
   
        d3.selectAll(".row_data_table" + elementold).remove();
        addImage(elementold, datatable, 1, 1);
        await exportpdfnow(width, file_name, withexcel);
        await remove(2, 1);

        if (withexcel) {
            tableToExcel(elementold, "worksheet", file_name);
        }
    }
}

async function exportpdfnow(width, file_name) {
    var element = document.getElementById("root"+idRandom);

    var optionArray = {
        margin: 5,
        filename: file_name + ".pdf",
        pageBreak: { mode: "css", before: "#nextpage1" },
        image: { type: "png", quality: 0.1 },
        html2canvas: { scale: 0.9, width: width + 10 , dpi: 192 },
        jsPDF: { unit: "pt", format: "a4", orientation: "landscape" },
    };

    // html to pdf generation with the reference of PDF worker object

    html2pdf().set(optionArray).from(element).save();
}

async function remove(page1, allpage) {
    d3.selectAll("#testTable"+idRandom).remove();


    var page = page1;
    while (page <= allpage) {
        d3.selectAll("#" + ("page" + page +idRandom)).remove();

        page++;
    }
}

function addImage(elementold, datatableoke, page, allpage) {
    d3.select("#Page" + elementold).text("Page " + page + " of " + allpage);

    d3.select("#image_hansell_img" + elementold)
        .attr(
            "src",
            "data:image/png;base64,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"
        )
        .attr("width", "119")
        .attr("height", "73")
        .attr("hspace", "21")
        .attr("vspace", "22");

    d3.select("#img_image_button" + elementold)
        .attr(
            "src",
            "data:image/png;base64,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"
        )
        .attr("width", "442")
        .attr("height", "25")
        .attr("hspace", "185")
        .attr("vspace", "8");

    var sum_count_row_data = datatableoke.length + 1;

    var count_row_data = 1;
    while (count_row_data <= sum_count_row_data) {
        var rowheader1 = d3
            .select("#tabody_data" + elementold)
            .append("tr")
            .attr("id", "row_data_table" + elementold)
            .attr("class", "row_data_table" + elementold);
        for (let i = 0; i < colgroupdata.length; i++) {
            if (i == 0) {
                rowheader1
                    .append("td")
                    .attr("height", "21")

                    .style("border-left", "1px solid #000000")

                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text("");
            } else if (i == colgroupdata.length - 1) {
                rowheader1
                    .append("td")

                    .style("border-right", "1px solid #000000")

                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000");
            } else {
                rowheader1
                    .append("td")

                    .style("border", function () {
                        if (datatableoke[count_row_data - 1]) {
                            if (
                                datatableoke[count_row_data - 1][i - 1] !==
                                undefined
                            )
                                return "1px solid #000000";
                        }
                        return "";
                    })
                    .style("text-align", "left")
                    .style("vertical-align", "bottom")
                    .style("font-family", "Arial")
                    .style("font-size", "16px")
                    .style("color", "#000000")
                    .text(function () {
                        if (datatableoke[count_row_data - 1]) {
                            return datatableoke[count_row_data - 1][i - 1];
                        }
                        return "";
                    });
            }
        }
        count_row_data++;
    }
}
