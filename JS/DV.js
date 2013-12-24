/**
 * Created with JetBrains PhpStorm.
 * User: linjie
 * Date: 13-6-9
 * Time: 下午5:50
 * To change this template use File | Settings | File Templates.
 */

function dvCtrl($scope, $resource) {
//    $scope.c = {'color':'red','font-size':'1.5em'} //ng-style="c";

    $scope.lists = angular.fromJson(localStorage.lists);
    $scope.rank = angular.fromJson(localStorage.rank);
    $scope.a = 0;
    //作品列表
    $scope.DV_list = [
        {work:"晨露逐梦",author:"",college:"",href:"http://202.192.18.200/play.php?id=31"},
        {work:"215",author:"",college:"",href:"http://202.192.18.200/play.php?id=33"},
        {work:"致我们终将逝去的青春",author:"",college:"",href:"http://202.192.18.200/play.php?id=34"},
        {work:"伞",author:"",college:"",href:"http://202.192.18.200/play.php?id=35"},
        {work:"CLOCK",author:"",college:"",href:"http://202.192.18.200/play.php?id=36"},
        {work:"Final",author:"",college:"",href:"http://202.192.18.200/play.php?id=37"},
        {work:"舞",author:"",college:"",href:"http://202.192.18.200/play.php?id=38"},
        {work:"young for you",author:"",college:"",href:"http://202.192.18.200/play.php?id=39"},
        {work:"错位",author:"",college:"",href:"http://202.192.18.200/play.php?id=42"},
        {work:"从头做起",author:"",college:"",href:"http://202.192.18.200/play.php?id=43"},
        {work:"搭讪的艺术",author:"",college:"",href:"http://202.192.18.200/play.php?id=44"},
        {work:"环卫工",author:"",college:"",href:"http://202.192.18.200/play.php?id=45"},
        {work:"第一次",author:"",college:"",href:"http://202.192.18.200/play.php?id=46"},
        {work:"恶意",author:"",college:"",href:"http://202.192.18.200/play.php?id=47"},
        {work:"渐渐爱",author:"",college:"",href:"http://202.192.18.200/play.php?id=48"},
        {work:"重遇未知的自己",author:"",college:"",href:"http://202.192.18.200/play.php?id=51"},
        {work:"女友记",author:"",college:"",href:"http://202.192.18.200/play.php?id=52"},
        {work:"青春方程式",author:"",college:"",href:"http://202.192.18.200/play.php?id=54"},
        {work:"《感廣》",author:"",college:"",href:"http://202.192.18.200/play.php?id=55"},
        {work:"邻居",author:"",college:"",href:"http://202.192.18.200/play.php?id=56"},
        {work:"谁的快递",author:"",college:"",href:"http://202.192.18.200/play.php?id=57"},
        {work:"中国梦 黄埔魂",author:"",college:"",href:"http://202.192.18.200/play.php?id=58"},
        {work:"演员？导演",author:"",college:"",href:"http://202.192.18.200/play.php?id=59"},
        {work:"踩画",author:"",college:"",href:"http://202.192.18.200/play.php?id=60"},
        {work:"我们这一班",author:"",college:"",href:"http://202.192.18.200/play.php?id=61"}
    ]
    //作品图片列表
    $scope.wh = {
        "background-size":"290px 218px"
    }
    $scope.img_list = [
        {"background-image": "url(../jpg/0.png)"},
        {"background-image": "url(../jpg/1.png)"},
        {"background-image": "url(../jpg/2.png)"},
        {"background-image": "url(../jpg/3.png)"},
        {"background-image": "url(../jpg/4.png)"},
        {"background-image": "url(../jpg/5.png)"},
        {"background-image": "url(../jpg/6.png)"},
        {"background-image": "url(../jpg/7.png)"},
        {"background-image": "url(../jpg/8.png)"},
        {"background-image": "url(../jpg/9.png)"},
        {"background-image": "url(../jpg/10.png)"},
        {"background-image": "url(../jpg/11.png)"},
        {"background-image": "url(../jpg/12.png)"},
        {"background-image": "url(../jpg/13.png)"},
        {"background-image": "url(../jpg/14.png)"},
        {"background-image": "url(../jpg/15.png)"},
        {"background-image": "url(../jpg/16.png)"},
        {"background-image": "url(../jpg/17.png)"},
        {"background-image": "url(../jpg/18.png)"},
        {"background-image": "url(../jpg/19.png)"},
        {"background-image": "url(../jpg/20.png)"},
        {"background-image": "url(../jpg/21.png)"},
        {"background-image": "url(../jpg/22.png)"},
        {"background-image": "url(../jpg/23.png)"},
        {"background-image": "url(../jpg/24.png)"},
        {"background-image": "url(../jpg/25.png)"}
    ];

    $scope.read_list = function () {
        $.post("../src/DV.php", {aa: -1},
        function (data) {
            if(data){
            $scope.lists = data.data;
            localStorage.lists = angular.toJson(data.data);
            $scope.rank = data.rank;
            localStorage.rank = angular.toJson(data.rank);
            var len = $scope.rank.length;
            var DV_list_len = $scope.DV_list.length
            for(var i=0;i<len;i++){
                for(var j=0;j<DV_list_len;j++){
                   if($scope.rank[i].name==$scope.DV_list[j].work){
                       $scope.rank[i].href = $scope.DV_list[j].href;
                       break;
                   }
                }
            }
            $scope.$apply();
            }
        },"json")
    };
    $scope.add = function(arg_name){
        $.post("../src/DV.php", {aa: arg_name},
            function (data) {
                if(data){
                    $scope.lists = data.data;
                    $scope.$apply();
                }
            },"json")
    }

    $scope.read_list();
}
angular.module("DV", ['ngResource']);