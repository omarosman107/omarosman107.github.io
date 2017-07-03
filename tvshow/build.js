  !function(t,e){"use strict";function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||u(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,i=o.width*o.height;this.intersectionRatio=n?i/n:this.isIntersecting?1:0}function o(t,e){var n=e||{};if("function"!=typeof t)throw Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw Error("root must be an Element");this._checkForIntersections=r(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function i(){return t.performance&&performance.now&&performance.now()}function r(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function s(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function h(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t,e){var n=Math.max(t.top,e.top),o=Math.min(t.bottom,e.bottom),i=Math.max(t.left,e.left),r=Math.min(t.right,e.right),s=r-i,h=o-n;return s>=0&&h>=0&&{top:n,bottom:o,left:i,right:r,width:s,height:h}}function a(t){var e=t.getBoundingClientRect();if(e)return e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e}function u(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function l(t,e){for(var n=e;n;){if(11==n.nodeType&&n.host&&(n=n.host),n==t)return!0;n=n.parentNode}return!1}if(!("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)){var p=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||0>t||t>1)throw Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},o.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this._checkForIntersections(),this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,h(t,"resize",this._checkForIntersections,!0),h(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():u();this._observationTargets.forEach(function(o){var r=o.element,s=a(r),h=this._rootContainsTarget(r),c=o.entry,u=t&&h&&this._computeTargetAndRootIntersection(r,e),l=o.entry=new n({time:i(),target:r,boundingClientRect:s,rootBounds:e,intersectionRect:u});c?t&&h?this._hasCrossedThreshold(c,l)&&this._queuedEntries.push(l):c&&c.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(e,n){if("none"!=t.getComputedStyle(e).display){for(var o=a(e),i=o,r=e.parentNode,s=!1;!s;){var h=null;if(r==this.root||1!=r.nodeType?(s=!0,h=n):"visible"!=t.getComputedStyle(r).overflow&&(h=a(r)),h&&(i=c(h,i),!i))break;r=r.parentNode}return i}},o.prototype._getRootRect=function(){var t;if(this.root)t=a(this.root);else{var n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var i=0;i<this.thresholds.length;i++){var r=this.thresholds[i];if(r==n||r==o||n>r!=o>r)return!0}},o.prototype._rootIsInDom=function(){return!this.root||l(e,this.root)},o.prototype._rootContainsTarget=function(t){return l(this.root||e,t)},o.prototype._registerInstance=function(){p.indexOf(this)<0&&p.push(this)},o.prototype._unregisterInstance=function(){var t=p.indexOf(this);-1!=t&&p.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=n}}(window,document);



  var hovering;

function playHover(element){
  hovering = setTimeout(function(){
        var hls = new Hls();


    var video = element.querySelector('video')
    element.querySelector('.playbutton').style.visibility = 'hidden'
    var url = element.getAttribute('url')

      if(Hls.isSupported()) {
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();

  });
              element.querySelector('.cover').style.display = 'none';

 }
if (url.includes('cwtv.com')) {
var stripped = url.split('?')[1].split('=')[1]
   // HLS = 154 | 206
   // MP4 = 213
   var url = "http://metaframe.digitalsmiths.tv/v2/CWtv/assets/" + stripped + "/partner/206?format=json"
   fetch(url, {
      method: 'get'
   }).then(function(response) { 
      return response.json();
   }).then(function(data) {
        finalurl = data.videos.variantplaylist.uri;
    hls.loadSource(finalurl);


   })
}
if (url.includes('api.fox.com')) {
      var finalurl = element.getAttribute('autoplay')

      hls.loadSource(finalurl);

}  






  },2000)


}
function stopHover(element){
clearTimeout(hovering);
    element.querySelector('.playbutton').style.visibility = 'visible'

    element.querySelector('.cover').style.display = 'block';
    var video = element.querySelector('video')
    video.src ="";
    video.load();

  }
var textInput = document.getElementById('search');

// Init a timeout variable to be used below
var timeout = null;

// Listen for keystroke events
textInput.onkeyup = function (e) {

    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    clearTimeout(timeout);

    // Make a new timeout set to go off in 800ms
    timeout = setTimeout(function () {
      query(textInput.value)
    }, 200);
};


function addJS(url) {
  var s = document.createElement('script'); // Create a script element
  s.type = "text/javascript"; // optional in html5
  s.async = false; // asynchronous? true/false
  s.src = url;
  var fs = document.getElementsByTagName('script')[0]; // Get the first script
  fs.parentNode.insertBefore(s, fs);
};
// https://github.com/filamentgroup/loadCSS
! function(e) {
  "use strict";
  var n = function(n, t, o) {
    function i(e) {
      return f.body ? e() : void setTimeout(function() {
        i(e)
      })
    }
    var d, r, a, l, f = e.document,
      s = f.createElement("link"),
      u = o || "all";
    return t ? d = t : (r = (f.body || f.getElementsByTagName("head")[0]).childNodes, d = r[r.length - 1]), a = f.styleSheets, s.rel = "stylesheet", s.href = n, s.media = "only x", i(function() {
      d.parentNode.insertBefore(s, t ? d : d.nextSibling)
    }), l = function(e) {
      for (var n = s.href, t = a.length; t--;)
        if (a[t].href === n) return e();
      setTimeout(function() {
        l(e)
      })
    }, s.addEventListener && s.addEventListener("load", function() {
      this.media = u
    }), s.onloadcssdefined = l, l(function() {
      s.media !== u && (s.media = u)
    }), s
  };
  "undefined" != typeof exports ? exports.loadCSS = n : e.loadCSS = n
}("undefined" != typeof global ? global : this);
loadCSS('css/feed.css')

function logIn(u, p) {
  firebase.auth().signInWithEmailAndPassword(u, p).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error)
      // ...
  });
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser)
    } else {
      console.log('not logged in')
    }
  })
}


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  doScrolling(0,350)

//  document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}
/*
function is_touch_device() {
 return 'ontouchstart' in window        // works on most browsers 
     || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};
if(is_touch_device){
           $('#left-buttontv').hide()
           $('#right-buttontv').hide()

}
$('#left-buttontv').show()
           $('#right-buttontv').show()
$(function () {
       var outer = $('#tvShows');

       $('#left-buttontv').click(function () {
          var leftPos = outer.scrollLeft();
          outer.animate({ scrollLeft: leftPos - 900 }, 200);
       });

       $('#right-buttontv').click(function () {
          var leftPos = outer.scrollLeft();
          outer.animate({ scrollLeft: leftPos + 900 }, 200);
       });
    });

*/
function results(num) {
  var res = num + " results found"
  if (num == 1) {
    res = "one result found"
  }
  if (num == 0) {
    res = "no results found"
  }
  if (num == null) {
    res = ""
  }
  document.getElementById('results').innerHTML = res
}



window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function doScrolling(elementY, duration) { 
  var startingY = window.pageYOffset  
  var diff = elementY - startingY  
  var start

  // Bootstrap our animation - it will get called right before next frame shall be rendered.
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
    // Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)

    window.scrollTo(0, startingY + diff * percent)

    // Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function lazyLoadNew(){


setTimeout(function(){
var Lazyelements = document.querySelectorAll('.lazy')
for(i in Lazyelements){
Lazyelements[i].onload = function(element) {
if (!element.target.classList.contains('loaded')) {
element.target.classList.add('loaded');

}
}

if(elementInViewport(Lazyelements[i])){

  if (Lazyelements[i].hasAttribute('data-original-set')){
Lazyelements[i].srcset =  Lazyelements[i].getAttribute('data-original-set');
Lazyelements[i].removeAttribute('data-original-set')
};
  if (Lazyelements[i].hasAttribute('data-original')){
Lazyelements[i].src = Lazyelements[i].getAttribute('data-original');
Lazyelements[i].removeAttribute('data-original')
};


}


}
},20)
return ;




    var io = new IntersectionObserver(
    entries => {
for (i in entries){
if(entries[i].isIntersecting){
if(entries[i].target.hasAttribute('data-original-set')){

entries[i].target.srcset =  entries[i].target.getAttribute('data-original-set');
entries[i].target.removeAttribute('data-original-set')


  };
  if(entries[i].target.hasAttribute('data-original')){
entries[i].target.src =  entries[i].target.getAttribute('data-original');
entries[i].target.removeAttribute('data-original')

  };


}
}
    },
    {
    }
);
// Start observing an element
var Lazyelements = document.querySelectorAll('.lazy')
for(i in Lazyelements){

Lazyelements[i].onload = function(element) {
if (!element.target.classList.contains('loaded')) {
element.target.classList.add('loaded');
console.log(element.target.parent)

}
}

io.observe(Lazyelements[i])

}
}
 
var myLazyLoad


function addJS(url) {
  var s = document.createElement('script'); // Create a script element
  s.type = "text/javascript"; // optional in html5
  s.async = true; // asynchronous? true/false
  s.src = url;
  var fs = document.getElementsByTagName('script')[0]; // Get the first script
  fs.parentNode.insertBefore(s, fs);
};
var maxnum = 0
var num = 0

function loaders(atr) {
  if (atr == 'remove') {
    num = num - 1
  document.getElementById('topprogress').style.transform = 'translateX(' + ((100 - (num/maxnum *100)) - 100) + '%)'
    if (num == 0) {


var l = []
finalObj.sort(function(x, y) {
   var date1 = (x.time);
   var date2 = (y.time);
    return date1 < date2 ? 1 : -1;
  }).forEach(function(x) {
    l.push(x)
  });
loadMedia(l)
   if (!document.getElementById('search').value == '') {
        query(document.getElementById('search').value)
      }
       if (document.getElementById('watching').children.length === 0) {
        document.getElementById('wtcTxt').style.display = 'none'
      }else{
        document.getElementById('wtcTxt').style.display = 'block'

}




          document.getElementsByClassName('lScreen')[0].style.opacity = '0'
            document.getElementsByClassName('lScreen')[0].style.zIndex = '-99999'
      document.querySelector('.contain').style.display = 'block';


myLazyLoad = new LazyLoad({
threshold:600
});

myLazyLoad.update()
window.onscroll = function() {

  myLazyLoad.update();
    scrollFunction();

};



  

   


    }
    if (document.getElementsByClassName('spinner').length == 0) {
     // lazyLoadImages()
    }
    return;
  }
  num++
  if (num > maxnum) {
maxnum = num
  }

  document.getElementById('topprogress').style.transform = 'translateX(' + ((100 - (num/maxnum *100)) - 100) + '%)'
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 96; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function query(q) {
  var num = 0
  setTimeout(function() {
    for (var i = 0, len = finalObj.length; i < len; i++) {
      if ((finalObj[i].show +' '+ finalObj[i].episode).toLowerCase().includes(q.toLowerCase())) {
        document.getElementsByClassName(finalObj[i].id)[0].style.opacity = '1'
                document.getElementsByClassName(finalObj[i].id)[0].style.display = 'inline-block';

        num = num + 1
      } else {
        document.getElementsByClassName(finalObj[i].id)[0].style.opacity = '0'
                        document.getElementsByClassName(finalObj[i].id)[0].style.display = 'none';

      }
    }
    myLazyLoad.update()
    results(num)
  }, 10)
}
function showAll(q){
    document.getElementById('search').value = '';

  var num = 0
  setTimeout(function() {
    for (var i = 0, len = finalObj.length; i < len; i++) {
        document.getElementsByClassName(finalObj[i].id)[0].style.opacity = '1'
                        document.getElementsByClassName(finalObj[i].id)[0].style.display = 'inline-block'

        num = num + 1
      }
 results(num)
  }, 10)


}
function scrollShows() {
  element = document.getElementById("carasoul")

  function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
    return (top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset);
  }
  if (!elementInViewport2(element)) {
    doScrolling(element.offsetTop,350)

  //  element = document.getElementById("carasoul")
    // element.scrollIntoView(true);
  }
}

function showQuery(q, o) {
  if (q == null) {
    q = o.getAttribute('show')
      //   document.body.style.background = 'url(' + obj.getAttribute('bg') + ") no-repeat center center fixed";
  };
  document.getElementById('search').value = q
  var num = 0
    for (var i = 0, len = finalObj.length; i < len; i++) {
      if (finalObj[i].show.toLowerCase() == (q.toLowerCase())) {
        document.getElementsByClassName(finalObj[i].id)[0].style.opacity = '1'
                        document.getElementsByClassName(finalObj[i].id)[0].style.display = 'inline-block';

        num = num + 1
      } else {
        document.getElementsByClassName(finalObj[i].id)[0].style.opacity = '0'
                document.getElementsByClassName(finalObj[i].id)[0].style.display = 'none';

      }
    }
    scrollShows()
    myLazyLoad.update()
    results(num)
}
var tvobj = {}



function tvstQ(q) {
  q = encodeURIComponent(q);
  var query = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="https://api.tozelabs.com/v2/show?limit=1&q=' + q + '"') + '&format=json&_maxage=360000';
  return query;
}

function yqltheTVDB(q) {
  q = encodeURIComponent(q);
  var query = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="http://skyhook.sonarr.tv/v1/tvdb/search/en/?term=' + q + '"') + '&format=json&_maxage=36000';
  return query;
}

function multiURL(urls) {
  q = encodeURIComponent(urls);
  var query = "select all_images.poster,stripped_name from json where url='https://api.tozelabs.com/v2/show?limit=1&q=" + q + "';"
  return query;
}
var tvdbimg = 'https://thetvdb.com/banners/posters/279121-50.jpg'

function tvlist(showName,img) {
  if (showName in tvobj) {
    return 'Already In.';
  }
  var finalList = ''
    /*  for(i in showName){

       finalList += multiURL(showName[i])
     }
     showName = 
    finalList = ('select * from yql.query.multi where queries="'+finalList + '"')

     var url = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(finalList) +  '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
    */
  tvobj[(showName)] = ''

if (img != undefined) {
    document.getElementById('tvShows').innerHTML += '<div tabindex="1" class="tvshow js-tilt" data-tilt>  <a href="javascript:"  title="' + showName + '" bg="" show="' + showName + '" onclick="showQuery(null,this)" ><img width="100%" alt="' + showName + '" src="' + img + '"><\/a><\/div>'
return;

} 
  url = tvstQ(showName)
  fetch(url, {
    method: 'get',
    cache: "force-cache"
  }).then(function(response) {
    return response.json();
  }).then(function(dat) {
    /*  for (var i = dat.query.results.results.length - 1; i >= 0; i--) {
       try{
       document.getElementById('tvShows').innerHTML += '<div tabindex="1" class="tvshow">  <a href="javascript:"  title="'+dat.query.results.results[i].json.stripped_name+'" bg="" show="' + dat.query.results.results[i].json.stripped_name +'" onclick="query(null,this)" ><img width="100%" alt="'+dat.query.results.results[i].json.stripped_name+'" src="'+dat.query.results.results[i].json.all_images.poster._[3]+'"><\/a><\/div>'
    }catch(e){
     console.log(e)
    }
 
     }
     */
     var endp = 'http://webservice.fanart.tv/v3/tv/'+dat.query.results.json.id+'?api_key=334bde683eabd3ae55eb6a1917bd4795'
     var yqlendpoint = 'https://query.yahooapis.com/v1/public/yql?q=select%20tvthumb.url%20from%20json%20where%20url%3D%22http%3A%2F%2Fwebservice.fanart.tv%2Fv3%2Ftv%2F'+dat.query.results.json.id+'%3Fapi_key%3D334bde683eabd3ae55eb6a1917bd4795%22%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=' 
fetch(yqlendpoint,{
 method: 'get' 
}).then(function(res){return res.json();}).then(function(data){
  try{
 var proxy = (data.query.results.json[0].tvthumb.url).split('.tv').join('.tv.rsz.io')+'?width=320&quality=30'
    document.getElementById('tvShows').innerHTML += '<div tabindex="1" class="tvshow js-tilt" data-tilt>  <a href="javascript:"  title="' + showName + '" bg="" show="' + showName + '" onclick="showQuery(null,this)" ><img width="100%" alt="' + showName + '"src="'+proxy+'" ><\/a><\/div>'
}catch(e){
}
})

  }).catch(function(e) {});
}

function search(val) {
  function filter(a) {
    var match = []
    for (var i = 0; i < a.length; i++) {
      if (a[i].metadata.toLowerCase().includes(val.toLowerCase())) match.push(a[i])
    }
    return match
  }
  var result = filter(obj);
  if (result.length == 0) {
    document.getElementById('carasoul').innerHTML = "No results found :("
  } else {
    loadMedia(result)
  }
}






function sortCards() {

var l = []
obj.sort(function(x, y) {
   var date1 = new Date(x.airdate);
   var date2 = new Date( y.airdate);
    return date1 < date2 ? 1 : -1;
  }).forEach(function(x) {
    l.push(x)
  });
document.getElementById('carasoul').innerHTML = ''
loadMedia(l)




}
var theflash = 'http://images.cwtv.com/feed/mobileapp/videos/apiversion_7/show_the-flash'
var show_hub = 'http://images.cwtv.com/feed/mobileapp/videos/apiversion_7/show_hub'
var shows = 'http://images.cwtv.com/feed/mobileapp/shows/apiversion_7/channel_cwtv/pagesize_100'
var proxy = 'https://cors-anywhere.herokuapp.com/'
var template = "";
if (!window.fetch) {
  alert('fetch isnt working')
}

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}
// url (required), options (optional)
function fmtMSS(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + Math.trunc(s)
}

function rating(rate) {
  if (rate == undefined){
    return "UNRATED"
  }

  if (rate.includes('tv-14')) {
    return "TV-14"
  }
  if (rate.includes('tv-pg')) {
    return "TV-PG"
  }
  if (rate.includes('tv-y7')) {
    return "TV-Y7"
  }
  if (rate.includes('tv-y')) {
    return "TV-Y"
  }
  if (rate.includes('tv-g')) {
    return "TV-G"
  }
  return rate.toUpperCase();
}



function loadPlayer(url) {
  return '';
  link = url.href
  return false;
 }
/*

   $('#tvShows').scroll( function() {
       var $width = $('#tvShows').outerWidth()
       var $scrollWidth = $('#tvShows')[0].scrollWidth; 
       var $scrollLeft = $('#tvShows').scrollLeft();
           $('#right-buttontv').css({opacity: 100})

       if ($scrollWidth - $width === $scrollLeft){
           console.log('right end');
           $('#right-buttontv').fadeTo('fast',0 )
       }
                       $('#left-buttontv').css({opacity: 100})

       if ($scrollLeft===0){
           console.log('left end');
                       $('#left-buttontv').fadeTo('fast',0 )

       }
   });
   */
function loadQuick(json) {
  var temp = ''

  function newBanner() {
    var date1 = new Date();
    var date2 = new Date(json.airdate);
    //Customise date2 for your required future time
    var diff = (date2 - date1) / 1000;
    var diff = Math.abs(Math.floor(diff));
    var days = Math.floor(diff / (24 * 60 * 60));
    var leftSec = diff - days * 24 * 60 * 60;
    var hrs = Math.floor(leftSec / (60 * 60));
    var leftSec = leftSec - hrs * 60 * 60;
    var min = Math.floor(leftSec / (60));
    var leftSec = leftSec - min * 60;
    if (days <= 1) {
      return '<div class="new-label"> New<\/div>'
    } else {
      return ''
    }
  }
  var perc = 0;
  if (localStorage["?" + json.href]) {
    perc = localStorage["?" + json.href + "_perc"]
    if (perc == "NaN") {
      perc = 0
    }
    if (perc == undefined) {
      perc = 0
    }
  }

  function showCheck() {
    if (parseInt(perc) > 99) {
      return 1;
    }
    return 0;
  }
  if (!perc == 0) {
    if (document.getElementsByClassName(json.href).length == 0) {
      document.getElementById('watching').innerHTML += '<li style="width: 280px;margin: 11px;" class=" card initialized ' + json.href + '"><a href="#"><div class="piece fanart-container"><div class="image-crop">' + newBanner() + '<a onclick="loadPlayer(this)" href="player.html?' + json.href + '"><\/span><img  src="' + json.img + '" alt="' + json.episode + '" data-original-set="' + json.imgdyn + '" class"lazy" class="loaded" ><\/a><div id="projpar" class="w3-progress-container" style=""><span class="episode-gradient"><\/span><div id="progress" class="w3-progressbar" style="width: ' + perc + '%;"><\/div><\/div><div class="overlay"><a onclick="loadPlayer(this)" href="newplayer.html?' + json.href + '" class="overlay-btn zoom-btn "  title="Watch ' + json.episode + '"><i class="fa fa-play playbutton"><\/i><\/a><\/div><\/div><div class="episode-details fanart-details"><h2><a class="episode-name" onclick="loadPlayer(this)" href="player.html?' + json.href + '">' + json.episode + '<\/a><\/h2><a onclick="loadPlayer(this)" href="" class="secondary-link show-name">' + json.show + '<\/a><a href="javascript:"><i style="    /* opacity: ' + showCheck() + '; */color: rgb(127, 218, 99);position: absolute;right: 10px;bottom: 10px;display:none;" class="visited fa fa-check" aria-hidden="true"><\/i><\/a><\/div><div class="bottom"><\/div><\/div><\/a><\/li>'
    }
  }
  var query = (json.metadata + " " + json.episode).toLowerCase();
  timeofPlayback = json.length.split(':')[0] + 'm'
  var img = ''
  if (json.imgdyn == '') {
    img = 'data-original="' + json.img + '"'
  }
  var formatter = new Intl.DateTimeFormat("en", {
    month: "short"
  })
  var date = new Date(json.airdate)
  var month2 = formatter.format(date);
  var FDate = month2 + ' ' + date.getUTCDate() + ' ' + date.getUTCFullYear()
  document.getElementById('carasoul').innerHTML += '<li  aired="' + json.airdate + '" class="initialized ' + json.type + '" data-query="' + query + '">\
  <div  class="piece fanart-container">\
  <div class=image-crop>' + newBanner() + '\
  <a onclick="loadPlayer(this)" href="player.html?' + json.href + '">\
  <\/span><img alt="' + json.show + '"  ' + img + ' data-original-set="' + json.imgdyn + '" class"lazy" ><\/a><div id="projpar" class="w3-progress-container" style=""><span class="episode-gradient"><\/span><div id="progress" class="w3-progressbar" style="width: ' + perc + '%;"><\/div><\/div><div class="overlay"><a onclick="loadPlayer(this)" href="newplayer.html?' + json.href + '" class="overlay-btn zoom-btn " title="Watch ' + json.episode + '"><i class="fa fa-play playbutton"><\/i><\/a><\/div><\/div><div class="episode-details fanart-details"><h2 ><a class="episode-name" onclick="loadPlayer(this)" href="newplayer.html?' + json.href + '">' + json.episode + '<\/a><\/h2><a onclick="query(null,this)" show="' + json.show + '" href="javascript:" class="secondary-link show-name">' + json.show + '<\/a><div class=more-infos><\/div><p>' + FDate + ' | ' + json.rating + ' | ' + timeofPlayback + ' | ' + json.epiformat + '<\/p><i style="opacity:' + showCheck() + ';color:rgb(127, 218, 99);"class="visited fa fa-check" aria-hidden="true"><\/i><\/div><div class="bottom"><div class="bar"><\/div><div class="bar"><\/div><div class="bar"><\/div><\/div><\/div>'
}


var formatter = new Intl.DateTimeFormat({
  month: "short"
})
var date1 = Date.now()

function loadMedia(json) {

  var template = ''
  var watching = ''
  for (i in json) {
    var con = (json[i].show +''+ json[i].episode).toLowerCase().split(' ').join('').replace(/[^a-zA-Z ]/g, "")
    /*
    if (document.body.querySelector('.'+con)) {
      console.log('there')
      continue;
    }
    */
    var time = json[i].time
if (!json[i].time > 0) {
  time = 140000000
}
    var date2 = new Date(time);

    function newBanner() {
      var diff = (date2 - date1) / 1000;
      var diff = Math.abs(Math.floor(diff));
      var days = Math.floor(diff / (24 * 60 * 60));
    var infuture = (date2 > date1)
      if (days == 0 ) {
        return '<div class="new-label"> New<\/div>';
      } 
      if (infuture) {
                return '<div class="new-label">Unaired<\/div>';

      }
      return '';
    }
    var perc = 0;
    if (localStorage["?" + json[i].href]) {
      perc = localStorage["?" + json[i].href + "_perc"]
      if (perc == "NaN") {
        perc = 0
      }
      if (perc == undefined) {
        perc = 0
      }
    }

    function showCheck() {

      if (perc > 99) {
        return 1;
        alert('finished')
      }
      return 0;
    }
    var done = perc > 99
    if (!done && perc > 0.4) {
      if (document.getElementsByClassName(json[i].href).length == 0) {
        //  document.getElementById('watching').innerHTML += '<div tabindex="1" class="wtc '+json[i].href+'"><a onclick="loadPlayer(this)" href="player.html?'+json[i].href+'" ><img width="100%" src="'+json[i].img+'"><div id="projpar" class="w3-progress-container" style=""><div id="progress" class="w3-progressbar" style="width: '+perc+'%;"><\/div><\/div><br> <span>'+json[i].show+'<\/span><\/a><\/div>'
        watching += '<li style="margin: 11px;" class=" card  ' + json[i].href + '"><a href="#"><div style="   " class="piece fanart-container"><div class="image-crop sixteen-nine" >' + newBanner() + '<a onclick="loadPlayer(this)" href="newplayer.html?' + json[i].href + '"><\/span><div class="bg"  style=" background-image:url('+json[i].bg+');background-size:cover;" ></div><div class="imageBG"><\/div><img    class="cover sixteen-nine lazy "    sizes="(max-width: 600px) 80vw, 460px"    alt="' + json[i].episode + '" data-original-set="' + json[i].imgdyn + '" class"" class="cover" ><i class="fa fa-play-circle-o" aria-hidden="true"><\/i><\/a><span class="episode-gradient"><\/span><div id="projpar" class="w3-progress-container" style=""><div id="progress" class="w3-progressbar" style="width: ' + perc + '%;"><\/div><\/div><div class="overlay"><a onclick="loadPlayer(this)" href="newplayer.html?' + json[i].href + '" class="overlay-btn zoom-btn "  title="Watch ' + json[i].episode + '"><i class="fa fa-play playbutton"><\/i><\/a><\/div><\/div><div class="episode-details fanart-details"><h2><a class="episode-name" onclick="loadPlayer(this)" href="newplayer.html?' + json[i].href + '">' + json[i].episode + '<\/a><\/h2><a onclick="showQuery(null,this)"  show="' + json[i].show + '" href="javascript:" class="secondary-link show-name">' + json[i].show + '<\/a><a href="javascript:"><i style="    /* opacity: ' + showCheck() + '; */color: rgb(127, 218, 99);position: absolute;right: 10px;bottom: 10px;display:none;" class="visited fa fa-check" aria-hidden="true"><\/i><\/a><\/div><div class="bottom"><\/div><\/div><\/a><\/li>'
      }
    }
    var query = (json[i].metadata + " " + json[i].episode).toLowerCase();
    timeofPlayback = json[i].length.split(':')[0] + 'm'
    

    date2.setDate(date2.getDate() );
    var month2 = formatter.format(date2);
    var FDate = month2 + ' ' + date2.getUTCDate() + ' ' + date2.getUTCFullYear()
    FDate = month2
    var out = "'out'"
    template = template + '<li  aired="' + json[i].time + '"  ShowName="' + json[i].show + '" class="initialized  '+con+' ' + json[i].type + '  ' + json[i].id + '" data-query="' + query + '"><div  class="piece fanart-container"><div class="image-crop sixteen-nine"url="'+json[i].href+'" autoplay="'+json[i].autoplay+'" onmouseover="playHover(this)" onmouseout="stopHover(this)">' + newBanner() + '<a onclick="loadPlayer(this)" href="newplayer.html?' + json[i].href + '"><div class="bg"  style=" background-image:url('+json[i].bg+');background-size:cover;" ></div><video class="sixteen-nine" style="top:0px;" playsinline muted loop width="100%" height="100%"></video><\/span><div class="imageBG"><\/div><img     class="cover sixteen-nine lazy"   sizes="(max-width: 600px) 70vw, 25vw"  alt="' + json[i].show + '"   data-original="'+json[i].img +'" data-original-set="' + json[i].imgdyn + '" ><i class="fa fa-play-circle-o" aria-hidden="true"><\/i><\/a><span class="episode-gradient"><\/span><div  class="w3-progress-container" style=""><div class="w3-progressbar" style="width: ' + perc + '%;"><\/div><\/div><div class="overlay"><a onclick="loadPlayer(this)" href="newplayer.html?' + json[i].href + '" class="overlay-btn zoom-btn " title="Watch ' + json[i].episode + '"><i class="fa fa-play playbutton"><\/i><\/a><\/div><\/div><div class="episode-details fanart-details"><h2 ><a class="episode-name" onclick="loadPlayer(this)" href="newplayer.html?' + json[i].href + '">' + json[i].episode + '<\/a><\/h2><a onclick="showQuery(null,this)" show="' + json[i].show + '" href="javascript:" class="secondary-link show-name">' + json[i].show + '<\/a><div class="cardBorder"></div><div class=><p>' + FDate + ' | ' + json[i].rating + ' | ' + timeofPlayback + ' | ' + json[i].epiformat + '<\/p><\/div><i style="opacity:' + showCheck() + ';color:rgb(127, 218, 99);"class="visited fa fa-check" aria-hidden="true"><\/i><\/div><div class="bottom"><div class="bar"><\/div><div class="bar"><\/div><div class="bar"><\/div><\/div><\/div><\/li>'
  }
  document.getElementById('watching').insertAdjacentHTML('beforeend',watching);
  document.getElementById('carasoul').insertAdjacentHTML('beforeend',template);
  template = '';
}

function epiformat(s, e) {
  s = parseInt(s)
  e = parseInt(e)
  if (s < 10) {
    s = '0' + s
  }
  if (e < 10) {
    e = '0' + e
  }
  return 'S' + s + 'E' + e
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
}
var template = "";
var obj = []
var cors_show_hub = 'https://crossorigin.me/' + show_hub
var show_hub = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="' + show_hub + '"') + '&format=json&bust='+Date.now();
loaders()
fetch(show_hub, {
  method: 'get',
  cache: "no-store"
}).then(function(response) {
  return response.json();
}).then(function(data) {
  data = data.query.results.json
  var start = new Date()
  var showsTemp = {}
  for (i in data.videos) {
    if (data.videos[i].fullep == 1) {


      function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000 * 60);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes;
      }
      var epinum = data.videos[i].episode
      try {
        epinum = data.videos[i].availability_asset_id.split('-')[data.videos[i].availability_asset_id.split('-').length - 1]
        var s = (data.videos[i].availability_asset_id.split('-')[data.videos[i].availability_asset_id.split('-').length - 1].split('E')[0].split('S')[1])
        var e = (data.videos[i].availability_asset_id.split('-')[data.videos[i].availability_asset_id.split('-').length - 1].split('E')[1])
      } catch (e) {
        console.log(e)
      }
      var airdate =  data.videos[i].airdate
      if (airdate == '') {
        airdate = (data.videos[i].start_time)
      }
      var dyn =  data.videos[i].large_thumbnail.split('tv_')[0] + 'tv_1920x1080.jpg 1920w, ' +data.videos[i].large_thumbnail + " 720w  ,"+ data.videos[i].large_thumbnail.split('tv_')[0] + 'tv_640x360.jpg 640w, '+data.videos[i].large_thumbnail.split('tv_')[0] + 'tv_609x335.jpg 609w, ' +  data.videos[i].medium_thumbnail + ' 210w, ' + data.videos[i].large_thumbnail.split('tv_')[0] + 'tv_141x79.jpg 144w '
      tvlist(data.videos[i].series_name)
      var episode_data = {
        img: data.videos[i].medium_thumbnail,
        rating: (data.videos[i].rating),
        imgdyn: dyn,
        id: makeid(),
        href: data.videos[i].share_url,
        show: data.videos[i].series_name,
        episode: data.videos[i].title,
        epiformat: epiformat(s, e),
        length: data.videos[i].duration,
        metadata: data.videos[i].rating + data.videos[i].airdate + data.videos[i].series_name + data.videos[i].title + epinum + data.videos[i].duration,
        type: "cw",
        bg:(data.videos[i].large_thumbnail.split('tv_')[0] + 'tv_141x79.jpg').split('.com').join('.com.rsz.io') + '?width=8&format=jpeg&quality=0',
        time:Date.parse(airdate)

      }
      finalObj.push(episode_data)
    }
  }
  loaders('remove');
  template = ''
  var end = new Date()
}).catch(function(err) {
  console.log(err)
});
var nickAPI = 'https://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="http://www.nick.com/data/episodes.json?apiKey=jukebox.nick.com"') + '&format=json&bust=' + (new Date()).getTime();

function nick() {
  loaders();
  fetch(nickAPI, {}).then(function(response) {
    return response.json();
  }).then(function(json) {
    json = json.query.results.json
    var showsTemp = {}
    for (i in json.stream) {
      for (a in json.stream[i].items) {
        try {
          if (!showsTemp[json.stream[i].items[a].data.seriesTitle]) {
            showsTemp[json.stream[i].items[a].data.seriesTitle] = json.stream[i].items[a].data.seriesTitle
          }
          var S = json.stream[i].items[a].data.duration;
          var times = S.split(":");
          var minutes = times[0];
          var seconds = times[1];
          seconds = parseInt(seconds, 10) + (parseInt(minutes, 10) * 60);
          tvlist(json.stream[i].items[a].data.seriesTitle)
          var date = formatDate(json.stream[i].items[a].data.datePosted.source)
          if (date == 'NaN-NaN-NaN') {
            date = formatDate('1/1/2017')
          }
          var temp = json.stream[i].items[a].data.datePosted.source
          var image = json.stream[i].items[a].data.images.thumbnail['r16-9'].split('=')
          image[1] = '0.40';
          image = image.join();
          finalObj.push({
            img: image,
            rating: 'TV-14',
            href: 'nick.com' + json.stream[i].items[a].data.url,
            id: makeid(),
            show: json.stream[i].items[a].data.seriesTitle,
            episode: json.stream[i].items[a].data.shortTitle,
            epiformat: json.stream[i].items[a].data.episode,
            length: fmtMSS(seconds),
            metadata: json.stream[i].items[a].data.seriesTitle + json.stream[i].items[a].data.shortTitle,
            type: "nick",
            imgdyn: '',
            bg:'',
            time:Date.parse(temp)
          })
        } catch (e) {}
      }
    }
    loaders('remove');
  }).catch(function(e) {})
}

function fox(range) {
  loaders()

  fetch('https://feed.theplatform.com/f/fox-mobile/fullepisodes?count=true&form=json&byCustomValue={requiresAuth}{false}&range=0-75', {
    method: 'get',
    cache: "no-store"
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    var showsTemp = {}
    for (i in data.entries) {
      if (!showsTemp[data.entries[i].fox$series]) {
        showsTemp[data.entries[i].fox$series] = data.entries[i].fox$series
      }
      var date = new Date(data.entries[i].pubDate)
      date.setDate(date.getDate() - 1);
      var srcset = ''
      var srcobj = []
      for (var z = data.entries[i].media$thumbnails.length - 1; z >= 0; z--) {
        var img = data.entries[i].media$thumbnails[z].plfile$url
        img = img.replace('http', 'https')
        srcobj.push({
          src: img,
          width: data.entries[i].media$thumbnails[z].plfile$width
        })
        srcset += img + ' ' + data.entries[i].media$thumbnails[z].plfile$width + 'w ,  ';
      }
      srcobj = srcobj.sort(function(a, b) {
        if (a.width < b.width) return -1;
        if (a.width > b.width) return 1;
        return 0;
      })
      srcobj = srcobj.reverse()
        /* for (var y = srcobj.length - 1; y >= 0; y--) {
          var google = 'https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&url='
          cdn = 'https://d1r1anxoiubeog.cloudfront.net/'
          srcset += cdn + srcobj[y].src + ' ' + srcobj[y].width + 'w ,  ';
        }
        */
        console.log(data.entries[i].media$ratings[0].rating)
      finalObj.push({
        img: '',
        rating: rating(data.entries[i].media$ratings[0].rating),
        href: data.entries[i].media$content[0].plfile$url,
        show: data.entries[i].fox$series,
        episode: data.entries[i].title,
        id: makeid(),
        epiformat: epiformat(data.entries[i].fox$season, data.entries[i].fox$episode),
        length: fmtMSS(data.entries[i].media$content[0].plfile$duration),
        metadata: rating(data.entries[i].media$ratings[0].rating) + formatDate(data.entries[i].media$availableDate) + data.entries[i].fox$series + data.entries[i].title + epiformat(data.entries[i].fox$season, data.entries[i].fox$episode) + fmtMSS(data.entries[i].media$content[0].plfile$duration),
        type: "fox",
        imgdyn: srcset,
        time:Date.parse(date)
      })
    }
    loaders('remove');
  }).catch(function(err) {
    console.log(err)
  });
}

function procABC(showepi) {
  var showObj = []
  for (a in showepi.videos.video) {
    var thumb
    try {
      if (showepi.videos.video[a].hasOwnProperty('thumbnails')) {
        thumb = showepi.videos.video[a].thumbnails.thumbnail[0].$
      }
      var airdate = formatDate(showepi.videos.video[a].airdates.airdate)
    } catch (e) {
      console.log(e)
    }
    showObj.push({
      img: thumb,
      rating: (showepi.videos.video[a].tvrating.rating),
      href: "abc.go.com/vidcode=" + showepi.videos.video[a]['@id'],
      show: showepi.videos.video[a].show.title,
      episode: showepi.videos.video[a].title,
      id: makeid(),
      epiformat: epiformat(showepi.videos.video[a].season.trackcode.generic.cseason, showepi.videos.video[a].number),
      length: msToTime(showepi.videos.video[a].duration['$']),
      metadata: (showepi.videos.video[a].tvrating.rating) + airdate + showepi.videos.video[a].show.title + showepi.videos.video[a].show.title + epiformat(showepi.videos.video[a].season.trackcode.generic.cseason, showepi.videos.video[a].number) + msToTime(showepi.videos.video[a].duration['$']),
      type: "abc"
    });
  }
  loadMedia(showObj)
  loaders('remove');
}

function useABC(json) {
  for (i in json.shows.show) {
    addJS('https://api.watchabc.go.com/vp2/ws/s/contents/2020/videos/jsonp/001/001/-1/' + json.shows.show[i]['@id'] + '/-1/-1/-1/-1?callback=procABC')
  }
  loadMedia(obj)
}
// addJS('https://api.watchabc.go.com/vp2/ws/s/contents/2020/shows/jsonp/001/001/-1?callback=useABC')
function fancyTimeFormat(time) {
  // Hours, minutes and seconds
  var hrs = ~~(time / 3600);
  var mins = ~~((time % 3600) / 60);
  var secs = Math.floor(time % 60);
  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";
  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}
/*
fetch(proxy + 'http://www.adultswim.com/videos/api/v2/videos?fields=title,season_number,collection_title,episode_number,episode,auth,duration,tv_rating,launch_date,type,images,episode,images,title&limit=80&offset=0&sortByDate=DESC&filterByEpisodeType=EPI,TVE&filterByAuthType=true&filterByPlatform=mobile&q=type:episode', {
   method: 'get',
   cache: "no-store"
}).then(function(response) {
   return response.json(); 
}).then(function(data){
     var showsTemp = {}

var start = new Date()

for(i in data.data){

if (!showsTemp[data.data[i].collection_title]) {

showsTemp[data.data[i].collection_title] = data.data[i].collection_title

}

    function millisToMinutesAndSeconds(millis) {
 var minutes = Math.floor(millis / 60000 * 60);
 var seconds = ((millis % 60000) / 1000).toFixed(0);
 return minutes;
}

var epinum 
try{
epinum = "S" +data.data[i].season_number +"E" +data.data[i].episode_number

}catch(e){
console.log(e) 
}



 loadQuick({img:data.data[i].images[0].url,
   rating:(data.data[i].tv_rating),
   href: "asdir=" +data.data[i].id,
   airdate:formatDate(data.data[i].launch_date),
   show:data.data[i].collection_title,
   episode:data.data[i].title,
   epiformat:epinum,
   length:fancyTimeFormat(data.data[i].duration),
   metadata:data.data[i].tv_rating + data.data[i].launch_date + data.data[i].collection_title + data.data[i].title + epinum + data.data[i].duration,
   type:"adultswim"
 })


  }
loaders('remove');
tvlist(showsTemp)
sortCards()

     lazyLoadImages();

  var end = new Date()



}).catch(function(err) {
console.log(err.message)
});




*/
// fox('0-200')
 

    var finalObj = []


function newfox(){

var externalToApi = 'https://api.fox.com/fbc-content/v3/video?externalId=853172291669'
var shows = 'https://api.fox.com/fbc-content/v3/screens/find'
var newest = 'https://api.fox.com/fbc-content/v3/screenpanels/58d57fd0880f910001a9fb82/items' 
var data = null;

function loadInfo(id){
    loaders()

var loadShow = new XMLHttpRequest();
loadShow.addEventListener("readystatechange", function () {
    if (!this.status  === 200) {
console.log(this)
loaders('remove')

}
  if (this.readyState === 4) {
    var showinfo = (JSON.parse(this.responseText));


var seasoninfo = new XMLHttpRequest();
seasoninfo.addEventListener("readystatechange",function () {
      if (!this.status  == 200) {
loaders('remove')

}
  if (this.readyState === 4) {
var json = (JSON.parse(this.responseText))

for(i in json.member){
if(!json.member[i].requiresAuth && json.member[i].isFullEpisode ){
var image = json.member[i].images.still.HD.split('?')[0]
var sizes = [
'208:117',
'240:135',
'304:171',
'384:216',
'400:225',
'432:243',
'576:324',
'720:405',
'768:432',
'896:504',
'1024:576',
'1280:720',
'1920:1080'
]
var srcset = ''
for (var z = sizes.length - 1; z >= 0; z--) {
  srcset += (image + '?fit=inside%7C' + encodeURIComponent(sizes[z]) + ' '+ sizes[z].split(':')[0] +'w ' +sizes[z].split(':')[1] +'h,')
}
srcset = srcset.substr(0, srcset.length - 1);
var temp = new Date(json.member[i].available);
temp.setDate(temp.getDate()-1);

      finalObj.push({
        img: json.member[i].images.still.SD,
        rating: rating(json.member[i].contentRating),
        href: json.member[i]['@id'],
        show: json.member[i].seriesName,
        episode: json.member[i].name,
        id: makeid(),
        epiformat: epiformat(json.member[i].seasonNumber, json.member[i].episodeNumber),
        length: fmtMSS(json.member[i].durationInSeconds),
        metadata:  json.member[i].alternativeHeadline + " " +json.member[i].headline ,
        type: "fox",
        imgdyn: srcset,
        autoplay:json.member[i].autoPlayVideo.default.url,
        bg:json.member[i].images.still.HD.split('?')[0] + '?fit=inside%7C' + encodeURIComponent('8:4')+'',
        time:Date.parse(temp)

              })


}
}
loaders('remove')




}

})

var season = null
try{
var season = showinfo.panels.member[1].items.member["0"].episodes["@id"]
seasoninfo.open("GET",season);
seasoninfo.setRequestHeader("apikey", "rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR");

seasoninfo.send(null)

    loaders()

}catch(e){
}








loaders('remove')

  }
});
loadShow.open("GET", 'https://api.fox.com/fbc-content/v3/screens/series-detail/'+id);

loadShow.setRequestHeader("apikey", "rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR");
loadShow.send(data)

}





    loaders()

var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
var allshows = []
var json = JSON.parse(this.responseText).panels.member
/*
for (var i = json.length - 1; i >= 0; i--) {
  try{

allshows.unshift.apply( allshows, json[i].items.member );

  
  }catch(e){
console.log(e)
  }

}
*/
allshows.unshift.apply( allshows, json[3].items.member );

// FX allshows.unshift.apply( allshows, json[4].items.member );

    var foxshows = (JSON.parse(this.responseText).panels.member[3].items.member);
    for (var i = allshows.length - 1; i >= 0; i--) {
if(allshows[i].seriesType != 'special' || allshows[i].seriesType != 'movie'){

            tvlist(allshows[i].name,allshows[i].images.seriesList.HD )
            loadInfo(allshows[i].id)

          }

    }
loaders('remove')

  }
});


xhr.open("GET", "https://api.fox.com/fbc-content/v3/screens/find");

xhr.setRequestHeader("apikey", "rm7dzFLzucfbXAVkZi8e1P34PWEN4GoR");


xhr.send(data);

}
newfox()
