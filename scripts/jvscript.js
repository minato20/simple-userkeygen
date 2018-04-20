jQuery(document).ready()
{
 // variables   
 var btn = $("#getData");
 var mail = $("#mail-info");
 var serialInfo = $("#serial");
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
			 console.log(data);
             $.each(data,function(i, item)
             {
				// console.log(item);
                 // itération dans les utilisateurs et vérification si utilisateur existe
                 if(item.email === mail.val())
                 {             
				   console.log(item.email + item.key);
                   serialInfo.text("ta clé est : "+item["key"]);             
                 }
             });
			 serialInfo.fadeIn(500);
         },
         error: function(err)
         {
             alert("Le Numéro de série n'as pu étre générer veuillez réesayer");
         }
     });
    });
     
 });
}