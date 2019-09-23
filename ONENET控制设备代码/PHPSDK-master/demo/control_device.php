<?php
require '../OneNetApi.php';

$apikey = 'your API key';
$apiurl = 'http://api.heclouds.com';

//创建api对象
$sm = new OneNetApi($apikey, $apiurl);

$device_id = '';
$res = $sm->send_data_to_edp($device_id,1,0,$pump);
$error_code = 0;
$error = '';
if (empty($device)) {
    //处理错误信息
    $error_code = $sm->error_no();
    $error = $sm->error();
}

//展现设备
var_dump($device);