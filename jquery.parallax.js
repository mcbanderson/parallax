/**
 *
 * Parallax.js jQuery Plugin
 *
 * Github: https://github.com/mcbanderson/parallax/
 *
 * @author: Max Anderson
 * @license: GNU General Public License
 *
 */

;(function($){

    var methods = {
        init: function(options) {
            return this.each(function() {
                this.opts = $.extend(true, {}, $.fn.parallax.defaults, options, $(this).data());

                var that = this;

                $(window).on("scroll load", function() {
                    var xPos = methods.position.call(that, that.opts.xStart, that.opts.xSpeed, that.opts.exponent);
                    var yPos = methods.position.call(that, that.opts.yStart, that.opts.ySpeed, that.opts.exponent);

                    methods.parallax.call(this, that, xPos, yPos, that.opts.xUnit, that.opts.yUnit);
                });

                return this;
            });
        },

        position: function(start, speed, exponent) {
            return start + Math.pow($(window).scrollTop(), exponent) * speed;
        },

        parallax: function(that, xPos, yPos, xUnit, yUnit) {
            $(that).css({'background-position': xPos + xUnit + yPos + yUnit});
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
        exponent    : 1,
        xSpeed      : 0,
        xStart      : 0,
        xUnit       : 'px ',
        ySpeed      : 1,
        yStart      : 0,
        yUnit       : 'px',
    };

})(jQuery);
