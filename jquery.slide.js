(function($){
    $.fn.slidemove = function(options) {
        var layer = $(this);
        var speedX = calcSpeed(layer, 'x');
        var speedY = calcSpeed(layer, 'y');

        $(window).resize(function () {
            speedY = calcSpeed(layer, 'y');
            speedX = calcSpeed(layer, 'x');
        });

        $(window).on('mousemove', function(e) {
            if(speedX==0){
                x = ((window.innerWidth-this.width())/2);
                y = moveY(e, speedY);
                if(speedY==0){
                    x = ((window.innerWidth-this.width())/2);
                    y = ((window.innerHeight-this.height())/2);
                }
            }
            else if(speedY==0){
                x = moveX(e, speedX);
                y = ((window.innerHeight-this.height())/2);

            }
            else {
                x = moveX(e, speedX);
                y = moveY(e, speedY);
            }
            $(layer).css({position: 'fixed', left:x, top:y});
        });
    };

    function calcSpeed(target, axis){
        if (axis == 'y'){
            speed = (target.height()/window.innerHeight)-1;
        } else if( axis == 'x'){
            speed = (target.width()/window.innerWidth)-1;
        }
        if (speed <= 0){
            return 0;
        } else{
            return speed;
        }
    };

    function moveX(e, speed){
        return -(e.clientX)*speed;
    };
    function moveY(e, speed){
        return -(e.clientY)*speed;
    }
})(jQuery);