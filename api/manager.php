<?php
$file = $_GET['file'];
$contents = file_get_contents("php://input");
file_put_contents($_SERVER['DOCUMENT_ROOT'] . "/assets/md/$file", $contents);