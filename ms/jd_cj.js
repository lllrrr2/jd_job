/*
临时抽奖
自动预约茅台 执行时间大家自己改下
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#临时抽奖
0 55 9,14,15,17,20 * * ? https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_5_2.js, tag=临时抽奖, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
=================================Loon===================================
[Script]
cron "0 55 9,14,15,17,20 * * ?" script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_5_2.js,tag=临时抽奖
===================================Surge================================
临时抽奖 = type=cron,cronexp="0 55 9,14,15,17,20 * * ?",wake-system=1,timeout=3600,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_5_2.js
====================================小火箭=============================
临时抽奖 = type=cron,script-path=https://github.com/JDWXX/jd_job/blob/master/ms/jd_jdjsb_5_2.js, cronexpr="0 55 9,14,15,17,20 * * ?", timeout=3600, enable=true
 */
const $ = new Env('临时抽奖');
var _0xods='jsjiami.com.v6',_0xods_=['_0xods'],_0x2e21=[_0xods,'\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73','\x6e\x6f\x64\x65\x2d\x66\x65\x74\x63\x68','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x65\x6e\x76','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x67\x65\x74\x64\x61\x74\x61','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x6d\x61\x70','\x63\x6f\x6f\x6b\x69\x65','\x66\x69\x6c\x74\x65\x72','\x6d\x73\x67','\x6e\x61\x6d\x65','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x6c\x65\x6e\x67\x74\x68','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548','\u4eac\u4e1c\u8d26\u53f7','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x62\x61\x62\x65\x6c\x47\x65\x74\x4c\x6f\x74\x74\x65\x72\x79','\x2a\x2f\x2a','\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x65\x6d\x70\x74\x79','\x63\x6f\x72\x73','\x73\x61\x6d\x65\x2d\x73\x69\x74\x65','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x70\x72\x6f\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f','\x73\x74\x72\x69\x63\x74\x2d\x6f\x72\x69\x67\x69\x6e\x2d\x77\x68\x65\x6e\x2d\x63\x72\x6f\x73\x73\x2d\x6f\x72\x69\x67\x69\x6e','\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x65\x6e\x41\x77\x61\x72\x64\x4b\x25\x32\x32\x25\x33\x41\x25\x32\x32\x6c\x74\x76\x54\x4a\x25\x32\x46\x57\x59\x46\x50\x5a\x63\x75\x57\x49\x57\x48\x43\x41\x6a\x52\x37\x44\x6f\x58\x5a\x70\x52\x51\x71\x51\x4f\x6f\x36\x66\x41\x79\x47\x71\x36\x4b\x69\x6a\x51\x49\x53\x58\x31\x64\x43\x50\x6d\x72\x4e\x50\x34\x6f\x4a\x55\x6a\x7a\x58\x37\x4d\x72\x54\x77\x42\x62\x33\x35\x25\x32\x42\x35\x50\x25\x32\x42\x4f\x25\x35\x43\x6e\x46\x6c\x53\x79\x43\x79\x64\x41\x61\x46\x45\x71\x46\x36\x25\x32\x42\x4c\x70\x49\x25\x32\x42\x53\x49\x35\x4c\x7a\x78\x63\x41\x55\x4e\x59\x44\x64\x4a\x38\x4e\x4d\x51\x65\x43\x5a\x34\x41\x44\x48\x51\x4a\x50\x65\x6e\x58\x45\x42\x69\x69\x32\x4e\x70\x50\x74\x45\x66\x48\x56\x4e\x78\x66\x64\x46\x73\x63\x57\x39\x39\x45\x61\x59\x25\x35\x43\x6e\x6c\x39\x4a\x65\x37\x47\x38\x75\x42\x35\x65\x25\x32\x46\x38\x79\x7a\x38\x53\x54\x66\x6a\x4e\x4d\x57\x56\x59\x76\x53\x58\x49\x38\x36\x78\x79\x46\x67\x50\x58\x46\x55\x74\x66\x25\x32\x42\x39\x6a\x31\x66\x52\x58\x51\x4a\x39\x79\x49\x25\x32\x42\x36\x7a\x76\x6d\x66\x62\x56\x53\x6d\x45\x48\x5a\x68\x46\x5a\x50\x25\x32\x46\x39\x53\x43\x43\x25\x32\x46\x25\x35\x43\x6e\x75\x32\x38\x25\x32\x42\x7a\x79\x4d\x79\x78\x4f\x52\x54\x63\x4d\x6a\x43\x50\x53\x50\x6f\x6d\x6e\x45\x33\x70\x52\x56\x64\x69\x4e\x6c\x70\x56\x52\x57\x30\x62\x38\x62\x68\x78\x46\x53\x61\x4d\x62\x32\x64\x5a\x34\x64\x59\x67\x37\x59\x76\x75\x59\x6e\x73\x62\x78\x53\x51\x74\x61\x4e\x53\x32\x6c\x43\x77\x63\x68\x47\x52\x25\x35\x43\x6e\x33\x30\x42\x47\x52\x45\x61\x7a\x6b\x44\x61\x4d\x37\x4a\x62\x59\x56\x4b\x61\x54\x44\x49\x49\x33\x72\x34\x73\x59\x69\x50\x44\x64\x76\x4c\x31\x6b\x39\x48\x59\x73\x66\x48\x62\x43\x67\x52\x73\x6d\x25\x32\x46\x44\x4e\x36\x36\x66\x69\x73\x39\x6d\x63\x61\x61\x78\x56\x64\x70\x46\x49\x66\x6c\x33\x78\x71\x71\x76\x42\x46\x25\x35\x43\x6e\x45\x48\x4f\x46\x6d\x58\x5a\x36\x33\x6b\x42\x35\x44\x54\x49\x25\x33\x44\x5f\x62\x61\x62\x65\x6c\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x77\x61\x72\x64\x53\x6f\x75\x72\x63\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x72\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x37\x42\x25\x35\x43\x25\x32\x32\x62\x6f\x72\x64\x25\x35\x43\x25\x32\x32\x25\x33\x41\x25\x35\x43\x25\x32\x32\x30\x25\x35\x43\x25\x32\x32\x25\x32\x43\x25\x35\x43\x25\x32\x32\x66\x6e\x6f\x25\x35\x43\x25\x32\x32\x25\x33\x41\x25\x35\x43\x25\x32\x32\x30\x2d\x30\x2d\x32\x25\x35\x43\x25\x32\x32\x25\x32\x43\x25\x35\x43\x25\x32\x32\x6d\x69\x64\x25\x35\x43\x25\x32\x32\x25\x33\x41\x25\x35\x43\x25\x32\x32\x37\x33\x32\x34\x35\x31\x37\x31\x25\x35\x43\x25\x32\x32\x25\x32\x43\x25\x35\x43\x25\x32\x32\x62\x69\x32\x25\x35\x43\x25\x32\x32\x25\x33\x41\x25\x35\x43\x25\x32\x32\x32\x25\x35\x43\x25\x32\x32\x25\x32\x43\x25\x35\x43\x25\x32\x32\x62\x69\x64\x25\x35\x43\x25\x32\x32\x25\x33\x41\x25\x35\x43\x25\x32\x32\x30\x25\x35\x43\x25\x32\x32\x25\x32\x43\x25\x35\x43\x25\x32\x32\x61\x69\x64\x25\x35\x43\x25\x32\x32\x25\x33\x41\x25\x35\x43\x25\x32\x32\x30\x31\x31\x37\x37\x34\x30\x38\x25\x35\x43\x25\x32\x32\x25\x37\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x65\x6e\x63\x72\x79\x70\x74\x50\x72\x6f\x6a\x65\x63\x74\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x33\x4a\x45\x41\x37\x42\x45\x4b\x6a\x38\x63\x36\x79\x67\x67\x73\x48\x65\x34\x32\x6a\x53\x66\x69\x62\x52\x73\x48\x25\x32\x32\x25\x32\x43\x25\x32\x32\x65\x6e\x63\x72\x79\x70\x74\x41\x73\x73\x69\x67\x6e\x6d\x65\x6e\x74\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x68\x34\x46\x69\x38\x6a\x7a\x62\x75\x76\x45\x31\x45\x54\x50\x48\x63\x6a\x36\x52\x35\x68\x4d\x34\x58\x6a\x48\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x75\x74\x68\x54\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x72\x69\x73\x6b\x50\x61\x72\x61\x6d\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x70\x6c\x61\x74\x66\x6f\x72\x6d\x25\x32\x32\x25\x33\x41\x25\x32\x32\x33\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x72\x67\x54\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x70\x65\x6e\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2d\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x70\x61\x67\x65\x43\x6c\x69\x63\x6b\x4b\x65\x79\x25\x32\x32\x25\x33\x41\x25\x32\x32\x42\x61\x62\x65\x6c\x5f\x57\x68\x65\x65\x6c\x53\x75\x72\x66\x25\x32\x32\x25\x32\x43\x25\x32\x32\x65\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x51\x4c\x59\x54\x56\x4c\x45\x32\x5a\x50\x4a\x4f\x49\x54\x5a\x43\x47\x41\x42\x44\x43\x36\x4b\x43\x4f\x34\x50\x48\x48\x5a\x4b\x48\x52\x43\x4f\x49\x43\x37\x50\x41\x34\x41\x48\x33\x56\x49\x37\x33\x4d\x4a\x4c\x43\x49\x35\x56\x47\x52\x42\x4c\x33\x4f\x5a\x55\x42\x4f\x4b\x51\x56\x57\x56\x57\x54\x49\x45\x49\x32\x42\x50\x48\x59\x37\x37\x32\x47\x42\x4b\x33\x42\x42\x59\x25\x32\x32\x25\x32\x43\x25\x32\x32\x66\x70\x25\x32\x32\x25\x33\x41\x25\x32\x32\x62\x62\x38\x31\x30\x37\x64\x31\x34\x35\x64\x38\x31\x65\x33\x61\x63\x35\x62\x39\x64\x65\x63\x33\x65\x34\x65\x38\x38\x62\x38\x39\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x68\x73\x68\x73\x68\x66\x70\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x31\x63\x65\x39\x33\x66\x36\x39\x38\x37\x63\x35\x66\x31\x32\x65\x31\x31\x39\x31\x62\x61\x36\x61\x35\x65\x64\x64\x65\x65\x63\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x68\x73\x68\x73\x68\x66\x70\x61\x25\x32\x32\x25\x33\x41\x25\x32\x32\x35\x30\x61\x34\x64\x66\x61\x30\x2d\x35\x31\x66\x34\x2d\x34\x61\x66\x36\x2d\x35\x64\x63\x63\x2d\x66\x38\x32\x38\x36\x63\x38\x65\x62\x31\x63\x61\x2d\x31\x36\x34\x30\x38\x34\x30\x35\x35\x36\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x68\x73\x68\x73\x68\x66\x70\x62\x25\x32\x32\x25\x33\x41\x25\x32\x32\x64\x53\x61\x79\x4f\x4d\x7a\x41\x7a\x33\x36\x33\x74\x6f\x30\x6d\x54\x33\x6d\x6c\x67\x6e\x41\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x69\x6c\x64\x41\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6c\x25\x32\x32\x25\x33\x41\x25\x32\x32\x68\x74\x74\x70\x73\x25\x32\x35\x33\x41\x25\x32\x35\x32\x46\x25\x32\x35\x32\x46\x70\x72\x6f\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x25\x32\x35\x32\x46\x6d\x61\x6c\x6c\x25\x32\x35\x32\x46\x61\x63\x74\x69\x76\x65\x25\x32\x35\x32\x46\x47\x77\x78\x4b\x39\x41\x42\x71\x37\x55\x46\x77\x63\x4a\x70\x6f\x61\x59\x51\x43\x50\x71\x6a\x38\x5a\x58\x39\x25\x32\x35\x32\x46\x69\x6e\x64\x65\x78\x2e\x68\x74\x6d\x6c\x25\x32\x35\x33\x46\x50\x54\x41\x47\x25\x32\x35\x33\x44\x31\x37\x30\x35\x33\x2e\x31\x2e\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x41\x72\x65\x61\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2d\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x6c\x69\x65\x6e\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2d\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2d\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x75\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2d\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6f\x73\x56\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2d\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x62\x72\x61\x6e\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2d\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6d\x6f\x64\x65\x6c\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2d\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6e\x65\x74\x77\x6f\x72\x6b\x54\x79\x70\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x2d\x31\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6a\x64\x61\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x32\x32\x32\x37\x30\x36\x37\x32\x2e\x31\x36\x34\x34\x39\x31\x34\x37\x34\x32\x33\x39\x30\x36\x33\x35\x31\x39\x37\x34\x37\x2e\x31\x36\x34\x34\x39\x31\x34\x37\x34\x32\x2e\x31\x36\x34\x34\x39\x31\x34\x37\x34\x32\x2e\x31\x36\x34\x34\x39\x32\x39\x37\x30\x33\x2e\x32\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x6d\x69\x74\x65\x6d\x41\x64\x64\x72\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x67\x65\x6f\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x6c\x6e\x67\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6c\x61\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x61\x64\x64\x72\x65\x73\x73\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x70\x6f\x73\x4c\x6e\x67\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x70\x6f\x73\x4c\x61\x74\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x66\x6f\x63\x75\x73\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x6e\x6e\x65\x72\x41\x6e\x63\x68\x6f\x72\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x32\x2e\x30\x25\x32\x32\x25\x37\x44\x26\x73\x63\x72\x65\x65\x6e\x3d\x38\x32\x38\x2a\x31\x37\x39\x32\x26\x63\x6c\x69\x65\x6e\x74\x3d\x77\x68\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x2e\x30\x2e\x30\x26\x73\x69\x64\x3d\x26\x75\x75\x69\x64\x3d\x31\x36\x34\x34\x39\x31\x34\x37\x34\x32\x33\x39\x30\x36\x33\x35\x31\x39\x37\x34\x37\x26\x61\x72\x65\x61\x3d','\x50\x4f\x53\x54','\x74\x68\x65\x6e','\x6a\x73\x6f\x6e','\x63\x61\x74\x63\x68','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\x6a\x73\x6a\x4a\x45\x6b\x47\x69\x61\x6d\x62\x69\x58\x54\x2e\x63\x70\x6f\x6b\x6d\x2e\x76\x36\x7a\x67\x6e\x57\x5a\x62\x74\x3d\x3d'];function _0x16c3(_0x4dffaf,_0x56b4b8){_0x4dffaf=~~'0x'['concat'](_0x4dffaf['slice'](0x0));var _0x305089=_0x2e21[_0x4dffaf];return _0x305089;};(function(_0x28c090,_0x168440){var _0x187672=0x0;for(_0x168440=_0x28c090['shift'](_0x187672>>0x2);_0x168440&&_0x168440!==(_0x28c090['pop'](_0x187672>>0x3)+'')['replace'](/[JEkGbXTpkzgnWZbt=]/g,'');_0x187672++){_0x187672=_0x187672^0xd1217;}}(_0x2e21,_0x16c3));const notify=$[_0x16c3('0')]()?require(_0x16c3('1')):'';const jdCookieNode=$[_0x16c3('0')]()?require(_0x16c3('2')):'';const fetch=require(_0x16c3('3'));let cookiesArr=[],cookie='',message;if($[_0x16c3('0')]()){Object[_0x16c3('4')](jdCookieNode)[_0x16c3('5')](_0x9e26d4=>{cookiesArr[_0x16c3('6')](jdCookieNode[_0x9e26d4]);});if(process[_0x16c3('7')][_0x16c3('8')]&&process[_0x16c3('7')][_0x16c3('8')]===_0x16c3('9'))console[_0x16c3('a')]=()=>{};}else{cookiesArr=[$[_0x16c3('b')](_0x16c3('c')),$[_0x16c3('b')](_0x16c3('d')),...jsonParse($[_0x16c3('b')](_0x16c3('e'))||'\x5b\x5d')[_0x16c3('f')](_0x2760a0=>_0x2760a0[_0x16c3('10')])][_0x16c3('11')](_0x3acab7=>!!_0x3acab7);}!(async()=>{if(!cookiesArr[0x0]){$[_0x16c3('12')]($[_0x16c3('13')],_0x16c3('14'),_0x16c3('15'),{'open-url':_0x16c3('15')});return;}for(let _0x333f76=0x0;_0x333f76<0x1;_0x333f76++){for(let _0x509e33=0x0;_0x509e33<cookiesArr[_0x16c3('16')];_0x509e33++){if(cookiesArr[_0x509e33]){cookie=cookiesArr[_0x509e33];$[_0x16c3('17')]=decodeURIComponent(cookie[_0x16c3('18')](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x16c3('18')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x16c3('19')]=_0x509e33+0x1;$[_0x16c3('1a')]=!![];$[_0x16c3('1b')]='';message='';console[_0x16c3('a')](_0x16c3('1c')+$[_0x16c3('19')]+'\u3011'+($[_0x16c3('1b')]||$[_0x16c3('17')])+_0x16c3('1d'));if(!$[_0x16c3('1a')]){$[_0x16c3('12')]($[_0x16c3('13')],_0x16c3('1e'),_0x16c3('1f')+$[_0x16c3('19')]+'\x20'+($[_0x16c3('1b')]||$[_0x16c3('17')])+_0x16c3('20'),{'open-url':_0x16c3('15')});if($[_0x16c3('0')]()){await notify[_0x16c3('21')]($[_0x16c3('13')]+_0x16c3('22')+$[_0x16c3('17')],_0x16c3('1f')+$[_0x16c3('19')]+'\x20'+$[_0x16c3('17')]+_0x16c3('23'));}continue;}try{await fetch(_0x16c3('24'),{'headers':{'accept':_0x16c3('25'),'accept-language':_0x16c3('26'),'content-type':_0x16c3('27'),'sec-fetch-dest':_0x16c3('28'),'sec-fetch-mode':_0x16c3('29'),'sec-fetch-site':_0x16c3('2a'),'cookie':cookie,'Referer':_0x16c3('2b'),'Referrer-Policy':_0x16c3('2c')},'body':_0x16c3('2d'),'method':_0x16c3('2e')})[_0x16c3('2f')](_0x29a25b=>_0x29a25b[_0x16c3('30')]())[_0x16c3('2f')](_0xf6b6ff=>{console[_0x16c3('a')](_0xf6b6ff);});}catch(_0x24d669){}}}await sleep(0x32);}})()[_0x16c3('31')](_0x436509=>{$[_0x16c3('a')]('','\u274c\x20'+$[_0x16c3('13')]+_0x16c3('32')+_0x436509+'\x21','');})[_0x16c3('33')](()=>{$[_0x16c3('34')]();});;_0xods='jsjiami.com.v6';
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
