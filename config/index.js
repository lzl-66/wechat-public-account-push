export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx85d3c2466e1877fb",
    // 公众号appSecret
    appSecret: "f96a05b532d3a0ea5d1af5914c42ba6e",
    // 模板消息id
    templateId: "wWsFFV63aE-D480yeJi_1cQedhVKgLfJyFitJvTav20",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oLgew6vL8Mo1Jv9iALqDqZMPK5KE","oLgew6o5mM73ZxGDZpN0Bm63UEh0","oLgew6n10aDdgyaCJhpfAdulUX08"],
     
    // 信息配置
    // 所在省份
    province: "山西",
    // 所在城市
    city: "太原",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "卢鹏", "year": "1998", "date": "07-26", "type": 'new'},
      //{"name": "家公", "year": "1993", "date": "08-09", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2015-05-01",
    // 结婚纪念日
    marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
