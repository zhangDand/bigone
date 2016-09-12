function log(a){
  console.log(a);
}
function $(selector){
  return document.querySelectorAll(selector);
}


// var $=function(selector){
//   return [].slice.call(document.querySelectorAll(selector));
// }
// 
// 
function getCookie() {
   var cookie = {};
   var all = document.cookie;
   if (all === '')
       return cookie;
   var list = all.split(';');
   for (var i = 0; i < list.length; i++) {
       var item = list[i];
       var p = item.indexOf('=');
        var name = item.substring(0, p);
        name = decodeURIComponent(name);
        var value = item.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie;
}


// cookie=document.cookie;
// log(cookie);
// message=$('.m-message');
// log(message)

/**
 * 信息栏cookie注册
 * @Author   Zd
 * @DateTime 2016-09-02T15:02:48+0800
 * @return   {[type]} 信息栏的事件注册
 */




// //1.创建节点
// //2.插入节点
// //3.滚动
// //
// //初始化
// log(data[0]);
// var list=$('.m-hot .hot')[0].children;
// var margin=21;
// // log(list);
// // for(var i=0,len=list.length;i<len;i++){
// //   var l=list[i];
// //   var hei=l.offsetHeight;

// //   l.style.top=(l.offsetHeight+margin)*(i-1)+'px';
// // }
// var arr=[];
// for(var i=0;i<5;i++){
//   arr[i]=i;
// }
// var offsetAll=1,jumpNum=1;

// //跳转函数
// function jump(event,num,margin){
//   num = num || 1;
//   margin= margin || 21;
//   for(var i=0,len=list.length;i<len;i++){
//   var l=list[i];
//   var hei=l.offsetHeight;
//   l.style.top=(l.offsetHeight+margin)*((i+jumpNum-1)%10)+'px';
//   }
//   jumpNum=(jumpNum+10+num)%10;
//   log(num);
//   log(jumpNum);
// }

// //title=name,img=smallPhotoUrl,link=providerLink,num=learnerCount
// //传参设置
// var keyArr=['name','smallPhotoUrl','providerLink','learnerCount']


//数据解析函数
 function _getData(data,keyArr){
  var arr=[],obj={};
  for (var i = 0; i < keyArr.length; i++) {
    var key=keyArr[i];
    obj[key]=data[key];

  }
  return obj;
}
function test(textArr,keyArr){
  var arr=[];
  for (var i = 0; i < textArr.length; i++) {
    var obj;
    data=textArr[i];
    obj=_getData(data,keyArr);
    arr.push(obj);
  }
  return arr;
}


// //封装get函数
// function get(url,options,callback){

//   var xhr=new XMLHttpRequest();

//   function serialize (data){
//         if(!data) return '';
//         var pairs=[];
//         for(var name in data){
//           if(!data.hasOwnProperty(name)) continue;
//           if(typeof data[name] === 'function') continue;
//           var value = data[name].toString();
//           // name = encodeURIComponent(name);
//           // value = encodeURIComponent(value);
//           pairs.push(name + '=' + value) ;
//         }
//         return pairs.join('&');
//       }
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState==4){
//       if((xhr.status>=200 && xhr.status<300) || xhr.status==304){
//         callback(xhr.responseText);
//       }else{
//         status='当前无法连接：'+xhr.status;
//         console.log('err:'+status);
//       }
//     }
//   }
//   url=options?url + '?' +serialize(options) : url;
//   xhr.open('get',url);
//   xhr.send(null);

// }
// //数据绑定
// function bindData(list,data){
//   for(var i=0,len=list.length;i<len;i++){
//     var l=list[i],d=data[i];

//     var src=l.querySelector('.img'),
//         link=l.querySelector('.link'),
//         caption=l.querySelector('.caption'),
//         num=l.querySelector('.num span>span');

//     src.src=d['smallPhotoUrl'];
//     link.href=d['providerLink'];
//     link.title=d['name'];
//     caption.innerText=d['name'];
//     num.innerText=d['learnerCount'];
//   }
// }
// var keyArr=['name','smallPhotoUrl','providerLink','learnerCount'];
// var container=$('.m-hot .hot')[0];
// var options={url:'study.163.com/webDev/hotcouresByCategory.htm',options:'',container:container,keyArr:keyArr};
// hot=new Hot(options);


var respText={"totalCount":630,"list":[{"id":1006,"pid":null,"categoryId":29001,"categoryName":null,"auditStatus":4,"smallPhotoUrl":"http://img4.ph.126.net/OLbwWtpEQmjxGKVteDMQwA==/2493023868744187214.jpg","bigPhotoUrl":"http://img8.ph.126.net/a4PUaWdCK4TEn73xwJ8tNg==/6597237991937106548.jpg","descriptionVideoId":-1,"name":"TOC101：Java程序开发（基础）","creatorId":269004,"creatorNick":null,"provider":"达内精品在线","providerType":2,"description":"TOC-101课程是Java程序设计方向的基础实训课程，主要介绍Java程序的基本结构和核心语法，课程内容涉及计算机语言基础、Java核心语法、基本数据结构、流程控制等知识。在内容组织上，以一系列小案例贯穿课程的始终，并且将这些小案例最终组合成为一个具有一定业务复杂度的可执行的应用程序。通过一系列案例的学习使学员能掌握Java编程的基本技术，能理解计算机程序的执行逻辑，能编写简单的Java程序。","gmtCreate":"2012-11-14 15:40:17","gmtModified":"2016-09-08 01:00:13","targetUser":"有一定计算机及面向对象编程基础的学习者","mark":4.585106,"price":0.00,"commonDiscountPrice":null,"commonDiscountRate":null,"providerPhotoUrl":"http://img3.ph.126.net/ZxPzoISEZQZsXB9Gw0eyzA==/6597733871679691873.jpg","providerLink":"http://study.163.com/u/ykt1457689141835","recommend":0,"recommendForQrRepo":null,"weightForQrRepo":null,"commentCount":94,"learnerCount":7903,"lectors":null,"learningProgress":null,"learningLessonId":null,"learningLessonName":null,"learningLessonPosition":null,"started":null,"learningStatus":null,"compatibleLearningStatus":null,"middlePhotoUrl":"http://img3.ph.126.net/NHRUh0UFc2LgrzSifFSCdQ==/6597374331379039923.jpg","providerDesc":"北京达内科技有限公司,致力于培养面向电信和金融的高端软件人才，由美国国际数据集团IDG、集富亚洲JAFCO ASIA和高盛集团投资，是国内首家获得国际风险投资的IT培训机构。","published":1,"isFollowUp":true,"courseUrl":null,"continueLearningUrl":null,"aliasNameForUrl":null,"ended":false,"termId":null,"lessonsCount":3,"translatedCount":null,"releaseType":20,"videoUrl":null,"hdVideoUrl":null,"shdVideoUrl":null,"videoImgUrl":null,"activeFlag":1,"isDraft":false,"notPublishedDraft":false,"bought":false,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"isBoughtExpired":false,"boughtInfoDto":{"infoType":4,"periodTimeLeft":0,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"activeFlag":1,"watchedTime":null},"iosVisible":1,"webVisible":1,"tags":null,"liveFlag":0,"ownerType":5,"ownerId":1015445570,"firstPublishTime":"2012-11-14 15:40:17","lastSubmtReviewTime":"2012-11-14 15:40:17","categoryRels":null,"watchDuration":0,"allCount":null,"forumTagLector":0,"tagLectorTime":0,"hasCoupon":false,"startTime":null,"endTime":null,"restWeek":null,"eduIapItemDto":null,"universalCoupon":null,"tagIap":0,"production":null,"categoryNames":null,"courseType":0},{"id":195001,"pid":null,"categoryId":29001,"categoryName":null,"auditStatus":4,"smallPhotoUrl":"http://img3.ph.126.net/3UYDF6OqgC0UvKrkIM3Mtg==/6598300120167569643.jpg","bigPhotoUrl":"http://img9.ph.126.net/K-XG6RN6K8fwOpvtxa1HAg==/6598300120167569639.jpg","descriptionVideoId":-1,"name":"JavaScript","creatorId":269004,"creatorNick":null,"provider":"翁恺","providerType":1,"description":"JavaScript是一种广泛用于客户端网页开发的脚本语言，它可以用来给HTML网页添加动态功能，实现与用户的交互。它最初由网景公司设计，是一种动态、弱类型、基于原型的语言，现在是甲骨文公司的注册商标。JavaScript是一种脚本语言，其源代码在发往客户端运行之前不需经过编译，而是将文本格式的字符代码发送给浏览器由浏览器解释运行。\r\n本课程通过JavaScript语言学习程序设计的基本概念：变量、计算、控制、循环、函数等，并深入理解JavaScript如何与浏览器和HTML的诸元素协同工作。","gmtCreate":"2012-10-10 15:59:12","gmtModified":"2016-09-08 01:00:14","targetUser":"适用于具备一定计算机基础知识的学员。","mark":4.749746,"price":0.00,"commonDiscountPrice":null,"commonDiscountRate":null,"providerPhotoUrl":null,"providerLink":"http://study.163.com/u/wengkai","recommend":0,"recommendForQrRepo":null,"weightForQrRepo":null,"commentCount":983,"learnerCount":62301,"lectors":null,"learningProgress":null,"learningLessonId":null,"learningLessonName":null,"learningLessonPosition":null,"started":null,"learningStatus":null,"compatibleLearningStatus":null,"middlePhotoUrl":"http://img2.ph.126.net/FbEaSCV5ZcHmt1enIvAPFA==/6598300120167569642.jpg","providerDesc":"浙江大学计算机学院教师，研究方向嵌入式操作系统及嵌入式系统应用。主要讲授各种程序设计语言等课程。","published":1,"isFollowUp":false,"courseUrl":null,"continueLearningUrl":null,"aliasNameForUrl":null,"ended":false,"termId":null,"lessonsCount":10,"translatedCount":null,"releaseType":10,"videoUrl":null,"hdVideoUrl":null,"shdVideoUrl":null,"videoImgUrl":null,"activeFlag":1,"isDraft":false,"notPublishedDraft":false,"bought":false,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"isBoughtExpired":false,"boughtInfoDto":{"infoType":4,"periodTimeLeft":0,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"activeFlag":1,"watchedTime":null},"iosVisible":1,"webVisible":1,"tags":null,"liveFlag":0,"ownerType":10,"ownerId":318013,"firstPublishTime":"2012-12-21 15:28:26","lastSubmtReviewTime":"2012-12-21 15:28:26","categoryRels":null,"watchDuration":0,"allCount":null,"forumTagLector":0,"tagLectorTime":0,"hasCoupon":false,"startTime":null,"endTime":null,"restWeek":null,"eduIapItemDto":null,"universalCoupon":null,"tagIap":0,"production":null,"categoryNames":null,"courseType":0},{"id":212004,"pid":null,"categoryId":29001,"categoryName":null,"auditStatus":4,"smallPhotoUrl":"http://img9.ph.126.net/3X6IGcL8uHsqp_sZyDHEnA==/2529897090693302339.jpg","bigPhotoUrl":"http://img9.ph.126.net/yjdpXycgaNtzIfmLekyNJA==/1078330635796536739.jpg","descriptionVideoId":-1,"name":"玩转Oracle实战教程","creatorId":269003,"creatorNick":null,"provider":"传智播客","providerType":2,"description":"Oracle Database，又名Oracle RDBMS，或简称Oracle，是甲骨文公司的一款关系数据库管理系统，到目前仍在数据库市场上占有主要份额。","gmtCreate":"2012-12-14 17:30:15","gmtModified":"2016-09-08 01:00:15","targetUser":"至少掌握一门编程语言，并且最好学习过别的数据库","mark":4.739726,"price":0.00,"commonDiscountPrice":null,"commonDiscountRate":null,"providerPhotoUrl":"http://img8.ph.126.net/pdwdfU-vS52YGM3ezeuUUA==/6597266579239399428.jpg","providerLink":"http://study.163.com/u/itcast","recommend":0,"recommendForQrRepo":null,"weightForQrRepo":null,"commentCount":146,"learnerCount":16693,"lectors":null,"learningProgress":null,"learningLessonId":null,"learningLessonName":null,"learningLessonPosition":null,"started":null,"learningStatus":null,"compatibleLearningStatus":null,"middlePhotoUrl":"http://img0.ph.126.net/SAFw9cw6e7wI9bF_13UP4w==/6597890002331084850.jpg","providerDesc":"国内技术最牛、口碑最好的IT培训机构，CSDN旗下高端培训机构，开设Java、PHP、网页平面设计、IOS课程。","published":1,"isFollowUp":false,"courseUrl":null,"continueLearningUrl":null,"aliasNameForUrl":null,"ended":false,"termId":null,"lessonsCount":31,"translatedCount":null,"releaseType":0,"videoUrl":null,"hdVideoUrl":null,"shdVideoUrl":null,"videoImgUrl":null,"activeFlag":1,"isDraft":false,"notPublishedDraft":false,"bought":false,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"isBoughtExpired":false,"boughtInfoDto":{"infoType":4,"periodTimeLeft":0,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"activeFlag":1,"watchedTime":null},"iosVisible":1,"webVisible":1,"tags":null,"liveFlag":0,"ownerType":5,"ownerId":439129,"firstPublishTime":"2012-12-14 17:30:15","lastSubmtReviewTime":"2012-12-14 17:30:15","categoryRels":null,"watchDuration":0,"allCount":null,"forumTagLector":0,"tagLectorTime":0,"hasCoupon":false,"startTime":null,"endTime":null,"restWeek":null,"eduIapItemDto":null,"universalCoupon":null,"tagIap":0,"production":null,"categoryNames":null,"courseType":0},{"id":212010,"pid":null,"categoryId":29001,"categoryName":null,"auditStatus":4,"smallPhotoUrl":"http://img9.ph.126.net/aT8C1k7s2CtQXbkFUWu90A==/6597135737355722489.jpg","bigPhotoUrl":"http://img4.ph.126.net/f9MtCrzb8wsifoON_iCOiw==/1009932216455846804.jpg","descriptionVideoId":-1,"name":"FCKeditor视频教程","creatorId":250003,"creatorNick":null,"provider":"传智播客","providerType":2,"description":"FCKeditor是一款功能强大的开源在线文本编辑器(DHTML editor)，它使你在web上可以使用类似微软Word 的桌面文本编辑器的许多强大功能。FCKeditor是轻量级的，不必在客户端进行任何方式的安装。FCKeditor现在已经广泛用于论坛、Blog、新闻发布、内容管理等系统中，如果您要开发这些系统，FCKeditor是个很好的选择。","gmtCreate":"2012-12-14 18:19:28","gmtModified":"2016-09-08 01:00:15","targetUser":"具有Web开发经验","mark":5.0,"price":0.00,"commonDiscountPrice":null,"commonDiscountRate":null,"providerPhotoUrl":"http://img8.ph.126.net/pdwdfU-vS52YGM3ezeuUUA==/6597266579239399428.jpg","providerLink":"http://study.163.com/u/itcast","recommend":0,"recommendForQrRepo":null,"weightForQrRepo":null,"commentCount":4,"learnerCount":888,"lectors":null,"learningProgress":null,"learningLessonId":null,"learningLessonName":null,"learningLessonPosition":null,"started":null,"learningStatus":null,"compatibleLearningStatus":null,"middlePhotoUrl":"http://img9.ph.126.net/QXNZWmbpEYR-_a4HhuELgw==/6597951574982241779.jpg","providerDesc":"国内技术最牛、口碑最好的IT培训机构，CSDN旗下高端培训机构，开设Java、PHP、网页平面设计、IOS课程。","published":1,"isFollowUp":false,"courseUrl":null,"continueLearningUrl":null,"aliasNameForUrl":null,"ended":false,"termId":null,"lessonsCount":15,"translatedCount":null,"releaseType":0,"videoUrl":null,"hdVideoUrl":null,"shdVideoUrl":null,"videoImgUrl":null,"activeFlag":1,"isDraft":false,"notPublishedDraft":false,"bought":false,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"isBoughtExpired":false,"boughtInfoDto":{"infoType":4,"periodTimeLeft":0,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"activeFlag":1,"watchedTime":null},"iosVisible":1,"webVisible":1,"tags":null,"liveFlag":0,"ownerType":5,"ownerId":439129,"firstPublishTime":"2012-12-14 18:19:28","lastSubmtReviewTime":"2012-12-14 18:19:28","categoryRels":null,"watchDuration":0,"allCount":null,"forumTagLector":0,"tagLectorTime":0,"hasCoupon":false,"startTime":null,"endTime":null,"restWeek":null,"eduIapItemDto":null,"universalCoupon":null,"tagIap":0,"production":null,"categoryNames":null,"courseType":0},{"id":212005,"pid":null,"categoryId":29001,"categoryName":null,"auditStatus":4,"smallPhotoUrl":"http://img9.ph.126.net/lmO3hyXGo9dBHVaC-2OEwg==/6597965868633405119.jpg","bigPhotoUrl":"http://img8.ph.126.net/rMqQ0DFeitJKtS5DxrcxJw==/6597965868633405118.jpg","descriptionVideoId":-1,"name":"JPA详解","creatorId":269003,"creatorNick":null,"provider":"传智播客","providerType":2,"description":"JPA用于整合现有的ORM技术，可以简化现有Java EE和Java SE应用的对象持久化的开发工作，实现ORM的统一。JPA作为一项对象持久化的标准，不但可以获得Java EE应用服务器的支持，还可以直接在Java SE中使用。JPA必将成为Java持久化解决方案的主流，如果你是Hibernate或者TopLink的等ORM技术的忠实用户，不管你是否情愿，你迟早也得使用JPA，那现在正好可以借助传智播客视频教程的帮助，开始学习和尝试JPA吧！","gmtCreate":"2012-12-14 17:42:06","gmtModified":"2016-09-08 01:00:15","targetUser":"具有一定Hibernate基础的Java工程师","mark":4.2,"price":0.00,"commonDiscountPrice":null,"commonDiscountRate":null,"providerPhotoUrl":"http://img8.ph.126.net/pdwdfU-vS52YGM3ezeuUUA==/6597266579239399428.jpg","providerLink":"http://study.163.com/u/itcast","recommend":0,"recommendForQrRepo":null,"weightForQrRepo":null,"commentCount":20,"learnerCount":2181,"lectors":null,"learningProgress":null,"learningLessonId":null,"learningLessonName":null,"learningLessonPosition":null,"started":null,"learningStatus":null,"compatibleLearningStatus":null,"middlePhotoUrl":"http://img0.ph.126.net/ijB-Cjew6T80-Z-XQ9iMxA==/2521171366415381720.jpg","providerDesc":"国内技术最牛、口碑最好的IT培训机构，CSDN旗下高端培训机构，开设Java、PHP、网页平面设计、IOS课程。","published":1,"isFollowUp":false,"courseUrl":null,"continueLearningUrl":null,"aliasNameForUrl":null,"ended":false,"termId":null,"lessonsCount":20,"translatedCount":null,"releaseType":0,"videoUrl":null,"hdVideoUrl":null,"shdVideoUrl":null,"videoImgUrl":null,"activeFlag":1,"isDraft":false,"notPublishedDraft":false,"bought":false,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"isBoughtExpired":false,"boughtInfoDto":{"infoType":4,"periodTimeLeft":0,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"activeFlag":1,"watchedTime":null},"iosVisible":1,"webVisible":1,"tags":null,"liveFlag":0,"ownerType":5,"ownerId":439129,"firstPublishTime":"2012-12-14 17:42:06","lastSubmtReviewTime":"2012-12-14 17:42:06","categoryRels":null,"watchDuration":0,"allCount":null,"forumTagLector":0,"tagLectorTime":0,"hasCoupon":false,"startTime":null,"endTime":null,"restWeek":null,"eduIapItemDto":null,"universalCoupon":null,"tagIap":0,"production":null,"categoryNames":null,"courseType":0},{"id":212009,"pid":null,"categoryId":29001,"categoryName":null,"auditStatus":4,"smallPhotoUrl":"http://img8.ph.126.net/W2P6JuEykfkGgzg7AOMsCw==/1584704118898922328.jpg","bigPhotoUrl":"http://img6.ph.126.net/qFtC8Le60dwX1LUeQTWpXg==/1584704118898922326.jpg","descriptionVideoId":-1,"name":"Java网上在线支付实战","creatorId":262001,"creatorNick":null,"provider":"传智播客","providerType":2,"description":"你知道如何让自己的网站与银行系统进行对接吗？如何让用户通过网上银行向你支付费用吗？其实一点也不难！本视频教程将毫无保留的教授给你！\r\n本视频教程的内容完全取源于真实项目，并且项目完成后的运行结果也完全真实。传智播客学员们学习和实践后的结果证明，你只需花上三个小时的时间将本视频教程认真学习一遍，就可以为自己的项目轻松增加网上在线支付的功能。","gmtCreate":"2012-12-14 18:10:24","gmtModified":"2016-09-08 01:00:15","targetUser":"具备一定Java和Web开发经验的人","mark":4.409091,"price":0.00,"commonDiscountPrice":null,"commonDiscountRate":null,"providerPhotoUrl":"http://img8.ph.126.net/pdwdfU-vS52YGM3ezeuUUA==/6597266579239399428.jpg","providerLink":"http://study.163.com/u/itcast","recommend":0,"recommendForQrRepo":null,"weightForQrRepo":null,"commentCount":22,"learnerCount":5798,"lectors":null,"learningProgress":null,"learningLessonId":null,"learningLessonName":null,"learningLessonPosition":null,"started":null,"learningStatus":null,"compatibleLearningStatus":null,"middlePhotoUrl":"http://img7.ph.126.net/1LFVCDyTSutpIvn-ppst3A==/1584704118898922327.jpg","providerDesc":"国内技术最牛、口碑最好的IT培训机构，CSDN旗下高端培训机构，开设Java、PHP、网页平面设计、IOS课程。","published":1,"isFollowUp":false,"courseUrl":null,"continueLearningUrl":null,"aliasNameForUrl":null,"ended":false,"termId":null,"lessonsCount":12,"translatedCount":null,"releaseType":0,"videoUrl":null,"hdVideoUrl":null,"shdVideoUrl":null,"videoImgUrl":null,"activeFlag":1,"isDraft":false,"notPublishedDraft":false,"bought":false,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"isBoughtExpired":false,"boughtInfoDto":{"infoType":4,"periodTimeLeft":0,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"activeFlag":1,"watchedTime":null},"iosVisible":1,"webVisible":1,"tags":null,"liveFlag":0,"ownerType":5,"ownerId":439129,"firstPublishTime":"2012-12-14 18:10:24","lastSubmtReviewTime":"2012-12-14 18:10:24","categoryRels":null,"watchDuration":0,"allCount":null,"forumTagLector":0,"tagLectorTime":0,"hasCoupon":false,"startTime":null,"endTime":null,"restWeek":null,"eduIapItemDto":null,"universalCoupon":null,"tagIap":0,"production":null,"categoryNames":null,"courseType":0},{"id":212013,"pid":null,"categoryId":29001,"categoryName":null,"auditStatus":4,"smallPhotoUrl":"http://img9.ph.126.net/9vtyb1D6fTbvh-6U3UUxuw==/1548675321879954759.jpg","bigPhotoUrl":"http://img7.ph.126.net/JanYtt7fdXMxF9IDMFpJdA==/1548675321879954757.jpg","descriptionVideoId":-1,"name":"Hibernate视频教程","creatorId":262001,"creatorNick":null,"provider":"传智播客","providerType":2,"description":"许多有经验的开发人员都有一个共同的认识，那就是Hibernate要比Struts和Spring难掌握得多，初学者要想学好Hiberante就更是难上加难了！本课程的讲解者李勇老师的技术功底非常深厚，课程内容组织得非常合理和巧妙，知识点的讲解也很细腻和透彻，总结了许多独有的经验，许多有经验的开发人员听完李勇老师的Hibernate课程后，都有一种恍然大悟的感慨。","gmtCreate":"2012-12-14 19:33:24","gmtModified":"2016-09-08 01:00:15","targetUser":"适合掌握了javaweb的学员","mark":4.652174,"price":0.00,"commonDiscountPrice":null,"commonDiscountRate":null,"providerPhotoUrl":"http://img8.ph.126.net/pdwdfU-vS52YGM3ezeuUUA==/6597266579239399428.jpg","providerLink":"http://study.163.com/u/itcast","recommend":0,"recommendForQrRepo":null,"weightForQrRepo":null,"commentCount":23,"learnerCount":6677,"lectors":null,"learningProgress":null,"learningLessonId":null,"learningLessonName":null,"learningLessonPosition":null,"started":null,"learningStatus":null,"compatibleLearningStatus":null,"middlePhotoUrl":"http://img8.ph.126.net/PlNgIfpjhEJs8c7EdifLKA==/1548675321879954758.jpg","providerDesc":"国内技术最牛、口碑最好的IT培训机构，CSDN旗下高端培训机构，开设Java、PHP、网页平面设计、IOS课程。","published":1,"isFollowUp":false,"courseUrl":null,"continueLearningUrl":null,"aliasNameForUrl":null,"ended":false,"termId":null,"lessonsCount":56,"translatedCount":null,"releaseType":0,"videoUrl":null,"hdVideoUrl":null,"shdVideoUrl":null,"videoImgUrl":null,"activeFlag":1,"isDraft":false,"notPublishedDraft":false,"bought":false,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"isBoughtExpired":false,"boughtInfoDto":{"infoType":4,"periodTimeLeft":0,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"activeFlag":1,"watchedTime":null},"iosVisible":1,"webVisible":1,"tags":null,"liveFlag":0,"ownerType":5,"ownerId":439129,"firstPublishTime":"2012-12-14 19:33:24","lastSubmtReviewTime":"2012-12-14 19:33:24","categoryRels":null,"watchDuration":0,"allCount":null,"forumTagLector":0,"tagLectorTime":0,"hasCoupon":false,"startTime":null,"endTime":null,"restWeek":null,"eduIapItemDto":null,"universalCoupon":null,"tagIap":0,"production":null,"categoryNames":null,"courseType":0},{"id":214018,"pid":null,"categoryId":29001,"categoryName":null,"auditStatus":4,"smallPhotoUrl":"http://img5.ph.126.net/Ab9N-fy9qSFa4LWtp0axQQ==/2735655298668677255.jpg","bigPhotoUrl":"http://img3.ph.126.net/WX8pg_n-00foTMVHuZSfzw==/2735655298668677253.jpg","descriptionVideoId":-1,"name":"Struts 2","creatorId":269007,"creatorNick":null,"provider":"传智播客","providerType":2,"description":"现在基于Struts 2开发的新项目已经越来越多，Struts 2已经成为JavaEE程序员必须掌握的基本技能。本课程对Struts 2在项目中必用的各个知识点进行了详细的解讲，100%干货。期望学习完本课程，你会具备开发Struts 2应用的能力。","gmtCreate":"2012-12-17 14:15:25","gmtModified":"2016-09-08 01:00:16","targetUser":"已掌握J2SE的相关人员","mark":4.657895,"price":0.00,"commonDiscountPrice":null,"commonDiscountRate":null,"providerPhotoUrl":"http://img8.ph.126.net/byPLzPUt_Wd7B88s6UAp5w==/6597477685470524768.jpg","providerLink":"http://study.163.com/u/itcast","recommend":0,"recommendForQrRepo":null,"weightForQrRepo":null,"commentCount":38,"learnerCount":5872,"lectors":null,"learningProgress":null,"learningLessonId":null,"learningLessonName":null,"learningLessonPosition":null,"started":null,"learningStatus":null,"compatibleLearningStatus":null,"middlePhotoUrl":"http://img4.ph.126.net/8oX1nsgRNAOb4GUnOuGsUQ==/2735655298668677254.jpg","providerDesc":"国内技术最牛、口碑最好的IT培训机构，CSDN旗下高端培训机构，开设Java、PHP、网页平面设计、IOS课程。","published":1,"isFollowUp":false,"courseUrl":null,"continueLearningUrl":null,"aliasNameForUrl":null,"ended":false,"termId":null,"lessonsCount":31,"translatedCount":null,"releaseType":0,"videoUrl":null,"hdVideoUrl":null,"shdVideoUrl":null,"videoImgUrl":null,"activeFlag":1,"isDraft":false,"notPublishedDraft":false,"bought":false,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"isBoughtExpired":false,"boughtInfoDto":{"infoType":4,"periodTimeLeft":0,"feeValidType":1,"deadlineTimeOfFee":0,"periodTimeOfFee":0,"activeFlag":1,"watchedTime":null},"iosVisible":1,"webVisible":1,"tags":null,"liveFlag":0,"ownerType":5,"ownerId":439129,"firstPublishTime":"2012-12-17 14:15:25","lastSubmtReviewTime":"2012-12-17 14:15:25","categoryRels":null,"watchDuration":0,"allCount":null,"forumTagLector":0,"tagLectorTime":0,"hasCoupon":false,"startTime":null,"endTime":null,"restWeek":null,"eduIapItemDto":null,"universalCoupon":null,"tagIap":0,"production":null,"categoryNames":null,"courseType":0}],"pagination":{"sortCriterial":null,"DEFAULT_PAGE_SIZE":10,"DEFAULT_PAGE_INDEX":1,"DEFAULT_TOTLE_PAGE_COUNT":1,"DEFAULT_TOTLE_COUNT":0,"DEFAULT_OFFSET":0,"pageSize":8,"pageIndex":1,"totlePageCount":79,"totleCount":630,"offset":0,"limit":8},"totalPage":79};

/**
 * ======================================================
 */
// var _=ns('util');
// function(_){
//   var totalPage=8;
//   var list=$('.m-pager .num');
//   var pre=$('.m-pager .pre')[0];
//   var next=$('.m-pager .next')[0];
//   var flag1=$('.m-pager .flag1')[0];
//   var flag2=$('.m-pager .flag2')[0];

//   function Pager(opt){
//     _.extend(this,opt)

//     this.pageIndex=this.pageIndex || 0;
//     this.totalPage= this.totalPage || 8;
//     this.list=list;

//     this.goto(1);

//     pre.parentNode.addEventListener('click',this._onclick.bind(this));
//     next.addEventListener('click',this._next.bind(this));
//   }
//   _.extend(Pager.prototype,{

//     goto:function(index){

//       if (index<=5){
//         for(var i=0,len=this.list.length;i<len;i++){
//           var a=this.list[i],num=i+1;
//           a.innerText=num;
//           a.value=num;
//         }
//       }else{
//         for(var i=1,len=this.list.length;i<len;i++){
//           var a=this.list[i],num=i+index-4;
//           a.innerText=num;
//           a.value=num;
//           if(a.value>this.totalPage){
//             a.style.display='none';
//           }else{
//             a.style.display='inline-block';
//           }
//         }
//       }
//       //省略号显示切换
//       this.list[1].value==2?flag1.style.display='none':flag1.style.display='inline-block';
//       //
//       if(this.list[7].style.display=='none'){
//         flag2.style.display='none';
//       }else{
//         flag2.style.display='inline-block';
//       }
//       // ui切换
//       for(var i=0,len=this.list.length;i<len;i++){
//         var a=this.list[i];
//         if(a.value==index){
//           _.addClass(a,'current');
//         }else{
//           _.delClass(a,'current');
//         }
//       }
//       //信息切换
//       this.pageIndex=index;

//       //next pre ui切换
//       if(this.pageIndex<this.totalPage){
//         _.delClass(next,'disable');
//       }else{
//         _.addClass(next,'disable');
//       };
//       if(this.pageIndex==1){
//         _.addClass(pre,'disable');
//       }else{
//         _.delClass(pre,'disable');
//       }
      
//     },
//     _onclick:function(event){
//       var index=event.target.value;
//       if(index)this.goto(index);
      
//     },
//     _next:function(){
//       var newIndex=this.pageIndex+1;
//       console.log(this.totalPage);
//       if(newIndex<=this.totalPage){
//         this.goto(newIndex);
//       };
     
//     },

//   });

// };

// pager.goto(10);
// pager._init();





// (function(_){

//   var template='<div class="card">\
//             <a class="link" href="#"><img src="./img/course.jpg" alt=""></a>\
//             <a class="link" href=""><p class="title">混音全揭秘 舞曲实战篇 揭秘音乐揭秘揭秘</p></a>\
//             <p class="pub">大香蕉</p>\
//             <p class="num"><span><i></i><span class="count">66</span></span></p>\
//             <em class="price">￥888.00</em>\
//           </div>';


//   function ImgList(opt){

//     _.extend(this,opt);

//     this.url=this.url || 'http://study.163.com/webDev/couresByCategory.htm';
//     this.pageNo=1;
//     this.psize=20;
//     this.type=10;

//     this.card=this._layout.cloneNode(true);
//     this.container=this.container ||$('.testcon')[0];
//     this.list=[];
//     this.tab = this.tab ||'';

//     this.img=this._layout.getElementsByTagName('img')[0];
//     this.img.style.width='223px';
//     this.img.style.height='124px';
//   }

//   _.extend(ImgList.prototype,{

//     _layout:_.html2node(template),

//     _dataPrase:function(data){
//       data=JSON.parse(data)['list'];
//       // data=eval(data)['list'];
//       return data;
//     },
//     //数据填充
//     _fillData:function(data){
//       for(var i=0,len=data.length;i<len;i++){

//         var card=this._layout.cloneNode(true),
//             info=data[i];

//         _.$(card,'img')[0].src=info.middlePhotoUrl;
//         _.$(card,'.title')[0].innerText=info.name;
//         _.$(card,'.pub')[0].innerText=info.provider;
//         _.$(card,'.count')[0].innerText=info.learnerCount;
//         _.$(card,'.price')[0].innerText=(info.price==0?'免费':info.price);

//         var host='http://study.163.com/course/introduction/';
//         _.$(card,'.link')[0].href=host+info.id+'.htm';
//         _.$(card,'.link')[1].href=host+info.id+'.htm';


//         this.container.appendChild(card);
//         this.list.push(card);
//       }
//     },
//     _pushCard:function(text){

//       var data=this._dataPrase(text);

//       this._fillData(data);
//     },
//     get: function(pageIndex,type,psize){
//       pageIndex=pageIndex || this.pageNo;
//       type=type || this.type;
//       psize=psize || this.psize;
//       var data={
//         pageNo:pageIndex,
//         type:type,
//         psize:psize
//       }
//       _.get.call(this,this.url,data,this._pushCard.bind(this));
//     }


//   });

//   window.ImgList=ImgList;
// })(ns('util'));



/**
 * =================================tab
 */

// (function(_){
//     /**
//      * 列表切换tab,存储tab信息，切换tabui
//      * @Author   Zd
//      * @DateTime 2016-09-09T11:00:55+0800
//      * @param    {obj} opt 传入对象{typeList:[type,...type]},以输入tab需要存储的type信息
//      */
//     function Tab(opt){
//       _.extend(this,opt);

//       this.tabs=this.tabs||_.$(0,'.m-tab')[0].children;

//       this.currentType=this.currentType || 0;
//       this.typeList=this.typeList||[];

//       this.tabs[0].parentNode.addEventListener('click',this._onclick.bind(this));
//       this._init();
//     }

//     _.extend(Tab.prototype,{

//       getType:function(){
//         return this.currentType;
//       },
//       _init:function(){
//         for(var i=0,len=this.typeList.length;i<len;i++){
//           this.tabs[i].type=this.typeList[i];
//         }
//         this.currentType=this.typeList[0];
//       },
//       _onclick:function(event){

//         for(var i=0,len=this.tabs.length;i<len;i++){
//           _.delClass(this.tabs[i],'active');
//         }

//         _.addClass(event.target,'active');

//         this.currentType=event.target.type;

//         if(this.callback)this.callback();
//       },
//     });
//   window.Tab=Tab;
// })(ns('util'));

// var Tab=ns('Tab');
// var ImgList=ns('ImgList');
// var Pager=ns('Pager');


// var tab=new Tab({typeList:[10,20]});
// var type=tab.currentType;

// testContainer=$('.testcon')[0];

// var imgList=new ImgList({
//   container:testContainer,
//   type:type,
//   pageNo:1,psize:20,
// });


// var pager=new Pager({totalPage:imgList.totalPage,
// });
// var pagCallb=function(){
//   var pageIndex=pager.pageIndex,
//       type=tab.currentType;
//       pager.totlePage=imgList.totlePage;
//   return imgList.get.call(imgList,pageIndex,type);
// };

// pager.callback=pagCallb;

// var tabCallb=function(){
//   var type=tab.currentType;
//   return imgList.get.call(imgList,1,type);
// };
// tab.callback=tabCallb;


(function(_){
  var template2='<div class="floatcard">\
      <img width="223px" height="124px" src="./img/course.jpg">\
      <p class="title"></p>\
      <p class="num"><span><i></i><span class="count">66</span>人在学</span></p>\
      <p>发布者：<span class="pub"></span></p>\
      <p class="clearfix">分类：<span class="category"></span></p>\
      <div class="des"><div></div></div>\
    </div>';

    function FloatCard(opt){
      _.extend(this,opt);


    }
    _.extend(FloatCard.prototype,{

      _layout:_.html2node(template2),
      madeCard:function(node){
        var info=node.info;
        var fcard=this._layout.cloneNode(true);

        _.$(fcard,'img')[0].src=info.middlePhotoUrl;
        _.$(fcard,'.title')[0].innerText=info.name;
        _.$(fcard,'.num i')[0].innerText=info.learnCount;
        _.$(fcard,'.pub')[0].innerText=info.provider;
        _.$(fcard,'.category')[0].innerText=info.categoryName;

        node.appendChild(fcard);
      }
    })

})(ns('util'));




(function(_){

  template='<div class="m-v-modal">\
    <div class="helper"></div>\
    <div class="window">\
      <p class="title"></p>\
      <div class="close"></div>\
      <video src="" controls="" width="889px" height="567px"></video>\
    </div>\
  </div>';

  function Vmodal(opt){
    _.extend(this,opt);

    this.modal=this._layout.cloneNode(true);

    var modal=this.modal;
    _.$(modal,'.title')[0].innerText=this.title;
    _.$(modal,'video')[0].src=this.src;
    _.$(modal,'.close')[0].addEventListener('click',this.close.bind(this));
    document.body.appendChild(modal);
  };

  _.extend(Vmodal.prototype,{

    _layout:_.html2node(template),
    close:function(){
      this.modal.parentNode.removeChild(this.modal);
    }
  });

  var opts={
  title:'请观看下面的视频',
  src:'http://mov.bn.netease.com/open-movie/nos/mp4/2014/12/30/SADQ86F5S_shd.mp4'
  };

  var vmodal=new Vmodal(opts);
  window.vmodal=vmodal;
})(ns('util'));

