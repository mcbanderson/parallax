/**
 *
 * Parallax.js jQuery Plugin
 * @author: Max Anderson
 *
 */

;(function($){

    var methods = {
        init: function(options) {
            return this.each(function() {
                this.opts = $.extend(true, {}, $.fn.parallax.defaults, options);

                var xPos;
                var yPos;
                var that = this;

                $(window).scroll([xPos, yPos], function() {
                    if (that.opts.motion === 'linear') {
                        xPos = methods.linear.call(that, that.opts.xStart, that.opts.xSpeed);
                        yPos = methods.linear.call(that, that.opts.yStart, that.opts.ySpeed);
                    }

                    if (that.opts.motion === 'exponential') {
                        xPos = methods.exponential.call(that, that.opts.xStart, that.opts.xSpeed, that.opts.exponent);
                        yPos = methods.exponential.call(that, that.opts.yStart, that.opts.ySpeed, that.opts.exponent);
                    }

                    methods.parallax.call(this, that, xPos, yPos, that.opts.xUnit, that.opts.yUnit);
                });

                return this;
            });
        },

        exponential: function(start, speed, exponent) {
            return start + Math.pow($(window).scrollTop(), exponent) * speed;
        },

        linear: function(start, speed) {
            return start + $(window).scrollTop() * speed;
        },

        parallax: function(that, xPos, yPos, xUnit, yUnit) {
            that.css({'background-position': xPos + xUnit + yPos + yUnit});
            return this;
        }

    };

    $.fn.parallax = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist!');
        }
    };

    $.fn.parallax.defaults = {
        exponent    : 1.25,
        motion      : 'linear',
        xSpeed      : 0,
        xStart      : 0,
        xUnit       : '% ',
        ySpeed      : 0.2,
        yStart      : 0,
        yUnit       : 'px',
    };

})(jQuery);
