<?php
  $name="Mark";
  
  echo $name;
  
  function showName()
   {
	   global $name;
	   echo 'The name of the student is '.$name;
   }

   showName();
?>