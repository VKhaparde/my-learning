<?php
//     $total = "25 students";
//     $more = 10;
//     $total = $total + $more;
//     echo "$total";

// $foo = 'Bob';
// $bar = &$foo;
// $bar = "My name is $bar";
// echo $bar;
// echo $foo;

// $a = array("A", "Cat", "Dog", "A", "Dog");
// $b = array("A", "A", "Cat", "A", "Tiger");
// $c = array_combine($a, $b);
// echo $c;
// print_r(array_count_values($c));
session_start();
$count  =0;
$_SESSION['key1'] =2;
$_SESSION['key2']=4;
session_destroy();
$count = count($_SESSION);
echo $count;

$a = 1;
++$a;
$a *= $a;
echo $a--;

// class Foo{
//   protected $_value;
//   public function __construct()
//   {
//     $this->_value = 1;
//   }
//   public static function getSomething(){
//     return $this->_value * 5;
//   }
// }
// echo Foo::getSomething();
$w = 'hello';
echo  "$w,world";
echo $w.',world';

$var = '0';
var_dump(isset($var));
var_dump(empty($var));
var_dump(is_null($var));

function changeValue($y){
  $y = $y + 5;
}
$myNum = 8;
changeValue($myNum);
echo $myNum ;

$function = function () {
  return 1;
};
echo get_class($function);
?>
