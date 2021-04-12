<?php
  $url = "https://www.darksidebooks.com.br/api/catalog_system/pub/products/search?fq=H:149";
  $ch = curl_init($url);
  $api = json_decode(curl_exec($ch));

  
?>

