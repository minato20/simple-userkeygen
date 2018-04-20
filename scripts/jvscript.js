"use strict";
jQuery(document).ready()
{
 // variables   
 var btn = $("#getData");
 var mail = $("#mail-info");
 var serialInfo = $("#serial");
 var macle = "";
 // clique sur boutton génerer
 btn.click(function()
 {
    serialInfo.fadeOut(500,function()
    {
    // requete GET ajax pour le fichier utilisateurs
     $.ajax(
     {
         method: 'GET',
         url: 'data/users.json',
         success: function(data)
         {
             $.each(data,function(i, item)
             {
				// console.log(item);
                 // itération dans les utilisateurs et vérification si utilisateur existe
                 if(mail.val() === item.email)
                 {         
					 macle = "ta clé est : "+ item.key;
					 return false;
                 }
				 else
				 {
					 macle="utilisateur introuvable";
				 }
				 
             });
			 
		 serialInfo.text(macle);
		 serialInfo.fadeIn(500);
          }
		 ,
         error: function()
         {
             alert("Le Numéro de série n'as pu étre générer veuillez réesayer");
         }
     });
    });
     
 });
}