import React from 'react'
import jsPDF  from 'jspdf';
import "jspdf-autotable";
import axios from "axios";
import { useEffect,useState } from 'react';



  
const PdfArticle = () => {
  const url=process.env.REACT_APP_ADRESSE+"api/articles/";
     const [rows,setRows]=useState([]);
      useEffect(()=>{
    axios.get(url).then(res => {
         
    setRows(res.data);
  });

      },[]);

const generatePDF = (tableRows, columns, isLandscape) => {
  
        const doc = new jsPDF({
           orientation: isLandscape ? "landscape" : 'portrait'
        });
        
        doc.autoTable({
           head: columns,
           body: tableRows,
           startY: 20, // startY is basically margin-top
           headStyles: {
              fillColor: [241, 196, 15],
              fontSize: 12,
              halign: 'center'
           },
           columnStyles: {
              0: { cellWidth: 30, cellHeight: 20, halign: 'center' },
              1: { cellWidth: 40, halign: 'center' },
              2: {cellWidth:'auto',halign:'center',fontStyle:'bold'},
              3: { cellWidth: 20, halign: 'center' },
              4: { cellWidth: 30, halign: 'center' }
           },
           styles: {
              valign: 'middle'
           },
           
           /* Use for customizing texts or styles of specific cells after they have been formatted by this plugin. This hook is called just before the column width and other features are computed.*/
           
           didParseCell: function (data) {
               if(data.section === 'body') {
                  data.row.height = 20;
               }
               if (data.column.dataKey === 'imageartpetitf') {
                  data.cell.text = '' // Use an icon in didDrawCell instead
                  
               }
           },
   
     /* Use for adding content to the cells after they are drawn. This could be images or links. You can also use this to draw other custom jspdf content to cells with doc.text or doc.rect for example.*/
          
          didDrawCell: function (data) { 
            if (data.row.section === 'body' && data.column.dataKey === 'imageartpetitf' && data.cell.raw ) {
                doc.addImage(
                   data.cell.raw,
                   'PNG',
                   data.cell.x + 5,
                   data.cell.y + 2,
                   13,
                   16
                )
             }
          }
        });
        // we define the name of our PDF file.
        doc.save(`pdf.pdf`);
     };

     const columnsPDF = [{
        imageartpetitf:"imageartpetitf",
        reference:"Référence",
        designation:"Désignation",
        prixAchat:"Prix",
        qtestock:"Quantité"
        }
      ];

     return(
        <button
        className="btn"
        onClick={() => generatePDF(rows.map(m => ({
            imageartpetitf: m.imageartpetitf,
            reference: m.reference,
            designation: m.designation,
            prixAchat: m.prixAchat,
            qtestock: m.qtestock 
         })), columnsPDF, true)}
     >
     DOWNLOAD PDF 
     </button>
     );
}
export default PdfArticle