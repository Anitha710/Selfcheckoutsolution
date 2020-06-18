
<?php 
    $tokens[] = $_GET['token'];
        $uname = $_GET['uname'];


    function send_notification ($tokens, $message)
	{
		$url = 'https://fcm.googleapis.com/fcm/send';
		$fields = array(
			 'registration_ids' => $tokens,
			 'data' => $message
			);

		$headers = array(
			'Authorization:key=AAAAIGTwVTk:APA91bFK2s3QoyXsdUBwKyOHIJzjR3ZlTsX-uTL54Tabo5doB2sVRnlP_1aCBX3NxUMFPBFFMGa09XE-p83Xf_TJ3nGQFIiSvgvJmd9Rf7ZyXNhjWbksiV401c6yGKQd3zsRjjspftdB',
			'Content-Type: application/json'
			);

	   $ch = curl_init();
       curl_setopt($ch, CURLOPT_URL, $url);
       curl_setopt($ch, CURLOPT_POST, true);
       curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
       curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
       curl_setopt ($ch, CURLOPT_SSL_VERIFYHOST, 0);  
       curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
       curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
       curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
       $result = curl_exec($ch);           
       if ($result === FALSE) {
           die('Curl failed: ' . curl_error($ch));
       }
       curl_close($ch);
       return $result;
	}
	
    $message = array("message" => " Your Cart is Verified, Thank You " .$uname. " for Shopping with Us. ");
	$message_status = send_notification($tokens, $message);

  if($message_status){
    echo '<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="bootstrap/css/style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
    <title>Verification</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,500" rel = "stylesheet">
</head>

<body>
  <div style="background:transparent !important" class="jumbotron text-center">
       <h2>Notification has been sent to '.$uname.' </h2></br>
    </div>

</body>
</html>';
  }

  



 ?>
