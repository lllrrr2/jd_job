/*
6.6-6.20 盛启 618 好物带回家
新增开卡脚本，一次性脚本
第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本
————————————————
入口：[ 6.6-6.20 盛启 618 好物带回家]
请求太频繁会被黑ip
过10分钟再执行
cron:1 12 7-20 6 *
============Quantumultx===============
[task_local]
#6.6-6.20 盛启 618 好物带回家
1 12 7-20 6 * jd_opencardL177.js, tag=6.6-6.20 盛启 618 好物带回家, enabled=true
*/

const $ = new Env('6.6-6.20 盛启 618 好物带回家')
var _0xodB = 'jsjiami.com.v6',
    _0xodB_ = ['‮_0xodB'],
    _0x4228 = [_0xodB, 'wpfDnsOJBFrDocO+QwY=', 'w6gUw4bDhzjCoQ==', 'FMKcNDM=', 'wrlhGC7DogI=', 'ShtkwrXDjC1gaBvDhEjCjQfDrg==', 'B8Omw5rCuGvDuEDDvmJvJMK6wp3CtA==', 'wprDjMO6BA==', 'GBbCsMOdHsK8QMOjQAAgw5BKVMOGw68=', 'wqshw57CkijCiMK9WnvCjcO1w5c=', 'wr5awozDjHQ=', 'Gm4LOHQ=', 'w73ClGtgMw==', 'OzTCk2N7w67Dgw5P', 'TSZtw6Y=', 'wqMxDArCk8K2wrw0wr0=', '5b6n5YmC6Le75Y2P5beW6YKu6K2+Hw==', 'WMKdwrPCpFI=', 'wpx+BSjDrQ==', 'w6xkw5rDuCw=', 'FyjDtMO+PjXDkA==', 'QMOOBMOLSMK8a8Krw44WdGLChQ==', 'T3IFw4w2e8Os', 'Hg09woPCgMO2IXo=', 'VCJgw6XDjcKiMsOr', 'Y1bChsO6w60TH8Of', '5YeM5LyP6I2t5b6YIA==', 'wprDhMO9BljDscOVWTERw4bDlcOBw7k=', 'OEJAMyHCs8KcYcKa', 'DGd9Bhc=', 'BhrCucOaDsKnTcOjQQ==', 'PRnCmMOgNA==', 'c8KhZMOHw40=', 'w6l9BsOYwrts', 'w5dZw5HCi8KNAQ==', 'NsKxQ8KrCQ==', 'w7rCrm7CisOv', 'PzvDhMOAJQ==', 'wqlAbyXChw==', 'e8Kuw4fDmGc=', 'Y0Z+OCs=', 'w7nCicOMw6wSJ8OhVsKRw7nDrMOy', 'IjjDvsOKDQ==', 'VxFXw7bDvQ==', 'P8OhLxA=', 'EBrDpMO0Jg==', 'w5Jcw4HCuQ==', 'I8O7IijClMOuXHDDhw==', 'a8KYw6HDjUQ=', 'LMOCDTU=', 'w7N7NsObwrp9Uys=', 'dcKPSH0=', 'w7LCksOdw6gOC8OpQA==', 'DcOkw43CuVrDlFfDqUJ6IsKr', 'FQHCrsOCKsKDTMO1XQUUw4E=', 'QS51w6TDqMK4', 'wpF9wq/Dl1Zjw6xWECRQw4I=', 'w7F9Mg==', 'wppewr/DokY=', 'w4sewpI=', 'ZQ4J', 'NcOsMzXCg8OXaWrDmsKQbMKQ', 'A2clNWbCs8KP', 'ZcKxw4LDuUzDlns=', 'asK7w4LDm0HDg30=', 'DWw1NH/CiMKI', 'w5FYw4HCvMKHAMK4', 'J8OrAA==', 'Ty51w7PCk3Y=', 'aFXCtMKR', 'w7poPMOAw7g8WivCpWjDihxXBEtKAA==', 'RBtxwrfDpi9zeCHDn0fDlgrCsBwawqTCqSMdWsKuLcOZw77DucKBc8KCB8OqwrNy', 'w75XwqJrbg==', 'aBJNw4/CqUdLwr0Lw6wOwrs=', 'w6zCocOuU8K8w794wpvDuMKiAS3Cn8KLwow/', 'PcOkPizDjA==', 'WmhaKCo=', 'w4VfGcO4wqBoThzCpnXDng1BXA==', 'w7l4worCn8Oqw7PCtA==', 'WcO9w6hfNQ==', 'OiXCsnN2', 'GsOxLz/DvA==', 'd8OZEMOBSMKTdg==', 'wrrDpcKGwoIUPsK9bx8IwonDmcOgPCgCw4cTB8KcY0hQwqFwwrUABBrCtX4mwpzDrsOBw7A+wrd+wroXdj3CvcKFY8OTw53DrMO7OMORfGQLw4TChy8fEkzDvwkcwrfDr8O4FVI=', 'N8KdVH3DvyvCtsK5wpjDi8Ow', 'IcOUHGjDqcO6Ei3DhA==', 'w5g8w5g=', 'woFhwrnDnUJHw6dABw==', '5q2pwrfDhuW1jeiii+mbp+WIqu+9nuiukOi9rQAC5YqU6ZCB5ZC55YWK5omH6KKN6ISA5p6EHg==', 'ZcKqw4LDj1PCjTN9C8OQVUjCv8O3RMKxDsKoacOefkwJw5fCl8OWKcKzw4U1ehzCulIAYylJwoQ2wpfClMOxwp3DusO5w4AzW2xewrIew7/Dk8KSAsKqwpgLcsOqA8Krw6ItwrNFBA==', 'WXnCk8Ksw7AoXj/CsMKt', 'w77CucO/TcKww4lswobDtQ==', 'PcOoLhPChA==', 'UWMXw4sib8OKR1DDiA==', 'w7bCiFhyFQ==', 'X2bCnUZGwo1L', 'w6R5wr3CjsOg', 'HhLCscOI', 'BQhuwrTDpCV3LAnDoGDorI7msLDlpqzotY7vvaHorKTmoYTmnqDnvKPot4fphI7or5U=', 'SAp1wrjDpw==', 'w713wprCmcO6', 'w6cSw4XDuCfCuBhHwrHCjyQ=', '5rWp5YiU5baP57uJ5p+T', 'QUlQHCo=', 'w7fCk1hTKsKD', 'QWFZISY=', 'acOfw4o+O8KATX7CrsO2', 'wofDhsOfMUM=', 'el4ww5EG', 'TQ5gwr/Dqj5h', 'w4VYw4HDtcKFG8K2PsOHwps=', 'M8OlOhXClztk', 'eMOIw4lcNg==', 'UcOOw6diFw==', 'wpIvFCPCqw==', 'L8KqRsK4Bw==', 'fX/CkERG', 'PHdmExU=', 'w6Uww4VVw4FQwok=', 'PsOTGg==', 'w4Rwwql8ezVn', 'wrdawpXDolA=', 'PsKnZcKTGw==', 'TGjCjsKo', 'ccKUScOLw69fwrzCug0SeQbCgw==', 'OCjDv8OCOA==', 'wq/Dm2bCrcK/wojDkcODBUp5w58dw6LDnA==', 'Vw5xwrfDri93', 'XsKlwpDCkms=', 'UcK0ScO1w4RkwpDCmg0tUzTDm2nChQ==', 'KsOzw4fCmU8=', 'RiJRw7DDnQ==', 'w7/CtMOtSsK5w6g=', 'woJqwrPDnEFcw4VMEDE=', 'wrN2Dg/DmBFrLEA=', 'w6wnw5dRw7NUwoNRJA==', 'wrZ5dzHCgQ==', 'fsK9w5nDjUU=', 'TDVrw6jChElxwpsrw4g7w6M=', 'wpZjfyHCkg==', 'wqkmCwjCicK6', 'K8OLGCbDtTo=', 'wqMvCgDCjw==', 'w5MHw53DnBQ=', 'CwU1wpPCpsO1', 'w7LCq2zCqcOh', 'NsOyLjXCgw==', 'QsKhW2rDtA==', 'GsO3w5HCskfDtA==', 'HEQNB1g=', 'KMO0KRjCnC4=', '6K+n5YiJ6ZmK5oeJ5Zy1RsKZw4NQZui+gOWEmeajnOS9puaUoOWGqeWvn8O25biC6K2X6YCw6L+v6Iam5p2R5Yy46I6T5Y+MDMKQwrNHV8K7', 'w5pewpZpVQ==', 'MsKlBAE5', 'wpPDoEvCisKV', 'HBzCuw==', 'MDXCnQ==', 'w70hHDDCmw==', 'ccKUwqbConhiw4bCiigmJ0nCrMK/IRU=', 'wpx+TgLCjA==', 'KUo0Hlo=', 'w5Upw5PDkic=', 'w4tXwpZ7Xw==', 'w4IHwrLCuiE=', 'O8KZQsKNcsOyDFk6VsK4LF1DwqTDs2w=', 'IcOodjLCvGVtw6lnKxRvEgBNPTLDpcOzIQvCnsKFDcKCG8OJIA/DsGPCswjCksKz', 'eV5IBxAzw5LDhcOVeMOuwrzCqCFwdX3CucKvwq48MMObwrxSG3jDoHlVw7BDFh/DscO0XWoLw61jwpfDjXtgw70iw77Cr8KFGVIBw4XDiBQaw4gBHTlpw77DhSUGwqrDhcKtKsKzw4wrQsKJHHVxCTFkw5N2w6gfccOsw7LDiB9BDkhZNcKxwqTDmMK0ecOHCMKYFsO9UVLDk8OWwrtFAsKIwpHDocKEEsOMw4HDjQ==', 'BsKILjML', 'U8Kda3jDvg==', 'OwPCu0Ng', 'Y8O/w5JjDg==', 'w7EDw7jDoSE=', 'SsOeHMOBWcKC', 'w4fChWvCgMO8', 'woPDuMKAwqEm', 'L8OMPATCmQ==', 'w4AQwo3CnBw=', 'eiVVw4PDqA==', 'w4srw7PDuDU=', 'aFrCjsOpw5US', 'EMOpGDnDkQ==', 'KcOiEcK4w64p', 'DGUuP2w=', 'bQZbw4XClw==', 'Y8KewqrCtnxnwoLDkmx8ZwXDk8Os', 'CUlgwrjDuyVkZTzDiWDCnVDCpw==', 'AW/DscOoMTbDkMOnw4LCiWHCt8Od', 'wqHDs8O9V8K0w7J3worDvcOvVTbDhcOOwp4=', 'WsKmwo3DpBjCrQPCqAAtccO4w5vDs3vDicKDw5ocw5tPJsO1CMOZPDAzIMOHQAJ7aDhiwo0fwpXDncOYw7bDtUB0fsK1P8OKGVrCgsKJw7k+wpxDwpbDgcOBZ8K1fQxhwrERw5x6w47DqMK7AcOCw6kUwoHCpzDCl8O0woTDg8KrwqDCkmhlVMKrwpvCicO8wrjDuMO0PsOBXB/ClkPDl1nClcK2DMOXwpXDhn7CucKWEWHDqBfCrcKOaUsLEMOAw7Row5Qnw7ISLQ3Cq1F7KwlKwq/Dg8KIwoPCuMOaPm0KaMKbasOOwqzDmSJJw5odw4bCgcO4w6UxwpJkw7VHwprDisKJwrnCuMKuwrDCoMOGIiHCgcKLd8KIIWzClMOow63CocKHOjXCqMKHw6pWS8Ofwo/DiMKpwqPDssKWd8Odwq7ClMKcw5HCrErCi2prwonCmBVdw5sCw69mTkzDsMOlw7jClsKMByrCuMKaFsKHCXhHwph+wqfDgzIdXsOGwos=', 'w4klwoPCkAU=', 'J8OtGxrDnw==', 'wrTDpMOEIVE=', 'w7vCnsOK', 'w5vCgsOvZsKt', 'OAXCjsOhAg==', 'K8Oaw7HCpEI=', 'Kz7DgcOpGg==', 'w7BzIcOTwrw=', 'PcO/NTnCmQ==', 'w516wpVtcA==', 'GsObJsKZw7w=', 'wrPDtcOvKXQ=', 'P2IrKXs=', 'w4jCq8Onw6ci', 'BMOOGD7Csw==', 'woRuwq/Di0E=', 'LjPCmWVww7nDvg==', 'J8OvA8K5w446bQ==', 'YU3CksOhw5MwA8OCw5nDvWvCgDc=', 'PcO7MinCkMO9aQ==', 'wozDiMO9EFvDsA==', 'wqJzfjfCrUpOeQ==', 'HSTDocO5FjzDk8O6', 'LFlaKivCiMKTeMKsGMO4HVVq', 'QC5lw77DqsKoGMOtcsOgAsOuMAA=', 'w4UcJRDCjg==', 'w7vCsnXCn8O4wpNkJ8Ojw6PDu8OACQ==', 'FAEowoTCqMO/Ig==', 'MMKMTA==', 'wrTCmFZ4P8KLwoTDuC1bw4p8MwpZUDoCw5VzNsOMchBGN8K6woPDq2fCiQpgfQR7T0XCmzbCgg==', 'VnXCkA==', 'BmYmFWzCjg==', 'JMKAaMKYGg==', 'wpNCworDumw=', 'MSXDncOXOw==', 'PsOOJcKcw44=', 'wqxewps=', 'WsK0f8Ovwow0wp3CkTQ1XSvDmyvCmEbDlQ==', 'SnvDhENkw4BWU8OeWWXDlTTDp8KyMW/CkMOmMlZfwoVEwqESwq8mw6rCp8OZPB8Ew6I=', 'wpbDmcO6FUTCvsKUAhENw5vDjMOCw7vCh8Kja8Kjw4BgEcOHQ8OdET/DtsOC', 'dXXCncKsw6otS2nDjMOnw4AUw4V+A01iUDfDoTfDjsODfD/DrsOKZsKLw6tAVsKRRhBTd1bCowzDnWVPJ24vw5TDiDPDmXnCjn3CpsOGGmZYQihew6LCtsOZL8K6C8OBwpHCl8O3ScKFV2t1QDLDiMKoHHTDmh4KcMODCTgiB8K+ImXDh8KKA8Kbwrokw7t1wovDgcOWwrXCncOmD8KjRGkhWUjDqCnDqcKuw7g=', 'EsOsIDDDpA==', 'w51Fwo9Nfw==', 'w6Mgw7TDsB0=', 'w7wAEQrCrA==', 'E8K0w4nCs0bDvVfDqHh/Z8O0w4o=', 'T8OTH8OKbMKTasKmw4U3VWk=', 'B8KQVMOHUsKXasKsw4UpPjfDgTLDicKZwoHCrz16wqbCg3/DrcO/DMKTBlnCoA3CjMOv', 'bMOpHMKjw4ozfMOxwo8ow5tfworCkMOywrcSNcO2w7bCsFkJw5wawrUNDFHDmMOSAkfDqQkrwpojwqlULsKjw6tSEsK4w6Q=', 'woXDhXDCgcKf', 'w6vChcOKbcKW', 'w7bCmMOpw6At', 'Qg51', 'w6UlMD/CpQ==', 'JcOCDTfDnA==', 'DsOXw7nCt2M=', 'f8KUwq/Co35w', 'AAbDicOnFw==', 'L8KRQsKMMw==', 'KMOyMgDCnw==', 'fMKZwqI=', 'TwZfw6bCvQ==', '5YaR5LyVw6c=', 'wrd/azbCiFA=', 'O8OLFiTDuSvDoMKWw7tkZmMWw7lEEArDiw==', 'w74ww5hCw4VFwq9CM1txwpJHBA==', 'w4duw7DDpzTCr8OvGVfDmsKqWwDDmA==', 'AhbCr8OYNMK6', 'UXTCk8Kgw7QkWTLCisKbwoVYwoh/C11/', 'wrvDv8KGwpcVYcOhNAA7woPDhcKi', 'OlVaPCjCiQ==', 'GhTCncO+PQ==', 'GQDCksOCPMKr', 'C8KTHMOAecKZa8Kpw4kgMmfChg==', 'EBcVwpjCrcO9', 'Zh9aLCrCmcKzY8KLBcOsDQ==', 'VMK9WMOww4Rx', 'AWw4Iw==', 'w7t9J8O1wrV/Vg==', 'K8O1KBk=', 'FR3Cqg==', 'w4w1w67DlRTCkzl5', 'OcKNXQ==', 'w5Jnw7PDpDA=', 'WF5V', 'w45wwq5reyZj', 'woTDpE3CncKRwrfDtQ==', 'w4srKzfCpMOMwq/Ckgo=', 'wr3DgsOhDl7DocOIZyY=', 'wovDrk3Cv8KcwqLDsw==', 'NMO1LzfCnihw', '6I2y5Y6V5Lmo5YmfwqbCs8KRNcK/wpTCiUkwCBvpgb/lhY/mipfoo5DvvYvorK/phpLmloDmiIjoorw=', 'w5Vpw7TCiMKC', '44OC5o2B56eI44Oj6K6Q5YWM6Iyl5Y6WEB3CgsOIwqQwUeeagOaNjOS8heeVnMKkZklFwopk55mV5LqC5Lm756yL5Yuo6I+m5Y6U', 'ecKaSGzDvnTDjMOjwpPDisKswrhsw4XCqgMpwoYfPsKbHg==', 'G8OGJwnCtw==', 'OMOUGiHClg==', 'JBTCicOaLg==', 'N8OvPA==', 'XWDCjg==', 'w753woPCnw==', 'VWnCgA==', 'NcOhNhQ=', 'D8ONODjDlw==', 'Q3QCw5YhdcO9UX3DiQ==', 'w7wlNgrCtQ==', 'wrZyeTHCgXFdf8Og', 'ccOzDMOVcQ==', 'w6Q6w5E=', 'wq8ww5jClCzCrMKsUEHCiA==', 'TsOlw5fCt1rDvGfDr1h/eA==', 'w5QZwpTCiQs2w7bCr0A=', 'YH5IHzc=', 'CcKCw50gS8OXFSPCpsKrDWkcwrxmXl3CqMKpAMOXBsKaw4Y6wqDClHkbw7/Du28=', 'w5Jqw7DDuCc=', 'Vi1Xw5XDtA==', 'IMOdE37Do8OC', 'w7jCrGjCn8O4', 'FsOoHjLCow==', 'QnLCh2RFwoE=', 'w5hjw7HDsCHCpA==', 'GWEgInvCqcKcwpbDqw==', 'R1lTHBkKw4bCg8KE', 'HBbCssOKLMKm', 'w7l4worCn8Oq', 'wrnDgMOtE04=', 'wqcmBAE=', 'HhrCv8OGFsKvRMOj', 'wphgwro=', 'wpTDii3DmsKgw7MhZOW+jeWlu+OCg+S4g+S5pei2juWPsA==', 'A2clNWY=', 'BcOtJCjCv8O7YXw=', 'YMKgWsOgwoV3IsKNw4BQ', 'RwliwonDvA==', 'w4Fcw5zCrA==', 'LCPCvnJv', 'GAcvwpjCu8ONMnzCng==', 'P8OrNRzCncO7aw==', 'Q3QCw5YhdcO9UXHDg8O7', 'wr3DpMKGwrQLZcO1', 'RMKvwo7ChGk=', 'woZdFRXDig==', 'TngR', '5q2Zwqdm5bWt6KCL6ZmE5YuP77+46K6l6L6eDW/lirjpkpjlkrblhqnmi4DoobjohKjmnak=', 'wqxpVizCgEE=', 'w7NzOMOV', 'wrzDsMKfwpc=', 'w7jCqWnCkcOmwrVy', 'dMKZwqvCow==', 'V3kSw5oxdcOnTVA=', 'OMOqNSrCgsKgIzbDgMKcbMOEwovCtsKQJMKtw7LDhsOiZG/DssKDwosnw6kHOkBkQxstV0zCnzolNAQaw4pUJMK6LGF/wpIiwonCs8KhTUsHwp9Jw67DrMOew5IENmQkU1zDosKbHMK2DcOOecKdw5RJw55fU8OqbGHDghd/w5IzwrYzw4LCrsOOw7c9UWU0', 'wrQNwoHDrWDCrVhCw4HCnXM=', 'fsKMVnnDrjo=', 'w6w5wpLCrzc=', 'EBctwrjCq8O+MmbCmcKGw4fDu0Y=', 'wqttbHrCoQ==', 'wrk8w6LCnzA=', '6I6N5Y2sw6VnF8KER3vCmuWmoui0nu+8jA==', '5rSG5Ymm57uF5p+A', '6I+f5Y2Aw6TChkHDt2/lpqvotJTvvJo=', 'ccKVwrHCr2ttwoLDgll6fQjDv8OmbQ==', '6I2g5Y+S5Lmi5YmIw5ATZypKaUfCsUsIwq7pgrnlhYPmiZboopbvvJrorabph5DmlIvmiIXoo4Y=', '5byE5Y2e5Lib5Yiv', '5ram5Yq65aW/54Ob54uS77yQ6K+J56mD5ZON5YaJ6K2+', 'BMKHFxQX', 'I8O3JjTCuMO0', 'K8OmDjXCvQ==', 'w65kwrBcXg==', '5L2o5oCL5Lmb5Lu877+F5Yqz6KOs6buEwpPCl+S4tcKe5Y+b5o+T57uO5Y2a5bKE', 'G8OWJg7CqA==', 'ND/DsMOJOg==', 'XFBBKxI7', 'wp46w4I=', 'w6ZdwoLCoMOY', 'wrMpHArCig==', 'bHXCjMKgw6g=', 'eMOsw4ZkGw==', 'wo/Drl4=', 'wpjDvcK3wpEC', 'w6knMDXCu8OAwpHCr31ywpw=', 'XyRh', '5q+iGMOB5bWj6KO66ZqB5Yma77yy6KyD6LymcRzliarpkpPlkavlhrrmiJvoo5noh5Pmn5QS', 'woRAFhbDvg==', 'w6cQFS3CrA==', 'KQ01', 'CcOsw4jCo1s=', 'OMOvA8K/w4Mp', 'wrcmFhrCkcKm', 'wpEOCzjCrw==', 'wpBuwqnDmQ==', 'QW/CicKIw68lYyvCmMKuwpVhwp9f', 'RjBLw5TCtA==', 'wq8nw5jCjw7CqsKtcWHCjcO8w5U=', 'w6w0w4JH', 'wodiVSrClw==', 'w7VkwpzClcOgw7HCt8O/woZcEiE=', 'JMOMHg==', 'w74VwqTCsxc=', 'ZcKUYMOGw5Q=', 'w5Exw6duw5k=', 'wrlcbGM=', 'w4gBwpDClSIKw7DCsg==', 'wrkpw5TCtQ4=', 'V8ODw5d9HsKA', 'BkJaKBM=', 'ESTCmFJB', 'HMO8Iw7CpQ==', 'w6QrIw==', 'Yz5jw7TCvw==', 'wrPDvcKewr0XYcO8AxIAwok=', 'PcOMGHTDj8OOFSDDs8KNw4zDkXQC', 'OsOsNz7Cgix5w4I9KE0=', 'w7x5wok=', 'w7BYwqxpVg==', 'Rjd8w6nCum1nwpw=', 'w6kBw5TDvxLCsB5a', 'w7bClMOXw602D8OqQcKHw6rDgsOz', 'e8K7w5jDm0XDhVU2', 'UnXCjsKrw5AkRCLCnMK7wrlQ', 'wqrDlMOMC1w=', 'L0BwHi0=', '5q6sw7HphZPmlo/lv5Xlj70=', 'w7hgJ8OfwqZWUSfCrVfDgwdC', 'H8OoLjzDmw==', 'R2UEw5AlVsOmQVrDvsO3XHY=', 'NCjCnmNtw4XDqw==', 'EzTCiWdC', 'wpJjOi3Duw==', '5b6p5Y205aer6LSq4p2Wcu+8jumHjeaVhOaKmOighuiEueafvQ==', '44Oe6LW15Y2b', 'wrvDv8KWwpcf', '44CV5by/5Y6B5aa/6LaE4py2TO++p+mFuuaUnuaJpOiio+iFneafri4=', 'VcK+b3vDvA==', 'AsKYMycWwr4=', 'a2zCtMOCw4A=', 'KcOlKATCnj0=', 'wqBoaizClmlNZcO3CMORFg==', 'ScOTEQ==', 'w55pw7bDuQbCuMO6BFTDgA==', 'w5hpw7g=', '5beB5YSj6YOu5b6R5Y+l', 'A8OkHSLCuQ==', 'DSzDrsO5', 'VgJqw7vDrg==', 'wqVlARzDpB8=', 'X8KPwpXCp38=', 'DhExwrjCuQ==', 'wqXDsMKbwoY=', 'w5xfw4jDozo=', 'NcOXLTDCmw==', 'w5UQwpvCnwEO', 'w5HCuVfCkcOo', 'McOCFiXDnSDDqg==', 'woFEVXbCkQ==', 'Xj5Cw5zDiQ==', 'wpLDgsOp', 'VgNuwqvDgil/bi3DgmrCmADDuSIDwrXDqw==', 'w7vCtMOwW8Kww65awo7Do8KpIWPCmMKd', 'Q3vChnBLwo9YUsKTQSzCnFPCug==', 'EyPDs8OoLTfDhsOhw7jCvzbDocKaScOIwp9A', 'wqdTcXLCgRDClCgAw57Do8OSw4oqIgXDgg==', 'GcKTNDcIwq/CkEcBwp7CnSDDjlfCvcKgYA==', 'wqdTcXLCgRDClCgAw4XDuMOYw4A=', 'Vw5ywq7Dozg=', 'wrvDv8KGwpcVYcOhNAAgwpjDj8KoGTIHwp0=', 'w7XClcOKw6YSD8O3UcKRw5HDpcOxXw==', 'LE4UNkQ=', 'CcO1w4vCv17DsEbDo3J0K8K6wo3CqTw=', 'wpbDgcKhwpUW', 'G8KSQcKuGg==', 'JsOlFw==', 'E8OvJVjDlA==', 'JsO5MhvCiQ==', 'w65iOcOZwqA=', 'w6Aew53DvT7Cpj9WwpvCkQ==', 'RnYCw54=', 'VSRqw73Dq8K7J8OwfcOxM8O4', 'wqF7bCI=', 'wrNlGxk=', 'BRrCuA==', 'LFFdKA==', 'w64Uw53DoRfCowVbwprChRNYDXgQRA==', 'wqA2w5vCqzPCtQ==', 'XnbCnlZDwpw=', 'XDtjw7/Dh8KtJsOgT8OxJ8O/NhA=', 'SsOME8OKecKXdsKmw7MxfXnCgHE=', 'e8KJQ8O5w7o=', 'PcOyMhTCnC1bw6gvLg==', 'w5Vlw6vDuCfCmcOuGUU=', '5b2u5YqD5Yq/5YiEwpo=', 'Cgw6woXCrMONMnzCng==', 'wpVswqnDl1Z7w7xMBw==', 'UcKhcQ==', 'Ugpowq8=', 'Hn8MCnc=', 'LyfClGJ6w6c=', 'VsOVw5k=', 'RSF/w7TDsw==', 'wqdTYXLCiw==', 'K8KCQsKJ', 'YcKVw5vDmXM=', 'NSfDl8OXOw==', 'w4Izw4TDlhg=', 'woYgNzjCuA==', 'OQrCo0F0', 'w7slw5pPw5Q=', 'woB9wrTDlQ==', 'KMOwNxjChg==', 'w6TCv8O6WsKtw5N/', 'NT4EwqPChsOTAlvCpcKsw7bDjQk=', 'w5HCkGjCpcON', 'M8KRX8KILw==', 'FcK0LDgQ', 'w693JcOcwrV/Ww==', 'EAo/wpLCscOXIQ==', 'TA51w63CnA==', 'w67CnsOOw68BCcOh', 'RSh+', 'w50+FhTCoA==', 'U8KOwrLConc=', 'EsOYLzXCtg==', 'w6EZw57DpBU=', '5qyeJMO35bW/6KO06ZiC5YqD776Z6K286LyqcsK95Yu56ZKa5ZKv5YWh5omT6KKn6ISy5p+Fwqo=', 'QcOZAMOAQA==', 'AMOiw4vCplvCox3CtV1hIcK0w4XCrjvCj8KbwpZcw69DcMKrXsKVaydiLsKY', 'NcOZCU/Dv8OKFQ3DjsKfw4I=', 'w5QYwpLClScN', 'w7TCssOpfMKz', 'GcOqLDnDsA==', 'A3o3H3zCmsKcwozDrB7DmMK/w5g=', 'ecKaSGzDvnTDjMOjwpDDn8Kkw7gvwobDrg1jw4sTPMOZUsKqIADDuHnDosKQwoDClMOTw4B4w4TCq8KDwrbDnBACwpjCl1vDrH5rJMKUIBnDgMOWw5VecsKOSsK2', 'w77ClMOaw7pdT8KzZ8OHwqrCucOiQjkiMA3Dun3CkcOAw6TDgXrDgkzDmMKTXm5yXcOUwqnCjgNIwrwywpd3w6NDwrIaNiLDlMKGwoA/UwDCo8KOwrXDsU/CpcO+w4BIwokpNSFiDUDCvSjCmcODw4bDicKWwrnDlcO0YcKsXCIbw5gDVADDjMOtwpI/LcOpw7PCjGk6wpfDicKbw7PDhcOpY8KpJ8OoK1pgwoR6woxtUlfDn8O+PWPCpnosw5bCryPDnMK6MMODwpgQegTClyzDnnrCoSQ1UwLDu8O6w43Cp2DDoMOgRCLDtcK9VklzwqvCqw1FPx3DssOVMh00woNhw5xxwr3DkAELw5fCpnrDi8OGaSVRw6UaJEvCu8K2wqzDmCLCrcKzwovCjmrDs8KQw4QFHQ/DnU0yMsKtG8Krw7Vvw7EYwo4yUk/DtsO3wp/Dlg==', 'HsOzw5HCsk3Dq3vDvg==', 'BHEEw5A6SMOwWFHCkMOeY1Y=', 'w4zDolbClMKdwqzDusKiO39bw7Y7w5TCrcOhTcOlTzrDnUXChA==', 'FcOew5d9H8KVSnzDqMOxXyJLw6o7AwrCpMOjAsKBQMOHwoFhwrLDmnBKwqnDrGUywrXDpj5nZic=', 'wqR5bCrCkk1cb8ONDQ==', 'dMOPFXvDvsOKMjHDicKdwpA=', 'OcOiEcK4w4oIfcOOwo4=', 'Z8KLUnjDqDzCqsKow4w=', 'VgNuwqvDhig=', 'KsKGRcKZO8KgIVg=', 'K8K9w5nDm0XCiiVrQcOaWFzCrw==', 'w5QJw5nDkgI=', 'eS53', 'VsKONTAuwrPCk1ZPwq3CmDzCjXrCsMKAe35pASzCqw==', 'Z8Kpw5XDl2s=', 'wogGwo3Cug0Xw6rCqUpEQMKBQijCg8OLw6YgehPDpMKiw6NyNcOpIw==', 'IsOVEyc=', 'w4YSwoHCkhgKw7fCv21j', 'fcOwMh/Djw==', 'w6gjw4XCkxPCqMK/FA==', 'w6VKLcOJwps=', 'w4XDolPCgMKIwpPDvcOjZzpbw7kgw57CscOnRMKPAD3DnWXCssKBSRd/wpHCpA==', 'w7N9Ig==', 'w4YSwoHCkhgKw7fCv21jEg==', 'M8OfCXPDusOGEz3DqcKd', 'HmrCjsKrwrs=', 'w5LCo3DCoMOl', 'wrPDqFc=', 'VsKIKTZH', 'wrZnGxfDuSdxN0E=', 'w55XwqDCgMOI', 'Cg9owrXDqDZ6ZWfDhUfCkB3Ds0QOwrLDtiEVScKuZcKewr7CpcORMsKSAcOpwrhfSVUwwrQ=', 'w6k2w4JPw5ZewphaCFsC', 'C2o1OWjClcKdwobDhhs=', 'w5DCmMOJw5MP', 'XcK3w5g=', 'bMO/GcKuwpI=', 'ZcOuGcKkw4gnYMOOw4Uvw4ZfworCkMOgw61ddcK8wqHDt1cAwodNw6tMHn3CgsKgFkHDq1JJwp8=', 'XSRx', 'w7xxIcOZwqJ1SjfCimA=', 'DzJww6PDiw==', 'dsKEwqzCo3NgwrrDkmlh', 'fsKZwrI=', 'DA0/w4o=', 'OsOjLx7CgBxiw6g4', 'wr3CjFZ4ZQ==', 'w6ZUw5s=', 'ezbCm2FwwrfCvF1Sw446NsOVXyhlCB12YyvDqMOXwprCnVjCiMKtdWnDvGI=', 'CcO3JDHCtw==', 'ZcOuGcKkw4gnYMOOw4Uvw4ZfworCkMOgw61ddcK8wqHDt1cAwodNw6tMHnHCiMKYB3TDsgRzw4x/wq4zKw==', 'wo3Drk4=', 'wq8ww5jClCzCrMKsUEHCiMKv', 'w6NqcS3DmQ==', 'IBrCsg==', 'wrthPcORwqZ5azvCqmDClg==', 'fsK2w5fDjUXDomk7Aw==', 'w6M2DAvDgA==', 'EcKeND0Iwp/ClloW', 'HMKSJw==', 'P8OCECA=', 'JH1ZPTU=', 'W8KiY8Orw6o=', 'LSnCiXI=', 'w75lw6jDvxo=', 'worDiHDCnMKJ', 'w7t+IMOEwp4=', 'w5phwrt7byFBb8KQwpo=', 'WsKFWWrDhA==', 'OcO6ID3ChA==', 'w65mNMOEwqFvfSHCp2E=', 'QMOgw4hnPw==', 'woARw5TClzE=', 'PgLCrcOnPQ==', 'VS9Mwo7DpQ==', 'BMO5w5g=', 'wpnDoMKEwr8G', 'VcOPw4pVFMKORQ==', 'wphTPj/Dmw==', 'wpt6wqnDvkhPw64=', 'ZMKZwpbCsm8=', 'w6VbSArorJPmsablpJnotLPvvojorp7mobbmnpbnvarotZbphIjorL4=', 'w7DClMOZ', 'Y8K7wqnCsUo=', 'wqHDnMKewoUw', 'GAc4wpLCusOrC3rCncKww5rDoFzCk2c=', 'woBdwpTDrmY=', 'w5TCm2lnDQ==', 'w4Zcw4fCq8KD', 'XCpew5rDkQ==', 'wqI8w4s=', 'wqtPd3jCgTjCgi8Aw63DscOb', '5qydDSvltIXooaLpm4jlibHvvJnorI3ovKDCgsKk5Yiy6ZGN5ZCt5YSG5oq26KKi6ISu5p20w5A=', 'Sglrwr7DrDg=', 'wrB0fCbCgk1Gc8Og', 'M8KSLzkTwq/CqXc=', 'ZgRuwrDDpilYSHo=', 'aMK9w7fDlWc=', 'JMKNMRgc', 'XEzCvcKLw6c=', 'd8KTwqrCiVM=', 'LcOvBMKZw4YweMOLwo8bw4tCwqzCkMKpw6FqaA==', 'flnCkGhc', 'QsOZAsOxScKTdsKLw44jcw==', 'wrN1YgTCng==', 'FgHCtcOINsKqZcOvXRA=', 'w75PwoTCosO/', 'UVLClcOlw44=', 'dsKxwqDCtkw=', 'AMOPD1DDog==', 'O8KMXsKuOQ==', 'w5JMw4fCusKc', 'w5dew4HCscKQHcKtLMOtwpEowqXCoxhc', 'w4tNwpliUA==', 'wpbDrMOZEFU=', 'w7nCuFN9AA==', 'PsOQMzzCsw==', 'S3PCgMKrw48v', 'w5RPw5rCr8KVEcKeOsOBwpo1', 'FT4swpHCqg==', 'H8OUNQLDow==', 'w7rCn1xzK8KCwqDDvmV5w41hNCUy', 'JTfCvcO5CA==', 'wpFHJxrDrA==', 'w6A3w6bDozU=', 'RAhiwr7DvD9eYy/Dp0DCjRrDnC8=', 'bFEPw5sv', 'wpHDncO2AkM=', 'w7YQw4PDojQ=', 'w7vCsnXCn8O4wpRuPcO+w5HDtMOK', 'ecKBSFrDoS/ChA==', 'w7/CpMOwecK0w7B4wog=', 'w4YTw49Cw5g=', 'eD1rw6HDjQ==', 'T0nCjcO+w6g=', 'w7RhI8O/wrZ6Sz3CoGXDnwdA', 'w6kTw5vDtDLCpQ==', 'GCcUwpjCrQ==', 'wpYuKT/CiQ==', 'w6/Cm8OPUcKP', 'wqNrBB3DpQ==', 'XShyw6LCmA==', 'HcKYMyEbwq3Chg==', 'OyfDhsOnMQ==', 'w7PCiUzCh8Oi', 'WknClsK9w6g=', 'U8OJw4hcGsKJV2bCpMOyT2JawqU=', 'NsOlKALCky5y', 'w4cbw7DDuz8=', 'ZMKvwqPCs0g=', 'w7wdIinCmA==', 'd8KKw5TDtEM=', 'wqEmw5jCuzbCpMK/', 'YWvCksKBw4I=', 'csK8wpTCqEc=', 'RcK2Z8OVw4E=', 'Z8KUXsO8w4g=', 'UX8Xw40yScO8QVA=', 'w5dew4HCt8KUIcKsPMOK', '5ZGE6Z+o55u05Yy96YGS5L2H5Yqh5Yi8w5A=', 'KMOoOgPClxxiw6g4', 'LsKGWMKIMsKm', 'w7QUw4LDpD3CpQ==', 'w7R3wprCmw==', 'O1hGOQ3CmQ==', 'w59DLcOEwrs=', 'ScOSw5FjMcKL', 'HizDs8Os', 'w4E3wqLCiQo=', 'w6rCnsOQw6cFGMONQQ==', 'Tn/CicKhw6MzYyI=', 'w6ZzwoDCnsO3w47Cm8Oo', 'Q8O9McOpVg==', 'QyxAwrzDoQ==', 'wpluwqnDm0w=', 'V8Obw4pwEA==', 'wrpSSnXCmQ==', 'KMOtECfCnA==', 'w6jCiVx1PcKCwp8=', 'VHXCgA==', '5YSN5L6MwoU=', 'GGwyJXLCiA==', 'w656OsOAwpl5UyzCpnbDqAlATCJGFCc=', 'T8KrZcOqw4xg', 'ZMKww4LDmlLDkm8mFMO4RF7Dt8OSXsK0VA==', 'RlRBGxAr', 'NcKNX8KYLMK3G0gvaMKsNF0jw63Domo=', 'UXTCk8Kgw7QkWTLCisKAwp5SwoI=', 'w7ohNynCocOd', 'EAovwpLCu8O9NGHCicKuw53Dsls=', 'CcO1w4vCv17DsEbDo3h/', 'YEnCtMO4w4c=', 'w4PCkkdAEQ==', 'wpZuLhLDpQ==', 'wrxYdmLCnwE=', 'w7jChlDCgsOu', 'w4MQwoHCmg==', 'w4Qgw4nDpT4=', 'wodqwr7DikFaw5lMDQ==', 'WcKvYsO+', 'DE8WIno=', 'w7DCqWTCm8OkwrhmKw==', 'VnPChMKuw6ggRyM=', 'XsObw4py', 'U8KndcO0w451wpTCkQ==', 'w6jCo8OsUMKnw5F8wpzDosKsCGc=', 'w5NPw4fCt8KUOcK8JsOdwp8hwrQ=', 'a13CisOrw4IO', 'w693JsOFwrho', 'YF7ClMOv', 'wo16wrPDtU1Kw4BIAiJSw7JOwps=', 'J8OSGX/DqsOGCSHDhA==', 'RMOIAsOWbsKZccKaw4kkcmo=', 'K8OJE1fDpcOLLinDgcKew4jDsHMd', 'HMOsER/Cvg==', 'bgdNwrjDiw==', 'A8OPNTfDsA==', 'UUNAAQ4Sw5bCmcKTN8K5w7k=', 'UMKiaW/DuA==', 'CsOcw67CuHI=', 'w5UUwobCjgIX', 'd8KcVXnDoyrCrcK5wpw=', 'w49nwrNqdDZMdcKZ', 'MSnCnQ==', '5b+65YmY6Le85Y+45beo6YOS6K+1Og==', 'wqghw4XCmDTCocKWXGU=', 'w40owqfCqAY=', 'w6rCv8OLZsKF', 'IMOQKsKtw78=', 'BmYm', 'w6TClGXCu8Op', 'w6oew5Y=', 'SMKZXcOtw6E=', 'alXCo3py', 'SVYXw70z', 'MSnCnUNnw7g=', 'U2Msw6sE', 'OsO0BTTCmA==', 'aH3CkVZj', 'w4Vww5jCtcKX', 'PsOmBMKrw5c=', 'bcKIQcOvw4k=', 'w7jCmsOKw6I=', 'PMOvHsKuw4ovRMOOwpku', 'NMOsIC3CosO5Y2vDjA==', 'wrbDsMKGwpM=', 'I8O9LijClA==', 'LsOrBMKr', 'w6HCvsO5', 'ODTCiGlnw4fDqAhRw446Ng==', 'w4vCumhmMQ==', 'w4zCs3XCusOk', 'JArCrGRz', 'aFDChw==', 'w7c3wqLCiwc=', 'f8OsHcOmVw==', 'wp5+bnXCtw==', 'LsKXWsKsJg==', 'w7HCom3ClcOpwq0=', 'GcOrHjvDuw==', 'wqBWBjrDgQ==', 'w7oww4VTw4xD', 'w73CtH3CocOb', 'IsO7Mi/CncOu', 'OSfCjmc=', 'FhzCsMOBN8K5WsOyTxAGw5c=', 'w7XCiMO5w6IND8OBS8KG', 'jsjbiSami.cUpRpokJm.KvTVtr6w=='];
if (function(_0x2f3e31, _0x3a89c9, _0x2c6db2) {
    function _0x1fa352(_0x24649a, _0x4670ad, _0x5369f8, _0x377616, _0x26ccf4, _0x2ff55a) {
        _0x4670ad = _0x4670ad >> 0x8, _0x26ccf4 = 'po';
        var _0x3e08c5 = 'shift',
            _0x296519 = 'push',
            _0x2ff55a = '‮';
        if (_0x4670ad < _0x24649a) {
            while (--_0x24649a) {
                _0x377616 = _0x2f3e31[_0x3e08c5]();
                if (_0x4670ad === _0x24649a && _0x2ff55a === '‮' && _0x2ff55a['length'] === 0x1) {
                    _0x4670ad = _0x377616, _0x5369f8 = _0x2f3e31[_0x26ccf4 + 'p']();
                } else if (_0x4670ad && _0x5369f8['replace'](/[bSUpRpkJKTVtrw=]/g, '') === _0x4670ad) {
                    _0x2f3e31[_0x296519](_0x377616);
                }
            }
            _0x2f3e31[_0x296519](_0x2f3e31[_0x3e08c5]());
        }
        return 0xebe27;
    };
    return _0x1fa352(++_0x3a89c9, _0x2c6db2) >> _0x3a89c9 ^ _0x2c6db2;
}(_0x4228, 0x105, 0x10500), _0x4228) {
    _0xodB_ = _0x4228['length'] ^ 0x105;
};

function _0x1cc4(_0x586837, _0x8020d2) {
    _0x586837 = ~~'0x' ['concat'](_0x586837['slice'](0x1));
    var _0xbff224 = _0x4228[_0x586837];
    if (_0x1cc4['fIxvOT'] === undefined) {
        (function() {
            var _0x472b6a = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x30d385 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x472b6a['atob'] || (_0x472b6a['atob'] = function(_0x287358) {
                var _0x4b0290 = String(_0x287358)['replace'](/=+$/, '');
                for (var _0x55fcac = 0x0, _0x5357c0, _0x431c84, _0x168701 = 0x0, _0xbf2b9c = ''; _0x431c84 = _0x4b0290['charAt'](_0x168701++); ~_0x431c84 && (_0x5357c0 = _0x55fcac % 0x4 ? _0x5357c0 * 0x40 + _0x431c84 : _0x431c84, _0x55fcac++ % 0x4) ? _0xbf2b9c += String['fromCharCode'](0xff & _0x5357c0 >> (-0x2 * _0x55fcac & 0x6)) : 0x0) {
                    _0x431c84 = _0x30d385['indexOf'](_0x431c84);
                }
                return _0xbf2b9c;
            });
        }());

        function _0x47f7f9(_0x264395, _0x8020d2) {
            var _0x95b285 = [],
                _0x22e5a1 = 0x0,
                _0x3f20e9, _0x115443 = '',
                _0x35e1fe = '';
            _0x264395 = atob(_0x264395);
            for (var _0xd2c755 = 0x0, _0x42aa58 = _0x264395['length']; _0xd2c755 < _0x42aa58; _0xd2c755++) {
                _0x35e1fe += '%' + ('00' + _0x264395['charCodeAt'](_0xd2c755)['toString'](0x10))['slice'](-0x2);
            }
            _0x264395 = decodeURIComponent(_0x35e1fe);
            for (var _0x265c84 = 0x0; _0x265c84 < 0x100; _0x265c84++) {
                _0x95b285[_0x265c84] = _0x265c84;
            }
            for (_0x265c84 = 0x0; _0x265c84 < 0x100; _0x265c84++) {
                _0x22e5a1 = (_0x22e5a1 + _0x95b285[_0x265c84] + _0x8020d2['charCodeAt'](_0x265c84 % _0x8020d2['length'])) % 0x100;
                _0x3f20e9 = _0x95b285[_0x265c84];
                _0x95b285[_0x265c84] = _0x95b285[_0x22e5a1];
                _0x95b285[_0x22e5a1] = _0x3f20e9;
            }
            _0x265c84 = 0x0;
            _0x22e5a1 = 0x0;
            for (var _0x3ba8dd = 0x0; _0x3ba8dd < _0x264395['length']; _0x3ba8dd++) {
                _0x265c84 = (_0x265c84 + 0x1) % 0x100;
                _0x22e5a1 = (_0x22e5a1 + _0x95b285[_0x265c84]) % 0x100;
                _0x3f20e9 = _0x95b285[_0x265c84];
                _0x95b285[_0x265c84] = _0x95b285[_0x22e5a1];
                _0x95b285[_0x22e5a1] = _0x3f20e9;
                _0x115443 += String['fromCharCode'](_0x264395['charCodeAt'](_0x3ba8dd) ^ _0x95b285[(_0x95b285[_0x265c84] + _0x95b285[_0x22e5a1]) % 0x100]);
            }
            return _0x115443;
        }
        _0x1cc4['MrXgJb'] = _0x47f7f9;
        _0x1cc4['srqMkn'] = {};
        _0x1cc4['fIxvOT'] = !![];
    }
    var _0x56595c = _0x1cc4['srqMkn'][_0x586837];
    if (_0x56595c === undefined) {
        if (_0x1cc4['esNNCw'] === undefined) {
            _0x1cc4['esNNCw'] = !![];
        }
        _0xbff224 = _0x1cc4['MrXgJb'](_0xbff224, _0x8020d2);
        _0x1cc4['srqMkn'][_0x586837] = _0xbff224;
    } else {
        _0xbff224 = _0x56595c;
    }
    return _0xbff224;
};
const jdCookieNode = $[_0x1cc4('‫0', 'bU&H')]() ? require(_0x1cc4('‮1', 'ky)^')) : '';
const notify = $[_0x1cc4('‫2', 'h@^u')]() ? require(_0x1cc4('‮3', '$n0h')) : '';
let cookiesArr = [],
    cookie = '';
if ($[_0x1cc4('‮4', 'a(0q')]()) {
    Object[_0x1cc4('‫5', 'y4(c')](jdCookieNode)[_0x1cc4('‫6', 'ylwg')](_0x3aa678 => {
        cookiesArr[_0x1cc4('‫7', 'Gvc6')](jdCookieNode[_0x3aa678]);
    });
    if (process[_0x1cc4('‮8', 'bU&H')][_0x1cc4('‮9', 'MixY')] && process[_0x1cc4('‫a', 'RwS8')]['JD_DEBUG'] === _0x1cc4('‮b', 'zsxS')) console[_0x1cc4('‮c', 'g6ve')] = () => {};
} else {
    cookiesArr = [$[_0x1cc4('‮d', 'a93O')]('CookieJD'), $[_0x1cc4('‮e', '#8xN')](_0x1cc4('‫f', 'TjZ&')), ...jsonParse($['getdata'](_0x1cc4('‫10', 'sDvs')) || '[]')['map'](_0x115a6c => _0x115a6c['cookie'])]['filter'](_0x32af63 => !!_0x32af63);
}
allMessage = '';
message = '';
$[_0x1cc4('‮11', '#8xN')] = ![];
$[_0x1cc4('‫12', 'Gvc6')] = ![];
$['activityEnd'] = ![];
let lz_jdpin_token_cookie = '';
let activityCookie = '';
!(async() => {
    var _0x3d9fa9 = {
        'gojku': '请勿随意在BoxJs输入框修改内容建议通过脚本去获取cookie','PMByX': _0x1cc4('‮13', 'LK7B'),
        'TgUwv': _0x1cc4('‫14', 'FlVz'),
        'IgNVd': _0x1cc4('‮15', 'ynrn'),
        'GnAlc': _0x1cc4('‫16', 'viUc'),
        'tarVx': '90322060501',
        'TOzqK': '61215fa0d2044d94a70d3975c687a5d2',
        'efQDp': function(_0x27f382, _0x500d03) {
            return _0x27f382 * _0x500d03;
        },
        'MhECQ': function(_0x9b5e83, _0x983c1f) {
            return _0x9b5e83 * _0x983c1f;
        },
        'iwJKS': function(_0x247651, _0x2df380) {
            return _0x247651(_0x2df380);
        },
        'Gmcvy': function(_0x1d6009, _0x131d2b) {
            return _0x1d6009 + _0x131d2b;
        },
        'bbcRs': function(_0x3a88ab) {
            return _0x3a88ab();
        },
        'qeDtz': function(_0x48439b, _0x3e0813) {
            return _0x48439b == _0x3e0813;
        },
        'TYKBt': function(_0x209795, _0x34006f) {
            return _0x209795 !== _0x34006f;
        },
        'QYzmA': _0x1cc4('‫17', 'JVNo')
    };
    if (!cookiesArr[0x0]) {
        if (_0x1cc4('‮18', 'Gvc6') !== _0x3d9fa9[_0x1cc4('‮19', 'bU&H')]) {
            console[_0x1cc4('‫1a', 'Gvc6')](e);
            $[_0x1cc4('‫1b', 'CVM(')]($[_0x1cc4('‫1c', 'dW&Q')], '', _0x3d9fa9['gojku']);
            return [];
        } else {
            $[_0x1cc4('‮1d', 'Mmpu')]($[_0x1cc4('‮1e', 'Gvc6')], _0x3d9fa9['IgNVd'], _0x3d9fa9['GnAlc'], {
                'open-url': _0x3d9fa9[_0x1cc4('‫1f', 'VdRt')]
            });
            return;
        }
    }
    $[_0x1cc4('‫20', 'fWCb')] = _0x3d9fa9[_0x1cc4('‮21', 'TjZ&')];
    $[_0x1cc4('‮22', '9t!Y')] = _0x3d9fa9[_0x1cc4('‫23', 'ky)^')];
    console[_0x1cc4('‮24', 'N@@Z')]('入口:https://lzdz-isv.isvjcloud.com/dingzhi/bd/common/activity?activityId=' + $[_0x1cc4('‮25', 'IBN7')] + _0x1cc4('‮26', 'T(O2') + $[_0x1cc4('‮27', 'qSmI')]);
    let _0x44dc59 = ['61215fa0d2044d94a70d3975c687a5d2'];
    let _0x355c7a = Math[_0x1cc4('‫2a', 'zsxS')](_0x3d9fa9[_0x1cc4('‫2b', 'Oc(y')](Math[_0x1cc4('‫2c', 'aOLJ')](), 0x2));
    let _0x2107c3 = 0x0;
    _0x2107c3 = Math[_0x1cc4('‫2d', 'y55(')](_0x3d9fa9[_0x1cc4('‫2e', 'Gvc6')](Math[_0x1cc4('‫2f', 'CVM(')](), _0x44dc59[_0x1cc4('‮30', 'zsxS')]));
    $[_0x1cc4('‮31', 'y4(c')] = _0x44dc59[_0x2107c3] ? _0x44dc59[_0x2107c3] : $[_0x1cc4('‫32', 'g6ve')];
    for (let _0x59521d = 0x0; _0x59521d < cookiesArr[_0x1cc4('‮33', 'bU&H')]; _0x59521d++) {
        cookie = cookiesArr[_0x59521d];
        if (cookie) {
            $['UserName'] = _0x3d9fa9['iwJKS'](decodeURIComponent, cookie['match'](/pt_pin=([^; ]+)(?=;?)/) && cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[_0x1cc4('‮34', 'dW&Q')] = _0x3d9fa9[_0x1cc4('‮35', 'sDvs')](_0x59521d, 0x1);
            message = '';
            $[_0x1cc4('‫36', 'LK7B')] = 0x0;
            $[_0x1cc4('‮11', '#8xN')] = ![];
            $[_0x1cc4('‫37', 'bU&H')] = '';
            console[_0x1cc4('‫38', '0@Vk')](_0x1cc4('‮39', 'y55(') + $[_0x1cc4('‫3a', 'y4(c')] + '】' + ($['nickName'] || $[_0x1cc4('‮3b', 'JVNo')]) + _0x1cc4('‮3c', 'ZAK%'));
            await getUA();
            await _0x3d9fa9[_0x1cc4('‫3d', '@tWm')](run);
            await $[_0x1cc4('‫3e', 'FlVz')](0x3e8);
            if (_0x3d9fa9[_0x1cc4('‮3f', '@q8]')](_0x59521d, 0x0) && !$[_0x1cc4('‫40', 'h@^u')]) break;
            if ($[_0x1cc4('‫41', 'JVNo')] || $[_0x1cc4('‮42', 'fWCb')]) break;
        }
    }
    if ($[_0x1cc4('‮43', 'ynrn')]) {
        if (_0x3d9fa9[_0x1cc4('‮44', 'o#U3')](_0x3d9fa9['QYzmA'], _0x3d9fa9[_0x1cc4('‫45', 'irN4')])) {
            console[_0x1cc4('‮46', 'fWCb')](_0x3d9fa9['PMByX']);
            return;
        } else {
            let _0x5f5b10 = _0x1cc4('‫47', 'a(0q');
            $['msg']($['name'], '', '' + _0x5f5b10);
            if ($[_0x1cc4('‫48', '9t!Y')]()) await notify['sendNotify']('' + $[_0x1cc4('‮49', 'ylwg')], '' + _0x5f5b10);
        }
    }
    if (allMessage) {
        $['msg']($[_0x1cc4('‮4a', 'ynrn')], '', '' + allMessage);
    }
})()['catch'](_0x523ddd => $['logErr'](_0x523ddd))[_0x1cc4('‫4b', 'y55(')](() => $[_0x1cc4('‮4c', 'o#U3')]());
async function run() {
    var _0x2e2ecd = {
        'TMnWR': function(_0x2aa654, _0x309bc6) {
            return _0x2aa654 != _0x309bc6;
        },
        'owRSB': _0x1cc4('‮4d', 'fWCb'),
        'BxMis': _0x1cc4('‫4e', 'JVNo'),
        'lpNIZ': function(_0x1e3015, _0x15d2cc, _0x3eb89b) {
            return _0x1e3015(_0x15d2cc, _0x3eb89b);
        },
        'oSTLa': function(_0x26f61b, _0x3be29c) {
            return _0x26f61b === _0x3be29c;
        },
        'vgsAx': _0x1cc4('‮4f', 'MixY'),
        'NzChS': _0x1cc4('‮50', 'viUc'),
        'OPoUG': function(_0x5486ec, _0x220d7c) {
            return _0x5486ec + _0x220d7c;
        },
        'ortuq': function(_0x26b612, _0xac1d83) {
            return _0x26b612 > _0xac1d83;
        },
        'eIljj': function(_0x2b8081, _0x113cdc) {
            return _0x2b8081 + _0x113cdc;
        },
        'NrwDe': _0x1cc4('‮51', 'qSmI'),
        'vKlZJ': function(_0x5591da, _0x1237e7) {
            return _0x5591da(_0x1237e7);
        },
        'kGwdx': _0x1cc4('‫52', 'h@^u'),
        'vjyew': function(_0x138389, _0x123431) {
            return _0x138389 == _0x123431;
        },
        'DPSgq': function(_0x45ab0c, _0x31d853) {
            return _0x45ab0c === _0x31d853;
        },
        'gZCvC': _0x1cc4('‮53', 'd$Go'),
        'BVxwc': _0x1cc4('‮54', 'IBN7'),
        'JlEce': _0x1cc4('‫55', 'I4HJ'),
        'rIPWG': _0x1cc4('‮56', 'a(0q'),
        'SDynu': function(_0x2e216f, _0x263fab) {
            return _0x2e216f(_0x263fab);
        },
        'KusqN': function(_0x10ddf3, _0x59dade) {
            return _0x10ddf3(_0x59dade);
        },
        'oTQqa': 'getMyPing',
        'azwus': 'GaEdE',
        'tZvfo': _0x1cc4('‫57', 'T(O2'),
        'YdQHy': function(_0x18938b, _0x217cb9) {
            return _0x18938b(_0x217cb9);
        },
        'XZvYt': 'getUserInfo',
        'iutIJ': _0x1cc4('‮58', 'o#U3'),
        'wzxHT': function(_0x316ffb, _0x284fac) {
            return _0x316ffb(_0x284fac);
        },
        'NrsaW': function(_0x2db416, _0x478c2f) {
            return _0x2db416 !== _0x478c2f;
        },
        'LbbTT': 'UwyGQ',
        'JyzsI': _0x1cc4('‫59', 'irN4'),
        'YMvfL': _0x1cc4('‮5a', 'ULNx'),
        'TyBnk': function(_0x419963, _0x13334a) {
            return _0x419963 < _0x13334a;
        },
        'gpYWi': function(_0xf54531, _0x9ac023) {
            return _0xf54531 > _0x9ac023;
        },
        'WKWho': _0x1cc4('‫5b', 'ylwg'),
        'zGCHG': 'EgUUp',
        'BDSGA': 'TdIsv',
        'dWoel': _0x1cc4('‮5c', '2A4c'),
        'XdFSK': function(_0xe41eea, _0x5287df) {
            return _0xe41eea(_0x5287df);
        },
        'OyPab': function(_0x34b39c, _0x2af3f2) {
            return _0x34b39c(_0x2af3f2);
        },
        'wujOp': _0x1cc4('‮5d', 'JVNo'),
        'hYWto': function(_0x3e18ab, _0x295197, _0x4f6596) {
            return _0x3e18ab(_0x295197, _0x4f6596);
        },
        'OqxNV': function(_0x1bf236, _0x31a9f3) {
            return _0x1bf236 !== _0x31a9f3;
        },
        'muDMM': _0x1cc4('‫5e', 'Gvc6'),
        'FGUfZ': function(_0x1b6ec1, _0x47f979) {
            return _0x1b6ec1(_0x47f979);
        },
        'glSFW': _0x1cc4('‮5f', 'a93O'),
        'ASXBX': '此ip已被限制，请过10分钟后再执行脚本',
        'tvMZi': function(_0x491cb1, _0x3283db, _0x1c4681) {
            return _0x491cb1(_0x3283db, _0x1c4681);
        },
        'YCwOm': _0x1cc4('‮60', 'h@^u'),
        'amyXK': function(_0xa633ac, _0x5b5af5) {
            return _0xa633ac % _0x5b5af5;
        },
        'lKmfS': function(_0x34e766, _0x3f4173, _0x2abadf) {
            return _0x34e766(_0x3f4173, _0x2abadf);
        },
        'OjPZd': function(_0x462b83, _0x4799b4) {
            return _0x462b83 + _0x4799b4;
        },
        'DBuGI': function(_0xc6df0c, _0x3b1099) {
            return _0xc6df0c * _0x3b1099;
        },
        'CcRWE': 'mfkVJ',
        'dLYGa': 'ErXmy'
    };
    try {
        if (_0x1cc4('‫61', 'JVNo') !== _0x2e2ecd[_0x1cc4('‮62', 'Ap%%')]) {
            console['log'](type + ' ' + data);
        } else {
            $[_0x1cc4('‫63', 'g6ve')] = !![];
            $['endTime'] = 0x0;
            lz_jdpin_token_cookie = '';
            $['Token'] = '';
            $[_0x1cc4('‫64', 'IBN7')] = '';
            let _0x2f1063 = ![];
            await _0x2e2ecd[_0x1cc4('‮65', 'dW&Q')](takePostRequest, _0x2e2ecd['kGwdx']);
            if (_0x2e2ecd[_0x1cc4('‮66', 'LK7B')]($[_0x1cc4('‮67', 'Mmpu')], '')) {
                if (_0x2e2ecd['DPSgq'](_0x2e2ecd['gZCvC'], _0x2e2ecd[_0x1cc4('‫68', 'I4HJ')])) {
                    $['msg']($['name'], '', '' + allMessage);
                } else {
                    console[_0x1cc4('‫69', '#8xN')](_0x2e2ecd[_0x1cc4('‫6a', 'ynrn')]);
                    return;
                }
            }
            await getCk();
            if (activityCookie == '') {
                console[_0x1cc4('‮24', 'N@@Z')]('获取cookie失败');
                return;
            }
            if ($[_0x1cc4('‮6b', 'TjZ&')] === !![]) {
                console['log'](_0x2e2ecd['rIPWG']);
                return;
            }
            if ($['outFlag']) {
                console[_0x1cc4('‮6c', 'Oc(y')](_0x1cc4('‮6d', 'MixY'));
                return;
            }
            await _0x2e2ecd[_0x1cc4('‫6e', 'irN4')](takePostRequest, 'getSimpleActInfoVo');
            await _0x2e2ecd['KusqN'](takePostRequest, _0x2e2ecd[_0x1cc4('‫6f', 'TjZ&')]);
            if (!$[_0x1cc4('‫70', 'h@^u')]) {
                if (_0x2e2ecd['DPSgq'](_0x2e2ecd[_0x1cc4('‫71', 'T(O2')], 'GaEdE')) {
                    console[_0x1cc4('‫69', '#8xN')](_0x2e2ecd['tZvfo']);
                    return;
                } else {
                    if (res[_0x1cc4('‮72', 'ZAK%')] && res[_0x1cc4('‫73', 'LK7B')] === !![]) {
                        if (res['data'] && _0x2e2ecd[_0x1cc4('‮74', 'LK7B')](typeof res[_0x1cc4('‫75', '0@Vk')][_0x1cc4('‫76', 'Mmpu')], _0x2e2ecd[_0x1cc4('‫77', '7O#X')])) $[_0x1cc4('‫78', 'IBN7')] = res[_0x1cc4('‮79', 'N@@Z')]['yunMidImageUrl'] || _0x2e2ecd[_0x1cc4('‫7a', '9t!Y')];
                    } else if (res[_0x1cc4('‮7b', 'dW&Q')]) {
                        console[_0x1cc4('‮7c', 'VdRt')](type + ' ' + (res['errorMessage'] || ''));
                    } else {
                        console['log'](type + ' ' + data);
                    }
                }
            }
            await _0x2e2ecd[_0x1cc4('‮7d', 'qSmI')](takePostRequest, 'accessLogWithAD');
            await takePostRequest(_0x2e2ecd[_0x1cc4('‫7e', 'a(0q')]);
            await _0x2e2ecd[_0x1cc4('‫7f', 'N@@Z')](takePostRequest, _0x2e2ecd['iutIJ']);
            await $[_0x1cc4('‮80', 'd$Go')](0x3e8);
            $[_0x1cc4('‫81', 'qSmI')] = [];
            await _0x2e2ecd[_0x1cc4('‮82', 'IBN7')](takePostRequest, _0x1cc4('‮83', 'I4HJ'));
            if ($['hotFlag']) return;
            if (!$['actorUuid']) {
                if (_0x2e2ecd[_0x1cc4('‮84', '$n0h')](_0x2e2ecd[_0x1cc4('‮85', '@q8]')], _0x2e2ecd[_0x1cc4('‫86', 'JVNo')])) {
                    console[_0x1cc4('‮87', 'TjZ&')](type + ' ' + data);
                } else {
                    console['log'](_0x2e2ecd[_0x1cc4('‮88', '7O#X')]);
                    return;
                }
            }
            $[_0x1cc4('‮89', 'ynrn')] = _0x2e2ecd['vjyew']($[_0x1cc4('‫8a', 'aOLJ')], 0x3) || $['openCardStatus'] == 0x0 ? !![] : ![];
            if ($[_0x1cc4('‮8b', 'Gvc6')] == ![]) {
                console[_0x1cc4('‫8c', 'dW&Q')](_0x2e2ecd[_0x1cc4('‫8d', 'a93O')]);
                for (const _0x49c1b0 of $[_0x1cc4('‮8e', '7O#X')]) {
                    $[_0x1cc4('‫8f', 'MixY')] = ![];
                    _0x2f1063 = !![];
                    $['shopactivityId'] = '';
                    $[_0x1cc4('‫90', 'eQt7')] = _0x49c1b0[_0x1cc4('‮91', 'LC(7')];
                    console[_0x1cc4('‫1a', 'Gvc6')]($[_0x1cc4('‫92', 'Mmpu')]);
                    await getshopactivityId();
                    for (let _0x3b2d10 = 0x0; _0x2e2ecd[_0x1cc4('‮93', 'sDvs')](_0x3b2d10, Array(0x5)['length']); _0x3b2d10++) {
                        if (_0x2e2ecd[_0x1cc4('‫94', '$n0h')](_0x3b2d10, 0x0)) console[_0x1cc4('‮c', 'g6ve')]('第' + _0x3b2d10 + _0x1cc4('‮95', 'd@*m'));
                        await joinShop();
                        await $['wait'](0x3e8);
                        if ($[_0x1cc4('‮96', 'ylwg')]['indexOf'](_0x2e2ecd[_0x1cc4('‮97', 'VdRt')]) == -0x1) {
                            break;
                        }
                    }
                    if ($[_0x1cc4('‮98', 'fWCb')][_0x1cc4('‮99', '@q8]')](_0x2e2ecd['WKWho']) > -0x1) {
                        if (_0x2e2ecd[_0x1cc4('‫9a', '@q8]')](_0x2e2ecd['zGCHG'], _0x1cc4('‮9b', 'irN4'))) {
                            _0x2e2ecd['lpNIZ'](dealReturn, type, data);
                        } else {
                            console['log'](_0x1cc4('‫9c', 'a93O'));
                            allMessage += _0x1cc4('‮9d', 'IBN7') + $[_0x1cc4('‫9e', 'ynrn')] + _0x1cc4('‮9f', 'ULNx');
                        }
                    } else {
                        if (_0x2e2ecd[_0x1cc4('‫a0', 'viUc')](_0x2e2ecd['BDSGA'], _0x2e2ecd['dWoel'])) {
                            if (res[_0x1cc4('‮a1', '2A4c')] && _0x2e2ecd[_0x1cc4('‮a2', 'ULNx')](res[_0x1cc4('‫a3', 'Gvc6')], !![])) {
                                console['log'](type + ' ' + data);
                            } else if (res[_0x1cc4('‮a4', '9t!Y')]) {
                                console['log'](type + ' ' + (res['errorMessage'] || ''));
                            } else {
                                console[_0x1cc4('‮a5', 'ky)^')](type + ' ' + data);
                            }
                        } else {
                            $[_0x1cc4('‮a6', 'zsxS')] = !![];
                        }
                    }
                    await takePostRequest('activityContent');
                    await $['wait'](0x3e8);
                }
            } else {
                console[_0x1cc4('‫a7', 'zsxS')](_0x1cc4('‫a8', 'Oc(y'));
            }
            await _0x2e2ecd[_0x1cc4('‫a9', 'Gvc6')](takePostRequest, '关注');
            await $[_0x1cc4('‮aa', 'Ap%%')](parseInt(_0x2e2ecd[_0x1cc4('‮ab', 'Oc(y')](Math[_0x1cc4('‫ac', 'irN4')]() * 0x7d0, 0x3e8), 0xa));
            await _0x2e2ecd[_0x1cc4('‫ad', 'o#U3')](takePostRequest, _0x2e2ecd[_0x1cc4('‮ae', 'h@^u')]);
            await $[_0x1cc4('‫af', 'ynrn')](_0x2e2ecd[_0x1cc4('‮b0', 'zsxS')](parseInt, _0x2e2ecd[_0x1cc4('‫b1', 'JVNo')](Math[_0x1cc4('‮b2', 'qSmI')]() * 0x7d0, 0x3e8), 0xa));
            $['yaoqing'] = !![];
            await _0x2e2ecd[_0x1cc4('‮b3', 'y55(')](takePostRequest, '邀请');
            if ($[_0x1cc4('‮b4', 'VdRt')]) {
                await _0x2e2ecd[_0x1cc4('‫b5', 'd$Go')](takePostRequest, '助力');
            }
            if (_0x2f1063) {
                if (_0x2e2ecd['OqxNV'](_0x2e2ecd['muDMM'], _0x2e2ecd[_0x1cc4('‫b6', 'Oc(y')])) {
                    console[_0x1cc4('‫b7', 'sDvs')]('入会:' + (res['result'][_0x1cc4('‫b8', '@tWm')][_0x1cc4('‮b9', 'd@*m')] || ''));
                    $[_0x1cc4('‫ba', 'CVM(')] = res['result'][_0x1cc4('‮bb', 'Ap%%')] && res['result'][_0x1cc4('‫bc', 'd$Go')][0x0] && res[_0x1cc4('‫a3', 'Gvc6')][_0x1cc4('‮bd', '2A4c')][0x0][_0x1cc4('‮be', 'd$Go')] && res[_0x1cc4('‮bf', '@tWm')][_0x1cc4('‮c0', 'ynrn')][0x0][_0x1cc4('‮c1', 'eQt7')]['activityId'] || '';
                } else {
                    await _0x2e2ecd[_0x1cc4('‫c2', 'y4(c')](takePostRequest, _0x1cc4('‫c3', 'T(O2'));
                }
            }
            if ($['outFlag']) {
                if (_0x2e2ecd[_0x1cc4('‮c4', 'ynrn')](_0x1cc4('‮c5', 'RwS8'), _0x2e2ecd['glSFW'])) {
                    console[_0x1cc4('‮c6', 'ZAK%')](_0x2e2ecd[_0x1cc4('‮c7', 'aOLJ')]);
                    return;
                } else {
                    var _0x305fd5 = _0x2e2ecd[_0x1cc4('‫c8', 'JVNo')][_0x1cc4('‫c9', 'ylwg')]('|'),
                        _0x373414 = 0x0;
                    while (!![]) {
                        switch (_0x305fd5[_0x373414++]) {
                            case '0':
                                $[_0x1cc4('‮ca', 'MixY')] = res[_0x1cc4('‫cb', 'fWCb')][_0x1cc4('‫cc', 'Oc(y')] || 0x0;
                                continue;
                            case '1':
                                $['isGameEnd'] = res[_0x1cc4('‮cd', '9t!Y')]['isGameEnd'] || ![];
                                continue;
                            case '2':
                                $['actorUuid'] = res[_0x1cc4('‫ce', 'irN4')][_0x1cc4('‫cf', 'bU&H')] || '';
                                continue;
                            case '3':
                                $['helpFriendStatus'] = res[_0x1cc4('‮d0', '$n0h')][_0x1cc4('‮d1', 'MixY')] || 0x0;
                                continue;
                            case '4':
                                $[_0x1cc4('‫d2', 'IBN7')] = res['data'][_0x1cc4('‫d3', 'CVM(')] || ![];
                                continue;
                            case '5':
                                $[_0x1cc4('‮d4', 'Oc(y')] = res['data'][_0x1cc4('‮d5', 'ky)^')] || 0x0;
                                continue;
                        }
                        break;
                    }
                }
            }
            await _0x2e2ecd[_0x1cc4('‫d6', 'a(0q')](takePostRequest, _0x1cc4('‫d7', 'Gvc6'));
            console['log']($[_0x1cc4('‮d8', 'zsxS')]);
            console.log(`当前助力:${$.shareUuids}`)
            if (_0x2e2ecd['vjyew']($['index'], 0x1)) {
                $.shareUuids = $[_0x1cc4('‮db', '0@Vk')];
                console[_0x1cc4('‮dc', 'a(0q')]('后面的号都会助力:' + $.shareUuids);
            }
            if (_0x2f1063) await $[_0x1cc4('‮dd', '@tWm')](_0x2e2ecd[_0x1cc4('‮de', 'y4(c')](parseInt, Math[_0x1cc4('‮df', '@q8]')]() * 0x3e8 + 0xbb8, 0xa));
            if ($['index'] % 0x3 == 0x0) console[_0x1cc4('‮e0', 'I4HJ')](_0x2e2ecd['YCwOm']);
            if (_0x2e2ecd[_0x1cc4('‫e1', 'Oc(y')](_0x2e2ecd['amyXK']($[_0x1cc4('‫e2', 'd$Go')], 0x3), 0x0)) await $[_0x1cc4('‫e3', 'RwS8')](_0x2e2ecd[_0x1cc4('‮e4', 'LC(7')](parseInt, _0x2e2ecd[_0x1cc4('‮e5', 'Ap%%')](_0x2e2ecd[_0x1cc4('‫e6', 'MixY')](Math['random'](), 0x1388), 0x1388), 0xa));
        }
    } catch (_0x2a3761) {
        if (_0x2e2ecd[_0x1cc4('‫a0', 'viUc')](_0x2e2ecd[_0x1cc4('‮e7', 'LK7B')], _0x2e2ecd[_0x1cc4('‮e8', '@q8]')])) {
            if (_0x2e2ecd['TMnWR'](typeof setcookies, _0x2e2ecd['NzChS'])) {
                setcookie = setcookies['split'](',');
            } else setcookie = setcookies;
            for (let _0x28852b of setcookie) {
                let _0x548a4a = _0x28852b[_0x1cc4('‮e9', 'N@@Z')](';')[0x0][_0x1cc4('‫ea', '0@Vk')]();
                if (_0x548a4a[_0x1cc4('‫eb', 'Gvc6')]('=')[0x1]) {
                    if (_0x548a4a[_0x1cc4('‮ec', 'd@*m')](_0x1cc4('‫ed', 'h@^u')) > -0x1) LZ_TOKEN_KEY = _0x2e2ecd[_0x1cc4('‮ee', 'y55(')](_0x548a4a['replace'](/ /g, ''), ';');
                    if (_0x2e2ecd[_0x1cc4('‮ef', 'RwS8')](_0x548a4a[_0x1cc4('‮ec', 'd@*m')]('LZ_TOKEN_VALUE='), -0x1)) LZ_TOKEN_VALUE = _0x2e2ecd[_0x1cc4('‮f0', '2A4c')](_0x548a4a[_0x1cc4('‮f1', 'ylwg')](/ /g, ''), ';');
                    if (_0x548a4a[_0x1cc4('‮f2', 'h@^u')]('lz_jdpin_token=') > -0x1) lz_jdpin_token = _0x2e2ecd['eIljj'](_0x2e2ecd[_0x1cc4('‫f3', '7O#X')]('', _0x548a4a[_0x1cc4('‮f4', 'eQt7')](/ /g, '')), ';');
                }
            }
        } else {
            console[_0x1cc4('‮f5', '7O#X')](_0x2a3761);
        }
    }
}
async function takePostRequest(_0x24b1e2) {
    var _0x5c3655 = {
        'JcwhO': _0x1cc4('‮f6', 'TjZ&'),
        'iIIey': _0x1cc4('‫f7', 'o#U3'),
        'RxhCS': function(_0xb05457, _0x3386b0) {
            return _0xb05457(_0x3386b0);
        },
        'flutJ': function(_0x4db630, _0x34e85f) {
            return _0x4db630 != _0x34e85f;
        },
        'KkevI': 'undefined',
        'idagu': function(_0xfd8102, _0x589285) {
            return _0xfd8102 == _0x589285;
        },
        'zZvtG': function(_0x54b877, _0x48b5bf) {
            return _0x54b877 === _0x48b5bf;
        },
        'NBxjk': _0x1cc4('‮f8', 'Gvc6'),
        'NqqJe': _0x1cc4('‮f9', 'MixY'),
        'OWQGP': _0x1cc4('‮fa', 'Ap%%'),
        'sMlwW': _0x1cc4('‮fb', 'ky)^'),
        'oaXKU': function(_0x3a0359) {
            return _0x3a0359();
        },
        'jGrwT': function(_0x3fb92a, _0x5729cd) {
            return _0x3fb92a == _0x5729cd;
        },
        'EBCBB': 'drawContent',
        'ycwCf': _0x1cc4('‫fc', 'T(O2'),
        'QIUmD': 'POST',
        'puYMb': 'getMyPing',
        'bkQWr': 'accessLogWithAD',
        'jwchK': _0x1cc4('‮fd', 'aOLJ'),
        'VIzgv': 'activityContent',
        'xXxyO': function(_0x5082ae, _0x406c90) {
            return _0x5082ae(_0x406c90);
        },
        'lAXWg': _0x1cc4('‮83', 'I4HJ'),
        'LcwPo': function(_0x3d3813, _0x3847bc) {
            return _0x3d3813(_0x3847bc);
        },
        'NANzZ': _0x1cc4('‫fe', 'qSmI'),
        'YiekF': function(_0x1d2434, _0x3ecf52) {
            return _0x1d2434 == _0x3ecf52;
        },
        'aTMKW': function(_0x3e0a72, _0x51e571) {
            return _0x3e0a72(_0x51e571);
        },
        'lMptq': function(_0x2f63cc, _0x53a856, _0x4cbb67, _0x55cdbf) {
            return _0x2f63cc(_0x53a856, _0x4cbb67, _0x55cdbf);
        }
    };
    if ($['outFlag']) return;
    let _0x1790c3 = _0x5c3655[_0x1cc4('‮ff', 'd@*m')];
    let _0xd4556f = '';
    let _0x43b55b = _0x5c3655[_0x1cc4('‮100', 'VdRt')];
    let _0x1de582 = '';
    switch (_0x24b1e2) {
        case _0x1cc4('‫101', 'y4(c'):
            url = _0x1cc4('‫102', 'viUc');
            _0xd4556f = _0x1cc4('‮103', 'eQt7');
            break;
        case 'getSimpleActInfoVo':
            url = _0x1790c3 + '/dz/common/getSimpleActInfoVo';
            _0xd4556f = 'activityId=' + $['activityId'];
            break;
        case _0x5c3655['puYMb']:
            url = _0x1790c3 + '/dingzhi/bd/common/getMyPing';
            _0xd4556f = 'userId=' + ($['shopId'] || $[_0x1cc4('‮104', 'T(O2')] || '') + '&token=' + $['Token'] + _0x1cc4('‮105', 'fWCb');
            break;
        case _0x5c3655['bkQWr']:
            url = _0x1790c3 + _0x1cc4('‫106', '#8xN');
            let _0x163501 = _0x1790c3 + _0x1cc4('‮107', 'I4HJ') + $[_0x1cc4('‫108', '9t!Y')] + _0x1cc4('‮109', 'aOLJ') + $[_0x1cc4('‫10a', 'ZAK%')];
            _0xd4556f = _0x1cc4('‫10b', 'viUc') + ($[_0x1cc4('‫10c', '@tWm')] || $[_0x1cc4('‮10d', 'RwS8')] || '') + _0x1cc4('‫10e', 'LC(7') + _0x5c3655[_0x1cc4('‫10f', 'MixY')](encodeURIComponent, $[_0x1cc4('‫110', '7O#X')]) + '&activityId=' + $['activityId'] + '&pageUrl=' + encodeURIComponent(_0x163501) + _0x1cc4('‫111', '2A4c');
            break;
        case _0x5c3655[_0x1cc4('‫112', 'LC(7')]:
            url = _0x1790c3 + _0x1cc4('‫113', 'qSmI');
            _0xd4556f = _0x1cc4('‮114', 'aOLJ') + encodeURIComponent($['Pin']);
            break;
        case _0x5c3655['VIzgv']:
            url = _0x1790c3 + '/dingzhi/union/cardgame2205/activityContent';
            _0xd4556f = 'activityId=' + $[_0x1cc4('‮115', 'qSmI')] + _0x1cc4('‮116', 'Gvc6') + _0x5c3655['xXxyO'](encodeURIComponent, $['Pin']) + _0x1cc4('‮117', 'IBN7') + _0x5c3655[_0x1cc4('‮118', 'ylwg')](encodeURIComponent, $['attrTouXiang']) + '&nick=' + _0x5c3655['xXxyO'](encodeURIComponent, $['nickname']) + _0x1cc4('‫119', '#8xN') + $['shareUuid'];
            break;
        case _0x5c3655['lAXWg']:
            url = _0x1790c3 + '/dingzhi/union/cardgame2205/myInfo?_=' + Date[_0x1cc4('‮11a', 'ylwg')]();
            _0xd4556f = _0x1cc4('‫11b', 'qSmI') + $[_0x1cc4('‫11c', 'aOLJ')] + _0x1cc4('‮11d', 'Mmpu') + _0x5c3655[_0x1cc4('‮11e', 'y55(')](encodeURIComponent, $[_0x1cc4('‮11f', '#8xN')]) + _0x1cc4('‫120', '2A4c') + $[_0x1cc4('‫121', 'irN4')];
            break;
        case _0x5c3655[_0x1cc4('‫122', 'dW&Q')]:
            url = _0x1790c3 + _0x1cc4('‫123', '@tWm') + Date['now']();
            _0xd4556f = _0x1cc4('‮124', 'N@@Z') + $[_0x1cc4('‫125', 'y4(c')] + _0x1cc4('‮11d', 'Mmpu') + _0x5c3655[_0x1cc4('‫126', 'eQt7')](encodeURIComponent, $[_0x1cc4('‮127', 'LC(7')]) + _0x1cc4('‮128', 'ZAK%') + $['actorUuid'];
            break;
        case '关注':
            url = _0x1790c3 + _0x1cc4('‮129', 'ZAK%') + Date[_0x1cc4('‫12a', 'Oc(y')]();
            _0xd4556f = 'taskId=followshop&param=&activityId=' + $[_0x1cc4('‫12b', 'ylwg')] + '&pin=' + encodeURIComponent($['Pin']) + _0x1cc4('‮12c', '7O#X') + $['actorUuid'];
            break;
        case _0x1cc4('‮12d', 'o#U3'):
            url = _0x1790c3 + '/dingzhi/bd/common/friendList?_=' + Date[_0x1cc4('‮12e', 'o#U3')]();
            _0xd4556f = _0x1cc4('‫12f', 'h@^u') + $[_0x1cc4('‮130', 'Gvc6')] + '&activityId=' + $['activityId'] + _0x1cc4('‫131', 'R4nM') + encodeURIComponent($[_0x1cc4('‮132', 'FlVz')]) + _0x1cc4('‮133', '@q8]');
            break;
        case '邀请':
        case '助力':
            if (_0x5c3655[_0x1cc4('‫134', 'JVNo')](_0x24b1e2, '助力')) {
                url = _0x1790c3 + _0x1cc4('‫135', 'ZAK%') + Date[_0x1cc4('‮136', '#8xN')]();
            }
            _0xd4556f = _0x1cc4('‫137', 'IBN7') + $['activityId'] + _0x1cc4('‫138', '9t!Y') + _0x5c3655['aTMKW'](encodeURIComponent, $[_0x1cc4('‫139', 'bU&H')]) + _0x1cc4('‮13a', 'ylwg') + $[_0x1cc4('‮13b', 'LC(7')] + _0x1cc4('‫13c', 'LK7B') + $[_0x1cc4('‮13d', '2A4c')];
            break;
        default:
            console[_0x1cc4('‮13e', '2A4c')]('错误' + _0x24b1e2);
    }
    await $[_0x1cc4('‮13f', 'VdRt')](0x1f4);
    let _0x593597 = _0x5c3655[_0x1cc4('‫140', '$n0h')](getPostRequest, url, _0xd4556f, _0x43b55b);
    return new Promise(async _0x4027b3 => {
        var _0x488345 = {
            'pDMUj': function(_0xf79086, _0x55db21) {
                return _0x5c3655['jGrwT'](_0xf79086, _0x55db21);
            },
            'KqvMa': _0x5c3655['OWQGP'],
            'tRIVB': function(_0xbccf32, _0x344b29) {
                return _0x5c3655[_0x1cc4('‮141', 'a(0q')](_0xbccf32, _0x344b29);
            },
            'OgVqU': _0x5c3655['EBCBB']
        };
        $[_0x1cc4('‫142', '@q8]')](_0x593597, (_0x7ae8bb, _0x269459, _0x5ed001) => {
            if (_0x5c3655[_0x1cc4('‮143', 'zsxS')] !== _0x5c3655[_0x1cc4('‫144', '#8xN')]) {
                try {
                    _0x5c3655['RxhCS'](setActivityCookie, _0x269459);
                    if (_0x7ae8bb) {
                        if (_0x269459 && _0x5c3655[_0x1cc4('‮145', 'ylwg')](typeof _0x269459[_0x1cc4('‮146', 'a93O')], _0x5c3655[_0x1cc4('‮147', 'viUc')])) {
                            if (_0x5c3655[_0x1cc4('‮148', 'JVNo')](_0x269459[_0x1cc4('‫149', 'ylwg')], 0x1ed)) {
                                if (_0x5c3655[_0x1cc4('‮14a', 'I4HJ')](_0x5c3655[_0x1cc4('‮14b', 'IBN7')], _0x5c3655[_0x1cc4('‮14c', 'bU&H')])) {
                                    if (_0x488345[_0x1cc4('‮14d', '@tWm')](_0x269459['statusCode'], 0x1ed)) {
                                        console[_0x1cc4('‮14e', 'T(O2')](_0x488345[_0x1cc4('‮14f', 'ynrn')]);
                                        $[_0x1cc4('‫150', 'I4HJ')] = !![];
                                    }
                                } else {
                                    console[_0x1cc4('‫1a', 'Gvc6')](_0x5c3655[_0x1cc4('‫151', 'irN4')]);
                                    $[_0x1cc4('‫152', '0@Vk')] = !![];
                                }
                            }
                        }
                        console[_0x1cc4('‮f5', '7O#X')]('' + $[_0x1cc4('‫153', 'o#U3')](_0x7ae8bb, _0x7ae8bb));
                        console[_0x1cc4('‫38', '0@Vk')](_0x24b1e2 + _0x1cc4('‮154', '9t!Y'));
                    } else {
                        dealReturn(_0x24b1e2, _0x5ed001);
                    }
                } catch (_0x568dd4) {
                    console[_0x1cc4('‮155', 'eQt7')](_0x568dd4, _0x269459);
                } finally {
                    if (_0x5c3655[_0x1cc4('‫156', 'o#U3')] !== _0x5c3655[_0x1cc4('‮157', 'ynrn')]) {
                        if (_0x488345['tRIVB'](_0x24b1e2, _0x1cc4('‫158', 'h@^u')) || _0x488345[_0x1cc4('‮159', '0@Vk')](_0x24b1e2, _0x488345[_0x1cc4('‮15a', 'R4nM')])) {
                            if (_0x5ed001) {
                                res = JSON[_0x1cc4('‫15b', 'FlVz')](_0x5ed001);
                            }
                        }
                    } else {
                        _0x5c3655[_0x1cc4('‫15c', 'Oc(y')](_0x4027b3);
                    }
                }
            } else {
                console[_0x1cc4('‮15d', 'IBN7')](_0x24b1e2 + ' ' + (res[_0x1cc4('‫15e', 'd$Go')] || ''));
            }
        });
    });
}
async function dealReturn(_0x139279, _0x3ed765) {
    var _0x241d3a = {
        'gDbmT': function(_0x158867, _0x5b5dea) {
            return _0x158867 > _0x5b5dea;
        },
        'zTbKc': _0x1cc4('‫15f', 'h@^u'),
        'XnxVI': _0x1cc4('‮160', '@tWm'),
        'smKVn': function(_0x5f3e4d, _0x576838) {
            return _0x5f3e4d == _0x576838;
        },
        'NFydx': function(_0x313b71, _0x21ca2e) {
            return _0x313b71 === _0x21ca2e;
        },
        'jWcyy': function(_0x779518, _0x1e9eab) {
            return _0x779518 != _0x1e9eab;
        },
        'BQxto': _0x1cc4('‮161', '9t!Y'),
        'fFWrd': function(_0x26b5aa, _0x30c770) {
            return _0x26b5aa != _0x30c770;
        },
        'zkmps': _0x1cc4('‫162', '2A4c'),
        'xwzSh': _0x1cc4('‮163', '@tWm'),
        'UDaTP': 'Rnegr',
        'FCHbg': _0x1cc4('‮164', 'LC(7'),
        'KvmpI': 'DVSwH',
        'bJQnZ': function(_0x2417b3, _0x560b05) {
            return _0x2417b3 == _0x560b05;
        },
        'WUOMo': function(_0x127960, _0xcf6924) {
            return _0x127960 === _0xcf6924;
        },
        'aCOod': _0x1cc4('‮165', '2A4c'),
        'SmLPt': 'AUSGn',
        'AjAjn': function(_0x217c87, _0x170110) {
            return _0x217c87 === _0x170110;
        },
        'mIKwh': _0x1cc4('‮166', 'Mmpu'),
        'tYfuU': _0x1cc4('‮167', 'o#U3'),
        'YquDD': _0x1cc4('‮168', 'ZAK%'),
        'QHPac': function(_0x96166, _0x22586c) {
            return _0x96166 !== _0x22586c;
        },
        'fAGMl': 'OCzPE',
        'fGAgn': _0x1cc4('‮169', 'CVM('),
        'dvTvf': 'getMyPing',
        'WytDo': _0x1cc4('‮16a', 'ky)^'),
        'vkInE': function(_0x4353f1, _0x406c9f) {
            return _0x4353f1 != _0x406c9f;
        },
        'HeqYz': 'https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png',
        'GlJnL': function(_0x235f91, _0x4ac4b4) {
            return _0x235f91 !== _0x4ac4b4;
        },
        'KlLcD': _0x1cc4('‫16b', '9t!Y'),
        'ALUsu': _0x1cc4('‫16c', 'bU&H'),
        'jYRSh': function(_0x1af28c, _0x1b767c) {
            return _0x1af28c === _0x1b767c;
        },
        'gnUYP': _0x1cc4('‫16d', 'dW&Q'),
        'jZZgP': _0x1cc4('‫16e', 'ULNx'),
        'uWKrA': function(_0x2b2ab3, _0x44b77e) {
            return _0x2b2ab3 !== _0x44b77e;
        },
        'ZFJzX': _0x1cc4('‫16f', 'o#U3'),
        'qtZTS': 'myinfo',
        'jjDni': function(_0x2af460, _0x5f1e74) {
            return _0x2af460 == _0x5f1e74;
        },
        'sMmmq': function(_0x226f9e, _0x266e2f) {
            return _0x226f9e === _0x266e2f;
        },
        'tltax': 'wwoMD',
        'PFWpi': function(_0x33dcc6, _0x506e09) {
            return _0x33dcc6 === _0x506e09;
        },
        'yLVbf': _0x1cc4('‮170', 'aOLJ'),
        'ZPkBm': _0x1cc4('‮171', 'RwS8'),
        'ggUoI': _0x1cc4('‮172', 'FlVz'),
        'PCkbD': _0x1cc4('‮173', 'FlVz'),
        'rtqQx': function(_0xd8faa2, _0x2e4114) {
            return _0xd8faa2 == _0x2e4114;
        },
        'QHgoO': _0x1cc4('‮174', 'a93O'),
        'wRiBJ': _0x1cc4('‫175', 'sDvs'),
        'ctzQQ': function(_0x439757, _0x3ee73f) {
            return _0x439757 === _0x3ee73f;
        },
        'JUQtP': function(_0x3e6ef3, _0x1aab7a) {
            return _0x3e6ef3 === _0x1aab7a;
        },
        'pgJhj': 'HafSo',
        'HkvbO': function(_0x3d8eff, _0x4ea662) {
            return _0x3d8eff === _0x4ea662;
        },
        'KzjPf': _0x1cc4('‫176', 'R4nM'),
        'XbEoy': _0x1cc4('‫177', 'Gvc6'),
        'DWTOS': 'followShop',
        'MjDMl': 'visitSku',
        'NorXm': _0x1cc4('‫178', 'Mmpu'),
        'jRhVW': 'sign',
        'dnize': 'addCart',
        'EvCMz': _0x1cc4('‫179', 'FlVz'),
        'jkvbu': function(_0x3c3d71, _0xd8d5bb) {
            return _0x3c3d71 == _0xd8d5bb;
        },
        'ngYiu': _0x1cc4('‫17a', 'h@^u'),
        'vpqgG': function(_0x570cac, _0x19bbca) {
            return _0x570cac !== _0x19bbca;
        },
        'ctWIN': _0x1cc4('‫17b', 'VdRt'),
        'XuyGR': function(_0xa0bd09, _0x39bfda) {
            return _0xa0bd09 !== _0x39bfda;
        },
        'nQbZb': _0x1cc4('‮17c', 'R4nM')
    };
    let _0x12a46f = '';
    try {
        if (_0x241d3a[_0x1cc4('‫17d', 'bU&H')] !== _0x241d3a[_0x1cc4('‫17e', 'irN4')]) {
            if (_0x241d3a[_0x1cc4('‮17f', 'MixY')](_0x139279, _0x1cc4('‫180', '@tWm')) || _0x139279 != 'drawContent') {
                if (_0x241d3a[_0x1cc4('‮181', 'fWCb')](_0x1cc4('‮182', 'sDvs'), 'opxgt')) {
                    if (_0x3ed765) {
                        _0x12a46f = JSON[_0x1cc4('‫183', 'MixY')](_0x3ed765);
                    }
                } else {
                    console[_0x1cc4('‮46', 'fWCb')](_0x139279 + ' ' + (_0x12a46f[_0x1cc4('‫184', 'y55(')] || ''));
                }
            }
        } else {
            if (_0x12a46f['errorMessage']) {
                if (_0x241d3a['gDbmT'](_0x12a46f['errorMessage']['indexOf']('火爆'), -0x1)) {
                    $[_0x1cc4('‫185', 'viUc')] = !![];
                }
            }
        }
    } catch (_0x54a53e) {
        console[_0x1cc4('‮e0', 'I4HJ')](_0x139279 + ' 执行任务异常');
        $[_0x1cc4('‮186', 'd@*m')] = ![];
    }
    try {
        if (_0x241d3a[_0x1cc4('‮187', 'N@@Z')](_0x241d3a[_0x1cc4('‮188', 'Oc(y')], _0x241d3a[_0x1cc4('‫189', 'ULNx')])) {
            switch (_0x139279) {
                case _0x1cc4('‫18a', 'ylwg'):
                    if (_0x241d3a['bJQnZ'](typeof _0x12a46f, _0x1cc4('‫18b', 'MixY'))) {
                        if (_0x241d3a['WUOMo'](_0x241d3a[_0x1cc4('‮18c', 'h@^u')], _0x241d3a[_0x1cc4('‮18d', 'LK7B')])) {
                            console[_0x1cc4('‮155', 'eQt7')](_0x139279 + ' ' + _0x3ed765);
                        } else {
                            if (_0x241d3a[_0x1cc4('‮18e', 'd@*m')](_0x12a46f['errcode'], 0x0)) {
                                if (typeof _0x12a46f[_0x1cc4('‮18f', 'irN4')] != _0x241d3a['BQxto']) $['Token'] = _0x12a46f[_0x1cc4('‫190', '7O#X')];
                            } else if (_0x12a46f[_0x1cc4('‫191', '2A4c')]) {
                                if (_0x241d3a[_0x1cc4('‫192', 'Ap%%')](_0x241d3a[_0x1cc4('‫193', 'y55(')], _0x1cc4('‮194', 'Mmpu'))) {
                                    console['log'](_0x139279 + ' ' + _0x3ed765);
                                } else {
                                    console[_0x1cc4('‫1a', 'Gvc6')](_0x1cc4('‫195', 'I4HJ') + (_0x12a46f[_0x1cc4('‫196', 'Gvc6')] || ''));
                                }
                            } else {
                                console[_0x1cc4('‫a7', 'zsxS')](_0x3ed765);
                            }
                        }
                    } else {
                        if (_0x241d3a[_0x1cc4('‮197', 'MixY')](_0x241d3a[_0x1cc4('‫198', 'o#U3')], _0x241d3a[_0x1cc4('‮199', 'TjZ&')])) {
                            console['log'](_0x3ed765);
                        } else {
                            console['log'](_0x241d3a[_0x1cc4('‮19a', 'LC(7')]);
                            $[_0x1cc4('‫19b', 'IBN7')] = !![];
                        }
                    }
                    break;
                case _0x241d3a[_0x1cc4('‮19c', 'Mmpu')]:
                    if (_0x241d3a[_0x1cc4('‫19d', 'o#U3')](typeof _0x12a46f, _0x241d3a['XnxVI'])) {
                        if (_0x1cc4('‫19e', 'a(0q') === _0x1cc4('‮19f', 'a(0q')) {
                            $[_0x1cc4('‮1a0', 'fWCb')] = $[_0x1cc4('‫1a1', 'FlVz')];
                            console['log'](_0x1cc4('‫1a2', 'ZAK%') + $[_0x1cc4('‫1a3', 'Gvc6')]);
                        } else {
                            if (_0x12a46f[_0x1cc4('‮1a4', 'RwS8')] && _0x12a46f[_0x1cc4('‫1a5', 'MixY')] === !![]) {
                                if (_0x241d3a['fFWrd'](typeof _0x12a46f[_0x1cc4('‫1a6', 'dW&Q')][_0x1cc4('‮1a7', '$n0h')], _0x241d3a[_0x1cc4('‮1a8', 'ylwg')])) $[_0x1cc4('‮1a9', 'I4HJ')] = _0x12a46f[_0x1cc4('‫1aa', 'Ap%%')]['shopId'];
                                if (_0x241d3a[_0x1cc4('‫1ab', 'qSmI')](typeof _0x12a46f[_0x1cc4('‮d0', '$n0h')][_0x1cc4('‫1ac', 'eQt7')], _0x241d3a['BQxto'])) $[_0x1cc4('‮1ad', 'Mmpu')] = _0x12a46f['data'][_0x1cc4('‫1ae', 'dW&Q')];
                            } else if (_0x12a46f[_0x1cc4('‮a4', '9t!Y')]) {
                                if (_0x241d3a['QHPac'](_0x241d3a[_0x1cc4('‫1af', 'ky)^')], _0x241d3a[_0x1cc4('‫1b0', '@tWm')])) {
                                    console[_0x1cc4('‮6c', 'Oc(y')](_0x139279 + ' ' + (_0x12a46f['errorMessage'] || ''));
                                } else {
                                    _0x3ed765 = _0x3ed765 && _0x3ed765[_0x1cc4('‫1b1', '0@Vk')](/jsonp_.*?\((.*?)\);/) && _0x3ed765[_0x1cc4('‫1b2', 'I4HJ')](/jsonp_.*?\((.*?)\);/)[0x1] || _0x3ed765;
                                    let _0x46dfab = $[_0x1cc4('‮1b3', 'd$Go')](_0x3ed765, _0x3ed765);
                                    if (_0x46dfab && typeof _0x46dfab == _0x241d3a['XnxVI']) {
                                        if (_0x46dfab && _0x241d3a[_0x1cc4('‮1b4', 'Gvc6')](_0x46dfab[_0x1cc4('‮1b5', 'R4nM')], !![])) {
                                            console[_0x1cc4('‫1b6', 'Mmpu')](_0x1cc4('‫1b7', 'T(O2') + (_0x46dfab[_0x1cc4('‫1b8', 'y4(c')][_0x1cc4('‫1b9', 'ylwg')]['venderCardName'] || ''));
                                            $['shopactivityId'] = _0x46dfab[_0x1cc4('‮1ba', 'a(0q')][_0x1cc4('‮1bb', 'LC(7')] && _0x46dfab['result']['interestsRuleList'][0x0] && _0x46dfab[_0x1cc4('‫1bc', 'g6ve')][_0x1cc4('‮1bd', 'RwS8')][0x0][_0x1cc4('‫1be', 'Mmpu')] && _0x46dfab[_0x1cc4('‫1bf', 'TjZ&')]['interestsRuleList'][0x0][_0x1cc4('‫1c0', 'h@^u')][_0x1cc4('‫1c1', 'T(O2')] || '';
                                        }
                                    } else {
                                        console[_0x1cc4('‫8c', 'dW&Q')](_0x3ed765);
                                    }
                                }
                            } else {
                                console[_0x1cc4('‮f5', '7O#X')](_0x139279 + ' ' + _0x3ed765);
                            }
                        }
                    } else {
                        console[_0x1cc4('‮c6', 'ZAK%')](_0x139279 + ' ' + _0x3ed765);
                    }
                    break;
                case _0x241d3a[_0x1cc4('‮1c2', 'ULNx')]:
                    if (typeof _0x12a46f == _0x241d3a[_0x1cc4('‮1c3', 'R4nM')]) {
                        if (_0x12a46f[_0x1cc4('‫1bc', 'g6ve')] && _0x241d3a[_0x1cc4('‮1c4', 'irN4')](_0x12a46f[_0x1cc4('‫1c5', 'd$Go')], !![])) {
                            if (_0x12a46f['data'] && _0x241d3a[_0x1cc4('‫1c6', 'y55(')](typeof _0x12a46f[_0x1cc4('‫1c7', 'qSmI')]['secretPin'], _0x241d3a[_0x1cc4('‮1c8', 'MixY')])) $[_0x1cc4('‫64', 'IBN7')] = _0x12a46f[_0x1cc4('‮cd', '9t!Y')][_0x1cc4('‫1c9', '0@Vk')];
                            if (_0x12a46f[_0x1cc4('‫1ca', 'a(0q')] && _0x241d3a[_0x1cc4('‫1cb', 'y4(c')](typeof _0x12a46f['data'][_0x1cc4('‫1cc', 'y55(')], _0x241d3a['BQxto'])) $[_0x1cc4('‫1cd', 'Mmpu')] = _0x12a46f[_0x1cc4('‮1ce', 'I4HJ')][_0x1cc4('‮1cf', 'a(0q')];
                        } else if (_0x12a46f[_0x1cc4('‫1d0', 'd@*m')]) {
                            console[_0x1cc4('‮13e', '2A4c')](_0x139279 + ' ' + (_0x12a46f[_0x1cc4('‮1d1', 'FlVz')] || ''));
                        } else {
                            console[_0x1cc4('‮24', 'N@@Z')](_0x139279 + ' ' + _0x3ed765);
                        }
                    } else {
                        console['log'](_0x139279 + ' ' + _0x3ed765);
                    }
                    break;
                case _0x241d3a['WytDo']:
                    if (typeof _0x12a46f == _0x1cc4('‮1d2', 'ULNx')) {
                        if (_0x12a46f['result'] && _0x241d3a['AjAjn'](_0x12a46f[_0x1cc4('‫1d3', 'ylwg')], !![])) {
                            if (_0x12a46f[_0x1cc4('‫1aa', 'Ap%%')] && _0x241d3a['vkInE'](typeof _0x12a46f[_0x1cc4('‮1d4', 'ULNx')][_0x1cc4('‫1d5', '0@Vk')], _0x1cc4('‫1d6', 'aOLJ'))) $[_0x1cc4('‮1d7', 'ky)^')] = _0x12a46f['data'][_0x1cc4('‫1d8', 'aOLJ')] || _0x241d3a['HeqYz'];
                        } else if (_0x12a46f['errorMessage']) {
                            if (_0x241d3a[_0x1cc4('‮1d9', 'Gvc6')](_0x241d3a[_0x1cc4('‫1da', '@tWm')], _0x241d3a[_0x1cc4('‫1db', 'VdRt')])) {
                                console[_0x1cc4('‮c6', 'ZAK%')](_0x139279 + ' ' + _0x3ed765);
                            } else {
                                console['log'](_0x139279 + ' ' + (_0x12a46f[_0x1cc4('‮1dc', 'g6ve')] || ''));
                            }
                        } else {
                            console['log'](_0x139279 + ' ' + _0x3ed765);
                        }
                    } else {
                        console['log'](_0x139279 + ' ' + _0x3ed765);
                    }
                    break;
                case _0x241d3a[_0x1cc4('‫1dd', 'viUc')]:
                    if (_0x241d3a[_0x1cc4('‫1de', 'T(O2')](typeof _0x12a46f, _0x241d3a['XnxVI'])) {
                        if (_0x12a46f[_0x1cc4('‮bf', '@tWm')] && _0x241d3a['jYRSh'](_0x12a46f[_0x1cc4('‮1df', 'qSmI')], !![])) {
                            $[_0x1cc4('‫1e0', 'viUc')] = _0x12a46f['data'][_0x1cc4('‫1e1', 'a93O')];
                            console[_0x1cc4('‫1e2', '@q8]')](_0x1cc4('‫1e3', 'a93O') + $[_0x1cc4('‮1e4', 'IBN7')] + ' 人');
                        } else if (_0x12a46f['errorMessage']) {
                            console['log'](_0x139279 + ' ' + (_0x12a46f['errorMessage'] || ''));
                        } else {
                            if (_0x241d3a[_0x1cc4('‫1e5', 'qSmI')](_0x241d3a[_0x1cc4('‫1e6', 'd@*m')], _0x241d3a[_0x1cc4('‫1e7', 'ZAK%')])) {
                                console[_0x1cc4('‫1e8', 'y4(c')](_0x241d3a[_0x1cc4('‮1e9', 'y55(')]);
                                return;
                            } else {
                                console[_0x1cc4('‫1ea', 'MixY')](_0x139279 + ' ' + _0x3ed765);
                            }
                        }
                    } else {
                        if (_0x241d3a[_0x1cc4('‮1eb', 'a(0q')](_0x241d3a[_0x1cc4('‫1ec', 'CVM(')], _0x1cc4('‫1ed', 'fWCb'))) {
                            console['log'](_0x139279 + ' ' + _0x3ed765);
                        } else {
                            $[_0x1cc4('‫1ee', '@q8]')](e, resp);
                        }
                    }
                    break;
                case _0x241d3a[_0x1cc4('‫1ef', 'fWCb')]:
                    if (_0x241d3a[_0x1cc4('‫1f0', 'JVNo')](typeof _0x12a46f, _0x241d3a[_0x1cc4('‮1f1', 'CVM(')])) {
                        if (_0x241d3a[_0x1cc4('‮1f2', 'FlVz')](_0x241d3a['tltax'], _0x241d3a[_0x1cc4('‮1f3', 'ZAK%')])) {
                            if (_0x12a46f['result'] && _0x241d3a[_0x1cc4('‫1f4', 'a(0q')](_0x12a46f['result'], !![])) {
                                $['openList'] = _0x12a46f[_0x1cc4('‫1f5', 'eQt7')][_0x1cc4('‮1f6', 'ZAK%')] || [];
                                $[_0x1cc4('‫1f7', 'JVNo')] = _0x12a46f[_0x1cc4('‫1f8', 'ynrn')]['drawScore'] || 0x0;
                                $[_0x1cc4('‫1f9', 'JVNo')] = _0x12a46f[_0x1cc4('‮1fa', 'ZAK%')]['score'] || 0x0;
                            } else if (_0x12a46f['errorMessage']) {
                                console[_0x1cc4('‮1fb', 'd@*m')](_0x139279 + ' ' + (_0x12a46f[_0x1cc4('‮1fc', '@q8]')] || ''));
                            } else {
                                if (_0x241d3a[_0x1cc4('‫1fd', 'R4nM')](_0x1cc4('‮1fe', 'y55('), _0x241d3a[_0x1cc4('‮1ff', '@q8]')])) {
                                    console[_0x1cc4('‮200', 'ULNx')](_0x139279 + ' ' + _0x3ed765);
                                } else {
                                    console['log'](e);
                                }
                            }
                        } else {
                            cookiesArr['push'](jdCookieNode[item]);
                        }
                    } else {
                        if (_0x241d3a[_0x1cc4('‫201', 'qSmI')](_0x241d3a[_0x1cc4('‫202', 'ky)^')], _0x241d3a['ggUoI'])) {
                            console[_0x1cc4('‫1ea', 'MixY')]('获取cookie失败');
                            return;
                        } else {
                            console[_0x1cc4('‮f5', '7O#X')](_0x139279 + ' ' + _0x3ed765);
                        }
                    }
                    break;
                case _0x241d3a[_0x1cc4('‫203', 'd$Go')]:
                    if (_0x241d3a[_0x1cc4('‮204', 'RwS8')](typeof _0x12a46f, _0x1cc4('‮205', 'y55('))) {
                        if (_0x241d3a[_0x1cc4('‫206', 'VdRt')] !== _0x241d3a[_0x1cc4('‫207', 'irN4')]) {
                            if (_0x12a46f[_0x1cc4('‮208', 'N@@Z')] && _0x241d3a[_0x1cc4('‮209', 'y55(')](_0x12a46f[_0x1cc4('‫20a', 'JVNo')], !![])) {
                                $['actorUuid'] = _0x12a46f[_0x1cc4('‫20b', '@q8]')]['uid'] || '';
                                $['followShop'] = _0x12a46f[_0x1cc4('‫20b', '@q8]')][_0x1cc4('‫20c', 'bU&H')] || 0x0;
                                $[_0x1cc4('‮20d', 'eQt7')] = _0x12a46f['data'][_0x1cc4('‮20e', 'sDvs')] || ![];
                                $[_0x1cc4('‫20f', 'MixY')] = _0x12a46f[_0x1cc4('‮210', '2A4c')][_0x1cc4('‫211', 'irN4')] || ![];
                                $[_0x1cc4('‮212', '@tWm')] = _0x12a46f['data'][_0x1cc4('‫213', 'T(O2')] || 0x0;
                                $['helpFriendStatus'] = _0x12a46f[_0x1cc4('‮214', 'sDvs')][_0x1cc4('‫215', 'bU&H')] || 0x0;
                            } else if (_0x12a46f[_0x1cc4('‮216', 'IBN7')]) {
                                if (_0x241d3a[_0x1cc4('‮217', '0@Vk')](_0x241d3a[_0x1cc4('‫218', 'y4(c')], _0x1cc4('‫219', 'R4nM'))) {
                                    console['log'](_0x3ed765);
                                } else {
                                    console[_0x1cc4('‫1ea', 'MixY')](_0x139279 + ' ' + (_0x12a46f[_0x1cc4('‮216', 'IBN7')] || ''));
                                }
                            } else {
                                console[_0x1cc4('‮200', 'ULNx')](_0x139279 + ' ' + _0x3ed765);
                            }
                        } else {
                            $[_0x1cc4('‮21a', '@q8]')] = _0x12a46f[_0x1cc4('‫21b', '7O#X')][_0x1cc4('‮21c', 'LK7B')];
                            console[_0x1cc4('‮e0', 'I4HJ')](_0x1cc4('‮21d', '0@Vk') + $[_0x1cc4('‮21c', 'LK7B')] + ' 人');
                        }
                    } else {
                        if (_0x241d3a[_0x1cc4('‮21e', 'o#U3')](_0x241d3a[_0x1cc4('‮21f', 'irN4')], _0x241d3a[_0x1cc4('‫220', 'zsxS')])) {
                            console[_0x1cc4('‫1b6', 'Mmpu')](_0x12a46f[_0x1cc4('‮221', 'Ap%%')]);
                            $[_0x1cc4('‫222', 'ky)^')] = _0x12a46f[_0x1cc4('‫223', 'fWCb')];
                            if (_0x12a46f[_0x1cc4('‫20a', 'JVNo')] && _0x12a46f['result'][_0x1cc4('‮224', 'h@^u')]) {
                                for (let _0x53b57d of _0x12a46f['result'][_0x1cc4('‮225', 'Oc(y')][_0x1cc4('‮226', 'ULNx')]) {
                                    console['log'](_0x1cc4('‫227', 'a93O') + _0x53b57d[_0x1cc4('‫228', 'sDvs')] + _0x53b57d[_0x1cc4('‮229', '$n0h')] + _0x53b57d['secondLineDesc']);
                                }
                            }
                        } else {
                            console['log'](_0x139279 + ' ' + _0x3ed765);
                        }
                    }
                    break;
                case 'startDraw':
                case _0x241d3a[_0x1cc4('‮22a', '$n0h')]:
                case _0x1cc4('‫22b', 'bU&H'):
                case _0x241d3a[_0x1cc4('‮22c', 'bU&H')]:
                case _0x241d3a[_0x1cc4('‮22d', 'a(0q')]:
                case _0x1cc4('‮22e', 'ylwg'):
                case _0x1cc4('‫22f', 'FlVz'):
                case _0x241d3a[_0x1cc4('‮230', 'RwS8')]:
                case _0x241d3a[_0x1cc4('‮231', 'y55(')]:
                case _0x241d3a[_0x1cc4('‫232', 'Ap%%')]:
                    if (_0x241d3a['jkvbu'](typeof _0x12a46f, 'object')) {
                        if (_0x12a46f[_0x1cc4('‫20a', 'JVNo')] && _0x12a46f[_0x1cc4('‫1bc', 'g6ve')] === !![]) {
                            console[_0x1cc4('‮24', 'N@@Z')](_0x139279 + ' ' + _0x3ed765);
                        } else if (_0x12a46f[_0x1cc4('‮216', 'IBN7')]) {
                            if (_0x241d3a['ngYiu'] !== _0x1cc4('‫233', '9t!Y')) {
                                console['log'](_0x139279 + ' ' + _0x3ed765);
                            } else {
                                console[_0x1cc4('‮15d', 'IBN7')](_0x139279 + ' ' + (_0x12a46f['errorMessage'] || ''));
                            }
                        } else {
                            if (_0x241d3a[_0x1cc4('‮234', 'LC(7')](_0x241d3a['ctWIN'], _0x1cc4('‫235', 'g6ve'))) {
                                console['log'](_0x139279 + ' ' + (_0x12a46f[_0x1cc4('‫236', 'eQt7')] || ''));
                            } else {
                                console[_0x1cc4('‫38', '0@Vk')](_0x139279 + ' ' + _0x3ed765);
                            }
                        }
                    } else {
                        if (_0x241d3a[_0x1cc4('‮237', 'Ap%%')]('dZQgy', _0x1cc4('‫238', 'Oc(y'))) {
                            if (_0x12a46f['result'] && _0x241d3a[_0x1cc4('‮181', 'fWCb')](_0x12a46f[_0x1cc4('‮1a4', 'RwS8')], !![])) {
                                if (_0x12a46f[_0x1cc4('‮239', 'Gvc6')] && _0x241d3a[_0x1cc4('‮23a', 'Ap%%')](typeof _0x12a46f['data']['secretPin'], _0x241d3a['BQxto'])) $[_0x1cc4('‫64', 'IBN7')] = _0x12a46f[_0x1cc4('‮23b', 'FlVz')][_0x1cc4('‮23c', 'JVNo')];
                                if (_0x12a46f[_0x1cc4('‮d0', '$n0h')] && _0x241d3a[_0x1cc4('‮23d', 'LC(7')](typeof _0x12a46f[_0x1cc4('‫23e', 'VdRt')]['nickname'], _0x241d3a['BQxto'])) $[_0x1cc4('‫23f', 'ylwg')] = _0x12a46f[_0x1cc4('‮240', 'viUc')][_0x1cc4('‫241', 'eQt7')];
                            } else if (_0x12a46f[_0x1cc4('‫242', 'T(O2')]) {
                                console[_0x1cc4('‮c6', 'ZAK%')](_0x139279 + ' ' + (_0x12a46f[_0x1cc4('‫243', 'bU&H')] || ''));
                            } else {
                                console[_0x1cc4('‮13e', '2A4c')](_0x139279 + ' ' + _0x3ed765);
                            }
                        } else {
                            console[_0x1cc4('‮200', 'ULNx')](_0x139279 + ' ' + _0x3ed765);
                        }
                    }
                    break;
                case '邀请':
                    break;
                case '助力':
                    if (typeof _0x12a46f == _0x1cc4('‮205', 'y55(')) {
                        if (_0x12a46f[_0x1cc4('‮bf', '@tWm')] && _0x12a46f[_0x1cc4('‮244', 'Oc(y')] === !![]) {
                            console['log'](_0x139279 + ' ' + _0x3ed765);
                        } else if (_0x12a46f[_0x1cc4('‮245', '0@Vk')]) {
                            console[_0x1cc4('‫1e2', '@q8]')](_0x139279 + ' ' + (_0x12a46f[_0x1cc4('‮245', '0@Vk')] || ''));
                        } else {
                            console[_0x1cc4('‫246', 'ylwg')](_0x139279 + ' ' + _0x3ed765);
                        }
                    } else {
                        console['log'](_0x139279 + ' ' + _0x3ed765);
                    }
                    break;
                case _0x241d3a[_0x1cc4('‫247', '0@Vk')]:
                    break;
                default:
                    console[_0x1cc4('‮248', 'qSmI')](_0x139279 + _0x1cc4('‫249', '$n0h') + _0x3ed765);
            }
            if (typeof _0x12a46f == _0x1cc4('‮205', 'y55(')) {
                if (_0x12a46f[_0x1cc4('‫24a', 'JVNo')]) {
                    if (_0x12a46f['errorMessage'][_0x1cc4('‫24b', 'y4(c')]('火爆') > -0x1) {
                        $[_0x1cc4('‮24c', 'LC(7')] = !![];
                    }
                }
            }
        } else {
            cookiesArr = [$[_0x1cc4('‫24d', 'LC(7')](_0x241d3a['zkmps']), $[_0x1cc4('‮24e', 'y4(c')](_0x241d3a['xwzSh']), ...jsonParse($[_0x1cc4('‮24f', 'FlVz')]('CookiesJD') || '[]')[_0x1cc4('‮250', 'ZAK%')](_0x3d42ca => _0x3d42ca['cookie'])][_0x1cc4('‫251', '7O#X')](_0x450bdd => !!_0x450bdd);
        }
    } catch (_0x47c78b) {
        console['log'](_0x47c78b);
    }
}

function getPostRequest(_0x279ffd, _0x1d133e, _0x1828c6 = _0x1cc4('‮252', 'Mmpu')) {
    var _0x17d40a = {
        'uGGxx': _0x1cc4('‮253', 'ylwg'),
        'nYhFV': _0x1cc4('‫254', '@tWm'),
        'RbxPs': function(_0x187753, _0xca2402) {
            return _0x187753 > _0xca2402;
        },
        'cGVLM': 'https://lzdz-isv.isvjcloud.com',
        'gcHuc': function(_0x30d2ab, _0x5ddd2d) {
            return _0x30d2ab !== _0x5ddd2d;
        },
        'RRVkH': _0x1cc4('‮255', 'a93O'),
        'YljIS': 'mwVAx',
        'VxSKB': function(_0x529f49, _0x3f6f32) {
            return _0x529f49 && _0x3f6f32;
        },
        'ucSUa': _0x1cc4('‮256', '7O#X')
    };
    let _0x5f3149 = {
        'Accept': _0x1cc4('‮257', 'd@*m'),
        'Accept-Encoding': _0x17d40a[_0x1cc4('‮258', 'VdRt')],
        'Accept-Language': 'zh-cn',
        'Connection': 'keep-alive',
        'Content-Type': _0x17d40a[_0x1cc4('‮259', 'g6ve')],
        'Cookie': cookie,
        'User-Agent': $['UA'],
        'X-Requested-With': _0x1cc4('‫25a', 'ylwg')
    };
    if (_0x17d40a['RbxPs'](_0x279ffd[_0x1cc4('‮25b', 'dW&Q')](_0x17d40a[_0x1cc4('‫25c', 'I4HJ')]), -0x1)) {
        if (_0x17d40a[_0x1cc4('‮25d', '@q8]')](_0x17d40a[_0x1cc4('‮25e', 'VdRt')], _0x17d40a['YljIS'])) {
            _0x5f3149[_0x1cc4('‫25f', 'ky)^')] = _0x1cc4('‫260', 'ynrn') + $['activityId'] + _0x1cc4('‫261', 'viUc') + $[_0x1cc4('‮262', 'aOLJ')];
            _0x5f3149['Cookie'] = '' + (_0x17d40a['VxSKB'](lz_jdpin_token_cookie, lz_jdpin_token_cookie) || '') + ($[_0x1cc4('‫263', 'N@@Z')] && _0x17d40a['ucSUa'] + $['Pin'] + ';' || '') + activityCookie;
        } else {
            console['log'](type + ' ' + data);
        }
    }
    return {
        'url': _0x279ffd,
        'method': _0x1828c6,
        'headers': _0x5f3149,
        'body': _0x1d133e,
        'timeout': 0x7530
    };
}

function getCk() {
    var _0x161c94 = {
        'fhubv': function(_0x544f32, _0x1f8608) {
            return _0x544f32 != _0x1f8608;
        },
        'XSIKL': _0x1cc4('‫264', '0@Vk'),
        'bVyOB': function(_0x5e474d, _0x5694aa) {
            return _0x5e474d == _0x5694aa;
        },
        'mtgdM': _0x1cc4('‫265', 'LC(7'),
        'uxbrV': function(_0x3b547a, _0x58e44f) {
            return _0x3b547a(_0x58e44f);
        },
        'uPkOZ': function(_0x4b2913) {
            return _0x4b2913();
        }
    };
    return new Promise(_0x31b09c => {
        let _0x57a160 = {
            'url': _0x1cc4('‫266', 'LC(7') + $[_0x1cc4('‫267', 'Mmpu')] + '&shareUuid=' + $[_0x1cc4('‮268', 'd@*m')],
            'followRedirect': ![],
            'headers': {
                'User-Agent': $['UA']
            },
            'timeout': 0x7530
        };
        $['get'](_0x57a160, async(_0x2079a9, _0x5c2593, _0x3f9c3c) => {
            try {
                if (_0x2079a9) {
                    if (_0x5c2593 && _0x161c94[_0x1cc4('‫269', 'Gvc6')](typeof _0x5c2593['statusCode'], _0x161c94['XSIKL'])) {
                        if (_0x161c94['bVyOB'](_0x5c2593[_0x1cc4('‫26a', 'fWCb')], 0x1ed)) {
                            console['log'](_0x161c94[_0x1cc4('‮26b', 'R4nM')]);
                            $[_0x1cc4('‫26c', 'CVM(')] = !![];
                        }
                    }
                    console[_0x1cc4('‮14e', 'T(O2')]('' + $[_0x1cc4('‮26d', 'dW&Q')](_0x2079a9));
                    console[_0x1cc4('‮87', 'TjZ&')]($[_0x1cc4('‮26e', 'bU&H')] + _0x1cc4('‮26f', '@tWm'));
                } else {
                    let _0x283189 = _0x3f9c3c[_0x1cc4('‮270', '@tWm')](/(活动已经结束)/) && _0x3f9c3c[_0x1cc4('‮271', 'dW&Q')](/(活动已经结束)/)[0x1] || '';
                    if (_0x283189) {
                        $[_0x1cc4('‮272', 'MixY')] = !![];
                        console['log'](_0x1cc4('‫273', 'aOLJ'));
                    }
                    _0x161c94[_0x1cc4('‫274', 'g6ve')](setActivityCookie, _0x5c2593);
                }
            } catch (_0x36b2ee) {
                $[_0x1cc4('‫275', 'R4nM')](_0x36b2ee, _0x5c2593);
            } finally {
                _0x161c94[_0x1cc4('‮276', 'g6ve')](_0x31b09c);
            }
        });
    });
}

function setActivityCookie(_0xcaf236) {
    var _0x4a8c9a = {
        'epiVr': function(_0x561216) {
            return _0x561216();
        },
        'uiWaY': function(_0x2d8dd2, _0x5b0b6f) {
            return _0x2d8dd2 === _0x5b0b6f;
        },
        'BrwON': _0x1cc4('‫277', 'I4HJ'),
        'ktYqo': function(_0x4a7d95, _0x5d94af) {
            return _0x4a7d95 === _0x5d94af;
        },
        'WlqLV': _0x1cc4('‮278', 'sDvs'),
        'jIBlU': 'object',
        'MlyDl': function(_0xe27267, _0x27fa64) {
            return _0xe27267 === _0x27fa64;
        },
        'tGOZQ': 'pmeiM',
        'CUHZt': function(_0x51f4b1, _0x1aa0c1) {
            return _0x51f4b1 === _0x1aa0c1;
        },
        'bDNnE': _0x1cc4('‮279', 'fWCb'),
        'BexOg': function(_0x1aab07, _0x16cf3f) {
            return _0x1aab07 + _0x16cf3f;
        },
        'NSUTv': function(_0x5a2df4, _0x3e88aa) {
            return _0x5a2df4 > _0x3e88aa;
        },
        'Sygbv': function(_0x2ebd67, _0x15cc32) {
            return _0x2ebd67 && _0x15cc32;
        }
    };
    let _0x480c36 = '';
    let _0xafa5a3 = '';
    let _0x94ace7 = '';
    let _0x4004f3 = _0xcaf236 && _0xcaf236[_0x1cc4('‫27a', '@tWm')] && (_0xcaf236['headers'][_0x1cc4('‫27b', 'FlVz')] || _0xcaf236[_0x1cc4('‫27c', 'Gvc6')][_0x4a8c9a[_0x1cc4('‮27d', 'I4HJ')]] || '') || '';
    let _0xdc8e0d = '';
    if (_0x4004f3) {
        if (_0x4a8c9a[_0x1cc4('‫27e', 'I4HJ')](_0x4a8c9a[_0x1cc4('‮27f', 'LK7B')], _0x1cc4('‮280', 'RwS8'))) {
            _0x4a8c9a['epiVr'](resolve);
        } else {
            if (typeof _0x4004f3 != _0x4a8c9a['jIBlU']) {
                if (_0x4a8c9a[_0x1cc4('‫281', 'CVM(')](_0x4a8c9a[_0x1cc4('‮282', '$n0h')], _0x4a8c9a['tGOZQ'])) {
                    _0xdc8e0d = _0x4004f3[_0x1cc4('‫c9', 'ylwg')](',');
                } else {
                    $['errorJoinShop'] = res[_0x1cc4('‫283', 'N@@Z')];
                    console[_0x1cc4('‮284', 'aOLJ')]('' + (res[_0x1cc4('‫285', 'a93O')] || ''));
                }
            } else _0xdc8e0d = _0x4004f3;
            for (let _0x1a5d64 of _0xdc8e0d) {
                if (_0x4a8c9a[_0x1cc4('‫286', '0@Vk')](_0x4a8c9a[_0x1cc4('‫287', 'RwS8')], _0x4a8c9a['bDNnE'])) {
                    let _0x3e382c = _0x1a5d64['split'](';')[0x0][_0x1cc4('‫288', 'Mmpu')]();
                    if (_0x3e382c['split']('=')[0x1]) {
                        if (_0x3e382c[_0x1cc4('‫24b', 'y4(c')](_0x1cc4('‮289', 'a(0q')) > -0x1) _0x480c36 = _0x4a8c9a[_0x1cc4('‮28a', 'Ap%%')](_0x3e382c['replace'](/ /g, ''), ';');
                        if (_0x3e382c['indexOf'](_0x1cc4('‮28b', '#8xN')) > -0x1) _0xafa5a3 = _0x3e382c[_0x1cc4('‮28c', '@tWm')](/ /g, '') + ';';
                        if (_0x4a8c9a[_0x1cc4('‫28d', 'o#U3')](_0x3e382c['indexOf'](_0x1cc4('‮28e', 'a(0q')), -0x1)) _0x94ace7 = _0x4a8c9a[_0x1cc4('‫28f', 'T(O2')]('' + _0x3e382c['replace'](/ /g, ''), ';');
                    }
                } else {
                    if (res['result'] && _0x4a8c9a[_0x1cc4('‮290', 'Oc(y')](res[_0x1cc4('‮291', 'd@*m')], !![])) {
                        $['openList'] = res[_0x1cc4('‫ce', 'irN4')][_0x1cc4('‫292', '0@Vk')] || [];
                        $[_0x1cc4('‫293', 'irN4')] = res[_0x1cc4('‫cb', 'fWCb')][_0x1cc4('‫294', 'N@@Z')] || 0x0;
                        $[_0x1cc4('‫295', '9t!Y')] = res[_0x1cc4('‮1fa', 'ZAK%')][_0x1cc4('‮296', 'LC(7')] || 0x0;
                    } else if (res[_0x1cc4('‮297', '7O#X')]) {
                        console[_0x1cc4('‮155', 'eQt7')](type + ' ' + (res['errorMessage'] || ''));
                    } else {
                        console[_0x1cc4('‫1e8', 'y4(c')](type + ' ' + data);
                    }
                }
            }
        }
    }
    if (_0x4a8c9a[_0x1cc4('‫298', '9t!Y')](_0x480c36, _0xafa5a3)) activityCookie = _0x480c36 + ' ' + _0xafa5a3;
    if (_0x94ace7) lz_jdpin_token_cookie = _0x94ace7;
}
async function getUA() {
    var _0x4b8d79 = {
        'sIjCa': function(_0x5ca5c2, _0x32110f) {
            return _0x5ca5c2(_0x32110f);
        }
    };
    $['UA'] = 'jdapp;iPhone;10.1.4;13.1.2;' + _0x4b8d79['sIjCa'](randomString, 0x28) + ';network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1';
}

function randomString(_0x46df03) {
    var _0x30fb96 = {
        'pzeVs': function(_0x202d7e, _0x7b9b9a) {
            return _0x202d7e || _0x7b9b9a;
        },
        'JUwTO': 'abcdef0123456789',
        'OCgJr': function(_0x29a1b1, _0x9beb56) {
            return _0x29a1b1 < _0x9beb56;
        },
        'UvlME': function(_0x412934, _0x50967d) {
            return _0x412934 * _0x50967d;
        }
    };
    _0x46df03 = _0x30fb96['pzeVs'](_0x46df03, 0x20);
    let _0x2f04ad = _0x30fb96['JUwTO'],
        _0x1f1082 = _0x2f04ad[_0x1cc4('‮299', 'LK7B')],
        _0xeb65a9 = '';
    for (i = 0x0; _0x30fb96['OCgJr'](i, _0x46df03); i++) _0xeb65a9 += _0x2f04ad[_0x1cc4('‮29a', 'VdRt')](Math[_0x1cc4('‮29b', 'LK7B')](_0x30fb96[_0x1cc4('‫29c', 'MixY')](Math[_0x1cc4('‮29d', 'h@^u')](), _0x1f1082)));
    return _0xeb65a9;
}

function random(_0x53cfdf, _0x1221f0) {
    var _0x3503c4 = {
        'lkkYk': function(_0x55f2cc, _0x4be5bf) {
            return _0x55f2cc + _0x4be5bf;
        },
        'SOgvy': function(_0x24139e, _0x23603e) {
            return _0x24139e * _0x23603e;
        },
        'vMLWF': function(_0x95b976, _0x119fcf) {
            return _0x95b976 - _0x119fcf;
        }
    };
    return _0x3503c4[_0x1cc4('‫29e', 'y55(')](Math[_0x1cc4('‫29f', 'JVNo')](_0x3503c4[_0x1cc4('‫2a0', 'viUc')](Math[_0x1cc4('‫2a1', 'T(O2')](), _0x3503c4[_0x1cc4('‮2a2', 'y4(c')](_0x1221f0, _0x53cfdf))), _0x53cfdf);
}

function jsonParse(_0xfbe56) {
    var _0x354932 = {
        'sKLfO': function(_0x2fb832, _0x4e6ae0) {
            return _0x2fb832 == _0x4e6ae0;
        },
        'BXDSC': _0x1cc4('‫2a3', 'Gvc6'),
        'ueXlV': _0x1cc4('‮2a4', 'o#U3')
    };
    if (_0x354932[_0x1cc4('‫2a5', 'a93O')](typeof _0xfbe56, _0x354932[_0x1cc4('‫2a6', '2A4c')])) {
        try {
            return JSON[_0x1cc4('‮2a7', '#8xN')](_0xfbe56);
        } catch (_0xe3a96d) {
            console[_0x1cc4('‮2a8', 'bU&H')](_0xe3a96d);
            $[_0x1cc4('‫2a9', '@q8]')]($['name'], '', _0x354932[_0x1cc4('‮2aa', 'TjZ&')]);
            return [];
        }
    }
}
async function joinShop() {
    var _0x1e9fe1 = {
        'InSRl': function(_0x532059, _0x2ff213) {
            return _0x532059 || _0x2ff213;
        },
        'MZBid': _0x1cc4('‫2ab', 'o#U3'),
        'XJame': function(_0x1c694d, _0x173a63) {
            return _0x1c694d < _0x173a63;
        },
        'DABBa': function(_0x27d74b, _0x199125) {
            return _0x27d74b * _0x199125;
        },
        'vunaq': function(_0x325d09) {
            return _0x325d09();
        },
        'BsWds': function(_0x14d1b9, _0x521735) {
            return _0x14d1b9 === _0x521735;
        },
        'fEAEu': _0x1cc4('‮2ac', '9t!Y'),
        'YElpv': function(_0x32ff96, _0x26549e) {
            return _0x32ff96 !== _0x26549e;
        },
        'wrIpp': _0x1cc4('‫2ad', 'y4(c'),
        'BGBkh': _0x1cc4('‮2ae', 'MixY'),
        'hXieG': function(_0x231786, _0x3bb96b) {
            return _0x231786 !== _0x3bb96b;
        },
        'QirSA': 'lkgeY',
        'mkeXs': function(_0x6224d5, _0x3d4d70) {
            return _0x6224d5 === _0x3d4d70;
        },
        'tLguk': _0x1cc4('‫2af', 'a93O'),
        'gaxgr': _0x1cc4('‫2b0', 'qSmI'),
        'nTvkk': '*/*',
        'HzkYg': _0x1cc4('‮2b1', 'RwS8'),
        'oNbNk': _0x1cc4('‮2b2', 'Gvc6'),
        'JIJDf': _0x1cc4('‮2b3', 'g6ve')
    };
    if (!$['joinVenderId']) return;
    return new Promise(async _0x3748a9 => {
        var _0x4cce1b = {
            'xcCeD': function(_0x34e9af) {
                return _0x1e9fe1[_0x1cc4('‫2b4', '2A4c')](_0x34e9af);
            },
            'KhZZd': '获取[Pin]失败！',
            'VSqYx': function(_0x41ba89, _0x26df45) {
                return _0x1e9fe1[_0x1cc4('‮2b5', 'viUc')](_0x41ba89, _0x26df45);
            },
            'HvRLZ': _0x1e9fe1[_0x1cc4('‮2b6', '@q8]')],
            'CLNrj': function(_0xafc6a8, _0x382434) {
                return _0x1e9fe1[_0x1cc4('‮2b7', 'I4HJ')](_0xafc6a8, _0x382434);
            },
            'EAEDO': _0x1e9fe1[_0x1cc4('‮2b8', 'MixY')],
            'QsFdE': 'CuIdT',
            'PQVSS': function(_0x2e5bdd, _0x3c5118) {
                return _0x2e5bdd == _0x3c5118;
            },
            'MXaLC': _0x1cc4('‫2b9', 'ky)^'),
            'Ukjye': function(_0x28d3da, _0x13bfd7) {
                return _0x1e9fe1[_0x1cc4('‮2ba', 'y55(')](_0x28d3da, _0x13bfd7);
            },
            'TPYdB': _0x1e9fe1['BGBkh'],
            'usvyE': function(_0x4f4fd6, _0x693497) {
                return _0x1e9fe1['hXieG'](_0x4f4fd6, _0x693497);
            },
            'rBGZL': 'dEhfs',
            'BMtQx': _0x1e9fe1[_0x1cc4('‮2bb', 'ynrn')],
            'gMWBH': function(_0x1086bf) {
                return _0x1086bf();
            }
        };
        if (_0x1e9fe1['mkeXs'](_0x1e9fe1[_0x1cc4('‫2bc', 'Gvc6')], _0x1e9fe1[_0x1cc4('‮2bd', 'qSmI')])) {
            e = _0x1e9fe1[_0x1cc4('‮2be', 'Oc(y')](e, 0x20);
            let _0x4be57f = _0x1e9fe1[_0x1cc4('‫2bf', 'MixY')],
                _0x34c983 = _0x4be57f[_0x1cc4('‫2c0', 'ULNx')],
                _0x4fc4f0 = '';
            for (i = 0x0; _0x1e9fe1[_0x1cc4('‮2c1', 'VdRt')](i, e); i++) _0x4fc4f0 += _0x4be57f[_0x1cc4('‮2c2', 'ZAK%')](Math[_0x1cc4('‫2c3', 'y4(c')](_0x1e9fe1[_0x1cc4('‮2c4', '7O#X')](Math['random'](), _0x34c983)));
            return _0x4fc4f0;
        } else {
            $['errorJoinShop'] = _0x1cc4('‫5b', 'ylwg');
            let _0x83b226 = '';
            if ($[_0x1cc4('‮2c5', 'o#U3')]) _0x83b226 = _0x1cc4('‮2c6', '@tWm') + $['shopactivityId'];
            let _0x1fa4a5 = _0x1cc4('‫2c7', 'Ap%%') + $['joinVenderId'] + '","shopId":"' + $['joinVenderId'] + '","bindByVerifyCodeFlag":1,"registerExtend":{},"writeChildFlag":0' + _0x83b226 + _0x1cc4('‫2c8', 'd@*m');
            let _0x59cb62 = _0x1cc4('‮2c9', 'T(O2');
            const _0xfbef8d = {
                'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=' + _0x1fa4a5 + '&clientVersion=9.2.0&client=H5&uuid=88888&h5st=' + _0x59cb62,
                'headers': {
                    'accept': _0x1e9fe1[_0x1cc4('‫2ca', 'qSmI')],
                    'accept-encoding': _0x1e9fe1['HzkYg'],
                    'accept-language': _0x1e9fe1[_0x1cc4('‮2cb', 'VdRt')],
                    'cookie': cookie,
                    'origin': 'https://shopmember.m.jd.com/',
                    'user-agent': _0x1e9fe1[_0x1cc4('‫2cc', 'sDvs')]
                }
            };
            $[_0x1cc4('‫2cd', 'eQt7')](_0xfbef8d, async(_0x571474, _0x2e46b0, _0x4b266d) => {
                if (_0x4cce1b[_0x1cc4('‫2ce', 'd@*m')](_0x4cce1b[_0x1cc4('‮2cf', 'bU&H')], _0x4cce1b['HvRLZ'])) {
                    try {
                        if (_0x4cce1b[_0x1cc4('‮2d0', 'T(O2')](_0x4cce1b['EAEDO'], _0x4cce1b[_0x1cc4('‮2d1', 'Ap%%')])) {
                            _0x4b266d = _0x4b266d && _0x4b266d[_0x1cc4('‮2d2', 'ylwg')](/jsonp_.*?\((.*?)\);/) && _0x4b266d[_0x1cc4('‮2d3', 'JVNo')](/jsonp_.*?\((.*?)\);/)[0x1] || _0x4b266d;
                            let _0x1ac98e = $[_0x1cc4('‫2d4', 'a93O')](_0x4b266d, _0x4b266d);
                            if (_0x1ac98e && _0x4cce1b[_0x1cc4('‫2d5', 'ZAK%')](typeof _0x1ac98e, _0x4cce1b[_0x1cc4('‫2d6', 'sDvs')])) {
                                if (_0x4cce1b[_0x1cc4('‮2d7', 'y4(c')](_0x4cce1b[_0x1cc4('‮2d8', 'eQt7')], _0x4cce1b[_0x1cc4('‮2d9', 'JVNo')])) {
                                    if (_0x4b266d) {
                                        _0x1ac98e = JSON[_0x1cc4('‮2da', '0@Vk')](_0x4b266d);
                                    }
                                } else {
                                    if (_0x1ac98e && _0x1ac98e[_0x1cc4('‫2db', '@q8]')] === !![]) {
                                        console[_0x1cc4('‮87', 'TjZ&')](_0x1ac98e[_0x1cc4('‮2dc', 'ZAK%')]);
                                        $[_0x1cc4('‮2dd', 'ULNx')] = _0x1ac98e[_0x1cc4('‮2de', 'JVNo')];
                                        if (_0x1ac98e['result'] && _0x1ac98e[_0x1cc4('‫2df', 'sDvs')][_0x1cc4('‮2e0', '9t!Y')]) {
                                            for (let _0x155698 of _0x1ac98e[_0x1cc4('‫1bf', 'TjZ&')][_0x1cc4('‫2e1', 'Ap%%')]['giftList']) {
                                                console['log']('入会获得:' + _0x155698[_0x1cc4('‫2e2', '$n0h')] + _0x155698['prizeName'] + _0x155698[_0x1cc4('‫2e3', 'Oc(y')]);
                                            }
                                        }
                                    } else if (_0x1ac98e && typeof _0x1ac98e == _0x4cce1b[_0x1cc4('‮2e4', 'TjZ&')] && _0x1ac98e['message']) {
                                        $[_0x1cc4('‮2e5', 'y55(')] = _0x1ac98e[_0x1cc4('‮2e6', 'h@^u')];
                                        console[_0x1cc4('‮2e7', 'RwS8')]('' + (_0x1ac98e['message'] || ''));
                                    } else {
                                        console[_0x1cc4('‮24', 'N@@Z')](_0x4b266d);
                                    }
                                }
                            } else {
                                console['log'](_0x4b266d);
                            }
                        } else {
                            url = domain + _0x1cc4('‮2e8', 'R4nM') + Date[_0x1cc4('‮2e9', 'Mmpu')]();
                        }
                    } catch (_0x4ebf0b) {
                        if (_0x4cce1b['usvyE'](_0x4cce1b['rBGZL'], _0x4cce1b['BMtQx'])) {
                            $[_0x1cc4('‮2ea', 'y4(c')](_0x4ebf0b, _0x2e46b0);
                        } else {
                            _0x4cce1b[_0x1cc4('‮2eb', 'RwS8')](_0x3748a9);
                        }
                    } finally {
                        _0x4cce1b[_0x1cc4('‮2ec', '0@Vk')](_0x3748a9);
                    }
                } else {
                    console['log'](_0x4cce1b[_0x1cc4('‮2ed', 'Ap%%')]);
                    return;
                }
            });
        }
    });
}
async function getshopactivityId() {
    var _0x1d9db2 = {
        'ZOYdP': function(_0x5c164e, _0x5d2dd8) {
            return _0x5c164e == _0x5d2dd8;
        },
        'LpzZj': function(_0x1ee648, _0x285828) {
            return _0x1ee648 !== _0x285828;
        },
        'eQEaL': _0x1cc4('‮2ee', 'ZAK%'),
        'AMQbI': _0x1cc4('‫2ef', 'MixY'),
        'fDIxo': _0x1cc4('‮2f0', 'a(0q'),
        'fTTRC': _0x1cc4('‫2f1', 'CVM('),
        'jcWcM': _0x1cc4('‫2f2', 'sDvs'),
        'ctCne': _0x1cc4('‫2f3', 'Mmpu')
    };
    return new Promise(async _0x100703 => {
        var _0x1eb5eb = {
            'fAFaK': function(_0x39d3ab, _0x22e14f) {
                return _0x1d9db2[_0x1cc4('‫2f4', 'VdRt')](_0x39d3ab, _0x22e14f);
            },
            'zKNjH': function(_0x1f2250, _0x17cb91) {
                return _0x1f2250 !== _0x17cb91;
            },
            'sriqm': _0x1cc4('‮2f5', 'a93O'),
            'jgASe': function(_0x5c8d2a) {
                return _0x5c8d2a();
            }
        };
        if (_0x1d9db2['LpzZj'](_0x1d9db2[_0x1cc4('‫2f6', 'MixY')], _0x1cc4('‮2f7', 'TjZ&'))) {
            console['log'](type + ' ' + (res[_0x1cc4('‮1fc', '@q8]')] || ''));
        } else {
            let _0x39515d = _0x1cc4('‮2f8', 'T(O2') + $[_0x1cc4('‫2f9', 'ky)^')] + _0x1cc4('‮2fa', 'ky)^');
            let _0x226a71 = '20220412164634306%3Bf5299392a200d6d9ffced997e5790dcc%3B169f1%3Btk02wc0f91c8a18nvWVMGrQO1iFlpQre2Sh2mGtNro1l0UpZqGLRbHiyqfaUQaPy64WT7uz7E%2FgujGAB50kyO7hwByWK%3B77c8a05e6a66faeed00e4e280ad8c40fab60723b5b561230380eb407e19354f7%3B3.0%3B1649753194306';
            const _0x2f9dd9 = {
                'url': 'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body=' + _0x39515d + _0x1cc4('‫2fb', 'ZAK%') + _0x226a71,
                'headers': {
                    'accept': _0x1d9db2['AMQbI'],
                    'accept-encoding': _0x1d9db2[_0x1cc4('‮2fc', '#8xN')],
                    'accept-language': _0x1d9db2[_0x1cc4('‫2fd', 'd@*m')],
                    'cookie': cookie,
                    'origin': _0x1d9db2[_0x1cc4('‫2fe', 'eQt7')],
                    'user-agent': _0x1d9db2['ctCne']
                }
            };
            $[_0x1cc4('‫2ff', '@tWm')](_0x2f9dd9, async(_0x3b5f35, _0x55f364, _0x4ade4a) => {
                try {
                    _0x4ade4a = _0x4ade4a && _0x4ade4a[_0x1cc4('‫300', 'TjZ&')](/jsonp_.*?\((.*?)\);/) && _0x4ade4a[_0x1cc4('‫301', 'VdRt')](/jsonp_.*?\((.*?)\);/)[0x1] || _0x4ade4a;
                    let _0x2ef00d = $['toObj'](_0x4ade4a, _0x4ade4a);
                    if (_0x2ef00d && _0x1eb5eb[_0x1cc4('‮302', 'T(O2')](typeof _0x2ef00d, _0x1cc4('‫303', 'o#U3'))) {
                        if (_0x1eb5eb[_0x1cc4('‮304', 'Ap%%')](_0x1eb5eb[_0x1cc4('‮305', 'RwS8')], _0x1eb5eb[_0x1cc4('‮306', 'Gvc6')])) {
                            console[_0x1cc4('‮307', 'o#U3')](_0x4ade4a);
                        } else {
                            if (_0x2ef00d && _0x1eb5eb[_0x1cc4('‫308', '7O#X')](_0x2ef00d['success'], !![])) {
                                console['log'](_0x1cc4('‫309', '0@Vk') + (_0x2ef00d[_0x1cc4('‮30a', '9t!Y')][_0x1cc4('‮30b', 'VdRt')][_0x1cc4('‮30c', 'N@@Z')] || ''));
                                $[_0x1cc4('‫30d', 'zsxS')] = _0x2ef00d[_0x1cc4('‫30e', 'bU&H')]['interestsRuleList'] && _0x2ef00d[_0x1cc4('‮1ba', 'a(0q')][_0x1cc4('‫30f', 'Mmpu')][0x0] && _0x2ef00d[_0x1cc4('‮244', 'Oc(y')]['interestsRuleList'][0x0][_0x1cc4('‮310', 'ynrn')] && _0x2ef00d[_0x1cc4('‮311', '$n0h')]['interestsRuleList'][0x0]['interestsInfo']['activityId'] || '';
                            }
                        }
                    } else {
                        console['log'](_0x4ade4a);
                    }
                } catch (_0x25b8d9) {
                    $['logErr'](_0x25b8d9, _0x55f364);
                } finally {
                    _0x1eb5eb[_0x1cc4('‮312', 'bU&H')](_0x100703);
                }
            });
        }
    });
};
_0xodB = 'jsjiami.com.v6';
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
