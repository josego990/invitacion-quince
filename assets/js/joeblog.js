/*!
=========================================================
* JoeBlog Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});



function closter(){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var zeus = urlParams.get('xld')
    var span = document.getElementById('confuso');

    if(zeus == null){
        zeus = "1";
    }

    try{
        if(zeus == "1"){
            span.appendChild( document.createTextNode("Invitación para "+ zeus +" Persona"));
        }
        else{
            span.appendChild( document.createTextNode("Invitación para "+ zeus +" Personas"));
        }
         
        }
    catch(error){span.appendChild( document.createTextNode("Invitación para 1 Persona") ); }
    
}

function openws(){
    window.open("https://wa.me/50233924436");
    
}