var cornerstoneCore=function(a){function b(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function c(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)}return void 0===a&&(a={}),a.distance=c,a.distanceSquared=b,a}(cornerstoneCore),cornerstoneCore=function(a){function b(a,b,c,d,e){var f=.5522848,g=d/2*f,h=e/2*f,i=b+d,j=c+e,k=b+d/2,l=c+e/2;a.beginPath(),a.moveTo(b,l),a.bezierCurveTo(b,l-h,k-g,c,k,c),a.bezierCurveTo(k+g,c,i,l-h,i,l),a.bezierCurveTo(i,l+h,k+g,j,k,j),a.bezierCurveTo(k-g,j,b,l+h,b,l),a.closePath(),a.stroke()}return void 0===a&&(a={}),a.drawEllipse=b,a}(cornerstoneCore),cornerstoneCore=function(a){function b(a){i.width=a.width,i.height=a.height,g=i.getContext("2d"),g.fillStyle="white",g.fillRect(0,0,i.width,i.height),h=g.getImageData(0,0,a.width,a.height)}function c(b,c){return void 0!==b.lut&&b.lut.windowCenter===c.windowCenter&&b.lut.windowWidth===c.windowWidth?b.lut:(b.lut=lut=a.generateLut(b,c.windowWidth,c.windowCenter,c.invert),b.lut.windowWidth=c.windowWidth,b.lut.windowCenter=c.windowCenter,b.lut)}function d(d,f){var j=d.canvas.getContext("2d");j.setTransform(1,0,0,1,0,0),j.fillStyle="black",j.fillRect(0,0,d.canvas.width,d.canvas.height),(i.width!==f.width||i.height!=f.height)&&b(f),j.save(),e(d,j);var k=c(f,d.viewport);a.storedPixelDataToCanvasImageData(f,k,h.data),g.putImageData(h,0,0);d.viewport.scale;j.drawImage(i,0,0,f.columns,f.rows,0,0,f.columns,f.rows),j.restore();var l=new CustomEvent("CornerstoneImageRendered",{detail:{canvasContext:j,viewport:d.viewport,image:d.image,element:d.element,enabledElement:d},bubbles:!1,cancelable:!1});d.element.dispatchEvent(l)}function e(a,b){b.setTransform(1,0,0,1,0,0),b.translate(a.canvas.width/2,a.canvas.height/2),b.scale(a.viewport.scale,a.viewport.scale),b.translate(a.viewport.centerX,a.viewport.centerY),b.translate(-a.image.columns/2,-a.image.rows/2)}function f(a,b,c){b.setTransform(1,0,0,1,0,0),b.translate(a.canvas.width/2,a.canvas.height/2),b.scale(a.viewport.scale,a.viewport.scale),b.translate(a.viewport.centerX,a.viewport.centerY);var d=.1;b.scale(d,d),b.translate(-a.image.columns/2/d,-a.image.rows/2/d);var e=c/a.viewport.scale/d,f=c/a.viewport.scale/d;return{fontSize:e,lineHeight:f,fontScale:d}}void 0===a&&(a={});var g,h,i=document.createElement("canvas");return a.drawImage=d,a.setToPixelCoordinateSystem=e,a.setToFontCoordinateSystem=f,a}(cornerstoneCore),cornerstoneCore=function(a){function b(a,b,c,d){var e,f,g,h=[],i=a.maxPixelValue,j=a.slope,k=a.intercept,l=b,m=c;if(d===!0)for(var n=a.minPixelValue;i>=n;n++)e=n*j+k,f=255*((e-m)/l+.5),g=Math.min(Math.max(f,0),255),h[n]=Math.round(255-g);else for(var n=a.minPixelValue;i>=n;n++)e=n*j+k,f=255*((e-m)/l+.5),g=Math.min(Math.max(f,0),255),h[n]=Math.round(g);return h}return void 0===a&&(a={}),a.generateLut=b,a}(cornerstoneCore),cornerstoneCore=function(a){function b(a,b){var c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){b(c.response)},c.send()}return void 0===a&&(a={}),a.readPixelData=b,a}(cornerstoneCore),cornerstoneCore=function(a){function b(a,b,c){for(var d=3,e=0,f=a.width*a.height,g=a.storedPixelData,h=b,i=c;f>e;)i[d]=h[g[e++]],d+=4}return void 0===a&&(a={}),a.storedPixelDataToCanvasImageData=b,a}(cornerstoneCore),cornerstone=function(a){function b(b,c,d){var e=document.createElement("canvas");e.width=b.clientWidth,e.height=b.clientHeight,b.appendChild(e);var f={element:b,canvas:e,ids:{imageId:c},data:{}};a.addEnabledElement(f);var g=a.loadImage(c);g.then(function(c){var g=a.resetViewport(b,e,c);if(d)for(var h in g)null!==d[h]&&(g[h]=d[h]);f.image=c,f.viewport=g,a.updateImage(b);var i=new CustomEvent("CornerstoneViewportUpdated",{detail:{viewport:g,element:b},bubbles:!1,cancelable:!1});b.dispatchEvent(i)})}return void 0===a&&(a={}),a.enable=b,a}(cornerstone,cornerstoneCore),cornerstone=function(a){function b(a){for(var b=0;b<g.length;b++)if(g[b].element==a)return g[b];return void 0}function c(a){g.push(a)}function d(a){for(var b=0;b<g.length;b++)if(g[b].element==a)return g[b].element.removeChild(g[b].canvas),void g.splice(b,1)}function e(a,c){var d=b(a);return 0==d.data.hasOwnProperty(c)&&(d.data[c]={}),d.data[c]}function f(a,c){var d=b(a);delete d.data[c]}void 0===a&&(a={});var g=[];return a.getEnabledElement=b,a.addEnabledElement=c,a.removeEnabledElement=d,a.getElementData=e,a.removeElementData=f,a}(cornerstone,cornerstoneCore),cornerstone=function(a){function b(b){var c=a.getEnabledElement(b),d=c.canvas.height/c.image.rows,e=c.canvas.width/c.image.columns;c.viewport.scale=d>e?e:d,c.viewport.centerX=0,c.viewport.centerY=0,a.updateImage(b)}return void 0===a&&(a={}),a.fitToWindow=b,a}(cornerstone,cornerstoneCore),cornerstone=function(a){function b(a){var b=a.indexOf(":"),c=a.substring(0,b),d=g[c];if(void 0===d||null===d){if(void 0!==f){var e=f(a);return e}return void 0}var e=d(a);return e}function c(a){if(void 0===h[a]){var c=b(a);return h[a]=c,c}return h[a]}function d(a,b){g[a]=b}function e(a){var b=f;return f=a,b}void 0===a&&(a={});var f,g={},h={};return a.loadImage=c,a.registerImageLoader=d,a.registerUnknownImageLoader=e,a}(cornerstone,cornerstoneCore),cornerstone=function(a){function b(a,b){var c=a.getAttribute(b);return void 0===c?void 0:c}function c(){for(var c=document.querySelectorAll("[data-cornerstoneEnabled]"),d=0;d<c.length;d++){var e=c[d],f=e.getAttribute("data-cornerstoneImageId"),g={scale:b(e,"data-cornerstoneViewportScale"),centerX:b(e,"data-cornerstoneViewportCenterX"),centerY:b(e,"data-cornerstoneViewportCenterY"),windowWidth:b(e,"data-cornerstoneViewportWindowWidth"),windowCenter:b(e,"data-cornerstoneViewportWindowCenter")};a.enable(e,f,g)}}void 0===a&&(a={});var d=window.onload;return window.onload=function(){"function"==typeof d&&d(),c()},a.enableAllElements=c,a}(cornerstone,cornerstoneCore),cornerstone=function(a){function b(b,c,d){enabledElement=a.getEnabledElement(b),enabledElement.ids.imageId=c;var e=a.loadImage(c);e.done(function(c){if(enabledElement.image=c,d)for(var e in d)null!==d[e]&&(enabledElement.viewport[e]=d[e]);a.updateImage(b)})}function c(b,c,d){enabledElement=a.getEnabledElement(b),enabledElement.ids.imageId=c;var e=a.loadImage(c);e.done(function(c){if(enabledElement.image=c,enabledElement.viewport=a.resetViewport(enabledElement.element,enabledElement.canvas,enabledElement.image),d)for(var e in d)null!==d[e]&&(enabledElement.viewport[e]=d[e]);a.updateImage(b)})}return void 0===a&&(a={}),a.showImage=function(b,c,d){enabledElement=a.getEnabledElement(b),enabledElement.ids.imageId=c;var e=a.loadImage(c);e.done(function(c){if(enabledElement.image=c,d)for(var e in d)null!==d[e]&&(enabledElement.viewport[e]=d[e]);a.updateImage(b)})},a.replaceImage=function(b,c,d){a.removeEnabledElement(b),a.enable(b,c,d)},a.newStackImage=b,a.newStack=c,a}(cornerstone,cornerstoneCore),cornerstone=function(a){function b(b,c,d,e,f){c=Math.round(c),d=Math.round(d);for(var g=a.getEnabledElement(b),h=[],i=0,j=0;f>j;j++)for(var k=0;e>k;k++){var l=(j+d)*g.image.columns+(k+c);h[i++]=g.image.storedPixelData[l]}return h}return void 0===a&&(a={}),a.getStoredPixels=b,a}(cornerstone,cornerstoneCore),cornerstone=function(a,b){function c(c){var d=a.getEnabledElement(c),e=d.image;b.drawImage(d,e)}return void 0===a&&(a={}),a.updateImage=c,a}(cornerstone,cornerstoneCore),cornerstone=function(a){function b(b,c){enabledElement=a.getEnabledElement(b),c.windowWidth<1&&(c.windowWidth=1),c.scale<1e-4&&(c.scale=.25),enabledElement.viewport=c,a.updateImage(b);var d=new CustomEvent("CornerstoneViewportUpdated",{detail:{viewport:c,element:b,image:enabledElement.image},bubbles:!1,cancelable:!1});b.dispatchEvent(d)}function c(b){return a.getEnabledElement(b).viewport}function d(b,c,d){var e=a.getEnabledElement(b),f=b.getBoundingClientRect(),g=c-f.left-window.scrollX,h=d-f.top-window.scrollY,i=g-f.width/2,j=h-f.height/2,k=e.viewport,l=i/k.scale,m=j/k.scale,n=l-k.centerX,o=m-k.centerY;return n+=e.image.columns/2,o+=e.image.rows/2,{x:n,y:o}}function e(a,b,c){var d={scale:1,centerX:0,centerY:0,windowWidth:c.windowWidth,windowCenter:c.windowCenter,invert:c.invert},e=b.height/c.rows,f=b.width/c.columns;return d.scale=e>f?f:e,d}return void 0===a&&(a={}),a.getViewport=c,a.setViewport=b,a.pageToImage=d,a.resetViewport=e,a}(cornerstone,cornerstoneCore);