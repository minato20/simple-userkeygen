<?php
$db = new PDO("mysql:host=localhost;dbname=jv","root",123456789);
$db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC);
$json_result = array();

if(isset($_GET['mail']) && !empty($_GET['mail']))
{
$mail = $_GET['mail'];
// 
$result = $db->prepare("SELECT user FROM comptes WHERE email='".$mail."'");
$result->execute();
$data = $result->fetchAll()[0];
$json_result["valid"] = count($data)!=0?1:0;
$json_result["username"] = count($data)!=0?$data["user"]:"no-user";
print(json_encode($json_result));
}
?>