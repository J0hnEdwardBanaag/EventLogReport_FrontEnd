
// function MassGenerateName() {
//     var table = document.getElementById("tblVoucherSettlement");
//     var totalRowCount = table.rows.length;
//     for (var i = 1; i < totalRowCount; i++) {
//         var row =i;
//         var elementCheck= table.rows[row].cells[0].getElementsByTagName('input')[0];
//         var elementId= table.rows[row].cells[11].getElementsByTagName('input')[0];
//         var elementIndex= table.rows[row].cells[11].getElementsByTagName('input')[1];
//          if(elementCheck.checked==true){
//             //initialize id
//             var index=i-1;

//             //Selected
//             if (typeof (elementCheck) != 'undefined' && elementCheck != null) {
//                 elementCheck.setAttribute("name", "VoucherSettlementList["+index+"].Selected");
//             }

//             //Selected
//             if (typeof (elementId) != 'undefined' && elementId != null) {
//                 elementId.setAttribute("name", "VoucherSettlementList["+index+"].Id");
//             }

//             //Index
//             elementIndex.setAttribute("name", "VoucherSettlement.Index");
//         }else{
//             //initialize id
//             var index=i-1;

//             //Selected
//             if (typeof (elementCheck) != 'undefined' && elementCheck != null) {
//                 elementCheck.setAttribute("name", "");
//             }

//             //Selected
//             if (typeof (elementId) != 'undefined' && elementId != null) {
//                 elementId.setAttribute("name", "");
//             }


//             //Index
//             elementIndex.setAttribute("name", "");
//         }
//     }
// }


// function ByRowGenerateName(thisElem) {
//     var table = document.getElementById("tblVoucherSettlement");
//     var totalRowCount = table.rows.length;
//     var row =thisElem.parentNode.parentNode.rowIndex;;
//     var elementCheck= table.rows[row].cells[0].getElementsByTagName('input')[0];
//     var elementId= table.rows[row].cells[11].getElementsByTagName('input')[0];
//     var elementIndex= table.rows[row].cells[11].getElementsByTagName('input')[1];
//     if(elementCheck.checked==true){

//         //initialize id
//         var index=row-1;

//         //Selected
//         if (typeof (elementCheck) != 'undefined' && elementCheck != null) {
//             elementCheck.setAttribute("name", "VoucherSettlementList["+index+"].Selected");
//         }

//         //Id
//         if (typeof (elementId) != 'undefined' && elementId != null) {
//             elementId.setAttribute("name", "VoucherSettlementList["+index+"].Id");
//         }

        
//         //Index
//         elementIndex.setAttribute("name", "VoucherSettlement.Index");
//     }else{

//         //initialize id
//         var index=row-1;

//         //Selected
//         if (typeof (elementCheck) != 'undefined' && elementCheck != null) {
//             elementCheck.setAttribute("name", "");
//         }

//         //Id
//         if (typeof (elementId) != 'undefined' && elementId != null) {
//             elementId.setAttribute("name", "");
//         }

//         //Index
//         elementIndex.setAttribute("name", "");
//     }
// }