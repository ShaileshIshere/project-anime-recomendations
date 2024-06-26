gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
    return arguments.length
    ? locoScroll.scrollTo(value, 0, 0)
    : locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect() {
    return {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    };
},
pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

const cursorCircle = document.querySelector("#crsr");
window.addEventListener("mousemove", function (dets) {
    cursorCircle.style.top = dets.pageY + 'px';
    cursorCircle.style.left = dets.pageX + 'px';
});

Shery.makeMagnet("#nav-part2 h4");

function loadingAnimation() {
    let h5Timer = document.querySelector("#line1-part1 h5");
    let timer = gsap.timeline();

    timer.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    });
    timer.from("#line1-part1", {
        opacity: 0,
        onStart: function() {
            let counter = 0;
            setInterval(function() {
                if(counter < 100)
                    h5Timer.innerHTML = counter++;
                else
                    h5Timer.innerHTML = counter;
            }, 33);
        }
    });
    timer.to(".line h2", {
        animationName: "nowAnimation",
        opacity: 1
    });
    timer.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 3
    });
    timer.from("#main", {
        opacity: 1,
        y: 1200,
        duration: 0.8,
        ease: "expo.inout"
    });
    timer.to("#loader", {
        display: "none"
    });
    timer.from("#nav", {
        opacity: 0,
        duration: 0.2
        // delay: 0.2
    });
    timer.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h1,#hero4 h1", {
    y: 120,
    stagger: 0.2,
    });
}
function cursorAnimation() {
    // mouse cursor changed to circlular structure that follows our cursor
    // const cursorCircle = document.querySelector("#crsr");
    // window.addEventListener("mousemove", function (dets) {
    //     // gsap.to("#crsr", {
    //     //   left: dets.x,
    //     //   top: dets.y,
    //     // });
        
    //     cursorCircle.style.top = dets.pageY + 'px';
    //     cursorCircle.style.left = dets.pageX + 'px';
    // });
    // Shery.mouseFollower({
    //     skew: true,
    //     // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    //     ease: "ease-in",
    //     duration: 1,
    //   });
    
    // nav bar magnet effect

    // video container ke andar ka mouse hover effect
    let videoContainer = document.querySelector("#video-container");
    let video = document.querySelector("#video-container video");
    videoContainer.addEventListener("mouseenter", function() {
        videoContainer.addEventListener("mousemove", function(dets) {
            gsap.to("#crsr", {
                opacity: 0,
            })
            gsap.to("#video-cursor", {
                x: dets.x - 1250,
                y: dets.y - 250,
            })
        })
    })
    videoContainer.addEventListener("mouseleave", function() {
        gsap.to("#crsr", {
            opacity: 1,
        })
        gsap.to("#video-cursor", {
            top: "-10%",
            left: "80%",
        })
    })
    let flag = 0
    videoContainer.addEventListener("click", function() {
        if(!flag) {
            video.play();
            document.querySelector("#video-container img").style.opacity = 0
            video.style.opacity = 1
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
            gsap.to("#video-cursor", {
                scale: 0.5
            })
            flag = 1
        }
        else {
            video.pause();
            video.style.opacity = 0
            document.querySelector("#video-container img").style.opacity = 1
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
            gsap.to("#video-cursor", {
                scale: 1
            })
            flag = 0
        }
    })
}
function sheryAnimation() {
    var screenWidth = window.innerWidth;
    if(screenWidth > 400) {
        document.addEventListener("mouseenter", function() {
            Shery.imageEffect(".images", {
                style: 5,
                gooey: true,
                config:{
                "a":{"value":2,"range":[0,30]},
                "b":{"value":-0.99,"range":[-1,1]},
                "zindex":{"value":-9996999,"range":[-9999999,9999999]},
                "aspect":{"value":0.7272695760684946},
                "ignoreShapeAspect":{"value":true},
                "shapePosition":{"value":{"x":0,"y":0}},
                "shapeScale":{"value":{"x":0.5,"y":0.5}},
                "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
                "shapeRadius":{"value":0,"range":[0,2]},
                "currentScroll":{"value":0},
                "scrollLerp":{"value":0.07},
                "gooey":{"value":true},
                "infiniteGooey":{"value":false},
                "growSize":{"value":4,"range":[1,15]},
                "durationOut":{"value":1,"range":[0.1,5]},
                "durationIn":{"value":1.5,"range":[0.1,5]},
                "displaceAmount":{"value":0.5},
                "masker":{"value":true},
                "maskVal":{"value":1.15,"range":[1,5]},
                "scrollType":{"value":0},
                "geoVertex":{"range":[1,64],"value":1},
                "noEffectGooey":{"value":true},
                "onMouse":{"value":0},
                "noise_speed":{"value":0.2,"range":[0,10]},
                "metaball":{"value":0.5,"range":[0,2]},
                "discard_threshold":{"value":0.5,"range":[0,1]},
                "antialias_threshold":{"value":0,"range":[0,0.1]},
                "noise_height":{"value":0.5,"range":[0,2]},
                "noise_scale":{"value":10,"range":[0,100]}},
            })
        })
    }
}
function flagAnimation() {
    document.addEventListener("mousemove", function (dets) {
      gsap.to("#flag", {
        x: dets.x - 25,
        y: dets.y + 60
      })
    })
    document.querySelector("#hero3").addEventListener("mouseenter", function () {
        gsap.to("#crsr", {
            opacity: 0,
        })
      gsap.to("#flag", {
        opacity: 1
      })
    })
    document.querySelector("#hero3").addEventListener("mouseleave", function () {
        gsap.to("#flag", {
          opacity: 0
        })
        gsap.to("#crsr", {
            opacity: 1
        })
    })
}

cursorAnimation();
loadingAnimation();
sheryAnimation();
flagAnimation();