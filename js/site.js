// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//---------------------Drop Down Submenu in navbar function
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
});


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//---------------------Accounting Function
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function AmountValidation(input){
    var Amt = document.getElementById(input.id).value.replace(",","").replace(".","");
    if (!isItNumber(Amt)) {

        Amt = 0.00;
        document.getElementById(input.id).value = Amt.toLocaleString();
    }
}
function isItNumber(str) {
    return /^\-?[0-9]+(e[0-9]+)?(\.[0-9]+)?$/.test(str);
}
//Format decimal without rounding off
// Number.prototype.toFixedDown = function(digits) {
//     var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
//         m = this.toString().match(re);
//     return m ? parseFloat(m[1]) : this.valueOf();
// };
Number.prototype.toFixedDown = function(digits) {
    var n = this - Math.pow(10, -digits)/2;
    n += n / Math.pow(2, 53); // added 1360765523: 17.56.toFixedDown(2) === "17.56"
    return n.toFixed(digits);
  }


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//---------------------Show look up
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var selected_tblType="";
var selected_tbl_row=0;
var selected_tblId=""

function ShowLookUpModalFromTable(elem,tblId,Table,SearchBy,headerTxt,Disallow2SelectItem=false) { 
    selected_tblType=Table;  
    selected_tbl_row=elem.parentNode.parentNode.parentNode.rowIndex;
    var selected_tbl_col=elem.parentNode.parentNode.cellIndex;
    var table = document.getElementById(tblId);
    selected_tblId=tblId;

    //search value
    search=table.rows[selected_tbl_row].cells[selected_tbl_col].getElementsByTagName('input')[0].value;
  
    //
    document.getElementById("modalHeaderTxt").innerHTML = "<h4> "+headerTxt+"</h4>"
    document.getElementById("ModalTable").innerHTML = "...";

    // document.getElementById("SearchLookUp").value="";
    // document.getElementById("SearchLookUp2").value="";
    if(Table=="BP" || Table=="BP_fromtbl"){
        document.getElementById("BPFilter").style.display = "block";
        document.getElementById("GLFilter").style.display = "none";
        document.getElementById("ProjectFilter").style.display = "none";
        document.getElementById("ChannelFilter").style.display = "none";
    }else  if(Table=="GL" || Table=="GL_fromtbl"){
        document.getElementById("BPFilter").style.display = "none";
        document.getElementById("GLFilter").style.display = "block";
        document.getElementById("ProjectFilter").style.display = "none";
        document.getElementById("ChannelFilter").style.display = "none";
    }else  if(Table=="Project" || Table=="Project_fromtbl"){
        document.getElementById("BPFilter").style.display = "none";
        document.getElementById("GLFilter").style.display = "none";
        document.getElementById("ProjectFilter").style.display = "block";
        document.getElementById("ChannelFilter").style.display = "none";
    }else  if(Table=="Channel" || Table=="Channel_fromtbl"){
        document.getElementById("BPFilter").style.display = "none";
        document.getElementById("GLFilter").style.display = "none";
        document.getElementById("ProjectFilter").style.display = "none";
        document.getElementById("ChannelFilter").style.display = "block";
    }

    //Check if Disallow2SelectItem
    if(Disallow2SelectItem==true){
        selected_tblId="";
    }
    //
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ModalTable").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/Lookup/MasterData?table="+Table+"&searchby=" + SearchBy
        + "&search=" + search, true);
    xhttp.send();
}

function ShowLookUpModal(search,Table,SearchBy,headerTxt,Disallow2SelectItem=false) { 
    selected_tblType=Table;  
    //
    document.getElementById("modalHeaderTxt").innerHTML = "<h4> "+headerTxt+"</h4>"
    document.getElementById("ModalTable").innerHTML = "...";
    //  document.getElementById("SearchLookUp").value="";
    //  document.getElementById("SearchLookUp2").value="";
    if(Table=="BP" || Table=="BP_fromtbl"){
        document.getElementById("BPFilter").style.display = "block";
        document.getElementById("GLFilter").style.display = "none";
        document.getElementById("ProjectFilter").style.display = "none";
        document.getElementById("ChannelFilter").style.display = "none";
    }else  if(Table=="GL" || Table=="GL_fromtbl"){
        document.getElementById("BPFilter").style.display = "none";
        document.getElementById("GLFilter").style.display = "block";
        document.getElementById("ProjectFilter").style.display = "none";
        document.getElementById("ChannelFilter").style.display = "none";
    }else  if(Table=="Project" || Table=="Project_fromtbl"){
        document.getElementById("BPFilter").style.display = "none";
        document.getElementById("GLFilter").style.display = "none";
        document.getElementById("ProjectFilter").style.display = "block";
        document.getElementById("ChannelFilter").style.display = "none";
    }else  if(Table=="Channel" || Table=="Channel_fromtbl"){
        document.getElementById("BPFilter").style.display = "none";
        document.getElementById("GLFilter").style.display = "none";
        document.getElementById("ProjectFilter").style.display = "none";
        document.getElementById("ChannelFilter").style.display = "block";
    }

    //Check if Disallow2SelectItem
    if(Disallow2SelectItem==true){
        selected_tblId="";
    }
    //
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ModalTable").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "/Lookup/MasterData?table="+Table+"&searchby=" + SearchBy
        + "&search=" + search, true);
    xhttp.send();
}












//-----------------------------------------------------------------------
//In App Upload google -data
//---------------------------------------------------------------------
function ShowUploadModal(headerTxt) { 
    document.getElementById("modalMainHeaderTxt").innerHTML = "<h4> "+headerTxt+"</h4>"
}
$(function () {
  
    $('#btnupload').on('click', function () {
      
           var fileExtension = ['xls', 'xlsx','csv'];
           var filename = $('#customFile').val();
           if (filename.length == 0) {
                iziToast.error({
                            position: "topCenter",
                            title: "Error",
                            message: "Please select a file.",
                            layout: 2
                });
               return false;
           }
           else {
               var extension = filename.replace(/^.*\./, '');
               if ($.inArray(extension, fileExtension) == -1) {
                    iziToast.error({
                            position: "topCenter",
                            title: "Error",
                            message: "Please select only excel or csv files",
                            layout: 2
                    });
                   return false;
               }
           }

            //inform user to wait
            iziToast.info({
                    timeout: false,
                    close: false,
                    overlay: true,
                    position: "topCenter",
                    title: "Saving data",
                    message: "Please wait...",
                    layout: 2,
            });
          
           var fdata = new FormData();
           var fileUpload = $("#customFile").get(0);
           var files = fileUpload.files;
           fdata.append(files[0].name, files[0]);
           $.ajax({
                   type: "POST",
                   url: "/InApp_Google/Import",
                   beforeSend: function (xhr) {
    //                    xhr.setRequestHeader("XSRF-TOKEN",
    //                        $('input:hidden[name="__RequestVerificationToken"]').val());
                   },
                   data: fdata,
                   contentType: false,
                   processData: false,
                   success: function (response) {
                        iziToast.destroy(); 
                         iziToast.success({
                                position: "topCenter",
                                title: "Success",
                                message: response,
                                layout: 2
                        });
                   },
                   error: function (e) {
                    iziToast.destroy(); 
                       iziToast.error({
                                position: "topCenter",
                                title: "Error",
                                message: e.responseText,
                                layout: 2
                        });
                   }
                });
            });
});