<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): 
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
        case("POST"): 
            header("Access-Control-Allow-Origin: *");
            
            $json = file_get_contents('php://input');
            $params = json_decode($json);
    
            $email = $params->email;
            $name = $params->name;
            $message = $params->message;
            $language = isset($params->language) ? $params->language : 'de';
    
            $recipient = 'contact@marcel-soerensen.com';  
            $subject = "Contact From <$email>";
            $message = "From:" . $name . "<br>" . $message ;
    
            $headers   = array();
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-type: text/html; charset=utf-8';

            $headers[] = "From: noreply@mywebsite.com";

            mail($recipient, $subject, $message, implode("\r\n", $headers));
            if ($language === 'en') {
                $confirmSubject = "Your message has been received";
                $confirmMessage = "Hello $name,<br><br>Thank you for your message! I will get back to you as soon as possible.<br><br>Best regards<br><br>Marcel Sörensen";
            } else {
                $confirmSubject = "Nachricht erhalten";
                $confirmMessage = "Hallo $name,<br><br>Vielen Dank für die Nachricht! Ich werde mich so schnell wie möglich zurückmelden.<br><br>Freundliche Grüße<br><br>Marcel Sörensen";
            }
            $confirmHeaders = array();
            $confirmHeaders[] = 'MIME-Version: 1.0';
            $confirmHeaders[] = 'Content-type: text/html; charset=utf-8';
            $confirmHeaders[] = "From: contact@marcel-soerensen.com";

            mail($email, $confirmSubject, $confirmMessage, implode("\r\n", $confirmHeaders));
            break;
        default:
            header("Allow: POST", true, 405);
            exit;
    } 
