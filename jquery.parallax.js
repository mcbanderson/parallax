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

;(function($, window, document, undefined){

    var Parallax = function(elem, options){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('parallax');
    };

    Parallax.prototype = {
        defaults: {
            exponent    : 1.25,
            motion      : 'linear',
            xSpeed      : 0,
            xStart      : 0,
            xUnit       : '% ',
            ySpeed      : 0.2,
            yStart      : 0,
            yUnit       : 'px',
        },
        xPos: 0,
        yPos: 0,
        init: function() {
            this.config = $.extend({}, this.defaults, this.options, this.metadata);
            $(window).scroll(this.parallax.bind(this));
            return this;
        },
        exponential: function(start, speed, exponent) {
            return start + Math.pow($(window).scrollTop(), exponent) * speed;
        },
        linear: function(start, speed) {
            return start + $(window).scrollTop() * speed;
        },
        parallax: function() {
            if (this.config.motion === 'linear') {
                this.xPos = this.linear(this.config.xStart, this.config.xSpeed);
                this.yPos = this.linear(this.config.yStart, this.config.ySpeed);
            }

            if (this.config.motion === 'exponential') {
                this.xPos = this.exponential(this.config.xStart, this.config.xSpeed, this.config.exponent);
                this.yPos = this.exponential(this.config.yStart, this.config.ySpeed, this.config.exponent);
            }

            this.render();
        },
        render: function() {
            this.$elem.css({'background-position': this.xPos + this.config.xUnit + this.yPos + this.config.yUnit});
        }
    };

    Parallax.defaults = Parallax.prototype.defaults;

    $.fn.parallax = function(options) {
        return this.each(function() {
            new Parallax(this, options).init();
        });
    };

})(jQuery, window, document);
