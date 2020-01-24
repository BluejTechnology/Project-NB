export function setWechat( {url,title,img_url,desc}=config ) {
	if (navigator.userAgent.match(/MicroMessenger/i) == "micromessenger") {
		// 转发朋友圈
		WeixinJSBridge.on('menu:share:timeline', function(e) {
		let data = {
			img_url: img_url,
			img_width: '120',
			img_height: '120',
			link: url,
			// desc这个属性要加上，虽然不会显示，但是不加暂时会导致无法转发至朋友圈，
			desc: desc,
			title: title
		};
		WeixinJSBridge.invoke('shareTimeline', data, function(res) {
			WeixinJSBridge.log(res.err_msg);
			MtaH5.clickStat("global_share", {
			uuid: m_getCookie("UUID")
			});
		});
		});
		// 同步到微博
		WeixinJSBridge.on('menu:share:weibo', function() {
		WeixinJSBridge.invoke(
			'shareWeibo',
			{
			content: title,
			url: url
			},
			function(res) {
			WeixinJSBridge.log(res.err_msg);
			MtaH5.clickStat("global_share", {
				uuid: m_getCookie("UUID")
			});
			}
		);
		});
		// 分享给朋友
		WeixinJSBridge.on('menu:share:appmessage', function(argv) {
		WeixinJSBridge.invoke(
			'sendAppMessage',
			{
			img_url: img_url,
			img_width: '120',
			img_height: '120',
			link: url,
			desc: desc,
			title: title
			},
			function(res) {
			WeixinJSBridge.log(res.err_msg);
			MtaH5.clickStat("global_share", {
				uuid: m_getCookie("UUID")
			});
			}
		);

		});
	}
}

export function setQQ( {url,title,img_url,desc}=config ) {
	// 转发朋友圈
	//这里做一层手Q的分享设置
	if (mqq.device.isMobileQQ()) {
		// mqq.data.setShareInfo({
		// 	share_url:url,
		// 	title:title,
		// 	desc:desc,
		// 	image_url:img_url
    // })
      mqq.ui.setOnShareHandler(function(type) {
        mqq.ui.shareMessage(
          {
            title: title,
            desc: desc,
            share_type: type,
            back: true,
            image_url: img_url,
            imageUrl: img_url,
            share_url: url,
            sourceName: window.sourceName,
            puin: 0,
            src_iconUrl: img_url
          },
          function(res) {
            if (res.retCode === 0) {
              // mqq.ui.popBack();
            }
            MtaH5.clickStat("global_share", {
              uuid: m_getCookie("UUID")
            });
          }
        );
      });

	}
}
