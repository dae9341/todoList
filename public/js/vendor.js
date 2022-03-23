"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.6.0",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        j = function j(e, t) {
      return e === t && (l = !0), 0;
    },
        D = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, j = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
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
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var D,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || D, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, D = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^([^.]*)(?:\.(.+)|)/;

  function we() {
    return !0;
  }

  function Te() {
    return !1;
  }

  function Ce(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ee(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ee(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Se(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Te,
    isPropagationStopped: Te,
    isImmediatePropagationStopped: Te,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Se(this, e, Ce), !1;
      },
      trigger: function trigger() {
        return Se(this, e), !0;
      },
      _default: function _default() {
        return !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return Ee(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ee(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var ke = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function je(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function De(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function qe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Le(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function He(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(Ne, ""), u, l));
      }
    }

    return n;
  }

  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Le(o[r], a[r]);
      } else Le(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Oe(this, e, !0);
    },
    remove: function remove(e) {
      return Oe(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return He(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return He(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = je(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return He(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return He(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Re = function Re(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Me = function Me(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Ie = new RegExp(ne.join("|"), "i");

  function We(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function Fe(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a;
      }
    }));
  }();
  var Be = ["Webkit", "Moz", "ms"],
      $e = E.createElement("div").style,
      _e = {};

  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return t || (e in $e ? e : _e[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Be.length;

      while (n--) {
        if ((e = Be[n] + t) in $e) return e;
      }
    }(e) || e);
  }

  var Ue = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ve = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ge = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Je(e, t, n) {
    var r = Re(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = We(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
          return Je(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Ye);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Re(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = Ke).prototype = {
    constructor: Ke,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = Ke.propHooks[this.prop];
      return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = Ke.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this;
    }
  }).init.prototype = Ke.prototype, (Ke.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = Ke.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = Ke.prototype.init, S.fx.step = {};
  var Ze,
      et,
      tt,
      nt,
      rt = /^(?:toggle|show|hide)$/,
      it = /queueHooks$/;

  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }

  function at() {
    return C.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }

  function st(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function lt(o, e, t) {
    var n,
        a,
        r = 0,
        i = lt.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: Ze || at(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(lt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], rt.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = lt(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && it.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: st("show"),
    slideUp: st("hide"),
    slideToggle: st("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), Ze = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    et || (et = !0, ot());
  }, S.fx.stop = function () {
    et = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
  var ct,
      ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ct = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = ft[t] || S.find.attr;

    ft[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r;
    };
  });
  var pt = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;

  function ht(e) {
    return (e.match(P) || []).join(" ");
  }

  function gt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function vt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, gt(this)));
      });
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, gt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = vt(t)).length) while (n = this[u++]) {
        if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = ht(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, gt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = vt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var yt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : ht(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var mt = /^(?:focusinfocus|focusoutblur)$/,
      xt = function xt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var bt = C.location,
      wt = {
    guid: Date.now()
  },
      Tt = /\?/;

  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}

    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };

  var Ct = /\[\]$/,
      Et = /\r?\n/g,
      St = /^(?:submit|button|image|reset|file)$/i,
      kt = /^(?:input|select|textarea|keygen)/i;

  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      At(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      At(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Et, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Et, "\r\n")
        };
      }).get();
    }
  });
  var Nt = /%20/g,
      jt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Lt = /^(?:GET|HEAD)$/,
      Ht = /^\/\//,
      Ot = {},
      Pt = {},
      Rt = "*/".concat("*"),
      Mt = E.createElement("a");

  function It(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Wt(t, i, o, a) {
    var s = {},
        u = t === Pt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function Ft(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Mt.href = bt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: bt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Rt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
    },
    ajaxPrefilter: It(Ot),
    ajaxTransport: It(Pt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = qt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Bt = {
    0: 200,
    1223: 204
  },
      $t = S.ajaxSettings.xhr();
  y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || $t && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });

  var _t,
      zt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;

  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
      if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Xt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Vt = C.jQuery,
      Gt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).firebase = t();
}(void 0, function () {
  "use strict";

  var _r = function r(e, t) {
    return (_r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    })(e, t);
  };

  var _n = function n() {
    return (_n = Object.assign || function (e) {
      for (var t, n = 1, r = arguments.length; n < r; n++) {
        for (var i in t = arguments[n]) {
          Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        }
      }

      return e;
    }).apply(this, arguments);
  };

  function e(e, a, s, l) {
    return new (s = s || Promise)(function (n, t) {
      function r(e) {
        try {
          o(l.next(e));
        } catch (e) {
          t(e);
        }
      }

      function i(e) {
        try {
          o(l["throw"](e));
        } catch (e) {
          t(e);
        }
      }

      function o(e) {
        var t;
        e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function (e) {
          e(t);
        })).then(r, i);
      }

      o((l = l.apply(e, a || [])).next());
    });
  }

  function i(n, r) {
    var i,
        o,
        a,
        s = {
      label: 0,
      sent: function sent() {
        if (1 & a[0]) throw a[1];
        return a[1];
      },
      trys: [],
      ops: []
    },
        e = {
      next: t(0),
      "throw": t(1),
      "return": t(2)
    };
    return "function" == typeof Symbol && (e[Symbol.iterator] = function () {
      return this;
    }), e;

    function t(t) {
      return function (e) {
        return function (t) {
          if (i) throw new TypeError("Generator is already executing.");

          for (; s;) {
            try {
              if (i = 1, o && (a = 2 & t[0] ? o["return"] : t[0] ? o["throw"] || ((a = o["return"]) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;

              switch (o = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                case 0:
                case 1:
                  a = t;
                  break;

                case 4:
                  return s.label++, {
                    value: t[1],
                    done: !1
                  };

                case 5:
                  s.label++, o = t[1], t = [0];
                  continue;

                case 7:
                  t = s.ops.pop(), s.trys.pop();
                  continue;

                default:
                  if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                    s = 0;
                    continue;
                  }

                  if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                    s.label = t[1];
                    break;
                  }

                  if (6 === t[0] && s.label < a[1]) {
                    s.label = a[1], a = t;
                    break;
                  }

                  if (a && s.label < a[2]) {
                    s.label = a[2], s.ops.push(t);
                    break;
                  }

                  a[2] && s.ops.pop(), s.trys.pop();
                  continue;
              }

              t = r.call(n, s);
            } catch (e) {
              t = [6, e], o = 0;
            } finally {
              i = a = 0;
            }
          }

          if (5 & t[0]) throw t[1];
          return {
            value: t[0] ? t[1] : void 0,
            done: !0
          };
        }([t, e]);
      };
    }
  }

  function p(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length) return {
      next: function next() {
        return {
          value: (e = e && r >= e.length ? void 0 : e) && e[r++],
          done: !e
        };
      }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function f(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
        i,
        o = n.call(e),
        a = [];

    try {
      for (; (void 0 === t || 0 < t--) && !(r = o.next()).done;) {
        a.push(r.value);
      }
    } catch (e) {
      i = {
        error: e
      };
    } finally {
      try {
        r && !r.done && (n = o["return"]) && n.call(o);
      } finally {
        if (i) throw i.error;
      }
    }

    return a;
  }

  function a(e, t) {
    for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) {
      e[i] = t[n];
    }

    return e;
  }

  function h(e, t) {
    if (!(t instanceof Object)) return t;

    switch (t.constructor) {
      case Date:
        return new Date(t.getTime());

      case Object:
        void 0 === e && (e = {});
        break;

      case Array:
        e = [];
        break;

      default:
        return t;
    }

    for (var n in t) {
      t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = h(e[n], t[n]));
    }

    return e;
  }

  var o = (t.prototype.wrapCallback = function (n) {
    var r = this;
    return function (e, t) {
      e ? r.reject(e) : r.resolve(t), "function" == typeof n && (r.promise["catch"](function () {}), 1 === n.length ? n(e) : n(e, t));
    };
  }, t);

  function t() {
    var n = this;
    this.reject = function () {}, this.resolve = function () {}, this.promise = new Promise(function (e, t) {
      n.resolve = e, n.reject = t;
    });
  }

  var s,
      l = "FirebaseError",
      c = (function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function n() {
      this.constructor = e;
    }

    _r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
  }(u, s = Error), u);

  function u(e, t, n) {
    t = s.call(this, t) || this;
    return t.code = e, t.customData = n, t.name = l, Object.setPrototypeOf(t, u.prototype), Error.captureStackTrace && Error.captureStackTrace(t, d.prototype.create), t;
  }

  var d = (v.prototype.create = function (e) {
    for (var t = [], n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }

    var r,
        i = t[0] || {},
        o = this.service + "/" + e,
        e = this.errors[e],
        e = e ? (r = i, e.replace(m, function (e, t) {
      var n = r[t];
      return null != n ? String(n) : "<" + t + "?>";
    })) : "Error",
        e = this.serviceName + ": " + e + " (" + o + ").";
    return new c(o, e, i);
  }, v);

  function v(e, t, n) {
    this.service = e, this.serviceName = t, this.errors = n;
  }

  var m = /\{\$([^}]+)}/g;

  function y(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }

  function b(e, t) {
    t = new g(e, t);
    return t.subscribe.bind(t);
  }

  var g = (I.prototype.next = function (t) {
    this.forEachObserver(function (e) {
      e.next(t);
    });
  }, I.prototype.error = function (t) {
    this.forEachObserver(function (e) {
      e.error(t);
    }), this.close(t);
  }, I.prototype.complete = function () {
    this.forEachObserver(function (e) {
      e.complete();
    }), this.close();
  }, I.prototype.subscribe = function (e, t, n) {
    var r,
        i = this;
    if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
    void 0 === (r = function (e, t) {
      if ("object" != _typeof(e) || null === e) return !1;

      for (var n = 0, r = t; n < r.length; n++) {
        var i = r[n];
        if (i in e && "function" == typeof e[i]) return !0;
      }

      return !1;
    }(e, ["next", "error", "complete"]) ? e : {
      next: e,
      error: t,
      complete: n
    }).next && (r.next = w), void 0 === r.error && (r.error = w), void 0 === r.complete && (r.complete = w);
    n = this.unsubscribeOne.bind(this, this.observers.length);
    return this.finalized && this.task.then(function () {
      try {
        i.finalError ? r.error(i.finalError) : r.complete();
      } catch (e) {}
    }), this.observers.push(r), n;
  }, I.prototype.unsubscribeOne = function (e) {
    void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], --this.observerCount, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
  }, I.prototype.forEachObserver = function (e) {
    if (!this.finalized) for (var t = 0; t < this.observers.length; t++) {
      this.sendOne(t, e);
    }
  }, I.prototype.sendOne = function (e, t) {
    var n = this;
    this.task.then(function () {
      if (void 0 !== n.observers && void 0 !== n.observers[e]) try {
        t(n.observers[e]);
      } catch (e) {
        "undefined" != typeof console && console.error && console.error(e);
      }
    });
  }, I.prototype.close = function (e) {
    var t = this;
    this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(function () {
      t.observers = void 0, t.onNoObservers = void 0;
    }));
  }, I);

  function I(e, t) {
    var n = this;
    this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(function () {
      e(n);
    })["catch"](function (e) {
      n.error(e);
    });
  }

  function w() {}

  var E = (O.prototype.setInstantiationMode = function (e) {
    return this.instantiationMode = e, this;
  }, O.prototype.setMultipleInstances = function (e) {
    return this.multipleInstances = e, this;
  }, O.prototype.setServiceProps = function (e) {
    return this.serviceProps = e, this;
  }, O.prototype.setInstanceCreatedCallback = function (e) {
    return this.onInstanceCreated = e, this;
  }, O);

  function O(e, t, n) {
    this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
  }

  var _ = "[DEFAULT]",
      N = (C.prototype.get = function (e) {
    var t = this.normalizeInstanceIdentifier(e = void 0 === e ? _ : e);

    if (!this.instancesDeferred.has(t)) {
      e = new o();
      if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
        var n = this.getOrInitializeService({
          instanceIdentifier: t
        });
        n && e.resolve(n);
      } catch (e) {}
    }

    return this.instancesDeferred.get(t).promise;
  }, C.prototype.getImmediate = function (t) {
    var e = null !== (e = null == t ? void 0 : t.identifier) && void 0 !== e ? e : _,
        t = null !== (t = null == t ? void 0 : t.optional) && void 0 !== t && t,
        e = this.normalizeInstanceIdentifier(e);

    if (!this.isInitialized(e) && !this.shouldAutoInitialize()) {
      if (t) return null;
      throw Error("Service " + this.name + " is not available");
    }

    try {
      return this.getOrInitializeService({
        instanceIdentifier: e
      });
    } catch (e) {
      if (t) return null;
      throw e;
    }
  }, C.prototype.getComponent = function () {
    return this.component;
  }, C.prototype.setComponent = function (e) {
    var t, n;
    if (e.name !== this.name) throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
    if (this.component) throw Error("Component for " + this.name + " has already been provided");

    if (this.component = e, this.shouldAutoInitialize()) {
      if ("EAGER" === e.instantiationMode) try {
        this.getOrInitializeService({
          instanceIdentifier: _
        });
      } catch (e) {}

      try {
        for (var r = p(this.instancesDeferred.entries()), i = r.next(); !i.done; i = r.next()) {
          var o = f(i.value, 2),
              a = o[0],
              s = o[1],
              l = this.normalizeInstanceIdentifier(a);

          try {
            var c = this.getOrInitializeService({
              instanceIdentifier: l
            });
            s.resolve(c);
          } catch (e) {}
        }
      } catch (e) {
        t = {
          error: e
        };
      } finally {
        try {
          i && !i.done && (n = r["return"]) && n.call(r);
        } finally {
          if (t) throw t.error;
        }
      }
    }
  }, C.prototype.clearInstance = function (e) {
    this.instancesDeferred["delete"](e = void 0 === e ? _ : e), this.instances["delete"](e);
  }, C.prototype["delete"] = function () {
    return e(this, void 0, void 0, function () {
      var t;
      return i(this, function (e) {
        switch (e.label) {
          case 0:
            return t = Array.from(this.instances.values()), [4, Promise.all(a(a([], f(t.filter(function (e) {
              return "INTERNAL" in e;
            }).map(function (e) {
              return e.INTERNAL["delete"]();
            }))), f(t.filter(function (e) {
              return "_delete" in e;
            }).map(function (e) {
              return e._delete();
            }))))];

          case 1:
            return e.sent(), [2];
        }
      });
    });
  }, C.prototype.isComponentSet = function () {
    return null != this.component;
  }, C.prototype.isInitialized = function (e) {
    return this.instances.has(e = void 0 === e ? _ : e);
  }, C.prototype.initialize = function (e) {
    var t,
        n,
        r = (e = void 0 === e ? {} : e).instanceIdentifier,
        e = e.options,
        e = void 0 === e ? {} : e,
        i = this.normalizeInstanceIdentifier(void 0 === r ? _ : r);
    if (this.isInitialized(i)) throw Error(this.name + "(" + i + ") has already been initialized");
    if (!this.isComponentSet()) throw Error("Component " + this.name + " has not been registered yet");
    var o = this.getOrInitializeService({
      instanceIdentifier: i,
      options: e
    });

    try {
      for (var a = p(this.instancesDeferred.entries()), s = a.next(); !s.done; s = a.next()) {
        var l = f(s.value, 2),
            c = l[0],
            u = l[1];
        i === this.normalizeInstanceIdentifier(c) && u.resolve(o);
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        s && !s.done && (n = a["return"]) && n.call(a);
      } finally {
        if (t) throw t.error;
      }
    }

    return this.invokeOnInitCallbacks(o, i), o;
  }, C.prototype.onInit = function (e) {
    var t = this;
    return this.onInitCallbacks.add(e), function () {
      t.onInitCallbacks["delete"](e);
    };
  }, C.prototype.invokeOnInitCallbacks = function (e, t) {
    var n, r;

    try {
      for (var i = p(this.onInitCallbacks), o = i.next(); !o.done; o = i.next()) {
        var a = o.value;

        try {
          a(e, t);
        } catch (e) {}
      }
    } catch (e) {
      n = {
        error: e
      };
    } finally {
      try {
        o && !o.done && (r = i["return"]) && r.call(i);
      } finally {
        if (n) throw n.error;
      }
    }
  }, C.prototype.getOrInitializeService = function (e) {
    var t = e.instanceIdentifier,
        n = e.options,
        r = void 0 === n ? {} : n,
        e = this.instances.get(t);
    if (!e && this.component && (e = this.component.instanceFactory(this.container, {
      instanceIdentifier: (n = t) === _ ? void 0 : n,
      options: r
    }), this.instances.set(t, e), this.component.onInstanceCreated)) try {
      this.component.onInstanceCreated(this.container, t, e);
    } catch (e) {}
    return e || null;
  }, C.prototype.normalizeInstanceIdentifier = function (e) {
    return !this.component || this.component.multipleInstances ? e : _;
  }, C.prototype.shouldAutoInitialize = function () {
    return !!this.component && "EXPLICIT" !== this.component.instantiationMode;
  }, C);

  function C(e, t) {
    this.name = e, this.container = t, this.component = null, this.instances = new Map(), this.instancesDeferred = new Map(), this.onInitCallbacks = new Set();
  }

  var S = (L.prototype.addComponent = function (e) {
    var t = this.getProvider(e.name);
    if (t.isComponentSet()) throw new Error("Component " + e.name + " has already been registered with " + this.name);
    t.setComponent(e);
  }, L.prototype.addOrOverwriteComponent = function (e) {
    this.getProvider(e.name).isComponentSet() && this.providers["delete"](e.name), this.addComponent(e);
  }, L.prototype.getProvider = function (e) {
    if (this.providers.has(e)) return this.providers.get(e);
    var t = new N(e, this);
    return this.providers.set(e, t), t;
  }, L.prototype.getProviders = function () {
    return Array.from(this.providers.values());
  }, L);

  function L(e) {
    this.name = e, this.providers = new Map();
  }

  var R,
      A = [];
  (z = R = R || {})[z.DEBUG = 0] = "DEBUG", z[z.VERBOSE = 1] = "VERBOSE", z[z.INFO = 2] = "INFO", z[z.WARN = 3] = "WARN", z[z.ERROR = 4] = "ERROR", z[z.SILENT = 5] = "SILENT";

  function P(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) {
      n[r - 2] = arguments[r];
    }

    if (!(t < e.logLevel)) {
      var i = new Date().toISOString(),
          o = j[t];
      if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
      console[o].apply(console, a(["[" + i + "]  " + e.name + ":"], n));
    }
  }

  var k = {
    debug: R.DEBUG,
    verbose: R.VERBOSE,
    info: R.INFO,
    warn: R.WARN,
    error: R.ERROR,
    silent: R.SILENT
  },
      D = R.INFO,
      j = ((H = {})[R.DEBUG] = "log", H[R.VERBOSE] = "log", H[R.INFO] = "info", H[R.WARN] = "warn", H[R.ERROR] = "error", H),
      z = (Object.defineProperty(F.prototype, "logLevel", {
    get: function get() {
      return this._logLevel;
    },
    set: function set(e) {
      if (!(e in R)) throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
      this._logLevel = e;
    },
    enumerable: !1,
    configurable: !0
  }), F.prototype.setLogLevel = function (e) {
    this._logLevel = "string" == typeof e ? k[e] : e;
  }, Object.defineProperty(F.prototype, "logHandler", {
    get: function get() {
      return this._logHandler;
    },
    set: function set(e) {
      if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
      this._logHandler = e;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(F.prototype, "userLogHandler", {
    get: function get() {
      return this._userLogHandler;
    },
    set: function set(e) {
      this._userLogHandler = e;
    },
    enumerable: !1,
    configurable: !0
  }), F.prototype.debug = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }

    this._userLogHandler && this._userLogHandler.apply(this, a([this, R.DEBUG], e)), this._logHandler.apply(this, a([this, R.DEBUG], e));
  }, F.prototype.log = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }

    this._userLogHandler && this._userLogHandler.apply(this, a([this, R.VERBOSE], e)), this._logHandler.apply(this, a([this, R.VERBOSE], e));
  }, F.prototype.info = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }

    this._userLogHandler && this._userLogHandler.apply(this, a([this, R.INFO], e)), this._logHandler.apply(this, a([this, R.INFO], e));
  }, F.prototype.warn = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }

    this._userLogHandler && this._userLogHandler.apply(this, a([this, R.WARN], e)), this._logHandler.apply(this, a([this, R.WARN], e));
  }, F.prototype.error = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }

    this._userLogHandler && this._userLogHandler.apply(this, a([this, R.ERROR], e)), this._logHandler.apply(this, a([this, R.ERROR], e));
  }, F);

  function F(e) {
    this.name = e, this._logLevel = D, this._logHandler = P, this._userLogHandler = null, A.push(this);
  }

  function T(t) {
    A.forEach(function (e) {
      e.setLogLevel(t);
    });
  }

  function x(a, t) {
    for (var e = 0, n = A; e < n.length; e++) {
      !function (e) {
        var o = null;
        t && t.level && (o = k[t.level]), e.userLogHandler = null === a ? null : function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++) {
            n[r - 2] = arguments[r];
          }

          var i = n.map(function (e) {
            if (null == e) return null;
            if ("string" == typeof e) return e;
            if ("number" == typeof e || "boolean" == typeof e) return e.toString();
            if (e instanceof Error) return e.message;

            try {
              return JSON.stringify(e);
            } catch (e) {
              return null;
            }
          }).filter(function (e) {
            return e;
          }).join(" ");
          t >= (null != o ? o : e.logLevel) && a({
            level: R[t].toLowerCase(),
            message: i,
            args: n,
            type: e.name
          });
        };
      }(n[e]);
    }
  }

  var H = ((H = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", H["bad-app-name"] = "Illegal App name: '{$appName}", H["duplicate-app"] = "Firebase App named '{$appName}' already exists", H["app-deleted"] = "Firebase App named '{$appName}' already deleted", H["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", H["invalid-log-argument"] = "First argument to `onLog` must be null or a function.", H),
      V = new d("app", "Firebase", H),
      B = "@firebase/app",
      M = "[DEFAULT]",
      U = ((H = {})[B] = "fire-core", H["@firebase/analytics"] = "fire-analytics", H["@firebase/app-check"] = "fire-app-check", H["@firebase/auth"] = "fire-auth", H["@firebase/database"] = "fire-rtdb", H["@firebase/functions"] = "fire-fn", H["@firebase/installations"] = "fire-iid", H["@firebase/messaging"] = "fire-fcm", H["@firebase/performance"] = "fire-perf", H["@firebase/remote-config"] = "fire-rc", H["@firebase/storage"] = "fire-gcs", H["@firebase/firestore"] = "fire-fst", H["fire-js"] = "fire-js", H["firebase-wrapper"] = "fire-js-all", H),
      W = new z("@firebase/app"),
      G = (Object.defineProperty($.prototype, "automaticDataCollectionEnabled", {
    get: function get() {
      return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
    },
    set: function set(e) {
      this.checkDestroyed_(), this.automaticDataCollectionEnabled_ = e;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty($.prototype, "name", {
    get: function get() {
      return this.checkDestroyed_(), this.name_;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty($.prototype, "options", {
    get: function get() {
      return this.checkDestroyed_(), this.options_;
    },
    enumerable: !1,
    configurable: !0
  }), $.prototype["delete"] = function () {
    var t = this;
    return new Promise(function (e) {
      t.checkDestroyed_(), e();
    }).then(function () {
      return t.firebase_.INTERNAL.removeApp(t.name_), Promise.all(t.container.getProviders().map(function (e) {
        return e["delete"]();
      }));
    }).then(function () {
      t.isDeleted_ = !0;
    });
  }, $.prototype._getService = function (e, t) {
    void 0 === t && (t = M), this.checkDestroyed_();
    var n = this.container.getProvider(e);
    return n.isInitialized() || "EXPLICIT" !== (null === (e = n.getComponent()) || void 0 === e ? void 0 : e.instantiationMode) || n.initialize(), n.getImmediate({
      identifier: t
    });
  }, $.prototype._removeServiceInstance = function (e, t) {
    void 0 === t && (t = M), this.container.getProvider(e).clearInstance(t);
  }, $.prototype._addComponent = function (t) {
    try {
      this.container.addComponent(t);
    } catch (e) {
      W.debug("Component " + t.name + " failed to register with FirebaseApp " + this.name, e);
    }
  }, $.prototype._addOrOverwriteComponent = function (e) {
    this.container.addOrOverwriteComponent(e);
  }, $.prototype.toJSON = function () {
    return {
      name: this.name,
      automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
      options: this.options
    };
  }, $.prototype.checkDestroyed_ = function () {
    if (this.isDeleted_) throw V.create("app-deleted", {
      appName: this.name_
    });
  }, $);

  function $(e, t, n) {
    var r = this;
    this.firebase_ = n, this.isDeleted_ = !1, this.name_ = t.name, this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1, this.options_ = h(void 0, e), this.container = new S(t.name), this._addComponent(new E("app", function () {
      return r;
    }, "PUBLIC")), this.firebase_.INTERNAL.components.forEach(function (e) {
      return r._addComponent(e);
    });
  }

  G.prototype.name && G.prototype.options || G.prototype["delete"] || console.log("dc");
  var K = "8.6.5";

  function Y(a) {
    var s = {},
        l = new Map(),
        c = {
      __esModule: !0,
      initializeApp: function initializeApp(e, t) {
        void 0 === t && (t = {});
        "object" == _typeof(t) && null !== t || (t = {
          name: t
        });
        var n = t;
        void 0 === n.name && (n.name = M);
        t = n.name;
        if ("string" != typeof t || !t) throw V.create("bad-app-name", {
          appName: String(t)
        });
        if (y(s, t)) throw V.create("duplicate-app", {
          appName: t
        });
        n = new a(e, n, c);
        return s[t] = n;
      },
      app: u,
      registerVersion: function registerVersion(e, t, n) {
        var r = null !== (i = U[e]) && void 0 !== i ? i : e;
        n && (r += "-" + n);
        var i = r.match(/\s|\//),
            e = t.match(/\s|\//);
        i || e ? (n = ['Unable to register library "' + r + '" with version "' + t + '":'], i && n.push('library name "' + r + '" contains illegal characters (whitespace or "/")'), i && e && n.push("and"), e && n.push('version name "' + t + '" contains illegal characters (whitespace or "/")'), W.warn(n.join(" "))) : o(new E(r + "-version", function () {
          return {
            library: r,
            version: t
          };
        }, "VERSION"));
      },
      setLogLevel: T,
      onLog: function onLog(e, t) {
        if (null !== e && "function" != typeof e) throw V.create("invalid-log-argument");
        x(e, t);
      },
      apps: null,
      SDK_VERSION: K,
      INTERNAL: {
        registerComponent: o,
        removeApp: function removeApp(e) {
          delete s[e];
        },
        components: l,
        useAsService: function useAsService(e, t) {
          return "serverAuth" !== t ? t : null;
        }
      }
    };

    function u(e) {
      if (!y(s, e = e || M)) throw V.create("no-app", {
        appName: e
      });
      return s[e];
    }

    function o(n) {
      var e,
          r = n.name;
      if (l.has(r)) return W.debug("There were multiple attempts to register component " + r + "."), "PUBLIC" === n.type ? c[r] : null;
      l.set(r, n), "PUBLIC" === n.type && (e = function e(_e) {
        if ("function" != typeof (_e = void 0 === _e ? u() : _e)[r]) throw V.create("invalid-app-argument", {
          appName: r
        });
        return _e[r]();
      }, void 0 !== n.serviceProps && h(e, n.serviceProps), c[r] = e, a.prototype[r] = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        return this._getService.bind(this, r).apply(this, n.multipleInstances ? e : []);
      });

      for (var t = 0, i = Object.keys(s); t < i.length; t++) {
        var o = i[t];

        s[o]._addComponent(n);
      }

      return "PUBLIC" === n.type ? c[r] : null;
    }

    return c["default"] = c, Object.defineProperty(c, "apps", {
      get: function get() {
        return Object.keys(s).map(function (e) {
          return s[e];
        });
      }
    }), u.App = a, c;
  }

  var H = function e() {
    var t = Y(G);
    return t.INTERNAL = _n(_n({}, t.INTERNAL), {
      createFirebaseNamespace: e,
      extendNamespace: function extendNamespace(e) {
        h(t, e);
      },
      createSubscribe: b,
      ErrorFactory: d,
      deepExtend: h
    }), t;
  }(),
      J = (X.prototype.getPlatformInfoString = function () {
    return this.container.getProviders().map(function (e) {
      if (function (e) {
        e = e.getComponent();
        return "VERSION" === (null == e ? void 0 : e.type);
      }(e)) {
        e = e.getImmediate();
        return e.library + "/" + e.version;
      }

      return null;
    }).filter(function (e) {
      return e;
    }).join(" ");
  }, X);

  function X(e) {
    this.container = e;
  }

  "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self.self === self && void 0 !== self.firebase && (W.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "), (z = self.firebase.SDK_VERSION) && 0 <= z.indexOf("LITE") && W.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    "));
  var Z = H.initializeApp;

  H.initializeApp = function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }

    return function () {
      try {
        return "[object process]" === Object.prototype.toString.call(global.process);
      } catch (e) {
        return;
      }
    }() && W.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '), Z.apply(void 0, e);
  };

  var q,
      Q,
      ee = H;
  (q = ee).INTERNAL.registerComponent(new E("platform-logger", function (e) {
    return new J(e);
  }, "PRIVATE")), q.registerVersion(B, "0.6.24", Q), q.registerVersion("fire-js", "");
  return ee.registerVersion("firebase", "8.6.5", "app"), ee.SDK_VERSION = "8.6.5", ee;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).firebase);
}(void 0, function (e) {
  "use strict";

  try {
    !function () {
      function t(t) {
        return t && "object" == _typeof(t) && "default" in t ? t : {
          "default": t
        };
      }

      var zl = t(e);
      !function () {
        var t,
            o = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
          t != Array.prototype && t != Object.prototype && (t[e] = n.value);
        };

        var u = function (t) {
          t = ["object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global, t];

          for (var e = 0; e < t.length; ++e) {
            var n = t[e];
            if (n && n.Math == Math) return n;
          }

          return globalThis;
        }(this);

        function c(t) {
          var e,
              n,
              i = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
          return i ? i.call(t) : {
            next: (e = t, n = 0, function () {
              return n < e.length ? {
                done: !1,
                value: e[n++]
              } : {
                done: !0
              };
            })
          };
        }

        !function (t, e) {
          if (e) {
            var n = u;
            t = t.split(".");

            for (var i = 0; i < t.length - 1; i++) {
              var r = t[i];
              r in n || (n[r] = {}), n = n[r];
            }

            (e = e(i = n[t = t[t.length - 1]])) != i && null != e && o(n, t, {
              configurable: !0,
              writable: !0,
              value: e
            });
          }
        }("Promise", function (t) {
          function a(t) {
            this.b = 0, this.c = void 0, this.a = [];
            var e = this.f();

            try {
              t(e.resolve, e.reject);
            } catch (t) {
              e.reject(t);
            }
          }

          function e() {
            this.a = null;
          }

          function s(e) {
            return e instanceof a ? e : new a(function (t) {
              t(e);
            });
          }

          if (t) return t;

          e.prototype.b = function (t) {
            var e;
            null == this.a && (this.a = [], (e = this).c(function () {
              e.g();
            })), this.a.push(t);
          };

          var n = u.setTimeout;
          e.prototype.c = function (t) {
            n(t, 0);
          }, e.prototype.g = function () {
            for (; this.a && this.a.length;) {
              var t = this.a;
              this.a = [];

              for (var e = 0; e < t.length; ++e) {
                var n = t[e];
                t[e] = null;

                try {
                  n();
                } catch (t) {
                  this.f(t);
                }
              }
            }

            this.a = null;
          }, e.prototype.f = function (t) {
            this.c(function () {
              throw t;
            });
          }, a.prototype.f = function () {
            function t(e) {
              return function (t) {
                i || (i = !0, e.call(n, t));
              };
            }

            var n = this,
                i = !1;
            return {
              resolve: t(this.m),
              reject: t(this.g)
            };
          }, a.prototype.m = function (t) {
            if (t === this) this.g(new TypeError("A Promise cannot resolve to itself"));else if (t instanceof a) this.s(t);else {
              t: switch (_typeof(t)) {
                case "object":
                  var e = null != t;
                  break t;

                case "function":
                  e = !0;
                  break t;

                default:
                  e = !1;
              }

              e ? this.v(t) : this.h(t);
            }
          }, a.prototype.v = function (t) {
            var e = void 0;

            try {
              e = t.then;
            } catch (t) {
              return void this.g(t);
            }

            "function" == typeof e ? this.u(e, t) : this.h(t);
          }, a.prototype.g = function (t) {
            this.i(2, t);
          }, a.prototype.h = function (t) {
            this.i(1, t);
          }, a.prototype.i = function (t, e) {
            if (0 != this.b) throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.b);
            this.b = t, this.c = e, this.l();
          }, a.prototype.l = function () {
            if (null != this.a) {
              for (var t = 0; t < this.a.length; ++t) {
                r.b(this.a[t]);
              }

              this.a = null;
            }
          };
          var r = new e();
          return a.prototype.s = function (t) {
            var e = this.f();
            t.Qa(e.resolve, e.reject);
          }, a.prototype.u = function (t, e) {
            var n = this.f();

            try {
              t.call(e, n.resolve, n.reject);
            } catch (t) {
              n.reject(t);
            }
          }, a.prototype.then = function (t, e) {
            function n(e, t) {
              return "function" == typeof e ? function (t) {
                try {
                  i(e(t));
                } catch (t) {
                  r(t);
                }
              } : t;
            }

            var i,
                r,
                o = new a(function (t, e) {
              i = t, r = e;
            });
            return this.Qa(n(t, i), n(e, r)), o;
          }, a.prototype["catch"] = function (t) {
            return this.then(void 0, t);
          }, a.prototype.Qa = function (t, e) {
            function n() {
              switch (i.b) {
                case 1:
                  t(i.c);
                  break;

                case 2:
                  e(i.c);
                  break;

                default:
                  throw Error("Unexpected state: " + i.b);
              }
            }

            var i = this;
            null == this.a ? r.b(n) : this.a.push(n);
          }, a.resolve = s, a.reject = function (n) {
            return new a(function (t, e) {
              e(n);
            });
          }, a.race = function (r) {
            return new a(function (t, e) {
              for (var n = c(r), i = n.next(); !i.done; i = n.next()) {
                s(i.value).Qa(t, e);
              }
            });
          }, a.all = function (t) {
            var e = c(t),
                o = e.next();
            return o.done ? s([]) : new a(function (n, t) {
              for (var i = [], r = 0; i.push(void 0), r++, s(o.value).Qa(function (e) {
                return function (t) {
                  i[e] = t, 0 == --r && n(i);
                };
              }(i.length - 1), t), !(o = e.next()).done;) {
                ;
              }
            });
          }, a;
        });
        var h = h || {},
            l = this || self,
            e = /^[\w+/_-]+[=]{0,2}$/,
            s = null;

        function f(t) {
          return (t = t.querySelector && t.querySelector("script[nonce]")) && (t = t.nonce || t.getAttribute("nonce")) && e.test(t) ? t : "";
        }

        function a() {}

        function d(t) {
          var e = _typeof(t);

          return "object" != e ? e : t ? Array.isArray(t) ? "array" : e : "null";
        }

        function p(t) {
          var e = d(t);
          return "array" == e || "object" == e && "number" == typeof t.length;
        }

        function v(t) {
          return "function" == d(t);
        }

        function m(t) {
          var e = _typeof(t);

          return "object" == e && null != t || "function" == e;
        }

        var n = "closure_uid_" + (1e9 * Math.random() >>> 0),
            i = 0;

        function r(t, e, n) {
          return t.call.apply(t.bind, arguments);
        }

        function g(e, n, t) {
          if (!e) throw Error();

          if (2 < arguments.length) {
            var i = Array.prototype.slice.call(arguments, 2);
            return function () {
              var t = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(t, i), e.apply(n, t);
            };
          }

          return function () {
            return e.apply(n, arguments);
          };
        }

        function b(t, e, n) {
          return (b = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r : g).apply(null, arguments);
        }

        function y(e) {
          var n = Array.prototype.slice.call(arguments, 1);
          return function () {
            var t = n.slice();
            return t.push.apply(t, arguments), e.apply(this, t);
          };
        }

        function w(t, e) {
          function n() {}

          n.prototype = e.prototype, t.ab = e.prototype, t.prototype = new n(), t.prototype.constructor = t;
        }

        function I(t) {
          return t;
        }

        function T(t, e, n) {
          this.code = k + t, this.message = e || S[t] || "", this.a = n || null;
        }

        function E(t) {
          var e = t && t.code;
          return e ? new T(e.substring(k.length), t.message, t.serverResponse) : null;
        }

        w(T, Error), T.prototype.w = function () {
          var t = {
            code: this.code,
            message: this.message
          };
          return this.a && (t.serverResponse = this.a), t;
        }, T.prototype.toJSON = function () {
          return this.w();
        };
        var A,
            k = "auth/",
            S = {
          "admin-restricted-operation": "This operation is restricted to administrators only.",
          "argument-error": "",
          "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
          "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
          "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
          "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
          "cordova-not-ready": "Cordova framework is not ready.",
          "cors-unsupported": "This browser is not supported.",
          "credential-already-in-use": "This credential is already associated with a different user account.",
          "custom-token-mismatch": "The custom token corresponds to a different audience.",
          "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
          "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
          "email-change-needs-verification": "Multi-factor users must always have a verified email.",
          "email-already-in-use": "The email address is already in use by another account.",
          "expired-action-code": "The action code has expired. ",
          "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
          "internal-error": "An internal error has occurred.",
          "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
          "invalid-app-id": "The mobile app identifier is not registed for the current project.",
          "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
          "invalid-auth-event": "An internal error has occurred.",
          "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
          "invalid-continue-uri": "The continue URL provided in the request is invalid.",
          "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
          "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
          "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
          "invalid-email": "The email address is badly formatted.",
          "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
          "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
          "invalid-credential": "The supplied auth credential is malformed or has expired.",
          "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
          "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
          "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
          "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
          "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
          "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
          "wrong-password": "The password is invalid or the user does not have a password.",
          "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
          "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
          "invalid-provider-id": "The specified provider ID is invalid.",
          "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
          "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
          "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
          "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
          "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
          "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
          "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
          "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
          "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
          "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
          "missing-continue-uri": "A continue URL must be provided in the request.",
          "missing-iframe-start": "An internal error has occurred.",
          "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
          "missing-multi-factor-info": "No second factor identifier is provided.",
          "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
          "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
          "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
          "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
          "app-deleted": "This instance of FirebaseApp has been deleted.",
          "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
          "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
          "no-auth-event": "An internal error has occurred.",
          "no-such-provider": "User was not linked to an account with the given provider.",
          "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
          "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
          "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
          "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
          "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
          "provider-already-linked": "User can only be linked to one identity for the given provider.",
          "quota-exceeded": "The project's quota for this operation has been exceeded.",
          "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
          "redirect-operation-pending": "A redirect sign-in operation is already pending.",
          "rejected-credential": "The request contains malformed or mismatching credentials.",
          "second-factor-already-in-use": "The second factor is already enrolled on this account.",
          "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
          "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
          timeout: "The operation has timed out.",
          "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
          "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
          "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
          "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
          "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
          "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
          "unverified-email": "The operation requires a verified email.",
          "user-cancelled": "The user did not grant your application the permissions it requested.",
          "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
          "user-disabled": "The user account has been disabled by an administrator.",
          "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
          "user-signed-out": "",
          "weak-password": "The password must be 6 characters long or more.",
          "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
        },
            N = {
          ld: {
            Ta: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
            Za: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
            Wa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "b"
          },
          sd: {
            Ta: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
            Za: "https://securetoken.googleapis.com/v1/token",
            Wa: "https://identitytoolkit.googleapis.com/v2/",
            id: "p"
          },
          ud: {
            Ta: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
            Za: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
            Wa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "s"
          },
          vd: {
            Ta: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
            Za: "https://test-securetoken.sandbox.googleapis.com/v1/token",
            Wa: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
            id: "t"
          }
        };

        function _(t) {
          for (var e in N) {
            if (N[e].id === t) return t = N[e], {
              firebaseEndpoint: t.Ta,
              secureTokenEndpoint: t.Za,
              identityPlatformEndpoint: t.Wa
            };
          }

          return null;
        }

        function O(t) {
          if (t) try {
            return t.$goog_Thenable;
          } catch (t) {
            return;
          }
        }

        function C(t) {
          var e;
          Error.captureStackTrace ? Error.captureStackTrace(this, C) : (e = Error().stack) && (this.stack = e), t && (this.message = String(t));
        }

        function R(t, e) {
          for (var n = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++) {
            n += t[r] + (r < e.length ? e[r] : "%s");
          }

          C.call(this, n + t[i]);
        }

        function D(t) {
          throw new R("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1));
        }

        function P(t, e) {
          this.c = t, this.f = e, this.b = 0, this.a = null;
        }

        function L(t, e) {
          t.f(e), t.b < 100 && (t.b++, e.next = t.a, t.a = e);
        }

        function x() {
          this.b = this.a = null;
        }

        A = _("__EID__") ? "__EID__" : void 0, w(C, Error), C.prototype.name = "CustomError", w(R, C), R.prototype.name = "AssertionError", P.prototype.get = function () {
          var t;
          return 0 < this.b ? (this.b--, t = this.a, this.a = t.next, t.next = null) : t = this.c(), t;
        };
        var M = new P(function () {
          return new j();
        }, function (t) {
          t.reset();
        });

        function j() {
          this.next = this.b = this.a = null;
        }

        x.prototype.add = function (t, e) {
          var n = M.get();
          n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n;
        }, j.prototype.set = function (t, e) {
          this.a = t, this.b = e, this.next = null;
        }, j.prototype.reset = function () {
          this.next = this.b = this.a = null;
        };
        var U = Array.prototype.indexOf ? function (t, e) {
          return Array.prototype.indexOf.call(t, e, void 0);
        } : function (t, e) {
          if ("string" == typeof t) return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);

          for (var n = 0; n < t.length; n++) {
            if (n in t && t[n] === e) return n;
          }

          return -1;
        },
            V = Array.prototype.forEach ? function (t, e, n) {
          Array.prototype.forEach.call(t, e, n);
        } : function (t, e, n) {
          for (var i = t.length, r = "string" == typeof t ? t.split("") : t, o = 0; o < i; o++) {
            o in r && e.call(n, r[o], o, t);
          }
        };
        var F = Array.prototype.filter ? function (t, e) {
          return Array.prototype.filter.call(t, e, void 0);
        } : function (t, e) {
          for (var n, i = t.length, r = [], o = 0, a = "string" == typeof t ? t.split("") : t, s = 0; s < i; s++) {
            s in a && (n = a[s], e.call(void 0, n, s, t) && (r[o++] = n));
          }

          return r;
        },
            q = Array.prototype.map ? function (t, e) {
          return Array.prototype.map.call(t, e, void 0);
        } : function (t, e) {
          for (var n = t.length, i = Array(n), r = "string" == typeof t ? t.split("") : t, o = 0; o < n; o++) {
            o in r && (i[o] = e.call(void 0, r[o], o, t));
          }

          return i;
        },
            H = Array.prototype.some ? function (t, e) {
          return Array.prototype.some.call(t, e, void 0);
        } : function (t, e) {
          for (var n = t.length, i = "string" == typeof t ? t.split("") : t, r = 0; r < n; r++) {
            if (r in i && e.call(void 0, i[r], r, t)) return !0;
          }

          return !1;
        };

        function K(t, e) {
          return 0 <= U(t, e);
        }

        function G(t, e) {
          var n;
          return (n = 0 <= (e = U(t, e))) && Array.prototype.splice.call(t, e, 1), n;
        }

        function B(n, i) {
          !function (t, e) {
            for (var n = "string" == typeof t ? t.split("") : t, i = t.length - 1; 0 <= i; --i) {
              i in n && e.call(void 0, n[i], i, t);
            }
          }(n, function (t, e) {
            i.call(void 0, t, e, n) && 1 == Array.prototype.splice.call(n, e, 1).length && 0;
          });
        }

        function W() {
          return Array.prototype.concat.apply([], arguments);
        }

        function X(t) {
          var e = t.length;

          if (0 < e) {
            for (var n = Array(e), i = 0; i < e; i++) {
              n[i] = t[i];
            }

            return n;
          }

          return [];
        }

        var J,
            Y = String.prototype.trim ? function (t) {
          return t.trim();
        } : function (t) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
        },
            z = /&/g,
            $ = /</g,
            Z = />/g,
            Q = /"/g,
            tt = /'/g,
            et = /\x00/g,
            nt = /[\x00&<>"']/;

        function it(t, e) {
          return -1 != t.indexOf(e);
        }

        function rt(t, e) {
          return t < e ? -1 : e < t ? 1 : 0;
        }

        t: {
          var ot = l.navigator;

          if (ot) {
            ot = ot.userAgent;

            if (ot) {
              J = ot;
              break t;
            }
          }

          J = "";
        }

        function at(t) {
          return it(J, t);
        }

        function st(t, e) {
          for (var n in t) {
            e.call(void 0, t[n], n, t);
          }
        }

        function ut(t) {
          for (var e in t) {
            return;
          }

          return 1;
        }

        function ct(t) {
          var e,
              n = {};

          for (e in t) {
            n[e] = t[e];
          }

          return n;
        }

        var ht = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

        function lt(t) {
          for (var e, n, i = 1; i < arguments.length; i++) {
            for (e in n = arguments[i]) {
              t[e] = n[e];
            }

            for (var r = 0; r < ht.length; r++) {
              e = ht[r], Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
            }
          }
        }

        function ft(t, e) {
          t: {
            try {
              var n,
                  i = t && t.ownerDocument;

              if ((n = (n = i && (i.defaultView || i.parentWindow)) || l).Element && n.Location) {
                var r = n;
                break t;
              }
            } catch (t) {}

            r = null;
          }

          if (r && void 0 !== r[e] && (!t || !(t instanceof r[e]) && (t instanceof r.Location || t instanceof r.Element))) {
            if (m(t)) try {
              var o = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t);
            } catch (t) {
              o = "<object could not be stringified>";
            } else o = void 0 === t ? "undefined" : null === t ? "null" : _typeof(t);
            D("Argument is not a %s (or a non-Element, non-Location mock); got: %s", e, o);
          }
        }

        function dt(t, e) {
          this.a = t === gt && e || "", this.b = mt;
        }

        function pt(t) {
          return t instanceof dt && t.constructor === dt && t.b === mt ? t.a : (D("expected object of type Const, got '" + t + "'"), "type_error:Const");
        }

        dt.prototype.sa = !0, dt.prototype.ra = function () {
          return this.a;
        }, dt.prototype.toString = function () {
          return "Const{" + this.a + "}";
        };
        var vt,
            mt = {},
            gt = {};

        function bt() {
          if (void 0 === vt) {
            var t = null,
                e = l.trustedTypes;

            if (e && e.createPolicy) {
              try {
                t = e.createPolicy("goog#html", {
                  createHTML: I,
                  createScript: I,
                  createScriptURL: I
                });
              } catch (t) {
                l.console && l.console.error(t.message);
              }

              vt = t;
            } else vt = t;
          }

          return vt;
        }

        function yt(t, e) {
          this.a = e === At ? t : "";
        }

        function wt(t) {
          return t instanceof yt && t.constructor === yt ? t.a : (D("expected object of type TrustedResourceUrl, got '" + t + "' of type " + d(t)), "type_error:TrustedResourceUrl");
        }

        function It(t, n) {
          var e,
              i = pt(t);
          if (!Et.test(i)) throw Error("Invalid TrustedResourceUrl format: " + i);
          return t = i.replace(Tt, function (t, e) {
            if (!Object.prototype.hasOwnProperty.call(n, e)) throw Error('Found marker, "' + e + '", in format string, "' + i + '", but no valid label mapping found in args: ' + JSON.stringify(n));
            return (t = n[e]) instanceof dt ? pt(t) : encodeURIComponent(String(t));
          }), e = t, t = bt(), new yt(e = t ? t.createScriptURL(e) : e, At);
        }

        yt.prototype.sa = !0, yt.prototype.ra = function () {
          return this.a.toString();
        }, yt.prototype.toString = function () {
          return "TrustedResourceUrl{" + this.a + "}";
        };
        var Tt = /%{(\w+)}/g,
            Et = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
            At = {};

        function kt(t, e) {
          this.a = e === Dt ? t : "";
        }

        function St(t) {
          return t instanceof kt && t.constructor === kt ? t.a : (D("expected object of type SafeUrl, got '" + t + "' of type " + d(t)), "type_error:SafeUrl");
        }

        kt.prototype.sa = !0, kt.prototype.ra = function () {
          return this.a.toString();
        }, kt.prototype.toString = function () {
          return "SafeUrl{" + this.a + "}";
        };
        var Nt = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
            _t = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
            Ot = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

        function Ct(t) {
          return t instanceof kt ? t : (t = "object" == _typeof(t) && t.sa ? t.ra() : String(t), t = Ot.test(t) || (e = (t = (t = String(t)).replace(/(%0A|%0D)/g, "")).match(_t)) && Nt.test(e[1]) ? new kt(t, Dt) : null);
          var e;
        }

        function Rt(t) {
          return t instanceof kt ? t : (t = "object" == _typeof(t) && t.sa ? t.ra() : String(t), new kt(t = !Ot.test(t) ? "about:invalid#zClosurez" : t, Dt));
        }

        var Dt = {},
            Pt = new kt("about:invalid#zClosurez", Dt);

        function Lt(t, e, n) {
          this.a = n === xt ? t : "";
        }

        Lt.prototype.sa = !0, Lt.prototype.ra = function () {
          return this.a.toString();
        }, Lt.prototype.toString = function () {
          return "SafeHtml{" + this.a + "}";
        };
        var xt = {};

        function Mt(t, e, n, i) {
          return t = t instanceof kt ? t : Rt(t), e = e || l, n = n instanceof dt ? pt(n) : n || "", e.open(St(t), n, i, void 0);
        }

        function jt(t) {
          for (var e = t.split("%s"), n = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < e.length;) {
            n += e.shift() + i.shift();
          }

          return n + e.join("%s");
        }

        function Ut(t) {
          return nt.test(t) && -1 != (t = -1 != (t = -1 != (t = -1 != (t = -1 != (t = -1 != t.indexOf("&") ? t.replace(z, "&amp;") : t).indexOf("<") ? t.replace($, "&lt;") : t).indexOf(">") ? t.replace(Z, "&gt;") : t).indexOf('"') ? t.replace(Q, "&quot;") : t).indexOf("'") ? t.replace(tt, "&#39;") : t).indexOf("\0") && (t = t.replace(et, "&#0;")), t;
        }

        function Vt(t) {
          return Vt[" "](t), t;
        }

        Vt[" "] = a;
        var Ft,
            qt = at("Opera"),
            Ht = at("Trident") || at("MSIE"),
            Kt = at("Edge"),
            Gt = Kt || Ht,
            Bt = at("Gecko") && !(it(J.toLowerCase(), "webkit") && !at("Edge")) && !(at("Trident") || at("MSIE")) && !at("Edge"),
            Wt = it(J.toLowerCase(), "webkit") && !at("Edge");

        function Xt() {
          var t = l.document;
          return t ? t.documentMode : void 0;
        }

        t: {
          var Jt = "",
              Yt = (Yt = J, Bt ? /rv:([^\);]+)(\)|;)/.exec(Yt) : Kt ? /Edge\/([\d\.]+)/.exec(Yt) : Ht ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Yt) : Wt ? /WebKit\/(\S+)/.exec(Yt) : qt ? /(?:Version)[ \/]?(\S+)/.exec(Yt) : void 0);

          if (Yt && (Jt = Yt ? Yt[1] : ""), Ht) {
            Yt = Xt();

            if (null != Yt && Yt > parseFloat(Jt)) {
              Ft = String(Yt);
              break t;
            }
          }

          Ft = Jt;
        }

        var zt = {};

        function $t(s) {
          return t = s, e = function e() {
            for (var t = 0, e = Y(String(Ft)).split("."), n = Y(String(s)).split("."), i = Math.max(e.length, n.length), r = 0; 0 == t && r < i; r++) {
              for (var o = e[r] || "", a = n[r] || ""; o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], (0 != o[0].length || 0 != a[0].length) && (t = rt(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || rt(0 == o[2].length, 0 == a[2].length) || rt(o[2], a[2]), o = o[3], a = a[3], 0 == t);) {
                ;
              }
            }

            return 0 <= t;
          }, n = zt, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t);
          var t, e, n;
        }

        var Zt = l.document && Ht && (Xt() || parseInt(Ft, 10)) || void 0;

        try {
          new self.OffscreenCanvas(0, 0).getContext("2d");
        } catch (t) {}

        var Qt = !Ht || 9 <= Number(Zt);

        function te(t) {
          var e = document;
          return "string" == typeof t ? e.getElementById(t) : t;
        }

        function ee(n, t) {
          st(t, function (t, e) {
            t && "object" == _typeof(t) && t.sa && (t = t.ra()), "style" == e ? n.style.cssText = t : "class" == e ? n.className = t : "for" == e ? n.htmlFor = t : re.hasOwnProperty(e) ? n.setAttribute(re[e], t) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? n.setAttribute(e, t) : n[e] = t;
          });
        }

        var ne,
            ie,
            re = {
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          colspan: "colSpan",
          frameborder: "frameBorder",
          height: "height",
          maxlength: "maxLength",
          nonce: "nonce",
          role: "role",
          rowspan: "rowSpan",
          type: "type",
          usemap: "useMap",
          valign: "vAlign",
          width: "width"
        };

        function oe() {
          var t,
              e = arguments,
              n = document,
              i = String(e[0]),
              r = e[1];
          return !Qt && r && (r.name || r.type) && (i = ["<", i], r.name && i.push(' name="', Ut(r.name), '"'), r.type && (i.push(' type="', Ut(r.type), '"'), lt(t = {}, r), delete t.type, r = t), i.push(">"), i = i.join("")), i = ae(n, i), r && ("string" == typeof r ? i.className = r : Array.isArray(r) ? i.className = r.join(" ") : ee(i, r)), 2 < e.length && function (e, n, t) {
            function i(t) {
              t && n.appendChild("string" == typeof t ? e.createTextNode(t) : t);
            }

            for (var r = 2; r < t.length; r++) {
              var o = t[r];
              if (!p(o) || m(o) && 0 < o.nodeType) i(o);else {
                t: {
                  if (o && "number" == typeof o.length) {
                    if (m(o)) {
                      var a = "function" == typeof o.item || "string" == typeof o.item;
                      break t;
                    }

                    if (v(o)) {
                      a = "function" == typeof o.item;
                      break t;
                    }
                  }

                  a = !1;
                }

                V(a ? X(o) : o, i);
              }
            }
          }(n, i, e), i;
        }

        function ae(t, e) {
          return e = String(e), "application/xhtml+xml" === t.contentType && (e = e.toLowerCase()), t.createElement(e);
        }

        function se(t) {
          l.setTimeout(function () {
            throw t;
          }, 0);
        }

        function ue(t, e) {
          ie || function () {
            {
              var t;
              ie = l.Promise && l.Promise.resolve ? (t = l.Promise.resolve(void 0), function () {
                t.then(le);
              }) : function () {
                var t = le;
                !v(l.setImmediate) || l.Window && l.Window.prototype && !at("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (ne = ne || function () {
                  var t = l.MessageChannel;
                  if (void 0 === (t = void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !at("Presto") ? function () {
                    var t = ae(document, "IFRAME");
                    t.style.display = "none", document.documentElement.appendChild(t);
                    var e = t.contentWindow;
                    (t = e.document).open(), t.close();
                    var n = "callImmediate" + Math.random(),
                        i = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                    t = b(function (t) {
                      "*" != i && t.origin != i || t.data != n || this.port1.onmessage();
                    }, this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = {
                      postMessage: function postMessage() {
                        e.postMessage(n, i);
                      }
                    };
                  } : t) || at("Trident") || at("MSIE")) return function (t) {
                    l.setTimeout(t, 0);
                  };
                  var e = new t(),
                      n = {},
                      i = n;
                  return e.port1.onmessage = function () {
                    var t;
                    void 0 !== n.next && (t = (n = n.next).Gb, n.Gb = null, t());
                  }, function (t) {
                    i.next = {
                      Gb: t
                    }, i = i.next, e.port2.postMessage(0);
                  };
                }())(t) : l.setImmediate(t);
              };
            }
          }(), ce || (ie(), ce = !0), he.add(t, e);
        }

        var ce = !1,
            he = new x();

        function le() {
          for (var t, e; e = t = void 0, e = null, (t = he).a && (e = t.a, t.a = t.a.next, t.a || (t.b = null), e.next = null), e = e;) {
            try {
              e.a.call(e.b);
            } catch (t) {
              se(t);
            }

            L(M, e);
          }

          ce = !1;
        }

        function fe(t, e) {
          if (this.a = de, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != a) try {
            var n = this;
            t.call(e, function (t) {
              ke(n, pe, t);
            }, function (t) {
              if (!(t instanceof De)) try {
                if (t instanceof Error) throw t;
                throw Error("Promise rejected.");
              } catch (t) {}
              ke(n, ve, t);
            });
          } catch (t) {
            ke(this, ve, t);
          }
        }

        var de = 0,
            pe = 2,
            ve = 3;

        function me() {
          this.next = this.f = this.b = this.g = this.a = null, this.c = !1;
        }

        me.prototype.reset = function () {
          this.f = this.b = this.g = this.a = null, this.c = !1;
        };

        var ge = new P(function () {
          return new me();
        }, function (t) {
          t.reset();
        });

        function be(t, e, n) {
          var i = ge.get();
          return i.g = t, i.b = e, i.f = n, i;
        }

        function ye(t) {
          if (t instanceof fe) return t;
          var e = new fe(a);
          return ke(e, pe, t), e;
        }

        function we(n) {
          return new fe(function (t, e) {
            e(n);
          });
        }

        function Ie(t, e, n) {
          Se(t, e, n, null) || ue(y(e, t));
        }

        function Te(n) {
          return new fe(function (i) {
            var r = n.length,
                o = [];
            if (r) for (var t = function t(_t2, e, n) {
              r--, o[_t2] = e ? {
                Pb: !0,
                value: n
              } : {
                Pb: !1,
                reason: n
              }, 0 == r && i(o);
            }, e = 0; e < n.length; e++) {
              Ie(n[e], y(t, e, !0), y(t, e, !1));
            } else i(o);
          });
        }

        function Ee(t, e) {
          t.b || t.a != pe && t.a != ve || Ne(t), t.f ? t.f.next = e : t.b = e, t.f = e;
        }

        function Ae(t, r, o, a) {
          var e = be(null, null, null);
          return e.a = new fe(function (n, i) {
            e.g = r ? function (t) {
              try {
                var e = r.call(a, t);
                n(e);
              } catch (t) {
                i(t);
              }
            } : n, e.b = o ? function (t) {
              try {
                var e = o.call(a, t);
                void 0 === e && t instanceof De ? i(t) : n(e);
              } catch (t) {
                i(t);
              }
            } : i;
          }), Ee(e.a.c = t, e), e.a;
        }

        function ke(t, e, n) {
          var i, r;
          t.a == de && (t === n && (e = ve, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, Se(n, t.$c, t.ad, t) || (t.i = n, t.a = e, t.c = null, Ne(t), e != ve || n instanceof De || (r = n, (i = t).g = !0, ue(function () {
            i.g && Re.call(null, r);
          }))));
        }

        function Se(t, e, n, i) {
          if (t instanceof fe) return Ee(t, be(e || a, n || null, i)), 1;
          if (O(t)) return t.then(e, n, i), 1;
          if (m(t)) try {
            var r = t.then;
            if (v(r)) return function (t, e, n, i, r) {
              function o(t) {
                a || (a = !0, i.call(r, t));
              }

              var a = !1;

              try {
                e.call(t, function (t) {
                  a || (a = !0, n.call(r, t));
                }, o);
              } catch (t) {
                o(t);
              }
            }(t, r, e, n, i), 1;
          } catch (t) {
            return n.call(i, t), 1;
          }
        }

        function Ne(t) {
          t.h || (t.h = !0, ue(t.gc, t));
        }

        function _e(t) {
          var e = null;
          return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e;
        }

        function Oe(t, e, n, i) {
          if (n == ve && e.b && !e.c) for (; t && t.g; t = t.c) {
            t.g = !1;
          }
          if (e.a) e.a.c = null, Ce(e, n, i);else try {
            e.c ? e.g.call(e.f) : Ce(e, n, i);
          } catch (t) {
            Re.call(null, t);
          }
          L(ge, e);
        }

        function Ce(t, e, n) {
          e == pe ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n);
        }

        fe.prototype.then = function (t, e, n) {
          return Ae(this, v(t) ? t : null, v(e) ? e : null, n);
        }, fe.prototype.$goog_Thenable = !0, (t = fe.prototype).oa = function (t, e) {
          return (t = be(t, t, e)).c = !0, Ee(this, t), this;
        }, t.o = function (t, e) {
          return Ae(this, null, t, e);
        }, t.cancel = function (t) {
          var e;
          this.a == de && (e = new De(t), ue(function () {
            !function t(e, n) {
              if (e.a == de) if (e.c) {
                var i = e.c;

                if (i.b) {
                  for (var r = 0, o = null, a = null, s = i.b; s && (s.c || (r++, !((o = s.a == e ? s : o) && 1 < r))); s = s.next) {
                    o || (a = s);
                  }

                  o && (i.a == de && 1 == r ? t(i, n) : (a ? ((r = a).next == i.f && (i.f = r), r.next = r.next.next) : _e(i), Oe(i, o, ve, n)));
                }

                e.c = null;
              } else ke(e, ve, n);
            }(this, e);
          }, this));
        }, t.$c = function (t) {
          this.a = de, ke(this, pe, t);
        }, t.ad = function (t) {
          this.a = de, ke(this, ve, t);
        }, t.gc = function () {
          for (var t; t = _e(this);) {
            Oe(this, t, this.a, this.i);
          }

          this.h = !1;
        };
        var Re = se;

        function De(t) {
          C.call(this, t);
        }

        function Pe() {
          this.xa = this.xa, this.pa = this.pa;
        }

        w(De, C);
        var Le = 0;

        function xe(t) {
          t.xa || (t.xa = !0, t.Da(), 0 == Le) || (t = t, Object.prototype.hasOwnProperty.call(t, n) && t[n] || (t[n] = ++i));
        }

        Pe.prototype.xa = !(De.prototype.name = "cancel"), Pe.prototype.Da = function () {
          if (this.pa) for (; this.pa.length;) {
            this.pa.shift()();
          }
        };

        var Me = Object.freeze || function (t) {
          return t;
        },
            je = !Ht || 9 <= Number(Zt),
            Ue = Ht && !$t("9"),
            Ve = function () {
          if (!l.addEventListener || !Object.defineProperty) return !1;
          var t = !1,
              e = Object.defineProperty({}, "passive", {
            get: function get() {
              t = !0;
            }
          });

          try {
            l.addEventListener("test", a, e), l.removeEventListener("test", a, e);
          } catch (t) {}

          return t;
        }();

        function Fe(t, e) {
          this.type = t, this.b = this.target = e, this.defaultPrevented = !1;
        }

        function qe(t, e) {
          if (Fe.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, t) {
            var n = this.type = t.type,
                i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;

            if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) {
              if (Bt) {
                t: {
                  try {
                    Vt(e.nodeName);
                    var r = !0;
                    break t;
                  } catch (t) {}

                  r = !1;
                }

                r || (e = null);
              }
            } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);

            this.relatedTarget = e, i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, this.screenY = i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" == typeof t.pointerType ? t.pointerType : He[t.pointerType] || "", (this.a = t).defaultPrevented && this.preventDefault();
          }
        }

        Fe.prototype.preventDefault = function () {
          this.defaultPrevented = !0;
        }, w(qe, Fe);
        var He = Me({
          2: "touch",
          3: "pen",
          4: "mouse"
        });
        qe.prototype.preventDefault = function () {
          qe.ab.preventDefault.call(this);
          var t = this.a;
          if (t.preventDefault) t.preventDefault();else if (t.returnValue = !1, Ue) try {
            (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1);
          } catch (t) {}
        }, qe.prototype.g = function () {
          return this.a;
        };
        var Ke = "closure_listenable_" + (1e6 * Math.random() | 0),
            Ge = 0;

        function Be(t, e, n, i, r) {
          this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!i, this.Va = r, this.key = ++Ge, this.va = this.Pa = !1;
        }

        function We(t) {
          t.va = !0, t.listener = null, t.proxy = null, t.src = null, t.Va = null;
        }

        function Xe(t) {
          this.src = t, this.a = {}, this.b = 0;
        }

        function Je(t, e) {
          var n = e.type;
          n in t.a && G(t.a[n], e) && (We(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
        }

        function Ye(t, e, n, i) {
          for (var r = 0; r < t.length; ++r) {
            var o = t[r];
            if (!o.va && o.listener == e && o.capture == !!n && o.Va == i) return r;
          }

          return -1;
        }

        Xe.prototype.add = function (t, e, n, i, r) {
          var o = t.toString();
          (t = this.a[o]) || (t = this.a[o] = [], this.b++);
          var a = Ye(t, e, i, r);
          return -1 < a ? (e = t[a], n || (e.Pa = !1)) : ((e = new Be(e, this.src, o, !!i, r)).Pa = n, t.push(e)), e;
        };

        var ze = "closure_lm_" + (1e6 * Math.random() | 0),
            $e = {};

        function Ze(t, e, n, i, r) {
          if (i && i.once) tn(t, e, n, i, r);else if (Array.isArray(e)) for (var o = 0; o < e.length; o++) {
            Ze(t, e[o], n, i, r);
          } else n = hn(n), t && t[Ke] ? fn(t, e, n, m(i) ? !!i.capture : !!i, r) : Qe(t, e, n, !1, i, r);
        }

        function Qe(t, e, n, i, r, o) {
          if (!e) throw Error("Invalid event type");
          var a,
              s,
              u = m(r) ? !!r.capture : !!r,
              c = un(t);
          if (c || (t[ze] = c = new Xe(t)), !(n = c.add(e, n, i, u, o)).proxy) if (a = sn, s = je ? function (t) {
            return a.call(s.src, s.listener, t);
          } : function (t) {
            if (!(t = a.call(s.src, s.listener, t))) return t;
          }, (n.proxy = i = s).src = t, i.listener = n, t.addEventListener) void 0 === (r = !Ve ? u : r) && (r = !1), t.addEventListener(e.toString(), i, r);else if (t.attachEvent) t.attachEvent(rn(e.toString()), i);else {
            if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
            t.addListener(i);
          }
        }

        function tn(t, e, n, i, r) {
          if (Array.isArray(e)) for (var o = 0; o < e.length; o++) {
            tn(t, e[o], n, i, r);
          } else n = hn(n), t && t[Ke] ? dn(t, e, n, m(i) ? !!i.capture : !!i, r) : Qe(t, e, n, !0, i, r);
        }

        function en(t, e, n, i, r) {
          if (Array.isArray(e)) for (var o = 0; o < e.length; o++) {
            en(t, e[o], n, i, r);
          } else i = m(i) ? !!i.capture : !!i, n = hn(n), t && t[Ke] ? (t = t.v, (e = String(e).toString()) in t.a && -1 < (n = Ye(o = t.a[e], n, i, r)) && (We(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--))) : (t = t && un(t)) && (e = t.a[e.toString()], (n = (t = -1) < (t = e ? Ye(e, n, i, r) : t) ? e[t] : null) && nn(n));
        }

        function nn(t) {
          var e, n, i;
          "number" != typeof t && t && !t.va && ((e = t.src) && e[Ke] ? Je(e.v, t) : (n = t.type, i = t.proxy, e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(rn(n), i) : e.addListener && e.removeListener && e.removeListener(i), (n = un(e)) ? (Je(n, t), 0 == n.b && (n.src = null, e[ze] = null)) : We(t)));
        }

        function rn(t) {
          return t in $e ? $e[t] : $e[t] = "on" + t;
        }

        function on(t, e, n, i) {
          var r = !0;
          if ((t = un(t)) && (e = t.a[e.toString()])) for (e = e.concat(), t = 0; t < e.length; t++) {
            var o = e[t];
            o && o.capture == n && !o.va && (o = an(o, i), r = r && !1 !== o);
          }
          return r;
        }

        function an(t, e) {
          var n = t.listener,
              i = t.Va || t.src;
          return t.Pa && nn(t), n.call(i, e);
        }

        function sn(t, e) {
          if (t.va) return !0;
          if (je) return an(t, new qe(e, this));
          if (!e) t: {
            e = ["window", "event"];

            for (var n = l, i = 0; i < e.length; i++) {
              if (null == (n = n[e[i]])) {
                e = null;
                break t;
              }
            }

            e = n;
          }

          if (e = new qe(i = e, this), n = !0, !(i.keyCode < 0 || null != i.returnValue)) {
            t: {
              var r = !1;
              if (0 == i.keyCode) try {
                i.keyCode = -1;
                break t;
              } catch (t) {
                r = !0;
              }
              !r && null != i.returnValue || (i.returnValue = !0);
            }

            for (i = [], r = e.b; r; r = r.parentNode) {
              i.push(r);
            }

            for (t = t.type, r = i.length - 1; 0 <= r; r--) {
              e.b = i[r];
              var o = on(i[r], t, !0, e),
                  n = n && o;
            }

            for (r = 0; r < i.length; r++) {
              e.b = i[r], o = on(i[r], t, !1, e), n = n && o;
            }
          }

          return n;
        }

        function un(t) {
          return (t = t[ze]) instanceof Xe ? t : null;
        }

        var cn = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

        function hn(e) {
          return v(e) ? e : (e[cn] || (e[cn] = function (t) {
            return e.handleEvent(t);
          }), e[cn]);
        }

        function ln() {
          Pe.call(this), this.v = new Xe(this), (this.ac = this).gb = null;
        }

        function fn(t, e, n, i, r) {
          t.v.add(String(e), n, !1, i, r);
        }

        function dn(t, e, n, i, r) {
          t.v.add(String(e), n, !0, i, r);
        }

        function pn(t, e, n, i) {
          if (!(e = t.v.a[String(e)])) return !0;
          e = e.concat();

          for (var r = !0, o = 0; o < e.length; ++o) {
            var a,
                s,
                u = e[o];
            u && !u.va && u.capture == n && (a = u.listener, s = u.Va || u.src, u.Pa && Je(t.v, u), r = !1 !== a.call(s, i) && r);
          }

          return r && !i.defaultPrevented;
        }

        function vn(t, e, n) {
          if (v(t)) n && (t = b(t, n));else {
            if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
            t = b(t.handleEvent, t);
          }
          return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0);
        }

        function mn(n) {
          var i = null;
          return new fe(function (t, e) {
            -1 == (i = vn(function () {
              t(void 0);
            }, n)) && e(Error("Failed to schedule timer."));
          }).o(function (t) {
            throw l.clearTimeout(i), t;
          });
        }

        function gn(t) {
          if (t.W && "function" == typeof t.W) return t.W();
          if ("string" == typeof t) return t.split("");

          if (p(t)) {
            for (var e = [], n = t.length, i = 0; i < n; i++) {
              e.push(t[i]);
            }

            return e;
          }

          for (i in e = [], n = 0, t) {
            e[n++] = t[i];
          }

          return e;
        }

        function bn(t) {
          if (t.Y && "function" == typeof t.Y) return t.Y();

          if (!t.W || "function" != typeof t.W) {
            if (p(t) || "string" == typeof t) {
              var e = [];
              t = t.length;

              for (var n = 0; n < t; n++) {
                e.push(n);
              }

              return e;
            }

            for (var i in e = [], n = 0, t) {
              e[n++] = i;
            }

            return e;
          }
        }

        function yn(t, e) {
          this.b = {}, this.a = [], this.c = 0;
          var n = arguments.length;

          if (1 < n) {
            if (n % 2) throw Error("Uneven number of arguments");

            for (var i = 0; i < n; i += 2) {
              this.set(arguments[i], arguments[i + 1]);
            }
          } else if (t) if (t instanceof yn) for (n = t.Y(), i = 0; i < n.length; i++) {
            this.set(n[i], t.get(n[i]));
          } else for (i in t) {
            this.set(i, t[i]);
          }
        }

        function wn(t) {
          if (t.c != t.a.length) {
            for (var e = 0, n = 0; e < t.a.length;) {
              var i = t.a[e];
              In(t.b, i) && (t.a[n++] = i), e++;
            }

            t.a.length = n;
          }

          if (t.c != t.a.length) {
            for (var r = {}, n = e = 0; e < t.a.length;) {
              In(r, i = t.a[e]) || (r[t.a[n++] = i] = 1), e++;
            }

            t.a.length = n;
          }
        }

        function In(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }

        w(ln, Pe), ln.prototype[Ke] = !0, ln.prototype.addEventListener = function (t, e, n, i) {
          Ze(this, t, e, n, i);
        }, ln.prototype.removeEventListener = function (t, e, n, i) {
          en(this, t, e, n, i);
        }, ln.prototype.dispatchEvent = function (t) {
          var e;
          if (n = this.gb) for (e = []; n; n = n.gb) {
            e.push(n);
          }
          var n = this.ac,
              i = t.type || t;
          if ("string" == typeof t ? t = new Fe(t, n) : t instanceof Fe ? t.target = t.target || n : (a = t, lt(t = new Fe(i, n), a)), a = !0, e) for (var r = e.length - 1; 0 <= r; r--) {
            var o = t.b = e[r],
                a = pn(o, i, !0, t) && a;
          }
          if (a = pn(o = t.b = n, i, !0, t) && a, a = pn(o, i, !1, t) && a, e) for (r = 0; r < e.length; r++) {
            a = pn(o = t.b = e[r], i, !1, t) && a;
          }
          return a;
        }, ln.prototype.Da = function () {
          if (ln.ab.Da.call(this), this.v) {
            var t,
                e = this.v;

            for (t in e.a) {
              for (var n = e.a[t], i = 0; i < n.length; i++) {
                We(n[i]);
              }

              delete e.a[t], e.b--;
            }
          }

          this.gb = null;
        }, (t = yn.prototype).W = function () {
          wn(this);

          for (var t = [], e = 0; e < this.a.length; e++) {
            t.push(this.b[this.a[e]]);
          }

          return t;
        }, t.Y = function () {
          return wn(this), this.a.concat();
        }, t.clear = function () {
          this.b = {}, this.c = this.a.length = 0;
        }, t.get = function (t, e) {
          return In(this.b, t) ? this.b[t] : e;
        }, t.set = function (t, e) {
          In(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e;
        }, t.forEach = function (t, e) {
          for (var n = this.Y(), i = 0; i < n.length; i++) {
            var r = n[i],
                o = this.get(r);
            t.call(e, o, r, this);
          }
        };
        var Tn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

        function En(t, e) {
          var n;
          this.a = this.l = this.c = "", this.g = null, this.h = this.f = "", this.i = !1, t instanceof En ? (this.i = void 0 !== e ? e : t.i, An(this, t.c), this.l = t.l, this.a = t.a, kn(this, t.g), this.f = t.f, Sn(this, Bn(t.b)), this.h = t.h) : t && (n = String(t).match(Tn)) ? (this.i = !!e, An(this, n[1] || "", !0), this.l = Rn(n[2] || ""), this.a = Rn(n[3] || "", !0), kn(this, n[4]), this.f = Rn(n[5] || "", !0), Sn(this, n[6] || "", !0), this.h = Rn(n[7] || "")) : (this.i = !!e, this.b = new Vn(null, this.i));
        }

        function An(t, e, n) {
          t.c = n ? Rn(e, !0) : e, t.c && (t.c = t.c.replace(/:$/, ""));
        }

        function kn(t, e) {
          if (e) {
            if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
            t.g = e;
          } else t.g = null;
        }

        function Sn(t, e, n) {
          var i, r;
          e instanceof Vn ? (t.b = e, i = t.b, (r = t.i) && !i.f && (Fn(i), i.c = null, i.a.forEach(function (t, e) {
            var n = e.toLowerCase();
            e != n && (Hn(this, e), Gn(this, n, t));
          }, i)), i.f = r) : (n || (e = Dn(e, jn)), t.b = new Vn(e, t.i));
        }

        function Nn(t, e, n) {
          t.b.set(e, n);
        }

        function _n(t, e) {
          return t.b.get(e);
        }

        function On(t) {
          return t instanceof En ? new En(t) : new En(t, void 0);
        }

        function Cn(t, e, n, i) {
          var r = new En(null, void 0);
          return t && An(r, t), e && (r.a = e), n && kn(r, n), i && (r.f = i), r;
        }

        function Rn(t, e) {
          return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "";
        }

        function Dn(t, e, n) {
          return "string" == typeof t ? (t = encodeURI(t).replace(e, Pn), t = n ? t.replace(/%25([0-9a-fA-F]{2})/g, "%$1") : t) : null;
        }

        function Pn(t) {
          return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16);
        }

        En.prototype.toString = function () {
          var t = [],
              e = this.c;
          e && t.push(Dn(e, Ln, !0), ":");
          var n = this.a;
          return !n && "file" != e || (t.push("//"), (e = this.l) && t.push(Dn(e, Ln, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.g) && t.push(":", String(n))), (n = this.f) && (this.a && "/" != n.charAt(0) && t.push("/"), t.push(Dn(n, "/" == n.charAt(0) ? Mn : xn, !0))), (n = this.b.toString()) && t.push("?", n), (n = this.h) && t.push("#", Dn(n, Un)), t.join("");
        }, En.prototype.resolve = function (t) {
          var e = new En(this),
              n = !!t.c;
          n ? An(e, t.c) : n = !!t.l, n ? e.l = t.l : n = !!t.a, n ? e.a = t.a : n = null != t.g;
          var i = t.f;
          if (n) kn(e, t.g);else if (n = !!t.f) if ("/" != i.charAt(0) && (this.a && !this.f ? i = "/" + i : -1 != (r = e.f.lastIndexOf("/")) && (i = e.f.substr(0, r + 1) + i)), ".." == (r = i) || "." == r) i = "";else if (it(r, "./") || it(r, "/.")) {
            for (var i = 0 == r.lastIndexOf("/", 0), r = r.split("/"), o = [], a = 0; a < r.length;) {
              var s = r[a++];
              "." == s ? i && a == r.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), i && a == r.length && o.push("")) : (o.push(s), i = !0);
            }

            i = o.join("/");
          } else i = r;
          return n ? e.f = i : n = "" !== t.b.toString(), n ? Sn(e, Bn(t.b)) : n = !!t.h, n && (e.h = t.h), e;
        };
        var Ln = /[#\/\?@]/g,
            xn = /[#\?:]/g,
            Mn = /[#\?]/g,
            jn = /[#\?@]/g,
            Un = /#/g;

        function Vn(t, e) {
          this.b = this.a = null, this.c = t || null, this.f = !!e;
        }

        function Fn(n) {
          n.a || (n.a = new yn(), n.b = 0, n.c && function (t, e) {
            if (t) {
              t = t.split("&");

              for (var n = 0; n < t.length; n++) {
                var i,
                    r = t[n].indexOf("="),
                    o = null;
                0 <= r ? (i = t[n].substring(0, r), o = t[n].substring(r + 1)) : i = t[n], e(i, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "");
              }
            }
          }(n.c, function (t, e) {
            n.add(decodeURIComponent(t.replace(/\+/g, " ")), e);
          }));
        }

        function qn(t) {
          var e = bn(t);
          if (void 0 === e) throw Error("Keys are undefined");
          var n = new Vn(null, void 0);
          t = gn(t);

          for (var i = 0; i < e.length; i++) {
            var r = e[i],
                o = t[i];
            Array.isArray(o) ? Gn(n, r, o) : n.add(r, o);
          }

          return n;
        }

        function Hn(t, e) {
          Fn(t), e = Wn(t, e), In(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, In((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && wn(t)));
        }

        function Kn(t, e) {
          return Fn(t), e = Wn(t, e), In(t.a.b, e);
        }

        function Gn(t, e, n) {
          Hn(t, e), 0 < n.length && (t.c = null, t.a.set(Wn(t, e), X(n)), t.b += n.length);
        }

        function Bn(t) {
          var e = new Vn();
          return e.c = t.c, t.a && (e.a = new yn(t.a), e.b = t.b), e;
        }

        function Wn(t, e) {
          return e = String(e), e = t.f ? e.toLowerCase() : e;
        }

        function Xn(t) {
          var e = [];
          return function t(e, n, i) {
            if (null == n) i.push("null");else {
              if ("object" == _typeof(n)) {
                if (Array.isArray(n)) {
                  var r = n;
                  n = r.length, i.push("[");

                  for (var o = "", a = 0; a < n; a++) {
                    i.push(o), t(e, r[a], i), o = ",";
                  }

                  return void i.push("]");
                }

                if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
                  for (r in i.push("{"), o = "", n) {
                    Object.prototype.hasOwnProperty.call(n, r) && (a = n[r], "function" != typeof a && (i.push(o), $n(r, i), i.push(":"), t(e, a, i), o = ","));
                  }

                  return void i.push("}");
                }

                n = n.valueOf();
              }

              switch (_typeof(n)) {
                case "string":
                  $n(n, i);
                  break;

                case "number":
                  i.push(isFinite(n) && !isNaN(n) ? String(n) : "null");
                  break;

                case "boolean":
                  i.push(String(n));
                  break;

                case "function":
                  i.push("null");
                  break;

                default:
                  throw Error("Unknown type: " + _typeof(n));
              }
            }
          }(new Jn(), t, e), e.join("");
        }

        function Jn() {}

        (t = Vn.prototype).add = function (t, e) {
          Fn(this), this.c = null, t = Wn(this, t);
          var n = this.a.get(t);
          return n || this.a.set(t, n = []), n.push(e), this.b += 1, this;
        }, t.clear = function () {
          this.a = this.c = null, this.b = 0;
        }, t.forEach = function (n, i) {
          Fn(this), this.a.forEach(function (t, e) {
            V(t, function (t) {
              n.call(i, t, e, this);
            }, this);
          }, this);
        }, t.Y = function () {
          Fn(this);

          for (var t = this.a.W(), e = this.a.Y(), n = [], i = 0; i < e.length; i++) {
            for (var r = t[i], o = 0; o < r.length; o++) {
              n.push(e[i]);
            }
          }

          return n;
        }, t.W = function (t) {
          Fn(this);
          var e = [];
          if ("string" == typeof t) Kn(this, t) && (e = W(e, this.a.get(Wn(this, t))));else {
            t = this.a.W();

            for (var n = 0; n < t.length; n++) {
              e = W(e, t[n]);
            }
          }
          return e;
        }, t.set = function (t, e) {
          return Fn(this), this.c = null, Kn(this, t = Wn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this;
        }, t.get = function (t, e) {
          return t && 0 < (t = this.W(t)).length ? String(t[0]) : e;
        }, t.toString = function () {
          if (this.c) return this.c;
          if (!this.a) return "";

          for (var t = [], e = this.a.Y(), n = 0; n < e.length; n++) {
            for (var i = e[n], r = encodeURIComponent(String(i)), i = this.W(i), o = 0; o < i.length; o++) {
              var a = r;
              "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))), t.push(a);
            }
          }

          return this.c = t.join("&");
        };
        var Yn = {
          '"': '\\"',
          "\\": "\\\\",
          "/": "\\/",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\v": "\\u000b"
        },
            zn = /\uffff/.test("\uFFFF") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

        function $n(t, e) {
          e.push('"', t.replace(zn, function (t) {
            var e = Yn[t];
            return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), Yn[t] = e), e;
          }), '"');
        }

        function Zn() {
          var t = gi();
          return Ht && Zt && 11 == Zt || /Edge\/\d+/.test(t);
        }

        function Qn() {
          return l.window && l.window.location.href || self && self.location && self.location.href || "";
        }

        function ti(t, e) {
          e = e || l.window;
          var n = "about:blank";
          t && (n = St(Ct(t) || Pt)), e.location.href = n;
        }

        function ei(t) {
          return !!((t = (t || gi()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/));
        }

        function ni(t) {
          t = t || l.window;

          try {
            t.close();
          } catch (t) {}
        }

        function ii(t, e, n) {
          var i = Math.floor(1e9 * Math.random()).toString();
          e = e || 500, n = n || 600;
          var r = (window.screen.availHeight - n) / 2,
              o = (window.screen.availWidth - e) / 2;

          for (a in e = {
            width: e,
            height: n,
            top: 0 < r ? r : 0,
            left: 0 < o ? o : 0,
            location: !0,
            resizable: !0,
            statusbar: !0,
            toolbar: !1
          }, n = gi().toLowerCase(), i && (e.target = i, it(n, "crios/") && (e.target = "_blank")), pi(gi()) == fi && (t = t || "http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), i = window, e = n instanceof kt ? n : Ct(void 0 !== n.href ? n.href : String(n)) || Pt, n = t.target || n.target, r = [], t) {
            switch (a) {
              case "width":
              case "height":
              case "top":
              case "left":
                r.push(a + "=" + t[a]);
                break;

              case "target":
              case "noopener":
              case "noreferrer":
                break;

              default:
                r.push(a + "=" + (t[a] ? 1 : 0));
            }
          }

          var a = r.join(",");
          if ((at("iPhone") && !at("iPod") && !at("iPad") || at("iPad") || at("iPod")) && i.navigator && i.navigator.standalone && n && "_self" != n ? (ft(a = ae(document, "A"), "HTMLAnchorElement"), e = e instanceof kt ? e : Rt(e), a.href = St(e), a.setAttribute("target", n), t.noreferrer && a.setAttribute("rel", "noreferrer"), (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, i, 1), a.dispatchEvent(t), a = {}) : t.noreferrer ? (a = Mt("", i, n, a), t = St(e), a && (Gt && it(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), a.opener = null, t = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Ut(t) + '">', t = new Lt(t = (i = bt()) ? i.createHTML(t) : t, 0, xt), i = a.document) && (i.write((o = t) instanceof Lt && o.constructor === Lt ? o.a : (D("expected object of type SafeHtml, got '" + o + "' of type " + d(o)), "type_error:SafeHtml")), i.close())) : (a = Mt(e, i, n, a)) && t.noopener && (a.opener = null), a) try {
            a.focus();
          } catch (t) {}
          return a;
        }

        var ri = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
            oi = /^[^@]+@[^@]+$/;

        function ai() {
          var e = null;
          return new fe(function (t) {
            "complete" == l.document.readyState ? t() : (e = function e() {
              t();
            }, tn(window, "load", e));
          }).o(function (t) {
            throw en(window, "load", e), t;
          });
        }

        function si(t) {
          return t = t || gi(), !("file:" !== Ti() && "ionic:" !== Ti() || !t.toLowerCase().match(/iphone|ipad|ipod|android/));
        }

        function ui() {
          var t = l.window;

          try {
            return t && t != t.top;
          } catch (t) {
            return;
          }
        }

        function ci() {
          return void 0 !== l.WorkerGlobalScope && "function" == typeof l.importScripts;
        }

        function hi() {
          return zl["default"].INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : zl["default"].INTERNAL.hasOwnProperty("node") ? "Node" : ci() ? "Worker" : "Browser";
        }

        function li() {
          var t = hi();
          return "ReactNative" === t || "Node" === t;
        }

        var fi = "Firefox",
            di = "Chrome";

        function pi(t) {
          var e = t.toLowerCase();
          return it(e, "opera/") || it(e, "opr/") || it(e, "opios/") ? "Opera" : it(e, "iemobile") ? "IEMobile" : it(e, "msie") || it(e, "trident/") ? "IE" : it(e, "edge/") ? "Edge" : it(e, "firefox/") ? fi : it(e, "silk/") ? "Silk" : it(e, "blackberry") ? "Blackberry" : it(e, "webos") ? "Webos" : !it(e, "safari/") || it(e, "chrome/") || it(e, "crios/") || it(e, "android") ? !it(e, "chrome/") && !it(e, "crios/") || it(e, "edge/") ? it(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : di : "Safari";
        }

        var vi = {
          md: "FirebaseCore-web",
          od: "FirebaseUI-web"
        };

        function mi(t, e) {
          e = e || [];
          var n,
              i = [],
              r = {};

          for (n in vi) {
            r[vi[n]] = !0;
          }

          for (n = 0; n < e.length; n++) {
            void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n]));
          }

          return i.sort(), (e = i).length || (e = ["FirebaseCore-web"]), "Browser" === (i = hi()) ? i = pi(r = gi()) : "Worker" === i && (i = pi(r = gi()) + "-" + i), i + "/JsCore/" + t + "/" + e.join(",");
        }

        function gi() {
          return l.navigator && l.navigator.userAgent || "";
        }

        function bi(t, e) {
          t = t.split("."), e = e || l;

          for (var n = 0; n < t.length && "object" == _typeof(e) && null != e; n++) {
            e = e[t[n]];
          }

          return e = n != t.length ? void 0 : e;
        }

        function yi() {
          try {
            var t = l.localStorage,
                e = Ni();
            if (t) return t.setItem(e, "1"), t.removeItem(e), !Zn() || !!l.indexedDB;
          } catch (t) {
            return ci() && !!l.indexedDB;
          }

          return !1;
        }

        function wi() {
          return (Ii() || "chrome-extension:" === Ti() || si()) && !li() && yi() && !ci();
        }

        function Ii() {
          return "http:" === Ti() || "https:" === Ti();
        }

        function Ti() {
          return l.location && l.location.protocol || null;
        }

        function Ei(t) {
          return !ei(t = t || gi()) && pi(t) != fi;
        }

        function Ai(t) {
          return void 0 === t ? null : Xn(t);
        }

        function ki(t) {
          var e,
              n = {};

          for (e in t) {
            t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]);
          }

          return n;
        }

        function Si(t) {
          if (null !== t) return JSON.parse(t);
        }

        function Ni(t) {
          return t || Math.floor(1e9 * Math.random()).toString();
        }

        function _i(t) {
          return "Safari" != pi(t = t || gi()) && !t.toLowerCase().match(/iphone|ipad|ipod/);
        }

        function Oi() {
          var t = l.___jsl;
          if (t && t.H) for (var e in t.H) {
            if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP) for (var n = 0; n < t.CP.length; n++) {
              t.CP[n] = null;
            }
          }
        }

        function Ci(t, e) {
          if (e < t) throw Error("Short delay should be less than long delay!");
          this.a = t, this.c = e, t = gi(), e = hi(), this.b = ei(t) || "ReactNative" === e;
        }

        function Ri() {
          var t = l.document;
          return !t || void 0 === t.visibilityState || "visible" == t.visibilityState;
        }

        function Di() {
          var e = l.document,
              _n2 = null;
          return Ri() || !e ? ye() : new fe(function (t) {
            _n2 = function n() {
              Ri() && (e.removeEventListener("visibilitychange", _n2, !1), t());
            }, e.addEventListener("visibilitychange", _n2, !1);
          }).o(function (t) {
            throw e.removeEventListener("visibilitychange", _n2, !1), t;
          });
        }

        function Pi(t) {
          try {
            var e = new Date(parseInt(t, 10));
            if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString();
          } catch (t) {}

          return null;
        }

        function Li() {
          return bi("fireauth.oauthhelper", l) || bi("fireauth.iframe", l);
        }

        Ci.prototype.get = function () {
          var t = l.navigator;
          return !t || "boolean" != typeof t.onLine || !Ii() && "chrome-extension:" !== Ti() && void 0 === t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a);
        };

        var xi,
            Mi = {};

        function ji(t) {
          Mi[t] || (Mi[t] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn(t));
        }

        try {
          var Ui = {};
          Object.defineProperty(Ui, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 1
          }), Object.defineProperty(Ui, "abcd", {
            configurable: !0,
            enumerable: !0,
            value: 2
          }), xi = 2 == Ui.abcd;
        } catch (t) {
          xi = !1;
        }

        function Vi(t, e, n) {
          xi ? Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n
          }) : t[e] = n;
        }

        function Fi(t, e) {
          if (e) for (var n in e) {
            e.hasOwnProperty(n) && Vi(t, n, e[n]);
          }
        }

        function qi(t) {
          var e = {};
          return Fi(e, t), e;
        }

        function Hi(t) {
          var e = t;
          if ("object" == _typeof(t) && null != t) for (var n in e = "length" in t ? [] : {}, t) {
            Vi(e, n, Hi(t[n]));
          }
          return e;
        }

        function Ki(t) {
          var e = t && (t[Ji] ? "phone" : null);
          if (!(e && t && t[Xi])) throw new T("internal-error", "Internal assert: invalid MultiFactorInfo object");
          Vi(this, "uid", t[Xi]), Vi(this, "displayName", t[Bi] || null);
          var n = null;
          Vi(this, "enrollmentTime", n = t[Wi] ? new Date(t[Wi]).toUTCString() : n), Vi(this, "factorId", e);
        }

        function Gi(t) {
          try {
            var e = new Yi(t);
          } catch (t) {
            e = null;
          }

          return e;
        }

        Ki.prototype.w = function () {
          return {
            uid: this.uid,
            displayName: this.displayName,
            factorId: this.factorId,
            enrollmentTime: this.enrollmentTime
          };
        };

        var Bi = "displayName",
            Wi = "enrolledAt",
            Xi = "mfaEnrollmentId",
            Ji = "phoneInfo";

        function Yi(t) {
          Ki.call(this, t), Vi(this, "phoneNumber", t[Ji]);
        }

        function zi(t) {
          var e = {},
              n = t[tr],
              i = t[nr],
              r = t[ir];
          if (t = Gi(t[er]), !r || r != Zi && r != Qi && !n || r == Qi && !i || r == $i && !t) throw Error("Invalid checkActionCode response!");
          r == Qi ? (e[or] = n || null, e[sr] = n || null, e[rr] = i) : (e[or] = i || null, e[sr] = i || null, e[rr] = n || null), e[ar] = t || null, Vi(this, cr, r), Vi(this, ur, Hi(e));
        }

        w(Yi, Ki), Yi.prototype.w = function () {
          var t = Yi.ab.w.call(this);
          return t.phoneNumber = this.phoneNumber, t;
        };
        var $i = "REVERT_SECOND_FACTOR_ADDITION",
            Zi = "EMAIL_SIGNIN",
            Qi = "VERIFY_AND_CHANGE_EMAIL",
            tr = "email",
            er = "mfaInfo",
            nr = "newEmail",
            ir = "requestType",
            rr = "email",
            or = "fromEmail",
            ar = "multiFactorInfo",
            sr = "previousEmail",
            ur = "data",
            cr = "operation";

        function hr(t) {
          var e = _n(t = On(t), lr) || null,
              n = _n(t, fr) || null,
              i = (i = _n(t, vr) || null) && gr[i] || null;
          if (!e || !n || !i) throw new T("argument-error", lr + ", " + fr + "and " + vr + " are required in a valid action code URL.");
          Fi(this, {
            apiKey: e,
            operation: i,
            code: n,
            continueUrl: _n(t, dr) || null,
            languageCode: _n(t, pr) || null,
            tenantId: _n(t, mr) || null
          });
        }

        var lr = "apiKey",
            fr = "oobCode",
            dr = "continueUrl",
            pr = "languageCode",
            vr = "mode",
            mr = "tenantId",
            gr = {
          recoverEmail: "RECOVER_EMAIL",
          resetPassword: "PASSWORD_RESET",
          revertSecondFactorAddition: $i,
          signIn: Zi,
          verifyAndChangeEmail: Qi,
          verifyEmail: "VERIFY_EMAIL"
        };

        function br(t) {
          try {
            return new hr(t);
          } catch (t) {
            return null;
          }
        }

        function yr(t) {
          if (void 0 === (e = t[Ar])) throw new T("missing-continue-uri");
          if ("string" != typeof e || "string" == typeof e && !e.length) throw new T("invalid-continue-uri");

          if (this.h = e, this.b = this.a = null, this.g = !1, (i = t[wr]) && "object" == _typeof(i)) {
            var e = i[Nr],
                n = i[kr],
                i = i[Sr];

            if ("string" == typeof e && e.length) {
              if (this.a = e, void 0 !== n && "boolean" != typeof n) throw new T("argument-error", kr + " property must be a boolean when specified.");
              if (this.g = !!n, void 0 !== i && ("string" != typeof i || "string" == typeof i && !i.length)) throw new T("argument-error", Sr + " property must be a non empty string when specified.");
              this.b = i || null;
            } else {
              if (void 0 !== e) throw new T("argument-error", Nr + " property must be a non empty string when specified.");
              if (void 0 !== n || void 0 !== i) throw new T("missing-android-pkg-name");
            }
          } else if (void 0 !== i) throw new T("argument-error", wr + " property must be a non null object when specified.");

          if (this.f = null, (e = t[Er]) && "object" == _typeof(e)) {
            if ("string" == typeof (e = e[_r]) && e.length) this.f = e;else if (void 0 !== e) throw new T("argument-error", _r + " property must be a non empty string when specified.");
          } else if (void 0 !== e) throw new T("argument-error", Er + " property must be a non null object when specified.");

          if (void 0 !== (e = t[Tr]) && "boolean" != typeof e) throw new T("argument-error", Tr + " property must be a boolean when specified.");
          if (this.c = !!e, void 0 !== (t = t[Ir]) && ("string" != typeof t || "string" == typeof t && !t.length)) throw new T("argument-error", Ir + " property must be a non empty string when specified.");
          this.i = t || null;
        }

        var wr = "android",
            Ir = "dynamicLinkDomain",
            Tr = "handleCodeInApp",
            Er = "iOS",
            Ar = "url",
            kr = "installApp",
            Sr = "minimumVersion",
            Nr = "packageName",
            _r = "bundleId";

        function Or(t) {
          var e,
              n = {};

          for (e in n.continueUrl = t.h, n.canHandleCodeInApp = t.c, (n.androidPackageName = t.a) && (n.androidMinimumVersion = t.b, n.androidInstallApp = t.g), n.iOSBundleId = t.f, n.dynamicLinkDomain = t.i, n) {
            null === n[e] && delete n[e];
          }

          return n;
        }

        var Cr = null;

        function Rr(t) {
          var e = [];
          return function (i, t) {
            function e(t) {
              for (; r < i.length;) {
                var e = i.charAt(r++),
                    n = Cr[e];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(e)) throw Error("Unknown base64 encoding at char: " + e);
              }

              return t;
            }

            !function () {
              if (!Cr) {
                Cr = {};

                for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], n = 0; n < 5; n++) {
                  for (var i = t.concat(e[n].split("")), r = 0; r < i.length; r++) {
                    var o = i[r];
                    void 0 === Cr[o] && (Cr[o] = r);
                  }
                }
              }
            }();

            for (var r = 0;;) {
              var n = e(-1),
                  o = e(0),
                  a = e(64),
                  s = e(64);
              if (64 === s && -1 === n) break;
              t(n << 2 | o >> 4), 64 != a && (t(o << 4 & 240 | a >> 2), 64 != s && t(a << 6 & 192 | s));
            }
          }(t, function (t) {
            e.push(t);
          }), e;
        }

        function Dr(t) {
          var e = Lr(t);
          if (!(e && e.sub && e.iss && e.aud && e.exp)) throw Error("Invalid JWT");
          this.h = t, this.a = e.exp, this.i = e.sub, t = Date.now() / 1e3, this.g = e.iat || (t > this.a ? this.a : t), this.b = e.provider_id || e.firebase && e.firebase.sign_in_provider || null, this.f = e.firebase && e.firebase.tenant || null, this.c = !!e.is_anonymous || "anonymous" == this.b;
        }

        function Pr(t) {
          try {
            return new Dr(t);
          } catch (t) {
            return null;
          }
        }

        function Lr(t) {
          if (!t) return null;
          if (3 != (t = t.split(".")).length) return null;

          for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) {
            t += ".";
          }

          try {
            var i = Rr(t);

            for (t = [], n = e = 0; e < i.length;) {
              var r,
                  o,
                  a,
                  s = i[e++];
              s < 128 ? t[n++] = String.fromCharCode(s) : 191 < s && s < 224 ? (r = i[e++], t[n++] = String.fromCharCode((31 & s) << 6 | 63 & r)) : 239 < s && s < 365 ? (a = ((7 & s) << 18 | (63 & (r = i[e++])) << 12 | (63 & (o = i[e++])) << 6 | 63 & i[e++]) - 65536, t[n++] = String.fromCharCode(55296 + (a >> 10)), t[n++] = String.fromCharCode(56320 + (1023 & a))) : (r = i[e++], o = i[e++], t[n++] = String.fromCharCode((15 & s) << 12 | (63 & r) << 6 | 63 & o));
            }

            return JSON.parse(t.join(""));
          } catch (t) {}

          return null;
        }

        Dr.prototype.T = function () {
          return this.f;
        }, Dr.prototype.l = function () {
          return this.c;
        }, Dr.prototype.toString = function () {
          return this.h;
        };
        var xr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
            Mr = ["client_id", "response_type", "scope", "redirect_uri", "state"],
            jr = {
          nd: {
            Ja: "locale",
            ua: 700,
            ta: 600,
            fa: "facebook.com",
            Xa: Mr
          },
          pd: {
            Ja: null,
            ua: 500,
            ta: 750,
            fa: "github.com",
            Xa: Mr
          },
          qd: {
            Ja: "hl",
            ua: 515,
            ta: 680,
            fa: "google.com",
            Xa: Mr
          },
          wd: {
            Ja: "lang",
            ua: 485,
            ta: 705,
            fa: "twitter.com",
            Xa: xr
          },
          kd: {
            Ja: "locale",
            ua: 640,
            ta: 600,
            fa: "apple.com",
            Xa: []
          }
        };

        function Ur(t) {
          for (var e in jr) {
            if (jr[e].fa == t) return jr[e];
          }

          return null;
        }

        function Vr(t) {
          var e = {};
          e["facebook.com"] = Gr, e["google.com"] = Wr, e["github.com"] = Br, e["twitter.com"] = Xr;
          var n = t && t[qr];

          try {
            if (n) return new (e[n] || Kr)(t);
            if (void 0 !== t[Fr]) return new Hr(t);
          } catch (t) {}

          return null;
        }

        var Fr = "idToken",
            qr = "providerId";

        function Hr(t) {
          var e,
              n = t[qr];
          if (n || !t[Fr] || (e = Pr(t[Fr])) && e.b && (n = e.b), !n) throw Error("Invalid additional user info!");
          e = !1, void 0 !== t.isNewUser ? e = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (e = !0), Vi(this, "providerId", n = "anonymous" == n || "custom" == n ? null : n), Vi(this, "isNewUser", e);
        }

        function Kr(t) {
          Hr.call(this, t), Vi(this, "profile", Hi((t = Si(t.rawUserInfo || "{}")) || {}));
        }

        function Gr(t) {
          if (Kr.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!");
        }

        function Br(t) {
          if (Kr.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
          Vi(this, "username", this.profile && this.profile.login || null);
        }

        function Wr(t) {
          if (Kr.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!");
        }

        function Xr(t) {
          if (Kr.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
          Vi(this, "username", t.screenName || null);
        }

        function Jr(t) {
          var e = _n(i = On(t), "link"),
              n = _n(On(e), "link"),
              i = _n(i, "deep_link_id");

          return _n(On(i), "link") || i || n || e || t;
        }

        function Yr(t, e) {
          if (!t && !e) throw new T("internal-error", "Internal assert: no raw session string available");
          if (t && e) throw new T("internal-error", "Internal assert: unable to determine the session type");
          this.a = t || null, this.b = e || null, this.type = this.a ? zr : $r;
        }

        w(Kr, Hr), w(Gr, Kr), w(Br, Kr), w(Wr, Kr), w(Xr, Kr);
        var zr = "enroll",
            $r = "signin";

        function Zr() {}

        function Qr(t, n) {
          return t.then(function (t) {
            if (t[Ha]) {
              var e = Pr(t[Ha]);
              if (!e || n != e.i) throw new T("user-mismatch");
              return t;
            }

            throw new T("user-mismatch");
          }).o(function (t) {
            throw t && t.code && t.code == k + "user-not-found" ? new T("user-mismatch") : t;
          });
        }

        function to(t, e) {
          if (!e) throw new T("internal-error", "failed to construct a credential");
          this.a = e, Vi(this, "providerId", t), Vi(this, "signInMethod", t);
        }

        function eo(t) {
          return {
            pendingToken: t.a,
            requestUri: "http://localhost"
          };
        }

        function no(t) {
          if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken) try {
            return new to(t.providerId, t.pendingToken);
          } catch (t) {}
          return null;
        }

        function io(t, e, n) {
          if (this.a = null, e.idToken || e.accessToken) e.idToken && Vi(this, "idToken", e.idToken), e.accessToken && Vi(this, "accessToken", e.accessToken), e.nonce && !e.pendingToken && Vi(this, "nonce", e.nonce), e.pendingToken && (this.a = e.pendingToken);else {
            if (!e.oauthToken || !e.oauthTokenSecret) throw new T("internal-error", "failed to construct a credential");
            Vi(this, "accessToken", e.oauthToken), Vi(this, "secret", e.oauthTokenSecret);
          }
          Vi(this, "providerId", t), Vi(this, "signInMethod", n);
        }

        function ro(t) {
          var e = {};
          return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = {
            postBody: qn(e).toString(),
            requestUri: "http://localhost"
          }, t.a && (delete e.postBody, e.pendingToken = t.a), e;
        }

        function oo(t) {
          if (t && t.providerId && t.signInMethod) {
            var e = {
              idToken: t.oauthIdToken,
              accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
              oauthTokenSecret: t.oauthTokenSecret,
              oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
              nonce: t.nonce,
              pendingToken: t.pendingToken
            };

            try {
              return new io(t.providerId, e, t.signInMethod);
            } catch (t) {}
          }

          return null;
        }

        function ao(t, e) {
          this.Qc = e || [], Fi(this, {
            providerId: t,
            isOAuthProvider: !0
          }), this.Ib = {}, this.pb = (Ur(t) || {}).Ja || null, this.ob = null;
        }

        function so(t) {
          if ("string" != typeof t || 0 != t.indexOf("saml.")) throw new T("argument-error", 'SAML provider IDs must be prefixed with "saml."');
          ao.call(this, t, []);
        }

        function uo(t) {
          ao.call(this, t, Mr), this.a = [];
        }

        function co() {
          uo.call(this, "facebook.com");
        }

        function ho(t) {
          if (!t) throw new T("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
          var e = t;
          return m(t) && (e = t.accessToken), new co().credential({
            accessToken: e
          });
        }

        function lo() {
          uo.call(this, "github.com");
        }

        function fo(t) {
          if (!t) throw new T("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
          var e = t;
          return m(t) && (e = t.accessToken), new lo().credential({
            accessToken: e
          });
        }

        function po() {
          uo.call(this, "google.com"), this.Ca("profile");
        }

        function vo(t, e) {
          var n = t;
          return m(t) && (n = t.idToken, e = t.accessToken), new po().credential({
            idToken: n,
            accessToken: e
          });
        }

        function mo() {
          ao.call(this, "twitter.com", xr);
        }

        function go(t, e) {
          var n = t;
          if (!(n = !m(n) ? {
            oauthToken: t,
            oauthTokenSecret: e
          } : n).oauthToken || !n.oauthTokenSecret) throw new T("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
          return new io("twitter.com", n, "twitter.com");
        }

        function bo(t, e, n) {
          this.a = t, this.f = e, Vi(this, "providerId", "password"), Vi(this, "signInMethod", n === wo.EMAIL_LINK_SIGN_IN_METHOD ? wo.EMAIL_LINK_SIGN_IN_METHOD : wo.EMAIL_PASSWORD_SIGN_IN_METHOD);
        }

        function yo(t) {
          return t && t.email && t.password ? new bo(t.email, t.password, t.signInMethod) : null;
        }

        function wo() {
          Fi(this, {
            providerId: "password",
            isOAuthProvider: !1
          });
        }

        function Io(t, e) {
          if (!(e = To(e))) throw new T("argument-error", "Invalid email link!");
          return new bo(t, e.code, wo.EMAIL_LINK_SIGN_IN_METHOD);
        }

        function To(t) {
          return (t = br(t = Jr(t))) && t.operation === Zi ? t : null;
        }

        function Eo(t) {
          if (!(t.eb && t.cb || t.La && t.ea)) throw new T("internal-error");
          this.a = t, Vi(this, "providerId", "phone"), this.fa = "phone", Vi(this, "signInMethod", "phone");
        }

        function Ao(e) {
          if (e && "phone" === e.providerId && (e.verificationId && e.verificationCode || e.temporaryProof && e.phoneNumber)) {
            var n = {};
            return V(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function (t) {
              e[t] && (n[t] = e[t]);
            }), new Eo(n);
          }

          return null;
        }

        function ko(t) {
          return t.a.La && t.a.ea ? {
            temporaryProof: t.a.La,
            phoneNumber: t.a.ea
          } : {
            sessionInfo: t.a.eb,
            code: t.a.cb
          };
        }

        function So(t) {
          try {
            this.a = t || zl["default"].auth();
          } catch (t) {
            throw new T("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
          }

          Fi(this, {
            providerId: "phone",
            isOAuthProvider: !1
          });
        }

        function No(t, e) {
          if (!t) throw new T("missing-verification-id");
          if (!e) throw new T("missing-verification-code");
          return new Eo({
            eb: t,
            cb: e
          });
        }

        function _o(t) {
          if (t.temporaryProof && t.phoneNumber) return new Eo({
            La: t.temporaryProof,
            ea: t.phoneNumber
          });
          var e = t && t.providerId;
          if (!e || "password" === e) return null;
          var n = t && t.oauthAccessToken,
              i = t && t.oauthTokenSecret,
              r = t && t.nonce,
              o = t && t.oauthIdToken,
              a = t && t.pendingToken;

          try {
            switch (e) {
              case "google.com":
                return vo(o, n);

              case "facebook.com":
                return ho(n);

              case "github.com":
                return fo(n);

              case "twitter.com":
                return go(n, i);

              default:
                return n || i || o || a ? a ? 0 == e.indexOf("saml.") ? new to(e, a) : new io(e, {
                  pendingToken: a,
                  idToken: t.oauthIdToken,
                  accessToken: t.oauthAccessToken
                }, e) : new uo(e).credential({
                  idToken: o,
                  accessToken: n,
                  rawNonce: r
                }) : null;
            }
          } catch (t) {
            return null;
          }
        }

        function Oo(t) {
          if (!t.isOAuthProvider) throw new T("invalid-oauth-provider");
        }

        function Co(t, e, n, i, r, o, a) {
          if (this.c = t, this.b = e || null, this.g = n || null, this.f = i || null, this.i = o || null, this.h = a || null, this.a = r || null, !this.g && !this.a) throw new T("invalid-auth-event");
          if (this.g && this.a) throw new T("invalid-auth-event");
          if (this.g && !this.f) throw new T("invalid-auth-event");
        }

        function Ro(t) {
          return (t = t || {}).type ? new Co(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && E(t.error), t.postBody, t.tenantId) : null;
        }

        function Do() {
          this.b = null, this.a = [];
        }

        Yr.prototype.Ha = function () {
          return this.a ? ye(this.a) : ye(this.b);
        }, Yr.prototype.w = function () {
          return this.type == zr ? {
            multiFactorSession: {
              idToken: this.a
            }
          } : {
            multiFactorSession: {
              pendingCredential: this.b
            }
          };
        }, Zr.prototype.ka = function () {}, Zr.prototype.b = function () {}, Zr.prototype.c = function () {}, Zr.prototype.w = function () {}, to.prototype.ka = function (t) {
          return hs(t, eo(this));
        }, to.prototype.b = function (t, e) {
          var n = eo(this);
          return n.idToken = e, ls(t, n);
        }, to.prototype.c = function (t, e) {
          return Qr(fs(t, eo(this)), e);
        }, to.prototype.w = function () {
          return {
            providerId: this.providerId,
            signInMethod: this.signInMethod,
            pendingToken: this.a
          };
        }, io.prototype.ka = function (t) {
          return hs(t, ro(this));
        }, io.prototype.b = function (t, e) {
          var n = ro(this);
          return n.idToken = e, ls(t, n);
        }, io.prototype.c = function (t, e) {
          return Qr(fs(t, ro(this)), e);
        }, io.prototype.w = function () {
          var t = {
            providerId: this.providerId,
            signInMethod: this.signInMethod
          };
          return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t;
        }, ao.prototype.Ka = function (t) {
          return this.Ib = ct(t), this;
        }, w(so, ao), w(uo, ao), uo.prototype.Ca = function (t) {
          return K(this.a, t) || this.a.push(t), this;
        }, uo.prototype.Qb = function () {
          return X(this.a);
        }, uo.prototype.credential = function (t, e) {
          e = m(t) ? {
            idToken: t.idToken || null,
            accessToken: t.accessToken || null,
            nonce: t.rawNonce || null
          } : {
            idToken: t || null,
            accessToken: e || null
          };
          if (!e.idToken && !e.accessToken) throw new T("argument-error", "credential failed: must provide the ID token and/or the access token.");
          return new io(this.providerId, e, this.providerId);
        }, w(co, uo), Vi(co, "PROVIDER_ID", "facebook.com"), Vi(co, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), w(lo, uo), Vi(lo, "PROVIDER_ID", "github.com"), Vi(lo, "GITHUB_SIGN_IN_METHOD", "github.com"), w(po, uo), Vi(po, "PROVIDER_ID", "google.com"), Vi(po, "GOOGLE_SIGN_IN_METHOD", "google.com"), w(mo, ao), Vi(mo, "PROVIDER_ID", "twitter.com"), Vi(mo, "TWITTER_SIGN_IN_METHOD", "twitter.com"), bo.prototype.ka = function (t) {
          return this.signInMethod == wo.EMAIL_LINK_SIGN_IN_METHOD ? Xs(t, ws, {
            email: this.a,
            oobCode: this.f
          }) : Xs(t, Hs, {
            email: this.a,
            password: this.f
          });
        }, bo.prototype.b = function (t, e) {
          return this.signInMethod == wo.EMAIL_LINK_SIGN_IN_METHOD ? Xs(t, Is, {
            idToken: e,
            email: this.a,
            oobCode: this.f
          }) : Xs(t, Ls, {
            idToken: e,
            email: this.a,
            password: this.f
          });
        }, bo.prototype.c = function (t, e) {
          return Qr(this.ka(t), e);
        }, bo.prototype.w = function () {
          return {
            email: this.a,
            password: this.f,
            signInMethod: this.signInMethod
          };
        }, Fi(wo, {
          PROVIDER_ID: "password"
        }), Fi(wo, {
          EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
        }), Fi(wo, {
          EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
        }), Eo.prototype.ka = function (t) {
          return t.fb(ko(this));
        }, Eo.prototype.b = function (t, e) {
          var n = ko(this);
          return n.idToken = e, Xs(t, Gs, n);
        }, Eo.prototype.c = function (t, e) {
          var n = ko(this);
          return n.operation = "REAUTH", Qr(t = Xs(t, Bs, n), e);
        }, Eo.prototype.w = function () {
          var t = {
            providerId: "phone"
          };
          return this.a.eb && (t.verificationId = this.a.eb), this.a.cb && (t.verificationCode = this.a.cb), this.a.La && (t.temporaryProof = this.a.La), this.a.ea && (t.phoneNumber = this.a.ea), t;
        }, So.prototype.fb = function (i, r) {
          var o = this.a.a;
          return ye(r.verify()).then(function (e) {
            if ("string" != typeof e) throw new T("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
            if ("recaptcha" !== r.type) throw new T("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
            var t = m(i) ? i.session : null,
                n = m(i) ? i.phoneNumber : i,
                t = t && t.type == zr ? t.Ha().then(function (t) {
              return Xs(o, Ms, {
                idToken: t,
                phoneEnrollmentInfo: {
                  phoneNumber: n,
                  recaptchaToken: e
                }
              }).then(function (t) {
                return t.phoneSessionInfo.sessionInfo;
              });
            }) : t && t.type == $r ? t.Ha().then(function (t) {
              return t = {
                mfaPendingCredential: t,
                mfaEnrollmentId: i.multiFactorHint && i.multiFactorHint.uid || i.multiFactorUid,
                phoneSignInInfo: {
                  recaptchaToken: e
                }
              }, Xs(o, js, t).then(function (t) {
                return t.phoneResponseInfo.sessionInfo;
              });
            }) : Xs(o, Ds, {
              phoneNumber: n,
              recaptchaToken: e
            });
            return t.then(function (t) {
              return "function" == typeof r.reset && r.reset(), t;
            }, function (t) {
              throw "function" == typeof r.reset && r.reset(), t;
            });
          });
        }, Fi(So, {
          PROVIDER_ID: "phone"
        }), Fi(So, {
          PHONE_SIGN_IN_METHOD: "phone"
        }), Co.prototype.getUid = function () {
          var t = [];
          return t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.h && t.push(this.h), t.join("-");
        }, Co.prototype.T = function () {
          return this.h;
        }, Co.prototype.w = function () {
          return {
            type: this.c,
            eventId: this.b,
            urlResponse: this.g,
            sessionId: this.f,
            postBody: this.i,
            tenantId: this.h,
            error: this.a && this.a.w()
          };
        };
        var Po,
            Lo = null;

        function xo(t) {
          var e = "unauthorized-domain",
              n = void 0,
              i = On(t);
          t = i.a, "chrome-extension" == (i = i.c) ? n = jt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? n = jt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment", T.call(this, e, n);
        }

        function Mo(t, e, n) {
          T.call(this, t, n), (t = e || {}).Jb && Vi(this, "email", t.Jb), t.ea && Vi(this, "phoneNumber", t.ea), t.credential && Vi(this, "credential", t.credential), t.Zb && Vi(this, "tenantId", t.Zb);
        }

        function jo(t) {
          if (t.code) {
            var e = t.code || "";
            0 == e.indexOf(k) && (e = e.substring(k.length));
            var n = {
              credential: _o(t),
              Zb: t.tenantId
            };
            if (t.email) n.Jb = t.email;else if (t.phoneNumber) n.ea = t.phoneNumber;else if (!n.credential) return new T(e, t.message || void 0);
            return new Mo(e, n, t.message);
          }

          return null;
        }

        function Uo() {}

        function Vo(t) {
          return t.c || (t.c = t.b());
        }

        function Fo() {}

        function qo(t) {
          if (t.f || "undefined" != typeof XMLHttpRequest || "undefined" == typeof ActiveXObject) return t.f;

          for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) {
            var i = e[n];

            try {
              return new ActiveXObject(i), t.f = i;
            } catch (t) {}
          }

          throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }

        function Ho() {}

        function Ko() {
          this.a = new XDomainRequest(), this.readyState = 0, this.onreadystatechange = null, this.responseType = this.responseText = this.response = "", this.status = -1, this.statusText = "", this.a.onload = b(this.qc, this), this.a.onerror = b(this.Sb, this), this.a.onprogress = b(this.rc, this), this.a.ontimeout = b(this.vc, this);
        }

        function Go(t, e) {
          t.readyState = e, t.onreadystatechange && t.onreadystatechange();
        }

        function Bo(t, e, n) {
          this.reset(t, e, n, void 0, void 0);
        }

        function Wo(t) {
          this.f = t, this.b = this.c = this.a = null;
        }

        function Xo(t, e) {
          this.name = t, this.value = e;
        }

        w(xo, T), w(Mo, T), Mo.prototype.w = function () {
          var t = {
            code: this.code,
            message: this.message
          };
          this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber), this.tenantId && (t.tenantId = this.tenantId);
          var e = this.credential && this.credential.w();
          return e && lt(t, e), t;
        }, Mo.prototype.toJSON = function () {
          return this.w();
        }, Uo.prototype.c = null, w(Fo, Uo), Fo.prototype.a = function () {
          var t = qo(this);
          return t ? new ActiveXObject(t) : new XMLHttpRequest();
        }, Fo.prototype.b = function () {
          var t = {};
          return qo(this) && (t[0] = !0, t[1] = !0), t;
        }, Po = new Fo(), w(Ho, Uo), Ho.prototype.a = function () {
          var t = new XMLHttpRequest();
          if ("withCredentials" in t) return t;
          if ("undefined" != typeof XDomainRequest) return new Ko();
          throw Error("Unsupported browser");
        }, Ho.prototype.b = function () {
          return {};
        }, (t = Ko.prototype).open = function (t, e, n) {
          if (null != n && !n) throw Error("Only async requests are supported.");
          this.a.open(t, e);
        }, t.send = function (t) {
          if (t) {
            if ("string" != typeof t) throw Error("Only string data is supported");
            this.a.send(t);
          } else this.a.send();
        }, t.abort = function () {
          this.a.abort();
        }, t.setRequestHeader = function () {}, t.getResponseHeader = function (t) {
          return "content-type" == t.toLowerCase() ? this.a.contentType : "";
        }, t.qc = function () {
          this.status = 200, this.response = this.responseText = this.a.responseText, Go(this, 4);
        }, t.Sb = function () {
          this.status = 500, this.response = this.responseText = "", Go(this, 4);
        }, t.vc = function () {
          this.Sb();
        }, t.rc = function () {
          this.status = 200, Go(this, 1);
        }, t.getAllResponseHeaders = function () {
          return "content-type: " + this.a.contentType;
        }, Bo.prototype.a = null, Bo.prototype.reset = function (t, e, n, i, r) {
          delete this.a;
        }, Xo.prototype.toString = function () {
          return this.name;
        };
        var Jo = new Xo("SEVERE", 1e3),
            Yo = new Xo("WARNING", 900),
            zo = new Xo("CONFIG", 700),
            $o = new Xo("FINE", 500);

        Wo.prototype.log = function (t, e, n) {
          if (t.value >= function t(e) {
            return e.c || (e.a ? t(e.a) : (D("Root logger has no level set."), null));
          }(this).value) for (v(e) && (e = e()), t = new Bo(t, String(e), this.f), n && (t.a = n), n = this; n;) {
            n = n.a;
          }
        };

        var Zo,
            Qo = {},
            ta = null;

        function ea(t) {
          var e, n, i;
          return ta || (ta = new Wo(""), (Qo[""] = ta).c = zo), (e = Qo[t]) || (e = new Wo(t), i = t.lastIndexOf("."), n = t.substr(i + 1), (i = ea(t.substr(0, i))).b || (i.b = {}), (i.b[n] = e).a = i, Qo[t] = e), e;
        }

        function na(t, e) {
          t && t.log($o, e, void 0);
        }

        function ia(t) {
          this.f = t;
        }

        function ra(t) {
          ln.call(this), this.u = t, this.h = void 0, this.readyState = oa, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.l = new Headers(), this.b = null, this.s = "GET", this.f = "", this.a = !1, this.i = ea("goog.net.FetchXmlHttp"), this.m = this.c = this.g = null;
        }

        w(ia, Uo), ia.prototype.a = function () {
          return new ra(this.f);
        }, ia.prototype.b = (Zo = {}, function () {
          return Zo;
        }), w(ra, ln);
        var oa = 0;

        function aa(t) {
          t.c.read().then(t.pc.bind(t))["catch"](t.Ua.bind(t));
        }

        function sa(t) {
          t.readyState = 4, t.g = null, t.c = null, t.m = null, ua(t);
        }

        function ua(t) {
          t.onreadystatechange && t.onreadystatechange.call(t);
        }

        function ca(t) {
          ln.call(this), this.headers = new yn(), this.D = t || null, this.c = !1, this.C = this.a = null, this.h = this.R = this.l = "", this.f = this.O = this.i = this.J = !1, this.g = 0, this.s = null, this.m = ha, this.u = this.S = !1;
        }

        (t = ra.prototype).open = function (t, e) {
          if (this.readyState != oa) throw this.abort(), Error("Error reopening a connection");
          this.s = t, this.f = e, this.readyState = 1, ua(this);
        }, t.send = function (t) {
          if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
          this.a = !0;
          var e = {
            headers: this.l,
            method: this.s,
            credentials: this.h,
            cache: void 0
          };
          t && (e.body = t), this.u.fetch(new Request(this.f, e)).then(this.uc.bind(this), this.Ua.bind(this));
        }, t.abort = function () {
          this.response = this.responseText = "", this.l = new Headers(), this.status = 0, this.c && this.c.cancel("Request was aborted."), 1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, sa(this)), this.readyState = oa;
        }, t.uc = function (t) {
          this.a && (this.g = t, this.b || (this.status = this.g.status, this.statusText = this.g.statusText, this.b = t.headers, this.readyState = 2, ua(this)), this.a && (this.readyState = 3, ua(this), this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.sc.bind(this), this.Ua.bind(this)) : void 0 !== l.ReadableStream && "body" in t ? (this.response = this.responseText = "", this.c = t.body.getReader(), this.m = new TextDecoder(), aa(this)) : t.text().then(this.tc.bind(this), this.Ua.bind(this)))));
        }, t.pc = function (t) {
          var e;
          this.a && ((e = this.m.decode(t.value || new Uint8Array(0), {
            stream: !t.done
          })) && (this.response = this.responseText += e), (t.done ? sa : ua)(this), 3 == this.readyState && aa(this));
        }, t.tc = function (t) {
          this.a && (this.response = this.responseText = t, sa(this));
        }, t.sc = function (t) {
          this.a && (this.response = t, sa(this));
        }, t.Ua = function (t) {
          var e = this.i;
          e && e.log(Yo, "Failed to fetch url " + this.f, t instanceof Error ? t : Error(t)), this.a && sa(this);
        }, t.setRequestHeader = function (t, e) {
          this.l.append(t, e);
        }, t.getResponseHeader = function (t) {
          return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.i) && t.log(Yo, "Attempting to get response header but no headers have been received for url: " + this.f, void 0), "");
        }, t.getAllResponseHeaders = function () {
          if (!this.b) {
            var t = this.i;
            return t && t.log(Yo, "Attempting to get all response headers but no headers have been received for url: " + this.f, void 0), "";
          }

          for (var t = [], e = this.b.entries(), n = e.next(); !n.done;) {
            n = n.value, t.push(n[0] + ": " + n[1]), n = e.next();
          }

          return t.join("\r\n");
        }, Object.defineProperty(ra.prototype, "withCredentials", {
          get: function get() {
            return "include" === this.h;
          },
          set: function set(t) {
            this.h = t ? "include" : "same-origin";
          }
        }), w(ca, ln);
        var ha = "";
        ca.prototype.b = ea("goog.net.XhrIo");
        var la = /^https?$/i,
            fa = ["POST", "PUT"];

        function da(e, t, n, i, r) {
          if (e.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + e.l + "; newUri=" + t);
          n = n ? n.toUpperCase() : "GET", e.l = t, e.h = "", e.R = n, e.J = !1, e.c = !0, e.a = (e.D || Po).a(), e.C = e.D ? Vo(e.D) : Vo(Po), e.a.onreadystatechange = b(e.Vb, e);

          try {
            na(e.b, Ta(e, "Opening Xhr")), e.O = !0, e.a.open(n, String(t), !0), e.O = !1;
          } catch (t) {
            return na(e.b, Ta(e, "Error opening Xhr: " + t.message)), void va(e, t);
          }

          t = i || "";
          var o,
              a = new yn(e.headers);
          r && function (t, e) {
            if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);else if (p(t) || "string" == typeof t) V(t, e, void 0);else for (var n = bn(t), i = gn(t), r = i.length, o = 0; o < r; o++) {
              e.call(void 0, i[o], n && n[o], t);
            }
          }(r, function (t, e) {
            a.set(e, t);
          }), r = function (t) {
            t: {
              for (var e = pa, n = t.length, i = "string" == typeof t ? t.split("") : t, r = 0; r < n; r++) {
                if (r in i && e.call(void 0, i[r], r, t)) {
                  e = r;
                  break t;
                }
              }

              e = -1;
            }

            return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e];
          }(a.Y()), i = l.FormData && t instanceof l.FormData, !K(fa, n) || r || i || a.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), a.forEach(function (t, e) {
            this.a.setRequestHeader(e, t);
          }, e), e.m && (e.a.responseType = e.m), "withCredentials" in e.a && e.a.withCredentials !== e.S && (e.a.withCredentials = e.S);

          try {
            ya(e), 0 < e.g && (e.u = (o = e.a, Ht && $t(9) && "number" == typeof o.timeout && void 0 !== o.ontimeout), na(e.b, Ta(e, "Will abort after " + e.g + "ms if incomplete, xhr2 " + e.u)), e.u ? (e.a.timeout = e.g, e.a.ontimeout = b(e.Ma, e)) : e.s = vn(e.Ma, e.g, e)), na(e.b, Ta(e, "Sending request")), e.i = !0, e.a.send(t), e.i = !1;
          } catch (t) {
            na(e.b, Ta(e, "Send error: " + t.message)), va(e, t);
          }
        }

        function pa(t) {
          return "content-type" == t.toLowerCase();
        }

        function va(t, e) {
          t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, ma(t), ba(t);
        }

        function ma(t) {
          t.J || (t.J = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"));
        }

        function ga(e) {
          if (e.c && void 0 !== h) if (e.C[1] && 4 == wa(e) && 2 == Ia(e)) na(e.b, Ta(e, "Local request error detected and ignored"));else if (e.i && 4 == wa(e)) vn(e.Vb, 0, e);else if (e.dispatchEvent("readystatechange"), 4 == wa(e)) {
            na(e.b, Ta(e, "Request complete")), e.c = !1;

            try {
              var t,
                  n,
                  i,
                  r,
                  o = Ia(e);

              t: switch (o) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                  var a = !0;
                  break t;

                default:
                  a = !1;
              }

              if ((t = a) || ((n = 0 === o) && (!(r = String(e.l).match(Tn)[1] || null) && l.self && l.self.location && (r = (i = l.self.location.protocol).substr(0, i.length - 1)), n = !la.test(r ? r.toLowerCase() : "")), t = n), t) e.dispatchEvent("complete"), e.dispatchEvent("success");else {
                try {
                  var s = 2 < wa(e) ? e.a.statusText : "";
                } catch (t) {
                  na(e.b, "Can not get status: " + t.message), s = "";
                }

                e.h = s + " [" + Ia(e) + "]", ma(e);
              }
            } finally {
              ba(e);
            }
          }
        }

        function ba(e, t) {
          if (e.a) {
            ya(e);
            var n = e.a,
                i = e.C[0] ? a : null;
            e.a = null, e.C = null, t || e.dispatchEvent("ready");

            try {
              n.onreadystatechange = i;
            } catch (t) {
              (e = e.b) && e.log(Jo, "Problem encountered resetting onreadystatechange: " + t.message, void 0);
            }
          }
        }

        function ya(t) {
          t.a && t.u && (t.a.ontimeout = null), t.s && (l.clearTimeout(t.s), t.s = null);
        }

        function wa(t) {
          return t.a ? t.a.readyState : 0;
        }

        function Ia(t) {
          try {
            return 2 < wa(t) ? t.a.status : -1;
          } catch (t) {
            return -1;
          }
        }

        function Ta(t, e) {
          return e + " [" + t.R + " " + t.l + " " + Ia(t) + "]";
        }

        function Ea(t) {
          var e = La;
          this.g = [], this.u = e, this.s = t || null, this.f = this.a = !1, this.c = void 0, this.v = this.C = this.i = !1, this.h = 0, this.b = null, this.l = 0;
        }

        function Aa(t, e, n) {
          t.a = !0, t.c = n, t.f = !e, _a(t);
        }

        function ka(t) {
          if (t.a) {
            if (!t.v) throw new Oa();
            t.v = !1;
          }
        }

        function Sa(t, e, n, i) {
          t.g.push([e, n, i]), t.a && _a(t);
        }

        function Na(t) {
          return H(t.g, function (t) {
            return v(t[1]);
          });
        }

        function _a(e) {
          var n;
          e.h && e.a && Na(e) && (i = e.h, (n = Da[i]) && (l.clearTimeout(n.a), delete Da[i]), e.h = 0), e.b && (e.b.l--, delete e.b);

          for (var i = e.c, t = n = !1; e.g.length && !e.i;) {
            var r = (a = e.g.shift())[0],
                o = a[1],
                a = a[2];
            if (r = e.f ? o : r) try {
              var s = r.call(a || e.s, i);
              void 0 !== s && (e.f = e.f && (s == i || s instanceof Error), e.c = i = s), (O(i) || "function" == typeof l.Promise && i instanceof l.Promise) && (t = !0, e.i = !0);
            } catch (t) {
              i = t, e.f = !0, Na(e) || (n = !0);
            }
          }

          e.c = i, t && (s = b(e.m, e, !0), t = b(e.m, e, !1), i instanceof Ea ? (Sa(i, s, t), i.C = !0) : i.then(s, t)), n && (i = new Ra(i), Da[i.a] = i, e.h = i.a);
        }

        function Oa() {
          C.call(this);
        }

        function Ca() {
          C.call(this);
        }

        function Ra(t) {
          this.a = l.setTimeout(b(this.c, this), 0), this.b = t;
        }

        (t = ca.prototype).Ma = function () {
          void 0 !== h && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", na(this.b, Ta(this, this.h)), this.dispatchEvent("timeout"), this.abort(8));
        }, t.abort = function () {
          this.a && this.c && (na(this.b, Ta(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ba(this));
        }, t.Da = function () {
          this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), ba(this, !0)), ca.ab.Da.call(this);
        }, t.Vb = function () {
          this.xa || (this.O || this.i || this.f ? ga(this) : this.Jc());
        }, t.Jc = function () {
          ga(this);
        }, t.getResponse = function () {
          try {
            if (!this.a) return null;
            if ("response" in this.a) return this.a.response;

            switch (this.m) {
              case ha:
              case "text":
                return this.a.responseText;

              case "arraybuffer":
                if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer;
            }

            var t = this.b;
            return t && t.log(Jo, "Response type " + this.m + " is not supported on this browser", void 0), null;
          } catch (t) {
            return na(this.b, "Can not get response: " + t.message), null;
          }
        }, Ea.prototype.cancel = function (t) {
          var e;
          this.a ? this.c instanceof Ea && this.c.cancel() : (this.b && (e = this.b, delete this.b, t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel())), this.u ? this.u.call(this.s, this) : this.v = !0, this.a || (t = new Ca(), ka(this), Aa(this, !1, t)));
        }, Ea.prototype.m = function (t, e) {
          this.i = !1, Aa(this, t, e);
        }, Ea.prototype.then = function (t, e, n) {
          var i,
              r,
              o = new fe(function (t, e) {
            i = t, r = e;
          });
          return Sa(this, i, function (t) {
            t instanceof Ca ? o.cancel() : r(t);
          }), o.then(t, e, n);
        }, Ea.prototype.$goog_Thenable = !0, w(Oa, C), Oa.prototype.message = "Deferred has already fired", Oa.prototype.name = "AlreadyCalledError", w(Ca, C), Ca.prototype.message = "Deferred was canceled", Ca.prototype.name = "CanceledError", Ra.prototype.c = function () {
          throw delete Da[this.a], this.b;
        };
        var Da = {};

        function Pa(t) {
          var e = document,
              n = wt(t).toString(),
              i = ae(document, "SCRIPT"),
              r = {
            Wb: i,
            Ma: void 0
          },
              o = new Ea(r),
              a = window.setTimeout(function () {
            xa(i, !0);
            var t = new Ua(ja, "Timeout reached for loading script " + n);
            ka(o), Aa(o, !1, t);
          }, 5e3);
          return r.Ma = a, i.onload = i.onreadystatechange = function () {
            i.readyState && "loaded" != i.readyState && "complete" != i.readyState || (xa(i, !1, a), ka(o), Aa(o, !0, null));
          }, i.onerror = function () {
            xa(i, !0, a);
            var t = new Ua(Ma, "Error while loading script " + n);
            ka(o), Aa(o, !1, t);
          }, lt(r = {}, {
            type: "text/javascript",
            charset: "UTF-8"
          }), ee(i, r), r = t, ft(t = i, "HTMLScriptElement"), t.src = wt(r), (r = (r = t.ownerDocument && t.ownerDocument.defaultView) && r != l ? f(r.document) : s = null === s ? f(l.document) : s) && t.setAttribute("nonce", r), ((e = ((r = e) || document).getElementsByTagName("HEAD")) && 0 != e.length ? e[0] : r.documentElement).appendChild(i), o;
        }

        function La() {
          var t;
          this && this.Wb && (t = this.Wb) && "SCRIPT" == t.tagName && xa(t, !0, this.Ma);
        }

        function xa(t, e, n) {
          null != n && l.clearTimeout(n), t.onload = a, t.onerror = a, t.onreadystatechange = a, e && window.setTimeout(function () {
            t && t.parentNode && t.parentNode.removeChild(t);
          }, 0);
        }

        var Ma = 0,
            ja = 1;

        function Ua(t, e) {
          var n = "Jsloader error (code #" + t + ")";
          e && (n += ": " + e), C.call(this, n), this.code = t;
        }

        function Va(t) {
          this.f = t;
        }

        function Fa(t, e, n) {
          if (this.c = t, this.l = (t = e || {}).secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.m = t.secureTokenTimeout || Ka, this.g = ct(t.secureTokenHeaders || Ga), this.h = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.i = t.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/", this.v = t.firebaseTimeout || Ba, this.a = ct(t.firebaseHeaders || Wa), n && (this.a["X-Client-Version"] = n, this.g["X-Client-Version"] = n), n = "Node" == hi(), !(n = l.XMLHttpRequest || n && zl["default"].INTERNAL.node && zl["default"].INTERNAL.node.XMLHttpRequest) && !ci()) throw new T("internal-error", "The XMLHttpRequest compatibility library was not found.");
          this.f = void 0, ci() ? this.f = new ia(self) : li() ? this.f = new Va(n) : this.f = new Ho(), this.b = null;
        }

        w(Ua, C), w(Va, Uo), Va.prototype.a = function () {
          return new this.f();
        }, Va.prototype.b = function () {
          return {};
        };
        var qa,
            Ha = "idToken",
            Ka = new Ci(3e4, 6e4),
            Ga = {
          "Content-Type": "application/x-www-form-urlencoded"
        },
            Ba = new Ci(3e4, 6e4),
            Wa = {
          "Content-Type": "application/json"
        };

        function Xa(t, e) {
          e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"];
        }

        function Ja(t, e) {
          e && (t.l = Ya("https://securetoken.googleapis.com/v1/token", e), t.h = Ya("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", e), t.i = Ya("https://identitytoolkit.googleapis.com/v2/", e));
        }

        function Ya(t, e) {
          return t = On(t), e = On(e.url), t.f = t.a + t.f, An(t, e.c), t.a = e.a, kn(t, e.g), t.toString();
        }

        function za(t, e) {
          e ? (t.a["X-Client-Version"] = e, t.g["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.g["X-Client-Version"]);
        }

        function $a(t, e, n, i, r, o, a) {
          var s;
          (t = ((s = pi(s = gi()) == di && (s = s.match(/\sChrome\/(\d+)/i)) && 2 == s.length ? parseInt(s[1], 10) : null) && s < 30 || Ht && Zt && !(9 < Zt)) && !ci() ? (qa = qa || new fe(function (t, e) {
            var n, i;
            n = t, i = e, ((window.gapi || {}).client || {}).request ? n() : (l[Qa] = function () {
              ((window.gapi || {}).client || {}).request ? n() : i(Error("CORS_UNSUPPORTED"));
            }, function (t, e) {
              Sa(t, null, e, void 0);
            }(Pa(It(Za, {
              onload: Qa
            })), function () {
              i(Error("CORS_UNSUPPORTED"));
            }));
          }), b(t.s, t)) : b(t.u, t))(e, n, i, r, o, a);
        }

        Fa.prototype.T = function () {
          return this.b;
        }, Fa.prototype.u = function (t, n, e, i, r, o) {
          if (ci() && (void 0 === l.fetch || void 0 === l.Headers || void 0 === l.Request)) throw new T("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
          var a,
              s = new ca(this.f);
          o && (s.g = Math.max(0, o), a = setTimeout(function () {
            s.dispatchEvent("timeout");
          }, o)), fn(s, "complete", function () {
            a && clearTimeout(a);
            var e = null;

            try {
              e = JSON.parse(function (e) {
                try {
                  return e.a ? e.a.responseText : "";
                } catch (t) {
                  return na(e.b, "Can not get responseText: " + t.message), "";
                }
              }(this)) || null;
            } catch (t) {
              e = null;
            }

            n && n(e);
          }), dn(s, "ready", function () {
            a && clearTimeout(a), xe(this);
          }), dn(s, "timeout", function () {
            a && clearTimeout(a), xe(this), n && n(null);
          }), da(s, t, e, i, r);
        };
        var Za = new dt(gt, "https://apis.google.com/js/client.js?onload=%{onload}"),
            Qa = "__fcb" + Math.floor(1e6 * Math.random()).toString();

        function ts(t, e, n, i, r, o, a) {
          var s = On(e + n);
          Nn(s, "key", t.c), a && Nn(s, "cb", Date.now().toString());
          var u = "GET" == i;
          if (u) for (var c in r) {
            r.hasOwnProperty(c) && Nn(s, c, r[c]);
          }
          return new fe(function (e, n) {
            $a(t, s.toString(), function (t) {
              t ? t.error ? n(Ys(t, o || {})) : e(t) : n(new T("network-request-failed"));
            }, i, u ? void 0 : Xn(ki(r)), t.a, t.v.get());
          });
        }

        function es(t) {
          if ("string" != typeof (t = t.email) || !oi.test(t)) throw new T("invalid-email");
        }

        function ns(t) {
          "email" in t && es(t);
        }

        function is(t) {
          if (!t[Ha]) {
            if (t.mfaPendingCredential) throw new T("multi-factor-auth-required", null, ct(t));
            throw new T("internal-error");
          }
        }

        function rs(t) {
          if (t.phoneNumber || t.temporaryProof) {
            if (!t.phoneNumber || !t.temporaryProof) throw new T("internal-error");
          } else {
            if (!t.sessionInfo) throw new T("missing-verification-id");
            if (!t.code) throw new T("missing-verification-code");
          }
        }

        Fa.prototype.s = function (t, n, i, r, o) {
          var a = this;
          qa.then(function () {
            window.gapi.client.setApiKey(a.c);
            var e = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null), window.gapi.client.request({
              path: t,
              method: i,
              body: r,
              headers: o,
              authType: "none",
              callback: function callback(t) {
                window.gapi.auth.setToken(e), n && n(t);
              }
            });
          }).o(function (t) {
            n && n({
              error: {
                message: t && t.message || "CORS_UNSUPPORTED"
              }
            });
          });
        }, Fa.prototype.zb = function () {
          return Xs(this, xs, {});
        }, Fa.prototype.Bb = function (t, e) {
          return Xs(this, Ps, {
            idToken: t,
            email: e
          });
        }, Fa.prototype.Cb = function (t, e) {
          return Xs(this, Ls, {
            idToken: t,
            password: e
          });
        };
        var os = {
          displayName: "DISPLAY_NAME",
          photoUrl: "PHOTO_URL"
        };

        function as(t) {
          if (!t.phoneVerificationInfo) throw new T("internal-error");
          if (!t.phoneVerificationInfo.sessionInfo) throw new T("missing-verification-id");
          if (!t.phoneVerificationInfo.code) throw new T("missing-verification-code");
        }

        function ss(t) {
          if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken) throw new T("internal-error");
        }

        function us(t, e) {
          return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && Kn(t = new Vn(t.postBody), "nonce") && (e.nonce = t.get("nonce"))), e;
        }

        function cs(t) {
          var e = null;
          if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = jo(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", e = jo(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", e = jo(t)) : t.errorMessage && (e = Js(t.errorMessage)), e) throw e;
          is(t);
        }

        function hs(t, e) {
          return e.returnIdpCredential = !0, Xs(t, Us, e);
        }

        function ls(t, e) {
          return e.returnIdpCredential = !0, Xs(t, Fs, e);
        }

        function fs(t, e) {
          return e.returnIdpCredential = !0, e.autoCreate = !1, Xs(t, Vs, e);
        }

        function ds(t) {
          if (!t.oobCode) throw new T("invalid-action-code");
        }

        (t = Fa.prototype).Db = function (t, i) {
          var r = {
            idToken: t
          },
              o = [];
          return st(os, function (t, e) {
            var n = i[e];
            null === n ? o.push(t) : e in i && (r[e] = n);
          }), o.length && (r.deleteAttribute = o), Xs(this, Ps, r);
        }, t.vb = function (t, e) {
          return lt(t = {
            requestType: "PASSWORD_RESET",
            email: t
          }, e), Xs(this, _s, t);
        }, t.wb = function (t, e) {
          return lt(t = {
            requestType: "EMAIL_SIGNIN",
            email: t
          }, e), Xs(this, ks, t);
        }, t.ub = function (t, e) {
          return lt(t = {
            requestType: "VERIFY_EMAIL",
            idToken: t
          }, e), Xs(this, Ss, t);
        }, t.Eb = function (t, e, n) {
          return lt(t = {
            requestType: "VERIFY_AND_CHANGE_EMAIL",
            idToken: t,
            newEmail: e
          }, n), Xs(this, Ns, t);
        }, t.fb = function (t) {
          return Xs(this, Ks, t);
        }, t.nb = function (t, e) {
          return Xs(this, Rs, {
            oobCode: t,
            newPassword: e
          });
        }, t.Ra = function (t) {
          return Xs(this, vs, {
            oobCode: t
          });
        }, t.jb = function (t) {
          return Xs(this, ps, {
            oobCode: t
          });
        };
        var ps = {
          endpoint: "setAccountInfo",
          A: ds,
          Z: "email",
          B: !0
        },
            vs = {
          endpoint: "resetPassword",
          A: ds,
          G: function G(t) {
            var e = t.requestType;
            if (!e || !t.email && "EMAIL_SIGNIN" != e && "VERIFY_AND_CHANGE_EMAIL" != e) throw new T("internal-error");
          },
          B: !0
        },
            ms = {
          endpoint: "signupNewUser",
          A: function A(t) {
            if (es(t), !t.password) throw new T("weak-password");
          },
          G: is,
          V: !0,
          B: !0
        },
            gs = {
          endpoint: "createAuthUri",
          B: !0
        },
            bs = {
          endpoint: "deleteAccount",
          N: ["idToken"]
        },
            ys = {
          endpoint: "setAccountInfo",
          N: ["idToken", "deleteProvider"],
          A: function A(t) {
            if (!Array.isArray(t.deleteProvider)) throw new T("internal-error");
          }
        },
            ws = {
          endpoint: "emailLinkSignin",
          N: ["email", "oobCode"],
          A: es,
          G: is,
          V: !0,
          B: !0
        },
            Is = {
          endpoint: "emailLinkSignin",
          N: ["idToken", "email", "oobCode"],
          A: es,
          G: is,
          V: !0
        },
            Ts = {
          endpoint: "accounts/mfaEnrollment:finalize",
          N: ["idToken", "phoneVerificationInfo"],
          A: as,
          G: is,
          B: !0,
          Na: !0
        },
            Es = {
          endpoint: "accounts/mfaSignIn:finalize",
          N: ["mfaPendingCredential", "phoneVerificationInfo"],
          A: as,
          G: is,
          B: !0,
          Na: !0
        },
            As = {
          endpoint: "getAccountInfo"
        },
            ks = {
          endpoint: "getOobConfirmationCode",
          N: ["requestType"],
          A: function A(t) {
            if ("EMAIL_SIGNIN" != t.requestType) throw new T("internal-error");
            es(t);
          },
          Z: "email",
          B: !0
        },
            Ss = {
          endpoint: "getOobConfirmationCode",
          N: ["idToken", "requestType"],
          A: function A(t) {
            if ("VERIFY_EMAIL" != t.requestType) throw new T("internal-error");
          },
          Z: "email",
          B: !0
        },
            Ns = {
          endpoint: "getOobConfirmationCode",
          N: ["idToken", "newEmail", "requestType"],
          A: function A(t) {
            if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType) throw new T("internal-error");
          },
          Z: "email",
          B: !0
        },
            _s = {
          endpoint: "getOobConfirmationCode",
          N: ["requestType"],
          A: function A(t) {
            if ("PASSWORD_RESET" != t.requestType) throw new T("internal-error");
            es(t);
          },
          Z: "email",
          B: !0
        },
            Os = {
          lb: !0,
          endpoint: "getProjectConfig",
          Ub: "GET"
        },
            Cs = {
          lb: !0,
          endpoint: "getRecaptchaParam",
          Ub: "GET",
          G: function G(t) {
            if (!t.recaptchaSiteKey) throw new T("internal-error");
          }
        },
            Rs = {
          endpoint: "resetPassword",
          A: ds,
          Z: "email",
          B: !0
        },
            Ds = {
          endpoint: "sendVerificationCode",
          N: ["phoneNumber", "recaptchaToken"],
          Z: "sessionInfo",
          B: !0
        },
            Ps = {
          endpoint: "setAccountInfo",
          N: ["idToken"],
          A: ns,
          V: !0
        },
            Ls = {
          endpoint: "setAccountInfo",
          N: ["idToken"],
          A: function A(t) {
            if (ns(t), !t.password) throw new T("weak-password");
          },
          G: is,
          V: !0
        },
            xs = {
          endpoint: "signupNewUser",
          G: is,
          V: !0,
          B: !0
        },
            Ms = {
          endpoint: "accounts/mfaEnrollment:start",
          N: ["idToken", "phoneEnrollmentInfo"],
          A: function A(t) {
            if (!t.phoneEnrollmentInfo) throw new T("internal-error");
            if (!t.phoneEnrollmentInfo.phoneNumber) throw new T("missing-phone-number");
            if (!t.phoneEnrollmentInfo.recaptchaToken) throw new T("missing-app-credential");
          },
          G: function G(t) {
            if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo) throw new T("internal-error");
          },
          B: !0,
          Na: !0
        },
            js = {
          endpoint: "accounts/mfaSignIn:start",
          N: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
          A: function A(t) {
            if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken) throw new T("missing-app-credential");
          },
          G: function G(t) {
            if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo) throw new T("internal-error");
          },
          B: !0,
          Na: !0
        },
            Us = {
          endpoint: "verifyAssertion",
          A: ss,
          Ya: us,
          G: cs,
          V: !0,
          B: !0
        },
            Vs = {
          endpoint: "verifyAssertion",
          A: ss,
          Ya: us,
          G: function G(t) {
            if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new T("user-not-found");
            if (t.errorMessage) throw Js(t.errorMessage);
            is(t);
          },
          V: !0,
          B: !0
        },
            Fs = {
          endpoint: "verifyAssertion",
          A: function A(t) {
            if (ss(t), !t.idToken) throw new T("internal-error");
          },
          Ya: us,
          G: cs,
          V: !0
        },
            qs = {
          endpoint: "verifyCustomToken",
          A: function A(t) {
            if (!t.token) throw new T("invalid-custom-token");
          },
          G: is,
          V: !0,
          B: !0
        },
            Hs = {
          endpoint: "verifyPassword",
          A: function A(t) {
            if (es(t), !t.password) throw new T("wrong-password");
          },
          G: is,
          V: !0,
          B: !0
        },
            Ks = {
          endpoint: "verifyPhoneNumber",
          A: rs,
          G: is,
          B: !0
        },
            Gs = {
          endpoint: "verifyPhoneNumber",
          A: function A(t) {
            if (!t.idToken) throw new T("internal-error");
            rs(t);
          },
          G: function G(t) {
            if (t.temporaryProof) throw t.code = "credential-already-in-use", jo(t);
            is(t);
          }
        },
            Bs = {
          Hb: {
            USER_NOT_FOUND: "user-not-found"
          },
          endpoint: "verifyPhoneNumber",
          A: rs,
          G: is,
          B: !0
        },
            Ws = {
          endpoint: "accounts/mfaEnrollment:withdraw",
          N: ["idToken", "mfaEnrollmentId"],
          G: function G(t) {
            if (!!t[Ha] ^ !!t.refreshToken) throw new T("internal-error");
          },
          B: !0,
          Na: !0
        };

        function Xs(t, e, n) {
          if (!function (t, e) {
            if (!e || !e.length) return 1;

            if (t) {
              for (var n = 0; n < e.length; n++) {
                var i = t[e[n]];
                if (null == i || "" === i) return;
              }

              return 1;
            }
          }(n, e.N)) return we(new T("internal-error"));
          var i,
              r = !!e.Na,
              o = e.Ub || "POST";
          return ye(n).then(e.A).then(function () {
            return e.V && (n.returnSecureToken = !0), e.B && t.b && void 0 === n.tenantId && (n.tenantId = t.b), ts(t, r ? t.i : t.h, e.endpoint, o, n, e.Hb, e.lb || !1);
          }).then(function (t) {
            return i = t, e.Ya ? e.Ya(n, i) : i;
          }).then(e.G).then(function () {
            if (!e.Z) return i;
            if (!(e.Z in i)) throw new T("internal-error");
            return i[e.Z];
          });
        }

        function Js(t) {
          return Ys({
            error: {
              errors: [{
                message: t
              }],
              code: 400,
              message: t
            }
          });
        }

        function Ys(t, e) {
          var n,
              i = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
              r = {
            keyInvalid: "invalid-api-key",
            ipRefererBlocked: "app-not-authorized"
          };
          if (i = r[i] ? new T(r[i]) : null) return i;

          for (n in i = t.error && t.error.message || "", lt(r = {
            INVALID_CUSTOM_TOKEN: "invalid-custom-token",
            CREDENTIAL_MISMATCH: "custom-token-mismatch",
            MISSING_CUSTOM_TOKEN: "internal-error",
            INVALID_IDENTIFIER: "invalid-email",
            MISSING_CONTINUE_URI: "internal-error",
            INVALID_EMAIL: "invalid-email",
            INVALID_PASSWORD: "wrong-password",
            USER_DISABLED: "user-disabled",
            MISSING_PASSWORD: "internal-error",
            EMAIL_EXISTS: "email-already-in-use",
            PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
            INVALID_IDP_RESPONSE: "invalid-credential",
            INVALID_PENDING_TOKEN: "invalid-credential",
            FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
            MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
            INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
            INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
            INVALID_SENDER: "invalid-sender",
            EMAIL_NOT_FOUND: "user-not-found",
            RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
            EXPIRED_OOB_CODE: "expired-action-code",
            INVALID_OOB_CODE: "invalid-action-code",
            MISSING_OOB_CODE: "internal-error",
            INVALID_PROVIDER_ID: "invalid-provider-id",
            CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
            INVALID_ID_TOKEN: "invalid-user-token",
            TOKEN_EXPIRED: "user-token-expired",
            USER_NOT_FOUND: "user-token-expired",
            CORS_UNSUPPORTED: "cors-unsupported",
            DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
            INVALID_APP_ID: "invalid-app-id",
            TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
            WEAK_PASSWORD: "weak-password",
            OPERATION_NOT_ALLOWED: "operation-not-allowed",
            USER_CANCELLED: "user-cancelled",
            CAPTCHA_CHECK_FAILED: "captcha-check-failed",
            INVALID_APP_CREDENTIAL: "invalid-app-credential",
            INVALID_CODE: "invalid-verification-code",
            INVALID_PHONE_NUMBER: "invalid-phone-number",
            INVALID_SESSION_INFO: "invalid-verification-id",
            INVALID_TEMPORARY_PROOF: "invalid-credential",
            MISSING_APP_CREDENTIAL: "missing-app-credential",
            MISSING_CODE: "missing-verification-code",
            MISSING_PHONE_NUMBER: "missing-phone-number",
            MISSING_SESSION_INFO: "missing-verification-id",
            QUOTA_EXCEEDED: "quota-exceeded",
            SESSION_EXPIRED: "code-expired",
            REJECTED_CREDENTIAL: "rejected-credential",
            INVALID_CONTINUE_URI: "invalid-continue-uri",
            MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
            MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
            UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
            INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
            INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
            INVALID_CERT_HASH: "invalid-cert-hash",
            UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
            INVALID_TENANT_ID: "invalid-tenant-id",
            TENANT_ID_MISMATCH: "tenant-id-mismatch",
            ADMIN_ONLY_OPERATION: "admin-restricted-operation",
            INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
            MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
            MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
            MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
            EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
            SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
            SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
            UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
            UNVERIFIED_EMAIL: "unverified-email"
          }, e || {}), e = (e = i.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length ? e[1] : void 0, r) {
            if (0 === i.indexOf(n)) return new T(r[n], e);
          }

          return new T("internal-error", e = !e && t ? Ai(t) : e);
        }

        function zs(t) {
          var o;
          this.b = t, this.a = null, this.rb = (o = this, (tu = tu || new fe(function (t, e) {
            function n() {
              Oi(), bi("gapi.load")("gapi.iframes", {
                callback: t,
                ontimeout: function ontimeout() {
                  Oi(), e(Error("Network Error"));
                },
                timeout: Zs.get()
              });
            }

            var i;
            bi("gapi.iframes.Iframe") ? t() : bi("gapi.load") ? n() : (i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString(), l[i] = function () {
              bi("gapi.load") ? n() : e(Error("Network Error"));
            }, ye(Pa(i = It($s, {
              onload: i
            }))).o(function () {
              e(Error("Network Error"));
            }));
          }).o(function (t) {
            throw tu = null, t;
          })).then(function () {
            return new fe(function (i, r) {
              bi("gapi.iframes.getContext")().open({
                where: document.body,
                url: o.b,
                messageHandlersFilter: bi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                attributes: {
                  style: {
                    position: "absolute",
                    top: "-100px",
                    width: "1px",
                    height: "1px"
                  }
                },
                dontclear: !0
              }, function (t) {
                function e() {
                  clearTimeout(n), i();
                }

                o.a = t, o.a.restyle({
                  setHideOnLeave: !1
                });
                var n = setTimeout(function () {
                  r(Error("Network Error"));
                }, Qs.get());
                t.ping(e).then(e, function () {
                  r(Error("Network Error"));
                });
              });
            });
          }));
        }

        var $s = new dt(gt, "https://apis.google.com/js/api.js?onload=%{onload}"),
            Zs = new Ci(3e4, 6e4),
            Qs = new Ci(5e3, 15e3),
            tu = null;

        function eu(t, e, n, i) {
          this.l = t, this.h = e, this.i = n, this.g = i, this.f = null, t = this.g ? Cn((t = On(this.g.url)).c, t.a, t.g, "/emulator/auth/iframe") : Cn("https", this.l, null, "/__/auth/iframe"), this.a = t, Nn(this.a, "apiKey", this.h), Nn(this.a, "appName", this.i), this.b = null, this.c = [];
        }

        function nu(t, e, n, i, r, o) {
          this.u = t, this.s = e, this.c = n, this.m = i, this.v = o, this.i = this.g = this.l = null, this.a = r, this.h = this.f = null;
        }

        function iu(t) {
          try {
            return zl["default"].app(t).auth().Ga();
          } catch (t) {
            return [];
          }
        }

        function ru(t, e, n, i, r, o) {
          this.s = t, this.g = e, this.b = n, this.f = o, this.c = i || null, this.i = r || null, this.l = this.u = this.C = null, this.h = [], this.m = this.a = null;
        }

        function ou(t) {
          var s = Qn();
          return Xs(t, Os, {}).then(function (t) {
            return t.authorizedDomains || [];
          }).then(function (t) {
            t: {
              for (var e = (n = On(s)).c, n = n.a, i = 0; i < t.length; i++) {
                var r = t[i],
                    o = n,
                    a = e;

                if (o = 0 == r.indexOf("chrome-extension://") ? On(r).a == o && "chrome-extension" == a : ("http" == a || "https" == a) && (ri.test(r) ? o == r : (r = r.split(".").join("\\."), new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(o)))) {
                  t = !0;
                  break t;
                }
              }

              t = !1;
            }

            if (!t) throw new xo(Qn());
          });
        }

        function au(r) {
          return r.m || (r.m = ai().then(function () {
            var t, e, n, i;
            r.u || (t = r.c, e = r.i, n = iu(r.b), (i = new eu(r.s, r.g, r.b, r.f)).f = t, i.b = e, i.c = X(n || []), r.u = i.toString()), r.v = new zs(r.u), function (i) {
              if (!i.v) throw Error("IfcHandler must be initialized!");
              !function (t, e) {
                t.rb.then(function () {
                  t.a.register("authEvent", e, bi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
                });
              }(i.v, function (t) {
                var e = {};

                if (t && t.authEvent) {
                  var n = !1;

                  for (t = Ro(t.authEvent), e = 0; e < i.h.length; e++) {
                    n = i.h[e](t) || n;
                  }

                  return (e = {}).status = n ? "ACK" : "ERROR", ye(e);
                }

                return e.status = "ERROR", ye(e);
              });
            }(r);
          }), r.m);
        }

        function su(t) {
          return t.l || (t.C = t.c ? mi(t.c, iu(t.b)) : null, t.l = new Fa(t.g, _(t.i), t.C), t.f && Ja(t.l, t.f)), t.l;
        }

        function uu(t, e, n, i, r, o, a, s, u, c, h, l) {
          return (t = new nu(t, e, n, i, r, l)).l = o, t.g = a, t.i = s, t.b = ct(u || null), t.f = c, t.yb(h).toString();
        }

        function cu(t) {
          if (this.a = t || zl["default"].INTERNAL.reactNative && zl["default"].INTERNAL.reactNative.AsyncStorage, !this.a) throw new T("internal-error", "The React Native compatibility library was not found.");
          this.type = "asyncStorage";
        }

        function hu(t) {
          this.b = t, this.a = {}, this.f = b(this.c, this);
        }

        eu.prototype.toString = function () {
          return this.f ? Nn(this.a, "v", this.f) : Hn(this.a.b, "v"), this.b ? Nn(this.a, "eid", this.b) : Hn(this.a.b, "eid"), this.c.length ? Nn(this.a, "fw", this.c.join(",")) : Hn(this.a.b, "fw"), this.a.toString();
        }, nu.prototype.yb = function (t) {
          return this.h = t, this;
        }, nu.prototype.toString = function () {
          var t;

          if (Nn(t = this.v ? Cn((t = On(this.v.url)).c, t.a, t.g, "/emulator/auth/handler") : Cn("https", this.u, null, "/__/auth/handler"), "apiKey", this.s), Nn(t, "appName", this.c), Nn(t, "authType", this.m), this.a.isOAuthProvider) {
            var e = this.a;

            try {
              var n = zl["default"].app(this.c).auth().la();
            } catch (t) {
              n = null;
            }

            for (i in e.ob = n, Nn(t, "providerId", this.a.providerId), e = ki((n = this.a).Ib)) {
              e[i] = e[i].toString();
            }

            for (var i = n.Qc, e = ct(e), r = 0; r < i.length; r++) {
              var o = i[r];
              o in e && delete e[o];
            }

            n.pb && n.ob && !e[n.pb] && (e[n.pb] = n.ob), ut(e) || Nn(t, "customParameters", Ai(e));
          }

          if ("function" == typeof this.a.Qb && (n = this.a.Qb()).length && Nn(t, "scopes", n.join(",")), this.l ? Nn(t, "redirectUrl", this.l) : Hn(t.b, "redirectUrl"), this.g ? Nn(t, "eventId", this.g) : Hn(t.b, "eventId"), this.i ? Nn(t, "v", this.i) : Hn(t.b, "v"), this.b) for (var a in this.b) {
            this.b.hasOwnProperty(a) && !_n(t, a) && Nn(t, a, this.b[a]);
          }
          return this.h ? Nn(t, "tid", this.h) : Hn(t.b, "tid"), this.f ? Nn(t, "eid", this.f) : Hn(t.b, "eid"), (a = iu(this.c)).length && Nn(t, "fw", a.join(",")), t.toString();
        }, (t = ru.prototype).Ob = function (e, n, t) {
          var i = new T("popup-closed-by-user"),
              r = new T("web-storage-unsupported"),
              o = this,
              a = !1;
          return this.ma().then(function () {
            var t, i;
            i = {
              type: "webStorageSupport"
            }, au(t = o).then(function () {
              return e = t.v, n = i, e.rb.then(function () {
                return new fe(function (t) {
                  e.a.send(n.type, n, t, bi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
                });
              });
              var e, n;
            }).then(function (t) {
              if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport;
              throw Error();
            }).then(function (t) {
              t || (e && ni(e), n(r), a = !0);
            });
          }).o(function () {}).then(function () {
            if (!a) return n = e, new fe(function (e) {
              return function t() {
                mn(2e3).then(function () {
                  return n && !n.closed ? t() : void e();
                });
              }();
            });
            var n;
          }).then(function () {
            if (!a) return mn(t).then(function () {
              n(i);
            });
          });
        }, t.Xb = function () {
          var t = gi();
          return !Ei(t) && !_i(t);
        }, t.Tb = function () {
          return !1;
        }, t.Mb = function (e, t, n, i, r, o, a, s) {
          if (!e) return we(new T("popup-blocked"));
          if (a && !Ei()) return this.ma().o(function (t) {
            ni(e), r(t);
          }), i(), ye();
          this.a || (this.a = ou(su(this)));
          var u = this;
          return this.a.then(function () {
            var t = u.ma().o(function (t) {
              throw ni(e), r(t), t;
            });
            return i(), t;
          }).then(function () {
            Oo(n), a || ti(uu(u.s, u.g, u.b, t, n, null, o, u.c, void 0, u.i, s, u.f), e);
          }).o(function (t) {
            throw "auth/network-request-failed" == t.code && (u.a = null), t;
          });
        }, t.Nb = function (t, e, n, i) {
          this.a || (this.a = ou(su(this)));
          var r = this;
          return this.a.then(function () {
            Oo(e), ti(uu(r.s, r.g, r.b, t, e, Qn(), n, r.c, void 0, r.i, i, r.f));
          }).o(function (t) {
            throw "auth/network-request-failed" == t.code && (r.a = null), t;
          });
        }, t.ma = function () {
          var t = this;
          return au(this).then(function () {
            return t.v.rb;
          }).o(function () {
            throw t.a = null, new T("network-request-failed");
          });
        }, t.$b = function () {
          return !0;
        }, t.Ea = function (t) {
          this.h.push(t);
        }, t.Sa = function (e) {
          B(this.h, function (t) {
            return t == e;
          });
        }, (t = cu.prototype).get = function (t) {
          return ye(this.a.getItem(t)).then(function (t) {
            return t && Si(t);
          });
        }, t.set = function (t, e) {
          return ye(this.a.setItem(t, Ai(e)));
        }, t.U = function (t) {
          return ye(this.a.removeItem(t));
        }, t.ca = function () {}, t.ia = function () {};
        var lu,
            fu = [];

        function du(t, e, n) {
          ut(t.a) && t.b.addEventListener("message", t.f), void 0 === t.a[e] && (t.a[e] = []), t.a[e].push(n);
        }

        function pu(t) {
          this.a = t;
        }

        function vu(t) {
          this.c = t, this.b = !1, this.a = [];
        }

        function mu(i, t, e, n) {
          var r,
              o,
              a,
              s,
              u = e || {},
              c = null;
          if (i.b) return we(Error("connection_unavailable"));
          var h = n ? 800 : 50,
              l = "undefined" != typeof MessageChannel ? new MessageChannel() : null;
          return new fe(function (e, n) {
            l ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(), l.port1.start(), a = setTimeout(function () {
              n(Error("unsupported_event"));
            }, h), c = {
              messageChannel: l,
              onMessage: o = function o(t) {
                t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a), s = setTimeout(function () {
                  n(Error("timeout"));
                }, 3e3)) : "done" === t.data.status ? (clearTimeout(s), void 0 !== t.data.response ? e(t.data.response) : n(Error("unknown_error"))) : (clearTimeout(a), clearTimeout(s), n(Error("invalid_response"))));
              }
            }, i.a.push(c), l.port1.addEventListener("message", o), i.c.postMessage({
              eventType: t,
              eventId: r,
              data: u
            }, [l.port2])) : n(Error("connection_unavailable"));
          }).then(function (t) {
            return gu(i, c), t;
          }).o(function (t) {
            throw gu(i, c), t;
          });
        }

        function gu(t, e) {
          var n, i;
          e && (n = e.messageChannel, i = e.onMessage, n && (n.port1.removeEventListener("message", i), n.port1.close()), B(t.a, function (t) {
            return t == e;
          }));
        }

        function bu() {
          if (!Tu()) throw new T("web-storage-unsupported");
          this.c = {}, this.a = [], this.b = 0, this.m = l.indexedDB, this.type = "indexedDB", this.g = this.v = this.f = this.l = null, this.s = !1, this.h = null;
          var t,
              e,
              n,
              i = this;
          ci() && self ? (this.v = (n = ci() ? self : null, V(fu, function (t) {
            t.b == n && (e = t);
          }), e || (e = new hu(n), fu.push(e)), e), du(this.v, "keyChanged", function (t, n) {
            return Nu(i).then(function (e) {
              return 0 < e.length && V(i.a, function (t) {
                t(e);
              }), {
                keyProcessed: K(e, n.key)
              };
            });
          }), du(this.v, "ping", function () {
            return ye(["keyChanged"]);
          })) : ((t = l.navigator) && t.serviceWorker ? ye().then(function () {
            return t.serviceWorker.ready;
          }).then(function (t) {
            return t.active || null;
          }).o(function () {
            return null;
          }) : ye(null)).then(function (t) {
            (i.h = t) && (i.g = new vu(new pu(t)), mu(i.g, "ping", null, !0).then(function (t) {
              t[0].fulfilled && K(t[0].value, "keyChanged") && (i.s = !0);
            }).o(function () {}));
          });
        }

        function yu(r) {
          return new fe(function (e, n) {
            var t = r.m.open("firebaseLocalStorageDb", 1);
            t.onerror = function (t) {
              try {
                t.preventDefault();
              } catch (t) {}

              n(Error(t.target.error));
            }, t.onupgradeneeded = function (t) {
              t = t.target.result;

              try {
                t.createObjectStore("firebaseLocalStorage", {
                  keyPath: "fbase_key"
                });
              } catch (t) {
                n(t);
              }
            }, t.onsuccess = function (t) {
              var i;
              (t = t.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(t) : (i = r, new fe(function (t, e) {
                var n = i.m.deleteDatabase("firebaseLocalStorageDb");
                n.onsuccess = function () {
                  t();
                }, n.onerror = function (t) {
                  e(Error(t.target.error));
                };
              }).then(function () {
                return yu(r);
              }).then(function (t) {
                e(t);
              }).o(function (t) {
                n(t);
              }));
            };
          });
        }

        function wu(t) {
          return t.i || (t.i = yu(t)), t.i;
        }

        function Iu(r, t) {
          var o = 0;
          return new fe(function e(n, i) {
            wu(r).then(t).then(n).o(function (t) {
              return 3 < ++o ? void i(t) : wu(r).then(function (t) {
                return t.close(), r.i = void 0, e(n, i);
              }).o(function (t) {
                i(t);
              });
            });
          });
        }

        function Tu() {
          try {
            return l.indexedDB;
          } catch (t) {
            return;
          }
        }

        function Eu(t) {
          return t.objectStore("firebaseLocalStorage");
        }

        function Au(t, e) {
          return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly");
        }

        function ku(t) {
          return new fe(function (e, n) {
            t.onsuccess = function (t) {
              t && t.target ? e(t.target.result) : e();
            }, t.onerror = function (t) {
              n(t.target.error);
            };
          });
        }

        function Su(t, e) {
          return t.g && t.h && ((n = l.navigator) && n.serviceWorker && n.serviceWorker.controller || null) === t.h ? mu(t.g, "keyChanged", {
            key: e
          }, t.s).then(function () {}).o(function () {}) : ye();
          var n;
        }

        function Nu(i) {
          return wu(i).then(function (t) {
            var r = Eu(Au(t, !1));
            return r.getAll ? ku(r.getAll()) : new fe(function (e, n) {
              var i = [],
                  t = r.openCursor();
              t.onsuccess = function (t) {
                (t = t.target.result) ? (i.push(t.value), t["continue"]()) : e(i);
              }, t.onerror = function (t) {
                n(t.target.error);
              };
            });
          }).then(function (t) {
            var e = {},
                n = [];

            if (0 == i.b) {
              for (n = 0; n < t.length; n++) {
                e[t[n].fbase_key] = t[n].value;
              }

              n = function t(e, n) {
                var i,
                    r = [];

                for (i in e) {
                  i in n && _typeof(e[i]) == _typeof(n[i]) ? "object" == _typeof(e[i]) && null != e[i] && null != n[i] ? 0 < t(e[i], n[i]).length && r.push(i) : e[i] !== n[i] && r.push(i) : r.push(i);
                }

                for (i in n) {
                  i in e || r.push(i);
                }

                return r;
              }(i.c, e), i.c = e;
            }

            return n;
          });
        }

        function _u(t) {
          t.l && t.l.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), t.f = null);
        }

        function Ou(t) {
          var i = this,
              r = null;
          this.a = [], this.type = "indexedDB", this.c = t, this.b = ye().then(function () {
            if (Tu()) {
              var e = Ni(),
                  n = "__sak" + e;
              return lu = lu || new bu(), (r = lu).set(n, e).then(function () {
                return r.get(n);
              }).then(function (t) {
                if (t !== e) throw Error("indexedDB not supported!");
                return r.U(n);
              }).then(function () {
                return r;
              }).o(function () {
                return i.c;
              });
            }

            return i.c;
          }).then(function (t) {
            return i.type = t.type, t.ca(function (e) {
              V(i.a, function (t) {
                t(e);
              });
            }), t;
          });
        }

        function Cu() {
          this.a = {}, this.type = "inMemory";
        }

        function Ru() {
          if (!function () {
            var t = "Node" == hi();
            if (!(t = Du() || t && zl["default"].INTERNAL.node && zl["default"].INTERNAL.node.localStorage)) return !1;

            try {
              return t.setItem("__sak", "1"), t.removeItem("__sak"), !0;
            } catch (t) {
              return !1;
            }
          }()) {
            if ("Node" == hi()) throw new T("internal-error", "The LocalStorage compatibility library was not found.");
            throw new T("web-storage-unsupported");
          }

          this.a = Du() || zl["default"].INTERNAL.node.localStorage, this.type = "localStorage";
        }

        function Du() {
          try {
            var t = l.localStorage,
                e = Ni();
            return t && (t.setItem(e, "1"), t.removeItem(e)), t;
          } catch (t) {
            return null;
          }
        }

        function Pu() {
          this.type = "nullStorage";
        }

        function Lu() {
          if (!function () {
            var t = "Node" == hi();
            if (!(t = xu() || t && zl["default"].INTERNAL.node && zl["default"].INTERNAL.node.sessionStorage)) return !1;

            try {
              return t.setItem("__sak", "1"), t.removeItem("__sak"), !0;
            } catch (t) {
              return !1;
            }
          }()) {
            if ("Node" == hi()) throw new T("internal-error", "The SessionStorage compatibility library was not found.");
            throw new T("web-storage-unsupported");
          }

          this.a = xu() || zl["default"].INTERNAL.node.sessionStorage, this.type = "sessionStorage";
        }

        function xu() {
          try {
            var t = l.sessionStorage,
                e = Ni();
            return t && (t.setItem(e, "1"), t.removeItem(e)), t;
          } catch (t) {
            return null;
          }
        }

        function Mu() {
          var t = {};
          t.Browser = Vu, t.Node = Fu, t.ReactNative = qu, t.Worker = Hu, this.a = t[hi()];
        }

        hu.prototype.c = function (n) {
          var e,
              i = n.data.eventType,
              r = n.data.eventId,
              t = this.a[i];
          t && 0 < t.length && (n.ports[0].postMessage({
            status: "ack",
            eventId: r,
            eventType: i,
            response: null
          }), e = [], V(t, function (t) {
            e.push(ye().then(function () {
              return t(n.origin, n.data.data);
            }));
          }), Te(e).then(function (t) {
            var e = [];
            V(t, function (t) {
              e.push({
                fulfilled: t.Pb,
                value: t.value,
                reason: t.reason ? t.reason.message : void 0
              });
            }), V(e, function (t) {
              for (var e in t) {
                void 0 === t[e] && delete t[e];
              }
            }), n.ports[0].postMessage({
              status: "done",
              eventId: r,
              eventType: i,
              response: e
            });
          }));
        }, pu.prototype.postMessage = function (t, e) {
          this.a.postMessage(t, e);
        }, vu.prototype.close = function () {
          for (; 0 < this.a.length;) {
            gu(this, this.a[0]);
          }

          this.b = !0;
        }, (t = bu.prototype).set = function (i, r) {
          var o = this,
              a = !1;
          return Iu(this, function (t) {
            return ku((t = Eu(Au(t, !0))).get(i));
          }).then(function (n) {
            return Iu(o, function (t) {
              if (t = Eu(Au(t, !0)), n) return n.value = r, ku(t.put(n));
              o.b++, a = !0;
              var e = {};
              return e.fbase_key = i, e.value = r, ku(t.add(e));
            });
          }).then(function () {
            return o.c[i] = r, Su(o, i);
          }).oa(function () {
            a && o.b--;
          });
        }, t.get = function (e) {
          return Iu(this, function (t) {
            return ku(Eu(Au(t, !1)).get(e));
          }).then(function (t) {
            return t && t.value;
          });
        }, t.U = function (e) {
          var n = this,
              i = !1;
          return Iu(this, function (t) {
            return i = !0, n.b++, ku(Eu(Au(t, !0))["delete"](e));
          }).then(function () {
            return delete n.c[e], Su(n, e);
          }).oa(function () {
            i && n.b--;
          });
        }, t.ca = function (t) {
          var n;
          0 == this.a.length && (_u(n = this), function e() {
            n.f = setTimeout(function () {
              n.l = Nu(n).then(function (e) {
                0 < e.length && V(n.a, function (t) {
                  t(e);
                });
              }).then(function () {
                e();
              }).o(function (t) {
                "STOP_EVENT" != t.message && e();
              });
            }, 800);
          }()), this.a.push(t);
        }, t.ia = function (e) {
          B(this.a, function (t) {
            return t == e;
          }), 0 == this.a.length && _u(this);
        }, (t = Ou.prototype).get = function (e) {
          return this.b.then(function (t) {
            return t.get(e);
          });
        }, t.set = function (e, n) {
          return this.b.then(function (t) {
            return t.set(e, n);
          });
        }, t.U = function (e) {
          return this.b.then(function (t) {
            return t.U(e);
          });
        }, t.ca = function (t) {
          this.a.push(t);
        }, t.ia = function (e) {
          B(this.a, function (t) {
            return t == e;
          });
        }, (t = Cu.prototype).get = function (t) {
          return ye(this.a[t]);
        }, t.set = function (t, e) {
          return this.a[t] = e, ye();
        }, t.U = function (t) {
          return delete this.a[t], ye();
        }, t.ca = function () {}, t.ia = function () {}, (t = Ru.prototype).get = function (t) {
          var e = this;
          return ye().then(function () {
            return Si(e.a.getItem(t));
          });
        }, t.set = function (e, n) {
          var i = this;
          return ye().then(function () {
            var t = Ai(n);
            null === t ? i.U(e) : i.a.setItem(e, t);
          });
        }, t.U = function (t) {
          var e = this;
          return ye().then(function () {
            e.a.removeItem(t);
          });
        }, t.ca = function (t) {
          l.window && Ze(l.window, "storage", t);
        }, t.ia = function (t) {
          l.window && en(l.window, "storage", t);
        }, (t = Pu.prototype).get = function () {
          return ye(null);
        }, t.set = function () {
          return ye();
        }, t.U = function () {
          return ye();
        }, t.ca = function () {}, t.ia = function () {}, (t = Lu.prototype).get = function (t) {
          var e = this;
          return ye().then(function () {
            return Si(e.a.getItem(t));
          });
        }, t.set = function (e, n) {
          var i = this;
          return ye().then(function () {
            var t = Ai(n);
            null === t ? i.U(e) : i.a.setItem(e, t);
          });
        }, t.U = function (t) {
          var e = this;
          return ye().then(function () {
            e.a.removeItem(t);
          });
        }, t.ca = function () {}, t.ia = function () {};
        var ju,
            Uu,
            Vu = {
          F: Ru,
          bb: Lu
        },
            Fu = {
          F: Ru,
          bb: Lu
        },
            qu = {
          F: cu,
          bb: Pu
        },
            Hu = {
          F: Ru,
          bb: Pu
        },
            Ku = {
          rd: "local",
          NONE: "none",
          td: "session"
        };

        function Gu() {
          var t = !(_i(gi()) || !ui()),
              e = Ei(),
              n = yi();
          this.m = t, this.h = e, this.l = n, this.a = {}, t = ju = ju || new Mu();

          try {
            this.g = !Zn() && Li() || !l.indexedDB ? new t.a.F() : new Ou(new (ci() ? Cu : t.a.F)());
          } catch (t) {
            this.g = new Cu(), this.h = !0;
          }

          try {
            this.i = new t.a.bb();
          } catch (t) {
            this.i = new Cu();
          }

          this.v = new Cu(), this.f = b(this.Yb, this), this.b = {};
        }

        function Bu() {
          return Uu = Uu || new Gu();
        }

        function Wu(t, e) {
          switch (e) {
            case "session":
              return t.i;

            case "none":
              return t.v;

            default:
              return t.g;
          }
        }

        function Xu(t, e) {
          return "firebase:" + t.name + (e ? ":" + e : "");
        }

        function Ju(t, e, n) {
          return n = Xu(e, n), "local" == e.F && (t.b[n] = null), Wu(t, e.F).U(n);
        }

        function Yu(t) {
          t.c && (clearInterval(t.c), t.c = null);
        }

        function zu(t) {
          this.a = t, this.b = Bu();
        }

        (t = Gu.prototype).get = function (t, e) {
          return Wu(this, t.F).get(Xu(t, e));
        }, t.set = function (e, t, n) {
          var i = Xu(e, n),
              r = this,
              o = Wu(this, e.F);
          return o.set(i, t).then(function () {
            return o.get(i);
          }).then(function (t) {
            "local" == e.F && (r.b[i] = t);
          });
        }, t.addListener = function (t, e, n) {
          var i;
          t = Xu(t, e), this.l && (this.b[t] = l.localStorage.getItem(t)), ut(this.a) && (Wu(this, "local").ca(this.f), this.h || (Zn() || !Li()) && l.indexedDB || !this.l || (Yu(i = this), i.c = setInterval(function () {
            for (var t in i.a) {
              var e = l.localStorage.getItem(t),
                  n = i.b[t];
              e != n && (i.b[t] = e, e = new qe({
                type: "storage",
                key: t,
                target: window,
                oldValue: n,
                newValue: e,
                a: !0
              }), i.Yb(e));
            }
          }, 1e3))), this.a[t] || (this.a[t] = []), this.a[t].push(n);
        }, t.removeListener = function (t, e, n) {
          t = Xu(t, e), this.a[t] && (B(this.a[t], function (t) {
            return t == n;
          }), 0 == this.a[t].length && delete this.a[t]), ut(this.a) && (Wu(this, "local").ia(this.f), Yu(this));
        }, t.Yb = function (t) {
          if (t && t.g) {
            var e = t.a.key;
            if (null == e) for (var n in this.a) {
              var i = this.b[n];
              void 0 === i && (i = null);
              var r = l.localStorage.getItem(n);
              r !== i && (this.b[n] = r, this.mb(n));
            } else if (0 == e.indexOf("firebase:") && this.a[e]) {
              if (void 0 !== t.a.a ? Wu(this, "local").ia(this.f) : Yu(this), this.m) if (n = l.localStorage.getItem(e), (i = t.a.newValue) !== n) null !== i ? l.localStorage.setItem(e, i) : l.localStorage.removeItem(e);else if (this.b[e] === i && void 0 === t.a.a) return;

              var o = this,
                  n = function n() {
                void 0 === t.a.a && o.b[e] === l.localStorage.getItem(e) || (o.b[e] = l.localStorage.getItem(e), o.mb(e));
              };

              Ht && Zt && 10 == Zt && l.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n();
            }
          } else V(t, b(this.mb, this));
        }, t.mb = function (t) {
          this.a[t] && V(this.a[t], function (t) {
            t();
          });
        };
        var $u,
            Zu = {
          name: "authEvent",
          F: "local"
        };

        function Qu() {
          this.a = Bu();
        }

        function tc(t, e) {
          this.b = ec, this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = l.Int32Array ? new Int32Array(64) : Array(64), void 0 === $u && ($u = l.Int32Array ? new Int32Array(uc) : uc), this.reset();
        }

        w(tc, function () {
          this.b = -1;
        });

        for (var ec = 64, nc = ec - 1, ic = [], rc = 0; rc < nc; rc++) {
          ic[rc] = 0;
        }

        var oc = W(128, ic);

        function ac(t) {
          for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length;) {
            n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], r = 4 * i;
          }

          for (e = 16; e < 64; e++) {
            var r = 0 | n[e - 15],
                i = 0 | n[e - 2],
                o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0,
                a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
            n[e] = o + a | 0;
          }

          i = 0 | t.a[0], r = 0 | t.a[1];
          var s = 0 | t.a[2],
              u = 0 | t.a[3],
              c = 0 | t.a[4],
              h = 0 | t.a[5],
              l = 0 | t.a[6];

          for (o = 0 | t.a[7], e = 0; e < 64; e++) {
            var f = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
            a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & l) + (0 | $u[e]) | 0) + (0 | n[e]) | 0) | 0, o = l, l = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + f | 0;
          }

          t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + l | 0, t.a[7] = t.a[7] + o | 0;
        }

        function sc(t, e, n) {
          void 0 === n && (n = e.length);
          var i = 0,
              r = t.c;
          if ("string" == typeof e) for (; i < n;) {
            t.f[r++] = e.charCodeAt(i++), r == t.b && (ac(t), r = 0);
          } else {
            if (!p(e)) throw Error("message must be string or array");

            for (; i < n;) {
              var o = e[i++];
              if (!("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o))) throw Error("message must be a byte array");
              t.f[r++] = o, r == t.b && (ac(t), r = 0);
            }
          }
          t.c = r, t.g += n;
        }

        tc.prototype.reset = function () {
          this.g = this.c = 0, this.a = l.Int32Array ? new Int32Array(this.h) : X(this.h);
        };

        var uc = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

        function cc() {
          tc.call(this, 8, hc);
        }

        w(cc, tc);
        var hc = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

        function lc(t, e, n, i, r, o) {
          this.v = t, this.i = e, this.l = n, this.m = i || null, this.u = r || null, this.s = o, this.h = e + ":" + n, this.C = new Qu(), this.g = new zu(this.h), this.f = null, this.b = [], this.a = this.c = null;
        }

        function fc(t) {
          return new T("invalid-cordova-configuration", t);
        }

        function dc(t) {
          var e = new cc();
          sc(e, t), t = [];
          var n = 8 * e.g;
          e.c < 56 ? sc(e, oc, 56 - e.c) : sc(e, oc, e.b - (e.c - 56));

          for (var i = 63; 56 <= i; i--) {
            e.f[i] = 255 & n, n /= 256;
          }

          for (ac(e), i = n = 0; i < e.i; i++) {
            for (var r = 24; 0 <= r; r -= 8) {
              t[n++] = e.a[i] >> r & 255;
            }
          }

          return q(t, function (t) {
            return 1 < (t = t.toString(16)).length ? t : "0" + t;
          }).join("");
        }

        function pc(t, e) {
          for (var n = 0; n < t.b.length; n++) {
            try {
              t.b[n](e);
            } catch (t) {}
          }
        }

        function vc(s) {
          return s.f || (s.f = s.ma().then(function () {
            return new fe(function (n) {
              function e(i) {
                t = !0, a && a.cancel(), mc(r).then(function (t) {
                  var e,
                      n = o;
                  t && i && i.url && (e = null, n = (e = -1 != (n = Jr(i.url)).indexOf("/__/auth/callback") ? (e = "object" == _typeof(e = Si(_n(e = On(n), "firebaseError") || null)) ? E(e) : null) ? new Co(t.c, t.b, null, null, e, null, t.T()) : new Co(t.c, t.b, n, t.f, null, null, t.T()) : e) || o), pc(r, n);
                });
              }

              var r, o, t, a, i;
              s.Ea(function t(e) {
                return n(e), s.Sa(t), !1;
              }), r = s, o = new Co("unknown", null, null, null, new T("no-auth-event")), t = !1, a = mn(500).then(function () {
                return mc(r).then(function () {
                  t || pc(r, o);
                });
              }), i = l.handleOpenURL, l.handleOpenURL = function (t) {
                if (0 == t.toLowerCase().indexOf(bi("BuildInfo.packageName", l).toLowerCase() + "://") && e({
                  url: t
                }), "function" == typeof i) try {
                  i(t);
                } catch (t) {
                  console.error(t);
                }
              }, Lo = Lo || new Do(), function (t) {
                var n = Lo;
                n.a.push(t), n.b || (n.b = function (t) {
                  for (var e = 0; e < n.a.length; e++) {
                    n.a[e](t);
                  }
                }, "function" == typeof (t = bi("universalLinks.subscribe", l)) && t(null, n.b));
              }(e);
            });
          })), s.f;
        }

        function mc(e) {
          var t,
              n = null;
          return (t = e.g).b.get(Zu, t.a).then(Ro).then(function (t) {
            return n = t, Ju((t = e.g).b, Zu, t.a);
          }).then(function () {
            return n;
          });
        }

        function gc(t) {
          this.a = t, this.b = Bu();
        }

        (t = lc.prototype).ma = function () {
          return this.Ia || (this.Ia = (si(void 0) ? ai().then(function () {
            return new fe(function (t, e) {
              var n = l.document,
                  i = setTimeout(function () {
                e(Error("Cordova framework is not ready."));
              }, 1e3);
              n.addEventListener("deviceready", function () {
                clearTimeout(i), t();
              }, !1);
            });
          }) : we(Error("Cordova must run in an Android or iOS file scheme."))).then(function () {
            if ("function" != typeof bi("universalLinks.subscribe", l)) throw fc("cordova-universal-links-plugin-fix is not installed");
            if (void 0 === bi("BuildInfo.packageName", l)) throw fc("cordova-plugin-buildinfo is not installed");
            if ("function" != typeof bi("cordova.plugins.browsertab.openUrl", l)) throw fc("cordova-plugin-browsertab is not installed");
            if ("function" != typeof bi("cordova.InAppBrowser.open", l)) throw fc("cordova-plugin-inappbrowser is not installed");
          }, function () {
            throw new T("cordova-not-ready");
          }));
        }, t.Ob = function (t, e) {
          return e(new T("operation-not-supported-in-this-environment")), ye();
        }, t.Mb = function () {
          return we(new T("operation-not-supported-in-this-environment"));
        }, t.$b = function () {
          return !1;
        }, t.Xb = function () {
          return !0;
        }, t.Tb = function () {
          return !0;
        }, t.Nb = function (t, e, n, i) {
          if (this.c) return we(new T("redirect-operation-pending"));
          var r = this,
              o = l.document,
              a = null,
              s = null,
              u = null,
              c = null;
          return this.c = ye().then(function () {
            return Oo(e), vc(r);
          }).then(function () {
            return function (n, t, e, i, r) {
              var o = function () {
                for (var t = 20, e = []; 0 < t;) {
                  e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
                }

                return e.join("");
              }(),
                  a = new Co(t, i, null, o, new T("no-auth-event"), null, r),
                  s = bi("BuildInfo.packageName", l);

              if ("string" != typeof s) throw new T("invalid-cordova-configuration");
              var u = bi("BuildInfo.displayName", l),
                  c = {};
              if (gi().toLowerCase().match(/iphone|ipad|ipod/)) c.ibi = s;else {
                if (!gi().toLowerCase().match(/android/)) return we(new T("operation-not-supported-in-this-environment"));
                c.apn = s;
              }
              u && (c.appDisplayName = u), o = dc(o), c.sessionId = o;
              var h = uu(n.v, n.i, n.l, t, e, null, i, n.m, c, n.u, r, n.s);
              return n.ma().then(function () {
                var t = n.h;
                return n.C.a.set(Zu, a.w(), t);
              }).then(function () {
                var t = bi("cordova.plugins.browsertab.isAvailable", l);
                if ("function" != typeof t) throw new T("invalid-cordova-configuration");
                var e = null;
                t(function (t) {
                  if (t) {
                    if ("function" != typeof (e = bi("cordova.plugins.browsertab.openUrl", l))) throw new T("invalid-cordova-configuration");
                    e(h);
                  } else {
                    if ("function" != typeof (e = bi("cordova.InAppBrowser.open", l))) throw new T("invalid-cordova-configuration");
                    t = gi(), n.a = e(h, t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || t.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes");
                  }
                });
              });
            }(r, t, e, n, i);
          }).then(function () {
            return new fe(function (e, t) {
              s = function s() {
                var t = bi("cordova.plugins.browsertab.close", l);
                return e(), "function" == typeof t && t(), r.a && "function" == typeof r.a.close && (r.a.close(), r.a = null), !1;
              }, r.Ea(s), u = function u() {
                a = a || mn(2e3).then(function () {
                  t(new T("redirect-cancelled-by-user"));
                });
              }, c = function c() {
                Ri() && u();
              }, o.addEventListener("resume", u, !1), gi().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", c, !1);
            }).o(function (t) {
              return mc(r).then(function () {
                throw t;
              });
            });
          }).oa(function () {
            u && o.removeEventListener("resume", u, !1), c && o.removeEventListener("visibilitychange", c, !1), a && a.cancel(), s && r.Sa(s), r.c = null;
          });
        }, t.Ea = function (e) {
          this.b.push(e), vc(this).o(function (t) {
            "auth/invalid-cordova-configuration" === t.code && (t = new Co("unknown", null, null, null, new T("no-auth-event")), e(t));
          });
        }, t.Sa = function (e) {
          B(this.b, function (t) {
            return t == e;
          });
        };
        var bc = {
          name: "pendingRedirect",
          F: "session"
        };

        function yc(t) {
          return Ju(t.b, bc, t.a);
        }

        function wc(t, e, n, i) {
          this.i = {}, this.u = 0, this.D = t, this.v = e, this.m = n, this.J = i, this.h = [], this.f = !1, this.l = b(this.s, this), this.b = new xc(), this.C = new Fc(), this.g = new gc(Pc(this.v, this.m)), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.C, this.c.linkViaPopup = this.C, this.c.reauthViaPopup = this.C, this.a = Ic(this.D, this.v, this.m, A, this.J);
        }

        function Ic(t, e, n, i, r) {
          var o = zl["default"].SDK_VERSION || null;
          return new (si() ? lc : ru)(t, e, n, o, i, r);
        }

        function Tc(e) {
          e.f || (e.f = !0, e.a.Ea(e.l));
          var n = e.a;
          return e.a.ma().o(function (t) {
            throw e.a == n && e.reset(), t;
          });
        }

        function Ec(n) {
          n.a.Xb() && Tc(n).o(function (t) {
            var e = new Co("unknown", null, null, null, new T("operation-not-supported-in-this-environment"));
            Oc(t) && n.s(e);
          }), n.a.Tb() || Mc(n.b);
        }

        function Ac(n, t) {
          K(n.h, t) || n.h.push(t), n.f || (t = n.g).b.get(bc, t.a).then(function (t) {
            return "pending" == t;
          }).then(function (t) {
            t ? yc(n.g).then(function () {
              Tc(n).o(function (t) {
                var e = new Co("unknown", null, null, null, new T("operation-not-supported-in-this-environment"));
                Oc(t) && n.s(e);
              });
            }) : Ec(n);
          }).o(function () {
            Ec(n);
          });
        }

        function kc(t, e) {
          B(t.h, function (t) {
            return t == e;
          });
        }

        wc.prototype.reset = function () {
          this.f = !1, this.a.Sa(this.l), this.a = Ic(this.D, this.v, this.m, null, this.J), this.i = {};
        }, wc.prototype.s = function (t) {
          if (!t) throw new T("invalid-auth-event");
          if (6e5 <= Date.now() - this.u && (this.i = {}, this.u = 0), t && t.getUid() && this.i.hasOwnProperty(t.getUid())) return !1;

          for (var e = !1, n = 0; n < this.h.length; n++) {
            var i = this.h[n];

            if (i.Fb(t.c, t.b)) {
              (e = this.c[t.c]) && (e.h(t, i), t && (t.f || t.b) && (this.i[t.getUid()] = !0, this.u = Date.now())), e = !0;
              break;
            }
          }

          return Mc(this.b), e;
        };
        var Sc = new Ci(2e3, 1e4),
            Nc = new Ci(3e4, 6e4);

        function _c(t, e, n, i, r, o, a) {
          return t.a.Mb(e, n, i, function () {
            t.f || (t.f = !0, t.a.Ea(t.l));
          }, function () {
            t.reset();
          }, r, o, a);
        }

        function Oc(t) {
          return !(!t || "auth/cordova-not-ready" != t.code);
        }

        function Cc(e, t, n, i, r) {
          var o, a;
          return (a = e.g).b.set(bc, "pending", a.a).then(function () {
            return e.a.Nb(t, n, i, r).o(function (t) {
              if (Oc(t)) throw new T("operation-not-supported-in-this-environment");
              return o = t, yc(e.g).then(function () {
                throw o;
              });
            }).then(function () {
              return e.a.$b() ? new fe(function () {}) : yc(e.g).then(function () {
                return e.qa();
              }).then(function () {}).o(function () {});
            });
          });
        }

        function Rc(t, e, n, i, r) {
          return t.a.Ob(i, function (t) {
            e.na(n, null, t, r);
          }, Sc.get());
        }

        wc.prototype.qa = function () {
          return this.b.qa();
        };

        var Dc = {};

        function Pc(t, e, n) {
          return t = t + ":" + e, t = n ? t + ":" + n.url : t;
        }

        function Lc(t, e, n, i) {
          var r = Pc(e, n, i);
          return Dc[r] || (Dc[r] = new wc(t, e, n, i)), Dc[r];
        }

        function xc() {
          this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1;
        }

        function Mc(t) {
          t.g || (t.g = !0, Vc(t, !1, null, null));
        }

        function jc(t) {
          t.g && !t.i && Vc(t, !1, null, null);
        }

        function Uc(t, e) {
          if (t.b = function () {
            return ye(e);
          }, t.f.length) for (var n = 0; n < t.f.length; n++) {
            t.f[n](e);
          }
        }

        function Vc(t, e, n, i) {
          e ? i ? function (t, e) {
            if (t.b = function () {
              return we(e);
            }, t.c.length) for (var n = 0; n < t.c.length; n++) {
              t.c[n](e);
            }
          }(t, i) : Uc(t, n) : Uc(t, {
            user: null
          }), t.f = [], t.c = [];
        }

        function Fc() {}

        function qc() {
          this.ib = !1, Object.defineProperty(this, "appVerificationDisabled", {
            get: function get() {
              return this.ib;
            },
            set: function set(t) {
              this.ib = t;
            },
            enumerable: !1
          });
        }

        function Hc(t, e) {
          this.a = e, Vi(this, "verificationId", t);
        }

        function Kc(t, e, n, i) {
          return new So(t).fb(e, n).then(function (t) {
            return new Hc(t, i);
          });
        }

        function Gc(t) {
          var e = Lr(t);
          if (!(e && e.exp && e.auth_time && e.iat)) throw new T("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
          Fi(this, {
            token: t,
            expirationTime: Pi(1e3 * e.exp),
            authTime: Pi(1e3 * e.auth_time),
            issuedAtTime: Pi(1e3 * e.iat),
            signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null,
            signInSecondFactor: e.firebase && e.firebase.sign_in_second_factor ? e.firebase.sign_in_second_factor : null,
            claims: e
          });
        }

        function Bc(t, e, n) {
          var i = e && e[Xc];
          if (!i) throw new T("argument-error", "Internal assert: Invalid MultiFactorResolver");
          this.a = t, this.f = ct(e), this.g = n, this.c = new Yr(null, i), this.b = [];
          var r = this;
          V(e[Wc] || [], function (t) {
            (t = Gi(t)) && r.b.push(t);
          }), Vi(this, "auth", this.a), Vi(this, "session", this.c), Vi(this, "hints", this.b);
        }

        xc.prototype.reset = function () {
          this.b = null, this.a && (this.a.cancel(), this.a = null);
        }, xc.prototype.h = function (t, e) {
          var n, i, r, o;
          t ? (this.reset(), this.g = !0, n = t.c, i = t.b, r = t.a && "auth/web-storage-unsupported" == t.a.code, o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code, this.i = !(!r && !o), "unknown" != n || r || o ? t.a ? (Vc(this, !0, null, t.a), ye()) : e.Fa(n, i) ? function (e, t, n) {
            n = n.Fa(t.c, t.b);
            var i = t.g,
                r = t.f,
                o = t.i,
                a = t.T(),
                s = !!t.c.match(/Redirect$/);
            n(i, r, a, o).then(function (t) {
              Vc(e, s, t, null);
            }).o(function (t) {
              Vc(e, s, null, t);
            });
          }(this, t, e) : we(new T("invalid-auth-event")) : (Vc(this, !1, null, null), ye())) : we(new T("invalid-auth-event"));
        }, xc.prototype.qa = function () {
          var r = this;
          return new fe(function (t, e) {
            var n, i;
            r.b ? r.b().then(t, e) : (r.f.push(t), r.c.push(e), n = r, i = new T("timeout"), n.a && n.a.cancel(), n.a = mn(Nc.get()).then(function () {
              n.b || (n.g = !0, Vc(n, !0, null, i));
            }));
          });
        }, Fc.prototype.h = function (t, e) {
          var n, i, r, o, a;
          t ? (n = t.c, i = t.b, t.a ? (e.na(t.c, null, t.a, t.b), ye()) : e.Fa(n, i) ? (r = e, o = (t = t).b, a = t.c, r.Fa(a, o)(t.g, t.f, t.T(), t.i).then(function (t) {
            r.na(a, t, null, o);
          }).o(function (t) {
            r.na(a, null, t, o);
          })) : we(new T("invalid-auth-event"))) : we(new T("invalid-auth-event"));
        }, Hc.prototype.confirm = function (t) {
          return t = No(this.verificationId, t), this.a(t);
        };
        var Wc = "mfaInfo",
            Xc = "mfaPendingCredential";

        function Jc(t, e, n, i) {
          T.call(this, "multi-factor-auth-required", i, e), this.b = new Bc(t, e, n), Vi(this, "resolver", this.b);
        }

        function Yc(t, e, n) {
          if (t && m(t.serverResponse) && "auth/multi-factor-auth-required" === t.code) try {
            return new Jc(e, t.serverResponse, n, t.message);
          } catch (t) {}
          return null;
        }

        function zc() {}

        function $c(t) {
          Vi(this, "factorId", t.fa), this.a = t;
        }

        function Zc(t) {
          if ($c.call(this, t), this.a.fa != So.PROVIDER_ID) throw new T("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");
        }

        function Qc(t, e) {
          for (var n in Fe.call(this, t), e) {
            this[n] = e[n];
          }
        }

        function th(t, e) {
          this.a = t, this.b = [], this.c = b(this.yc, this), Ze(this.a, "userReloaded", this.c);
          var i = [];
          e && e.multiFactor && e.multiFactor.enrolledFactors && V(e.multiFactor.enrolledFactors, function (t) {
            var e = null,
                n = {};

            if (t) {
              t.uid && (n[Xi] = t.uid), t.displayName && (n[Bi] = t.displayName), t.enrollmentTime && (n[Wi] = new Date(t.enrollmentTime).toISOString()), t.phoneNumber && (n[Ji] = t.phoneNumber);

              try {
                e = new Yi(n);
              } catch (t) {}

              t = e;
            } else t = null;

            t && i.push(t);
          }), eh(this, i);
        }

        function eh(t, e) {
          t.b = e, Vi(t, "enrolledFactors", e);
        }

        function nh(t, e, n) {
          if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!");
        }

        function ih(t, e) {
          return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e);
        }

        function rh(t) {
          this.f = t, this.b = this.a = null, this.c = Date.now();
        }

        function oh(t, e) {
          void 0 === e && (e = t.b ? (e = t.b).a - e.g : 0), t.c = Date.now() + 1e3 * e;
        }

        function ah(t, e) {
          t.b = Pr(e[Ha] || ""), t.a = e.refreshToken, oh(t, void 0 !== (e = e.expiresIn) ? Number(e) : void 0);
        }

        function sh(e, t) {
          return i = e.f, r = t, new fe(function (e, n) {
            "refresh_token" == r.grant_type && r.refresh_token || "authorization_code" == r.grant_type && r.code ? $a(i, i.l + "?key=" + encodeURIComponent(i.c), function (t) {
              t ? t.error ? n(Ys(t)) : t.access_token && t.refresh_token ? e(t) : n(new T("internal-error")) : n(new T("network-request-failed"));
            }, "POST", qn(r).toString(), i.g, i.m.get()) : n(new T("internal-error"));
          }).then(function (t) {
            return e.b = Pr(t.access_token), e.a = t.refresh_token, oh(e, t.expires_in), {
              accessToken: e.b.toString(),
              refreshToken: e.a
            };
          }).o(function (t) {
            throw "auth/user-token-expired" == t.code && (e.a = null), t;
          });
          var i, r;
        }

        function uh(t, e) {
          this.a = t || null, this.b = e || null, Fi(this, {
            lastSignInTime: Pi(e || null),
            creationTime: Pi(t || null)
          });
        }

        function ch(t, e, n, i, r, o) {
          Fi(this, {
            uid: t,
            displayName: i || null,
            photoURL: r || null,
            email: n || null,
            phoneNumber: o || null,
            providerId: e
          });
        }

        function hh(t, e, n) {
          this.J = [], this.l = t.apiKey, this.m = t.appName, this.s = t.authDomain || null;
          var i,
              r = zl["default"].SDK_VERSION ? mi(zl["default"].SDK_VERSION) : null;
          this.a = new Fa(this.l, _(A), r), t.emulatorConfig && Ja(this.a, t.emulatorConfig), this.b = new rh(this.a), bh(this, e[Ha]), ah(this.b, e), Vi(this, "refreshToken", this.b.a), Ih(this, n || {}), ln.call(this), this.R = !1, this.s && wi() && (this.i = Lc(this.s, this.l, this.m)), this.S = [], this.h = null, this.u = (i = this, new nh(function () {
            return i.I(!0);
          }, function (t) {
            return !(!t || "auth/network-request-failed" != t.code);
          }, function () {
            var t = i.b.c - Date.now() - 3e5;
            return 0 < t ? t : 0;
          })), this.aa = b(this.hb, this);
          var o = this;
          this.ya = null, this.Oa = function (t) {
            o.wa(t.h);
          }, this.ja = null, this.Aa = function (t) {
            Ja(o.a, t.c);
          }, this.X = null, this.$ = [], this.Ba = function (t) {
            dh(o, t.f);
          }, this.ba = null, this.O = new th(this, n), Vi(this, "multiFactor", this.O);
        }

        function lh(t, e) {
          t.ja && en(t.ja, "languageCodeChanged", t.Oa), (t.ja = e) && Ze(e, "languageCodeChanged", t.Oa);
        }

        function fh(t, e) {
          t.X && en(t.X, "emulatorConfigChanged", t.Aa), (t.X = e) && Ze(e, "emulatorConfigChanged", t.Aa);
        }

        function dh(t, e) {
          t.$ = e, za(t.a, zl["default"].SDK_VERSION ? mi(zl["default"].SDK_VERSION, t.$) : null);
        }

        function ph(t, e) {
          t.ba && en(t.ba, "frameworkChanged", t.Ba), (t.ba = e) && Ze(e, "frameworkChanged", t.Ba);
        }

        function vh(e) {
          try {
            return zl["default"].app(e.m).auth();
          } catch (t) {
            throw new T("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + e.m + "'!");
          }
        }

        function mh(t) {
          t.D || t.u.b || (t.u.start(), en(t, "tokenChanged", t.aa), Ze(t, "tokenChanged", t.aa));
        }

        function gh(t) {
          en(t, "tokenChanged", t.aa), t.u.stop();
        }

        function bh(t, e) {
          t.za = e, Vi(t, "_lat", e);
        }

        function yh(t) {
          for (var e = [], n = 0; n < t.S.length; n++) {
            e.push(t.S[n](t));
          }

          return Te(e).then(function () {
            return t;
          });
        }

        function wh(t) {
          t.i && !t.R && (t.R = !0, Ac(t.i, t));
        }

        function Ih(t, e) {
          Fi(t, {
            uid: e.uid,
            displayName: e.displayName || null,
            photoURL: e.photoURL || null,
            email: e.email || null,
            emailVerified: e.emailVerified || !1,
            phoneNumber: e.phoneNumber || null,
            isAnonymous: e.isAnonymous || !1,
            tenantId: e.tenantId || null,
            metadata: new uh(e.createdAt, e.lastLoginAt),
            providerData: []
          }), t.a.b = t.tenantId;
        }

        function Th() {}

        function Eh(t) {
          return ye().then(function () {
            if (t.D) throw new T("app-deleted");
          });
        }

        function Ah(t) {
          return q(t.providerData, function (t) {
            return t.providerId;
          });
        }

        function kh(t, e) {
          e && (Sh(t, e.providerId), t.providerData.push(e));
        }

        function Sh(t, e) {
          B(t.providerData, function (t) {
            return t.providerId == e;
          });
        }

        function Nh(t, e, n) {
          ("uid" != e || n) && t.hasOwnProperty(e) && Vi(t, e, n);
        }

        function _h(e, t) {
          var n, i;
          e != t && (Fi(e, {
            uid: t.uid,
            displayName: t.displayName,
            photoURL: t.photoURL,
            email: t.email,
            emailVerified: t.emailVerified,
            phoneNumber: t.phoneNumber,
            isAnonymous: t.isAnonymous,
            tenantId: t.tenantId,
            providerData: []
          }), t.metadata ? Vi(e, "metadata", new uh((i = t.metadata).a, i.b)) : Vi(e, "metadata", new uh()), V(t.providerData, function (t) {
            kh(e, t);
          }), n = e.b, i = t.b, n.b = i.b, n.a = i.a, n.c = i.c, Vi(e, "refreshToken", e.b.a), eh(e.O, t.O.b));
        }

        function Oh(i) {
          return i.I().then(function (t) {
            var e,
                n = i.isAnonymous;
            return Xs((e = i).a, As, {
              idToken: t
            }).then(b(e.Kc, e)).then(function () {
              return n || Nh(i, "isAnonymous", !1), t;
            });
          });
        }

        function Ch(t, e) {
          e[Ha] && t.za != e[Ha] && (ah(t.b, e), t.dispatchEvent(new Qc("tokenChanged")), bh(t, e[Ha]), Nh(t, "refreshToken", t.b.a));
        }

        function Rh(t, e) {
          return Oh(t).then(function () {
            if (K(Ah(t), e)) return yh(t).then(function () {
              throw new T("provider-already-linked");
            });
          });
        }

        function Dh(t, e, n) {
          return qi({
            user: t,
            credential: _o(e),
            additionalUserInfo: e = Vr(e),
            operationType: n
          });
        }

        function Ph(t, e) {
          return Ch(t, e), t.reload().then(function () {
            return t;
          });
        }

        function Lh(n, i, t, e, r) {
          if (!wi()) return we(new T("operation-not-supported-in-this-environment"));
          if (n.h && !r) return we(n.h);
          var o = Ur(t.providerId),
              a = Ni(n.uid + ":::"),
              s = null,
              u = ii(s = (!Ei() || ui()) && n.s && t.isOAuthProvider ? uu(n.s, n.l, n.m, i, t, null, a, zl["default"].SDK_VERSION || null, null, null, n.tenantId) : s, o && o.ua, o && o.ta);
          return e = e().then(function () {
            if (Mh(n), !r) return n.I().then(function () {});
          }).then(function () {
            return _c(n.i, u, i, t, a, !!s, n.tenantId);
          }).then(function () {
            return new fe(function (t, e) {
              n.na(i, null, new T("cancelled-popup-request"), n.g || null), n.f = t, n.C = e, n.g = a, n.c = Rc(n.i, n, i, u, a);
            });
          }).then(function (t) {
            return u && ni(u), t ? qi(t) : null;
          }).o(function (t) {
            throw u && ni(u), t;
          }), jh(n, e, r);
        }

        function xh(e, t, n, i, r) {
          if (!wi()) return we(new T("operation-not-supported-in-this-environment"));
          if (e.h && !r) return we(e.h);
          var o = null,
              a = Ni(e.uid + ":::");
          return i = i().then(function () {
            if (Mh(e), !r) return e.I().then(function () {});
          }).then(function () {
            return e.ga = a, yh(e);
          }).then(function (t) {
            return t = e.ha ? (t = e.ha).b.set(Fh, e.w(), t.a) : t;
          }).then(function () {
            return Cc(e.i, t, n, a, e.tenantId);
          }).o(function (t) {
            if (o = t, e.ha) return qh(e.ha);
            throw o;
          }).then(function () {
            if (o) throw o;
          }), jh(e, i, r);
        }

        function Mh(t) {
          if (!t.i || !t.R) {
            if (t.i && !t.R) throw new T("internal-error");
            throw new T("auth-domain-config-required");
          }
        }

        function jh(n, t, e) {
          var i,
              r = (t = t, e = e, (i = n).h && !e ? (t.cancel(), we(i.h)) : t.o(function (t) {
            throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (i.h || i.dispatchEvent(new Qc("userInvalidated")), i.h = t), t;
          }));
          return n.J.push(r), r.oa(function () {
            G(n.J, r);
          }), r.o(function (t) {
            var e = null;
            throw (e = t && "auth/multi-factor-auth-required" === t.code ? Yc(t.w(), vh(n), b(n.jc, n)) : e) || t;
          });
        }

        function Uh(t) {
          if (!t.apiKey) return null;
          var e = {
            apiKey: t.apiKey,
            authDomain: t.authDomain,
            appName: t.appName,
            emulatorConfig: t.emulatorConfig
          },
              n = {};
          if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
          n[Ha] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null;
          var i = t.stsTokenManager.expirationTime;
          i && (n.expiresIn = (i - Date.now()) / 1e3);
          var r = new hh(e, n, t);
          return t.providerData && V(t.providerData, function (t) {
            t && kh(r, qi(t));
          }), t.redirectEventId && (r.ga = t.redirectEventId), r;
        }

        function Vh(t) {
          this.a = t, this.b = Bu();
        }

        Bc.prototype.Rc = function (t) {
          var n = this;
          return t.sb(this.a.a, this.c).then(function (t) {
            var e = ct(n.f);
            return delete e[Wc], delete e[Xc], lt(e, t), n.g(e);
          });
        }, w(Jc, T), zc.prototype.sb = function (t, e, n) {
          return e.type == zr ? (o = this, a = t, s = n, e.Ha().then(function (t) {
            return t = {
              idToken: t
            }, void 0 !== s && (t.displayName = s), lt(t, {
              phoneVerificationInfo: ko(o.a)
            }), Xs(a, Ts, t);
          })) : (i = this, r = t, e.Ha().then(function (t) {
            return lt(t = {
              mfaPendingCredential: t
            }, {
              phoneVerificationInfo: ko(i.a)
            }), Xs(r, Es, t);
          }));
          var i, r, o, a, s;
        }, w($c, zc), w(Zc, $c), w(Qc, Fe), (t = th.prototype).yc = function (t) {
          var e;
          eh(this, (t = t.hd, e = [], V(t.mfaInfo || [], function (t) {
            (t = Gi(t)) && e.push(t);
          }), e));
        }, t.Rb = function () {
          return this.a.I().then(function (t) {
            return new Yr(t, null);
          });
        }, t.fc = function (e, n) {
          var i = this,
              r = this.a.a;
          return this.Rb().then(function (t) {
            return e.sb(r, t, n);
          }).then(function (t) {
            return Ch(i.a, t), i.a.reload();
          });
        }, t.bd = function (t) {
          var n = this,
              i = "string" == typeof t ? t : t.uid,
              e = this.a.a;
          return this.a.I().then(function (t) {
            return Xs(e, Ws, {
              idToken: t,
              mfaEnrollmentId: i
            });
          }).then(function (t) {
            var e = F(n.b, function (t) {
              return t.uid != i;
            });
            return eh(n, e), Ch(n.a, t), n.a.reload().o(function (t) {
              if ("auth/user-token-expired" != t.code) throw t;
            });
          });
        }, t.w = function () {
          return {
            multiFactor: {
              enrolledFactors: q(this.b, function (t) {
                return t.w();
              })
            }
          };
        }, nh.prototype.start = function () {
          this.a = this.c, function e(n, t) {
            n.stop();
            n.b = mn(ih(n, t)).then(Di).then(function () {
              return n.h();
            }).then(function () {
              e(n, !0);
            }).o(function (t) {
              n.i(t) && e(n, !1);
            });
          }(this, !0);
        }, nh.prototype.stop = function () {
          this.b && (this.b.cancel(), this.b = null);
        }, rh.prototype.w = function () {
          return {
            apiKey: this.f.c,
            refreshToken: this.a,
            accessToken: this.b && this.b.toString(),
            expirationTime: this.c
          };
        }, rh.prototype.getToken = function (t) {
          return t = !!t, this.b && !this.a ? we(new T("user-token-expired")) : t || !this.b || Date.now() > this.c - 3e4 ? this.a ? sh(this, {
            grant_type: "refresh_token",
            refresh_token: this.a
          }) : ye(null) : ye({
            accessToken: this.b.toString(),
            refreshToken: this.a
          });
        }, uh.prototype.w = function () {
          return {
            lastLoginAt: this.b,
            createdAt: this.a
          };
        }, w(hh, ln), hh.prototype.wa = function (t) {
          this.ya = t, Xa(this.a, t);
        }, hh.prototype.la = function () {
          return this.ya;
        }, hh.prototype.Ga = function () {
          return X(this.$);
        }, hh.prototype.hb = function () {
          this.u.b && (this.u.stop(), this.u.start());
        }, Vi(hh.prototype, "providerId", "firebase"), (t = hh.prototype).reload = function () {
          var t = this;
          return jh(this, Eh(this).then(function () {
            return Oh(t).then(function () {
              return yh(t);
            }).then(Th);
          }));
        }, t.oc = function (t) {
          return this.I(t).then(function (t) {
            return new Gc(t);
          });
        }, t.I = function (t) {
          var e = this;
          return jh(this, Eh(this).then(function () {
            return e.b.getToken(t);
          }).then(function (t) {
            if (!t) throw new T("internal-error");
            return t.accessToken != e.za && (bh(e, t.accessToken), e.dispatchEvent(new Qc("tokenChanged"))), Nh(e, "refreshToken", t.refreshToken), t.accessToken;
          }));
        }, t.Kc = function (t) {
          if (!(t = t.users) || !t.length) throw new T("internal-error");
          Ih(this, {
            uid: (t = t[0]).localId,
            displayName: t.displayName,
            photoURL: t.photoUrl,
            email: t.email,
            emailVerified: !!t.emailVerified,
            phoneNumber: t.phoneNumber,
            lastLoginAt: t.lastLoginAt,
            createdAt: t.createdAt,
            tenantId: t.tenantId
          });

          for (var e, n = (e = (e = t).providerUserInfo) && e.length ? q(e, function (t) {
            return new ch(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber);
          }) : [], i = 0; i < n.length; i++) {
            kh(this, n[i]);
          }

          Nh(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length)), this.dispatchEvent(new Qc("userReloaded", {
            hd: t
          }));
        }, t.Lc = function (t) {
          return ji("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."), this.tb(t);
        }, t.tb = function (t) {
          var e = this,
              n = null;
          return jh(this, t.c(this.a, this.uid).then(function (t) {
            return Ch(e, t), n = Dh(e, t, "reauthenticate"), e.h = null, e.reload();
          }).then(function () {
            return n;
          }), !0);
        }, t.Cc = function (t) {
          return ji("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."), this.qb(t);
        }, t.qb = function (e) {
          var n = this,
              i = null;
          return jh(this, Rh(this, e.providerId).then(function () {
            return n.I();
          }).then(function (t) {
            return e.b(n.a, t);
          }).then(function (t) {
            return i = Dh(n, t, "link"), Ph(n, t);
          }).then(function () {
            return i;
          }));
        }, t.Dc = function (t, e) {
          var n = this;
          return jh(this, Rh(this, "phone").then(function () {
            return Kc(vh(n), t, e, b(n.qb, n));
          }));
        }, t.Mc = function (t, e) {
          var n = this;
          return jh(this, ye().then(function () {
            return Kc(vh(n), t, e, b(n.tb, n));
          }), !0);
        }, t.Bb = function (e) {
          var n = this;
          return jh(this, this.I().then(function (t) {
            return n.a.Bb(t, e);
          }).then(function (t) {
            return Ch(n, t), n.reload();
          }));
        }, t.ed = function (e) {
          var n = this;
          return jh(this, this.I().then(function (t) {
            return e.b(n.a, t);
          }).then(function (t) {
            return Ch(n, t), n.reload();
          }));
        }, t.Cb = function (e) {
          var n = this;
          return jh(this, this.I().then(function (t) {
            return n.a.Cb(t, e);
          }).then(function (t) {
            return Ch(n, t), n.reload();
          }));
        }, t.Db = function (e) {
          if (void 0 === e.displayName && void 0 === e.photoURL) return Eh(this);
          var n = this;
          return jh(this, this.I().then(function (t) {
            return n.a.Db(t, {
              displayName: e.displayName,
              photoUrl: e.photoURL
            });
          }).then(function (t) {
            return Ch(n, t), Nh(n, "displayName", t.displayName || null), Nh(n, "photoURL", t.photoUrl || null), V(n.providerData, function (t) {
              "password" === t.providerId && (Vi(t, "displayName", n.displayName), Vi(t, "photoURL", n.photoURL));
            }), yh(n);
          }).then(Th));
        }, t.cd = function (e) {
          var n = this;
          return jh(this, Oh(this).then(function (t) {
            return K(Ah(n), e) ? Xs(n.a, ys, {
              idToken: t,
              deleteProvider: [e]
            }).then(function (t) {
              var e = {};
              return V(t.providerUserInfo || [], function (t) {
                e[t.providerId] = !0;
              }), V(Ah(n), function (t) {
                e[t] || Sh(n, t);
              }), e[So.PROVIDER_ID] || Vi(n, "phoneNumber", null), yh(n);
            }) : yh(n).then(function () {
              throw new T("no-such-provider");
            });
          }));
        }, t["delete"] = function () {
          var e = this;
          return jh(this, this.I().then(function (t) {
            return Xs(e.a, bs, {
              idToken: t
            });
          }).then(function () {
            e.dispatchEvent(new Qc("userDeleted"));
          })).then(function () {
            for (var t = 0; t < e.J.length; t++) {
              e.J[t].cancel("app-deleted");
            }

            lh(e, null), fh(e, null), ph(e, null), e.J = [], e.D = !0, gh(e), Vi(e, "refreshToken", null), e.i && kc(e.i, e);
          });
        }, t.Fb = function (t, e) {
          return !!("linkViaPopup" == t && (this.g || null) == e && this.f || "reauthViaPopup" == t && (this.g || null) == e && this.f || "linkViaRedirect" == t && (this.ga || null) == e || "reauthViaRedirect" == t && (this.ga || null) == e);
        }, t.na = function (t, e, n, i) {
          "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (n && this.C ? this.C(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.C);
        }, t.Fa = function (t, e) {
          return "linkViaPopup" == t && e == (this.g || null) ? b(this.Kb, this) : "reauthViaPopup" == t && e == (this.g || null) ? b(this.Lb, this) : "linkViaRedirect" == t && (this.ga || null) == e ? b(this.Kb, this) : "reauthViaRedirect" == t && (this.ga || null) == e ? b(this.Lb, this) : null;
        }, t.Ec = function (t) {
          var e = this;
          return Lh(this, "linkViaPopup", t, function () {
            return Rh(e, t.providerId).then(function () {
              return yh(e);
            });
          }, !1);
        }, t.Nc = function (t) {
          return Lh(this, "reauthViaPopup", t, function () {
            return ye();
          }, !0);
        }, t.Fc = function (t) {
          var e = this;
          return xh(this, "linkViaRedirect", t, function () {
            return Rh(e, t.providerId);
          }, !1);
        }, t.Oc = function (t) {
          return xh(this, "reauthViaRedirect", t, function () {
            return ye();
          }, !0);
        }, t.Kb = function (e, n, t, i) {
          var r = this;
          this.c && (this.c.cancel(), this.c = null);
          var o = null;
          return t = this.I().then(function (t) {
            return ls(r.a, {
              requestUri: e,
              postBody: i,
              sessionId: n,
              idToken: t
            });
          }).then(function (t) {
            return o = Dh(r, t, "link"), Ph(r, t);
          }).then(function () {
            return o;
          }), jh(this, t);
        }, t.Lb = function (t, e, n, i) {
          var r = this;
          this.c && (this.c.cancel(), this.c = null);
          var o = null;
          return jh(this, ye().then(function () {
            return Qr(fs(r.a, {
              requestUri: t,
              sessionId: e,
              postBody: i,
              tenantId: n
            }), r.uid);
          }).then(function (t) {
            return o = Dh(r, t, "reauthenticate"), Ch(r, t), r.h = null, r.reload();
          }).then(function () {
            return o;
          }), !0);
        }, t.ub = function (e) {
          var n = this,
              i = null;
          return jh(this, this.I().then(function (t) {
            return i = t, void 0 === e || ut(e) ? {} : Or(new yr(e));
          }).then(function (t) {
            return n.a.ub(i, t);
          }).then(function (t) {
            if (n.email != t) return n.reload();
          }).then(function () {}));
        }, t.Eb = function (e, n) {
          var i = this,
              r = null;
          return jh(this, this.I().then(function (t) {
            return r = t, void 0 === n || ut(n) ? {} : Or(new yr(n));
          }).then(function (t) {
            return i.a.Eb(r, e, t);
          }).then(function (t) {
            if (i.email != t) return i.reload();
          }).then(function () {}));
        }, t.jc = function (t) {
          var e = null,
              n = this;
          return jh(this, t = Qr(ye(t), n.uid).then(function (t) {
            return e = Dh(n, t, "reauthenticate"), Ch(n, t), n.h = null, n.reload();
          }).then(function () {
            return e;
          }), !0);
        }, t.toJSON = function () {
          return this.w();
        }, t.w = function () {
          var e = {
            uid: this.uid,
            displayName: this.displayName,
            photoURL: this.photoURL,
            email: this.email,
            emailVerified: this.emailVerified,
            phoneNumber: this.phoneNumber,
            isAnonymous: this.isAnonymous,
            tenantId: this.tenantId,
            providerData: [],
            apiKey: this.l,
            appName: this.m,
            authDomain: this.s,
            stsTokenManager: this.b.w(),
            redirectEventId: this.ga || null
          };
          return this.metadata && lt(e, this.metadata.w()), V(this.providerData, function (t) {
            e.providerData.push(function (t) {
              var e,
                  n = {};

              for (e in t) {
                t.hasOwnProperty(e) && (n[e] = t[e]);
              }

              return n;
            }(t));
          }), lt(e, this.O.w()), e;
        };
        var Fh = {
          name: "redirectUser",
          F: "session"
        };

        function qh(t) {
          return Ju(t.b, Fh, t.a);
        }

        function Hh(t) {
          var e, n, i, r;
          this.a = t, this.b = Bu(), this.c = null, this.f = (n = Bh("local"), i = Bh("session"), r = Bh("none"), function (n, i, r) {
            var o = Xu(i, r),
                a = Wu(n, i.F);
            return n.get(i, r).then(function (t) {
              var e = null;

              try {
                e = Si(l.localStorage.getItem(o));
              } catch (t) {}

              if (e && !t) return l.localStorage.removeItem(o), n.set(i, e, r);
              e && t && "localStorage" != a.type && l.localStorage.removeItem(o);
            });
          }((e = this).b, n, e.a).then(function () {
            return e.b.get(i, e.a);
          }).then(function (t) {
            return t ? i : e.b.get(r, e.a).then(function (t) {
              return t ? r : e.b.get(n, e.a).then(function (t) {
                return t ? n : e.b.get(Gh, e.a).then(function (t) {
                  return t ? Bh(t) : n;
                });
              });
            });
          }).then(function (t) {
            return e.c = t, Kh(e, t.F);
          }).o(function () {
            e.c || (e.c = n);
          })), this.b.addListener(Bh("local"), this.a, b(this.g, this));
        }

        function Kh(t, e) {
          var n,
              s,
              i = [];

          for (n in Ku) {
            Ku[n] !== e && i.push(Ju(t.b, Bh(Ku[n]), t.a));
          }

          return i.push(Ju(t.b, Gh, t.a)), s = i, new fe(function (n, e) {
            var i = s.length,
                r = [];
            if (i) for (var t = function t(_t3, e) {
              i--, r[_t3] = e, 0 == i && n(r);
            }, o = function o(t) {
              e(t);
            }, a = 0; a < s.length; a++) {
              Ie(s[a], y(t, a), o);
            } else n(r);
          });
        }

        Hh.prototype.g = function () {
          var e = this,
              n = Bh("local");
          Yh(this, function () {
            return ye().then(function () {
              return e.c && "local" != e.c.F ? e.b.get(n, e.a) : null;
            }).then(function (t) {
              if (t) return Kh(e, "local").then(function () {
                e.c = n;
              });
            });
          });
        };

        var Gh = {
          name: "persistence",
          F: "session"
        };

        function Bh(t) {
          return {
            name: "authUser",
            F: t
          };
        }

        function Wh(t, e) {
          return Yh(t, function () {
            return t.b.set(t.c, e.w(), t.a);
          });
        }

        function Xh(t) {
          return Yh(t, function () {
            return Ju(t.b, t.c, t.a);
          });
        }

        function Jh(t, e, n) {
          return Yh(t, function () {
            return t.b.get(t.c, t.a).then(function (t) {
              return t && e && (t.authDomain = e), t && n && (t.emulatorConfig = n), Uh(t || {});
            });
          });
        }

        function Yh(t, e) {
          return t.f = t.f.then(e, e), t.f;
        }

        function zh(t) {
          if (this.l = !1, Vi(this, "settings", new qc()), Vi(this, "app", t), !this.app.options || !this.app.options.apiKey) throw new T("invalid-api-key");
          var n, e, i, r, o, a;
          t = zl["default"].SDK_VERSION ? mi(zl["default"].SDK_VERSION) : null, this.a = new Fa(this.app.options && this.app.options.apiKey, _(A), t), this.R = [], this.s = [], this.O = [], this.hb = zl["default"].INTERNAL.createSubscribe(b(this.zc, this)), this.X = void 0, this.bc = zl["default"].INTERNAL.createSubscribe(b(this.Ac, this)), il(this, null), this.i = new Hh(this.app.options.apiKey + ":" + this.app.name), this.D = new Vh(this.app.options.apiKey + ":" + this.app.name), this.$ = ul(this, (e = (n = this).app.options.authDomain, t = function (e) {
            var t = function (t, e) {
              return t.b.get(Fh, t.a).then(function (t) {
                return t && e && (t.authDomain = e), Uh(t || {});
              });
            }(e.D, e.app.options.authDomain).then(function (t) {
              return (e.m = t) && (t.ha = e.D), qh(e.D);
            });

            return ul(e, t);
          }(n).then(function () {
            return Jh(n.i, e, n.P);
          }).then(function (e) {
            return e ? (e.ha = n.D, n.m && (n.m.ga || null) == (e.ga || null) ? e : e.reload().then(function () {
              return Wh(n.i, e).then(function () {
                return e;
              });
            }).o(function (t) {
              return "auth/network-request-failed" == t.code ? e : Xh(n.i);
            })) : null;
          }).then(function (t) {
            il(n, t || null);
          }), ul(n, t))), this.h = ul(this, (i = this).$.then(function () {
            return el(i);
          }).o(function () {}).then(function () {
            if (!i.l) return i.ja();
          }).o(function () {}).then(function () {
            var t;
            i.l || (i.ba = !0, (t = i.i).b.addListener(Bh("local"), t.a, i.ja));
          })), this.ba = !1, this.ja = b(this.Zc, this), this.Ba = b(this.da, this), this.ya = b(this.mc, this), this.za = b(this.wc, this), this.Aa = b(this.xc, this), this.b = null, o = (r = this).app.options.authDomain, a = r.app.options.apiKey, o && wi() && (r.Oa = r.$.then(function () {
            var t;
            if (!r.l) return r.b = Lc(o, a, r.app.name, r.P), Ac(r.b, r), ol(r) && wh(ol(r)), r.m && (wh(r.m), (t = r.m).wa(r.la()), lh(t, r), dh(t = r.m, r.J), ph(t, r), Ja((t = r.m).a, r.P), fh(t, r), r.m = null), r.b;
          })), this.INTERNAL = {}, this.INTERNAL["delete"] = b(this["delete"], this), this.INTERNAL.logFramework = b(this.Gc, this), this.u = 0, ln.call(this), t = this, Object.defineProperty(t, "lc", {
            get: function get() {
              return this.la();
            },
            set: function set(t) {
              this.wa(t);
            },
            enumerable: !1
          }), t.aa = null, Object.defineProperty(t, "ti", {
            get: function get() {
              return this.T();
            },
            set: function set(t) {
              this.yb(t);
            },
            enumerable: !1
          }), t.S = null, Object.defineProperty(t, "emulatorConfig", {
            get: function get() {
              var t;
              return t = this.P ? qi({
                protocol: (t = On(this.P.url)).c,
                host: t.a,
                port: t.g,
                options: qi({
                  disableWarnings: this.P.ec
                })
              }) : null;
            },
            enumerable: !1
          }), this.J = [], this.P = null;
        }

        function $h(t) {
          Fe.call(this, "languageCodeChanged"), this.h = t;
        }

        function Zh(t) {
          Fe.call(this, "emulatorConfigChanged"), this.c = t;
        }

        function Qh(t) {
          Fe.call(this, "frameworkChanged"), this.f = t;
        }

        function tl(t) {
          return t.Oa || we(new T("auth-domain-config-required"));
        }

        function el(t) {
          if (!wi()) return we(new T("operation-not-supported-in-this-environment"));
          var e = tl(t).then(function () {
            return t.b.qa();
          }).then(function (t) {
            return t ? qi(t) : null;
          });
          return ul(t, e);
        }

        function nl(o, a) {
          var s = {};
          return s.apiKey = o.app.options.apiKey, s.authDomain = o.app.options.authDomain, s.appName = o.app.name, o.P && (s.emulatorConfig = o.P), o.$.then(function () {
            return t = s, e = a, n = o.D, i = o.Ga(), r = new hh(t, e), n && (r.ha = n), i && dh(r, i), r.reload().then(function () {
              return r;
            });
            var t, e, n, i, r;
          }).then(function (t) {
            return ol(o) && t.uid == ol(o).uid ? _h(ol(o), t) : (il(o, t), wh(t)), o.da(t);
          }).then(function () {
            sl(o);
          });
        }

        function il(t, e) {
          var n, i;
          ol(t) && (n = ol(t), i = t.Ba, B(n.S, function (t) {
            return t == i;
          }), en(ol(t), "tokenChanged", t.ya), en(ol(t), "userDeleted", t.za), en(ol(t), "userInvalidated", t.Aa), gh(ol(t))), e && (e.S.push(t.Ba), Ze(e, "tokenChanged", t.ya), Ze(e, "userDeleted", t.za), Ze(e, "userInvalidated", t.Aa), 0 < t.u && mh(e)), Vi(t, "currentUser", e), e && (e.wa(t.la()), lh(e, t), dh(e, t.J), ph(e, t), Ja(e.a, t.P), fh(e, t));
        }

        function rl(n, t) {
          var e = null,
              i = null;
          return ul(n, t.then(function (t) {
            return e = _o(t), i = Vr(t), nl(n, t);
          }, function (t) {
            var e = null;
            throw (e = t && "auth/multi-factor-auth-required" === t.code ? Yc(t.w(), n, b(n.kc, n)) : e) || t;
          }).then(function () {
            return qi({
              user: ol(n),
              credential: e,
              additionalUserInfo: i,
              operationType: "signIn"
            });
          }));
        }

        function ol(t) {
          return t.currentUser;
        }

        function al(t) {
          return ol(t) && ol(t)._lat || null;
        }

        function sl(t) {
          if (t.ba) {
            for (var e = 0; e < t.s.length; e++) {
              t.s[e] && t.s[e](al(t));
            }

            if (t.X !== t.getUid() && t.O.length) for (t.X = t.getUid(), e = 0; e < t.O.length; e++) {
              t.O[e] && t.O[e](al(t));
            }
          }
        }

        function ul(t, e) {
          return t.R.push(e), e.oa(function () {
            G(t.R, e);
          }), e;
        }

        function cl() {}

        function hl() {
          this.a = {}, this.b = 1e12;
        }

        Hh.prototype.xb = function (e) {
          var n = null,
              i = this;
          return function (t) {
            var e = new T("invalid-persistence-type"),
                n = new T("unsupported-persistence-type");

            t: {
              for (i in Ku) {
                if (Ku[i] == t) {
                  var i = !0;
                  break t;
                }
              }

              i = !1;
            }

            if (!i || "string" != typeof t) throw e;

            switch (hi()) {
              case "ReactNative":
                if ("session" === t) throw n;
                break;

              case "Node":
                if ("none" !== t) throw n;
                break;

              case "Worker":
                if ("session" === t || !Tu() && "none" !== t) throw n;
                break;

              default:
                if (!yi() && "none" !== t) throw n;
            }
          }(e), Yh(this, function () {
            return e != i.c.F ? i.b.get(i.c, i.a).then(function (t) {
              return n = t, Kh(i, e);
            }).then(function () {
              if (i.c = Bh(e), n) return i.b.set(i.c, n, i.a);
            }) : ye();
          });
        }, w(zh, ln), w($h, Fe), w(Zh, Fe), w(Qh, Fe), (t = zh.prototype).xb = function (t) {
          return t = this.i.xb(t), ul(this, t);
        }, t.wa = function (t) {
          this.aa === t || this.l || (this.aa = t, Xa(this.a, this.aa), this.dispatchEvent(new $h(this.la())));
        }, t.la = function () {
          return this.aa;
        }, t.fd = function () {
          var t = l.navigator;
          this.wa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null);
        }, t.gd = function (t, e) {
          if (!this.P) {
            if (!/^https?:\/\//.test(t)) throw new T("argument-error", "Emulator URL must start with a valid scheme (http:// or https://).");
            e = !!e && !!e.disableWarnings, n = e, "undefined" != typeof console && "function" == typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), l.document && !n && ai().then(function () {
              var t = l.document.createElement("div");
              t.innerText = "Running in emulator mode. Do not use with production credentials.", t.style.position = "fixed", t.style.width = "100%", t.style.backgroundColor = "#ffffff", t.style.border = ".1em solid #000000", t.style.color = "#b50000", t.style.bottom = "0px", t.style.left = "0px", t.style.margin = "0px", t.style.zIndex = 1e4, t.style.textAlign = "center", t.classList.add("firebase-emulator-warning"), l.document.body.appendChild(t);
            }), this.P = {
              url: t,
              ec: e
            }, this.settings.ib = !0, Ja(this.a, this.P), this.dispatchEvent(new Zh(this.P));
          }

          var n;
        }, t.Gc = function (t) {
          this.J.push(t), za(this.a, zl["default"].SDK_VERSION ? mi(zl["default"].SDK_VERSION, this.J) : null), this.dispatchEvent(new Qh(this.J));
        }, t.Ga = function () {
          return X(this.J);
        }, t.yb = function (t) {
          this.S === t || this.l || (this.S = t, this.a.b = this.S);
        }, t.T = function () {
          return this.S;
        }, t.toJSON = function () {
          return {
            apiKey: this.app.options.apiKey,
            authDomain: this.app.options.authDomain,
            appName: this.app.name,
            currentUser: ol(this) && ol(this).w()
          };
        }, t.Fb = function (t, e) {
          switch (t) {
            case "unknown":
            case "signInViaRedirect":
              return !0;

            case "signInViaPopup":
              return this.g == e && !!this.f;

            default:
              return !1;
          }
        }, t.na = function (t, e, n, i) {
          "signInViaPopup" == t && this.g == i && (n && this.C ? this.C(n) : e && !n && this.f && this.f(e), this.c && (this.c.cancel(), this.c = null), delete this.f, delete this.C);
        }, t.Fa = function (t, e) {
          return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == e && this.f ? b(this.ic, this) : null;
        }, t.ic = function (t, e, n, i) {
          var r = this,
              o = {
            requestUri: t,
            postBody: i,
            sessionId: e,
            tenantId: n
          };
          return this.c && (this.c.cancel(), this.c = null), r.$.then(function () {
            return rl(r, hs(r.a, o));
          });
        }, t.Xc = function (e) {
          if (!wi()) return we(new T("operation-not-supported-in-this-environment"));
          var n = this,
              t = Ur(e.providerId),
              i = Ni(),
              r = null,
              o = ii(r = (!Ei() || ui()) && this.app.options.authDomain && e.isOAuthProvider ? uu(this.app.options.authDomain, this.app.options.apiKey, this.app.name, "signInViaPopup", e, null, i, zl["default"].SDK_VERSION || null, null, null, this.T(), this.P) : r, t && t.ua, t && t.ta);
          return ul(this, t = tl(this).then(function (t) {
            return _c(t, o, "signInViaPopup", e, i, !!r, n.T());
          }).then(function () {
            return new fe(function (t, e) {
              n.na("signInViaPopup", null, new T("cancelled-popup-request"), n.g), n.f = t, n.C = e, n.g = i, n.c = Rc(n.b, n, "signInViaPopup", o, i);
            });
          }).then(function (t) {
            return o && ni(o), t ? qi(t) : null;
          }).o(function (t) {
            throw o && ni(o), t;
          }));
        }, t.Yc = function (t) {
          if (!wi()) return we(new T("operation-not-supported-in-this-environment"));
          var e = this;
          return ul(this, tl(this).then(function () {
            return Yh(t = e.i, function () {
              return t.b.set(Gh, t.c.F, t.a);
            });
            var t;
          }).then(function () {
            return Cc(e.b, "signInViaRedirect", t, void 0, e.T());
          }));
        }, t.qa = function () {
          var e = this;
          return el(this).then(function (t) {
            return e.b && jc(e.b.b), t;
          }).o(function (t) {
            throw e.b && jc(e.b.b), t;
          });
        }, t.dd = function (t) {
          if (!t) return we(new T("null-user"));
          if (this.S != t.tenantId) return we(new T("tenant-id-mismatch"));
          var e = this,
              n = {};
          n.apiKey = this.app.options.apiKey, n.authDomain = this.app.options.authDomain, n.appName = this.app.name;
          var i,
              r,
              o,
              a,
              s,
              u = (i = t, r = n, o = e.D, a = e.Ga(), s = i.b, (n = {})[Ha] = s.b && s.b.toString(), n.refreshToken = s.a, r = new hh(r || {
            apiKey: i.l,
            authDomain: i.s,
            appName: i.m
          }, n), o && (r.ha = o), a && dh(r, a), _h(r, i), r);
          return ul(this, this.h.then(function () {
            if (e.app.options.apiKey != t.l) return u.reload();
          }).then(function () {
            return ol(e) && t.uid == ol(e).uid ? (_h(ol(e), t), e.da(t)) : (il(e, u), wh(u), e.da(u));
          }).then(function () {
            sl(e);
          }));
        }, t.Ab = function () {
          var t = this,
              e = this.h.then(function () {
            return t.b && jc(t.b.b), ol(t) ? (il(t, null), Xh(t.i).then(function () {
              sl(t);
            })) : ye();
          });
          return ul(this, e);
        }, t.Zc = function () {
          var i = this;
          return Jh(this.i, this.app.options.authDomain).then(function (t) {
            if (!i.l) {
              var e, n;
              if ((e = ol(i) && t) && (e = ol(i).uid, n = t.uid, e = null != e && "" !== e && null != n && "" !== n && e == n), e) return _h(ol(i), t), ol(i).I();
              (ol(i) || t) && (il(i, t), t && (wh(t), t.ha = i.D), i.b && Ac(i.b, i), sl(i));
            }
          });
        }, t.da = function (t) {
          return Wh(this.i, t);
        }, t.mc = function () {
          sl(this), this.da(ol(this));
        }, t.wc = function () {
          this.Ab();
        }, t.xc = function () {
          this.Ab();
        }, t.kc = function (t) {
          var e = this;
          return this.h.then(function () {
            return rl(e, ye(t));
          });
        }, t.zc = function (t) {
          var e = this;
          this.addAuthTokenListener(function () {
            t.next(ol(e));
          });
        }, t.Ac = function (t) {
          var e,
              n,
              i = this;
          n = function n() {
            t.next(ol(i));
          }, (e = this).O.push(n), ul(e, e.h.then(function () {
            !e.l && K(e.O, n) && e.X !== e.getUid() && (e.X = e.getUid(), n(al(e)));
          }));
        }, t.Ic = function (t, e, n) {
          var i = this;
          return this.ba && Promise.resolve().then(function () {
            "function" == typeof t ? t(ol(i)) : "function" == typeof t.next && t.next(ol(i));
          }), this.hb(t, e, n);
        }, t.Hc = function (t, e, n) {
          var i = this;
          return this.ba && Promise.resolve().then(function () {
            i.X = i.getUid(), "function" == typeof t ? t(ol(i)) : "function" == typeof t.next && t.next(ol(i));
          }), this.bc(t, e, n);
        }, t.nc = function (t) {
          var e = this,
              n = this.h.then(function () {
            return ol(e) ? ol(e).I(t).then(function (t) {
              return {
                accessToken: t
              };
            }) : null;
          });
          return ul(this, n);
        }, t.Tc = function (t) {
          var n = this;
          return this.h.then(function () {
            return rl(n, Xs(n.a, qs, {
              token: t
            }));
          }).then(function (t) {
            var e = t.user;
            return Nh(e, "isAnonymous", !1), n.da(e), t;
          });
        }, t.Uc = function (t, e) {
          var n = this;
          return this.h.then(function () {
            return rl(n, Xs(n.a, Hs, {
              email: t,
              password: e
            }));
          });
        }, t.dc = function (t, e) {
          var n = this;
          return this.h.then(function () {
            return rl(n, Xs(n.a, ms, {
              email: t,
              password: e
            }));
          });
        }, t.$a = function (t) {
          var e = this;
          return this.h.then(function () {
            return rl(e, t.ka(e.a));
          });
        }, t.Sc = function (t) {
          return ji("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."), this.$a(t);
        }, t.zb = function () {
          var n = this;
          return this.h.then(function () {
            var t = ol(n);

            if (t && t.isAnonymous) {
              var e = qi({
                providerId: null,
                isNewUser: !1
              });
              return qi({
                user: t,
                credential: null,
                additionalUserInfo: e,
                operationType: "signIn"
              });
            }

            return rl(n, n.a.zb()).then(function (t) {
              var e = t.user;
              return Nh(e, "isAnonymous", !0), n.da(e), t;
            });
          });
        }, t.getUid = function () {
          return ol(this) && ol(this).uid || null;
        }, t.cc = function (t) {
          this.addAuthTokenListener(t), this.u++, 0 < this.u && ol(this) && mh(ol(this));
        }, t.Pc = function (e) {
          var n = this;
          V(this.s, function (t) {
            t == e && n.u--;
          }), this.u < 0 && (this.u = 0), 0 == this.u && ol(this) && gh(ol(this)), this.removeAuthTokenListener(e);
        }, t.addAuthTokenListener = function (t) {
          var e = this;
          this.s.push(t), ul(this, this.h.then(function () {
            e.l || K(e.s, t) && t(al(e));
          }));
        }, t.removeAuthTokenListener = function (e) {
          B(this.s, function (t) {
            return t == e;
          });
        }, t["delete"] = function () {
          this.l = !0;

          for (var t = 0; t < this.R.length; t++) {
            this.R[t].cancel("app-deleted");
          }

          return this.R = [], this.i && (t = this.i).b.removeListener(Bh("local"), t.a, this.ja), this.b && (kc(this.b, this), jc(this.b.b)), Promise.resolve();
        }, t.hc = function (t) {
          return ul(this, Xs(this.a, gs, {
            identifier: t,
            continueUri: Ii() ? Qn() : "http://localhost"
          }).then(function (t) {
            return t.signinMethods || [];
          }));
        }, t.Bc = function (t) {
          return !!To(t);
        }, t.wb = function (e, n) {
          var i = this;
          return ul(this, ye().then(function () {
            var t = new yr(n);
            if (!t.c) throw new T("argument-error", Tr + " must be true when sending sign in link to email");
            return Or(t);
          }).then(function (t) {
            return i.a.wb(e, t);
          }).then(function () {}));
        }, t.jd = function (t) {
          return this.Ra(t).then(function (t) {
            return t.data.email;
          });
        }, t.nb = function (t, e) {
          return ul(this, this.a.nb(t, e).then(function () {}));
        }, t.Ra = function (t) {
          return ul(this, this.a.Ra(t).then(function (t) {
            return new zi(t);
          }));
        }, t.jb = function (t) {
          return ul(this, this.a.jb(t).then(function () {}));
        }, t.vb = function (e, t) {
          var n = this;
          return ul(this, ye().then(function () {
            return void 0 === t || ut(t) ? {} : Or(new yr(t));
          }).then(function (t) {
            return n.a.vb(e, t);
          }).then(function () {}));
        }, t.Wc = function (t, e) {
          return ul(this, Kc(this, t, e, b(this.$a, this)));
        }, t.Vc = function (n, i) {
          var r = this;
          return ul(this, ye().then(function () {
            var t = i || Qn(),
                e = Io(n, t);
            if (!(t = To(t))) throw new T("argument-error", "Invalid email link!");
            if (t.tenantId !== r.T()) throw new T("tenant-id-mismatch");
            return r.$a(e);
          }));
        }, cl.prototype.render = function () {}, cl.prototype.reset = function () {}, cl.prototype.getResponse = function () {}, cl.prototype.execute = function () {};
        var ll = null;

        function fl(t, e) {
          return (e = dl(e)) && t.a[e] || null;
        }

        function dl(t) {
          return (t = void 0 === t ? 1e12 : t) ? t.toString() : null;
        }

        function pl(t, e) {
          this.g = !1, this.c = e, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = te(t);
          var n = this;
          this.i = function () {
            n.execute();
          }, this.h ? this.execute() : Ze(this.f, "click", this.i);
        }

        function vl(t) {
          if (t.g) throw Error("reCAPTCHA mock was already deleted!");
        }

        function ml() {}

        function gl() {}

        hl.prototype.render = function (t, e) {
          return this.a[this.b.toString()] = new pl(t, e), this.b++;
        }, hl.prototype.reset = function (t) {
          var e = fl(this, t);
          t = dl(t), e && t && (e["delete"](), delete this.a[t]);
        }, hl.prototype.getResponse = function (t) {
          return (t = fl(this, t)) ? t.getResponse() : null;
        }, hl.prototype.execute = function (t) {
          (t = fl(this, t)) && t.execute();
        }, pl.prototype.getResponse = function () {
          return vl(this), this.b;
        }, pl.prototype.execute = function () {
          vl(this);
          var n = this;
          this.a || (this.a = setTimeout(function () {
            n.b = function () {
              for (var t = 50, e = []; 0 < t;) {
                e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
              }

              return e.join("");
            }();

            var t = n.c.callback,
                e = n.c["expired-callback"];
            if (t) try {
              t(n.b);
            } catch (t) {}
            n.a = setTimeout(function () {
              if (n.a = null, n.b = null, e) try {
                e();
              } catch (t) {}
              n.h && n.execute();
            }, 6e4);
          }, 500));
        }, pl.prototype["delete"] = function () {
          vl(this), this.g = !0, clearTimeout(this.a), this.a = null, en(this.f, "click", this.i);
        }, Vi(ml, "FACTOR_ID", "phone"), gl.prototype.g = function () {
          return ye(ll = ll || new hl());
        }, gl.prototype.c = function () {};
        var bl = null;

        function yl() {
          this.b = l.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString();
        }

        var wl = new dt(gt, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
            Il = new Ci(3e4, 6e4);
        yl.prototype.g = function (r) {
          var o = this;
          return new fe(function (t, e) {
            var i = setTimeout(function () {
              e(new T("network-request-failed"));
            }, Il.get());
            !l.grecaptcha || r !== o.f && !o.b ? (l[o.a] = function () {
              var n;
              l.grecaptcha ? (o.f = r, n = l.grecaptcha.render, l.grecaptcha.render = function (t, e) {
                return t = n(t, e), o.b++, t;
              }, clearTimeout(i), t(l.grecaptcha)) : (clearTimeout(i), e(new T("internal-error"))), delete l[o.a];
            }, ye(Pa(It(wl, {
              onload: o.a,
              hl: r || ""
            }))).o(function () {
              clearTimeout(i), e(new T("internal-error", "Unable to load external reCAPTCHA dependencies!"));
            })) : (clearTimeout(i), t(l.grecaptcha));
          });
        }, yl.prototype.c = function () {
          this.b--;
        };
        var Tl = null;

        function El(t, e, n, i, r, o, a) {
          if (Vi(this, "type", "recaptcha"), this.c = this.f = null, this.D = !1, this.v = e, this.g = null, a = a ? bl = bl || new gl() : Tl = Tl || new yl(), this.m = a, this.a = n || {
            theme: "light",
            type: "image"
          }, this.h = [], this.a[Sl]) throw new T("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
          if (this.i = "invisible" === this.a[Nl], !l.document) throw new T("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
          if (!te(e) || !this.i && te(e).hasChildNodes()) throw new T("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
          this.s = new Fa(t, o || null, r || null), this.u = i || function () {
            return null;
          };
          var s = this;
          this.l = [];
          var u = this.a[Al];

          this.a[Al] = function (t) {
            var e;
            _l(s, t), "function" == typeof u ? u(t) : "string" != typeof u || "function" == typeof (e = bi(u, l)) && e(t);
          };

          var c = this.a[kl];

          this.a[kl] = function () {
            var t;
            _l(s, null), "function" == typeof c ? c() : "string" != typeof c || "function" == typeof (t = bi(c, l)) && t();
          };
        }

        var Al = "callback",
            kl = "expired-callback",
            Sl = "sitekey",
            Nl = "size";

        function _l(t, e) {
          for (var n = 0; n < t.l.length; n++) {
            try {
              t.l[n](e);
            } catch (t) {}
          }
        }

        function Ol(t, e) {
          return t.h.push(e), e.oa(function () {
            G(t.h, e);
          }), e;
        }

        function Cl(t) {
          if (t.D) throw new T("internal-error", "RecaptchaVerifier instance has been destroyed.");
        }

        function Rl(t, e, n) {
          var i = !1;

          try {
            this.b = n || zl["default"].app();
          } catch (t) {
            throw new T("argument-error", "No firebase.app.App instance is currently initialized.");
          }

          if (!this.b.options || !this.b.options.apiKey) throw new T("invalid-api-key");
          n = this.b.options.apiKey;
          var r = this,
              o = null;

          try {
            o = this.b.auth().Ga();
          } catch (t) {}

          try {
            i = this.b.auth().settings.appVerificationDisabledForTesting;
          } catch (t) {}

          o = zl["default"].SDK_VERSION ? mi(zl["default"].SDK_VERSION, o) : null, El.call(this, n, t, e, function () {
            try {
              var e = r.b.auth().la();
            } catch (t) {
              e = null;
            }

            return e;
          }, o, _(A), i);
        }

        function Dl(t, e, n, i) {
          t: {
            n = Array.prototype.slice.call(n);

            for (var r = 0, o = !1, a = 0; a < e.length; a++) {
              if (e[a].optional) o = !0;else {
                if (o) throw new T("internal-error", "Argument validator encountered a required argument after an optional argument.");
                r++;
              }
            }

            if (o = e.length, n.length < r || o < n.length) i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + n.length + ".";else {
              for (r = 0; r < n.length; r++) {
                if (o = e[r].optional && void 0 === n[r], !e[r].M(n[r]) && !o) {
                  if (e = e[r], r < 0 || r >= Pl.length) throw new T("internal-error", "Argument validator received an unsupported number of arguments.");
                  n = Pl[r], i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.K + ".";
                  break t;
                }
              }

              i = null;
            }
          }

          if (i) throw new T("argument-error", t + " failed: " + i);
        }

        (t = El.prototype).Ia = function () {
          var e = this;
          return this.f || (this.f = Ol(this, ye().then(function () {
            if (Ii() && !ci()) return ai();
            throw new T("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
          }).then(function () {
            return e.m.g(e.u());
          }).then(function (t) {
            return e.g = t, Xs(e.s, Cs, {});
          }).then(function (t) {
            e.a[Sl] = t.recaptchaSiteKey;
          }).o(function (t) {
            throw e.f = null, t;
          })));
        }, t.render = function () {
          Cl(this);
          var n = this;
          return Ol(this, this.Ia().then(function () {
            var t, e;
            return null === n.c && (e = n.v, n.i || (t = te(e), e = oe("DIV"), t.appendChild(e)), n.c = n.g.render(e, n.a)), n.c;
          }));
        }, t.verify = function () {
          Cl(this);
          var r = this;
          return Ol(this, this.render().then(function (e) {
            return new fe(function (n) {
              var _i2,
                  t = r.g.getResponse(e);

              t ? n(t) : (r.l.push(_i2 = function i(t) {
                var e;
                t && (e = _i2, B(r.l, function (t) {
                  return t == e;
                }), n(t));
              }), r.i && r.g.execute(r.c));
            });
          }));
        }, t.reset = function () {
          Cl(this), null !== this.c && this.g.reset(this.c);
        }, t.clear = function () {
          Cl(this), this.D = !0, this.m.c();

          for (var t, e = 0; e < this.h.length; e++) {
            this.h[e].cancel("RecaptchaVerifier instance has been destroyed.");
          }

          if (!this.i) {
            e = te(this.v);

            for (; t = e.firstChild;) {
              e.removeChild(t);
            }
          }
        }, w(Rl, El);
        var Pl = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

        function Ll(t, e) {
          return {
            name: t || "",
            K: "a valid string",
            optional: !!e,
            M: function M(t) {
              return "string" == typeof t;
            }
          };
        }

        function xl(t, e) {
          return {
            name: t || "",
            K: "a boolean",
            optional: !!e,
            M: function M(t) {
              return "boolean" == typeof t;
            }
          };
        }

        function Ml(t, e) {
          return {
            name: t || "",
            K: "a valid object",
            optional: !!e,
            M: m
          };
        }

        function jl(t, e) {
          return {
            name: t || "",
            K: "a function",
            optional: !!e,
            M: function M(t) {
              return "function" == typeof t;
            }
          };
        }

        function Ul(t, e) {
          return {
            name: t || "",
            K: "null",
            optional: !!e,
            M: function M(t) {
              return null === t;
            }
          };
        }

        function Vl(n) {
          return {
            name: n ? n + "Credential" : "credential",
            K: n ? "a valid " + n + " credential" : "a valid credential",
            optional: !1,
            M: function M(t) {
              if (!t) return !1;
              var e = !n || t.providerId === n;
              return !(!t.ka || !e);
            }
          };
        }

        function Fl() {
          return {
            name: "multiFactorAssertion",
            K: "a valid multiFactorAssertion",
            optional: !1,
            M: function M(t) {
              return !!t && !!t.sb;
            }
          };
        }

        function ql() {
          return {
            name: "authProvider",
            K: "a valid Auth provider",
            optional: !1,
            M: function M(t) {
              return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"));
            }
          };
        }

        function Hl(t, e) {
          return m(t) && "string" == typeof t.type && t.type === e && "function" == typeof t.Ha;
        }

        function Kl(t) {
          return m(t) && "string" == typeof t.uid;
        }

        function Gl() {
          return {
            name: "applicationVerifier",
            K: "an implementation of firebase.auth.ApplicationVerifier",
            optional: !1,
            M: function M(t) {
              return !(!t || "string" != typeof t.type || "function" != typeof t.verify);
            }
          };
        }

        function Bl(e, n, t, i) {
          return {
            name: t || "",
            K: e.K + " or " + n.K,
            optional: !!i,
            M: function M(t) {
              return e.M(t) || n.M(t);
            }
          };
        }

        function Wl(t, e) {
          for (var n in e) {
            var i = e[n].name;
            t[i] = Yl(i, t[n], e[n].j);
          }
        }

        function Xl(t, e) {
          for (var n in e) {
            var i = e[n].name;
            i !== n && Object.defineProperty(t, i, {
              get: y(function (t) {
                return this[t];
              }, n),
              set: y(function (t, e, n, i) {
                Dl(t, [n], [i], !0), this[e] = i;
              }, i, n, e[n].kb),
              enumerable: !0
            });
          }
        }

        function Jl(t, e, n, i) {
          t[e] = Yl(e, n, i);
        }

        function Yl(t, e, n) {
          function i() {
            var t = Array.prototype.slice.call(arguments);
            return Dl(o, n, t), e.apply(this, t);
          }

          if (!n) return e;
          var r,
              o = (t = (t = t).split("."))[t.length - 1];

          for (r in e) {
            i[r] = e[r];
          }

          for (r in e.prototype) {
            i.prototype[r] = e.prototype[r];
          }

          return i;
        }

        Wl(zh.prototype, {
          jb: {
            name: "applyActionCode",
            j: [Ll("code")]
          },
          Ra: {
            name: "checkActionCode",
            j: [Ll("code")]
          },
          nb: {
            name: "confirmPasswordReset",
            j: [Ll("code"), Ll("newPassword")]
          },
          dc: {
            name: "createUserWithEmailAndPassword",
            j: [Ll("email"), Ll("password")]
          },
          hc: {
            name: "fetchSignInMethodsForEmail",
            j: [Ll("email")]
          },
          qa: {
            name: "getRedirectResult",
            j: []
          },
          Bc: {
            name: "isSignInWithEmailLink",
            j: [Ll("emailLink")]
          },
          Hc: {
            name: "onAuthStateChanged",
            j: [Bl(Ml(), jl(), "nextOrObserver"), jl("opt_error", !0), jl("opt_completed", !0)]
          },
          Ic: {
            name: "onIdTokenChanged",
            j: [Bl(Ml(), jl(), "nextOrObserver"), jl("opt_error", !0), jl("opt_completed", !0)]
          },
          vb: {
            name: "sendPasswordResetEmail",
            j: [Ll("email"), Bl(Ml("opt_actionCodeSettings", !0), Ul(null, !0), "opt_actionCodeSettings", !0)]
          },
          wb: {
            name: "sendSignInLinkToEmail",
            j: [Ll("email"), Ml("actionCodeSettings")]
          },
          xb: {
            name: "setPersistence",
            j: [Ll("persistence")]
          },
          Sc: {
            name: "signInAndRetrieveDataWithCredential",
            j: [Vl()]
          },
          zb: {
            name: "signInAnonymously",
            j: []
          },
          $a: {
            name: "signInWithCredential",
            j: [Vl()]
          },
          Tc: {
            name: "signInWithCustomToken",
            j: [Ll("token")]
          },
          Uc: {
            name: "signInWithEmailAndPassword",
            j: [Ll("email"), Ll("password")]
          },
          Vc: {
            name: "signInWithEmailLink",
            j: [Ll("email"), Ll("emailLink", !0)]
          },
          Wc: {
            name: "signInWithPhoneNumber",
            j: [Ll("phoneNumber"), Gl()]
          },
          Xc: {
            name: "signInWithPopup",
            j: [ql()]
          },
          Yc: {
            name: "signInWithRedirect",
            j: [ql()]
          },
          dd: {
            name: "updateCurrentUser",
            j: [Bl({
              name: "user",
              K: "an instance of Firebase User",
              optional: !1,
              M: function M(t) {
                return !!(t && t instanceof hh);
              }
            }, Ul(), "user")]
          },
          Ab: {
            name: "signOut",
            j: []
          },
          toJSON: {
            name: "toJSON",
            j: [Ll(null, !0)]
          },
          fd: {
            name: "useDeviceLanguage",
            j: []
          },
          gd: {
            name: "useEmulator",
            j: [Ll("url"), Ml("options", !0)]
          },
          jd: {
            name: "verifyPasswordResetCode",
            j: [Ll("code")]
          }
        }), Xl(zh.prototype, {
          lc: {
            name: "languageCode",
            kb: Bl(Ll(), Ul(), "languageCode")
          },
          ti: {
            name: "tenantId",
            kb: Bl(Ll(), Ul(), "tenantId")
          }
        }), (zh.Persistence = Ku).LOCAL = "local", zh.Persistence.SESSION = "session", zh.Persistence.NONE = "none", Wl(hh.prototype, {
          "delete": {
            name: "delete",
            j: []
          },
          oc: {
            name: "getIdTokenResult",
            j: [xl("opt_forceRefresh", !0)]
          },
          I: {
            name: "getIdToken",
            j: [xl("opt_forceRefresh", !0)]
          },
          Cc: {
            name: "linkAndRetrieveDataWithCredential",
            j: [Vl()]
          },
          qb: {
            name: "linkWithCredential",
            j: [Vl()]
          },
          Dc: {
            name: "linkWithPhoneNumber",
            j: [Ll("phoneNumber"), Gl()]
          },
          Ec: {
            name: "linkWithPopup",
            j: [ql()]
          },
          Fc: {
            name: "linkWithRedirect",
            j: [ql()]
          },
          Lc: {
            name: "reauthenticateAndRetrieveDataWithCredential",
            j: [Vl()]
          },
          tb: {
            name: "reauthenticateWithCredential",
            j: [Vl()]
          },
          Mc: {
            name: "reauthenticateWithPhoneNumber",
            j: [Ll("phoneNumber"), Gl()]
          },
          Nc: {
            name: "reauthenticateWithPopup",
            j: [ql()]
          },
          Oc: {
            name: "reauthenticateWithRedirect",
            j: [ql()]
          },
          reload: {
            name: "reload",
            j: []
          },
          ub: {
            name: "sendEmailVerification",
            j: [Bl(Ml("opt_actionCodeSettings", !0), Ul(null, !0), "opt_actionCodeSettings", !0)]
          },
          toJSON: {
            name: "toJSON",
            j: [Ll(null, !0)]
          },
          cd: {
            name: "unlink",
            j: [Ll("provider")]
          },
          Bb: {
            name: "updateEmail",
            j: [Ll("email")]
          },
          Cb: {
            name: "updatePassword",
            j: [Ll("password")]
          },
          ed: {
            name: "updatePhoneNumber",
            j: [Vl("phone")]
          },
          Db: {
            name: "updateProfile",
            j: [Ml("profile")]
          },
          Eb: {
            name: "verifyBeforeUpdateEmail",
            j: [Ll("email"), Bl(Ml("opt_actionCodeSettings", !0), Ul(null, !0), "opt_actionCodeSettings", !0)]
          }
        }), Wl(hl.prototype, {
          execute: {
            name: "execute"
          },
          render: {
            name: "render"
          },
          reset: {
            name: "reset"
          },
          getResponse: {
            name: "getResponse"
          }
        }), Wl(cl.prototype, {
          execute: {
            name: "execute"
          },
          render: {
            name: "render"
          },
          reset: {
            name: "reset"
          },
          getResponse: {
            name: "getResponse"
          }
        }), Wl(fe.prototype, {
          oa: {
            name: "finally"
          },
          o: {
            name: "catch"
          },
          then: {
            name: "then"
          }
        }), Xl(qc.prototype, {
          appVerificationDisabled: {
            name: "appVerificationDisabledForTesting",
            kb: xl("appVerificationDisabledForTesting")
          }
        }), Wl(Hc.prototype, {
          confirm: {
            name: "confirm",
            j: [Ll("verificationCode")]
          }
        }), Jl(Zr, "fromJSON", function (t) {
          t = "string" == typeof t ? JSON.parse(t) : t;

          for (var e, n = [oo, yo, Ao, no], i = 0; i < n.length; i++) {
            if (e = n[i](t)) return e;
          }

          return null;
        }, [Bl(Ll(), Ml(), "json")]), Jl(wo, "credential", function (t, e) {
          return new bo(t, e);
        }, [Ll("email"), Ll("password")]), Wl(bo.prototype, {
          w: {
            name: "toJSON",
            j: [Ll(null, !0)]
          }
        }), Wl(co.prototype, {
          Ca: {
            name: "addScope",
            j: [Ll("scope")]
          },
          Ka: {
            name: "setCustomParameters",
            j: [Ml("customOAuthParameters")]
          }
        }), Jl(co, "credential", ho, [Bl(Ll(), Ml(), "token")]), Jl(wo, "credentialWithLink", Io, [Ll("email"), Ll("emailLink")]), Wl(lo.prototype, {
          Ca: {
            name: "addScope",
            j: [Ll("scope")]
          },
          Ka: {
            name: "setCustomParameters",
            j: [Ml("customOAuthParameters")]
          }
        }), Jl(lo, "credential", fo, [Bl(Ll(), Ml(), "token")]), Wl(po.prototype, {
          Ca: {
            name: "addScope",
            j: [Ll("scope")]
          },
          Ka: {
            name: "setCustomParameters",
            j: [Ml("customOAuthParameters")]
          }
        }), Jl(po, "credential", vo, [Bl(Ll(), Bl(Ml(), Ul()), "idToken"), Bl(Ll(), Ul(), "accessToken", !0)]), Wl(mo.prototype, {
          Ka: {
            name: "setCustomParameters",
            j: [Ml("customOAuthParameters")]
          }
        }), Jl(mo, "credential", go, [Bl(Ll(), Ml(), "token"), Ll("secret", !0)]), Wl(uo.prototype, {
          Ca: {
            name: "addScope",
            j: [Ll("scope")]
          },
          credential: {
            name: "credential",
            j: [Bl(Ll(), Bl(Ml(), Ul()), "optionsOrIdToken"), Bl(Ll(), Ul(), "accessToken", !0)]
          },
          Ka: {
            name: "setCustomParameters",
            j: [Ml("customOAuthParameters")]
          }
        }), Wl(io.prototype, {
          w: {
            name: "toJSON",
            j: [Ll(null, !0)]
          }
        }), Wl(to.prototype, {
          w: {
            name: "toJSON",
            j: [Ll(null, !0)]
          }
        }), Jl(So, "credential", No, [Ll("verificationId"), Ll("verificationCode")]), Wl(So.prototype, {
          fb: {
            name: "verifyPhoneNumber",
            j: [Bl(Ll(), {
              name: "phoneInfoOptions",
              K: "valid phone info options",
              optional: !1,
              M: function M(t) {
                return !!t && (t.session && t.phoneNumber ? Hl(t.session, zr) && "string" == typeof t.phoneNumber : t.session && t.multiFactorHint ? Hl(t.session, $r) && Kl(t.multiFactorHint) : t.session && t.multiFactorUid ? Hl(t.session, $r) && "string" == typeof t.multiFactorUid : !!t.phoneNumber && "string" == typeof t.phoneNumber);
              }
            }, "phoneInfoOptions"), Gl()]
          }
        }), Wl(Eo.prototype, {
          w: {
            name: "toJSON",
            j: [Ll(null, !0)]
          }
        }), Wl(T.prototype, {
          toJSON: {
            name: "toJSON",
            j: [Ll(null, !0)]
          }
        }), Wl(Mo.prototype, {
          toJSON: {
            name: "toJSON",
            j: [Ll(null, !0)]
          }
        }), Wl(xo.prototype, {
          toJSON: {
            name: "toJSON",
            j: [Ll(null, !0)]
          }
        }), Wl(Jc.prototype, {
          toJSON: {
            name: "toJSON",
            j: [Ll(null, !0)]
          }
        }), Wl(Bc.prototype, {
          Rc: {
            name: "resolveSignIn",
            j: [Fl()]
          }
        }), Wl(th.prototype, {
          Rb: {
            name: "getSession",
            j: []
          },
          fc: {
            name: "enroll",
            j: [Fl(), Ll("displayName", !0)]
          },
          bd: {
            name: "unenroll",
            j: [Bl({
              name: "multiFactorInfo",
              K: "a valid multiFactorInfo",
              optional: !1,
              M: Kl
            }, Ll(), "multiFactorInfoIdentifier")]
          }
        }), Wl(Rl.prototype, {
          clear: {
            name: "clear",
            j: []
          },
          render: {
            name: "render",
            j: []
          },
          verify: {
            name: "verify",
            j: []
          }
        }), Jl(hr, "parseLink", br, [Ll("link")]), Jl(ml, "assertion", function (t) {
          return new Zc(t);
        }, [Vl("phone")]), function () {
          if (void 0 === zl["default"] || !zl["default"].INTERNAL || !zl["default"].INTERNAL.registerComponent) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
          var t = {
            ActionCodeInfo: {
              Operation: {
                EMAIL_SIGNIN: Zi,
                PASSWORD_RESET: "PASSWORD_RESET",
                RECOVER_EMAIL: "RECOVER_EMAIL",
                REVERT_SECOND_FACTOR_ADDITION: $i,
                VERIFY_AND_CHANGE_EMAIL: Qi,
                VERIFY_EMAIL: "VERIFY_EMAIL"
              }
            },
            Auth: zh,
            AuthCredential: Zr,
            Error: T
          };
          Jl(t, "EmailAuthProvider", wo, []), Jl(t, "FacebookAuthProvider", co, []), Jl(t, "GithubAuthProvider", lo, []), Jl(t, "GoogleAuthProvider", po, []), Jl(t, "TwitterAuthProvider", mo, []), Jl(t, "OAuthProvider", uo, [Ll("providerId")]), Jl(t, "SAMLAuthProvider", so, [Ll("providerId")]), Jl(t, "PhoneAuthProvider", So, [{
            name: "auth",
            K: "an instance of Firebase Auth",
            optional: !0,
            M: function M(t) {
              return !!(t && t instanceof zh);
            }
          }]), Jl(t, "RecaptchaVerifier", Rl, [Bl(Ll(), {
            name: "",
            K: "an HTML element",
            optional: !1,
            M: function M(t) {
              return !!(t && t instanceof Element);
            }
          }, "recaptchaContainer"), Ml("recaptchaParameters", !0), {
            name: "app",
            K: "an instance of Firebase App",
            optional: !0,
            M: function M(t) {
              return !!(t && t instanceof zl["default"].app.App);
            }
          }]), Jl(t, "ActionCodeURL", hr, []), Jl(t, "PhoneMultiFactorGenerator", ml, []), zl["default"].INTERNAL.registerComponent({
            name: "auth",
            instanceFactory: function instanceFactory(t) {
              return new zh(t = t.getProvider("app").getImmediate());
            },
            multipleInstances: !1,
            serviceProps: t,
            instantiationMode: "LAZY",
            type: "PUBLIC"
          }), zl["default"].INTERNAL.registerComponent({
            name: "auth-internal",
            instanceFactory: function instanceFactory(t) {
              return {
                getUid: b((t = t.getProvider("auth").getImmediate()).getUid, t),
                getToken: b(t.nc, t),
                addAuthTokenListener: b(t.cc, t),
                removeAuthTokenListener: b(t.Pc, t)
              };
            },
            multipleInstances: !1,
            instantiationMode: "LAZY",
            type: "PRIVATE"
          }), zl["default"].registerVersion("@firebase/auth", "0.16.6"), zl["default"].INTERNAL.extendNamespace({
            User: hh
          });
        }();
      }.apply("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }.apply(this, arguments);
  } catch (t) {
    throw console.error(t), new Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.");
  }
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).firebase);
}(void 0, function (mt) {
  "use strict";

  try {
    !function () {
      function e(e) {
        return e && "object" == _typeof(e) && "default" in e ? e : {
          "default": e
        };
      }

      var t = e(mt),
          _r = function r(e, t) {
        return (_r = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) {
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
        })(e, t);
      };

      var _s = function s() {
        return (_s = Object.assign || function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            for (var i in t = arguments[n]) {
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
          }

          return e;
        }).apply(this, arguments);
      };

      function p(e, a, s, u) {
        return new (s = s || Promise)(function (n, t) {
          function r(e) {
            try {
              o(u.next(e));
            } catch (e) {
              t(e);
            }
          }

          function i(e) {
            try {
              o(u["throw"](e));
            } catch (e) {
              t(e);
            }
          }

          function o(e) {
            var t;
            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function (e) {
              e(t);
            })).then(r, i);
          }

          o((u = u.apply(e, a || [])).next());
        });
      }

      function h(n, r) {
        var i,
            o,
            a,
            s = {
          label: 0,
          sent: function sent() {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: []
        },
            e = {
          next: t(0),
          "throw": t(1),
          "return": t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function () {
          return this;
        }), e;

        function t(t) {
          return function (e) {
            return function (t) {
              if (i) throw new TypeError("Generator is already executing.");

              for (; s;) {
                try {
                  if (i = 1, o && (a = 2 & t[0] ? o["return"] : t[0] ? o["throw"] || ((a = o["return"]) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;

                  switch (o = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                    case 0:
                    case 1:
                      a = t;
                      break;

                    case 4:
                      return s.label++, {
                        value: t[1],
                        done: !1
                      };

                    case 5:
                      s.label++, o = t[1], t = [0];
                      continue;

                    case 7:
                      t = s.ops.pop(), s.trys.pop();
                      continue;

                    default:
                      if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                        s = 0;
                        continue;
                      }

                      if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                        s.label = t[1];
                        break;
                      }

                      if (6 === t[0] && s.label < a[1]) {
                        s.label = a[1], a = t;
                        break;
                      }

                      if (a && s.label < a[2]) {
                        s.label = a[2], s.ops.push(t);
                        break;
                      }

                      a[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }

                  t = r.call(n, s);
                } catch (e) {
                  t = [6, e], o = 0;
                } finally {
                  i = a = 0;
                }
              }

              if (5 & t[0]) throw t[1];
              return {
                value: t[0] ? t[1] : void 0,
                done: !0
              };
            }([t, e]);
          };
        }
      }

      function a(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function next() {
            return {
              value: (e = e && r >= e.length ? void 0 : e) && e[r++],
              done: !e
            };
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function u(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) {
          e[i] = t[n];
        }

        return e;
      }

      function c() {
        var e = "object" == (typeof chrome === "undefined" ? "undefined" : _typeof(chrome)) ? chrome.runtime : "object" == (typeof browser === "undefined" ? "undefined" : _typeof(browser)) ? browser.runtime : void 0;
        return "object" == _typeof(e) && void 0 !== e.id;
      }

      function v() {
        return "indexedDB" in self && null != indexedDB;
      }

      function g() {
        return new Promise(function (e, t) {
          try {
            var n = !0,
                r = "validate-browser-context-for-indexeddb-analytics-module",
                i = self.indexedDB.open(r);
            i.onsuccess = function () {
              i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
            }, i.onupgradeneeded = function () {
              n = !1;
            }, i.onerror = function () {
              var e;
              t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "");
            };
          } catch (e) {
            t(e);
          }
        });
      }

      function l() {
        return !(!navigator || !navigator.cookieEnabled);
      }

      var i,
          o = "FirebaseError",
          f = (function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e;
        }

        _r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
      }(d, i = Error), d);

      function d(e, t, n) {
        t = i.call(this, t) || this;
        return t.code = e, t.customData = n, t.name = o, Object.setPrototypeOf(t, d.prototype), Error.captureStackTrace && Error.captureStackTrace(t, m.prototype.create), t;
      }

      var m = (n.prototype.create = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }

        var r,
            i = t[0] || {},
            o = this.service + "/" + e,
            e = this.errors[e],
            e = e ? (r = i, e.replace(y, function (e, t) {
          var n = r[t];
          return null != n ? String(n) : "<" + t + "?>";
        })) : "Error",
            e = this.serviceName + ": " + e + " (" + o + ").";
        return new f(o, e, i);
      }, n);

      function n(e, t, n) {
        this.service = e, this.serviceName = t, this.errors = n;
      }

      var y = /\{\$([^}]+)}/g,
          b = 1e3,
          w = 2,
          I = 144e5,
          _ = .5;

      function E(e, t, n) {
        void 0 === n && (n = w);
        n = (t = void 0 === t ? b : t) * Math.pow(n, e), e = Math.round(_ * n * (Math.random() - .5) * 2);
        return Math.min(I, n + e);
      }

      var T = (S.prototype.setInstantiationMode = function (e) {
        return this.instantiationMode = e, this;
      }, S.prototype.setMultipleInstances = function (e) {
        return this.multipleInstances = e, this;
      }, S.prototype.setServiceProps = function (e) {
        return this.serviceProps = e, this;
      }, S.prototype.setInstanceCreatedCallback = function (e) {
        return this.onInstanceCreated = e, this;
      }, S);

      function S(e, t, n) {
        this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
      }

      function C(n) {
        return new Promise(function (e, t) {
          n.onsuccess = function () {
            e(n.result);
          }, n.onerror = function () {
            t(n.error);
          };
        });
      }

      function O(n, r, i) {
        var o,
            e = new Promise(function (e, t) {
          C(o = n[r].apply(n, i)).then(e, t);
        });
        return e.request = o, e;
      }

      function N(e, n, t) {
        t.forEach(function (t) {
          Object.defineProperty(e.prototype, t, {
            get: function get() {
              return this[n][t];
            },
            set: function set(e) {
              this[n][t] = e;
            }
          });
        });
      }

      function D(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype && (t.prototype[e] = function () {
            return O(this[n], e, arguments);
          });
        });
      }

      function P(t, n, r, e) {
        e.forEach(function (e) {
          e in r.prototype && (t.prototype[e] = function () {
            return this[n][e].apply(this[n], arguments);
          });
        });
      }

      function A(e, r, t, n) {
        n.forEach(function (n) {
          n in t.prototype && (e.prototype[n] = function () {
            return e = this[r], (t = O(e, n, arguments)).then(function (e) {
              if (e) return new k(e, t.request);
            });
            var e, t;
          });
        });
      }

      function x(e) {
        this._index = e;
      }

      function k(e, t) {
        this._cursor = e, this._request = t;
      }

      function j(e) {
        this._store = e;
      }

      function L(n) {
        this._tx = n, this.complete = new Promise(function (e, t) {
          n.oncomplete = function () {
            e();
          }, n.onerror = function () {
            t(n.error);
          }, n.onabort = function () {
            t(n.error);
          };
        });
      }

      function R(e, t, n) {
        this._db = e, this.oldVersion = t, this.transaction = new L(n);
      }

      function F(e) {
        this._db = e;
      }

      N(x, "_index", ["name", "keyPath", "multiEntry", "unique"]), D(x, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]), A(x, "_index", IDBIndex, ["openCursor", "openKeyCursor"]), N(k, "_cursor", ["direction", "key", "primaryKey", "value"]), D(k, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach(function (n) {
        n in IDBCursor.prototype && (k.prototype[n] = function () {
          var t = this,
              e = arguments;
          return Promise.resolve().then(function () {
            return t._cursor[n].apply(t._cursor, e), C(t._request).then(function (e) {
              if (e) return new k(e, t._request);
            });
          });
        });
      }), j.prototype.createIndex = function () {
        return new x(this._store.createIndex.apply(this._store, arguments));
      }, j.prototype.index = function () {
        return new x(this._store.index.apply(this._store, arguments));
      }, N(j, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]), D(j, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]), A(j, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]), P(j, "_store", IDBObjectStore, ["deleteIndex"]), L.prototype.objectStore = function () {
        return new j(this._tx.objectStore.apply(this._tx, arguments));
      }, N(L, "_tx", ["objectStoreNames", "mode"]), P(L, "_tx", IDBTransaction, ["abort"]), R.prototype.createObjectStore = function () {
        return new j(this._db.createObjectStore.apply(this._db, arguments));
      }, N(R, "_db", ["name", "version", "objectStoreNames"]), P(R, "_db", IDBDatabase, ["deleteObjectStore", "close"]), F.prototype.transaction = function () {
        return new L(this._db.transaction.apply(this._db, arguments));
      }, N(F, "_db", ["name", "version", "objectStoreNames"]), P(F, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach(function (i) {
        [j, x].forEach(function (e) {
          i in e.prototype && (e.prototype[i.replace("open", "iterate")] = function () {
            var e = (n = arguments, Array.prototype.slice.call(n)),
                t = e[e.length - 1],
                n = this._store || this._index,
                r = n[i].apply(n, e.slice(0, -1));

            r.onsuccess = function () {
              t(r.result);
            };
          });
        });
      }), [x, j].forEach(function (e) {
        e.prototype.getAll || (e.prototype.getAll = function (e, n) {
          var r = this,
              i = [];
          return new Promise(function (t) {
            r.iterateCursor(e, function (e) {
              e ? (i.push(e.value), void 0 === n || i.length != n ? e["continue"]() : t(i)) : t(i);
            });
          });
        });
      });
      var M = "0.4.27",
          B = 1e4,
          H = "w:" + M,
          q = "FIS_v2",
          V = "https://firebaseinstallations.googleapis.com/v1",
          G = 36e5,
          K = ((Re = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', Re["not-registered"] = "Firebase Installation is not registered.", Re["installation-not-found"] = "Firebase Installation not found.", Re["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', Re["app-offline"] = "Could not process request. Application offline.", Re["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", Re),
          U = new m("installations", "Installations", K);

      function W(e) {
        return e instanceof f && e.code.includes("request-failed");
      }

      function $(e) {
        e = e.projectId;
        return V + "/projects/" + e + "/installations";
      }

      function z(e) {
        return {
          token: e.token,
          requestStatus: 2,
          expiresIn: (e = e.expiresIn, Number(e.replace("s", "000"))),
          creationTime: Date.now()
        };
      }

      function J(n, r) {
        return p(this, void 0, void 0, function () {
          var t;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, r.json()];

              case 1:
                return t = e.sent(), t = t.error, [2, U.create("request-failed", {
                  requestName: n,
                  serverCode: t.code,
                  serverMessage: t.message,
                  serverStatus: t.status
                })];
            }
          });
        });
      }

      function Y(e) {
        e = e.apiKey;
        return new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-goog-api-key": e
        });
      }

      function X(e, t) {
        t = t.refreshToken, e = Y(e);
        return e.append("Authorization", q + " " + t), e;
      }

      function Z(n) {
        return p(this, void 0, void 0, function () {
          var t;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, n()];

              case 1:
                return 500 <= (t = e.sent()).status && t.status < 600 ? [2, n()] : [2, t];
            }
          });
        });
      }

      function Q(t) {
        return new Promise(function (e) {
          setTimeout(e, t);
        });
      }

      function ee(e) {
        return btoa(String.fromCharCode.apply(String, u([], function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
              i,
              o = n.call(e),
              a = [];

          try {
            for (; (void 0 === t || 0 < t--) && !(r = o.next()).done;) {
              a.push(r.value);
            }
          } catch (e) {
            i = {
              error: e
            };
          } finally {
            try {
              r && !r.done && (n = o["return"]) && n.call(o);
            } finally {
              if (i) throw i.error;
            }
          }

          return a;
        }(e)))).replace(/\+/g, "-").replace(/\//g, "_");
      }

      var te = /^[cdef][\w-]{21}$/,
          ne = "";

      function re() {
        try {
          var e = new Uint8Array(17);
          (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
          var t = ee(e).substr(0, 22);
          return te.test(t) ? t : ne;
        } catch (e) {
          return ne;
        }
      }

      function ie(e) {
        return e.appName + "!" + e.appId;
      }

      var oe = new Map();

      function ae(e, t) {
        e = ie(e);
        se(e, t), function (e, t) {
          var n = ce();
          n && n.postMessage({
            key: e,
            fid: t
          });
          le();
        }(e, t);
      }

      function se(e, t) {
        var n,
            r,
            e = oe.get(e);
        if (e) try {
          for (var i = a(e), o = i.next(); !o.done; o = i.next()) {
            (0, o.value)(t);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            o && !o.done && (r = i["return"]) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
      }

      var ue = null;

      function ce() {
        return !ue && "BroadcastChannel" in self && ((ue = new BroadcastChannel("[Firebase] FID Change")).onmessage = function (e) {
          se(e.data.key, e.data.fid);
        }), ue;
      }

      function le() {
        0 === oe.size && ue && (ue.close(), ue = null);
      }

      var fe,
          de,
          pe = "firebase-installations-database",
          he = 1,
          ve = "firebase-installations-store",
          ge = null;

      function me() {
        var e, t, n;
        return ge || (e = he, t = function t(e) {
          0 === e.oldVersion && e.createObjectStore(ve);
        }, (n = (e = O(indexedDB, "open", [pe, he])).request) && (n.onupgradeneeded = function (e) {
          t && t(new R(n.result, e.oldVersion, n.transaction));
        }), ge = e.then(function (e) {
          return new F(e);
        })), ge;
      }

      function ye(o, a) {
        return p(this, void 0, void 0, function () {
          var t, n, r, i;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return t = ie(o), [4, me()];

              case 1:
                return r = e.sent(), n = r.transaction(ve, "readwrite"), [4, (r = n.objectStore(ve)).get(t)];

              case 2:
                return i = e.sent(), [4, r.put(a, t)];

              case 3:
                return e.sent(), [4, n.complete];

              case 4:
                return e.sent(), i && i.fid === a.fid || ae(o, a.fid), [2, a];
            }
          });
        });
      }

      function be(r) {
        return p(this, void 0, void 0, function () {
          var t, n;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return t = ie(r), [4, me()];

              case 1:
                return n = e.sent(), [4, (n = n.transaction(ve, "readwrite")).objectStore(ve)["delete"](t)];

              case 2:
                return e.sent(), [4, n.complete];

              case 3:
                return e.sent(), [2];
            }
          });
        });
      }

      function we(a, s) {
        return p(this, void 0, void 0, function () {
          var t, n, r, i, o;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return t = ie(a), [4, me()];

              case 1:
                return r = e.sent(), n = r.transaction(ve, "readwrite"), [4, (r = n.objectStore(ve)).get(t)];

              case 2:
                return i = e.sent(), void 0 !== (o = s(i)) ? [3, 4] : [4, r["delete"](t)];

              case 3:
                return e.sent(), [3, 6];

              case 4:
                return [4, r.put(o, t)];

              case 5:
                e.sent(), e.label = 6;

              case 6:
                return [4, n.complete];

              case 7:
                return e.sent(), !o || i && i.fid === o.fid || ae(a, o.fid), [2, o];
            }
          });
        });
      }

      function Ie(i) {
        return p(this, void 0, void 0, function () {
          var t, n, r;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, we(i, function (e) {
                  e = Ee(e || {
                    fid: re(),
                    registrationStatus: 0
                  }), e = function (e, t) {
                    {
                      if (0 !== t.registrationStatus) return 1 === t.registrationStatus ? {
                        installationEntry: t,
                        registrationPromise: function (i) {
                          return p(this, void 0, void 0, function () {
                            var t, n, r;
                            return h(this, function (e) {
                              switch (e.label) {
                                case 0:
                                  return [4, _e(i)];

                                case 1:
                                  t = e.sent(), e.label = 2;

                                case 2:
                                  return 1 !== t.registrationStatus ? [3, 5] : [4, Q(100)];

                                case 3:
                                  return e.sent(), [4, _e(i)];

                                case 4:
                                  return t = e.sent(), [3, 2];

                                case 5:
                                  return 0 !== t.registrationStatus ? [3, 7] : [4, Ie(i)];

                                case 6:
                                  return r = e.sent(), n = r.installationEntry, (r = r.registrationPromise) ? [2, r] : [2, n];

                                case 7:
                                  return [2, t];
                              }
                            });
                          });
                        }(e)
                      } : {
                        installationEntry: t
                      };

                      if (!navigator.onLine) {
                        var n = Promise.reject(U.create("app-offline"));
                        return {
                          installationEntry: t,
                          registrationPromise: n
                        };
                      }

                      t = {
                        fid: t.fid,
                        registrationStatus: 1,
                        registrationTime: Date.now()
                      }, e = function (r, i) {
                        return p(this, void 0, void 0, function () {
                          var t, n;
                          return h(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return e.trys.push([0, 2,, 7]), [4, function (a, e) {
                                  var s = e.fid;
                                  return p(this, void 0, void 0, function () {
                                    var t, n, r, i, o;
                                    return h(this, function (e) {
                                      switch (e.label) {
                                        case 0:
                                          return t = $(a), n = Y(a), o = {
                                            fid: s,
                                            authVersion: q,
                                            appId: a.appId,
                                            sdkVersion: H
                                          }, r = {
                                            method: "POST",
                                            headers: n,
                                            body: JSON.stringify(o)
                                          }, [4, Z(function () {
                                            return fetch(t, r);
                                          })];

                                        case 1:
                                          return (i = e.sent()).ok ? [4, i.json()] : [3, 3];

                                        case 2:
                                          return o = e.sent(), [2, {
                                            fid: o.fid || s,
                                            registrationStatus: 2,
                                            refreshToken: o.refreshToken,
                                            authToken: z(o.authToken)
                                          }];

                                        case 3:
                                          return [4, J("Create Installation", i)];

                                        case 4:
                                          throw e.sent();
                                      }
                                    });
                                  });
                                }(r, i)];

                              case 1:
                                return t = e.sent(), [2, ye(r, t)];

                              case 2:
                                return W(n = e.sent()) && 409 === n.customData.serverCode ? [4, be(r)] : [3, 4];

                              case 3:
                                return e.sent(), [3, 6];

                              case 4:
                                return [4, ye(r, {
                                  fid: i.fid,
                                  registrationStatus: 0
                                })];

                              case 5:
                                e.sent(), e.label = 6;

                              case 6:
                                throw n;

                              case 7:
                                return [2];
                            }
                          });
                        });
                      }(e, t);
                      return {
                        installationEntry: t,
                        registrationPromise: e
                      };
                    }
                  }(i, e);
                  return t = e.registrationPromise, e.installationEntry;
                })];

              case 1:
                return (n = e.sent()).fid !== ne ? [3, 3] : (r = {}, [4, t]);

              case 2:
                return [2, (r.installationEntry = e.sent(), r)];

              case 3:
                return [2, {
                  installationEntry: n,
                  registrationPromise: t
                }];
            }
          });
        });
      }

      function _e(e) {
        return we(e, function (e) {
          if (!e) throw U.create("installation-not-found");
          return Ee(e);
        });
      }

      function Ee(e) {
        return 1 === (t = e).registrationStatus && t.registrationTime + B < Date.now() ? {
          fid: e.fid,
          registrationStatus: 0
        } : e;
        var t;
      }

      function Te(e, a) {
        var s = e.appConfig,
            u = e.platformLoggerProvider;
        return p(this, void 0, void 0, function () {
          var t, n, r, i, o;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return t = function (e, t) {
                  t = t.fid;
                  return $(e) + "/" + t + "/authTokens:generate";
                }(s, a), n = X(s, a), (o = u.getImmediate({
                  optional: !0
                })) && n.append("x-firebase-client", o.getPlatformInfoString()), o = {
                  installation: {
                    sdkVersion: H
                  }
                }, r = {
                  method: "POST",
                  headers: n,
                  body: JSON.stringify(o)
                }, [4, Z(function () {
                  return fetch(t, r);
                })];

              case 1:
                return (i = e.sent()).ok ? [4, i.json()] : [3, 3];

              case 2:
                return o = e.sent(), [2, z(o)];

              case 3:
                return [4, J("Generate Auth Token", i)];

              case 4:
                throw e.sent();
            }
          });
        });
      }

      function Se(i, o) {
        return void 0 === o && (o = !1), p(this, void 0, void 0, function () {
          var r, t, n;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, we(i.appConfig, function (e) {
                  if (!Oe(e)) throw U.create("not-registered");
                  var t,
                      n = e.authToken;

                  if (o || 2 !== (t = n).requestStatus || function (e) {
                    var t = Date.now();
                    return t < e.creationTime || e.creationTime + e.expiresIn < t + G;
                  }(t)) {
                    if (1 === n.requestStatus) return r = function (n, r) {
                      return p(this, void 0, void 0, function () {
                        var t;
                        return h(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return [4, Ce(n.appConfig)];

                            case 1:
                              t = e.sent(), e.label = 2;

                            case 2:
                              return 1 !== t.authToken.requestStatus ? [3, 5] : [4, Q(100)];

                            case 3:
                              return e.sent(), [4, Ce(n.appConfig)];

                            case 4:
                              return t = e.sent(), [3, 2];

                            case 5:
                              return 0 === (t = t.authToken).requestStatus ? [2, Se(n, r)] : [2, t];
                          }
                        });
                      });
                    }(i, o), e;
                    if (!navigator.onLine) throw U.create("app-offline");
                    n = (t = e, n = {
                      requestStatus: 1,
                      requestTime: Date.now()
                    }, _s(_s({}, t), {
                      authToken: n
                    }));
                    return r = function (i, o) {
                      return p(this, void 0, void 0, function () {
                        var t, n, r;
                        return h(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return e.trys.push([0, 3,, 8]), [4, Te(i, o)];

                            case 1:
                              return t = e.sent(), r = _s(_s({}, o), {
                                authToken: t
                              }), [4, ye(i.appConfig, r)];

                            case 2:
                              return e.sent(), [2, t];

                            case 3:
                              return !W(n = e.sent()) || 401 !== n.customData.serverCode && 404 !== n.customData.serverCode ? [3, 5] : [4, be(i.appConfig)];

                            case 4:
                              return e.sent(), [3, 7];

                            case 5:
                              return r = _s(_s({}, o), {
                                authToken: {
                                  requestStatus: 0
                                }
                              }), [4, ye(i.appConfig, r)];

                            case 6:
                              e.sent(), e.label = 7;

                            case 7:
                              throw n;

                            case 8:
                              return [2];
                          }
                        });
                      });
                    }(i, n), n;
                  }

                  return e;
                })];

              case 1:
                return t = e.sent(), r ? [4, r] : [3, 3];

              case 2:
                return n = e.sent(), [3, 4];

              case 3:
                n = t.authToken, e.label = 4;

              case 4:
                return [2, n];
            }
          });
        });
      }

      function Ce(e) {
        return we(e, function (e) {
          if (!Oe(e)) throw U.create("not-registered");
          var t = e.authToken;
          return 1 === (t = t).requestStatus && t.requestTime + B < Date.now() ? _s(_s({}, e), {
            authToken: {
              requestStatus: 0
            }
          }) : e;
        });
      }

      function Oe(e) {
        return void 0 !== e && 2 === e.registrationStatus;
      }

      function Ne(t, n) {
        return void 0 === n && (n = !1), p(this, void 0, void 0, function () {
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, function (n) {
                  return p(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, Ie(n)];

                        case 1:
                          return (t = e.sent().registrationPromise) ? [4, t] : [3, 3];

                        case 2:
                          e.sent(), e.label = 3;

                        case 3:
                          return [2];
                      }
                    });
                  });
                }(t.appConfig)];

              case 1:
                return e.sent(), [4, Se(t, n)];

              case 2:
                return [2, e.sent().token];
            }
          });
        });
      }

      function De(i, o) {
        return p(this, void 0, void 0, function () {
          var t, n, r;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return t = function (e, t) {
                  t = t.fid;
                  return $(e) + "/" + t;
                }(i, o), r = X(i, o), n = {
                  method: "DELETE",
                  headers: r
                }, [4, Z(function () {
                  return fetch(t, n);
                })];

              case 1:
                return (r = e.sent()).ok ? [3, 3] : [4, J("Delete Installation", r)];

              case 2:
                throw e.sent();

              case 3:
                return [2];
            }
          });
        });
      }

      function Pe(e, r) {
        var i = e.appConfig;
        return function (e, t) {
          ce();
          var n = ie(e);
          (e = oe.get(n)) || (e = new Set(), oe.set(n, e)), e.add(t);
        }(i, r), function () {
          var e, t, n;
          t = r, n = ie(e = i), (e = oe.get(n)) && (e["delete"](t), 0 === e.size && oe["delete"](n), le());
        };
      }

      function Ae(e) {
        return U.create("missing-app-config-values", {
          valueName: e
        });
      }

      (fe = t["default"]).INTERNAL.registerComponent(new T("installations", function (e) {
        var t = e.getProvider("app").getImmediate(),
            n = {
          appConfig: function (e) {
            var t, n;
            if (!e || !e.options) throw Ae("App Configuration");
            if (!e.name) throw Ae("App Name");

            try {
              for (var r = a(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) {
                var o = i.value;
                if (!e.options[o]) throw Ae(o);
              }
            } catch (e) {
              t = {
                error: e
              };
            } finally {
              try {
                i && !i.done && (n = r["return"]) && n.call(r);
              } finally {
                if (t) throw t.error;
              }
            }

            return {
              appName: e.name,
              projectId: e.options.projectId,
              apiKey: e.options.apiKey,
              appId: e.options.appId
            };
          }(t),
          platformLoggerProvider: e.getProvider("platform-logger")
        };
        return {
          app: t,
          getId: function getId() {
            return function (r) {
              return p(this, void 0, void 0, function () {
                var t, n;
                return h(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, Ie(r.appConfig)];

                    case 1:
                      return t = e.sent(), n = t.installationEntry, (t.registrationPromise || Se(r))["catch"](console.error), [2, n.fid];
                  }
                });
              });
            }(n);
          },
          getToken: function getToken(e) {
            return Ne(n, e);
          },
          "delete": function _delete() {
            return function (r) {
              return p(this, void 0, void 0, function () {
                var t, n;
                return h(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, we(t = r.appConfig, function (e) {
                        if (!e || 0 !== e.registrationStatus) return e;
                      })];

                    case 1:
                      if (!(n = e.sent())) return [3, 6];
                      if (1 !== n.registrationStatus) return [3, 2];
                      throw U.create("delete-pending-registration");

                    case 2:
                      if (2 !== n.registrationStatus) return [3, 6];
                      if (navigator.onLine) return [3, 3];
                      throw U.create("app-offline");

                    case 3:
                      return [4, De(t, n)];

                    case 4:
                      return e.sent(), [4, be(t)];

                    case 5:
                      e.sent(), e.label = 6;

                    case 6:
                      return [2];
                  }
                });
              });
            }(n);
          },
          onIdChange: function onIdChange(e) {
            return Pe(n, e);
          }
        };
      }, "PUBLIC")), fe.registerVersion("@firebase/installations", M), (Re = de = de || {})[Re.DEBUG = 0] = "DEBUG", Re[Re.VERBOSE = 1] = "VERBOSE", Re[Re.INFO = 2] = "INFO", Re[Re.WARN = 3] = "WARN", Re[Re.ERROR = 4] = "ERROR", Re[Re.SILENT = 5] = "SILENT";

      function xe(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) {
          n[r - 2] = arguments[r];
        }

        if (!(t < e.logLevel)) {
          var i = new Date().toISOString(),
              o = Le[t];
          if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
          console[o].apply(console, u(["[" + i + "]  " + e.name + ":"], n));
        }
      }

      var ke = {
        debug: de.DEBUG,
        verbose: de.VERBOSE,
        info: de.INFO,
        warn: de.WARN,
        error: de.ERROR,
        silent: de.SILENT
      },
          je = de.INFO,
          Le = ((K = {})[de.DEBUG] = "log", K[de.VERBOSE] = "log", K[de.INFO] = "info", K[de.WARN] = "warn", K[de.ERROR] = "error", K),
          Re = (Object.defineProperty(Fe.prototype, "logLevel", {
        get: function get() {
          return this._logLevel;
        },
        set: function set(e) {
          if (!(e in de)) throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
          this._logLevel = e;
        },
        enumerable: !1,
        configurable: !0
      }), Fe.prototype.setLogLevel = function (e) {
        this._logLevel = "string" == typeof e ? ke[e] : e;
      }, Object.defineProperty(Fe.prototype, "logHandler", {
        get: function get() {
          return this._logHandler;
        },
        set: function set(e) {
          if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
          this._logHandler = e;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(Fe.prototype, "userLogHandler", {
        get: function get() {
          return this._userLogHandler;
        },
        set: function set(e) {
          this._userLogHandler = e;
        },
        enumerable: !1,
        configurable: !0
      }), Fe.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        this._userLogHandler && this._userLogHandler.apply(this, u([this, de.DEBUG], e)), this._logHandler.apply(this, u([this, de.DEBUG], e));
      }, Fe.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        this._userLogHandler && this._userLogHandler.apply(this, u([this, de.VERBOSE], e)), this._logHandler.apply(this, u([this, de.VERBOSE], e));
      }, Fe.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        this._userLogHandler && this._userLogHandler.apply(this, u([this, de.INFO], e)), this._logHandler.apply(this, u([this, de.INFO], e));
      }, Fe.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        this._userLogHandler && this._userLogHandler.apply(this, u([this, de.WARN], e)), this._logHandler.apply(this, u([this, de.WARN], e));
      }, Fe.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        this._userLogHandler && this._userLogHandler.apply(this, u([this, de.ERROR], e)), this._logHandler.apply(this, u([this, de.ERROR], e));
      }, Fe);

      function Fe(e) {
        this.name = e, this._logLevel = je, this._logHandler = xe, this._userLogHandler = null;
      }

      var Me,
          Be,
          He = "firebase_id",
          qe = "origin",
          Ve = 6e4,
          Ge = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",
          Ke = "https://www.googletagmanager.com/gtag/js";
      (K = Me = Me || {}).EVENT = "event", K.SET = "set", K.CONFIG = "config", (K = Be = Be || {}).ADD_SHIPPING_INFO = "add_shipping_info", K.ADD_PAYMENT_INFO = "add_payment_info", K.ADD_TO_CART = "add_to_cart", K.ADD_TO_WISHLIST = "add_to_wishlist", K.BEGIN_CHECKOUT = "begin_checkout", K.CHECKOUT_PROGRESS = "checkout_progress", K.EXCEPTION = "exception", K.GENERATE_LEAD = "generate_lead", K.LOGIN = "login", K.PAGE_VIEW = "page_view", K.PURCHASE = "purchase", K.REFUND = "refund", K.REMOVE_FROM_CART = "remove_from_cart", K.SCREEN_VIEW = "screen_view", K.SEARCH = "search", K.SELECT_CONTENT = "select_content", K.SELECT_ITEM = "select_item", K.SELECT_PROMOTION = "select_promotion", K.SET_CHECKOUT_OPTION = "set_checkout_option", K.SHARE = "share", K.SIGN_UP = "sign_up", K.TIMING_COMPLETE = "timing_complete", K.VIEW_CART = "view_cart", K.VIEW_ITEM = "view_item", K.VIEW_ITEM_LIST = "view_item_list", K.VIEW_PROMOTION = "view_promotion", K.VIEW_SEARCH_RESULTS = "view_search_results";
      var Ue = new Re("@firebase/analytics");

      function We(o, a, s, u) {
        return function (n, r, i) {
          return p(this, void 0, void 0, function () {
            var t;
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return e.trys.push([0, 6,, 7]), n !== Me.EVENT ? [3, 2] : [4, function (u, c, l, f, d) {
                    return p(this, void 0, void 0, function () {
                      var n, r, t, i, o, a, s;
                      return h(this, function (e) {
                        switch (e.label) {
                          case 0:
                            return (e.trys.push([0, 4,, 5]), n = [], d && d.send_to) ? (s = d.send_to, Array.isArray(s) || (s = [s]), [4, Promise.all(l)]) : [3, 2];

                          case 1:
                            for (r = e.sent(), t = function t(_t) {
                              var e = r.find(function (e) {
                                return e.measurementId === _t;
                              }),
                                  e = e && c[e.appId];
                              if (!e) return n = [], "break";
                              n.push(e);
                            }, i = 0, o = s; i < o.length && (a = o[i], "break" !== t(a)); i++) {
                              ;
                            }

                            e.label = 2;

                          case 2:
                            return 0 === n.length && (n = Object.values(c)), [4, Promise.all(n)];

                          case 3:
                            return e.sent(), u(Me.EVENT, f, d || {}), [3, 5];

                          case 4:
                            return s = e.sent(), Ue.error(s), [3, 5];

                          case 5:
                            return [2];
                        }
                      });
                    });
                  }(o, a, s, r, i)];

                case 1:
                  return e.sent(), [3, 5];

                case 2:
                  return n !== Me.CONFIG ? [3, 4] : [4, function (r, i, o, a, s, u) {
                    return p(this, void 0, void 0, function () {
                      var t, n;
                      return h(this, function (e) {
                        switch (e.label) {
                          case 0:
                            t = a[s], e.label = 1;

                          case 1:
                            return e.trys.push([1, 7,, 8]), t ? [4, i[t]] : [3, 3];

                          case 2:
                            return e.sent(), [3, 6];

                          case 3:
                            return [4, Promise.all(o)];

                          case 4:
                            return n = e.sent(), (n = n.find(function (e) {
                              return e.measurementId === s;
                            })) ? [4, i[n.appId]] : [3, 6];

                          case 5:
                            e.sent(), e.label = 6;

                          case 6:
                            return [3, 8];

                          case 7:
                            return n = e.sent(), Ue.error(n), [3, 8];

                          case 8:
                            return r(Me.CONFIG, s, u), [2];
                        }
                      });
                    });
                  }(o, a, s, u, r, i)];

                case 3:
                  return e.sent(), [3, 5];

                case 4:
                  o(Me.SET, r), e.label = 5;

                case 5:
                  return [3, 7];

                case 6:
                  return t = e.sent(), Ue.error(t), [3, 7];

                case 7:
                  return [2];
              }
            });
          });
        };
      }

      var Re = ((Re = {})["already-exists"] = "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.", Re["already-initialized"] = "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.", Re["interop-component-reg-failed"] = "Firebase Analytics Interop Component failed to instantiate: {$reason}", Re["invalid-analytics-context"] = "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}", Re["indexeddb-unavailable"] = "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}", Re["fetch-throttle"] = "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.", Re["config-fetch-failed"] = "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}", Re["no-api-key"] = 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.', Re["no-app-id"] = 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.', Re),
          $e = new m("analytics", "Analytics", Re),
          ze = 30;

      function Je(e, t) {
        void 0 === t && (t = 1e3), this.throttleMetadata = e = void 0 === e ? {} : e, this.intervalMillis = t;
      }

      var Ye = new (Je.prototype.getThrottleMetadata = function (e) {
        return this.throttleMetadata[e];
      }, Je.prototype.setThrottleMetadata = function (e, t) {
        this.throttleMetadata[e] = t;
      }, Je.prototype.deleteThrottleMetadata = function (e) {
        delete this.throttleMetadata[e];
      }, Je)();

      function Xe(o) {
        var a;
        return p(this, void 0, void 0, function () {
          var t, n, r, i;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return t = o.appId, i = o.apiKey, i = {
                  method: "GET",
                  headers: new Headers({
                    Accept: "application/json",
                    "x-goog-api-key": i
                  })
                }, t = Ge.replace("{app-id}", t), [4, fetch(t, i)];

              case 1:
                if (200 === (n = e.sent()).status || 304 === n.status) return [3, 6];
                r = "", e.label = 2;

              case 2:
                return e.trys.push([2, 4,, 5]), [4, n.json()];

              case 3:
                return i = e.sent(), null !== (a = i.error) && void 0 !== a && a.message && (r = i.error.message), [3, 5];

              case 4:
                return e.sent(), [3, 5];

              case 5:
                throw $e.create("config-fetch-failed", {
                  httpStatus: n.status,
                  responseMessage: r
                });

              case 6:
                return [2, n.json()];
            }
          });
        });
      }

      function Ze(s, u, c) {
        return void 0 === u && (u = Ye), p(this, void 0, void 0, function () {
          var t,
              n,
              r,
              i,
              o,
              a = this;
          return h(this, function (e) {
            if (i = s.options, t = i.appId, n = i.apiKey, r = i.measurementId, !t) throw $e.create("no-app-id");
            if (n) return i = u.getThrottleMetadata(t) || {
              backoffCount: 0,
              throttleEndTimeMillis: Date.now()
            }, o = new tt(), setTimeout(function () {
              return p(a, void 0, void 0, function () {
                return h(this, function (e) {
                  return o.abort(), [2];
                });
              });
            }, void 0 !== c ? c : Ve), [2, function a(s, e, u, c) {
              var l = e.throttleEndTimeMillis,
                  f = e.backoffCount;
              void 0 === c && (c = Ye);
              return p(this, void 0, void 0, function () {
                var t, n, r, i, o;
                return h(this, function (e) {
                  switch (e.label) {
                    case 0:
                      t = s.appId, n = s.measurementId, e.label = 1;

                    case 1:
                      return e.trys.push([1, 3,, 4]), [4, Qe(u, l)];

                    case 2:
                      return e.sent(), [3, 4];

                    case 3:
                      if (i = e.sent(), n) return Ue.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID " + n + ' provided in the "measurementId" field in the local Firebase config. [' + i.message + "]"), [2, {
                        appId: t,
                        measurementId: n
                      }];
                      throw i;

                    case 4:
                      return e.trys.push([4, 6,, 7]), [4, Xe(s)];

                    case 5:
                      return o = e.sent(), c.deleteThrottleMetadata(t), [2, o];

                    case 6:
                      if (et(r = e.sent())) return i = 503 === Number(r.customData.httpStatus) ? E(f, c.intervalMillis, ze) : E(f, c.intervalMillis), o = {
                        throttleEndTimeMillis: Date.now() + i,
                        backoffCount: f + 1
                      }, c.setThrottleMetadata(t, o), Ue.debug("Calling attemptFetch again in " + i + " millis"), [2, a(s, o, u, c)];
                      if (c.deleteThrottleMetadata(t), n) return Ue.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID " + n + ' provided in the "measurementId" field in the local Firebase config. [' + r.message + "]"), [2, {
                        appId: t,
                        measurementId: n
                      }];
                      throw r;

                    case 7:
                      return [2];
                  }
                });
              });
            }({
              appId: t,
              apiKey: n,
              measurementId: r
            }, i, o, u)];
            if (r) return [2, {
              measurementId: r,
              appId: t
            }];
            throw $e.create("no-api-key");
          });
        });
      }

      function Qe(i, o) {
        return new Promise(function (e, t) {
          var n = Math.max(o - Date.now(), 0),
              r = setTimeout(e, n);
          i.addEventListener(function () {
            clearTimeout(r), t($e.create("fetch-throttle", {
              throttleEndTimeMillis: o
            }));
          });
        });
      }

      function et(e) {
        if (e instanceof f && e.customData) {
          e = Number(e.customData.httpStatus);
          return 429 === e || 500 === e || 503 === e || 504 === e;
        }
      }

      var tt = (nt.prototype.addEventListener = function (e) {
        this.listeners.push(e);
      }, nt.prototype.abort = function () {
        this.listeners.forEach(function (e) {
          return e();
        });
      }, nt);

      function nt() {
        this.listeners = [];
      }

      function rt(s, u, c, l, f, d) {
        return p(this, void 0, void 0, function () {
          var i, o, a;
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                return (i = Ze(s)).then(function (e) {
                  c[e.measurementId] = e.appId, s.options.measurementId && e.measurementId !== s.options.measurementId && Ue.warn("The measurement ID in the local Firebase config (" + s.options.measurementId + ") does not match the measurement ID fetched from the server (" + e.measurementId + "). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.");
                })["catch"](function (e) {
                  return Ue.error(e);
                }), u.push(i), o = function () {
                  return p(this, void 0, void 0, function () {
                    var t;
                    return h(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return v() ? [3, 1] : (Ue.warn($e.create("indexeddb-unavailable", {
                            errorInfo: "IndexedDB is not available in this environment."
                          }).message), [2, !1]);

                        case 1:
                          return e.trys.push([1, 3,, 4]), [4, g()];

                        case 2:
                          return e.sent(), [3, 4];

                        case 3:
                          return t = e.sent(), Ue.warn($e.create("indexeddb-unavailable", {
                            errorInfo: t
                          }).message), [2, !1];

                        case 4:
                          return [2, !0];
                      }
                    });
                  });
                }().then(function (e) {
                  if (e) return l.getId();
                }), [4, Promise.all([i, o])];

              case 1:
                return a = e.sent(), i = a[0], o = a[1], function () {
                  for (var e = window.document.getElementsByTagName("script"), t = 0, n = Object.values(e); t < n.length; t++) {
                    var r = n[t];
                    if (r.src && r.src.includes(Ke)) return r;
                  }
                }() || (t = d, n = i.measurementId, (r = document.createElement("script")).src = Ke + "?l=" + t + "&id=" + n, r.async = !0, document.head.appendChild(r)), f("js", new Date()), (a = {})[qe] = "firebase", a.update = !0, a = a, null != o && (a[He] = o), f(Me.CONFIG, i.measurementId, a), [2, i.measurementId];
            }

            var t, n, r;
          });
        });
      }

      var it,
          ot,
          at = {},
          st = [],
          ut = {},
          ct = "dataLayer",
          lt = "gtag",
          ft = !1;

      function dt(e) {
        if (ft) throw $e.create("already-initialized");
        e.dataLayerName && (ct = e.dataLayerName), e.gtagName && (lt = e.gtagName);
      }

      function pt(e, t) {
        i = [], c() && i.push("This is a browser extension environment."), l() || i.push("Cookies are not available."), 0 < i.length && (i = i.map(function (e, t) {
          return "(" + (t + 1) + ") " + e;
        }).join(" "), i = $e.create("invalid-analytics-context", {
          errorInfo: i
        }), Ue.warn(i.message));
        var n,
            r,
            i,
            o = e.options.appId;
        if (!o) throw $e.create("no-app-id");

        if (!e.options.apiKey) {
          if (!e.options.measurementId) throw $e.create("no-api-key");
          Ue.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ' + e.options.measurementId + ' provided in the "measurementId" field in the local Firebase config.');
        }

        if (null != at[o]) throw $e.create("already-exists", {
          id: o
        });
        return ft || (r = ct, i = [], Array.isArray(window[r]) ? i = window[r] : window[r] = i, n = ct, r = lt, i = function i() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            e[t] = arguments[t];
          }

          window[n].push(arguments);
        }, window[r] && "function" == typeof window[r] && (i = window[r]), window[r] = We(i, at, st, ut), r = {
          gtagCore: i,
          wrappedGtag: window[r]
        }, ot = r.wrappedGtag, it = r.gtagCore, ft = !0), at[o] = rt(e, st, ut, t, it, ct), {
          app: e,
          logEvent: function logEvent(e, t, n) {
            !function (n, r, i, o, a) {
              return p(this, void 0, void 0, function () {
                var t;
                return h(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return a && a.global ? (n(Me.EVENT, i, o), [2]) : [3, 1];

                    case 1:
                      return [4, r];

                    case 2:
                      t = e.sent(), t = _s(_s({}, o), {
                        send_to: t
                      }), n(Me.EVENT, i, t), e.label = 3;

                    case 3:
                      return [2];
                  }
                });
              });
            }(ot, at[o], e, t, n)["catch"](function (e) {
              return Ue.error(e);
            });
          },
          setCurrentScreen: function setCurrentScreen(e, t) {
            !function (n, r, i, o) {
              return p(this, void 0, void 0, function () {
                var t;
                return h(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return o && o.global ? (n(Me.SET, {
                        screen_name: i
                      }), [2, Promise.resolve()]) : [3, 1];

                    case 1:
                      return [4, r];

                    case 2:
                      t = e.sent(), n(Me.CONFIG, t, {
                        update: !0,
                        screen_name: i
                      }), e.label = 3;

                    case 3:
                      return [2];
                  }
                });
              });
            }(ot, at[o], e, t)["catch"](function (e) {
              return Ue.error(e);
            });
          },
          setUserId: function setUserId(e, t) {
            !function (n, r, i, o) {
              return p(this, void 0, void 0, function () {
                var t;
                return h(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return o && o.global ? (n(Me.SET, {
                        user_id: i
                      }), [2, Promise.resolve()]) : [3, 1];

                    case 1:
                      return [4, r];

                    case 2:
                      t = e.sent(), n(Me.CONFIG, t, {
                        update: !0,
                        user_id: i
                      }), e.label = 3;

                    case 3:
                      return [2];
                  }
                });
              });
            }(ot, at[o], e, t)["catch"](function (e) {
              return Ue.error(e);
            });
          },
          setUserProperties: function setUserProperties(e, t) {
            !function (a, s, u, c) {
              return p(this, void 0, void 0, function () {
                var t, n, r, i, o;
                return h(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (!c || !c.global) return [3, 1];

                      for (t = {}, n = 0, r = Object.keys(u); n < r.length; n++) {
                        i = r[n], t["user_properties." + i] = u[i];
                      }

                      return a(Me.SET, t), [2, Promise.resolve()];

                    case 1:
                      return [4, s];

                    case 2:
                      o = e.sent(), a(Me.CONFIG, o, {
                        update: !0,
                        user_properties: u
                      }), e.label = 3;

                    case 3:
                      return [2];
                  }
                });
              });
            }(ot, at[o], e, t)["catch"](function (e) {
              return Ue.error(e);
            });
          },
          setAnalyticsCollectionEnabled: function setAnalyticsCollectionEnabled(e) {
            !function (n, r) {
              return p(this, void 0, void 0, function () {
                var t;
                return h(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, n];

                    case 1:
                      return t = e.sent(), window["ga-disable-" + t] = !r, [2];
                  }
                });
              });
            }(at[o], e)["catch"](function (e) {
              return Ue.error(e);
            });
          },
          INTERNAL: {
            "delete": function _delete() {
              return delete at[o], Promise.resolve();
            }
          }
        };
      }

      var ht,
          vt = "analytics";

      function gt() {
        return p(this, void 0, void 0, function () {
          return h(this, function (e) {
            switch (e.label) {
              case 0:
                if (c()) return [2, !1];
                if (!l()) return [2, !1];
                if (!v()) return [2, !1];
                e.label = 1;

              case 1:
                return e.trys.push([1, 3,, 4]), [4, g()];

              case 2:
                return [2, e.sent()];

              case 3:
                return e.sent(), [2, !1];

              case 4:
                return [2];
            }
          });
        });
      }

      (ht = t["default"]).INTERNAL.registerComponent(new T(vt, function (e) {
        return pt(e.getProvider("app").getImmediate(), e.getProvider("installations").getImmediate());
      }, "PUBLIC").setServiceProps({
        settings: dt,
        EventName: Be,
        isSupported: gt
      })), ht.INTERNAL.registerComponent(new T("analytics-internal", function (e) {
        try {
          return {
            logEvent: e.getProvider(vt).getImmediate().logEvent
          };
        } catch (e) {
          throw $e.create("interop-component-reg-failed", {
            reason: e
          });
        }
      }, "PRIVATE")), ht.registerVersion("@firebase/analytics", "0.6.11");
    }.apply(this, arguments);
  } catch (e) {
    throw console.error(e), new Error("Cannot instantiate firebase-analytics.js - be sure to load firebase-app.js first.");
  }
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).firebase);
}(void 0, function (Ru) {
  "use strict";

  try {
    !function () {
      function e(e) {
        return e && "object" == _typeof(e) && "default" in e ? e : {
          "default": e
        };
      }

      var t = e(Ru),
          _r2 = function r(e, t) {
        return (_r2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (e, t) {
          e.__proto__ = t;
        } || function (e, t) {
          for (var n in t) {
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
        })(e, t);
      };

      function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e;
        }

        _r2(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
      }

      var _l = function l() {
        return (_l = Object.assign || function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            for (var i in t = arguments[n]) {
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
          }

          return e;
        }).apply(this, arguments);
      };

      function i(e, a, s, u) {
        return new (s = s || Promise)(function (n, t) {
          function r(e) {
            try {
              o(u.next(e));
            } catch (e) {
              t(e);
            }
          }

          function i(e) {
            try {
              o(u["throw"](e));
            } catch (e) {
              t(e);
            }
          }

          function o(e) {
            var t;
            e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function (e) {
              e(t);
            })).then(r, i);
          }

          o((u = u.apply(e, a || [])).next());
        });
      }

      function p(n, r) {
        var i,
            o,
            a,
            s = {
          label: 0,
          sent: function sent() {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: []
        },
            e = {
          next: t(0),
          "throw": t(1),
          "return": t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function () {
          return this;
        }), e;

        function t(t) {
          return function (e) {
            return function (t) {
              if (i) throw new TypeError("Generator is already executing.");

              for (; s;) {
                try {
                  if (i = 1, o && (a = 2 & t[0] ? o["return"] : t[0] ? o["throw"] || ((a = o["return"]) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;

                  switch (o = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                    case 0:
                    case 1:
                      a = t;
                      break;

                    case 4:
                      return s.label++, {
                        value: t[1],
                        done: !1
                      };

                    case 5:
                      s.label++, o = t[1], t = [0];
                      continue;

                    case 7:
                      t = s.ops.pop(), s.trys.pop();
                      continue;

                    default:
                      if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                        s = 0;
                        continue;
                      }

                      if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                        s.label = t[1];
                        break;
                      }

                      if (6 === t[0] && s.label < a[1]) {
                        s.label = a[1], a = t;
                        break;
                      }

                      if (a && s.label < a[2]) {
                        s.label = a[2], s.ops.push(t);
                        break;
                      }

                      a[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }

                  t = r.call(n, s);
                } catch (e) {
                  t = [6, e], o = 0;
                } finally {
                  i = a = 0;
                }
              }

              if (5 & t[0]) throw t[1];
              return {
                value: t[0] ? t[1] : void 0,
                done: !0
              };
            }([t, e]);
          };
        }
      }

      function _(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function next() {
            return {
              value: (e = e && r >= e.length ? void 0 : e) && e[r++],
              done: !e
            };
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function y(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
            i,
            o = n.call(e),
            a = [];

        try {
          for (; (void 0 === t || 0 < t--) && !(r = o.next()).done;) {
            a.push(r.value);
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            r && !r.done && (n = o["return"]) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }

        return a;
      }

      function a(e, t) {
        for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) {
          e[i] = t[n];
        }

        return e;
      }

      function o(e) {
        for (var t = [], n = 0, r = 0; r < e.length; r++) {
          var i = e.charCodeAt(r);
          i < 128 ? t[n++] = i : (i < 2048 ? t[n++] = i >> 6 | 192 : (55296 == (64512 & i) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128) : t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128), t[n++] = 63 & i | 128);
        }

        return t;
      }

      function s(e) {
        try {
          return h.decodeString(e, !0);
        } catch (e) {
          console.error("base64Decode failed: ", e);
        }

        return null;
      }

      var u = {
        NODE_CLIENT: !1,
        NODE_ADMIN: !1,
        SDK_VERSION: "${JSCORE_VERSION}"
      },
          g = function g(e, t) {
        if (!e) throw m(t);
      },
          m = function m(e) {
        return new Error("Firebase Database (" + u.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e);
      },
          h = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",

        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },

        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },

        HAS_NATIVE_SUPPORT: "function" == typeof atob,
        encodeByteArray: function encodeByteArray(e, t) {
          if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();

          for (var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < e.length; i += 3) {
            var o = e[i],
                a = i + 1 < e.length,
                s = a ? e[i + 1] : 0,
                u = i + 2 < e.length,
                l = u ? e[i + 2] : 0,
                h = (15 & s) << 2 | l >> 6,
                l = 63 & l;
            u || (l = 64, a || (h = 64)), r.push(n[o >> 2], n[(3 & o) << 4 | s >> 4], n[h], n[l]);
          }

          return r.join("");
        },
        encodeString: function encodeString(e, t) {
          return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(o(e), t);
        },
        decodeString: function decodeString(e, t) {
          return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function (e) {
            for (var t = [], n = 0, r = 0; n < e.length;) {
              var i,
                  o,
                  a,
                  s = e[n++];
              s < 128 ? t[r++] = String.fromCharCode(s) : 191 < s && s < 224 ? (o = e[n++], t[r++] = String.fromCharCode((31 & s) << 6 | 63 & o)) : 239 < s && s < 365 ? (i = ((7 & s) << 18 | (63 & (o = e[n++])) << 12 | (63 & (a = e[n++])) << 6 | 63 & e[n++]) - 65536, t[r++] = String.fromCharCode(55296 + (i >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & i))) : (o = e[n++], a = e[n++], t[r++] = String.fromCharCode((15 & s) << 12 | (63 & o) << 6 | 63 & a));
            }

            return t.join("");
          }(this.decodeStringToByteArray(e, t));
        },
        decodeStringToByteArray: function decodeStringToByteArray(e, t) {
          this.init_();

          for (var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < e.length;) {
            var o = n[e.charAt(i++)],
                a = i < e.length ? n[e.charAt(i)] : 0,
                s = ++i < e.length ? n[e.charAt(i)] : 64,
                u = ++i < e.length ? n[e.charAt(i)] : 64;
            if (++i, null == o || null == a || null == s || null == u) throw Error();
            r.push(o << 2 | a >> 4), 64 !== s && (r.push(a << 4 & 240 | s >> 2), 64 !== u && r.push(s << 6 & 192 | u));
          }

          return r;
        },
        init_: function init_() {
          if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};

            for (var e = 0; e < this.ENCODED_VALS.length; e++) {
              this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e) >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e);
            }
          }
        }
      };

      function c(e) {
        return function e(t, n) {
          if (!(n instanceof Object)) return n;

          switch (n.constructor) {
            case Date:
              return new Date(n.getTime());

            case Object:
              void 0 === t && (t = {});
              break;

            case Array:
              t = [];
              break;

            default:
              return n;
          }

          for (var r in n) {
            n.hasOwnProperty(r) && d(r) && (t[r] = e(t[r], n[r]));
          }

          return t;
        }(void 0, e);
      }

      function d(e) {
        return "__proto__" !== e;
      }

      var f = (v.prototype.wrapCallback = function (n) {
        var r = this;
        return function (e, t) {
          e ? r.reject(e) : r.resolve(t), "function" == typeof n && (r.promise["catch"](function () {}), 1 === n.length ? n(e) : n(e, t));
        };
      }, v);

      function v() {
        var n = this;
        this.reject = function () {}, this.resolve = function () {}, this.promise = new Promise(function (e, t) {
          n.resolve = e, n.reject = t;
        });
      }

      function w() {
        return "undefined" != typeof window && (window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "");
      }

      function C() {
        return !0 === u.NODE_ADMIN;
      }

      var b,
          T = "FirebaseError",
          E = (n(I, b = Error), I);

      function I(e, t, n) {
        t = b.call(this, t) || this;
        return t.code = e, t.customData = n, t.name = T, Object.setPrototypeOf(t, I.prototype), Error.captureStackTrace && Error.captureStackTrace(t, S.prototype.create), t;
      }

      var S = (k.prototype.create = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }

        var r,
            i = t[0] || {},
            o = this.service + "/" + e,
            e = this.errors[e],
            e = e ? (r = i, e.replace(P, function (e, t) {
          var n = r[t];
          return null != n ? String(n) : "<" + t + "?>";
        })) : "Error",
            e = this.serviceName + ": " + e + " (" + o + ").";
        return new E(o, e, i);
      }, k);

      function k(e, t, n) {
        this.service = e, this.serviceName = t, this.errors = n;
      }

      var P = /\{\$([^}]+)}/g;

      function N(e) {
        return JSON.parse(e);
      }

      function x(e) {
        return JSON.stringify(e);
      }

      function R(e) {
        var t = {},
            n = {},
            r = {},
            i = "";

        try {
          var o = e.split("."),
              t = N(s(o[0]) || ""),
              n = N(s(o[1]) || ""),
              i = o[2],
              r = n.d || {};
          delete n.d;
        } catch (e) {}

        return {
          header: t,
          claims: n,
          data: r,
          signature: i
        };
      }

      function D(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }

      function O(e, t) {
        if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
      }

      function A(e) {
        for (var t in e) {
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        }

        return !0;
      }

      function L(e, t, n) {
        var r,
            i = {};

        for (r in e) {
          Object.prototype.hasOwnProperty.call(e, r) && (i[r] = t.call(n, e[r], r, e));
        }

        return i;
      }

      function M(e) {
        for (var n = [], t = 0, r = Object.entries(e); t < r.length; t++) {
          var i = r[t];
          !function (t, e) {
            Array.isArray(e) ? e.forEach(function (e) {
              n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
            }) : n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e));
          }(i[0], i[1]);
        }

        return n.length ? "&" + n.join("&") : "";
      }

      var F = (q.prototype.reset = function () {
        this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0;
      }, q.prototype.compress_ = function (e, t) {
        t = t || 0;
        var n = this.W_;
        if ("string" == typeof e) for (var r = 0; r < 16; r++) {
          n[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
        } else for (r = 0; r < 16; r++) {
          n[r] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
        }

        for (r = 16; r < 80; r++) {
          var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
          n[r] = 4294967295 & (i << 1 | i >>> 31);
        }

        for (var o, a = this.chain_[0], s = this.chain_[1], u = this.chain_[2], l = this.chain_[3], h = this.chain_[4], r = 0; r < 80; r++) {
          var c = r < 40 ? r < 20 ? (o = l ^ s & (u ^ l), 1518500249) : (o = s ^ u ^ l, 1859775393) : r < 60 ? (o = s & u | l & (s | u), 2400959708) : (o = s ^ u ^ l, 3395469782),
              i = (a << 5 | a >>> 27) + o + h + c + n[r] & 4294967295,
              h = l,
              l = u,
              u = 4294967295 & (s << 30 | s >>> 2),
              s = a,
              a = i;
        }

        this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + s & 4294967295, this.chain_[2] = this.chain_[2] + u & 4294967295, this.chain_[3] = this.chain_[3] + l & 4294967295, this.chain_[4] = this.chain_[4] + h & 4294967295;
      }, q.prototype.update = function (e, t) {
        if (null != e) {
          for (var n = (t = void 0 === t ? e.length : t) - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < t;) {
            if (0 === o) for (; r <= n;) {
              this.compress_(e, r), r += this.blockSize;
            }

            if ("string" == typeof e) {
              for (; r < t;) {
                if (i[o] = e.charCodeAt(r), ++r, ++o === this.blockSize) {
                  this.compress_(i), o = 0;
                  break;
                }
              }
            } else for (; r < t;) {
              if (i[o] = e[r], ++r, ++o === this.blockSize) {
                this.compress_(i), o = 0;
                break;
              }
            }
          }

          this.inbuf_ = o, this.total_ += t;
        }
      }, q.prototype.digest = function () {
        var e = [],
            t = 8 * this.total_;
        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));

        for (var n = this.blockSize - 1; 56 <= n; n--) {
          this.buf_[n] = 255 & t, t /= 256;
        }

        this.compress_(this.buf_);

        for (var r = 0, n = 0; n < 5; n++) {
          for (var i = 24; 0 <= i; i -= 8) {
            e[r] = this.chain_[n] >> i & 255, ++r;
          }
        }

        return e;
      }, q);

      function q() {
        this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;

        for (var e = 1; e < this.blockSize; ++e) {
          this.pad_[e] = 0;
        }

        this.reset();
      }

      function W(e, t, n, r) {
        var i;
        if (r < t ? i = "at least " + t : n < r && (i = 0 === n ? "none" : "no more than " + n), i) throw new Error(e + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".");
      }

      function j(e, t) {
        return e + " failed: " + t + " argument ";
      }

      function U(e, t, n, r) {
        if ((!r || n) && "function" != typeof n) throw new Error(j(e, t) + "must be a valid function.");
      }

      function B(e, t, n, r) {
        if ((!r || n) && ("object" != _typeof(n) || null === n)) throw new Error(j(e, t) + "must be a valid context object.");
      }

      function V(e) {
        for (var t = 0, n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128 ? t++ : r < 2048 ? t += 2 : 55296 <= r && r <= 56319 ? (t += 4, n++) : t += 3;
        }

        return t;
      }

      function z(e) {
        return e && e._delegate ? e._delegate : e;
      }

      var H = (Q.prototype.setInstantiationMode = function (e) {
        return this.instantiationMode = e, this;
      }, Q.prototype.setMultipleInstances = function (e) {
        return this.multipleInstances = e, this;
      }, Q.prototype.setServiceProps = function (e) {
        return this.serviceProps = e, this;
      }, Q.prototype.setInstanceCreatedCallback = function (e) {
        return this.onInstanceCreated = e, this;
      }, Q);

      function Q(e, t, n) {
        this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null;
      }

      var Y = "[DEFAULT]",
          K = (G.prototype.get = function (e) {
        var t = this.normalizeInstanceIdentifier(e = void 0 === e ? Y : e);

        if (!this.instancesDeferred.has(t)) {
          e = new f();
          if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
            var n = this.getOrInitializeService({
              instanceIdentifier: t
            });
            n && e.resolve(n);
          } catch (e) {}
        }

        return this.instancesDeferred.get(t).promise;
      }, G.prototype.getImmediate = function (t) {
        var e = null !== (e = null == t ? void 0 : t.identifier) && void 0 !== e ? e : Y,
            t = null !== (t = null == t ? void 0 : t.optional) && void 0 !== t && t,
            e = this.normalizeInstanceIdentifier(e);

        if (!this.isInitialized(e) && !this.shouldAutoInitialize()) {
          if (t) return null;
          throw Error("Service " + this.name + " is not available");
        }

        try {
          return this.getOrInitializeService({
            instanceIdentifier: e
          });
        } catch (e) {
          if (t) return null;
          throw e;
        }
      }, G.prototype.getComponent = function () {
        return this.component;
      }, G.prototype.setComponent = function (e) {
        var t, n;
        if (e.name !== this.name) throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
        if (this.component) throw Error("Component for " + this.name + " has already been provided");

        if (this.component = e, this.shouldAutoInitialize()) {
          if ("EAGER" === e.instantiationMode) try {
            this.getOrInitializeService({
              instanceIdentifier: Y
            });
          } catch (e) {}

          try {
            for (var r = _(this.instancesDeferred.entries()), i = r.next(); !i.done; i = r.next()) {
              var o = y(i.value, 2),
                  a = o[0],
                  s = o[1],
                  u = this.normalizeInstanceIdentifier(a);

              try {
                var l = this.getOrInitializeService({
                  instanceIdentifier: u
                });
                s.resolve(l);
              } catch (e) {}
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              i && !i.done && (n = r["return"]) && n.call(r);
            } finally {
              if (t) throw t.error;
            }
          }
        }
      }, G.prototype.clearInstance = function (e) {
        this.instancesDeferred["delete"](e = void 0 === e ? Y : e), this.instances["delete"](e);
      }, G.prototype["delete"] = function () {
        return i(this, void 0, void 0, function () {
          var t;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                return t = Array.from(this.instances.values()), [4, Promise.all(a(a([], y(t.filter(function (e) {
                  return "INTERNAL" in e;
                }).map(function (e) {
                  return e.INTERNAL["delete"]();
                }))), y(t.filter(function (e) {
                  return "_delete" in e;
                }).map(function (e) {
                  return e._delete();
                }))))];

              case 1:
                return e.sent(), [2];
            }
          });
        });
      }, G.prototype.isComponentSet = function () {
        return null != this.component;
      }, G.prototype.isInitialized = function (e) {
        return this.instances.has(e = void 0 === e ? Y : e);
      }, G.prototype.initialize = function (e) {
        var t,
            n,
            r = (e = void 0 === e ? {} : e).instanceIdentifier,
            e = e.options,
            e = void 0 === e ? {} : e,
            i = this.normalizeInstanceIdentifier(void 0 === r ? Y : r);
        if (this.isInitialized(i)) throw Error(this.name + "(" + i + ") has already been initialized");
        if (!this.isComponentSet()) throw Error("Component " + this.name + " has not been registered yet");
        var o = this.getOrInitializeService({
          instanceIdentifier: i,
          options: e
        });

        try {
          for (var a = _(this.instancesDeferred.entries()), s = a.next(); !s.done; s = a.next()) {
            var u = y(s.value, 2),
                l = u[0],
                h = u[1];
            i === this.normalizeInstanceIdentifier(l) && h.resolve(o);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            s && !s.done && (n = a["return"]) && n.call(a);
          } finally {
            if (t) throw t.error;
          }
        }

        return this.invokeOnInitCallbacks(o, i), o;
      }, G.prototype.onInit = function (e) {
        var t = this;
        return this.onInitCallbacks.add(e), function () {
          t.onInitCallbacks["delete"](e);
        };
      }, G.prototype.invokeOnInitCallbacks = function (e, t) {
        var n, r;

        try {
          for (var i = _(this.onInitCallbacks), o = i.next(); !o.done; o = i.next()) {
            var a = o.value;

            try {
              a(e, t);
            } catch (e) {}
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            o && !o.done && (r = i["return"]) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
      }, G.prototype.getOrInitializeService = function (e) {
        var t = e.instanceIdentifier,
            n = e.options,
            r = void 0 === n ? {} : n,
            e = this.instances.get(t);
        if (!e && this.component && (e = this.component.instanceFactory(this.container, {
          instanceIdentifier: (n = t) === Y ? void 0 : n,
          options: r
        }), this.instances.set(t, e), this.component.onInstanceCreated)) try {
          this.component.onInstanceCreated(this.container, t, e);
        } catch (e) {}
        return e || null;
      }, G.prototype.normalizeInstanceIdentifier = function (e) {
        return !this.component || this.component.multipleInstances ? e : Y;
      }, G.prototype.shouldAutoInitialize = function () {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode;
      }, G);

      function G(e, t) {
        this.name = e, this.container = t, this.component = null, this.instances = new Map(), this.instancesDeferred = new Map(), this.onInitCallbacks = new Set();
      }

      var $,
          J = (X.prototype.addComponent = function (e) {
        var t = this.getProvider(e.name);
        if (t.isComponentSet()) throw new Error("Component " + e.name + " has already been registered with " + this.name);
        t.setComponent(e);
      }, X.prototype.addOrOverwriteComponent = function (e) {
        this.getProvider(e.name).isComponentSet() && this.providers["delete"](e.name), this.addComponent(e);
      }, X.prototype.getProvider = function (e) {
        if (this.providers.has(e)) return this.providers.get(e);
        var t = new K(e, this);
        return this.providers.set(e, t), t;
      }, X.prototype.getProviders = function () {
        return Array.from(this.providers.values());
      }, X);

      function X(e) {
        this.name = e, this.providers = new Map();
      }

      (Ct = $ = $ || {})[Ct.DEBUG = 0] = "DEBUG", Ct[Ct.VERBOSE = 1] = "VERBOSE", Ct[Ct.INFO = 2] = "INFO", Ct[Ct.WARN = 3] = "WARN", Ct[Ct.ERROR = 4] = "ERROR", Ct[Ct.SILENT = 5] = "SILENT";

      function Z(e, t) {
        for (var n = [], r = 2; r < arguments.length; r++) {
          n[r - 2] = arguments[r];
        }

        if (!(t < e.logLevel)) {
          var i = new Date().toISOString(),
              o = ne[t];
          if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
          console[o].apply(console, a(["[" + i + "]  " + e.name + ":"], n));
        }
      }

      var ee = {
        debug: $.DEBUG,
        verbose: $.VERBOSE,
        info: $.INFO,
        warn: $.WARN,
        error: $.ERROR,
        silent: $.SILENT
      },
          te = $.INFO,
          ne = ((Tt = {})[$.DEBUG] = "log", Tt[$.VERBOSE] = "log", Tt[$.INFO] = "info", Tt[$.WARN] = "warn", Tt[$.ERROR] = "error", Tt),
          re = (Object.defineProperty(ie.prototype, "logLevel", {
        get: function get() {
          return this._logLevel;
        },
        set: function set(e) {
          if (!(e in $)) throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
          this._logLevel = e;
        },
        enumerable: !1,
        configurable: !0
      }), ie.prototype.setLogLevel = function (e) {
        this._logLevel = "string" == typeof e ? ee[e] : e;
      }, Object.defineProperty(ie.prototype, "logHandler", {
        get: function get() {
          return this._logHandler;
        },
        set: function set(e) {
          if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
          this._logHandler = e;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(ie.prototype, "userLogHandler", {
        get: function get() {
          return this._userLogHandler;
        },
        set: function set(e) {
          this._userLogHandler = e;
        },
        enumerable: !1,
        configurable: !0
      }), ie.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        this._userLogHandler && this._userLogHandler.apply(this, a([this, $.DEBUG], e)), this._logHandler.apply(this, a([this, $.DEBUG], e));
      }, ie.prototype.log = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        this._userLogHandler && this._userLogHandler.apply(this, a([this, $.VERBOSE], e)), this._logHandler.apply(this, a([this, $.VERBOSE], e));
      }, ie.prototype.info = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        this._userLogHandler && this._userLogHandler.apply(this, a([this, $.INFO], e)), this._logHandler.apply(this, a([this, $.INFO], e));
      }, ie.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        this._userLogHandler && this._userLogHandler.apply(this, a([this, $.WARN], e)), this._logHandler.apply(this, a([this, $.WARN], e));
      }, ie.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        this._userLogHandler && this._userLogHandler.apply(this, a([this, $.ERROR], e)), this._logHandler.apply(this, a([this, $.ERROR], e));
      }, ie);

      function ie(e) {
        this.name = e, this._logLevel = te, this._logHandler = Z, this._userLogHandler = null;
      }

      var oe = "";

      function ae(e) {
        oe = e;
      }

      var se = (ue.prototype.set = function (e, t) {
        null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), x(t));
      }, ue.prototype.get = function (e) {
        e = this.domStorage_.getItem(this.prefixedName_(e));
        return null == e ? null : N(e);
      }, ue.prototype.remove = function (e) {
        this.domStorage_.removeItem(this.prefixedName_(e));
      }, ue.prototype.prefixedName_ = function (e) {
        return this.prefix_ + e;
      }, ue.prototype.toString = function () {
        return this.domStorage_.toString();
      }, ue);

      function ue(e) {
        this.domStorage_ = e, this.prefix_ = "firebase:";
      }

      var le = (he.prototype.set = function (e, t) {
        null == t ? delete this.cache_[e] : this.cache_[e] = t;
      }, he.prototype.get = function (e) {
        return D(this.cache_, e) ? this.cache_[e] : null;
      }, he.prototype.remove = function (e) {
        delete this.cache_[e];
      }, he);

      function he() {
        this.cache_ = {}, this.isInMemoryStorage = !0;
      }

      function ce(e) {
        var t = function (e) {
          for (var t = [], n = 0, r = 0; r < e.length; r++) {
            var i,
                o = e.charCodeAt(r);
            55296 <= o && o <= 56319 && (i = o - 55296, g(++r < e.length, "Surrogate pair missing trail surrogate."), o = 65536 + (i << 10) + (e.charCodeAt(r) - 56320)), o < 128 ? t[n++] = o : (o < 2048 ? t[n++] = o >> 6 | 192 : (o < 65536 ? t[n++] = o >> 12 | 224 : (t[n++] = o >> 18 | 240, t[n++] = o >> 12 & 63 | 128), t[n++] = o >> 6 & 63 | 128), t[n++] = 63 & o | 128);
          }

          return t;
        }(e);

        return (e = new F()).update(t), e = e.digest(), h.encodeByteArray(e);
      }

      function pe(e, t) {
        g(!t || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? (be.logLevel = $.VERBOSE, Ie = be.log.bind(be), t && Ce.set("logging_enabled", !0)) : "function" == typeof e ? Ie = e : (Ie = null, Ce.remove("logging_enabled"));
      }

      function de() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        var n = "FIREBASE INTERNAL ERROR: " + Ee.apply(void 0, a([], y(e)));
        be.error(n);
      }

      function fe(e) {
        return "number" == typeof e && (e != e || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY);
      }

      function _e(e, t) {
        return e === t ? 0 : e < t ? -1 : 1;
      }

      function ye(e, t) {
        if (t && e in t) return t[e];
        throw new Error("Missing required key (" + e + ") in object: " + x(t));
      }

      function ve(e, t) {
        var n = e.length;
        if (n <= t) return [e];

        for (var r = [], i = 0; i < n; i += t) {
          n < i + t ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
        }

        return r;
      }

      var ge,
          me = function me(e) {
        try {
          if ("undefined" != typeof window && void 0 !== window[e]) {
            var t = window[e];
            return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new se(t);
          }
        } catch (e) {}

        return new le();
      },
          we = me("localStorage"),
          Ce = me("sessionStorage"),
          be = new re("@firebase/database"),
          Te = (ge = 1, function () {
        return ge++;
      }),
          Ee = function Ee() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        for (var n = "", r = 0; r < e.length; r++) {
          var i = e[r];
          Array.isArray(i) || i && "object" == _typeof(i) && "number" == typeof i.length ? n += Ee.apply(null, i) : n += "object" == _typeof(i) ? x(i) : i, n += " ";
        }

        return n;
      },
          Ie = null,
          Se = !0,
          ke = function ke() {
        for (var e, t = [], n = 0; n < arguments.length; n++) {
          t[n] = arguments[n];
        }

        !0 === Se && (Se = !1, null === Ie && !0 === Ce.get("logging_enabled") && pe(!0)), Ie && (e = Ee.apply(null, t), Ie(e));
      },
          Pe = function Pe(n) {
        return function () {
          for (var e = [], t = 0; t < arguments.length; t++) {
            e[t] = arguments[t];
          }

          ke.apply(void 0, a([n], y(e)));
        };
      },
          Ne = function Ne() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        var n = "FIREBASE FATAL ERROR: " + Ee.apply(void 0, a([], y(e)));
        throw be.error(n), new Error(n);
      },
          xe = function xe() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          e[t] = arguments[t];
        }

        var n = "FIREBASE WARNING: " + Ee.apply(void 0, a([], y(e)));
        be.warn(n);
      },
          Re = "[MIN_NAME]",
          De = "[MAX_NAME]",
          Oe = function Oe(e, t) {
        if (e === t) return 0;
        if (e === Re || t === De) return -1;
        if (t === Re || e === De) return 1;
        var n = Ue(e),
            r = Ue(t);
        return null !== n ? null !== r ? n - r == 0 ? e.length - t.length : n - r : -1 : null === r && e < t ? -1 : 1;
      },
          Ae = function Ae(e) {
        if ("object" != _typeof(e) || null === e) return x(e);
        var t,
            n = [];

        for (t in e) {
          n.push(t);
        }

        n.sort();

        for (var r = "{", i = 0; i < n.length; i++) {
          0 !== i && (r += ","), r += x(n[i]), r += ":", r += Ae(e[n[i]]);
        }

        return r += "}";
      };

      function Le(e, t) {
        for (var n in e) {
          e.hasOwnProperty(n) && t(n, e[n]);
        }
      }

      function Me(e) {
        var t, n, r, i;
        g(!fe(e), "Invalid JSON number"), 0 === e ? t = 1 / e == -1 / (r = n = 0) ? 1 : 0 : (t = e < 0, r = (e = Math.abs(e)) >= Math.pow(2, -1022) ? (n = (i = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) + 1023, Math.round(e * Math.pow(2, 52 - i) - Math.pow(2, 52))) : (n = 0, Math.round(e / Math.pow(2, -1074))));

        for (var o = [], a = 52; a; --a) {
          o.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
        }

        for (a = 11; a; --a) {
          o.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
        }

        o.push(t ? 1 : 0), o.reverse();
        var s = o.join(""),
            u = "";

        for (a = 0; a < 64; a += 8) {
          var l = parseInt(s.substr(a, 8), 2).toString(16);
          u += l = 1 === l.length ? "0" + l : l;
        }

        return u.toLowerCase();
      }

      function Fe(e, t) {
        return "object" == _typeof(t = setTimeout(e, t)) && t.unref && t.unref(), t;
      }

      var qe = new RegExp("^-?(0*)\\d{1,10}$"),
          We = -2147483648,
          je = 2147483647,
          Ue = function Ue(e) {
        if (qe.test(e)) {
          e = Number(e);
          if (We <= e && e <= je) return e;
        }

        return null;
      },
          Be = function Be(e) {
        try {
          e();
        } catch (t) {
          setTimeout(function () {
            var e = t.stack || "";
            throw xe("Exception was thrown by user callback.", e), t;
          }, Math.floor(0));
        }
      },
          Ve = (ze.prototype.getToken = function (n) {
        var r = this;
        return this.appCheck ? this.appCheck.getToken(n) : new Promise(function (e, t) {
          setTimeout(function () {
            r.appCheck ? r.getToken(n).then(e, t) : e(null);
          }, 0);
        });
      }, ze.prototype.addTokenChangeListener = function (t) {
        var e;
        null !== (e = this.appCheckProvider) && void 0 !== e && e.get().then(function (e) {
          return e.addTokenListener(t);
        });
      }, ze.prototype.notifyForInvalidToken = function () {
        xe('Provided AppCheck credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly.');
      }, ze);

      function ze(e, t) {
        var n = this;
        this.appName_ = e, this.appCheckProvider = t, this.appCheck = null == t ? void 0 : t.getImmediate({
          optional: !0
        }), this.appCheck || null != t && t.get().then(function (e) {
          return n.appCheck = e;
        });
      }

      var He = (Qe.prototype.getToken = function (n) {
        var r = this;
        return this.auth_ ? this.auth_.getToken(n)["catch"](function (e) {
          return e && "auth/token-not-initialized" === e.code ? (ke("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e);
        }) : new Promise(function (e, t) {
          setTimeout(function () {
            r.auth_ ? r.getToken(n).then(e, t) : e(null);
          }, 0);
        });
      }, Qe.prototype.addTokenChangeListener = function (t) {
        this.auth_ ? this.auth_.addAuthTokenListener(t) : this.authProvider_.get().then(function (e) {
          return e.addAuthTokenListener(t);
        });
      }, Qe.prototype.removeTokenChangeListener = function (t) {
        this.authProvider_.get().then(function (e) {
          return e.removeAuthTokenListener(t);
        });
      }, Qe.prototype.notifyForInvalidToken = function () {
        var e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
        "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', xe(e);
      }, Qe);

      function Qe(e, t, n) {
        var r = this;
        this.appName_ = e, this.firebaseOptions_ = t, this.authProvider_ = n, this.auth_ = null, this.auth_ = n.getImmediate({
          optional: !0
        }), this.auth_ || n.onInit(function (e) {
          return r.auth_ = e;
        });
      }

      var Ye = (Ke.prototype.getToken = function (e) {
        return Promise.resolve({
          accessToken: this.accessToken
        });
      }, Ke.prototype.addTokenChangeListener = function (e) {
        e(this.accessToken);
      }, Ke.prototype.removeTokenChangeListener = function (e) {}, Ke.prototype.notifyForInvalidToken = function () {}, Ke.OWNER = "owner", Ke);

      function Ke(e) {
        this.accessToken = e;
      }

      var Ge = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
          $e = "websocket",
          Je = "long_polling",
          Xe = (Ze.prototype.isCacheableHost = function () {
        return "s-" === this.internalHost.substr(0, 2);
      }, Ze.prototype.isCustomHost = function () {
        return "firebaseio.com" !== this._domain && "firebaseio-demo.com" !== this._domain;
      }, Object.defineProperty(Ze.prototype, "host", {
        get: function get() {
          return this._host;
        },
        set: function set(e) {
          e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && we.set("host:" + this._host, this.internalHost));
        },
        enumerable: !1,
        configurable: !0
      }), Ze.prototype.toString = function () {
        var e = this.toURLString();
        return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e;
      }, Ze.prototype.toURLString = function () {
        var e = this.secure ? "https://" : "http://",
            t = this.includeNamespaceInQueryParams ? "?ns=" + this.namespace : "";
        return e + this.host + "/" + t;
      }, Ze);

      function Ze(e, t, n, r, i, o, a) {
        void 0 === i && (i = !1), void 0 === o && (o = ""), void 0 === a && (a = !1), this.secure = t, this.namespace = n, this.webSocketOnly = r, this.nodeAdmin = i, this.persistenceKey = o, this.includeNamespaceInQueryParams = a, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = we.get("host:" + e) || this._host;
      }

      function et(e, t, n) {
        var r;
        if (g("string" == typeof t, "typeof type must == string"), g("object" == _typeof(n), "typeof params must == object"), t === $e) r = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";else {
          if (t !== Je) throw new Error("Unknown connection type: " + t);
          r = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?";
        }
        ((t = e).host !== t.internalHost || t.isCustomHost() || t.includeNamespaceInQueryParams) && (n.ns = e.namespace);
        var i = [];
        return Le(n, function (e, t) {
          i.push(e + "=" + t);
        }), r + i.join("&");
      }

      var tt = (nt.prototype.incrementCounter = function (e, t) {
        void 0 === t && (t = 1), D(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t;
      }, nt.prototype.get = function () {
        return c(this.counters_);
      }, nt);

      function nt() {
        this.counters_ = {};
      }

      var rt = {},
          it = {};

      function ot(e) {
        e = e.toString();
        return rt[e] || (rt[e] = new tt()), rt[e];
      }

      var at = (st.prototype.closeAfter = function (e, t) {
        this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null);
      }, st.prototype.handleResponse = function (e, t) {
        var n = this;
        this.pendingResponses[e] = t;

        for (var r = function r() {
          var t = i.pendingResponses[i.currentResponseNum];
          delete i.pendingResponses[i.currentResponseNum];

          for (var e = 0; e < t.length; ++e) {
            !function (e) {
              t[e] && Be(function () {
                n.onMessage_(t[e]);
              });
            }(e);
          }

          if (i.currentResponseNum === i.closeAfterResponse) return i.onClose && (i.onClose(), i.onClose = null), "break";
          i.currentResponseNum++;
        }, i = this; this.pendingResponses[this.currentResponseNum];) {
          if ("break" === r()) break;
        }
      }, st);

      function st(e) {
        this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null;
      }

      var ut = "pLPCommand",
          lt = "pRTLPCB",
          ht = (ct.prototype.open = function (e, t) {
        var n,
            r,
            _i2,
            a = this;

        this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new at(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(function () {
          a.log_("Timed out trying to connect."), a.onClosed_(), a.connectTimeoutTimer_ = null;
        }, Math.floor(3e4)), n = function n() {
          var e;
          a.isClosed_ || (a.scriptTagHolder = new pt(function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }

            var n = y(e, 5),
                r = n[0],
                i = n[1],
                o = n[2];
            n[3], n[4];
            if (a.incrementIncomingBytes_(e), a.scriptTagHolder) if (a.connectTimeoutTimer_ && (clearTimeout(a.connectTimeoutTimer_), a.connectTimeoutTimer_ = null), a.everConnected_ = !0, "start" === r) a.id = i, a.password = o;else {
              if ("close" !== r) throw new Error("Unrecognized command received: " + r);
              i ? (a.scriptTagHolder.sendNewPolls = !1, a.myPacketOrderer.closeAfter(i, function () {
                a.onClosed_();
              })) : a.onClosed_();
            }
          }, function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }

            var n = y(e, 2),
                r = n[0],
                n = n[1];
            a.incrementIncomingBytes_(e), a.myPacketOrderer.handleResponse(r, n);
          }, function () {
            a.onClosed_();
          }, a.urlFn), (e = {
            start: "t"
          }).ser = Math.floor(1e8 * Math.random()), a.scriptTagHolder.uniqueCallbackIdentifier && (e.cb = a.scriptTagHolder.uniqueCallbackIdentifier), e.v = "5", a.transportSessionId && (e.s = a.transportSessionId), a.lastSessionId && (e.ls = a.lastSessionId), a.applicationId && (e.p = a.applicationId), a.appCheckToken && (e.ac = a.appCheckToken), "undefined" != typeof location && location.hostname && Ge.test(location.hostname) && (e.r = "f"), e = a.urlFn(e), a.log_("Connecting via long-poll to " + e), a.scriptTagHolder.addTag(e, function () {}));
        }, "complete" === document.readyState ? n() : (r = !1, _i2 = function i() {
          document.body ? r || (r = !0, n()) : setTimeout(_i2, Math.floor(10));
        }, document.addEventListener ? (document.addEventListener("DOMContentLoaded", _i2, !1), window.addEventListener("load", _i2, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function () {
          "complete" === document.readyState && _i2();
        }), window.attachEvent("onload", _i2)));
      }, ct.prototype.start = function () {
        this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password);
      }, ct.forceAllow = function () {
        ct.forceAllow_ = !0;
      }, ct.forceDisallow = function () {
        ct.forceDisallow_ = !0;
      }, ct.isAvailable = function () {
        return !!ct.forceAllow_ || !(ct.forceDisallow_ || "undefined" == typeof document || null == document.createElement || "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || "object" == (typeof Windows === "undefined" ? "undefined" : _typeof(Windows)) && "object" == _typeof(Windows.UI));
      }, ct.prototype.markConnectionHealthy = function () {}, ct.prototype.shutdown_ = function () {
        this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null);
      }, ct.prototype.onClosed_ = function () {
        this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null));
      }, ct.prototype.close = function () {
        this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_());
      }, ct.prototype.send = function (e) {
        e = x(e);
        this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);

        for (var e = function (e) {
          e = o(e);
          return h.encodeByteArray(e, !0);
        }(e), t = ve(e, 1840), n = 0; n < t.length; n++) {
          this.scriptTagHolder.enqueueSegment(this.curSegmentNum, t.length, t[n]), this.curSegmentNum++;
        }
      }, ct.prototype.addDisconnectPingFrame = function (e, t) {
        this.myDisconnFrame = document.createElement("iframe");
        var n = {
          dframe: "t"
        };
        n.id = e, n.pw = t, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame);
      }, ct.prototype.incrementIncomingBytes_ = function (e) {
        e = x(e).length;
        this.bytesReceived += e, this.stats_.incrementCounter("bytes_received", e);
      }, ct);

      function ct(e, t, n, r, i, o, a) {
        var s = this;
        this.connId = e, this.repoInfo = t, this.applicationId = n, this.appCheckToken = r, this.authToken = i, this.transportSessionId = o, this.lastSessionId = a, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = Pe(e), this.stats_ = ot(t), this.urlFn = function (e) {
          return s.appCheckToken && (e.ac = s.appCheckToken), et(t, Je, e);
        };
      }

      var pt = (dt.createIFrame_ = function () {
        var t = document.createElement("iframe");
        if (t.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
        document.body.appendChild(t);

        try {
          t.contentWindow.document || ke("No IE domain setting required");
        } catch (e) {
          var n = document.domain;
          t.src = "javascript:void((function(){document.open();document.domain='" + n + "';document.close();})())";
        }

        return t.contentDocument ? t.doc = t.contentDocument : t.contentWindow ? t.doc = t.contentWindow.document : t.document && (t.doc = t.document), t;
      }, dt.prototype.close = function () {
        var e = this;
        this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function () {
          null !== e.myIFrame && (document.body.removeChild(e.myIFrame), e.myIFrame = null);
        }, Math.floor(0)));
        var t = this.onDisconnect;
        t && (this.onDisconnect = null, t());
      }, dt.prototype.startLongPoll = function (e, t) {
        for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_();) {
          ;
        }
      }, dt.prototype.newRequest_ = function () {
        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (0 < this.pendingSegs.length ? 2 : 1)) {
          this.currentSerial++;
          var e = {};
          e.id = this.myID, e.pw = this.myPW, e.ser = this.currentSerial;

          for (var e = this.urlFn(e), t = "", n = 0; 0 < this.pendingSegs.length;) {
            if (!(this.pendingSegs[0].d.length + 30 + t.length <= 1870)) break;
            var r = this.pendingSegs.shift(),
                t = t + "&seg" + n + "=" + r.seg + "&ts" + n + "=" + r.ts + "&d" + n + "=" + r.d;
            n++;
          }

          return this.addLongPollTag_(e += t, this.currentSerial), !0;
        }

        return !1;
      }, dt.prototype.enqueueSegment = function (e, t, n) {
        this.pendingSegs.push({
          seg: e,
          ts: t,
          d: n
        }), this.alive && this.newRequest_();
      }, dt.prototype.addLongPollTag_ = function (e, t) {
        var n = this;
        this.outstandingRequests.add(t);

        function r() {
          n.outstandingRequests["delete"](t), n.newRequest_();
        }

        var i = setTimeout(r, Math.floor(25e3));
        this.addTag(e, function () {
          clearTimeout(i), r();
        });
      }, dt.prototype.addTag = function (e, n) {
        var r = this;
        setTimeout(function () {
          try {
            if (!r.sendNewPolls) return;
            var t = r.myIFrame.doc.createElement("script");
            t.type = "text/javascript", t.async = !0, t.src = e, t.onload = t.onreadystatechange = function () {
              var e = t.readyState;
              e && "loaded" !== e && "complete" !== e || (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), n());
            }, t.onerror = function () {
              ke("Long-poll script failed to load: " + e), r.sendNewPolls = !1, r.close();
            }, r.myIFrame.doc.body.appendChild(t);
          } catch (e) {}
        }, Math.floor(1));
      }, dt);

      function dt(e, t, n, r) {
        this.onDisconnect = n, this.urlFn = r, this.outstandingRequests = new Set(), this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, this.uniqueCallbackIdentifier = Te(), window[ut + this.uniqueCallbackIdentifier] = e, window[lt + this.uniqueCallbackIdentifier] = t, this.myIFrame = dt.createIFrame_();
        t = "", t = "<html><body>" + (t = this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length) ? '<script>document.domain="' + document.domain + '";<\/script>' : t) + "</body></html>";

        try {
          this.myIFrame.doc.open(), this.myIFrame.doc.write(t), this.myIFrame.doc.close();
        } catch (e) {
          ke("frame writing exception"), e.stack && ke(e.stack), ke(e);
        }
      }

      var ft = null;
      "undefined" != typeof MozWebSocket ? ft = MozWebSocket : "undefined" != typeof WebSocket && (ft = WebSocket);

      var _t = (yt.connectionURL_ = function (e, t, n, r) {
        var i = {
          v: "5"
        };
        return "undefined" != typeof location && location.hostname && Ge.test(location.hostname) && (i.r = "f"), t && (i.s = t), n && (i.ls = n), r && (i.ac = r), et(e, $e, i);
      }, yt.prototype.open = function (e, t) {
        var n = this;
        this.onDisconnect = t, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, we.set("previous_websocket_failure", !0);

        try {
          C() || (r = {
            headers: {
              "X-Firebase-GMPID": this.applicationId || "",
              "X-Firebase-AppCheck": this.appCheckToken || ""
            }
          }, this.mySock = new ft(this.connURL, [], r));
        } catch (e) {
          this.log_("Error instantiating WebSocket.");
          var r = e.message || e.data;
          return r && this.log_(r), void this.onClosed_();
        }

        this.mySock.onopen = function () {
          n.log_("Websocket connected."), n.everConnected_ = !0;
        }, this.mySock.onclose = function () {
          n.log_("Websocket connection was disconnected."), n.mySock = null, n.onClosed_();
        }, this.mySock.onmessage = function (e) {
          n.handleIncomingFrame(e);
        }, this.mySock.onerror = function (e) {
          n.log_("WebSocket error.  Closing connection.");
          e = e.message || e.data;
          e && n.log_(e), n.onClosed_();
        };
      }, yt.prototype.start = function () {}, yt.forceDisallow = function () {
        yt.forceDisallow_ = !0;
      }, yt.isAvailable = function () {
        var e,
            t = !1;
        return "undefined" != typeof navigator && navigator.userAgent && (e = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/)) && 1 < e.length && parseFloat(e[1]) < 4.4 && (t = !0), !t && null !== ft && !yt.forceDisallow_;
      }, yt.previouslyFailed = function () {
        return we.isInMemoryStorage || !0 === we.get("previous_websocket_failure");
      }, yt.prototype.markConnectionHealthy = function () {
        we.remove("previous_websocket_failure");
      }, yt.prototype.appendFrame_ = function (e) {
        this.frames.push(e), this.frames.length === this.totalFrames && (e = this.frames.join(""), this.frames = null, e = N(e), this.onMessage(e));
      }, yt.prototype.handleNewFrameCount_ = function (e) {
        this.totalFrames = e, this.frames = [];
      }, yt.prototype.extractFrameCount_ = function (e) {
        if (g(null === this.frames, "We already have a frame buffer"), e.length <= 6) {
          var t = Number(e);
          if (!isNaN(t)) return this.handleNewFrameCount_(t), null;
        }

        return this.handleNewFrameCount_(1), e;
      }, yt.prototype.handleIncomingFrame = function (e) {
        null !== this.mySock && (e = e.data, this.bytesReceived += e.length, this.stats_.incrementCounter("bytes_received", e.length), this.resetKeepAlive(), null !== this.frames ? this.appendFrame_(e) : null !== (e = this.extractFrameCount_(e)) && this.appendFrame_(e));
      }, yt.prototype.send = function (e) {
        this.resetKeepAlive();
        e = x(e);
        this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
        var t = ve(e, 16384);
        1 < t.length && this.sendString_(String(t.length));

        for (var n = 0; n < t.length; n++) {
          this.sendString_(t[n]);
        }
      }, yt.prototype.shutdown_ = function () {
        this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null);
      }, yt.prototype.onClosed_ = function () {
        this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null));
      }, yt.prototype.close = function () {
        this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_());
      }, yt.prototype.resetKeepAlive = function () {
        var e = this;
        clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function () {
          e.mySock && e.sendString_("0"), e.resetKeepAlive();
        }, Math.floor(45e3));
      }, yt.prototype.sendString_ = function (e) {
        try {
          this.mySock.send(e);
        } catch (e) {
          this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0);
        }
      }, yt.responsesRequiredToBeHealthy = 2, yt.healthyTimeout = 3e4, yt);

      function yt(e, t, n, r, i, o, a) {
        this.connId = e, this.applicationId = n, this.appCheckToken = r, this.authToken = i, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = Pe(this.connId), this.stats_ = ot(t), this.connURL = yt.connectionURL_(t, o, a, r), this.nodeAdmin = t.nodeAdmin;
      }

      var vt = (Object.defineProperty(gt, "ALL_TRANSPORTS", {
        get: function get() {
          return [ht, _t];
        },
        enumerable: !1,
        configurable: !0
      }), gt.prototype.initTransports_ = function (e) {
        var t,
            n,
            r = _t && _t.isAvailable(),
            i = r && !_t.previouslyFailed();

        if (e.webSocketOnly && (r || xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), i = !0), i) this.transports_ = [_t];else {
          var o = this.transports_ = [];

          try {
            for (var a = _(gt.ALL_TRANSPORTS), s = a.next(); !s.done; s = a.next()) {
              var u = s.value;
              u && u.isAvailable() && o.push(u);
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              s && !s.done && (n = a["return"]) && n.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
        }
      }, gt.prototype.initialTransport = function () {
        if (0 < this.transports_.length) return this.transports_[0];
        throw new Error("No transports available");
      }, gt.prototype.upgradeTransport = function () {
        return 1 < this.transports_.length ? this.transports_[1] : null;
      }, gt);

      function gt(e) {
        this.initTransports_(e);
      }

      var mt = (wt.prototype.start_ = function () {
        var e = this,
            t = this.transportManager_.initialTransport();
        this.conn_ = new t(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.lastSessionId), this.primaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
        var n = this.connReceiver_(this.conn_),
            r = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(function () {
          e.conn_ && e.conn_.open(n, r);
        }, Math.floor(0));
        t = t.healthyTimeout || 0;
        0 < t && (this.healthyTimeout_ = Fe(function () {
          e.healthyTimeout_ = null, e.isHealthy_ || (e.conn_ && 102400 < e.conn_.bytesReceived ? (e.log_("Connection exceeded healthy timeout but has received " + e.conn_.bytesReceived + " bytes.  Marking connection healthy."), e.isHealthy_ = !0, e.conn_.markConnectionHealthy()) : e.conn_ && 10240 < e.conn_.bytesSent ? e.log_("Connection exceeded healthy timeout but has sent " + e.conn_.bytesSent + " bytes.  Leaving connection alive.") : (e.log_("Closing unhealthy connection after timeout."), e.close()));
        }, Math.floor(t)));
      }, wt.prototype.nextTransportId_ = function () {
        return "c:" + this.id + ":" + this.connectionCount++;
      }, wt.prototype.disconnReceiver_ = function (t) {
        var n = this;
        return function (e) {
          t === n.conn_ ? n.onConnectionLost_(e) : t === n.secondaryConn_ ? (n.log_("Secondary connection lost."), n.onSecondaryConnectionLost_()) : n.log_("closing an old connection");
        };
      }, wt.prototype.connReceiver_ = function (t) {
        var n = this;
        return function (e) {
          2 !== n.state_ && (t === n.rx_ ? n.onPrimaryMessageReceived_(e) : t === n.secondaryConn_ ? n.onSecondaryMessageReceived_(e) : n.log_("message on old connection"));
        };
      }, wt.prototype.sendRequest = function (e) {
        this.sendData_({
          t: "d",
          d: e
        });
      }, wt.prototype.tryCleanupConnection = function () {
        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null);
      }, wt.prototype.onSecondaryControl_ = function (e) {
        "t" in e && ("a" === (e = e.t) ? this.upgradeIfSecondaryHealthy_() : "r" === e ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === e && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_()));
      }, wt.prototype.onSecondaryMessageReceived_ = function (e) {
        var t = ye("t", e),
            e = ye("d", e);
        if ("c" === t) this.onSecondaryControl_(e);else {
          if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
          this.pendingDataMessages.push(e);
        }
      }, wt.prototype.upgradeIfSecondaryHealthy_ = function () {
        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
          t: "c",
          d: {
            t: "p",
            d: {}
          }
        }));
      }, wt.prototype.proceedWithUpgrade_ = function () {
        this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
          t: "c",
          d: {
            t: "a",
            d: {}
          }
        }), this.log_("Ending transmission on primary"), this.conn_.send({
          t: "c",
          d: {
            t: "n",
            d: {}
          }
        }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection();
      }, wt.prototype.onPrimaryMessageReceived_ = function (e) {
        var t = ye("t", e),
            e = ye("d", e);
        "c" === t ? this.onControl_(e) : "d" === t && this.onDataMessage_(e);
      }, wt.prototype.onDataMessage_ = function (e) {
        this.onPrimaryResponse_(), this.onMessage_(e);
      }, wt.prototype.onPrimaryResponse_ = function () {
        this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()));
      }, wt.prototype.onControl_ = function (e) {
        var t = ye("t", e);

        if ("d" in e) {
          e = e.d;
          if ("h" === t) this.onHandshake_(e);else if ("n" === t) {
            this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;

            for (var n = 0; n < this.pendingDataMessages.length; ++n) {
              this.onDataMessage_(this.pendingDataMessages[n]);
            }

            this.pendingDataMessages = [], this.tryCleanupConnection();
          } else "s" === t ? this.onConnectionShutdown_(e) : "r" === t ? this.onReset_(e) : "e" === t ? de("Server Error: " + e) : "o" === t ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : de("Unknown control packet command: " + t);
        }
      }, wt.prototype.onHandshake_ = function (e) {
        var t = e.ts,
            n = e.v,
            r = e.h;
        this.sessionId = e.s, this.repoInfo_.host = r, 0 === this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), "5" !== n && xe("Protocol version mismatch detected"), this.tryStartUpgrade_());
      }, wt.prototype.tryStartUpgrade_ = function () {
        var e = this.transportManager_.upgradeTransport();
        e && this.startUpgrade_(e);
      }, wt.prototype.startUpgrade_ = function (e) {
        var t = this;
        this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
        var n = this.connReceiver_(this.secondaryConn_),
            e = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(n, e), Fe(function () {
          t.secondaryConn_ && (t.log_("Timed out trying to upgrade."), t.secondaryConn_.close());
        }, Math.floor(6e4));
      }, wt.prototype.onReset_ = function (e) {
        this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_());
      }, wt.prototype.onConnectionEstablished_ = function (e, t) {
        var n = this;
        this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : Fe(function () {
          n.sendPingOnPrimaryIfNecessary_();
        }, Math.floor(5e3));
      }, wt.prototype.sendPingOnPrimaryIfNecessary_ = function () {
        this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
          t: "c",
          d: {
            t: "p",
            d: {}
          }
        }));
      }, wt.prototype.onSecondaryConnectionLost_ = function () {
        var e = this.secondaryConn_;
        this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close();
      }, wt.prototype.onConnectionLost_ = function (e) {
        this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (we.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close();
      }, wt.prototype.onConnectionShutdown_ = function (e) {
        this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close();
      }, wt.prototype.sendData_ = function (e) {
        if (1 !== this.state_) throw "Connection is not connected";
        this.tx_.send(e);
      }, wt.prototype.close = function () {
        2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null));
      }, wt.prototype.closeConnections_ = function () {
        this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null);
      }, wt);

      function wt(e, t, n, r, i, o, a, s, u, l) {
        this.id = e, this.repoInfo_ = t, this.applicationId_ = n, this.appCheckToken_ = r, this.authToken_ = i, this.onMessage_ = o, this.onReady_ = a, this.onDisconnect_ = s, this.onKill_ = u, this.lastSessionId = l, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = Pe("c:" + this.id + ":"), this.transportManager_ = new vt(t), this.log_("Connection created"), this.start_();
      }

      var Ct = (bt.prototype.put = function (e, t, n, r) {}, bt.prototype.merge = function (e, t, n, r) {}, bt.prototype.refreshAuthToken = function (e) {}, bt.prototype.refreshAppCheckToken = function (e) {}, bt.prototype.onDisconnectPut = function (e, t, n) {}, bt.prototype.onDisconnectMerge = function (e, t, n) {}, bt.prototype.onDisconnectCancel = function (e, t) {}, bt.prototype.reportStats = function (e) {}, bt);

      function bt() {}

      var Tt = (Et.prototype.trigger = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }

        if (Array.isArray(this.listeners_[e])) for (var r = a([], y(this.listeners_[e])), i = 0; i < r.length; i++) {
          r[i].callback.apply(r[i].context, t);
        }
      }, Et.prototype.on = function (e, t, n) {
        this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
          callback: t,
          context: n
        });
        e = this.getInitialEvent(e);
        e && t.apply(n, e);
      }, Et.prototype.off = function (e, t, n) {
        this.validateEventType_(e);

        for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++) {
          if (r[i].callback === t && (!n || n === r[i].context)) return void r.splice(i, 1);
        }
      }, Et.prototype.validateEventType_ = function (t) {
        g(this.allowedEvents_.find(function (e) {
          return e === t;
        }), "Unknown event: " + t);
      }, Et);

      function Et(e) {
        this.allowedEvents_ = e, this.listeners_ = {}, g(Array.isArray(e) && 0 < e.length, "Requires a non-empty array");
      }

      var It,
          St = (n(kt, It = Tt), kt.getInstance = function () {
        return new kt();
      }, kt.prototype.getInitialEvent = function (e) {
        return g("online" === e, "Unknown event type: " + e), [this.online_];
      }, kt.prototype.currentlyOnline = function () {
        return this.online_;
      }, kt);

      function kt() {
        var e = It.call(this, ["online"]) || this;
        return e.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || w() || (window.addEventListener("online", function () {
          e.online_ || (e.online_ = !0, e.trigger("online", !0));
        }, !1), window.addEventListener("offline", function () {
          e.online_ && (e.online_ = !1, e.trigger("online", !1));
        }, !1)), e;
      }

      var Pt = 32,
          Nt = 768,
          xt = (Rt.prototype.toString = function () {
        for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++) {
          "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
        }

        return e || "/";
      }, Rt);

      function Rt(e, t) {
        if (void 0 === t) {
          this.pieces_ = e.split("/");

          for (var n = 0, r = 0; r < this.pieces_.length; r++) {
            0 < this.pieces_[r].length && (this.pieces_[n] = this.pieces_[r], n++);
          }

          this.pieces_.length = n, this.pieceNum_ = 0;
        } else this.pieces_ = e, this.pieceNum_ = t;
      }

      function Dt() {
        return new xt("");
      }

      function Ot(e) {
        return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_];
      }

      function At(e) {
        return e.pieces_.length - e.pieceNum_;
      }

      function Lt(e) {
        var t = e.pieceNum_;
        return t < e.pieces_.length && t++, new xt(e.pieces_, t);
      }

      function Mt(e) {
        return e.pieceNum_ < e.pieces_.length ? e.pieces_[e.pieces_.length - 1] : null;
      }

      function Ft(e, t) {
        return e.pieces_.slice(e.pieceNum_ + (t = void 0 === t ? 0 : t));
      }

      function qt(e) {
        if (e.pieceNum_ >= e.pieces_.length) return null;

        for (var t = [], n = e.pieceNum_; n < e.pieces_.length - 1; n++) {
          t.push(e.pieces_[n]);
        }

        return new xt(t, 0);
      }

      function Wt(e, t) {
        for (var n = [], r = e.pieceNum_; r < e.pieces_.length; r++) {
          n.push(e.pieces_[r]);
        }

        if (t instanceof xt) for (r = t.pieceNum_; r < t.pieces_.length; r++) {
          n.push(t.pieces_[r]);
        } else for (var i = t.split("/"), r = 0; r < i.length; r++) {
          0 < i[r].length && n.push(i[r]);
        }
        return new xt(n, 0);
      }

      function jt(e) {
        return e.pieceNum_ >= e.pieces_.length;
      }

      function Ut(e, t) {
        var n = Ot(e),
            r = Ot(t);
        if (null === n) return t;
        if (n === r) return Ut(Lt(e), Lt(t));
        throw new Error("INTERNAL ERROR: innerPath (" + t + ") is not within outerPath (" + e + ")");
      }

      function Bt(e, t) {
        for (var n = Ft(e, 0), r = Ft(t, 0), i = 0; i < n.length && i < r.length; i++) {
          var o = Oe(n[i], r[i]);
          if (0 !== o) return o;
        }

        return n.length === r.length ? 0 : n.length < r.length ? -1 : 1;
      }

      function Vt(e, t) {
        if (At(e) !== At(t)) return !1;

        for (var n = e.pieceNum_, r = t.pieceNum_; n <= e.pieces_.length; n++, r++) {
          if (e.pieces_[n] !== t.pieces_[r]) return !1;
        }

        return !0;
      }

      function zt(e, t) {
        var n = e.pieceNum_,
            r = t.pieceNum_;
        if (At(e) > At(t)) return !1;

        for (; n < e.pieces_.length;) {
          if (e.pieces_[n] !== t.pieces_[r]) return !1;
          ++n, ++r;
        }

        return !0;
      }

      var Ht = function Ht(e, t) {
        this.errorPrefix_ = t, this.parts_ = Ft(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);

        for (var n = 0; n < this.parts_.length; n++) {
          this.byteLength_ += V(this.parts_[n]);
        }

        Qt(this);
      };

      function Qt(e) {
        if (e.byteLength_ > Nt) throw new Error(e.errorPrefix_ + "has a key path longer than " + Nt + " bytes (" + e.byteLength_ + ").");
        if (e.parts_.length > Pt) throw new Error(e.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + Pt + ") or object contains a cycle " + Yt(e));
      }

      function Yt(e) {
        return 0 === e.parts_.length ? "" : "in property '" + e.parts_.join(".") + "'";
      }

      var Kt,
          Gt = (n($t, Kt = Tt), $t.getInstance = function () {
        return new $t();
      }, $t.prototype.getInitialEvent = function (e) {
        return g("visible" === e, "Unknown event type: " + e), [this.visible_];
      }, $t);

      function $t() {
        var t,
            e,
            n = Kt.call(this, ["visible"]) || this;
        return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (e = "visibilitychange", t = "hidden") : void 0 !== document.mozHidden ? (e = "mozvisibilitychange", t = "mozHidden") : void 0 !== document.msHidden ? (e = "msvisibilitychange", t = "msHidden") : void 0 !== document.webkitHidden && (e = "webkitvisibilitychange", t = "webkitHidden")), n.visible_ = !0, e && document.addEventListener(e, function () {
          var e = !document[t];
          e !== n.visible_ && (n.visible_ = e, n.trigger("visible", e));
        }, !1), n;
      }

      var Jt,
          Xt = 1e3,
          Zt = 3e5,
          en = (n(tn, Jt = Ct), tn.prototype.sendRequest = function (e, t, n) {
        var r = ++this.requestNumber_,
            t = {
          r: r,
          a: e,
          b: t
        };
        this.log_(x(t)), g(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(t), n && (this.requestCBHash_[r] = n);
      }, tn.prototype.get = function (e) {
        var n = this;
        this.initConnection_();
        var r = new f(),
            i = {
          p: e._path.toString(),
          q: e._queryObject
        },
            t = {
          action: "g",
          request: i,
          onComplete: function onComplete(e) {
            var t = e.d;
            "ok" === e.s ? (n.onDataUpdate_(i.p, t, !1, null), r.resolve(t)) : r.reject(t);
          }
        };
        this.outstandingGets_.push(t), this.outstandingGetCount_++;
        var o = this.outstandingGets_.length - 1;
        return this.connected_ || setTimeout(function () {
          var e = n.outstandingGets_[o];
          void 0 !== e && t === e && (delete n.outstandingGets_[o], n.outstandingGetCount_--, 0 === n.outstandingGetCount_ && (n.outstandingGets_ = []), n.log_("get " + o + " timed out on connection"), r.reject(new Error("Client is offline.")));
        }, 3e3), this.connected_ && this.sendGet_(o), r.promise;
      }, tn.prototype.listen = function (e, t, n, r) {
        this.initConnection_();

        var i = e._queryIdentifier,
            o = e._path.toString();

        this.log_("Listen called for " + o + " " + i), this.listens.has(o) || this.listens.set(o, new Map()), g(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), g(!this.listens.get(o).has(i), "listen() called twice for same path/queryId.");
        n = {
          onComplete: r,
          hashFn: t,
          query: e,
          tag: n
        };
        this.listens.get(o).set(i, n), this.connected_ && this.sendListen_(n);
      }, tn.prototype.sendGet_ = function (t) {
        var n = this,
            r = this.outstandingGets_[t];
        this.sendRequest("g", r.request, function (e) {
          delete n.outstandingGets_[t], n.outstandingGetCount_--, 0 === n.outstandingGetCount_ && (n.outstandingGets_ = []), r.onComplete && r.onComplete(e);
        });
      }, tn.prototype.sendListen_ = function (r) {
        var i = this,
            o = r.query,
            a = o._path.toString(),
            s = o._queryIdentifier;

        this.log_("Listen on " + a + " for " + s);
        var e = {
          p: a
        };
        r.tag && (e.q = o._queryObject, e.t = r.tag), e.h = r.hashFn(), this.sendRequest("q", e, function (e) {
          var t = e.d,
              n = e.s;
          tn.warnOnListenWarnings_(t, o), (i.listens.get(a) && i.listens.get(a).get(s)) === r && (i.log_("listen response", e), "ok" !== n && i.removeListen_(a, s), r.onComplete && r.onComplete(n, t));
        });
      }, tn.warnOnListenWarnings_ = function (e, t) {
        e && "object" == _typeof(e) && D(e, "w") && (e = O(e, "w"), Array.isArray(e) && ~e.indexOf("no_index") && (e = '".indexOn": "' + t._queryParams.getIndex().toString() + '"', t = t._path.toString(), xe("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + e + " at " + t + " to your security rules for better performance.")));
      }, tn.prototype.refreshAuthToken = function (e) {
        this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, function () {}), this.reduceReconnectDelayIfAdminCredential_(e);
      }, tn.prototype.reduceReconnectDelayIfAdminCredential_ = function (e) {
        (e && 40 === e.length || function (e) {
          e = R(e).claims;
          return "object" == _typeof(e) && !0 === e.admin;
        }(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4);
      }, tn.prototype.refreshAppCheckToken = function (e) {
        this.appCheckToken_ = e, this.log_("App check token refreshed"), this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, function () {});
      }, tn.prototype.tryAuth = function () {
        var n,
            e,
            t,
            r = this;
        this.connected_ && this.authToken_ && (e = function (e) {
          e = R(e).claims;
          return !!e && "object" == _typeof(e) && e.hasOwnProperty("iat");
        }(n = this.authToken_) ? "auth" : "gauth", t = {
          cred: n
        }, null === this.authOverride_ ? t.noauth = !0 : "object" == _typeof(this.authOverride_) && (t.authvar = this.authOverride_), this.sendRequest(e, t, function (e) {
          var t = e.s,
              e = e.d || "error";
          r.authToken_ === n && ("ok" === t ? r.invalidAuthTokenCount_ = 0 : r.onAuthRevoked_(t, e));
        }));
      }, tn.prototype.tryAppCheck = function () {
        var n = this;
        this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
          token: this.appCheckToken_
        }, function (e) {
          var t = e.s,
              e = e.d || "error";
          "ok" === t ? n.invalidAppCheckTokenCount_ = 0 : n.onAppCheckRevoked_(t, e);
        });
      }, tn.prototype.unlisten = function (e, t) {
        var n = e._path.toString(),
            r = e._queryIdentifier;

        this.log_("Unlisten called for " + n + " " + r), g(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, e._queryObject, t);
      }, tn.prototype.sendUnlisten_ = function (e, t, n, r) {
        this.log_("Unlisten on " + e + " for " + t);
        e = {
          p: e
        };
        r && (e.q = n, e.t = r), this.sendRequest("n", e);
      }, tn.prototype.onDisconnectPut = function (e, t, n) {
        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, t, n) : this.onDisconnectRequestQueue_.push({
          pathString: e,
          action: "o",
          data: t,
          onComplete: n
        });
      }, tn.prototype.onDisconnectMerge = function (e, t, n) {
        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, t, n) : this.onDisconnectRequestQueue_.push({
          pathString: e,
          action: "om",
          data: t,
          onComplete: n
        });
      }, tn.prototype.onDisconnectCancel = function (e, t) {
        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
          pathString: e,
          action: "oc",
          data: null,
          onComplete: t
        });
      }, tn.prototype.sendOnDisconnect_ = function (e, t, n, r) {
        n = {
          p: t,
          d: n
        };
        this.log_("onDisconnect " + e, n), this.sendRequest(e, n, function (e) {
          r && setTimeout(function () {
            r(e.s, e.d);
          }, Math.floor(0));
        });
      }, tn.prototype.put = function (e, t, n, r) {
        this.putInternal("p", e, t, n, r);
      }, tn.prototype.merge = function (e, t, n, r) {
        this.putInternal("m", e, t, n, r);
      }, tn.prototype.putInternal = function (e, t, n, r, i) {
        this.initConnection_();
        n = {
          p: t,
          d: n
        };
        void 0 !== i && (n.h = i), this.outstandingPuts_.push({
          action: e,
          request: n,
          onComplete: r
        }), this.outstandingPutCount_++;
        r = this.outstandingPuts_.length - 1;
        this.connected_ ? this.sendPut_(r) : this.log_("Buffering put: " + t);
      }, tn.prototype.sendPut_ = function (t) {
        var n = this,
            r = this.outstandingPuts_[t].action,
            e = this.outstandingPuts_[t].request,
            i = this.outstandingPuts_[t].onComplete;
        this.outstandingPuts_[t].queued = this.connected_, this.sendRequest(r, e, function (e) {
          n.log_(r + " response", e), delete n.outstandingPuts_[t], n.outstandingPutCount_--, 0 === n.outstandingPutCount_ && (n.outstandingPuts_ = []), i && i(e.s, e.d);
        });
      }, tn.prototype.reportStats = function (e) {
        var t = this;
        this.connected_ && (this.log_("reportStats", e = {
          c: e
        }), this.sendRequest("s", e, function (e) {
          "ok" !== e.s && (e = e.d, t.log_("reportStats", "Error sending stats: " + e));
        }));
      }, tn.prototype.onDataMessage_ = function (e) {
        if ("r" in e) {
          this.log_("from server: " + x(e));
          var t = e.r,
              n = this.requestCBHash_[t];
          n && (delete this.requestCBHash_[t], n(e.b));
        } else {
          if ("error" in e) throw "A server-side error has occurred: " + e.error;
          "a" in e && this.onDataPush_(e.a, e.b);
        }
      }, tn.prototype.onDataPush_ = function (e, t) {
        this.log_("handleServerMessage", e, t), "d" === e ? this.onDataUpdate_(t.p, t.d, !1, t.t) : "m" === e ? this.onDataUpdate_(t.p, t.d, !0, t.t) : "c" === e ? this.onListenRevoked_(t.p, t.q) : "ac" === e ? this.onAuthRevoked_(t.s, t.d) : "apc" === e ? this.onAppCheckRevoked_(t.s, t.d) : "sd" === e ? this.onSecurityDebugPacket_(t) : de("Unrecognized action received from server: " + x(e) + "\nAre you using the latest client?");
      }, tn.prototype.onReady_ = function (e, t) {
        this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = new Date().getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0);
      }, tn.prototype.scheduleConnect_ = function (e) {
        var t = this;
        g(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(function () {
          t.establishConnectionTimer_ = null, t.establishConnection_();
        }, Math.floor(e));
      }, tn.prototype.initConnection_ = function () {
        !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0);
      }, tn.prototype.onVisible_ = function (e) {
        e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = Xt, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e;
      }, tn.prototype.onOnline_ = function (e) {
        e ? (this.log_("Browser went online."), this.reconnectDelay_ = Xt, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close());
      }, tn.prototype.onRealtimeDisconnect_ = function () {
        var e;
        this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_() && (this.visible_ ? this.lastConnectionEstablishedTime_ && (3e4 < new Date().getTime() - this.lastConnectionEstablishedTime_ && (this.reconnectDelay_ = Xt), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = new Date().getTime()), e = new Date().getTime() - this.lastConnectionAttemptTime_, e = Math.max(0, this.reconnectDelay_ - e), e = Math.random() * e, this.log_("Trying to reconnect in " + e + "ms"), this.scheduleConnect_(e), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)), this.onConnectStatus_(!1);
      }, tn.prototype.establishConnection_ = function () {
        return i(this, void 0, void 0, function () {
          var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u,
              l,
              h,
              c = this;
          return p(this, function (e) {
            switch (e.label) {
              case 0:
                if (!this.shouldReconnect_()) return [3, 4];
                this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = new Date().getTime(), this.lastConnectionEstablishedTime_ = null, t = this.onDataMessage_.bind(this), n = this.onReady_.bind(this), r = this.onRealtimeDisconnect_.bind(this), i = this.id + ":" + tn.nextConnectionId_++, h = this.lastSessionId, o = !1, a = null, s = function s() {
                  a ? a.close() : (o = !0, r());
                }, l = function l(e) {
                  g(a, "sendRequest call when we're not connected not allowed."), a.sendRequest(e);
                }, this.realtime_ = {
                  close: s,
                  sendRequest: l
                }, u = this.forceTokenRefresh_, this.forceTokenRefresh_ = !1, e.label = 1;

              case 1:
                return e.trys.push([1, 3,, 4]), [4, Promise.all([this.authTokenProvider_.getToken(u), this.appCheckTokenProvider_.getToken(u)])];

              case 2:
                return l = y.apply(void 0, [e.sent(), 2]), u = l[0], l = l[1], o ? ke("getToken() completed but was canceled") : (ke("getToken() completed. Creating connection."), this.authToken_ = u && u.accessToken, this.appCheckToken_ = l && l.token, a = new mt(i, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, t, n, r, function (e) {
                  xe(e + " (" + c.repoInfo_.toString() + ")"), c.interrupt("server_kill");
                }, h)), [3, 4];

              case 3:
                return h = e.sent(), this.log_("Failed to get token: " + h), o || (this.repoInfo_.nodeAdmin && xe(h), s()), [3, 4];

              case 4:
                return [2];
            }
          });
        });
      }, tn.prototype.interrupt = function (e) {
        ke("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_());
      }, tn.prototype.resume = function (e) {
        ke("Resuming connection for reason: " + e), delete this.interruptReasons_[e], A(this.interruptReasons_) && (this.reconnectDelay_ = Xt, this.realtime_ || this.scheduleConnect_(0));
      }, tn.prototype.handleTimestamp_ = function (e) {
        e -= new Date().getTime();
        this.onServerInfoUpdate_({
          serverTimeOffset: e
        });
      }, tn.prototype.cancelSentTransactions_ = function () {
        for (var e = 0; e < this.outstandingPuts_.length; e++) {
          var t = this.outstandingPuts_[e];
          t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.outstandingPuts_[e], this.outstandingPutCount_--);
        }

        0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []);
      }, tn.prototype.onListenRevoked_ = function (e, t) {
        t = t ? t.map(function (e) {
          return Ae(e);
        }).join("$") : "default", t = this.removeListen_(e, t);
        t && t.onComplete && t.onComplete("permission_denied");
      }, tn.prototype.removeListen_ = function (e, t) {
        var n,
            r = new xt(e).toString();
        return this.listens.has(r) ? (n = (e = this.listens.get(r)).get(t), e["delete"](t), 0 === e.size && this.listens["delete"](r)) : n = void 0, n;
      }, tn.prototype.onAuthRevoked_ = function (e, t) {
        ke("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== e && "permission_denied" !== e || (this.invalidAuthTokenCount_++, 3 <= this.invalidAuthTokenCount_ && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()));
      }, tn.prototype.onAppCheckRevoked_ = function (e, t) {
        ke("App check token revoked: " + e + "/" + t), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, "invalid_token" !== e && "permission_denied" !== e || (this.invalidAppCheckTokenCount_++, 3 <= this.invalidAppCheckTokenCount_ && this.appCheckTokenProvider_.notifyForInvalidToken());
      }, tn.prototype.onSecurityDebugPacket_ = function (e) {
        this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg" in e && console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "));
      }, tn.prototype.restoreState_ = function () {
        var t, e, n, r;
        this.tryAuth(), this.tryAppCheck();

        try {
          for (var i = _(this.listens.values()), o = i.next(); !o.done; o = i.next()) {
            var a = o.value;

            try {
              for (var s = (n = void 0, _(a.values())), u = s.next(); !u.done; u = s.next()) {
                var l = u.value;
                this.sendListen_(l);
              }
            } catch (e) {
              n = {
                error: e
              };
            } finally {
              try {
                u && !u.done && (r = s["return"]) && r.call(s);
              } finally {
                if (n) throw n.error;
              }
            }
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            o && !o.done && (e = i["return"]) && e.call(i);
          } finally {
            if (t) throw t.error;
          }
        }

        for (var h = 0; h < this.outstandingPuts_.length; h++) {
          this.outstandingPuts_[h] && this.sendPut_(h);
        }

        for (; this.onDisconnectRequestQueue_.length;) {
          var c = this.onDisconnectRequestQueue_.shift();
          this.sendOnDisconnect_(c.action, c.pathString, c.data, c.onComplete);
        }

        for (h = 0; h < this.outstandingGets_.length; h++) {
          this.outstandingGets_[h] && this.sendGet_(h);
        }
      }, tn.prototype.sendConnectStats_ = function () {
        var e = {};
        e["sdk.js." + oe.replace(/\./g, "-")] = 1, w() ? e["framework.cordova"] = 1 : "object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && "ReactNative" === navigator.product && (e["framework.reactnative"] = 1), this.reportStats(e);
      }, tn.prototype.shouldReconnect_ = function () {
        var e = St.getInstance().currentlyOnline();
        return A(this.interruptReasons_) && e;
      }, tn.nextPersistentConnectionId_ = 0, tn.nextConnectionId_ = 0, tn);

      function tn(e, t, n, r, i, o, a, s) {
        var u = Jt.call(this) || this;
        if (u.repoInfo_ = e, u.applicationId_ = t, u.onDataUpdate_ = n, u.onConnectStatus_ = r, u.onServerInfoUpdate_ = i, u.authTokenProvider_ = o, u.appCheckTokenProvider_ = a, u.authOverride_ = s, u.id = tn.nextPersistentConnectionId_++, u.log_ = Pe("p:" + u.id + ":"), u.interruptReasons_ = {}, u.listens = new Map(), u.outstandingPuts_ = [], u.outstandingGets_ = [], u.outstandingPutCount_ = 0, u.outstandingGetCount_ = 0, u.onDisconnectRequestQueue_ = [], u.connected_ = !1, u.reconnectDelay_ = Xt, u.maxReconnectDelay_ = Zt, u.securityDebugCallback_ = null, u.lastSessionId = null, u.establishConnectionTimer_ = null, u.visible_ = !1, u.requestCBHash_ = {}, u.requestNumber_ = 0, u.realtime_ = null, u.authToken_ = null, u.appCheckToken_ = null, u.forceTokenRefresh_ = !1, u.invalidAuthTokenCount_ = 0, u.invalidAppCheckTokenCount_ = 0, u.firstConnection_ = !0, u.lastConnectionAttemptTime_ = null, u.lastConnectionEstablishedTime_ = null, s && !C()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
        return Gt.getInstance().on("visible", u.onVisible_, u), -1 === e.host.indexOf("fblocal") && St.getInstance().on("online", u.onOnline_, u), u;
      }

      var nn = (rn.Wrap = function (e, t) {
        return new rn(e, t);
      }, rn);

      function rn(e, t) {
        this.name = e, this.node = t;
      }

      var on,
          me = (an.prototype.getCompare = function () {
        return this.compare.bind(this);
      }, an.prototype.indexedValueChanged = function (e, t) {
        e = new nn(Re, e), t = new nn(Re, t);
        return 0 !== this.compare(e, t);
      }, an.prototype.minPost = function () {
        return nn.MIN;
      }, an);

      function an() {}

      var sn,
          re = (n(un, sn = me), Object.defineProperty(un, "__EMPTY_NODE", {
        get: function get() {
          return on;
        },
        set: function set(e) {
          on = e;
        },
        enumerable: !1,
        configurable: !0
      }), un.prototype.compare = function (e, t) {
        return Oe(e.name, t.name);
      }, un.prototype.isDefinedOn = function (e) {
        throw m("KeyIndex.isDefinedOn not expected to be called.");
      }, un.prototype.indexedValueChanged = function (e, t) {
        return !1;
      }, un.prototype.minPost = function () {
        return nn.MIN;
      }, un.prototype.maxPost = function () {
        return new nn(De, on);
      }, un.prototype.makePost = function (e, t) {
        return g("string" == typeof e, "KeyIndex indexValue must always be a string."), new nn(e, on);
      }, un.prototype.toString = function () {
        return ".key";
      }, un);

      function un() {
        return null !== sn && sn.apply(this, arguments) || this;
      }

      var ln = new re(),
          hn = (cn.prototype.getNext = function () {
        if (0 === this.nodeStack_.length) return null;
        var e = this.nodeStack_.pop(),
            t = this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
          key: e.key,
          value: e.value
        };
        if (this.isReverse_) for (e = e.left; !e.isEmpty();) {
          this.nodeStack_.push(e), e = e.right;
        } else for (e = e.right; !e.isEmpty();) {
          this.nodeStack_.push(e), e = e.left;
        }
        return t;
      }, cn.prototype.hasNext = function () {
        return 0 < this.nodeStack_.length;
      }, cn.prototype.peek = function () {
        if (0 === this.nodeStack_.length) return null;
        var e = this.nodeStack_[this.nodeStack_.length - 1];
        return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
          key: e.key,
          value: e.value
        };
      }, cn);

      function cn(e, t, n, r, i) {
        void 0 === i && (i = null), this.isReverse_ = r, this.resultGenerator_ = i, this.nodeStack_ = [];

        for (var o = 1; !e.isEmpty();) {
          if (o = t ? n(e.key, t) : 1, r && (o *= -1), o < 0) e = this.isReverse_ ? e.left : e.right;else {
            if (0 === o) {
              this.nodeStack_.push(e);
              break;
            }

            this.nodeStack_.push(e), e = this.isReverse_ ? e.right : e.left;
          }
        }
      }

      var pn = (dn.prototype.copy = function (e, t, n, r, i) {
        return new dn(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right);
      }, dn.prototype.count = function () {
        return this.left.count() + 1 + this.right.count();
      }, dn.prototype.isEmpty = function () {
        return !1;
      }, dn.prototype.inorderTraversal = function (e) {
        return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e);
      }, dn.prototype.reverseTraversal = function (e) {
        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
      }, dn.prototype.min_ = function () {
        return this.left.isEmpty() ? this : this.left.min_();
      }, dn.prototype.minKey = function () {
        return this.min_().key;
      }, dn.prototype.maxKey = function () {
        return this.right.isEmpty() ? this.key : this.right.maxKey();
      }, dn.prototype.insert = function (e, t, n) {
        var r = this,
            i = n(e, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n))).fixUp_();
      }, dn.prototype.removeMin_ = function () {
        if (this.left.isEmpty()) return yn.EMPTY_NODE;
        var e = this;
        return (e = (e = !e.left.isRed_() && !e.left.left.isRed_() ? e.moveRedLeft_() : e).copy(null, null, null, e.left.removeMin_(), null)).fixUp_();
      }, dn.prototype.remove = function (e, t) {
        var n,
            r = this;
        if (t(e, r.key) < 0) r = (r = !(r.left.isEmpty() || r.left.isRed_() || r.left.left.isRed_()) ? r.moveRedLeft_() : r).copy(null, null, null, r.left.remove(e, t), null);else {
          if (0 === t(e, (r = !((r = r.left.isRed_() ? r.rotateRight_() : r).right.isEmpty() || r.right.isRed_() || r.right.left.isRed_()) ? r.moveRedRight_() : r).key)) {
            if (r.right.isEmpty()) return yn.EMPTY_NODE;
            n = r.right.min_(), r = r.copy(n.key, n.value, null, null, r.right.removeMin_());
          }

          r = r.copy(null, null, null, null, r.right.remove(e, t));
        }
        return r.fixUp_();
      }, dn.prototype.isRed_ = function () {
        return this.color;
      }, dn.prototype.fixUp_ = function () {
        var e = this;
        return e = (e = (e = e.right.isRed_() && !e.left.isRed_() ? e.rotateLeft_() : e).left.isRed_() && e.left.left.isRed_() ? e.rotateRight_() : e).left.isRed_() && e.right.isRed_() ? e.colorFlip_() : e;
      }, dn.prototype.moveRedLeft_ = function () {
        var e = this.colorFlip_();
        return e = e.right.left.isRed_() ? (e = (e = e.copy(null, null, null, null, e.right.rotateRight_())).rotateLeft_()).colorFlip_() : e;
      }, dn.prototype.moveRedRight_ = function () {
        var e = this.colorFlip_();
        return e = e.left.left.isRed_() ? (e = e.rotateRight_()).colorFlip_() : e;
      }, dn.prototype.rotateLeft_ = function () {
        var e = this.copy(null, null, dn.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
      }, dn.prototype.rotateRight_ = function () {
        var e = this.copy(null, null, dn.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
      }, dn.prototype.colorFlip_ = function () {
        var e = this.left.copy(null, null, !this.left.color, null, null),
            t = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, e, t);
      }, dn.prototype.checkMaxDepth_ = function () {
        var e = this.check_();
        return Math.pow(2, e) <= this.count() + 1;
      }, dn.prototype.check_ = function () {
        if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
        if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
        var e = this.left.check_();
        if (e !== this.right.check_()) throw new Error("Black depths differ");
        return e + (this.isRed_() ? 0 : 1);
      }, dn.RED = !0, dn.BLACK = !1, dn);

      function dn(e, t, n, r, i) {
        this.key = e, this.value = t, this.color = null != n ? n : dn.RED, this.left = null != r ? r : yn.EMPTY_NODE, this.right = null != i ? i : yn.EMPTY_NODE;
      }

      fn.prototype.copy = function (e, t, n, r, i) {
        return this;
      }, fn.prototype.insert = function (e, t, n) {
        return new pn(e, t, null);
      }, fn.prototype.remove = function (e, t) {
        return this;
      }, fn.prototype.count = function () {
        return 0;
      }, fn.prototype.isEmpty = function () {
        return !0;
      }, fn.prototype.inorderTraversal = function (e) {
        return !1;
      }, fn.prototype.reverseTraversal = function (e) {
        return !1;
      }, fn.prototype.minKey = function () {
        return null;
      }, fn.prototype.maxKey = function () {
        return null;
      }, fn.prototype.check_ = function () {
        return 0;
      }, fn.prototype.isRed_ = function () {
        return !1;
      }, Tt = fn;

      function fn() {}

      var _n,
          yn = (vn.prototype.insert = function (e, t) {
        return new vn(this.comparator_, this.root_.insert(e, t, this.comparator_).copy(null, null, pn.BLACK, null, null));
      }, vn.prototype.remove = function (e) {
        return new vn(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, pn.BLACK, null, null));
      }, vn.prototype.get = function (e) {
        for (var t, n = this.root_; !n.isEmpty();) {
          if (0 === (t = this.comparator_(e, n.key))) return n.value;
          t < 0 ? n = n.left : 0 < t && (n = n.right);
        }

        return null;
      }, vn.prototype.getPredecessorKey = function (e) {
        for (var t, n = this.root_, r = null; !n.isEmpty();) {
          if (0 === (t = this.comparator_(e, n.key))) {
            if (n.left.isEmpty()) return r ? r.key : null;

            for (n = n.left; !n.right.isEmpty();) {
              n = n.right;
            }

            return n.key;
          }

          t < 0 ? n = n.left : 0 < t && (n = (r = n).right);
        }

        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
      }, vn.prototype.isEmpty = function () {
        return this.root_.isEmpty();
      }, vn.prototype.count = function () {
        return this.root_.count();
      }, vn.prototype.minKey = function () {
        return this.root_.minKey();
      }, vn.prototype.maxKey = function () {
        return this.root_.maxKey();
      }, vn.prototype.inorderTraversal = function (e) {
        return this.root_.inorderTraversal(e);
      }, vn.prototype.reverseTraversal = function (e) {
        return this.root_.reverseTraversal(e);
      }, vn.prototype.getIterator = function (e) {
        return new hn(this.root_, null, this.comparator_, !1, e);
      }, vn.prototype.getIteratorFrom = function (e, t) {
        return new hn(this.root_, e, this.comparator_, !1, t);
      }, vn.prototype.getReverseIteratorFrom = function (e, t) {
        return new hn(this.root_, e, this.comparator_, !0, t);
      }, vn.prototype.getReverseIterator = function (e) {
        return new hn(this.root_, null, this.comparator_, !0, e);
      }, vn.EMPTY_NODE = new Tt(), vn);

      function vn(e, t) {
        void 0 === t && (t = vn.EMPTY_NODE), this.comparator_ = e, this.root_ = t;
      }

      function gn(e, t) {
        return Oe(e.name, t.name);
      }

      function mn(e, t) {
        return Oe(e, t);
      }

      function wn(e) {
        return "number" == typeof e ? "number:" + Me(e) : "string:" + e;
      }

      var Cn,
          bn,
          Tn,
          En,
          In = function In(e) {
        var t;
        e.isLeafNode() ? (t = e.val(), g("string" == typeof t || "number" == typeof t || "object" == _typeof(t) && D(t, ".sv"), "Priority must be a string or number.")) : g(e === _n || e.isEmpty(), "priority of unexpected type."), g(e === _n || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
      },
          Sn = (Object.defineProperty(kn, "__childrenNodeConstructor", {
        get: function get() {
          return Cn;
        },
        set: function set(e) {
          Cn = e;
        },
        enumerable: !1,
        configurable: !0
      }), kn.prototype.isLeafNode = function () {
        return !0;
      }, kn.prototype.getPriority = function () {
        return this.priorityNode_;
      }, kn.prototype.updatePriority = function (e) {
        return new kn(this.value_, e);
      }, kn.prototype.getImmediateChild = function (e) {
        return ".priority" === e ? this.priorityNode_ : kn.__childrenNodeConstructor.EMPTY_NODE;
      }, kn.prototype.getChild = function (e) {
        return jt(e) ? this : ".priority" === Ot(e) ? this.priorityNode_ : kn.__childrenNodeConstructor.EMPTY_NODE;
      }, kn.prototype.hasChild = function () {
        return !1;
      }, kn.prototype.getPredecessorChildName = function (e, t) {
        return null;
      }, kn.prototype.updateImmediateChild = function (e, t) {
        return ".priority" === e ? this.updatePriority(t) : t.isEmpty() && ".priority" !== e ? this : kn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, t).updatePriority(this.priorityNode_);
      }, kn.prototype.updateChild = function (e, t) {
        var n = Ot(e);
        return null === n ? t : t.isEmpty() && ".priority" !== n ? this : (g(".priority" !== n || 1 === At(e), ".priority must be the last token in a path"), this.updateImmediateChild(n, kn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Lt(e), t)));
      }, kn.prototype.isEmpty = function () {
        return !1;
      }, kn.prototype.numChildren = function () {
        return 0;
      }, kn.prototype.forEachChild = function (e, t) {
        return !1;
      }, kn.prototype.val = function (e) {
        return e && !this.getPriority().isEmpty() ? {
          ".value": this.getValue(),
          ".priority": this.getPriority().val()
        } : this.getValue();
      }, kn.prototype.hash = function () {
        var e, t;
        return null === this.lazyHash_ && (e = "", this.priorityNode_.isEmpty() || (e += "priority:" + wn(this.priorityNode_.val()) + ":"), e += (t = _typeof(this.value_)) + ":", e += "number" == t ? Me(this.value_) : this.value_, this.lazyHash_ = ce(e)), this.lazyHash_;
      }, kn.prototype.getValue = function () {
        return this.value_;
      }, kn.prototype.compareTo = function (e) {
        return e === kn.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof kn.__childrenNodeConstructor ? -1 : (g(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
      }, kn.prototype.compareToLeafNode_ = function (e) {
        var t = _typeof(e.value_),
            n = _typeof(this.value_),
            r = kn.VALUE_TYPE_ORDER.indexOf(t),
            i = kn.VALUE_TYPE_ORDER.indexOf(n);

        return g(0 <= r, "Unknown leaf type: " + t), g(0 <= i, "Unknown leaf type: " + n), r === i ? "object" == n ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : i - r;
      }, kn.prototype.withIndex = function () {
        return this;
      }, kn.prototype.isIndexed = function () {
        return !0;
      }, kn.prototype.equals = function (e) {
        return e === this || !!e.isLeafNode() && this.value_ === e.value_ && this.priorityNode_.equals(e.priorityNode_);
      }, kn.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], kn);

      function kn(e, t) {
        void 0 === t && (t = kn.__childrenNodeConstructor.EMPTY_NODE), this.value_ = e, this.priorityNode_ = t, this.lazyHash_ = null, g(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), In(this.priorityNode_);
      }

      function Pn() {
        return null !== En && En.apply(this, arguments) || this;
      }

      var Nn = new (n(Pn, En = me), Pn.prototype.compare = function (e, t) {
        var n = e.node.getPriority(),
            r = t.node.getPriority(),
            r = n.compareTo(r);
        return 0 === r ? Oe(e.name, t.name) : r;
      }, Pn.prototype.isDefinedOn = function (e) {
        return !e.getPriority().isEmpty();
      }, Pn.prototype.indexedValueChanged = function (e, t) {
        return !e.getPriority().equals(t.getPriority());
      }, Pn.prototype.minPost = function () {
        return nn.MIN;
      }, Pn.prototype.maxPost = function () {
        return new nn(De, new Sn("[PRIORITY-POST]", Tn));
      }, Pn.prototype.makePost = function (e, t) {
        e = bn(e);
        return new nn(t, new Sn("[PRIORITY-POST]", e));
      }, Pn.prototype.toString = function () {
        return ".priority";
      }, Pn)(),
          xn = Math.log(2),
          Rn = (Dn.prototype.nextBitIsOne = function () {
        var e = !(this.bits_ & 1 << this.current_);
        return this.current_--, e;
      }, Dn);

      function Dn(e) {
        var t;
        this.count = (t = e + 1, parseInt(Math.log(t) / xn, 10)), this.current_ = this.count - 1;
        var n,
            r = (n = this.count, parseInt(Array(n + 1).join("1"), 2));
        this.bits_ = e + 1 & r;
      }

      var On,
          An,
          Ln = function Ln(l, e, h, t) {
        l.sort(e);

        var c = function c(e, t) {
          var n = t - e;
          if (0 == n) return null;
          if (1 == n) return r = l[e], i = h ? h(r) : r, new pn(i, r.node, pn.BLACK, null, null);
          var n = parseInt(n / 2, 10) + e,
              e = c(e, n),
              t = c(n + 1, t),
              r = l[n],
              i = h ? h(r) : r;
          return new pn(i, r.node, pn.BLACK, e, t);
        },
            n = function (e) {
          for (var t = null, n = null, i = l.length, r = function r(e, t) {
            var n = i - e,
                r = i;
            i -= e;
            e = c(1 + n, r), r = l[n], n = h ? h(r) : r;
            o(new pn(n, r.node, t, null, e));
          }, o = function o(e) {
            t = t ? t.left = e : n = e;
          }, a = 0; a < e.count; ++a) {
            var s = e.nextBitIsOne(),
                u = Math.pow(2, e.count - (a + 1));
            s ? r(u, pn.BLACK) : (r(u, pn.BLACK), r(u, pn.RED));
          }

          return n;
        }(new Rn(l.length));

        return new yn(t || e, n);
      },
          Mn = {},
          Fn = (Object.defineProperty(qn, "Default", {
        get: function get() {
          return g(Nn, "ChildrenNode.ts has not been loaded"), On = On || new qn({
            ".priority": Mn
          }, {
            ".priority": Nn
          });
        },
        enumerable: !1,
        configurable: !0
      }), qn.prototype.get = function (e) {
        var t = O(this.indexes_, e);
        if (!t) throw new Error("No index defined for " + e);
        return t instanceof yn ? t : null;
      }, qn.prototype.hasIndex = function (e) {
        return D(this.indexSet_, e.toString());
      }, qn.prototype.addIndex = function (e, t) {
        g(e !== ln, "KeyIndex always exists and isn't meant to be added to the IndexMap.");

        for (var n = [], r = !1, i = t.getIterator(nn.Wrap), o = i.getNext(); o;) {
          r = r || e.isDefinedOn(o.node), n.push(o), o = i.getNext();
        }

        var a = r ? Ln(n, e.getCompare()) : Mn,
            s = e.toString(),
            u = _l({}, this.indexSet_);

        u[s] = e;
        t = _l({}, this.indexes_);
        return t[s] = a, new qn(t, u);
      }, qn.prototype.addToIndexes = function (a, s) {
        var u = this;
        return new qn(L(this.indexes_, function (e, t) {
          var n = O(u.indexSet_, t);

          if (g(n, "Missing index implementation for " + t), e === Mn) {
            if (n.isDefinedOn(a.node)) {
              for (var r = [], i = s.getIterator(nn.Wrap), o = i.getNext(); o;) {
                o.name !== a.name && r.push(o), o = i.getNext();
              }

              return r.push(a), Ln(r, n.getCompare());
            }

            return Mn;
          }

          t = s.get(a.name), n = e;
          return (n = t ? e.remove(new nn(a.name, t)) : n).insert(a, a.node);
        }), this.indexSet_);
      }, qn.prototype.removeFromIndexes = function (n, r) {
        return new qn(L(this.indexes_, function (e) {
          if (e === Mn) return e;
          var t = r.get(n.name);
          return t ? e.remove(new nn(n.name, t)) : e;
        }), this.indexSet_);
      }, qn);

      function qn(e, t) {
        this.indexes_ = e, this.indexSet_ = t;
      }

      var Wn,
          jn = (Object.defineProperty(Un, "EMPTY_NODE", {
        get: function get() {
          return An = An || new Un(new yn(mn), null, Fn.Default);
        },
        enumerable: !1,
        configurable: !0
      }), Un.prototype.isLeafNode = function () {
        return !1;
      }, Un.prototype.getPriority = function () {
        return this.priorityNode_ || An;
      }, Un.prototype.updatePriority = function (e) {
        return this.children_.isEmpty() ? this : new Un(this.children_, e, this.indexMap_);
      }, Un.prototype.getImmediateChild = function (e) {
        if (".priority" === e) return this.getPriority();
        e = this.children_.get(e);
        return null === e ? An : e;
      }, Un.prototype.getChild = function (e) {
        var t = Ot(e);
        return null === t ? this : this.getImmediateChild(t).getChild(Lt(e));
      }, Un.prototype.hasChild = function (e) {
        return null !== this.children_.get(e);
      }, Un.prototype.updateImmediateChild = function (e, t) {
        if (g(t, "We should always be passing snapshot nodes"), ".priority" === e) return this.updatePriority(t);
        var n = new nn(e, t),
            r = void 0,
            i = void 0,
            i = t.isEmpty() ? (r = this.children_.remove(e), this.indexMap_.removeFromIndexes(n, this.children_)) : (r = this.children_.insert(e, t), this.indexMap_.addToIndexes(n, this.children_)),
            n = r.isEmpty() ? An : this.priorityNode_;
        return new Un(r, n, i);
      }, Un.prototype.updateChild = function (e, t) {
        var n = Ot(e);
        if (null === n) return t;
        g(".priority" !== Ot(e) || 1 === At(e), ".priority must be the last token in a path");
        t = this.getImmediateChild(n).updateChild(Lt(e), t);
        return this.updateImmediateChild(n, t);
      }, Un.prototype.isEmpty = function () {
        return this.children_.isEmpty();
      }, Un.prototype.numChildren = function () {
        return this.children_.count();
      }, Un.prototype.val = function (n) {
        if (this.isEmpty()) return null;
        var r = {},
            i = 0,
            o = 0,
            a = !0;

        if (this.forEachChild(Nn, function (e, t) {
          r[e] = t.val(n), i++, a && Un.INTEGER_REGEXP_.test(e) ? o = Math.max(o, Number(e)) : a = !1;
        }), !n && a && o < 2 * i) {
          var e,
              t = [];

          for (e in r) {
            t[e] = r[e];
          }

          return t;
        }

        return n && !this.getPriority().isEmpty() && (r[".priority"] = this.getPriority().val()), r;
      }, Un.prototype.hash = function () {
        var n;
        return null === this.lazyHash_ && (n = "", this.getPriority().isEmpty() || (n += "priority:" + wn(this.getPriority().val()) + ":"), this.forEachChild(Nn, function (e, t) {
          t = t.hash();
          "" !== t && (n += ":" + e + ":" + t);
        }), this.lazyHash_ = "" === n ? "" : ce(n)), this.lazyHash_;
      }, Un.prototype.getPredecessorChildName = function (e, t, n) {
        n = this.resolveIndex_(n);

        if (n) {
          t = n.getPredecessorKey(new nn(e, t));
          return t ? t.name : null;
        }

        return this.children_.getPredecessorKey(e);
      }, Un.prototype.getFirstChildName = function (e) {
        e = this.resolveIndex_(e);

        if (e) {
          e = e.minKey();
          return e && e.name;
        }

        return this.children_.minKey();
      }, Un.prototype.getFirstChild = function (e) {
        e = this.getFirstChildName(e);
        return e ? new nn(e, this.children_.get(e)) : null;
      }, Un.prototype.getLastChildName = function (e) {
        e = this.resolveIndex_(e);

        if (e) {
          e = e.maxKey();
          return e && e.name;
        }

        return this.children_.maxKey();
      }, Un.prototype.getLastChild = function (e) {
        e = this.getLastChildName(e);
        return e ? new nn(e, this.children_.get(e)) : null;
      }, Un.prototype.forEachChild = function (e, t) {
        e = this.resolveIndex_(e);
        return e ? e.inorderTraversal(function (e) {
          return t(e.name, e.node);
        }) : this.children_.inorderTraversal(t);
      }, Un.prototype.getIterator = function (e) {
        return this.getIteratorFrom(e.minPost(), e);
      }, Un.prototype.getIteratorFrom = function (e, t) {
        var n = this.resolveIndex_(t);
        if (n) return n.getIteratorFrom(e, function (e) {
          return e;
        });

        for (var r = this.children_.getIteratorFrom(e.name, nn.Wrap), i = r.peek(); null != i && t.compare(i, e) < 0;) {
          r.getNext(), i = r.peek();
        }

        return r;
      }, Un.prototype.getReverseIterator = function (e) {
        return this.getReverseIteratorFrom(e.maxPost(), e);
      }, Un.prototype.getReverseIteratorFrom = function (e, t) {
        var n = this.resolveIndex_(t);
        if (n) return n.getReverseIteratorFrom(e, function (e) {
          return e;
        });

        for (var r = this.children_.getReverseIteratorFrom(e.name, nn.Wrap), i = r.peek(); null != i && 0 < t.compare(i, e);) {
          r.getNext(), i = r.peek();
        }

        return r;
      }, Un.prototype.compareTo = function (e) {
        return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === Vn ? -1 : 0;
      }, Un.prototype.withIndex = function (e) {
        if (e === ln || this.indexMap_.hasIndex(e)) return this;
        e = this.indexMap_.addIndex(e, this.children_);
        return new Un(this.children_, this.priorityNode_, e);
      }, Un.prototype.isIndexed = function (e) {
        return e === ln || this.indexMap_.hasIndex(e);
      }, Un.prototype.equals = function (e) {
        if (e === this) return !0;
        if (e.isLeafNode()) return !1;

        if (this.getPriority().equals(e.getPriority())) {
          if (this.children_.count() !== e.children_.count()) return !1;

          for (var t = this.getIterator(Nn), n = e.getIterator(Nn), r = t.getNext(), i = n.getNext(); r && i;) {
            if (r.name !== i.name || !r.node.equals(i.node)) return !1;
            r = t.getNext(), i = n.getNext();
          }

          return null === r && null === i;
        }

        return !1;
      }, Un.prototype.resolveIndex_ = function (e) {
        return e === ln ? null : this.indexMap_.get(e.toString());
      }, Un.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/, Un);

      function Un(e, t, n) {
        this.children_ = e, this.priorityNode_ = t, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && In(this.priorityNode_), this.children_.isEmpty() && g(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
      }

      function Bn() {
        return Wn.call(this, new yn(mn), jn.EMPTY_NODE, Fn.Default) || this;
      }

      var Vn = new (n(Bn, Wn = jn), Bn.prototype.compareTo = function (e) {
        return e === this ? 0 : 1;
      }, Bn.prototype.equals = function (e) {
        return e === this;
      }, Bn.prototype.getPriority = function () {
        return this;
      }, Bn.prototype.getImmediateChild = function (e) {
        return jn.EMPTY_NODE;
      }, Bn.prototype.isEmpty = function () {
        return !1;
      }, Bn)();
      Object.defineProperties(nn, {
        MIN: {
          value: new nn(Re, jn.EMPTY_NODE)
        },
        MAX: {
          value: new nn(De, Vn)
        }
      }), re.__EMPTY_NODE = jn.EMPTY_NODE, Sn.__childrenNodeConstructor = jn, Tn = _n = Vn;
      var zn = !0;

      function Hn(n, e) {
        if (void 0 === e && (e = null), null === n) return jn.EMPTY_NODE;
        if ("object" == _typeof(n) && ".priority" in n && (e = n[".priority"]), g(null === e || "string" == typeof e || "number" == typeof e || "object" == _typeof(e) && ".sv" in e, "Invalid priority type found: " + _typeof(e)), "object" != _typeof(n = "object" == _typeof(n) && ".value" in n && null !== n[".value"] ? n[".value"] : n) || ".sv" in n) return new Sn(n, Hn(e));

        if (n instanceof Array || !zn) {
          var r = jn.EMPTY_NODE;
          return Le(n, function (e, t) {
            D(n, e) && "." !== e.substring(0, 1) && (!(t = Hn(t)).isLeafNode() && t.isEmpty() || (r = r.updateImmediateChild(e, t)));
          }), r.updatePriority(Hn(e));
        }

        var i = [],
            o = !1;
        if (Le(n, function (e, t) {
          "." !== e.substring(0, 1) && ((t = Hn(t)).isEmpty() || (o = o || !t.getPriority().isEmpty(), i.push(new nn(e, t))));
        }), 0 === i.length) return jn.EMPTY_NODE;
        var t = Ln(i, gn, function (e) {
          return e.name;
        }, mn);

        if (o) {
          var a = Ln(i, Nn.getCompare());
          return new jn(t, Hn(e), new Fn({
            ".priority": a
          }, {
            ".priority": Nn
          }));
        }

        return new jn(t, Hn(e), Fn.Default);
      }

      bn = Hn;
      var Qn,
          Yn,
          Kn = (n(Gn, Qn = me), Gn.prototype.extractChild = function (e) {
        return e.getChild(this.indexPath_);
      }, Gn.prototype.isDefinedOn = function (e) {
        return !e.getChild(this.indexPath_).isEmpty();
      }, Gn.prototype.compare = function (e, t) {
        var n = this.extractChild(e.node),
            r = this.extractChild(t.node),
            r = n.compareTo(r);
        return 0 === r ? Oe(e.name, t.name) : r;
      }, Gn.prototype.makePost = function (e, t) {
        e = Hn(e), e = jn.EMPTY_NODE.updateChild(this.indexPath_, e);
        return new nn(t, e);
      }, Gn.prototype.maxPost = function () {
        var e = jn.EMPTY_NODE.updateChild(this.indexPath_, Vn);
        return new nn(De, e);
      }, Gn.prototype.toString = function () {
        return Ft(this.indexPath_, 0).join("/");
      }, Gn);

      function Gn(e) {
        var t = Qn.call(this) || this;
        return t.indexPath_ = e, g(!jt(e) && ".priority" !== Ot(e), "Can't create PathIndex with empty path or .priority key"), t;
      }

      function $n() {
        return null !== Yn && Yn.apply(this, arguments) || this;
      }

      function Jn(e) {
        if (e === "" + je) return "-";
        var t = Ue(e);
        if (null != t) return "" + (t + 1);

        for (var n = new Array(e.length), r = 0; r < n.length; r++) {
          n[r] = e.charAt(r);
        }

        if (n.length < 786) return n.push("-"), n.join("");

        for (var i = n.length - 1; 0 <= i && "z" === n[i];) {
          i--;
        }

        return -1 === i ? De : (t = n[i], t = nr.charAt(nr.indexOf(t) + 1), n[i] = t, n.slice(0, i + 1).join(""));
      }

      function Xn(e) {
        if (e === "" + We) return Re;
        var t = Ue(e);
        if (null != t) return "" + (t - 1);

        for (var n = new Array(e.length), r = 0; r < n.length; r++) {
          n[r] = e.charAt(r);
        }

        return "-" === n[n.length - 1] ? 1 === n.length ? "" + je : (delete n[n.length - 1], n.join("")) : (n[n.length - 1] = nr.charAt(nr.indexOf(n[n.length - 1]) - 1), n.join("") + "z".repeat(786 - n.length));
      }

      var Zn,
          er,
          tr = new (n($n, Yn = me), $n.prototype.compare = function (e, t) {
        var n = e.node.compareTo(t.node);
        return 0 === n ? Oe(e.name, t.name) : n;
      }, $n.prototype.isDefinedOn = function (e) {
        return !0;
      }, $n.prototype.indexedValueChanged = function (e, t) {
        return !e.equals(t);
      }, $n.prototype.minPost = function () {
        return nn.MIN;
      }, $n.prototype.maxPost = function () {
        return nn.MAX;
      }, $n.prototype.makePost = function (e, t) {
        e = Hn(e);
        return new nn(t, e);
      }, $n.prototype.toString = function () {
        return ".value";
      }, $n)(),
          nr = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
          rr = (Zn = 0, er = [], function (e) {
        var t = e === Zn;
        Zn = e;

        for (var n = new Array(8), r = 7; 0 <= r; r--) {
          n[r] = nr.charAt(e % 64), e = Math.floor(e / 64);
        }

        g(0 === e, "Cannot push at time == 0");
        var i = n.join("");

        if (t) {
          for (r = 11; 0 <= r && 63 === er[r]; r--) {
            er[r] = 0;
          }

          er[r]++;
        } else for (r = 0; r < 12; r++) {
          er[r] = Math.floor(64 * Math.random());
        }

        for (r = 0; r < 12; r++) {
          i += nr.charAt(er[r]);
        }

        return g(20 === i.length, "nextPushId: Length should be 20."), i;
      });

      function ir(e) {
        return {
          type: "value",
          snapshotNode: e
        };
      }

      function or(e, t) {
        return {
          type: "child_added",
          snapshotNode: t,
          childName: e
        };
      }

      function ar(e, t) {
        return {
          type: "child_removed",
          snapshotNode: t,
          childName: e
        };
      }

      function sr(e, t, n) {
        return {
          type: "child_changed",
          snapshotNode: t,
          childName: e,
          oldSnap: n
        };
      }

      var ur = (lr.prototype.updateChild = function (e, t, n, r, i, o) {
        g(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
        var a = e.getImmediateChild(t);
        return a.getChild(r).equals(n.getChild(r)) && a.isEmpty() === n.isEmpty() ? e : (null != o && (n.isEmpty() ? e.hasChild(t) ? o.trackChildChange(ar(t, a)) : g(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(or(t, n)) : o.trackChildChange(sr(t, n, a))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.index_));
      }, lr.prototype.updateFullNode = function (r, n, i) {
        return null != i && (r.isLeafNode() || r.forEachChild(Nn, function (e, t) {
          n.hasChild(e) || i.trackChildChange(ar(e, t));
        }), n.isLeafNode() || n.forEachChild(Nn, function (e, t) {
          var n;
          r.hasChild(e) ? (n = r.getImmediateChild(e)).equals(t) || i.trackChildChange(sr(e, t, n)) : i.trackChildChange(or(e, t));
        })), n.withIndex(this.index_);
      }, lr.prototype.updatePriority = function (e, t) {
        return e.isEmpty() ? jn.EMPTY_NODE : e.updatePriority(t);
      }, lr.prototype.filtersNodes = function () {
        return !1;
      }, lr.prototype.getIndexedFilter = function () {
        return this;
      }, lr.prototype.getIndex = function () {
        return this.index_;
      }, lr);

      function lr(e) {
        this.index_ = e;
      }

      var hr = (cr.prototype.getStartPost = function () {
        return this.startPost_;
      }, cr.prototype.getEndPost = function () {
        return this.endPost_;
      }, cr.prototype.matches = function (e) {
        return this.index_.compare(this.getStartPost(), e) <= 0 && this.index_.compare(e, this.getEndPost()) <= 0;
      }, cr.prototype.updateChild = function (e, t, n, r, i, o) {
        return this.matches(new nn(t, n)) || (n = jn.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, r, i, o);
      }, cr.prototype.updateFullNode = function (e, t, n) {
        t.isLeafNode() && (t = jn.EMPTY_NODE);
        var r = (r = t.withIndex(this.index_)).updatePriority(jn.EMPTY_NODE),
            i = this;
        return t.forEachChild(Nn, function (e, t) {
          i.matches(new nn(e, t)) || (r = r.updateImmediateChild(e, jn.EMPTY_NODE));
        }), this.indexedFilter_.updateFullNode(e, r, n);
      }, cr.prototype.updatePriority = function (e, t) {
        return e;
      }, cr.prototype.filtersNodes = function () {
        return !0;
      }, cr.prototype.getIndexedFilter = function () {
        return this.indexedFilter_;
      }, cr.prototype.getIndex = function () {
        return this.index_;
      }, cr.getStartPost_ = function (e) {
        if (e.hasStart()) {
          var t = e.getIndexStartName();
          return e.getIndex().makePost(e.getIndexStartValue(), t);
        }

        return e.getIndex().minPost();
      }, cr.getEndPost_ = function (e) {
        if (e.hasEnd()) {
          var t = e.getIndexEndName();
          return e.getIndex().makePost(e.getIndexEndValue(), t);
        }

        return e.getIndex().maxPost();
      }, cr);

      function cr(e) {
        this.indexedFilter_ = new ur(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = cr.getStartPost_(e), this.endPost_ = cr.getEndPost_(e);
      }

      var pr = (dr.prototype.updateChild = function (e, t, n, r, i, o) {
        return this.rangedFilter_.matches(new nn(t, n)) || (n = jn.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, r, i, o) : this.fullLimitUpdateChild_(e, t, n, i, o);
      }, dr.prototype.updateFullNode = function (e, t, n) {
        if (t.isLeafNode() || t.isEmpty()) r = jn.EMPTY_NODE.withIndex(this.index_);else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
          var r = jn.EMPTY_NODE.withIndex(this.index_),
              i = void 0;
          i = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);

          for (var o = 0; i.hasNext() && o < this.limit_;) {
            var a = i.getNext();
            if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), a) <= 0 : this.index_.compare(a, this.rangedFilter_.getEndPost()) <= 0)) break;
            r = r.updateImmediateChild(a.name, a.node), o++;
          }
        } else {
          r = (r = t.withIndex(this.index_)).updatePriority(jn.EMPTY_NODE);
          var s,
              u = void 0,
              l = void 0,
              h = void 0,
              i = void 0;
          h = this.reverse_ ? (i = r.getReverseIterator(this.index_), u = this.rangedFilter_.getEndPost(), l = this.rangedFilter_.getStartPost(), s = this.index_.getCompare(), function (e, t) {
            return s(t, e);
          }) : (i = r.getIterator(this.index_), u = this.rangedFilter_.getStartPost(), l = this.rangedFilter_.getEndPost(), this.index_.getCompare());

          for (var o = 0, c = !1; i.hasNext();) {
            a = i.getNext();
            (c = !c && h(u, a) <= 0 ? !0 : c) && o < this.limit_ && h(a, l) <= 0 ? o++ : r = r.updateImmediateChild(a.name, jn.EMPTY_NODE);
          }
        }
        return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n);
      }, dr.prototype.updatePriority = function (e, t) {
        return e;
      }, dr.prototype.filtersNodes = function () {
        return !0;
      }, dr.prototype.getIndexedFilter = function () {
        return this.rangedFilter_.getIndexedFilter();
      }, dr.prototype.getIndex = function () {
        return this.index_;
      }, dr.prototype.fullLimitUpdateChild_ = function (e, t, n, r, i) {
        var o, a;
        a = this.reverse_ ? (o = this.index_.getCompare(), function (e, t) {
          return o(t, e);
        }) : this.index_.getCompare();
        var s = e;
        g(s.numChildren() === this.limit_, "");
        var u = new nn(t, n),
            l = this.reverse_ ? s.getFirstChild(this.index_) : s.getLastChild(this.index_),
            h = this.rangedFilter_.matches(u);

        if (s.hasChild(t)) {
          for (var c = s.getImmediateChild(t), p = r.getChildAfterChild(this.index_, l, this.reverse_); null != p && (p.name === t || s.hasChild(p.name));) {
            p = r.getChildAfterChild(this.index_, p, this.reverse_);
          }

          var d = null == p ? 1 : a(p, u);
          if (h && !n.isEmpty() && 0 <= d) return null != i && i.trackChildChange(sr(t, n, c)), s.updateImmediateChild(t, n);
          null != i && i.trackChildChange(ar(t, c));
          c = s.updateImmediateChild(t, jn.EMPTY_NODE);
          return null != p && this.rangedFilter_.matches(p) ? (null != i && i.trackChildChange(or(p.name, p.node)), c.updateImmediateChild(p.name, p.node)) : c;
        }

        return !n.isEmpty() && h && 0 <= a(l, u) ? (null != i && (i.trackChildChange(ar(l.name, l.node)), i.trackChildChange(or(t, n))), s.updateImmediateChild(t, n).updateImmediateChild(l.name, jn.EMPTY_NODE)) : e;
      }, dr);

      function dr(e) {
        this.rangedFilter_ = new hr(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft();
      }

      var fr = (_r.prototype.hasStart = function () {
        return this.startSet_;
      }, _r.prototype.hasStartAfter = function () {
        return this.startAfterSet_;
      }, _r.prototype.hasEndBefore = function () {
        return this.endBeforeSet_;
      }, _r.prototype.isViewFromLeft = function () {
        return "" === this.viewFrom_ ? this.startSet_ : "l" === this.viewFrom_;
      }, _r.prototype.getIndexStartValue = function () {
        return g(this.startSet_, "Only valid if start has been set"), this.indexStartValue_;
      }, _r.prototype.getIndexStartName = function () {
        return g(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : Re;
      }, _r.prototype.hasEnd = function () {
        return this.endSet_;
      }, _r.prototype.getIndexEndValue = function () {
        return g(this.endSet_, "Only valid if end has been set"), this.indexEndValue_;
      }, _r.prototype.getIndexEndName = function () {
        return g(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : De;
      }, _r.prototype.hasLimit = function () {
        return this.limitSet_;
      }, _r.prototype.hasAnchoredLimit = function () {
        return this.limitSet_ && "" !== this.viewFrom_;
      }, _r.prototype.getLimit = function () {
        return g(this.limitSet_, "Only valid if limit has been set"), this.limit_;
      }, _r.prototype.getIndex = function () {
        return this.index_;
      }, _r.prototype.loadsAllData = function () {
        return !(this.startSet_ || this.endSet_ || this.limitSet_);
      }, _r.prototype.isDefault = function () {
        return this.loadsAllData() && this.index_ === Nn;
      }, _r.prototype.copy = function () {
        var e = new _r();
        return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e;
      }, _r);

      function _r() {
        this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = Nn;
      }

      function yr(e, t, n) {
        e = e.copy();
        return e.startSet_ = !0, e.indexStartValue_ = t = void 0 === t ? null : t, null != n ? (e.startNameSet_ = !0, e.indexStartName_ = n) : (e.startNameSet_ = !1, e.indexStartName_ = ""), e;
      }

      function vr(e, t, n) {
        e = e.copy();
        return e.endSet_ = !0, e.indexEndValue_ = t = void 0 === t ? null : t, void 0 !== n ? (e.endNameSet_ = !0, e.indexEndName_ = n) : (e.endNameSet_ = !1, e.indexEndName_ = ""), e;
      }

      function gr(e, t) {
        e = e.copy();
        return e.index_ = t, e;
      }

      function mr(e) {
        var t,
            n = {};
        return e.isDefault() || (t = e.index_ === Nn ? "$priority" : e.index_ === tr ? "$value" : e.index_ === ln ? "$key" : (g(e.index_ instanceof Kn, "Unrecognized index type!"), e.index_.toString()), n.orderBy = x(t), e.startSet_ && (n.startAt = x(e.indexStartValue_), e.startNameSet_ && (n.startAt += "," + x(e.indexStartName_))), e.endSet_ && (n.endAt = x(e.indexEndValue_), e.endNameSet_ && (n.endAt += "," + x(e.indexEndName_))), e.limitSet_ && (e.isViewFromLeft() ? n.limitToFirst = e.limit_ : n.limitToLast = e.limit_)), n;
      }

      function wr(e) {
        var t,
            n = {};
        return e.startSet_ && (n.sp = e.indexStartValue_, e.startNameSet_ && (n.sn = e.indexStartName_)), e.endSet_ && (n.ep = e.indexEndValue_, e.endNameSet_ && (n.en = e.indexEndName_)), e.limitSet_ && (n.l = e.limit_, "" === (t = e.viewFrom_) && (t = e.isViewFromLeft() ? "l" : "r"), n.vf = t), e.index_ !== Nn && (n.i = e.index_.toString()), n;
      }

      var Cr,
          br = (n(Tr, Cr = Ct), Tr.prototype.reportStats = function (e) {
        throw new Error("Method not implemented.");
      }, Tr.getListenId_ = function (e, t) {
        return void 0 !== t ? "tag$" + t : (g(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString());
      }, Tr.prototype.listen = function (e, t, n, r) {
        var i = this,
            o = e._path.toString();

        this.log_("Listen called for " + o + " " + e._queryIdentifier);
        var a = Tr.getListenId_(e, n),
            s = {};
        this.listens_[a] = s;
        e = mr(e._queryParams);
        this.restRequest_(o + ".json", e, function (e, t) {
          null === (e = 404 === e ? t = null : e) && i.onDataUpdate_(o, t, !1, n), O(i.listens_, a) === s && r(e ? 401 === e ? "permission_denied" : "rest_error:" + e : "ok", null);
        });
      }, Tr.prototype.unlisten = function (e, t) {
        t = Tr.getListenId_(e, t);
        delete this.listens_[t];
      }, Tr.prototype.get = function (e) {
        var n = this,
            t = mr(e._queryParams),
            r = e._path.toString(),
            i = new f();

        return this.restRequest_(r + ".json", t, function (e, t) {
          null === (e = 404 === e ? t = null : e) ? (n.onDataUpdate_(r, t, !1, null), i.resolve(t)) : i.reject(new Error(t));
        }), i.promise;
      }, Tr.prototype.refreshAuthToken = function (e) {}, Tr.prototype.restRequest_ = function (i, o, a) {
        var s = this;
        return (o = void 0 === o ? {} : o).format = "export", Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then(function (e) {
          var t = y(e, 2),
              e = t[0],
              t = t[1];
          e && e.accessToken && (o.auth = e.accessToken), t && t.token && (o.ac = t.token);
          var n = (s.repoInfo_.secure ? "https://" : "http://") + s.repoInfo_.host + i + "?ns=" + s.repoInfo_.namespace + M(o);
          s.log_("Sending REST request for " + n);
          var r = new XMLHttpRequest();
          r.onreadystatechange = function () {
            if (a && 4 === r.readyState) {
              s.log_("REST Response for " + n + " received. status:", r.status, "response:", r.responseText);
              var e = null;

              if (200 <= r.status && r.status < 300) {
                try {
                  e = N(r.responseText);
                } catch (e) {
                  xe("Failed to parse JSON response for " + n + ": " + r.responseText);
                }

                a(null, e);
              } else 401 !== r.status && 404 !== r.status && xe("Got unsuccessful REST response for " + n + " Status: " + r.status), a(r.status);

              a = null;
            }
          }, r.open("GET", n, !0), r.send();
        });
      }, Tr);

      function Tr(e, t, n, r) {
        var i = Cr.call(this) || this;
        return i.repoInfo_ = e, i.onDataUpdate_ = t, i.authTokenProvider_ = n, i.appCheckTokenProvider_ = r, i.log_ = Pe("p:rest:"), i.listens_ = {}, i;
      }

      var Er = (Ir.prototype.getNode = function (e) {
        return this.rootNode_.getChild(e);
      }, Ir.prototype.updateSnapshot = function (e, t) {
        this.rootNode_ = this.rootNode_.updateChild(e, t);
      }, Ir);

      function Ir() {
        this.rootNode_ = jn.EMPTY_NODE;
      }

      function Sr() {
        return {
          value: null,
          children: new Map()
        };
      }

      function kr(e, t, n) {
        var r;
        jt(t) ? (e.value = n, e.children.clear()) : null !== e.value ? e.value = e.value.updateChild(t, n) : (r = Ot(t), e.children.has(r) || e.children.set(r, Sr()), kr(e.children.get(r), t = Lt(t), n));
      }

      function Pr(e, n, r) {
        var i;
        null !== e.value ? r(n, e.value) : (i = function i(e, t) {
          Pr(t, new xt(n.toString() + "/" + e), r);
        }, e.children.forEach(function (e, t) {
          i(t, e);
        }));
      }

      var Nr = (xr.prototype.get = function () {
        var e = this.collection_.get(),
            n = _l({}, e);

        return this.last_ && Le(this.last_, function (e, t) {
          n[e] = n[e] - t;
        }), this.last_ = e, n;
      }, xr);

      function xr(e) {
        this.collection_ = e, this.last_ = null;
      }

      var Rr,
          Dr = (Or.prototype.reportStats_ = function () {
        var n = this,
            e = this.statsListener_.get(),
            r = {},
            i = !1;
        Le(e, function (e, t) {
          0 < t && D(n.statsToReport_, e) && (r[e] = t, i = !0);
        }), i && this.server_.reportStats(r), Fe(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5));
      }, Or);

      function Or(e, t) {
        this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new Nr(e);
        e = 1e4 + 2e4 * Math.random();
        Fe(this.reportStats_.bind(this), Math.floor(e));
      }

      function Ar() {
        return {
          fromUser: !0,
          fromServer: !1,
          queryId: null,
          tagged: !1
        };
      }

      function Lr() {
        return {
          fromUser: !1,
          fromServer: !0,
          queryId: null,
          tagged: !1
        };
      }

      function Mr(e) {
        return {
          fromUser: !1,
          fromServer: !0,
          queryId: e,
          tagged: !0
        };
      }

      (Ct = Rr = Rr || {})[Ct.OVERWRITE = 0] = "OVERWRITE", Ct[Ct.MERGE = 1] = "MERGE", Ct[Ct.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", Ct[Ct.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
      var Fr = (qr.prototype.operationForChild = function (e) {
        if (jt(this.path)) {
          if (null != this.affectedTree.value) return g(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
          var t = this.affectedTree.subtree(new xt(e));
          return new qr(Dt(), t, this.revert);
        }

        return g(Ot(this.path) === e, "operationForChild called for unrelated child."), new qr(Lt(this.path), this.affectedTree, this.revert);
      }, qr);

      function qr(e, t, n) {
        this.path = e, this.affectedTree = t, this.revert = n, this.type = Rr.ACK_USER_WRITE, this.source = Ar();
      }

      var Wr = (jr.prototype.operationForChild = function (e) {
        return jt(this.path) ? new jr(this.source, Dt()) : new jr(this.source, Lt(this.path));
      }, jr);

      function jr(e, t) {
        this.source = e, this.path = t, this.type = Rr.LISTEN_COMPLETE;
      }

      var Ur = (Br.prototype.operationForChild = function (e) {
        return jt(this.path) ? new Br(this.source, Dt(), this.snap.getImmediateChild(e)) : new Br(this.source, Lt(this.path), this.snap);
      }, Br);

      function Br(e, t, n) {
        this.source = e, this.path = t, this.snap = n, this.type = Rr.OVERWRITE;
      }

      var Vr = (zr.prototype.operationForChild = function (e) {
        if (jt(this.path)) {
          var t = this.children.subtree(new xt(e));
          return t.isEmpty() ? null : t.value ? new Ur(this.source, Dt(), t.value) : new zr(this.source, Dt(), t);
        }

        return g(Ot(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new zr(this.source, Lt(this.path), this.children);
      }, zr.prototype.toString = function () {
        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
      }, zr);

      function zr(e, t, n) {
        this.source = e, this.path = t, this.children = n, this.type = Rr.MERGE;
      }

      var Hr = (Qr.prototype.isFullyInitialized = function () {
        return this.fullyInitialized_;
      }, Qr.prototype.isFiltered = function () {
        return this.filtered_;
      }, Qr.prototype.isCompleteForPath = function (e) {
        if (jt(e)) return this.isFullyInitialized() && !this.filtered_;
        e = Ot(e);
        return this.isCompleteForChild(e);
      }, Qr.prototype.isCompleteForChild = function (e) {
        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e);
      }, Qr.prototype.getNode = function () {
        return this.node_;
      }, Qr);

      function Qr(e, t, n) {
        this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = n;
      }

      var Yr,
          Kr = function Kr(e) {
        this.query_ = e, this.index_ = this.query_._queryParams.getIndex();
      };

      function Gr(n, e, t, r) {
        var i = [],
            o = [];
        return e.forEach(function (e) {
          var t;
          "child_changed" === e.type && n.index_.indexedValueChanged(e.oldSnap, e.snapshotNode) && o.push((t = e.childName, {
            type: "child_moved",
            snapshotNode: e.snapshotNode,
            childName: t
          }));
        }), $r(n, i, "child_removed", e, r, t), $r(n, i, "child_added", e, r, t), $r(n, i, "child_moved", o, r, t), $r(n, i, "child_changed", e, r, t), $r(n, i, "value", e, r, t), i;
      }

      function $r(o, a, t, e, s, u) {
        e = e.filter(function (e) {
          return e.type === t;
        });
        e.sort(function (e, t) {
          return function (e, t, n) {
            if (null == t.childName || null == n.childName) throw m("Should only compare child_ events.");
            t = new nn(t.childName, t.snapshotNode), n = new nn(n.childName, n.snapshotNode);
            return e.index_.compare(t, n);
          }(o, e, t);
        }), e.forEach(function (t) {
          var e,
              n,
              r,
              i = (e = o, r = u, "value" === (n = t).type || "child_removed" === n.type || (n.prevName = r.getPredecessorChildName(n.childName, n.snapshotNode, e.index_)), n);
          s.forEach(function (e) {
            e.respondsTo(t.type) && a.push(e.createEvent(i, o.query_));
          });
        });
      }

      function Jr(e, t) {
        return {
          eventCache: e,
          serverCache: t
        };
      }

      function Xr(e, t, n, r) {
        return Jr(new Hr(t, n, r), e.serverCache);
      }

      function Zr(e, t, n, r) {
        return Jr(e.eventCache, new Hr(t, n, r));
      }

      function ei(e) {
        return e.eventCache.isFullyInitialized() ? e.eventCache.getNode() : null;
      }

      function ti(e) {
        return e.serverCache.isFullyInitialized() ? e.serverCache.getNode() : null;
      }

      var ni = (ri.fromObject = function (e) {
        var n = new ri(null);
        return Le(e, function (e, t) {
          n = n.set(new xt(e), t);
        }), n;
      }, ri.prototype.isEmpty = function () {
        return null === this.value && this.children.isEmpty();
      }, ri.prototype.findRootMostMatchingPathAndValue = function (e, t) {
        if (null != this.value && t(this.value)) return {
          path: Dt(),
          value: this.value
        };
        if (jt(e)) return null;
        var n = Ot(e),
            r = this.children.get(n);
        if (null === r) return null;
        t = r.findRootMostMatchingPathAndValue(Lt(e), t);
        return null == t ? null : {
          path: Wt(new xt(n), t.path),
          value: t.value
        };
      }, ri.prototype.findRootMostValueAndPath = function (e) {
        return this.findRootMostMatchingPathAndValue(e, function () {
          return !0;
        });
      }, ri.prototype.subtree = function (e) {
        if (jt(e)) return this;
        var t = Ot(e),
            t = this.children.get(t);
        return null !== t ? t.subtree(Lt(e)) : new ri(null);
      }, ri.prototype.set = function (e, t) {
        if (jt(e)) return new ri(t, this.children);
        var n = Ot(e),
            t = (this.children.get(n) || new ri(null)).set(Lt(e), t),
            t = this.children.insert(n, t);
        return new ri(this.value, t);
      }, ri.prototype.remove = function (e) {
        if (jt(e)) return this.children.isEmpty() ? new ri(null) : new ri(null, this.children);
        var t = Ot(e),
            n = this.children.get(t);

        if (n) {
          n = n.remove(Lt(e)), e = void 0, e = n.isEmpty() ? this.children.remove(t) : this.children.insert(t, n);
          return null === this.value && e.isEmpty() ? new ri(null) : new ri(this.value, e);
        }

        return this;
      }, ri.prototype.get = function (e) {
        if (jt(e)) return this.value;
        var t = Ot(e),
            t = this.children.get(t);
        return t ? t.get(Lt(e)) : null;
      }, ri.prototype.setTree = function (e, t) {
        if (jt(e)) return t;
        var n = Ot(e),
            e = (this.children.get(n) || new ri(null)).setTree(Lt(e), t),
            t = void 0,
            t = e.isEmpty() ? this.children.remove(n) : this.children.insert(n, e);
        return new ri(this.value, t);
      }, ri.prototype.fold = function (e) {
        return this.fold_(Dt(), e);
      }, ri.prototype.fold_ = function (n, r) {
        var i = {};
        return this.children.inorderTraversal(function (e, t) {
          i[e] = t.fold_(Wt(n, e), r);
        }), r(n, this.value, i);
      }, ri.prototype.findOnPath = function (e, t) {
        return this.findOnPath_(e, Dt(), t);
      }, ri.prototype.findOnPath_ = function (e, t, n) {
        var r = !!this.value && n(t, this.value);
        if (r) return r;
        if (jt(e)) return null;
        var i = Ot(e),
            r = this.children.get(i);
        return r ? r.findOnPath_(Lt(e), Wt(t, i), n) : null;
      }, ri.prototype.foreachOnPath = function (e, t) {
        return this.foreachOnPath_(e, Dt(), t);
      }, ri.prototype.foreachOnPath_ = function (e, t, n) {
        if (jt(e)) return this;
        this.value && n(t, this.value);
        var r = Ot(e),
            i = this.children.get(r);
        return i ? i.foreachOnPath_(Lt(e), Wt(t, r), n) : new ri(null);
      }, ri.prototype.foreach = function (e) {
        this.foreach_(Dt(), e);
      }, ri.prototype.foreach_ = function (n, r) {
        this.children.inorderTraversal(function (e, t) {
          t.foreach_(Wt(n, e), r);
        }), this.value && r(n, this.value);
      }, ri.prototype.foreachChild = function (n) {
        this.children.inorderTraversal(function (e, t) {
          t.value && n(e, t.value);
        });
      }, ri);

      function ri(e, t) {
        void 0 === t && (t = Yr = Yr || new yn(_e)), this.value = e, this.children = t;
      }

      var ii = (oi.empty = function () {
        return new oi(new ni(null));
      }, oi);

      function oi(e) {
        this.writeTree_ = e;
      }

      function ai(e, t, n) {
        if (jt(t)) return new ii(new ni(n));
        var r = e.writeTree_.findRootMostValueAndPath(t);

        if (null != r) {
          var i = r.path,
              o = r.value,
              r = Ut(i, t),
              o = o.updateChild(r, n);
          return new ii(e.writeTree_.set(i, o));
        }

        n = new ni(n), n = e.writeTree_.setTree(t, n);
        return new ii(n);
      }

      function si(e, n, t) {
        var r = e;
        return Le(t, function (e, t) {
          r = ai(r, Wt(n, e), t);
        }), r;
      }

      function ui(e, t) {
        if (jt(t)) return ii.empty();
        t = e.writeTree_.setTree(t, new ni(null));
        return new ii(t);
      }

      function li(e, t) {
        return null != hi(e, t);
      }

      function hi(e, t) {
        var n = e.writeTree_.findRootMostValueAndPath(t);
        return null != n ? e.writeTree_.get(n.path).getChild(Ut(n.path, t)) : null;
      }

      function ci(e) {
        var n = [],
            t = e.writeTree_.value;
        return null != t ? t.isLeafNode() || t.forEachChild(Nn, function (e, t) {
          n.push(new nn(e, t));
        }) : e.writeTree_.children.inorderTraversal(function (e, t) {
          null != t.value && n.push(new nn(e, t.value));
        }), n;
      }

      function pi(e, t) {
        if (jt(t)) return e;
        var n = hi(e, t);
        return new ii(null != n ? new ni(n) : e.writeTree_.subtree(t));
      }

      function di(e) {
        return e.writeTree_.isEmpty();
      }

      function fi(e, t) {
        return function n(r, e, i) {
          {
            if (null != e.value) return i.updateChild(r, e.value);
            var o = null;
            return e.children.inorderTraversal(function (e, t) {
              ".priority" === e ? (g(null !== t.value, "Priority writes must always be leaf nodes"), o = t.value) : i = n(Wt(r, e), t, i);
            }), i = !i.getChild(r).isEmpty() && null !== o ? i.updateChild(Wt(r, ".priority"), o) : i;
          }
        }(Dt(), e.writeTree_, t);
      }

      function _i(e, t) {
        return ki(t, e);
      }

      function yi(t, n) {
        var e = t.allWrites.findIndex(function (e) {
          return e.writeId === n;
        });
        g(0 <= e, "removeWrite called with nonexistent writeId.");
        var r = t.allWrites[e];
        t.allWrites.splice(e, 1);

        for (var i, o = r.visible, a = !1, s = t.allWrites.length - 1; o && 0 <= s;) {
          var u = t.allWrites[s];
          u.visible && (e <= s && function (e, t) {
            {
              if (e.snap) return zt(e.path, t);

              for (var n in e.children) {
                if (e.children.hasOwnProperty(n) && zt(Wt(e.path, n), t)) return !0;
              }

              return !1;
            }
          }(u, r.path) ? o = !1 : zt(r.path, u.path) && (a = !0)), s--;
        }

        return !!o && (a ? ((i = t).visibleWrites = gi(i.allWrites, vi, Dt()), 0 < i.allWrites.length ? i.lastWriteId = i.allWrites[i.allWrites.length - 1].writeId : i.lastWriteId = -1) : r.snap ? t.visibleWrites = ui(t.visibleWrites, r.path) : Le(r.children, function (e) {
          t.visibleWrites = ui(t.visibleWrites, Wt(r.path, e));
        }), !0);
      }

      function vi(e) {
        return e.visible;
      }

      function gi(e, t, n) {
        for (var r = ii.empty(), i = 0; i < e.length; ++i) {
          var o = e[i];

          if (t(o)) {
            var a = o.path,
                s = void 0;
            if (o.snap) zt(n, a) ? r = ai(r, s = Ut(n, a), o.snap) : zt(a, n) && (s = Ut(a, n), r = ai(r, Dt(), o.snap.getChild(s)));else {
              if (!o.children) throw m("WriteRecord should have .snap or .children");
              zt(n, a) ? r = si(r, s = Ut(n, a), o.children) : zt(a, n) && (jt(s = Ut(a, n)) ? r = si(r, Dt(), o.children) : (o = O(o.children, Ot(s))) && (s = o.getChild(Lt(s)), r = ai(r, Dt(), s)));
            }
          }
        }

        return r;
      }

      function mi(e, t, n, r, i) {
        if (r || i) {
          var o = pi(e.visibleWrites, t);
          if (!i && di(o)) return n;
          if (i || null != n || li(o, Dt())) return fi(gi(e.allWrites, function (e) {
            return (e.visible || i) && (!r || !~r.indexOf(e.writeId)) && (zt(e.path, t) || zt(t, e.path));
          }, t), n || jn.EMPTY_NODE);
          return null;
        }

        o = hi(e.visibleWrites, t);
        if (null != o) return o;
        e = pi(e.visibleWrites, t);
        return di(e) ? n : null != n || li(e, Dt()) ? fi(e, n || jn.EMPTY_NODE) : null;
      }

      function wi(e, t, n, r) {
        return mi(e.writeTree, e.treePath, t, n, r);
      }

      function Ci(e, t) {
        return function (e, t, n) {
          var r = jn.EMPTY_NODE,
              i = hi(e.visibleWrites, t);
          if (i) return i.isLeafNode() || i.forEachChild(Nn, function (e, t) {
            r = r.updateImmediateChild(e, t);
          }), r;

          if (n) {
            var o = pi(e.visibleWrites, t);
            return n.forEachChild(Nn, function (e, t) {
              t = fi(pi(o, new xt(e)), t);
              r = r.updateImmediateChild(e, t);
            }), ci(o).forEach(function (e) {
              r = r.updateImmediateChild(e.name, e.node);
            }), r;
          }

          return ci(pi(e.visibleWrites, t)).forEach(function (e) {
            r = r.updateImmediateChild(e.name, e.node);
          }), r;
        }(e.writeTree, e.treePath, t);
      }

      function bi(e, t, n, r) {
        return i = e.writeTree, e = e.treePath, t = t, r = r, g(n || r, "Either existingEventSnap or existingServerSnap must exist"), e = Wt(e, t), li(i.visibleWrites, e) ? null : di(e = pi(i.visibleWrites, e)) ? r.getChild(t) : fi(e, r.getChild(t));
        var i;
      }

      function Ti(e, t) {
        return n = e.writeTree, t = Wt(e.treePath, t), hi(n.visibleWrites, t);
        var n;
      }

      function Ei(e, t, n, r, i, o) {
        return function (e, t, n, r, i, o, a) {
          var s,
              e = pi(e.visibleWrites, t);
          if (null != (t = hi(e, Dt()))) s = t;else {
            if (null == n) return [];
            s = fi(e, n);
          }
          if ((s = s.withIndex(a)).isEmpty() || s.isLeafNode()) return [];

          for (var u = [], l = a.getCompare(), h = o ? s.getReverseIteratorFrom(r, a) : s.getIteratorFrom(r, a), c = h.getNext(); c && u.length < i;) {
            0 !== l(c, r) && u.push(c), c = h.getNext();
          }

          return u;
        }(e.writeTree, e.treePath, t, n, r, i, o);
      }

      function Ii(e, t, n) {
        return r = e.writeTree, i = e.treePath, e = n, t = Wt(i, n = t), null != (i = hi(r.visibleWrites, t)) ? i : e.isCompleteForChild(n) ? fi(pi(r.visibleWrites, t), e.getNode().getImmediateChild(n)) : null;
        var r, i;
      }

      function Si(e, t) {
        return ki(Wt(e.treePath, t), e.writeTree);
      }

      function ki(e, t) {
        return {
          treePath: e,
          writeTree: t
        };
      }

      var Pi = (Ni.prototype.trackChildChange = function (e) {
        var t = e.type,
            n = e.childName;
        g("child_added" === t || "child_changed" === t || "child_removed" === t, "Only child changes supported for tracking"), g(".priority" !== n, "Only non-priority child changes can be tracked.");
        var r = this.changeMap.get(n);

        if (r) {
          var i = r.type;
          if ("child_added" === t && "child_removed" === i) this.changeMap.set(n, sr(n, e.snapshotNode, r.snapshotNode));else if ("child_removed" === t && "child_added" === i) this.changeMap["delete"](n);else if ("child_removed" === t && "child_changed" === i) this.changeMap.set(n, ar(n, r.oldSnap));else if ("child_changed" === t && "child_added" === i) this.changeMap.set(n, or(n, e.snapshotNode));else {
            if ("child_changed" !== t || "child_changed" !== i) throw m("Illegal combination of changes: " + e + " occurred after " + r);
            this.changeMap.set(n, sr(n, e.snapshotNode, r.oldSnap));
          }
        } else this.changeMap.set(n, e);
      }, Ni.prototype.getChanges = function () {
        return Array.from(this.changeMap.values());
      }, Ni);

      function Ni() {
        this.changeMap = new Map();
      }

      function xi() {}

      var Ri = new (xi.prototype.getCompleteChild = function (e) {
        return null;
      }, xi.prototype.getChildAfterChild = function (e, t, n) {
        return null;
      }, xi)(),
          Di = (Oi.prototype.getCompleteChild = function (e) {
        var t = this.viewCache_.eventCache;
        if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);
        t = null != this.optCompleteServerCache_ ? new Hr(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
        return Ii(this.writes_, e, t);
      }, Oi.prototype.getChildAfterChild = function (e, t, n) {
        var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : ti(this.viewCache_),
            e = Ei(this.writes_, r, t, 1, n, e);
        return 0 === e.length ? null : e[0];
      }, Oi);

      function Oi(e, t, n) {
        void 0 === n && (n = null), this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = n;
      }

      function Ai(e, t, n, r, i) {
        var o,
            a,
            s,
            u,
            l,
            h,
            c,
            p,
            d = new Pi();
        if (n.type === Rr.OVERWRITE) var f = n,
            _ = f.source.fromUser ? Fi(e, t, f.path, f.snap, r, i, d) : (g(f.source.fromServer, "Unknown source."), o = f.source.tagged || t.serverCache.isFiltered() && !jt(f.path), Mi(e, t, f.path, f.snap, r, i, o, d));else if (n.type === Rr.MERGE) {
          var y = n;
          _ = y.source.fromUser ? (a = e, s = t, u = y.path, f = y.children, l = r, h = i, c = d, p = s, f.foreach(function (e, t) {
            e = Wt(u, e);
            qi(s, Ot(e)) && (p = Fi(a, p, e, t, l, h, c));
          }), f.foreach(function (e, t) {
            e = Wt(u, e);
            qi(s, Ot(e)) || (p = Fi(a, p, e, t, l, h, c));
          }), p) : (g(y.source.fromServer, "Unknown source."), o = y.source.tagged || t.serverCache.isFiltered(), ji(e, t, y.path, y.children, r, i, o, d));
        } else if (n.type === Rr.ACK_USER_WRITE) {
          var v = n;
          _ = v.revert ? function (e, t, n, r, i, o) {
            var a;
            {
              if (null != Ti(r, n)) return t;
              var s,
                  u,
                  l = new Di(r, t, i),
                  h = t.eventCache.getNode(),
                  i = void 0;
              return jt(n) || ".priority" === Ot(n) ? (u = void 0, u = t.serverCache.isFullyInitialized() ? wi(r, ti(t)) : (s = t.serverCache.getNode(), g(s instanceof jn, "serverChildren would be complete if leaf node"), Ci(r, s)), i = e.filter.updateFullNode(h, u, o)) : (s = Ot(n), null == (u = Ii(r, s, t.serverCache)) && t.serverCache.isCompleteForChild(s) && (u = h.getImmediateChild(s)), (i = null != u ? e.filter.updateChild(h, s, u, Lt(n), l, o) : t.eventCache.getNode().hasChild(s) ? e.filter.updateChild(h, s, jn.EMPTY_NODE, Lt(n), l, o) : h).isEmpty() && t.serverCache.isFullyInitialized() && (a = wi(r, ti(t))).isLeafNode() && (i = e.filter.updateFullNode(i, a, o))), a = t.serverCache.isFullyInitialized() || null != Ti(r, Dt()), Xr(t, i, a, e.filter.filtersNodes());
            }
          }(e, t, v.path, r, i, d) : function (e, t, r, n, i, o, a) {
            if (null != Ti(i, r)) return t;
            var s = t.serverCache.isFiltered(),
                u = t.serverCache;
            {
              if (null != n.value) {
                if (jt(r) && u.isFullyInitialized() || u.isCompleteForPath(r)) return Mi(e, t, r, u.getNode().getChild(r), i, o, s, a);

                if (jt(r)) {
                  var l = new ni(null);
                  return u.getNode().forEachChild(ln, function (e, t) {
                    l = l.set(new xt(e), t);
                  }), ji(e, t, r, l, i, o, s, a);
                }

                return t;
              }

              var h = new ni(null);
              return n.foreach(function (e, t) {
                var n = Wt(r, e);
                u.isCompleteForPath(n) && (h = h.set(e, u.getNode().getChild(n)));
              }), ji(e, t, r, h, i, o, s, a);
            }
          }(e, t, v.path, v.affectedTree, r, i, d);
        } else {
          if (n.type !== Rr.LISTEN_COMPLETE) throw m("Unknown operation type: " + n.type);
          v = e, i = n.path, e = r, n = d, r = Zr(t, (r = t.serverCache).getNode(), r.isFullyInitialized() || jt(i), r.isFiltered()), _ = Li(v, r, i, e, Ri, n);
        }
        d = d.getChanges();
        return function (e, t, n) {
          var r = t.eventCache;
          {
            var i, o;
            r.isFullyInitialized() && (i = r.getNode().isLeafNode() || r.getNode().isEmpty(), o = ei(e), (0 < n.length || !e.eventCache.isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(ir(ei(t))));
          }
        }(t, _, d), {
          viewCache: _,
          changes: d
        };
      }

      function Li(e, t, n, r, i, o) {
        var a = t.eventCache;
        if (null != Ti(r, n)) return t;
        var s,
            u,
            l,
            h,
            c = void 0,
            p = void 0;
        return c = jt(n) ? (g(t.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), t.serverCache.isFiltered() ? (s = Ci(r, (s = ti(t)) instanceof jn ? s : jn.EMPTY_NODE), e.filter.updateFullNode(t.eventCache.getNode(), s, o)) : (u = wi(r, ti(t)), e.filter.updateFullNode(t.eventCache.getNode(), u, o))) : ".priority" === (u = Ot(n)) ? (g(1 === At(n), "Can't have a priority with additional path components"), null != (h = bi(r, n, l = a.getNode(), p = t.serverCache.getNode())) ? e.filter.updatePriority(l, h) : a.getNode()) : (l = Lt(n), h = void 0, null != (h = a.isCompleteForChild(u) ? (p = t.serverCache.getNode(), null != (p = bi(r, n, a.getNode(), p)) ? a.getNode().getImmediateChild(u).updateChild(l, p) : a.getNode().getImmediateChild(u)) : Ii(r, u, t.serverCache)) ? e.filter.updateChild(a.getNode(), u, h, l, i, o) : a.getNode()), Xr(t, c, a.isFullyInitialized() || jt(n), e.filter.filtersNodes());
      }

      function Mi(e, t, n, r, i, o, a, s) {
        var u = t.serverCache,
            l = a ? e.filter : e.filter.getIndexedFilter();
        if (jt(n)) c = l.updateFullNode(u.getNode(), r, null);else if (l.filtersNodes() && !u.isFiltered()) var h = u.getNode().updateChild(n, r),
            c = l.updateFullNode(u.getNode(), h, null);else {
          a = Ot(n);
          if (!u.isCompleteForPath(n) && 1 < At(n)) return t;
          h = Lt(n), r = u.getNode().getImmediateChild(a).updateChild(h, r);
          c = ".priority" === a ? l.updatePriority(u.getNode(), r) : l.updateChild(u.getNode(), a, r, h, Ri, null);
        }
        l = Zr(t, c, u.isFullyInitialized() || jt(n), l.filtersNodes());
        return Li(e, l, n, i, new Di(i, l, o), s);
      }

      function Fi(e, t, n, r, i, o, a) {
        var s,
            u,
            l = t.eventCache,
            h = new Di(i, t, o);
        return jt(n) ? (u = e.filter.updateFullNode(t.eventCache.getNode(), r, a), Xr(t, u, !0, e.filter.filtersNodes())) : ".priority" === (s = Ot(n)) ? (u = e.filter.updatePriority(t.eventCache.getNode(), r), Xr(t, u, l.isFullyInitialized(), l.isFiltered())) : (i = Lt(n), o = l.getNode().getImmediateChild(s), u = void 0, u = jt(i) ? r : null != (n = h.getCompleteChild(s)) ? ".priority" === Mt(i) && n.getChild(qt(i)).isEmpty() ? n : n.updateChild(i, r) : jn.EMPTY_NODE, o.equals(u) ? t : Xr(t, e.filter.updateChild(l.getNode(), s, u, i, h, a), l.isFullyInitialized(), e.filter.filtersNodes()));
      }

      function qi(e, t) {
        return e.eventCache.isCompleteForChild(t);
      }

      function Wi(e, n, t) {
        return t.foreach(function (e, t) {
          n = n.updateChild(e, t);
        }), n;
      }

      function ji(r, i, e, t, o, a, s, u) {
        if (i.serverCache.getNode().isEmpty() && !i.serverCache.isFullyInitialized()) return i;
        var l = i,
            t = jt(e) ? t : new ni(null).setTree(e, t),
            h = i.serverCache.getNode();
        return t.children.inorderTraversal(function (e, t) {
          h.hasChild(e) && (t = Wi(0, i.serverCache.getNode().getImmediateChild(e), t), l = Mi(r, l, new xt(e), t, o, a, s, u));
        }), t.children.inorderTraversal(function (e, t) {
          var n = !i.serverCache.isCompleteForChild(e) && void 0 === t.value;
          h.hasChild(e) || n || (t = Wi(0, i.serverCache.getNode().getImmediateChild(e), t), l = Mi(r, l, new xt(e), t, o, a, s, u));
        }), l;
      }

      var Ui,
          Bi = (Object.defineProperty(Vi.prototype, "query", {
        get: function get() {
          return this.query_;
        },
        enumerable: !1,
        configurable: !0
      }), Vi);

      function Vi(e, t) {
        this.query_ = e, this.eventRegistrations_ = [];
        var n = this.query_._queryParams,
            r = new ur(n.getIndex()),
            i = (o = n).loadsAllData() ? new ur(o.getIndex()) : new (o.hasLimit() ? pr : hr)(o);
        this.processor_ = {
          filter: i
        };
        var e = t.serverCache,
            n = t.eventCache,
            o = r.updateFullNode(jn.EMPTY_NODE, e.getNode(), null),
            t = i.updateFullNode(jn.EMPTY_NODE, n.getNode(), null),
            r = new Hr(o, e.isFullyInitialized(), r.filtersNodes()),
            i = new Hr(t, n.isFullyInitialized(), i.filtersNodes());
        this.viewCache_ = Jr(i, r), this.eventGenerator_ = new Kr(this.query_);
      }

      function zi(e) {
        return 0 === e.eventRegistrations_.length;
      }

      function Hi(e, t, n) {
        var r,
            i = [];

        if (n && (g(null == t, "A cancel should cancel all event registrations."), r = e.query._path, e.eventRegistrations_.forEach(function (e) {
          e = e.createCancelEvent(n, r);
          e && i.push(e);
        })), t) {
          for (var o = [], a = 0; a < e.eventRegistrations_.length; ++a) {
            var s = e.eventRegistrations_[a];

            if (s.matches(t)) {
              if (t.hasAnyCallback()) {
                o = o.concat(e.eventRegistrations_.slice(a + 1));
                break;
              }
            } else o.push(s);
          }

          e.eventRegistrations_ = o;
        } else e.eventRegistrations_ = [];

        return i;
      }

      function Qi(e, t, n, r) {
        t.type === Rr.MERGE && null !== t.source.queryId && (g(ti(e.viewCache_), "We should always have a full cache before handling merges"), g(ei(e.viewCache_), "Missing event cache, even though we have a server cache"));
        var i = e.viewCache_,
            t = Ai(e.processor_, i, t, n, r);
        return n = e.processor_, r = t.viewCache, g(r.eventCache.getNode().isIndexed(n.filter.getIndex()), "Event snap not indexed"), g(r.serverCache.getNode().isIndexed(n.filter.getIndex()), "Server snap not indexed"), g(t.viewCache.serverCache.isFullyInitialized() || !i.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), e.viewCache_ = t.viewCache, Yi(e, t.changes, t.viewCache.eventCache.getNode(), null);
      }

      function Yi(e, t, n, r) {
        r = r ? [r] : e.eventRegistrations_;
        return Gr(e.eventGenerator_, t, n, r);
      }

      var Ki,
          Gi = function Gi() {
        this.views = new Map();
      };

      function $i(e, t, n, r) {
        var i,
            o,
            a = t.source.queryId;

        if (null !== a) {
          var s = e.views.get(a);
          return g(null != s, "SyncTree gave us an op for an invalid query."), Qi(s, t, n, r);
        }

        var u = [];

        try {
          for (var l = _(e.views.values()), h = l.next(); !h.done; h = l.next()) {
            s = h.value, u = u.concat(Qi(s, t, n, r));
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            h && !h.done && (o = l["return"]) && o.call(l);
          } finally {
            if (i) throw i.error;
          }
        }

        return u;
      }

      function Ji(e, t, n, r, i) {
        var o = t._queryIdentifier,
            e = e.views.get(o);
        if (e) return e;
        o = wi(n, i ? r : null), e = !1, e = !!o || (o = r instanceof jn ? Ci(n, r) : jn.EMPTY_NODE, !1), i = Jr(new Hr(o, e, !1), new Hr(r, i, !1));
        return new Bi(t, i);
      }

      function Xi(e, t, n, r, i, o) {
        var a,
            o = Ji(e, t, r, i, o);
        return e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, o), o.eventRegistrations_.push(n), t = n, o = (n = o).viewCache_.eventCache, a = [], o.getNode().isLeafNode() || o.getNode().forEachChild(Nn, function (e, t) {
          a.push(or(e, t));
        }), o.isFullyInitialized() && a.push(ir(o.getNode())), Yi(n, a, o.getNode(), t);
      }

      function Zi(e, t, n, r) {
        var i,
            o,
            a = t._queryIdentifier,
            s = [],
            u = [],
            l = io(e);
        if ("default" === a) try {
          for (var h = _(e.views.entries()), c = h.next(); !c.done; c = h.next()) {
            var p = y(c.value, 2),
                d = p[0],
                f = p[1],
                u = u.concat(Hi(f, n, r));
            zi(f) && (e.views["delete"](d), f.query._queryParams.loadsAllData() || s.push(f.query));
          }
        } catch (e) {
          i = {
            error: e
          };
        } finally {
          try {
            c && !c.done && (o = h["return"]) && o.call(h);
          } finally {
            if (i) throw i.error;
          }
        } else (f = e.views.get(a)) && (u = u.concat(Hi(f, n, r)), zi(f) && (e.views["delete"](a), f.query._queryParams.loadsAllData() || s.push(f.query)));
        return l && !io(e) && s.push((g(Ui, "Reference.ts has not been loaded"), new Ui(t._repo, t._path))), {
          removed: s,
          events: u
        };
      }

      function eo(e) {
        var t,
            n,
            r = [];

        try {
          for (var i = _(e.views.values()), o = i.next(); !o.done; o = i.next()) {
            var a = o.value;
            a.query._queryParams.loadsAllData() || r.push(a);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            o && !o.done && (n = i["return"]) && n.call(i);
          } finally {
            if (t) throw t.error;
          }
        }

        return r;
      }

      function to(e, t) {
        var n,
            r,
            i,
            o,
            a,
            s = null;

        try {
          for (var u = _(e.views.values()), l = u.next(); !l.done; l = u.next()) {
            var h = l.value,
                s = s || (o = t, a = void 0, (a = ti((i = h).viewCache_)) && (i.query._queryParams.loadsAllData() || !jt(o) && !a.getImmediateChild(Ot(o)).isEmpty()) ? a.getChild(o) : null);
          }
        } catch (e) {
          n = {
            error: e
          };
        } finally {
          try {
            l && !l.done && (r = u["return"]) && r.call(u);
          } finally {
            if (n) throw n.error;
          }
        }

        return s;
      }

      function no(e, t) {
        if (t._queryParams.loadsAllData()) return oo(e);
        t = t._queryIdentifier;
        return e.views.get(t);
      }

      function ro(e, t) {
        return null != no(e, t);
      }

      function io(e) {
        return null != oo(e);
      }

      function oo(e) {
        var t, n;

        try {
          for (var r = _(e.views.values()), i = r.next(); !i.done; i = r.next()) {
            var o = i.value;
            if (o.query._queryParams.loadsAllData()) return o;
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            i && !i.done && (n = r["return"]) && n.call(r);
          } finally {
            if (t) throw t.error;
          }
        }

        return null;
      }

      var ao = 1,
          so = function so(e) {
        this.listenProvider_ = e, this.syncPointTree_ = new ni(null), this.pendingWriteTree_ = {
          visibleWrites: ii.empty(),
          allWrites: [],
          lastWriteId: -1
        }, this.tagToQueryMap = new Map(), this.queryToTagMap = new Map();
      };

      function uo(e, t, n, r, i) {
        var o, a, s, u;
        return o = e.pendingWriteTree_, a = t, s = n, u = i, g((r = r) > o.lastWriteId, "Stacking an older write on top of newer ones"), o.allWrites.push({
          path: a,
          snap: s,
          writeId: r,
          visible: u = void 0 === u ? !0 : u
        }), u && (o.visibleWrites = ai(o.visibleWrites, a, s)), o.lastWriteId = r, i ? vo(e, new Ur(Ar(), t, n)) : [];
      }

      function lo(e, t, n, r) {
        var i, o, a;
        i = e.pendingWriteTree_, o = t, a = n, g((r = r) > i.lastWriteId, "Stacking an older merge on top of newer ones"), i.allWrites.push({
          path: o,
          children: a,
          writeId: r,
          visible: !0
        }), i.visibleWrites = si(i.visibleWrites, o, a), i.lastWriteId = r;
        n = ni.fromObject(n);
        return vo(e, new Vr(Ar(), t, n));
      }

      function ho(e, t, n) {
        void 0 === n && (n = !1);

        var r = function (e, t) {
          for (var n = 0; n < e.allWrites.length; n++) {
            var r = e.allWrites[n];
            if (r.writeId === t) return r;
          }

          return null;
        }(e.pendingWriteTree_, t);

        if (yi(e.pendingWriteTree_, t)) {
          var i = new ni(null);
          return null != r.snap ? i = i.set(Dt(), !0) : Le(r.children, function (e) {
            i = i.set(new xt(e), !0);
          }), vo(e, new Fr(r.path, i, n));
        }

        return [];
      }

      function co(e, t, n) {
        return vo(e, new Ur(Lr(), t, n));
      }

      function po(n, e, t, r) {
        var i = e._path,
            o = n.syncPointTree_.get(i),
            a = [];

        if (o && ("default" === e._queryIdentifier || ro(o, e))) {
          var s = Zi(o, e, t, r);
          0 === o.views.size && (n.syncPointTree_ = n.syncPointTree_.remove(i));
          t = s.removed, a = s.events, o = -1 !== t.findIndex(function (e) {
            return e._queryParams.loadsAllData();
          }), s = n.syncPointTree_.findOnPath(i, function (e, t) {
            return io(t);
          });

          if (o && !s) {
            i = n.syncPointTree_.subtree(i);
            if (!i.isEmpty()) for (var u = i.fold(function (e, t, n) {
              if (t && io(t)) return [oo(t)];
              var r = [];
              return t && (r = eo(t)), Le(n, function (e, t) {
                r = r.concat(t);
              }), r;
            }), l = 0; l < u.length; ++l) {
              var h = u[l],
                  c = h.query,
                  h = mo(n, h);
              n.listenProvider_.startListening(Io(c), wo(n, c), h.hashFn, h.onComplete);
            }
          }

          !s && 0 < t.length && !r && (o ? n.listenProvider_.stopListening(Io(e), null) : t.forEach(function (e) {
            var t = n.queryToTagMap.get(Co(e));
            n.listenProvider_.stopListening(Io(e), t);
          })), function (e, t) {
            for (var n = 0; n < t.length; ++n) {
              var r,
                  i = t[n];
              i._queryParams.loadsAllData() || (r = Co(i), i = e.queryToTagMap.get(r), e.queryToTagMap["delete"](r), e.tagToQueryMap["delete"](i));
            }
          }(n, t);
        }

        return a;
      }

      function fo(e, t, n) {
        var r = t._path,
            i = null,
            o = !1;
        e.syncPointTree_.foreachOnPath(r, function (e, t) {
          e = Ut(e, r);
          i = i || to(t, e), o = o || io(t);
        });
        var a = e.syncPointTree_.get(r);
        a ? (o = o || io(a), i = i || to(a, Dt())) : (a = new Gi(), e.syncPointTree_ = e.syncPointTree_.set(r, a)), null != i ? h = !0 : (h = !1, i = jn.EMPTY_NODE, e.syncPointTree_.subtree(r).foreachChild(function (e, t) {
          t = to(t, Dt());
          t && (i = i.updateImmediateChild(e, t));
        }));
        var s,
            u,
            l = ro(a, t);
        l || t._queryParams.loadsAllData() || (s = Co(t), g(!e.queryToTagMap.has(s), "View does not exist, but we have a tag"), u = ao++, e.queryToTagMap.set(s, u), e.tagToQueryMap.set(u, s));
        var h = Xi(a, t, n, _i(e.pendingWriteTree_, r), i, h);
        return l || o || (a = no(a, t), h = h.concat(function (e, t, n) {
          var r = t._path,
              i = wo(e, t),
              n = mo(e, n),
              n = e.listenProvider_.startListening(Io(t), i, n.hashFn, n.onComplete),
              r = e.syncPointTree_.subtree(r);
          if (i) g(!io(r.value), "If we're adding a query, it shouldn't be shadowed");else for (var o = r.fold(function (e, t, n) {
            if (!jt(e) && t && io(t)) return [oo(t).query];
            var r = [];
            return t && (r = r.concat(eo(t).map(function (e) {
              return e.query;
            }))), Le(n, function (e, t) {
              r = r.concat(t);
            }), r;
          }), a = 0; a < o.length; ++a) {
            var s = o[a];
            e.listenProvider_.stopListening(Io(s), wo(e, s));
          }
          return n;
        }(e, t, a))), h;
      }

      function _o(e, n, t) {
        var r = e.pendingWriteTree_,
            e = e.syncPointTree_.findOnPath(n, function (e, t) {
          e = to(t, Ut(e, n));
          if (e) return e;
        });
        return mi(r, n, e, t, !0);
      }

      function yo(e, t) {
        var n = t._path,
            r = null;
        e.syncPointTree_.foreachOnPath(n, function (e, t) {
          e = Ut(e, n);
          r = r || to(t, e);
        });
        var i = e.syncPointTree_.get(n);
        i ? r = r || to(i, Dt()) : (i = new Gi(), e.syncPointTree_ = e.syncPointTree_.set(n, i));
        var o = null != r,
            a = o ? new Hr(r, !0, !1) : null;
        return ei(Ji(i, t, _i(e.pendingWriteTree_, t._path), o ? a.getNode() : jn.EMPTY_NODE, o).viewCache_);
      }

      function vo(e, t) {
        return function e(t, n, r, i) {
          {
            if (jt(t.path)) return go(t, n, r, i);
            var o = n.get(Dt());
            null == r && null != o && (r = to(o, Dt()));
            var a = [],
                s = Ot(t.path),
                u = t.operationForChild(s),
                l = n.children.get(s);
            return l && u && (n = r ? r.getImmediateChild(s) : null, s = Si(i, s), a = a.concat(e(u, l, n, s))), a = o ? a.concat($i(o, t, i, r)) : a;
          }
        }(t, e.syncPointTree_, null, _i(e.pendingWriteTree_, Dt()));
      }

      function go(i, e, o, a) {
        var t = e.get(Dt());
        null == o && null != t && (o = to(t, Dt()));
        var s = [];
        return e.children.inorderTraversal(function (e, t) {
          var n = o ? o.getImmediateChild(e) : null,
              r = Si(a, e),
              e = i.operationForChild(e);
          e && (s = s.concat(go(e, t, n, r)));
        }), s = t ? s.concat($i(t, i, a, o)) : s;
      }

      function mo(n, e) {
        var r = e.query,
            i = wo(n, r);
        return {
          hashFn: function hashFn() {
            return (e.viewCache_.serverCache.getNode() || jn.EMPTY_NODE).hash();
          },
          onComplete: function onComplete(e) {
            if ("ok" === e) return i ? function (e, t, n) {
              var r = bo(e, n);

              if (r) {
                n = To(r), r = n.path, n = n.queryId, t = Ut(r, t);
                return Eo(e, r, new Wr(Mr(n), t));
              }

              return [];
            }(n, r._path, i) : (t = r._path, vo(n, new Wr(Lr(), t)));
            var t,
                t = (t = "Unknown Error", "too_big" === (e = e) ? t = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" === e ? t = "Client doesn't have permission to access the desired data." : "unavailable" === e && (t = "The service is unavailable"), (t = new Error(e + " at " + r._path.toString() + ": " + t)).code = e.toUpperCase(), t);
            return po(n, r, null, t);
          }
        };
      }

      function wo(e, t) {
        t = Co(t);
        return e.queryToTagMap.get(t);
      }

      function Co(e) {
        return e._path.toString() + "$" + e._queryIdentifier;
      }

      function bo(e, t) {
        return e.tagToQueryMap.get(t);
      }

      function To(e) {
        var t = e.indexOf("$");
        return g(-1 !== t && t < e.length - 1, "Bad queryKey."), {
          queryId: e.substr(t + 1),
          path: new xt(e.substr(0, t))
        };
      }

      function Eo(e, t, n) {
        var r = e.syncPointTree_.get(t);
        return g(r, "Missing sync point for query tag that we're tracking"), $i(r, n, _i(e.pendingWriteTree_, t), null);
      }

      function Io(e) {
        return e._queryParams.loadsAllData() && !e._queryParams.isDefault() ? (g(Ki, "Reference.ts has not been loaded"), new Ki(e._repo, e._path)) : e;
      }

      var So = (ko.prototype.getImmediateChild = function (e) {
        return new ko(this.node_.getImmediateChild(e));
      }, ko.prototype.node = function () {
        return this.node_;
      }, ko);

      function ko(e) {
        this.node_ = e;
      }

      var Po = (No.prototype.getImmediateChild = function (e) {
        e = Wt(this.path_, e);
        return new No(this.syncTree_, e);
      }, No.prototype.node = function () {
        return _o(this.syncTree_, this.path_);
      }, No);

      function No(e, t) {
        this.syncTree_ = e, this.path_ = t;
      }

      var xo = function xo(e) {
        return (e = e || {}).timestamp = e.timestamp || new Date().getTime(), e;
      },
          Ro = function Ro(e, t, n) {
        return e && "object" == _typeof(e) ? (g(".sv" in e, "Unexpected leaf node or priority contents"), "string" == typeof e[".sv"] ? Do(e[".sv"], t, n) : "object" == _typeof(e[".sv"]) ? Oo(e[".sv"], t) : void g(!1, "Unexpected server value: " + JSON.stringify(e, null, 2))) : e;
      },
          Do = function Do(e, t, n) {
        if ("timestamp" === e) return n.timestamp;
        g(!1, "Unexpected server value: " + e);
      },
          Oo = function Oo(e, t, n) {
        e.hasOwnProperty("increment") || g(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
        e = e.increment;
        "number" != typeof e && g(!1, "Unexpected increment value: " + e);
        t = t.node();
        if (g(null != t, "Expected ChildrenNode.EMPTY_NODE for nulls"), !t.isLeafNode()) return e;
        t = t.getValue();
        return "number" != typeof t ? e : t + e;
      },
          Ao = function Ao(e, t, n, r) {
        return Mo(t, new Po(n, e), r);
      },
          Lo = function Lo(e, t, n) {
        return Mo(e, new So(t), n);
      };

      function Mo(e, r, i) {
        var t = e.getPriority().val(),
            n = Ro(t, r.getImmediateChild(".priority"), i);

        if (e.isLeafNode()) {
          var o = e,
              t = Ro(o.getValue(), r, i);
          return t !== o.getValue() || n !== o.getPriority().val() ? new Sn(t, Hn(n)) : e;
        }

        var e = e,
            a = e;
        return n !== e.getPriority().val() && (a = a.updatePriority(new Sn(n))), e.forEachChild(Nn, function (e, t) {
          var n = Mo(t, r.getImmediateChild(e), i);
          n !== t && (a = a.updateImmediateChild(e, n));
        }), a;
      }

      var Fo = function Fo(e, t, n) {
        void 0 === t && (t = null), void 0 === n && (n = {
          children: {},
          childCount: 0
        }), this.name = e = void 0 === e ? "" : e, this.parent = t, this.node = n;
      };

      function qo(e, t) {
        for (var n = t instanceof xt ? t : new xt(t), r = e, i = Ot(n); null !== i;) {
          var o = O(r.node.children, i) || {
            children: {},
            childCount: 0
          },
              r = new Fo(i, r, o),
              i = Ot(n = Lt(n));
        }

        return r;
      }

      function Wo(e) {
        return e.node.value;
      }

      function jo(e, t) {
        e.node.value = t, zo(e);
      }

      function Uo(e) {
        return 0 < e.node.childCount;
      }

      function Bo(n, r) {
        Le(n.node.children, function (e, t) {
          r(new Fo(e, n, t));
        });
      }

      function Vo(e) {
        return new xt(null === e.parent ? e.name : Vo(e.parent) + "/" + e.name);
      }

      function zo(e) {
        var t, n, r, i;
        null !== e.parent && (t = e.parent, n = e.name, i = function (e) {
          return void 0 === Wo(e) && !Uo(e);
        }(r = e), e = D(t.node.children, n), i && e ? (delete t.node.children[n], t.node.childCount--, zo(t)) : i || e || (t.node.children[n] = r.node, t.node.childCount++, zo(t)));
      }

      function Ho(e) {
        return "string" == typeof e && 0 !== e.length && !$o.test(e);
      }

      function Qo(e) {
        return "string" == typeof e && 0 !== e.length && !Jo.test(e);
      }

      function Yo(e, t, n, r) {
        if (!r || void 0 !== t) {
          var i = j(e, "values");
          if (!t || "object" != _typeof(t) || Array.isArray(t)) throw new Error(i + " must be an object containing the children to replace.");
          var o = [];
          Le(t, function (e, t) {
            e = new xt(e);
            if (ta(i, t, Wt(n, e)), ".priority" === Mt(e) && !Zo(t)) throw new Error(i + "contains an invalid value for '" + e.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
            o.push(e);
          }), function (e, t) {
            for (var n = 0; n < t.length; n++) {
              for (var r, i = Ft(r = t[n]), o = 0; o < i.length; o++) {
                if ((".priority" !== i[o] || o !== i.length - 1) && !Ho(i[o])) throw new Error(e + "contains an invalid key (" + i[o] + ") in path " + r.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
              }
            }

            t.sort(Bt);
            var a = null;

            for (n = 0; n < t.length; n++) {
              if (r = t[n], null !== a && zt(a, r)) throw new Error(e + "contains a path " + a.toString() + " that is ancestor of another path " + r.toString());
              a = r;
            }
          }(i, o);
        }
      }

      function Ko(e, t, n) {
        if (!n || void 0 !== t) {
          if (fe(t)) throw new Error(j(e, "priority") + "is " + t.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
          if (!Zo(t)) throw new Error(j(e, "priority") + "must be a valid Firebase priority (a string, finite number, server value, or null).");
        }
      }

      function Go(e, t, n, r) {
        if (!(r && void 0 === n || Ho(n))) throw new Error(j(e, t) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');
      }

      var $o = /[\[\].#$\/\u0000-\u001F\u007F]/,
          Jo = /[\[\].#$\u0000-\u001F\u007F]/,
          Xo = 10485760,
          Zo = function Zo(e) {
        return null === e || "string" == typeof e || "number" == typeof e && !fe(e) || e && "object" == _typeof(e) && D(e, ".sv");
      },
          ea = function ea(e, t, n, r) {
        r && void 0 === t || ta(j(e, "value"), t, n);
      },
          ta = function ta(r, e, t) {
        var i = t instanceof xt ? new Ht(t, r) : t;
        if (void 0 === e) throw new Error(r + "contains undefined " + Yt(i));
        if ("function" == typeof e) throw new Error(r + "contains a function " + Yt(i) + " with contents = " + e.toString());
        if (fe(e)) throw new Error(r + "contains " + e.toString() + " " + Yt(i));
        if ("string" == typeof e && e.length > Xo / 3 && V(e) > Xo) throw new Error(r + "contains a string greater than " + Xo + " utf8 bytes " + Yt(i) + " ('" + e.substring(0, 50) + "...')");

        if (e && "object" == _typeof(e)) {
          var o = !1,
              a = !1;
          if (Le(e, function (e, t) {
            if (".value" === e) o = !0;else if (".priority" !== e && ".sv" !== e && (a = !0, !Ho(e))) throw new Error(r + " contains an invalid key (" + e + ") " + Yt(i) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
            var n;
            n = e, 0 < (e = i).parts_.length && (e.byteLength_ += 1), e.parts_.push(n), e.byteLength_ += V(n), Qt(e), ta(r, t, i), t = (e = i).parts_.pop(), e.byteLength_ -= V(t), 0 < e.parts_.length && --e.byteLength_;
          }), o && a) throw new Error(r + ' contains ".value" child ' + Yt(i) + " in addition to actual children.");
        }
      },
          na = function na(e, t, n, r) {
        if (!(r && void 0 === n || Qo(n))) throw new Error(j(e, t) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');
      },
          ra = function ra(e, t, n, r) {
        n = n && n.replace(/^\/*\.info(\/|$)/, "/"), na(e, t, n, r);
      },
          ia = function ia(e, t) {
        if (".info" === Ot(t)) throw new Error(e + " failed = Can't modify data under /.info/");
      },
          oa = function oa(e, t) {
        var n = t.path.toString();
        if ("string" != typeof t.repoInfo.host || 0 === t.repoInfo.host.length || !Ho(t.repoInfo.namespace) && "localhost" !== t.repoInfo.host.split(":")[0] || 0 !== n.length && (n = (n = n) && n.replace(/^\/*\.info(\/|$)/, "/"), !Qo(n))) throw new Error(j(e, "url") + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');
      },
          aa = function aa() {
        this.eventLists_ = [], this.recursionDepth_ = 0;
      };

      function sa(e, t) {
        for (var n = null, r = 0; r < t.length; r++) {
          var i = t[r],
              o = i.getPath();
          null === n || Vt(o, n.path) || (e.eventLists_.push(n), n = null), (n = null === n ? {
            events: [],
            path: o
          } : n).events.push(i);
        }

        n && e.eventLists_.push(n);
      }

      function ua(e, t, n) {
        sa(e, n), ha(e, function (e) {
          return Vt(e, t);
        });
      }

      function la(e, t, n) {
        sa(e, n), ha(e, function (e) {
          return zt(e, t) || zt(t, e);
        });
      }

      function ha(e, t) {
        e.recursionDepth_++;

        for (var n = !0, r = 0; r < e.eventLists_.length; r++) {
          var i = e.eventLists_[r];
          i && (t(i.path) ? (function (e) {
            for (var t = 0; t < e.events.length; t++) {
              var n,
                  r = e.events[t];
              null !== r && (e.events[t] = null, n = r.getEventRunner(), Ie && ke("event: " + r.toString()), Be(n));
            }
          }(e.eventLists_[r]), e.eventLists_[r] = null) : n = !1);
        }

        n && (e.eventLists_ = []), e.recursionDepth_--;
      }

      var ca = "repo_interrupt",
          pa = 25,
          da = (fa.prototype.toString = function () {
        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
      }, fa);

      function fa(e, t, n, r) {
        this.repoInfo_ = e, this.forceRestClient_ = t, this.authTokenProvider_ = n, this.appCheckProvider_ = r, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new aa(), this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = Sr(), this.transactionQueueTree_ = new Fo(), this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString();
      }

      function _a(a, e, t) {
        if (a.stats_ = ot(a.repoInfo_), a.forceRestClient_ || 0 <= ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)) a.server_ = new br(a.repoInfo_, function (e, t, n, r) {
          ga(a, e, t, n, r);
        }, a.authTokenProvider_, a.appCheckProvider_), setTimeout(function () {
          return ma(a, !0);
        }, 0);else {
          if (null != t) {
            if ("object" != _typeof(t)) throw new Error("Only objects are supported for option databaseAuthVariableOverride");

            try {
              x(t);
            } catch (e) {
              throw new Error("Invalid authOverride provided: " + e);
            }
          }

          a.persistentConnection_ = new en(a.repoInfo_, e, function (e, t, n, r) {
            ga(a, e, t, n, r);
          }, function (e) {
            ma(a, e);
          }, function (e) {
            var n;
            n = a, Le(e, function (e, t) {
              wa(n, e, t);
            });
          }, a.authTokenProvider_, a.appCheckProvider_, t), a.server_ = a.persistentConnection_;
        }
        a.authTokenProvider_.addTokenChangeListener(function (e) {
          a.server_.refreshAuthToken(e);
        }), a.appCheckProvider_.addTokenChangeListener(function (e) {
          a.server_.refreshAppCheckToken(e.token);
        }), a.statsReporter_ = (e = a.repoInfo_, t = function t() {
          return new Dr(a.stats_, a.server_);
        }, e = e.toString(), it[e] || (it[e] = t()), it[e]), a.infoData_ = new Er(), a.infoSyncTree_ = new so({
          startListening: function startListening(e, t, n, r) {
            var i = [],
                o = a.infoData_.getNode(e._path);
            return o.isEmpty() || (i = co(a.infoSyncTree_, e._path, o), setTimeout(function () {
              r("ok");
            }, 0)), i;
          },
          stopListening: function stopListening() {}
        }), wa(a, "connected", !1), a.serverSyncTree_ = new so({
          startListening: function startListening(n, e, t, r) {
            return a.server_.listen(n, t, e, function (e, t) {
              t = r(e, t);
              la(a.eventQueue_, n._path, t);
            }), [];
          },
          stopListening: function stopListening(e, t) {
            a.server_.unlisten(e, t);
          }
        });
      }

      function ya(e) {
        e = e.infoData_.getNode(new xt(".info/serverTimeOffset")).val() || 0;
        return new Date().getTime() + e;
      }

      function va(e) {
        return xo({
          timestamp: ya(e)
        });
      }

      function ga(e, t, n, r, i) {
        e.dataUpdateCount++;
        var o = new xt(t);
        n = e.interceptServerDataCallback_ ? e.interceptServerDataCallback_(t, n) : n;
        var a,
            s,
            u,
            l,
            h = [],
            t = o;
        0 < (h = i ? r ? (a = L(n, function (e) {
          return Hn(e);
        }), function (e, t, n, r) {
          var i = bo(e, r);

          if (i) {
            r = To(i), i = r.path, r = r.queryId, t = Ut(i, t), n = ni.fromObject(n);
            return Eo(e, i, new Vr(Mr(r), t, n));
          }

          return [];
        }(e.serverSyncTree_, o, a, i)) : (l = Hn(n), a = e.serverSyncTree_, s = o, u = l, null == (i = bo(a, l = i)) ? [] : (l = To(i), i = l.path, l = l.queryId, s = Ut(i, s), Eo(a, i, new Ur(Mr(l), s, u)))) : r ? (l = L(n, function (e) {
          return Hn(e);
        }), s = e.serverSyncTree_, u = o, r = l, r = ni.fromObject(l), vo(s, new Vr(Lr(), u, r))) : (n = Hn(n), co(e.serverSyncTree_, o, n))).length && (t = Ra(e, o)), la(e.eventQueue_, t, h);
      }

      function ma(e, t) {
        wa(e, "connected", t), !1 === t && function (n) {
          ka(n, "onDisconnectEvents");
          var r = va(n),
              i = Sr();
          Pr(n.onDisconnect_, Dt(), function (e, t) {
            t = Ao(e, t, n.serverSyncTree_, r);
            kr(i, e, t);
          });
          var o = [];
          Pr(i, Dt(), function (e, t) {
            o = o.concat(co(n.serverSyncTree_, e, t));
            e = La(n, e);
            Ra(n, e);
          }), n.onDisconnect_ = Sr(), la(n.eventQueue_, Dt(), o);
        }(e);
      }

      function wa(e, t, n) {
        t = new xt("/.info/" + t), n = Hn(n);
        e.infoData_.updateSnapshot(t, n);
        n = co(e.infoSyncTree_, t, n);
        la(e.eventQueue_, t, n);
      }

      function Ca(e) {
        return e.nextWriteId_++;
      }

      function ba(r, i, e, t, o) {
        ka(r, "set", {
          path: i.toString(),
          value: e,
          priority: t
        });

        var n = va(r),
            e = Hn(e, t),
            t = _o(r.serverSyncTree_, i),
            n = Lo(e, t, n),
            a = Ca(r),
            n = uo(r.serverSyncTree_, i, n, a, !0);

        sa(r.eventQueue_, n), r.server_.put(i.toString(), e.val(!0), function (e, t) {
          var n = "ok" === e;
          n || xe("set at " + i + " failed: " + e);
          n = ho(r.serverSyncTree_, a, !n);
          la(r.eventQueue_, i, n), Pa(0, o, e, t);
        });
        e = La(r, i);
        Ra(r, e), la(r.eventQueue_, e, []);
      }

      function Ta(n, r, i) {
        n.server_.onDisconnectCancel(r.toString(), function (e, t) {
          "ok" === e && !function e(n, t) {
            if (jt(t)) return n.value = null, n.children.clear(), !0;

            if (null !== n.value) {
              if (n.value.isLeafNode()) return !1;
              var r = n.value;
              return n.value = null, r.forEachChild(Nn, function (e, t) {
                kr(n, new xt(e), t);
              }), e(n, t);
            }

            if (0 < n.children.size) return r = Ot(t), t = Lt(t), n.children.has(r) && e(n.children.get(r), t) && n.children["delete"](r), 0 === n.children.size;
            return !0;
          }(n.onDisconnect_, r), Pa(0, i, e, t);
        });
      }

      function Ea(n, r, e, i) {
        var o = Hn(e);
        n.server_.onDisconnectPut(r.toString(), o.val(!0), function (e, t) {
          "ok" === e && kr(n.onDisconnect_, r, o), Pa(0, i, e, t);
        });
      }

      function Ia(e, t, n) {
        n = ".info" === Ot(t._path) ? po(e.infoSyncTree_, t, n) : po(e.serverSyncTree_, t, n);
        ua(e.eventQueue_, t._path, n);
      }

      function Sa(e) {
        e.persistentConnection_ && e.persistentConnection_.interrupt(ca);
      }

      function ka(e) {
        for (var t = [], n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }

        var r = "";
        e.persistentConnection_ && (r = e.persistentConnection_.id + ":"), ke.apply(void 0, a([r], y(t)));
      }

      function Pa(e, n, r, i) {
        n && Be(function () {
          var e, t;
          "ok" === r ? n(null) : (t = e = (r || "error").toUpperCase(), i && (t += ": " + i), (t = new Error(t)).code = e, n(t));
        });
      }

      function Na(e, t, n) {
        return _o(e.serverSyncTree_, t, n) || jn.EMPTY_NODE;
      }

      function xa(t, e) {
        var n;
        (e = void 0 === e ? t.transactionQueueTree_ : e) || Aa(t, e), Wo(e) ? (n = Oa(t, e), g(0 < n.length, "Sending zero length transaction queue"), n.every(function (e) {
          return 0 === e.status;
        }) && function (i, o, a) {
          for (var e = a.map(function (e) {
            return e.currentWriteId;
          }), t = Na(i, o, e), n = t, e = t.hash(), r = 0; r < a.length; r++) {
            var s = a[r];
            g(0 === s.status, "tryToSendTransactionQueue_: items in queue should all be run."), s.status = 1, s.retryCount++;
            var u = Ut(o, s.path);
            n = n.updateChild(u, s.currentOutputSnapshotRaw);
          }

          var t = n.val(!0),
              l = o;
          i.server_.put(l.toString(), t, function (e) {
            ka(i, "transaction put response", {
              path: l.toString(),
              status: e
            });
            var t = [];

            if ("ok" === e) {
              for (var n = [], r = 0; r < a.length; r++) {
                !function (e) {
                  a[e].status = 2, t = t.concat(ho(i.serverSyncTree_, a[e].currentWriteId)), a[e].onComplete && n.push(function () {
                    return a[e].onComplete(null, !0, a[e].currentOutputSnapshotResolved);
                  }), a[e].unwatcher();
                }(r);
              }

              Aa(i, qo(i.transactionQueueTree_, o)), xa(i, i.transactionQueueTree_), la(i.eventQueue_, o, t);

              for (r = 0; r < n.length; r++) {
                Be(n[r]);
              }
            } else {
              if ("datastale" === e) for (r = 0; r < a.length; r++) {
                3 === a[r].status ? a[r].status = 4 : a[r].status = 0;
              } else {
                xe("transaction at " + l.toString() + " failed: " + e);

                for (r = 0; r < a.length; r++) {
                  a[r].status = 4, a[r].abortReason = e;
                }
              }
              Ra(i, o);
            }
          }, e);
        }(t, Vo(e), n)) : Uo(e) && Bo(e, function (e) {
          xa(t, e);
        });
      }

      function Ra(e, t) {
        var n = Da(e, t),
            t = Vo(n);
        return function (u, l, h) {
          if (0 !== l.length) {
            for (var c = [], p = [], d = l.filter(function (e) {
              return 0 === e.status;
            }).map(function (e) {
              return e.currentWriteId;
            }), e = 0; e < l.length; e++) {
              !function (e) {
                var t,
                    n,
                    r,
                    i,
                    o = l[e],
                    a = Ut(h, o.path),
                    s = !1;
                g(null !== a, "rerunTransactionsUnderNode_: relativePath should not be null."), 4 === o.status ? (t = o.abortReason, p = p.concat(ho(u.serverSyncTree_, o.currentWriteId, s = !0))) : 0 === o.status && (p = o.retryCount >= pa ? (t = "maxretry", p.concat(ho(u.serverSyncTree_, o.currentWriteId, s = !0))) : (n = Na(u, o.path, d), o.currentInputSnapshot = n, void 0 !== (i = l[e].update(n.val())) ? (ta("transaction failed: Data returned ", i, o.path), r = Hn(i), "object" == _typeof(i) && null != i && D(i, ".priority") || (r = r.updatePriority(n.getPriority())), a = o.currentWriteId, i = va(u), i = Lo(r, n, i), o.currentOutputSnapshotRaw = r, o.currentOutputSnapshotResolved = i, o.currentWriteId = Ca(u), d.splice(d.indexOf(a), 1), (p = p.concat(uo(u.serverSyncTree_, o.path, i, o.currentWriteId, o.applyLocally))).concat(ho(u.serverSyncTree_, a, !0))) : (t = "nodata", p.concat(ho(u.serverSyncTree_, o.currentWriteId, s = !0))))), la(u.eventQueue_, h, p), p = [], s && (l[e].status = 2, s = l[e].unwatcher, setTimeout(s, Math.floor(0)), l[e].onComplete && ("nodata" === t ? c.push(function () {
                  return l[e].onComplete(null, !1, l[e].currentInputSnapshot);
                }) : c.push(function () {
                  return l[e].onComplete(new Error(t), !1, null);
                })));
              }(e);
            }

            Aa(u, u.transactionQueueTree_);

            for (e = 0; e < c.length; e++) {
              Be(c[e]);
            }

            xa(u, u.transactionQueueTree_);
          }
        }(e, Oa(e, n), t), t;
      }

      function Da(e, t) {
        for (var n = e.transactionQueueTree_, r = Ot(t); null !== r && void 0 === Wo(n);) {
          n = qo(n, r), r = Ot(t = Lt(t));
        }

        return n;
      }

      function Oa(e, t) {
        var n = [];
        return function t(n, e, r) {
          var i = Wo(e);
          if (i) for (var o = 0; o < i.length; o++) {
            r.push(i[o]);
          }
          Bo(e, function (e) {
            t(n, e, r);
          });
        }(e, t, n), n.sort(function (e, t) {
          return e.order - t.order;
        }), n;
      }

      function Aa(t, e) {
        var n = Wo(e);

        if (n) {
          for (var r = 0, i = 0; i < n.length; i++) {
            2 !== n[i].status && (n[r] = n[i], r++);
          }

          n.length = r, jo(e, 0 < n.length ? n : void 0);
        }

        Bo(e, function (e) {
          Aa(t, e);
        });
      }

      function La(t, e) {
        var n = Vo(Da(t, e)),
            e = qo(t.transactionQueueTree_, e);
        return function (e, t, n) {
          for (var r = n ? e : e.parent; null !== r;) {
            if (t(r)) return;
            r = r.parent;
          }
        }(e, function (e) {
          Ma(t, e);
        }), Ma(t, e), function t(e, n, r, i) {
          r && !i && n(e), Bo(e, function (e) {
            t(e, n, !0, i);
          }), r && i && n(e);
        }(e, function (e) {
          Ma(t, e);
        }), n;
      }

      function Ma(e, t) {
        var n = Wo(t);

        if (n) {
          for (var r = [], i = [], o = -1, a = 0; a < n.length; a++) {
            3 === n[a].status || (1 === n[a].status ? (g(o === a - 1, "All SENT items should be at beginning of queue."), n[o = a].status = 3, n[a].abortReason = "set") : (g(0 === n[a].status, "Unexpected transaction status in abort"), n[a].unwatcher(), i = i.concat(ho(e.serverSyncTree_, n[a].currentWriteId, !0)), n[a].onComplete && r.push(n[a].onComplete.bind(null, new Error("set"), !1, null))));
          }

          -1 === o ? jo(t, void 0) : n.length = o + 1, la(e.eventQueue_, Vo(t), i);

          for (a = 0; a < r.length; a++) {
            Be(r[a]);
          }
        }
      }

      var Fa = function Fa(e, t) {
        var n = qa(e),
            r = n.namespace;
        "firebase.com" === n.domain && Ne(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), r && "undefined" !== r || "localhost" === n.domain || Ne("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
        e = "ws" === n.scheme || "wss" === n.scheme;
        return {
          repoInfo: new Xe(n.host, n.secure, r, t, e, "", r !== n.subdomain),
          path: new xt(n.pathString)
        };
      },
          qa = function qa(e) {
        var t,
            n,
            r,
            i = "",
            o = "",
            a = "",
            s = "",
            u = "",
            l = !0,
            h = "https",
            c = 443;
        return "string" == typeof e && (0 <= (r = e.indexOf("//")) && (h = e.substring(0, r - 1), e = e.substring(r + 2)), -1 === (t = e.indexOf("/")) && (t = e.length), -1 === (n = e.indexOf("?")) && (n = e.length), i = e.substring(0, Math.min(t, n)), t < n && (s = function (e) {
          for (var t = "", n = e.split("/"), r = 0; r < n.length; r++) {
            if (0 < n[r].length) {
              var i = n[r];

              try {
                i = decodeURIComponent(i.replace(/\+/g, " "));
              } catch (e) {}

              t += "/" + i;
            }
          }

          return t;
        }(e.substring(t, n))), n = function (e) {
          var t,
              n,
              r = {};
          "?" === e.charAt(0) && (e = e.substring(1));

          try {
            for (var i = _(e.split("&")), o = i.next(); !o.done; o = i.next()) {
              var a,
                  s = o.value;
              0 !== s.length && (2 === (a = s.split("=")).length ? r[decodeURIComponent(a[0])] = decodeURIComponent(a[1]) : xe("Invalid query segment '" + s + "' in query '" + e + "'"));
            }
          } catch (e) {
            t = {
              error: e
            };
          } finally {
            try {
              o && !o.done && (n = i["return"]) && n.call(i);
            } finally {
              if (t) throw t.error;
            }
          }

          return r;
        }(e.substring(Math.min(e.length, n))), 0 <= (r = i.indexOf(":")) ? (l = "https" === h || "wss" === h, c = parseInt(i.substring(r + 1), 10)) : r = i.length, "localhost" === (r = i.slice(0, r)).toLowerCase() ? o = "localhost" : r.split(".").length <= 2 ? o = r : (r = i.indexOf("."), a = i.substring(0, r).toLowerCase(), o = i.substring(r + 1), u = a), "ns" in n && (u = n.ns)), {
          host: i,
          port: c,
          domain: o,
          subdomain: a,
          secure: l,
          scheme: h,
          pathString: s,
          namespace: u
        };
      },
          Wa = (ja.prototype.getPath = function () {
        var e = this.snapshot.ref;
        return ("value" === this.eventType ? e : e.parent)._path;
      }, ja.prototype.getEventType = function () {
        return this.eventType;
      }, ja.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
      }, ja.prototype.toString = function () {
        return this.getPath().toString() + ":" + this.eventType + ":" + x(this.snapshot.exportVal());
      }, ja);

      function ja(e, t, n, r) {
        this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = r;
      }

      var Ua = (Ba.prototype.getPath = function () {
        return this.path;
      }, Ba.prototype.getEventType = function () {
        return "cancel";
      }, Ba.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
      }, Ba.prototype.toString = function () {
        return this.path.toString() + ":cancel";
      }, Ba);

      function Ba(e, t, n) {
        this.eventRegistration = e, this.error = t, this.path = n;
      }

      var Va = (za.prototype.onValue = function (e, t) {
        this.snapshotCallback.call(null, e, t);
      }, za.prototype.onCancel = function (e) {
        return g(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e);
      }, Object.defineProperty(za.prototype, "hasCancelCallback", {
        get: function get() {
          return !!this.cancelCallback;
        },
        enumerable: !1,
        configurable: !0
      }), za.prototype.matches = function (e) {
        return this.snapshotCallback === e.snapshotCallback || this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context;
      }, za);

      function za(e, t) {
        this.snapshotCallback = e, this.cancelCallback = t;
      }

      var Ha = (Qa.prototype.cancel = function () {
        var e = new f();
        return Ta(this._repo, this._path, e.wrapCallback(function () {})), e.promise;
      }, Qa.prototype.remove = function () {
        ia("OnDisconnect.remove", this._path);
        var e = new f();
        return Ea(this._repo, this._path, null, e.wrapCallback(function () {})), e.promise;
      }, Qa.prototype.set = function (e) {
        ia("OnDisconnect.set", this._path), ea("OnDisconnect.set", e, this._path, !1);
        var t = new f();
        return Ea(this._repo, this._path, e, t.wrapCallback(function () {})), t.promise;
      }, Qa.prototype.setWithPriority = function (e, t) {
        ia("OnDisconnect.setWithPriority", this._path), ea("OnDisconnect.setWithPriority", e, this._path, !1), Ko("OnDisconnect.setWithPriority", t, !1);
        var n,
            r,
            i,
            o,
            a = new f();
        return n = this._repo, r = this._path, e = e, t = t, i = a.wrapCallback(function () {}), o = Hn(e, t), n.server_.onDisconnectPut(r.toString(), o.val(!0), function (e, t) {
          "ok" === e && kr(n.onDisconnect_, r, o), Pa(0, i, e, t);
        }), a.promise;
      }, Qa.prototype.update = function (e) {
        ia("OnDisconnect.update", this._path), Yo("OnDisconnect.update", e, this._path, !1);
        var t = new f();
        return function (n, r, i, o) {
          if (A(i)) return ke("onDisconnect().update() called with empty data.  Don't do anything."), Pa(0, o, "ok", void 0);
          n.server_.onDisconnectMerge(r.toString(), i, function (e, t) {
            "ok" === e && Le(i, function (e, t) {
              t = Hn(t);
              kr(n.onDisconnect_, Wt(r, e), t);
            }), Pa(0, o, e, t);
          });
        }(this._repo, this._path, e, t.wrapCallback(function () {})), t.promise;
      }, Qa);

      function Qa(e, t) {
        this._repo = e, this._path = t;
      }

      var Ya = (Object.defineProperty(Ka.prototype, "key", {
        get: function get() {
          return jt(this._path) ? null : Mt(this._path);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(Ka.prototype, "ref", {
        get: function get() {
          return new Za(this._repo, this._path);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(Ka.prototype, "_queryIdentifier", {
        get: function get() {
          var e = wr(this._queryParams),
              e = Ae(e);
          return "{}" === e ? "default" : e;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(Ka.prototype, "_queryObject", {
        get: function get() {
          return wr(this._queryParams);
        },
        enumerable: !1,
        configurable: !0
      }), Ka.prototype.isEqual = function (e) {
        if (!((e = z(e)) instanceof Ka)) return !1;
        var t = this._repo === e._repo,
            n = Vt(this._path, e._path),
            e = this._queryIdentifier === e._queryIdentifier;
        return t && n && e;
      }, Ka.prototype.toJSON = function () {
        return this.toString();
      }, Ka.prototype.toString = function () {
        return this._repo.toString() + function (e) {
          for (var t = "", n = e.pieceNum_; n < e.pieces_.length; n++) {
            "" !== e.pieces_[n] && (t += "/" + encodeURIComponent(String(e.pieces_[n])));
          }

          return t || "/";
        }(this._path);
      }, Ka);

      function Ka(e, t, n, r) {
        this._repo = e, this._path = t, this._queryParams = n, this._orderByCalled = r;
      }

      function Ga(e, t) {
        if (!0 === e._orderByCalled) throw new Error(t + ": You can't combine multiple orderBy calls.");
      }

      function $a(e) {
        var t = null,
            n = null;

        if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === ln) {
          var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
              i = "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";

          if (e.hasStart()) {
            if (e.getIndexStartName() !== Re) throw new Error(r);
            if ("string" != typeof t) throw new Error(i);
          }

          if (e.hasEnd()) {
            if (e.getIndexEndName() !== De) throw new Error(r);
            if ("string" != typeof n) throw new Error(i);
          }
        } else if (e.getIndex() === Nn) {
          if (null != t && !Zo(t) || null != n && !Zo(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).");
        } else if (g(e.getIndex() instanceof Kn || e.getIndex() === tr, "unknown index type."), null != t && "object" == _typeof(t) || null != n && "object" == _typeof(n)) throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.");
      }

      function Ja(e) {
        if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.");
      }

      var Xa,
          Za = (n(es, Xa = Ya), Object.defineProperty(es.prototype, "parent", {
        get: function get() {
          var e = qt(this._path);
          return null === e ? null : new es(this._repo, e);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(es.prototype, "root", {
        get: function get() {
          for (var e = this; null !== e.parent;) {
            e = e.parent;
          }

          return e;
        },
        enumerable: !1,
        configurable: !0
      }), es);

      function es(e, t) {
        return Xa.call(this, e, t, new fr(), !1) || this;
      }

      var ts = (Object.defineProperty(ns.prototype, "priority", {
        get: function get() {
          return this._node.getPriority().val();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(ns.prototype, "key", {
        get: function get() {
          return this.ref.key;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(ns.prototype, "size", {
        get: function get() {
          return this._node.numChildren();
        },
        enumerable: !1,
        configurable: !0
      }), ns.prototype.child = function (e) {
        var t = new xt(e),
            e = os(this.ref, e);
        return new ns(this._node.getChild(t), e, Nn);
      }, ns.prototype.exists = function () {
        return !this._node.isEmpty();
      }, ns.prototype.exportVal = function () {
        return this._node.val(!0);
      }, ns.prototype.forEach = function (n) {
        var r = this;
        return !this._node.isLeafNode() && !!this._node.forEachChild(this._index, function (e, t) {
          return n(new ns(t, os(r.ref, e), Nn));
        });
      }, ns.prototype.hasChild = function (e) {
        e = new xt(e);
        return !this._node.getChild(e).isEmpty();
      }, ns.prototype.hasChildren = function () {
        return !this._node.isLeafNode() && !this._node.isEmpty();
      }, ns.prototype.toJSON = function () {
        return this.exportVal();
      }, ns.prototype.val = function () {
        return this._node.val();
      }, ns);

      function ns(e, t, n) {
        this._node = e, this.ref = t, this._index = n;
      }

      function rs(e, t) {
        return (e = z(e))._checkNotDeleted("ref"), void 0 !== t ? os(e._root, t) : e._root;
      }

      function is(e, t) {
        (e = z(e))._checkNotDeleted("refFromURL");

        var n = Fa(t, e._repo.repoInfo_.nodeAdmin);
        oa("refFromURL", n);
        t = n.repoInfo;
        return e._repo.repoInfo_.isCustomHost() || t.host === e._repo.repoInfo_.host || Ne("refFromURL: Host name does not match the current database: (found " + t.host + " but expected " + e._repo.repoInfo_.host + ")"), rs(e, n.path.toString());
      }

      function os(e, t) {
        return (null === Ot((e = z(e))._path) ? ra : na)("child", "path", t, !1), new Za(e._repo, Wt(e._path, t));
      }

      function as(e, t) {
        e = z(e), ia("set", e._path), ea("set", t, e._path, !1);
        var n = new f();
        return ba(e._repo, e._path, t, null, n.wrapCallback(function () {})), n.promise;
      }

      function ss(e, t) {
        Yo("update", t, e._path, !1);
        var n = new f();
        return function (i, o, e, a) {
          ka(i, "update", {
            path: o.toString(),
            value: e
          });
          var s,
              t,
              n = !0,
              r = va(i),
              u = {};
          Le(e, function (e, t) {
            n = !1, u[e] = Ao(Wt(o, e), Hn(t), i.serverSyncTree_, r);
          }), n ? (ke("update() called with empty data.  Don't do anything."), Pa(0, a, "ok", void 0)) : (s = Ca(i), t = lo(i.serverSyncTree_, o, u, s), sa(i.eventQueue_, t), i.server_.merge(o.toString(), e, function (e, t) {
            var n = "ok" === e;
            n || xe("update at " + o + " failed: " + e);
            var r = ho(i.serverSyncTree_, s, !n),
                n = 0 < r.length ? Ra(i, o) : o;
            la(i.eventQueue_, n, r), Pa(0, a, e, t);
          }), Le(e, function (e) {
            e = La(i, Wt(o, e));
            Ra(i, e);
          }), la(i.eventQueue_, o, []));
        }(e._repo, e._path, t, n.wrapCallback(function () {})), n.promise;
      }

      function us(t) {
        return t = z(t), n = t._repo, r = t, (null != (e = yo(n.serverSyncTree_, r)) ? Promise.resolve(e) : n.server_.get(r).then(function (e) {
          var t = Hn(e).withIndex(r._queryParams.getIndex()),
              e = co(n.serverSyncTree_, r._path, t);
          return ua(n.eventQueue_, r._path, e), Promise.resolve(t);
        }, function (e) {
          return ka(n, "get for query " + x(r) + " failed: " + e), Promise.reject(new Error(e));
        })).then(function (e) {
          return new ts(e, new Za(t._repo, t._path), t._queryParams.getIndex());
        });
        var n, r, e;
      }

      var ls = (hs.prototype.respondsTo = function (e) {
        return "value" === e;
      }, hs.prototype.createEvent = function (e, t) {
        var n = t._queryParams.getIndex();

        return new Wa("value", this, new ts(e.snapshotNode, new Za(t._repo, t._path), n));
      }, hs.prototype.getEventRunner = function (e) {
        var t = this;
        return "cancel" === e.getEventType() ? function () {
          return t.callbackContext.onCancel(e.error);
        } : function () {
          return t.callbackContext.onValue(e.snapshot, null);
        };
      }, hs.prototype.createCancelEvent = function (e, t) {
        return this.callbackContext.hasCancelCallback ? new Ua(this, e, t) : null;
      }, hs.prototype.matches = function (e) {
        return e instanceof hs && (!e.callbackContext || !this.callbackContext || e.callbackContext.matches(this.callbackContext));
      }, hs.prototype.hasAnyCallback = function () {
        return null !== this.callbackContext;
      }, hs);

      function hs(e) {
        this.callbackContext = e;
      }

      var cs = (ps.prototype.respondsTo = function (e) {
        e = "children_added" === e ? "child_added" : e;
        return this.eventType === (e = "children_removed" === e ? "child_removed" : e);
      }, ps.prototype.createCancelEvent = function (e, t) {
        return this.callbackContext.hasCancelCallback ? new Ua(this, e, t) : null;
      }, ps.prototype.createEvent = function (e, t) {
        g(null != e.childName, "Child events should have a childName.");

        var n = os(new Za(t._repo, t._path), e.childName),
            t = t._queryParams.getIndex();

        return new Wa(e.type, this, new ts(e.snapshotNode, n, t), e.prevName);
      }, ps.prototype.getEventRunner = function (e) {
        var t = this;
        return "cancel" === e.getEventType() ? function () {
          return t.callbackContext.onCancel(e.error);
        } : function () {
          return t.callbackContext.onValue(e.snapshot, e.prevName);
        };
      }, ps.prototype.matches = function (e) {
        return e instanceof ps && this.eventType === e.eventType && (!this.callbackContext || !e.callbackContext || this.callbackContext.matches(e.callbackContext));
      }, ps.prototype.hasAnyCallback = function () {
        return !!this.callbackContext;
      }, ps);

      function ps(e, t) {
        this.eventType = e, this.callbackContext = t;
      }

      function ds(n, e, t, r, i) {
        var o;
        "object" == _typeof(r) && (a = void 0, i = r), "function" == typeof r && (a = r), i && i.onlyOnce && ((i = function i(e, t) {
          Ia(n._repo, n, s), o(e, t);
        }).userCallback = (o = t).userCallback, i.context = t.context, t = i);
        var a,
            t = new Va(t, a || void 0),
            s = "value" === e ? new ls(t) : new cs(e, t);
        return a = n._repo, e = s, e = ".info" === Ot((t = n)._path) ? fo(a.infoSyncTree_, t, e) : fo(a.serverSyncTree_, t, e), ua(a.eventQueue_, t._path, e), function () {
          return Ia(n._repo, n, s);
        };
      }

      function fs(e, t, n, r) {
        return ds(e, "value", t, n, r);
      }

      function _s(e, t, n, r) {
        return ds(e, "child_added", t, n, r);
      }

      function ys(e, t, n, r) {
        return ds(e, "child_changed", t, n, r);
      }

      function vs(e, t, n, r) {
        return ds(e, "child_moved", t, n, r);
      }

      function gs(e, t, n, r) {
        return ds(e, "child_removed", t, n, r);
      }

      function ms(e, t, n) {
        var r = null,
            n = n ? new Va(n) : null;
        "value" === t ? r = new ls(n) : t && (r = new cs(t, n)), Ia(e._repo, e, r);
      }

      var ws,
          Ct = function Ct() {},
          Cs = (n(bs, ws = Ct), bs.prototype._apply = function (e) {
        ea("endAt", this._value, e._path, !0);
        var t = vr(e._queryParams, this._value, this._key);
        if (Ja(t), $a(t), e._queryParams.hasEnd()) throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");
        return new Ya(e._repo, e._path, t, e._orderByCalled);
      }, bs);

      function bs(e, t) {
        var n = ws.call(this) || this;
        return n._value = e, n._key = t, n;
      }

      var Ts,
          Es = (n(Is, Ts = Ct), Is.prototype._apply = function (e) {
        ea("endBefore", this._value, e._path, !1);
        var t,
            n,
            r,
            r = (t = e._queryParams, n = this._value, r = this._key, (r = t.index_ === ln ? vr(t, n = "string" == typeof n ? Xn(n) : n, r) : vr(t, n, null == r ? Re : Xn(r))).endBeforeSet_ = !0, r);
        if (Ja(r), $a(r), e._queryParams.hasEnd()) throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");
        return new Ya(e._repo, e._path, r, e._orderByCalled);
      }, Is);

      function Is(e, t) {
        var n = Ts.call(this) || this;
        return n._value = e, n._key = t, n;
      }

      var Ss,
          ks = (n(Ps, Ss = Ct), Ps.prototype._apply = function (e) {
        ea("startAt", this._value, e._path, !0);
        var t = yr(e._queryParams, this._value, this._key);
        if (Ja(t), $a(t), e._queryParams.hasStart()) throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");
        return new Ya(e._repo, e._path, t, e._orderByCalled);
      }, Ps);

      function Ps(e, t) {
        var n = Ss.call(this) || this;
        return n._value = e, n._key = t, n;
      }

      var Ns,
          xs = (n(Rs, Ns = Ct), Rs.prototype._apply = function (e) {
        ea("startAfter", this._value, e._path, !1);
        var t,
            n,
            r,
            r = (t = e._queryParams, n = this._value, r = this._key, (r = t.index_ === ln ? yr(t, n = "string" == typeof n ? Jn(n) : n, r) : yr(t, n, null == r ? De : Jn(r))).startAfterSet_ = !0, r);
        if (Ja(r), $a(r), e._queryParams.hasStart()) throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");
        return new Ya(e._repo, e._path, r, e._orderByCalled);
      }, Rs);

      function Rs(e, t) {
        var n = Ns.call(this) || this;
        return n._value = e, n._key = t, n;
      }

      var Ds,
          Os = (n(As, Ds = Ct), As.prototype._apply = function (e) {
        if (e._queryParams.hasLimit()) throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");
        return new Ya(e._repo, e._path, (t = e._queryParams, n = this._limit, (t = t.copy()).limitSet_ = !0, t.limit_ = n, t.viewFrom_ = "l", t), e._orderByCalled);
        var t, n;
      }, As);

      function As(e) {
        var t = Ds.call(this) || this;
        return t._limit = e, t;
      }

      var Ls,
          Ms = (n(Fs, Ls = Ct), Fs.prototype._apply = function (e) {
        if (e._queryParams.hasLimit()) throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");
        return new Ya(e._repo, e._path, (t = e._queryParams, n = this._limit, (t = t.copy()).limitSet_ = !0, t.limit_ = n, t.viewFrom_ = "r", t), e._orderByCalled);
        var t, n;
      }, Fs);

      function Fs(e) {
        var t = Ls.call(this) || this;
        return t._limit = e, t;
      }

      var qs,
          Ws = (n(js, qs = Ct), js.prototype._apply = function (e) {
        Ga(e, "orderByChild");
        var t = new xt(this._path);
        if (jt(t)) throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");
        t = new Kn(t), t = gr(e._queryParams, t);
        return $a(t), new Ya(e._repo, e._path, t, !0);
      }, js);

      function js(e) {
        var t = qs.call(this) || this;
        return t._path = e, t;
      }

      var Us,
          Bs = (n(Vs, Us = Ct), Vs.prototype._apply = function (e) {
        Ga(e, "orderByKey");
        var t = gr(e._queryParams, ln);
        return $a(t), new Ya(e._repo, e._path, t, !0);
      }, Vs);

      function Vs() {
        return null !== Us && Us.apply(this, arguments) || this;
      }

      var zs,
          Hs = (n(Qs, zs = Ct), Qs.prototype._apply = function (e) {
        Ga(e, "orderByPriority");
        var t = gr(e._queryParams, Nn);
        return $a(t), new Ya(e._repo, e._path, t, !0);
      }, Qs);

      function Qs() {
        return null !== zs && zs.apply(this, arguments) || this;
      }

      var Ys,
          Ks = (n(Gs, Ys = Ct), Gs.prototype._apply = function (e) {
        Ga(e, "orderByValue");
        var t = gr(e._queryParams, tr);
        return $a(t), new Ya(e._repo, e._path, t, !0);
      }, Gs);

      function Gs() {
        return null !== Ys && Ys.apply(this, arguments) || this;
      }

      var $s,
          Js,
          Xs,
          Zs = (n(eu, $s = Ct), eu.prototype._apply = function (e) {
        if (ea("equalTo", this._value, e._path, !1), e._queryParams.hasStart()) throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");
        if (e._queryParams.hasEnd()) throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");
        return new Cs(this._value, this._key)._apply(new ks(this._value, this._key)._apply(e));
      }, eu);

      function eu(e, t) {
        var n = $s.call(this) || this;
        return n._value = e, n._key = t, n;
      }

      function tu(e) {
        for (var t, n, r = [], i = 1; i < arguments.length; i++) {
          r[i - 1] = arguments[i];
        }

        var o = z(e);

        try {
          for (var a = _(r), s = a.next(); !s.done; s = a.next()) {
            o = s.value._apply(o);
          }
        } catch (e) {
          t = {
            error: e
          };
        } finally {
          try {
            s && !s.done && (n = a["return"]) && n.call(a);
          } finally {
            if (t) throw t.error;
          }
        }

        return o;
      }

      Js = Za, g(!Ui, "__referenceConstructor has already been defined"), Ui = Js, Xs = Za, g(!Ki, "__referenceConstructor has already been defined"), Ki = Xs;
      var nu = "FIREBASE_DATABASE_EMULATOR_HOST",
          ru = {},
          iu = !1;

      function ou(e, t, n, r, i) {
        var o = r || e.options.databaseURL;
        void 0 === o && (e.options.projectId || Ne("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), ke("Using default host for project ", e.options.projectId), o = e.options.projectId + "-default-rtdb.firebaseio.com");
        var a,
            s = Fa(o, i),
            u = s.repoInfo,
            r = void 0;
        (r = "undefined" != typeof process ? process.env[nu] : r) ? (a = !0, o = "http://" + r + "?ns=" + u.namespace, u = (s = Fa(o, i)).repoInfo) : a = !s.repoInfo.secure;
        t = i && a ? new Ye(Ye.OWNER) : new He(e.name, e.options, t);
        oa("Invalid Firebase Database URL", s), jt(s.path) || Ne("Database URL must point to the root of a Firebase Database (not including a child path).");

        n = function (e, t, n, r) {
          var i = ru[t.name];
          i || (i = {}, ru[t.name] = i);
          (t = i[e.toURLString()]) && Ne("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
          return t = new da(e, iu, n, r), i[e.toURLString()] = t;
        }(u, e, t, new Ve(e.name, n));

        return new au(n, e);
      }

      var au = (Object.defineProperty(su.prototype, "_repo", {
        get: function get() {
          return this._instanceStarted || (_a(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(su.prototype, "_root", {
        get: function get() {
          return this._rootInternal || (this._rootInternal = new Za(this._repo, Dt())), this._rootInternal;
        },
        enumerable: !1,
        configurable: !0
      }), su.prototype._delete = function () {
        var e, t, n;
        return this._checkNotDeleted("delete"), e = this._repo, t = this.app.name, (n = ru[t]) && n[e.key] === e || Ne("Database " + t + "(" + e.repoInfo_ + ") has already been deleted."), Sa(e), delete n[e.key], this._repoInternal = null, this._rootInternal = null, Promise.resolve();
      }, su.prototype._checkNotDeleted = function (e) {
        null === this._rootInternal && Ne("Cannot call " + e + " on a deleted database.");
      }, su);

      function su(e, t) {
        this._repoInternal = e, this.app = t, this.type = "database", this._instanceStarted = !1;
      }

      function uu(e, t, n, r) {
        void 0 === r && (r = {}), (e = z(e))._checkNotDeleted("useEmulator"), e._instanceStarted && Ne("Cannot call useEmulator() after instance has already been initialized.");
        var i = e._repoInternal,
            o = void 0;
        i.repoInfo_.nodeAdmin ? (r.mockUserToken && Ne('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), o = new Ye(Ye.OWNER)) : r.mockUserToken && (e = function (e, t) {
          if (e.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
          var n = t || "demo-project",
              r = e.iat || 0;
          if (!(t = e.sub || e.user_id)) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
          return e = _l({
            iss: "https://securetoken.google.com/" + n,
            aud: n,
            iat: r,
            exp: r + 3600,
            auth_time: r,
            sub: t,
            user_id: t,
            firebase: {
              sign_in_provider: "custom",
              identities: {}
            }
          }, e), [h.encodeString(JSON.stringify({
            alg: "none",
            type: "JWT"
          }), !1), h.encodeString(JSON.stringify(e), !1), ""].join(".");
        }(r.mockUserToken, e.app.options.projectId), o = new Ye(e)), o = o, (i = i).repoInfo_ = new Xe(t + ":" + n, !1, i.repoInfo_.namespace, i.repoInfo_.webSocketOnly, i.repoInfo_.nodeAdmin, i.repoInfo_.persistenceKey, i.repoInfo_.includeNamespaceInQueryParams), o && (i.authTokenProvider_ = o);
      }

      function lu(e) {
        (e = z(e))._checkNotDeleted("goOnline"), (e = e._repo).persistentConnection_ && e.persistentConnection_.resume(ca);
      }

      var hu = {
        ".sv": "timestamp"
      };
      var cu = (pu.prototype.toJSON = function () {
        return {
          committed: this.committed,
          snapshot: this.snapshot.toJSON()
        };
      }, pu);

      function pu(e, t) {
        this.committed = e, this.snapshot = t;
      }

      function du(i, e, t) {
        if (i = z(i), ia("Reference.transaction", i._path), ".length" === i.key || ".keys" === i.key) throw "Reference.transaction failed: " + i.key + " is a read-only object.";
        var t = null === (n = null == t ? void 0 : t.applyLocally) || void 0 === n || n,
            o = new f(),
            n = fs(i, function () {});
        return function (e, t, n, r, i, o) {
          ka(e, "transaction on " + t);
          var a = {
            path: t,
            update: n,
            onComplete: r,
            status: null,
            order: Te(),
            applyLocally: o,
            retryCount: 0,
            unwatcher: i,
            abortReason: null,
            currentWriteId: null,
            currentInputSnapshot: null,
            currentOutputSnapshotRaw: null,
            currentOutputSnapshotResolved: null
          },
              n = Na(e, t, void 0);
          a.currentInputSnapshot = n, void 0 === (r = a.update(n.val())) ? (a.unwatcher(), a.currentOutputSnapshotRaw = null, a.currentOutputSnapshotResolved = null, a.onComplete && a.onComplete(null, !1, a.currentInputSnapshot)) : (ta("transaction failed: Data returned ", r, a.path), a.status = 0, (i = Wo(o = qo(e.transactionQueueTree_, t)) || []).push(a), jo(o, i), o = void 0, "object" == _typeof(r) && null !== r && D(r, ".priority") ? (o = O(r, ".priority"), g(Zo(o), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) : o = (_o(e.serverSyncTree_, t) || jn.EMPTY_NODE).getPriority().val(), i = va(e), o = Hn(r, o), i = Lo(o, n, i), a.currentOutputSnapshotRaw = o, a.currentOutputSnapshotResolved = i, a.currentWriteId = Ca(e), a = uo(e.serverSyncTree_, t, i, a.currentWriteId, a.applyLocally), la(e.eventQueue_, t, a), xa(e, e.transactionQueueTree_));
        }(i._repo, i._path, e, function (e, t, n) {
          var r;
          e ? o.reject(e) : (r = new ts(n, new Za(i._repo, i._path), Nn), o.resolve(new cu(t, r)));
        }, n, t), o.promise;
      }

      var fu = (_u.prototype.cancel = function (t) {
        W("OnDisconnect.cancel", 0, 1, arguments.length), U("OnDisconnect.cancel", "onComplete", t, !0);

        var e = this._delegate.cancel();

        return t && e.then(function () {
          return t(null);
        }, function (e) {
          return t(e);
        }), e;
      }, _u.prototype.remove = function (t) {
        W("OnDisconnect.remove", 0, 1, arguments.length), U("OnDisconnect.remove", "onComplete", t, !0);

        var e = this._delegate.remove();

        return t && e.then(function () {
          return t(null);
        }, function (e) {
          return t(e);
        }), e;
      }, _u.prototype.set = function (e, t) {
        W("OnDisconnect.set", 1, 2, arguments.length), U("OnDisconnect.set", "onComplete", t, !0);
        e = this._delegate.set(e);
        return t && e.then(function () {
          return t(null);
        }, function (e) {
          return t(e);
        }), e;
      }, _u.prototype.setWithPriority = function (e, t, n) {
        W("OnDisconnect.setWithPriority", 2, 3, arguments.length), U("OnDisconnect.setWithPriority", "onComplete", n, !0);
        t = this._delegate.setWithPriority(e, t);
        return n && t.then(function () {
          return n(null);
        }, function (e) {
          return n(e);
        }), t;
      }, _u.prototype.update = function (e, t) {
        if (W("OnDisconnect.update", 1, 2, arguments.length), Array.isArray(e)) {
          for (var n = {}, r = 0; r < e.length; ++r) {
            n["" + r] = e[r];
          }

          e = n, xe("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
        }

        U("OnDisconnect.update", "onComplete", t, !0);

        var i = this._delegate.update(e);

        return t && i.then(function () {
          return t(null);
        }, function (e) {
          return t(e);
        }), i;
      }, _u);

      function _u(e) {
        this._delegate = e;
      }

      var yu = (vu.prototype.toJSON = function () {
        return W("TransactionResult.toJSON", 0, 1, arguments.length), {
          committed: this.committed,
          snapshot: this.snapshot.toJSON()
        };
      }, vu);

      function vu(e, t) {
        this.committed = e, this.snapshot = t;
      }

      var gu = (mu.prototype.val = function () {
        return W("DataSnapshot.val", 0, 0, arguments.length), this._delegate.val();
      }, mu.prototype.exportVal = function () {
        return W("DataSnapshot.exportVal", 0, 0, arguments.length), this._delegate.exportVal();
      }, mu.prototype.toJSON = function () {
        return W("DataSnapshot.toJSON", 0, 1, arguments.length), this._delegate.toJSON();
      }, mu.prototype.exists = function () {
        return W("DataSnapshot.exists", 0, 0, arguments.length), this._delegate.exists();
      }, mu.prototype.child = function (e) {
        return W("DataSnapshot.child", 0, 1, arguments.length), e = String(e), na("DataSnapshot.child", "path", e, !1), new mu(this._database, this._delegate.child(e));
      }, mu.prototype.hasChild = function (e) {
        return W("DataSnapshot.hasChild", 1, 1, arguments.length), na("DataSnapshot.hasChild", "path", e, !1), this._delegate.hasChild(e);
      }, mu.prototype.getPriority = function () {
        return W("DataSnapshot.getPriority", 0, 0, arguments.length), this._delegate.priority;
      }, mu.prototype.forEach = function (t) {
        var n = this;
        return W("DataSnapshot.forEach", 1, 1, arguments.length), U("DataSnapshot.forEach", "action", t, !1), this._delegate.forEach(function (e) {
          return t(new mu(n._database, e));
        });
      }, mu.prototype.hasChildren = function () {
        return W("DataSnapshot.hasChildren", 0, 0, arguments.length), this._delegate.hasChildren();
      }, Object.defineProperty(mu.prototype, "key", {
        get: function get() {
          return this._delegate.key;
        },
        enumerable: !1,
        configurable: !0
      }), mu.prototype.numChildren = function () {
        return W("DataSnapshot.numChildren", 0, 0, arguments.length), this._delegate.size;
      }, mu.prototype.getRef = function () {
        return W("DataSnapshot.ref", 0, 0, arguments.length), new Tu(this._database, this._delegate.ref);
      }, Object.defineProperty(mu.prototype, "ref", {
        get: function get() {
          return this.getRef();
        },
        enumerable: !1,
        configurable: !0
      }), mu);

      function mu(e, t) {
        this._database = e, this._delegate = t;
      }

      var wu = (Cu.prototype.on = function (e, n, t, r) {
        var i = this;
        W("Query.on", 2, 4, arguments.length), U("Query.on", "callback", n, !1);

        function o(e, t) {
          n.call(a.context, new gu(i.database, e), t);
        }

        var a = Cu.getCancelAndContextArgs_("Query.on", t, r);
        o.userCallback = n, o.context = a.context;
        var s = null === (r = a.cancel) || void 0 === r ? void 0 : r.bind(a.context);

        switch (e) {
          case "value":
            return fs(this._delegate, o, s), n;

          case "child_added":
            return _s(this._delegate, o, s), n;

          case "child_removed":
            return gs(this._delegate, o, s), n;

          case "child_changed":
            return ys(this._delegate, o, s), n;

          case "child_moved":
            return vs(this._delegate, o, s), n;

          default:
            throw new Error(j("Query.on", "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".');
        }
      }, Cu.prototype.off = function (e, t, n) {
        var r;
        W("Query.off", 0, 3, arguments.length), function (e, t, n) {
          if (!n || void 0 !== t) switch (t) {
            case "value":
            case "child_added":
            case "child_removed":
            case "child_changed":
            case "child_moved":
              break;

            default:
              throw new Error(j(e, "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".');
          }
        }("Query.off", e, !0), U("Query.off", "callback", t, !0), B("Query.off", "context", n, !0), t ? ((r = function r() {}).userCallback = t, r.context = n, ms(this._delegate, e, r)) : ms(this._delegate, e);
      }, Cu.prototype.get = function () {
        var t = this;
        return us(this._delegate).then(function (e) {
          return new gu(t.database, e);
        });
      }, Cu.prototype.once = function (e, n, t, r) {
        var i = this;
        W("Query.once", 1, 4, arguments.length), U("Query.once", "callback", n, !0);

        function o(e, t) {
          e = new gu(i.database, e), n && n.call(a.context, e, t), s.resolve(e);
        }

        var a = Cu.getCancelAndContextArgs_("Query.once", t, r),
            s = new f();
        o.userCallback = n, o.context = a.context;

        function u(e) {
          a.cancel && a.cancel.call(a.context, e), s.reject(e);
        }

        switch (e) {
          case "value":
            fs(this._delegate, o, u, {
              onlyOnce: !0
            });
            break;

          case "child_added":
            _s(this._delegate, o, u, {
              onlyOnce: !0
            });

            break;

          case "child_removed":
            gs(this._delegate, o, u, {
              onlyOnce: !0
            });
            break;

          case "child_changed":
            ys(this._delegate, o, u, {
              onlyOnce: !0
            });
            break;

          case "child_moved":
            vs(this._delegate, o, u, {
              onlyOnce: !0
            });
            break;

          default:
            throw new Error(j("Query.once", "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".');
        }

        return s.promise;
      }, Cu.prototype.limitToFirst = function (e) {
        return W("Query.limitToFirst", 1, 1, arguments.length), new Cu(this.database, tu(this._delegate, function (e) {
          if ("number" != typeof e || Math.floor(e) !== e || e <= 0) throw new Error("limitToFirst: First argument must be a positive integer.");
          return new Os(e);
        }(e)));
      }, Cu.prototype.limitToLast = function (e) {
        return W("Query.limitToLast", 1, 1, arguments.length), new Cu(this.database, tu(this._delegate, function (e) {
          if ("number" != typeof e || Math.floor(e) !== e || e <= 0) throw new Error("limitToLast: First argument must be a positive integer.");
          return new Ms(e);
        }(e)));
      }, Cu.prototype.orderByChild = function (e) {
        return W("Query.orderByChild", 1, 1, arguments.length), new Cu(this.database, tu(this._delegate, function (e) {
          if ("$key" === e) throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');
          if ("$priority" === e) throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');
          if ("$value" === e) throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');
          return na("orderByChild", "path", e, !1), new Ws(e);
        }(e)));
      }, Cu.prototype.orderByKey = function () {
        return W("Query.orderByKey", 0, 0, arguments.length), new Cu(this.database, tu(this._delegate, new Bs()));
      }, Cu.prototype.orderByPriority = function () {
        return W("Query.orderByPriority", 0, 0, arguments.length), new Cu(this.database, tu(this._delegate, new Hs()));
      }, Cu.prototype.orderByValue = function () {
        return W("Query.orderByValue", 0, 0, arguments.length), new Cu(this.database, tu(this._delegate, new Ks()));
      }, Cu.prototype.startAt = function (e, t) {
        return void 0 === e && (e = null), W("Query.startAt", 0, 2, arguments.length), new Cu(this.database, tu(this._delegate, (void 0 === (e = e) && (e = null), Go("startAt", "key", t = t, !0), new ks(e, t))));
      }, Cu.prototype.startAfter = function (e, t) {
        return void 0 === e && (e = null), W("Query.startAfter", 0, 2, arguments.length), new Cu(this.database, tu(this._delegate, (e = e, Go("startAfter", "key", t = t, !0), new xs(e, t))));
      }, Cu.prototype.endAt = function (e, t) {
        return void 0 === e && (e = null), W("Query.endAt", 0, 2, arguments.length), new Cu(this.database, tu(this._delegate, (e = e, Go("endAt", "key", t = t, !0), new Cs(e, t))));
      }, Cu.prototype.endBefore = function (e, t) {
        return void 0 === e && (e = null), W("Query.endBefore", 0, 2, arguments.length), new Cu(this.database, tu(this._delegate, (e = e, Go("endBefore", "key", t = t, !0), new Es(e, t))));
      }, Cu.prototype.equalTo = function (e, t) {
        return W("Query.equalTo", 1, 2, arguments.length), new Cu(this.database, tu(this._delegate, (e = e, Go("equalTo", "key", t = t, !0), new Zs(e, t))));
      }, Cu.prototype.toString = function () {
        return W("Query.toString", 0, 0, arguments.length), this._delegate.toString();
      }, Cu.prototype.toJSON = function () {
        return W("Query.toJSON", 0, 1, arguments.length), this._delegate.toJSON();
      }, Cu.prototype.isEqual = function (e) {
        if (W("Query.isEqual", 1, 1, arguments.length), e instanceof Cu) return this._delegate.isEqual(e._delegate);
        throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");
      }, Cu.getCancelAndContextArgs_ = function (e, t, n) {
        var r = {
          cancel: void 0,
          context: void 0
        };
        if (t && n) r.cancel = t, U(e, "cancel", r.cancel, !0), r.context = n, B(e, "context", r.context, !0);else if (t) if ("object" == _typeof(t) && null !== t) r.context = t;else {
          if ("function" != typeof t) throw new Error(j(e, "cancelOrContext") + " must either be a cancel callback or a context object.");
          r.cancel = t;
        }
        return r;
      }, Object.defineProperty(Cu.prototype, "ref", {
        get: function get() {
          return new Tu(this.database, new Za(this._delegate._repo, this._delegate._path));
        },
        enumerable: !1,
        configurable: !0
      }), Cu);

      function Cu(e, t) {
        this.database = e, this._delegate = t;
      }

      var bu,
          Tu = (n(Eu, bu = wu), Eu.prototype.getKey = function () {
        return W("Reference.key", 0, 0, arguments.length), this._delegate.key;
      }, Eu.prototype.child = function (e) {
        return W("Reference.child", 1, 1, arguments.length), "number" == typeof e && (e = String(e)), new Eu(this.database, os(this._delegate, e));
      }, Eu.prototype.getParent = function () {
        W("Reference.parent", 0, 0, arguments.length);
        var e = this._delegate.parent;
        return e ? new Eu(this.database, e) : null;
      }, Eu.prototype.getRoot = function () {
        return W("Reference.root", 0, 0, arguments.length), new Eu(this.database, this._delegate.root);
      }, Eu.prototype.set = function (e, t) {
        W("Reference.set", 1, 2, arguments.length), U("Reference.set", "onComplete", t, !0);
        e = as(this._delegate, e);
        return t && e.then(function () {
          return t(null);
        }, function (e) {
          return t(e);
        }), e;
      }, Eu.prototype.update = function (e, t) {
        if (W("Reference.update", 1, 2, arguments.length), Array.isArray(e)) {
          for (var n = {}, r = 0; r < e.length; ++r) {
            n["" + r] = e[r];
          }

          e = n, xe("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.");
        }

        ia("Reference.update", this._delegate._path), U("Reference.update", "onComplete", t, !0);
        var i = ss(this._delegate, e);
        return t && i.then(function () {
          return t(null);
        }, function (e) {
          return t(e);
        }), i;
      }, Eu.prototype.setWithPriority = function (e, t, n) {
        W("Reference.setWithPriority", 2, 3, arguments.length), U("Reference.setWithPriority", "onComplete", n, !0);

        t = function (e, t, n) {
          if (ia("setWithPriority", e._path), ea("setWithPriority", t, e._path, !1), Ko("setWithPriority", n, !1), ".length" === e.key || ".keys" === e.key) throw "setWithPriority failed: " + e.key + " is a read-only object.";
          var r = new f();
          return ba(e._repo, e._path, t, n, r.wrapCallback(function () {})), r.promise;
        }(this._delegate, e, t);

        return n && t.then(function () {
          return n(null);
        }, function (e) {
          return n(e);
        }), t;
      }, Eu.prototype.remove = function (t) {
        W("Reference.remove", 0, 1, arguments.length), U("Reference.remove", "onComplete", t, !0);
        var e,
            e = (e = this._delegate, ia("remove", e._path), as(e, null));
        return t && e.then(function () {
          return t(null);
        }, function (e) {
          return t(e);
        }), e;
      }, Eu.prototype.transaction = function (e, t, n) {
        var r = this;
        W("Reference.transaction", 1, 3, arguments.length), U("Reference.transaction", "transactionUpdate", e, !1), U("Reference.transaction", "onComplete", t, !0), function (e, t, n, r) {
          if ((!r || void 0 !== n) && "boolean" != typeof n) throw new Error(j(e, t) + "must be a boolean.");
        }("Reference.transaction", "applyLocally", n, !0);
        n = du(this._delegate, e, {
          applyLocally: n
        }).then(function (e) {
          return new yu(e.committed, new gu(r.database, e.snapshot));
        });
        return t && n.then(function (e) {
          return t(null, e.committed, e.snapshot);
        }, function (e) {
          return t(e, !1, null);
        }), n;
      }, Eu.prototype.setPriority = function (e, t) {
        W("Reference.setPriority", 1, 2, arguments.length), U("Reference.setPriority", "onComplete", t, !0);

        e = function (e, t) {
          e = z(e), ia("setPriority", e._path), Ko("setPriority", t, !1);
          var n = new f();
          return ba(e._repo, Wt(e._path, ".priority"), t, null, n.wrapCallback(function () {})), n.promise;
        }(this._delegate, e);

        return t && e.then(function () {
          return t(null);
        }, function (e) {
          return t(e);
        }), e;
      }, Eu.prototype.push = function (e, t) {
        var n = this;
        W("Reference.push", 0, 2, arguments.length), U("Reference.push", "onComplete", t, !0);

        var r = function (e, t) {
          e = z(e), ia("push", e._path), ea("push", t, e._path, !0);
          var n = ya(e._repo),
              r = rr(n),
              n = os(e, r),
              i = os(e, r),
              t = null != t ? as(i, t).then(function () {
            return i;
          }) : Promise.resolve(i);
          return n.then = t.then.bind(t), n["catch"] = t.then.bind(t, void 0), n;
        }(this._delegate, e),
            e = r.then(function (e) {
          return new Eu(n.database, e);
        });

        t && e.then(function () {
          return t(null);
        }, function (e) {
          return t(e);
        });
        r = new Eu(this.database, r);
        return r.then = e.then.bind(e), r["catch"] = e["catch"].bind(e, void 0), r;
      }, Eu.prototype.onDisconnect = function () {
        return ia("Reference.onDisconnect", this._delegate._path), new fu(new Ha(this._delegate._repo, this._delegate._path));
      }, Object.defineProperty(Eu.prototype, "key", {
        get: function get() {
          return this.getKey();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(Eu.prototype, "parent", {
        get: function get() {
          return this.getParent();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(Eu.prototype, "root", {
        get: function get() {
          return this.getRoot();
        },
        enumerable: !1,
        configurable: !0
      }), Eu);

      function Eu(e, t) {
        var n = bu.call(this, e, new Ya(t._repo, t._path, new fr(), !1)) || this;
        return n.database = e, n._delegate = t, n;
      }

      var Iu = (Su.prototype.useEmulator = function (e, t, n) {
        uu(this._delegate, e, t, n = void 0 === n ? {} : n);
      }, Su.prototype.ref = function (e) {
        if (W("database.ref", 0, 1, arguments.length), e instanceof Tu) {
          var t = is(this._delegate, e.toString());
          return new Tu(this, t);
        }

        t = rs(this._delegate, e);
        return new Tu(this, t);
      }, Su.prototype.refFromURL = function (e) {
        W("database.refFromURL", 1, 1, arguments.length);
        e = is(this._delegate, e);
        return new Tu(this, e);
      }, Su.prototype.goOffline = function () {
        var e;
        W("database.goOffline", 0, 0, arguments.length), (e = z(e = this._delegate))._checkNotDeleted("goOffline"), Sa(e._repo);
      }, Su.prototype.goOnline = function () {
        return W("database.goOnline", 0, 0, arguments.length), lu(this._delegate);
      }, Su.ServerValue = {
        TIMESTAMP: hu,
        increment: function increment(e) {
          return {
            ".sv": {
              increment: e
            }
          };
        }
      }, Su);

      function Su(e, t) {
        var n = this;
        this._delegate = e, this.app = t, this.INTERNAL = {
          "delete": function _delete() {
            return n._delegate._delete();
          }
        };
      }

      var ku = Object.freeze({
        __proto__: null,
        forceLongPolling: function forceLongPolling() {
          _t.forceDisallow(), ht.forceAllow();
        },
        forceWebSockets: function forceWebSockets() {
          ht.forceDisallow();
        },
        isWebSocketsAvailable: function isWebSocketsAvailable() {
          return _t.isAvailable();
        },
        setSecurityDebugCallback: function setSecurityDebugCallback(e, t) {
          e._delegate._repo.persistentConnection_.securityDebugCallback_ = t;
        },
        stats: function stats(e, t) {
          var i;
          e = e._delegate._repo, void 0 === (t = t) && (t = !1), "undefined" != typeof console && (e = t ? (e.statsListener_ || (e.statsListener_ = new Nr(e.stats_)), e.statsListener_.get()) : e.stats_.get(), i = Object.keys(e).reduce(function (e, t) {
            return Math.max(t.length, e);
          }, 0), Le(e, function (e, t) {
            for (var n = e, r = e.length; r < i + 2; r++) {
              n += " ";
            }

            console.log(n + t);
          }));
        },
        statsIncrementCounter: function statsIncrementCounter(e, t) {
          e = e._delegate._repo, t = t, e.stats_.incrementCounter(t), e.statsReporter_.statsToReport_[t] = !0;
        },
        dataUpdateCount: function dataUpdateCount(e) {
          return e._delegate._repo.dataUpdateCount;
        },
        interceptServerData: function interceptServerData(e, t) {
          e._delegate._repo.interceptServerDataCallback_ = t;
        },
        initStandalone: function initStandalone(e) {
          var t = e.app,
              n = e.url,
              r = e.version,
              i = e.customAuthImpl,
              o = e.namespace,
              e = void 0 !== (e = e.nodeAdmin) && e;
          return ae(r), (r = new K("auth-internal", new J("database-standalone"))).setComponent(new H("auth-internal", function () {
            return i;
          }, "PRIVATE")), {
            instance: new Iu(ou(t, r, void 0, n, e), t),
            namespace: o
          };
        }
      }),
          Ct = en;
      en.prototype.simpleListen = function (e, t) {
        this.sendRequest("q", {
          p: e
        }, t);
      }, en.prototype.echo = function (e, t) {
        this.sendRequest("echo", {
          d: e
        }, t);
      };
      var Pu,
          Nu = Object.freeze({
        __proto__: null,
        DataConnection: Ct,
        RealTimeConnection: mt,
        hijackHash: function hijackHash(i) {
          var o = en.prototype.put;
          return en.prototype.put = function (e, t, n, r) {
            void 0 !== r && (r = i()), o.call(this, e, t, n, r);
          }, function () {
            en.prototype.put = o;
          };
        },
        ConnectionTarget: Xe,
        queryIdentifier: function queryIdentifier(e) {
          return e._delegate._queryIdentifier;
        },
        forceRestClient: function forceRestClient(e) {
          iu = e;
        }
      }),
          xu = Iu.ServerValue;
      ae((Pu = t["default"]).SDK_VERSION), Pu.INTERNAL.registerComponent(new H("database", function (e, t) {
        var n = t.instanceIdentifier,
            r = e.getProvider("app").getImmediate(),
            t = e.getProvider("auth-internal"),
            e = e.getProvider("app-check-internal");
        return new Iu(ou(r, t, e, n), r);
      }, "PUBLIC").setServiceProps({
        Reference: Tu,
        Query: wu,
        Database: Iu,
        DataSnapshot: gu,
        enableLogging: pe,
        INTERNAL: ku,
        ServerValue: xu,
        TEST_ACCESS: Nu
      }).setMultipleInstances(!0)), Pu.registerVersion("@firebase/database", "0.10.3");
    }.apply(this, arguments);
  } catch (e) {
    throw console.error(e), new Error("Cannot instantiate firebase-database.js - be sure to load firebase-app.js first.");
  }
});