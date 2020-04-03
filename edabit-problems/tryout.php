<?php
    $total = "25 students";
    $more = 10;
    $total = $total + $more;
    echo "$total";

$foo = 'Bob';
$bar = &$foo;
$bar = "My name is $bar";
echo $bar;
echo $foo;

$a = array("A", "Cat", "Dog", "A", "Dog");
$b = array("A", "A", "Cat", "A", "Tiger");
$c = array_combine($a, $b);
echo $c;
print_r(array_count_values($c));
?>
