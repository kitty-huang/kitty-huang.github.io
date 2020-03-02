$(document).ready(function(){
    
    var allPs = $("p")
    console.log(allPs);
    
    var classp = $("xparagraph1");
    console.log(classp)
    
    
    var idp = $("#ptag");
    
    idp.html ("this is another text that was dynamically generated");
    allPs.html ("Hi this is my new text");
    
});