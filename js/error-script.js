!function(e){e(function(){e().ready(function(){!function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=e}();var t=document.getElementById("canvas-404");if(null!==t){setTimeout(function(){e(".js-toaster_lever").delay(200).animate({top:30},100),e(".js-toaster_toast").removeClass("js-ag-hide").addClass("js-ag-animated js-ag-bounce-in-up")},800);var i=t.getContext("2d"),a=!0;t.height=210,t.width=300;var n=[],s=100,h=(new Date).getTime(),o=Math.min(6e3,t.height/90*1e3),r=t.width/2-50,m=t.height-10,l=new Image;d.prototype.update=function(){this.lifeTime=(new Date).getTime()-this.startLife,this.angle+=.2;var e=this.lifeTime/o*100;this.size=this.startSize+(this.endSize-this.startSize)*e*.1,this.alpha=1-.01*e,this.alpha=Math.max(this.alpha,0),this.x+=this.velX,this.y+=this.velY},l.src=document.getElementsByTagName("img")[0].src,l.onload=function(){a=!1},u()}function u(){if(a)return g(),!1;var e=n.length;for(i.clearRect(0,0,t.width,t.height);e--;)if(n[e].y<0||n[e].lifeTime>o)n.splice(e,1);else{n[e].update(),i.save();var w=-n[e].size/2,f=-n[e].size/2;i.translate(n[e].x-w,n[e].y-f),i.rotate(n[e].angle/180*Math.PI),i.globalAlpha=n[e].alpha,i.drawImage(l,w,f,n[e].size,n[e].size),i.restore()}(new Date).getTime()>h+s&&(h=(new Date).getTime(),n.push(new d(r,m))),requestAnimationFrame(u)}function d(e,t,i){this.x=e,this.y=t,this.size=1,this.startSize=60,this.endSize=69,this.angle=359*Math.random(),this.startLife=(new Date).getTime(),this.lifeTime=0,this.velY=-1-.5*Math.random(),this.velX=Math.floor(-6*Math.random()+3)/10}function g(){a?setTimeout(g,3e3):u()}})})}(jQuery);