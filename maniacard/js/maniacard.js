WebFontConfig = {
	google: {
		families: ["Lato:400,700,300,100,900:latin"]
	}
};
(function() {
	var a = document.createElement("script");
	a.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
	a.type = "text/javascript";
	a.async = "true";
	var b = document.getElementsByTagName("script")[0];
	b.parentNode.insertBefore(a, b)
})(); /*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(a, b) {
	function c(a) {
		var b = ob[a] = {};
		return $.each(a.split(bb), function(a, c) {
			b[c] = !0
		}), b
	}

	function d(a, c, d) {
		if (d === b && a.nodeType === 1) {
			var e = "data-" + c.replace(qb, "-$1").toLowerCase();
			d = a.getAttribute(e);
			if (typeof d == "string") {
				try {
					d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : +d + "" === d ? +d : pb.test(d) ? $.parseJSON(d) : d
				} catch (f) {}
				$.data(a, c, d)
			} else d = b
		}
		return d
	}

	function e(a) {
		var b;
		for (b in a) {
			if (b === "data" && $.isEmptyObject(a[b])) continue;
			if (b !== "toJSON") return !1
		}
		return !0
	}

	function f() {
		return !1
	}

	function g() {
		return !0
	}

	function h(a) {
		return !a || !a.parentNode || a.parentNode.nodeType === 11
	}

	function i(a, b) {
		do a = a[b]; while (a && a.nodeType !== 1);
		return a
	}

	function j(a, b, c) {
		b = b || 0;
		if ($.isFunction(b)) return $.grep(a, function(a, d) {
			var e = !!b.call(a, d, a);
			return e === c
		});
		if (b.nodeType) return $.grep(a, function(a, d) {
			return a === b === c
		});
		if (typeof b == "string") {
			var d = $.grep(a, function(a) {
				return a.nodeType === 1
			});
			if (Kb.test(b)) return $.filter(b, d, !c);
			b = $.filter(b, d)
		}
		return $.grep(a, function(a, d) {
			return $.inArray(a, b) >= 0 === c
		})
	}

	function k(a) {
		var b = Nb.split("|"),
			c = a.createDocumentFragment();
		if (c.createElement)
			while (b.length) c.createElement(b.pop());
		return c
	}

	function l(a, b) {
		return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
	}

	function m(a, b) {
		if (b.nodeType !== 1 || !$.hasData(a)) return;
		var c, d, e, f = $._data(a),
			g = $._data(b, f),
			h = f.events;
		if (h) {
			delete g.handle, g.events = {};
			for (c in h)
				for (d = 0, e = h[c].length; d < e; d++) $.event.add(b, c, h[c][d])
		}
		g.data && (g.data = $.extend({}, g.data))
	}

	function n(a, b) {
		var c;
		if (b.nodeType !== 1) return;
		b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? (b.parentNode && (b.outerHTML = a.outerHTML), $.support.html5Clone && a.innerHTML && !$.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : c === "input" && Xb.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text), b.removeAttribute($.expando)
	}

	function o(a) {
		return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
	}

	function p(a) {
		Xb.test(a.type) && (a.defaultChecked = a.checked)
	}

	function q(a, b) {
		if (b in a) return b;
		var c = b.charAt(0).toUpperCase() + b.slice(1),
			d = b,
			e = rc.length;
		while (e--) {
			b = rc[e] + c;
			if (b in a) return b
		}
		return d
	}

	function r(a, b) {
		return a = b || a, $.css(a, "display") === "none" || !$.contains(a.ownerDocument, a)
	}

	function s(a, b) {
		var c, d, e = [],
			f = 0,
			g = a.length;
		for (; f < g; f++) {
			c = a[f];
			if (!c.style) continue;
			e[f] = $._data(c, "olddisplay"), b ? (!e[f] && c.style.display === "none" && (c.style.display = ""), c.style.display === "" && r(c) && (e[f] = $._data(c, "olddisplay", w(c.nodeName)))) : (d = cc(c, "display"), !e[f] && d !== "none" && $._data(c, "olddisplay", d))
		}
		for (f = 0; f < g; f++) {
			c = a[f];
			if (!c.style) continue;
			if (!b || c.style.display === "none" || c.style.display === "") c.style.display = b ? e[f] || "" : "none"
		}
		return a
	}

	function t(a, b, c) {
		var d = kc.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function u(a, b, c, d) {
		var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
			f = 0;
		for (; e < 4; e += 2) c === "margin" && (f += $.css(a, c + qc[e], !0)), d ? (c === "content" && (f -= parseFloat(cc(a, "padding" + qc[e])) || 0), c !== "margin" && (f -= parseFloat(cc(a, "border" + qc[e] + "Width")) || 0)) : (f += parseFloat(cc(a, "padding" + qc[e])) || 0, c !== "padding" && (f += parseFloat(cc(a, "border" + qc[e] + "Width")) || 0));
		return f
	}

	function v(a, b, c) {
		var d = b === "width" ? a.offsetWidth : a.offsetHeight,
			e = !0,
			f = $.support.boxSizing && $.css(a, "boxSizing") === "border-box";
		if (d <= 0 || d == null) {
			d = cc(a, b);
			if (d < 0 || d == null) d = a.style[b];
			if (lc.test(d)) return d;
			e = f && ($.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
		}
		return d + u(a, b, c || (f ? "border" : "content"), e) + "px"
	}

	function w(a) {
		if (nc[a]) return nc[a];
		var b = $("<" + a + ">").appendTo(P.body),
			c = b.css("display");
		b.remove();
		if (c === "none" || c === "") {
			dc = P.body.appendChild(dc || $.extend(P.createElement("iframe"), {
				frameBorder: 0,
				width: 0,
				height: 0
			}));
			if (!ec || !dc.createElement) ec = (dc.contentWindow || dc.contentDocument).document, ec.write("<!doctype html><html><body>"), ec.close();
			b = ec.body.appendChild(ec.createElement(a)), c = cc(b, "display"), P.body.removeChild(dc)
		}
		return nc[a] = c, c
	}

	function x(a, b, c, d) {
		var e;
		if ($.isArray(b)) $.each(b, function(b, e) {
			c || uc.test(a) ? d(a, e) : x(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
		});
		else if (!c && $.type(b) === "object")
			for (e in b) x(a + "[" + e + "]", b[e], c, d);
		else d(a, b)
	}

	function y(a) {
		return function(b, c) {
			typeof b != "string" && (c = b, b = "*");
			var d, e, f, g = b.toLowerCase().split(bb),
				h = 0,
				i = g.length;
			if ($.isFunction(c))
				for (; h < i; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
		}
	}

	function z(a, c, d, e, f, g) {
		f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
		var h, i = a[f],
			j = 0,
			k = i ? i.length : 0,
			l = a === Kc;
		for (; j < k && (l || !h); j++) h = i[j](c, d, e), typeof h == "string" && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = z(a, c, d, e, h, g)));
		return (l || !h) && !g["*"] && (h = z(a, c, d, e, "*", g)), h
	}

	function A(a, c) {
		var d, e, f = $.ajaxSettings.flatOptions || {};
		for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
		e && $.extend(!0, a, e)
	}

	function B(a, c, d) {
		var e, f, g, h, i = a.contents,
			j = a.dataTypes,
			k = a.responseFields;
		for (f in k) f in d && (c[k[f]] = d[f]);
		while (j[0] === "*") j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
		if (e)
			for (f in i)
				if (i[f] && i[f].test(e)) {
					j.unshift(f);
					break
				}
		if (j[0] in d) g = j[0];
		else {
			for (f in d) {
				if (!j[0] || a.converters[f + " " + j[0]]) {
					g = f;
					break
				}
				h || (h = f)
			}
			g = g || h
		}
		if (g) return g !== j[0] && j.unshift(g), d[g]
	}

	function C(a, b) {
		var c, d, e, f, g = a.dataTypes.slice(),
			h = g[0],
			i = {},
			j = 0;
		a.dataFilter && (b = a.dataFilter(b, a.dataType));
		if (g[1])
			for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
		for (; e = g[++j];)
			if (e !== "*") {
				if (h !== "*" && h !== e) {
					c = i[h + " " + e] || i["* " + e];
					if (!c)
						for (d in i) {
							f = d.split(" ");
							if (f[1] === e) {
								c = i[h + " " + f[0]] || i["* " + f[0]];
								if (c) {
									c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
									break
								}
							}
						}
					if (c !== !0)
						if (c && a["throws"]) b = c(b);
						else try {
							b = c(b)
						} catch (k) {
							return {
								state: "parsererror",
								error: c ? k : "No conversion from " + h + " to " + e
							}
						}
				}
				h = e
			}
		return {
			state: "success",
			data: b
		}
	}

	function D() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}

	function E() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}

	function F() {
		return setTimeout(function() {
			Vc = b
		}, 0), Vc = $.now()
	}

	function G(a, b) {
		$.each(b, function(b, c) {
			var d = (_c[b] || []).concat(_c["*"]),
				e = 0,
				f = d.length;
			for (; e < f; e++)
				if (d[e].call(a, b, c)) return
		})
	}

	function H(a, b, c) {
		var d, e = 0,
			f = 0,
			g = $c.length,
			h = $.Deferred().always(function() {
				delete i.elem
			}),
			i = function() {
				var b = Vc || F(),
					c = Math.max(0, j.startTime + j.duration - b),
					d = c / j.duration || 0,
					e = 1 - d,
					f = 0,
					g = j.tweens.length;
				for (; f < g; f++) j.tweens[f].run(e);
				return h.notifyWith(a, [j, e, c]), e < 1 && g ? c : (h.resolveWith(a, [j]), !1)
			},
			j = h.promise({
				elem: a,
				props: $.extend({}, b),
				opts: $.extend(!0, {
					specialEasing: {}
				}, c),
				originalProperties: b,
				originalOptions: c,
				startTime: Vc || F(),
				duration: c.duration,
				tweens: [],
				createTween: function(b, c, d) {
					var e = $.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
					return j.tweens.push(e), e
				},
				stop: function(b) {
					var c = 0,
						d = b ? j.tweens.length : 0;
					for (; c < d; c++) j.tweens[c].run(1);
					return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
				}
			}),
			k = j.props;
		I(k, j.opts.specialEasing);
		for (; e < g; e++) {
			d = $c[e].call(j, a, k, j.opts);
			if (d) return d
		}
		return G(j, k), $.isFunction(j.opts.start) && j.opts.start.call(a, j), $.fx.timer($.extend(i, {
			anim: j,
			queue: j.opts.queue,
			elem: a
		})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	function I(a, b) {
		var c, d, e, f, g;
		for (c in a) {
			d = $.camelCase(c), e = b[d], f = a[c], $.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = $.cssHooks[d];
			if (g && "expand" in g) {
				f = g.expand(f), delete a[d];
				for (c in f) c in a || (a[c] = f[c], b[c] = e)
			} else b[d] = e
		}
	}

	function J(a, b, c) {
		var d, e, f, g, h, i, j, k, l, m = this,
			n = a.style,
			o = {},
			p = [],
			q = a.nodeType && r(a);
		c.queue || (k = $._queueHooks(a, "fx"), k.unqueued == null && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function() {
			k.unqueued || l()
		}), k.unqueued++, m.always(function() {
			m.always(function() {
				k.unqueued--, $.queue(a, "fx").length || k.empty.fire()
			})
		})), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], $.css(a, "display") === "inline" && $.css(a, "float") === "none" && (!$.support.inlineBlockNeedsLayout || w(a.nodeName) === "inline" ? n.display = "inline-block" : n.zoom = 1)), c.overflow && (n.overflow = "hidden", $.support.shrinkWrapBlocks || m.done(function() {
			n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
		}));
		for (d in b) {
			f = b[d];
			if (Xc.exec(f)) {
				delete b[d], i = i || f === "toggle";
				if (f === (q ? "hide" : "show")) continue;
				p.push(d)
			}
		}
		g = p.length;
		if (g) {
			h = $._data(a, "fxshow") || $._data(a, "fxshow", {}), "hidden" in h && (q = h.hidden), i && (h.hidden = !q), q ? $(a).show() : m.done(function() {
				$(a).hide()
			}), m.done(function() {
				var b;
				$.removeData(a, "fxshow", !0);
				for (b in o) $.style(a, b, o[b])
			});
			for (d = 0; d < g; d++) e = p[d], j = m.createTween(e, q ? h[e] : 0), o[e] = h[e] || $.style(a, e), e in h || (h[e] = j.start, q && (j.end = j.start, j.start = e === "width" || e === "height" ? 1 : 0))
		}
	}

	function K(a, b, c, d, e) {
		return new K.prototype.init(a, b, c, d, e)
	}

	function L(a, b) {
		var c, d = {
				height: a
			},
			e = 0;
		b = b ? 1 : 0;
		for (; e < 4; e += 2 - b) c = qc[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function M(a) {
		return $.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
	}
	var N, O, P = a.document,
		Q = a.location,
		R = a.navigator,
		S = a.jQuery,
		T = a.$,
		U = Array.prototype.push,
		V = Array.prototype.slice,
		W = Array.prototype.indexOf,
		X = Object.prototype.toString,
		Y = Object.prototype.hasOwnProperty,
		Z = String.prototype.trim,
		$ = function(a, b) {
			return new $.fn.init(a, b, N)
		},
		_ = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
		ab = /\S/,
		bb = /\s+/,
		cb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		db = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		eb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		fb = /^[\],:{}\s]*$/,
		gb = /(?:^|:|,)(?:\s*\[)+/g,
		hb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		ib = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
		jb = /^-ms-/,
		kb = /-([\da-z])/gi,
		lb = function(a, b) {
			return (b + "").toUpperCase()
		},
		mb = function() {
			P.addEventListener ? (P.removeEventListener("DOMContentLoaded", mb, !1), $.ready()) : P.readyState === "complete" && (P.detachEvent("onreadystatechange", mb), $.ready())
		},
		nb = {};
	$.fn = $.prototype = {
		constructor: $,
		init: function(a, c, d) {
			var e, f, g, h;
			if (!a) return this;
			if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
			if (typeof a == "string") {
				a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? e = [null, a, null] : e = db.exec(a);
				if (e && (e[1] || !c)) {
					if (e[1]) return c = c instanceof $ ? c[0] : c, h = c && c.nodeType ? c.ownerDocument || c : P, a = $.parseHTML(e[1], h, !0), eb.test(e[1]) && $.isPlainObject(c) && this.attr.call(a, c, !0), $.merge(this, a);
					f = P.getElementById(e[2]);
					if (f && f.parentNode) {
						if (f.id !== e[2]) return d.find(a);
						this.length = 1, this[0] = f
					}
					return this.context = P, this.selector = a, this
				}
				return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
			}
			return $.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), $.makeArray(a, this))
		},
		selector: "",
		jquery: "1.8.3",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return V.call(this)
		},
		get: function(a) {
			return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
		},
		pushStack: function(a, b, c) {
			var d = $.merge(this.constructor(), a);
			return d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
		},
		each: function(a, b) {
			return $.each(this, a, b)
		},
		ready: function(a) {
			return $.ready.promise().done(a), this
		},
		eq: function(a) {
			return a = +a, a === -1 ? this.slice(a) : this.slice(a, a + 1)
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		slice: function() {
			return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
		},
		map: function(a) {
			return this.pushStack($.map(this, function(b, c) {
				return a.call(b, c, b)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: U,
		sort: [].sort,
		splice: [].splice
	}, $.fn.init.prototype = $.fn, $.extend = $.fn.extend = function() {
		var a, c, d, e, f, g, h = arguments[0] || {},
			i = 1,
			j = arguments.length,
			k = !1;
		typeof h == "boolean" && (k = h, h = arguments[1] || {}, i = 2), typeof h != "object" && !$.isFunction(h) && (h = {}), j === i && (h = this, --i);
		for (; i < j; i++)
			if ((a = arguments[i]) != null)
				for (c in a) {
					d = h[c], e = a[c];
					if (h === e) continue;
					k && e && ($.isPlainObject(e) || (f = $.isArray(e))) ? (f ? (f = !1, g = d && $.isArray(d) ? d : []) : g = d && $.isPlainObject(d) ? d : {}, h[c] = $.extend(k, g, e)) : e !== b && (h[c] = e)
				}
			return h
	}, $.extend({
		noConflict: function(b) {
			return a.$ === $ && (a.$ = T), b && a.jQuery === $ && (a.jQuery = S), $
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(a) {
			a ? $.readyWait++ : $.ready(!0)
		},
		ready: function(a) {
			if (a === !0 ? --$.readyWait : $.isReady) return;
			if (!P.body) return setTimeout($.ready, 1);
			$.isReady = !0;
			if (a !== !0 && --$.readyWait > 0) return;
			O.resolveWith(P, [$]), $.fn.trigger && $(P).trigger("ready").off("ready")
		},
		isFunction: function(a) {
			return $.type(a) === "function"
		},
		isArray: Array.isArray || function(a) {
			return $.type(a) === "array"
		},
		isWindow: function(a) {
			return a != null && a == a.window
		},
		isNumeric: function(a) {
			return !isNaN(parseFloat(a)) && isFinite(a)
		},
		type: function(a) {
			return a == null ? String(a) : nb[X.call(a)] || "object"
		},
		isPlainObject: function(a) {
			if (!a || $.type(a) !== "object" || a.nodeType || $.isWindow(a)) return !1;
			try {
				if (a.constructor && !Y.call(a, "constructor") && !Y.call(a.constructor.prototype, "isPrototypeOf")) return !1
			} catch (c) {
				return !1
			}
			var d;
			for (d in a);
			return d === b || Y.call(a, d)
		},
		isEmptyObject: function(a) {
			var b;
			for (b in a) return !1;
			return !0
		},
		error: function(a) {
			throw new Error(a)
		},
		parseHTML: function(a, b, c) {
			var d;
			return !a || typeof a != "string" ? null : (typeof b == "boolean" && (c = b, b = 0), b = b || P, (d = eb.exec(a)) ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, c ? null : []), $.merge([], (d.cacheable ? $.clone(d.fragment) : d.fragment).childNodes)))
		},
		parseJSON: function(b) {
			if (!b || typeof b != "string") return null;
			b = $.trim(b);
			if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
			if (fb.test(b.replace(hb, "@").replace(ib, "]").replace(gb, ""))) return new Function("return " + b)();
			$.error("Invalid JSON: " + b)
		},
		parseXML: function(c) {
			var d, e;
			if (!c || typeof c != "string") return null;
			try {
				a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
			} catch (f) {
				d = b
			}
			return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && $.error("Invalid XML: " + c), d
		},
		noop: function() {},
		globalEval: function(b) {
			b && ab.test(b) && (a.execScript || function(b) {
				a.eval.call(a, b)
			})(b)
		},
		camelCase: function(a) {
			return a.replace(jb, "ms-").replace(kb, lb)
		},
		nodeName: function(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
		},
		each: function(a, c, d) {
			var e, f = 0,
				g = a.length,
				h = g === b || $.isFunction(a);
			if (d) {
				if (h) {
					for (e in a)
						if (c.apply(a[e], d) === !1) break
				} else
					for (; f < g;)
						if (c.apply(a[f++], d) === !1) break
			} else if (h) {
				for (e in a)
					if (c.call(a[e], e, a[e]) === !1) break
			} else
				for (; f < g;)
					if (c.call(a[f], f, a[f++]) === !1) break; return a
		},
		trim: Z && !Z.call("﻿ ") ? function(a) {
			return a == null ? "" : Z.call(a)
		} : function(a) {
			return a == null ? "" : (a + "").replace(cb, "")
		},
		makeArray: function(a, b) {
			var c, d = b || [];
			return a != null && (c = $.type(a), a.length == null || c === "string" || c === "function" || c === "regexp" || $.isWindow(a) ? U.call(d, a) : $.merge(d, a)), d
		},
		inArray: function(a, b, c) {
			var d;
			if (b) {
				if (W) return W.call(b, a, c);
				d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
				for (; c < d; c++)
					if (c in b && b[c] === a) return c
			}
			return -1
		},
		merge: function(a, c) {
			var d = c.length,
				e = a.length,
				f = 0;
			if (typeof d == "number")
				for (; f < d; f++) a[e++] = c[f];
			else
				while (c[f] !== b) a[e++] = c[f++];
			return a.length = e, a
		},
		grep: function(a, b, c) {
			var d, e = [],
				f = 0,
				g = a.length;
			c = !!c;
			for (; f < g; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
			return e
		},
		map: function(a, c, d) {
			var e, f, g = [],
				h = 0,
				i = a.length,
				j = a instanceof $ || i !== b && typeof i == "number" && (i > 0 && a[0] && a[i - 1] || i === 0 || $.isArray(a));
			if (j)
				for (; h < i; h++) e = c(a[h], h, d), e != null && (g[g.length] = e);
			else
				for (f in a) e = c(a[f], f, d), e != null && (g[g.length] = e);
			return g.concat.apply([], g)
		},
		guid: 1,
		proxy: function(a, c) {
			var d, e, f;
			return typeof c == "string" && (d = a[c], c = a, a = d), $.isFunction(a) ? (e = V.call(arguments, 2), f = function() {
				return a.apply(c, e.concat(V.call(arguments)))
			}, f.guid = a.guid = a.guid || $.guid++, f) : b
		},
		access: function(a, c, d, e, f, g, h) {
			var i, j = d == null,
				k = 0,
				l = a.length;
			if (d && typeof d == "object") {
				for (k in d) $.access(a, c, k, d[k], 1, g, e);
				f = 1
			} else if (e !== b) {
				i = h === b && $.isFunction(e), j && (i ? (i = c, c = function(a, b, c) {
					return i.call($(a), c)
				}) : (c.call(a, e), c = null));
				if (c)
					for (; k < l; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
				f = 1
			}
			return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
		},
		now: function() {
			return (new Date).getTime()
		}
	}), $.ready.promise = function(b) {
		if (!O) {
			O = $.Deferred();
			if (P.readyState === "complete") setTimeout($.ready, 1);
			else if (P.addEventListener) P.addEventListener("DOMContentLoaded", mb, !1), a.addEventListener("load", $.ready, !1);
			else {
				P.attachEvent("onreadystatechange", mb), a.attachEvent("onload", $.ready);
				var c = !1;
				try {
					c = a.frameElement == null && P.documentElement
				} catch (d) {}
				c && c.doScroll && function e() {
					if (!$.isReady) {
						try {
							c.doScroll("left")
						} catch (a) {
							return setTimeout(e, 50)
						}
						$.ready()
					}
				}()
			}
		}
		return O.promise(b)
	}, $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
		nb["[object " + b + "]"] = b.toLowerCase()
	}), N = $(P);
	var ob = {};
	$.Callbacks = function(a) {
		a = typeof a == "string" ? ob[a] || c(a) : $.extend({}, a);
		var d, e, f, g, h, i, j = [],
			k = !a.once && [],
			l = function(b) {
				d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0;
				for (; j && i < h; i++)
					if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
						d = !1;
						break
					}
				f = !1, j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
			},
			m = {
				add: function() {
					if (j) {
						var b = j.length;
						(function c(b) {
							$.each(b, function(b, d) {
								var e = $.type(d);
								e === "function" ? (!a.unique || !m.has(d)) && j.push(d) : d && d.length && e !== "string" && c(d)
							})
						})(arguments), f ? h = j.length : d && (g = b, l(d))
					}
					return this
				},
				remove: function() {
					return j && $.each(arguments, function(a, b) {
						var c;
						while ((c = $.inArray(b, j, c)) > -1) j.splice(c, 1), f && (c <= h && h--, c <= i && i--)
					}), this
				},
				has: function(a) {
					return $.inArray(a, j) > -1
				},
				empty: function() {
					return j = [], this
				},
				disable: function() {
					return j = k = d = b, this
				},
				disabled: function() {
					return !j
				},
				lock: function() {
					return k = b, d || m.disable(), this
				},
				locked: function() {
					return !k
				},
				fireWith: function(a, b) {
					return b = b || [], b = [a, b.slice ? b.slice() : b], j && (!e || k) && (f ? k.push(b) : l(b)), this
				},
				fire: function() {
					return m.fireWith(this, arguments), this
				},
				fired: function() {
					return !!e
				}
			};
		return m
	}, $.extend({
		Deferred: function(a) {
			var b = [["resolve", "done", $.Callbacks("once memory"), "resolved"], ["reject", "fail", $.Callbacks("once memory"), "rejected"], ["notify", "progress", $.Callbacks("memory")]],
				c = "pending",
				d = {
					state: function() {
						return c
					},
					always: function() {
						return e.done(arguments).fail(arguments), this
					},
					then: function() {
						var a = arguments;
						return $.Deferred(function(c) {
							$.each(b, function(b, d) {
								var f = d[0],
									g = a[b];
								e[d[1]]($.isFunction(g) ? function() {
									var a = g.apply(this, arguments);
									a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
								} : c[f])
							}), a = null
						}).promise()
					},
					promise: function(a) {
						return a != null ? $.extend(a, d) : d
					}
				},
				e = {};
			return d.pipe = d.then, $.each(b, function(a, f) {
				var g = f[2],
					h = f[3];
				d[f[1]] = g.add, h && g.add(function() {
					c = h
				}, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		},
		when: function(a) {
			var b = 0,
				c = V.call(arguments),
				d = c.length,
				e = d !== 1 || a && $.isFunction(a.promise) ? d : 0,
				f = e === 1 ? a : $.Deferred(),
				g = function(a, b, c) {
					return function(d) {
						b[a] = this, c[a] = arguments.length > 1 ? V.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
					}
				},
				h, i, j;
			if (d > 1) {
				h = new Array(d), i = new Array(d), j = new Array(d);
				for (; b < d; b++) c[b] && $.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
			}
			return e || f.resolveWith(j, c), f.promise()
		}
	}), $.support = function() {
		var b, c, d, e, f, g, h, i, j, k, l, m = P.createElement("div");
		m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0];
		if (!c || !d || !c.length) return {};
		e = P.createElement("select"), f = e.appendChild(P.createElement("option")), g = m.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = {
			leadingWhitespace: m.firstChild.nodeType === 3,
			tbody: !m.getElementsByTagName("tbody").length,
			htmlSerialize: !!m.getElementsByTagName("link").length,
			style: /top/.test(d.getAttribute("style")),
			hrefNormalized: d.getAttribute("href") === "/a",
			opacity: /^0.5/.test(d.style.opacity),
			cssFloat: !!d.style.cssFloat,
			checkOn: g.value === "on",
			optSelected: f.selected,
			getSetAttribute: m.className !== "t",
			enctype: !!P.createElement("form").enctype,
			html5Clone: P.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
			boxModel: P.compatMode === "CSS1Compat",
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		}, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
		try {
			delete m.test
		} catch (n) {
			b.deleteExpando = !1
		}!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function() {
			b.noCloneEvent = !1
		}), m.cloneNode(!0).fireEvent("onclick"), m.detachEvent("onclick", l)), g = P.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = g.value === "t", g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = P.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m);
		if (m.attachEvent)
			for (j in {
					submit: !0,
					change: !0,
					focusin: !0
				}) i = "on" + j, k = i in m, k || (m.setAttribute(i, "return;"), k = typeof m[i] == "function"), b[j + "Bubbles"] = k;
		return $(function() {
			var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
				h = P.getElementsByTagName("body")[0];
			if (!h) return;
			c = P.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", h.insertBefore(c, h.firstChild), d = P.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = e[0].offsetHeight === 0, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = k && e[0].offsetHeight === 0, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = d.offsetWidth === 4, b.doesNotIncludeMarginInBodyOffset = h.offsetTop !== 1, a.getComputedStyle && (b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%", b.boxSizingReliable = (a.getComputedStyle(d, null) || {
				width: "4px"
			}).width === "4px", f = P.createElement("div"), f.style.cssText = d.style.cssText = g, f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)), typeof d.style.zoom != "undefined" && (d.innerHTML = "", d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = d.offsetWidth === 3, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = d.offsetWidth !== 3, c.style.zoom = 1), h.removeChild(c), c = d = e = f = null
		}), h.removeChild(m), c = d = e = f = g = h = m = null, b
	}();
	var pb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		qb = /([A-Z])/g;
	$.extend({
		cache: {},
		deletedIds: [],
		uuid: 0,
		expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a) {
			return a = a.nodeType ? $.cache[a[$.expando]] : a[$.expando], !!a && !e(a)
		},
		data: function(a, c, d, e) {
			if (!$.acceptData(a)) return;
			var f, g, h = $.expando,
				i = typeof c == "string",
				j = a.nodeType,
				k = j ? $.cache : a,
				l = j ? a[h] : a[h] && h;
			if ((!l || !k[l] || !e && !k[l].data) && i && d === b) return;
			l || (j ? a[h] = l = $.deletedIds.pop() || $.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = $.noop));
			if (typeof c == "object" || typeof c == "function") e ? k[l] = $.extend(k[l], c) : k[l].data = $.extend(k[l].data, c);
			return f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[$.camelCase(c)] = d), i ? (g = f[c], g == null && (g = f[$.camelCase(c)])) : g = f, g
		},
		removeData: function(a, b, c) {
			if (!$.acceptData(a)) return;
			var d, f, g, h = a.nodeType,
				i = h ? $.cache : a,
				j = h ? a[$.expando] : $.expando;
			if (!i[j]) return;
			if (b) {
				d = c ? i[j] : i[j].data;
				if (d) {
					$.isArray(b) || (b in d ? b = [b] : (b = $.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
					for (f = 0, g = b.length; f < g; f++) delete d[b[f]];
					if (!(c ? e : $.isEmptyObject)(d)) return
				}
			}
			if (!c) {
				delete i[j].data;
				if (!e(i[j])) return
			}
			h ? $.cleanData([a], !0) : $.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null
		},
		_data: function(a, b, c) {
			return $.data(a, b, c, !0)
		},
		acceptData: function(a) {
			var b = a.nodeName && $.noData[a.nodeName.toLowerCase()];
			return !b || b !== !0 && a.getAttribute("classid") === b
		}
	}), $.fn.extend({
		data: function(a, c) {
			var e, f, g, h, i, j = this[0],
				k = 0,
				l = null;
			if (a === b) {
				if (this.length) {
					l = $.data(j);
					if (j.nodeType === 1 && !$._data(j, "parsedAttrs")) {
						g = j.attributes;
						for (i = g.length; k < i; k++) h = g[k].name, h.indexOf("data-") || (h = $.camelCase(h.substring(5)), d(j, h, l[h]));
						$._data(j, "parsedAttrs", !0)
					}
				}
				return l
			}
			return typeof a == "object" ? this.each(function() {
				$.data(this, a)
			}) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", $.access(this, function(c) {
				if (c === b) return l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = $.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l;
				e[1] = c, this.each(function() {
					var b = $(this);
					b.triggerHandler("setData" + f, e), $.data(this, a, c), b.triggerHandler("changeData" + f, e)
				})
			}, null, c, arguments.length > 1, null, !1))
		},
		removeData: function(a) {
			return this.each(function() {
				$.removeData(this, a)
			})
		}
	}), $.extend({
		queue: function(a, b, c) {
			var d;
			if (a) return b = (b || "fx") + "queue", d = $._data(a, b), c && (!d || $.isArray(c) ? d = $._data(a, b, $.makeArray(c)) : d.push(c)), d || []
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = $.queue(a, b),
				d = c.length,
				e = c.shift(),
				f = $._queueHooks(a, b),
				g = function() {
					$.dequeue(a, b)
				};
			e === "inprogress" && (e = c.shift(), d--), e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		},
		_queueHooks: function(a, b) {
			var c = b + "queueHooks";
			return $._data(a, c) || $._data(a, c, {
				empty: $.Callbacks("once memory").add(function() {
					$.removeData(a, b + "queue", !0), $.removeData(a, c, !0)
				})
			})
		}
	}), $.fn.extend({
		queue: function(a, c) {
			var d = 2;
			return typeof a != "string" && (c = a, a = "fx", d--), arguments.length < d ? $.queue(this[0], a) : c === b ? this : this.each(function() {
				var b = $.queue(this, a, c);
				$._queueHooks(this, a), a === "fx" && b[0] !== "inprogress" && $.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				$.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			return a = $.fx ? $.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
				var d = setTimeout(b, a);
				c.stop = function() {
					clearTimeout(d)
				}
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, c) {
			var d, e = 1,
				f = $.Deferred(),
				g = this,
				h = this.length,
				i = function() {
					--e || f.resolveWith(g, [g])
				};
			typeof a != "string" && (c = a, a = b), a = a || "fx";
			while (h--) d = $._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
			return i(), f.promise(c)
		}
	});
	var rb, sb, tb, ub = /[\t\r\n]/g,
		vb = /\r/g,
		wb = /^(?:button|input)$/i,
		xb = /^(?:button|input|object|select|textarea)$/i,
		yb = /^a(?:rea|)$/i,
		zb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		Ab = $.support.getSetAttribute;
	$.fn.extend({
		attr: function(a, b) {
			return $.access(this, $.attr, a, b, arguments.length > 1)
		},
		removeAttr: function(a) {
			return this.each(function() {
				$.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return $.access(this, $.prop, a, b, arguments.length > 1)
		},
		removeProp: function(a) {
			return a = $.propFix[a] || a, this.each(function() {
				try {
					this[a] = b, delete this[a]
				} catch (c) {}
			})
		},
		addClass: function(a) {
			var b, c, d, e, f, g, h;
			if ($.isFunction(a)) return this.each(function(b) {
				$(this).addClass(a.call(this, b, this.className))
			});
			if (a && typeof a == "string") {
				b = a.split(bb);
				for (c = 0, d = this.length; c < d; c++) {
					e = this[c];
					if (e.nodeType === 1)
						if (!e.className && b.length === 1) e.className = a;
						else {
							f = " " + e.className + " ";
							for (g = 0, h = b.length; g < h; g++) f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
							e.className = $.trim(f)
						}
				}
			}
			return this
		},
		removeClass: function(a) {
			var c, d, e, f, g, h, i;
			if ($.isFunction(a)) return this.each(function(b) {
				$(this).removeClass(a.call(this, b, this.className))
			});
			if (a && typeof a == "string" || a === b) {
				c = (a || "").split(bb);
				for (h = 0, i = this.length; h < i; h++) {
					e = this[h];
					if (e.nodeType === 1 && e.className) {
						d = (" " + e.className + " ").replace(ub, " ");
						for (f = 0, g = c.length; f < g; f++)
							while (d.indexOf(" " + c[f] + " ") >= 0) d = d.replace(" " + c[f] + " ", " ");
						e.className = a ? $.trim(d) : ""
					}
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
				d = typeof b == "boolean";
			return $.isFunction(a) ? this.each(function(c) {
				$(this).toggleClass(a.call(this, c, this.className, b), b)
			}) : this.each(function() {
				if (c === "string") {
					var e, f = 0,
						g = $(this),
						h = b,
						i = a.split(bb);
					while (e = i[f++]) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
				} else if (c === "undefined" || c === "boolean") this.className && $._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : $._data(this, "__className__") || ""
			})
		},
		hasClass: function(a) {
			var b = " " + a + " ",
				c = 0,
				d = this.length;
			for (; c < d; c++)
				if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
			return !1
		},
		val: function(a) {
			var c, d, e, f = this[0];
			if (!arguments.length) {
				if (f) return c = $.valHooks[f.type] || $.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, typeof d == "string" ? d.replace(vb, "") : d == null ? "" : d);
				return
			}
			return e = $.isFunction(a), this.each(function(d) {
				var f, g = $(this);
				if (this.nodeType !== 1) return;
				e ? f = a.call(this, d, g.val()) : f = a, f == null ? f = "" : typeof f == "number" ? f += "" : $.isArray(f) && (f = $.map(f, function(a) {
					return a == null ? "" : a + ""
				})), c = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()];
				if (!c || !("set" in c) || c.set(this, f, "value") === b) this.value = f
			})
		}
	}), $.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select: {
				get: function(a) {
					var b, c, d = a.options,
						e = a.selectedIndex,
						f = a.type === "select-one" || e < 0,
						g = f ? null : [],
						h = f ? e + 1 : d.length,
						i = e < 0 ? h : f ? e : 0;
					for (; i < h; i++) {
						c = d[i];
						if ((c.selected || i === e) && ($.support.optDisabled ? !c.disabled : c.getAttribute("disabled") === null) && (!c.parentNode.disabled || !$.nodeName(c.parentNode, "optgroup"))) {
							b = $(c).val();
							if (f) return b;
							g.push(b)
						}
					}
					return g
				},
				set: function(a, b) {
					var c = $.makeArray(b);
					return $(a).find("option").each(function() {
						this.selected = $.inArray($(this).val(), c) >= 0
					}), c.length || (a.selectedIndex = -1), c
				}
			}
		},
		attrFn: {},
		attr: function(a, c, d, e) {
			var f, g, h, i = a.nodeType;
			if (!a || i === 3 || i === 8 || i === 2) return;
			if (e && $.isFunction($.fn[c])) return $(a)[c](d);
			if (typeof a.getAttribute == "undefined") return $.prop(a, c, d);
			h = i !== 1 || !$.isXMLDoc(a), h && (c = c.toLowerCase(), g = $.attrHooks[c] || (zb.test(c) ? sb : rb));
			if (d !== b) {
				if (d === null) {
					$.removeAttr(a, c);
					return
				}
				return g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d)
			}
			return g && "get" in g && h && (f = g.get(a, c)) !== null ? f : (f = a.getAttribute(c), f === null ? b : f)
		},
		removeAttr: function(a, b) {
			var c, d, e, f, g = 0;
			if (b && a.nodeType === 1) {
				d = b.split(bb);
				for (; g < d.length; g++) e = d[g], e && (c = $.propFix[e] || e, f = zb.test(e), f || $.attr(a, e, ""), a.removeAttribute(Ab ? e : c), f && c in a && (a[c] = !1))
			}
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (wb.test(a.nodeName) && a.parentNode) $.error("type property can't be changed");
					else if (!$.support.radioValue && b === "radio" && $.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			},
			value: {
				get: function(a, b) {
					return rb && $.nodeName(a, "button") ? rb.get(a, b) : b in a ? a.value : null
				},
				set: function(a, b, c) {
					if (rb && $.nodeName(a, "button")) return rb.set(a, b, c);
					a.value = b
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(a, c, d) {
			var e, f, g, h = a.nodeType;
			if (!a || h === 3 || h === 8 || h === 2) return;
			return g = h !== 1 || !$.isXMLDoc(a), g && (c = $.propFix[c] || c, f = $.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && (e = f.get(a, c)) !== null ? e : a[c]
		},
		propHooks: {
			tabIndex: {
				get: function(a) {
					var c = a.getAttributeNode("tabindex");
					return c && c.specified ? parseInt(c.value, 10) : xb.test(a.nodeName) || yb.test(a.nodeName) && a.href ? 0 : b
				}
			}
		}
	}), sb = {
		get: function(a, c) {
			var d, e = $.prop(a, c);
			return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
		},
		set: function(a, b, c) {
			var d;
			return b === !1 ? $.removeAttr(a, c) : (d = $.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
		}
	}, Ab || (tb = {
		name: !0,
		id: !0,
		coords: !0
	}, rb = $.valHooks.button = {
		get: function(a, c) {
			var d;
			return d = a.getAttributeNode(c), d && (tb[c] ? d.value !== "" : d.specified) ? d.value : b
		},
		set: function(a, b, c) {
			var d = a.getAttributeNode(c);
			return d || (d = P.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
		}
	}, $.each(["width", "height"], function(a, b) {
		$.attrHooks[b] = $.extend($.attrHooks[b], {
			set: function(a, c) {
				if (c === "") return a.setAttribute(b, "auto"), c
			}
		})
	}), $.attrHooks.contenteditable = {
		get: rb.get,
		set: function(a, b, c) {
			b === "" && (b = "false"), rb.set(a, b, c)
		}
	}), $.support.hrefNormalized || $.each(["href", "src", "width", "height"], function(a, c) {
		$.attrHooks[c] = $.extend($.attrHooks[c], {
			get: function(a) {
				var d = a.getAttribute(c, 2);
				return d === null ? b : d
			}
		})
	}), $.support.style || ($.attrHooks.style = {
		get: function(a) {
			return a.style.cssText.toLowerCase() || b
		},
		set: function(a, b) {
			return a.style.cssText = b + ""
		}
	}), $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {
		get: function(a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	})), $.support.enctype || ($.propFix.enctype = "encoding"), $.support.checkOn || $.each(["radio", "checkbox"], function() {
		$.valHooks[this] = {
			get: function(a) {
				return a.getAttribute("value") === null ? "on" : a.value
			}
		}
	}), $.each(["radio", "checkbox"], function() {
		$.valHooks[this] = $.extend($.valHooks[this], {
			set: function(a, b) {
				if ($.isArray(b)) return a.checked = $.inArray($(a).val(), b) >= 0
			}
		})
	});
	var Bb = /^(?:textarea|input|select)$/i,
		Cb = /^([^\.]*|)(?:\.(.+)|)$/,
		Db = /(?:^|\s)hover(\.\S+|)\b/,
		Eb = /^key/,
		Fb = /^(?:mouse|contextmenu)|click/,
		Gb = /^(?:focusinfocus|focusoutblur)$/,
		Hb = function(a) {
			return $.event.special.hover ? a : a.replace(Db, "mouseenter$1 mouseleave$1")
		};
	$.event = {
			add: function(a, c, d, e, f) {
				var g, h, i, j, k, l, m, n, o, p, q;
				if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = $._data(a))) return;
				d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = $.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
					return typeof $ == "undefined" || !!a && $.event.triggered === a.type ? b : $.event.dispatch.apply(h.elem, arguments)
				}, h.elem = a), c = $.trim(Hb(c)).split(" ");
				for (j = 0; j < c.length; j++) {
					k = Cb.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = $.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = $.event.special[l] || {}, n = $.extend({
						type: l,
						origType: k[1],
						data: e,
						handler: d,
						guid: d.guid,
						selector: f,
						needsContext: f && $.expr.match.needsContext.test(f),
						namespace: m.join(".")
					}, o), p = i[l];
					if (!p) {
						p = i[l] = [], p.delegateCount = 0;
						if (!q.setup || q.setup.call(a, e, m, h) === !1) a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h)
					}
					q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), $.event.global[l] = !0
				}
				a = null
			},
			global: {},
			remove: function(a, b, c, d, e) {
				var f, g, h, i, j, k, l, m, n, o, p, q = $.hasData(a) && $._data(a);
				if (!q || !(m = q.events)) return;
				b = $.trim(Hb(b || "")).split(" ");
				for (f = 0; f < b.length; f++) {
					g = Cb.exec(b[f]) || [], h = i = g[1], j = g[2];
					if (!h) {
						for (h in m) $.event.remove(a, h + b[f], c, d, !0);
						continue
					}
					n = $.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
					for (l = 0; l < o.length; l++) p = o[l], (e || i === p.origType) && (!c || c.guid === p.guid) && (!j || j.test(p.namespace)) && (!d || d === p.selector || d === "**" && p.selector) && (o.splice(l--, 1), p.selector && o.delegateCount--, n.remove && n.remove.call(a, p));
					o.length === 0 && k !== o.length && ((!n.teardown || n.teardown.call(a, j, q.handle) === !1) && $.removeEvent(a, h, q.handle), delete m[h])
				}
				$.isEmptyObject(m) && (delete q.handle, $.removeData(a, "events", !0))
			},
			customEvent: {
				getData: !0,
				setData: !0,
				changeData: !0
			},
			trigger: function(c, d, e, f) {
				if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
					var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
						r = [];
					if (Gb.test(q + $.event.triggered)) return;
					q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort());
					if ((!e || $.event.customEvent[q]) && !$.event.global[q]) return;
					c = typeof c == "object" ? c[$.expando] ? c : new $.Event(q, c) : new $.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "";
					if (!e) {
						g = $.cache;
						for (i in g) g[i].events && g[i].events[q] && $.event.trigger(c, d, g[i].handle.elem, !0);
						return
					}
					c.result = b, c.target || (c.target = e), d = d != null ? $.makeArray(d) : [], d.unshift(c), m = $.event.special[q] || {};
					if (m.trigger && m.trigger.apply(e, d) === !1) return;
					o = [[e, m.bindType || q]];
					if (!f && !m.noBubble && !$.isWindow(e)) {
						p = m.delegateType || q, j = Gb.test(p + q) ? e : e.parentNode;
						for (k = e; j; j = j.parentNode) o.push([j, p]), k = j;
						k === (e.ownerDocument || P) && o.push([k.defaultView || k.parentWindow || a, p])
					}
					for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0], c.type = o[i][1], n = ($._data(j, "events") || {})[c.type] && $._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && $.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
					return c.type = q, !f && !c.isDefaultPrevented() && (!m._default || m._default.apply(e.ownerDocument, d) === !1) && (q !== "click" || !$.nodeName(e, "a")) && $.acceptData(e) && l && e[q] && (q !== "focus" && q !== "blur" || c.target.offsetWidth !== 0) && !$.isWindow(e) && (k = e[l], k && (e[l] = null), $.event.triggered = q, e[q](), $.event.triggered = b, k && (e[l] = k)), c.result
				}
				return
			},
			dispatch: function(c) {
				c = $.event.fix(c || a.event);
				var d, e, f, g, h, i, j, k, l, m, n = ($._data(this, "events") || {})[c.type] || [],
					o = n.delegateCount,
					p = V.call(arguments),
					q = !c.exclusive && !c.namespace,
					r = $.event.special[c.type] || {},
					s = [];
				p[0] = c, c.delegateTarget = this;
				if (r.preDispatch && r.preDispatch.call(this, c) === !1) return;
				if (o && (!c.button || c.type !== "click"))
					for (f = c.target; f != this; f = f.parentNode || this)
						if (f.disabled !== !0 || c.type !== "click") {
							h = {}, j = [];
							for (d = 0; d < o; d++) k = n[d], l = k.selector, h[l] === b && (h[l] = k.needsContext ? $(l, this).index(f) >= 0 : $.find(l, this, null, [f]).length), h[l] && j.push(k);
							j.length && s.push({
								elem: f,
								matches: j
							})
						}
				n.length > o && s.push({
					elem: this,
					matches: n.slice(o)
				});
				for (d = 0; d < s.length && !c.isPropagationStopped(); d++) {
					i = s[d], c.currentTarget = i.elem;
					for (e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) {
						k = i.matches[e];
						if (q || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) c.data = k.data, c.handleObj = k, g = (($.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, p), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation()))
					}
				}
				return r.postDispatch && r.postDispatch.call(this, c), c.result
			},
			props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(a, b) {
					return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(a, c) {
					var d, e, f, g = c.button,
						h = c.fromElement;
					return a.pageX == null && c.clientX != null && (d = a.target.ownerDocument || P, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0), a
				}
			},
			fix: function(a) {
				if (a[$.expando]) return a;
				var b, c, d = a,
					e = $.event.fixHooks[a.type] || {},
					f = e.props ? this.props.concat(e.props) : this.props;
				a = $.Event(d);
				for (b = f.length; b;) c = f[--b], a[c] = d[c];
				return a.target || (a.target = d.srcElement || P), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					delegateType: "focusin"
				},
				blur: {
					delegateType: "focusout"
				},
				beforeunload: {
					setup: function(a, b, c) {
						$.isWindow(this) && (this.onbeforeunload = c)
					},
					teardown: function(a, b) {
						this.onbeforeunload === b && (this.onbeforeunload = null)
					}
				}
			},
			simulate: function(a, b, c, d) {
				var e = $.extend(new $.Event, c, {
					type: a,
					isSimulated: !0,
					originalEvent: {}
				});
				d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
			}
		}, $.event.handle = $.event.dispatch, $.removeEvent = P.removeEventListener ? function(a, b, c) {
			a.removeEventListener && a.removeEventListener(b, c, !1)
		} : function(a, b, c) {
			var d = "on" + b;
			a.detachEvent && (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c))
		}, $.Event = function(a, b) {
			if (!(this instanceof $.Event)) return new $.Event(a, b);
			a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a, b && $.extend(this, b), this.timeStamp = a && a.timeStamp || $.now(), this[$.expando] = !0
		}, $.Event.prototype = {
			preventDefault: function() {
				this.isDefaultPrevented = g;
				var a = this.originalEvent;
				if (!a) return;
				a.preventDefault ? a.preventDefault() : a.returnValue = !1
			},
			stopPropagation: function() {
				this.isPropagationStopped = g;
				var a = this.originalEvent;
				if (!a) return;
				a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0
			},
			stopImmediatePropagation: function() {
				this.isImmediatePropagationStopped = g, this.stopPropagation()
			},
			isDefaultPrevented: f,
			isPropagationStopped: f,
			isImmediatePropagationStopped: f
		}, $.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		}, function(a, b) {
			$.event.special[a] = {
				delegateType: b,
				bindType: b,
				handle: function(a) {
					var c, d = this,
						e = a.relatedTarget,
						f = a.handleObj,
						g = f.selector;
					if (!e || e !== d && !$.contains(d, e)) a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b;
					return c
				}
			}
		}), $.support.submitBubbles || ($.event.special.submit = {
			setup: function() {
				if ($.nodeName(this, "form")) return !1;
				$.event.add(this, "click._submit keypress._submit", function(a) {
					var c = a.target,
						d = $.nodeName(c, "input") || $.nodeName(c, "button") ? c.form : b;
					d && !$._data(d, "_submit_attached") && ($.event.add(d, "submit._submit", function(a) {
						a._submit_bubble = !0
					}), $._data(d, "_submit_attached", !0))
				})
			},
			postDispatch: function(a) {
				a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && $.event.simulate("submit", this.parentNode, a, !0))
			},
			teardown: function() {
				if ($.nodeName(this, "form")) return !1;
				$.event.remove(this, "._submit")
			}
		}), $.support.changeBubbles || ($.event.special.change = {
			setup: function() {
				if (Bb.test(this.nodeName)) {
					if (this.type === "checkbox" || this.type === "radio") $.event.add(this, "propertychange._change", function(a) {
						a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
					}), $.event.add(this, "click._change", function(a) {
						this._just_changed && !a.isTrigger && (this._just_changed = !1), $.event.simulate("change", this, a, !0)
					});
					return !1
				}
				$.event.add(this, "beforeactivate._change", function(a) {
					var b = a.target;
					Bb.test(b.nodeName) && !$._data(b, "_change_attached") && ($.event.add(b, "change._change", function(a) {
						this.parentNode && !a.isSimulated && !a.isTrigger && $.event.simulate("change", this.parentNode, a, !0)
					}), $._data(b, "_change_attached", !0))
				})
			},
			handle: function(a) {
				var b = a.target;
				if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
			},
			teardown: function() {
				return $.event.remove(this, "._change"), !Bb.test(this.nodeName)
			}
		}), $.support.focusinBubbles || $.each({
			focus: "focusin",
			blur: "focusout"
		}, function(a, b) {
			var c = 0,
				d = function(a) {
					$.event.simulate(b, a.target, $.event.fix(a), !0)
				};
			$.event.special[b] = {
				setup: function() {
					c++ === 0 && P.addEventListener(a, d, !0)
				},
				teardown: function() {
					--c === 0 && P.removeEventListener(a, d, !0)
				}
			}
		}), $.fn.extend({
			on: function(a, c, d, e, g) {
				var h, i;
				if (typeof a == "object") {
					typeof c != "string" && (d = d || c, c = b);
					for (i in a) this.on(i, c, d, a[i], g);
					return this
				}
				d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
				if (e === !1) e = f;
				else if (!e) return this;
				return g === 1 && (h = e, e = function(a) {
					return $().off(a), h.apply(this, arguments)
				}, e.guid = h.guid || (h.guid = $.guid++)), this.each(function() {
					$.event.add(this, a, e, d, c)
				})
			},
			one: function(a, b, c, d) {
				return this.on(a, b, c, d, 1)
			},
			off: function(a, c, d) {
				var e, g;
				if (a && a.preventDefault && a.handleObj) return e = a.handleObj, $(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
				if (typeof a == "object") {
					for (g in a) this.off(g, c, a[g]);
					return this
				}
				if (c === !1 || typeof c == "function") d = c, c = b;
				return d === !1 && (d = f), this.each(function() {
					$.event.remove(this, a, d, c)
				})
			},
			bind: function(a, b, c) {
				return this.on(a, null, b, c)
			},
			unbind: function(a, b) {
				return this.off(a, null, b)
			},
			live: function(a, b, c) {
				return $(this.context).on(a, this.selector, b, c), this
			},
			die: function(a, b) {
				return $(this.context).off(a, this.selector || "**", b), this
			},
			delegate: function(a, b, c, d) {
				return this.on(b, a, c, d)
			},
			undelegate: function(a, b, c) {
				return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
			},
			trigger: function(a, b) {
				return this.each(function() {
					$.event.trigger(a, b, this)
				})
			},
			triggerHandler: function(a, b) {
				if (this[0]) return $.event.trigger(a, b, this[0], !0)
			},
			toggle: function(a) {
				var b = arguments,
					c = a.guid || $.guid++,
					d = 0,
					e = function(c) {
						var e = ($._data(this, "lastToggle" + a.guid) || 0) % d;
						return $._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
					};
				e.guid = c;
				while (d < b.length) b[d++].guid = c;
				return this.click(e)
			},
			hover: function(a, b) {
				return this.mouseenter(a).mouseleave(b || a)
			}
		}), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
			$.fn[b] = function(a, c) {
				return c == null && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
			}, Eb.test(b) && ($.event.fixHooks[b] = $.event.keyHooks), Fb.test(b) && ($.event.fixHooks[b] = $.event.mouseHooks)
		}),
		function(a, b) {
			function c(a, b, c, d) {
				c = c || [], b = b || F;
				var e, f, g, h, i = b.nodeType;
				if (!a || typeof a != "string") return c;
				if (i !== 1 && i !== 9) return [];
				g = v(b);
				if (!g && !d)
					if (e = cb.exec(a))
						if (h = e[1]) {
							if (i === 9) {
								f = b.getElementById(h);
								if (!f || !f.parentNode) return c;
								if (f.id === h) return c.push(f), c
							} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h) return c.push(f), c
						} else {
							if (e[2]) return K.apply(c, L.call(b.getElementsByTagName(a), 0)), c;
							if ((h = e[3]) && ob && b.getElementsByClassName) return K.apply(c, L.call(b.getElementsByClassName(h), 0)), c
						}
				return p(a.replace(Z, "$1"), b, c, d, g)
			}

			function d(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return c === "input" && b.type === a
				}
			}

			function e(a) {
				return function(b) {
					var c = b.nodeName.toLowerCase();
					return (c === "input" || c === "button") && b.type === a
				}
			}

			function f(a) {
				return N(function(b) {
					return b = +b, N(function(c, d) {
						var e, f = a([], c.length, b),
							g = f.length;
						while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					})
				})
			}

			function g(a, b, c) {
				if (a === b) return c;
				var d = a.nextSibling;
				while (d) {
					if (d === b) return -1;
					d = d.nextSibling
				}
				return 1
			}

			function h(a, b) {
				var d, e, f, g, h, i, j, k = Q[D][a + " "];
				if (k) return b ? 0 : k.slice(0);
				h = a, i = [], j = t.preFilter;
				while (h) {
					if (!d || (e = _.exec(h))) e && (h = h.slice(e[0].length) || h), i.push(f = []);
					d = !1;
					if (e = ab.exec(h)) f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = e[0].replace(Z, " ");
					for (g in t.filter)(e = jb[g].exec(h)) && (!j[g] || (e = j[g](e))) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = g, d.matches = e);
					if (!d) break
				}
				return b ? h.length : h ? c.error(a) : Q(a, i).slice(0)
			}

			function i(a, b, c) {
				var d = b.dir,
					e = c && b.dir === "parentNode",
					f = I++;
				return b.first ? function(b, c, f) {
					while (b = b[d])
						if (e || b.nodeType === 1) return a(b, c, f)
				} : function(b, c, g) {
					if (!g) {
						var h, i = H + " " + f + " ",
							j = i + r;
						while (b = b[d])
							if (e || b.nodeType === 1) {
								if ((h = b[D]) === j) return b.sizset;
								if (typeof h == "string" && h.indexOf(i) === 0) {
									if (b.sizset) return b
								} else {
									b[D] = j;
									if (a(b, c, g)) return b.sizset = !0, b;
									b.sizset = !1
								}
							}
					} else
						while (b = b[d])
							if (e || b.nodeType === 1)
								if (a(b, c, g)) return b
				}
			}

			function j(a) {
				return a.length > 1 ? function(b, c, d) {
					var e = a.length;
					while (e--)
						if (!a[e](b, c, d)) return !1;
					return !0
				} : a[0]
			}

			function k(a, b, c, d, e) {
				var f, g = [],
					h = 0,
					i = a.length,
					j = b != null;
				for (; h < i; h++)
					if (f = a[h])
						if (!c || c(f, d, e)) g.push(f), j && b.push(h);
				return g
			}

			function l(a, b, c, d, e, f) {
				return d && !d[D] && (d = l(d)), e && !e[D] && (e = l(e, f)), N(function(f, g, h, i) {
					var j, l, m, n = [],
						p = [],
						q = g.length,
						r = f || o(b || "*", h.nodeType ? [h] : h, []),
						s = a && (f || !b) ? k(r, n, a, h, i) : r,
						t = c ? e || (f ? a : q || d) ? [] : g : s;
					c && c(s, t, h, i);
					if (d) {
						j = k(t, p), d(j, [], h, i), l = j.length;
						while (l--)
							if (m = j[l]) t[p[l]] = !(s[p[l]] = m)
					}
					if (f) {
						if (e || a) {
							if (e) {
								j = [], l = t.length;
								while (l--)(m = t[l]) && j.push(s[l] = m);
								e(null, t = [], j, i)
							}
							l = t.length;
							while (l--)(m = t[l]) && (j = e ? M.call(f, m) : n[l]) > -1 && (f[j] = !(g[j] = m))
						}
					} else t = k(t === g ? t.splice(q, t.length) : t), e ? e(null, g, t, i) : K.apply(g, t)
				})
			}

			function m(a) {
				var b, c, d, e = a.length,
					f = t.relative[a[0].type],
					g = f || t.relative[" "],
					h = f ? 1 : 0,
					k = i(function(a) {
						return a === b
					}, g, !0),
					n = i(function(a) {
						return M.call(b, a) > -1
					}, g, !0),
					o = [function(a, c, d) {
						return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
					}];
				for (; h < e; h++)
					if (c = t.relative[a[h].type]) o = [i(j(o), c)];
					else {
						c = t.filter[a[h].type].apply(null, a[h].matches);
						if (c[D]) {
							d = ++h;
							for (; d < e; d++)
								if (t.relative[a[d].type]) break;
							return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, h < d && m(a.slice(h, d)), d < e && m(a = a.slice(d)), d < e && a.join(""))
						}
						o.push(c)
					}
				return j(o)
			}

			function n(a, b) {
				var d = b.length > 0,
					e = a.length > 0,
					f = function(g, h, i, j, l) {
						var m, n, o, p = [],
							q = 0,
							s = "0",
							u = g && [],
							v = l != null,
							w = A,
							x = g || e && t.find.TAG("*", l && h.parentNode || h),
							y = H += w == null ? 1 : Math.E;
						v && (A = h !== F && h, r = f.el);
						for (;
							(m = x[s]) != null; s++) {
							if (e && m) {
								for (n = 0; o = a[n]; n++)
									if (o(m, h, i)) {
										j.push(m);
										break
									}
								v && (H = y, r = ++f.el)
							}
							d && ((m = !o && m) && q--, g && u.push(m))
						}
						q += s;
						if (d && s !== q) {
							for (n = 0; o = b[n]; n++) o(u, p, h, i);
							if (g) {
								if (q > 0)
									while (s--) !u[s] && !p[s] && (p[s] = J.call(j));
								p = k(p)
							}
							K.apply(j, p), v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
						}
						return v && (H = y, A = w), u
					};
				return f.el = 0, d ? N(f) : f
			}

			function o(a, b, d) {
				var e = 0,
					f = b.length;
				for (; e < f; e++) c(a, b[e], d);
				return d
			}

			function p(a, b, c, d, e) {
				var f, g, i, j, k, l = h(a),
					m = l.length;
				if (!d && l.length === 1) {
					g = l[0] = l[0].slice(0);
					if (g.length > 2 && (i = g[0]).type === "ID" && b.nodeType === 9 && !e && t.relative[g[1].type]) {
						b = t.find.ID(i.matches[0].replace(ib, ""), b, e)[0];
						if (!b) return c;
						a = a.slice(g.shift().length)
					}
					for (f = jb.POS.test(a) ? -1 : g.length - 1; f >= 0; f--) {
						i = g[f];
						if (t.relative[j = i.type]) break;
						if (k = t.find[j])
							if (d = k(i.matches[0].replace(ib, ""), eb.test(g[0].type) && b.parentNode || b, e)) {
								g.splice(f, 1), a = d.length && g.join("");
								if (!a) return K.apply(c, L.call(d, 0)), c;
								break
							}
					}
				}
				return x(a, l)(d, b, e, c, eb.test(a)), c
			}

			function q() {}
			var r, s, t, u, v, w, x, y, z, A, B = !0,
				C = "undefined",
				D = ("sizcache" + Math.random()).replace(".", ""),
				E = String,
				F = a.document,
				G = F.documentElement,
				H = 0,
				I = 0,
				J = [].pop,
				K = [].push,
				L = [].slice,
				M = [].indexOf || function(a) {
					var b = 0,
						c = this.length;
					for (; b < c; b++)
						if (this[b] === a) return b;
					return -1
				},
				N = function(a, b) {
					return a[D] = b == null || b, a
				},
				O = function() {
					var a = {},
						b = [];
					return N(function(c, d) {
						return b.push(c) > t.cacheLength && delete a[b.shift()], a[c + " "] = d
					}, a)
				},
				P = O(),
				Q = O(),
				R = O(),
				S = "[\\x20\\t\\r\\n\\f]",
				T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
				U = T.replace("w", "w#"),
				V = "([*^$|!~]?=)",
				W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]",
				X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)",
				Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)",
				Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g"),
				_ = new RegExp("^" + S + "*," + S + "*"),
				ab = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"),
				bb = new RegExp(X),
				cb = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
				db = /^:not/,
				eb = /[\x20\t\r\n\f]*[+~]/,
				fb = /:not\($/,
				gb = /h\d/i,
				hb = /input|select|textarea|button/i,
				ib = /\\(?!\\)/g,
				jb = {
					ID: new RegExp("^#(" + T + ")"),
					CLASS: new RegExp("^\\.(" + T + ")"),
					NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
					TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + W),
					PSEUDO: new RegExp("^" + X),
					POS: new RegExp(Y, "i"),
					CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i"),
					needsContext: new RegExp("^" + S + "*[>+~]|" + Y, "i")
				},
				kb = function(a) {
					var b = F.createElement("div");
					try {
						return a(b)
					} catch (c) {
						return !1
					} finally {
						b = null
					}
				},
				lb = kb(function(a) {
					return a.appendChild(F.createComment("")), !a.getElementsByTagName("*").length
				}),
				mb = kb(function(a) {
					return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== C && a.firstChild.getAttribute("href") === "#"
				}),
				nb = kb(function(a) {
					a.innerHTML = "<select></select>";
					var b = typeof a.lastChild.getAttribute("multiple");
					return b !== "boolean" && b !== "string"
				}),
				ob = kb(function(a) {
					return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !a.getElementsByClassName || !a.getElementsByClassName("e").length ? !1 : (a.lastChild.className = "e", a.getElementsByClassName("e").length === 2)
				}),
				pb = kb(function(a) {
					a.id = D + 0, a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", G.insertBefore(a, G.firstChild);
					var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
					return s = !F.getElementById(D), G.removeChild(a), b
				});
			try {
				L.call(G.childNodes, 0)[0].nodeType
			} catch (qb) {
				L = function(a) {
					var b, c = [];
					for (; b = this[a]; a++) c.push(b);
					return c
				}
			}
			c.matches = function(a, b) {
				return c(a, null, null, b)
			}, c.matchesSelector = function(a, b) {
				return c(b, null, null, [a]).length > 0
			}, u = c.getText = function(a) {
				var b, c = "",
					d = 0,
					e = a.nodeType;
				if (e) {
					if (e === 1 || e === 9 || e === 11) {
						if (typeof a.textContent == "string") return a.textContent;
						for (a = a.firstChild; a; a = a.nextSibling) c += u(a)
					} else if (e === 3 || e === 4) return a.nodeValue
				} else
					for (; b = a[d]; d++) c += u(b);
				return c
			}, v = c.isXML = function(a) {
				var b = a && (a.ownerDocument || a).documentElement;
				return b ? b.nodeName !== "HTML" : !1
			}, w = c.contains = G.contains ? function(a, b) {
				var c = a.nodeType === 9 ? a.documentElement : a,
					d = b && b.parentNode;
				return a === d || !!(d && d.nodeType === 1 && c.contains && c.contains(d))
			} : G.compareDocumentPosition ? function(a, b) {
				return b && !!(a.compareDocumentPosition(b) & 16)
			} : function(a, b) {
				while (b = b.parentNode)
					if (b === a) return !0;
				return !1
			}, c.attr = function(a, b) {
				var c, d = v(a);
				return d || (b = b.toLowerCase()), (c = t.attrHandle[b]) ? c(a) : d || nb ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null)
			}, t = c.selectors = {
				cacheLength: 50,
				createPseudo: N,
				match: jb,
				attrHandle: mb ? {} : {
					href: function(a) {
						return a.getAttribute("href", 2)
					},
					type: function(a) {
						return a.getAttribute("type")
					}
				},
				find: {
					ID: s ? function(a, b, c) {
						if (typeof b.getElementById !== C && !c) {
							var d = b.getElementById(a);
							return d && d.parentNode ? [d] : []
						}
					} : function(a, c, d) {
						if (typeof c.getElementById !== C && !d) {
							var e = c.getElementById(a);
							return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : []
						}
					},
					TAG: lb ? function(a, b) {
						if (typeof b.getElementsByTagName !== C) return b.getElementsByTagName(a)
					} : function(a, b) {
						var c = b.getElementsByTagName(a);
						if (a === "*") {
							var d, e = [],
								f = 0;
							for (; d = c[f]; f++) d.nodeType === 1 && e.push(d);
							return e
						}
						return c
					},
					NAME: pb && function(a, b) {
						if (typeof b.getElementsByName !== C) return b.getElementsByName(name)
					},
					CLASS: ob && function(a, b, c) {
						if (typeof b.getElementsByClassName !== C && !c) return b.getElementsByClassName(a)
					}
				},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(a) {
						return a[1] = a[1].replace(ib, ""), a[3] = (a[4] || a[5] || "").replace(ib, ""), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
					},
					CHILD: function(a) {
						return a[1] = a[1].toLowerCase(), a[1] === "nth" ? (a[2] || c.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd")), a[4] = +(a[6] + a[7] || a[2] === "odd")) : a[2] && c.error(a[0]), a
					},
					PSEUDO: function(a) {
						var b, c;
						if (jb.CHILD.test(a[0])) return null;
						if (a[3]) a[2] = a[3];
						else if (b = a[4]) bb.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b;
						return a.slice(0, 3)
					}
				},
				filter: {
					ID: s ? function(a) {
						return a = a.replace(ib, ""),
							function(b) {
								return b.getAttribute("id") === a
							}
					} : function(a) {
						return a = a.replace(ib, ""),
							function(b) {
								var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
								return c && c.value === a
							}
					},
					TAG: function(a) {
						return a === "*" ? function() {
							return !0
						} : (a = a.replace(ib, "").toLowerCase(), function(b) {
							return b.nodeName && b.nodeName.toLowerCase() === a
						})
					},
					CLASS: function(a) {
						var b = P[D][a + " "];
						return b || (b = new RegExp("(^|" + S + ")" + a + "(" + S + "|$)")) && P(a, function(a) {
							return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
						})
					},
					ATTR: function(a, b, d) {
						return function(e, f) {
							var g = c.attr(e, a);
							return g == null ? b === "!=" : b ? (g += "", b === "=" ? g === d : b === "!=" ? g !== d : b === "^=" ? d && g.indexOf(d) === 0 : b === "*=" ? d && g.indexOf(d) > -1 : b === "$=" ? d && g.substr(g.length - d.length) === d : b === "~=" ? (" " + g + " ").indexOf(d) > -1 : b === "|=" ? g === d || g.substr(0, d.length + 1) === d + "-" : !1) : !0
						}
					},
					CHILD: function(a, b, c, d) {
						return a === "nth" ? function(a) {
							var b, e, f = a.parentNode;
							if (c === 1 && d === 0) return !0;
							if (f) {
								e = 0;
								for (b = f.firstChild; b; b = b.nextSibling)
									if (b.nodeType === 1) {
										e++;
										if (a === b) break
									}
							}
							return e -= d, e === c || e % c === 0 && e / c >= 0
						} : function(b) {
							var c = b;
							switch (a) {
								case "only":
								case "first":
									while (c = c.previousSibling)
										if (c.nodeType === 1) return !1;
									if (a === "first") return !0;
									c = b;
								case "last":
									while (c = c.nextSibling)
										if (c.nodeType === 1) return !1;
									return !0
							}
						}
					},
					PSEUDO: function(a, b) {
						var d, e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
						return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function(a, c) {
							var d, f = e(a, b),
								g = f.length;
							while (g--) d = M.call(a, f[g]), a[d] = !(c[d] = f[g])
						}) : function(a) {
							return e(a, 0, d)
						}) : e
					}
				},
				pseudos: {
					not: N(function(a) {
						var b = [],
							c = [],
							d = x(a.replace(Z, "$1"));
						return d[D] ? N(function(a, b, c, e) {
							var f, g = d(a, null, e, []),
								h = a.length;
							while (h--)
								if (f = g[h]) a[h] = !(b[h] = f)
						}) : function(a, e, f) {
							return b[0] = a, d(b, null, f, c), !c.pop()
						}
					}),
					has: N(function(a) {
						return function(b) {
							return c(a, b).length > 0
						}
					}),
					contains: N(function(a) {
						return function(b) {
							return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
						}
					}),
					enabled: function(a) {
						return a.disabled === !1
					},
					disabled: function(a) {
						return a.disabled === !0
					},
					checked: function(a) {
						var b = a.nodeName.toLowerCase();
						return b === "input" && !!a.checked || b === "option" && !!a.selected
					},
					selected: function(a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
					},
					parent: function(a) {
						return !t.pseudos.empty(a)
					},
					empty: function(a) {
						var b;
						a = a.firstChild;
						while (a) {
							if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4) return !1;
							a = a.nextSibling
						}
						return !0
					},
					header: function(a) {
						return gb.test(a.nodeName)
					},
					text: function(a) {
						var b, c;
						return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase() === b)
					},
					radio: d("radio"),
					checkbox: d("checkbox"),
					file: d("file"),
					password: d("password"),
					image: d("image"),
					submit: e("submit"),
					reset: e("reset"),
					button: function(a) {
						var b = a.nodeName.toLowerCase();
						return b === "input" && a.type === "button" || b === "button"
					},
					input: function(a) {
						return hb.test(a.nodeName)
					},
					focus: function(a) {
						var b = a.ownerDocument;
						return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
					},
					active: function(a) {
						return a === a.ownerDocument.activeElement
					},
					first: f(function() {
						return [0]
					}),
					last: f(function(a, b) {
						return [b - 1]
					}),
					eq: f(function(a, b, c) {
						return [c < 0 ? c + b : c]
					}),
					even: f(function(a, b) {
						for (var c = 0; c < b; c += 2) a.push(c);
						return a
					}),
					odd: f(function(a, b) {
						for (var c = 1; c < b; c += 2) a.push(c);
						return a
					}),
					lt: f(function(a, b, c) {
						for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
						return a
					}),
					gt: f(function(a, b, c) {
						for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
						return a
					})
				}
			}, y = G.compareDocumentPosition ? function(a, b) {
				return a === b ? (z = !0, 0) : (!a.compareDocumentPosition || !b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition(b) & 4) ? -1 : 1
			} : function(a, b) {
				if (a === b) return z = !0, 0;
				if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
				var c, d, e = [],
					f = [],
					h = a.parentNode,
					i = b.parentNode,
					j = h;
				if (h === i) return g(a, b);
				if (!h) return -1;
				if (!i) return 1;
				while (j) e.unshift(j), j = j.parentNode;
				j = i;
				while (j) f.unshift(j), j = j.parentNode;
				c = e.length, d = f.length;
				for (var k = 0; k < c && k < d; k++)
					if (e[k] !== f[k]) return g(e[k], f[k]);
				return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
			}, [0, 0].sort(y), B = !z, c.uniqueSort = function(a) {
				var b, c = [],
					d = 1,
					e = 0;
				z = B, a.sort(y);
				if (z) {
					for (; b = a[d]; d++) b === a[d - 1] && (e = c.push(d));
					while (e--) a.splice(c[e], 1)
				}
				return a
			}, c.error = function(a) {
				throw new Error("Syntax error, unrecognized expression: " + a)
			}, x = c.compile = function(a, b) {
				var c, d = [],
					e = [],
					f = R[D][a + " "];
				if (!f) {
					b || (b = h(a)), c = b.length;
					while (c--) f = m(b[c]), f[D] ? d.push(f) : e.push(f);
					f = R(a, n(e, d))
				}
				return f
			}, F.querySelectorAll && function() {
				var a, b = p,
					d = /'|\\/g,
					e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
					f = [":focus"],
					g = [":active"],
					i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
				kb(function(a) {
					a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || f.push(":checked")
				}), kb(function(a) {
					a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
				}), f = new RegExp(f.join("|")), p = function(a, c, e, g, i) {
					if (!g && !i && !f.test(a)) {
						var j, k, l = !0,
							m = D,
							n = c,
							o = c.nodeType === 9 && a;
						if (c.nodeType === 1 && c.nodeName.toLowerCase() !== "object") {
							j = h(a), (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m), m = "[id='" + m + "'] ", k = j.length;
							while (k--) j[k] = m + j[k].join("");
							n = eb.test(a) && c.parentNode || c, o = j.join(",")
						}
						if (o) try {
							return K.apply(e, L.call(n.querySelectorAll(o), 0)), e
						} catch (p) {} finally {
							l || c.removeAttribute("id")
						}
					}
					return b(a, c, e, g, i)
				}, i && (kb(function(b) {
					a = i.call(b, "div");
					try {
						i.call(b, "[test!='']:sizzle"), g.push("!=", X)
					} catch (c) {}
				}), g = new RegExp(g.join("|")), c.matchesSelector = function(b, d) {
					d = d.replace(e, "='$1']");
					if (!v(b) && !g.test(d) && !f.test(d)) try {
						var h = i.call(b, d);
						if (h || a || b.document && b.document.nodeType !== 11) return h
					} catch (j) {}
					return c(d, null, null, [b]).length > 0
				})
			}(), t.pseudos.nth = t.pseudos.eq, t.filters = q.prototype = t.pseudos, t.setFilters = new q, c.attr = $.attr, $.find = c, $.expr = c.selectors, $.expr[":"] = $.expr.pseudos, $.unique = c.uniqueSort, $.text = c.getText, $.isXMLDoc = c.isXML, $.contains = c.contains
		}(a);
	var Ib = /Until$/,
		Jb = /^(?:parents|prev(?:Until|All))/,
		Kb = /^.[^:#\[\.,]*$/,
		Lb = $.expr.match.needsContext,
		Mb = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	$.fn.extend({
		find: function(a) {
			var b, c, d, e, f, g, h = this;
			if (typeof a != "string") return $(a).filter(function() {
				for (b = 0, c = h.length; b < c; b++)
					if ($.contains(h[b], this)) return !0
			});
			g = this.pushStack("", "find", a);
			for (b = 0, c = this.length; b < c; b++) {
				d = g.length, $.find(a, this[b], g);
				if (b > 0)
					for (e = d; e < g.length; e++)
						for (f = 0; f < d; f++)
							if (g[f] === g[e]) {
								g.splice(e--, 1);
								break
							}
			}
			return g
		},
		has: function(a) {
			var b, c = $(a, this),
				d = c.length;
			return this.filter(function() {
				for (b = 0; b < d; b++)
					if ($.contains(this, c[b])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(j(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(j(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !!a && (typeof a == "string" ? Lb.test(a) ? $(a, this.context).index(this[0]) >= 0 : $.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			var c, d = 0,
				e = this.length,
				f = [],
				g = Lb.test(a) || typeof a != "string" ? $(a, b || this.context) : 0;
			for (; d < e; d++) {
				c = this[d];
				while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
					if (g ? g.index(c) > -1 : $.find.matchesSelector(c, a)) {
						f.push(c);
						break
					}
					c = c.parentNode
				}
			}
			return f = f.length > 1 ? $.unique(f) : f, this.pushStack(f, "closest", a)
		},
		index: function(a) {
			return a ? typeof a == "string" ? $.inArray(this[0], $(a)) : $.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
		},
		add: function(a, b) {
			var c = typeof a == "string" ? $(a, b) : $.makeArray(a && a.nodeType ? [a] : a),
				d = $.merge(this.get(), c);
			return this.pushStack(h(c[0]) || h(d[0]) ? d : $.unique(d))
		},
		addBack: function(a) {
			return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
		}
	}), $.fn.andSelf = $.fn.addBack, $.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && b.nodeType !== 11 ? b : null
		},
		parents: function(a) {
			return $.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return $.dir(a, "parentNode", c)
		},
		next: function(a) {
			return i(a, "nextSibling")
		},
		prev: function(a) {
			return i(a, "previousSibling")
		},
		nextAll: function(a) {
			return $.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return $.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return $.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return $.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return $.sibling((a.parentNode || {}).firstChild, a)
		},
		children: function(a) {
			return $.sibling(a.firstChild)
		},
		contents: function(a) {
			return $.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : $.merge([], a.childNodes)
		}
	}, function(a, b) {
		$.fn[a] = function(c, d) {
			var e = $.map(this, b, c);
			return Ib.test(a) || (d = c), d && typeof d == "string" && (e = $.filter(d, e)), e = this.length > 1 && !Mb[a] ? $.unique(e) : e, this.length > 1 && Jb.test(a) && (e = e.reverse()), this.pushStack(e, a, V.call(arguments).join(","))
		}
	}), $.extend({
		filter: function(a, b, c) {
			return c && (a = ":not(" + a + ")"), b.length === 1 ? $.find.matchesSelector(b[0], a) ? [b[0]] : [] : $.find.matches(a, b)
		},
		dir: function(a, c, d) {
			var e = [],
				f = a[c];
			while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 || !$(f).is(d))) f.nodeType === 1 && e.push(f), f = f[c];
			return e
		},
		sibling: function(a, b) {
			var c = [];
			for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
			return c
		}
	});
	var Nb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		Ob = / jQuery\d+="(?:null|\d+)"/g,
		Pb = /^\s+/,
		Qb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Rb = /<([\w:]+)/,
		Sb = /<tbody/i,
		Tb = /<|&#?\w+;/,
		Ub = /<(?:script|style|link)/i,
		Vb = /<(?:script|object|embed|option|style)/i,
		Wb = new RegExp("<(?:" + Nb + ")[\\s/>]", "i"),
		Xb = /^(?:checkbox|radio)$/,
		Yb = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Zb = /\/(java|ecma)script/i,
		$b = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
		_b = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		},
		ac = k(P),
		bc = ac.appendChild(P.createElement("div"));
	_b.optgroup = _b.option, _b.tbody = _b.tfoot = _b.colgroup = _b.caption = _b.thead, _b.th = _b.td, $.support.htmlSerialize || (_b._default = [1, "X<div>", "</div>"]), $.fn.extend({
			text: function(a) {
				return $.access(this, function(a) {
					return a === b ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(a))
				}, null, a, arguments.length)
			},
			wrapAll: function(a) {
				if ($.isFunction(a)) return this.each(function(b) {
					$(this).wrapAll(a.call(this, b))
				});
				if (this[0]) {
					var b = $(a, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
						var a = this;
						while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
						return a
					}).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				return $.isFunction(a) ? this.each(function(b) {
					$(this).wrapInner(a.call(this, b))
				}) : this.each(function() {
					var b = $(this),
						c = b.contents();
					c.length ? c.wrapAll(a) : b.append(a)
				})
			},
			wrap: function(a) {
				var b = $.isFunction(a);
				return this.each(function(c) {
					$(this).wrapAll(b ? a.call(this, c) : a)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					$.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
				}).end()
			},
			append: function() {
				return this.domManip(arguments, !0, function(a) {
					(this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a)
				})
			},
			prepend: function() {
				return this.domManip(arguments, !0, function(a) {
					(this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
				})
			},
			before: function() {
				if (!h(this[0])) return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this)
				});
				if (arguments.length) {
					var a = $.clean(arguments);
					return this.pushStack($.merge(a, this), "before", this.selector)
				}
			},
			after: function() {
				if (!h(this[0])) return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this.nextSibling)
				});
				if (arguments.length) {
					var a = $.clean(arguments);
					return this.pushStack($.merge(this, a), "after", this.selector)
				}
			},
			remove: function(a, b) {
				var c, d = 0;
				for (;
					(c = this[d]) != null; d++)
					if (!a || $.filter(a, [c]).length) !b && c.nodeType === 1 && ($.cleanData(c.getElementsByTagName("*")), $.cleanData([c])), c.parentNode && c.parentNode.removeChild(c);
				return this
			},
			empty: function() {
				var a, b = 0;
				for (;
					(a = this[b]) != null; b++) {
					a.nodeType === 1 && $.cleanData(a.getElementsByTagName("*"));
					while (a.firstChild) a.removeChild(a.firstChild)
				}
				return this
			},
			clone: function(a, b) {
				return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function() {
					return $.clone(this, a, b)
				})
			},
			html: function(a) {
				return $.access(this, function(a) {
					var c = this[0] || {},
						d = 0,
						e = this.length;
					if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(Ob, "") : b;
					if (typeof a == "string" && !Ub.test(a) && ($.support.htmlSerialize || !Wb.test(a)) && ($.support.leadingWhitespace || !Pb.test(a)) && !_b[(Rb.exec(a) || ["", ""])[1].toLowerCase()]) {
						a = a.replace(Qb, "<$1></$2>");
						try {
							for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && ($.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
							c = 0
						} catch (f) {}
					}
					c && this.empty().append(a)
				}, null, a, arguments.length)
			},
			replaceWith: function(a) {
				return h(this[0]) ? this.length ? this.pushStack($($.isFunction(a) ? a() : a), "replaceWith", a) : this : $.isFunction(a) ? this.each(function(b) {
					var c = $(this),
						d = c.html();
					c.replaceWith(a.call(this, b, d))
				}) : (typeof a != "string" && (a = $(a).detach()), this.each(function() {
					var b = this.nextSibling,
						c = this.parentNode;
					$(this).remove(), b ? $(b).before(a) : $(c).append(a)
				}))
			},
			detach: function(a) {
				return this.remove(a, !0)
			},
			domManip: function(a, c, d) {
				a = [].concat.apply([], a);
				var e, f, g, h, i = 0,
					j = a[0],
					k = [],
					m = this.length;
				if (!$.support.checkClone && m > 1 && typeof j == "string" && Yb.test(j)) return this.each(function() {
					$(this).domManip(a, c, d)
				});
				if ($.isFunction(j)) return this.each(function(e) {
					var f = $(this);
					a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
				});
				if (this[0]) {
					e = $.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, g.childNodes.length === 1 && (g = f);
					if (f) {
						c = c && $.nodeName(f, "tr");
						for (h = e.cacheable || m - 1; i < m; i++) d.call(c && $.nodeName(this[i], "table") ? l(this[i], "tbody") : this[i], i === h ? g : $.clone(g, !0, !0))
					}
					g = f = null, k.length && $.each(k, function(a, b) {
						b.src ? $.ajax ? $.ajax({
							url: b.src,
							type: "GET",
							dataType: "script",
							async: !1,
							global: !1,
							"throws": !0
						}) : $.error("no ajax") : $.globalEval((b.text || b.textContent || b.innerHTML || "").replace($b, "")), b.parentNode && b.parentNode.removeChild(b)
					})
				}
				return this
			}
		}), $.buildFragment = function(a, c, d) {
			var e, f, g, h = a[0];
			return c = c || P, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, a.length === 1 && typeof h == "string" && h.length < 512 && c === P && h.charAt(0) === "<" && !Vb.test(h) && ($.support.checkClone || !Yb.test(h)) && ($.support.html5Clone || !Wb.test(h)) && (f = !0, e = $.fragments[h], g = e !== b), e || (e = c.createDocumentFragment(), $.clean(a, c, e, d), f && ($.fragments[h] = g && e)), {
				fragment: e,
				cacheable: f
			}
		}, $.fragments = {}, $.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(a, b) {
			$.fn[a] = function(c) {
				var d, e = 0,
					f = [],
					g = $(c),
					h = g.length,
					i = this.length === 1 && this[0].parentNode;
				if ((i == null || i && i.nodeType === 11 && i.childNodes.length === 1) && h === 1) return g[b](this[0]), this;
				for (; e < h; e++) d = (e > 0 ? this.clone(!0) : this).get(), $(g[e])[b](d), f = f.concat(d);
				return this.pushStack(f, a, g.selector)
			}
		}), $.extend({
			clone: function(a, b, c) {
				var d, e, f, g;
				$.support.html5Clone || $.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (bc.innerHTML = a.outerHTML, bc.removeChild(g = bc.firstChild));
				if ((!$.support.noCloneEvent || !$.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !$.isXMLDoc(a)) {
					n(a, g), d = o(a), e = o(g);
					for (f = 0; d[f]; ++f) e[f] && n(d[f], e[f])
				}
				if (b) {
					m(a, g);
					if (c) {
						d = o(a), e = o(g);
						for (f = 0; d[f]; ++f) m(d[f], e[f])
					}
				}
				return d = e = null, g
			},
			clean: function(a, b, c, d) {
				var e, f, g, h, i, j, l, m, n, o, q, r, s = b === P && ac,
					t = [];
				if (!b || typeof b.createDocumentFragment == "undefined") b = P;
				for (e = 0;
					(g = a[e]) != null; e++) {
					typeof g == "number" && (g += "");
					if (!g) continue;
					if (typeof g == "string")
						if (!Tb.test(g)) g = b.createTextNode(g);
						else {
							s = s || k(b), l = b.createElement("div"), s.appendChild(l), g = g.replace(Qb, "<$1></$2>"), h = (Rb.exec(g) || ["", ""])[1].toLowerCase(), i = _b[h] || _b._default, j = i[0], l.innerHTML = i[1] + g + i[2];
							while (j--) l = l.lastChild;
							if (!$.support.tbody) {
								m = Sb.test(g), n = h === "table" && !m ? l.firstChild && l.firstChild.childNodes : i[1] === "<table>" && !m ? l.childNodes : [];
								for (f = n.length - 1; f >= 0; --f) $.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f])
							}!$.support.leadingWhitespace && Pb.test(g) && l.insertBefore(b.createTextNode(Pb.exec(g)[0]), l.firstChild), g = l.childNodes, l.parentNode.removeChild(l)
						}
					g.nodeType ? t.push(g) : $.merge(t, g)
				}
				l && (g = l = s = null);
				if (!$.support.appendChecked)
					for (e = 0;
						(g = t[e]) != null; e++) $.nodeName(g, "input") ? p(g) : typeof g.getElementsByTagName != "undefined" && $.grep(g.getElementsByTagName("input"), p);
				if (c) {
					q = function(a) {
						if (!a.type || Zb.test(a.type)) return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a)
					};
					for (e = 0;
						(g = t[e]) != null; e++)
						if (!$.nodeName(g, "script") || !q(g)) c.appendChild(g), typeof g.getElementsByTagName != "undefined" && (r = $.grep($.merge([], g.getElementsByTagName("script")), q), t.splice.apply(t, [e + 1, 0].concat(r)), e += r.length)
				}
				return t
			},
			cleanData: function(a, b) {
				var c, d, e, f, g = 0,
					h = $.expando,
					i = $.cache,
					j = $.support.deleteExpando,
					k = $.event.special;
				for (;
					(e = a[g]) != null; g++)
					if (b || $.acceptData(e)) {
						d = e[h], c = d && i[d];
						if (c) {
							if (c.events)
								for (f in c.events) k[f] ? $.event.remove(e, f) : $.removeEvent(e, f, c.handle);
							i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, $.deletedIds.push(d))
						}
					}
			}
		}),
		function() {
			var a, b;
			$.uaMatch = function(a) {
				a = a.toLowerCase();
				var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
				return {
					browser: b[1] || "",
					version: b[2] || "0"
				}
			}, a = $.uaMatch(R.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), $.browser = b, $.sub = function() {
				function a(b, c) {
					return new a.fn.init(b, c)
				}
				$.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, d) {
					return d && d instanceof $ && !(d instanceof a) && (d = a(d)), $.fn.init.call(this, c, d, b)
				}, a.fn.init.prototype = a.fn;
				var b = a(P);
				return a
			}
		}();
	var cc, dc, ec, fc = /alpha\([^)]*\)/i,
		gc = /opacity=([^)]*)/,
		hc = /^(top|right|bottom|left)$/,
		ic = /^(none|table(?!-c[ea]).+)/,
		jc = /^margin/,
		kc = new RegExp("^(" + _ + ")(.*)$", "i"),
		lc = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
		mc = new RegExp("^([-+])=(" + _ + ")", "i"),
		nc = {
			BODY: "block"
		},
		oc = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		pc = {
			letterSpacing: 0,
			fontWeight: 400
		},
		qc = ["Top", "Right", "Bottom", "Left"],
		rc = ["Webkit", "O", "Moz", "ms"],
		sc = $.fn.toggle;
	$.fn.extend({
		css: function(a, c) {
			return $.access(this, function(a, c, d) {
				return d !== b ? $.style(a, c, d) : $.css(a, c)
			}, a, c, arguments.length > 1)
		},
		show: function() {
			return s(this, !0)
		},
		hide: function() {
			return s(this)
		},
		toggle: function(a, b) {
			var c = typeof a == "boolean";
			return $.isFunction(a) && $.isFunction(b) ? sc.apply(this, arguments) : this.each(function() {
				(c ? a : r(this)) ? $(this).show(): $(this).hide()
			})
		}
	}), $.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = cc(a, "opacity");
						return c === "" ? "1" : c
					}
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": $.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, c, d, e) {
			if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
			var f, g, h, i = $.camelCase(c),
				j = a.style;
			c = $.cssProps[i] || ($.cssProps[i] = q(j, i)), h = $.cssHooks[c] || $.cssHooks[i];
			if (d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
			g = typeof d, g === "string" && (f = mc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat($.css(a, c)), g = "number");
			if (d == null || g === "number" && isNaN(d)) return;
			g === "number" && !$.cssNumber[i] && (d += "px");
			if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b) try {
				j[c] = d
			} catch (k) {}
		},
		css: function(a, c, d, e) {
			var f, g, h, i = $.camelCase(c);
			return c = $.cssProps[i] || ($.cssProps[i] = q(a.style, i)), h = $.cssHooks[c] || $.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = cc(a, c)), f === "normal" && c in pc && (f = pc[c]), d || e !== b ? (g = parseFloat(f), d || $.isNumeric(g) ? g || 0 : f) : f
		},
		swap: function(a, b, c) {
			var d, e, f = {};
			for (e in b) f[e] = a.style[e], a.style[e] = b[e];
			d = c.call(a);
			for (e in b) a.style[e] = f[e];
			return d
		}
	}), a.getComputedStyle ? cc = function(b, c) {
		var d, e, f, g, h = a.getComputedStyle(b, null),
			i = b.style;
		return h && (d = h.getPropertyValue(c) || h[c], d === "" && !$.contains(b.ownerDocument, b) && (d = $.style(b, c)), lc.test(d) && jc.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
	} : P.documentElement.currentStyle && (cc = function(a, b) {
		var c, d, e = a.currentStyle && a.currentStyle[b],
			f = a.style;
		return e == null && f && f[b] && (e = f[b]), lc.test(e) && !hc.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), e === "" ? "auto" : e
	}), $.each(["height", "width"], function(a, b) {
		$.cssHooks[b] = {
			get: function(a, c, d) {
				if (c) return a.offsetWidth === 0 && ic.test(cc(a, "display")) ? $.swap(a, oc, function() {
					return v(a, b, d)
				}) : v(a, b, d)
			},
			set: function(a, c, d) {
				return t(a, c, d ? u(a, b, d, $.support.boxSizing && $.css(a, "boxSizing") === "border-box") : 0)
			}
		}
	}), $.support.opacity || ($.cssHooks.opacity = {
		get: function(a, b) {
			return gc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle,
				e = $.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
				f = d && d.filter || c.filter || "";
			c.zoom = 1;
			if (b >= 1 && $.trim(f.replace(fc, "")) === "" && c.removeAttribute) {
				c.removeAttribute("filter");
				if (d && !d.filter) return
			}
			c.filter = fc.test(f) ? f.replace(fc, e) : f + " " + e
		}
	}), $(function() {
		$.support.reliableMarginRight || ($.cssHooks.marginRight = {
			get: function(a, b) {
				return $.swap(a, {
					display: "inline-block"
				}, function() {
					if (b) return cc(a, "marginRight")
				})
			}
		}), !$.support.pixelPosition && $.fn.position && $.each(["top", "left"], function(a, b) {
			$.cssHooks[b] = {
				get: function(a, c) {
					if (c) {
						var d = cc(a, b);
						return lc.test(d) ? $(a).position()[b] + "px" : d
					}
				}
			}
		})
	}), $.expr && $.expr.filters && ($.expr.filters.hidden = function(a) {
		return a.offsetWidth === 0 && a.offsetHeight === 0 || !$.support.reliableHiddenOffsets && (a.style && a.style.display || cc(a, "display")) === "none"
	}, $.expr.filters.visible = function(a) {
		return !$.expr.filters.hidden(a)
	}), $.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(a, b) {
		$.cssHooks[a + b] = {
			expand: function(c) {
				var d, e = typeof c == "string" ? c.split(" ") : [c],
					f = {};
				for (d = 0; d < 4; d++) f[a + qc[d] + b] = e[d] || e[d - 2] || e[0];
				return f
			}
		}, jc.test(a) || ($.cssHooks[a + b].set = t)
	});
	var tc = /%20/g,
		uc = /\[\]$/,
		vc = /\r?\n/g,
		wc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		xc = /^(?:select|textarea)/i;
	$.fn.extend({
		serialize: function() {
			return $.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? $.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || xc.test(this.nodeName) || wc.test(this.type))
			}).map(function(a, b) {
				var c = $(this).val();
				return c == null ? null : $.isArray(c) ? $.map(c, function(a, c) {
					return {
						name: b.name,
						value: a.replace(vc, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(vc, "\r\n")
				}
			}).get()
		}
	}), $.param = function(a, c) {
		var d, e = [],
			f = function(a, b) {
				b = $.isFunction(b) ? b() : b == null ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
			};
		c === b && (c = $.ajaxSettings && $.ajaxSettings.traditional);
		if ($.isArray(a) || a.jquery && !$.isPlainObject(a)) $.each(a, function() {
			f(this.name, this.value)
		});
		else
			for (d in a) x(d, a[d], c, f);
		return e.join("&").replace(tc, "+")
	};
	var yc, zc, Ac = /#.*$/,
		Bc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Cc = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
		Dc = /^(?:GET|HEAD)$/,
		Ec = /^\/\//,
		Fc = /\?/,
		Gc = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Hc = /([?&])_=[^&]*/,
		Ic = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Jc = $.fn.load,
		Kc = {},
		Lc = {},
		Mc = ["*/"] + ["*"];
	try {
		zc = Q.href
	} catch (Nc) {
		zc = P.createElement("a"), zc.href = "", zc = zc.href
	}
	yc = Ic.exec(zc.toLowerCase()) || [], $.fn.load = function(a, c, d) {
		if (typeof a != "string" && Jc) return Jc.apply(this, arguments);
		if (!this.length) return this;
		var e, f, g, h = this,
			i = a.indexOf(" ");
		return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), $.isFunction(c) ? (d = c, c = b) : c && typeof c == "object" && (f = "POST"), $.ajax({
			url: a,
			type: f,
			dataType: "html",
			data: c,
			complete: function(a, b) {
				d && h.each(d, g || [a.responseText, b, a])
			}
		}).done(function(a) {
			g = arguments, h.html(e ? $("<div>").append(a.replace(Gc, "")).find(e) : a)
		}), this
	}, $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		$.fn[b] = function(a) {
			return this.on(b, a)
		}
	}), $.each(["get", "post"], function(a, c) {
		$[c] = function(a, d, e, f) {
			return $.isFunction(d) && (f = f || e, e = d, d = b), $.ajax({
				type: c,
				url: a,
				data: d,
				success: e,
				dataType: f
			})
		}
	}), $.extend({
		getScript: function(a, c) {
			return $.get(a, b, c, "script")
		},
		getJSON: function(a, b, c) {
			return $.get(a, b, c, "json")
		},
		ajaxSetup: function(a, b) {
			return b ? A(a, $.ajaxSettings) : (b = a, a = $.ajaxSettings), A(a, b), a
		},
		ajaxSettings: {
			url: zc,
			isLocal: Cc.test(yc[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": Mc
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": a.String,
				"text html": !0,
				"text json": $.parseJSON,
				"text xml": $.parseXML
			},
			flatOptions: {
				context: !0,
				url: !0
			}
		},
		ajaxPrefilter: y(Kc),
		ajaxTransport: y(Lc),
		ajax: function(a, c) {
			function d(a, c, d, g) {
				var j, l, s, t, v, x = c;
				if (u === 2) return;
				u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0, d && (t = B(m, w, d));
				if (a >= 200 && a < 300 || a === 304) m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && ($.lastModified[e] = v), v = w.getResponseHeader("Etag"), v && ($.etag[e] = v)), a === 304 ? (x = "notmodified", j = !0) : (j = C(m, t), x = j.state, l = j.data, s = j.error, j = !s);
				else {
					s = x;
					if (!x || a) x = "error", a < 0 && (a = 0)
				}
				w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --$.active || $.event.trigger("ajaxStop"))
			}
			typeof a == "object" && (c = a, a = b), c = c || {};
			var e, f, g, h, i, j, k, l, m = $.ajaxSetup({}, c),
				n = m.context || m,
				o = n !== m && (n.nodeType || n instanceof $) ? $(n) : $.event,
				p = $.Deferred(),
				q = $.Callbacks("once memory"),
				r = m.statusCode || {},
				s = {},
				t = {},
				u = 0,
				v = "canceled",
				w = {
					readyState: 0,
					setRequestHeader: function(a, b) {
						if (!u) {
							var c = a.toLowerCase();
							a = t[c] = t[c] || a, s[a] = b
						}
						return this
					},
					getAllResponseHeaders: function() {
						return u === 2 ? f : null
					},
					getResponseHeader: function(a) {
						var c;
						if (u === 2) {
							if (!g) {
								g = {};
								while (c = Bc.exec(f)) g[c[1].toLowerCase()] = c[2]
							}
							c = g[a.toLowerCase()]
						}
						return c === b ? null : c
					},
					overrideMimeType: function(a) {
						return u || (m.mimeType = a), this
					},
					abort: function(a) {
						return a = a || v, h && h.abort(a), d(0, a), this
					}
				};
			p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function(a) {
				if (a) {
					var b;
					if (u < 2)
						for (b in a) r[b] = [r[b], a[b]];
					else b = a[w.status], w.always(b)
				}
				return this
			}, m.url = ((a || m.url) + "").replace(Ac, "").replace(Ec, yc[1] + "//"), m.dataTypes = $.trim(m.dataType || "*").toLowerCase().split(bb), m.crossDomain == null && (j = Ic.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === yc[1] && j[2] === yc[2] && (j[3] || (j[1] === "http:" ? 80 : 443)) == (yc[3] || (yc[1] === "http:" ? 80 : 443)))), m.data && m.processData && typeof m.data != "string" && (m.data = $.param(m.data, m.traditional)), z(Kc, m, c, w);
			if (u === 2) return w;
			k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Dc.test(m.type), k && $.active++ === 0 && $.event.trigger("ajaxStart");
			if (!m.hasContent) {
				m.data && (m.url += (Fc.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url;
				if (m.cache === !1) {
					var x = $.now(),
						y = m.url.replace(Hc, "$1_=" + x);
					m.url = y + (y === m.url ? (Fc.test(m.url) ? "&" : "?") + "_=" + x : "")
				}
			}(m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, $.lastModified[e] && w.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && w.setRequestHeader("If-None-Match", $.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + (m.dataTypes[0] !== "*" ? ", " + Mc + "; q=0.01" : "") : m.accepts["*"]);
			for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
			if (!m.beforeSend || m.beforeSend.call(n, w, m) !== !1 && u !== 2) {
				v = "abort";
				for (l in {
						success: 1,
						error: 1,
						complete: 1
					}) w[l](m[l]);
				h = z(Lc, m, c, w);
				if (!h) d(-1, "No Transport");
				else {
					w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
						w.abort("timeout")
					}, m.timeout));
					try {
						u = 1, h.send(s, d)
					} catch (A) {
						if (!(u < 2)) throw A;
						d(-1, A)
					}
				}
				return w
			}
			return w.abort()
		},
		active: 0,
		lastModified: {},
		etag: {}
	});
	var Oc = [],
		Pc = /\?/,
		Qc = /(=)\?(?=&|$)|\?\?/,
		Rc = $.now();
	$.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var a = Oc.pop() || $.expando + "_" + Rc++;
			return this[a] = !0, a
		}
	}), $.ajaxPrefilter("json jsonp", function(c, d, e) {
		var f, g, h, i = c.data,
			j = c.url,
			k = c.jsonp !== !1,
			l = k && Qc.test(j),
			m = k && !l && typeof i == "string" && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Qc.test(i);
		if (c.dataTypes[0] === "jsonp" || l || m) return f = c.jsonpCallback = $.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(Qc, "$1" + f) : m ? c.data = i.replace(Qc, "$1" + f) : k && (c.url += (Pc.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
			return h || $.error(f + " was not called"), h[0]
		}, c.dataTypes[0] = "json", a[f] = function() {
			h = arguments
		}, e.always(function() {
			a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Oc.push(f)), h && $.isFunction(g) && g(h[0]), h = g = b
		}), "script"
	}), $.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				return $.globalEval(a), a
			}
		}
	}), $.ajaxPrefilter("script", function(a) {
		a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), $.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var c, d = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
			return {
				send: function(e, f) {
					c = P.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
						if (e || !c.readyState || /loaded|complete/.test(c.readyState)) c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success")
					}, d.insertBefore(c, d.firstChild)
				},
				abort: function() {
					c && c.onload(0, 1)
				}
			}
		}
	});
	var Sc, Tc = a.ActiveXObject ? function() {
			for (var a in Sc) Sc[a](0, 1)
		} : !1,
		Uc = 0;
	$.ajaxSettings.xhr = a.ActiveXObject ? function() {
			return !this.isLocal && D() || E()
		} : D,
		function(a) {
			$.extend($.support, {
				ajax: !!a,
				cors: !!a && "withCredentials" in a
			})
		}($.ajaxSettings.xhr()), $.support.ajax && $.ajaxTransport(function(c) {
			if (!c.crossDomain || $.support.cors) {
				var d;
				return {
					send: function(e, f) {
						var g, h, i = c.xhr();
						c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async);
						if (c.xhrFields)
							for (h in c.xhrFields) i[h] = c.xhrFields[h];
						c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
						try {
							for (h in e) i.setRequestHeader(h, e[h])
						} catch (j) {}
						i.send(c.hasContent && c.data || null), d = function(a, e) {
							var h, j, k, l, m;
							try {
								if (d && (e || i.readyState === 4)) {
									d = b, g && (i.onreadystatechange = $.noop, Tc && delete Sc[g]);
									if (e) i.readyState !== 4 && i.abort();
									else {
										h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
										try {
											l.text = i.responseText
										} catch (n) {}
										try {
											j = i.statusText
										} catch (n) {
											j = ""
										}!h && c.isLocal && !c.crossDomain ? h = l.text ? 200 : 404 : h === 1223 && (h = 204)
									}
								}
							} catch (o) {
								e || f(-1, o)
							}
							l && f(h, j, l, k)
						}, c.async ? i.readyState === 4 ? setTimeout(d, 0) : (g = ++Uc, Tc && (Sc || (Sc = {}, $(a).unload(Tc)), Sc[g] = d), i.onreadystatechange = d) : d()
					},
					abort: function() {
						d && d(0, 1)
					}
				}
			}
		});
	var Vc, Wc, Xc = /^(?:toggle|show|hide)$/,
		Yc = new RegExp("^(?:([-+])=|)(" + _ + ")([a-z%]*)$", "i"),
		Zc = /queueHooks$/,
		$c = [J],
		_c = {
			"*": [function(a, b) {
				var c, d, e = this.createTween(a, b),
					f = Yc.exec(b),
					g = e.cur(),
					h = +g || 0,
					i = 1,
					j = 20;
				if (f) {
					c = +f[2], d = f[3] || ($.cssNumber[a] ? "" : "px");
					if (d !== "px" && h) {
						h = $.css(e.elem, a, !0) || c || 1;
						do i = i || ".5", h /= i, $.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && i !== 1 && --j)
					}
					e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
				}
				return e
			}]
		};
	$.Animation = $.extend(H, {
		tweener: function(a, b) {
			$.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			var c, d = 0,
				e = a.length;
			for (; d < e; d++) c = a[d], _c[c] = _c[c] || [], _c[c].unshift(b)
		},
		prefilter: function(a, b) {
			b ? $c.unshift(a) : $c.push(a)
		}
	}), $.Tween = K, K.prototype = {
		constructor: K,
		init: function(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || ($.cssNumber[c] ? "" : "px")
		},
		cur: function() {
			var a = K.propHooks[this.prop];
			return a && a.get ? a.get(this) : K.propHooks._default.get(this)
		},
		run: function(a) {
			var b, c = K.propHooks[this.prop];
			return this.options.duration ? this.pos = b = $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : K.propHooks._default.set(this), this
		}
	}, K.prototype.init.prototype = K.prototype, K.propHooks = {
		_default: {
			get: function(a) {
				var b;
				return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = $.css(a.elem, a.prop, !1, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
			},
			set: function(a) {
				$.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (a.elem.style[$.cssProps[a.prop]] != null || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
			}
		}
	}, K.propHooks.scrollTop = K.propHooks.scrollLeft = {
		set: function(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
		}
	}, $.each(["toggle", "show", "hide"], function(a, b) {
		var c = $.fn[b];
		$.fn[b] = function(d, e, f) {
			return d == null || typeof d == "boolean" || !a && $.isFunction(d) && $.isFunction(e) ? c.apply(this, arguments) : this.animate(L(b, !0), d, e, f)
		}
	}), $.fn.extend({
		fadeTo: function(a, b, c, d) {
			return this.filter(r).css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = $.isEmptyObject(a),
				f = $.speed(b, c, d),
				g = function() {
					var b = H(this, $.extend({}, a), f);
					e && b.stop(!0)
				};
			return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		},
		stop: function(a, c, d) {
			var e = function(a) {
				var b = a.stop;
				delete a.stop, b(d)
			};
			return typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
				var b = !0,
					c = a != null && a + "queueHooks",
					f = $.timers,
					g = $._data(this);
				if (c) g[c] && g[c].stop && e(g[c]);
				else
					for (c in g) g[c] && g[c].stop && Zc.test(c) && e(g[c]);
				for (c = f.length; c--;) f[c].elem === this && (a == null || f[c].queue === a) && (f[c].anim.stop(d), b = !1, f.splice(c, 1));
				(b || !d) && $.dequeue(this, a)
			})
		}
	}), $.each({
		slideDown: L("show"),
		slideUp: L("hide"),
		slideToggle: L("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		$.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), $.speed = function(a, b, c) {
		var d = a && typeof a == "object" ? $.extend({}, a) : {
			complete: c || !c && b || $.isFunction(a) && a,
			duration: a,
			easing: c && b || b && !$.isFunction(b) && b
		};
		d.duration = $.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default;
		if (d.queue == null || d.queue === !0) d.queue = "fx";
		return d.old = d.complete, d.complete = function() {
			$.isFunction(d.old) && d.old.call(this), d.queue && $.dequeue(this, d.queue)
		}, d
	}, $.easing = {
		linear: function(a) {
			return a
		},
		swing: function(a) {
			return .5 - Math.cos(a * Math.PI) / 2
		}
	}, $.timers = [], $.fx = K.prototype.init, $.fx.tick = function() {
		var a, c = $.timers,
			d = 0;
		Vc = $.now();
		for (; d < c.length; d++) a = c[d], !a() && c[d] === a && c.splice(d--, 1);
		c.length || $.fx.stop(), Vc = b
	}, $.fx.timer = function(a) {
		a() && $.timers.push(a) && !Wc && (Wc = setInterval($.fx.tick, $.fx.interval))
	}, $.fx.interval = 13, $.fx.stop = function() {
		clearInterval(Wc), Wc = null
	}, $.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, $.fx.step = {}, $.expr && $.expr.filters && ($.expr.filters.animated = function(a) {
		return $.grep($.timers, function(b) {
			return a === b.elem
		}).length
	});
	var ad = /^(?:body|html)$/i;
	$.fn.offset = function(a) {
		if (arguments.length) return a === b ? this : this.each(function(b) {
			$.offset.setOffset(this, a, b)
		});
		var c, d, e, f, g, h, i, j = {
				top: 0,
				left: 0
			},
			k = this[0],
			l = k && k.ownerDocument;
		if (!l) return;
		return (d = l.body) === k ? $.offset.bodyOffset(k) : (c = l.documentElement, $.contains(c, k) ? (typeof k.getBoundingClientRect != "undefined" && (j = k.getBoundingClientRect()), e = M(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
			top: j.top + h - f,
			left: j.left + i - g
		}) : j)
	}, $.offset = {
		bodyOffset: function(a) {
			var b = a.offsetTop,
				c = a.offsetLeft;
			return $.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat($.css(a, "marginTop")) || 0, c += parseFloat($.css(a, "marginLeft")) || 0), {
				top: b,
				left: c
			}
		},
		setOffset: function(a, b, c) {
			var d = $.css(a, "position");
			d === "static" && (a.style.position = "relative");
			var e = $(a),
				f = e.offset(),
				g = $.css(a, "top"),
				h = $.css(a, "left"),
				i = (d === "absolute" || d === "fixed") && $.inArray("auto", [g, h]) > -1,
				j = {},
				k = {},
				l, m;
			i ? (k = e.position(), l = k.top, m = k.left) : (l = parseFloat(g) || 0, m = parseFloat(h) || 0), $.isFunction(b) && (b = b.call(a, c, f)), b.top != null && (j.top = b.top - f.top + l), b.left != null && (j.left = b.left - f.left + m), "using" in b ? b.using.call(a, j) : e.css(j)
		}
	}, $.fn.extend({
		position: function() {
			if (!this[0]) return;
			var a = this[0],
				b = this.offsetParent(),
				c = this.offset(),
				d = ad.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			return c.top -= parseFloat($.css(a, "marginTop")) || 0, c.left -= parseFloat($.css(a, "marginLeft")) || 0, d.top += parseFloat($.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat($.css(b[0], "borderLeftWidth")) || 0, {
				top: c.top - d.top,
				left: c.left - d.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || P.body;
				while (a && !ad.test(a.nodeName) && $.css(a, "position") === "static") a = a.offsetParent;
				return a || P.body
			})
		}
	}), $.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(a, c) {
		var d = /Y/.test(c);
		$.fn[a] = function(e) {
			return $.access(this, function(a, e, f) {
				var g = M(a);
				if (f === b) return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
				g ? g.scrollTo(d ? $(g).scrollLeft() : f, d ? f : $(g).scrollTop()) : a[e] = f
			}, a, e, arguments.length, null)
		}
	}), $.each({
		Height: "height",
		Width: "width"
	}, function(a, c) {
		$.each({
			padding: "inner" + a,
			content: c,
			"": "outer" + a
		}, function(d, e) {
			$.fn[e] = function(e, f) {
				var g = arguments.length && (d || typeof e != "boolean"),
					h = d || (e === !0 || f === !0 ? "margin" : "border");
				return $.access(this, function(c, d, e) {
					var f;
					return $.isWindow(c) ? c.document.documentElement["client" + a] : c.nodeType === 9 ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? $.css(c, d, e, h) : $.style(c, d, e, h)
				}, c, g ? e : b, g, null)
			}
		})
	}), a.jQuery = a.$ = $, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return $
	})
})(window);
window.log = function() {
	log.history = log.history || [];
	log.history.push(arguments);
	if (this.console) {
		arguments.callee = arguments.callee.caller;
		console.log(Array.prototype.slice.call(arguments))
	}
};
(function(a) {
	function b() {}
	for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; d = c.pop();) a[d] = a[d] || b
})(window.console = window.console || {});
(function(a) {
	var b = 0;
	a.fn.mobileMenu = function(c) {
		function d(c) {
			return c.attr("id") ? a("#mobileMenu_" + c.attr("id")).length > 0 : (b++, c.attr("id", "mm" + b), a("#mobileMenu_mm" + b).length > 0)
		}

		function e(b) {
			b.hide();
			a("#mobileMenu_" + b.attr("id")).show()
		}

		function f(b) {
			if (b.is("ul, ol")) {
				var c = '<select id="mobileMenu_' + b.attr("id") + '" class="mobileMenu">';
				c += '<option value="">' + h.topOptionText + "</option>";
				b.find("li").each(function() {
					var b = "",
						d = a(this).parents("ul, ol").length;
					for (i = 1; i < d; i++) b += h.indentString;
					d = a(this).find("a:first-child").attr("href");
					b += a(this).clone().children("ul, ol").remove().end().text();
					c += '<option value="' + d + '">' + b + "</option>"
				});
				c += "</select>";
				b.parent().append(c);
				a("#mobileMenu_" + b.attr("id")).change(function() {
					var b = a(this);
					if (b.val() !== null) document.location.href = b.val()
				});
				e(b)
			} else alert("mobileMenu will only work with UL or OL elements!")
		}

		function g(b) {
			a(window).width() < h.switchWidth && !d(b) ? f(b) : a(window).width() < h.switchWidth && d(b) ? e(b) : !(a(window).width() < h.switchWidth) && d(b) && (b.show(), a("#mobileMenu_" + b.attr("id")).hide())
		}
		var h = {
			switchWidth: 768,
			topOptionText: "Select a page",
			indentString: "&nbsp;&nbsp;&nbsp;"
		};
		return this.each(function() {
			c && a.extend(h, c);
			var b = a(this);
			a(window).resize(function() {
				g(b)
			});
			g(b)
		})
	}
})(jQuery);
(function(a) {
	var b = a.scrollTo = function(b, c, d) {
		a(window).scrollTo(b, c, d)
	};
	b.defaults = {
		axis: "xy",
		duration: parseFloat(a.fn.jquery) >= 1.3 ? 0 : 1,
		limit: true
	};
	b.window = function(b) {
		return a(window)._scrollable()
	};
	a.fn._scrollable = function() {
		return this.map(function() {
			var b = this,
				c = !b.nodeName || a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
			if (!c) return b;
			var d = (b.contentWindow || b).document || b.ownerDocument || b;
			return /webkit/i.test(navigator.userAgent) || d.compatMode == "BackCompat" ? d.body : d.documentElement
		})
	};
	a.fn.scrollTo = function(d, e, f) {
		if (typeof e == "object") {
			f = e;
			e = 0
		}
		if (typeof f == "function") f = {
			onAfter: f
		};
		if (d == "max") d = 9e9;
		f = a.extend({}, b.defaults, f);
		e = e || f.duration;
		f.queue = f.queue && f.axis.length > 1;
		if (f.queue) e /= 2;
		f.offset = c(f.offset);
		f.over = c(f.over);
		return this._scrollable().each(function() {
			if (d == null) return;
			var g = this,
				h = a(g),
				i = d,
				j, k = {},
				l = h.is("html,body");
			switch (typeof i) {
				case "number":
				case "string":
					if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(i)) {
						i = c(i);
						break
					}
					i = a(i, this);
					if (!i.length) return;
				case "object":
					if (i.is || i.style) j = (i = a(i)).offset()
			}
			a.each(f.axis.split(""), function(a, c) {
				var d = c == "x" ? "Left" : "Top",
					e = d.toLowerCase(),
					n = "scroll" + d,
					o = g[n],
					p = b.max(g, c);
				if (j) {
					k[n] = j[e] + (l ? 0 : o - h.offset()[e]);
					if (f.margin) {
						k[n] -= parseInt(i.css("margin" + d)) || 0;
						k[n] -= parseInt(i.css("border" + d + "Width")) || 0
					}
					k[n] += f.offset[e] || 0;
					if (f.over[e]) k[n] += i[c == "x" ? "width" : "height"]() * f.over[e]
				} else {
					var q = i[e];
					k[n] = q.slice && q.slice(-1) == "%" ? parseFloat(q) / 100 * p : q
				}
				if (f.limit && /^\d+$/.test(k[n])) k[n] = k[n] <= 0 ? 0 : Math.min(k[n], p);
				if (!a && f.queue) {
					if (o != k[n]) m(f.onAfterFirst);
					delete k[n]
				}
			});
			m(f.onAfter);

			function m(a) {
				h.animate(k, e, f.easing, a && function() {
					a.call(this, d, f)
				})
			}
		}).end()
	};
	b.max = function(b, c) {
		var d = c == "x" ? "Width" : "Height",
			e = "scroll" + d;
		if (!a(b).is("html,body")) return b[e] - a(b)[d.toLowerCase()]();
		var f = "client" + d,
			g = b.ownerDocument.documentElement,
			h = b.ownerDocument.body;
		return Math.max(g[e], h[e]) - Math.min(g[f], h[f])
	};

	function c(a) {
		return typeof a == "object" ? a : {
			top: a,
			left: a
		}
	}
})(jQuery);
(function(a) {
	function b(a, b) {
		for (var c = a, d = 0; a = a[b];) c.tagName == a.tagName && d++;
		return d
	}

	function c(a, c, d) {
		a = b(a, d);
		if (c == "odd" || c == "even") d = 2, a -= c != "odd";
		else {
			var e = c.indexOf("n");
			e > -1 ? (d = parseInt(c, 10) || parseInt(c.substring(0, e) + "1", 10), a -= (parseInt(c.substring(e + 1), 10) || 0) - 1) : (d = a + 1, a -= parseInt(c, 10) - 1)
		}
		return (d < 0 ? a <= 0 : a >= 0) && a % d == 0
	}
	var d = {
		"first-of-type": function(a) {
			return b(a, "previousSibling") == 0
		},
		"last-of-type": function(a) {
			return b(a, "nextSibling") == 0
		},
		"only-of-type": function(a) {
			return d["first-of-type"](a) && d["last-of-type"](a)
		},
		"nth-of-type": function(a, b, d) {
			return c(a, d[3], "previousSibling")
		},
		"nth-last-of-type": function(a, b, d) {
			return c(a, d[3], "nextSibling")
		}
	};
	a.extend(a.expr[":"], d)
})(jQuery); /*! http://mths.be/placeholder v1.8.5 by @mathias */
(function(a, b, c) {
	var d = "placeholder" in b.createElement("input"),
		e = "placeholder" in b.createElement("textarea");
	if (d && e) {
		c.fn.placeholder = function() {
			return this
		};
		c.fn.placeholder.input = c.fn.placeholder.textarea = true
	} else {
		c.fn.placeholder = function() {
			return this.filter((d ? "textarea" : ":input") + "[placeholder]").bind("focus.placeholder", g).bind("blur.placeholder", h).trigger("blur.placeholder").end()
		};
		c.fn.placeholder.input = d;
		c.fn.placeholder.textarea = e;
		c(function() {
			c("form").bind("submit.placeholder", function() {
				var a = c(".placeholder", this).each(g);
				setTimeout(function() {
					a.each(h)
				}, 10)
			})
		});
		c(a).bind("unload.placeholder", function() {
			c(".placeholder").val("")
		})
	}

	function f(a) {
		var b = {},
			d = /^jQuery\d+$/;
		c.each(a.attributes, function(a, c) {
			if (c.specified && !d.test(c.name)) {
				b[c.name] = c.value
			}
		});
		return b
	}

	function g() {
		var a = c(this);
		if (a.val() === a.attr("placeholder") && a.hasClass("placeholder")) {
			if (a.data("placeholder-password")) {
				a.hide().next().show().focus().attr("id", a.removeAttr("id").data("placeholder-id"))
			} else {
				a.val("").removeClass("placeholder")
			}
		}
	}

	function h() {
		var a, b = c(this),
			d = b,
			e = this.id;
		if (b.val() === "") {
			if (b.is(":password")) {
				if (!b.data("placeholder-textinput")) {
					try {
						a = b.clone().attr({
							type: "text"
						})
					} catch (h) {
						a = c("<input>").attr(c.extend(f(this), {
							type: "text"
						}))
					}
					a.removeAttr("name").data("placeholder-password", true).data("placeholder-id", e).bind("focus.placeholder", g);
					b.data("placeholder-textinput", a).data("placeholder-id", e).before(a)
				}
				b = b.removeAttr("id").hide().prev().attr("id", e).show()
			}
			b.addClass("placeholder").val(b.attr("placeholder"))
		} else {
			b.removeClass("placeholder")
		}
	}
})(this, document, jQuery);
(function(a, b) {
	var c = function(a, b, c) {
		var d;
		return function e() {
			var e = this,
				f = arguments;

			function g() {
				if (!c) a.apply(e, f);
				d = null
			}
			if (d) clearTimeout(d);
			else if (c) a.apply(e, f);
			d = setTimeout(g, b || 100)
		}
	};
	jQuery.fn[b] = function(a) {
		return a ? this.bind("resize", c(a)) : this.trigger(b)
	}
})(jQuery, "smartresize");
(function(a, b, c) {
	function d(a, b, c, d, e, f, g, h, i) {
		var k = !1,
			g = !0 === g && !0 === h,
			b = b || {};
		b.original || (b.original = {}, k = !0);
		b.properties = b.properties || {};
		b.secondary = b.secondary || {};
		for (var h = b.meta, l = b.original, m = b.properties, n = b.secondary, o = j.length - 1; 0 <= o; o--) {
			var p = j[o] + "transition-property",
				q = j[o] + "transition-duration",
				r = j[o] + "transition-timing-function",
				c = g ? j[o] + "transform" : c;
			k && (l[p] = a.css(p) || "", l[q] = a.css(q) || "", l[r] = a.css(r) || "");
			n[c] = g ? (!0 === i || !0 === t && !1 !== i) && s ? "translate3d(" + h.left + "px, " + h.top + "px, 0)" : "translate(" + h.left + "px," + h.top + "px)" : f;
			m[p] = (m[p] ? m[p] + "," : "") + c;
			m[q] = (m[q] ? m[q] + "," : "") + d + "ms";
			m[r] = (m[r] ? m[r] + "," : "") + e
		}
		return b
	}

	function e(a) {
		for (var b in a) return !1;
		return !0
	}

	function f(a) {
		return parseFloat(a.replace(a.match(/\D+$/), ""))
	}

	function g(a) {
		var b = !0;
		a.each(function(a, c) {
			return b = b && c.ownerDocument
		});
		return b
	}
	var h = "top right bottom left opacity height width".split(" "),
		i = ["top", "right", "bottom", "left"],
		j = ["-webkit-", "-moz-", "-o-", ""],
		k = ["avoidTransforms", "useTranslate3d", "leaveTransforms"],
		l = /^([+-]=)?([\d+-.]+)(.*)$/,
		m = /([A-Z])/g,
		n = {
			secondary: {},
			meta: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			}
		},
		o = null,
		p = !1,
		q = (document.body || document.documentElement).style,
		r = void 0 !== q.WebkitTransition || void 0 !== q.MozTransition || void 0 !== q.OTransition || void 0 !== q.transition,
		s = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
		t = s;
	a.expr && a.expr.filters && (o = a.expr.filters.animated, a.expr.filters.animated = function(b) {
		return a(b).data("events") && a(b).data("events")["webkitTransitionEnd oTransitionEnd transitionend"] ? !0 : o.call(this, b)
	});
	a.extend({
		toggle3DByDefault: function() {
			return t = !t
		},
		toggleDisabledByDefault: function() {
			return p = !p
		}
	});
	a.fn.translation = function() {
		if (!this[0]) return null;
		var a = window.getComputedStyle(this[0], null),
			b = {
				x: 0,
				y: 0
			};
		if (a)
			for (var c = j.length - 1; 0 <= c; c--) {
				var d = a.getPropertyValue(j[c] + "transform");
				if (d && /matrix/i.test(d)) {
					a = d.replace(/^matrix\(/i, "").split(/, |\)$/g);
					b = {
						x: parseInt(a[4], 10),
						y: parseInt(a[5], 10)
					};
					break
				}
			}
		return b
	};
	a.fn.animate = function(c, m, o, q) {
		var c = c || {},
			s = !("undefined" !== typeof c.bottom || "undefined" !== typeof c.right),
			t = a.speed(m, o, q),
			u = this,
			v = 0,
			w = function() {
				v--;
				0 === v && "function" === typeof t.complete && t.complete.apply(u, arguments)
			},
			x;
		if (!(x = !0 === ("undefined" !== typeof c.avoidCSSTransitions ? c.avoidCSSTransitions : p)))
			if (!(x = !r))
				if (!(x = e(c))) {
					var y;
					a: {
						for (y in c)
							if (("width" == y || "height" == y) && ("show" == c[y] || "hide" == c[y] || "toggle" == c[y])) {
								y = !0;
								break a
							}
						y = !1
					}
					x = y || 0 >= t.duration || !0 === a.fn.animate.defaults.avoidTransforms && !1 !== c.avoidTransforms
				}
		return x ? b.apply(this, arguments) : this[!0 === t.queue ? "queue" : "each"](function() {
			var m = a(this),
				o = a.extend({}, t),
				p = function(b) {
					var d = m.data("jQe") || {
							original: {}
						},
						e = {};
					if (2 == b.eventPhase) {
						if (!0 !== c.leaveTransforms) {
							for (b = j.length - 1; 0 <= b; b--) e[j[b] + "transform"] = "";
							if (s && "undefined" !== typeof d.meta)
								for (var b = 0, f; f = i[b]; ++b) e[f] = d.meta[f + "_o"] + "px", a(this).css(f, e[f])
						}
						m.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(d.original).css(e).data("jQe", null);
						"hide" === c.opacity && m.css({
							display: "none",
							opacity: ""
						});
						w.call(this)
					}
				},
				q = {
					bounce: "cubic-bezier(0.0, 0.35, .5, 1.3)",
					linear: "linear",
					swing: "ease-in-out",
					easeInQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
					easeInCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
					easeInQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
					easeInQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
					easeInSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
					easeInExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
					easeInCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
					easeInBack: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
					easeOutQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
					easeOutCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
					easeOutQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
					easeOutQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
					easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
					easeOutExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
					easeOutCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
					easeOutBack: "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
					easeInOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
					easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
					easeInOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
					easeInOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
					easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
					easeInOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
					easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
					easeInOutBack: "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
				},
				r = {},
				q = q[o.easing || "swing"] ? q[o.easing || "swing"] : o.easing || "swing",
				u;
			for (u in c)
				if (-1 === a.inArray(u, k)) {
					var x = -1 < a.inArray(u, i),
						y;
					var z = m,
						A = c[u],
						B = u,
						C = x && !0 !== c.avoidTransforms;
					if ("d" == B) y = void 0;
					else if (g(z)) {
						var D = l.exec(A);
						y = "auto" === z.css(B) ? 0 : z.css(B);
						y = "string" == typeof y ? f(y) : y;
						"string" == typeof A && f(A);
						var C = !0 === C ? 0 : y,
							E = z.is(":hidden"),
							F = z.translation();
						"left" == B && (C = parseInt(y, 10) + F.x);
						"right" == B && (C = parseInt(y, 10) + F.x);
						"top" == B && (C = parseInt(y, 10) + F.y);
						"bottom" == B && (C = parseInt(y, 10) + F.y);
						!D && "show" == A ? (C = 1, E && z.css({
							display: "block",
							opacity: 0
						})) : !D && "hide" == A && (C = 0);
						D ? (z = parseFloat(D[2]), D[1] && (z = ("-=" === D[1] ? -1 : 1) * z + parseInt(C, 10)), y = z) : y = C
					} else y = void 0;
					if (D = !0 !== c.avoidTransforms)
						if (D = u, z = y, A = m, g(A)) {
							B = -1 < a.inArray(D, h);
							if (("width" == D || "height" == D || "opacity" == D) && parseFloat(z) === parseFloat(A.css(D))) B = !1;
							D = B
						} else D = !1;
					if (D) {
						D = m;
						z = u;
						A = o.duration;
						B = q;
						y = x && !0 === c.avoidTransforms ? y + "px" : y;
						var x = x && !0 !== c.avoidTransforms,
							C = s,
							E = !0 === c.useTranslate3d,
							F = (F = D.data("jQe")) && !e(F) ? F : a.extend(!0, {}, n),
							G = y;
						if (-1 < a.inArray(z, i)) {
							var H = F.meta,
								I = f(D.css(z)) || 0,
								J = z + "_o",
								G = y - I;
							H[z] = G;
							H[J] = "auto" == D.css(z) ? 0 + G : I + G || 0;
							F.meta = H;
							C && 0 === G && (G = 0 - H[J], H[z] = G, H[J] = 0)
						}
						D.data("jQe", d(D, F, z, A, B, G, x, C, E))
					} else r[u] = c[u]
				}
			m.unbind("webkitTransitionEnd oTransitionEnd transitionend");
			if ((u = m.data("jQe")) && !e(u) && !e(u.secondary)) {
				v++;
				m.css(u.properties);
				var K = u.secondary;
				setTimeout(function() {
					m.bind("webkitTransitionEnd oTransitionEnd transitionend", p).css(K)
				})
			} else o.queue = !1;
			e(r) || (v++, b.apply(m, [r, {
				duration: o.duration,
				easing: a.easing[o.easing] ? o.easing : a.easing.swing ? "swing" : "linear",
				complete: w,
				queue: o.queue
			}]));
			return !0
		})
	};
	a.fn.animate.defaults = {};
	a.fn.stop = function(b, d, f) {
		if (!r) return c.apply(this, [b, d]);
		b && this.queue([]);
		this.each(function() {
			var g = a(this),
				h = g.data("jQe");
			if (h && !e(h)) {
				var i, k = {};
				if (d) {
					if (k = h.secondary, !f && void 0 !== typeof h.meta.left_o || void 0 !== typeof h.meta.top_o) {
						k.left = void 0 !== typeof h.meta.left_o ? h.meta.left_o : "auto";
						k.top = void 0 !== typeof h.meta.top_o ? h.meta.top_o : "auto";
						for (i = j.length - 1; 0 <= i; i--) k[j[i] + "transform"] = ""
					}
				} else if (!e(h.secondary)) {
					var l = window.getComputedStyle(g[0], null);
					if (l)
						for (var n in h.secondary)
							if (h.secondary.hasOwnProperty(n) && (n = n.replace(m, "-$1").toLowerCase(), k[n] = l.getPropertyValue(n), !f && /matrix/i.test(k[n]))) {
								i = k[n].replace(/^matrix\(/i, "").split(/, |\)$/g);
								k.left = parseFloat(i[4]) + parseFloat(g.css("left")) + "px" || "auto";
								k.top = parseFloat(i[5]) + parseFloat(g.css("top")) + "px" || "auto";
								for (i = j.length - 1; 0 <= i; i--) k[j[i] + "transform"] = ""
							}
				}
				g.unbind("webkitTransitionEnd oTransitionEnd transitionend");
				g.css(h.original).css(k).data("jQe", null)
			} else c.apply(g, [b, d])
		});
		return this
	}
})(jQuery, jQuery.fn.animate, jQuery.fn.stop);
(function(a, b, c, d) {
	var e = function(b, c) {
		this.elem = b;
		this.$elem = a(b);
		this.options = c;
		this.metadata = this.$elem.data("swipe-options")
	};
	e.prototype = {
		defaults: {
			left: function(a) {},
			right: function(a) {},
			threshold: {
				x: 100,
				y: 25
			}
		},
		init: function() {
			this.config = a.extend({}, this.defaults, this.options, this.metadata);
			this.coords = {
				start: {
					x: 0,
					y: 0
				},
				end: {
					x: 0,
					y: 0
				}
			};
			if (this.elem.addEventListener) {
				this.elem.addEventListener("touchcancel", a.proxy(this.touchCancel, this), false);
				this.elem.addEventListener("touchend", a.proxy(this.touchEnd, this), false);
				this.elem.addEventListener("touchmove", a.proxy(this.touchMove, this), false);
				this.elem.addEventListener("touchstart", a.proxy(this.touchStart, this), false)
			}
			return this
		},
		touchCancel: function(a) {},
		touchEnd: function(a) {
			var b = {
				x: this.coords.start.x - this.coords.end.x,
				y: this.coords.start.y - this.coords.end.y
			};
			if (b.y < this.config.threshold.y && b.y > this.config.threshold.y * -1) {
				if (b.x > this.config.threshold.x) {
					this.config.left()
				}
				if (b.x < this.config.threshold.x * -1) {
					this.config.right()
				}
			}
		},
		touchMove: function(a) {
			a.preventDefault();
			var b = a.targetTouches[0];
			this.coords.end = {
				x: b.pageX,
				y: b.pageY
			}
		},
		touchStart: function(a) {
			var b = a.targetTouches[0];
			this.coords = {
				start: {
					x: b.pageX,
					y: b.pageY
				},
				end: {
					x: b.pageX,
					y: b.pageY
				}
			}
		}
	};
	e.defaults = e.prototype.defaults;
	a.fn.swipe = function(a) {
		return this.each(function() {
			new e(this, a).init()
		})
	}
})(jQuery, window, document);
jQuery.onFontResize = function(a) {
	a(document).ready(function() {
		var b = a("<iframe />").attr("id", "frame-onFontResize" + Date.parse(new Date)).addClass("div-onfontresize").css({
			width: "100em",
			height: "10px",
			position: "absolute",
			borderWidth: 0,
			top: "-5000px",
			left: "-5000px"
		}).appendTo("body");
		if (a.browser.msie) {
			b.bind("resize", function() {
				a.onFontResize.trigger(b[0].offsetWidth / 100)
			})
		} else {
			var c = b[0].contentWindow || b[0].contentDocument || b[0].document;
			c = c.document || c;
			c.open();
			c.write("<scri" + 'pt>window.onload = function(){var em = parent.jQuery(".div-onfontresize")[0];window.onresize = function(){if(parent.jQuery.onFontResize){parent.jQuery.onFontResize.trigger(em.offsetWidth / 100);}}};</scri' + "pt>");
			c.close()
		}
		jQuery.onFontResize.initialSize = b[0].offsetWidth / 100
	});
	return {
		trigger: function(b) {
			a(document).trigger("fontresize", [b])
		}
	}
}(jQuery);
(function(a, b) {
	var c = a.easing,
		d = "ease";

	function e(a) {
		return function(b) {
			return 1 - a(1 - b)
		}
	}

	function f(a) {
		return function(b) {
			return .5 * (b < .5 ? a(2 * b) : 2 - a(2 - 2 * b))
		}
	}

	function g(a, b, g) {
		var h = g ? b() : b,
			i = g ? b(g) : b;
		c[d + "In" + a] = h;
		c[d + "Out" + a] = e(h);
		c[d + "InOut" + a] = f(i)
	}

	function h(a) {
		return function(b) {
			return Math.pow(b, a)
		}
	}
	g("Quad", h(2));
	g("Cubic", h(3));
	g("Quart", h(4));
	g("Quint", h(5));
	g("Sine", function(a) {
		return 1 - Math.cos(a * Math.PI / 2)
	});
	g("Expo", function(a) {
		return Math.pow(2, 10 * (a - 1))
	});
	g("Circ", function(a) {
		return 1 - Math.sqrt(1 - a * a)
	});
	var i = function(a) {
		if (a === b) a = 1.70158;
		return function(b) {
			return b * b * ((a + 1) * b - a)
		}
	};
	g("Back", i, 1.70158 * 1.525);
	g("Bounce", function(a) {
		var b = 2.75,
			c = 7.5625,
			d = 0;
		d = a < .25 / b ? c * (a -= .125 / b) * a + .984375 : a < .75 / b ? c * (a -= .5 / b) * a + .9375 : a < 1.75 / b ? c * (a -= 1.25 / b) * a + .75 : c * --a * a;
		return 1 - d
	});
	var j = function(a) {
		if (a === b) a = .3;
		return function(b) {
			if (b == !!b) return b;
			var c = 2 * Math.PI,
				d = a / c * Math.asin(1);
			return -(Math.pow(2, 10 * --b) * Math.sin((b - d) * c / a))
		}
	};
	g("Elastic", j, .45)
})(jQuery);
(function(a) {
	a.fn.animateCSS = function(b, c, d) {
		return this.each(function() {
			var e = a(this);

			function f() {
				e.addClass("animated " + b);
				if (e.css("visibility") == "hidden") {
					e.css({
						visibility: "visible"
					})
				}
				if (e.is(":hidden")) {
					e.show()
				}
				e.bind("animationend webkitAnimationEnd oAnimationEnd", function() {
					e.removeClass("animated " + b);
					if (typeof d == "function") {
						d.call(this);
						e.unbind("animationend webkitAnimationEnd oAnimationEnd")
					}
				})
			}
			if (!c || typeof c == "function") {
				d = c;
				f()
			} else {
				var g = setTimeout(function() {
					f()
				}, c)
			}
		})
	}
})(jQuery);
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.4.2
 * @codingstandard ftlabs-jslint
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(a) {
	"use strict";
	var b, c = this;
	this.trackingClick = false;
	this.targetElement = null;
	this.layer = a;
	if (!a || !a.nodeType) {
		throw new TypeError("Layer must be a document node")
	}
	this.onClick = function() {
		FastClick.prototype.onClick.apply(c, arguments)
	};
	this.onTouchStart = function() {
		FastClick.prototype.onTouchStart.apply(c, arguments)
	};
	this.onTouchMove = function() {
		FastClick.prototype.onTouchMove.apply(c, arguments)
	};
	this.onTouchEnd = function() {
		FastClick.prototype.onTouchEnd.apply(c, arguments)
	};
	this.onTouchCancel = function() {
		FastClick.prototype.onTouchCancel.apply(c, arguments)
	};
	if (typeof window.ontouchstart === "undefined") {
		return
	}
	a.addEventListener("click", this.onClick, true);
	a.addEventListener("touchstart", this.onTouchStart, false);
	a.addEventListener("touchmove", this.onTouchMove, false);
	a.addEventListener("touchend", this.onTouchEnd, false);
	a.addEventListener("touchcancel", this.onTouchCancel, false);
	if (typeof a.onclick === "function") {
		b = a.onclick;
		a.addEventListener("click", function(a) {
			b(a)
		}, false);
		a.onclick = null
	}
}
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0;
FastClick.prototype.needsClick = function(a) {
	"use strict";
	switch (a.nodeName.toLowerCase()) {
		case "label":
		case "video":
			return true;
		default:
			return /\bneedsclick\b/.test(a.className)
	}
};
FastClick.prototype.needsFocus = function(a) {
	"use strict";
	switch (a.nodeName.toLowerCase()) {
		case "textarea":
		case "select":
			return true;
		case "input":
			switch (a.type) {
				case "button":
				case "checkbox":
				case "file":
				case "image":
				case "radio":
				case "submit":
					return false
			}
			return true;
		default:
			return /\bneedsfocus\b/.test(a.className)
	}
};
FastClick.prototype.maybeSendClick = function(a, b) {
	"use strict";
	var c, d;
	if (this.needsClick(a)) {
		return false
	}
	if (document.activeElement && document.activeElement !== a) {
		document.activeElement.blur()
	}
	d = b.changedTouches[0];
	c = document.createEvent("MouseEvents");
	c.initMouseEvent("click", true, true, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, false, false, false, false, 0, null);
	c.forwardedTouchEvent = true;
	a.dispatchEvent(c);
	return true
};
FastClick.prototype.onTouchStart = function(a) {
	"use strict";
	var b = a.targetTouches[0];
	this.trackingClick = true;
	this.targetElement = a.target;
	this.touchStartX = b.pageX;
	this.touchStartY = b.pageY;
	return true
};
FastClick.prototype.touchHasMoved = function(a) {
	"use strict";
	var b = a.targetTouches[0];
	if (Math.abs(b.pageX - this.touchStartX) > 10 || Math.abs(b.pageY - this.touchStartY) > 10) {
		return true
	}
	return false
};
FastClick.prototype.onTouchMove = function(a) {
	"use strict";
	if (!this.trackingClick) {
		return true
	}
	if (this.targetElement !== a.target || this.touchHasMoved(a)) {
		this.trackingClick = false;
		this.targetElement = null
	}
	return true
};
FastClick.prototype.findControl = function(a) {
	"use strict";
	if (a.control !== undefined) {
		return a.control
	}
	if (a.htmlFor) {
		return document.getElementById(a.htmlFor)
	}
	return a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
FastClick.prototype.onTouchEnd = function(a) {
	"use strict";
	var b, c = this.targetElement;
	if (!this.trackingClick) {
		return true
	}
	this.trackingClick = false;
	if (c.nodeName.toLowerCase() === "label") {
		b = this.findControl(c);
		if (b) {
			c.focus();
			if (this.deviceIsAndroid) {
				return false
			}
			if (this.maybeSendClick(b, a)) {
				a.preventDefault()
			}
			return false
		}
	} else if (this.needsFocus(c)) {
		c.focus();
		if (c.tagName.toLowerCase() !== "select") {
			a.preventDefault()
		}
		return false
	}
	if (!this.maybeSendClick(c, a)) {
		return false
	}
	a.preventDefault();
	return false
};
FastClick.prototype.onTouchCancel = function() {
	"use strict";
	this.trackingClick = false;
	this.targetElement = null
};
FastClick.prototype.onClick = function(a) {
	"use strict";
	var b;
	if (a.forwardedTouchEvent) {
		return true
	}
	if (!this.targetElement) {
		return true
	}
	b = this.targetElement;
	this.targetElement = null;
	if (!a.cancelable) {
		return true
	}
	if (a.target.type === "submit" && a.detail === 0) {
		return true
	}
	if (!this.needsClick(b)) {
		if (a.stopImmediatePropagation) {
			a.stopImmediatePropagation()
		}
		a.stopPropagation();
		a.preventDefault();
		return false
	}
	return true
};
FastClick.prototype.destroy = function() {
	"use strict";
	var a = this.layer;
	a.removeEventListener("click", this.onClick, true);
	a.removeEventListener("touchstart", this.onTouchStart, false);
	a.removeEventListener("touchmove", this.onTouchMove, false);
	a.removeEventListener("touchend", this.onTouchEnd, false);
	a.removeEventListener("touchcancel", this.onTouchCancel, false)
};
if (typeof define === "function" && define.amd) {
	define(function() {
		"use strict";
		return FastClick
	})
}
if (typeof module !== "undefined" && module.exports) {
	module.exports = function(a) {
		"use strict";
		return new FastClick(a)
	};
	module.exports.FastClick = FastClick
} /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia = window.matchMedia || function(a, b) {
	"use strict";
	var c, d = a.documentElement,
		e = d.firstElementChild || d.firstChild,
		f = a.createElement("body"),
		g = a.createElement("div");
	g.id = "mq-test-1";
	g.style.cssText = "position:absolute;top:-100em";
	f.style.background = "none";
	f.appendChild(g);
	return function(a) {
		g.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>';
		d.insertBefore(f, e);
		c = g.offsetWidth === 42;
		d.removeChild(f);
		return {
			matches: c,
			media: a
		}
	}
}(document);
(function(a, b) {
	a.fn.cssAnimationEnd = function(b) {
		var c = this;
		if (c.length > 0) {
			c.bind("animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd", function(d) {
				if (a.isFunction(b)) {
					b.call(c, d)
				}
			})
		}
		return c
	}
})(jQuery);
(function(a, b) {
	a.fn.cssTransitionEnd = function(b) {
		var c = this;
		if (c.length > 0) {
			c.bind("transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd", function(d) {
				if (a.isFunction(b)) {
					b.call(c, d)
				}
			})
		}
		return c
	}
})(jQuery);
(function(a) {
	window.MBP = window.MBP || {};
	MBP.viewportmeta = a.querySelector && a.querySelector('meta[name="viewport"]');
	MBP.ua = navigator.userAgent;
	MBP.scaleFix = function() {
		if (MBP.viewportmeta && /iPhone|iPad/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua)) {
			MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			a.addEventListener("gesturestart", MBP.gestureStart, false)
		}
	};
	MBP.gestureStart = function() {
		MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
	};
	MBP.hideUrlBar = function() {
		/iPhone/.test(MBP.ua) && !pageYOffset && !location.hash && setTimeout(function() {
			window.scrollTo(0, 1)
		}, 1e3)
	};
	MBP.fastButton = function(a, b) {
		this.element = a;
		this.handler = b;
		if (a.addEventListener) {
			a.addEventListener("touchstart", this, false);
			a.addEventListener("click", this, false)
		}
	};
	MBP.fastButton.prototype.handleEvent = function(a) {
		switch (a.type) {
			case "touchstart":
				this.onTouchStart(a);
				break;
			case "touchmove":
				this.onTouchMove(a);
				break;
			case "touchend":
				this.onClick(a);
				break;
			case "click":
				this.onClick(a);
				break
		}
	};
	MBP.fastButton.prototype.onTouchStart = function(b) {
		b.stopPropagation();
		this.element.addEventListener("touchend", this, false);
		a.body.addEventListener("touchmove", this, false);
		this.startX = b.touches[0].clientX;
		this.startY = b.touches[0].clientY;
		this.element.style.backgroundColor = "rgba(0,0,0,.7)"
	};
	MBP.fastButton.prototype.onTouchMove = function(a) {
		if (Math.abs(a.touches[0].clientX - this.startX) > 10 || Math.abs(a.touches[0].clientY - this.startY) > 10) {
			this.reset()
		}
	};
	MBP.fastButton.prototype.onClick = function(a) {
		a.stopPropagation();
		this.reset();
		this.handler(a);
		if (a.type == "touchend") {
			MBP.preventGhostClick(this.startX, this.startY)
		}
		this.element.style.backgroundColor = ""
	};
	MBP.fastButton.prototype.reset = function() {
		this.element.removeEventListener("touchend", this, false);
		a.body.removeEventListener("touchmove", this, false);
		this.element.style.backgroundColor = ""
	};
	MBP.preventGhostClick = function(a, b) {
		MBP.coords.push(a, b);
		window.setTimeout(function() {
			MBP.coords.splice(0, 2)
		}, 2500)
	};
	MBP.ghostClickHandler = function(a) {
		for (var b = 0, c = MBP.coords.length; b < c; b += 2) {
			var d = MBP.coords[b];
			var e = MBP.coords[b + 1];
			if (Math.abs(a.clientX - d) < 25 && Math.abs(a.clientY - e) < 25) {
				a.stopPropagation();
				a.preventDefault()
			}
		}
	};
	if (a.addEventListener) {
		a.addEventListener("click", MBP.ghostClickHandler, true)
	}
	MBP.coords = [];
	MBP.splash = function() {
		var b = navigator.platform === "iPad" ? "h/" : "l/";
		a.write('<link rel="apple-touch-startup-image" href="/img/' + b + 'splash.png" />')
	};
	MBP.autogrow = function(a, b) {
		function c(a) {
			var b = this.scrollHeight,
				c = this.clientHeight;
			if (b > c) {
				this.style.height = b + 3 * e + "px"
			}
		}
		var d = b ? b : 12,
			e = a.currentStyle ? a.currentStyle.lineHeight : getComputedStyle(a, null).lineHeight;
		e = e.indexOf("px") == -1 ? d : parseInt(e, 10);
		a.style.overflow = "hidden";
		a.addEventListener ? a.addEventListener("keyup", c, false) : a.attachEvent("onkeyup", c)
	}
})(document);
(function() {
	"use strict";
	var a = "31em";
	var b = "40em";
	var c = "62.66em";
	var d = "78.32em";
	var e = "93.98em";
	var f = function() {
		if (window.devicePixelRatio !== undefined) {
			return window.devicePixelRatio
		}
		return 1
	}();
	var g = {
		selector: ".resize",
		images: [],
		widths: [],
		heights: [],
		init: function() {
			g.images, g.widths, g.heights = [];
			g.gather()
		},
		gather: function() {
			$(g.selector).each(function(a, b) {
				b = $(b);
				var c = Math.round(b.width() * f),
					d = Math.round(b.height() * f);
				g.images.push(b.attr("rel"));
				g.widths.push(c);
				g.heights.push(d)
			});
			g.grabFromServer()
		},
		grabFromServer: function() {
			var a = "";
			for (var b = 0; b < g.images.length; b++) {
				a += "image[]=" + g.images[b] + "&width[]=" + g.widths[b] + "&height[]=" + g.heights[b];
				if (b < g.images.length - 1) {
					a += "&"
				}
			}
			$.ajax({
				type: "POST",
				url: "/resize.php",
				data: a,
				success: function(a) {
					$.each(a, function(a, b) {
						var c = $("img[rel='" + b.og_src + "']");
						c.attr("src", b.src);
						c.load(function() {
							c = $(this);
							if (c.closest(".image").length) {
								var a = c.closest(".image")
							} else {
								var a = c.parent()
							}
							a.addClass("img_loaded");
							if (c.css("opacity") === "0") {
								c.stop(true, false).animate({
									opacity: 1
								}, 500)
							}
						})
					})
				}
			})
		}
	};
	var h = {
		container: null,
		containerSelector: ".grid-wrap",
		unit: null,
		unitSelector: ".block-wrap",
		unitSpan: 0,
		numCols: null,
		shuffleOn: false,
		popped: false,
		setArray: [],
		setup: function() {
			if ($(h.containerSelector).length) {
				if ($(".shuffle.grid-wrap").length) {
					h.shuffleOn = true
				}
				h.init(true);
				if ($("[data-filter]").length) {
					h.filter()
				}
				$(window).smartresize(function() {
					h.shuffleOn = false;
					h.init()
				});
				$(document).bind("fontresize", function(a, b) {
					h.shuffleOn = false;
					h.init()
				})
			} else {
				g.init();
				$(document).bind("fontresize", function(a, b) {
					g.init()
				});
				$(window).smartresize(function() {
					g.init()
				})
			}
		},
		init: function(a) {
			var b = h.setCols();
			if (h.numCols !== b || a) {
				h.numCols = b;
				h.container = $(h.containerSelector);
				h.unit = $(h.unitSelector + ":visible");
				h.setArray = [];
				var c = [];
				for (var d = 0; d <= h.numCols - 1; d++) {
					c[d] = 0
				}
				h.setArray.push(c);
				if (h.numCols >= 3 && h.unit.length) {
					h.layout()
				} else {
					h.destroy()
				}
			}
		},
		destroy: function() {
			h.unit = $(h.unitSelector);
			h.setArray = [];
			h.unit.css({
				position: "",
				top: "",
				left: "",
				width: "",
				height: ""
			});
			h.container.css({
				position: "",
				height: ""
			});
			h.unit.find(".block").css({
				position: "",
				top: "",
				left: "",
				right: "",
				bottom: "",
				minHeight: ""
			});
			g.init()
		},
		shuffle: function(a) {
			var b = a.not(".ignore-shuffle");
			var c = a.filter(".ignore-shuffle");
			b = jQuery.makeArray(b);
			c = jQuery.makeArray(c);
			for (var d = b.length - 1; d > 0; d--) {
				var e = Math.floor(Math.random() * (d + 1));
				var f = b[d];
				b[d] = b[e];
				b[e] = f
			}
			b = c.concat(b);
			return $(b)
		},
		setCols: function() {
			if (matchMedia) {
				if (window.matchMedia("(min-width: " + e + ")").matches) {
					return 5
				} else if (window.matchMedia("(min-width: " + d + ")").matches) {
					return 4
				} else if (window.matchMedia("(min-width: " + c + ")").matches) {
					return 3
				} else if (window.matchMedia("(min-width: " + b + ")").matches) {
					return 2
				} else {
					return 1
				}
			} else {
				return 1
			}
		},
		filter: function() {
			var a = document.location.href;
			a = a.replace(/^.*\/\/[^\/]+/, "");
			var b = '#navmenu a[href="' + a + '"]';
			var c = $(b)[0];
			if (a !== "/" && $(b).length) {
				h.filterOn(c)
			}
			if (Modernizr.history) {
				window.addEventListener("popstate", function(d) {
					if (h.popped === true) {
						a = d.state;
						a = a.replace(/^.*\/\/[^\/]+/, "");
						b = '#navmenu a[href="' + a + '"]';
						c = $(b)[0];
						if (a === "/") {
							h.filterOff(c)
						} else {
							h.filterOn(c)
						}
					}
				});
				history.replaceState(document.location.href, document.title, document.location.href)
			}
			$("[data-filter]").click(function(a) {
				a.preventDefault();
				h.filterOn(this);
				if (Modernizr.history) {
					var b = $(this).attr("href");
					history.pushState(b, document.title, b);
					h.popped = true
				}
			});
			$("[data-canxfilter]").click(function(a) {
				a.preventDefault();
				h.filterOff(this);
				if (Modernizr.history) {
					var b = $(this).attr("href");
					history.pushState(b, document.title, b);
					h.popped = true
				}
			})
		},
		filterOn: function(a) {
			$("[data-filter], [data-canxfilter]").removeClass("current");
			$(a).addClass("current");
			if (window.matchMedia("(min-width: " + c + ")").matches) {
				h.shuffleOn = false;
				var b = $(a).attr("data-filter");
				h.unit.css({
					display: "none"
				});
				$(b).find(h.unitSelector).show();
				h.unit.not($(b).find(h.unitSelector)).css({
					position: "",
					top: "0",
					left: "0"
				});
				h.init(true);
				$(window).scrollTo(0, 500, {
					onAfter: function() {
						$(window).scrollTop($(window).scrollTop() + 1);
						$(window).scrollTop($(window).scrollTop() - 1)
					}
				})
			} else {
				$(window).scrollTo($(a).attr("href").replace("/", ""), 500, {
					offset: -$("[role=navigation]").outerHeight(true),
					onAfter: function() {
						$(window).scrollTop($(window).scrollTop() + 1);
						$(window).scrollTop($(window).scrollTop() - 1)
					}
				})
			}
		},
		filterOff: function(a) {
			$("[data-filter]").removeClass("current");
			$(a).addClass("current");
			if (window.matchMedia("(min-width: " + c + ")").matches) {
				h.shuffleOn = true;
				$(h.unitSelector).css({
					display: ""
				});
				h.init(true);
				$(window).scrollTo(0, 500, {
					onAfter: function() {
						$(window).scrollTop($(window).scrollTop() + 1);
						$(window).scrollTop($(window).scrollTop() - 1)
					}
				})
			} else {
				$(window).scrollTo(0, 500, {
					onAfter: function() {
						$(window).scrollTop($(window).scrollTop() + 1);
						$(window).scrollTop($(window).scrollTop() - 1)
					}
				})
			}
		},
		layout: function() {
			h.unitSpan = h.container.innerWidth() / h.numCols;
			h.unit.css("position", "absolute");
			h.container.css("position", "relative");
			var a = 10;
			h.unit.find(".block").css({
				position: "absolute",
				top: a,
				left: a,
				right: a,
				bottom: a,
				minHeight: 0
			});
			if (h.shuffleOn) {
				h.unit = h.shuffle(h.unit)
			}
			var b = {};
			for (var c = 0; c < h.unit.length; c++) {
				b = $(h.unit[c]);
				var d = parseInt(b.attr("data-rowspan"), 10);
				var e = parseInt(b.attr("data-colspan"), 10);
				var f = false;
				var i = [];
				var j = h.unitSpan * e;
				var k = h.unitSpan * d;
				b.css({
					width: j,
					height: k
				});
				for (var l = 0; l <= h.setArray.length; l++) {
					var m = 0;
					var n = 0;
					for (var o = 0; o <= h.setArray[l].length; o++) {
						if (h.setArray[l][o] === 0) {
							m++
						} else {
							m = 0;
							n++
						}
						if (m === e) {
							b.css({
								top: l * h.unitSpan,
								left: (o - (e - 1)) * h.unitSpan
							});
							for (var p = e + (o - (e - 1)) - 1; p >= o - (e - 1); p--) {
								h.setArray[l][p] = 1
							}
							if (d > 1) {
								var i = [];
								for (p = 0; p <= h.numCols - 1; p++) {
									i[p] = 0
								}
								h.setArray.push(i);
								for (p = e + (o - (e - 1)) - 1; p >= o - (e - 1); p--) {
									h.setArray[l + 1][p] = 1
								}
							}
							f = true;
							break
						}
					}
					if (!f) {
						if (!h.setArray[l + 1]) {
							i = [];
							for (p = 0; p <= h.numCols - 1; p++) {
								i[p] = 0
							}
							h.setArray.push(i)
						}
					} else {
						break
					}
				}
			}
			g.init();
			h.container.height(h.setArray.length * h.unitSpan)
		}
	};
	var i = {
		container: $("#navmenu"),
		trigger: null,
		init: function() {
			var a = "0";
			i.trigger = $('<a id="nav-trigger"><i class="menu-icon icon-menu"></i></a>');
			i.trigger.insertBefore("#navmenu");
			i.trigger.click(function(b) {
				var c = $("[role=navigation] .subnav li");
				var d = 400;
				var e = 200;
				var f = (d - e) / c.length;
				var g = false;
				var h = $(this);
				if (c.css("top") !== "0px" && c.css("top") !== "auto") {
					c = jQuery.makeArray(c);
					c = c.reverse();
					c = $(c);
					g = true
				}
				if (!c.length) {
					$(this).toggleClass("active");
					i.container.toggleClass("open")
				} else if (g) {
					a = "0";
					h.removeClass("active");
					i.container.removeClass("open")
				} else {
					a = -$(".subnav").height();
					h.addClass("active");
					i.container.addClass("open")
				}
				c.each(function(b, c) {
					c = $(c);
					var d = (b + 1) * f;
					c.css({
						position: "relative"
					});
					var g = setTimeout(function() {
						c.animate({
							top: a
						}, {
							duration: e,
							easeing: "easeInOutQuint"
						})
					}, d)
				})
			});
			if ($("body").hasClass("open-menu")) {
				var b = setTimeout(function() {
					i.trigger.click()
				}, 750)
			}
		}
	};
	var j = {
		container: $(".pep-wrapper"),
		gallery: $(".pep-wrapper ul"),
		unit: $(".pep-wrapper li"),
		init: function() {
			var a = j.unit.length * 160;
			var b = j.container.parent().width();
			this.unit.css({
				maxWidth: 160
			});
			this.unit.last().css({
				maxWidth: 180,
				paddingRight: 20
			});
			a = a + 20;
			this.unit.find("img").css({
				width: 140
			});
			this.container.css({
				width: b,
				left: 0,
				overflowX: "scroll",
				overflowY: "hidden",
				"min-height": 155,
				position: "relative",
				"-webkit-overflow-scrolling": "touch",
				marginBottom: 5
			});
			this.gallery.css({
				width: a,
				position: "absolute"
			});
			this.gallery.css({
				left: 0
			})
		},
		destroy: function() {
			this.container.css({
				width: "",
				left: "",
				overflow: "",
				"min-height": ""
			});
			this.gallery.css({
				width: "",
				left: "",
				top: "",
				position: ""
			});
			this.unit.css({
				maxWidth: ""
			});
			this.unit.find("img").css({
				width: ""
			})
		},
		initOrDie: function() {
			if (window.matchMedia("(min-width: " + b + ")").matches) {
				j.destroy()
			} else {
				j.init()
			}
		},
		responsive: function() {
			if (matchMedia) {
				$(window).smartresize(function() {
					j.initOrDie()
				});
				j.initOrDie()
			}
		}
	};
	var k = {
		trigger: $("#nav-contact"),
		navContact: null,
		slideConfig: {
			duration: 500,
			easing: "easeInOutQuint"
		},
		init: function() {
			this.navContact = $(this.trigger.attr("href")).clone().addClass("nav-contact").attr("id", "new-contact").hide().appendTo("[role=navigation]");
			this.trigger.click(function(a) {
				a.preventDefault();
				if (k.navContact.is(":visible")) {
					k.close()
				} else {
					k.open();
					a.stopPropagation()
				}
				k.navContact.click(function(a) {
					a.stopPropagation()
				})
			})
		},
		close: function() {
			if (Modernizr.cssanimations) {
				this.navContact.animateCSS("fadeOutDown", function() {
					$(this).hide()
				})
			} else {
				this.navContact.fadeOut("fast")
			}
		},
		open: function() {
			if (Modernizr.cssanimations) {
				this.navContact.animateCSS("fadeInDown")
			} else {
				this.navContact.fadeIn("fast")
			}
		}
	};
	var l = {
		container: $(".subnav"),
		moveToHead: function() {
			var a = l.container.clone(true, true);
			a.insertAfter("#navmenu");
			l.container.hide()
		},
		moveToFoot: function() {
			$("[role=navigation] .subnav").hide();
			l.container.show()
		},
		setLocation: function() {
			if (window.matchMedia("(min-width: " + c + ")").matches) {
				if ($("[role=navigation] .subnav").length) {
					$("[role=navigation] .subnav").show();
					l.container.hide()
				} else {
					l.moveToHead()
				}
			} else {
				l.moveToFoot()
			}
		},
		toggliser: function() {
			$(window).smartresize(function() {
				l.setLocation()
			});
			l.setLocation()
		}
	};
	var m = {
		selector: $(".subnav a"),
		popped: false,
		init: function() {
			if (Modernizr.history && m.selector.length) {
				window.addEventListener("popstate", function(a) {
					if (m.popped === true) {
						var b = a.state;
						b = b.replace(/^.*\/\/[^\/]+/, "");
						var c = '.subnav a[href="' + b + '"]';
						var d = $(c).eq(0);
						m.loadContent(d)
					}
				});
				history.replaceState(document.location.href, document.title, document.location.href)
			}
			m.selector.click(function(a) {
				a.preventDefault();
				var b = $(this);
				m.loadContent(b);
				if (Modernizr.history) {
					history.pushState(b.attr("href"), document.title, b.attr("href"));
					m.popped = true
				}
			})
		},
		swipe: function() {
			$(".hero-banner").swipe({
				left: function() {
					if ($(".subnav .current").next().find("a").length) {
						m.loadContent($(".subnav .current").next().find("a"))
					}
				},
				right: function() {
					if ($(".subnav .current").prev().find("a").length) {
						m.loadContent($(".subnav .current").prev().find("a"))
					}
				},
				threshold: {
					x: 100,
					y: 50
				}
			})
		},
		loadContent: function(a) {
			if (!a.parent().is(".current")) {
				var b = a.attr("href"),
					c = 500,
					d = "swing";
				if (!$(".current-content").length) {
					$("[role=main]").wrapInner('<div class="current-content">')
				}
				$("[role=main]").css({
					height: $("[role=main]").height()
				});
				var e = $('<div class="new-content"></div>');
				e.insertAfter(".current-content");
				if (a.parent().nextAll(".current").length) {
					var f = $(window).width() / 8
				} else {
					var f = -$(window).width() / 8
				}
				e.css({
					opacity: 0,
					position: "relative",
					top: 0,
					left: -f
				});
				$(".current-content").stop(true, false).animate({
					left: f,
					opacity: 0
				}, {
					duration: c,
					easing: d,
					complete: function() {
						$(this).remove();
						$.ajaxSetup({
							cache: false
						});
						$.get(b, function(b) {
							e.html(b);
							h.containerSelector = ".new-content .grid-wrap";
							h.setup();
							e.css({
								top: 0
							}).stop(true, false).animate({
								left: 0,
								opacity: 1
							}, {
								duration: c,
								easeing: d,
								complete: function() {
									document.title = e.find("h1").text() + ", " + e.find("h2").text();
									e.removeClass("new-content").addClass("current-content");
									h.containerSelector = ".grid-wrap";
									$("[role=main]").css({
										height: ""
									});
									m.swipe();
									p.init();
									q.init();
									$(".js-zoom").each(function() {
										$(this).zoom({
											url: $(this).data("highres")
										})
									})
								},
								useTranslate3d: true
							});
							$(".subnav li").removeClass("current");
							a.parent().addClass("current")
						}).error(function() {
							window.location.href = b
						})
					},
					useTranslate3d: true
				})
			}
		}
	};
	var n = {
		init: function() {
			var a = $("body");
			setTimeout(function() {
				if (!a.hasClass("loaded")) {
					a.addClass("loaded")
				}
			}, 3e3);
			a.addClass("loaded")
		}
	};
	var o = {
		init: function() {
			$("code").each(function() {
				if ($(this).parent("pre").length) {
					$(this).parent("pre").addClass("prettyprint")
				} else {
					$(this).addClass("prettyprint")
				}
			});
			$("pre.prettyprint").hover(function() {
				var a = $(this).innerHeight();
				$(this).addClass("js-hover");
				var b = $(this).innerHeight();
				$(this).css({
					paddingBottom: "+=" + (a - b) + "px"
				})
			}, function() {
				$(this).removeClass("js-hover");
				$(this).css({
					padding: ""
				})
			})
		}
	};
	$.fn.hasHozScroll = function() {
		return this.get(0).scrollWidth > this.innerWidth()
	};
	var p = {
		tab: ".js-gallery-tab",
		image: ".js-gallery-image",
		init: function() {
			$(p.image).hide();
			p.bind();
			$(p.tab).first().click()
		},
		bind: function() {
			$(p.tab).click(function(a) {
				a.preventDefault();
				p.switch(this)
			})
		},
		"switch": function(a) {
			var b = $(a);
			$(p.tab).removeClass("active");
			b.addClass("active");
			$(p.image).hide();
			var c = b.attr("href");
			$("[data-highres='" + c + "']").show()
		}
	};
	var q = {
		tank: ".js-fill-her-up-tank",
		fuel: ".js-fill-her-up-fuel",
		init: function() {
			q.please();
			q.bind()
		},
		bind: function() {
			$(window).smartresize(function() {
				q.please()
			})
		},
		please: function() {
			$(q.fuel).each(function() {
				var a = $(this);
				var b = a.closest(q.tank);
				a.css({
					height: ""
				});
				if (window.matchMedia && window.matchMedia("(min-width: " + d + ")").matches) {
					var c = b.height();
					a.height(c)
				}
			})
		}
	};
	$(document).ready(function() {
		MBP.scaleFix();
		$(window).load(function() {
			new FastClick(document.body)
		});
		h.setup();
		i.init();
		j.responsive();
		o.init();
		p.init();
		q.init();
		if ($(".subnav").length) {
			m.init()
		}
		l.toggliser();
		$(document).on("click", ".with-hidden-caption", function() {
			if (window.matchMedia("(min-width: " + b + ")").matches || !$(this).parents(".pep-wrapper").length) {
				$(this).toggleClass("show-caption");
				$(this).find("figcaption").slideToggle("fast")
			}
		});
		$(document).on("click", function() {
			if (k.navContact.is(":visible")) {
				k.close()
			}
		});
		k.init();
		$(".js-zoom").each(function() {
			$(this).zoom({
				url: $(this).data("highres")
			})
		})
	});
	$(window).load(function() {
		n.init()
	})
})();
/*!
	Zoom v1.7.11 - 2013-11-12
	Enlarge images on click or mouseover.
	(c) 2013 Jack Moore - http://www.jacklmoore.com/zoom
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(a) {
	var b = {
		url: !1,
		callback: !1,
		target: !1,
		duration: 120,
		on: "mouseover",
		touch: !0,
		onZoomIn: !1,
		onZoomOut: !1,
		magnify: 1
	};
	a.zoom = function(b, c, d, e) {
		var f, g, h, i, j, k, l, m = a(b).css("position");
		return a(b).css({
			position: /(absolute|fixed)/.test(m) ? m : "relative",
			overflow: "hidden"
		}), d.style.width = d.style.height = "", a(d).addClass("zoomImg").css({
			position: "absolute",
			top: 0,
			left: 0,
			opacity: 0,
			width: d.width * e,
			height: d.height * e,
			border: "none",
			maxWidth: "none"
		}).appendTo(b), {
			init: function() {
				g = a(b).outerWidth(), f = a(b).outerHeight(), c === b ? (i = g, h = f) : (i = a(c).outerWidth(), h = a(c).outerHeight()), j = (d.width - g) / i, k = (d.height - f) / h, l = a(c).offset()
			},
			move: function(a) {
				var b = a.pageX - l.left,
					c = a.pageY - l.top;
				c = Math.max(Math.min(c, h), 0), b = Math.max(Math.min(b, i), 0), d.style.left = b * -j + "px", d.style.top = c * -k + "px"
			}
		}
	}, a.fn.zoom = function(c) {
		return this.each(function() {
			var d, e = a.extend({}, b, c || {}),
				f = e.target || this,
				g = this,
				h = document.createElement("img"),
				i = a(h),
				j = "mousemove.zoom",
				k = !1,
				l = !1;
			(e.url || (d = a(g).find("img"), d[0] && (e.url = d.data("src") || d.attr("src")), e.url)) && (h.onload = function() {
				function b(b) {
					d.init(), d.move(b), i.stop().fadeTo(a.support.opacity ? e.duration : 0, 1, a.isFunction(e.onZoomIn) ? e.onZoomIn.call(h) : !1)
				}

				function c() {
					i.stop().fadeTo(e.duration, 0, a.isFunction(e.onZoomOut) ? e.onZoomOut.call(h) : !1)
				}
				var d = a.zoom(f, g, h, e.magnify);
				"grab" === e.on ? a(g).on("mousedown.zoom", function(e) {
					1 === e.which && (a(document).one("mouseup.zoom", function() {
						c(), a(document).off(j, d.move)
					}), b(e), a(document).on(j, d.move), e.preventDefault())
				}) : "click" === e.on ? a(g).on("click.zoom", function(e) {
					return k ? void 0 : (k = !0, b(e), a(document).on(j, d.move), a(document).one("click.zoom", function() {
						c(), k = !1, a(document).off(j, d.move)
					}), !1)
				}) : "toggle" === e.on ? a(g).on("click.zoom", function(a) {
					k ? c() : b(a), k = !k
				}) : "mouseover" === e.on && (d.init(), a(g).on("mouseenter.zoom", b).on("mouseleave.zoom", c).on(j, d.move)), e.touch && a(g).on("touchstart.zoom", function(a) {
					a.preventDefault(), l ? (l = !1, c()) : (l = !0, b(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]))
				}).on("touchmove.zoom", function(a) {
					a.preventDefault(), d.move(a.originalEvent.touches[0] || a.originalEvent.changedTouches[0])
				}), a.isFunction(e.callback) && e.callback.call(h)
			}, h.src = e.url, a(g).one("zoom.destroy", function() {
				a(g).off(".zoom"), i.remove()
			}))
		})
	}, a.fn.zoom.defaults = b
})(window.jQuery);
//# sourceMappingURL=script-compiled.map