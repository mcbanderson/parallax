# parallax.js

Parallax.js is a very simple jQuery plugin for creating a parallax effect on images. As a user scrolls up and down on a page, the 
position of the background image is changed to create the effect. It utilizes the background-position CSS property
to create the effect, and so only works on elements that have a background-image set.

##Installation
To use the plugin, simply include it in your project.

Example:
```
<script src="/js/parallax.js"></script>
```

##Usage
To use the plugin, simply call .parallax() on the element you wish to create the effect for.

```
$('#selector').parallax();
```

##Options
You can control the speed of the effect by changing the ySpeed option.

```
$('#selector').parallax({
  ySpeed: 1
});
```

You can also create horizontal motion by changing the xSpeed option.

```
$('#selector').parallax({
  xSpeed: 0.2
});
```

#License
GNU General Public License
See LICENSE file
