function LoadAcordeonTransparencia() {

    $.ajax({
        url: location.protocol + "//" + location.host + "/Transparencia/_api/web/lists/getbytitle('AcordeonTransparencia')/items?$select=Title,Pagina,NaAcordeon,Numeral,SubNumeral,NuevaPestana&$orderby=NaAcordeon,Numeral%20asc",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: onSuccessLoadAcordeonTransparencia,
        error: onError
    });
}

function onSuccessLoadAcordeonTransparencia(data) {

    var html = "";
    var resultados = data.d.results;


    for (var i = 0; i < resultados.length; i++) {
        
        var strTitulo = "";
        if(resultados[i].Title != null){strTitulo = resultados[i].Title;}
        var strNAcordeon = 99;
        if(resultados[i].NaAcordeon != null){strNAcordeon = resultados[i].NaAcordeon;}
        var strSubNumeral = 0;
        if(resultados[i].SubNumeral != null){strSubNumeral = resultados[i].SubNumeral;}
        var strPagina = "#";
        if(resultados[i].Pagina != null){strPagina = resultados[i].Pagina;}
        var strTarget = "";
        if(resultados[i].NuevaPestana == 1){strTarget = "target='_blank'";}
        
       

        if(resultados[i].Numeral != null){
            strNumeral = resultados[i].Numeral;
            
            switch (strNumeral) {
                case strNumeral = '1':


                    $(".Acordeon" + (resultados[i].NaAcordeon)).append("<div class='accordion-container'><ul class='ListTranspa'><li> <a href='#' class='accordion-toggle'> "+strNAcordeon+"."+strNumeral+"."+strTitulo+" <span class='toggle-icon'><i class='fa fa-plus-circle' aria-hidden='true'></i></span></a> <div class='accordion-content' style='display: none;'></ul> </div> </div>");
                
                
                default:

                   if (strSubNumeral == '0') {
                        $(".Acordeon" + (resultados[i].NaAcordeon)).append("<div></div>");                        
                    }else{
                        $(".Acordeon" + (resultados[i].NaAcordeon)).append("<ul class='ListTranspa' style='padding-left: 60px;'><li><a "+strTarget+" href='"+strPagina+"'>"+strNAcordeon+"."+strNumeral+"."+strSubNumeral+"."+strTitulo+"</a></li></ul>");
                    }  
                }
        }            
    }
}


