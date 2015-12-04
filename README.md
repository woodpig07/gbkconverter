# GBKConverter

将utf8编码的文字转换到gbk编码web service工具。
支持get, post, jsonp
默认开启跨域，默认端口3000


## API

### GET
```
/api/v1/query?text=<utf8_string>

//返回json数据，例如
//{"rawText":"哈哈","convertedText":"%B9%FE%B9%FE","encode":"GBK"}
```
### POST
```
/api/v1/query

// POST数据格式
//{text: "utf8_string"}
//返回结果和get一样
```

### JSONP

```
/api/v1/jsonp?text=<utf8_string>

//返回结果和get一样
```

