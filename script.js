window.addEventListener('mousemove', function(details){
    let xValue = details.pageX;
    let yValue = details.pageY;

    setTimeout(function(){
        circle.style.top = yValue + 'px';
        circle.style.left = xValue + 'px';
    },100)
})

$('.last').textillate({
    autoStart: false,
    in: {
        effect: 'fadeInUp',
        delay: 15
    },
    callback: function(){
        gsap.fromTo('.photo', {
            opacity:0,
            y: 20,
            duration: 2,
            ease: 'Expo.easeInOut'
        },{
            opacity:1,
            y: 0,
        })
    }
})

$('#navBar p').textillate({
    in: {
        effect: 'fadeInUp'
    }, 
    loop:true,
    out: {
        effect: 'fadeOutRight'
    }
})

gsap.to('.fade', {
    scrollTrigger: {
        trigger: '#down',
        start: 'top 10%',
        toggleActions: 'play pause resume reverse',
    },
    opacity:0,
    y: -100,
    stagger: .3,
    duration: 2,
    onComplete: function(){
        $('.last').textillate('start')
    }
})
