document.addEventListener('click', function (event) { // 使用 async 声明异步函数
    // 获取点击事件的目标元素
    let target = event.target;
    // 验证目标是否是 <a> 标签内的特定 <img> 标签
    if (target.tagName === 'IMG' && target.src === 'https://ziyuan.guwendao.net/siteimg/speak-er.png') {
        if (getCookie('gsw2017user') == null) {
            window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
        } else {
            if (!checkSvip()) {
                addEventListenerAudio();
                if (!getPlayShowPay("langsong")) {
                    // 阻止默认行为
                    event.preventDefault();
                    //弹窗
                    showlayuiPay("播放");
                }
            }
        }
    }

    if (target.tagName === 'IMG' && target.src === 'https://ziyuan.guwendao.net/siteimg/yin-pic2.png') {
        if (getCookie('gsw2017user') == null) {
            window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
        } else {
            //更新用户信息
            if (!checkSvip()) {
                if (!getPlayShowPay("pinyin")) {
                    var matches = target.getAttribute('onclick').match(/OnPinyin\w*\('([^']+)','([^']+)'\)/);
                    if (matches && matches.length === 3) {
                        var param1 = matches[1]; // 第一个参数值
                        var param2 = matches[2]; // 第二个参数值
                        target.src = "https://ziyuan.guwendao.net/siteimg/yin-pic.png";
                        target.alt = "拼音";
                        $.ajax({
                            url: "/nocdn/ajaxshiwencont230427.aspx?id=" + param2 + "&value=cont",
                            type: 'get',
                            async: false,//必须加这个属性，不然先后顺序读取Cookie会读取到没有更新的值
                            contentType: 'application/x-www-form-urlencoded',
                            success: function (response) {
                                document.getElementById("zhengwen" + param1).innerHTML = response;
                            }
                        });
                    }
                    //弹窗
                    showlayuiPay("拼音");
                }
            }
        }
    }
});

//监听播放器播放
function addEventListenerAudio() {
    let maxPayTime = 1800;
    setTimeout(function () {
        var audios = document.querySelectorAll('audio');
        // 播放时间更新处理函数
        function timeUpdateListener() {
            if ((this.currentTime >= maxPayTime) && !this.hasShownPopup) {
                this.pause();
                this.hasShownPopup = true;
                this.currentTime = maxPayTime;
                // 移除事件监听器
                this.removeEventListener('timeupdate', timeUpdateListener);
                showlayuiPay("播放时长");
            }
        }
        // 播放处理函数
        function playListener() {
            if (!checkSvip()) {
                // 重新添加 timeupdate 事件监听器
                this.addEventListener('timeupdate', timeUpdateListener);
                this.hasShownPopup = false;
            }
        }

        for (let audio of audios) {
            audio.hasShownPopup = false;

            // 播放时间更新
            audio.addEventListener('timeupdate', timeUpdateListener);

            // 当音频重新播放时，重置标志位
            audio.addEventListener('play', playListener);
        }
    }, 10); // 延迟加载
}

function getUserInfo() {
    //使用new Promise才能调用方才能接受返回值 
    return new Promise((resolve, reject) => {
        // 发送AJAX请求
        $.ajax({
            url: "/pay/getUserInfo.aspx",
            type: 'get',
            async: false,//必须加这个属性，不然先后顺序读取Cookie会读取到没有更新的值
            contentType: 'application/x-www-form-urlencoded',
            success: function (response) {
                // 如果请求成功，解析promise
                if (response == 'ok') {
                    resolve(true);
                } else {
                    window.parent.window.location.href = "/user/login.aspx?from=" + encodeURIComponent(window.location.href);
                    resolve(false);
                }
            },
            error: function (xhr, status, error) {
                // 处理请求失败
                console.error('获取用户异常:', status);
                reject(error);
            }
        });
    });
}

//验证是否符合弹窗条件
function getPlayShowPay(showType) {
    var userArr = getCookie('gsw2017user').split('|');
    if (getCookie('userPlay') != null) {
        var playArr = getCookie('userPlay').split('|');
        if (playArr.length >= 3) {
            var intValue = parseInt(playArr[1]);
            var intPinyinValue = parseInt(playArr[2]);
            if (showType === "langsong") {
                intValue = intValue + 1;
            }
            else if (showType === "pinyin") {
                intPinyinValue = intPinyinValue + 1;
            }
            //console.log("播放次数：" + intValue);
            //console.log("拼音次数：" + intPinyinValue);
            if (intValue > 10 || intPinyinValue > 10) {
                return false;
            } else {
                setCookie("userPlay", userArr[0] + "|" + intValue + "|" + intPinyinValue, 12, "gushiwen.cn");
                return true;
            }
        }
        //兼容userPlay只有两个值的情况
        else if (playArr.length >= 2) {
            var intValue = parseInt(playArr[1]);
            intValue = intValue + 1;
            if (intValue > 10) {
                return false;
            } else {
                setCookie("userPlay", userArr[0] + "|" + intValue + "|0", 12, "gushiwen.cn");
                return true;
            }
        }
        return false;
    } else {
        if (userArr.length > 0) {
            if (showType === "langsong") {
                setCookie("userPlay", userArr[0] + "|1|0", 12, "gushiwen.cn");
            }
            if (showType === "pinyin") {
                setCookie("userPlay", userArr[0] + "|0|1", 12, "gushiwen.cn");
            }
        }
        return true;
    }
}

function setCookie(name, value, hour, domain) {
    var exp = new Date();
    exp.setTime(exp.getTime() + hour * 60 * 60 * 1000);
    const domainStr = domain ? `; domain=${domain}` : "";
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;" + domainStr;
}

function showlayuiPay(type) {
    layui.use('layer', function () {
        var layer = layui.layer;
        // 触发事件，打开弹出页面
        var layerIndex = layer.open({
            type: 2, // 类型：2表示iframe层
            title: false, // 页面标题
            closeBtn: 0, // 关闭按钮：1表示显示
            area: ['800px', '551px'], // 弹出页面的尺寸
            shadeClose: false, // 点击遮罩关闭
            resize: false,//不允许缩放
            content: '/pay/userPay.aspx?type=' + encodeURI(encodeURI(type)),// 弹出页面的URL地址
            success: function (layero, index) {
                // 子页面加载完成后执行的回调函数
                window.addEventListener('message', function handler(event) {
                    // 检查消息内容是否为预期的关闭按钮点击事件
                    if (event.data === 'closeButtonClicked') {
                        // 执行你的操作
                        getUserInfo(); // 更新用户信息
                        layer.close(layerIndex); // 关闭弹出层
                        // 可选：一次性事件监听器，处理后自动移除
                        window.removeEventListener('message', handler);
                    }
                }, { once: true });// { once: true } 选项，事件监听器 handler 只会处理一次 'closeButtonClicked' 消息，之后会自动移除。
            }
        });
    });
}


function checkSvip() {
    getUserInfo();
    var userArr = getCookie('gsw2017user').split('|');
    //vip判断
    if (userArr.length >= 3) {
        var userDate = userArr[2];
        var myDate = new Date(userDate);
        var now = new Date();
        if (myDate >= now) {
            return true;
        }
    }
    //svip判断
    if (userArr.length >= 4) {
        var userDate = userArr[3];
        var myDate = new Date(userDate);
        var now = new Date();
        if (myDate >= now) {
            return true;
        }
    }
    return false;
}
