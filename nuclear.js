var map;
var markers=[];
var infowindow = new google.maps.InfoWindow();
var setViews=function(day, order ,lat, lon, viewname, description){
  marker = new google.maps.Marker({
      center:new google.maps.LatLng(-43.531310, 172.640276),
      position: new google.maps.LatLng(lat, lon),
      map: map,
      title: viewname,
      icon: "images/icong"+order+".png"

  });
   google.maps.event.addListener(marker, 'click', function() {

      infowindow = new google.maps.InfoWindow({
          content: description,
          title: viewname
      });
      infowindow.open(map,this);      //原本是marker改成this
  })
  markers.push(marker);

};



function initialize() {
  
  //geocoder = new google.maps.Geocoder();
  var mapOptions = {
    center: new google.maps.LatLng(-42.531310, 172.640276),
    zoom: 6,
    //mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
   $(document).ready(function(){
    $('#first').click(function(){
      if(markers.length!==0){
        checkMarkers();
      }
       var content1='<h1>奧馬魯</h1>'+'<p>'+'位於紐西蘭南島的東部，是歷史軌跡與可愛神仙企鵝的故鄉，沿著東海岸是開發的起始點，現今其歷史建築獨特而成紐西蘭獨樹一格的地方，且亦成為一個非常有歐洲氣質的小鎮，漫步於此街上形形色色的建築處處是驚奇，時而宏偉、時而瑰麗、時而巴洛克風、時而文藝復興式美不勝收。'+'</p>'+
      '<img style="width:250px; float:right" src="images/1.jpg"></img>'+'<img style="width:250px; float:right; margin-right:5px" src="images/2.jpg"></img>' ;

      setViews(1,1,-45.095969, 170.969685,"ddd",content1);
      
      
      
    });
    $('#second').click(function(){
      if(markers.length!==0){
        checkMarkers();
      }
      
      var content1= '<h1>旦尼丁</h1>'+'<p>但尼丁市區觀光，古老的奧塔哥大學的鐘塔和歌德式建築的修道院，文藝復興式的但尼丁火車站，加上維多利'+
      '亞風格的石頭建築點綴的街區，讓人浸沐在蘇格蘭風情裡。不可錯過的還有列入金氏世界紀錄的世界上最陡街道鮑德溫街，在 350 公尺的陡峭斜坡上或跑或走令人趣味無窮。</p>'+
      '<img style="width:250px; float:right" src="images/3.jpg"></img>'+'<img style="width:250px; float:right; margin-right:5px" src="images/4.jpg"></img>';
      var content2= '<h1>第阿納螢火蟲洞</h1>'+'<p>別具魅力的渡假城鎮第阿納，是探訪螢火蟲洞的最佳基地。與北島鐘乳石洞不同之處，是因地下水源充沛且不斷'+
      '變化中，故為一個活性鐘乳石洞。當然，這段奇特的地下探險之旅，搭乘著小船，無聲無息的滑入自然天成的地下河中，於一片靜謐中欣賞螢火蟲所構築的滿空爍藍，令人屏息感動，'+
      '更多，也更美。</p>'+
      '<img style="width:250px; float:right" src="images/5.png"></img>';
      setViews(2,1,-45.875682, 170.502400,"ddd",content1);
      setViews(2,2,-45.415641, 167.713320,"ddd",content2);
      
    });
    $('#thrid').click(function(){
      checkMarkers();
      var content1= '<h1>峽灣國家公園</h1>'+'<p>佔地面積達 25萬公頃於1986年已被授予世界遺產區。此外，前往密佛頌峽灣的道路被人稱為全世界風景最好的高地公'+
      '路之一。早上在峽灣巡弋航程中您有機會觀賞到紐西蘭特有的寒帶動物：如紐西蘭軟毛海豹、凸吻海豚等或峽灣雞冠企鵝或藍企鵝等野生動物。</p>'+
      '<img style="width:250px; float:right" src="images/6.jpg"></img>';
      var content2= '<h1>皇后鎮</h1>'+'<p>皇后鎮從過去三十年間從一個寧靜的湖濱農業小鎮發展成一座全年無休的觀光都市。乾燥的大陸氣候，加上純淨的空氣，使'+
      '得陽光得以在此千變萬化，創造出別無法擁有的獨特景觀。</p>'+'<img style="width:250px; float:right" src="images/7.jpg"></img>';
      setViews(3,1,-45.25, 167.43,"ddd",content1);
      setViews(3,2,-45.029641, 168.662501,"ddd",content2);
    });
     $('#forth').click(function(){
      checkMarkers();
      var content1= '<h1>費力小鎮-基督城</h1>'+'</p>早餐後與親切的農場主人道別，返回坎特伯里平原的路上，一望無際綠草與點點的白羊最讓人忘懷。午餐安排台籍廚師烹調的高級料'+
      '理，下午搭乘紐西蘭航空國內線，經奧克蘭轉機飛往台北。</p>'+'<img style="width:250px; float:right" src="images/8.jpg"></img>';
      setViews(4,1,-43.530812, 172.640276,"ddd",content1);
      
    });

  })
  //setViews(1,1,25.165173,121.957512,"ddd","ddddddd");
  google.maps.event.addListener(map, "click", function(){
  infowindow.close();
});  
  


};
function checkMarkers(){

  if(markers!==null){
    //infowindow.close();
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
      //markers.length=0;
    }
    markers.length= 0;
  }
}









