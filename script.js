
$(document).ready(function() {
	$('#MostrarPasos').click(function() {
        $('html, body').animate({
          scrollTop: $("#LosPasotes").offset().top
        }, 2000)
        return false;
    });
    $('#MostrarGrafica').click(function() {
        $('html, body').animate({
          scrollTop: $("#calculator").offset().top
        }, 2000)
        return false;
    });
})


var ecu1 , ecu2;
function punto() {   
    
    
    var x1 = $(".x1").val();
    var y1 = $(".y1").val();
    var c1 = $(".c1").val();
    var x2 = $(".x2").val();
    var y2 = $(".y2").val();
    var c2 = $(".c2").val();
    var s1 = $("#s1").val();
    var s2 = $("#s2").val();            


    if(x1==null || y1==null || c1==null || x2==null || y2==null || c2==null || s1=="Elige..." || s2=="Elige..."){
        alert("Ingresa todos los campos antes de continuar.")
    }
    else{

        switch (s1) {
            case "1":                  
                if (y1 < 0) {                                              
                    ecu1 = x1 + "x-" + (-y1) + "y>=" + c1;
                } else {                        
                    ecu1 = x1 + "x+" + (y1) + "y>=" + c1;
                }                    
                break;
            case "2":                
                if (y1 < 0) {
                    ecu1 = x1 + "x-" + (-y1) + "y<=" + c1;
                } else {
                    ecu1 = x1 + "x+" + (y1) + "y<=" + c1;
                }                   
                break;
            case "3":               
                if (y1 < 0) {
                    ecu1 = x1 + "x-" + (-y1) + "y>" + c1;
                } else {
                    ecu1 = x1 + "x+" + (y1) + "y>" + c1;
                }                    
                break;
            case "4":               
                if (y1 < 0) {
                    ecu1 = x1 + "x-" + (-y1) + "y<" + c1;
                } else {
                    ecu1 = x1 + "x+" + (y1) + "y<" + c1;
                }                   
                break;               

        }
        switch (s2) {
            case "1":                    
                if (y2 < 0) {
                    ecu2 = x2 + "x-" + (-y2) + "y>=" + c2;
                } else {
                    ecu2 = x2 + "x+" + (y2) + "y>=" + c2;
                }
                break;
            case "2":                   
                if (y2 < 0) {
                    ecu2 = x2 + "x-" + (-y2) + "y<=" + c2;
                } else {
                    ecu2 = x2 + "x+" + (y2) + "y<=" + c2;
                }
                break;
            case "3":                    
                if (y2 < 0) {
                    ecu2 = x2 + "x-" + (-y2) + "y>" + c2;
                } else {
                    ecu2 = x2 + "x+" + (y2) + "y>" + c2;
                }
                break;
            case "4":                    
                if (y2 < 0) {
                    ecu2 = x2 + "x-" + (-y2) + "y<" + c2;
                } else {
                    ecu2 = x2 + "x+" + (y2) + "y<" + c2;
                }
                break;

        }
    
        var ex1 = -x1 + "x/" + y1;
        var ec1 = c1 + "/" + y1;
        var ex2 = -x2 + "x/" + y2;
        var ec2 = c2 + "/" + y2;
        if (x1 % y1 == 0) {
            ex1 = (-x1 / y1) + "x";
        }
        if (x2 % y2 == 0) {
            ex2 = (-x2 / y2) + "x";
        }
        if (c1 % y1 == 0) {
            ec1 = c1 / y1;
        }
        if (c2 % y2 == 0) {
            ec2 = c2 / y2;
        }
        var Xec1= ec1+"";
        var Xec2= ec2+"";

        var ye1 = ex1 + "+" + ec1; //y1 despejado
        var ye2 = ex2 + "+" + ec2; //y2 despejado

        document.getElementById("GetX1").innerHTML = " "+ex1+" ";
        if(Xec1.startsWith("-")){
            document.getElementById("GetYC1").innerHTML = " "+ec1;
        }
        else{
            document.getElementById("GetYC1").innerHTML = " + "+ec1;
        }

        document.getElementById("GetX2").innerHTML = " "+ex2+" ";
        if(Xec2.startsWith("-")){
            document.getElementById("GetYC2").innerHTML = " "+ec2;
        }
        else{
            document.getElementById("GetYC2").innerHTML = " + "+ec2;
        }

        var ey1 = -y1 + "y/" + x1;
        var ec1 = c1 + "/" + x1;
        var ey2 = -y2 + "y/" + x2;
        var ec2 = c2 + "/" + x2;
        if (y1 % x1 == 0) {
            ex1 = (-y1 / x1) + "y";
        }
        if (y2 % x2 == 0) {
            ey2 = (-y2 / x2) + "y";
        }
        if (c1 % y1 == 0) {
            ec1 = c1 / x1;
        }
        if (c2 % y2 == 0) {
            ec2 = c2 / x2;
        }
        var xx1 = ey1 + "+" + ec1; //x1 despejado
        var xx2 = ey2 + "+" + ec2; //x2 despejado

        document.getElementById("GetY1").innerHTML = " "+ey1+" ";
        if(Xec1.startsWith("-")){
            document.getElementById("GetXC1").innerHTML = " "+ec1;
        }
        else{
            document.getElementById("GetXC1").innerHTML = " + "+ec1;
        }

        document.getElementById("GetY2").innerHTML = ey2+" ";
        if(Xec2.startsWith("-")){
            document.getElementById("GetXC2").innerHTML = " "+ec2;
        }
        else{
            document.getElementById("GetXC2").innerHTML = " + "+ec2;
        }


        r = -(x1 / y1) + (x2 / y2);
        r1 = (c1 / y1) - (c2 / y2);
        equis = r1 / r; //x del punto de corte 
        equis = equis.toFixed(2);
        ye = ((x1 * equis) / y1) + (c1 / y1); // y del punto de parte
        ye = ye.toFixed(2); //limita los decimales      

        document.getElementById("PuntotesMachos").innerHTML = "( "+(-equis)+" , "+ye+" )";

        document.getElementById('LosPasotes').style.display = 'block';
        document.getElementById('LosPuntotes').style.display = 'block';
    }
}
function graph(){


var elt = document.getElementById('calculator');
    var calculator = Desmos.GraphingCalculator(elt, {
      keypad: false,
      expressions: false,
      settingsMenu: false,
      zoomButtons: false
    });
    //N EXPRESIONES REQUIEREN N IDS
    calculator.setExpression({
      id: 'graph1',
      latex: ecu1
    });
    calculator.setExpression({
      id: 'graph2',
      latex: ecu2
    });
}

