function onePageScroll(e, t) {
    var n = {
            sectionContainer: "section",
            easing: "ease",
            animationTime: 1e3,
            pagination: true,
            updateURL: false,
            keyboard: true,
            beforeMove: null,
            afterMove: null,
            loop: false,
            responsiveFallback: false
        },
        r = this,
        i = Object.extend({}, n, t),
        s = document.querySelector(e),
        o = document.querySelectorAll(i.sectionContainer),
        u = o.length,
        a = "off",
        f = 0,
        l = 0,
        c = 500,
        h = "",
        p = document.querySelector("body");
    this.init = function() {
        _addClass(s, "onepage-wrapper");
        s.style.position = "relative";
        for (var e = 0; e < o.length; e++) {
            _addClass(o[e], "ops-section");
            o[e].dataset.index = e + 1;
            f = f + 100;
            if (i.pagination == true) {
                h += "<li><a data-index='" + (e + 1) + "' href='#" + (e + 1) + "'></a></li>"
            }
        }
        _swipeEvents(s);
        document.addEventListener("swipeDown", function(e) {
            if (!_hasClass(p, "disabled-onepage-scroll")) e.preventDefault();
            moveUp(s)
        });
        document.addEventListener("swipeUp", function(e) {
            if (!_hasClass(p, "disabled-onepage-scroll")) e.preventDefault();
            moveDown(s)
        });
        if (i.pagination == true) {
            var t = document.createElement("ul");
            t.setAttribute("class", "onepage-pagination");
            p.appendChild(t);
            t.innerHTML = h;
            var n = document.querySelector(".onepage-pagination").offsetHeight / 2 * -1;
            document.querySelector(".onepage-pagination").style.marginTop = n
        }
        if (window.location.hash != "" && window.location.hash != "#1") {
            var r = window.location.hash.replace("#", ""),
                u = document.querySelector(i.sectionContainer + "[data-index='" + r + "']"),
                a = u.dataset.index;
            _addClass(document.querySelector(i.sectionContainer + "[data-index='" + r + "']"), "active");
            _addClass(p, "viewing-page-" + r);
            if (i.pagination == true) _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + r + "']"), "active");
            if (u) {
                _addClass(u, "active");
                if (i.pagination == true) _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + r + "']"), "active");
                p.className = p.className.replace(/\bviewing-page-\d.*?\b/g, "");
                _addClass(p, "viewing-page-" + a);
                if (history.replaceState && i.updateURL == true) {
                    var l = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + r;
                    history.pushState({}, document.title, l)
                }
            }
            var c = (r - 1) * 100 * -1;
            _transformPage(s, i, c, r)
        } else {
            _addClass(document.querySelector(i.sectionContainer + "[data-index='1']"), "active");
            _addClass(p, "viewing-page-1");
            if (i.pagination == true) _addClass(document.querySelector(".onepage-pagination li a[data-index='1']"), "active")
        }
        _paginationHandler = function() {
            var e = this.dataset.index;
            moveTo(s, e)
        };
        if (i.pagination == true) {
            var d = document.querySelectorAll(".onepage-pagination li a");
            for (var e = 0; e < d.length; e++) {
                d[e].addEventListener("click", _paginationHandler)
            }
        }
        _mouseWheelHandler = function(e) {
            e.preventDefault();
            var t = e.wheelDelta || -e.detail;
            if (!_hasClass(p, "disabled-onepage-scroll")) _init_scroll(e, t)
        };
        document.addEventListener("mousewheel", _mouseWheelHandler);
        document.addEventListener("DOMMouseScroll", _mouseWheelHandler);
        document.addEventListener("MozMousePixelScroll", _mouseWheelHandler);
        if (i.responsiveFallback != false) {
            window.onresize = function() {
                _responsive()
            };
            _responsive()
        }
        _keydownHandler = function(e) {
            var t = e.target.tagName.toLowerCase();
            if (!_hasClass(p, "disabled-onepage-scroll")) {
                switch (e.which) {
                    case 38:
                        if (t != "input" && t != "textarea") moveUp(s);
                        break;
                    case 40:
                        if (t != "input" && t != "textarea") moveDown(s);
                        break;
                    default:
                        return
                }
            }
            return false
        };
        if (i.keyboard == true) {
            document.onkeydown = _keydownHandler
        }
        return false
    };
    _swipeEvents = function(e) {
        function r(e) {
            var r = e.touches;
            if (r && r.length) {
                t = r[0].pageX;
                n = r[0].pageY;
                document.addEventListener("touchmove", i)
            }
        }

        function i(e) {
            var r = e.touches;
            if (r && r.length) {
                e.preventDefault();
                var s = t - r[0].pageX;
                var o = n - r[0].pageY;
                if (s >= 50) {
                    var e = new Event("swipeLeft");
                    document.dispatchEvent(e)
                }
                if (s <= -50) {
                    var e = new Event("swipeRight");
                    document.dispatchEvent(e)
                }
                if (o >= 50) {
                    var e = new Event("swipeUp");
                    document.dispatchEvent(e)
                }
                if (o <= -50) {
                    var e = new Event("swipeDown");
                    document.dispatchEvent(e)
                }
                if (Math.abs(s) >= 50 || Math.abs(o) >= 50) {
                    document.removeEventListener("touchmove", i)
                }
            }
        }
        var t, n;
        document.addEventListener("touchstart", r)
    };
    _trim = function(e) {
        return e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    };
    _hasClass = function(e, t) {
        if (e.className) {
            return e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
        } else {
            return e.className = t
        }
    };
    _addClass = function(e, t) {
        if (!_hasClass(e, t)) e.className += " " + t;
        e.className = _trim(e.className)
    };
    _removeClass = function(e, t) {
        if (_hasClass(e, t)) {
            var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
            e.className = e.className.replace(n, " ")
        }
        e.className = _trim(e.className)
    };
    _whichTransitionEvent = function() {
        var e;
        var t = document.createElement("fakeelement");
        var n = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (e in n) {
            if (t.style[e] !== undefined) {
                return n[e]
            }
        }
    };
    _scrollTo = function(e, t, n) {
        if (n < 0) return;
        var r = t - e.scrollTop;
        var i = r / n * 10;
        setTimeout(function() {
            e.scrollTop = e.scrollTop + i;
            if (e.scrollTop == t) return;
            _scrollTo(e, t, n - 10)
        }, 10)
    };
    _transformPage = function(e, t, n, r, i) {
        function u() {
            if (typeof t.afterMove == "function") t.afterMove(r, i);
            e.removeEventListener(o, u)
        }
        if (typeof t.beforeMove == "function") t.beforeMove(r, i);
        var s = "-webkit-transform: translate3d(0, " + n + "%, 0); -webkit-transition: -webkit-transform " + t.animationTime + "ms " + t.easing + "; -moz-transform: translate3d(0, " + n + "%, 0); -moz-transition: -moz-transform " + t.animationTime + "ms " + t.easing + "; -ms-transform: translate3d(0, " + n + "%, 0); -ms-transition: -ms-transform " + t.animationTime + "ms " + t.easing + "; transform: translate3d(0, " + n + "%, 0); transition: transform " + t.animationTime + "ms " + t.easing + ";";
        e.style.cssText = s;
        var o = _whichTransitionEvent();
        e.addEventListener(o, u, false)
    };
    _responsive = function() {
        if (document.body.clientWidth < i.responsiveFallback) {
            _addClass(p, "disabled-onepage-scroll");
            document.removeEventListener("mousewheel", _mouseWheelHandler);
            document.removeEventListener("DOMMouseScroll", _mouseWheelHandler);
            document.removeEventListener("MozMousePixelScroll", _mouseWheelHandler);
            _swipeEvents(s);
            document.removeEventListener("swipeDown");
            document.removeEventListener("swipeUp")
        } else {
            if (_hasClass(p, "disabled-onepage-scroll")) {
                _removeClass(p, "disabled-onepage-scroll");
                _scrollTo(document.documentElement, 0, 2e3)
            }
            _swipeEvents(s);
            document.addEventListener("swipeDown", function(e) {
                if (!_hasClass(p, "disabled-onepage-scroll")) e.preventDefault();
                moveUp(s)
            });
            document.addEventListener("swipeUp", function(e) {
                if (!_hasClass(p, "disabled-onepage-scroll")) e.preventDefault();
                moveDown(s)
            });
            document.addEventListener("mousewheel", _mouseWheelHandler);
            document.addEventListener("DOMMouseScroll", _mouseWheelHandler)
            document.addEventListener("MozMousePixelScroll", _mouseWheelHandler)
        }
    };
    _init_scroll = function(e, t) {
        var n = t,
            r = (new Date).getTime();
        if (r - l < c + i.animationTime) {
            e.preventDefault();
            return
        }
        if (n < 0) {
            moveDown(s)
        } else {
            moveUp(s)
        }
        l = r
    };
    this.moveDown = function(e) {
        if (typeof e == "string") e = document.querySelector(e);
        var t = document.querySelector(i.sectionContainer + ".active").dataset.index,
            n = document.querySelector(i.sectionContainer + "[data-index='" + t + "']"),
            r = document.querySelector(i.sectionContainer + "[data-index='" + (parseInt(t) + 1) + "']");
        if (!r) {
            if (i.loop == true) {
                pos = 0;
                r = document.querySelector(i.sectionContainer + "[data-index='1']")
            } else {
                return
            }
        } else {
            pos = t * 100 * -1
        }
        var s = r.dataset.index;
        _removeClass(n, "active");
        _addClass(r, "active");
        if (i.pagination == true) {
            _removeClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + t + "']"), "active");
            _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + s + "']"), "active")
        }
        p.className = p.className.replace(/\bviewing-page-\d.*?\b/g, "");
        _addClass(p, "viewing-page-" + s);
        if (history.replaceState && i.updateURL == true) {
            var o = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (parseInt(t) + 1);
            history.pushState({}, document.title, o)
        }
        _transformPage(e, i, pos, s, r)
    };
    this.moveUp = function(e) {
        if (typeof e == "string") e = document.querySelector(e);
        var t = document.querySelector(i.sectionContainer + ".active").dataset.index,
            n = document.querySelector(i.sectionContainer + "[data-index='" + t + "']"),
            r = document.querySelector(i.sectionContainer + "[data-index='" + (parseInt(t) - 1) + "']");
        if (!r) {
            if (i.loop == true) {
                pos = (u - 1) * 100 * -1;
                r = document.querySelector(i.sectionContainer + "[data-index='" + u + "']")
            } else {
                return
            }
        } else {
            pos = (r.dataset.index - 1) * 100 * -1
        }
        var s = r.dataset.index;
        _removeClass(n, "active");
        _addClass(r, "active");
        if (i.pagination == true) {
            _removeClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + t + "']"), "active");
            _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + s + "']"), "active")
        }
        p.className = p.className.replace(/\bviewing-page-\d.*?\b/g, "");
        _addClass(p, "viewing-page-" + s);
        if (history.replaceState && i.updateURL == true) {
            var o = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (parseInt(t) - 1);
            history.pushState({}, document.title, o)
        }
        _transformPage(e, i, pos, s, r)
    };
    this.moveTo = function(e, t) {
        if (typeof e == "string") e = document.querySelector(e);
        var n = document.querySelector(i.sectionContainer + ".active"),
            r = document.querySelector(i.sectionContainer + "[data-index='" + t + "']");
        if (r) {
            var s = r.dataset.index;
            _removeClass(n, "active");
            _addClass(r, "active");
            _removeClass(document.querySelector(".onepage-pagination li a" + ".active"), "active");
            _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + t + "']"), "active");
            p.className = p.className.replace(/\bviewing-page-\d.*?\b/g, "");
            _addClass(p, "viewing-page-" + s);
            pos = (t - 1) * 100 * -1;
            if (history.replaceState && i.updateURL == true) {
                var o = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + (parseInt(t) - 1);
                history.pushState({}, document.title, o)
            }
            _transformPage(e, i, pos, t, r)
        }
    };
    this.init()
}
Object.extend = function(e) {
    if (e == null) return e;
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        if (n != null) {
            for (var r in n) {
                var i = n.__lookupGetter__(r),
                    s = n.__lookupSetter__(r);
                if (i || s) {
                    if (i) e.__defineGetter__(r, i);
                    if (s) e.__defineSetter__(r, s)
                } else {
                    e[r] = n[r]
                }
            }
        }
    }
    return e
}