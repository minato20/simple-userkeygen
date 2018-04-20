jQuery(document).ready()
{
 // variables   
 var btn = $("#getData");
 var mail = $("#mail-info");
 var fullName = $("#user-info");
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
             $.each(data,function(i, item)
             {
                 // itération dans les utilisateurs et vérification si utilisateur existe
                 if(item.email === $.trim(mail.val()))
                 {
                   
                   serialInfo.text(item.key);
                    /* {
                                             // requete POST ajax pour demander la génération du numéro de série
                      $.ajax(
                      {
                          method: 'POST',
                          url: 'data/keygen.php',
                          data: {valid:"ok"},
                          success:function(serial)
                          {                              // afficher le numéro aprés traitement
                              serialInfo.html('<h2 style="color:green;">'+serial+'</h2>');
                              serialInfo.fadeIn(500);
                          },
                          error:function(){}
                      });  
                     }*/
                     
                 }else
                 {
                      serialInfo.fadeIn(400);
                      serialInfo.html("<h2 style='color:red;'>Invalid user! please check your full name and email</h2>");
                 }
             });
         },
         error: function(err)
         {
             alert("Le Numéro de série n'as pu étre générer veuillez réesayer");
         }
     });
    });
     
 });
}