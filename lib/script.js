(function(){

    var snap = Snap('#first');

    Snap.load('svg/svg.svg', draw);

    function draw(loadedFragment) {
        snap.append(loadedFragment);
        //snap.rect(10, 10, 100, 100);
        snap.circle(50, 50, 40);
    }

})();
