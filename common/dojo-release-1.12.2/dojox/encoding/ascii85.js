//>>built
define("dojox/encoding/ascii85",["dojo/_base/lang"],function(h){h=h.getObject("dojox.encoding.ascii85",!0);var l=function(b,f,d){var c,e,a,g=[0,0,0,0,0];for(c=0;c<f;c+=4){if(a=256*(256*(256*b[c]+b[c+1])+b[c+2])+b[c+3])for(e=0;5>e;g[e++]=a%85+33,a=Math.floor(a/85));else d.push("z");d.push(String.fromCharCode(g[4],g[3],g[2],g[1],g[0]))}};h.encode=function(b){var f=[],d=b.length%4,c=b.length-d;l(b,c,f);if(d){for(b=b.slice(c);4>b.length;)b.push(0);l(b,4,f);b=f.pop();"z"==b&&(b="!!!!!");f.push(b.substr(0,
d+1))}return f.join("")};h.decode=function(b){var f=b.length,d=[],c=[0,0,0,0,0],e,a,g,h,k;for(e=0;e<f;++e)if("z"==b.charAt(e))d.push(0,0,0,0);else{for(a=0;5>a;++a)c[a]=b.charCodeAt(e+a)-33;k=f-e;if(5>k){for(a=k;4>a;c[++a]=0);c[k]=85}a=85*(85*(85*(85*c[0]+c[1])+c[2])+c[3])+c[4];g=a&255;a>>>=8;h=a&255;a>>>=8;d.push(a>>>8,a&255,h,g);for(a=k;5>a;++a,d.pop());e+=4}return d};return h});
//# sourceMappingURL=ascii85.js.map