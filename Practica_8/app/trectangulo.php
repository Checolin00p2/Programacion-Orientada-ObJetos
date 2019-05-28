<?php

    require("figura.php");

    $datos = filter_input_array(INPUT_POST, $_POST);

    $altura = $datos['a'];
    $base = $datos['b'];
    $ladolarg = $datos['c'];

    $trec = new TrianguloRectanguloIsosceles($base, $altura,$ladolarg);

    echo $trec->realizarCalculos();
?>