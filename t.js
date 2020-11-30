function echastart() {
	if (document.querySelector('#main_canvas') != null) {
		alert('既に読み込まれてます');
		exit; //Don't do it. antipattern.
	}
	document.querySelector("head").removeChild(document.querySelector("script[src*='jquery.js']"));//Fuck U jQuery?v1.4.4 Got Kill
	
	var css = document.createElement("style");
	css.setAttribute("id", "custom_css");
	css.setAttribute("type", "text/css");
	document.head.appendChild(css);
	var html = (function(){/*
.button {
  display: inline-block;
  padding: 0.50rem 1.75rem;
  margin-right: 5px;
  border: none;
  border-radius: 0.1875rem;
  outline: none;
  background-color: tomato;
  color: white;
  font-family: inherit;
  font-size: 1.125em;
  font-weight: 300;
  line-height: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  -webkit-transition: all 150ms ease-out;
  transition: all 150ms ease-out;
}
.button:focus,
.button:hover {
  background-color: #ff7359;
  box-shadow: 0 0 0 0.1875rem white, 0 0 0 0.375rem #ff7359;
}
.button:active {
  background-color: #f25e43;
  box-shadow: 0 0 0 0.1875rem #f25e43, 0 0 0 0.375rem #f25e43;
  -webkit-transition-duration: 75ms;
          transition-duration: 75ms;
}
.button.outline {
  border: 0.1875rem solid tomato;
  background-color: transparent;
  color: tomato;
}
.button.outline:focus,
.button.outline:hover {
  border-color: #ff7359;
  color: #ff7359;
}
.button.outline:active {
  border-color: #f25e43;
  color: #f25e43;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 5.25px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 7.5px;
  cursor: pointer;
  box-shadow: 2.5px 2.5px 6.2px #000000, 0px 0px 2.5px #0d0d0d;
  background: rgba(70, 111, 138, 0.73);
  border-radius: 14.7px;
  border: 0.7px solid #000101;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 2.2px 2.2px 4.3px #131046, 0px 0px 2.2px #19155b;
  border: 0px solid #000000;
  height: 18px;
  width: 25px;
  border-radius: 6px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5.95px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: rgba(224, 233, 239, 0.73);
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 7.5px;
  cursor: pointer;
  box-shadow: 2.5px 2.5px 6.2px #000000, 0px 0px 2.5px #0d0d0d;
  background: rgba(70, 111, 138, 0.73);
  border-radius: 14.7px;
  border: 0.7px solid #000101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 2.2px 2.2px 4.3px #131046, 0px 0px 2.2px #19155b;
  border: 0px solid #000000;
  height: 18px;
  width: 25px;
  border-radius: 6px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 7.5px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: rgba(0, 0, 0, 0.73);
  border: 0.7px solid #000101;
  border-radius: 29.4px;
  box-shadow: 2.5px 2.5px 6.2px #000000, 0px 0px 2.5px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: rgba(70, 111, 138, 0.73);
  border: 0.7px solid #000101;
  border-radius: 29.4px;
  box-shadow: 2.5px 2.5px 6.2px #000000, 0px 0px 2.5px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 2.2px 2.2px 4.3px #131046, 0px 0px 2.2px #19155b;
  border: 0px solid #000000;
  height: 18px;
  width: 25px;
  border-radius: 6px;
  background: #ffffff;
  cursor: pointer;
  height: 7.5px;
}
input[type=range]:focus::-ms-fill-lower {
  background: rgba(70, 111, 138, 0.73);
}
input[type=range]:focus::-ms-fill-upper {
  background: rgba(224, 233, 239, 0.73);
}
	*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	$('#custom_css').html(html);
	
	
	s = document.createElement("script");
	s.src = "//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
	document.head.appendChild(s);
	$ = jQuery = jQuery.noConflict().extend(true, $);
	$('#tubuyakiSubmit2').attr('onSubmit', "javascript:tweetPost();return false;");
	$('#tubuyakiSubmit2').find('input[type="submit"]').replaceWith("<span style='color:fff;font-weight:bold;font-style:oblique;'>お絵かき付きでつぶやく</span>");
	$('textarea[name="Data"]').val('echa');
	$('input[name="hash"]').val('tiraura');
	$('textarea[name="Data"]').attr('disabled',true);
	var parent = document.querySelector('#tubuyaki');
	var fragment = document.createDocumentFragment();
	var element,textNode;
	
	element = document.createElement('div');
	textNode = document.createTextNode('loading...');
	element.appendChild(textNode);
	element.setAttribute("id", "main_canvas");
	element.setAttribute("style", "padding-bottom:25px;");
	fragment.appendChild(element);
	
	parent.appendChild(fragment);
	
	var html = (function(){/*
	<table style="border-style: none;" border="0">
		<tbody>
			<tr>
				<td colspan="2" style="border-style: none; padding-bottom:25px">
					<canvas style="box-shadow:0px 2px 8px 0px rgba(0,0,0,0.58);-moz-box-shadow:0px 2px 8px 0px rgba(0,0,0,0.58);-webkit-box-shadow:0px 2px 8px 0px rgba(0,0,0,0.58);"
					id="canvas" width="500px" height="500px">お使いのブラウザはHTML5に対応していないためご利用できません。</canvas>
				</td>
			</tr>
			<tr>
				<td style="border-style:none; padding:10px 0 0 5px;">
					<ul style="width: 200px;margin: 0;padding: 0 0 0 20px;">
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#000000"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#1b1b1b"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#313131"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#434343"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#535353"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#626262"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#707070"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#898989"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#959595"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#a0a0a0"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#b5b5b5"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#c9c9c9"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#dcdcdc"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#ffffff"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#ff0000"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#ffff00"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#00ff00"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#00ffff"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#0000ff"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#ff00ff"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#e60012"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#fff100"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#009944"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#00a0e9"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#1d2088"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#e4007f"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#f29b76"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#f6b37f"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#facd89"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#fff799"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#cce198"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#acd598"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#89c997"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#84ccc9"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#7ecef4"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#88abda"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#8c97cb"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#8f82bc"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#aa89bd"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#c490bf"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#f19ec2"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#f29c9f"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#ec6941"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#f19149"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#f8b551"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#fff45c"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#b3d465"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#80c269"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#32b16c"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#13b5b1"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#00b7ee"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#448aca"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#556fb5"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#5f52a0"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#8957a1"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#ae5da1"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#ea68a2"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#eb6877"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#e60012"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#eb6100"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#fff100"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#8fc31f"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#22ac38"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#009944"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#009e96"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#00a0e9"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#0068b7"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#00479d"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#1d2088"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#601986"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#920783"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#e4007f"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#e5004f"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#a40000"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#a84200"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#ac6a00"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#b7aa00"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#638c0b"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#097c25"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#007130"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#00736d"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#0075a9"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#004986"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#002e73"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#100964"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#440062"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#6a005f"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#a4005b"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#a40035"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#7d0000"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#7f2d00"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#834e00"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#8a8000"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#486a00"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#005e15"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#00561f"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#005752"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#005982"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#003567"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#001c58"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#03004c"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#31004a"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#500047"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#7e0043"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#7d0022"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#d1c0a5"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#a6937c"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#7e6b5a"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#59493f"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#362e2b"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#cfa972"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#b28850"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#996c33"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#81511c"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#6a3906"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#fdead6"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#f9d9b8"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#f5cea5"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#f1bf8b"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#eeb477"></li>
						<li style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;display:inline-block;background-color:#0000;font-size: 12px;font-style: oblique;">消</li>
						<input onChange="setColor(this.value)" type="color" name="color" value="#7f7f7f">
					</ul>
	
				</td>
				<td style="border-style:none; padding:0 0 0 25px;">
					<p style="font-style: oblique;">線の太さ
						<input type="range" min="1" max="999" value="10" id="lineWidth"><span id="lineNum">10</span></p>
					<p style="font-style: oblique;">透 明 度
						<input type="range" min="1" max="100" value="100" id="alpha"><span id="alphaNum">100</span></p>
					<p style="font-style: oblique;">選 択 色 <span id="check_color" style="width:15px;height:15px;-webkit-border-radius: 10px;-moz-border-radius:10px;border-radius:10px;
						display:inline-block;background-color:#000000;color:#0000;font-size: 12px;font-style: oblique;">消</span></p>
					<p>
						<button class="button" style="width:205px;font-style: oblique;" id="undo">
							１つ前の状態に戻す
						</button>
					</p>
					<p>
						<button class="button" style="font-style: oblique;" id="clear">
							全消し
						</button>
						<button class="button" style="font-style: oblique;" onclick="save()">
							つぶやく
						</button>
					</p>
				</td>
	
			</tr>
		</tbody>
	</table>
	<script>
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var mouse = {x:0,y:0,x1:0,y1:0,color:"black"};
	var draw = false;
	var draw_count = 0;
	var undoImage = {};
	canvas.addEventListener("mousemove",function(e) {
		var rect = e.target.getBoundingClientRect();
		ctx.lineWidth = document.getElementById("lineWidth").value/10;
		ctx.globalAlpha = document.getElementById("alpha").value/100;
		mouseX = e.clientX - rect.left;
		mouseY = e.clientY - rect.top;
		if(draw === true) {
			ctx.beginPath();
			ctx.moveTo(mouseX1,mouseY1);
			ctx.lineTo(mouseX,mouseY);
			ctx.lineCap = "round";
			ctx.stroke();
			mouseX1 = mouseX;
			mouseY1 = mouseY;
		}
	});
	canvas.addEventListener("mousedown",function(e) {
		draw = true;
		mouseX1 = mouseX;
		mouseY1 = mouseY;
		undoImage[draw_count] = ctx.getImageData(0, 0,canvas.width,canvas.height);
		draw_count++;
	});
	canvas.addEventListener("mouseup", function(e){
		draw = false;
	});
	lineWidth.addEventListener("mousemove",function(){  
		var lineNum = document.getElementById("lineWidth").value;
		document.getElementById("lineNum").innerHTML = lineNum;
	});
	alpha.addEventListener("mousemove",function(){  
		var alphaNum = document.getElementById("alpha").value;
		document.getElementById("alphaNum").innerHTML = alphaNum;
	});
	$('li').click(function() {
		if ($(this).css('background-color') == 'rgba(0, 0, 0, 0)') {
			ctx.globalCompositeOperation = 'destination-out';
			$('#check_color').css('background-color', '#FFF');
			$('#check_color').css('color', '#000');
		} else {
			setColor($(this).css('background-color'));
		}
	});
	function setColor(val){
		ctx.globalCompositeOperation = 'source-over';
		ctx.strokeStyle = val;
		$('#check_color').css('background-color', val);
		$('#check_color').css('color', val);
	}
	$('#clear').click(function(e) {
				if(!confirm('全消しを実行しますか？')) return;
				e.preventDefault();
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			});
	$('#undo').click(function(e) {
		if (draw_count>0) {
			draw_count--;
			ctx.putImageData(undoImage[draw_count],0,0);
		} else {
			undoImage = {};
			draw_count = 0;
		}
	});
	function save() {
		var can = canvas.toDataURL("image/x-png");
		tweetPost(can);
	}
	var finger=new Array;
	for(var i=0;i<10;i++){
		finger[i]={
			x:0,y:0,x1:0,y1:0,
			color:"rgb("
			+Math.floor(Math.random()*16)*15+","
			+Math.floor(Math.random()*16)*15+","
			+Math.floor(Math.random()*16)*15
			+")"
		};
	}
	canvas.addEventListener("touchstart",function(e){
		e.preventDefault();
		var rect = e.target.getBoundingClientRect();
		ctx.lineWidth = document.getElementById("lineWidth").value/100;
		ctx.globalAlpha = document.getElementById("alpha").value/100;
		undoImage[draw_count] = ctx.getImageData(0, 0,canvas.width,canvas.height);
		draw_count++;
		for(var i=0;i<finger.length;i++){
			finger[i].x1 = e.touches[i].clientX-rect.left;
			finger[i].y1 = e.touches[i].clientY-rect.top;
		}
	});
	canvas.addEventListener("touchmove",function(e){
		e.preventDefault();
		var rect = e.target.getBoundingClientRect();
		for(var i=0;i<finger.length;i++){
			finger[i].x = e.touches[i].clientX-rect.left;
			finger[i].y = e.touches[i].clientY-rect.top;
			ctx.beginPath();
			ctx.moveTo(finger[i].x1,finger[i].y1);
			ctx.lineTo(finger[i].x,finger[i].y);
			ctx.lineCap="round";
			ctx.stroke();
			finger[i].x1=finger[i].x;
			finger[i].y1=finger[i].y;
			
		}
	});
	lineWidth.addEventListener("touchmove",function(){  
		var lineNum = document.getElementById("lineWidth").value;
		document.getElementById("lineNum").innerHTML = lineNum;
	});
	
	alpha.addEventListener("touchmove",function(){  
		var alphaNum = document.getElementById("alpha").value;
		document.getElementById("alphaNum").innerHTML = alphaNum;
	});
	</script>
	*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
	$('#main_canvas').html(html);
}
function tweetPost(base64) {
	console.log(base64);
	var bin = atob(base64.replace(/^.*,/, ''));
	var buffer = new Uint8Array(bin.length);
	for (var i = 0; i < bin.length; i++) {
		buffer[i] = bin.charCodeAt(i);
	}
	try {
		var blob = new Blob([buffer.buffer], {
			type: 'image/x-png'
		});
		var date = new Date();
		var formData = new FormData();
		console.log(blob);
		formData.append("mode", "bbs_write");
		formData.append("Category", "CT01");
		formData.append("upform", "s");
		formData.append("Title", "echa");
		formData.append("Name2", "1");
		formData.append("image", "1.png");
		formData.append("cookieid", "1");
		formData.append("t_session", "");
		formData.append("Data", $('textarea[name="Data"]').val() + " Posted at "+ date.toUTCString());
		formData.append("hash", $('input[name="hash"]').val());
		if ($('input[name="hashcheck"]').prop("checked")) {
			formData.append("hashcheck", 'on');
		} else {
			formData.append("hashcheck", '');
		}
		formData.append("upfile", blob);
		$.ajax({
			url: './rbbs.cgi',
			method: 'POST',
			dataType: 'json',
			contentType: false,
			data: formData,
			processData: false,
		}).done(function (output, status, xhr) {
			console.log('SUCCESS', output, status, xhr);
		}).fail(function (xhr, status, errorThrown) {
			console.log('ERROR', xhr, status, errorThrown);
		}).always(function () {
			location.href = location.href;
		});
	} catch (e) {
		console.log(e);
	}
}
