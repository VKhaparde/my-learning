
  <?php
  //THis is comment
  # This is also comment
  /* Multiple comments  */

  Echo "Hello World!!";
  $color = "red";
  $name = "Vandana Khaparde";
  echo "My car color is " . $color ;
  echo "My name is ".$name . "!";
  $x =5;
  $y =8;
  function showValues(){
  global  $color,$x , $y;
    echo "My favorite color is ".$color;
    $y = $x +$y;
    echo "$y = " .$y;

  }
  function test(){
    $GLOBALS['x'] = $GLOBALS['x'] + $GLOBALS['y'];
  }

  test();
  echo $x;
  showValues();

  print "<h2>Hello World</h2>";
  print "<br/>";
  print "<h2>"."Hello world" ."</h2>";

   ?>
