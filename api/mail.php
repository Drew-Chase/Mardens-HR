<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Content-Type: text/html');
    echo '<h1>405 Method Not Allowed</h1>';
    die();
}

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

$EMAIL_TO = 'drew.chase@mardens.com';
const SUCCESS_MESSAGE = 'HR Contact form successfully submitted. We will get back to you soon!';
const ERROR_MESSAGE = 'There was an error while submitting the form. Please try again later';

$eps = isset($_GET["esp"]);

$fields = ['fname' => 'FirstName', 'lname' => 'LastName', 'phone' => 'Phone', 'email' => 'Email', 'message' => 'Message'];

function createEmailBody(array $fields, array $inputData): string
{
    $emailText = "You have new message from the HR dashboard contact form.\n=============================\n\n";
    foreach ($inputData as $key => $value) {
        if (isset($fields[$key])) {
            $emailText .= "{$fields[$key]}: $value\n";
        }
    }
    return $emailText;
}


$mail = new PHPMailer(true);

try {
    $config = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/config.json');
    $config = json_decode($config, true);

    //Server settings
    $mail->isSMTP();
    $mail->Host = $config['host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config["auth"]["user"];
    $mail->Password = $config["auth"]["pass"];
    $mail->SMTPSecure = 'tls';
    $mail->Port = $config['port'];

    $mail->setFrom($config["auth"]["user"], 'HR Contact Form');
    $mail->addAddress($EMAIL_TO);
    if ($eps) {
        $mail->Subject = "EPS: " . $_POST['subject'];
    } else {
        $mail->Subject = "HR Contact: " . $_POST['subject'];
    }

    $emailText = createEmailBody($fields, $_POST);
    $mail->Body = $emailText;

    $mail->send();
    http_response_code(200);
    $responseArray = ['type' => 'success', 'message' => SUCCESS_MESSAGE];
} catch (Exception $e) {
    http_response_code(500);
    $responseArray = ['type' => 'danger', 'message' => ERROR_MESSAGE . ' Error: ' . $mail->ErrorInfo];
}

header('Content-Type: application/json');
die(json_encode($responseArray));
