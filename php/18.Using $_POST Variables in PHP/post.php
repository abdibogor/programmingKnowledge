<?php
/*
$_POST["username"];
$_POST["password"];
*/

echo 'Username:'.$_POST["username"].' Password'.$_POST["password"].'<br>';

if(($_POST["username"]==="mark") && ($_POST["password"]==="pass"))
{
	   echo "username and password is correct";
} 
else
	{
		echo "username and password is not correct";
	}

?>