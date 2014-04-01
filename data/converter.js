/*
 * convert UTF-8 encoded text to GBK encoding
 */

var iconv = require('iconv-lite');

exports.get = function (req, res) {
	var text = req.param('text');
	var charset = (req.param('charset')) ? req.param('charset') : 'GBK';
	//console.log(text);
	var textCon;
	if (charset == 'undefined' || charset == null || charset == '') {
		textCon = encodeURIComponent_GBK(text);
	} else if (charset.toUpperCase() === 'GBK') {
		textCon = encodeURIComponent_GBK(text);
	}
	//console.log(textCon);

	res.writeHead(200, {
		'Content-Type' : 'application/json'
	});
	var json = JSON.stringify({
			rawText : text,
			convertedText : textCon,
			encode : charset
		});
	console.log(json);
	res.write(json);
	res.end();
}

exports.getJSONP = function (req, res) {
	var text = req.param('text');
	var charset = (req.param('charset')) ? req.param('charset') : 'GBK';
	//console.log(text);
	var textCon;
	if (charset == 'undefined' || charset == null || charset == '') {
		textCon = encodeURIComponent_GBK(text);
	} else if (charset.toUpperCase() === 'GBK') {
		textCon = encodeURIComponent_GBK(text);
	}
	console.log(textCon);

	var json = {
		rawText : text,
		convertedText : textCon,
		encode : charset
	};

	res.jsonp(json);
}

exports.post = function (req, res) {
	var text = req.body.text;
	var charset = req.body.charset;
	//console.log(text);
	var textCon;
	if (charset == 'undefined' || charset == null || charset == '') {
		textCon = encodeURIComponent_GBK(text);
	} else if (charset.toUpperCase() === 'GBK') {
		textCon = encodeURIComponent_GBK(text);
	}
	//console.log(textCon);

	res.writeHead(200, {
		'Content-Type' : 'application/json'
	});
	var json = JSON.stringify({
			rawText : text,
			convertedText : textCon,
			encode : charset
		});

	res.write(json);
	res.end();

}

function encodeURIComponent_GBK(str) {
	if (str == null || str == 'undefined' || str == '')
		return '';

	var buf = iconv.encode(str, 'GBK');
	var t = [''];
	for (var i = 0; i < buf.length; i++) {
		t.push(buf.toString('hex', i, i + 1).toUpperCase());
	}
	return t.join('%');
}