<?php
/**
 * Created by JetBrains PhpStorm.
 * User: linjie
 * Date: 13-6-18
 * Time: 下午12:30
 * To change this template use File | Settings | File Templates.
 */

$arg_data = $_REQUEST["aa"];
function creat()
{
    $t = new DOMDocument("1.0", "utf-8");
    $root = $t->createElement('config'); //创建根节点
    $t->appendChild($root); //将root设为根节点
    $i = 1;
    while ($i < 10) {
        $category = $t->createElement('account');
        $category->nodeValue = "10";
        $category->setAttribute('name', $i); //设置属性并赋值
        $root->appendChild($category);
        $i++;
    }
    $t->saveXML(); //保存XML
    $t->save("../lib/account.xml");
}
//creat();

function view($arg_name){
    $doc = new DOMDocument;
    $doc->load('../lib/account.xml');
    $users = $doc->documentElement->getElementsByTagName('account');
    foreach ($users as $user) {
//        echo $arg_name;
        $old = $user->nodeValue;
        $tem_name = $user->getAttribute('name');
//        echo $tem_name;
        if ($arg_name == $tem_name) {
            $tmpNode = $user->cloneNode();
            $tmpNode->nodeValue = $old + 1;
            $tmpNode = $user->parentNode->appendChild($tmpNode);
            $user->parentNode->replaceChild($tmpNode, $user);
        }
    }
    $doc->save("../lib/account.xml");
}
function read()
{
    $xml = new DOMDocument;
    $xml->load('../lib/account.xml');
    $array = array();
    $lists = $xml->getElementsByTagName('account');
    foreach ($lists as $list) {
        $name = $list->getAttribute('name');
        $val = $list->nodeValue;
        array_push($array, array(
            'name' => $name,
            'account' => $val
        ));
    }
    return $array;
}

if($arg_data!=-1){
    view($arg_data);
}
$data = read();

$maopao = array();
foreach ($data as $list) {
    array_push($maopao, array(
        'name' => $list["name"],
        'account' => $list["account"]
    ));
}
$length = count($maopao);
for($i=0; $i<$length; $i++){
    for($j=0; $j<$length-$i-1; $j++){
      if($maopao[$j]["account"] < $maopao[$j+1]["account"]){
          $tem = $maopao[$j];
          $maopao[$j] = $maopao[$j+1];
          $maopao[$j+1] = $tem;
      }
    }
}
$rank = array();
$rankLen = 10;  //前十
for($i=0; $i<$rankLen; $i++){
    $rank[$i] = $maopao[$i];
}
echo json_encode(
    array("data"=>$data , "rank"=>$rank , "endYear"=>"!@#")
);