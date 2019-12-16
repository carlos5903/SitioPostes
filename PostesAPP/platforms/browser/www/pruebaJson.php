<?php
									
$url="https://qwjeu3ruqiqaowj-db22112019.adb.us-phoenix-1.oraclecloudapps.com/ords/wspace1/fun/auten/hj";

                                    
$html = file_get_contents($url);

$json = json_decode($html);

$codigo = $json->u_cod;
$lat = $json->coord->lat;
$lon = $json->coord->lon;

echo $codigo;
echo '<br>';
echo $lat;
echo '<br>';
echo $lon; 