﻿

//删除背诵
function delBeisong(idbei) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            if (xmlhttp.responseText == "delOk") {
                $("#sons" + idbei).fadeOut();
            }
        }
    }

    xmlhttp.open("GET", "/user/collectbeldel.aspx?delId=" + idbei, false);
    xmlhttp.send();
}

function setIframeHeight(iframe) {
    if (iframe) {
        var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
        if (iframeWin.document.body) {
            iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;


            //判断是否为IE11
            var userAgent = navigator.userAgent,
                rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
                rFirefox = /(firefox)\/([\w.]+)/,
                rOpera = /(opera).+version\/([\w.]+)/,
                rChrome = /(chrome)\/([\w.]+)/,
                rSafari = /version\/([\w.]+).*(safari)/;
            var browser;
            var version;
            var ua = userAgent.toLowerCase();
            function uaMatch(ua) {
                var match = rMsie.exec(ua);
                if (match != null) {
                    return { browser: "IE", version: match[2] || "0" };
                }
                var match = rFirefox.exec(ua);
                if (match != null) {
                    return { browser: match[1] || "", version: match[2] || "0" };
                }
                var match = rOpera.exec(ua);
                if (match != null) {
                    return { browser: match[1] || "", version: match[2] || "0" };
                }
                var match = rChrome.exec(ua);
                if (match != null) {
                    return { browser: match[1] || "", version: match[2] || "0" };
                }
                var match = rSafari.exec(ua);
                if (match != null) {
                    return { browser: match[2] || "", version: match[1] || "0" };
                }
                if (match != null) {
                    return { browser: "", version: "0" };
                }
            }
            var browserMatch = uaMatch(userAgent.toLowerCase());
            if (browserMatch.browser) {
                browser = browserMatch.browser;
                version = browserMatch.version;
            }

            //如果是ie11，则减10
            if (version == 11) {
                iframe.height = iframe.height - 10;
            }
        }
    }
}

function OnYiwen230427(id, idjm) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        //取消背诵
        document.getElementById("btnBeisong" + id).src = "https://ziyuan.guwendao.net/siteimg/bei-pic.png";
        document.getElementById("btnBeisong" + id).alt = "背诵";
        document.getElementById("btnPinyin" + id).src = "https://ziyuan.guwendao.net/siteimg/yin-pic.png";
        document.getElementById("btnPinyin" + id).alt = "拼音";

        var value = "cont";
        if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnYiwen" + id).src = "https://ziyuan.guwendao.net/siteimg/yi-pic2.png";
            document.getElementById("btnYiwen" + id).alt = "译文2";
            value = "yi";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnYiwen" + id).src = "https://ziyuan.guwendao.net/siteimg/yi-pic2.png";
            document.getElementById("btnYiwen" + id).alt = "译文2";
            value = "yizhu";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnYiwen" + id).src = "https://ziyuan.guwendao.net/siteimg/yi-pic2.png";
            document.getElementById("btnYiwen" + id).alt = "译文2";
            value = "yishang";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnYiwen" + id).src = "https://ziyuan.guwendao.net/siteimg/yi-pic2.png";
            document.getElementById("btnYiwen" + id).alt = "译文2";
            value = "yizhushang";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnYiwen" + id).src = "https://ziyuan.guwendao.net/siteimg/yi-pic.png";
            document.getElementById("btnYiwen" + id).alt = "译文";
            value = "cont";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnYiwen" + id).src = "https://ziyuan.guwendao.net/siteimg/yi-pic.png";
            document.getElementById("btnYiwen" + id).alt = "译文";
            value = "zhu";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnYiwen" + id).src = "https://ziyuan.guwendao.net/siteimg/yi-pic.png";
            document.getElementById("btnYiwen" + id).alt = "译文";
            value = "shang";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnYiwen" + id).src = "https://ziyuan.guwendao.net/siteimg/yi-pic.png";
            document.getElementById("btnYiwen" + id).alt = "译文";
            value = "zhushang";
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == "未登录") {
                    window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                }
                else {
                    document.getElementById("zhengwen" + id).innerHTML = xmlhttp.responseText;
                }
            }
        }
        xmlhttp.open("GET", "/nocdn/ajaxshiwencont230427.aspx?id=" + idjm + "&value=" + value, false);
        xmlhttp.send();
    }
}

function OnZhushi230427(id, idjm) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        //取消背诵
        document.getElementById("btnBeisong" + id).src = "https://ziyuan.guwendao.net/siteimg/bei-pic.png";
        document.getElementById("btnBeisong" + id).alt = "背诵";
        document.getElementById("btnPinyin" + id).src = "https://ziyuan.guwendao.net/siteimg/yin-pic.png";
        document.getElementById("btnPinyin" + id).alt = "拼音";

        var value = "cont";
        if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnZhushi" + id).src = "https://ziyuan.guwendao.net/siteimg/zhu-pic2.png";
            document.getElementById("btnZhushi" + id).alt = "注释2";
            value = "zhu";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnZhushi" + id).src = "https://ziyuan.guwendao.net/siteimg/zhu-pic2.png";
            document.getElementById("btnZhushi" + id).alt = "注释2";
            value = "yizhu";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnZhushi" + id).src = "https://ziyuan.guwendao.net/siteimg/zhu-pic2.png";
            document.getElementById("btnZhushi" + id).alt = "注释2";
            value = "zhushang";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnZhushi" + id).src = "https://ziyuan.guwendao.net/siteimg/zhu-pic2.png";
            document.getElementById("btnZhushi" + id).alt = "注释2";
            value = "yizhushang";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnZhushi" + id).src = "https://ziyuan.guwendao.net/siteimg/zhu-pic.png";
            document.getElementById("btnZhushi" + id).alt = "注释";
            value = "cont";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnZhushi" + id).src = "https://ziyuan.guwendao.net/siteimg/zhu-pic.png";
            document.getElementById("btnZhushi" + id).alt = "注释";
            value = "yi";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnZhushi" + id).src = "https://ziyuan.guwendao.net/siteimg/zhu-pic.png";
            document.getElementById("btnZhushi" + id).alt = "注释";
            value = "shang";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnZhushi" + id).src = "https://ziyuan.guwendao.net/siteimg/zhu-pic.png";
            document.getElementById("btnZhushi" + id).alt = "注释";
            value = "yishang";
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == "未登录") {
                    window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                }
                else {
                    document.getElementById("zhengwen" + id).innerHTML = xmlhttp.responseText;
                }
            }
        }
        xmlhttp.open("GET", "/nocdn/ajaxshiwencont230427.aspx?id=" + idjm + "&value=" + value, false);
        xmlhttp.send();
    }
}

function OnShangxi230427(id, idjm) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        //取消背诵
        document.getElementById("btnBeisong" + id).src = "https://ziyuan.guwendao.net/siteimg/bei-pic.png";
        document.getElementById("btnBeisong" + id).alt = "背诵";
        document.getElementById("btnPinyin" + id).src = "https://ziyuan.guwendao.net/siteimg/yin-pic.png";
        document.getElementById("btnPinyin" + id).alt = "拼音";

        var value = "cont";
        if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnShangxi" + id).src = "https://ziyuan.guwendao.net/siteimg/shang-pic2.png";
            document.getElementById("btnShangxi" + id).alt = "赏析2";
            value = "shang";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnShangxi" + id).src = "https://ziyuan.guwendao.net/siteimg/shang-pic2.png";
            document.getElementById("btnShangxi" + id).alt = "赏析2";
            value = "yishang";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnShangxi" + id).src = "https://ziyuan.guwendao.net/siteimg/shang-pic2.png";
            document.getElementById("btnShangxi" + id).alt = "赏析2";
            value = "zhushang";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析") {
            document.getElementById("btnShangxi" + id).src = "https://ziyuan.guwendao.net/siteimg/shang-pic2.png";
            document.getElementById("btnShangxi" + id).alt = "赏析2";
            value = "yizhushang";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnShangxi" + id).src = "https://ziyuan.guwendao.net/siteimg/shang-pic.png";
            document.getElementById("btnShangxi" + id).alt = "赏析";
            value = "cont";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnShangxi" + id).src = "https://ziyuan.guwendao.net/siteimg/shang-pic.png";
            document.getElementById("btnShangxi" + id).alt = "赏析";
            value = "yi";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnShangxi" + id).src = "https://ziyuan.guwendao.net/siteimg/shang-pic.png";
            document.getElementById("btnShangxi" + id).alt = "赏析";
            value = "zhu";
        }
        else if (document.getElementById("btnYiwen" + id).alt == "译文2" && document.getElementById("btnZhushi" + id).alt == "注释2" && document.getElementById("btnShangxi" + id).alt == "赏析2") {
            document.getElementById("btnShangxi" + id).src = "https://ziyuan.guwendao.net/siteimg/shang-pic.png";
            document.getElementById("btnShangxi" + id).alt = "赏析";
            value = "yizhu";
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == "未登录") {
                    window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                }
                else {
                    document.getElementById("zhengwen" + id).innerHTML = xmlhttp.responseText;
                }
            }
        }
        xmlhttp.open("GET", "/nocdn/ajaxshiwencont230427.aspx?id=" + idjm + "&value=" + value, false);
        xmlhttp.send();
    }
}

function OnPinyin230427(id, idjm) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        var value = "cont";
        if (document.getElementById("btnPinyin" + id).alt == "拼音") {
            document.getElementById("btnYiwen" + id).src = "https://ziyuan.guwendao.net/siteimg/yi-pic.png";
            document.getElementById("btnYiwen" + id).alt = "译文";
            document.getElementById("btnZhushi" + id).src = "https://ziyuan.guwendao.net/siteimg/zhu-pic.png";
            document.getElementById("btnZhushi" + id).alt = "注释";
            document.getElementById("btnShangxi" + id).src = "https://ziyuan.guwendao.net/siteimg/shang-pic.png";
            document.getElementById("btnShangxi" + id).alt = "赏析";
            document.getElementById("btnBeisong" + id).src = "https://ziyuan.guwendao.net/siteimg/bei-pic.png";
            document.getElementById("btnBeisong" + id).alt = "背诵";

            document.getElementById("btnPinyin" + id).src = "https://ziyuan.guwendao.net/siteimg/yin-pic2.png";
            document.getElementById("btnPinyin" + id).alt = "拼音2";

            value = "yin";
        }
        else {
            document.getElementById("btnPinyin" + id).src = "https://ziyuan.guwendao.net/siteimg/yin-pic.png";
            document.getElementById("btnPinyin" + id).alt = "拼音";
            value = "cont";
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == "未登录") {
                    window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                }
                else {
                    document.getElementById("zhengwen" + id).innerHTML = xmlhttp.responseText;
                }
            }
        }
        xmlhttp.open("GET", "/nocdn/ajaxshiwencont230427.aspx?id=" + idjm + "&value=" + value, false);
        xmlhttp.send();
    }
}

function OnBeisong230427(id, from, idjm) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        //判断是否绑定手机号或邮箱
        if (getCookie('gswEmail') == null && getCookie('gswPhone') == null) {
            window.parent.window.location.href = "/user/bandphone.aspx?from=" + encodeURIComponent(window.location.href);
        }

        var value = "cont";
        if (document.getElementById("btnBeisong" + id).alt == "背诵") {
            document.getElementById("btnYiwen" + id).src = "https://ziyuan.guwendao.net/siteimg/yi-pic.png";
            document.getElementById("btnYiwen" + id).alt = "译文";
            document.getElementById("btnZhushi" + id).src = "https://ziyuan.guwendao.net/siteimg/zhu-pic.png";
            document.getElementById("btnZhushi" + id).alt = "注释";
            document.getElementById("btnShangxi" + id).src = "https://ziyuan.guwendao.net/siteimg/shang-pic.png";
            document.getElementById("btnShangxi" + id).alt = "赏析";
            document.getElementById("btnPinyin" + id).src = "https://ziyuan.guwendao.net/siteimg/yin-pic.png";
            document.getElementById("btnPinyin" + id).alt = "拼音";

            document.getElementById("btnBeisong" + id).src = "https://ziyuan.guwendao.net/siteimg/bei-pic2.png";
            document.getElementById("btnBeisong" + id).alt = "背诵2";
            value = "bei";
        }
        else {
            document.getElementById("btnBeisong" + id).src = "https://ziyuan.guwendao.net/siteimg/bei-pic.png";
            document.getElementById("btnBeisong" + id).alt = "背诵";
            value = "cont";
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == "未登录") {
                    window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                }
                else {
                    document.getElementById("zhengwen" + id).innerHTML = xmlhttp.responseText;
                }
            }
        }
        xmlhttp.open("GET", "/nocdn/ajaxshiwencont230427.aspx?id=" + idjm + "&value=" + value, false);
        xmlhttp.send();
    }
}

//改变收藏
function changeLike(id,idkey, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        //判断是否绑定手机号或邮箱
        if (getCookie('gswEmail') == null && getCookie('gswPhone') == null) {
            window.parent.window.location.href = "/user/bandphone.aspx?from=" + encodeURIComponent(window.location.href);
        }

        var likeImg = document.getElementById('likeImg' + id).alt.indexOf("已收藏", 0);
        if (likeImg == -1) {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('likeImg' + id).src = 'https://ziyuan.guwendao.net/siteimg/shou-cangok.png';
                    document.getElementById('likeImg' + id).alt = '已收藏'
                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/shiwen2017/likeding.aspx?shoucang=false&id=" + idkey + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
        else {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('likeImg' + id).src = 'https://ziyuan.guwendao.net/siteimg/shou-cang.png';
                    document.getElementById('likeImg' + id).alt = '收藏'
                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/shiwen2017/likeding.aspx?shoucang=true&id=" + idkey + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
    }
}

//改变收藏名句
function changeLikeMingju(id,idkey, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        //判断是否绑定手机号或邮箱
        if (getCookie('gswEmail') == null && getCookie('gswPhone') == null) {
            window.parent.window.location.href = "/user/bandphone.aspx?from=" + encodeURIComponent(window.location.href);
        }

        var likeImg = document.getElementById('likeImg' + id).alt.indexOf("已收藏", 0);
        if (likeImg == -1) {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('likeImg' + id).src = 'https://ziyuan.guwendao.net/siteimg/shou-cangok.png';
                    document.getElementById('likeImg' + id).alt = '已收藏'
                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/mingju/likeding.aspx?shoucang=false&id=" + idkey + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
        else {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('likeImg' + id).src = 'https://ziyuan.guwendao.net/siteimg/shou-cang.png';
                    document.getElementById('likeImg' + id).alt = '收藏'
                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/mingju/likeding.aspx?shoucang=true&id=" + idkey + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
    }
}

//改变收藏作者
function changeLikeAuthor(id,idkey, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        //判断是否绑定手机号或邮箱
        if (getCookie('gswEmail') == null && getCookie('gswPhone') == null) {
            window.parent.window.location.href = "/user/bandphone.aspx?from=" + encodeURIComponent(window.location.href);
        }

        var likeImg = document.getElementById('likeImg' + id).alt.indexOf("已收藏", 0);
        if (likeImg == -1) {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('likeImg' + id).src = 'https://ziyuan.guwendao.net/siteimg/shou-cangok.png';
                    document.getElementById('likeImg' + id).alt = '已收藏'
                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/authors/likeding.aspx?shoucang=false&id=" + idkey + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
        else {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('likeImg' + id).src = 'https://ziyuan.guwendao.net/siteimg/shou-cang.png';
                    document.getElementById('likeImg' + id).alt = '收藏'
                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/authors/likeding.aspx?shoucang=true&id=" + idkey + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
    }
}

//改变收藏古籍
function changeLikeGuwen(id,idkey, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        //判断是否绑定手机号或邮箱
        if (getCookie('gswEmail') == null && getCookie('gswPhone') == null) {
            window.parent.window.location.href = "/user/bandphone.aspx?from=" + encodeURIComponent(window.location.href);
        }

        var likeImg = document.getElementById('likeImg' + id).alt.indexOf("已收藏", 0);
        if (likeImg == -1) {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('likeImg' + id).src = 'https://ziyuan.guwendao.net/siteimg/shou-cangok.png';
                    document.getElementById('likeImg' + id).alt = '已收藏'
                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/guwen/likeding.aspx?shoucang=false&id=" + idkey + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
        else {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('likeImg' + id).src = 'https://ziyuan.guwendao.net/siteimg/shou-cang.png';
                    document.getElementById('likeImg' + id).alt = '收藏'
                }
            }
            var myDate = new Date();
            xmlhttp.open("GET", "/guwen/likeding.aspx?shoucang=true&id=" + idkey + "&time=" + myDate.toLocaleTimeString(), true);
            xmlhttp.send();
        }
    }
}


//复制
function copy(id) {
    var value = document.getElementById('txtare' + id);
    value.focus();
    value.setSelectionRange(0, value.value.length);

    document.execCommand('copy', false, null)
    alert('已复制到剪贴板');
}

//复制作者
function copyAuthor(id) {
    var value = document.getElementById('txtareAuthor' + id);
    value.focus();
    value.setSelectionRange(0, value.value.length);

    document.execCommand('copy', false, null)
    alert('已复制到剪贴板');
}

function clickType() {
    if (document.getElementById("type1").style.height == "auto") {
        document.getElementById("imgType1").src = "https://ziyuan.guwendao.net/siteimg/jianTop.png";
        document.getElementById("type1").style.height = "26px";

    }
    else {
        document.getElementById("imgType1").src = "https://ziyuan.guwendao.net/siteimg/jianBtn.png";
        document.getElementById("type1").style.height = "auto";
    }
}

function clickType2() {
    if (document.getElementById("type2").style.height == "auto") {
        document.getElementById("imgType2").src = "https://ziyuan.guwendao.net/siteimg/jianTop.png";
        document.getElementById("type2").style.height = "26px";
    }
    else {
        document.getElementById("imgType2").src = "https://ziyuan.guwendao.net/siteimg/jianBtn.png";
        document.getElementById("type2").style.height = "auto";
    }
}

function clickType3() {
    if (document.getElementById("type3").style.height == "auto") {
        document.getElementById("imgType3").src = "https://ziyuan.guwendao.net/siteimg/jianTop.png";
        document.getElementById("type3").style.height = "26px";
    }
    else {
        document.getElementById("imgType3").src = "https://ziyuan.guwendao.net/siteimg/jianBtn.png";
        document.getElementById("type3").style.height = "auto";
    }
}


//古籍章杰翻译展示
function ShowYizhu(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        if (document.getElementById('leftbtn' + id).innerHTML == "译文") {
            document.getElementById('left' + id).style.width = "400px";
            document.getElementById('right' + id).style.display = "block";
            document.getElementById('leftbtn' + id).innerHTML = "全屏";

            if (document.getElementById('rightbtn' + id)) {
                document.getElementById('rightbtn' + id).innerHTML = "全屏";
            }
            else {
                var xmlhttp;
                if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                }
                else {// code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        if (xmlhttp.responseText == "未登录") {
                            window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                        }
                        else {
                            document.getElementById("right" + id).innerHTML = xmlhttp.responseText;
                        }
                    }
                }
                xmlhttp.open("GET", "/guwen/ajaxbfanyi.aspx?id=" + id, false);
                xmlhttp.send();
            }
        }
        else {
            document.getElementById('left' + id).style.width = "1000px";
            document.getElementById('right' + id).style.display = "none";
            document.getElementById('leftbtn' + id).innerHTML = "译文";

            if (document.getElementById('rightbtn' + id)) {
                document.getElementById('rightbtn' + id).innerHTML = "全屏";
            }
        }
    }
}
function ShowYizhuRight(id) {
    if (document.getElementById('rightbtn' + id).innerHTML == "全屏") {
        document.getElementById('right' + id).style.width = "1000px";
        document.getElementById('left' + id).style.display = "none";
        document.getElementById('rightbtn' + id).innerHTML = "分屏";
    }
    else {
        document.getElementById('right' + id).style.width = "580px";
        document.getElementById('left' + id).style.display = "block";
        document.getElementById('rightbtn' + id).innerHTML = "全屏";
    }
}

//古籍章杰原创翻译展示
function ShowYizhuYuanchuang(id, state) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == "未登录") {
                    window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                }
                else {
                    document.getElementById("cont" + id).innerHTML = xmlhttp.responseText;
                }
            }
        }
        xmlhttp.open("GET", "/guwen/ajaxbfanyiYuanchuang.aspx?id=" + id + "&state=" + state, false);
        xmlhttp.send();
    }
}

//资料展示
function ziliaoShow(id, idjm) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        document.getElementById('fanyi' + id).style.display = 'none';
        document.getElementById('fanyiquan' + id).style.display = 'block';

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == "未登录") {
                    window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                }
                else {
                    document.getElementById("fanyiquan" + id).innerHTML = xmlhttp.responseText;

                    //如果正在播放
                    if (document.getElementById('ziliaoPlay' + id).style.display == "block") {
                        document.getElementById('speakerimgZiliaoquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                    }
                }
            }
        }
        xmlhttp.open("GET", "/authors/ajaxziliao.aspx?id=" + idjm, false);
        xmlhttp.send();
    }
}
function ziliaoClose(id) {
    document.getElementById('fanyiquan' + id).style.display = 'none';
    document.getElementById('fanyi' + id).style.display = 'block';
}

//译赏展示
function fanyiShow(id, idjm) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        document.getElementById('fanyi' + id).style.display = 'none';
        document.getElementById('fanyiquan' + id).style.display = 'block';

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == "未登录") {
                    window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                }
                else {
                    document.getElementById("fanyiquan" + id).innerHTML = xmlhttp.responseText;
                    //如果正在播放
                    if (document.getElementById('fanyiPlay' + id).style.display == "block") {
                        document.getElementById('speakerimgFanyiquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                    }
                }
            }
        }
        xmlhttp.open("GET", "/nocdn/ajaxfanyi.aspx?id=" + id + "&idjm=" + idjm, false);
        xmlhttp.send();
    }
}

function fanyiClose(id) {
    document.getElementById('fanyiquan' + id).style.display = 'none';
    document.getElementById('fanyi' + id).style.display = 'block';
}
function shangxiShow(id, idjm) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        document.getElementById('shangxi' + id).style.display = 'none';
        document.getElementById('shangxiquan' + id).style.display = 'block';

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == "未登录") {
                    window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                }
                else {
                    document.getElementById("shangxiquan" + id).innerHTML = xmlhttp.responseText;
                    //如果正在播放
                    if (document.getElementById('shangxiPlay' + id).style.display == "block") {
                        document.getElementById('speakerimgShangxiquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                    }
                }
            }
        }
        xmlhttp.open("GET", "/nocdn/ajaxshangxi.aspx?id=" + id + "&idjm=" + idjm, false);
        xmlhttp.send();
    }
}
function shangxiClose(id) {
    document.getElementById('shangxiquan' + id).style.display = 'none';
    document.getElementById('shangxi' + id).style.display = 'block';
}

//翻译
function ding(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        if (getCookie('dingpaify' + id) != null) {
            document.getElementById("ding" + id).innerHTML = "已赞";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("ding" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fyding2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

//翻译拍
function pai(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        if (getCookie('dingpaify' + id) != null) {
            document.getElementById("pai" + id).innerHTML = "已踩";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("pai" + id).innerHTML = xmlhttp.responseText ;
            }
        }
        xmlhttp.open("GET", "/fypai2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

function dingsx(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        if (getCookie('dingpaisx' + id) != null) {
            document.getElementById("dingsx" + id).innerHTML = "已赞";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("dingsx" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/sxding2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

function paisx(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        if (getCookie('dingpaisx' + id) != null) {
            document.getElementById("paisx" + id).innerHTML = "已踩";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("paisx" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/sxpai2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

function dingzl(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        if (getCookie('dingpaizl' + id) != null) {
            document.getElementById("dingzl" + id).innerHTML = "已赞";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("dingzl" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/zlding2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}

function paizl(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        if (getCookie('dingpaizl' + id) != null) {
            document.getElementById("paizl" + id).innerHTML = "已踩";
            return;
        }

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("paizl" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/zlpai2017.aspx?id=" + id + "&from=" + from, true);
        xmlhttp.send();
    }
}


//取得cookie值
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

function setCookie(name, value) {
    var Days = 90;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;";
}

//播放
function Play(id, from) {
    if (getCookie('gsw2017user') == null) {
        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
    }
    else {
        if (document.getElementById('toolPlay' + id).style.display == "none") {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    if (xmlhttp.responseText == "未登录") {
                        window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                    }
                    else {
                        document.getElementById('toolPlay' + id).style.display = "block";
                        document.getElementById('speakerimg' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                        document.getElementById("toolPlay" + id).innerHTML = xmlhttp.responseText;
                    }
                }
            }
            xmlhttp.open("GET", "/viewplay.aspx?id=" + id, false);
            xmlhttp.send();
        }
        else {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            }
            else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById('toolPlay' + id).style.display = "none";
                    document.getElementById('speakerimg' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                    document.getElementById("toolPlay" + id).innerHTML = xmlhttp.responseText;
                }
            }
            xmlhttp.open("GET", "/viewplay.aspx?id=0", false);
            xmlhttp.send();
        }
    }
}

//播放赏析
function PlayShangxi(id, from) {
    if (document.getElementById('shangxiPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('shangxiPlay' + id).style.display = "block";
                document.getElementById('speakerimgShangxi' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                if (document.getElementById('speakerimgShangxiquan' + id)) {
                    document.getElementById('speakerimgShangxiquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                }
                document.getElementById("shangxiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/shangxiplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('shangxiPlay' + id).style.display = "none";
                document.getElementById('speakerimgShangxi' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                if (document.getElementById('speakerimgShangxiquan' + id)) {
                    document.getElementById('speakerimgShangxiquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                }
                document.getElementById("shangxiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/shangxiplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放赏析全
function PlayShangxiquan(id, from) {
    if (document.getElementById('shangxiPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('shangxiPlay' + id).style.display = "block";
                document.getElementById('speakerimgShangxi' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                document.getElementById('speakerimgShangxiquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                document.getElementById("shangxiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/shangxiplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('shangxiPlay' + id).style.display = "none";
                document.getElementById('speakerimgShangxi' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                document.getElementById('speakerimgShangxiquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                document.getElementById("shangxiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/shangxiplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放翻译
function PlayFanyi(id, from) {
    if (document.getElementById('fanyiPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('fanyiPlay' + id).style.display = "block";
                document.getElementById('speakerimgFanyi' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                if (document.getElementById('speakerimgFanyiquan' + id)) {
                    document.getElementById('speakerimgFanyiquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                }
                document.getElementById("fanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fanyiplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('fanyiPlay' + id).style.display = "none";
                document.getElementById('speakerimgFanyi' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                if (document.getElementById('speakerimgFanyiquan' + id)) {
                    document.getElementById('speakerimgFanyiquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                }
                document.getElementById("fanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fanyiplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

if (getCookie('login') == null) {
    setCookie("login", "flase");
}

//播放翻译全
function PlayFanyiquan(id, from) {
    if (document.getElementById('fanyiPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('fanyiPlay' + id).style.display = "block";
                document.getElementById('speakerimgFanyi' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                document.getElementById('speakerimgFanyiquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                document.getElementById("fanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fanyiplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('fanyiPlay' + id).style.display = "none";
                document.getElementById('speakerimgFanyi' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                document.getElementById('speakerimgFanyiquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                document.getElementById("fanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/fanyiplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放资料
function PlayZiliao(id, from) {
    if (document.getElementById('ziliaoPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('ziliaoPlay' + id).style.display = "block";
                document.getElementById('speakerimgZiliao' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                if (document.getElementById('speakerimgZiliaoquan' + id)) {
                    document.getElementById('speakerimgZiliaoquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                }
                document.getElementById("ziliaoPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/ziliaoplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('ziliaoPlay' + id).style.display = "none";
                document.getElementById('speakerimgZiliao' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                if (document.getElementById('speakerimgZiliaoquan' + id)) {
                    document.getElementById('speakerimgZiliaoquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                }
                document.getElementById("ziliaoPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/ziliaoplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放资料全
function PlayZiliaoquan(id, from) {
    if (document.getElementById('ziliaoPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('ziliaoPlay' + id).style.display = "block";
                document.getElementById('speakerimgZiliao' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                document.getElementById('speakerimgZiliaoquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                document.getElementById("ziliaoPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/ziliaoplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('ziliaoPlay' + id).style.display = "none";
                document.getElementById('speakerimgZiliao' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                document.getElementById('speakerimgZiliaoquan' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                document.getElementById("ziliaoPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/ziliaoplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放作者
function PlayAuthor(id, from) {
    if (document.getElementById('authorPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('authorPlay' + id).style.display = "block";
                document.getElementById('speakerimgAuthor' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                document.getElementById("authorPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/authorplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('authorPlay' + id).style.display = "none";
                document.getElementById('speakerimgAuthor' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                document.getElementById("authorPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/authorplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放古籍
function PlayBook(id, from) {
    if (document.getElementById('bookPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bookPlay' + id).style.display = "block";
                document.getElementById('speakerimgBook' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                document.getElementById("bookPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bookplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bookPlay' + id).style.display = "none";
                document.getElementById('speakerimgBook' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                document.getElementById("bookPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bookplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放古籍章节
function PlayBookv(id, from) {
    if (document.getElementById('bookvPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bookvPlay' + id).style.display = "block";
                document.getElementById('speakerimgBookv' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                document.getElementById("bookvPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bookvplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bookvPlay' + id).style.display = "none";
                document.getElementById('speakerimgBookv' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                document.getElementById("bookvPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bookvplay.aspx?id=0", false);
        xmlhttp.send();
    }
}

//播放章节翻译
function PlayBvfanyi(id, from) {
    if (document.getElementById('bvfanyiPlay' + id).style.display == "none") {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bvfanyiPlay' + id).style.display = "block";
                document.getElementById('speakerimgBvfanyi' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-erOk.png";
                document.getElementById("bvfanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bvfanyiplay.aspx?id=" + id, false);
        xmlhttp.send();
    }
    else {

        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('bvfanyiPlay' + id).style.display = "none";
                document.getElementById('speakerimgBvfanyi' + id).src = "https://ziyuan.guwendao.net/siteimg/speak-er.png";
                document.getElementById("bvfanyiPlay" + id).innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "/guwen/bvfanyiplay.aspx?id=0", false);
        xmlhttp.send();
    }
}


document.getElementById('txtKey').addEventListener('click', function (event) {
    if (document.getElementById("txtKey").value != '') {
        if (document.getElementById("box")) {
            if (document.getElementById("box").innerHTML.indexOf("adiv") > 0) {
                document.getElementById("box").style.display = 'block';
            }
        }
        else if (document.getElementById("boxD")) {
            if (document.getElementById("boxD").innerHTML.indexOf("adiv") > 0) {
                document.getElementById("boxD").style.display = 'block';
            }
            else {
                var valuekey = document.getElementById("txtKey").value;

                valuekey = valuekey.replace(/^\s*|\s*$/, "");
                var zimu = ["backup", "exec", "select", "update", "delete", "insert", "script", "drop", "truncate", "create", "everyone", "request", "session"];
                for (var i = 0; i < zimu.length; i++) {
                    if (valuekey.indexOf(zimu[i]) >= 0) {
                        return;
                    }
                }


                //传去ajaxSearchSo.aspx处理
                var xmlhttp;
                if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                }
                else {// code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        document.getElementById("boxD").innerHTML = xmlhttp.responseText;
                        if (document.getElementById("boxD").innerHTML.indexOf("adiv") > 0) {
                            document.getElementById("boxD").style.display = 'block';
                        }
                        else {
                            document.getElementById("boxD").style.display = 'none';
                        }
                    }
                }
                xmlhttp.open("GET", "/shiwen2017/ajaxSearchSoD.aspx?valuekey=" + encodeURI(valuekey), true);
                xmlhttp.send();
            }
        }
    }
    event.stopPropagation();
}, true)

function Focus(state) {
    if (state == 1) {
        document.getElementById('search').style.opacity = 1;
    }
    else {
        document.getElementById('search').style.opacity = 0.7;
    }
}

var timeoutShow = null;
var timeoutShowD = null;

function goshowBos() {
    clearInterval(timeoutShow)
    timeoutShow = setTimeout(showBos, 500);
}

function showBos() {
    if (document.getElementById("b").value == document.getElementById("txtKey").value.replace(/\s+/g, "")) {
        return;
    }

    document.getElementById("b").value = document.getElementById("txtKey").value.replace(/\s+/g, "");
    var valuekey = document.getElementById("txtKey").value;

    valuekey = valuekey.replace(/^\s*|\s*$/, "");
    if (valuekey == "") {
        document.getElementById("box").style.display = 'none';
        return;
    }
    var zimu = ["backup", "exec", "select", "update", "delete", "insert", "script", "drop", "truncate", "create", "everyone", "request", "session"];
    for (var i = 0; i < zimu.length; i++) {
        if (valuekey.indexOf(zimu[i]) >= 0) {
            return;
        }
    }

    //传去ajaxSearchSo.aspx处理
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("box").innerHTML = xmlhttp.responseText;

            if (document.getElementById("box").innerHTML.indexOf("adiv") > 0) {
                document.getElementById("box").style.display = 'block';
            }
            else {
                document.getElementById("box").style.display = 'none';
            }
        }
    }
    xmlhttp.open("GET", "/shiwen2017/ajaxSearchSo.aspx?valuekey=" + encodeURI(valuekey), true);
    xmlhttp.send();
}

function closeshowBos() {
    document.getElementById("box").style.display = 'none';
}

function goshowBosD() {
    clearInterval(timeoutShowD)
    timeoutShowD = setTimeout(showBosD, 500);
}

function showBosD() {
    if (document.getElementById("b").value == document.getElementById("txtKey").value.replace(/\s+/g, "")) {
        return;
    }

    document.getElementById("b").value = document.getElementById("txtKey").value.replace(/\s+/g, "");
    var valuekey = document.getElementById("txtKey").value;

    valuekey = valuekey.replace(/^\s*|\s*$/, "");
    if (valuekey == "") {
        document.getElementById("boxD").style.display = 'none';
        return;
    }
    var zimu = ["backup", "exec", "select", "update", "delete", "insert", "script", "drop", "truncate", "create", "everyone", "request", "session"];
    for (var i = 0; i < zimu.length; i++) {
        if (valuekey.indexOf(zimu[i]) >= 0) {
            return;
        }
    }


    //传去ajaxSearchSo.aspx处理
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("boxD").innerHTML = xmlhttp.responseText;
            if (document.getElementById("boxD").innerHTML.indexOf("adiv") > 0) {
                document.getElementById("boxD").style.display = 'block';
            }
            else {
                document.getElementById("boxD").style.display = 'none';
            }
        }
    }
    xmlhttp.open("GET", "/shiwen2017/ajaxSearchSoD.aspx?valuekey=" + encodeURI(valuekey), true);
    xmlhttp.send();
}

function closeshowBosD() {
    document.getElementById("boxD").style.display = 'none';
}

function selectSearch() {
    var txt = document.getElementById("txtKey").value.trim();
    if (txt == "") {
        alert('请输入关键字');
        return false;
    }
    else if (/^[a-zA-Z]+$/.test(txt)) {
        alert('深度搜索需输入中文');
        return false;
    }

    txt = txt.substr(0, 1)

    document.getElementById('valuej').value = decodeURI(txt)
    return true;
}

function onAdiv(div) {
    document.getElementById(div).style.backgroundColor = '#F2F1E3';
}
function outAdiv(div) {
    document.getElementById(div).style.backgroundColor = '#FBFAF6';
}

//通过方向键控制弹出a标签的焦点(input项)
function noajaxkeyUp() {
    //取键盘值
    var keycode = event.keyCode;
    if (keycode == 40) {
        var aaid = document.getElementById("aa0");
        //判断诗文是否存在
        if (aaid) {
            document.getElementById("aa0").focus();
            document.getElementById("adiv0").style.backgroundColor = '#EBEAD9';
        }
        else {
            var baid = document.getElementById("ba0");
            //判断名句是否存在
            if (baid) {
                document.getElementById("ba0").focus();
                document.getElementById("bdiv0").style.backgroundColor = '#EBEAD9';
            }
            else {
                var caid = document.getElementById("ca0");
                //判断作者是否存在
                if (caid) {
                    document.getElementById("ca0").focus();
                    document.getElementById("cdiv0").style.backgroundColor = '#EBEAD9';
                }
                else {
                    var daid = document.getElementById("da0");
                    //判断类型是否存在
                    if (daid) {
                        document.getElementById("da0").focus();
                        document.getElementById("ddiv0").style.backgroundColor = '#EBEAD9';
                    }
                    else
                    {
                        var eaid=document.getElementById("ea0");
                        //判断典籍是否存在
                        if(eaid){
                            document.getElementById("ea0").focus();
                            document.getElementById("ediv0").style.backgroundColor = '#EBEAD9';
                        }
                    }
                }
            }
        }
    }

    else if (keycode == 38) {
        var baid = document.getElementById("ea2");
        //典籍
        if (baid) {
            document.getElementById("ea2").focus();
            document.getElementById("ediv2").style.backgroundColor = '#EBEAD9';
        }
        else {
            var baid = document.getElementById("ea1");
            if (baid) {
                document.getElementById("ea1").focus();
                document.getElementById("ediv1").style.backgroundColor = '#EBEAD9';
            }
            else {
                var baid = document.getElementById("ea0");
                if (baid) {
                    document.getElementById("ea0").focus();
                    document.getElementById("ediv0").style.backgroundColor = '#EBEAD9';
                }
                else {
                    var baid = document.getElementById("da2");
                    if (baid) {
                        document.getElementById("da2").focus();
                        document.getElementById("ddiv2").style.backgroundColor = '#EBEAD9';
                    }
                    else {
                        var baid = document.getElementById("da1");
                        if (baid) {
                            document.getElementById("da1").focus();
                            document.getElementById("ddiv1").style.backgroundColor = '#EBEAD9';
                        }
                        else {
                            var baid = document.getElementById("da0");
                            if (baid) {
                                document.getElementById("da0").focus();
                                document.getElementById("ddiv0").style.backgroundColor = '#EBEAD9';
                            }
                            else {
                                var baid = document.getElementById("ca2");
                                if (baid) {
                                    document.getElementById("ca2").focus();
                                    document.getElementById("cdiv2").style.backgroundColor = '#EBEAD9';
                                }
                                else {
                                    var baid = document.getElementById("ca1");
                                    if (baid) {
                                        document.getElementById("ca1").focus();
                                        document.getElementById("cdiv1").style.backgroundColor = '#EBEAD9';
                                    }
                                    else {
                                        var baid = document.getElementById("ca0");
                                        if (baid) {
                                            document.getElementById("ca0").focus();
                                            document.getElementById("cdiv0").style.backgroundColor = '#EBEAD9';
                                        }
                                        else {
                                            var baid = document.getElementById("ba2");
                                            if (baid) {
                                                document.getElementById("ba2").focus();
                                                document.getElementById("bdiv2").style.backgroundColor = '#EBEAD9';
                                            }
                                            else {
                                                var baid = document.getElementById("ba1");
                                                if (baid) {
                                                    document.getElementById("ba1").focus();
                                                    document.getElementById("bdiv1").style.backgroundColor = '#EBEAD9';
                                                }
                                                else {
                                                    var baid = document.getElementById("ba0");
                                                    if (baid) {
                                                        document.getElementById("ba0").focus();
                                                        document.getElementById("bdiv0").style.backgroundColor = '#EBEAD9';
                                                    }
                                                    else {
                                                        var baid = document.getElementById("aa2");
                                                        if (baid) {
                                                            document.getElementById("aa2").focus();
                                                            document.getElementById("adiv2").style.backgroundColor = '#EBEAD9';
                                                        }
                                                        else {
                                                            var baid = document.getElementById("aa1");
                                                            if (baid) {
                                                                document.getElementById("aa1").focus();
                                                                document.getElementById("adiv1").style.backgroundColor = '#EBEAD9';
                                                            }
                                                            else{
                                                                var baid = document.getElementById("aa0");
                                                                if (baid) {
                                                                    document.getElementById("aa0").focus();
                                                                    document.getElementById("adiv0").style.backgroundColor = '#EBEAD9';
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    //禁止浏览器受方向键控制浏览器可视面
    document.onkeydown = function(e) {
        e = e || event;
        if (e.keyCode == 38) {
            //你自己的代码
            return false;
        }
        if (e.keyCode == 40) {
            //你自己的代码
            return false;
        }
    }
}


//通过方向键控制弹出a标签的焦点(诗文项)
function aajaxkeyUp(num) {
    //取键盘值
    var keycode = event.keyCode;
    if (keycode == 40) {
        //当前num+1;
        var newnum = num + 1;
        var aaid = document.getElementById("aa" + newnum);
        //判断诗文是否存在
        if (aaid) {
            document.getElementById("aa" + newnum).focus();
            document.getElementById("adiv" + newnum).style.backgroundColor = '#EBEAD9';
            document.getElementById("adiv" + num).style.backgroundColor = '#FBFAF6';
        }
        else {
            var baid = document.getElementById("ba0");
            //判断名句是否存在
            if (baid) {
                document.getElementById("ba0").focus();
                document.getElementById("bdiv0").style.backgroundColor = '#EBEAD9';
                document.getElementById("adiv" + num).style.backgroundColor = '#FBFAF6';
            }
            else {
                var baid = document.getElementById("ca0");
                //判断作者是否存在
                if (baid) {
                    document.getElementById("ca0").focus();
                    document.getElementById("cdiv0").style.backgroundColor = '#EBEAD9';
                    document.getElementById("adiv" + num).style.backgroundColor = '#FBFAF6';
                }
                else {
                    var baid = document.getElementById("da0");
                    //判断类型是否存在
                    if (baid) {
                        document.getElementById("da0").focus();
                        document.getElementById("ddiv0").style.backgroundColor = '#EBEAD9';
                        document.getElementById("adiv" + num).style.backgroundColor = '#FBFAF6';
                    }
                    else{
                        var baid = document.getElementById("ea0");
                        //判断典籍是否存在
                        if (baid) {
                            document.getElementById("ea0").focus();
                            document.getElementById("ediv0").style.backgroundColor = '#EBEAD9';
                            document.getElementById("adiv" + num).style.backgroundColor = '#FBFAF6';
                        }
                        else {
                            document.getElementById("txtKey").focus();
                            document.getElementById("adiv" + num).style.backgroundColor = '#FBFAF6';
                        }
                    }
                }
            }
         }
    }
    else if (keycode == 38) {
        //当前num-1;
        var newnum = num - 1;
        var baid = document.getElementById("aa" + newnum);
        //判断诗文是否存在
        if (baid) {
            document.getElementById("aa" + newnum).focus();
            document.getElementById("adiv" + newnum).style.backgroundColor = '#EBEAD9';
            document.getElementById("adiv" + num).style.backgroundColor = '#FBFAF6';
        }
        else {
            document.getElementById("txtKey").focus();
            document.getElementById("adiv" + num).style.backgroundColor = '#FBFAF6';
        }
    }

    //禁止浏览器受方向键控制浏览器可视面
    document.onkeydown = function(e) {
        e = e || event;
        if (e.keyCode == 38) {
            //你自己的代码
            return false;
        }
        else if (e.keyCode == 40) {
            //你自己的代码
            return false;
        }
    }
}


//通过方向键控制弹出b标签的焦点(名句项)
function bajaxkeyUp(num) {
    //取键盘值
    var keycode = event.keyCode;
    if (keycode == 40) {
        //当前num+1;
        var newnum = num + 1;
        var baid = document.getElementById("ba" + newnum);
        //判断名句是否存在
        if (baid) {
            document.getElementById("ba" + newnum).focus();
            document.getElementById("bdiv"+newnum).style.backgroundColor = '#EBEAD9';
            document.getElementById("bdiv" + num).style.backgroundColor = '#FBFAF6';
        }
        else {
            var baid = document.getElementById("ca0");
            //判断作者是否存在
            if (baid) {
                document.getElementById("ca0").focus();
                document.getElementById("cdiv0").style.backgroundColor = '#EBEAD9';
                document.getElementById("bdiv" + num).style.backgroundColor = '#FBFAF6';
            }
            else {
                var baid = document.getElementById("da0");
                //判断类型是否存在
                if (baid) {
                    document.getElementById("da0").focus();
                    document.getElementById("ddiv0").style.backgroundColor = '#EBEAD9';
                    document.getElementById("bdiv" + num).style.backgroundColor = '#FBFAF6';
                }
                else{
                    var baid = document.getElementById("ea0");
                    //判断典籍是否存在
                    if (baid) {
                        document.getElementById("ea0").focus();
                        document.getElementById("ediv0").style.backgroundColor = '#EBEAD9';
                        document.getElementById("bdiv" + num).style.backgroundColor = '#FBFAF6';
                    }
                    else {
                    document.getElementById("txtKey").focus();
                    document.getElementById("bdiv" + num).style.backgroundColor = '#FBFAF6';
                    }
                }
            }
        }
    }
    else if (keycode == 38) {
        //当前num-1;
        var newnum = num - 1;
        var baid = document.getElementById("ba" + newnum);
        //判断名句是否存在
        if (baid) {
            document.getElementById("ba" + newnum).focus();
            document.getElementById("bdiv" + newnum).style.backgroundColor = '#EBEAD9';
            document.getElementById("bdiv" + num).style.backgroundColor = '#FBFAF6';
        }
        else {
            var aaid = document.getElementById("aa2");
            //判断诗文2是否存在
            if (aaid) {
                document.getElementById("aa2").focus();
                document.getElementById("adiv2").style.backgroundColor = '#EBEAD9';
                document.getElementById("bdiv" + num).style.backgroundColor = '#FBFAF6';
            }
            else {
                var aaid = document.getElementById("aa1");
                //判断诗文1是否存在
                if (aaid) {
                    document.getElementById("aa1").focus();
                    document.getElementById("adiv1").style.backgroundColor = '#EBEAD9';
                    document.getElementById("bdiv" + num).style.backgroundColor = '#FBFAF6';
                }
                else {
                    var aaid = document.getElementById("aa0");
                    //判断诗文0是否存在
                    if (aaid) {
                        document.getElementById("aa0").focus();
                        document.getElementById("adiv0").style.backgroundColor = '#EBEAD9';
                        document.getElementById("bdiv" + num).style.backgroundColor = '#FBFAF6';
                    }
                    else {
                        document.getElementById("txtKey").focus();
                        document.getElementById("bdiv" + num).style.backgroundColor = '#FBFAF6';
                    }
                }
            }
        }
    }

    //禁止浏览器受方向键控制浏览器可视面
    document.onkeydown = function(e) {
        e = e || event;
        if (e.keyCode == 38) {
            //你自己的代码
            return false;
        }
        if (e.keyCode == 40) {
            //你自己的代码
            return false;
        }
    }
}


//通过方向键控制弹出c标签的焦点(作者项)
function cajaxkeyUp(num) {
    //取键盘值
    var keycode = event.keyCode;
    if (keycode == 40) {
        //当前num+1;
        var newnum = num + 1;
        var baid = document.getElementById("ca"+newnum);
        //判断作者是否存在
        if (baid) {
            document.getElementById("ca" + newnum).focus();
            document.getElementById("cdiv"+newnum).style.backgroundColor = '#EBEAD9';
            document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
        }
        else {
            var baid = document.getElementById("da0");
            //判断类型是否存在
            if (baid) {
                document.getElementById("da0").focus();
                document.getElementById("ddiv0").style.backgroundColor = '#EBEAD9';
                document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
            }
            else{
                var baid = document.getElementById("ea0");
                //判断典籍是否存在
                if (baid) {
                    document.getElementById("ea0").focus();
                    document.getElementById("ediv0").style.backgroundColor = '#EBEAD9';
                    document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
                }
                else {
                document.getElementById("txtKey").focus();
                document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
                }
            }
        }
    }
    else if (keycode == 38) {
        //当前num-1;
        var newnum = num - 1;
        var baid = document.getElementById("ca" + newnum);
        //判断作者是否存在
        if (baid) {
            document.getElementById("ca" + newnum).focus();
            document.getElementById("cdiv" + newnum).style.backgroundColor = '#EBEAD9';
            document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
        }
        else {
            var baid = document.getElementById("ba2");
            //判断名句2是否存在
            if (baid) {
                document.getElementById("ba2").focus();
                document.getElementById("bdiv2").style.backgroundColor = '#EBEAD9';
                document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
            }
            else {
                var baid = document.getElementById("ba1");
                //判断名句1是否存在
                if (baid) {
                    document.getElementById("ba1").focus();
                    document.getElementById("bdiv1").style.backgroundColor = '#EBEAD9';
                    document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
                }
                else {
                    var baid = document.getElementById("ba0");
                    //判断名句0是否存在
                    if (baid) {
                        document.getElementById("ba0").focus();
                        document.getElementById("bdiv0").style.backgroundColor = '#EBEAD9';
                        document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
                    }
                    else {
                        var baid = document.getElementById("aa2");
                        //判断诗文2是否存在
                        if (baid) {
                            document.getElementById("aa2").focus();
                            document.getElementById("adiv2").style.backgroundColor = '#EBEAD9';
                            document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
                        }
                        else {
                            var baid = document.getElementById("aa1");
                            //判断诗文1是否存在
                            if (baid) {
                                document.getElementById("aa1").focus();
                                document.getElementById("adiv1").style.backgroundColor = '#EBEAD9';
                                document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
                            }
                            else {
                                var aaid = document.getElementById("aa0");
                                //判断诗文0是否存在
                                if (aaid) {
                                    document.getElementById("aa0").focus();
                                    document.getElementById("adiv0").style.backgroundColor = '#EBEAD9';
                                    document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
                                }
                                else {
                                    document.getElementById("txtKey").focus();
                                    document.getElementById("cdiv" + num).style.backgroundColor = '#FBFAF6';
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    //禁止浏览器受方向键控制浏览器可视面
    document.onkeydown = function(e) {
        e = e || event;
        if (e.keyCode == 38) {
            //你自己的代码
            return false;
        }
        if (e.keyCode == 40) {
            //你自己的代码
            return false;
        }
    }
}


//通过方向键控制弹出d标签的焦点(类型项)
function dajaxkeyUp(num) {
    //取键盘值
    var keycode = event.keyCode;
    if (keycode == 40) {
        //当前num+1;
        var newnum = num + 1;
        var baid = document.getElementById("da"+newnum);
        //判断类型是否存在
        if (baid) {
            document.getElementById("da" + newnum).focus();
            document.getElementById("ddiv" + newnum).style.backgroundColor = '#EBEAD9';
            document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
        }
        else{
            var baid = document.getElementById("ea0");
            //判断典籍是否存在
            if (baid) {
                document.getElementById("ea0").focus();
                document.getElementById("ediv0").style.backgroundColor = '#EBEAD9';
                document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
            }
            else {
            document.getElementById("txtKey").focus();
            document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
            }
        }
    }
    else if (keycode == 38) {
        //当前num-1;
        var newnum = num - 1;
        var baid = document.getElementById("da" + newnum);
        //判断类型是否存在
        if (baid) {
            document.getElementById("da" + newnum).focus();
            document.getElementById("ddiv" + newnum).style.backgroundColor = '#EBEAD9';
            document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
        }
        else {
            var baid = document.getElementById("ca2");
            //判断作者2是否存在
            if (baid) {
                document.getElementById("ca2").focus();
                document.getElementById("cdiv2").style.backgroundColor = '#EBEAD9';
                document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
            }
            else {
                var baid = document.getElementById("ca1");
                //判断作者1是否存在
                if (baid) {
                    document.getElementById("ca1").focus();
                    document.getElementById("cdiv1").style.backgroundColor = '#EBEAD9';
                    document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
                }
                else {
                    var baid = document.getElementById("ca0");
                    //判断作者0是否存在
                    if (baid) {
                        document.getElementById("ca0").focus();
                        document.getElementById("cdiv0").style.backgroundColor = '#EBEAD9';
                        document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
                    }
                    else {
                        var baid = document.getElementById("ba2");
                        //判断名句2是否存在
                        if (baid) {
                            document.getElementById("ba2").focus();
                            document.getElementById("bdiv2").style.backgroundColor = '#EBEAD9';
                            document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
                        }
                        else {
                            var baid = document.getElementById("ba1");
                            //判断名句1是否存在
                            if (baid) {
                                document.getElementById("ba1").focus();
                                document.getElementById("bdiv1").style.backgroundColor = '#EBEAD9';
                                document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
                            }
                            else {
                                var baid = document.getElementById("ba0");
                                //判断名句0是否存在
                                if (baid) {
                                    document.getElementById("ba0").focus();
                                    document.getElementById("bdiv0").style.backgroundColor = '#EBEAD9';
                                    document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
                                }
                                else {
                                    var baid = document.getElementById("aa2");
                                    //判断诗文2是否存在
                                    if (baid) {
                                        document.getElementById("aa2").focus();
                                        document.getElementById("adiv2").style.backgroundColor = '#EBEAD9';
                                        document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
                                    }
                                    else {
                                        var baid = document.getElementById("aa1");
                                        //判断诗文1是否存在
                                        if (baid) {
                                            document.getElementById("aa1").focus();
                                            document.getElementById("adiv1").style.backgroundColor = '#EBEAD9';
                                            document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
                                        }
                                        else {
                                            var baid = document.getElementById("aa0");
                                            //判断诗文0是否存在
                                            if (baid) {
                                                document.getElementById("aa0").focus();
                                                document.getElementById("adiv0").style.backgroundColor = '#EBEAD9';
                                                document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
                                            }
                                            else {
                                                document.getElementById("txtKey").focus();
                                                document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //禁止浏览器受方向键控制浏览器可视面
    document.onkeydown = function(e) {
        e = e || event;
        if (e.keyCode == 38) {
            //你自己的代码
            return false;
        }
        if (e.keyCode == 40) {
            //你自己的代码
            return false;
        }
    }
}


//通过方向键控制弹出e标签的焦点(典籍项)
function eajaxkeyUp(num) {
    //取键盘值
    var keycode = event.keyCode;
    if (keycode == 40) {
        //当前num+1;
        var newnum = num + 1;
        var baid = document.getElementById("ea"+newnum);
        //判断典籍是否存在
        if (baid) {
            document.getElementById("ea" + newnum).focus();
            document.getElementById("ediv" + newnum).style.backgroundColor = '#EBEAD9';
            document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
        }
        else {
        document.getElementById("txtKey").focus();
        document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
        }
    }
    else if (keycode == 38) {
        //当前num-1;
        var newnum = num - 1;
        var baid = document.getElementById("ea" + newnum);
        //判断典籍是否存在
        if (baid) {
            document.getElementById("ea" + newnum).focus();
            document.getElementById("ediv" + newnum).style.backgroundColor = '#EBEAD9';
            document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
        }
        else {
            var baid = document.getElementById("da2");
            //判断类型2是否存在
            if (baid) {
                document.getElementById("da2").focus();
                document.getElementById("ddiv2").style.backgroundColor = '#EBEAD9';
                document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
            }
            else {
                var baid = document.getElementById("da1");
                //判断类型1是否存在
                if (baid) {
                    document.getElementById("da1").focus();
                    document.getElementById("ddiv1").style.backgroundColor = '#EBEAD9';
                    document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                }
                else {
                    var baid = document.getElementById("da0");
                    //判断类型0是否存在
                    if (baid) {
                        document.getElementById("da0").focus();
                        document.getElementById("ddiv0").style.backgroundColor = '#EBEAD9';
                        document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                    }
                    else {
                        var baid = document.getElementById("ca2");
                        //判断作者2是否存在
                        if (baid) {
                            document.getElementById("ca2").focus();
                            document.getElementById("cdiv2").style.backgroundColor = '#EBEAD9';
                            document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                        }
                        else {
                            var baid = document.getElementById("ca1");
                            //判断作者1是否存在
                            if (baid) {
                                document.getElementById("ca1").focus();
                                document.getElementById("cdiv1").style.backgroundColor = '#EBEAD9';
                                document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                            }
                            else {
                                var baid = document.getElementById("ca0");
                                //判断作者0是否存在
                                if (baid) {
                                    document.getElementById("ca0").focus();
                                    document.getElementById("cdiv0").style.backgroundColor = '#EBEAD9';
                                    document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                                }
                                else {
                                    var baid = document.getElementById("ba2");
                                    //判断名句2是否存在
                                    if (baid) {
                                        document.getElementById("ba2").focus();
                                        document.getElementById("bdiv2").style.backgroundColor = '#EBEAD9';
                                        document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                                    }
                                    else {
                                        var baid = document.getElementById("ba1");
                                        //判断名句1是否存在
                                        if (baid) {
                                            document.getElementById("ba1").focus();
                                            document.getElementById("bdiv1").style.backgroundColor = '#EBEAD9';
                                            document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                                        }
                                        else {
                                            var baid = document.getElementById("ba0");
                                            //判断名句0是否存在
                                            if (baid) {
                                                document.getElementById("ba0").focus();
                                                document.getElementById("bdiv0").style.backgroundColor = '#EBEAD9';
                                                document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                                            }
                                            else{
                                                var baid = document.getElementById("aa2");
                                                //判断诗文2是否存在
                                                if (baid) {
                                                    document.getElementById("aa2").focus();
                                                    document.getElementById("adiv2").style.backgroundColor = '#EBEAD9';
                                                    document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                                                }
                                                else{
                                                    var baid = document.getElementById("aa1");
                                                    //判断诗文1是否存在
                                                    if (baid) {
                                                        document.getElementById("aa1").focus();
                                                        document.getElementById("adiv1").style.backgroundColor = '#EBEAD9';
                                                        document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                                                    }
                                                    else{
                                                        var baid = document.getElementById("aa0");
                                                        //判断诗文0是否存在
                                                        if (baid) {
                                                            document.getElementById("aa0").focus();
                                                            document.getElementById("adiv0").style.backgroundColor = '#EBEAD9';
                                                            document.getElementById("ediv" + num).style.backgroundColor = '#FBFAF6';
                                                        }
                                                        else {
                                                        document.getElementById("txtKey").focus();
                                                        document.getElementById("ddiv" + num).style.backgroundColor = '#FBFAF6';
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //禁止浏览器受方向键控制浏览器可视面
    document.onkeydown = function(e) {
        e = e || event;
        if (e.keyCode == 38) {
            //你自己的代码
            return false;
        }
        if (e.keyCode == 40) {
            //你自己的代码
            return false;
        }
    }
}


(function() {
    var hb = 0,
    V = 107,
    yb = 40,
    tb = 0,
    vb = 13,
    gb = 0,
    N = 0,
    M = [[10, 3, 320, 330, '&#37322;&#20041;', 'zidian.png', 'get']],
    wb = navigator.userAgent.replace(/\s/img, "").toLowerCase(),
    R = wb.match(/msie[678]\.0/),
    F = window,
    b = document,
    i = b.body,
    Ab = b.getElementsByTagName("head")[0],
    kb = location.href.replace("http://", "").replace("https://", "");
    if (hb && !k) k = M[0][0];
    var J = b.documentElement,
    G = 0;
    function jb(b) {
        var a = e("link");
        a.setAttribute("rel", "stylesheet");
        a.setAttribute("type", "text/css");
        a.setAttribute("href", b);
        Ab.appendChild(a)
    }
    jb("https://ziyuan.guwendao.net/huaci/graybox.css");
    jb("https://ziyuan.guwendao.net/huaci/blackdownbar.css");
    function s(a) {
        return b.getElementById(a)
    }
    function e(a) {
        return b.createElement(a)
    }
    function a(c, a, b) {
        if (window.addEventListener) {
            c.addEventListener(a, b, false);
            return
        }
        window.attachEvent && c.attachEvent("on" + a, b)
    }
    function n(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c);
        a.removeEventListener && a.removeEventListener(b, c, false)
    }
    function j(a) {
        a = m(a);
        if (a.stopPropagation) a.stopPropagation();
        else a.cancelBubble = true
    }
    function m(a) {
        return F.event || a
    }
    var d = e("div");
    i.appendChild(d);
    var W = 0,
    T = 0,
    Y = 0,
    ab = 0;
    d.className = "aihuaci";
    function db(b, a) {
        if (b < 100) return false;
        c(d, {
            width: b + "px"
        });
        a && c(d, {
            left: a + "px"
        })
    }
    function bb(a, b) {
        if (a < 100) return false;
        c(d, {
            height: a + "px"
        });
        a = a - 52;
        c(E, {
            height: a + "px"
        });
        c(l, {
            height: a - N + "px"
        });
        b && c(d, {
            top: b + "px"
        })
    }
    var y = e("div");
    d.appendChild(y);
    y.className = "aihuaciheader";
    y.innerHTML = '<p></p><button id="aihuacihead">&nbsp;</button><span></span><button id="aihuaciclose"></button>';
    var fb = s("aihuaciclose");
    a(fb, "mousedown",
    function(a) {
        j(a)
    });
    function eb(a) {
        d.style.display = "none";
        l.setAttribute("src", "about:blank");
        a && j(a)
    }
    a(fb, "click",
    function(a) {
        eb(a)
    });
    a(b, "keydown",
    function(a) {
        a = m(a);
        a.keyCode == 27 && eb()
    });
    var E = e("div");
    E.className = "aihuacimain";
    d.appendChild(E);
    var I = e("div");
    I.className = "aihuacimainloadbox";
    E.appendChild(I);
    I.innerHTML = '<img src="https://ziyuan.guwendao.net/siteimg/loading.gif" width="32" height="32" />';
    var l = e("iframe");
    l.setAttribute("frameBorder", 0);
    l.setAttribute("id", "aihuaciiframe");
    l.setAttribute("name", "aihuaciiframe");
    if (R) l = e('<iframe frameBorder="0" id="aihuaciiframe" name="aihuaciiframe">');
    l.onscroll = function(a) {
        a = m(a);
        j(a)
    };
    E.appendChild(l);
    a(l, "load", P);
    function P() {
        I.style.display = "none";
        l.style.display = "block";
        u.style.display = N ? "block" : "none"
    }
    l.onreadystatechange = function() {
        this.readyState && this.readyState == "complete" && P()
    };
    function c(c, a) {
        try {
            for (var b in a) c.style[b] = a[b]
        } catch (d) { }
    }
    var u = e("iframe");
    if (R) u = e('<iframe frameBorder="0" id="aihuaciadvert" name="aihuaciadvert">');
    E.appendChild(u);
    X(u, {
        frameBorder: 0,
        id: "aihuaciadvert",
        name: "aihuaciadvert"
    });
    c(u, {
        height: N + "px",
        width: "100%"
    });
    var C = null;
    function sb(a) {
        C && i.removeChild(C);
        C = e("script");
        C.type = "text/javascript";
        C.src = a;
        i.appendChild(C)
    }
    var H = e("div");
    d.appendChild(H);
    H.innerHTML = '<p></p><div><button id="aihuacibottombtn"></button></div><a href="//www.gushiwen.cn/" target="_blank">&#21476;&#35799;&#25991;&#32593;</a><span></span>';
    H.className = "aihuacibottom";
    mb = H.getElementsByTagName("a");
    a(mb[0], "mousedown",
    function(a) {
        j(a)
    });
    var q = e("button");
    d.appendChild(q);
    q.className = "aihuacisidebar";
    c(q, {
        width: "5px",
        height: "100%",
        top: "0px",
        left: "-2px",
        background: "black",
        cursor: "col-resize"
    });
    a(q, "mousedown",
    function() {
        c(g, {
            cursor: "col-resize"
        });
        a(b, "mousemove", q.move);
        a(b, "mouseup",
        function() {
            n(b, "mousemove", q.move)
        })
    });
    q.move = function(a) {
        a = m(a);
        db(W + (Y - a.clientX), a.clientX - K)
    };
    var r = e("button");
    d.appendChild(r);
    r.className = "aihuacisidebar";
    c(r, {
        width: "100%",
        height: "5px",
        top: "-2px",
        left: "0px",
        background: "black",
        cursor: "row-resize"
    });
    a(r, "mousedown",
    function() {
        c(g, {
            cursor: "row-resize"
        });
        a(b, "mousemove", r.move);
        a(b, "mouseup",
        function() {
            n(b, "mousemove", r.move)
        })
    });
    r.move = function(a) {
        a = m(a);
        bb(T + ab - a.clientY, a.clientY + t())
    };
    var p = e("button");
    d.appendChild(p);
    p.className = "aihuacisidebar";
    c(p, {
        width: "5px",
        height: "100%",
        top: "0px",
        right: "-2px",
        background: "black",
        cursor: "col-resize"
    });
    a(p, "mousedown",
    function() {
        c(g, {
            cursor: "col-resize"
        });
        a(b, "mousemove", p.move);
        a(b, "mouseup",
        function() {
            n(b, "mousemove", p.move)
        });
        return false
    });
    p.move = function(a) {
        a = m(a);
        db(a.clientX - Y + W);
        return false
    };
    var o = e("button");
    d.appendChild(o);
    o.className = "aihuacisidebar";
    c(o, {
        width: "100%",
        height: "5px",
        left: "0px",
        bottom: "-2px",
        background: "black",
        cursor: "row-resize"
    });
    a(o, "mousedown",
    function() {
        c(g, {
            cursor: "row-resize"
        });
        a(b, "mousemove", o.move);
        a(b, "mouseup",
        function() {
            n(b, "mousemove", o.move)
        });
        return false
    });
    o.move = function(a) {
        a = m(a);
        var b = T + (a.clientY - ab);
        bb(b);
        return false
    };
    var z = e("button");
    d.appendChild(z);
    z.className = "aihuacisidepart";
    c(z, {
        top: "-2px",
        left: "-2px",
        cursor: "nw-resize"
    });
    a(z, "mousedown",
    function() {
        c(g, {
            cursor: "nw-resize"
        });
        a(b, "mousemove", z.move);
        a(b, "mouseup",
        function() {
            n(b, "mousemove", z.move)
        });
        return false
    });
    z.move = function(a) {
        q.move(a);
        r.move(a);
        return false
    };
    var x = e("button");
    d.appendChild(x);
    x.className = "aihuacisidepart";
    c(x, {
        top: "-2px",
        right: "-2px",
        cursor: "ne-resize"
    });
    a(x, "mousedown",
    function() {
        c(g, {
            cursor: "ne-resize"
        });
        a(b, "mousemove", x.move);
        a(b, "mouseup",
        function() {
            n(b, "mousemove", x.move)
        });
        return false
    });
    x.move = function(a) {
        p.move(a);
        r.move(a);
        return false
    };
    var w = e("button");
    d.appendChild(w);
    w.className = "aihuacisidepart";
    c(w, {
        left: "-2px",
        bottom: "-2px",
        cursor: "sw-resize"
    });
    a(w, "mousedown",
    function() {
        c(g, {
            cursor: "sw-resize"
        });
        a(b, "mousemove", w.move);
        a(b, "mouseup",
        function() {
            n(b, "mousemove", w.move)
        });
        return false
    });
    w.move = function(a) {
        q.move(a);
        o.move(a);
        return false
    };
    var v = e("button");
    d.appendChild(v);
    v.className = "aihuacisidepart";
    c(v, {
        right: "-2px",
        bottom: "-2px",
        cursor: "se-resize"
    });
    a(v, "mousedown",
    function() {
        c(g, {
            cursor: "se-resize"
        });
        a(b, "mousemove", v.move);
        a(b, "mouseup",
        function() {
            n(b, "mousemove", v.move)
        });
        return false
    });
    v.move = function(a) {
        p.move(a);
        o.move(a);
        return false
    };
    var g = e("div");
    i.appendChild(g);
    g.className = "blankmask";
    g.style.display = "none";
    a(d, "mousedown",
    function(a) {
        a = m(a);
        j(a);
        W = d.offsetWidth;
        T = d.offsetHeight;
        Y = a.clientX;
        ab = a.clientY;
        g.setCapture && g.setCapture();
        c(g, {
            width: G + "px",
            height: Math.max(J.scrollHeight, i.scrollHeight, F.screen.availHeight, i.offsetHeight) + "px",
            display: "block",
            left: "-" + K + "px",
            top: "0px"
        });
        return false
    });
    a(g, "click",
    function(a) {
        j(a)
    });
    a(d, "mousemove",
    function() {
        return false
    });
    a(y, "dblclick",
    function(a) {
        j(a);
        return false
    });
    a(y, "mousedown",
    function() {
        return false
    });
    a(y, "mousemove",
    function() {
        return false
    });
    a(g, "mousemove",
    function() {
        return false
    });
    a(b, "mouseup",
    function() {
        g.releaseCapture && g.releaseCapture();
        g.style.display = "none";
        return false
    });
    function t() {
        return J.scrollTop || i.scrollTop
    }
    var h = {};
    h.top = function(a) {
        return !a ? 0 : a.offsetTop + this.top(a.offsetParent)
    };
    h.left = function(a) {
        return !a ? 0 : a.offsetLeft + this.left(a.offsetParent)
    };
    h.Move = function(a) {
        a = m(a);
        if (a.clientY < 10) return false;
        c(d, {
            left: a.clientX - h.PointX + "px",
            top: t() + a.clientY - h.PointY + "px"
        });
        return false
    };
    h.Stop = function() {
        d.onresize();
        c(g, {
            cursor: "default"
        });
        n(b, "mousemove", h.Move);
        n(b, "mouseup", h.Stop)
    };
    h.Down = function(e) {
        e = m(e);
        h.PointX = e.clientX - h.left(d.offsetParent) - h.left(d);
        h.PointY = t() + e.clientY - h.top(d);
        c(g, {
            cursor: "move",
            display: "block"
        });
        a(b, "mousemove", h.Move);
        a(b, "mouseup", h.Stop);
        return false
    };
    a(y, "mousedown", h.Down);
    var K = 0;
    function pb() {
        try {
            var d = i.currentStyle ? i.currentStyle.position : b.defaultView ? b.defaultView.getComputedStyle(i, null).position : "";
            if (d != "static") {
                var a = e("div");
                i.appendChild(a);
                c(a, {
                    width: "0px",
                    height: "0px",
                    overflow: "hidden",
                    padding: "0px",
                    margin: "0px"
                });
                i.style.position = "static";
                K = h.left(a);
                i.style.position = d;
                i.removeChild(a)
            }
            G = J.clientWidth || i.clientWidth
        } catch (f) { }
    }
    pb();
    a(F, "resize", pb);
    a(F, "scroll",
    function() {
        k && D[k] && setTimeout(function() {
            c(d, {
                top: t() + D[k][3] + "px"
            })
        },
        100)
    });
    var f = e("form");
    f.setAttribute("target", "aihuaciiframe");
    f.setAttribute("method", "post");
    if (R) f = e('<form target="aihuaciiframe" accept-charset="utf-8" method="post">');
    f.setAttribute("action", "/dict/fancha.aspx");
    f.acceptCharset = "utf-8";
    i.appendChild(f);
    f.className = "aihuacitollbar";
    f.innerHTML = '<input type="hidden" id="aihuacikeyword" name="z" /><input type="hidden" name="url" value="' + kb + '" />';
    function X(c, a) {
        for (var b in a) c.setAttribute(b, a[b])
    }
    function zb(a) {
        a = a.match(/\d+/img);
        for (var d = a.length,
        c = [], b = 0; b < d; b++) c.push(String.fromCharCode(a[b]));
        return c.join("")
    }
    var ib = e("ul");
    f.appendChild(ib);
    var lb = M.length;
    f.style.width = lb * yb + tb + "px";
    for (var L = [], cb = 0; cb < lb; cb++) {
        var B = e("li");
        ib.appendChild(B);
        var A = M[cb];
        X(B, {
            toolid: A[0],
            params: A[2] + "," + A[3] + "," + A[4]
        });
        var Z = e("img");
        B.appendChild(Z);
        Z.src = "";
        X(Z, {
            title: zb(A[4])
        });
        var S = e("button");
        S.setAttribute("type", "button");
        B.appendChild(S);
        S.innerHTML = A[4];
        L.push(B);
        Bb(B)
    }
    c(B, {
        backgroundPosition: "0px 0px"
    });
    var Cb = e("span");
    f.appendChild(Cb);
    function Q(a, c) {
        var b = encodeURIComponent(a);
        return b.length <= c ? b : Q(a.substring(0, a.length - 1), c)
    }
    var O = "";
    function Bb(e) {
        a(e, "mousedown",
        function(a) {
            j(a)
        });
        e.onclick = function (n) {
            if (getCookie('gsw2017user') == null) {
                window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                return;
            }
            j(n);
            var m = this;
            k = m.getAttribute("toolid");
            var e = m.getAttribute("params").split(",");
            if (!D[k]) {
                var h = Math.min(i.clientHeight, J.clientHeight) - e[1];
                if (h < 0) h = Math.max(i.clientHeight, J.clientHeight) - e[1];
                D[k] = [e[0], e[1], G - K - e[0], h - 2]
            }
            var g = O;
            s("aihuacihead").innerHTML = e[2] + " - " + g.substring(0, 15);
            var a = D[k];
            c(d, {
                width: a[0] + "px",
                height: a[1] + "px",
                display: "block",
                left: a[2] + "px",
                top: a[3] + t() + "px"
            });
            db(a[0], a[2] - 2);
            bb(a[1], a[3] + t());
            c(H, {
                bottom: "0px"
            });
            I.style.display = "block";
            c(l, {
                display: "none"
            });
            u.style.display = "none";
            setTimeout(function() {
                P()
            },
            3e3);
            if (M[6] == "get") {
                g = Q(g, 1800);
                s("aihuacititle").value = Q(b.title, 180)
            }
            s("aihuacikeyword").value = g;
            b.charset = "utf-8";
            N && u.setAttribute("src", "");
            f.submit();
            b.charset = s("aihuacicharset").value
        }
    }
    function rb() {
        return F.getSelection ? F.getSelection().toString() : b.selection && b.selection.createRange ? b.selection.createRange().text : null
    }
    var nb, ob;
    a(b, "mousedown",
    function(a) {
        a = m(a);
        nb = a.clientX
    });
    a(b, "mouseup",
    function(a) {
        a = m(a);
        ob = a.clientX;
        var e = parseInt((ob - nb) / 2);
        e = e > 0 ? 10 : -10;
        var g = rb();
        if (g.length > 0 & g.length < 15) {
            c(f, {
                display: "block"
            });
            if (O != g) {
                O = g;
                c(f, {
                    left: a.clientX + gb - e - K - 30 + "px",
                    top: t() + a.clientY + vb + "px"
                });
                if (hb) for (var h = L.length,
                b = 0; b < h; b++) if (parseInt(L[b].getAttribute("toolid")) == k) L[b].onclick(a)
            }
            f.offsetLeft + f.offsetWidth > G && c(f, {
                left: G + gb - e - f.offsetWidth + "px"
            });
            f.offsetLeft < 0 && c(f, {
                left: "0"
            });
        } else {
            c(f, {
                display: "none"
            });
            c(d, {
                display: "none"
            })
        }
    });
    var D = {};
    d.onresize = function() {
        D[k] = [d.offsetWidth, d.offsetHeight, d.offsetLeft, d.offsetTop - t()]
    };
    a(f, "click",
    function(a) {
        j(a)
    });
    a(f, "mousedown",
    function(a) {
        j(a)
    });
    a(f, "mouseup",
    function(a) {
        j(a)

    })
})()