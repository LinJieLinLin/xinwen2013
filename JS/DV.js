/**
 * Created with JetBrains PhpStorm.
 * User: linjie
 * Date: 13-6-9
 * Time: 下午5:50
 * To change this template use File | Settings | File Templates.
 */

function dvCtrl($scope, $resource) {
//    $scope.c = {'color':'red','font-size':'1.5em'} //ng-style="c";
    $('.carousel').carousel({
        interval: 3000
    })//初始化轮播

    $scope.lists = angular.fromJson(localStorage.lists);
    $scope.rank = angular.fromJson(localStorage.rank);
    //作品列表
    $scope.http = "http://202.192.18.200/";
    $scope.DV_list = [
        {work:"晨露逐梦",author:"",college:"",href:$scope.http+"play.php?id=31"},
        {work:"215",author:"翁华梅、谢芷玲、李素芬、劳淑欣、李淑仪、孙艳兵",college:"教育学院",href:$scope.http+"play.php?id=33"},
        {work:"致我们终将逝去的青春",author:"王建民、陈贤昌、胡大芬、熊忆、沈仰云、施贵新",college:"美术与设计学院",href:$scope.http+"play.php?id=34"},
        {work:"伞",author:"陈银香、李真真、梁诗婷、徐晓君",college:"人文学院",href:$scope.http+"play.php?id=35"},
        {work:"CLOCK",author:"范文湘、欧嘉俊、骆青彤、庄楚妍、彭诗伊",college:"教育学院",href:$scope.http+"play.php?id=36"},
        {work:"Final",author:"",college:"",href:$scope.http+"play.php?id=37"},
        {work:"舞",author:"樊鹏程、孙文睿、陈若君",college:"新闻与传播学院",href:$scope.http+"play.php?id=38"},
        {work:"young for you",author:"冯静雯、黄玉堂",college:"美术与设计学院",href:$scope.http+"play.php?id=39"},
        {work:"错位",author:"陈敏湘、陈泽豪、李荟、王秀霞、郭瀚炫、欧苑英华",college:"人文学院",href:$scope.http+"play.php?id=42"},
        {work:"搭讪的艺术",author:"曾冠、陈晓红、黄子良、喻浩",college:"人文学院",href:$scope.http+"play.php?id=44"},
        {work:"环卫工",author:"",college:"",href:$scope.http+"play.php?id=45"},
        {work:"第一次",author:"黄少少、谭泳欣、茹嘉钰、黄婉华、杨嘉颖",college:"人文学院",href:$scope.http+"play.php?id=46"},
        {work:"恶意",author:"苏殷霖、肖嘉妮、苏艾青、梁晓文、郑嘉盈",college:"人文学院",href:$scope.http+"play.php?id=47"},
        {work:"渐渐爱",author:"周文婷、蓝静雅、江玉怡、柳贝、杨鑫",college:"人文学院",href:$scope.http+"play.php?id=48"},
        {work:"她与他的故事",author:"",college:"",href:$scope.http+"play.php?id=49"},
        {work:"重遇未知的自己",author:"卓丽珊、江玉怡",college:"教育学院",href:$scope.http+"play.php?id=51"},
        {work:"女友记",author:"肖文敏、徐漫菊、陈嘉文、周映雪、李土清、刘江霞",college:"人文学院",href:$scope.http+"play.php?id=52"},
        {work:"青春方程式",author:"黎智荣、苏海伦",college:"新闻与传播学院、法学院",href:$scope.http+"play.php?id=54"},
        {work:"《感廣》",author:"",college:"",href:$scope.http+"play.php?id=55"},
        {work:"邻居",author:"罗瑜婷、文启健、陈静燚",college:"美术与设计学院",href:$scope.http+"play.php?id=56"},
        {work:"谁的快递",author:"李萍萍、詹炜瑜、张土英、吴玉梅",college:"教育学院",href:$scope.http+"play.php?id=57"},
        {work:"中国梦 黄埔魂",author:"黄志军、庄丹丹、孙艳兵、罗艺、柳贝",college:"教育学院",href:$scope.http+"play.php?id=58"},
        {work:"演员？导演",author:"黄嘉莹、田翠爽、陈嘉琪、冼浩华、黄健怡、饶宇杰",college:"教育学院、人文学院、土木学院",href:$scope.http+"play.php?id=59"},
        {work:"踩画",author:"沈卫卫、刘威、朱清仪、张丽萍、黄金淳、陈锦仪、陈道",college:"新闻与传播学院",href:$scope.http+"play.php?id=60"},
        {work:"我们这一班",author:"廖舒婷、屈颖妍、郑艳华、梁伟东、马俊",college:"美术与设计学院",href:$scope.http+"play.php?id=61"},
        {work:"100 days of you",author:"",college:"",href:$scope.http+"play.php?id=62"},
        {work:"冠军梦,再起航",author:"",college:"",href:$scope.http+"play.php?id=63"},
        {work:"集中营一",author:"",college:"",href:$scope.http+"play.php?id=64"},
        {work:"集中营二",author:"",college:"",href:$scope.http+"play.php?id=65"},
    ]
    //作品图片列表
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
        {"background-image": "url(../jpg/25.png)"},
        {"background-image": "url(../jpg/26.png)"},
        {"background-image": "url(../jpg/27.png)"},
        {"background-image": "url(../jpg/28.png)"},
    ];
    //友情连接
    $scope.links=[{name:"珠江在线",href:"http://www.proxtv.com"},
        {name:"广大主页",href:"http://www.gzhu.edu.cn/"},
        {name:"新闻中心",href:"http://news.gzhu.edu.cn/newsxp/index.jsp"}
    ]

    $scope.aaa = function () {
        $.post("../src/DV.asp", {aa: -1},
            function (data) {
                alert(data);
                alert(data.length);
            },"json")
    }
    $scope.aaa();
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