<?php
$db_host = "localhost"; 
$db_name    = 'ifind';
$db_username    = 'root';
$db_password    = '';
@mysql_connect("{$db_host}", "{$db_username}", "{$db_password}") or die("Không th? k?t n?i database");
@mysql_select_db("{$db_name}") or die("Không th? ch?n database");
?>