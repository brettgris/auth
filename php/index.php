<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: Authorization");
// header('Content-Type: application/json; charset=utf-8');

// Require composer autoloader
require __DIR__ . '/vendor/autoload.php';

use Auth0\SDK\JWTVerifier;
use GuzzleHttp\Client;

$playlists = array(
	'show'=>'playlist_id'
);

$pk = '{policy}';

try{
	$token = $_GET['token'];
	$show = $_GET['show'];
	$episode = $_GET['episode'];

	$key = $episode%100 - 1;

	$verifier = new JWTVerifier([
	    'supported_algs' => ['RS256'],
	    'valid_audiences' => ['{app_id}'],
	    'authorized_iss' => ['{domain}']
	]);

	$verifier->verifyAndDecode($token);

	if ($verifier) {

		$client = new GuzzleHttp\Client(['base_uri' => '']);

		$pl = $playlists[$show];
		if ($pl) {
			$url = '{api_url}'.$pl;

			$response = $client->request('GET', $url, [
				'headers'  => [
                	'Accept' => 'application/json;pk='.$pk
            	]
			]);

			$res = $response->getBody();
			$data = json_decode($res);

			$videos = $data->videos;
			$video = $videos[$key];

			$return = array(
				'status'=>true,
				'id'=>$video->id
			);

			echo json_encode($return);
		};
	}

} catch(Exception $e){
	$return = array(
		'status'=>false,
		'id'=>null
	);

	echo json_encode($return);
}

?>
