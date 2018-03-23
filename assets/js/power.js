    // Way Point
    if ($('.my-big-reveal-omg').length > 0) {
        var waypoints = $('.my-big-reveal-omg').waypoint({
            handler: function() {
                $(this.element).addClass('this-is-my-moment');
            },
            offset: '95%'
        });
    }