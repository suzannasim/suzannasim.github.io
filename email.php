<?php

//if(!isset($_POST['submit'])) {
//    //This page should not be accessed directly. Need to submit the form.
//    echo "error; you need to submit the form";
//}
//
//$name = $_POST['name'];
//$visitor_email = $_POST['email'];
//$subject = $_POST['subject'];
//$message = $_POST['message'];
//
////Validate first
//if(empty($name) || empty($visitor_email)) {
//    echo "name and email are mandatory";
//        exit;
//}

//$email_from = "suzannasim@gmail.com";
//$email_subject = "Website Form Submission: $name, $subject";
//$email_body = "$message";
//$to = "suzannasim@gmail.com";
//$headers = "From: $email_from \r\n";
//$headers .= "Reply-To: $visitor_email \r\n";

$email_from = "suzannasim@gmail.com";
$email_subject = "Website Form Submission";
$email_body = "It worked!";
$to = "suzannasim@gmail.com";
$headers = "From: suzannasim@gmail.com \r\n";
$headers .= "Reply-To: kdquon@gmail.com \r\n";

mail($to, $email_subject, $email_body, $headers);

?>