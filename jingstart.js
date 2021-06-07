//赚字
var taskinbase64 = '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'
//0.初始化
auto.waitFor();
var dev_hight = device.height;
var dev_width = device.width;
//1.请求截图 autojs4.1用
if(!requestScreenCapture()){
    toast("请求截图失败");exit();}
//1.点击控件 找不到报错
function sureclick(x) {if(x) return x.click();else toastLog('未找到按钮');}
//2.点击不可点击的控件
function position_click(x){if(x) click(x.bounds().centerX(), x.bounds().centerY());}

//3.等待某某出现 n秒后作出反馈
function wait_sth(sth, showsth, nshowsth){
    if(sth) {toastLog(showsth);return 1;}
        else {toastLog(nshowsth); return 0;}}
//4.找图点击  
function png_click(num, pngbase64, showsth){
        while(num--){
            let img = captureScreen();
            let temp1 = images.fromBase64(pngbase64);
            let pos = findImage(img, temp1);
            if(pos) return click(pos.x, pos.y)
          		else sleep(1000);}
        return toastLog(showsth);}



//业务函数
//启动并进入任务列表
function getinto_task(){
    toastLog('启动京东中');
  	app.launch('com.jingdong.app.mall');sleep(2000);
    app.startActivity({
    packageName: "com.jingdong.app.mall",
    data: 'openjd://virtual?params={"category":"jump","des":"m","url":"https://h5.m.jd.com/rn/42yjy8na6pFsq1cx9MJQ5aTgu3kX"}'});
  	sleep(2000);
    png_click(5, taskinbase64, "未找到升级赚京豆");
}

//检查是否处于任务列表 否则一直返回
function check_where(){while(1){
  if(textMatches('去完成|已完成').findOne(3000)) return toastLog('chua~进列表')
  		else if(text('领京豆').findOne(2000)) {toastLog('发现处于京东首页');return getinto_task();}
  			else if(packageName('com.jingdong.app.mall').exists()) {back();sleep(1000);return toastLog('尝试返回');}
  				else {getinto_task();return toastLog('检测到已经离开京东！ 正在返回');}}}

//点击xx项目的'去完成'按钮
function just_doit(matchtext, failshow){
  let button_1 = textContains(matchtext).findOne(2000).parent().children()[0];
    if(button_1) position_click(button_1)
        else return toastLog(failshow);
}

//环节：猜你喜欢的商品 
function cai_ni_xihuan(){
  toastLog('进入“猜你”循环');
  while(1){sleep(1000);
    if(textContains('猜你喜欢的商品(20/20)').exists()) {zhongjie_caini = 0;toastLog ("猜你喜欢任务已完成");return false;}
        else {just_doit('猜你喜欢的商品', '点击<猜你喜欢的商品>失败');sleep(6000);back();check_where();}}}

//其它环节 单纯点击去完成
function click_QWC(){
    let qwc = text('去完成').findOne(3000);
    if(qwc) {sleep(2000);position_click(qwc);sleep(2000); back();check_where();}}

//全都完成
function check_noQWC(){
    let nqwc = text('去完成').findOne(3000);
    if(!nqwc) {toastLog('任务全部完成！ 脚本结束');exit();}}


zhongjie_caini = 1;   
getinto_task();
check_where();

while(1){
    if(zhongjie_caini && textContains('猜你喜欢的商品').boundsInside(0, 0, dev_width, dev_hight / 1.5).findOne(2000)) 
        cai_ni_xihuan();
    click_QWC();
  	check_where();
    check_noQWC();}