<?php

// header('Content-Type: application/json');

// $name = $_POST['name'];
// $message = "Сообщение от пользователя: $name";

// $result = mail('webprogrammer77@gmail.com', 'Тема письма', $message);

// echo json_encode(array(
//    'status' => $result
// ));

$name = $_POST['name'];
$phone = $_POST['phone'];
$street = $_POST['street'];	
$home = $_POST['home'];	
$part = $_POST['part'];	
$appt = $_POST['appt'];	
$floor = $_POST['floor'];	
$comment = $_POST['comment'];	
$payment = $_POST['payment'];	
$disturb = $_POST['callback'];
$disturb = isset($disturb) ? 'НЕТ' : 'ДА';

$mail_message = "
	<html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
    					<li>Имя: $name</li>
    					<li>Телефон: $phone</li>
    					<li>Улица: $street</li>
    					<li>Дом: $home</li>
    					<li>Корпус: ' $part</li>
    					<li>Квартира: $appt</li>
    					<li>Этаж: $floor</li>
    					<li>Способ оплаты: $payment</li>
    					<li>Комментарии к заказу: $comment</li>
    					<li>Нужно ли перезванивать клиенту: $disturb</li>
  					</ul>
        </body>
    </html>   
    ";
// echo $mail_message;

$headers = "From: Заказ с сайта <admin@webprogrammer77.ru>\r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

// от кого
		// $fromMail = 'admin@burger.prokhorov-igor.ru';
		// $fromName = 'MrBurgerSite';

		// Сюда введите Ваш email
		$emailTo = 'webprogrammer77@yandex.ru';

		// $subject = 'Заказ';
		// $subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
		// $headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		// $headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		// $body = "Получено письмо с сайта http://burger.prokhorov-igor.ru/\n\nИмя: $name\nТелефон: $phone\nУлица: $street\nДом: $home\nКомментарий: $comment";
		// $mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );

$mail = mail($emailTo, 'Заказ', $mail_message, $headers);

// echo $headers;

$data = [];

if($mail) {
	// echo 'done';
	$data['status'] = "OK";
	$data['mes'] = "Сообщение отправлено";
}else{
	// echo 'error';
	$data['status'] = "NO";
	$data['mes'] = "Произошла ошибка";
}
 
   echo json_encode($data);

?>

