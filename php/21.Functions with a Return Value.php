<?php
function add($num1,$num2)
{
    $result = $num1 + $num2 ;
	return $result;
}

//(899+1000) * (2000+1100)

$add1=add(899,1000);
echo add(899,1000).'<br>';
$add2=add(2000,1100);
echo add(2000,1100).'<br>';

echo $add1 * $add2;

?>