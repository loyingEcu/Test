// ==UserScript==
// @name         【更新20180512】一一网络全网VIP视频破解在线免费解析
// @namespace    http://vip.proyy.com/
// @version      2018.5.12
// @description  一一网络，vip.proyy.com,全网VIP解析，2018.05.12
// @author       一一网络
// @match        *://v.youku.com/v_show/*
// @match        *://*.iqiyi.com/v_*
// @match        *://*.iqiyi.com/dianying/*
// @match        *://*.le.com/ptv/vplay/*
// @match        *://v.qq.com/x/cover/*
// @match        *://v.qq.com/x/page/*
// @match        *://*.tudou.com/listplay/*
// @match        *://*.tudou.com/albumplay/*
// @match        *://*.tudou.com/programs/view/*
// @match        *://*.mgtv.com/b/*
// @match        *://*.sohu.com/*
// @match        *://*.acfun.cn/v/*
// @match        *://*.bilibili.com/video/*
// @match        *://*.bilibili.com/anime/*
// @match        *://v.pptv.com/show/*
// @match        *://v.yinyuetai.com/video/*
// @match        *://v.yinyuetai.com/playlist/*
// @match        *://*.wasu.cn/Play/show/*
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @run-at       document-end
// @grant        unsafeWindow
// ==/UserScript==

(function() {
    'use strict';
    var urlPlaySite = '';
    var urlWords = '';
    var videoSite = window.location.href;
    var reYk = /youku/i;
    var reAqy = /iqiyi/i;
    var reLS = /le/i;
    var reTX = /qq/i;
    var reTD = /tudou/i;
    var reMG = /mgtv/i;
    var reSH = /sohu/i;
    var reAF = /acfun/i;
    var reBL = /bilibili/i;
    var reYJ = /1905/i;
    var rePP = /pptv/i;
    var reYYT = /yinyuetai/i;
    var vipBtn = '<a id="asvideoBtn" style="cursor:pointer;text-decoration:none;color: #ffa6a6;padding: 5px 5px;border: 1px solid rgba(154, 0, 255, 0.86);border-radius: 8px;">一键VIP播放</a>';
    
  // youku
    if(reYk.test(videoSite)){
        vipBtn
        var youkuTitle = $('#headq');
        if(youkuTitle.length !== 0){
        	youkuTitle.after(vipBtn);
	        $('#asvideoBtn').css({'font-size':'15px','display':'inline-block','height':'22px','line-height':'22px','margin':'0 5px','vertical-align':'bottom'});
	       
	        if($('.tvinfo').length !== 0){
	        	urlWords = $('.tvinfo').find('h3').eq(0).text();
	        }else{
	        	urlWords = $('.title').attr('title');
	        }
	        
        }else{
        	$('.tags').after(vipBtn);
        	$('#asvideoBtn').css({'font-size':'15px','display':'inline-block','height':'22px','line-height':'22px','margin':'0 5px','vertical-align':'bottom'});
	        
	       	if($('.tvinfo').length !== 0){
	        	urlWords = $('.tvinfo').find('h3').eq(0).text();
	        }else{
	        	urlWords = $('.title').attr('title');
	        }
	       
        }
    }
    // aiqiyi
    if(reAqy.test(videoSite)){
        var iqiyiTitle = $('#widget-videotitle');
        iqiyiTitle.parent('.mod-play-tit').append(vipBtn);
        $('#asvideoBtn').css({'font-size':'15px','display':'inline-block','height':'24px','line-height':'24px','margin':'0 5px'});
       
        if($('#drama-series-title').length !== 0){
        	urlWords = $('#drama-series-title').find('a').text();
        }else{
        	urlWords = iqiyiTitle.text();
        }
        
    }
    // Letv
    if(reLS.test(videoSite)){
        var lsTitle = $('.briefIntro_tit');
        lsTitle.after(vipBtn);
        lsTitle.css('float','left');
        $('#asvideoBtn').css({'font-size':'16px','display':'inline-block','height':'20px','line-height':'20px','margin':'0 5px'});
       
       	if($('.Info').find('.title').find('h3').length !== 0){
        	urlWords = $('.Info').find('.title').find('h3').text();
        }else{
        	urlWords = lsTitle.text();
        }
      
    }
    // QQ
    if(reTX.test(videoSite)){
        var qqTitle = $('.mod_intro').find('.video_title');
        qqTitle.eq(0).after(vipBtn);
        $('#asvideoBtn').css({'font-size':'24px','display':'inline-block','height':'36px','line-height':'36px','margin':'0 5px'});
        
        if($('.player_title').length !== 0 && $('.player_title').find('a').length === 0){
        	urlWords = $('.player_title').text();
        }else{
        	urlWords = $('._base_title').text();
        }
        if(urlWords === ''){
        	urlWords = $('.player_title').text();
        }
        
    }
    // Tudou
    if(reTD.test(videoSite)){
        var tdTitle = $('.td-playbase__title');
        tdTitle.parent('.fix').append(vipBtn);
        $('#asvideoBtn').css({'font-size':'18px','display':'inline-block','height':'22px','line-height':'22px','margin':'14px 5px 0'});
    }
    // Mgtv
    if(reMG.test(videoSite)){
        var mgTitle = $('.v-panel-title');
        mgTitle.after(vipBtn);
        mgTitle.css({'float':'left','margin-right':'0'});
        $('#asvideoBtn').css({'font-size':'22px','display':'inline-block','height':'40px','line-height':'40px','margin':'0 5px'});
        
    	urlWords = mgTitle.text();
        
    }
    
    // souhu
    if(reSH.test(videoSite)){
        var shTitle = $('.crumbs');
        shTitle.append(vipBtn);
        shTitle.find('h2').css({'float':'left'});
        $('#asvideoBtn').css({'font-weight':'bold','font-size':'16px','display':'inline-block','height':'36px','line-height':'36px','margin':'0 5px'});
        
        urlWords = shTitle.find('h2').text();
       
    }
    // A
    if(reAF.test(videoSite)){
        var acTitle = $('.head').find('.title');
        acTitle.append(vipBtn);
        $('#asvideoBtn').css({'font-weight':'bold','font-size':'16px','display':'inline-block','height':'20px','line-height':'20px','margin':'0 5px'});
    }
    // B
    if(reBL.test(videoSite)){
        var biliTitle = $('.v-title').find('h1');
        biliTitle.after(vipBtn);
        biliTitle.css({'float':'left','margin-right':'0'});
        $('#asvideoBtn').css({'font-weight':'bold','font-size':'16px','display':'inline-block','height':'36px','line-height':'36px','margin':'0 5px'});
    }
    // pptv
    if(rePP.test(videoSite)){
        var pptvTitle = $('.hd-logo fl');
        pptvTitle.after(vipBtn);
        $('#asvideoBtn').css({'font-weight':'bold','font-size':'16px','display':'inline-block','height':'36px','line-height':'36px','margin':'0 5px'});
  
        urlWords = pptvTitle.text();
       
    }
    // yinyuetai
    if(reYYT.test(videoSite)){
        var yytTitle = $('.videoName');
        yytTitle.append(vipBtn);
        $('#asvideoBtn').css({'font-weight':'bold','font-size':'14px','display':'inline-block','height':'32px','line-height':'32px','margin':'0 5px'});
    }
    $('#asvideoBtn').on('click',function(){
        urlPlaySite = window.location.href;
        window.location.href = 'http://vip.proyy.com/vip/?url=' + urlPlaySite;
    });
})();
