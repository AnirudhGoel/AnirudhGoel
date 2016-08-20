<?php
	date_default_timezone_set('Asia/Calcutta');
	$date = date("g:i:s A \of d M Y");
	$email = $_GET['email'];

	$myfile = fopen("../txt/mail_list.txt", "a");
	fwrite($myfile, $date);
	fwrite($myfile, "\n");
	fwrite($myfile, $email);
	fwrite($myfile, "\n");
	fwrite($myfile, "\n");
	fclose($myfile);
?>