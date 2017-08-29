'use strict';

(function () {
    var $app = document.querySelector('.app');
    var $play = document.querySelector('.app__play');
    var $cross = document.querySelector('.app__cross');
    var $appSongs = document.querySelectorAll('.app__song');
    var $arrMusic = document.querySelectorAll('.js-hook--music');
    var $appBg = document.querySelector('.app__bg');
    var $likes = document.querySelectorAll('.app__song-likes');
    var $reset = document.querySelector('.reset');
    var animSpeed = 50;
    var crossAnimSpeed = 1500;
    var crossAnim = false;
    var animDuration = animSpeed * ($arrMusic.length - 2);
    var animShowIn = false;
    var animLikes = false;
    var showMusicDelay = 500;
    var songOpenDelay = 1000;
    var likesDelay = 300;
    var songsChangeDelay = 500;
    var resetFadeDelay = 500;
    var fadeOutCrossDelay = 400;

    var showIn = function showIn() {
        if (!animShowIn) {
            animShowIn = true;
            $cross.classList.add('fadeOutCross');
            $play.classList.add('fadeOutPlay');

            setTimeout(function () {
                $appBg.classList.remove('resetFade');
                $appBg.classList.add('showInBg');

                var _loop = function _loop(_i, _l) {
                    setTimeout(function () {
                        $arrMusic[_i].classList.add('showIn');
                    }, animSpeed * _i);
                };

                for (var _i = 0, _l = $arrMusic.length; _i < _l; _i++) {if (window.CP.shouldStopExecution(1)){break;}
                    _loop(_i, _l);
                }
                window.CP.exitedLoop(1);


                setTimeout(function () {
                    animShowIn = false;
                    $app.style.overflow = 'hidden';
                }, animDuration + 1000);

                setTimeout(function () {
                    $arrMusic[3].classList.add('songopen');
                    $likes[1].style.opacity = '1';

                    setTimeout(function () {
                        for (var i = 0, l = $likes[0].children.length; i < l; i++) {if (window.CP.shouldStopExecution(2)){break;}
                            $likes[1].children[i].style.opacity = '1';
                        }
                        window.CP.exitedLoop(2);

                    }, likesDelay);
                }, songOpenDelay);
            }, showMusicDelay);
        }
    };

    var showLikes = function showLikes(e) {
        var $parent = e.target.parentNode;
        var $likes = $parent.children[3];

        if (!$parent.classList.contains('songopen') && animLikes === false && animShowIn === false) {
            animLikes = true;
            for (var i = 0; i < $appSongs.length; i++) {if (window.CP.shouldStopExecution(4)){break;}
                $appSongs[i].classList.remove('songopen');
                $appSongs[i].children[3].style.opacity = '0';
                $likes.children[i].style.opacity = '0';

                setTimeout(function () {
                    $parent.classList.add('songopen');
                    $likes.style.opacity = '1';
                    setTimeout(function () {
                        for (var i = 0, l = $likes.children.length; i < l; i++) {if (window.CP.shouldStopExecution(3)){break;}
                            $likes.children[i].style.opacity = '1';
                        }
                        window.CP.exitedLoop(3);

                    }, likesDelay);
                }, songsChangeDelay);

                setTimeout(function () {
                    animLikes = false;
                }, songsChangeDelay + likesDelay);
            }
            window.CP.exitedLoop(4);

        }
    };

    var reset = function reset() {
        if ($appBg.classList.contains('showInBg') && animShowIn === false) {
            animShowIn = true;
            for (var i = 0; i < $appSongs.length; i++) {if (window.CP.shouldStopExecution(5)){break;}
                $appSongs[i].classList.remove('songopen');
                $appSongs[i].children[3].style.opacity = '0';
            }
            window.CP.exitedLoop(5);


            var _loop2 = function _loop2(_i2, _l2) {
                $arrMusic[_i2].classList.add('resetFade');
                $appBg.classList.add('resetFade');
                setTimeout(function () {
                    $arrMusic[_i2].classList.remove('showIn');
                    $arrMusic[_i2].classList.remove('resetFade');
                    $appBg.classList.remove('showInBg');
                }, resetFadeDelay);
            };

            for (var _i2 = 0, _l2 = $arrMusic.length; _i2 < _l2; _i2++) {if (window.CP.shouldStopExecution(6)){break;}
                _loop2(_i2, _l2);
            }
            window.CP.exitedLoop(6);


            setTimeout(function () {
                $cross.classList.remove('fadeOutCross');
                $play.classList.remove('fadeOutPlay');
            }, fadeOutCrossDelay);

            setTimeout(function () {
                animShowIn = false;
            }, crossAnimSpeed + fadeOutCrossDelay);
        }
    };

    $reset.addEventListener('click', reset);

    setTimeout(function () {
        if (!crossAnim) {
            $play.addEventListener('click', showIn);
        }
    }, crossAnimSpeed);

    for (var i = 0, l = $appSongs.length; i < l; i++) {if (window.CP.shouldStopExecution(7)){break;}
        $appSongs[i].addEventListener('click', showLikes);
    }
    window.CP.exitedLoop(7);

})();