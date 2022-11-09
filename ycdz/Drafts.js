/******************************

脚本功能：Drafts——解锁订阅
下载地址：https://is.gd/jpkxDc
软件版本：33.0.2
脚本作者：彭于晏💞
更新时间：2022-10-20
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/backend\.getdrafts\.com\/api\/v1\/verification\/verify_receipt url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/Drafts.js

[mitm] 

hostname = backend.getdrafts.com

*******************************/


var obj = JSON.parse($response.body);

obj= {
  "active_expires_at" : "9999-01-01T00:00:00Z",
  "is_subscription_active" : true,
  "active_subscription_type" : "premium",
  "is_blocked" : false
};

$done({body: JSON.stringify(obj)});
