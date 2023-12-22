<?php
 if(!empty($_POST['submit'])){
   $name=$_POST['name'];
   $email=$_POST['email'];
   $phone=$_POST['phone'];
   $message=$_POST['message'];
   $toEmail= 'randilacreed@gmail.com';

   $mailHeaders = "Name : ". $name .
"\r\n Email:" . $email .
"\r\n Phone:" . $phone .
"\r\n Message:" . $message . "\r\n";
 

 if(mail($toEmail,$name,$mailHeaders)){
  $Usermessage = "Your information is Received Sucessfully";
 }
}
?>
