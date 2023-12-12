import { reactive as je, onMounted as no, nextTick as qe, onActivated as wt, isRef as kp, watch as ce, onBeforeUnmount as Er, onDeactivated as to, onUnmounted as zo, inject as Pp, getCurrentInstance as oo, computed as N, ref as C, unref as go, provide as Op, isVNode as Tp, Comment as Ep, Fragment as Ve, createApp as Ip, h as Hd, onBeforeMount as Bp, defineComponent as ee, createVNode as G, Teleport as qn, Transition as We, withDirectives as De, vShow as Hn, mergeProps as Ae, openBlock as b, createBlock as Ce, resolveDynamicComponent as ro, normalizeClass as v, normalizeStyle as F, resolveComponent as ae, resolveDirective as ze, withCtx as me, createElementVNode as B, renderSlot as R, toDisplayString as re, createElementBlock as k, renderList as Ke, createCommentVNode as Q, onUpdated as Lo, createTextVNode as Ie, pushScopeId as Ct, popScopeId as St, withModifiers as yn, normalizeProps as ft, guardReactiveProps as Ro, vModelText as Dp, createSlots as fr, withKeys as Cs, TransitionGroup as Mp } from "vue";
const Fd = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, ZE = je(Fd);
var kn = je(Fd), Np = Object.defineProperty, Vp = Object.defineProperties, Ap = Object.getOwnPropertyDescriptors, Ss = Object.getOwnPropertySymbols, zp = Object.prototype.hasOwnProperty, Lp = Object.prototype.propertyIsEnumerable, ks = (e, n, t) => n in e ? Np(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Rp = (e, n) => {
  for (var t in n || (n = {}))
    zp.call(n, t) && ks(e, t, n[t]);
  if (Ss)
    for (var t of Ss(n))
      Lp.call(n, t) && ks(e, t, n[t]);
  return e;
}, Up = (e, n) => Vp(e, Ap(n)), un = (e) => typeof e == "string", ql = (e) => typeof e == "boolean", bn = (e) => typeof e == "number", Yd = (e) => bn(e) || un(e) && /^[-+]?\d+$/.test(e), Gt = (e) => Object.prototype.toString.call(e) === "[object Object]", Hp = (e) => typeof e == "object" && e !== null, ao = (e) => typeof e == "function", Ye = (e) => Array.isArray(e), Fp = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Un = (e) => e == null || e === "" || Array.isArray(e) && !e.length, jd = (e) => e === window, Yp = () => xn() && "ontouchstart" in window, xn = () => typeof window < "u", Ps = (e) => [...new Set(e)], Wt = (e) => Ye(e) ? e : [e], vr = (e, n) => {
  if (e.length) {
    const t = e.indexOf(n);
    if (t > -1)
      return e.splice(t, 1);
  }
}, jp = (e) => e.filter((n) => n != null), Wp = (e, n, t = "start") => {
  let o = t === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && o >= 0 && o <= e.length - 1; ) {
    if (n(e[o], o, e))
      return [e[o], o];
    t === "start" ? o++ : o--;
  }
  return [null, -1];
}, qp = (...e) => e.map((n) => {
  if (Ye(n)) {
    const [t, o, r = null] = n;
    return t ? o : r;
  }
  return n;
}), Wd = () => typeof globalThis < "u" ? globalThis : xn() ? window : typeof global < "u" ? global : self, So = (e) => {
  const n = Wd();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e);
}, Os = (e) => {
  const n = Wd();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}, lr = () => new Promise((e) => {
  So(e);
}), mn = () => new Promise((e) => {
  So(() => {
    So(e);
  });
}), At = (e) => window.getComputedStyle(e), en = (e) => {
  if (jd(e)) {
    const n = e.innerWidth, t = e.innerHeight, o = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: t,
      width: n,
      height: t
    };
    return Up(Rp({}, o), {
      toJSON: () => o
    });
  }
  return e.getBoundingClientRect();
}, Gp = (e) => {
  const { top: n, bottom: t, left: o, right: r } = en(e), { width: a, height: i } = en(window), l = o <= a && r >= 0, s = n <= i && t >= 0;
  return l && s;
}, Xp = (e) => new Promise((n) => {
  const t = new FileReader();
  t.onload = () => {
    n(t.result);
  }, t.readAsDataURL(e);
}), Rn = (e) => {
  e.cancelable !== !1 && e.preventDefault();
}, Dt = (e) => {
  const n = "scrollTop" in e ? e.scrollTop : e.scrollY;
  return Math.max(n, 0);
}, Gl = (e) => {
  const n = "scrollLeft" in e ? e.scrollLeft : e.scrollX;
  return Math.max(n, 0);
}, Xl = (e, n = 200) => {
  let t, o = 0;
  return function r(...a) {
    const i = Date.now(), l = i - o;
    o || (o = i), t && window.clearTimeout(t), l >= n ? (e.apply(this, a), o = i) : t = window.setTimeout(() => {
      r.apply(this, a);
    }, n - l);
  };
};
function w(e, ...n) {
  if (Ye(e))
    return e.map((t) => t(...n));
  if (e)
    return e(...n);
}
var z = (e) => e == null ? 0 : un(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : ql(e) ? Number(e) : e, pt = (e, n, t) => Math.min(t, Math.max(n, e)), Kp = (e, n) => pt(e, 0, n.length - 1), Zp = (e) => Kl(e).replace(e.charAt(0), e.charAt(0).toUpperCase()), Kl = (e) => e.replace(/-(\w)/g, (n, t) => t.toUpperCase()), qd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
function Jp(e) {
  return (n) => {
    const t = `${e}-${n}`, o = (r) => r ? r[0] === "$" ? r.replace("$", e) : r.startsWith("--") ? `${t}${r}` : `${t}__${r}` : t;
    return {
      name: Zp(t),
      n: o,
      classes: qp
    };
  };
}
var Qp = Object.defineProperty, mr = Object.getOwnPropertySymbols, Gd = Object.prototype.hasOwnProperty, Xd = Object.prototype.propertyIsEnumerable, Ts = (e, n, t) => n in e ? Qp(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, _p = (e, n) => {
  for (var t in n || (n = {}))
    Gd.call(n, t) && Ts(e, t, n[t]);
  if (mr)
    for (var t of mr(n))
      Xd.call(n, t) && Ts(e, t, n[t]);
  return e;
}, xp = (e, n) => {
  var t = {};
  for (var o in e)
    Gd.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && mr)
    for (var o of mr(e))
      n.indexOf(o) < 0 && Xd.call(e, o) && (t[o] = e[o]);
  return t;
};
function rn(e) {
  let n = !1;
  no(() => {
    e(), qe(() => {
      n = !0;
    });
  }), wt(() => {
    n && e();
  });
}
function ht(e, n, t, o = {}) {
  if (!xn())
    return;
  const { passive: r = !1, capture: a = !1 } = o;
  let i = !1, l = !1;
  const s = (m) => ao(m) ? m() : go(m), u = (m) => {
    if (i || l)
      return;
    const g = s(m);
    g && (g.addEventListener(n, t, {
      passive: r,
      capture: a
    }), i = !0);
  }, d = (m) => {
    if (!i || l)
      return;
    const g = s(m);
    g && (g.removeEventListener(n, t, {
      capture: a
    }), i = !1);
  };
  let c;
  kp(e) && (c = ce(
    () => e.value,
    (m, g) => {
      d(g), u(m);
    }
  ));
  const f = () => {
    c == null || c(), d(e), l = !0;
  };
  return rn(() => {
    u(e);
  }), Er(() => {
    d(e);
  }), to(() => {
    d(e);
  }), f;
}
function Kd(e, n, t) {
  if (!xn())
    return;
  ht(document, n, (r) => {
    const a = ao(e) ? e() : go(e);
    a && !a.contains(r.target) && t(r);
  });
}
function Ir(e) {
  zo(() => {
    e();
  }), to(() => {
    e();
  });
}
function eh(e) {
  const n = oo();
  return e in n.provides;
}
function an(e) {
  if (!eh(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const t = Pp(e), { childInstances: o, collect: r, clear: a } = t, i = xp(t, ["childInstances", "collect", "clear"]), l = oo();
  return {
    index: N(() => o.indexOf(l)),
    parentProvider: i,
    bindParent: (d) => {
      no(() => {
        qe().then(() => {
          r(l, d);
        });
      }), Er(() => {
        qe().then(() => {
          a(l, d);
        });
      });
    }
  };
}
function nh(e) {
  const n = [], t = (o) => {
    if (o != null && o.component) {
      t(o == null ? void 0 : o.component.subTree);
      return;
    }
    Array.isArray(o == null ? void 0 : o.children) && o.children.forEach((r) => {
      Tp(r) && (n.push(r), t(r));
    });
  };
  return t(e), n;
}
function ln(e) {
  const n = oo(), t = je([]), o = [], r = N(() => t.length), a = () => {
    const u = nh(n.subTree);
    t.sort((d, c) => u.indexOf(d.vnode) - u.indexOf(c.vnode));
  }, i = (u, d) => {
    t.push(u), o.push(d), a();
  }, l = (u, d) => {
    vr(t, u), vr(o, d);
  };
  return {
    length: r,
    childProviders: o,
    bindChildren: (u) => {
      Op(e, _p({
        childInstances: t,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function io(e) {
  ht(() => window, "resize", e, { passive: !0 }), ht(() => window, "orientationchange", e, { passive: !0 });
}
function th(e, n) {
  const t = C(!1);
  return ce(
    e,
    (o) => {
      n === o && (t.value = !0);
    },
    { immediate: !0 }
  ), t;
}
function oh(e, n) {
  if (e > n)
    return "horizontal";
  if (n > e)
    return "vertical";
}
function lo() {
  const e = C(0), n = C(0), t = C(0), o = C(0), r = C(0), a = C(0), i = C(0), l = C(0), s = C(0), u = C(0), d = C(), c = C(!1), f = C(!1), m = C(0), g = C(0);
  let p = null;
  const y = () => {
    e.value = 0, n.value = 0, t.value = 0, o.value = 0, r.value = 0, a.value = 0, i.value = 0, l.value = 0, s.value = 0, u.value = 0, d.value = void 0, c.value = !1, f.value = !1, m.value = 0, g.value = 0;
  };
  return {
    startX: e,
    startY: n,
    deltaX: t,
    deltaY: o,
    offsetX: r,
    offsetY: a,
    prevX: i,
    prevY: l,
    moveX: s,
    moveY: u,
    direction: d,
    touching: c,
    dragging: f,
    startTime: m,
    distance: g,
    resetTouch: y,
    startTouch: (I) => {
      y();
      const { clientX: O, clientY: M } = I.touches[0];
      e.value = O, n.value = M, i.value = O, l.value = M, c.value = !0, m.value = performance.now(), f.value = !1, p && window.cancelAnimationFrame(p);
    },
    moveTouch: (I) => {
      const { clientX: O, clientY: M } = I.touches[0];
      f.value = !0, t.value = O - e.value, o.value = M - n.value, r.value = Math.abs(t.value), a.value = Math.abs(o.value), g.value = Math.sqrt(r.value ** 2 + a.value ** 2), s.value = O - i.value, u.value = M - l.value, d.value || (d.value = oh(r.value, a.value)), i.value = O, l.value = M;
    },
    endTouch: () => {
      c.value = !1, p = window.requestAnimationFrame(() => {
        f.value = !1;
      });
    },
    isReachTop: (I) => Dt(I) === 0 && o.value > 0,
    isReachBottom: (I, O = 1) => {
      const { scrollHeight: M, clientHeight: E, scrollTop: V } = I, L = Math.abs(M - V - E);
      return o.value < 0 && L <= O;
    }
  };
}
function Zd() {
  const e = C(), n = oo(), t = qd(n.type.name);
  return e.value = `${t}-${n.uid}`, e;
}
function rh(e = {}) {
  const { initialWidth: n = 0, initialHeight: t = 0 } = e, o = C(n), r = C(t), a = () => {
    xn() && (o.value = window.innerWidth, r.value = window.innerHeight);
  };
  return rn(a), io(a), {
    width: o,
    height: r
  };
}
function Qn(e, n, t = {}) {
  const { passive: o = !0, eventName: r, defaultValue: a, emit: i } = t, l = r ?? `onUpdate:${n.toString()}`, s = () => e[n] != null ? e[n] : a;
  if (!o)
    return N({
      get() {
        return s();
      },
      set(d) {
        i ? i(l, d) : w(e[l], d);
      }
    });
  const u = C(s());
  return ce(
    () => e[n],
    () => {
      u.value = s();
    }
  ), ce(
    () => u.value,
    (d) => {
      i ? i(l, d) : w(e[l], d);
    }
  ), u;
}
var ah = Object.defineProperty, ih = Object.defineProperties, lh = Object.getOwnPropertyDescriptors, Es = Object.getOwnPropertySymbols, sh = Object.prototype.hasOwnProperty, uh = Object.prototype.propertyIsEnumerable, Is = (e, n, t) => n in e ? ah(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, $i = (e, n) => {
  for (var t in n || (n = {}))
    sh.call(n, t) && Is(e, t, n[t]);
  if (Es)
    for (var t of Es(n))
      uh.call(n, t) && Is(e, t, n[t]);
  return e;
}, dh = (e, n) => ih(e, lh(n)), Bs = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
function Be(e, n) {
  return Array.isArray(n) ? n.reduce((t, o) => (t[o] = e[o], t), {}) : e[n];
}
function ie(e, n) {
  const t = n ?? e;
  return t.install = function(o) {
    const { name: r } = e;
    r && o.component(r, e);
  }, t;
}
function ue(e, n) {
  e.setPropsDefaults = function(t) {
    Object.entries(t).forEach(([o, r]) => {
      const a = n[o];
      if (a != null) {
        if (Gt(a)) {
          n[o] = dh($i({}, a), {
            default: r
          });
          return;
        }
        n[o] = {
          type: a,
          default: r
        };
      }
    });
  };
}
function ch(e) {
  const n = Ip(e), t = document.createElement("div");
  return document.body.appendChild(t), {
    instance: n.mount(t),
    unmount() {
      n.unmount(), document.body.removeChild(t);
    }
  };
}
function so(e, n = {}, t = {}) {
  const o = {
    setup() {
      return () => Hd(e, $i($i({}, n), t));
    }
  }, { unmount: r } = ch(o);
  return { unmountInstance: r };
}
function Jd(e) {
  const n = [];
  return e.forEach((t) => {
    if (t.type !== Ep) {
      if (t.type === Ve && Ye(t.children)) {
        t.children.forEach((o) => {
          n.push(o);
        });
        return;
      }
      n.push(t);
    }
  }), n;
}
function Dn() {
  const e = C(""), n = (r, a, i) => Bs(this, null, function* () {
    return !Ye(r) || !r.length ? !0 : !(yield Promise.all(r.map((s) => s(a, i)))).some((s) => s !== !0 ? (e.value = String(s), !0) : !1);
  });
  return {
    errorMessage: e,
    validate: n,
    resetValidation: () => {
      e.value = "";
    },
    validateWithTrigger: (r, a, i, l, s) => Bs(this, null, function* () {
      r.includes(a) && (yield n(i, l, s)) && (e.value = "");
    })
  };
}
function fh(e) {
  ht(() => window, "hashchange", e), ht(() => window, "popstate", e);
}
function zt() {
  const e = C(!1);
  return wt(() => {
    e.value = !1;
  }), to(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
const ne = Jp("var");
function A(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function dn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), `var-elevation--${e}`);
}
var vh = Object.defineProperty, mh = Object.defineProperties, ph = Object.getOwnPropertyDescriptors, Ds = Object.getOwnPropertySymbols, hh = Object.prototype.hasOwnProperty, gh = Object.prototype.propertyIsEnumerable, Ms = (e, n, t) => n in e ? vh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Qd = (e, n) => {
  for (var t in n || (n = {}))
    hh.call(n, t) && Ms(e, t, n[t]);
  if (Ds)
    for (var t of Ds(n))
      gh.call(n, t) && Ms(e, t, n[t]);
  return e;
}, bh = (e, n) => mh(e, ph(n));
const { n: _d } = ne("ripple"), Ns = 250;
function yh(e) {
  const { zIndex: n, position: t } = At(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", t === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function $h(e, n) {
  const { top: t, left: o } = en(e), { clientWidth: r, clientHeight: a } = e, i = Math.sqrt(r ** 2 + a ** 2) / 2, l = i * 2, s = n.touches[0].clientX - o, u = n.touches[0].clientY - t, d = (r - i * 2) / 2, c = (a - i * 2) / 2, f = s - i, m = u - i;
  return { x: f, y: m, centerX: d, centerY: c, size: l };
}
function xd(e) {
  const n = this._ripple;
  if (n.removeRipple(), n.disabled || n.tasker || !kn.enableRipple)
    return;
  const t = () => {
    n.tasker = null;
    const { x: o, y: r, centerX: a, centerY: i, size: l } = $h(this, e), s = document.createElement("div");
    s.classList.add(_d()), s.style.opacity = "0", s.style.transform = `translate(${o}px, ${r}px) scale3d(.3, .3, .3)`, s.style.width = `${l}px`, s.style.height = `${l}px`, n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), yh(this), this.appendChild(s), window.setTimeout(() => {
      s.style.transform = `translate(${a}px, ${i}px) scale3d(1, 1, 1)`, s.style.opacity = ".25";
    }, 20);
  };
  n.tasker = window.setTimeout(t, 30);
}
function wi() {
  const e = this._ripple, n = () => {
    const t = this.querySelectorAll(`.${_d()}`);
    if (!t.length)
      return;
    const o = t[t.length - 1], r = Ns - performance.now() + Number(o.dataset.createdAt);
    window.setTimeout(() => {
      o.style.opacity = "0", window.setTimeout(() => {
        var a;
        return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
      }, Ns);
    }, r);
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function ec() {
  if (!Yp() || !kn.enableRipple)
    return;
  const e = this._ripple;
  e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
}
function wh(e, n) {
  var t;
  e._ripple = bh(Qd({
    tasker: null
  }, (t = n.value) != null ? t : {}), {
    removeRipple: wi.bind(e)
  }), e.addEventListener("touchstart", xd, { passive: !0 }), e.addEventListener("touchmove", ec, { passive: !0 }), e.addEventListener("dragstart", wi, { passive: !0 }), document.addEventListener("touchend", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("touchcancel", e._ripple.removeRipple, { passive: !0 }), document.addEventListener("dragend", e._ripple.removeRipple, { passive: !0 });
}
function Ch(e) {
  e.removeEventListener("touchstart", xd), e.removeEventListener("touchmove", ec), e.removeEventListener("dragstart", wi), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple), document.removeEventListener("dragend", e._ripple.removeRipple);
}
function Sh(e, n) {
  var t, o, r, a, i, l;
  const s = {
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  };
  (s.color !== ((r = e._ripple) == null ? void 0 : r.color) || s.disabled !== ((a = e._ripple) == null ? void 0 : a.disabled)) && (e._ripple = Qd({
    tasker: s.disabled ? null : (i = e._ripple) == null ? void 0 : i.tasker,
    removeRipple: (l = e._ripple) == null ? void 0 : l.removeRipple
  }, s));
}
const nc = {
  mounted: wh,
  unmounted: Ch,
  updated: Sh,
  install(e) {
    e.directive("ripple", this);
  }
}, JE = nc;
var Qe = nc;
const uo = {
  show: Boolean,
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: String,
  overlayStyle: Object,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  safeArea: Boolean,
  safeAreaTop: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOverlay: A(),
  "onUpdate:show": A(),
  // internal for Dialog
  onRouteChange: A()
};
function tc() {
  Object.keys(kn.locks).length <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Xo(e) {
  kn.locks[e] = 1, tc();
}
function Ko(e) {
  delete kn.locks[e], tc();
}
function Uo(e, n) {
  const { uid: t } = oo();
  n && ce(n, (o) => {
    o === !1 ? Ko(t) : o === !0 && e() === !0 && Xo(t);
  }), ce(e, (o) => {
    n && n() === !1 || (o === !0 ? Xo(t) : Ko(t));
  }), Bp(() => {
    n && n() === !1 || e() === !0 && Xo(t);
  }), zo(() => {
    n && n() === !1 || e() === !0 && Ko(t);
  }), wt(() => {
    n && n() === !1 || e() === !0 && Xo(t);
  }), to(() => {
    n && n() === !1 || e() === !0 && Ko(t);
  });
}
function Ho(e, n) {
  const t = C(kn.zIndex);
  return ce(
    e,
    (o) => {
      o && (kn.zIndex += n, t.value = kn.zIndex);
    },
    { immediate: !0 }
  ), { zIndex: t };
}
const oc = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function kh() {
  const { bindParent: e, parentProvider: n, index: t } = an(oc);
  return {
    index: t,
    popup: n,
    bindPopup: e
  };
}
function Ph() {
  const { bindChildren: e, childProviders: n, length: t } = ln(oc);
  return {
    length: t,
    popupItems: n,
    bindPopupItems: e
  };
}
var Oh = Object.defineProperty, Vs = Object.getOwnPropertySymbols, Th = Object.prototype.hasOwnProperty, Eh = Object.prototype.propertyIsEnumerable, As = (e, n, t) => n in e ? Oh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ih = (e, n) => {
  for (var t in n || (n = {}))
    Th.call(n, t) && As(e, t, n[t]);
  if (Vs)
    for (var t of Vs(n))
      Eh.call(n, t) && As(e, t, n[t]);
  return e;
};
const {
  name: Bh,
  n: Vn,
  classes: si
} = ne("popup");
var Br = ee({
  name: Bh,
  inheritAttrs: !1,
  props: uo,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = th(() => e.show, !0), {
      zIndex: r
    } = Ho(() => e.show, 3), {
      disabled: a
    } = zt(), {
      bindPopupItems: i
    } = Ph();
    Uo(() => e.show, () => e.lockScroll), ce(() => e.show, (c) => {
      w(c ? e.onOpen : e.onClose);
    }), i({
      show: N(() => e.show)
    }), fh(() => w(e.onRouteChange));
    function l() {
      const {
        closeOnClickOverlay: c,
        onClickOverlay: f
      } = e;
      w(f), c && w(e["onUpdate:show"], !1);
    }
    function s() {
      const {
        overlayClass: c = "",
        overlayStyle: f
      } = e;
      return G("div", {
        class: si(Vn("overlay"), c),
        style: Ih({
          zIndex: r.value - 1
        }, f),
        onClick: l
      }, null);
    }
    function u() {
      return De(G("div", Ae({
        class: si(Vn("content"), Vn(`--${e.position}`), [e.defaultStyle, Vn("--content-background-color")], [e.defaultStyle, Vn("$-elevation--3")], [e.safeArea, Vn("--safe-area")], [e.safeAreaTop, Vn("--safe-area-top")]),
        style: {
          zIndex: r.value
        }
      }, t), [o.value && w(n.default)]), [[Hn, e.show]]);
    }
    function d() {
      return G(We, {
        name: Vn("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [De(G("div", {
          class: si(Vn("$--box"), Vn()),
          style: {
            zIndex: r.value - 2
          }
        }, [e.overlay && s(), G(We, {
          name: e.transition || Vn(`$-pop-${e.position}`)
        }, {
          default: () => [u()]
        })]), [[Hn, e.show]])]
      });
    }
    return () => {
      const {
        teleport: c
      } = e;
      return c ? G(qn, {
        to: c,
        disabled: a.value
      }, {
        default: () => [d()]
      }) : d();
    };
  }
});
ie(Br);
ue(Br, uo);
const QE = Br;
var gt = Br;
const Xe = {
  name: String,
  size: [Number, String],
  color: String,
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  animationClass: String,
  onClick: A()
};
function Pn(e, n) {
  throw Error(`Varlet [${e}]: ${n}`);
}
function zs(e, n) {
  console.warn(`Varlet [${e}]: ${n}`);
}
function Dh(e) {
  const { left: n } = en(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Ls(e) {
  const { top: n } = en(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function ui(e) {
  const { transform: n } = At(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function bt(e) {
  let n = e;
  for (; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    const t = /(scroll|auto)/, { overflowY: o, overflow: r } = At(n);
    if (t.test(o) || t.test(r))
      return n;
  }
  return window;
}
function Mh(e) {
  const n = [];
  let t = e;
  for (; !jd(t); )
    t = bt(t), n.push(t);
  return n;
}
function rc(e, n) {
  if (un(e)) {
    const t = document.querySelector(e);
    return t || Pn(n, "target element cannot found"), t;
  }
  if (Hp(e))
    return e;
  Pn(n, 'type of prop "target" should be a selector or an element object');
}
function Nh() {
  const { width: e, height: n } = en(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
const Vh = (e) => un(e) && e.endsWith("rem"), Ah = (e) => un(e) && e.endsWith("px") || bn(e), zh = (e) => un(e) && e.endsWith("vw"), Lh = (e) => un(e) && e.endsWith("vh"), Rh = (e) => un(e) && e.endsWith("vmin"), Uh = (e) => un(e) && e.endsWith("vmax"), Ge = (e) => {
  if (Yd(e))
    return Number(e);
  if (Ah(e))
    return +e.replace("px", "");
  if (!xn())
    return 0;
  const { vw: n, vh: t, vMin: o, vMax: r } = Nh();
  if (zh(e))
    return +e.replace("vw", "") * n / 100;
  if (Lh(e))
    return +e.replace("vh", "") * t / 100;
  if (Rh(e))
    return +e.replace("vmin", "") * o / 100;
  if (Uh(e))
    return +e.replace("vmax", "") * r / 100;
  if (Vh(e)) {
    const a = +e.replace("rem", ""), i = At(document.documentElement).fontSize;
    return a * parseFloat(i);
  }
  return un(e) ? z(e) : 0;
}, we = (e) => {
  if (e != null)
    return Yd(e) ? `${e}px` : String(e);
}, fn = (e, n = 1) => {
  if (e == null)
    return;
  const t = we(e), o = t.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
  return `${parseFloat(t) * n}${o}`;
};
function ko(e, { top: n = 0, left: t = 0, duration: o = 300, animation: r }) {
  const a = Date.now(), i = Dt(e), l = Gl(e);
  return new Promise((s) => {
    const u = () => {
      const d = (Date.now() - a) / o;
      if (d < 1) {
        const c = i + (n - i) * r(d), f = l + (t - l) * r(d);
        e.scrollTo(f, c), requestAnimationFrame(u);
      } else
        e.scrollTo(t, n), s();
    };
    requestAnimationFrame(u);
  });
}
function ac(e) {
  return Object.entries(e ?? {}).reduce((n, [t, o]) => {
    const r = t.startsWith("--") ? t : `--${qd(t)}`;
    return n[r] = o, n;
  }, {});
}
function pr(e) {
  return e === "start" || e === "end" ? `flex-${e}` : e;
}
var Hh = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: Fh, n: Yh, classes: jh } = ne("icon");
function Wh(e, n) {
  return b(), Ce(ro(e.isURL(e.name) ? "img" : "i"), {
    class: v(
      e.classes(
        e.n(),
        [e.namespace !== e.n(), e.namespace],
        `${e.namespace}--set`,
        [e.isURL(e.name), e.n("image"), `${e.namespace}-${e.nextName}`],
        [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass]
      )
    ),
    style: F({
      color: e.color,
      "transition-duration": `${e.toNumber(e.transition)}ms`,
      width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      fontSize: e.toSizeUnit(e.size)
    }),
    src: e.isURL(e.name) ? e.nextName : null,
    onClick: e.onClick
  }, null, 8, ["class", "style", "src", "onClick"]);
}
const ic = ee({
  name: Fh,
  props: Xe,
  setup(e) {
    const n = C(""), t = C(!1);
    ce(() => e.name, o, { immediate: !0 });
    function o(r, a) {
      return Hh(this, null, function* () {
        const { transition: i } = e;
        if (a == null || z(i) === 0) {
          n.value = r;
          return;
        }
        t.value = !0, yield qe(), setTimeout(() => {
          a != null && (n.value = r), t.value = !1;
        }, z(i));
      });
    }
    return {
      nextName: n,
      animateInProgress: t,
      n: Yh,
      classes: jh,
      isURL: Fp,
      toNumber: z,
      toSizeUnit: we
    };
  }
});
ic.render = Wh;
var Dr = ic;
ie(Dr);
ue(Dr, Xe);
const _E = Dr;
var He = Dr, qh = Object.defineProperty, Rs = Object.getOwnPropertySymbols, Gh = Object.prototype.hasOwnProperty, Xh = Object.prototype.propertyIsEnumerable, Us = (e, n, t) => n in e ? qh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Kh = (e, n) => {
  for (var t in n || (n = {}))
    Gh.call(n, t) && Us(e, t, n[t]);
  if (Rs)
    for (var t of Rs(n))
      Xh.call(n, t) && Us(e, t, n[t]);
  return e;
};
const lc = Kh({
  show: Boolean,
  title: String,
  actions: {
    type: Array,
    default: () => []
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: A(),
  "onUpdate:show": A()
}, Be(uo, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "safeArea",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
var Zl = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "确认",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "请选择",
  // List
  listLoadingText: "加载中",
  listFinishedText: "没有更多了",
  listErrorText: "加载失败",
  // Picker
  pickerTitle: "请选择",
  pickerConfirmButtonText: "确认",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "个被选择",
  datePickerHint: "选择日期",
  // pagination
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往",
  // time-picker
  timePickerHint: "选择时间"
}, sc = {
  // Dialog
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  // ActionSheet
  actionSheetTitle: "Select One",
  // List
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  // Picker
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  datePickerHint: "SELECT DATE",
  // pagination
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to",
  // time-picker
  timePickerHint: "SELECT TIME"
}, uc = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "確認",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "請選擇",
  // List
  listLoadingText: "載入中",
  listFinishedText: "沒有更多了",
  listErrorText: "載入失敗",
  // Picker
  pickerTitle: "請選擇",
  pickerConfirmButtonText: "確認",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "個被選擇",
  // pagination
  paginationItem: "條",
  paginationPage: "頁",
  paginationJump: "前往"
}, Zh = uc, Jh = Object.defineProperty, Hs = Object.getOwnPropertySymbols, Qh = Object.prototype.hasOwnProperty, _h = Object.prototype.propertyIsEnumerable, Fs = (e, n, t) => n in e ? Jh(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Ys = (e, n) => {
  for (var t in n || (n = {}))
    Qh.call(n, t) && Fs(e, t, n[t]);
  if (Hs)
    for (var t of Hs(n))
      _h.call(n, t) && Fs(e, t, n[t]);
  return e;
};
function Jl() {
  const e = {}, n = C({}), t = (a, i) => {
    i.lang = a, e[a] = i;
  }, o = (a) => {
    if (!e[a])
      return console.warn(`The ${a} does not exist. You can mount a language package using the add method`), {};
    n.value = e[a];
  };
  return {
    packs: e,
    pack: n,
    add: t,
    use: o,
    merge: (a, i) => {
      if (!e[a]) {
        console.warn(`The ${a} does not exist. You can mount a language package using the add method`);
        return;
      }
      e[a] = Ys(Ys({}, e[a]), i), o(a);
    }
  };
}
const { packs: dc, pack: Je, add: Ql, use: _l, merge: cc } = Jl();
Ql("zh-CN", Zl);
_l("zh-CN");
const xE = { zhCN: Zl, enUS: sc, packs: dc, pack: Je, add: Ql, use: _l, merge: cc, useLocale: Jl };
var Ci = {
  zhCN: Zl,
  enUS: sc,
  zhTW: uc,
  zhHK: Zh,
  packs: dc,
  pack: Je,
  add: Ql,
  use: _l,
  merge: cc,
  useLocale: Jl
};
const { name: xh, n: eg, classes: ng } = ne("action-sheet"), tg = ["onClick"];
function og(e, n) {
  const t = ae("var-icon"), o = ae("var-popup"), r = ze("ripple");
  return b(), Ce(o, Ae({
    class: e.n("popup-radius"),
    position: "bottom",
    show: e.popupShow,
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.closeOnClickOverlay,
    teleport: e.teleport,
    "safe-area": e.safeArea
  }, {
    "onUpdate:show": e.handlePopupUpdateShow
  }, {
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange
  }), {
    default: me(() => [
      B(
        "div",
        Ae({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [
          R(e.$slots, "title", {}, () => {
            var a;
            return [
              B(
                "div",
                {
                  class: v(e.n("title"))
                },
                re((a = e.title) != null ? a : e.pack.actionSheetTitle),
                3
                /* TEXT, CLASS */
              )
            ];
          }),
          R(e.$slots, "actions", {}, () => [
            (b(!0), k(
              Ve,
              null,
              Ke(e.actions, (a) => De((b(), k("div", {
                class: v(e.classes(e.n("action-item"), a.className, [a.disabled, e.n("--disabled")])),
                key: a.name,
                style: F({ color: a.color }),
                onClick: (i) => e.handleSelect(a)
              }, [
                a.icon ? (b(), Ce(t, {
                  key: 0,
                  class: v(e.n("action-icon")),
                  "var-action-sheet-cover": "",
                  namespace: a.namespace,
                  name: a.icon,
                  size: a.iconSize
                }, null, 8, ["class", "namespace", "name", "size"])) : Q("v-if", !0),
                B(
                  "div",
                  {
                    class: v(e.n("action-name"))
                  },
                  re(a.name),
                  3
                  /* TEXT, CLASS */
                )
              ], 14, tg)), [
                [r, { disabled: a.disabled }]
              ])),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "safe-area", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
const fc = ee({
  name: xh,
  directives: { Ripple: Qe },
  components: {
    VarPopup: gt,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: lc,
  setup(e) {
    const n = C(!1);
    ce(
      () => e.show,
      (r) => {
        n.value = r;
      },
      { immediate: !0 }
    );
    function t(r) {
      if (r.disabled)
        return;
      const { closeOnClickAction: a, onSelect: i } = e;
      w(i, r), a && w(e["onUpdate:show"], !1);
    }
    function o(r) {
      w(e["onUpdate:show"], r);
    }
    return {
      popupShow: n,
      pack: Je,
      n: eg,
      classes: ng,
      handlePopupUpdateShow: o,
      handleSelect: t
    };
  }
});
fc.render = og;
var Fo = fc, rg = Object.defineProperty, js = Object.getOwnPropertySymbols, ag = Object.prototype.hasOwnProperty, ig = Object.prototype.propertyIsEnumerable, Ws = (e, n, t) => n in e ? rg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, qs = (e, n) => {
  for (var t in n || (n = {}))
    ag.call(n, t) && Ws(e, t, n[t]);
  if (js)
    for (var t of js(n))
      ig.call(n, t) && Ws(e, t, n[t]);
  return e;
};
let lt, xl = {};
function lg(e = {}) {
  return qs(qs({}, xl), e);
}
function kt(e) {
  return xn() ? new Promise((n) => {
    kt.close();
    const t = je(lg(e));
    t.teleport = "body", lt = t;
    const { unmountInstance: o } = so(Fo, t, {
      onSelect: (r) => {
        w(t.onSelect, r), n(r);
      },
      onClose: () => {
        w(t.onClose), n("close");
      },
      onClosed: () => {
        w(t.onClosed), o(), lt === t && (lt = null);
      },
      onRouteChange: () => {
        o(), lt === t && (lt = null);
      },
      "onUpdate:show": (r) => {
        t.show = r;
      }
    });
    t.show = !0;
  }) : Promise.resolve();
}
kt.setDefaultOptions = function(e) {
  xl = e;
};
kt.resetDefaultOptions = function() {
  xl = {};
};
kt.close = function() {
  if (lt != null) {
    const e = lt;
    lt = null, qe().then(() => {
      e.show = !1;
    });
  }
};
kt.Component = Fo;
ie(Fo);
ie(Fo, kt);
ue(kt, lc);
const eI = Fo;
var Si = kt;
const vc = {
  color: String,
  textColor: String,
  title: String,
  titlePosition: {
    type: String,
    default: "left"
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  round: Boolean,
  image: String,
  imageLinearGradient: String,
  safeAreaTop: Boolean
}, { name: sg, n: ug, classes: dg } = ne("app-bar");
function cg(e, n) {
  return b(), k(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.safeAreaTop, e.n("--safe-area-top")],
          [e.round, e.n("--round")],
          e.formatElevation(e.elevation, 3)
        )
      ),
      style: F(e.rootStyles)
    },
    [
      B(
        "div",
        {
          class: v(e.n("toolbar"))
        },
        [
          B(
            "div",
            {
              class: v(e.n("left"))
            },
            [
              R(e.$slots, "left"),
              e.titlePosition === "left" ? (b(), k(
                "div",
                {
                  key: 0,
                  class: v(e.n("title")),
                  style: F({ paddingLeft: e.paddingLeft })
                },
                [
                  R(e.$slots, "default", {}, () => [
                    Ie(
                      re(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.titlePosition === "center" ? (b(), k(
            "div",
            {
              key: 0,
              class: v(e.n("title"))
            },
            [
              R(e.$slots, "default", {}, () => [
                Ie(
                  re(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0),
          B(
            "div",
            {
              class: v(e.n("right"))
            },
            [
              e.titlePosition === "right" ? (b(), k(
                "div",
                {
                  key: 0,
                  class: v(e.n("title")),
                  style: F({ paddingRight: e.paddingRight })
                },
                [
                  R(e.$slots, "default", {}, () => [
                    Ie(
                      re(e.title),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0),
              R(e.$slots, "right")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      R(e.$slots, "content")
    ],
    6
    /* CLASS, STYLE */
  );
}
const mc = ee({
  name: sg,
  props: vc,
  setup(e, { slots: n }) {
    const t = C(), o = C(), r = N(() => {
      const { image: i, color: l, textColor: s, imageLinearGradient: u } = e;
      return i != null ? {
        "background-image": `${u ? `linear-gradient(${u}), ` : ""}url(${i})`,
        "background-position": "center center",
        "background-size": "cover"
      } : {
        background: l,
        color: s
      };
    });
    rn(a), Lo(a);
    function a() {
      t.value = n.left ? 0 : void 0, o.value = n.right ? 0 : void 0;
    }
    return {
      rootStyles: r,
      paddingLeft: t,
      paddingRight: o,
      n: ug,
      classes: dg,
      formatElevation: dn
    };
  }
});
mc.render = cg;
var Mr = mc;
ie(Mr);
ue(Mr, vc);
const nI = Mr;
var ki = Mr;
const Gs = (e) => un(e) ? e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp|ico)$/i.test(e) : !1, Xs = (e) => un(e) ? e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e) : !1, fg = (e) => {
  const n = [];
  return {
    cache: n,
    has(t) {
      return this.cache.includes(t);
    },
    add(t) {
      this.has(t) || (this.cache.length === e && n.shift(), this.cache.push(t));
    },
    remove(t) {
      this.has(t) && vr(this.cache, t);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Pi = (e) => e, Ks = (e) => e ** 3, pc = (e) => e < 0.5 ? Ks(e * 2) / 2 : 1 - Ks((1 - e) * 2) / 2, Mt = (e = "", n, t = "") => {
  if (e.length >= n)
    return e;
  const o = n - e.length, r = Math.floor(o / t.length);
  return t.repeat(r) + t.slice(0, o % t.length) + e;
};
var vg = Object.defineProperty, Zs = Object.getOwnPropertySymbols, mg = Object.prototype.hasOwnProperty, pg = Object.prototype.propertyIsEnumerable, Js = (e, n, t) => n in e ? vg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, hg = (e, n) => {
  for (var t in n || (n = {}))
    mg.call(n, t) && Js(e, t, n[t]);
  if (Zs)
    for (var t of Zs(n))
      pg.call(n, t) && Js(e, t, n[t]);
  return e;
}, Nr = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const gg = "background-image", bg = "lazy-loading", yg = "lazy-error", Qs = "lazy-attempt", $g = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Oi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Xt = [], hr = [], hc = fg(100), _e = {
  loading: Oi,
  error: Oi,
  attempt: 3,
  throttleWait: 300,
  events: $g
};
let es = Xl(Yo, _e.throttleWait);
function Vr(e, n) {
  e._lazy.arg === gg ? e.style.backgroundImage = `url(${n})` : e.setAttribute("src", n);
}
function wg(e) {
  e._lazy.loading && Vr(e, e._lazy.loading), Yo();
}
function Cg(e) {
  e._lazy.error && Vr(e, e._lazy.error), e._lazy.state = "error", ts(e), Yo();
}
function gc(e, n) {
  Vr(e, n), e._lazy.state = "success", ts(e), Yo();
}
function Sg(e) {
  var n;
  hr.includes(e) || (hr.push(e), (n = _e.events) == null || n.forEach((t) => {
    e.addEventListener(t, es, { passive: !0 });
  }));
}
function kg() {
  hr.forEach((e) => {
    var n;
    (n = _e.events) == null || n.forEach((t) => {
      e.removeEventListener(t, es);
    });
  }), hr.length = 0;
}
function Pg(e, n) {
  var t, o;
  const r = {
    loading: (t = e.getAttribute(bg)) != null ? t : _e.loading,
    error: (o = e.getAttribute(yg)) != null ? o : _e.error,
    attempt: e.getAttribute(Qs) ? Number(e.getAttribute(Qs)) : _e.attempt
  };
  e._lazy = hg({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, r), Vr(e, Oi), w(_e.filter, e._lazy);
}
function Og(e, n) {
  const t = new Image();
  t.src = n, e._lazy.preloadImage = t, t.addEventListener("load", () => {
    e._lazy.attemptLock = !1, hc.add(n), gc(e, n);
  }), t.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Cg(e) : bc(e);
  });
}
function bc(e) {
  if (e._lazy.attemptLock)
    return;
  e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
  const { src: n } = e._lazy;
  if (hc.has(n)) {
    gc(e, n), e._lazy.attemptLock = !1;
    return;
  }
  wg(e), Og(e, n);
}
function ns(e) {
  return Nr(this, null, function* () {
    yield mn(), Gp(e) && bc(e);
  });
}
function Yo() {
  Xt.forEach((e) => ns(e));
}
function Tg(e) {
  return Nr(this, null, function* () {
    !Xt.includes(e) && Xt.push(e), Mh(e).forEach(Sg), yield ns(e);
  });
}
function ts(e) {
  vr(Xt, e), Xt.length === 0 && kg();
}
function Eg(e, n) {
  const { src: t, arg: o } = e._lazy;
  return t !== n.value || o !== n.arg;
}
function yc(e, n) {
  return Nr(this, null, function* () {
    Pg(e, n), yield Tg(e);
  });
}
function Ig(e, n) {
  return Nr(this, null, function* () {
    if (!Eg(e, n)) {
      Xt.includes(e) && (yield ns(e));
      return;
    }
    yield yc(e, n);
  });
}
function Bg(e = {}) {
  const { events: n, loading: t, error: o, attempt: r, throttleWait: a, filter: i } = e;
  _e.events = n ?? _e.events, _e.loading = t ?? _e.loading, _e.error = o ?? _e.error, _e.attempt = r ?? _e.attempt, _e.throttleWait = a ?? _e.throttleWait, _e.filter = i;
}
const $c = {
  mounted: yc,
  unmounted: ts,
  updated: Ig,
  install(e, n) {
    Bg(n), es = Xl(Yo, _e.throttleWait), e.directive("lazy", this);
  }
}, tI = $c;
var Po = $c;
const wc = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    default: "normal"
  },
  alt: String,
  color: String,
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  bordered: Boolean,
  borderColor: String,
  loading: String,
  error: String,
  lazy: Boolean,
  hoverable: Boolean,
  onClick: A(),
  onLoad: A(),
  onError: A()
}, Dg = (e) => ["mini", "small", "normal", "large"].includes(e), { name: Mg, n: Ng, classes: Vg } = ne("avatar"), Ag = ["src", "alt", "lazy-loading", "lazy-error"], zg = ["src", "alt"];
function Lg(e, n) {
  const t = ze("lazy");
  return b(), k(
    "div",
    {
      ref: "avatarElement",
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.isInternalSize(e.size), e.n(`--${e.size}`)],
          [e.round, e.n("--round")],
          [e.bordered, e.n("--bordered")],
          [e.hoverable, e.n("--hoverable")]
        )
      ),
      style: F({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      e.src ? (b(), k(
        Ve,
        { key: 0 },
        [
          e.lazy ? De((b(), k("img", {
            key: 0,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: F({ objectFit: e.fit }),
            "lazy-loading": e.loading,
            "lazy-error": e.error,
            onLoad: n[0] || (n[0] = (...o) => e.handleLoad && e.handleLoad(...o))
          }, null, 46, Ag)), [
            [t, e.src]
          ]) : (b(), k("img", {
            key: 1,
            class: v(e.n("image")),
            src: e.src,
            alt: e.alt,
            style: F({ objectFit: e.fit }),
            onLoad: n[1] || (n[1] = (...o) => e.handleLoad && e.handleLoad(...o)),
            onError: n[2] || (n[2] = (...o) => e.handleError && e.handleError(...o))
          }, null, 46, zg))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (b(), k(
        "div",
        {
          key: 1,
          ref: "textElement",
          class: v(e.n("text")),
          style: F({ transform: `scale(${e.scale})` })
        },
        [
          R(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      ))
    ],
    6
    /* CLASS, STYLE */
  );
}
const Cc = ee({
  name: Mg,
  directives: { Lazy: Po },
  props: wc,
  setup(e) {
    const n = C(null), t = C(null), o = C(1);
    rn(r), Lo(r);
    function r() {
      if (!n.value || !t.value) {
        o.value = 1;
        return;
      }
      const s = n.value.offsetWidth, u = t.value.offsetWidth;
      s > u ? o.value = 1 : o.value = s / u;
    }
    function a(s) {
      const u = s.currentTarget, { lazy: d, onLoad: c, onError: f } = e;
      d ? (u._lazy.state === "success" && w(c, s), u._lazy.state === "error" && w(f, s)) : w(c, s);
    }
    function i(s) {
      w(e.onError, s);
    }
    function l(s) {
      w(e.onClick, s);
    }
    return {
      avatarElement: n,
      textElement: t,
      scale: o,
      n: Ng,
      classes: Vg,
      isInternalSize: Dg,
      toSizeUnit: we,
      handleLoad: a,
      handleError: i,
      handleClick: l
    };
  }
});
Cc.render = Lg;
var Ar = Cc;
ie(Ar);
ue(Ar, wc);
const oI = Ar;
var Ti = Ar;
const Sc = {
  offset: [Number, String],
  vertical: Boolean
}, { name: Rg, n: Ug, classes: Hg } = ne("avatar-group");
function Fg(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: F(e.rootStyles)
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const kc = ee({
  name: Rg,
  props: Sc,
  setup(e) {
    return {
      rootStyles: N(() => e.offset == null ? {} : {
        "--avatar-group-offset": we(e.offset)
      }),
      n: Ug,
      classes: Hg,
      toSizeUnit: we
    };
  }
});
kc.render = Fg;
var zr = kc;
ie(zr);
ue(zr, Sc);
const rI = zr;
var Ei = zr;
const Kn = {
  type: {
    type: String,
    default: "circle"
  },
  radius: [String, Number],
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  description: String,
  loading: Boolean
}, { name: Yg, n: jg, classes: Wg } = ne("loading"), qg = (e) => (Ct(""), e = e(), St(), e), Gg = /* @__PURE__ */ qg(() => /* @__PURE__ */ B(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ B("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), Xg = [
  Gg
];
function Kg(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      e.$slots.default ? (b(), k(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
        },
        [
          R(e.$slots, "default"),
          e.loading ? (b(), k(
            "div",
            {
              key: 0,
              class: v(e.n("content-mask"))
            },
            null,
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.isShow ? (b(), k(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
        },
        [
          e.type === "circle" ? (b(), k(
            "div",
            {
              key: 0,
              class: v(e.n("circle"))
            },
            [
              B(
                "span",
                {
                  class: v(e.classes(e.n("circle-block"), e.n(`circle-block--${e.size}`))),
                  style: F({
                    width: e.multiplySizeUnit(e.radius, 2),
                    height: e.multiplySizeUnit(e.radius, 2),
                    color: e.color
                  })
                },
                Xg,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0),
          (b(!0), k(
            Ve,
            null,
            Ke(e.loadingTypeDict, (t, o) => (b(), k(
              Ve,
              { key: o },
              [
                e.type === o ? (b(), k(
                  "div",
                  {
                    key: 0,
                    class: v(e.classes(e.n(o), e.n(`${o}--${e.size}`)))
                  },
                  [
                    (b(!0), k(
                      Ve,
                      null,
                      Ke(t, (r) => (b(), k(
                        "div",
                        {
                          key: r + o,
                          style: F({ backgroundColor: e.color }),
                          class: v(e.classes(e.n(`${o}-item`), e.n(`${o}-item--${e.size}`)))
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )) : Q("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          e.$slots.description || e.description ? (b(), k(
            "div",
            {
              key: 1,
              class: v(e.classes(e.n("description"), e.n(`description--${e.size}`))),
              style: F({ color: e.color })
            },
            [
              R(e.$slots, "description", {}, () => [
                Ie(
                  re(e.description),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Pc = ee({
  name: Yg,
  props: Kn,
  setup(e, { slots: n }) {
    const t = N(() => w(n.default) ? e.loading : !0);
    return {
      loadingTypeDict: {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      isShow: t,
      n: jg,
      classes: Wg,
      multiplySizeUnit: fn
    };
  }
});
Pc.render = Kg;
var Lr = Pc;
ie(Lr);
ue(Lr, Kn);
const aI = Lr;
var Kt = Lr;
const Oc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, { name: Zg, n: Jg, classes: Qg } = ne("hover-overlay");
function _g(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
const Tc = ee({
  name: Zg,
  props: Oc,
  setup: () => ({
    n: Jg,
    classes: Qg
  })
});
Tc.render = _g;
var Rr = Tc;
ie(Rr);
ue(Rr, Oc);
function Fn() {
  const e = C(!1);
  return {
    hovering: e,
    handleHovering: (t) => {
      e.value = t;
    }
  };
}
const iI = Rr;
var Bn = Rr;
function Ec(e) {
  if (!e)
    return !1;
  const n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function xg(e) {
  const n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((t, o) => {
    const [r, a] = o.split(":").map((i) => i.trim());
    return t[Kl(r)] = a, t;
  }, {}) : {};
}
function e0(e) {
  const { value: n } = e._hover, t = xg(e);
  Object.keys(n).forEach((o) => {
    const r = Kl(o);
    n[r] != null && t[r] && (e._hover.rawStyle[r] = t[r]);
  });
}
function os(e, n) {
  Object.keys(n).forEach((t) => {
    const o = n[t];
    o != null && (e.style[t] = o);
  });
}
function n0(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e._hover.value[n] != null && (e.style[n] = "");
  });
}
function Ic(e) {
  n0(e), os(e, e._hover.rawStyle);
}
function Bc() {
  const { value: e } = this._hover;
  if (this._hover.hovering = !0, ao(e)) {
    e(this._hover.hovering);
    return;
  }
  os(this, e);
}
function Dc() {
  if (this._hover.hovering = !1, ao(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Ic(this);
}
function Mc(e, n) {
  var t, o;
  const { arg: r, value: a } = n;
  Ec(r) || (e._hover = {
    value: a,
    hovering: (o = (t = e._hover) == null ? void 0 : t.hovering) != null ? o : !1,
    rawStyle: {}
  }, e0(e), e.addEventListener("mouseenter", Bc), e.addEventListener("mouseleave", Dc));
}
function Nc(e, n) {
  Ec(n.arg) || (Ic(e), e.removeEventListener("mouseenter", Bc), e.removeEventListener("mouseleave", Dc));
}
function t0(e, n) {
  e._hover && Nc(e, n);
}
function o0(e, n) {
  return !ao(n.value) && e._hover.hovering;
}
function r0(e, n) {
  Mc(e, n), o0(e, n) && os(e, n.value);
}
const Vc = {
  mounted: Mc,
  unmounted: Nc,
  beforeUpdate: t0,
  updated: r0,
  install(e) {
    e.directive("hover", this);
  }
}, lI = Vc;
var On = Vc, a0 = Object.defineProperty, i0 = Object.defineProperties, l0 = Object.getOwnPropertyDescriptors, _s = Object.getOwnPropertySymbols, s0 = Object.prototype.hasOwnProperty, u0 = Object.prototype.propertyIsEnumerable, xs = (e, n, t) => n in e ? a0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, d0 = (e, n) => {
  for (var t in n || (n = {}))
    s0.call(n, t) && xs(e, t, n[t]);
  if (_s)
    for (var t of _s(n))
      u0.call(n, t) && xs(e, t, n[t]);
  return e;
}, c0 = (e, n) => i0(e, l0(n));
const Ac = {
  type: String,
  nativeType: {
    type: String,
    default: "button"
  },
  size: String,
  loading: Boolean,
  round: Boolean,
  block: Boolean,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  autoLoading: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  color: String,
  textColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  loadingRadius: [Number, String],
  loadingType: Be(Kn, "type"),
  loadingSize: Be(Kn, "size"),
  loadingColor: c0(d0({}, Be(Kn, "color")), {
    default: "currentColor"
  }),
  onClick: A(),
  onTouchstart: A()
}, zc = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function f0() {
  const { bindChildren: e, childProviders: n, length: t } = ln(zc);
  return {
    length: t,
    buttons: n,
    bindButtons: e
  };
}
function v0() {
  const { bindParent: e, parentProvider: n, index: t } = an(zc);
  return {
    index: t,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
const { name: m0, n: p0, classes: h0 } = ne("button"), g0 = ["type", "disabled"];
function b0(e, n) {
  const t = ae("var-loading"), o = ae("var-hover-overlay"), r = ze("ripple"), a = ze("hover");
  return De((b(), k("button", {
    class: v(
      e.classes(
        e.n(),
        e.n("$--box"),
        e.n(`--${e.states.size}`),
        [e.block, `${e.n("$--flex")} ${e.n("--block")}`, e.n("$--inline-flex")],
        [e.disabled, e.n("--disabled")],
        [e.states.text, `${e.n(`--text-${e.states.type}`)} ${e.n("--text")}`, `${e.n(`--${e.states.type}`)} ${e.states.elevation}`],
        [e.states.text && e.disabled, e.n("--text-disabled")],
        [e.round, e.n("--round")],
        [e.states.outline, e.n("--outline")],
        [e.loading || e.pending, e.n("--loading")]
      )
    ),
    style: F({
      color: e.states.textColor,
      background: e.states.color
    }),
    type: e.nativeType,
    disabled: e.disabled,
    onClick: n[0] || (n[0] = (...i) => e.handleClick && e.handleClick(...i)),
    onTouchstart: n[1] || (n[1] = (...i) => e.handleTouchstart && e.handleTouchstart(...i))
  }, [
    e.loading || e.pending ? (b(), Ce(t, {
      key: 0,
      class: v(e.n("loading")),
      "var-button-cover": "",
      color: e.loadingColor,
      type: e.loadingType,
      size: e.loadingSize,
      radius: e.loadingRadius
    }, null, 8, ["class", "color", "type", "size", "radius"])) : Q("v-if", !0),
    B(
      "div",
      {
        class: v(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [
        R(e.$slots, "default")
      ],
      2
      /* CLASS */
    ),
    G(o, {
      hovering: e.disabled || e.loading || e.pending ? !1 : e.hovering
    }, null, 8, ["hovering"])
  ], 46, g0)), [
    [r, { disabled: e.disabled || !e.ripple || e.loading || e.pending }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const Lc = ee({
  name: m0,
  components: {
    VarLoading: Kt,
    VarHoverOverlay: Bn
  },
  directives: { Ripple: Qe, Hover: On },
  props: Ac,
  setup(e) {
    const n = C(!1), { buttonGroup: t } = v0(), { hovering: o, handleHovering: r } = Fn(), a = N(() => {
      if (!t)
        return {
          elevation: dn(e.elevation, 2),
          type: e.type != null ? e.type : "default",
          size: e.size != null ? e.size : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline
        };
      const { type: u, size: d, color: c, textColor: f, mode: m } = t;
      return {
        elevation: "",
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : c.value,
        textColor: e.textColor != null ? e.textColor : f.value,
        text: m.value !== "normal",
        outline: m.value === "outline"
      };
    });
    function i(u) {
      e.autoLoading && (n.value = !0, u = Ye(u) ? u : [u], Promise.all(u).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }
    function l(u) {
      const { loading: d, disabled: c, onClick: f } = e;
      !f || d || c || n.value || i(w(f, u));
    }
    function s(u) {
      const { loading: d, disabled: c, onTouchstart: f } = e;
      !f || d || c || n.value || i(w(f, u));
    }
    return {
      pending: n,
      states: a,
      hovering: o,
      n: p0,
      classes: h0,
      handleHovering: r,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
Lc.render = b0;
var Ur = Lc;
ie(Ur);
ue(Ur, Ac);
const sI = Ur;
var pn = Ur;
const Rc = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  bottom: [Number, String],
  target: [String, Object],
  onClick: A()
}, { name: y0, n: $0, classes: w0 } = ne("back-top");
function C0(e, n) {
  const t = ae("var-icon"), o = ae("var-button");
  return b(), Ce(qn, {
    to: "body",
    disabled: e.disabled
  }, [
    B(
      "div",
      Ae({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = yn((...r) => e.handleClick && e.handleClick(...r), ["stop"]))
      }),
      [
        R(e.$slots, "default", {}, () => [
          G(o, {
            elevation: e.elevation,
            type: "primary",
            round: "",
            "var-back-top-cover": ""
          }, {
            default: me(() => [
              G(t, { name: "chevron-up" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["elevation"])
        ])
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["disabled"]);
}
const Uc = ee({
  name: y0,
  components: {
    VarButton: pn,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: Rc,
  setup(e) {
    const n = C(!1), t = C(null), o = C(!0);
    let r;
    const a = Xl(() => {
      n.value = Dt(r) >= Ge(e.visibilityHeight);
    }, 200);
    no(() => {
      l(), s(), o.value = !1;
    }), wt(s), Ir(u);
    function i(d) {
      w(e.onClick, d);
      const c = Gl(r);
      ko(r, {
        left: c,
        duration: e.duration,
        animation: pc
      });
    }
    function l() {
      r = e.target ? rc(e.target, "BackTop") : bt(t.value);
    }
    function s() {
      r.addEventListener("scroll", a);
    }
    function u() {
      r.removeEventListener("scroll", a);
    }
    return {
      disabled: o,
      show: n,
      backTopEl: t,
      toSizeUnit: we,
      n: $0,
      classes: w0,
      handleClick: i
    };
  }
});
Uc.render = C0;
var Hr = Uc;
ie(Hr);
ue(Hr, Rc);
const uI = Hr;
var Ii = Hr;
const Hc = {
  type: {
    type: String,
    default: "default"
  },
  position: {
    type: String,
    default: "right-top"
  },
  hidden: Boolean,
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: [String, Number],
  dot: Boolean,
  icon: Be(Xe, "name"),
  namespace: Be(Xe, "namespace"),
  color: String,
  offsetX: {
    type: [String, Number],
    default: 0
  },
  offsetY: {
    type: [String, Number],
    default: 0
  }
};
var S0 = Object.defineProperty, eu = Object.getOwnPropertySymbols, k0 = Object.prototype.hasOwnProperty, P0 = Object.prototype.propertyIsEnumerable, nu = (e, n, t) => n in e ? S0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, O0 = (e, n) => {
  for (var t in n || (n = {}))
    k0.call(n, t) && nu(e, t, n[t]);
  if (eu)
    for (var t of eu(n))
      P0.call(n, t) && nu(e, t, n[t]);
  return e;
};
const { name: T0, n: E0, classes: I0 } = ne("badge"), B0 = { key: 0 };
function D0(e, n) {
  const t = ae("var-icon");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      R(e.$slots, "default"),
      G(We, {
        name: e.n("$-badge-fade"),
        persisted: ""
      }, {
        default: me(() => [
          De(B(
            "span",
            Ae({
              class: e.classes(
                e.n("content"),
                e.n(`--${e.type}`),
                [e.$slots.default, e.n(`--${e.position}`), e.n("--offset")],
                [e.dot, e.n("--dot")],
                [e.icon, e.n("--icon")]
              ),
              style: O0({ background: e.color }, e.offsetStyle)
            }, e.$attrs),
            [
              e.icon ? (b(), Ce(t, {
                key: 0,
                class: v(e.n("icon")),
                "var-badge-cover": "",
                name: e.icon,
                namespace: e.namespace
              }, null, 8, ["class", "name", "namespace"])) : Q("v-if", !0),
              R(e.$slots, "value", {}, () => [
                !e.icon && !e.dot ? (b(), k(
                  "span",
                  B0,
                  re(e.value),
                  1
                  /* TEXT */
                )) : Q("v-if", !0)
              ])
            ],
            16
            /* FULL_PROPS */
          ), [
            [Hn, !e.hidden]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name"])
    ],
    2
    /* CLASS */
  );
}
const Fc = ee({
  name: T0,
  components: { VarIcon: He },
  inheritAttrs: !1,
  props: Hc,
  setup(e) {
    const n = N(() => {
      const { value: o, maxValue: r } = e;
      return o != null && r != null && z(o) > z(r) ? `${r}+` : o;
    }), t = N(() => ({
      ["--badge-offset-y"]: we(e.offsetY),
      ["--badge-offset-x"]: we(e.offsetX)
    }));
    return {
      value: n,
      offsetStyle: t,
      n: E0,
      classes: I0
    };
  }
});
Fc.render = D0;
var Fr = Fc;
ie(Fr);
ue(Fr, Hc);
const dI = Fr;
var gr = Fr;
const Yc = {
  active: {
    type: [Number, String],
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: Boolean,
  border: Boolean,
  safeArea: Boolean,
  activeColor: String,
  inactiveColor: String,
  fabProps: Object,
  onChange: A(),
  onBeforeChange: A(),
  onFabClick: A(),
  "onUpdate:active": A()
}, jc = Symbol(
  "BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"
);
function M0() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    jc
  );
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: t
  };
}
var N0 = Object.defineProperty, tu = Object.getOwnPropertySymbols, V0 = Object.prototype.hasOwnProperty, A0 = Object.prototype.propertyIsEnumerable, ou = (e, n, t) => n in e ? N0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ru = (e, n) => {
  for (var t in n || (n = {}))
    V0.call(n, t) && ou(e, t, n[t]);
  if (tu)
    for (var t of tu(n))
      A0.call(n, t) && ou(e, t, n[t]);
  return e;
};
const { name: z0, n: L0, classes: R0 } = ne("bottom-navigation"), { n: Yr } = ne("bottom-navigation-item"), au = Yr("--right-half-space"), iu = Yr("--left-half-space"), lu = Yr("--right-space"), U0 = {
  type: "primary"
};
function H0(e, n) {
  const t = ae("var-button");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: F(`z-index:${e.zIndex}`)
    },
    [
      R(e.$slots, "default"),
      e.$slots.fab ? (b(), Ce(t, Ae({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, { round: "" }), {
        default: me(() => [
          R(e.$slots, "fab")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "onClick"])) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  );
}
const Wc = ee({
  name: z0,
  components: { VarButton: pn },
  props: Yc,
  setup(e, { slots: n }) {
    const t = C(null), o = N(() => e.active), r = N(() => e.activeColor), a = N(() => e.inactiveColor), i = C({}), { length: l, bottomNavigationItems: s, bindBottomNavigationItem: u } = M0();
    u({
      active: o,
      activeColor: r,
      inactiveColor: a,
      onToggle: p
    }), ce(() => l.value, c), ce(
      () => e.fabProps,
      (O) => {
        i.value = ru(ru({}, U0), O);
      },
      { immediate: !0, deep: !0 }
    ), rn(() => {
      n.fab && T(l.value);
    }), Lo(() => {
      S(), n.fab && T(l.value);
    });
    function c() {
      l.value === 0 || f() || m() || g();
    }
    function f() {
      return s.find(({ name: O }) => o.value === O.value);
    }
    function m() {
      return s.find(({ index: O }) => o.value === O.value);
    }
    function g() {
      bn(o.value) && (o.value < 0 ? w(e["onUpdate:active"], 0) : o.value > l.value - 1 && w(e["onUpdate:active"], l.value - 1));
    }
    function p(O) {
      o.value !== O && (e.onBeforeChange ? y(O) : h(O));
    }
    function y(O) {
      const M = Wt(w(e.onBeforeChange, O));
      Promise.all(M).then((E) => {
        E.every(Boolean) && h(O);
      });
    }
    function h(O) {
      w(e["onUpdate:active"], O), w(e.onChange, O);
    }
    function S() {
      P().forEach((M) => {
        M.classList.remove(au, iu, lu);
      });
    }
    function T(O) {
      const M = P(), E = M.length, V = O % 2 === 0;
      M.forEach((L, U) => {
        $(V, L, U, E);
      });
    }
    function $(O, M, E, V) {
      const L = E === V - 1;
      if (!O && L) {
        M.classList.add(lu);
        return;
      }
      const U = E === V / 2 - 1, _ = E === V / 2;
      U ? M.classList.add(au) : _ && M.classList.add(iu);
    }
    function P() {
      return Array.from(t.value.querySelectorAll(`.${Yr()}`));
    }
    function I() {
      w(e.onFabClick);
    }
    return {
      length: l,
      bottomNavigationDom: t,
      fabProps: i,
      n: L0,
      classes: R0,
      handleFabClick: I
    };
  }
});
Wc.render = H0;
var jr = Wc;
ie(jr);
ue(jr, Yc);
const cI = jr;
var Bi = jr;
const qc = {
  name: String,
  label: String,
  icon: Be(Xe, "name"),
  namespace: Be(Xe, "namespace"),
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: A()
};
function F0() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    jc
  );
  return t || Pn("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: t
  };
}
const { name: Y0, n: j0, classes: W0 } = ne("bottom-navigation-item"), q0 = {
  type: "danger",
  dot: !0
};
function G0(e, n) {
  const t = ae("var-icon"), o = ae("var-badge"), r = ze("ripple");
  return De((b(), k(
    "button",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: F({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      e.icon && !e.$slots.icon ? (b(), Ce(t, {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: v(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      }, null, 8, ["name", "namespace", "class"])) : Q("v-if", !0),
      R(e.$slots, "icon", {
        active: e.active === e.index || e.active === e.name
      }),
      e.badge ? (b(), Ce(o, Ae({ key: 1 }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }), null, 16, ["class"])) : Q("v-if", !0),
      B(
        "span",
        {
          class: v(e.n("label"))
        },
        [
          e.$slots.default ? Q("v-if", !0) : (b(), k(
            Ve,
            { key: 0 },
            [
              Ie(
                re(e.label),
                1
                /* TEXT */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )),
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r]
  ]);
}
const Gc = ee({
  name: Y0,
  components: {
    VarBadge: gr,
    VarIcon: He
  },
  directives: { Ripple: Qe },
  props: qc,
  setup(e) {
    const n = N(() => e.name), t = N(() => e.badge), o = C({}), { index: r, bottomNavigation: a, bindBottomNavigation: i } = F0(), { active: l, activeColor: s, inactiveColor: u } = a;
    i({
      name: n,
      index: r
    }), ce(
      () => t.value,
      (m) => {
        o.value = m === !0 ? q0 : t.value;
      },
      { immediate: !0 }
    );
    function c() {
      return l.value === n.value || l.value === r.value ? s.value : u.value;
    }
    function f() {
      var m;
      const g = (m = n.value) != null ? m : r.value;
      w(e.onClick, g), w(a.onToggle, g);
    }
    return {
      index: r,
      active: l,
      badge: t,
      badgeProps: o,
      n: j0,
      classes: W0,
      computeColorStyle: c,
      handleClick: f
    };
  }
});
Gc.render = G0;
var Wr = Gc;
ie(Wr);
ue(Wr, qc);
const fI = Wr;
var Di = Wr;
const Xc = {
  separator: String,
  onClick: A()
}, Kc = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function X0() {
  const { childProviders: e, bindChildren: n, length: t } = ln(
    Kc
  );
  return {
    length: t,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function K0() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    Kc
  );
  return n || Pn("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: t,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
const { name: Z0, n: J0, classes: Q0 } = ne("breadcrumb");
function _0(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
          onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      e.isLast ? Q("v-if", !0) : R(e.$slots, "separator", { key: 0 }, () => {
        var t;
        return [
          B(
            "div",
            {
              class: v(e.n("separator"))
            },
            re((t = e.separator) != null ? t : e.parentSeparator),
            3
            /* TEXT, CLASS */
          )
        ];
      })
    ],
    2
    /* CLASS */
  );
}
const Zc = ee({
  name: Z0,
  props: Xc,
  setup(e) {
    const { index: n, breadcrumb: t, bindBreadcrumb: o } = K0(), r = N(() => n.value === t.length.value - 1), a = N(() => t.separator.value);
    o(null);
    function i(l) {
      r.value || w(e.onClick, l);
    }
    return {
      n: J0,
      classes: Q0,
      isLast: r,
      parentSeparator: a,
      handleClick: i
    };
  }
});
Zc.render = _0;
var qr = Zc;
ie(qr);
ue(qr, Xc);
const vI = qr;
var Mi = qr;
const Jc = {
  separator: {
    type: String,
    default: "/"
  }
}, { name: x0, n: eb } = ne("breadcrumbs");
function nb(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const Qc = ee({
  name: x0,
  props: Jc,
  setup(e) {
    const n = N(() => e.separator), { bindBreadcrumbList: t, length: o } = X0();
    return t({
      length: o,
      separator: n
    }), { n: eb };
  }
});
Qc.render = nb;
var Gr = Qc;
ie(Gr);
ue(Gr, Jc);
const mI = Gr;
var Ni = Gr;
const _c = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  mode: {
    type: String,
    default: "normal"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  vertical: Boolean
}, { name: tb, n: ob, classes: rb } = ne("button-group");
function ab(e, n) {
  return b(), k(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.mode, `${e.n(`--mode-${e.mode}`)}`],
          [e.vertical, e.n("--vertical"), e.n("--horizontal")],
          [e.mode === "normal", e.formatElevation(e.elevation, 2)]
        )
      )
    },
    [
      R(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const xc = ee({
  name: tb,
  props: _c,
  setup(e) {
    const { bindButtons: n } = f0(), t = {
      elevation: N(() => e.elevation),
      type: N(() => e.type),
      size: N(() => e.size),
      color: N(() => e.color),
      textColor: N(() => e.textColor),
      mode: N(() => e.mode)
    };
    return n(t), {
      n: ob,
      classes: rb,
      formatElevation: dn
    };
  }
});
xc.render = ab;
var Xr = xc;
ie(Xr);
ue(Xr, _c);
const pI = Xr;
var Vi = Xr;
const ef = {
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  imageHeight: [String, Number],
  imageWidth: [String, Number],
  outline: Boolean,
  layout: {
    type: String,
    default: "column"
  },
  floating: Boolean,
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: String,
  title: String,
  subtitle: String,
  description: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  ripple: Boolean,
  onClick: A(),
  "onUpdate:floating": A()
};
var su = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: ib, n: lb, classes: sb } = ne("card"), ub = 500, db = ["src", "alt"];
function cb(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = ze("ripple");
  return De((b(), k(
    "div",
    {
      ref: "card",
      class: v(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: F({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = (...a) => e.handleClick && e.handleClick(...a))
    },
    [
      B(
        "div",
        {
          ref: "cardFloater",
          class: v(e.n("floater")),
          style: F({
            width: e.floaterWidth,
            height: e.floaterHeight,
            top: e.floaterTop,
            left: e.floaterLeft,
            overflow: e.floaterOverflow,
            position: e.floaterPosition,
            transition: e.floated ? `background-color ${e.floatingDuration}ms, color ${e.floatingDuration}ms, width ${e.floatingDuration}ms, height ${e.floatingDuration}ms, top ${e.floatingDuration}ms, left ${e.floatingDuration}ms` : void 0
          })
        },
        [
          R(e.$slots, "image", {}, () => [
            e.src ? (b(), k("img", {
              key: 0,
              class: v(e.n("image")),
              style: F({
                objectFit: e.fit,
                height: e.toSizeUnit(e.imageHeight),
                width: e.toSizeUnit(e.imageWidth)
              }),
              src: e.src,
              alt: e.alt
            }, null, 14, db)) : Q("v-if", !0)
          ]),
          B(
            "div",
            {
              class: v(e.n("container"))
            },
            [
              R(e.$slots, "title", {}, () => [
                e.title ? (b(), k(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("title"))
                  },
                  re(e.title),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ]),
              R(e.$slots, "subtitle", {}, () => [
                e.subtitle ? (b(), k(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("subtitle"))
                  },
                  re(e.subtitle),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ]),
              R(e.$slots, "description", {}, () => [
                e.description ? (b(), k(
                  "div",
                  {
                    key: 0,
                    class: v(e.n("description"))
                  },
                  re(e.description),
                  3
                  /* TEXT, CLASS */
                )) : Q("v-if", !0)
              ]),
              e.$slots.extra ? (b(), k(
                "div",
                {
                  key: 0,
                  class: v(e.n("footer"))
                },
                [
                  R(e.$slots, "extra")
                ],
                2
                /* CLASS */
              )) : Q("v-if", !0),
              e.$slots["floating-content"] && !e.isRow ? (b(), k(
                "div",
                {
                  key: 1,
                  class: v(e.n("floating-content")),
                  style: F({
                    height: e.contentHeight,
                    opacity: e.opacity,
                    transition: `opacity ${e.floatingDuration * 2}ms`
                  })
                },
                [
                  R(e.$slots, "floating-content")
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          e.showFloatingButtons ? (b(), k(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("floating-buttons"), e.n("$--box"))),
              style: F({
                zIndex: e.zIndex,
                opacity: e.opacity,
                transition: `opacity ${e.floatingDuration * 2}ms`
              })
            },
            [
              R(e.$slots, "close-button", {}, () => [
                G(o, {
                  "var-card-cover": "",
                  round: "",
                  class: v(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
                  onClick: yn(e.close, ["stop"])
                }, {
                  default: me(() => [
                    G(t, {
                      "var-card-cover": "",
                      name: "window-close",
                      class: v(e.n("close-button-icon"))
                    }, null, 8, ["class"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "onClick"])
              ])
            ],
            6
            /* CLASS, STYLE */
          )) : Q("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      ),
      B(
        "div",
        {
          class: v(e.n("holder")),
          style: F({
            width: e.holderWidth,
            height: e.holderHeight
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple || e.floater }]
  ]);
}
const nf = ee({
  name: ib,
  directives: { Ripple: Qe },
  components: {
    VarIcon: He,
    VarButton: pn
  },
  props: ef,
  setup(e) {
    const n = C(null), t = C(null), o = C("auto"), r = C("auto"), a = C("100%"), i = C("100%"), l = C("auto"), s = C("auto"), u = C(void 0), d = C("hidden"), c = C("0px"), f = C("0"), m = N(() => e.layout === "row"), g = C(!1), p = C(!1), { zIndex: y } = Ho(() => e.floating, 1);
    let h = "auto", S = "auto", T = null;
    const $ = C(null);
    Uo(
      () => e.floating,
      () => !m.value
    ), ce(
      () => e.floating,
      (E) => {
        m.value || qe(() => {
          E ? P() : I();
        });
      },
      { immediate: !0 }
    );
    function P() {
      return su(this, null, function* () {
        clearTimeout($.value), clearTimeout(T), $.value = null, $.value = setTimeout(
          () => su(this, null, function* () {
            const { width: E, height: V, left: L, top: U } = en(n.value);
            o.value = we(E), r.value = we(V), a.value = o.value, i.value = r.value, l.value = we(U), s.value = we(L), u.value = "fixed", h = l.value, S = s.value, g.value = !0, yield mn(), l.value = "0", s.value = "0", a.value = "100vw", i.value = "100vh", c.value = "auto", f.value = "1", d.value = "auto", p.value = !0;
          }),
          e.ripple ? ub : 0
        );
      });
    }
    function I() {
      clearTimeout(T), clearTimeout($.value), $.value = null, a.value = o.value, i.value = r.value, l.value = h, s.value = S, c.value = "0px", f.value = "0", g.value = !1, T = setTimeout(() => {
        o.value = "auto", r.value = "auto", a.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", h = "auto", S = "auto", d.value = "hidden", u.value = void 0, p.value = !1;
      }, e.floatingDuration);
    }
    function O() {
      w(e["onUpdate:floating"], !1);
    }
    function M(E) {
      w(e.onClick, E);
    }
    return {
      card: n,
      cardFloater: t,
      holderWidth: o,
      holderHeight: r,
      floater: $,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: c,
      opacity: f,
      zIndex: y,
      isRow: m,
      showFloatingButtons: g,
      floated: p,
      n: lb,
      classes: sb,
      toSizeUnit: we,
      close: O,
      formatElevation: dn,
      handleClick: M
    };
  }
});
nf.render = cb;
var Kr = nf;
ie(Kr);
ue(Kr, ef);
const hI = Kr;
var Ai = Kr;
const tf = {
  title: [Number, String],
  icon: Be(Xe, "name"),
  namespace: Be(Xe, "namespace"),
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: A()
}, { name: fb, n: vb, classes: mb } = ne("cell");
function pb(e, n) {
  const t = ae("var-icon"), o = ze("ripple");
  return De((b(), k(
    "div",
    {
      class: v(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: F(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = (...r) => e.handleClick && e.handleClick(...r))
    },
    [
      R(e.$slots, "icon", {}, () => [
        e.icon ? (b(), k(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("icon"), e.iconClass))
          },
          [
            G(t, {
              name: e.icon,
              namespace: e.namespace
            }, null, 8, ["name", "namespace"])
          ],
          2
          /* CLASS */
        )) : Q("v-if", !0)
      ]),
      B(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          R(e.$slots, "default", {}, () => [
            e.title ? (b(), k(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("title"), e.titleClass))
              },
              re(e.title),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)
          ]),
          R(e.$slots, "description", {}, () => [
            e.description ? (b(), k(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("description"), e.descriptionClass))
              },
              re(e.description),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)
          ])
        ],
        2
        /* CLASS */
      ),
      e.$slots.extra ? (b(), k(
        "div",
        {
          key: 0,
          class: v(e.classes(e.n("extra"), e.extraClass))
        },
        [
          R(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [o, { disabled: !e.ripple }]
  ]);
}
const of = ee({
  name: fb,
  components: { VarIcon: He },
  directives: { Ripple: Qe },
  props: tf,
  setup(e) {
    const n = N(() => e.borderOffset == null ? {} : {
      "--cell-border-left": we(e.borderOffset),
      "--cell-border-right": we(e.borderOffset)
    });
    function t(o) {
      w(e.onClick, o);
    }
    return {
      borderOffsetStyles: n,
      n: vb,
      classes: mb,
      toSizeUnit: we,
      handleClick: t
    };
  }
});
of.render = pb;
var Zr = of;
ie(Zr);
ue(Zr, tf);
const gI = Zr;
var br = Zr;
const rf = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, { name: hb, n: gb } = ne("form-details"), bb = { key: 0 }, yb = { key: 0 };
function $b(e, n) {
  return b(), Ce(We, {
    name: e.n()
  }, {
    default: me(() => [
      e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (b(), k(
        "div",
        {
          key: 0,
          class: v(e.n())
        },
        [
          B(
            "div",
            {
              class: v(e.n("error-message"))
            },
            [
              G(We, {
                name: e.n("message")
              }, {
                default: me(() => [
                  e.errorMessage ? (b(), k(
                    "div",
                    bb,
                    re(e.errorMessage),
                    1
                    /* TEXT */
                  )) : Q("v-if", !0)
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n("extra-message"))
            },
            [
              G(We, {
                name: e.n("message")
              }, {
                default: me(() => [
                  R(e.$slots, "extra-message", {}, () => [
                    e.extraMessage ? (b(), k(
                      "div",
                      yb,
                      re(e.extraMessage),
                      1
                      /* TEXT */
                    )) : Q("v-if", !0)
                  ])
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const af = ee({
  name: hb,
  props: rf,
  setup: () => ({ n: gb })
});
af.render = $b;
var Jr = af;
ie(Jr);
ue(Jr, rf);
const bI = Jr;
var $n = Jr;
const lf = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: String,
  uncheckedColor: String,
  disabled: Boolean,
  readonly: Boolean,
  indeterminate: Boolean,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A(),
  "onUpdate:indeterminate": A()
}, sf = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function wb() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    sf
  );
  return {
    length: t,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Cb() {
  const { bindParent: e, parentProvider: n, index: t } = an(
    sf
  );
  return {
    index: t,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var Sb = Object.defineProperty, kb = Object.defineProperties, Pb = Object.getOwnPropertyDescriptors, uu = Object.getOwnPropertySymbols, Ob = Object.prototype.hasOwnProperty, Tb = Object.prototype.propertyIsEnumerable, du = (e, n, t) => n in e ? Sb(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Eb = (e, n) => {
  for (var t in n || (n = {}))
    Ob.call(n, t) && du(e, t, n[t]);
  if (uu)
    for (var t of uu(n))
      Tb.call(n, t) && du(e, t, n[t]);
  return e;
}, Ib = (e, n) => kb(e, Pb(n));
const uf = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Mn() {
  const { parentProvider: e, index: n, bindParent: t } = an(uf), o = oo();
  return {
    index: n,
    form: e,
    bindForm: t ? (a) => {
      t(Ib(Eb({}, a), { instance: o }));
    } : null
  };
}
function Bb() {
  const { childProviders: e, length: n, bindChildren: t } = ln(uf);
  return {
    length: n,
    formItems: e,
    bindFormItems: t
  };
}
const { name: Db, n: Mb, classes: Nb } = ne("checkbox");
function Vb(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = ze("hover"), i = ze("ripple");
  return b(), k(
    "div",
    {
      class: v(e.n("wrap")),
      onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
    },
    [
      B(
        "div",
        {
          class: v(e.n())
        },
        [
          De((b(), k(
            "div",
            {
              class: v(
                e.classes(
                  e.n("action"),
                  [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")],
                  [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              style: F({ color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor })
            },
            [
              e.isIndeterminate ? R(e.$slots, "indeterminate-icon", { key: 0 }, () => [
                G(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "minus-box",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              e.checked && !e.isIndeterminate ? R(e.$slots, "checked-icon", { key: 1 }, () => [
                G(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-marked",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              !e.checked && !e.isIndeterminate ? R(e.$slots, "unchecked-icon", { key: 2 }, () => [
                G(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  name: "checkbox-blank-outline",
                  size: e.iconSize,
                  "var-checkbox-cover": ""
                }, null, 8, ["class", "size"])
              ]) : Q("v-if", !0),
              G(o, {
                hovering: !e.disabled && !e.formDisabled && e.hovering
              }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [a, e.handleHovering, "desktop"],
            [i, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }]
          ]),
          B(
            "div",
            {
              class: v(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              )
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const df = ee({
  name: Db,
  directives: { Ripple: Qe, Hover: On },
  components: {
    VarIcon: He,
    VarFormDetails: $n,
    VarHoverOverlay: Bn
  },
  props: lf,
  setup(e) {
    const n = Qn(e, "modelValue"), t = Qn(e, "indeterminate"), o = N(() => n.value === e.checkedValue), r = N(() => e.checkedValue), a = C(!1), { checkboxGroup: i, bindCheckboxGroup: l } = Cb(), { hovering: s, handleHovering: u } = Fn(), { form: d, bindForm: c } = Mn(), {
      errorMessage: f,
      validateWithTrigger: m,
      validate: g,
      // expose
      resetValidation: p
    } = Dn(), y = {
      checkedValue: r,
      checked: o,
      sync: $,
      validate: M,
      resetValidation: p,
      reset: I,
      resetWithAnimation: P
    };
    w(l, y), w(c, y);
    function h(E) {
      qe(() => {
        const { validateTrigger: V, rules: L, modelValue: U } = e;
        m(V, E, L, U);
      });
    }
    function S(E) {
      const { checkedValue: V, onChange: L } = e;
      n.value = E, t.value = !1, w(L, n.value), h("onChange"), E === V ? i == null || i.onChecked(V) : i == null || i.onUnchecked(V);
    }
    function T(E) {
      const { disabled: V, readonly: L, checkedValue: U, uncheckedValue: _, onClick: X } = e;
      if (d != null && d.disabled.value || V || (w(X, E), d != null && d.readonly.value || L))
        return;
      a.value = !0;
      const j = i ? i.checkedCount.value >= Number(i.max.value) : !1;
      !o.value && j || S(o.value ? _ : U);
    }
    function $(E) {
      const { checkedValue: V, uncheckedValue: L } = e;
      n.value = E.includes(V) ? V : L;
    }
    function P() {
      a.value = !1;
    }
    function I() {
      n.value = e.uncheckedValue, p();
    }
    function O(E) {
      const { checkedValue: V, uncheckedValue: L } = e;
      ![V, L].includes(E) && (E = o.value ? L : V), S(E);
    }
    function M() {
      return g(e.rules, e.modelValue);
    }
    return {
      isIndeterminate: t,
      withAnimation: a,
      checked: o,
      errorMessage: f,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      hovering: s,
      n: Mb,
      classes: Nb,
      handleHovering: u,
      handleClick: T,
      toggle: O,
      reset: I,
      validate: M,
      resetValidation: p
    };
  }
});
df.render = Vb;
var Qr = df;
ie(Qr);
ue(Qr, lf);
const yI = Qr;
var Oo = Qr;
const cf = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: [String, Number],
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: Ab, n: zb, classes: Lb } = ne("checkbox-group");
function Rb(e, n) {
  const t = ae("var-form-details");
  return b(), k(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const ff = ee({
  name: Ab,
  components: { VarFormDetails: $n },
  props: cf,
  setup(e) {
    const n = N(() => e.max), t = N(() => e.modelValue.length), { length: o, checkboxes: r, bindCheckboxes: a } = wb(), { bindForm: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Dn(), c = N(() => l.value), f = {
      max: n,
      checkedCount: t,
      onChecked: p,
      onUnchecked: y,
      validate: I,
      resetValidation: d,
      reset: P,
      errorMessage: c
    };
    ce(() => e.modelValue, h, { deep: !0 }), ce(() => o.value, h), a(f), w(i, f);
    function m(O) {
      qe(() => {
        const { validateTrigger: M, rules: E, modelValue: V } = e;
        s(M, O, E, V);
      });
    }
    function g(O) {
      w(e["onUpdate:modelValue"], O), w(e.onChange, O), m("onChange");
    }
    function p(O) {
      const { modelValue: M } = e;
      M.includes(O) || g([...M, O]);
    }
    function y(O) {
      const { modelValue: M } = e;
      M.includes(O) && g(M.filter((E) => E !== O));
    }
    function h() {
      return r.forEach(({ sync: O }) => O(e.modelValue));
    }
    function S() {
      r.forEach((O) => O.resetWithAnimation());
    }
    function T() {
      const O = r.map(({ checkedValue: E }) => E.value), M = Ps(O);
      return S(), w(e["onUpdate:modelValue"], M), M;
    }
    function $() {
      const O = r.filter(({ checked: E }) => !E.value).map(({ checkedValue: E }) => E.value), M = Ps(O);
      return S(), w(e["onUpdate:modelValue"], M), M;
    }
    function P() {
      w(e["onUpdate:modelValue"], []), d();
    }
    function I() {
      return u(e.rules, e.modelValue);
    }
    return {
      errorMessage: l,
      n: zb,
      classes: Lb,
      checkAll: T,
      inverseAll: $,
      reset: P,
      validate: I,
      resetValidation: d
    };
  }
});
ff.render = Rb;
var _r = ff;
ie(_r);
ue(_r, cf);
const $I = _r;
var zi = _r;
const vf = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  iconName: Be(Xe, "name"),
  namespace: Be(Xe, "namespace"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  /** @deprecated Use closeable to instead. */
  closable: Boolean,
  closeable: Boolean,
  onClose: A()
}, { name: Ub, n: tt, classes: Hb } = ne("chip");
function Fb(e, n) {
  const t = ae("var-icon");
  return b(), Ce(We, {
    name: e.n("$-fade")
  }, {
    default: me(() => [
      B(
        "span",
        Ae({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyle
        }, e.$attrs),
        [
          R(e.$slots, "left"),
          B(
            "span",
            {
              class: v(e.n(`text-${e.size}`))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          R(e.$slots, "right"),
          e.closeable || e.closable ? (b(), k(
            "span",
            {
              key: 0,
              class: v(e.n("--close")),
              onClick: n[0] || (n[0] = (...o) => e.handleClose && e.handleClose(...o))
            },
            [
              G(t, {
                name: `${e.iconName ? e.iconName : "close-circle"}`,
                namespace: e.namespace
              }, null, 8, ["name", "namespace"])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
const mf = ee({
  name: Ub,
  components: {
    VarIcon: He
  },
  inheritAttrs: !1,
  props: vf,
  setup(e) {
    const n = N(() => {
      const { plain: r, textColor: a, color: i } = e;
      return r ? {
        color: a || i,
        borderColor: i
      } : {
        color: a,
        background: i
      };
    }), t = N(() => {
      const { size: r, block: a, type: i, plain: l, round: s } = e, u = tt(a ? "$--flex" : "$--inline-flex"), d = l ? `${tt("plain")} ${tt(`plain-${i}`)}` : tt(`--${i}`), c = s ? tt("--round") : null;
      return [tt(`--${r}`), u, d, c];
    });
    function o(r) {
      w(e.onClose, r);
    }
    return {
      chipStyle: n,
      contentClass: t,
      n: tt,
      classes: Hb,
      handleClose: o
    };
  }
});
mf.render = Fb;
var xr = mf;
ie(xr);
ue(xr, vf);
const wI = xr;
var yr = xr;
const pf = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: String,
  align: String,
  xs: [Object, Number, String],
  sm: [Object, Number, String],
  md: [Object, Number, String],
  lg: [Object, Number, String],
  xl: [Object, Number, String],
  onClick: A()
}, hf = Symbol("ROW_BIND_COL_KEY");
function Yb() {
  const { bindChildren: e, childProviders: n, length: t } = ln(hf);
  return {
    length: t,
    cols: n,
    bindCols: e
  };
}
function jb() {
  const { parentProvider: e, index: n, bindParent: t } = an(hf);
  return {
    index: n,
    row: e,
    bindRow: t
  };
}
const { name: Wb, n: Zo, classes: qb } = ne("col");
function Gb(e, n) {
  return b(), k(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.span >= 0, e.n(`--span-${e.span}`)],
          [e.offset, e.n(`--offset-${e.offset}`)],
          ...e.getSize("xs", e.xs),
          ...e.getSize("sm", e.sm),
          ...e.getSize("md", e.md),
          ...e.getSize("lg", e.lg),
          ...e.getSize("xl", e.xl)
        )
      ),
      style: F({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right),
        paddingTop: e.toSizeUnit(e.padding.top),
        paddingBottom: e.toSizeUnit(e.padding.bottom)
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const gf = ee({
  name: Wb,
  props: pf,
  setup(e) {
    const n = N(() => z(e.span)), t = N(() => z(e.offset)), o = C({ left: 0, right: 0, top: 0, bottom: 0 }), { row: r, bindRow: a } = jb(), i = {
      setPadding(u) {
        o.value = u;
      }
    };
    ce([() => e.span, () => e.offset], () => {
      r == null || r.computePadding();
    }), w(a, i);
    function l(u, d) {
      const c = [];
      if (d == null)
        return c;
      if (Gt(d)) {
        const { offset: f, span: m } = d;
        Number(m) >= 0 && c.push(Zo(`--span-${u}-${m}`)), f && c.push(Zo(`--offset-${u}-${f}`));
      } else
        Number(d) >= 0 && c.push(Zo(`--span-${u}-${d}`));
      return c;
    }
    function s(u) {
      w(e.onClick, u);
    }
    return {
      span: n,
      offset: t,
      padding: o,
      n: Zo,
      classes: qb,
      toNumber: z,
      toSizeUnit: we,
      getSize: l,
      handleClick: s,
      padStartFlex: pr
    };
  }
});
gf.render = Gb;
var ea = gf;
ie(ea);
ue(ea, pf);
const CI = ea;
var Li = ea;
const bf = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Xb() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    bf
  );
  return {
    length: n,
    collapseItems: e,
    bindCollapseItems: t
  };
}
const yf = {
  modelValue: [Array, String, Number],
  accordion: Boolean,
  offset: {
    type: Boolean,
    default: !0
  },
  divider: {
    type: Boolean,
    default: !0
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: Kb, n: Zb } = ne("collapse");
function Jb(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
const $f = ee({
  name: Kb,
  props: yf,
  setup(e) {
    const n = N(() => e.offset), t = N(() => e.divider), o = N(() => e.elevation), r = N(() => Wt(e.modelValue)), { length: a, collapseItems: i, bindCollapseItems: l } = Xb(), s = {
      offset: n,
      divider: t,
      elevation: o,
      updateItem: u
    };
    ce(
      () => a.value,
      () => qe().then(f)
    ), ce(
      () => e.modelValue,
      () => qe().then(f)
    ), l(s);
    function u(g, p) {
      if (e.accordion) {
        d(p ? g : void 0);
        return;
      }
      const y = p ? [...r.value, g] : r.value.filter((h) => h !== g);
      d(y);
    }
    function d(g) {
      w(e["onUpdate:modelValue"], g), w(e.onChange, g);
    }
    function c() {
      if (e.accordion) {
        const [y] = r.value;
        if (y == null)
          return;
        const h = i.find(({ name: S }) => y === S.value);
        return h ?? i.find(({ index: S, name: T }) => T.value == null && y === S.value);
      }
      const g = i.filter(
        ({ name: y }) => y.value != null && r.value.includes(y.value)
      ), p = i.filter(
        ({ index: y, name: h }) => h.value == null && r.value.includes(y.value)
      );
      return [...g, ...p];
    }
    function f() {
      const g = jp(Wt(c()));
      i.forEach((p) => {
        p.init(g.includes(p));
      });
    }
    return {
      divider: t,
      n: Zb,
      toggleAll: (g) => {
        if (e.accordion)
          return;
        const y = i.filter((h) => {
          var S;
          const T = (S = h.name.value) != null ? S : h.index.value, $ = r.value.includes(T);
          return g.skipDisabled && h.disabled.value ? $ : g.expand === "inverse" ? !$ : g.expand;
        }).map((h) => {
          var S;
          return (S = h.name.value) != null ? S : h.index.value;
        });
        d(y);
      }
    };
  }
});
$f.render = Jb;
var na = $f;
ie(na);
ue(na, yf);
const SI = na;
var Ri = na;
function Qb() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    bf
  );
  return t || Pn("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: t
  };
}
const wf = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
};
var cu = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: _b, n: xb, classes: ey } = ne("collapse-item");
function ny(e, n) {
  const t = ae("var-icon");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: F(`--collapse-divider-top: ${e.divider ? "var(--collapse-border-top)" : "none"}`)
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
        },
        null,
        2
        /* CLASS */
      ),
      B(
        "div",
        {
          class: v(e.n("header")),
          onClick: n[0] || (n[0] = (...o) => e.toggle && e.toggle(...o))
        },
        [
          B(
            "div",
            {
              class: v(e.n("header-title"))
            },
            [
              R(e.$slots, "title", {}, () => [
                Ie(
                  re(e.title),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n("header-icon"))
            },
            [
              R(e.$slots, "icon", {}, () => [
                G(t, {
                  name: e.icon,
                  transition: 250,
                  class: v(
                    e.classes(
                      e.n("header-icon"),
                      [e.isShow && e.icon === "chevron-down", e.n("header-open")],
                      [e.disabled, e.n("header--disable")]
                    )
                  )
                }, null, 8, ["name", "class"])
              ])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      ),
      De(B(
        "div",
        {
          class: v(e.n("content")),
          ref: "contentEl",
          onTransitionend: n[1] || (n[1] = (...o) => e.transitionend && e.transitionend(...o)),
          onTransitionstart: n[2] || (n[2] = (...o) => e.start && e.start(...o))
        },
        [
          B(
            "div",
            {
              class: v(e.n("content-wrap"))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      ), [
        [Hn, e.showContent]
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const Cf = ee({
  name: _b,
  components: {
    VarIcon: He
  },
  props: wf,
  setup(e) {
    const n = C(!1), t = C(!1), o = C(null), r = N(() => e.name), a = N(() => e.disabled), { index: i, collapse: l, bindCollapse: s } = Qb(), { offset: u, divider: d, elevation: c, updateItem: f } = l, m = {
      index: i,
      name: r,
      disabled: a,
      init: h
    };
    let g = !0;
    ce(n, (P) => {
      P ? p() : y();
    }), s(m);
    function p() {
      return cu(this, null, function* () {
        if (!o.value || (o.value.style.height = "", t.value = !0, yield lr(), !o.value))
          return;
        const { offsetHeight: P } = o.value;
        o.value.style.height = "0px", yield lr(), o.value && (o.value.style.height = P + "px", g && (yield mn(), g && $()));
      });
    }
    function y() {
      return cu(this, null, function* () {
        if (!o.value)
          return;
        const { offsetHeight: P } = o.value;
        o.value.style.height = P + "px", yield lr(), o.value.style.height = "0px";
      });
    }
    function h(P) {
      n.value = P;
    }
    function S() {
      var P;
      e.disabled || f((P = e.name) != null ? P : i.value, !n.value);
    }
    function T() {
      g = !1;
    }
    function $() {
      n.value || (t.value = !1), o.value.style.height = "";
    }
    return {
      isShow: n,
      showContent: t,
      offset: u,
      divider: d,
      elevation: c,
      contentEl: o,
      n: xb,
      start: T,
      classes: ey,
      toggle: S,
      transitionend: $,
      formatElevation: dn
    };
  }
});
Cf.render = ny;
var ta = Cf;
ie(ta);
ue(ta, wf);
const kI = ta;
var Ui = ta;
const Sf = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: A(),
  onChange: A()
}, { name: ty, n: oy } = ne("countdown"), Hi = 1e3, Fi = 60 * Hi, Yi = 60 * Fi, fu = 24 * Yi;
function ry(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default", ft(Ro(e.timeData)), () => [
        Ie(
          re(e.showTime),
          1
          /* TEXT */
        )
      ])
    ],
    2
    /* CLASS */
  );
}
const kf = ee({
  name: ty,
  props: Sf,
  setup(e) {
    const n = C(""), t = C({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    });
    let o = 0, r = !1, a = 0, i = 0, l;
    ce(
      () => e.time,
      () => {
        m(), e.autoStart && c();
      }
    ), no(() => {
      d(), e.autoStart && c();
    }), wt(() => {
      l != null && (r = l, r === !0 && c(!0));
    }), to(() => {
      l = r, f();
    }), zo(f);
    function s(g, p) {
      const y = Object.values(p), h = ["DD", "HH", "mm", "ss"], S = [24, 60, 60, 1e3];
      if (h.forEach((T, $) => {
        g.includes(T) ? g = g.replace(T, Mt(`${y[$]}`, 2, "0")) : y[$ + 1] += y[$] * S[$];
      }), g.includes("S")) {
        const T = Mt(`${y[y.length - 1]}`, 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", T) : g.includes("SS") ? g = g.replace("SS", T.slice(0, 2)) : g = g.replace("S", T.slice(0, 1));
      }
      return g;
    }
    function u(g) {
      const p = Math.floor(g / fu), y = Math.floor(g % fu / Yi), h = Math.floor(g % Yi / Fi), S = Math.floor(g % Fi / Hi), T = Math.floor(g % Hi), $ = {
        days: p,
        hours: y,
        minutes: h,
        seconds: S,
        milliseconds: T
      };
      t.value = $, w(e.onChange, t.value), n.value = s(e.format, $);
    }
    function d() {
      const { time: g, onEnd: p } = e, y = performance.now();
      if (o || (o = y + z(g)), i = o - y, i < 0 && (i = 0), u(i), i === 0) {
        w(p);
        return;
      }
      r && (a = So(d));
    }
    function c(g = !1) {
      r && !g || (r = !0, o = performance.now() + (i || z(e.time)), d());
    }
    function f() {
      r = !1, Os(a);
    }
    function m() {
      o = 0, r = !1, Os(a), d();
    }
    return {
      showTime: n,
      timeData: t,
      n: oy,
      start: c,
      pause: f,
      reset: m
    };
  }
});
kf.render = ry;
var oa = kf;
ie(oa);
ue(oa, Sf);
const PI = oa;
var ji = oa;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ut = 9e15, Pt = 1e9, Wi = "0123456789abcdef", $r = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", wr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", qi = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Ut,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ut,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Pf, Zn, Se = !0, ra = "[DecimalError] ", yt = ra + "Invalid argument: ", Of = ra + "Precision limit exceeded", Tf = ra + "crypto unavailable", Ef = "[object Decimal]", sn = Math.floor, xe = Math.pow, ay = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, iy = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ly = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, If = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ln = 1e7, ye = 7, sy = 9007199254740991, uy = $r.length - 1, Gi = wr.length - 1, K = { toStringTag: Ef };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ge(e);
};
K.ceil = function() {
  return ge(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, n) {
  var t, o = this, r = o.constructor;
  if (e = new r(e), n = new r(n), !e.s || !n.s)
    return new r(NaN);
  if (e.gt(n))
    throw Error(yt + n);
  return t = o.cmp(e), t < 0 ? e : o.cmp(n) > 0 ? n : new r(o);
};
K.comparedTo = K.cmp = function(e) {
  var n, t, o, r, a = this, i = a.d, l = (e = new a.constructor(e)).d, s = a.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0])
    return i[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (a.e !== e.e)
    return a.e > e.e ^ s < 0 ? 1 : -1;
  for (o = i.length, r = l.length, n = 0, t = o < r ? o : r; n < t; ++n)
    if (i[n] !== l[n])
      return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return o === r ? 0 : o > r ^ s < 0 ? 1 : -1;
};
K.cosine = K.cos = function() {
  var e, n, t = this, o = t.constructor;
  return t.d ? t.d[0] ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + ye, o.rounding = 1, t = dy(o, Vf(o, t)), o.precision = e, o.rounding = n, ge(Zn == 2 || Zn == 3 ? t.neg() : t, e, n, !0)) : new o(1) : new o(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, t, o, r, a, i, l, s, u, d = this, c = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new c(d);
  for (Se = !1, a = d.s * xe(d.s * d, 1 / 3), !a || Math.abs(a) == 1 / 0 ? (t = on(d.d), e = d.e, (a = (e - t.length + 1) % 3) && (t += a == 1 || a == -2 ? "0" : "00"), a = xe(t, 1 / 3), e = sn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), o = new c(t), o.s = d.s) : o = new c(a.toString()), i = (e = c.precision) + 3; ; )
    if (l = o, s = l.times(l).times(l), u = s.plus(d), o = Ue(u.plus(d).times(l), u.plus(s), i + 2, 1), on(l.d).slice(0, i) === (t = on(o.d)).slice(0, i))
      if (t = t.slice(i - 3, i + 1), t == "9999" || !r && t == "4999") {
        if (!r && (ge(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          o = l;
          break;
        }
        i += 4, r = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (ge(o, e + 1, 1), n = !o.times(o).times(o).eq(d));
        break;
      }
  return Se = !0, ge(o, e, c.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, t = NaN;
  if (n) {
    if (e = n.length - 1, t = (e - sn(this.e / ye)) * ye, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        t--;
    t < 0 && (t = 0);
  }
  return t;
};
K.dividedBy = K.div = function(e) {
  return Ue(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, t = n.constructor;
  return ge(Ue(n, new t(e), 0, 1, 1), t.precision, t.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return ge(new this.constructor(this), this.e + 1, 3);
};
K.greaterThan = K.gt = function(e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
K.hyperbolicCosine = K.cosh = function() {
  var e, n, t, o, r, a = this, i = a.constructor, l = new i(1);
  if (!a.isFinite())
    return new i(a.s ? 1 / 0 : NaN);
  if (a.isZero())
    return l;
  t = i.precision, o = i.rounding, i.precision = t + Math.max(a.e, a.sd()) + 4, i.rounding = 1, r = a.d.length, r < 32 ? (e = Math.ceil(r / 3), n = (1 / ia(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), a = Zt(i, 1, a.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = a.times(a), a = l.minus(s.times(d.minus(s.times(d))));
  return ge(a, i.precision = t, i.rounding = o, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  if (!r.isFinite() || r.isZero())
    return new a(r);
  if (n = a.precision, t = a.rounding, a.precision = n + Math.max(r.e, r.sd()) + 4, a.rounding = 1, o = r.d.length, o < 3)
    r = Zt(a, 2, r, r, !0);
  else {
    e = 1.4 * Math.sqrt(o), e = e > 16 ? 16 : e | 0, r = r.times(1 / ia(5, e)), r = Zt(a, 2, r, r, !0);
    for (var i, l = new a(5), s = new a(16), u = new a(20); e--; )
      i = r.times(r), r = r.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return a.precision = n, a.rounding = t, ge(r, n, t, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 7, o.rounding = 1, Ue(t.sinh(), t.cosh(), o.precision = e, o.rounding = n)) : new o(t.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, t = n.constructor, o = n.abs().cmp(1), r = t.precision, a = t.rounding;
  return o !== -1 ? o === 0 ? n.isNeg() ? zn(t, r, a) : new t(0) : new t(NaN) : n.isZero() ? zn(t, r + 4, a).times(0.5) : (t.precision = r + 6, t.rounding = 1, n = n.asin(), e = zn(t, r + 4, a).times(0.5), t.precision = r, t.rounding = a, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, t = this, o = t.constructor;
  return t.lte(1) ? new o(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = o.precision, n = o.rounding, o.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, o.rounding = 1, Se = !1, t = t.times(t).minus(1).sqrt().plus(t), Se = !0, o.precision = e, o.rounding = n, t.ln()) : new o(t);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, t = this, o = t.constructor;
  return !t.isFinite() || t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, o.rounding = 1, Se = !1, t = t.times(t).plus(1).sqrt().plus(t), Se = !0, o.precision = e, o.rounding = n, t.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, t, o, r = this, a = r.constructor;
  return r.isFinite() ? r.e >= 0 ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN) : (e = a.precision, n = a.rounding, o = r.sd(), Math.max(o, e) < 2 * -r.e - 1 ? ge(new a(r), e, n, !0) : (a.precision = t = o - r.e, r = Ue(r.plus(1), new a(1).minus(r), t + e, 1), a.precision = e + 4, a.rounding = 1, r = r.ln(), a.precision = e, a.rounding = n, r.times(0.5))) : new a(NaN);
};
K.inverseSine = K.asin = function() {
  var e, n, t, o, r = this, a = r.constructor;
  return r.isZero() ? new a(r) : (n = r.abs().cmp(1), t = a.precision, o = a.rounding, n !== -1 ? n === 0 ? (e = zn(a, t + 4, o).times(0.5), e.s = r.s, e) : new a(NaN) : (a.precision = t + 6, a.rounding = 1, r = r.div(new a(1).minus(r.times(r)).sqrt().plus(1)).atan(), a.precision = t, a.rounding = o, r.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, t, o, r, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && c + 4 <= Gi)
      return i = zn(d, c + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (c + 4 <= Gi)
      return i = zn(d, c + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = c + 10, d.rounding = 1, t = Math.min(28, l / ye + 2 | 0), e = t; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (Se = !1, n = Math.ceil(l / ye), o = 1, s = u.times(u), i = new d(u), r = u; e !== -1; )
    if (r = r.times(s), a = i.minus(r.div(o += 2)), r = r.times(s), i = a.plus(r.div(o += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === a.d[e] && e--; )
        ;
  return t && (i = i.times(2 << t - 1)), Se = !0, ge(i, d.precision = c, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && sn(this.e / ye) > this.d.length - 2;
};
K.isNaN = function() {
  return !this.s;
};
K.isNegative = K.isNeg = function() {
  return this.s < 0;
};
K.isPositive = K.isPos = function() {
  return this.s > 0;
};
K.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
K.lessThan = K.lt = function(e) {
  return this.cmp(e) < 0;
};
K.lessThanOrEqualTo = K.lte = function(e) {
  return this.cmp(e) < 1;
};
K.logarithm = K.log = function(e) {
  var n, t, o, r, a, i, l, s, u = this, d = u.constructor, c = d.precision, f = d.rounding, m = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1))
      return new d(NaN);
    n = e.eq(10);
  }
  if (t = u.d, u.s < 0 || !t || !t[0] || u.eq(1))
    return new d(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (n)
    if (t.length > 1)
      a = !0;
    else {
      for (r = t[0]; r % 10 === 0; )
        r /= 10;
      a = r !== 1;
    }
  if (Se = !1, l = c + m, i = dt(u, l), o = n ? Cr(d, l + 10) : dt(e, l), s = Ue(i, o, l, 1), To(s.d, r = c, f))
    do
      if (l += 10, i = dt(u, l), o = n ? Cr(d, l + 10) : dt(e, l), s = Ue(i, o, l, 1), !a) {
        +on(s.d).slice(r + 1, r + 15) + 1 == 1e14 && (s = ge(s, c + 1, 0));
        break;
      }
    while (To(s.d, r += 10, f));
  return Se = !0, ge(s, c, f);
};
K.minus = K.sub = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c, f, m = this, g = m.constructor;
  if (e = new g(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new g(NaN) : m.d ? e.s = -e.s : e = new g(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new g(m);
    else
      return new g(s === 3 ? -0 : 0);
    return Se ? ge(e, l, s) : e;
  }
  if (t = sn(e.e / ye), d = sn(m.e / ye), u = u.slice(), a = d - t, a) {
    for (c = a < 0, c ? (n = u, a = -a, i = f.length) : (n = f, t = d, i = u.length), o = Math.max(Math.ceil(l / ye), i) + 2, a > o && (a = o, n.length = 1), n.reverse(), o = a; o--; )
      n.push(0);
    n.reverse();
  } else {
    for (o = u.length, i = f.length, c = o < i, c && (i = o), o = 0; o < i; o++)
      if (u[o] != f[o]) {
        c = u[o] < f[o];
        break;
      }
    a = 0;
  }
  for (c && (n = u, u = f, f = n, e.s = -e.s), i = u.length, o = f.length - i; o > 0; --o)
    u[i++] = 0;
  for (o = f.length; o > a; ) {
    if (u[--o] < f[o]) {
      for (r = o; r && u[--r] === 0; )
        u[r] = Ln - 1;
      --u[r], u[o] += Ln;
    }
    u[o] -= f[o];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --t;
  return u[0] ? (e.d = u, e.e = aa(u, t), Se ? ge(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, t = this, o = t.constructor;
  return e = new o(e), !t.d || !e.s || e.d && !e.d[0] ? new o(NaN) : !e.d || t.d && !t.d[0] ? ge(new o(t), o.precision, o.rounding) : (Se = !1, o.modulo == 9 ? (n = Ue(t, e.abs(), 0, 3, 1), n.s *= e.s) : n = Ue(t, e, 0, o.modulo, 1), n = n.times(e), Se = !0, t.minus(n));
};
K.naturalExponential = K.exp = function() {
  return Xi(this);
};
K.naturalLogarithm = K.ln = function() {
  return dt(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ge(e);
};
K.plus = K.add = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c = this, f = c.constructor;
  if (e = new f(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new f(NaN) : c.d || (e = new f(e.d || c.s === e.s ? c : NaN)), e;
  if (c.s != e.s)
    return e.s = -e.s, c.minus(e);
  if (u = c.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(c)), Se ? ge(e, l, s) : e;
  if (a = sn(c.e / ye), o = sn(e.e / ye), u = u.slice(), r = a - o, r) {
    for (r < 0 ? (t = u, r = -r, i = d.length) : (t = d, o = a, i = u.length), a = Math.ceil(l / ye), i = a > i ? a + 1 : i + 1, r > i && (r = i, t.length = 1), t.reverse(); r--; )
      t.push(0);
    t.reverse();
  }
  for (i = u.length, r = d.length, i - r < 0 && (r = i, t = d, d = u, u = t), n = 0; r; )
    n = (u[--r] = u[r] + d[r] + n) / Ln | 0, u[r] %= Ln;
  for (n && (u.unshift(n), ++o), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = aa(u, o), Se ? ge(e, l, s) : e;
};
K.precision = K.sd = function(e) {
  var n, t = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(yt + e);
  return t.d ? (n = Bf(t.d), e && t.e + 1 > n && (n = t.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return ge(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + Math.max(t.e, t.sd()) + ye, o.rounding = 1, t = fy(o, Vf(o, t)), o.precision = e, o.rounding = n, ge(Zn > 2 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, t, o, r, a, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (Se = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = on(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = sn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), o = new d(n)) : o = new d(u.toString()), t = (s = d.precision) + 3; ; )
    if (a = o, o = a.plus(Ue(i, a, t + 2, 1)).times(0.5), on(a.d).slice(0, t) === (n = on(o.d)).slice(0, t))
      if (n = n.slice(t - 3, t + 1), n == "9999" || !r && n == "4999") {
        if (!r && (ge(a, s + 1, 0), a.times(a).eq(i))) {
          o = a;
          break;
        }
        t += 4, r = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ge(o, s + 1, 1), e = !o.times(o).eq(i));
        break;
      }
  return Se = !0, ge(o, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, t = this, o = t.constructor;
  return t.isFinite() ? t.isZero() ? new o(t) : (e = o.precision, n = o.rounding, o.precision = e + 10, o.rounding = 1, t = t.sin(), t.s = 1, t = Ue(t, new o(1).minus(t.times(t)).sqrt(), e + 10, 0), o.precision = e, o.rounding = n, ge(Zn == 2 || Zn == 4 ? t.neg() : t, e, n, !0)) : new o(NaN);
};
K.times = K.mul = function(e) {
  var n, t, o, r, a, i, l, s, u, d = this, c = d.constructor, f = d.d, m = (e = new c(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new c(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (t = sn(d.e / ye) + sn(e.e / ye), s = f.length, u = m.length, s < u && (a = f, f = m, m = a, i = s, s = u, u = i), a = [], i = s + u, o = i; o--; )
    a.push(0);
  for (o = u; --o >= 0; ) {
    for (n = 0, r = s + o; r > o; )
      l = a[r] + m[o] * f[r - o - 1] + n, a[r--] = l % Ln | 0, n = l / Ln | 0;
    a[r] = (a[r] + n) % Ln | 0;
  }
  for (; !a[--i]; )
    a.pop();
  return n ? ++t : a.shift(), e.d = a, e.e = aa(a, t), Se ? ge(e, c.precision, c.rounding) : e;
};
K.toBinary = function(e, n) {
  return rs(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var t = this, o = t.constructor;
  return t = new o(t), e === void 0 ? t : (wn(e, 0, Pt), n === void 0 ? n = o.rounding : wn(n, 0, 8), ge(t, e + t.e + 1, n));
};
K.toExponential = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Yn(o, !0) : (wn(e, 0, Pt), n === void 0 ? n = r.rounding : wn(n, 0, 8), o = ge(new r(o), e + 1, n), t = Yn(o, !0, e + 1)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toFixed = function(e, n) {
  var t, o, r = this, a = r.constructor;
  return e === void 0 ? t = Yn(r) : (wn(e, 0, Pt), n === void 0 ? n = a.rounding : wn(n, 0, 8), o = ge(new a(r), e + r.e + 1, n), t = Yn(o, !1, e + o.e + 1)), r.isNeg() && !r.isZero() ? "-" + t : t;
};
K.toFraction = function(e) {
  var n, t, o, r, a, i, l, s, u, d, c, f, m = this, g = m.d, p = m.constructor;
  if (!g)
    return new p(m);
  if (u = t = new p(1), o = s = new p(0), n = new p(o), a = n.e = Bf(g) - m.e - 1, i = a % ye, n.d[0] = xe(10, i < 0 ? ye + i : i), e == null)
    e = a > 0 ? n : u;
  else {
    if (l = new p(e), !l.isInt() || l.lt(u))
      throw Error(yt + l);
    e = l.gt(n) ? a > 0 ? n : u : l;
  }
  for (Se = !1, l = new p(on(g)), d = p.precision, p.precision = a = g.length * ye * 2; c = Ue(l, n, 0, 1, 1), r = t.plus(c.times(o)), r.cmp(e) != 1; )
    t = o, o = r, r = u, u = s.plus(c.times(r)), s = r, r = n, n = l.minus(c.times(r)), l = r;
  return r = Ue(e.minus(t), o, 0, 1, 1), s = s.plus(r.times(u)), t = t.plus(r.times(o)), s.s = u.s = m.s, f = Ue(u, o, a, 1).minus(m).abs().cmp(Ue(s, t, a, 1).minus(m).abs()) < 1 ? [u, o] : [s, t], p.precision = d, Se = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return rs(this, 16, e, n);
};
K.toNearest = function(e, n) {
  var t = this, o = t.constructor;
  if (t = new o(t), e == null) {
    if (!t.d)
      return t;
    e = new o(1), n = o.rounding;
  } else {
    if (e = new o(e), n === void 0 ? n = o.rounding : wn(n, 0, 8), !t.d)
      return e.s ? t : e;
    if (!e.d)
      return e.s && (e.s = t.s), e;
  }
  return e.d[0] ? (Se = !1, t = Ue(t, e, 0, n, 1).times(e), Se = !0, ge(t)) : (e.s = t.s, t = e), t;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return rs(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, t, o, r, a, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(xe(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (o = s.precision, a = s.rounding, e.eq(1))
    return ge(l, o, a);
  if (n = sn(e.e / ye), n >= e.d.length - 1 && (t = u < 0 ? -u : u) <= sy)
    return r = Df(s, l, t, o), e.s < 0 ? new s(1).div(r) : ge(r, o, a);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return t = xe(+l, u), n = t == 0 || !isFinite(t) ? sn(u * (Math.log("0." + on(l.d)) / Math.LN10 + l.e + 1)) : new s(t + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (Se = !1, s.rounding = l.s = 1, t = Math.min(12, (n + "").length), r = Xi(e.times(dt(l, o + t)), o), r.d && (r = ge(r, o + 5, 1), To(r.d, o, a) && (n = o + 10, r = ge(Xi(e.times(dt(l, n + t)), n), n + 5, 1), +on(r.d).slice(o + 1, o + 15) + 1 == 1e14 && (r = ge(r, o + 1, 0)))), r.s = i, Se = !0, s.rounding = a, ge(r, o, a));
};
K.toPrecision = function(e, n) {
  var t, o = this, r = o.constructor;
  return e === void 0 ? t = Yn(o, o.e <= r.toExpNeg || o.e >= r.toExpPos) : (wn(e, 1, Pt), n === void 0 ? n = r.rounding : wn(n, 0, 8), o = ge(new r(o), e, n), t = Yn(o, e <= o.e || o.e <= r.toExpNeg, e)), o.isNeg() && !o.isZero() ? "-" + t : t;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var t = this, o = t.constructor;
  return e === void 0 ? (e = o.precision, n = o.rounding) : (wn(e, 1, Pt), n === void 0 ? n = o.rounding : wn(n, 0, 8)), ge(new o(t), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, t = Yn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + t : t;
};
K.truncated = K.trunc = function() {
  return ge(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, t = Yn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + t : t;
};
function on(e) {
  var n, t, o, r = e.length - 1, a = "", i = e[0];
  if (r > 0) {
    for (a += i, n = 1; n < r; n++)
      o = e[n] + "", t = ye - o.length, t && (a += rt(t)), a += o;
    i = e[n], o = i + "", t = ye - o.length, t && (a += rt(t));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return a + i;
}
function wn(e, n, t) {
  if (e !== ~~e || e < n || e > t)
    throw Error(yt + e);
}
function To(e, n, t, o) {
  var r, a, i, l;
  for (a = e[0]; a >= 10; a /= 10)
    --n;
  return --n < 0 ? (n += ye, r = 0) : (r = Math.ceil((n + 1) / ye), n %= ye), a = xe(10, ye - n), l = e[r] % a | 0, o == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = t < 4 && l == 99999 || t > 3 && l == 49999 || l == 5e4 || l == 0) : i = (t < 4 && l + 1 == a || t > 3 && l + 1 == a / 2) && (e[r + 1] / a / 100 | 0) == xe(10, n - 2) - 1 || (l == a / 2 || l == 0) && (e[r + 1] / a / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (o || t < 4) && l == 9999 || !o && t > 3 && l == 4999) : i = ((o || t < 4) && l + 1 == a || !o && t > 3 && l + 1 == a / 2) && (e[r + 1] / a / 1e3 | 0) == xe(10, n - 3) - 1, i;
}
function sr(e, n, t) {
  for (var o, r = [0], a, i = 0, l = e.length; i < l; ) {
    for (a = r.length; a--; )
      r[a] *= n;
    for (r[0] += Wi.indexOf(e.charAt(i++)), o = 0; o < r.length; o++)
      r[o] > t - 1 && (r[o + 1] === void 0 && (r[o + 1] = 0), r[o + 1] += r[o] / t | 0, r[o] %= t);
  }
  return r.reverse();
}
function dy(e, n) {
  var t, o, r;
  if (n.isZero())
    return n;
  o = n.d.length, o < 32 ? (t = Math.ceil(o / 3), r = (1 / ia(4, t)).toString()) : (t = 16, r = "2.3283064365386962890625e-10"), e.precision += t, n = Zt(e, 1, n.times(r), new e(1));
  for (var a = t; a--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= t, n;
}
var Ue = function() {
  function e(o, r, a) {
    var i, l = 0, s = o.length;
    for (o = o.slice(); s--; )
      i = o[s] * r + l, o[s] = i % a | 0, l = i / a | 0;
    return l && o.unshift(l), o;
  }
  function n(o, r, a, i) {
    var l, s;
    if (a != i)
      s = a > i ? 1 : -1;
    else
      for (l = s = 0; l < a; l++)
        if (o[l] != r[l]) {
          s = o[l] > r[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function t(o, r, a, i) {
    for (var l = 0; a--; )
      o[a] -= l, l = o[a] < r[a] ? 1 : 0, o[a] = l * i + o[a] - r[a];
    for (; !o[0] && o.length > 1; )
      o.shift();
  }
  return function(o, r, a, i, l, s) {
    var u, d, c, f, m, g, p, y, h, S, T, $, P, I, O, M, E, V, L, U, _ = o.constructor, X = o.s == r.s ? 1 : -1, j = o.d, Z = r.d;
    if (!j || !j[0] || !Z || !Z[0])
      return new _(
        // Return NaN if either NaN, or both Infinity or 0.
        !o.s || !r.s || (j ? Z && j[0] == Z[0] : !Z) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          j && j[0] == 0 || !Z ? X * 0 : X / 0
        )
      );
    for (s ? (m = 1, d = o.e - r.e) : (s = Ln, m = ye, d = sn(o.e / m) - sn(r.e / m)), L = Z.length, E = j.length, h = new _(X), S = h.d = [], c = 0; Z[c] == (j[c] || 0); c++)
      ;
    if (Z[c] > (j[c] || 0) && d--, a == null ? (I = a = _.precision, i = _.rounding) : l ? I = a + (o.e - r.e) + 1 : I = a, I < 0)
      S.push(1), g = !0;
    else {
      if (I = I / m + 2 | 0, c = 0, L == 1) {
        for (f = 0, Z = Z[0], I++; (c < E || f) && I--; c++)
          O = f * s + (j[c] || 0), S[c] = O / Z | 0, f = O % Z | 0;
        g = f || c < E;
      } else {
        for (f = s / (Z[0] + 1) | 0, f > 1 && (Z = e(Z, f, s), j = e(j, f, s), L = Z.length, E = j.length), M = L, T = j.slice(0, L), $ = T.length; $ < L; )
          T[$++] = 0;
        U = Z.slice(), U.unshift(0), V = Z[0], Z[1] >= s / 2 && ++V;
        do
          f = 0, u = n(Z, T, L, $), u < 0 ? (P = T[0], L != $ && (P = P * s + (T[1] || 0)), f = P / V | 0, f > 1 ? (f >= s && (f = s - 1), p = e(Z, f, s), y = p.length, $ = T.length, u = n(p, T, y, $), u == 1 && (f--, t(p, L < y ? U : Z, y, s))) : (f == 0 && (u = f = 1), p = Z.slice()), y = p.length, y < $ && p.unshift(0), t(T, p, $, s), u == -1 && ($ = T.length, u = n(Z, T, L, $), u < 1 && (f++, t(T, L < $ ? U : Z, $, s))), $ = T.length) : u === 0 && (f++, T = [0]), S[c++] = f, u && T[0] ? T[$++] = j[M] || 0 : (T = [j[M]], $ = 1);
        while ((M++ < E || T[0] !== void 0) && I--);
        g = T[0] !== void 0;
      }
      S[0] || S.shift();
    }
    if (m == 1)
      h.e = d, Pf = g;
    else {
      for (c = 1, f = S[0]; f >= 10; f /= 10)
        c++;
      h.e = c + d * m - 1, ge(h, l ? a + h.e + 1 : a, i, g);
    }
    return h;
  };
}();
function ge(e, n, t, o) {
  var r, a, i, l, s, u, d, c, f, m = e.constructor;
  e:
    if (n != null) {
      if (c = e.d, !c)
        return e;
      for (r = 1, l = c[0]; l >= 10; l /= 10)
        r++;
      if (a = n - r, a < 0)
        a += ye, i = n, d = c[f = 0], s = d / xe(10, r - i - 1) % 10 | 0;
      else if (f = Math.ceil((a + 1) / ye), l = c.length, f >= l)
        if (o) {
          for (; l++ <= f; )
            c.push(0);
          d = s = 0, r = 1, a %= ye, i = a - ye + 1;
        } else
          break e;
      else {
        for (d = l = c[f], r = 1; l >= 10; l /= 10)
          r++;
        a %= ye, i = a - ye + r, s = i < 0 ? 0 : d / xe(10, r - i - 1) % 10 | 0;
      }
      if (o = o || n < 0 || c[f + 1] !== void 0 || (i < 0 ? d : d % xe(10, r - i - 1)), u = t < 4 ? (s || o) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (t == 4 || o || t == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (a > 0 ? i > 0 ? d / xe(10, r - i) : 0 : c[f - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), n < 1 || !c[0])
        return c.length = 0, u ? (n -= e.e + 1, c[0] = xe(10, (ye - n % ye) % ye), e.e = -n || 0) : c[0] = e.e = 0, e;
      if (a == 0 ? (c.length = f, l = 1, f--) : (c.length = f + 1, l = xe(10, ye - a), c[f] = i > 0 ? (d / xe(10, r - i) % xe(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (a = 1, i = c[0]; i >= 10; i /= 10)
              a++;
            for (i = c[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            a != l && (e.e++, c[0] == Ln && (c[0] = 1));
            break;
          } else {
            if (c[f] += l, c[f] != Ln)
              break;
            c[f--] = 0, l = 1;
          }
      for (a = c.length; c[--a] === 0; )
        c.pop();
    }
  return Se && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Yn(e, n, t) {
  if (!e.isFinite())
    return Nf(e);
  var o, r = e.e, a = on(e.d), i = a.length;
  return n ? (t && (o = t - i) > 0 ? a = a.charAt(0) + "." + a.slice(1) + rt(o) : i > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : r < 0 ? (a = "0." + rt(-r - 1) + a, t && (o = t - i) > 0 && (a += rt(o))) : r >= i ? (a += rt(r + 1 - i), t && (o = t - r - 1) > 0 && (a = a + "." + rt(o))) : ((o = r + 1) < i && (a = a.slice(0, o) + "." + a.slice(o)), t && (o = t - i) > 0 && (r + 1 === i && (a += "."), a += rt(o))), a;
}
function aa(e, n) {
  var t = e[0];
  for (n *= ye; t >= 10; t /= 10)
    n++;
  return n;
}
function Cr(e, n, t) {
  if (n > uy)
    throw Se = !0, t && (e.precision = t), Error(Of);
  return ge(new e($r), n, 1, !0);
}
function zn(e, n, t) {
  if (n > Gi)
    throw Error(Of);
  return ge(new e(wr), n, t, !0);
}
function Bf(e) {
  var n = e.length - 1, t = n * ye + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      t--;
    for (n = e[0]; n >= 10; n /= 10)
      t++;
  }
  return t;
}
function rt(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Df(e, n, t, o) {
  var r, a = new e(1), i = Math.ceil(o / ye + 4);
  for (Se = !1; ; ) {
    if (t % 2 && (a = a.times(n), mu(a.d, i) && (r = !0)), t = sn(t / 2), t === 0) {
      t = a.d.length - 1, r && a.d[t] === 0 && ++a.d[t];
      break;
    }
    n = n.times(n), mu(n.d, i);
  }
  return Se = !0, a;
}
function vu(e) {
  return e.d[e.d.length - 1] & 1;
}
function Mf(e, n, t) {
  for (var o, r = new e(n[0]), a = 0; ++a < n.length; )
    if (o = new e(n[a]), o.s)
      r[t](o) && (r = o);
    else {
      r = o;
      break;
    }
  return r;
}
function Xi(e, n) {
  var t, o, r, a, i, l, s, u = 0, d = 0, c = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (Se = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), c += 5;
  for (o = Math.log(xe(2, c)) / Math.LN10 * 2 + 5 | 0, s += o, t = a = i = new f(1), f.precision = s; ; ) {
    if (a = ge(a.times(e), s, 1), t = t.times(++d), l = i.plus(Ue(a, t, s, 1)), on(l.d).slice(0, s) === on(i.d).slice(0, s)) {
      for (r = c; r--; )
        i = ge(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && To(i.d, s - o, m, u))
          f.precision = s += 10, t = a = l = new f(1), d = 0, u++;
        else
          return ge(i, f.precision = g, m, Se = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function dt(e, n) {
  var t, o, r, a, i, l, s, u, d, c, f, m = 1, g = 10, p = e, y = p.d, h = p.constructor, S = h.rounding, T = h.precision;
  if (p.s < 0 || !y || !y[0] || !p.e && y[0] == 1 && y.length == 1)
    return new h(y && !y[0] ? -1 / 0 : p.s != 1 ? NaN : y ? 0 : p);
  if (n == null ? (Se = !1, d = T) : d = n, h.precision = d += g, t = on(y), o = t.charAt(0), Math.abs(a = p.e) < 15e14) {
    for (; o < 7 && o != 1 || o == 1 && t.charAt(1) > 3; )
      p = p.times(e), t = on(p.d), o = t.charAt(0), m++;
    a = p.e, o > 1 ? (p = new h("0." + t), a++) : p = new h(o + "." + t.slice(1));
  } else
    return u = Cr(h, d + 2, T).times(a + ""), p = dt(new h(o + "." + t.slice(1)), d - g).plus(u), h.precision = T, n == null ? ge(p, T, S, Se = !0) : p;
  for (c = p, s = i = p = Ue(p.minus(1), p.plus(1), d, 1), f = ge(p.times(p), d, 1), r = 3; ; ) {
    if (i = ge(i.times(f), d, 1), u = s.plus(Ue(i, new h(r), d, 1)), on(u.d).slice(0, d) === on(s.d).slice(0, d))
      if (s = s.times(2), a !== 0 && (s = s.plus(Cr(h, d + 2, T).times(a + ""))), s = Ue(s, new h(m), d, 1), n == null)
        if (To(s.d, d - g, S, l))
          h.precision = d += g, u = i = p = Ue(c.minus(1), c.plus(1), d, 1), f = ge(p.times(p), d, 1), r = l = 1;
        else
          return ge(s, h.precision = T, S, Se = !0);
      else
        return h.precision = T, s;
    s = u, r += 2;
  }
}
function Nf(e) {
  return String(e.s * e.s / 0);
}
function Ki(e, n) {
  var t, o, r;
  for ((t = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (o = n.search(/e/i)) > 0 ? (t < 0 && (t = o), t += +n.slice(o + 1), n = n.substring(0, o)) : t < 0 && (t = n.length), o = 0; n.charCodeAt(o) === 48; o++)
    ;
  for (r = n.length; n.charCodeAt(r - 1) === 48; --r)
    ;
  if (n = n.slice(o, r), n) {
    if (r -= o, e.e = t = t - o - 1, e.d = [], o = (t + 1) % ye, t < 0 && (o += ye), o < r) {
      for (o && e.d.push(+n.slice(0, o)), r -= ye; o < r; )
        e.d.push(+n.slice(o, o += ye));
      n = n.slice(o), o = ye - n.length;
    } else
      o -= r;
    for (; o--; )
      n += "0";
    e.d.push(+n), Se && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function cy(e, n) {
  var t, o, r, a, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), If.test(n))
      return Ki(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (iy.test(n))
    t = 16, n = n.toLowerCase();
  else if (ay.test(n))
    t = 2;
  else if (ly.test(n))
    t = 8;
  else
    throw Error(yt + n);
  for (a = n.search(/p/i), a > 0 ? (s = +n.slice(a + 1), n = n.substring(2, a)) : n = n.slice(2), a = n.indexOf("."), i = a >= 0, o = e.constructor, i && (n = n.replace(".", ""), l = n.length, a = l - a, r = Df(o, new o(t), a, a * 2)), u = sr(n, t, Ln), d = u.length - 1, a = d; u[a] === 0; --a)
    u.pop();
  return a < 0 ? new o(e.s * 0) : (e.e = aa(u, d), e.d = u, Se = !1, i && (e = Ue(e, r, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? xe(2, s) : ct.pow(2, s))), Se = !0, e);
}
function fy(e, n) {
  var t, o = n.d.length;
  if (o < 3)
    return n.isZero() ? n : Zt(e, 2, n, n);
  t = 1.4 * Math.sqrt(o), t = t > 16 ? 16 : t | 0, n = n.times(1 / ia(5, t)), n = Zt(e, 2, n, n);
  for (var r, a = new e(5), i = new e(16), l = new e(20); t--; )
    r = n.times(n), n = n.times(a.plus(r.times(i.times(r).minus(l))));
  return n;
}
function Zt(e, n, t, o, r) {
  var a, i, l, s, u = e.precision, d = Math.ceil(u / ye);
  for (Se = !1, s = t.times(t), l = new e(o); ; ) {
    if (i = Ue(l.times(s), new e(n++ * n++), u, 1), l = r ? o.plus(i) : o.minus(i), o = Ue(i.times(s), new e(n++ * n++), u, 1), i = l.plus(o), i.d[d] !== void 0) {
      for (a = d; i.d[a] === l.d[a] && a--; )
        ;
      if (a == -1)
        break;
    }
    a = l, l = o, o = i, i = a;
  }
  return Se = !0, i.d.length = d + 1, i;
}
function ia(e, n) {
  for (var t = e; --n; )
    t *= e;
  return t;
}
function Vf(e, n) {
  var t, o = n.s < 0, r = zn(e, e.precision, 1), a = r.times(0.5);
  if (n = n.abs(), n.lte(a))
    return Zn = o ? 4 : 1, n;
  if (t = n.divToInt(r), t.isZero())
    Zn = o ? 3 : 2;
  else {
    if (n = n.minus(t.times(r)), n.lte(a))
      return Zn = vu(t) ? o ? 2 : 3 : o ? 4 : 1, n;
    Zn = vu(t) ? o ? 1 : 4 : o ? 3 : 2;
  }
  return n.minus(r).abs();
}
function rs(e, n, t, o) {
  var r, a, i, l, s, u, d, c, f, m = e.constructor, g = t !== void 0;
  if (g ? (wn(t, 1, Pt), o === void 0 ? o = m.rounding : wn(o, 0, 8)) : (t = m.precision, o = m.rounding), !e.isFinite())
    d = Nf(e);
  else {
    for (d = Yn(e), i = d.indexOf("."), g ? (r = 2, n == 16 ? t = t * 4 - 3 : n == 8 && (t = t * 3 - 2)) : r = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = sr(Yn(f), 10, r), f.e = f.d.length), c = sr(d, 10, r), a = s = c.length; c[--s] == 0; )
      c.pop();
    if (!c[0])
      d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? a-- : (e = new m(e), e.d = c, e.e = a, e = Ue(e, f, t, o, 0, r), c = e.d, a = e.e, u = Pf), i = c[t], l = r / 2, u = u || c[t + 1] !== void 0, u = o < 4 ? (i !== void 0 || u) && (o === 0 || o === (e.s < 0 ? 3 : 2)) : i > l || i === l && (o === 4 || u || o === 6 && c[t - 1] & 1 || o === (e.s < 0 ? 8 : 7)), c.length = t, u)
        for (; ++c[--t] > r - 1; )
          c[t] = 0, t || (++a, c.unshift(1));
      for (s = c.length; !c[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += Wi.charAt(c[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (c = sr(d, r, n), s = c.length; !c[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += Wi.charAt(c[i]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (a < 0 ? "p" : "p+") + a;
      } else if (a < 0) {
        for (; ++a; )
          d = "0" + d;
        d = "0." + d;
      } else if (++a > s)
        for (a -= s; a--; )
          d += "0";
      else
        a < s && (d = d.slice(0, a) + "." + d.slice(a));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function mu(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function vy(e) {
  return new this(e).abs();
}
function my(e) {
  return new this(e).acos();
}
function py(e) {
  return new this(e).acosh();
}
function hy(e, n) {
  return new this(e).plus(n);
}
function gy(e) {
  return new this(e).asin();
}
function by(e) {
  return new this(e).asinh();
}
function yy(e) {
  return new this(e).atan();
}
function $y(e) {
  return new this(e).atanh();
}
function wy(e, n) {
  e = new this(e), n = new this(n);
  var t, o = this.precision, r = this.rounding, a = o + 4;
  return !e.s || !n.s ? t = new this(NaN) : !e.d && !n.d ? (t = zn(this, a, 1).times(n.s > 0 ? 0.25 : 0.75), t.s = e.s) : !n.d || e.isZero() ? (t = n.s < 0 ? zn(this, o, r) : new this(0), t.s = e.s) : !e.d || n.isZero() ? (t = zn(this, a, 1).times(0.5), t.s = e.s) : n.s < 0 ? (this.precision = a, this.rounding = 1, t = this.atan(Ue(e, n, a, 1)), n = zn(this, a, 1), this.precision = o, this.rounding = r, t = e.s < 0 ? t.minus(n) : t.plus(n)) : t = this.atan(Ue(e, n, a, 1)), t;
}
function Cy(e) {
  return new this(e).cbrt();
}
function Sy(e) {
  return ge(e = new this(e), e.e + 1, 2);
}
function ky(e, n, t) {
  return new this(e).clamp(n, t);
}
function Py(e) {
  if (!e || typeof e != "object")
    throw Error(ra + "Object expected");
  var n, t, o, r = e.defaults === !0, a = [
    "precision",
    1,
    Pt,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ut,
    0,
    "toExpPos",
    0,
    Ut,
    "maxE",
    0,
    Ut,
    "minE",
    -Ut,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < a.length; n += 3)
    if (t = a[n], r && (this[t] = qi[t]), (o = e[t]) !== void 0)
      if (sn(o) === o && o >= a[n + 1] && o <= a[n + 2])
        this[t] = o;
      else
        throw Error(yt + t + ": " + o);
  if (t = "crypto", r && (this[t] = qi[t]), (o = e[t]) !== void 0)
    if (o === !0 || o === !1 || o === 0 || o === 1)
      if (o)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[t] = !0;
        else
          throw Error(Tf);
      else
        this[t] = !1;
    else
      throw Error(yt + t + ": " + o);
  return this;
}
function Oy(e) {
  return new this(e).cos();
}
function Ty(e) {
  return new this(e).cosh();
}
function Af(e) {
  var n, t, o;
  function r(a) {
    var i, l, s, u = this;
    if (!(u instanceof r))
      return new r(a);
    if (u.constructor = r, pu(a)) {
      u.s = a.s, Se ? !a.d || a.e > r.maxE ? (u.e = NaN, u.d = null) : a.e < r.minE ? (u.e = 0, u.d = [0]) : (u.e = a.e, u.d = a.d.slice()) : (u.e = a.e, u.d = a.d ? a.d.slice() : a.d);
      return;
    }
    if (s = typeof a, s === "number") {
      if (a === 0) {
        u.s = 1 / a < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (a < 0 ? (a = -a, u.s = -1) : u.s = 1, a === ~~a && a < 1e7) {
        for (i = 0, l = a; l >= 10; l /= 10)
          i++;
        Se ? i > r.maxE ? (u.e = NaN, u.d = null) : i < r.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [a]) : (u.e = i, u.d = [a]);
        return;
      } else if (a * 0 !== 0) {
        a || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Ki(u, a.toString());
    } else if (s !== "string")
      throw Error(yt + a);
    return (l = a.charCodeAt(0)) === 45 ? (a = a.slice(1), u.s = -1) : (l === 43 && (a = a.slice(1)), u.s = 1), If.test(a) ? Ki(u, a) : cy(u, a);
  }
  if (r.prototype = K, r.ROUND_UP = 0, r.ROUND_DOWN = 1, r.ROUND_CEIL = 2, r.ROUND_FLOOR = 3, r.ROUND_HALF_UP = 4, r.ROUND_HALF_DOWN = 5, r.ROUND_HALF_EVEN = 6, r.ROUND_HALF_CEIL = 7, r.ROUND_HALF_FLOOR = 8, r.EUCLID = 9, r.config = r.set = Py, r.clone = Af, r.isDecimal = pu, r.abs = vy, r.acos = my, r.acosh = py, r.add = hy, r.asin = gy, r.asinh = by, r.atan = yy, r.atanh = $y, r.atan2 = wy, r.cbrt = Cy, r.ceil = Sy, r.clamp = ky, r.cos = Oy, r.cosh = Ty, r.div = Ey, r.exp = Iy, r.floor = By, r.hypot = Dy, r.ln = My, r.log = Ny, r.log10 = Ay, r.log2 = Vy, r.max = zy, r.min = Ly, r.mod = Ry, r.mul = Uy, r.pow = Hy, r.random = Fy, r.round = Yy, r.sign = jy, r.sin = Wy, r.sinh = qy, r.sqrt = Gy, r.sub = Xy, r.sum = Ky, r.tan = Zy, r.tanh = Jy, r.trunc = Qy, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (o = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < o.length; )
      e.hasOwnProperty(t = o[n++]) || (e[t] = this[t]);
  return r.config(e), r;
}
function Ey(e, n) {
  return new this(e).div(n);
}
function Iy(e) {
  return new this(e).exp();
}
function By(e) {
  return ge(e = new this(e), e.e + 1, 3);
}
function Dy() {
  var e, n, t = new this(0);
  for (Se = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      t.d && (t = t.plus(n.times(n)));
    else {
      if (n.s)
        return Se = !0, new this(1 / 0);
      t = n;
    }
  return Se = !0, t.sqrt();
}
function pu(e) {
  return e instanceof ct || e && e.toStringTag === Ef || !1;
}
function My(e) {
  return new this(e).ln();
}
function Ny(e, n) {
  return new this(e).log(n);
}
function Vy(e) {
  return new this(e).log(2);
}
function Ay(e) {
  return new this(e).log(10);
}
function zy() {
  return Mf(this, arguments, "lt");
}
function Ly() {
  return Mf(this, arguments, "gt");
}
function Ry(e, n) {
  return new this(e).mod(n);
}
function Uy(e, n) {
  return new this(e).mul(n);
}
function Hy(e, n) {
  return new this(e).pow(n);
}
function Fy(e) {
  var n, t, o, r, a = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : wn(e, 1, Pt), o = Math.ceil(e / ye), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(o)); a < o; )
        r = n[a], r >= 429e7 ? n[a] = crypto.getRandomValues(new Uint32Array(1))[0] : l[a++] = r % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(o *= 4); a < o; )
        r = n[a] + (n[a + 1] << 8) + (n[a + 2] << 16) + ((n[a + 3] & 127) << 24), r >= 214e7 ? crypto.randomBytes(4).copy(n, a) : (l.push(r % 1e7), a += 4);
      a = o / 4;
    } else
      throw Error(Tf);
  else
    for (; a < o; )
      l[a++] = Math.random() * 1e7 | 0;
  for (o = l[--a], e %= ye, o && e && (r = xe(10, ye - e), l[a] = (o / r | 0) * r); l[a] === 0; a--)
    l.pop();
  if (a < 0)
    t = 0, l = [0];
  else {
    for (t = -1; l[0] === 0; t -= ye)
      l.shift();
    for (o = 1, r = l[0]; r >= 10; r /= 10)
      o++;
    o < ye && (t -= ye - o);
  }
  return i.e = t, i.d = l, i;
}
function Yy(e) {
  return ge(e = new this(e), e.e + 1, this.rounding);
}
function jy(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Wy(e) {
  return new this(e).sin();
}
function qy(e) {
  return new this(e).sinh();
}
function Gy(e) {
  return new this(e).sqrt();
}
function Xy(e, n) {
  return new this(e).sub(n);
}
function Ky() {
  var e = 0, n = arguments, t = new this(n[e]);
  for (Se = !1; t.s && ++e < n.length; )
    t = t.plus(n[e]);
  return Se = !0, ge(t, this.precision, this.rounding);
}
function Zy(e) {
  return new this(e).tan();
}
function Jy(e) {
  return new this(e).tanh();
}
function Qy(e) {
  return ge(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var ct = K.constructor = Af(qi);
$r = new ct($r);
wr = new ct(wr);
const zf = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: [String, Number],
  max: [String, Number],
  step: {
    type: [String, Number],
    default: 1
  },
  color: String,
  inputWidth: [String, Number],
  inputTextSize: [String, Number],
  buttonSize: [String, Number],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  decimalLength: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  disableIncrement: Boolean,
  disableDecrement: Boolean,
  disableInput: Boolean,
  lazyChange: Boolean,
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: Array,
  onBeforeChange: A(),
  onChange: A(),
  onIncrement: A(),
  onDecrement: A(),
  "onUpdate:modelValue": A()
}, hu = 100, gu = 600, { name: _y, n: xy, classes: e1 } = ne("counter"), n1 = ["inputmode", "readonly", "disabled"];
function t1(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = ae("var-form-details");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      B(
        "div",
        Ae({
          class: e.classes(
            e.n("controller"),
            e.formatElevation(e.elevation, 2),
            [e.disabled || e.formDisabled, e.n("--disabled")],
            [e.errorMessage, e.n("--error")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          G(o, {
            class: v(
              e.classes(
                e.n("decrement-button"),
                [!e.decrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: F({
              width: e.toSizeUnit(e.buttonSize),
              height: e.toSizeUnit(e.buttonSize)
            }),
            round: "",
            "var-counter-cover": "",
            ripple: e.ripple && e.decrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableDecrement && !e.isMin,
            onClick: e.decrement,
            onTouchstart: e.pressDecrement,
            onTouchend: e.releaseDecrement,
            onTouchcancel: e.releaseDecrement
          }, {
            default: me(() => [
              G(t, { name: "minus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]),
          De(B("input", {
            class: v(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
            style: F({
              width: e.toSizeUnit(e.inputWidth),
              fontSize: e.toSizeUnit(e.inputTextSize)
            }),
            inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
            readonly: e.readonly || e.formReadonly,
            disabled: e.disabled || e.formDisabled || e.disableInput,
            "onUpdate:modelValue": n[0] || (n[0] = (a) => e.inputValue = a),
            onChange: n[1] || (n[1] = (...a) => e.handleChange && e.handleChange(...a))
          }, null, 46, n1), [
            [Dp, e.inputValue]
          ]),
          G(o, {
            class: v(
              e.classes(
                e.n("increment-button"),
                [!e.incrementButton, e.n("--hidden")],
                [e.disabled || e.formDisabled, e.n("--not-allowed")]
              )
            ),
            style: F({
              width: e.toSizeUnit(e.buttonSize),
              height: e.toSizeUnit(e.buttonSize)
            }),
            round: "",
            "var-counter-cover": "",
            ripple: e.ripple && e.incrementButton && !e.disabled && !e.formDisabled && !e.readonly && !e.formReadonly && !e.disableIncrement && !e.isMax,
            onClick: e.increment,
            onTouchstart: e.pressIncrement,
            onTouchend: e.releaseIncrement,
            onTouchcancel: e.releaseIncrement
          }, {
            default: me(() => [
              G(t, { name: "plus" })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])
        ],
        16
        /* FULL_PROPS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Lf = ee({
  name: _y,
  components: {
    VarButton: pn,
    VarIcon: He,
    VarFormDetails: $n
  },
  directives: { Ripple: Qe },
  inheritAttrs: !1,
  props: zf,
  setup(e) {
    const n = C(""), { bindForm: t, form: o } = Mn(), {
      errorMessage: r,
      validateWithTrigger: a,
      validate: i,
      // expose
      resetValidation: l
    } = Dn(), { readonly: s, disabled: u } = o ?? {}, d = N(() => {
      const { max: Z, modelValue: he } = e;
      return Z != null && z(he) >= z(Z);
    }), c = N(() => {
      const { min: Z, modelValue: he } = e;
      return Z != null && z(he) <= z(Z);
    });
    let f, m, g, p;
    w(t, {
      reset: T,
      validate: h,
      resetValidation: l
    }), ce(
      () => e.modelValue,
      (Z) => {
        X($(String(Z))), w(e.onChange, z(Z));
      }
    ), X($(String(e.modelValue)));
    function h() {
      return i(e.rules, e.modelValue);
    }
    function S(Z) {
      qe(() => {
        const { validateTrigger: he, rules: H, modelValue: oe } = e;
        a(he, Z, H, oe);
      });
    }
    function T() {
      const { min: Z } = e;
      w(e["onUpdate:modelValue"], Z != null ? z(Z) : 0), l();
    }
    function $(Z) {
      const { decimalLength: he, max: H, min: oe } = e;
      let W = z(Z);
      return H != null && W > z(H) && (W = z(H)), oe != null && W < z(oe) && (W = z(oe)), Z = String(W), he != null && (Z = W.toFixed(z(he))), Z;
    }
    function P(Z) {
      const { lazyChange: he, onBeforeChange: H } = e, { value: oe } = Z.target, W = $(oe);
      he ? w(H, z(W), j) : X(W), S("onInputChange");
    }
    function I() {
      const {
        disabled: Z,
        readonly: he,
        disableDecrement: H,
        decrementButton: oe,
        lazyChange: W,
        step: J,
        modelValue: te,
        onDecrement: q,
        onBeforeChange: se
      } = e;
      if (u != null && u.value || s != null && s.value || Z || he || H || !oe || c.value)
        return;
      const D = new ct(z(te)).minus(new ct(z(J))).toString(), Y = $(D), pe = z(Y);
      w(q, pe), W ? w(se, pe, j) : (X(Y), S("onDecrement"));
    }
    function O() {
      const {
        disabled: Z,
        readonly: he,
        disableIncrement: H,
        incrementButton: oe,
        lazyChange: W,
        step: J,
        modelValue: te,
        onIncrement: q,
        onBeforeChange: se
      } = e;
      if (u != null && u.value || s != null && s.value || Z || he || H || !oe || d.value)
        return;
      const D = new ct(z(te)).plus(new ct(z(J))).toString(), Y = $(D), pe = z(Y);
      w(q, pe), W ? w(se, pe, j) : (X(Y), S("onIncrement"));
    }
    function M() {
      const { press: Z, lazyChange: he } = e;
      !Z || he || (p = window.setTimeout(() => {
        _();
      }, gu));
    }
    function E() {
      const { press: Z, lazyChange: he } = e;
      !Z || he || (g = window.setTimeout(() => {
        U();
      }, gu));
    }
    function V() {
      m && clearTimeout(m), p && clearTimeout(p);
    }
    function L() {
      f && clearTimeout(f), g && clearTimeout(g);
    }
    function U() {
      f = window.setTimeout(() => {
        O(), U();
      }, hu);
    }
    function _() {
      m = window.setTimeout(() => {
        I(), _();
      }, hu);
    }
    function X(Z) {
      n.value = Z;
      const he = z(Z);
      w(e["onUpdate:modelValue"], he);
    }
    function j(Z) {
      X($(String(Z))), S("onLazyChange");
    }
    return {
      inputValue: n,
      errorMessage: r,
      formDisabled: u,
      formReadonly: s,
      isMax: d,
      isMin: c,
      n: xy,
      classes: e1,
      formatElevation: dn,
      validate: h,
      reset: T,
      resetValidation: l,
      handleChange: P,
      decrement: I,
      increment: O,
      pressDecrement: M,
      pressIncrement: E,
      releaseDecrement: V,
      releaseIncrement: L,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
Lf.render = t1;
var la = Lf;
ie(la);
ue(la, zf);
const OI = la;
var Zi = la, Rf = 60, Uf = Rf * 60, Hf = Uf * 24, o1 = Hf * 7, Jt = 1e3, di = Rf * Jt, bu = Uf * Jt, r1 = Hf * Jt, a1 = o1 * Jt, as = "millisecond", Ht = "second", Ft = "minute", Yt = "hour", at = "day", ur = "week", An = "month", Ff = "quarter", it = "year", jt = "date", i1 = "YYYY-MM-DDTHH:mm:ssZ", yu = "Invalid Date", l1 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, s1 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const u1 = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Ji = function(n, t, o) {
  var r = String(n);
  return !r || r.length >= t ? n : "" + Array(t + 1 - r.length).join(o) + n;
}, d1 = function(n) {
  var t = -n.utcOffset(), o = Math.abs(t), r = Math.floor(o / 60), a = o % 60;
  return (t <= 0 ? "+" : "-") + Ji(r, 2, "0") + ":" + Ji(a, 2, "0");
}, c1 = function e(n, t) {
  if (n.date() < t.date())
    return -e(t, n);
  var o = (t.year() - n.year()) * 12 + (t.month() - n.month()), r = n.clone().add(o, An), a = t - r < 0, i = n.clone().add(o + (a ? -1 : 1), An);
  return +(-(o + (t - r) / (a ? r - i : i - r)) || 0);
}, f1 = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, v1 = function(n) {
  var t = {
    M: An,
    y: it,
    w: ur,
    d: at,
    D: jt,
    h: Yt,
    m: Ft,
    s: Ht,
    ms: as,
    Q: Ff
  };
  return t[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, m1 = function(n) {
  return n === void 0;
};
const p1 = {
  s: Ji,
  z: d1,
  m: c1,
  a: f1,
  p: v1,
  u: m1
};
var bo = "en", Bt = {};
Bt[bo] = u1;
var is = function(n) {
  return n instanceof sa;
}, Sr = function e(n, t, o) {
  var r;
  if (!n)
    return bo;
  if (typeof n == "string") {
    var a = n.toLowerCase();
    Bt[a] && (r = a), t && (Bt[a] = t, r = a);
    var i = n.split("-");
    if (!r && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Bt[l] = n, r = l;
  }
  return !o && r && (bo = r), r || !o && bo;
}, le = function(n, t) {
  if (is(n))
    return n.clone();
  var o = typeof t == "object" ? t : {};
  return o.date = n, o.args = arguments, new sa(o);
}, h1 = function(n, t) {
  return le(n, {
    locale: t.$L,
    utc: t.$u,
    x: t.$x,
    $offset: t.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Re = p1;
Re.l = Sr;
Re.i = is;
Re.w = h1;
var g1 = function(n) {
  var t = n.date, o = n.utc;
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Re.u(t))
    return /* @__PURE__ */ new Date();
  if (t instanceof Date)
    return new Date(t);
  if (typeof t == "string" && !/Z$/i.test(t)) {
    var r = t.match(l1);
    if (r) {
      var a = r[2] - 1 || 0, i = (r[7] || "0").substring(0, 3);
      return o ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, i);
    }
  }
  return new Date(t);
}, sa = /* @__PURE__ */ function() {
  function e(t) {
    this.$L = Sr(t.locale, null, !0), this.parse(t);
  }
  var n = e.prototype;
  return n.parse = function(o) {
    this.$d = g1(o), this.$x = o.x || {}, this.init();
  }, n.init = function() {
    var o = this.$d;
    this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
  }, n.$utils = function() {
    return Re;
  }, n.isValid = function() {
    return this.$d.toString() !== yu;
  }, n.isSame = function(o, r) {
    var a = le(o);
    return this.startOf(r) <= a && a <= this.endOf(r);
  }, n.isAfter = function(o, r) {
    return le(o) < this.startOf(r);
  }, n.isBefore = function(o, r) {
    return this.endOf(r) < le(o);
  }, n.$g = function(o, r, a) {
    return Re.u(o) ? this[r] : this.set(a, o);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(o, r) {
    var a = this, i = Re.u(r) ? !0 : r, l = Re.p(o), s = function(h, S) {
      var T = Re.w(a.$u ? Date.UTC(a.$y, S, h) : new Date(a.$y, S, h), a);
      return i ? T : T.endOf(at);
    }, u = function(h, S) {
      var T = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Re.w(a.toDate()[h].apply(
        // eslint-disable-line prefer-spread
        a.toDate("s"),
        (i ? T : $).slice(S)
      ), a);
    }, d = this.$W, c = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case it:
        return i ? s(1, 0) : s(31, 11);
      case An:
        return i ? s(1, c) : s(0, c + 1);
      case ur: {
        var g = this.$locale().weekStart || 0, p = (d < g ? d + 7 : d) - g;
        return s(i ? f - p : f + (6 - p), c);
      }
      case at:
      case jt:
        return u(m + "Hours", 0);
      case Yt:
        return u(m + "Minutes", 1);
      case Ft:
        return u(m + "Seconds", 2);
      case Ht:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(o) {
    return this.startOf(o, !1);
  }, n.$set = function(o, r) {
    var a, i = Re.p(o), l = "set" + (this.$u ? "UTC" : ""), s = (a = {}, a[at] = l + "Date", a[jt] = l + "Date", a[An] = l + "Month", a[it] = l + "FullYear", a[Yt] = l + "Hours", a[Ft] = l + "Minutes", a[Ht] = l + "Seconds", a[as] = l + "Milliseconds", a)[i], u = i === at ? this.$D + (r - this.$W) : r;
    if (i === An || i === it) {
      var d = this.clone().set(jt, 1);
      d.$d[s](u), d.init(), this.$d = d.set(jt, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(o, r) {
    return this.clone().$set(o, r);
  }, n.get = function(o) {
    return this[Re.p(o)]();
  }, n.add = function(o, r) {
    var a = this, i;
    o = Number(o);
    var l = Re.p(r), s = function(f) {
      var m = le(a);
      return Re.w(m.date(m.date() + Math.round(f * o)), a);
    };
    if (l === An)
      return this.set(An, this.$M + o);
    if (l === it)
      return this.set(it, this.$y + o);
    if (l === at)
      return s(1);
    if (l === ur)
      return s(7);
    var u = (i = {}, i[Ft] = di, i[Yt] = bu, i[Ht] = Jt, i)[l] || 1, d = this.$d.getTime() + o * u;
    return Re.w(d, this);
  }, n.subtract = function(o, r) {
    return this.add(o * -1, r);
  }, n.format = function(o) {
    var r = this, a = this.$locale();
    if (!this.isValid())
      return a.invalidDate || yu;
    var i = o || i1, l = Re.z(this), s = this.$H, u = this.$m, d = this.$M, c = a.weekdays, f = a.months, m = a.meridiem, g = function(T, $, P, I) {
      return T && (T[$] || T(r, i)) || P[$].slice(0, I);
    }, p = function(T) {
      return Re.s(s % 12 || 12, T, "0");
    }, y = m || function(S, T, $) {
      var P = S < 12 ? "AM" : "PM";
      return $ ? P.toLowerCase() : P;
    }, h = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Re.s(d + 1, 2, "0"),
      MMM: g(a.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Re.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(a.weekdaysMin, this.$W, c, 2),
      ddd: g(a.weekdaysShort, this.$W, c, 3),
      dddd: c[this.$W],
      H: String(s),
      HH: Re.s(s, 2, "0"),
      h: p(1),
      hh: p(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Re.s(u, 2, "0"),
      s: String(this.$s),
      ss: Re.s(this.$s, 2, "0"),
      SSS: Re.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(s1, function(S, T) {
      return T || h[S] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(o, r, a) {
    var i, l = Re.p(r), s = le(o), u = (s.utcOffset() - this.utcOffset()) * di, d = this - s, c = Re.m(this, s);
    return c = (i = {}, i[it] = c / 12, i[An] = c, i[Ff] = c / 3, i[ur] = (d - u) / a1, i[at] = (d - u) / r1, i[Yt] = d / bu, i[Ft] = d / di, i[Ht] = d / Jt, i)[l] || d, a ? c : Re.a(c);
  }, n.daysInMonth = function() {
    return this.endOf(An).$D;
  }, n.$locale = function() {
    return Bt[this.$L];
  }, n.locale = function(o, r) {
    if (!o)
      return this.$L;
    var a = this.clone(), i = Sr(o, r, !0);
    return i && (a.$L = i), a;
  }, n.clone = function() {
    return Re.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Yf = sa.prototype;
le.prototype = Yf;
[["$ms", as], ["$s", Ht], ["$m", Ft], ["$H", Yt], ["$W", at], ["$M", An], ["$y", it], ["$D", jt]].forEach(function(e) {
  Yf[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
le.extend = function(e, n) {
  return e.$i || (e(n, sa, le), e.$i = !0), le;
};
le.locale = Sr;
le.isDayjs = is;
le.unix = function(e) {
  return le(e * 1e3);
};
le.en = Bt[bo];
le.Ls = Bt;
le.p = {};
const jf = function(e, n) {
  n.prototype.isSameOrBefore = function(t, o) {
    return this.isSame(t, o) || this.isBefore(t, o);
  };
}, Wf = function(e, n) {
  n.prototype.isSameOrAfter = function(t, o) {
    return this.isSame(t, o) || this.isAfter(t, o);
  };
}, dr = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], ho = ["0", "1", "2", "3", "4", "5", "6"], qf = {
  modelValue: [String, Array],
  type: {
    type: String,
    default: "date"
  },
  hint: String,
  allowedDates: Function,
  color: String,
  /** @deprecated Use titleColor to instead. */
  headerColor: String,
  titleColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  buttonElevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: String,
  max: String,
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { n: b1 } = ne("picker-header");
function y1(e, n) {
  const t = ae("var-icon"), o = ae("var-button");
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      G(o, {
        round: "",
        text: "",
        style: { filter: "opacity(0.54)" },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (r) => e.checkDate("prev"))
      }, {
        default: me(() => [
          G(t, { name: "chevron-left" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"]),
      B(
        "div",
        {
          class: v(e.n("value")),
          onClick: n[1] || (n[1] = (r) => e.$emit("check-panel"))
        },
        [
          G(We, {
            name: `var-date-picker${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: me(() => [
              (b(), k(
                "div",
                { key: e.showDate },
                re(e.showDate),
                1
                /* TEXT */
              ))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      ),
      G(o, {
        round: "",
        text: "",
        style: { filter: "opacity(0.54)" },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (r) => e.checkDate("next"))
      }, {
        default: me(() => [
          G(t, { name: "chevron-right" })
        ]),
        _: 1
        /* STABLE */
      }, 8, ["disabled"])
    ],
    2
    /* CLASS */
  );
}
const Gf = ee({
  name: "PanelHeader",
  components: {
    VarButton: pn,
    VarIcon: He
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, { emit: n }) {
    const t = C(!1), o = C(0), r = N(() => {
      var i;
      const { date: l, type: s } = e, { previewMonth: u, previewYear: d } = l;
      if (s === "year")
        return d;
      if (s === "month")
        return z(d) + o.value;
      const c = (i = Je.value.datePickerMonthDict) == null ? void 0 : i[u].name;
      return Je.value.lang === "zh-CN" ? `${d} ${c}` : `${c} ${d}`;
    }), a = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), t.value = i === "prev", o.value += i === "prev" ? -1 : 1);
    };
    return ce(
      () => e.date,
      () => {
        o.value = 0;
      }
    ), {
      n: b1,
      reverse: t,
      showDate: r,
      checkDate: a
    };
  }
});
Gf.render = y1;
var ls = Gf, $1 = Object.defineProperty, $u = Object.getOwnPropertySymbols, w1 = Object.prototype.hasOwnProperty, C1 = Object.prototype.propertyIsEnumerable, wu = (e, n, t) => n in e ? $1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, S1 = (e, n) => {
  for (var t in n || (n = {}))
    w1.call(n, t) && wu(e, t, n[t]);
  if ($u)
    for (var t of $u(n))
      C1.call(n, t) && wu(e, t, n[t]);
  return e;
};
le.extend(jf);
le.extend(Wf);
const { n: Jo, classes: k1 } = ne("month-picker"), { n: Qo } = ne("date-picker");
function P1(e, n) {
  const t = ae("panel-header"), o = ae("var-button");
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      B(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          G(t, {
            ref: "headerEl",
            type: "month",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickYear,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          G(We, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: me(() => [
              (b(), k("ul", { key: e.panelKey }, [
                (b(!0), k(
                  Ve,
                  null,
                  Ke(e.MONTH_LIST, (r) => (b(), k("li", { key: r }, [
                    G(o, Ae({
                      type: "primary",
                      "var-month-picker-cover": "",
                      ripple: !1,
                      elevation: e.componentProps.buttonElevation
                    }, S1({}, e.buttonProps(r)), {
                      onClick: (a) => e.chooseMonth(r, a)
                    }), {
                      default: me(() => [
                        Ie(
                          re(e.getMonthAbbr(r)),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["elevation", "onClick"])
                  ]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Xf = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: pn,
    PanelHeader: ls
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, { emit: n }) {
    const [t, o] = e.current.split("-"), r = C(!1), a = C(0), i = C(null), l = je({
      left: !1,
      right: !1
    }), s = N(() => e.choose.chooseYear === e.preview.previewYear), u = N(() => e.preview.previewYear === t), d = (h) => {
      var S, T;
      return (T = (S = Je.value.datePickerMonthDict) == null ? void 0 : S[h].abbr) != null ? T : "";
    }, c = (h) => {
      const {
        preview: { previewYear: S },
        componentProps: { min: T, max: $ }
      } = e;
      let P = !0, I = !0;
      const O = `${S}-${h}`;
      return $ && (P = le(O).isSameOrBefore(le($), "month")), T && (I = le(O).isSameOrAfter(le(T), "month")), P && I;
    }, f = (h) => {
      const {
        choose: { chooseMonths: S, chooseDays: T, chooseRangeMonth: $ },
        componentProps: { type: P, range: I }
      } = e;
      if (I) {
        if (!$.length)
          return !1;
        const O = le(h).isSameOrBefore(le($[1]), "month"), M = le(h).isSameOrAfter(le($[0]), "month");
        return O && M;
      }
      return P === "month" ? S.includes(h) : T.some((O) => O.includes(h));
    }, m = (h) => {
      const {
        choose: { chooseMonth: S },
        preview: { previewYear: T },
        componentProps: { allowedDates: $, color: P, multiple: I, range: O }
      } = e, M = `${T}-${h}`, E = () => O || I ? f(M) : S === h && s.value, L = (() => c(h) ? $ ? !$(M) : !1 : !0)(), U = () => L ? !0 : O || I ? !f(M) : !s.value || S !== h, _ = () => u.value && o === h && e.componentProps.showCurrent ? (O || I || s.value) && L ? !0 : O || I ? !f(M) : s.value ? S !== o : !0 : !1, X = () => L ? "" : _() ? P ?? "" : E() ? "" : `${Qo()}-color-cover`, j = X().startsWith(Qo());
      return {
        outline: _(),
        text: U(),
        color: U() ? "" : P,
        textColor: j ? "" : X(),
        [`${Qo()}-color-cover`]: j,
        class: k1(Jo("button"), [L, Jo("button--disabled")]),
        disabled: L
      };
    }, g = (h, S) => {
      S.currentTarget.classList.contains(Jo("button--disabled")) || n("choose-month", h);
    }, p = (h) => {
      r.value = h === "prev", a.value += h === "prev" ? -1 : 1, n("check-preview", "year", h);
    }, y = (h) => {
      i.value.checkDate(h);
    };
    return ce(
      () => e.preview.previewYear,
      (h) => {
        const {
          componentProps: { min: S, max: T }
        } = e;
        T && (l.right = !le(`${z(h) + 1}`).isSameOrBefore(le(T), "year")), S && (l.left = !le(`${z(h) - 1}`).isSameOrAfter(le(S), "year"));
      },
      { immediate: !0 }
    ), {
      n: Jo,
      nDate: Qo,
      pack: Je,
      MONTH_LIST: dr,
      headerEl: i,
      reverse: r,
      panelKey: a,
      panelBtnDisabled: l,
      forwardRef: y,
      buttonProps: m,
      getMonthAbbr: d,
      chooseMonth: g,
      checkDate: p
    };
  }
});
Xf.render = P1;
var O1 = Xf;
const yo = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: Boolean,
  disabled: Boolean,
  onScroll: A()
};
var Cu = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: T1, n: E1, classes: I1 } = ne("sticky");
function B1(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: F({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? `${e.offsetTop}px` : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [
      B(
        "div",
        {
          class: v(e.n("wrapper")),
          ref: "wrapperEl",
          style: F({
            zIndex: e.toNumber(e.zIndex),
            position: e.enableFixedMode ? "fixed" : void 0,
            width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
            height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
            left: e.enableFixedMode ? e.fixedLeft : void 0,
            top: e.enableFixedMode ? e.fixedTop : void 0
          })
        },
        [
          R(e.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  );
}
const Kf = ee({
  name: T1,
  props: yo,
  setup(e) {
    const n = C(null), t = C(null), o = C(!1), r = C("0px"), a = C("0px"), i = C("auto"), l = C("auto"), s = C("auto"), u = C("auto"), d = N(() => !e.disabled && e.cssMode), c = N(() => !e.disabled && !e.cssMode && o.value), f = N(() => Ge(e.offsetTop));
    let m;
    ce(() => e.disabled, y), rn(h), Ir(S), io(y), ht(() => window, "scroll", p);
    function g() {
      const { cssMode: T, disabled: $ } = e;
      if ($)
        return;
      let P = 0;
      if (m !== window) {
        const { top: L } = en(m);
        P = L;
      }
      const I = t.value, O = n.value, { top: M, left: E } = en(O), V = M - P;
      return V <= f.value ? (T || (i.value = `${O.offsetWidth}px`, l.value = `${O.offsetHeight}px`, r.value = `${P + f.value}px`, a.value = `${E}px`, s.value = `${I.offsetWidth}px`, u.value = `${I.offsetHeight}px`, o.value = !0), {
        offsetTop: f.value,
        isFixed: !0
      }) : (o.value = !1, {
        offsetTop: V,
        isFixed: !1
      });
    }
    function p() {
      if (!m)
        return;
      const T = g();
      T && w(e.onScroll, T.offsetTop, T.isFixed);
    }
    function y() {
      return Cu(this, null, function* () {
        o.value = !1, yield lr(), g();
      });
    }
    function h() {
      return Cu(this, null, function* () {
        yield mn(), m = bt(n.value), m !== window && m.addEventListener("scroll", p), p();
      });
    }
    function S() {
      m !== window && m.removeEventListener("scroll", p);
    }
    return {
      stickyEl: n,
      wrapperEl: t,
      isFixed: o,
      offsetTop: f,
      fixedTop: r,
      fixedLeft: a,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: c,
      n: E1,
      classes: I1,
      resize: y,
      toNumber: z
    };
  }
});
Kf.render = B1;
var ua = Kf;
ie(ua);
ue(ua, yo);
const TI = ua;
var Qt = ua, D1 = Object.defineProperty, Su = Object.getOwnPropertySymbols, M1 = Object.prototype.hasOwnProperty, N1 = Object.prototype.propertyIsEnumerable, ku = (e, n, t) => n in e ? D1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, V1 = (e, n) => {
  for (var t in n || (n = {}))
    M1.call(n, t) && ku(e, t, n[t]);
  if (Su)
    for (var t of Su(n))
      N1.call(n, t) && ku(e, t, n[t]);
  return e;
};
const { n: _o, classes: Pu } = ne("year-picker"), { n: xo } = ne("date-picker");
function A1(e, n) {
  const t = ae("panel-header"), o = ae("var-sticky"), r = ae("var-button");
  return b(), k("div", null, [
    G(o, { "css-mode": "" }, {
      default: me(() => [
        G(t, {
          ref: "headerEl",
          type: "year",
          date: {
            previewYear: `${e.yearList[0]} ~ ${e.yearList[e.yearList.length - 1]}`
          },
          disabled: e.panelBtnDisabled,
          onCheckDate: e.checkDate
        }, null, 8, ["date", "disabled", "onCheckDate"])
      ]),
      _: 1
      /* STABLE */
    }),
    G(We, {
      name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
    }, {
      default: me(() => [
        (b(), k(
          "ul",
          {
            ref: "panel",
            class: v(e.n()),
            key: e.panelKey
          },
          [
            (b(!0), k(
              Ve,
              null,
              Ke(e.yearList, (a) => (b(), k("li", { key: a }, [
                G(r, Ae({
                  type: "primary",
                  "var-year-picker-cover": "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, V1({}, e.buttonProps(`${a}`)), {
                  onClick: (i) => e.chooseYear(a, i)
                }), {
                  default: me(() => [
                    Ie(
                      re(a),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1040, ["elevation", "onClick"])
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["name"])
  ]);
}
const Zf = ee({
  name: "YearPickerPanel",
  components: {
    VarButton: pn,
    VarSticky: Qt,
    PanelHeader: ls
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, { emit: n }) {
    const [t] = e.current.split("-"), o = C(), r = C(null), a = C(!1), i = C(0), l = C(0), s = je({
      left: !1,
      right: !1
    }), u = N(() => {
      const h = [];
      if (!e.preview)
        return h;
      let S = Math.floor(z(e.preview) / 100 + l.value) * 100;
      S = S < 0 ? 0 : S;
      const T = [S, S + 100];
      for (let $ = T[0]; $ < T[1]; $++)
        h.push($);
      return h;
    }), d = (h) => {
      const {
        choose: { chooseMonths: S, chooseDays: T, chooseYears: $, chooseRangeYear: P },
        componentProps: { type: I, range: O }
      } = e;
      if (O) {
        if (!P.length)
          return !1;
        const M = le(h).isSameOrBefore(le(P[1]), "year"), E = le(h).isSameOrAfter(le(P[0]), "year");
        return M && E;
      }
      return I === "year" ? $.includes(h) : I === "month" ? S.some((M) => M.includes(h)) : T.some((M) => M.includes(h));
    }, c = (h) => {
      const {
        componentProps: { min: S, max: T }
      } = e;
      let $ = !0, P = !0;
      return T && ($ = le(h).isSameOrBefore(le(T), "year")), S && (P = le(h).isSameOrAfter(le(S), "year")), $ && P;
    }, f = (h) => {
      const {
        choose: { chooseYear: S },
        componentProps: { allowedDates: T, color: $, multiple: P, range: I }
      } = e, O = () => I || P ? d(h) : S === h, E = (() => c(h) ? T ? !T(h) : !1 : !0)(), V = () => E ? !0 : I || P ? !d(h) : S !== h, L = () => t === h && e.componentProps.showCurrent ? (I || P) && E ? !0 : I || P ? !d(h) : S !== t : !1, U = () => E ? "" : L() ? $ ?? "" : O() ? "" : `${xo()}-color-cover`, _ = U().startsWith(xo());
      return {
        outline: L(),
        text: V(),
        color: V() ? "" : $,
        textColor: _ ? "" : U(),
        [`${xo()}-color-cover`]: _,
        class: Pu(_o("button"), [E, _o("button--disabled")]),
        disabled: E
      };
    }, m = (h, S) => {
      S.currentTarget.classList.contains(_o("button--disabled")) || n("choose-year", h);
    }, g = () => {
      var h;
      const S = (h = o.value.querySelector(".var-button--primary")) != null ? h : o.value.querySelector(".var-button--outline");
      S == null || S.scrollIntoView({
        block: "center"
      });
    }, p = (h) => {
      a.value = h === "prev", i.value += h === "prev" ? -1 : 1, l.value += h === "prev" ? -1 : 1;
    }, y = (h) => {
      r.value.checkDate(h);
    };
    return rn(g), ce(
      () => e.preview,
      () => {
        l.value = 0;
      }
    ), ce(
      u,
      (h) => {
        const {
          componentProps: { min: S, max: T }
        } = e;
        T && (s.right = !le(`${z(h[h.length - 1])}`).isSameOrBefore(le(T), "year")), S && (s.left = !le(`${z(h[0])}`).isSameOrAfter(le(S), "year")), z(h[0] <= 0) && (s.left = !1);
      },
      {
        immediate: !0
      }
    ), {
      n: _o,
      classes: Pu,
      buttonProps: f,
      panel: o,
      headerEl: r,
      yearList: u,
      reverse: a,
      panelKey: i,
      panelBtnDisabled: s,
      nDate: xo,
      checkDate: p,
      chooseYear: m,
      forwardRef: y,
      toNumber: z
    };
  }
});
Zf.render = A1;
var z1 = Zf, L1 = Object.defineProperty, Ou = Object.getOwnPropertySymbols, R1 = Object.prototype.hasOwnProperty, U1 = Object.prototype.propertyIsEnumerable, Tu = (e, n, t) => n in e ? L1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, H1 = (e, n) => {
  for (var t in n || (n = {}))
    R1.call(n, t) && Tu(e, t, n[t]);
  if (Ou)
    for (var t of Ou(n))
      U1.call(n, t) && Tu(e, t, n[t]);
  return e;
};
le.extend(jf);
le.extend(Wf);
const { n: Lt, classes: F1 } = ne("day-picker"), { n: er } = ne("date-picker");
function Y1(e, n) {
  const t = ae("panel-header"), o = ae("var-button");
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      B(
        "div",
        {
          class: v(e.n("content"))
        },
        [
          G(t, {
            ref: "headerEl",
            type: "day",
            date: e.preview,
            disabled: e.panelBtnDisabled,
            onCheckPanel: e.clickMonth,
            onCheckDate: e.checkDate
          }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]),
          G(We, {
            name: `${e.nDate()}${e.reverse ? "-reverse" : ""}-translatex`
          }, {
            default: me(() => [
              (b(), k("div", { key: e.panelKey }, [
                B(
                  "ul",
                  {
                    class: v(e.n("head"))
                  },
                  [
                    (b(!0), k(
                      Ve,
                      null,
                      Ke(e.sortWeekList, (r) => (b(), k(
                        "li",
                        { key: r },
                        re(e.getDayAbbr(r)),
                        1
                        /* TEXT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                ),
                B(
                  "ul",
                  {
                    class: v(e.n("body"))
                  },
                  [
                    (b(!0), k(
                      Ve,
                      null,
                      Ke(e.days, (r, a) => (b(), k("li", { key: a }, [
                        G(o, Ae({
                          type: "primary",
                          "var-day-picker-cover": "",
                          round: "",
                          ripple: !1,
                          elevation: e.componentProps.buttonElevation
                        }, H1({}, e.buttonProps(r)), {
                          onClick: (i) => e.chooseDay(r, i)
                        }), {
                          default: me(() => [
                            Ie(
                              re(e.filterDay(r)),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1040, ["elevation", "onClick"])
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )
              ]))
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Jf = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: pn,
    PanelHeader: ls
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, { emit: n }) {
    const [t, o, r] = e.current.split("-"), a = C([]), i = C(!1), l = C(0), s = C(null), u = je({
      left: !1,
      right: !1
    }), d = N(
      () => e.preview.previewYear === t && e.preview.previewMonth === o
    ), c = N(
      () => e.choose.chooseYear === e.preview.previewYear && e.choose.chooseMonth === e.preview.previewMonth
    ), f = N(() => {
      const O = ho.findIndex((M) => M === e.componentProps.firstDayOfWeek);
      return O === -1 || O === 0 ? ho : [...ho.slice(O), ...ho.slice(0, O)];
    }), m = (O) => {
      var M, E;
      return (E = (M = Je.value.datePickerWeekDict) == null ? void 0 : M[O].abbr) != null ? E : "";
    }, g = (O) => O > 0 ? O : "", p = () => {
      const {
        preview: { previewMonth: O, previewYear: M }
      } = e, E = le(`${M}-${O}`).daysInMonth(), V = le(`${M}-${O}-01`).day(), L = f.value.findIndex((U) => U === `${V}`);
      a.value = [...Array(L).fill(-1), ...Array.from(Array(E + 1).keys())].filter((U) => U);
    }, y = () => {
      const {
        preview: { previewYear: O, previewMonth: M },
        componentProps: { max: E, min: V }
      } = e;
      if (E) {
        const L = `${O}-${z(M) + 1}`;
        u.right = !le(L).isSameOrBefore(le(E), "month");
      }
      if (V) {
        const L = `${O}-${z(M) - 1}`;
        u.left = !le(L).isSameOrAfter(le(V), "month");
      }
    }, h = (O) => {
      const {
        preview: { previewYear: M, previewMonth: E },
        componentProps: { min: V, max: L }
      } = e;
      let U = !0, _ = !0;
      const X = `${M}-${E}-${O}`;
      return L && (U = le(X).isSameOrBefore(le(L), "day")), V && (_ = le(X).isSameOrAfter(le(V), "day")), U && _;
    }, S = (O) => {
      const {
        choose: { chooseDays: M, chooseRangeDay: E },
        componentProps: { range: V }
      } = e;
      if (V) {
        if (!E.length)
          return !1;
        const L = le(O).isSameOrBefore(le(E[1]), "day"), U = le(O).isSameOrAfter(le(E[0]), "day");
        return L && U;
      }
      return M.includes(O);
    }, T = (O) => {
      if (O < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Lt("button"),
          disabled: !0
        };
      const {
        choose: { chooseDay: M },
        preview: { previewYear: E, previewMonth: V },
        componentProps: { allowedDates: L, color: U, multiple: _, range: X }
      } = e, j = `${E}-${V}-${O}`, Z = () => X || _ ? S(j) : z(M) === O && c.value, H = (() => h(O) ? L ? !L(j) : !1 : !0)(), oe = () => H ? !0 : X || _ ? !S(j) : !c.value || z(M) !== O, W = () => d.value && z(r) === O && e.componentProps.showCurrent ? (X || _ || c.value) && H ? !0 : X || _ ? !S(j) : c.value ? M !== r : !0 : !1, J = () => H ? "" : W() ? U ?? "" : Z() ? "" : `${er()}-color-cover`, te = J().startsWith(er());
      return {
        text: oe(),
        outline: W(),
        textColor: te ? "" : J(),
        [`${er()}-color-cover`]: te,
        class: F1(Lt("button"), Lt("button--usable"), [H, Lt("button--disabled")]),
        disabled: H
      };
    }, $ = (O) => {
      i.value = O === "prev", l.value += O === "prev" ? -1 : 1, n("check-preview", "month", O);
    }, P = (O, M) => {
      M.currentTarget.classList.contains(Lt("button--disabled")) || n("choose-day", O);
    }, I = (O) => {
      s.value.checkDate(O);
    };
    return rn(() => {
      p(), y();
    }), ce(
      () => e.preview,
      () => {
        p(), y();
      }
    ), {
      n: Lt,
      nDate: er,
      days: a,
      reverse: i,
      headerEl: s,
      panelKey: l,
      sortWeekList: f,
      panelBtnDisabled: u,
      forwardRef: I,
      filterDay: g,
      getDayAbbr: m,
      checkDate: $,
      chooseDay: P,
      buttonProps: T
    };
  }
});
Jf.render = Y1;
var j1 = Jf, W1 = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: q1, n: G1, classes: X1 } = ne("date-picker");
function K1(e, n) {
  var t;
  const o = ae("year-picker-panel"), r = ae("month-picker-panel"), a = ae("day-picker-panel");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [
      B(
        "div",
        {
          class: v(e.n("title")),
          style: F({ background: e.titleColor || e.headerColor || e.color })
        },
        [
          B(
            "div",
            {
              class: v(e.n("title-select"))
            },
            [
              B(
                "div",
                {
                  class: v(e.n("title-hint"))
                },
                re((t = e.hint) != null ? t : e.pack.datePickerHint),
                3
                /* TEXT, CLASS */
              ),
              e.type !== "year" ? (b(), k(
                "div",
                {
                  key: 0,
                  class: v(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
                  onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
                },
                [
                  R(e.$slots, "year", { year: e.chooseYear }, () => [
                    Ie(
                      re(e.chooseYear),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(
                e.classes(
                  e.n("title-date"),
                  [!e.isYearPanel || e.type === "year", e.n("title-date--active")],
                  [e.range, e.n("title-date--range")]
                )
              ),
              onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
            },
            [
              G(We, {
                name: e.multiple ? "" : `${e.n()}${e.reverse ? "-reverse" : ""}-translatey`
              }, {
                default: me(() => [
                  e.type === "year" ? (b(), k("div", {
                    key: `${e.chooseYear}`
                  }, [
                    e.range ? R(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeYear
                    }, () => [
                      Ie(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? R(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseYears
                    }, () => [
                      Ie(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ]) : R(e.$slots, "year", {
                      key: 2,
                      year: e.chooseYear
                    }, () => [
                      Ie(
                        re(e.getYearTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : e.type === "month" ? (b(), k("div", {
                    key: `${e.chooseYear}${e.chooseMonth}`
                  }, [
                    e.range ? R(e.$slots, "range", {
                      key: 0,
                      choose: e.getChoose.chooseRangeMonth
                    }, () => [
                      Ie(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? R(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseMonths
                    }, () => [
                      Ie(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ]) : R(e.$slots, "month", {
                      key: 2,
                      month: e.chooseMonth,
                      year: e.chooseYear
                    }, () => [
                      Ie(
                        re(e.getMonthTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ])) : (b(), k("div", {
                    key: `${e.chooseYear}${e.chooseMonth}${e.chooseDay}`
                  }, [
                    e.range ? R(e.$slots, "range", {
                      key: 0,
                      choose: e.formatRange
                    }, () => [
                      Ie(
                        re(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : e.multiple ? R(e.$slots, "multiple", {
                      key: 1,
                      choose: e.getChoose.chooseDays
                    }, () => [
                      Ie(
                        re(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ]) : R(e.$slots, "date", ft(Ae({ key: 2 }, e.slotProps)), () => [
                      Ie(
                        re(e.getDateTitle),
                        1
                        /* TEXT */
                      )
                    ])
                  ]))
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      B(
        "div",
        {
          class: v(e.n("body")),
          onTouchstart: n[2] || (n[2] = (...i) => e.handleTouchstart && e.handleTouchstart(...i)),
          onTouchmove: n[3] || (n[3] = (...i) => e.handleTouchmove && e.handleTouchmove(...i)),
          onTouchend: n[4] || (n[4] = (...i) => e.handleTouchend && e.handleTouchend(...i))
        },
        [
          G(We, {
            name: `${e.n()}-panel-fade`
          }, {
            default: me(() => [
              e.getPanelType === "year" ? (b(), Ce(o, {
                key: 0,
                ref: "yearPanelEl",
                choose: e.getChoose,
                current: e.currentDate,
                "component-props": e.componentProps,
                preview: e.previewYear,
                onChooseYear: e.getChooseYear
              }, null, 8, ["choose", "current", "component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (b(), Ce(r, {
                key: 1,
                ref: "monthPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "click-year": () => e.clickEl("year"),
                "component-props": e.componentProps,
                onChooseMonth: e.getChooseMonth,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (b(), Ce(a, {
                key: 2,
                ref: "dayPanelEl",
                current: e.currentDate,
                choose: e.getChoose,
                preview: e.getPreview,
                "component-props": e.componentProps,
                "click-month": () => e.clickEl("month"),
                onChooseDay: e.getChooseDay,
                onCheckPreview: e.checkPreview
              }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : Q("v-if", !0)
            ]),
            _: 1
            /* STABLE */
          }, 8, ["name"])
        ],
        34
        /* CLASS, HYDRATE_EVENTS */
      ),
      e.$slots.actions ? (b(), k(
        "div",
        {
          key: 0,
          class: v(e.n("actions"))
        },
        [
          R(e.$slots, "actions")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Qf = ee({
  name: q1,
  components: {
    MonthPickerPanel: O1,
    YearPickerPanel: z1,
    DayPickerPanel: j1
  },
  props: qf,
  setup(e) {
    const n = le().format("YYYY-MM-D"), [t, o] = n.split("-"), r = dr.find((fe) => fe === o), a = C(!1), i = C(!1), l = C(!0), s = C(), u = C(), d = C(), c = C(r), f = C(t), m = C(!1), g = C([]), p = C([]), y = C([]), h = C([]), S = C([]), T = C([]), $ = C(null), P = C(null), I = C(null), O = je({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range,
      buttonElevation: e.buttonElevation
    }), M = N(() => ({
      chooseMonth: s.value,
      chooseYear: u.value,
      chooseDay: d.value,
      chooseYears: g.value,
      chooseMonths: p.value,
      chooseDays: y.value,
      chooseRangeYear: h.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: T.value
    })), E = N(() => ({
      previewMonth: c.value,
      previewYear: f.value
    })), V = N(() => {
      var fe;
      const { multiple: be, range: ke } = e;
      return ke ? h.value.length ? `${h.value[0]} ~ ${h.value[1]}` : "" : be ? `${g.value.length}${Je.value.datePickerSelected}` : (fe = u.value) != null ? fe : "";
    }), L = N(() => {
      var fe, be;
      const { multiple: ke, range: Me } = e;
      if (Me)
        return S.value.length ? `${S.value[0]} ~ ${S.value[1]}` : "";
      let Ne = "";
      return s.value && (Ne = (be = (fe = Je.value.datePickerMonthDict) == null ? void 0 : fe[s.value].name) != null ? be : ""), ke ? `${p.value.length}${Je.value.datePickerSelected}` : Ne;
    }), U = N(() => {
      var fe, be, ke, Me;
      const { multiple: Ne, range: nn } = e;
      if (nn) {
        const vo = T.value.map((Sp) => le(Sp).format("YYYY-MM-DD"));
        return vo.length ? `${vo[0]} ~ ${vo[1]}` : "";
      }
      if (Ne)
        return `${y.value.length}${Je.value.datePickerSelected}`;
      if (!u.value || !s.value || !d.value)
        return "";
      const cn = le(`${u.value}-${s.value}-${d.value}`).day(), hn = ho.find((vo) => vo === `${cn}`), It = (be = (fe = Je.value.datePickerWeekDict) == null ? void 0 : fe[hn].name) != null ? be : "", wp = (Me = (ke = Je.value.datePickerMonthDict) == null ? void 0 : ke[s.value].name) != null ? Me : "", Cp = Mt(d.value, 2, "0");
      return Je.value.lang === "zh-CN" ? `${s.value}-${Cp} ${It.slice(0, 3)}` : `${It.slice(0, 3)}, ${wp.slice(0, 3)} ${d.value}`;
    }), _ = N(() => e.type === "year" || a.value ? "year" : e.type === "month" || i.value ? "month" : e.type === "date" ? "date" : ""), X = N(() => !e.touchable || !_.value), j = N(() => {
      var fe, be;
      const ke = le(`${u.value}-${s.value}-${d.value}`).day(), Me = d.value ? Mt(d.value, 2, "0") : "";
      return {
        week: `${ke}`,
        year: (fe = u.value) != null ? fe : "",
        month: (be = s.value) != null ? be : "",
        date: Me
      };
    }), Z = N(
      () => M.value.chooseRangeDay.map((fe) => le(fe).format("YYYY-MM-DD"))
    ), he = N(() => u.value === f.value), H = N(() => s.value === c.value);
    let oe = 0, W = 0, J = "", te;
    ce(
      () => e.modelValue,
      (fe) => {
        if (!(!Ee() || Le(fe) || !fe))
          if (e.range) {
            if (!Ye(fe))
              return;
            l.value = fe.length !== 1, et(fe, e.type);
          } else if (e.multiple) {
            if (!Ye(fe))
              return;
            Gn(fe, e.type);
          } else
            nt(fe);
      },
      { immediate: !0 }
    ), ce(_, Go);
    function q(fe) {
      fe === "year" ? a.value = !0 : fe === "month" ? i.value = !0 : (a.value = !1, i.value = !1);
    }
    function se(fe) {
      if (X.value)
        return;
      const { clientX: be, clientY: ke } = fe.touches[0];
      oe = be, W = ke;
    }
    function D(fe, be) {
      return fe >= be && fe > 20 ? "x" : "y";
    }
    function Y(fe) {
      if (X.value)
        return;
      const { clientX: be, clientY: ke } = fe.touches[0], Me = be - oe, Ne = ke - W;
      te = D(Math.abs(Me), Math.abs(Ne)), J = Me > 0 ? "prev" : "next";
    }
    function pe() {
      return W1(this, null, function* () {
        if (X.value || te !== "x")
          return;
        const fe = _.value === "year" ? $ : _.value === "month" ? P : I;
        yield mn(), fe.value.forwardRef(J), Go();
      });
    }
    function Te(fe, be) {
      const ke = be === "year" ? h : be === "month" ? S : T;
      if (ke.value = l.value ? [fe, fe] : [ke.value[0], fe], l.value = !l.value, l.value) {
        const Ne = le(ke.value[0]).isAfter(ke.value[1]) ? [ke.value[1], ke.value[0]] : [...ke.value];
        w(e["onUpdate:modelValue"], Ne), w(e.onChange, Ne);
      }
    }
    function x(fe, be) {
      const ke = be === "year" ? g : be === "month" ? p : y, Me = be === "year" ? "YYYY" : be === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ne = ke.value.map((cn) => le(cn).format(Me)), nn = Ne.findIndex((cn) => cn === fe);
      nn === -1 ? Ne.push(fe) : Ne.splice(nn, 1), w(e["onUpdate:modelValue"], Ne), w(e.onChange, Ne);
    }
    function ve(fe, be) {
      return !u.value || !s.value ? !1 : he.value ? fe === "year" ? be < z(u.value) : fe === "month" ? be < s.value : H.value ? be < z(d.value) : s.value > c.value : u.value > f.value;
    }
    function $e(fe) {
      const { readonly: be, range: ke, multiple: Me, onChange: Ne, "onUpdate:modelValue": nn } = e;
      if (fe < 0 || be)
        return;
      m.value = ve("day", fe);
      const cn = `${f.value}-${c.value}-${fe}`, hn = le(cn).format("YYYY-MM-DD");
      ke ? Te(hn, "day") : Me ? x(hn, "day") : (w(nn, hn), w(Ne, hn));
    }
    function Fe(fe) {
      const { type: be, readonly: ke, range: Me, multiple: Ne, onChange: nn, onPreview: cn, "onUpdate:modelValue": hn } = e;
      if (m.value = ve("month", fe), be === "month" && !ke) {
        const It = `${f.value}-${fe}`;
        Me ? Te(It, "month") : Ne ? x(It, "month") : (w(hn, It), w(nn, It));
      } else
        c.value = fe, w(
          cn,
          z(f.value),
          z(c.value),
          be === "date" ? z(d.value) : void 0
        );
      i.value = !1;
    }
    function de(fe) {
      const { type: be, readonly: ke, range: Me, multiple: Ne, onChange: nn, onPreview: cn, "onUpdate:modelValue": hn } = e;
      m.value = ve("year", fe), be === "year" && !ke ? Me ? Te(`${fe}`, "year") : Ne ? x(`${fe}`, "year") : (w(hn, `${fe}`), w(nn, `${fe}`)) : (f.value = `${fe}`, w(
        cn,
        z(f.value),
        z(c.value),
        be === "date" ? z(d.value) : void 0
      )), a.value = !1;
    }
    function Pe(fe, be) {
      const ke = be === "prev" ? -1 : 1;
      if (fe === "year")
        f.value = `${z(f.value) + ke}`;
      else {
        let Me = z(c.value) + ke;
        Me < 1 && (f.value = `${z(f.value) - 1}`, Me = 12), Me > 12 && (f.value = `${z(f.value) + 1}`, Me = 1), c.value = dr.find((Ne) => z(Ne) === Me);
      }
      w(
        e.onPreview,
        z(f.value),
        z(c.value),
        e.type === "date" ? z(d.value) : void 0
      );
    }
    function Ee() {
      return (e.multiple || e.range) && !Ye(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ye(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0;
    }
    function Le(fe) {
      return Ye(fe) ? !1 : fe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1;
    }
    function et(fe, be) {
      const ke = be === "year" ? h : be === "month" ? S : T, Me = be === "year" ? "YYYY" : be === "month" ? "YYYY-MM" : "YYYY-MM-D", Ne = fe.map((hn) => le(hn).format(Me)).slice(0, 2);
      if (ke.value.some((hn) => Le(hn)))
        return;
      ke.value = Ne;
      const cn = le(ke.value[0]).isAfter(ke.value[1]);
      ke.value.length === 2 && cn && (ke.value = [ke.value[1], ke.value[0]]);
    }
    function Gn(fe, be) {
      const ke = be === "year" ? g : be === "month" ? p : y, Me = be === "year" ? "YYYY" : be === "month" ? "YYYY-MM" : "YYYY-MM-D", Ne = Array.from(new Set(fe.map((nn) => le(nn).format(Me))));
      ke.value = Ne.filter((nn) => nn !== "Invalid Date");
    }
    function nt(fe) {
      const be = le(fe).format("YYYY-MM-D");
      if (Le(be))
        return;
      const [ke, Me, Ne] = be.split("-"), nn = dr.find((cn) => cn === Me);
      s.value = nn, u.value = ke, d.value = Ne, c.value = nn, f.value = ke;
    }
    function Go() {
      W = 0, oe = 0, J = "", te = void 0;
    }
    return {
      yearPanelEl: $,
      monthPanelEl: P,
      dayPanelEl: I,
      reverse: m,
      currentDate: n,
      chooseMonth: s,
      chooseYear: u,
      chooseDay: d,
      previewYear: f,
      isYearPanel: a,
      isMonthPanel: i,
      getMonthTitle: L,
      getDateTitle: U,
      getYearTitle: V,
      getPanelType: _,
      getChoose: M,
      getPreview: E,
      componentProps: O,
      slotProps: j,
      formatRange: Z,
      pack: Je,
      n: G1,
      classes: X1,
      clickEl: q,
      handleTouchstart: se,
      handleTouchmove: Y,
      handleTouchend: pe,
      getChooseDay: $e,
      getChooseMonth: Fe,
      getChooseYear: de,
      checkPreview: Pe,
      formatElevation: dn
    };
  }
});
Qf.render = K1;
var da = Qf;
ie(da);
ue(da, qf);
const EI = da;
var Qi = da, Z1 = Object.defineProperty, Eu = Object.getOwnPropertySymbols, J1 = Object.prototype.hasOwnProperty, Q1 = Object.prototype.propertyIsEnumerable, Iu = (e, n, t) => n in e ? Z1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, _1 = (e, n) => {
  for (var t in n || (n = {}))
    J1.call(n, t) && Iu(e, t, n[t]);
  if (Eu)
    for (var t of Eu(n))
      Q1.call(n, t) && Iu(e, t, n[t]);
  return e;
};
const _f = _1({
  show: Boolean,
  width: [Number, String],
  title: String,
  message: String,
  messageAlign: {
    type: String,
    default: "left"
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  confirmButtonColor: String,
  cancelButtonColor: String,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: A(),
  onConfirm: A(),
  onCancel: A(),
  "onUpdate:show": A()
}, Be(uo, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
var x1 = Object.defineProperty, Bu = Object.getOwnPropertySymbols, e$ = Object.prototype.hasOwnProperty, n$ = Object.prototype.propertyIsEnumerable, Du = (e, n, t) => n in e ? x1(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, t$ = (e, n) => {
  for (var t in n || (n = {}))
    e$.call(n, t) && Du(e, t, n[t]);
  if (Bu)
    for (var t of Bu(n))
      n$.call(n, t) && Du(e, t, n[t]);
  return e;
};
const { name: o$, n: r$, classes: a$ } = ne("dialog");
function i$(e, n) {
  const t = ae("var-button"), o = ae("var-popup");
  return b(), Ce(o, {
    class: v(e.n("popup")),
    "var-dialog-cover": "",
    show: e.popupShow,
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.popupCloseOnClickOverlay,
    teleport: e.teleport,
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange,
    onClickOverlay: e.handleClickOverlay
  }, {
    default: me(() => [
      B(
        "div",
        Ae({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: t$({ width: e.toSizeUnit(e.width) }, e.dialogStyle)
        }, e.$attrs),
        [
          B(
            "div",
            {
              class: v(e.n("title"))
            },
            [
              R(e.$slots, "title", {}, () => {
                var r;
                return [
                  Ie(
                    re((r = e.title) != null ? r : e.pack.dialogTitle),
                    1
                    /* TEXT */
                  )
                ];
              })
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n("message")),
              style: F({ textAlign: e.messageAlign })
            },
            [
              R(e.$slots, "default", {}, () => [
                Ie(
                  re(e.message),
                  1
                  /* TEXT */
                )
              ])
            ],
            6
            /* CLASS, STYLE */
          ),
          B(
            "div",
            {
              class: v(e.n("actions"))
            },
            [
              e.cancelButton ? (b(), Ce(t, {
                key: 0,
                class: v(e.classes(e.n("button"), e.n("cancel-button"))),
                "var-dialog-cover": "",
                text: "",
                "text-color": e.cancelButtonTextColor,
                color: e.cancelButtonColor,
                onClick: e.cancel
              }, {
                default: me(() => {
                  var r;
                  return [
                    Ie(
                      re((r = e.cancelButtonText) != null ? r : e.pack.dialogCancelButtonText),
                      1
                      /* TEXT */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "text-color", "color", "onClick"])) : Q("v-if", !0),
              e.confirmButton ? (b(), Ce(t, {
                key: 1,
                class: v(e.classes(e.n("button"), e.n("confirm-button"))),
                "var-dialog-cover": "",
                text: "",
                "text-color": e.confirmButtonTextColor,
                color: e.confirmButtonColor,
                onClick: e.confirm
              }, {
                default: me(() => {
                  var r;
                  return [
                    Ie(
                      re((r = e.confirmButtonText) != null ? r : e.pack.dialogConfirmButtonText),
                      1
                      /* TEXT */
                    )
                  ];
                }),
                _: 1
                /* STABLE */
              }, 8, ["class", "text-color", "color", "onClick"])) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]);
}
const xf = ee({
  name: o$,
  components: {
    VarPopup: gt,
    VarButton: pn
  },
  inheritAttrs: !1,
  props: _f,
  setup(e) {
    const n = C(!1), t = C(!1);
    ce(
      () => e.show,
      (l) => {
        n.value = l;
      },
      { immediate: !0 }
    ), ce(
      () => e.closeOnClickOverlay,
      (l) => {
        if (e.onBeforeClose != null) {
          t.value = !1;
          return;
        }
        t.value = l;
      },
      { immediate: !0 }
    );
    function o() {
      return w(e["onUpdate:show"], !1);
    }
    function r() {
      const { closeOnClickOverlay: l, onClickOverlay: s, onBeforeClose: u } = e;
      if (w(s), !!l) {
        if (u != null) {
          w(u, "close", o);
          return;
        }
        w(e["onUpdate:show"], !1);
      }
    }
    function a() {
      const { onBeforeClose: l, onConfirm: s } = e;
      if (w(s), l != null) {
        w(l, "confirm", o);
        return;
      }
      w(e["onUpdate:show"], !1);
    }
    function i() {
      const { onBeforeClose: l, onCancel: s } = e;
      if (w(s), l != null) {
        w(l, "cancel", o);
        return;
      }
      w(e["onUpdate:show"], !1);
    }
    return {
      pack: Je,
      popupShow: n,
      popupCloseOnClickOverlay: t,
      n: r$,
      classes: a$,
      handleClickOverlay: r,
      confirm: a,
      cancel: i,
      toSizeUnit: we
    };
  }
});
xf.render = i$;
var jo = xf, l$ = Object.defineProperty, s$ = Object.defineProperties, u$ = Object.getOwnPropertyDescriptors, Mu = Object.getOwnPropertySymbols, d$ = Object.prototype.hasOwnProperty, c$ = Object.prototype.propertyIsEnumerable, Nu = (e, n, t) => n in e ? l$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, ci = (e, n) => {
  for (var t in n || (n = {}))
    d$.call(n, t) && Nu(e, t, n[t]);
  if (Mu)
    for (var t of Mu(n))
      c$.call(n, t) && Nu(e, t, n[t]);
  return e;
}, f$ = (e, n) => s$(e, u$(n));
let st, kr = {};
function v$(e = {}) {
  return un(e) ? f$(ci({}, kr), { message: e }) : ci(ci({}, kr), e);
}
function Ot(e) {
  return xn() ? new Promise((n) => {
    Ot.close();
    const t = v$(e), o = je(t);
    o.teleport = "body", st = o;
    const { unmountInstance: r } = so(jo, o, {
      onConfirm: () => {
        w(o.onConfirm), n("confirm");
      },
      onCancel: () => {
        w(o.onCancel), n("cancel");
      },
      onClose: () => {
        w(o.onClose), n("close");
      },
      onClosed: () => {
        w(o.onClosed), r(), st === o && (st = null);
      },
      onRouteChange: () => {
        r(), st === o && (st = null);
      },
      "onUpdate:show": (a) => {
        o.show = a;
      }
    });
    o.show = !0;
  }) : Promise.resolve();
}
Ot.setDefaultOptions = function(e) {
  kr = e;
};
Ot.resetDefaultOptions = function() {
  kr = {};
};
Ot.close = function() {
  if (st != null) {
    const e = st;
    st = null, qe().then(() => {
      e.show = !1;
    });
  }
};
Ot.Component = jo;
ie(jo);
ie(jo, Ot);
ue(Ot, _f);
const II = jo;
var _i = Ot;
const ev = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, { name: m$, n: p$, classes: h$ } = ne("divider");
function g$(e, n) {
  return b(), k(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          [e.vertical, e.n("--vertical")],
          [e.withText, e.n("--with-text")],
          [e.withPresetInset, e.n("--inset")],
          [e.dashed, e.n("--dashed")],
          [e.hairline, e.n("--hairline")]
        )
      ),
      style: F(e.style)
    },
    [
      e.vertical ? Q("v-if", !0) : R(e.$slots, "default", { key: 0 }, () => [
        e.description ? (b(), k(
          "span",
          {
            key: 0,
            class: v(e.n("text"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)
      ])
    ],
    6
    /* CLASS, STYLE */
  );
}
const nv = ee({
  name: m$,
  props: ev,
  setup(e, { slots: n }) {
    const t = C(!1), o = N(() => {
      const { vertical: i, inset: l } = e;
      return !i && l === !0;
    }), r = N(() => {
      const { inset: i, vertical: l, margin: s } = e;
      if (ql(i) || l)
        return { margin: s };
      const u = z(i), d = Math.abs(u) + (i + "").replace(u + "", "");
      return {
        margin: s,
        width: `calc(100% - ${we(d)})`,
        left: u > 0 ? we(d) : we(0)
      };
    });
    rn(a), Lo(a);
    function a() {
      const { description: i, vertical: l } = e;
      t.value = (n.default || i != null) && !l;
    }
    return {
      n: p$,
      classes: h$,
      withText: t,
      style: r,
      withPresetInset: o
    };
  }
});
nv.render = g$;
var ca = nv;
ie(ca);
ue(ca, ev);
const BI = ca;
var xi = ca;
const tv = {
  direction: {
    type: String,
    default: "xy"
  },
  attraction: String,
  disabled: Boolean,
  boundary: {
    type: Object,
    default: () => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    })
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: A()
};
var b$ = Object.defineProperty, y$ = Object.defineProperties, $$ = Object.getOwnPropertyDescriptors, Vu = Object.getOwnPropertySymbols, w$ = Object.prototype.hasOwnProperty, C$ = Object.prototype.propertyIsEnumerable, Au = (e, n, t) => n in e ? b$(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, zu = (e, n) => {
  for (var t in n || (n = {}))
    w$.call(n, t) && Au(e, t, n[t]);
  if (Vu)
    for (var t of Vu(n))
      C$.call(n, t) && Au(e, t, n[t]);
  return e;
}, Lu = (e, n) => y$(e, $$(n)), S$ = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: k$, n: P$, classes: O$ } = ne("drag");
function T$(e, n) {
  return b(), Ce(qn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    B(
      "div",
      Ae({
        ref: "drag",
        class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
        style: {
          "z-index": e.zIndex
        },
        onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
        onTouchmove: n[1] || (n[1] = (...t) => e.handleTouchmove && e.handleTouchmove(...t)),
        onTouchend: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
        onTouchcancel: n[3] || (n[3] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
        onClick: n[4] || (n[4] = (...t) => e.handleClick && e.handleClick(...t))
      }, e.getAttrs()),
      [
        R(e.$slots, "default")
      ],
      16
      /* FULL_PROPS */
    )
  ], 8, ["to", "disabled"]);
}
const ov = ee({
  name: k$,
  inheritAttrs: !1,
  props: tv,
  setup(e, { attrs: n }) {
    const t = C(null), o = C(0), r = C(0), a = C(!1), i = C(!1), { touching: l, dragging: s, moveX: u, moveY: d, startTouch: c, moveTouch: f, endTouch: m, resetTouch: g } = lo(), { disabled: p } = zt(), y = je({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    });
    ce(() => e.boundary, V), io(U), rn(() => {
      V(), U();
    });
    function h(X) {
      e.disabled || (c(X), P());
    }
    function S(X) {
      return S$(this, null, function* () {
        !l.value || e.disabled || (f(X), Rn(X), i.value = !1, a.value = !0, e.direction.includes("x") && (o.value += u.value), e.direction.includes("y") && (r.value += d.value), E());
      });
    }
    function T() {
      e.disabled || (m(), i.value = !0, M());
    }
    function $(X) {
      s.value || w(e.onClick, X);
    }
    function P() {
      const { left: X, top: j } = I();
      o.value = X, r.value = j;
    }
    function I() {
      const X = en(t.value), j = en(window), Z = X.top - j.top, he = j.bottom - X.bottom, H = X.left - j.left, oe = j.right - X.right, { width: W, height: J } = X, { width: te, height: q } = j;
      return {
        top: Z,
        bottom: he,
        left: H,
        right: oe,
        width: W,
        height: J,
        halfWidth: W / 2,
        halfHeight: J / 2,
        windowWidth: te,
        windowHeight: q
      };
    }
    function O() {
      const X = I(), j = y.left, Z = X.windowWidth - y.right - X.width, he = y.top, H = X.windowHeight - y.bottom - X.height;
      return {
        minX: j,
        minY: he,
        // fallback the drag element overflows boundary
        maxX: j < Z ? Z : j,
        maxY: he < H ? H : he
      };
    }
    function M() {
      if (e.attraction == null)
        return;
      const { halfWidth: X, halfHeight: j, top: Z, bottom: he, left: H, right: oe } = I(), { minX: W, minY: J, maxX: te, maxY: q } = O(), se = H + X - y.left, D = oe + X - y.right, Y = Z + j - y.top, pe = he + j - y.bottom, Te = se <= D, x = Y <= pe;
      e.attraction.includes("x") && (o.value = Te ? W : te), e.attraction.includes("y") && (r.value = x ? J : q);
    }
    function E() {
      const { minX: X, minY: j, maxX: Z, maxY: he } = O();
      o.value = pt(o.value, X, Z), r.value = pt(r.value, j, he);
    }
    function V() {
      const { top: X = 0, bottom: j = 0, left: Z = 0, right: he = 0 } = e.boundary;
      y.top = Ge(X), y.bottom = Ge(j), y.left = Ge(Z), y.right = Ge(he);
    }
    function L() {
      var X;
      const j = (X = n.style) != null ? X : {};
      return Lu(zu({}, n), {
        style: Lu(zu({}, j), {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: a.value ? 0 : j.top,
          left: a.value ? 0 : j.left,
          right: a.value ? "auto" : j.right,
          bottom: a.value ? "auto" : j.bottom,
          transform: a.value ? `translate(${o.value}px, ${r.value}px)` : j.transform
        })
      });
    }
    function U() {
      a.value && (P(), E());
    }
    function _() {
      g(), i.value = !1, a.value = !1, o.value = 0, r.value = 0;
    }
    return {
      drag: t,
      x: o,
      y: r,
      enableTransition: i,
      dragging: s,
      teleportDisabled: p,
      n: P$,
      classes: O$,
      getAttrs: L,
      handleTouchstart: h,
      handleTouchmove: S,
      handleTouchend: T,
      handleClick: $,
      resize: U,
      reset: _
    };
  }
});
ov.render = T$;
var fa = ov;
ie(fa);
ue(fa, tv);
const DI = fa;
var Pr = fa, E$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function cr(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return E$[n];
  });
}
var Jn = "top", $t = "bottom", Nt = "right", vt = "left", ss = "auto", va = [Jn, $t, Nt, vt], ma = "start", Eo = "end", I$ = "clippingParents", rv = "viewport", mo = "popper", B$ = "reference", Ru = /* @__PURE__ */ va.reduce(function(e, n) {
  return e.concat([n + "-" + ma, n + "-" + Eo]);
}, []), av = /* @__PURE__ */ [].concat(va, [ss]).reduce(function(e, n) {
  return e.concat([n, n + "-" + ma, n + "-" + Eo]);
}, []), D$ = "beforeRead", M$ = "read", N$ = "afterRead", V$ = "beforeMain", A$ = "main", z$ = "afterMain", L$ = "beforeWrite", R$ = "write", U$ = "afterWrite", H$ = [D$, M$, N$, V$, A$, z$, L$, R$, U$];
function mt(e) {
  return e.split("-")[0];
}
var F$ = {
  start: "end",
  end: "start"
};
function Uu(e) {
  return e.replace(/start|end/g, function(n) {
    return F$[n];
  });
}
function Nn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Vt(e) {
  var n = Nn(e).Element;
  return e instanceof n || e instanceof Element;
}
function En(e) {
  var n = Nn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function us(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Nn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Tt(e) {
  return ((Vt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var $o = Math.max, Hu = Math.min, _t = Math.round;
function el() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function iv() {
  return !/^((?!chrome|android).)*safari/i.test(el());
}
function xt(e, n, t) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  var o = e.getBoundingClientRect(), r = 1, a = 1;
  n && En(e) && (r = e.offsetWidth > 0 && _t(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && _t(o.height) / e.offsetHeight || 1);
  var i = Vt(e) ? Nn(e) : window, l = i.visualViewport, s = !iv() && t, u = (o.left + (s && l ? l.offsetLeft : 0)) / r, d = (o.top + (s && l ? l.offsetTop : 0)) / a, c = o.width / r, f = o.height / a;
  return {
    width: c,
    height: f,
    top: d,
    right: u + c,
    bottom: d + f,
    left: u,
    x: u,
    y: d
  };
}
function ds(e) {
  var n = Nn(e), t = n.pageXOffset, o = n.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: o
  };
}
function cs(e) {
  return xt(Tt(e)).left + ds(e).scrollLeft;
}
function Y$(e, n) {
  var t = Nn(e), o = Tt(e), r = t.visualViewport, a = o.clientWidth, i = o.clientHeight, l = 0, s = 0;
  if (r) {
    a = r.width, i = r.height;
    var u = iv();
    (u || !u && n === "fixed") && (l = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: l + cs(e),
    y: s
  };
}
function _n(e) {
  return Nn(e).getComputedStyle(e);
}
function j$(e) {
  var n, t = Tt(e), o = ds(e), r = (n = e.ownerDocument) == null ? void 0 : n.body, a = $o(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = $o(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + cs(e), s = -o.scrollTop;
  return _n(r || t).direction === "rtl" && (l += $o(t.clientWidth, r ? r.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: l,
    y: s
  };
}
function jn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function pa(e) {
  return jn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (us(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Tt(e)
  );
}
function fs(e) {
  var n = _n(e), t = n.overflow, o = n.overflowX, r = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + r + o);
}
function lv(e) {
  return ["html", "body", "#document"].indexOf(jn(e)) >= 0 ? e.ownerDocument.body : En(e) && fs(e) ? e : lv(pa(e));
}
function wo(e, n) {
  var t;
  n === void 0 && (n = []);
  var o = lv(e), r = o === ((t = e.ownerDocument) == null ? void 0 : t.body), a = Nn(o), i = r ? [a].concat(a.visualViewport || [], fs(o) ? o : []) : o, l = n.concat(i);
  return r ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(wo(pa(i)))
  );
}
function W$(e) {
  return ["table", "td", "th"].indexOf(jn(e)) >= 0;
}
function Fu(e) {
  return !En(e) || // https://github.com/popperjs/popper-core/issues/837
  _n(e).position === "fixed" ? null : e.offsetParent;
}
function q$(e) {
  var n = /firefox/i.test(el()), t = /Trident/i.test(el());
  if (t && En(e)) {
    var o = _n(e);
    if (o.position === "fixed")
      return null;
  }
  var r = pa(e);
  for (us(r) && (r = r.host); En(r) && ["html", "body"].indexOf(jn(r)) < 0; ) {
    var a = _n(r);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || n && a.willChange === "filter" || n && a.filter && a.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function vs(e) {
  for (var n = Nn(e), t = Fu(e); t && W$(t) && _n(t).position === "static"; )
    t = Fu(t);
  return t && (jn(t) === "html" || jn(t) === "body" && _n(t).position === "static") ? n : t || q$(e) || n;
}
function G$(e, n) {
  var t = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (t && us(t)) {
    var o = n;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function nl(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function X$(e, n) {
  var t = xt(e, !1, n === "fixed");
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Yu(e, n, t) {
  return n === rv ? nl(Y$(e, t)) : Vt(n) ? X$(n, t) : nl(j$(Tt(e)));
}
function K$(e) {
  var n = wo(pa(e)), t = ["absolute", "fixed"].indexOf(_n(e).position) >= 0, o = t && En(e) ? vs(e) : e;
  return Vt(o) ? n.filter(function(r) {
    return Vt(r) && G$(r, o) && jn(r) !== "body";
  }) : [];
}
function Z$(e, n, t, o) {
  var r = n === "clippingParents" ? K$(e) : [].concat(n), a = [].concat(r, [t]), i = a[0], l = a.reduce(function(s, u) {
    var d = Yu(e, u, o);
    return s.top = $o(d.top, s.top), s.right = Hu(d.right, s.right), s.bottom = Hu(d.bottom, s.bottom), s.left = $o(d.left, s.left), s;
  }, Yu(e, i, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Io(e) {
  return e.split("-")[1];
}
function J$(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function sv(e) {
  var n = e.reference, t = e.element, o = e.placement, r = o ? mt(o) : null, a = o ? Io(o) : null, i = n.x + n.width / 2 - t.width / 2, l = n.y + n.height / 2 - t.height / 2, s;
  switch (r) {
    case Jn:
      s = {
        x: i,
        y: n.y - t.height
      };
      break;
    case $t:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Nt:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case vt:
      s = {
        x: n.x - t.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = r ? J$(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case ma:
        s[u] = s[u] - (n[d] / 2 - t[d] / 2);
        break;
      case Eo:
        s[u] = s[u] + (n[d] / 2 - t[d] / 2);
        break;
    }
  }
  return s;
}
function Q$() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _$(e) {
  return Object.assign({}, Q$(), e);
}
function x$(e, n) {
  return n.reduce(function(t, o) {
    return t[o] = e, t;
  }, {});
}
function uv(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = o === void 0 ? e.placement : o, a = t.strategy, i = a === void 0 ? e.strategy : a, l = t.boundary, s = l === void 0 ? I$ : l, u = t.rootBoundary, d = u === void 0 ? rv : u, c = t.elementContext, f = c === void 0 ? mo : c, m = t.altBoundary, g = m === void 0 ? !1 : m, p = t.padding, y = p === void 0 ? 0 : p, h = _$(typeof y != "number" ? y : x$(y, va)), S = f === mo ? B$ : mo, T = e.rects.popper, $ = e.elements[g ? S : f], P = Z$(Vt($) ? $ : $.contextElement || Tt(e.elements.popper), s, d, i), I = xt(e.elements.reference), O = sv({
    reference: I,
    element: T,
    strategy: "absolute",
    placement: r
  }), M = nl(Object.assign({}, T, O)), E = f === mo ? M : I, V = {
    top: P.top - E.top + h.top,
    bottom: E.bottom - P.bottom + h.bottom,
    left: P.left - E.left + h.left,
    right: E.right - P.right + h.right
  }, L = e.modifiersData.offset;
  if (f === mo && L) {
    var U = L[r];
    Object.keys(V).forEach(function(_) {
      var X = [Nt, $t].indexOf(_) >= 0 ? 1 : -1, j = [Jn, $t].indexOf(_) >= 0 ? "y" : "x";
      V[_] += U[j] * X;
    });
  }
  return V;
}
function ew(e, n) {
  n === void 0 && (n = {});
  var t = n, o = t.placement, r = t.boundary, a = t.rootBoundary, i = t.padding, l = t.flipVariations, s = t.allowedAutoPlacements, u = s === void 0 ? av : s, d = Io(o), c = d ? l ? Ru : Ru.filter(function(g) {
    return Io(g) === d;
  }) : va, f = c.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = c);
  var m = f.reduce(function(g, p) {
    return g[p] = uv(e, {
      placement: p,
      boundary: r,
      rootBoundary: a,
      padding: i
    })[mt(p)], g;
  }, {});
  return Object.keys(m).sort(function(g, p) {
    return m[g] - m[p];
  });
}
function nw(e) {
  if (mt(e) === ss)
    return [];
  var n = cr(e);
  return [Uu(e), n, Uu(n)];
}
function tw(e) {
  var n = e.state, t = e.options, o = e.name;
  if (!n.modifiersData[o]._skip) {
    for (var r = t.mainAxis, a = r === void 0 ? !0 : r, i = t.altAxis, l = i === void 0 ? !0 : i, s = t.fallbackPlacements, u = t.padding, d = t.boundary, c = t.rootBoundary, f = t.altBoundary, m = t.flipVariations, g = m === void 0 ? !0 : m, p = t.allowedAutoPlacements, y = n.options.placement, h = mt(y), S = h === y, T = s || (S || !g ? [cr(y)] : nw(y)), $ = [y].concat(T).reduce(function(se, D) {
      return se.concat(mt(D) === ss ? ew(n, {
        placement: D,
        boundary: d,
        rootBoundary: c,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: p
      }) : D);
    }, []), P = n.rects.reference, I = n.rects.popper, O = /* @__PURE__ */ new Map(), M = !0, E = $[0], V = 0; V < $.length; V++) {
      var L = $[V], U = mt(L), _ = Io(L) === ma, X = [Jn, $t].indexOf(U) >= 0, j = X ? "width" : "height", Z = uv(n, {
        placement: L,
        boundary: d,
        rootBoundary: c,
        altBoundary: f,
        padding: u
      }), he = X ? _ ? Nt : vt : _ ? $t : Jn;
      P[j] > I[j] && (he = cr(he));
      var H = cr(he), oe = [];
      if (a && oe.push(Z[U] <= 0), l && oe.push(Z[he] <= 0, Z[H] <= 0), oe.every(function(se) {
        return se;
      })) {
        E = L, M = !1;
        break;
      }
      O.set(L, oe);
    }
    if (M)
      for (var W = g ? 3 : 1, J = function(D) {
        var Y = $.find(function(pe) {
          var Te = O.get(pe);
          if (Te)
            return Te.slice(0, D).every(function(x) {
              return x;
            });
        });
        if (Y)
          return E = Y, "break";
      }, te = W; te > 0; te--) {
        var q = J(te);
        if (q === "break")
          break;
      }
    n.placement !== E && (n.modifiersData[o]._skip = !0, n.placement = E, n.reset = !0);
  }
}
const ow = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: tw,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function rw(e, n, t) {
  var o = mt(e), r = [vt, Jn].indexOf(o) >= 0 ? -1 : 1, a = typeof t == "function" ? t(Object.assign({}, n, {
    placement: e
  })) : t, i = a[0], l = a[1];
  return i = i || 0, l = (l || 0) * r, [vt, Nt].indexOf(o) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function aw(e) {
  var n = e.state, t = e.options, o = e.name, r = t.offset, a = r === void 0 ? [0, 0] : r, i = av.reduce(function(d, c) {
    return d[c] = rw(c, n.rects, a), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[o] = i;
}
const iw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: aw
};
var lw = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function sw(e) {
  var n = e.x, t = e.y, o = window, r = o.devicePixelRatio || 1;
  return {
    x: _t(n * r) / r || 0,
    y: _t(t * r) / r || 0
  };
}
function ju(e) {
  var n, t = e.popper, o = e.popperRect, r = e.placement, a = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, c = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, g = i.y, p = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: m,
    y: p
  }) : {
    x: m,
    y: p
  };
  m = y.x, p = y.y;
  var h = i.hasOwnProperty("x"), S = i.hasOwnProperty("y"), T = vt, $ = Jn, P = window;
  if (u) {
    var I = vs(t), O = "clientHeight", M = "clientWidth";
    if (I === Nn(t) && (I = Tt(t), _n(I).position !== "static" && l === "absolute" && (O = "scrollHeight", M = "scrollWidth")), I = I, r === Jn || (r === vt || r === Nt) && a === Eo) {
      $ = $t;
      var E = c && I === P && P.visualViewport ? P.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[O]
      );
      p -= E - o.height, p *= s ? 1 : -1;
    }
    if (r === vt || (r === Jn || r === $t) && a === Eo) {
      T = Nt;
      var V = c && I === P && P.visualViewport ? P.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[M]
      );
      m -= V - o.width, m *= s ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: l
  }, u && lw), U = d === !0 ? sw({
    x: m,
    y: p
  }) : {
    x: m,
    y: p
  };
  if (m = U.x, p = U.y, s) {
    var _;
    return Object.assign({}, L, (_ = {}, _[$] = S ? "0" : "", _[T] = h ? "0" : "", _.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", _));
  }
  return Object.assign({}, L, (n = {}, n[$] = S ? p + "px" : "", n[T] = h ? m + "px" : "", n.transform = "", n));
}
function uw(e) {
  var n = e.state, t = e.options, o = t.gpuAcceleration, r = o === void 0 ? !0 : o, a = t.adaptive, i = a === void 0 ? !0 : a, l = t.roundOffsets, s = l === void 0 ? !0 : l, u = {
    placement: mt(n.placement),
    variation: Io(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: r,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, ju(Object.assign({}, u, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, ju(Object.assign({}, u, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const dv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: uw,
  data: {}
};
function dw(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function cw(e) {
  return e === Nn(e) || !En(e) ? ds(e) : dw(e);
}
function fw(e) {
  var n = e.getBoundingClientRect(), t = _t(n.width) / e.offsetWidth || 1, o = _t(n.height) / e.offsetHeight || 1;
  return t !== 1 || o !== 1;
}
function vw(e, n, t) {
  t === void 0 && (t = !1);
  var o = En(n), r = En(n) && fw(n), a = Tt(n), i = xt(e, r, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !t) && ((jn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  fs(a)) && (l = cw(n)), En(n) ? (s = xt(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : a && (s.x = cs(a))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function mw(e) {
  var n = xt(e), t = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(n.width - t) <= 1 && (t = n.width), Math.abs(n.height - o) <= 1 && (o = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: t,
    height: o
  };
}
function pw(e) {
  var n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    n.set(a.name, a);
  });
  function r(a) {
    t.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(l) {
      if (!t.has(l)) {
        var s = n.get(l);
        s && r(s);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    t.has(a.name) || r(a);
  }), o;
}
function hw(e) {
  var n = pw(e);
  return H$.reduce(function(t, o) {
    return t.concat(n.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function gw(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(t) {
      Promise.resolve().then(function() {
        n = void 0, t(e());
      });
    })), n;
  };
}
function bw(e) {
  var n = e.reduce(function(t, o) {
    var r = t[o.name];
    return t[o.name] = r ? Object.assign({}, r, o, {
      options: Object.assign({}, r.options, o.options),
      data: Object.assign({}, r.data, o.data)
    }) : o, t;
  }, {});
  return Object.keys(n).map(function(t) {
    return n[t];
  });
}
var Wu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qu() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return !n.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function yw(e) {
  e === void 0 && (e = {});
  var n = e, t = n.defaultModifiers, o = t === void 0 ? [] : t, r = n.defaultOptions, a = r === void 0 ? Wu : r;
  return function(l, s, u) {
    u === void 0 && (u = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Wu, a),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, c = [], f = !1, m = {
      state: d,
      setOptions: function(h) {
        var S = typeof h == "function" ? h(d.options) : h;
        p(), d.options = Object.assign({}, a, d.options, S), d.scrollParents = {
          reference: Vt(l) ? wo(l) : l.contextElement ? wo(l.contextElement) : [],
          popper: wo(s)
        };
        var T = hw(bw([].concat(o, d.options.modifiers)));
        return d.orderedModifiers = T.filter(function($) {
          return $.enabled;
        }), g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var h = d.elements, S = h.reference, T = h.popper;
          if (qu(S, T)) {
            d.rects = {
              reference: vw(S, vs(T), d.options.strategy === "fixed"),
              popper: mw(T)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(V) {
              return d.modifiersData[V.name] = Object.assign({}, V.data);
            });
            for (var $ = 0; $ < d.orderedModifiers.length; $++) {
              if (d.reset === !0) {
                d.reset = !1, $ = -1;
                continue;
              }
              var P = d.orderedModifiers[$], I = P.fn, O = P.options, M = O === void 0 ? {} : O, E = P.name;
              typeof I == "function" && (d = I({
                state: d,
                options: M,
                name: E,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: gw(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        p(), f = !0;
      }
    };
    if (!qu(l, s))
      return m;
    m.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var h = y.name, S = y.options, T = S === void 0 ? {} : S, $ = y.effect;
        if (typeof $ == "function") {
          var P = $({
            state: d,
            name: h,
            instance: m,
            options: T
          }), I = function() {
          };
          c.push(P || I);
        }
      });
    }
    function p() {
      c.forEach(function(y) {
        return y();
      }), c = [];
    }
    return m;
  };
}
var nr = {
  passive: !0
};
function $w(e) {
  var n = e.state, t = e.instance, o = e.options, r = o.scroll, a = r === void 0 ? !0 : r, i = o.resize, l = i === void 0 ? !0 : i, s = Nn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", t.update, nr);
  }), l && s.addEventListener("resize", t.update, nr), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", t.update, nr);
    }), l && s.removeEventListener("resize", t.update, nr);
  };
}
const ww = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $w,
  data: {}
};
function Cw(e) {
  var n = e.state, t = e.name;
  n.modifiersData[t] = sv({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Sw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Cw,
  data: {}
};
function kw(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(t) {
    var o = n.styles[t] || {}, r = n.attributes[t] || {}, a = n.elements[t];
    !En(a) || !jn(a) || (Object.assign(a.style, o), Object.keys(r).forEach(function(i) {
      var l = r[i];
      l === !1 ? a.removeAttribute(i) : a.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Pw(e) {
  var n = e.state, t = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, t.popper), n.styles = t, n.elements.arrow && Object.assign(n.elements.arrow.style, t.arrow), function() {
    Object.keys(n.elements).forEach(function(o) {
      var r = n.elements[o], a = n.attributes[o] || {}, i = Object.keys(n.styles.hasOwnProperty(o) ? n.styles[o] : t[o]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !En(r) || !jn(r) || (Object.assign(r.style, l), Object.keys(a).forEach(function(s) {
        r.removeAttribute(s);
      }));
    });
  };
}
const Ow = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: kw,
  effect: Pw,
  requires: ["computeStyles"]
};
var Tw = [ww, Sw, dv, Ow], Ew = /* @__PURE__ */ yw({
  defaultModifiers: Tw
}), Iw = Object.defineProperty, Bw = Object.defineProperties, Dw = Object.getOwnPropertyDescriptors, Gu = Object.getOwnPropertySymbols, Mw = Object.prototype.hasOwnProperty, Nw = Object.prototype.propertyIsEnumerable, Xu = (e, n, t) => n in e ? Iw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, fi = (e, n) => {
  for (var t in n || (n = {}))
    Mw.call(n, t) && Xu(e, t, n[t]);
  if (Gu)
    for (var t of Gu(n))
      Nw.call(n, t) && Xu(e, t, n[t]);
  return e;
}, vi = (e, n) => Bw(e, Dw(n)), Ku = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
function cv(e) {
  const n = C(null), t = C(null), o = C({ width: 0, height: 0 }), r = Qn(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(E, V) {
      V ? (I(), w(e.onOpen)) : w(e.onClose);
    }
  }), { zIndex: a } = Ho(() => r.value, 1);
  let i = null, l = !1, s = !1;
  const u = () => {
    const { width: E, height: V } = At(n.value);
    o.value = {
      width: Ge(E),
      height: Ge(V)
    };
  }, d = () => {
    switch (e.placement) {
      case "top":
      case "cover-bottom":
        return "bottom";
      case "top-start":
      case "right-end":
      case "cover-bottom-start":
        return "bottom left";
      case "top-end":
      case "left-end":
      case "cover-bottom-end":
        return "bottom right";
      case "bottom":
      case "cover-top":
        return "top";
      case "bottom-start":
      case "right-start":
      case "cover-top-start":
        return "top left";
      case "bottom-end":
      case "left-start":
      case "cover-top-end":
        return "top right";
      case "left":
      case "cover-right":
        return "right";
      case "right":
      case "cover-left":
        return "left";
    }
  }, c = () => {
    e.trigger === "hover" && (s = !0, O());
  }, f = () => Ku(this, null, function* () {
    e.trigger === "hover" && (s = !1, yield mn(), !l && M());
  }), m = () => {
    e.trigger === "hover" && (l = !0);
  }, g = () => Ku(this, null, function* () {
    e.trigger === "hover" && (l = !1, yield mn(), !s && M());
  }), p = () => {
    e.closeOnClickReference && r.value ? M() : O();
  }, y = () => {
    M();
  }, h = (E) => {
    e.trigger === "click" && (y(), w(e.onClickOutside, E));
  }, S = () => {
    I(), w(e.onClosed);
  }, T = () => {
    const { offsetX: E, offsetY: V, placement: L } = e;
    u();
    const U = {
      x: Ge(E),
      y: Ge(V)
    };
    switch (L) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: U.x,
          distance: U.y - o.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: U.x,
          distance: U.y - o.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: U.x,
          distance: U.y - o.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: U.x,
          distance: -U.y - o.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: U.x,
          distance: -U.y - o.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: U.x,
          distance: -U.y - o.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: U.y,
          distance: U.x - o.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: U.y,
          distance: -U.x - o.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: L,
          skidding: U.y,
          distance: -U.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: L,
          skidding: U.x,
          distance: -U.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: L,
          skidding: U.x,
          distance: U.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: L,
          skidding: U.y,
          distance: U.x
        };
    }
  }, $ = () => {
    const { placement: E, skidding: V, distance: L } = T(), U = [
      vi(fi({}, ow), {
        enabled: r.value
      }),
      vi(fi({}, iw), {
        options: {
          offset: [V, L]
        }
      }),
      vi(fi({}, dv), {
        options: {
          adaptive: !1,
          gpuAcceleration: !1
        },
        enabled: r.value
      }),
      {
        name: "applyTransformOrigin",
        enabled: r.value,
        phase: "beforeWrite",
        fn({ state: _ }) {
          _.styles.popper.transformOrigin = d();
        }
      }
    ];
    return {
      placement: E,
      modifiers: U,
      strategy: e.strategy
    };
  }, P = () => e.reference ? n.value.querySelector(e.reference) : n.value, I = () => {
    i.setOptions($());
  }, O = () => {
    const { disabled: E } = e;
    E || (r.value = !0, w(e["onUpdate:show"], !0));
  }, M = () => {
    r.value = !1, w(e["onUpdate:show"], !1);
  };
  return Kd(P, "click", h), ce(() => [e.offsetX, e.offsetY, e.placement, e.strategy], I), ce(() => e.disabled, M), no(() => {
    var E;
    i = Ew((E = P()) != null ? E : n.value, t.value, $());
  }), zo(() => {
    i.destroy();
  }), {
    show: r,
    popover: t,
    zIndex: a,
    host: n,
    hostSize: o,
    handleHostClick: p,
    handleHostMouseenter: c,
    handleHostMouseleave: f,
    handlePopoverClose: y,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: g,
    handleClosed: S,
    resize: I,
    open: O,
    close: M
  };
}
const fv = {
  type: {
    type: String,
    default: "default"
  },
  color: String,
  content: String,
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  reference: String,
  placement: {
    type: String,
    default: "bottom"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  closeOnClickReference: Boolean,
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: Vw, n: Aw, classes: zw } = ne("tooltip");
function Lw(e, n) {
  return b(), k(
    "div",
    {
      ref: "host",
      class: v(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...t) => e.handleHostClick && e.handleHostClick(...t)),
      onMouseenter: n[4] || (n[4] = (...t) => e.handleHostMouseenter && e.handleHostMouseenter(...t)),
      onMouseleave: n[5] || (n[5] = (...t) => e.handleHostMouseleave && e.handleHostMouseleave(...t))
    },
    [
      R(e.$slots, "default"),
      (b(), Ce(qn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(We, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: me(() => [
            De(B(
              "div",
              {
                ref: "popover",
                class: v(e.classes(e.n("tooltip"), e.n("$--box"))),
                style: F({ zIndex: e.zIndex }),
                onClick: n[0] || (n[0] = yn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...t) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...t)),
                onMouseleave: n[2] || (n[2] = (...t) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...t))
              },
              [
                B(
                  "div",
                  {
                    style: F({ background: e.color, width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0 }),
                    class: v(e.classes(e.n("content-container"), e.n(`--${e.type}`)))
                  },
                  [
                    R(e.$slots, "content", {}, () => [
                      Ie(
                        re(e.content),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ],
              38
              /* CLASS, STYLE, HYDRATE_EVENTS */
            ), [
              [Hn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const vv = ee({
  name: Vw,
  props: fv,
  setup(e) {
    const { disabled: n } = zt(), {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: g,
      // expose
      close: p,
      // expose
      resize: y
    } = cv(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      toSizeUnit: we,
      n: Aw,
      classes: zw,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handleClosed: m,
      resize: y,
      open: g,
      close: p
    };
  }
});
vv.render = Lw;
var ha = vv;
ie(ha);
ue(ha, fv);
const MI = ha;
var Or = ha;
const mv = {
  expand: Boolean,
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  },
  "onUpdate:expand": A()
};
var Rw = Object.defineProperty, Zu = Object.getOwnPropertySymbols, Uw = Object.prototype.hasOwnProperty, Hw = Object.prototype.propertyIsEnumerable, Ju = (e, n, t) => n in e ? Rw(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Fw = (e, n) => {
  for (var t in n || (n = {}))
    Uw.call(n, t) && Ju(e, t, n[t]);
  if (Zu)
    for (var t of Zu(n))
      Hw.call(n, t) && Ju(e, t, n[t]);
  return e;
};
const { name: Yw, n: jw, classes: Ww } = ne("ellipsis"), qw = { key: 0 };
function Gw(e, n) {
  const t = ae("var-tooltip");
  return b(), Ce(
    t,
    ft(Ro(e.tooltipProps)),
    {
      content: me(() => [
        R(e.$slots, "tooltip-content", {}, () => {
          var o;
          return [
            (o = e.tooltipProps) != null && o.content ? (b(), k(
              "span",
              qw,
              re(e.tooltipProps.content),
              1
              /* TEXT */
            )) : R(e.$slots, "default", { key: 1 })
          ];
        })
      ]),
      default: me(() => [
        B(
          "span",
          {
            class: v(
              e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])
            ),
            style: F(e.rootStyles),
            onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
          },
          [
            R(e.$slots, "default")
          ],
          6
          /* CLASS, STYLE */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const pv = ee({
  name: Yw,
  components: { VarTooltip: Or },
  props: mv,
  setup(e) {
    const n = Qn(e, "expand"), t = N(() => e.lineClamp ? { "-webkit-line-clamp": e.lineClamp } : {}), o = N(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Fw({ sameWidth: !0 }, e.tooltip));
    function r() {
      e.expandTrigger && (n.value = !n.value);
    }
    return {
      tooltipProps: o,
      expanding: n,
      rootStyles: t,
      n: jw,
      classes: Ww,
      handleClick: r
    };
  }
});
pv.render = Gw;
var ga = pv;
ie(ga);
ue(ga, mv);
const NI = ga;
var tl = ga;
const hv = {
  active: Boolean,
  show: {
    type: Boolean,
    default: !0
  },
  drag: {
    type: [Object, Boolean],
    default: !1
  },
  type: {
    type: String,
    default: "primary"
  },
  position: {
    type: String,
    default: "right-bottom"
  },
  direction: {
    type: String,
    default: "top"
  },
  trigger: {
    type: String,
    default: "click"
  },
  disabled: Boolean,
  color: String,
  inactiveIcon: {
    type: String,
    default: "plus"
  },
  activeIcon: {
    type: String,
    default: "window-close"
  },
  inactiveIconSize: Be(Xe, "size"),
  activeIconSize: Be(Xe, "size"),
  inactiveIconNamespace: Be(Xe, "namespace"),
  activeIconNamespace: Be(Xe, "namespace"),
  fixed: {
    type: Boolean,
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 90
  },
  top: [Number, String],
  bottom: [Number, String],
  left: [Number, String],
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  safeArea: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: A(),
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:active": A()
}, {
  name: Xw,
  classes: mi,
  n: Cn
} = ne("fab");
var ba = ee({
  name: Xw,
  inheritAttrs: !1,
  props: hv,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const o = Qn(e, "active"), r = C(null), a = C(null);
    ce(() => e.trigger, () => {
      o.value = !1;
    }), ce(() => e.disabled, () => {
      o.value = !1;
    }), ce(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var d;
      (d = a.value) == null || d.reset();
    }), Kd(r, "click", s);
    function i(d, c, f) {
      if (d.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (f === 0) {
          w(e.onClick, o.value, d);
          return;
        }
        o.value = c, w(e.onClick, o.value, d), w(o.value ? e.onOpen : e.onClose);
      }
    }
    function l(d, c) {
      e.trigger !== "hover" || e.disabled || c === 0 || (o.value = d, w(o.value ? e.onOpen : e.onClose));
    }
    function s() {
      e.trigger !== "click" || e.disabled || o.value !== !1 && (o.value = !1, w(e.onClose));
    }
    function u() {
      return n.trigger ? e.show ? n.trigger({
        active: o.value
      }) : null : De(G(pn, {
        "var-fab-cover": !0,
        class: Cn("trigger"),
        type: e.type,
        color: e.color,
        disabled: e.disabled,
        elevation: e.elevation,
        round: !0
      }, {
        default: () => [G(He, {
          "var-fab-cover": !0,
          class: mi([o.value, Cn("trigger-active-icon"), Cn("trigger-inactive-icon")]),
          name: o.value ? e.activeIcon : e.inactiveIcon,
          size: o.value ? e.activeIconSize : e.inactiveIconSize,
          namespace: o.value ? e.activeIconNamespace : e.inactiveIconNamespace,
          transition: 200,
          animationClass: Cn("--trigger-icon-animation")
        }, null)]
      }), [[Hn, e.show]]);
    }
    return () => {
      var d;
      const c = Jd((d = w(n.default)) != null ? d : []), f = ql(e.drag) ? {} : e.drag;
      return G(Pr, Ae({
        ref: a,
        class: mi(Cn(`--position-${e.position}`), [!e.fixed, Cn("--absolute")]),
        style: {
          top: we(e.top),
          bottom: we(e.bottom),
          left: we(e.left),
          right: we(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: f.direction,
        attraction: f.attraction,
        boundary: f.boundary,
        onClick: (m) => i(m, !o.value, c.length)
      }, t), {
        default: () => [G("div", {
          class: mi(Cn(), Cn(`--direction-${e.direction}`), [e.safeArea, Cn("--safe-area")]),
          ref: r,
          onMouseleave: () => l(!1, c.length),
          onMouseenter: () => l(!0, c.length)
        }, [G(We, {
          name: Cn("--active-transition")
        }, {
          default: () => [u()]
        }), G(We, {
          name: Cn(`--actions-transition-${e.direction}`),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [De(G("div", {
            class: Cn("actions"),
            onClick: (m) => m.stopPropagation()
          }, [c.map((m) => G("div", {
            class: Cn("action")
          }, [m]))]), [[Hn, e.show && o.value && c.length]])]
        })])]
      });
    };
  }
});
ie(ba);
ue(ba, hv);
const VI = ba;
var ol = ba;
const ya = {
  value: {
    type: null,
    required: !0
  },
  id: {
    type: String,
    default: ""
  },
  isFocus: Boolean,
  size: {
    type: String,
    default: "normal"
  },
  variant: {
    type: String,
    default: "standard"
  },
  placeholder: String,
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: String,
  focusColor: String,
  blurColor: String,
  errorMessage: String,
  formDisabled: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: A(),
  onClear: A()
}, { name: Kw, n: pi, classes: Zw } = ne("field-decorator"), Jw = ["for"];
function Qw(e, n) {
  const t = ae("var-icon");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.n(`--${e.variant}`), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      B(
        "div",
        {
          class: v(
            e.classes(
              e.n("controller"),
              [e.isFocus, e.n("--focus")],
              [e.errorMessage, e.n("--error")],
              [e.formDisabled || e.disabled, e.n("--disabled")]
            )
          ),
          style: F({
            color: e.color,
            cursor: e.cursor,
            overflow: e.isFloating ? "visible" : "hidden"
          })
        },
        [
          B(
            "div",
            {
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              R(e.$slots, "prepend-icon")
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          e.placeholder && e.hint ? (b(), k("label", {
            key: 0,
            class: v(
              e.classes(
                e.n("placeholder"),
                e.n("$--ellipsis"),
                [e.isFocus, e.n("--focus")],
                [e.formDisabled || e.disabled, e.n("--disabled")],
                [e.errorMessage, e.n("--error")],
                e.computePlaceholderState()
              )
            ),
            style: F({
              color: e.color
            }),
            for: e.id
          }, [
            B(
              "span",
              null,
              re(e.placeholder),
              1
              /* TEXT */
            )
          ], 14, Jw)) : Q("v-if", !0),
          B(
            "div",
            {
              class: v(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
            },
            [
              e.clearable && !e.isEmpty(e.value) ? (b(), Ce(t, {
                key: 0,
                class: v(e.n("clear-icon")),
                "var-field-decorator-cover": "",
                name: "close-circle",
                onClick: e.handleClear
              }, null, 8, ["class", "onClick"])) : Q("v-if", !0),
              R(e.$slots, "append-icon")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      e.line ? (b(), k(
        Ve,
        { key: 0 },
        [
          e.variant === "outlined" ? (b(), k(
            "fieldset",
            {
              key: 0,
              class: v(
                e.classes(
                  e.n("line"),
                  [e.isFocus, e.n("--line-focus")],
                  [e.errorMessage, e.n("--line-error")],
                  [e.formDisabled || e.disabled, e.n("--line-disabled")]
                )
              ),
              style: F({ borderColor: e.color })
            },
            [
              B(
                "legend",
                {
                  class: v(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
                  style: F({ width: e.legendWidth })
                },
                [
                  e.placeholder && e.hint ? (b(), Ce(qn, {
                    key: 0,
                    to: "body"
                  }, [
                    B(
                      "span",
                      {
                        ref: "placeholderTextEl",
                        class: v(
                          e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")])
                        )
                      },
                      re(e.placeholder),
                      3
                      /* TEXT, CLASS */
                    )
                  ])) : Q("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : (b(), k(
            "div",
            {
              key: 1,
              class: v(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
              style: F({ background: e.errorMessage ? void 0 : e.blurColor })
            },
            [
              B(
                "div",
                {
                  class: v(
                    e.classes(
                      e.n("dot"),
                      [e.isFocus, e.n("--line-focus")],
                      [e.formDisabled || e.disabled, e.n("--line-disabled")],
                      [e.errorMessage, e.n("--line-error")]
                    )
                  ),
                  style: F({ background: e.errorMessage ? void 0 : e.focusColor })
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            6
            /* CLASS, STYLE */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const gv = ee({
  name: Kw,
  components: { VarIcon: He },
  props: ya,
  setup(e, { slots: n }) {
    const t = C(null), o = C(""), r = N(() => e.hint && (!Un(e.value) || e.isFocus || n["prepend-icon"])), a = N(
      () => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    );
    io(l), rn(l), Lo(l);
    function i() {
      const { hint: d, value: c, composing: f } = e;
      if (!d && (!Un(c) || f))
        return pi("--placeholder-hidden");
      if (r.value)
        return pi("--placeholder-hint");
    }
    function l() {
      const { size: d, hint: c, variant: f, placeholder: m } = e;
      if (!m || !c || f !== "outlined") {
        o.value = "";
        return;
      }
      const g = At(t.value), p = `var(--field-decorator-outlined-${d}-placeholder-space)`;
      o.value = `calc(${g.width} * 0.75 + ${p} * 2)`;
    }
    function s(d) {
      w(e.onClear, d);
    }
    function u(d) {
      w(e.onClick, d);
    }
    return {
      placeholderTextEl: t,
      color: a,
      legendWidth: o,
      isFloating: r,
      computePlaceholderState: i,
      n: pi,
      classes: Zw,
      isEmpty: Un,
      handleClear: s,
      handleClick: u
    };
  }
});
gv.render = Qw;
var $a = gv;
ie($a);
ue($a, ya);
const AI = $a;
var Bo = $a;
const bv = {
  anchor: Number,
  anchors: Array,
  contentDraggable: {
    type: Boolean,
    default: !0
  },
  duration: {
    type: [Number, String],
    default: 300
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  safeArea: Boolean,
  "onUpdate:anchor": A(),
  onAnchorChange: A()
}, { name: _w, n: xw, classes: eC } = ne("floating-panel"), nC = 100, Qu = 0.2;
function tC(e, n) {
  return b(), Ce(qn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [
    B(
      "div",
      {
        class: v(e.classes(e.n(), [e.safeArea, e.n("--safe-area")], e.formatElevation(e.elevation, 3))),
        style: F({
          height: `${e.toSizeUnit(e.maxAnchor)}`,
          transform: `translateY(calc(100% - ${e.toSizeUnit(e.visibleHeight)}))`,
          transition: e.touching ? "none" : `transform ${e.toNumber(
            e.duration
          )}ms var(--floating-panel-transition-timing-function), background-color 0.25s`
        }),
        onTouchstart: n[0] || (n[0] = (...t) => e.handleTouchstart && e.handleTouchstart(...t)),
        onTouchmove: n[1] || (n[1] = (...t) => e.handleTouchmove && e.handleTouchmove(...t)),
        onTouchend: n[2] || (n[2] = (...t) => e.handleTouchend && e.handleTouchend(...t)),
        onTouchcancel: n[3] || (n[3] = (...t) => e.handleTouchend && e.handleTouchend(...t))
      },
      [
        B(
          "div",
          {
            class: v(e.n("header"))
          },
          [
            B(
              "div",
              {
                class: v(e.n("header-toolbar"))
              },
              null,
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        ),
        B(
          "div",
          {
            class: v(e.n("content")),
            ref: "contentRef"
          },
          [
            R(e.$slots, "default")
          ],
          2
          /* CLASS */
        )
      ],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    )
  ], 8, ["to", "disabled"]);
}
const yv = ee({
  name: _w,
  props: bv,
  setup(e) {
    const n = C(0), t = C(null), { height: o } = rh(), r = N(() => o.value * 0.6), a = Qn(e, "anchor"), i = N(() => {
      const E = [nC, r.value], { anchors: V } = e;
      return Un(V) ? E : V;
    }), l = N(() => Math.min(...i.value)), s = N(() => Math.max(...i.value)), { disabled: u } = zt(), { deltaY: d, touching: c, startTouch: f, moveTouch: m, endTouch: g, isReachTop: p, isReachBottom: y } = lo();
    let h;
    Uo(() => c.value), ce(() => a.value, S, { immediate: !0 }), ce(
      () => i.value,
      () => {
        S(a.value);
      },
      { immediate: !0 }
    );
    function S(E) {
      I(E ?? l.value);
    }
    function T(E) {
      f(E), h = n.value;
    }
    function $(E) {
      var V;
      m(E);
      const L = E.target, U = t.value === L || ((V = t.value) == null ? void 0 : V.contains(L));
      if (U && !e.contentDraggable)
        return;
      if (U && e.contentDraggable && n.value >= s.value && !p(t.value)) {
        y(t.value) && Rn(E);
        return;
      }
      const _ = h - d.value;
      I(O(_)), Rn(E);
    }
    function P() {
      g();
      const E = a.value;
      I(n.value), a.value = n.value, a.value !== E && w(e.onAnchorChange, n.value);
    }
    function I(E) {
      n.value = c.value ? E : M(E);
    }
    function O(E) {
      if (E > s.value) {
        const V = E - s.value;
        return s.value + V * Qu;
      }
      if (E < l.value) {
        const V = l.value - E;
        return l.value - V * Qu;
      }
      return E;
    }
    function M(E) {
      if (i.value.includes(E))
        return E;
      let V = 1 / 0, L = 0;
      return i.value.forEach((U) => {
        const _ = Math.abs(U - E);
        _ < V && (V = _, L = U);
      }), L;
    }
    return {
      contentRef: t,
      teleportDisabled: u,
      touching: c,
      minAnchor: l,
      maxAnchor: s,
      visibleHeight: n,
      n: xw,
      classes: eC,
      toSizeUnit: we,
      toNumber: z,
      formatElevation: dn,
      handleTouchstart: T,
      handleTouchmove: $,
      handleTouchend: P
    };
  }
});
yv.render = tC;
var wa = yv;
ie(wa);
ue(wa, bv);
const zI = wa;
var rl = wa;
const $v = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: A(),
  onReset: A()
};
var _u = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: oC, n: rC } = ne("form");
function aC(e, n) {
  return b(), k(
    "form",
    {
      class: v(e.n()),
      onSubmit: n[0] || (n[0] = (...t) => e.handleSubmit && e.handleSubmit(...t)),
      onReset: n[1] || (n[1] = (...t) => e.handleReset && e.handleReset(...t))
    },
    [
      R(e.$slots, "default")
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const wv = ee({
  name: oC,
  props: $v,
  setup(e) {
    const n = N(() => e.disabled), t = N(() => e.readonly), { formItems: o, bindFormItems: r } = Bb();
    r({
      disabled: n,
      readonly: t
    });
    function i(f) {
      setTimeout(() => {
        const m = bt(f), g = m === window ? 0 : Ls(m), p = Ls(f) - g - Ge(e.scrollToErrorOffsetY);
        ko(m, {
          top: p,
          animation: Pi
        });
      }, 300);
    }
    function l(f) {
      return _u(this, null, function* () {
        Rn(f);
        const m = yield u();
        w(e.onSubmit, m);
      });
    }
    function s(f) {
      Rn(f), d(), w(e.onReset);
    }
    function u() {
      return _u(this, null, function* () {
        var f;
        const m = yield Promise.all(o.map(({ validate: g }) => g()));
        if (e.scrollToError) {
          const [, g] = Wp(m, (y) => y === !1, e.scrollToError), p = g > -1;
          if (p) {
            const y = (f = o[g].instance.proxy) == null ? void 0 : f.$el;
            i(y);
          }
          return !p;
        }
        return m.every((g) => g === !0);
      });
    }
    function d() {
      return o.forEach(({ reset: f }) => f());
    }
    function c() {
      return o.forEach(({ resetValidation: f }) => f());
    }
    return {
      n: rC,
      handleSubmit: l,
      handleReset: s,
      validate: u,
      reset: d,
      resetValidation: c
    };
  }
});
wv.render = aC;
var co = wv;
co.useValidation = Dn;
co.useForm = Mn;
ie(co);
ue(co, $v);
const LI = co;
var al = co;
const Cv = {
  src: String,
  fit: {
    type: String,
    default: "fill"
  },
  alt: String,
  title: String,
  width: [String, Number],
  height: [String, Number],
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: String,
  error: String,
  lazy: Boolean,
  ripple: Boolean,
  block: {
    type: Boolean,
    default: !0
  },
  onClick: A(),
  onLoad: A(),
  onError: A()
}, { name: iC, n: lC, classes: sC } = ne("image"), uC = ["alt", "title", "lazy-loading", "lazy-error"], dC = ["alt", "title", "src"];
function cC(e, n) {
  var t;
  const o = ze("lazy"), r = ze("ripple");
  return De((b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: F({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [
      e.lazy && !e.showErrorSlot ? De((b(), k("img", {
        key: 0,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: F({ objectFit: e.fit }),
        onLoad: n[0] || (n[0] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onClick: n[1] || (n[1] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, uC)), [
        [o, (t = e.src) != null ? t : ""]
      ]) : Q("v-if", !0),
      !e.lazy && !e.showErrorSlot ? (b(), k("img", {
        key: 1,
        class: v(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: F({ objectFit: e.fit }),
        src: e.src,
        onLoad: n[2] || (n[2] = (...a) => e.handleLoad && e.handleLoad(...a)),
        onError: n[3] || (n[3] = (...a) => e.handleError && e.handleError(...a)),
        onClick: n[4] || (n[4] = (...a) => e.handleClick && e.handleClick(...a))
      }, null, 46, dC)) : Q("v-if", !0),
      e.showErrorSlot ? R(e.$slots, "error", { key: 2 }) : Q("v-if", !0)
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: !e.ripple }]
  ]);
}
const Sv = ee({
  name: iC,
  directives: {
    Lazy: Po,
    Ripple: Qe
  },
  props: Cv,
  setup(e, { slots: n }) {
    const t = C(!1);
    ce(
      () => e.src,
      () => {
        t.value = !1;
      }
    );
    function o(i) {
      t.value = !!n.error, w(e.onError, i);
    }
    function r(i) {
      const l = i.currentTarget;
      if (e.lazy) {
        if (l._lazy.state === "success") {
          w(e.onLoad, i);
          return;
        }
        l._lazy.state === "error" && o(i);
      } else
        w(e.onLoad, i);
    }
    function a(i) {
      w(e.onClick, i);
    }
    return {
      showErrorSlot: t,
      n: lC,
      classes: sC,
      toSizeUnit: we,
      handleLoad: r,
      handleError: o,
      handleClick: a
    };
  }
});
Sv.render = cC;
var Ca = Sv;
ie(Ca);
ue(Ca, Cv);
const RI = Ca;
var il = Ca;
const kv = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function fC() {
  const { childProviders: e, length: n, bindChildren: t } = ln(
    kv
  );
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: t
  };
}
const ms = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: [String, Number],
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  navigation: {
    type: [Boolean, String],
    default: !1
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: String,
  vertical: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: A()
};
var Rt = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const vC = 250, mC = 20, { name: pC, n: xu, classes: hC } = ne("swipe"), gC = ["onClick"];
function bC(e, n) {
  const t = ae("var-icon"), o = ae("var-button"), r = ze("hover");
  return De((b(), k(
    "div",
    {
      class: v(e.n()),
      ref: "swipeEl"
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
          style: F({
            width: e.vertical ? void 0 : `${e.trackSize}px`,
            height: e.vertical ? `${e.trackSize}px` : void 0,
            transform: `translate${e.vertical ? "Y" : "X"}(${e.trackTranslate}px)`,
            transitionDuration: e.lockDuration ? "0ms" : `${e.toNumber(e.duration)}ms`
          }),
          onTouchstart: n[0] || (n[0] = (...a) => e.handleTouchstart && e.handleTouchstart(...a)),
          onTouchmove: n[1] || (n[1] = (...a) => e.handleTouchmove && e.handleTouchmove(...a)),
          onTouchend: n[2] || (n[2] = (...a) => e.handleTouchend && e.handleTouchend(...a))
        },
        [
          R(e.$slots, "default")
        ],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ),
      e.navigation ? R(e.$slots, "prev", ft(Ae({ key: 0 }, {
        index: e.index,
        length: e.length,
        prev: e.prev,
        next: e.next,
        to: e.to,
        hovering: e.hovering
      })), () => [
        G(We, {
          name: e.getNavigationAnimation("prev")
        }, {
          default: me(() => [
            e.navigation === !0 || e.hovering ? (b(), k(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("navigation"), e.n("navigation-prev"), [e.vertical, e.n("--navigation-vertical-prev")]))
              },
              [
                G(o, {
                  "var-swipe-cover": "",
                  disabled: !e.loop && e.index === 0,
                  class: v(e.n("navigation-prev-button")),
                  onClick: n[3] || (n[3] = (a) => e.prev())
                }, {
                  default: me(() => [
                    G(t, {
                      "var-swipe-cover": "",
                      class: v(e.n("navigation-prev-button-icon")),
                      name: e.vertical ? "chevron-up" : "chevron-left"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["disabled", "class"])
              ],
              2
              /* CLASS */
            )) : Q("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : Q("v-if", !0),
      e.navigation ? R(e.$slots, "next", ft(Ae({ key: 1 }, {
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        G(We, {
          name: e.getNavigationAnimation("next")
        }, {
          default: me(() => [
            e.navigation === !0 || e.hovering ? (b(), k(
              "div",
              {
                key: 0,
                class: v(e.classes(e.n("navigation"), e.n("navigation-next"), [e.vertical, e.n("--navigation-vertical-next")]))
              },
              [
                G(o, {
                  "var-swipe-cover": "",
                  class: v(e.n("navigation-next-button")),
                  disabled: !e.loop && e.index === e.length - 1,
                  onClick: n[4] || (n[4] = (a) => e.next())
                }, {
                  default: me(() => [
                    G(t, {
                      "var-swipe-cover": "",
                      class: v(e.n("navigation-next-button-icon")),
                      name: e.vertical ? "chevron-down" : "chevron-right"
                    }, null, 8, ["class", "name"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["class", "disabled"])
              ],
              2
              /* CLASS */
            )) : Q("v-if", !0)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ]) : Q("v-if", !0),
      R(e.$slots, "indicator", ft(Ro({
        index: e.index,
        length: e.length,
        hovering: e.hovering,
        prev: e.prev,
        next: e.next,
        to: e.to
      })), () => [
        e.indicator && e.length ? (b(), k(
          "div",
          {
            key: 0,
            class: v(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
          },
          [
            (b(!0), k(
              Ve,
              null,
              Ke(e.length, (a, i) => (b(), k("div", {
                class: v(
                  e.classes(e.n("indicator"), [e.index === i, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])
                ),
                style: F({ background: e.indicatorColor }),
                key: a,
                onClick: (l) => e.to(i)
              }, null, 14, gC))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          2
          /* CLASS */
        )) : Q("v-if", !0)
      ])
    ],
    2
    /* CLASS */
  )), [
    [r, e.handleHovering]
  ]);
}
const Pv = ee({
  name: pC,
  directives: { Hover: On },
  components: { VarButton: pn, VarIcon: He },
  props: ms,
  setup(e) {
    const n = C(null), t = C(0), o = N(() => e.vertical), r = C(0), a = C(0), i = C(!1), l = C(0), s = C(!1), { swipeItems: u, bindSwipeItems: d, length: c } = fC(), { popup: f, bindPopup: m } = kh(), {
      deltaX: g,
      deltaY: p,
      moveX: y,
      moveY: h,
      offsetX: S,
      offsetY: T,
      touching: $,
      direction: P,
      startTime: I,
      startTouch: O,
      moveTouch: M,
      endTouch: E
    } = lo(), V = N(() => P.value === (e.vertical ? "vertical" : "horizontal"));
    let L = !1, U = -1;
    d({
      size: t,
      vertical: o
    }), w(m, null), ce(
      () => c.value,
      () => Rt(this, null, function* () {
        yield mn(), W(), x();
      })
    ), f && ce(
      () => f.show.value,
      (de) => Rt(this, null, function* () {
        de ? (yield mn(), x()) : te();
      })
    ), wt(x), Ir(te), io(x);
    function X(de) {
      return u.find(({ index: Pe }) => Pe.value === de);
    }
    function j() {
      e.loop && (a.value >= 0 && X(c.value - 1).setTranslate(-r.value), a.value <= -(r.value - t.value) && X(0).setTranslate(r.value), a.value > -(r.value - t.value) && a.value < 0 && (X(c.value - 1).setTranslate(0), X(0).setTranslate(0)));
    }
    function Z(de) {
      const Pe = bn(de) ? de : Math.floor((a.value - t.value / 2) / -t.value), { loop: Ee } = e;
      return Pe <= -1 ? Ee ? -1 : 0 : Pe >= c.value ? Ee ? c.value : c.value - 1 : Pe;
    }
    function he(de) {
      const { loop: Pe } = e;
      return de === -1 ? Pe ? c.value - 1 : 0 : de === c.value ? Pe ? 0 : c.value - 1 : de;
    }
    function H(de) {
      return e.loop ? de < 0 ? c.value + de : de >= c.value ? de - c.value : de : pt(de, 0, c.value - 1);
    }
    function oe() {
      return Rt(this, null, function* () {
        const de = a.value >= t.value, Pe = a.value <= -r.value, Ee = 0, Le = -(r.value - t.value);
        i.value = !0, (de || Pe) && (i.value = !0, a.value = Pe ? Ee : Le, X(0).setTranslate(0), X(c.value - 1).setTranslate(0)), yield mn(), i.value = !1;
      });
    }
    function W() {
      L || (l.value = H(z(e.initialIndex)), L = !0);
    }
    function J() {
      const { autoplay: de } = e;
      !de || c.value <= 1 || (te(), U = window.setTimeout(() => {
        ve(), J();
      }, z(de)));
    }
    function te() {
      U && clearTimeout(U);
    }
    function q(de) {
      a.value = de, j();
    }
    function se(de) {
      return Rt(this, null, function* () {
        c.value <= 1 || !e.touchable || (O(de), te(), yield oe(), i.value = !0);
      });
    }
    function D(de) {
      const { touchable: Pe, vertical: Ee } = e;
      !$.value || !Pe || (M(de), V.value && (Rn(de), q(a.value + (Ee ? h.value : y.value))));
    }
    function Y() {
      if (!$.value || (E(), !V.value))
        return;
      const { vertical: de, onChange: Pe } = e, Ee = de ? p.value < 0 : g.value < 0, Le = de ? T.value : S.value, Gn = performance.now() - I.value <= vC && Le >= mC ? Z(Ee ? l.value + 1 : l.value - 1) : Z();
      i.value = !1, q(Gn * -t.value);
      const nt = l.value;
      l.value = he(Gn), J(), nt !== l.value && w(Pe, l.value);
    }
    function pe(de) {
      e.navigation === "hover" && (s.value = de);
    }
    function Te(de) {
      return e.navigation !== "hover" ? "" : xu(`--navigation${e.vertical ? "-vertical" : ""}-${de}-animation`);
    }
    function x() {
      n.value && (i.value = !0, t.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, r.value = t.value * c.value, a.value = l.value * -t.value, u.forEach((de) => {
        de.setTranslate(0);
      }), J(), setTimeout(() => {
        i.value = !1;
      }));
    }
    function ve(de) {
      return Rt(this, null, function* () {
        if (c.value <= 1)
          return;
        W();
        const { loop: Pe, onChange: Ee } = e, Le = l.value;
        if (l.value = H(Le + 1), (de == null ? void 0 : de.event) !== !1 && w(Ee, l.value), yield oe(), Le === c.value - 1 && Pe) {
          X(0).setTranslate(r.value), a.value = c.value * -t.value;
          return;
        }
        Le !== c.value - 1 && (a.value = l.value * -t.value);
      });
    }
    function $e(de) {
      return Rt(this, null, function* () {
        if (c.value <= 1)
          return;
        W();
        const { loop: Pe, onChange: Ee } = e, Le = l.value;
        if (l.value = H(Le - 1), (de == null ? void 0 : de.event) !== !1 && w(Ee, l.value), yield oe(), Le === 0 && Pe) {
          X(c.value - 1).setTranslate(-r.value), a.value = t.value;
          return;
        }
        Le !== 0 && (a.value = l.value * -t.value);
      });
    }
    function Fe(de, Pe) {
      if (c.value <= 1 || de === l.value)
        return;
      de = de < 0 ? 0 : de, de = de >= c.value ? c.value : de;
      const Ee = de > l.value ? ve : $e, Le = Math.abs(de - l.value);
      Array.from({ length: Le }).forEach((et, Gn) => {
        Ee({ event: Gn === Le - 1 ? Pe == null ? void 0 : Pe.event : !1 });
      });
    }
    return {
      length: c,
      index: l,
      swipeEl: n,
      trackSize: r,
      trackTranslate: a,
      lockDuration: i,
      hovering: s,
      n: xu,
      classes: hC,
      handleTouchstart: se,
      handleTouchmove: D,
      handleTouchend: Y,
      next: ve,
      prev: $e,
      to: Fe,
      resize: x,
      toNumber: z,
      handleHovering: pe,
      getNavigationAnimation: Te
    };
  }
});
Pv.render = bC;
var Sa = Pv;
ie(Sa);
ue(Sa, ms);
const UI = Sa;
var Do = Sa;
function yC() {
  const { bindParent: e, index: n, parentProvider: t } = an(kv);
  return e || Pn("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: t,
    bindSwipe: e
  };
}
const { name: $C, n: wC } = ne("swipe-item");
function CC(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n()),
      style: F({
        width: e.vertical ? void 0 : `${e.size}px`,
        height: e.vertical ? `${e.size}px` : void 0,
        transform: `translate${e.vertical ? "Y" : "X"}(${e.translate}px)`
      })
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Ov = ee({
  name: $C,
  setup() {
    const e = C(0), { swipe: n, bindSwipe: t, index: o } = yC(), { size: r, vertical: a } = n;
    t({
      index: o,
      setTranslate: l
    });
    function l(s) {
      e.value = s;
    }
    return {
      n: wC,
      size: r,
      vertical: a,
      translate: e
    };
  }
});
Ov.render = CC;
var ps = Ov;
ie(ps);
const HI = ps;
var Mo = ps, SC = Object.defineProperty, ed = Object.getOwnPropertySymbols, kC = Object.prototype.hasOwnProperty, PC = Object.prototype.propertyIsEnumerable, nd = (e, n, t) => n in e ? SC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, td = (e, n) => {
  for (var t in n || (n = {}))
    kC.call(n, t) && nd(e, t, n[t]);
  if (ed)
    for (var t of ed(n))
      PC.call(n, t) && nd(e, t, n[t]);
  return e;
};
const Tv = td(td({
  show: Boolean,
  imagePreventDefault: Boolean,
  images: {
    type: Array,
    default: () => []
  },
  /** @deprecated Use initialIndex to instead. */
  current: String,
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: Boolean,
  "onUpdate:show": A(),
  onLongPress: A()
}, Be(ms, ["loop", "indicator", "onChange"])), Be(uo, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), { name: OC, n: od, classes: TC } = ne("image-preview"), hi = 12, rd = 200, EC = 350, ad = 200, IC = 500, tr = 1, BC = ["onTouchstart"], DC = ["src", "alt"];
function MC(e, n) {
  const t = ae("var-swipe-item"), o = ae("var-swipe"), r = ae("var-icon"), a = ae("var-popup");
  return b(), Ce(a, {
    class: v(e.n("popup")),
    "var-image-preview-cover": "",
    transition: e.n("$-fade"),
    show: e.popupShow,
    overlay: !1,
    "close-on-click-overlay": !1,
    "lock-scroll": e.lockScroll,
    teleport: e.teleport,
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange
  }, {
    default: me(() => [
      G(o, Ae({
        ref: "swipeRef",
        class: e.n("swipe"),
        "var-image-preview-cover": "",
        touchable: e.canSwipe,
        indicator: e.indicator && e.images.length > 1,
        "initial-index": e.initialIndex,
        loop: e.loop,
        onChange: e.onChange
      }, e.$attrs), {
        default: me(() => [
          (b(!0), k(
            Ve,
            null,
            Ke(e.images, (i, l) => (b(), Ce(t, {
              class: v(e.n("swipe-item")),
              "var-image-preview-cover": "",
              key: i
            }, {
              default: me(() => [
                B("div", {
                  class: v(e.n("zoom-container")),
                  style: F({
                    transform: `scale(${e.scale}) translate(${e.translateX}px, ${e.translateY}px)`,
                    transitionTimingFunction: e.transitionTimingFunction,
                    transitionDuration: e.transitionDuration
                  }),
                  onTouchstart: (s) => e.handleTouchstart(s, l),
                  onTouchmove: n[0] || (n[0] = (...s) => e.handleTouchmove && e.handleTouchmove(...s)),
                  onTouchend: n[1] || (n[1] = (...s) => e.handleTouchend && e.handleTouchend(...s)),
                  onTouchcancel: n[2] || (n[2] = (...s) => e.handleTouchcancel && e.handleTouchcancel(...s))
                }, [
                  B("img", {
                    class: v(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                    src: i,
                    alt: i
                  }, null, 10, DC)
                ], 46, BC)
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        indicator: me(({ index: i, length: l }) => [
          R(e.$slots, "indicator", {
            index: i,
            length: l
          }, () => [
            e.indicator && e.images.length > 1 ? (b(), k(
              "div",
              {
                key: 0,
                class: v(e.n("indicators"))
              },
              re(i + 1) + " / " + re(l),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]),
      R(e.$slots, "close-icon", {}, () => [
        e.closeable ? (b(), Ce(r, {
          key: 0,
          class: v(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        }, null, 8, ["class", "onClick"])) : Q("v-if", !0)
      ]),
      B(
        "div",
        {
          class: v(e.n("extra"))
        },
        [
          R(e.$slots, "extra")
        ],
        2
        /* CLASS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
const Ev = ee({
  name: OC,
  components: {
    VarSwipe: Do,
    VarSwipeItem: Mo,
    VarPopup: gt,
    VarIcon: He
  },
  inheritAttrs: !1,
  props: Tv,
  setup(e) {
    const n = C(!1), t = C(1), o = C(0), r = C(0), a = C(), i = C(), l = C(!0), s = C(null), { moveX: u, moveY: d, distance: c, startTime: f, startTouch: m, moveTouch: g, endTouch: p } = lo(), y = N(() => {
      const { images: q, current: se, initialIndex: D } = e;
      if (D != null)
        return z(D);
      const Y = q.findIndex((pe) => pe === se);
      return Math.max(Y, 0);
    }), h = N(() => {
      const { imagePreventDefault: q, show: se } = e;
      return se && q;
    });
    let S = null, T = null, $ = !1;
    const P = {
      start: null,
      prev: null
    };
    ht(() => document, "contextmenu", H), ce(
      () => e.show,
      (q) => {
        n.value = q;
      },
      { immediate: !0 }
    );
    function I(q) {
      t.value = z(q), l.value = !1, P.prev = null, window.setTimeout(() => {
        a.value = "linear", i.value = "0s";
      }, ad);
    }
    function O() {
      t.value = 1, o.value = 0, r.value = 0, l.value = !0, P.prev = null, a.value = void 0, i.value = void 0;
    }
    function M(q) {
      return P.prev ? c.value <= hi && performance.now() - f.value <= rd && P.prev === q : !1;
    }
    function E(q) {
      return !q || !P.start || !P.prev ? !1 : c.value <= hi && performance.now() - f.value < EC && (q === P.start || q.parentNode === P.start);
    }
    function V() {
      p(), window.clearTimeout(T), $ = !1, P.start = null;
    }
    function L(q) {
      if (p(), window.clearTimeout(T), $) {
        $ = !1;
        return;
      }
      const se = E(q.target);
      S = window.setTimeout(() => {
        se && he(), P.start = null;
      }, rd);
    }
    function U(q, se) {
      window.clearTimeout(S), window.clearTimeout(T);
      const D = q.currentTarget;
      if (P.start = D, T = window.setTimeout(() => {
        $ = !0, w(e.onLongPress, se);
      }, IC), M(D)) {
        t.value > tr ? O() : I(e.zoom);
        return;
      }
      m(q), P.prev = D;
    }
    function _(q) {
      const { offsetWidth: se, offsetHeight: D } = q, { naturalWidth: Y, naturalHeight: pe } = q.querySelector(`.${od("image")}`);
      return {
        width: se,
        height: D,
        imageRadio: pe / Y,
        rootRadio: D / se,
        zoom: z(e.zoom)
      };
    }
    function X(q) {
      const { zoom: se, imageRadio: D, rootRadio: Y, width: pe, height: Te } = _(q);
      if (!D)
        return 0;
      const x = D > Y ? Te / D : pe;
      return Math.max(0, (se * x - pe) / 2) / se;
    }
    function j(q) {
      const { zoom: se, imageRadio: D, rootRadio: Y, width: pe, height: Te } = _(q);
      if (!D)
        return 0;
      const x = D > Y ? Te : pe * D;
      return Math.max(0, (se * x - Te) / 2) / se;
    }
    function Z(q) {
      if (!P.prev)
        return;
      g(q);
      const se = q.currentTarget;
      if (c.value > hi && window.clearTimeout(T), t.value > tr) {
        const D = X(se), Y = j(se);
        o.value = pt(o.value + u.value, -D, D), r.value = pt(r.value + d.value, -Y, Y);
      }
      P.prev = se;
    }
    function he() {
      if (t.value > tr) {
        O(), setTimeout(() => w(e["onUpdate:show"], !1), ad);
        return;
      }
      w(e["onUpdate:show"], !1);
    }
    function H(q) {
      h.value && Rn(q);
    }
    function oe(q) {
      var se;
      (se = s.value) == null || se.prev(q);
    }
    function W(q) {
      var se;
      (se = s.value) == null || se.next(q);
    }
    function J(q, se) {
      var D;
      (D = s.value) == null || D.to(q, se);
    }
    function te(q) {
      q <= tr ? O() : I(q);
    }
    return {
      swipeRef: s,
      isPreventDefault: h,
      initialIndex: y,
      popupShow: n,
      scale: t,
      translateX: o,
      translateY: r,
      canSwipe: l,
      transitionTimingFunction: a,
      transitionDuration: i,
      n: od,
      classes: TC,
      handleTouchstart: U,
      handleTouchmove: Z,
      handleTouchend: L,
      handleTouchcancel: V,
      close: he,
      prev: oe,
      next: W,
      to: J,
      zoom: te
    };
  }
});
Ev.render = MC;
var Wo = Ev, NC = Object.defineProperty, VC = Object.defineProperties, AC = Object.getOwnPropertyDescriptors, id = Object.getOwnPropertySymbols, zC = Object.prototype.hasOwnProperty, LC = Object.prototype.propertyIsEnumerable, ld = (e, n, t) => n in e ? NC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, or = (e, n) => {
  for (var t in n || (n = {}))
    zC.call(n, t) && ld(e, t, n[t]);
  if (id)
    for (var t of id(n))
      LC.call(n, t) && ld(e, t, n[t]);
  return e;
}, sd = (e, n) => VC(e, AC(n));
let ut, Co = {};
function RC(e = {}) {
  return un(e) ? sd(or({}, Co), { images: [e] }) : Ye(e) ? sd(or({}, Co), { images: e }) : or(or({}, Co), e);
}
function Et(e) {
  if (!xn())
    return;
  Et.close();
  const n = RC(e), t = je(n);
  t.teleport = "body", ut = t;
  const { unmountInstance: o } = so(Wo, t, {
    onClose: () => w(t.onClose),
    onClosed: () => {
      w(t.onClosed), o(), ut === t && (ut = null);
    },
    onRouteChange: () => {
      o(), ut === t && (ut = null);
    },
    "onUpdate:show": (r) => {
      t.show = r;
    }
  });
  t.show = !0;
}
Et.close = () => {
  if (ut != null) {
    const e = ut;
    ut = null, qe().then(() => {
      e.show = !1;
    });
  }
};
Et.setDefaultOptions = (e) => {
  Co = e;
};
Et.resetDefaultOptions = () => {
  Co = {};
};
Et.Component = Wo;
ie(Wo);
ie(Wo, Et);
ue(Et, Tv);
const FI = Wo;
var No = Et;
const Iv = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function UC() {
  const { bindChildren: e, length: n, childProviders: t } = ln(
    Iv
  );
  return {
    length: n,
    indexAnchors: t,
    bindIndexAnchors: e
  };
}
function HC() {
  const { parentProvider: e, index: n, bindParent: t } = an(
    Iv
  );
  return t || Pn("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: t
  };
}
const Bv = {
  index: [Number, String]
}, { name: FC, n: YC, classes: jC } = ne("index-anchor");
function WC(e, n) {
  return b(), Ce(ro(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: me(() => [
      B(
        "div",
        Ae({
          class: e.n()
        }, e.$attrs),
        [
          R(e.$slots, "default", {}, () => [
            Ie(
              re(e.name),
              1
              /* TEXT */
            )
          ])
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["offset-top", "z-index", "disabled", "css-mode"]);
}
const Dv = ee({
  name: FC,
  components: { VarSticky: Qt },
  inheritAttrs: !1,
  props: Bv,
  setup(e) {
    const n = C(0), t = C(!1), o = N(() => e.index), r = C(null), { index: a, indexBar: i, bindIndexBar: l } = HC(), { active: s, sticky: u, cssMode: d, stickyOffsetTop: c, zIndex: f } = i;
    l({
      index: a,
      name: o,
      ownTop: n,
      setOwnTop: g,
      setDisabled: p
    });
    function g() {
      r.value && (n.value = r.value.$el ? r.value.$el.offsetTop : r.value.offsetTop);
    }
    function p(y) {
      t.value = y;
    }
    return {
      n: YC,
      classes: jC,
      name: o,
      anchorEl: r,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: t,
      cssMode: d,
      stickyOffsetTop: c,
      Transition: We
    };
  }
});
Dv.render = WC;
var ka = Dv;
ie(ka);
ue(ka, Bv);
const YI = ka;
var ll = ka;
const Mv = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  /** @deprecated Use stickyCssMode to instead. */
  cssMode: Boolean,
  stickyCssMode: Boolean,
  hideList: Boolean,
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: String,
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: A(),
  onChange: A()
};
var rr = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: qC, n: GC, classes: XC } = ne("index-bar"), KC = ["onClick"];
function ZC(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n()),
      ref: "barEl"
    },
    [
      R(e.$slots, "default"),
      B(
        "ul",
        {
          class: v(e.n("anchor-list")),
          style: F({ zIndex: e.toNumber(e.zIndex) + 2, display: e.hideList ? "none" : "block" })
        },
        [
          (b(!0), k(
            Ve,
            null,
            Ke(e.anchorNameList, (t) => (b(), k("li", {
              key: t,
              class: v(e.classes(e.n("anchor-item"), [e.active === t, e.n("anchor-item--active")])),
              style: F({ color: e.active === t && e.highlightColor ? e.highlightColor : void 0 }),
              onClick: (o) => e.anchorClick({ anchorName: t, manualCall: !0 })
            }, re(t), 15, KC))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    2
    /* CLASS */
  );
}
const Nv = ee({
  name: qC,
  props: Mv,
  setup(e) {
    const n = C(""), t = C(null), o = C([]), r = C(), a = N(() => e.sticky), i = N(() => e.stickyCssMode || e.cssMode), l = N(() => Ge(e.stickyOffsetTop)), s = N(() => e.zIndex), { length: u, indexAnchors: d, bindIndexAnchors: c } = UC();
    let f = null, m = !1;
    const g = {
      active: r,
      sticky: a,
      cssMode: i,
      stickyOffsetTop: l,
      zIndex: s
    };
    ce(
      () => u.value,
      () => rr(this, null, function* () {
        yield mn(), d.forEach(({ name: O, setOwnTop: M }) => {
          O.value && o.value.push(O.value), M();
        });
      })
    ), rn(() => rr(this, null, function* () {
      yield T(), $();
    })), Er(P), to(() => {
      m = !0, P();
    }), wt(() => {
      !m || r.value === void 0 || (S({
        anchorName: r.value,
        options: { event: !1 }
      }), m = !1);
    }), c(g);
    function p(O, M) {
      const E = Gt(O) ? O.name.value : O;
      E === r.value || E === void 0 || (r.value = E, (M == null ? void 0 : M.event) !== !1 && w(e.onChange, E));
    }
    function y() {
      const { top: O } = en(f), { top: M } = en(t.value);
      return Dt(f) - O + M;
    }
    function h() {
      const O = Dt(f), M = f === window ? document.body.scrollHeight : f.scrollHeight, E = y();
      d.forEach((V, L) => {
        const U = V.ownTop.value, _ = O - U + l.value - E, X = L === d.length - 1 ? M : d[L + 1].ownTop.value - V.ownTop.value;
        V.setDisabled(!0), _ >= 0 && _ < X && n.value === "" && (V.setDisabled(!1), p(V));
      });
    }
    function S(O) {
      return rr(this, arguments, function* ({ anchorName: M, manualCall: E = !1, options: V }) {
        if (E && w(e.onClick, M), M === r.value && !m)
          return;
        const L = d.find(({ name: j }) => M === j.value);
        if (!L)
          return;
        const U = y(), _ = L.ownTop.value - l.value + U, X = Gl(f);
        n.value = M, p(M, V), yield ko(f, {
          left: X,
          top: _,
          animation: pc,
          duration: z(e.duration)
        }), yield mn(), n.value = "";
      });
    }
    function T() {
      return rr(this, null, function* () {
        yield mn(), f = bt(t.value);
      });
    }
    function $() {
      f.addEventListener("scroll", h);
    }
    function P() {
      f.removeEventListener("scroll", h);
    }
    function I(O, M) {
      So(() => S({ anchorName: O, options: M }));
    }
    return {
      barEl: t,
      active: r,
      zIndex: s,
      anchorNameList: o,
      n: GC,
      classes: XC,
      toNumber: z,
      scrollTo: I,
      anchorClick: S
    };
  }
});
Nv.render = ZC;
var Pa = Nv;
ie(Pa);
ue(Pa, Mv);
const jI = Pa;
var sl = Pa, JC = Object.defineProperty, ud = Object.getOwnPropertySymbols, QC = Object.prototype.hasOwnProperty, _C = Object.prototype.propertyIsEnumerable, dd = (e, n, t) => n in e ? JC(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, xC = (e, n) => {
  for (var t in n || (n = {}))
    QC.call(n, t) && dd(e, t, n[t]);
  if (ud)
    for (var t of ud(n))
      _C.call(n, t) && dd(e, t, n[t]);
  return e;
};
const Vv = xC({
  modelValue: String,
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text"
  },
  textarea: Boolean,
  rows: {
    type: [String, Number],
    default: 8
  },
  maxlength: [String, Number],
  readonly: Boolean,
  resize: Boolean,
  autofocus: Boolean,
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: Array,
  enterkeyhint: String,
  onFocus: A(),
  onBlur: A(),
  onInput: A(),
  onChange: A(),
  onClear: A(),
  "onUpdate:modelValue": A()
}, Be(ya, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: eS, n: nS, classes: tS } = ne("input"), oS = ["placeholder", "enterkeyhint"], rS = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], aS = ["id", "disabled", "readonly", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function iS(e, n) {
  const t = ae("var-field-decorator"), o = ae("var-form-details");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[13] || (n[13] = (...r) => e.handleMousedown && e.handleMousedown(...r))
    },
    [
      G(
        t,
        ft(Ro({
          value: e.modelValue,
          id: e.id,
          size: e.size,
          variant: e.variant,
          placeholder: e.placeholder,
          line: e.line,
          hint: e.hint,
          textColor: e.textColor,
          focusColor: e.focusColor,
          blurColor: e.blurColor,
          isFocus: e.isFocus,
          errorMessage: e.errorMessage,
          formDisabled: e.formDisabled,
          disabled: e.disabled,
          clearable: e.clearable,
          cursor: e.cursor,
          composing: e.isComposing,
          onClick: e.handleClick,
          onClear: e.handleClear
        })),
        fr({
          "append-icon": me(() => [
            R(e.$slots, "append-icon")
          ]),
          default: me(() => [
            e.normalizedType === "password" ? (b(), k("input", {
              key: 0,
              tabindex: "-1",
              class: v(e.n("autocomplete")),
              placeholder: e.hint ? void 0 : e.placeholder,
              style: F({
                "--input-placeholder-color": e.placeholderColor
              }),
              enterkeyhint: e.enterkeyhint
            }, null, 14, oS)) : Q("v-if", !0),
            e.textarea ? (b(), k("textarea", {
              key: 1,
              class: v(
                e.classes(
                  e.n("input"),
                  e.n("--textarea"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
              ref: "el",
              autocomplete: "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              rows: e.rows,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "numeric" : void 0,
              style: F({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                resize: e.resize ? "vertical" : "none",
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[0] || (n[0] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[1] || (n[1] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[2] || (n[2] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[3] || (n[3] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[4] || (n[4] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[5] || (n[5] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, null, 46, rS)) : (b(), k("input", {
              key: 2,
              class: v(
                e.classes(
                  e.n("input"),
                  [e.formDisabled || e.disabled, e.n("--disabled")],
                  [e.errorMessage, e.n("--error")],
                  [e.errorMessage, e.n("--caret-error")]
                )
              ),
              ref: "el",
              autocomplete: "new-password",
              id: e.id,
              disabled: e.formDisabled || e.disabled,
              readonly: e.formReadonly || e.readonly,
              type: e.normalizedType,
              value: e.modelValue,
              placeholder: e.hint ? void 0 : e.placeholder,
              maxlength: e.maxlength,
              enterkeyhint: e.enterkeyhint,
              inputmode: e.type === "number" ? "numeric" : void 0,
              style: F({
                color: e.errorMessage ? void 0 : e.textColor,
                caretColor: e.errorMessage ? void 0 : e.focusColor,
                "--input-placeholder-color": e.placeholderColor
              }),
              onFocus: n[6] || (n[6] = (...r) => e.handleFocus && e.handleFocus(...r)),
              onBlur: n[7] || (n[7] = (...r) => e.handleBlur && e.handleBlur(...r)),
              onInput: n[8] || (n[8] = (...r) => e.handleInput && e.handleInput(...r)),
              onChange: n[9] || (n[9] = (...r) => e.handleChange && e.handleChange(...r)),
              onCompositionstart: n[10] || (n[10] = (...r) => e.handleCompositionStart && e.handleCompositionStart(...r)),
              onCompositionend: n[11] || (n[11] = (...r) => e.handleCompositionEnd && e.handleCompositionEnd(...r))
            }, null, 46, aS))
          ]),
          _: 2
          /* DYNAMIC */
        }, [
          e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: me(() => [
              R(e.$slots, "prepend-icon")
            ]),
            key: "0"
          } : void 0
        ]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      ),
      G(o, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[12] || (n[12] = yn(() => {
        }, ["stop"]))
      }, fr({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: me(() => [
            R(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Av = ee({
  name: eS,
  components: {
    VarFormDetails: $n,
    VarFieldDecorator: Bo
  },
  props: Vv,
  setup(e) {
    const n = Zd(), t = C(null), o = C(!1), r = C(!1), { bindForm: a, form: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Dn(), c = N(() => e.disabled || e.readonly ? "" : "text"), f = N(() => e.type === "number" ? "text" : e.type), m = N(() => {
      const { maxlength: H, modelValue: oe } = e;
      return H ? Un(oe) ? `0 / ${H}` : `${String(oe).length}/${H}` : "";
    }), g = N(() => {
      const { hint: H, blurColor: oe, focusColor: W } = e;
      if (!H)
        return l.value ? "var(--field-decorator-error-color)" : o.value ? W || "var(--field-decorator-focus-color)" : oe || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    });
    w(a, {
      reset: X,
      validate: j,
      resetValidation: d
    }), rn(() => {
      e.autofocus && Z();
    });
    function y(H) {
      qe(() => {
        const { validateTrigger: oe, rules: W, modelValue: J } = e;
        s(oe, H, W, J);
      });
    }
    function h(H) {
      o.value = !0, w(e.onFocus, H), y("onFocus");
    }
    function S(H) {
      o.value = !1, w(e.onBlur, H), y("onBlur");
    }
    function T(H) {
      const oe = H.target;
      let { value: W } = oe;
      e.type === "number" && (W = V(W));
      const J = U(L(W));
      return J === e.modelValue && (oe.value = J), J;
    }
    function $() {
      r.value = !0;
    }
    function P(H) {
      r.value && (r.value = !1, H.target.dispatchEvent(new Event("input")));
    }
    function I(H) {
      if (r.value)
        return;
      const oe = T(H);
      w(e["onUpdate:modelValue"], oe), w(e.onInput, oe, H), y("onInput");
    }
    function O(H) {
      const oe = T(H);
      w(e.onChange, oe, H), y("onChange");
    }
    function M() {
      const { disabled: H, readonly: oe, clearable: W, onClear: J } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || H || oe || !W || (w(e["onUpdate:modelValue"], ""), w(J, ""), y("onClear"));
    }
    function E(H) {
      const { disabled: oe, onClick: W } = e;
      i != null && i.disabled.value || oe || (w(W, H), y("onClick"));
    }
    function V(H) {
      const oe = H.indexOf("-"), W = H.indexOf(".");
      return oe > -1 && (H = oe === 0 ? "-" + H.replace(/-/g, "") : H.replace(/-/g, "")), W > -1 && (H = H.slice(0, W + 1) + H.slice(W).replace(/\./g, "")), H.replace(/[^-0-9.]/g, "");
    }
    function L(H) {
      return e.modelModifiers.trim ? H.trim() : H;
    }
    function U(H) {
      return e.maxlength ? H.slice(0, z(e.maxlength)) : H;
    }
    function _(H) {
      const { disabled: oe } = e;
      i != null && i.disabled.value || oe || H.target === t.value || (Z(), Rn(H));
    }
    function X() {
      w(e["onUpdate:modelValue"], ""), d();
    }
    function j() {
      return u(e.rules, e.modelValue);
    }
    function Z() {
      var H;
      (H = t.value) == null || H.focus();
    }
    function he() {
      t.value.blur();
    }
    return {
      el: t,
      id: n,
      isFocus: o,
      isComposing: r,
      errorMessage: l,
      placeholderColor: g,
      normalizedType: f,
      cursor: c,
      maxlengthText: m,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: nS,
      classes: tS,
      isEmpty: Un,
      handleFocus: h,
      handleBlur: S,
      handleInput: I,
      handleChange: O,
      handleClear: M,
      handleClick: E,
      handleCompositionStart: $,
      handleCompositionEnd: P,
      handleMousedown: _,
      validate: j,
      resetValidation: d,
      reset: X,
      focus: Z,
      blur: he
    };
  }
});
Av.render = iS;
var Oa = Av;
ie(Oa);
ue(Oa, Vv);
const WI = Oa;
var Tr = Oa;
const zv = {
  type: {
    type: String,
    default: "default"
  },
  href: String,
  target: String,
  rel: String,
  to: [String, Object],
  replace: Boolean,
  underline: {
    type: String,
    default: "always"
  },
  disabled: Boolean,
  textSize: [String, Number],
  textColor: String,
  onClick: A()
}, { name: lS, n: sS, classes: uS } = ne("link");
function dS(e, n) {
  return b(), Ce(ro(e.tag), Ae(e.linkProps, {
    class: e.classes(
      e.n(),
      e.n("$--box"),
      e.n("$--inline-flex"),
      e.n(`--${e.type}`),
      [e.underline !== "none", e.n(`--underline-${e.underline}`)],
      [e.disabled, e.n("--disabled")]
    ),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick
  }), {
    default: me(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
const Lv = ee({
  name: lS,
  props: zv,
  setup(e) {
    const n = N(() => {
      const { disabled: r, href: a, to: i } = e;
      return r ? "span" : a ? "a" : i ? "router-link" : "a";
    }), t = N(() => {
      const { disabled: r, href: a, target: i, to: l, replace: s, rel: u } = e;
      return r ? {} : a ? { href: a, target: i, rel: u } : l ? { to: l, target: i, replace: s } : {};
    });
    function o(r) {
      e.disabled || w(e.onClick, r);
    }
    return {
      tag: n,
      linkProps: t,
      n: sS,
      classes: uS,
      handleClick: o,
      toSizeUnit: we
    };
  }
});
Lv.render = dS;
var Ta = Lv;
ie(Ta);
ue(Ta, zv);
const qI = Ta;
var ul = Ta;
const Rv = {
  loading: Boolean,
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: Boolean,
  error: Boolean,
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: String,
  finishedText: String,
  errorText: String,
  onLoad: A(),
  "onUpdate:loading": A(),
  "onUpdate:error": A()
}, Uv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function cS() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    Uv
  );
  return {
    length: t,
    tabItemList: n,
    bindTabItem: e
  };
}
const Hv = Symbol("TAB_ITEM_BIND_LIST_KEY");
function fS() {
  const { parentProvider: e, bindParent: n, index: t } = an(
    Uv
  );
  return n || Pn("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: t,
    tabsItems: e,
    bindTabsItems: n
  };
}
function vS() {
  const { childProviders: e, bindChildren: n, length: t } = ln(Hv);
  return {
    length: t,
    lists: e,
    bindLists: n
  };
}
function mS() {
  const { parentProvider: e, bindParent: n, index: t } = an(Hv);
  return {
    index: t,
    tabItem: e,
    bindTabItem: n
  };
}
var pS = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: hS, n: gS, classes: bS } = ne("list");
function yS(e, n) {
  const t = ae("var-loading"), o = ze("ripple");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [
      R(e.$slots, "default"),
      e.loading ? R(e.$slots, "loading", { key: 0 }, () => {
        var r;
        return [
          B(
            "div",
            {
              class: v(e.n("loading"))
            },
            [
              B(
                "div",
                {
                  class: v(e.n("loading-text"))
                },
                re((r = e.loadingText) != null ? r : e.pack.listLoadingText),
                3
                /* TEXT, CLASS */
              ),
              G(t, {
                size: "mini",
                radius: 10
              })
            ],
            2
            /* CLASS */
          )
        ];
      }) : Q("v-if", !0),
      e.finished ? R(e.$slots, "finished", { key: 1 }, () => {
        var r;
        return [
          B(
            "div",
            {
              class: v(e.n("finished"))
            },
            re((r = e.finishedText) != null ? r : e.pack.listFinishedText),
            3
            /* TEXT, CLASS */
          )
        ];
      }) : Q("v-if", !0),
      e.error ? R(e.$slots, "error", { key: 2 }, () => {
        var r;
        return [
          De((b(), k(
            "div",
            {
              class: v(e.n("error")),
              onClick: n[0] || (n[0] = (...a) => e.load && e.load(...a))
            },
            [
              Ie(
                re((r = e.errorText) != null ? r : e.pack.listErrorText),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )), [
            [o]
          ])
        ];
      }) : Q("v-if", !0),
      B(
        "div",
        {
          class: v(e.n("detector")),
          ref: "detectorEl"
        },
        null,
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Fv = ee({
  name: hS,
  directives: { Ripple: Qe },
  components: { VarLoading: Kt },
  props: Rv,
  setup(e) {
    const n = C(null), t = C(null), { tabItem: o, bindTabItem: r } = mS();
    let a;
    w(r, {}), o && ce(() => o.current.value, u), ce(() => [e.loading, e.error, e.finished], u), rn(() => {
      a = bt(n.value), a.addEventListener("scroll", u), e.immediateCheck && u();
    }), Ir(s);
    function i() {
      w(e["onUpdate:error"], !1), w(e["onUpdate:loading"], !0), w(e.onLoad);
    }
    function l() {
      const { bottom: d } = en(a), { bottom: c } = en(t.value);
      return Math.floor(c) - Ge(e.offset) <= d;
    }
    function s() {
      a.removeEventListener("scroll", u);
    }
    function u() {
      return pS(this, null, function* () {
        yield qe(), !(e.loading || e.finished || e.error || (o == null ? void 0 : o.current.value) === !1 || !l()) && i();
      });
    }
    return {
      pack: Je,
      listEl: n,
      detectorEl: t,
      isNumber: bn,
      load: i,
      check: u,
      n: gS,
      classes: bS
    };
  }
});
Fv.render = yS;
var Ea = Fv;
ie(Ea);
ue(Ea, Rv);
const GI = Ea;
var dl = Ea;
const $S = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: Boolean,
  color: String,
  errorColor: String,
  height: [Number, String],
  top: [Number, String]
}, {
  name: wS,
  classes: CS,
  n: cd
} = ne("loading-bar");
var SS = ee({
  name: wS,
  props: $S,
  setup(e) {
    return () => G("div", {
      class: CS(cd(), [e.error, cd("--error")]),
      style: {
        zIndex: kn.zIndex + 10,
        width: `${e.value}%`,
        opacity: e.opacity,
        height: we(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: we(e.top)
      }
    }, null);
  }
});
let Yv, jv, Ia, Wv, fd, qv = {};
const kS = {
  value: 0,
  opacity: 0,
  error: !1
}, tn = je(kS), PS = (e) => {
  Object.assign(tn, e);
}, OS = (e) => {
  Object.assign(tn, e), qv = e;
}, TS = () => {
  Object.keys(qv).forEach((e) => {
    tn[e] !== void 0 && (tn[e] = void 0);
  });
}, Gv = () => {
  fd || (fd = !0, so(SS, tn));
}, hs = () => {
  Yv = window.setTimeout(() => {
    if (tn.value >= 95)
      return;
    let e = Math.random();
    tn.value < 70 && (e = Math.round(5 * Math.random())), tn.value += e, hs();
  }, 200);
}, gs = () => {
  window.clearTimeout(jv), window.clearTimeout(Yv), window.clearTimeout(Ia), window.clearTimeout(Wv);
}, ES = () => {
  gs(), tn.error = !1, tn.value = 0, Gv(), Ia = window.setTimeout(() => {
    tn.opacity = 1;
  }, 200), hs();
}, Xv = () => {
  gs(), tn.value = 100, Ia = window.setTimeout(() => {
    tn.opacity = 0, jv = window.setTimeout(() => {
      tn.error = !1;
    }, 250);
  }, 300);
}, IS = () => {
  gs(), tn.error = !0, tn.value === 100 && (tn.value = 0), Gv(), Ia = window.setTimeout(() => {
    tn.opacity = 1;
  }, 200), hs(), Wv = window.setTimeout(Xv, 300);
}, Kv = {
  start: ES,
  finish: Xv,
  error: IS,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: PS,
  setDefaultOptions: OS,
  resetDefaultOptions: TS
}, XI = Kv;
var cl = Kv;
const bs = {
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "click"
  },
  reference: String,
  placement: {
    type: String,
    default: "cover-top-start"
  },
  strategy: {
    type: String,
    default: "absolute"
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  sameWidth: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  popoverClass: String,
  closeOnClickReference: Boolean,
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  onClickOutside: A(),
  "onUpdate:show": A()
}, { name: BS, n: DS, classes: MS } = ne("menu");
function NS(e, n) {
  return b(), k(
    "div",
    {
      ref: "host",
      class: v(e.classes(e.n(), e.n("$--box"))),
      onClick: n[3] || (n[3] = (...t) => e.handleHostClick && e.handleHostClick(...t)),
      onMouseenter: n[4] || (n[4] = (...t) => e.handleHostMouseenter && e.handleHostMouseenter(...t)),
      onMouseleave: n[5] || (n[5] = (...t) => e.handleHostMouseleave && e.handleHostMouseleave(...t))
    },
    [
      R(e.$slots, "default"),
      (b(), Ce(qn, {
        to: e.teleport === !1 ? void 0 : e.teleport,
        disabled: e.teleportDisabled || e.teleport === !1
      }, [
        G(We, {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.handleClosed,
          persisted: ""
        }, {
          default: me(() => [
            De(B(
              "div",
              {
                ref: "popover",
                style: F({
                  zIndex: e.zIndex,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: v(
                  e.classes(
                    e.n("menu"),
                    e.n("$--box"),
                    e.popoverClass,
                    [e.defaultStyle, e.n("--menu-background-color")],
                    [e.defaultStyle, e.formatElevation(e.elevation, 3)]
                  )
                ),
                onClick: n[0] || (n[0] = yn(() => {
                }, ["stop"])),
                onMouseenter: n[1] || (n[1] = (...t) => e.handlePopoverMouseenter && e.handlePopoverMouseenter(...t)),
                onMouseleave: n[2] || (n[2] = (...t) => e.handlePopoverMouseleave && e.handlePopoverMouseleave(...t))
              },
              [
                R(e.$slots, "menu")
              ],
              38
              /* CLASS, STYLE, HYDRATE_EVENTS */
            ), [
              [Hn, e.show]
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["name", "onAfterEnter", "onAfterLeave"])
      ], 8, ["to", "disabled"]))
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Zv = ee({
  name: BS,
  props: bs,
  setup(e) {
    const { disabled: n } = zt(), {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: g,
      // expose
      close: p,
      // expose
      resize: y
    } = cv(e);
    return {
      popover: t,
      host: o,
      hostSize: r,
      show: a,
      zIndex: i,
      teleportDisabled: n,
      formatElevation: dn,
      toSizeUnit: we,
      n: DS,
      classes: MS,
      handleHostClick: l,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: c,
      handlePopoverClose: f,
      handleClosed: m,
      resize: y,
      open: g,
      close: p
    };
  }
});
Zv.render = NS;
var Ba = Zv;
ie(Ba);
ue(Ba, bs);
const KI = Ba;
var eo = Ba;
const Jv = Symbol("MENU_SELECT_BIND_MENU_OPTION_KEY");
function VS() {
  const { length: e, childProviders: n, bindChildren: t } = ln(
    Jv
  );
  return {
    length: e,
    menuOptions: n,
    bindMenuOptions: t
  };
}
function AS() {
  const { index: e, parentProvider: n, bindParent: t } = an(
    Jv
  );
  return t || Pn("MenuOption", "<var-menu-option/> must in <var-menu-select/>"), {
    index: e,
    menuSelect: n,
    bindMenuSelect: t
  };
}
const Qv = {
  label: {},
  value: {},
  disabled: Boolean
}, { name: zS, n: LS, classes: RS } = ne("menu-option");
function US(e, n) {
  const t = ae("var-checkbox"), o = ae("var-hover-overlay"), r = ze("ripple"), a = ze("hover");
  return De((b(), k(
    "div",
    {
      class: v(
        e.classes(e.n(), e.n("$--box"), e.n(`--${e.size}`), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])
      ),
      onClick: n[2] || (n[2] = (...i) => e.handleClick && e.handleClick(...i))
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")]))
        },
        null,
        2
        /* CLASS */
      ),
      e.multiple ? (b(), Ce(t, {
        key: 0,
        ref: "checkbox",
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
        disabled: e.disabled,
        onClick: n[1] || (n[1] = yn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      }, null, 8, ["modelValue", "disabled", "onChange"])) : Q("v-if", !0),
      R(e.$slots, "default", {}, () => [
        B(
          "div",
          {
            class: v(e.classes(e.n("text"), e.n("$--ellipsis")))
          },
          re(e.label),
          3
          /* TEXT, CLASS */
        )
      ]),
      G(o, {
        hovering: e.hovering && !e.disabled
      }, null, 8, ["hovering"])
    ],
    2
    /* CLASS */
  )), [
    [r, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const _v = ee({
  name: zS,
  directives: { Ripple: Qe, Hover: On },
  components: {
    VarCheckbox: Oo,
    VarHoverOverlay: Bn
  },
  props: Qv,
  setup(e) {
    const n = C(!1), t = N(() => n.value), o = N(() => e.label), r = N(() => e.value), { menuSelect: a, bindMenuSelect: i } = AS(), { size: l, multiple: s, onSelect: u, computeLabel: d } = a, { hovering: c, handleHovering: f } = Fn(), m = {
      label: o,
      value: r,
      selected: t,
      sync: y
    };
    ce([() => e.label, () => e.value], d), i(m);
    function g() {
      e.disabled || p();
    }
    function p() {
      s.value && (n.value = !n.value), u(m);
    }
    function y(h) {
      n.value = h;
    }
    return {
      optionSelected: n,
      size: l,
      multiple: s,
      hovering: c,
      n: LS,
      classes: RS,
      handleHovering: f,
      handleClick: g,
      handleSelect: p
    };
  }
});
_v.render = US;
var Da = _v;
ie(Da);
ue(Da, Qv);
const ZI = Da;
var fl = Da, HS = Object.defineProperty, vd = Object.getOwnPropertySymbols, FS = Object.prototype.hasOwnProperty, YS = Object.prototype.propertyIsEnumerable, md = (e, n, t) => n in e ? HS(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, jS = (e, n) => {
  for (var t in n || (n = {}))
    FS.call(n, t) && md(e, t, n[t]);
  if (vd)
    for (var t of vd(n))
      YS.call(n, t) && md(e, t, n[t]);
  return e;
};
const xv = jS({
  modelValue: {
    default: void 0
  },
  size: {
    type: String,
    default: "normal"
  },
  multiple: Boolean,
  scrollable: Boolean,
  closeOnSelect: {
    type: Boolean,
    default: !0
  },
  "onUpdate:modelValue": A()
}, Be(bs, [
  "show",
  "disabled",
  "trigger",
  "reference",
  "placement",
  "strategy",
  "offsetX",
  "offsetY",
  "teleport",
  "sameWidth",
  "elevation",
  "popoverClass",
  "closeOnClickReference",
  "onOpen",
  "onOpened",
  "onClose",
  "onClosed",
  "onClickOutside",
  "onUpdate:show"
]));
function em(e) {
  const {
    multiple: n,
    modelValue: t,
    optionProviders: o,
    optionProvidersLength: r
  } = e, a = C(""), i = C([]);
  ce(t, c, { deep: !0 }), ce(r, c);
  function l() {
    const f = n(), m = t();
    f && (i.value = m.map(s)), !f && !Un(m) && (a.value = s(m)), !f && Un(m) && (a.value = "");
  }
  function s(f) {
    var m;
    const g = o();
    let p = g.find(({ value: y }) => y.value === f);
    return p || (p = g.find(({ label: y }) => y.value === f)), (m = p == null ? void 0 : p.label.value) != null ? m : "";
  }
  function u({ value: f, label: m }) {
    return f.value != null ? f.value : m.value;
  }
  function d(f) {
    const m = n(), g = o();
    return m ? g.filter(({ selected: p }) => p.value).map(u) : u(f);
  }
  function c() {
    const f = n(), m = t(), g = o();
    f ? g.forEach((p) => p.sync(m.includes(u(p)))) : g.forEach((p) => p.sync(m === u(p))), l();
  }
  return {
    label: a,
    labels: i,
    computeLabel: l,
    getSelectedValue: d
  };
}
const { name: WS, n: qS, classes: GS } = ne("menu-select");
function XS(e, n) {
  const t = ae("var-menu");
  return b(), Ce(t, {
    ref: "menu",
    class: v(e.n()),
    disabled: e.disabled,
    trigger: e.trigger,
    reference: e.reference,
    placement: e.placement,
    strategy: e.strategy,
    "offset-x": e.offsetX,
    "offset-y": e.offsetY,
    teleport: e.teleport,
    "same-width": e.sameWidth,
    elevation: e.elevation,
    "default-style": !1,
    "popover-class": e.popoverClass,
    "close-on-click-reference": e.closeOnClickReference,
    show: e.show,
    "onUpdate:show": n[0] || (n[0] = (o) => e.show = o),
    onOpen: e.onOpen,
    onOpened: e.onOpened,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onClickOutside: e.onClickOutside
  }, {
    menu: me(() => [
      B(
        "div",
        {
          class: v(e.classes(e.n("menu"), e.formatElevation(e.elevation, 3), [e.scrollable, e.n("--scrollable")]))
        },
        [
          R(e.$slots, "options")
        ],
        2
        /* CLASS */
      )
    ]),
    default: me(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "disabled", "trigger", "reference", "placement", "strategy", "offset-x", "offset-y", "teleport", "same-width", "elevation", "popover-class", "close-on-click-reference", "show", "onOpen", "onOpened", "onClose", "onClosed", "onClickOutside"]);
}
const nm = ee({
  name: WS,
  components: { VarMenu: eo },
  props: xv,
  setup(e) {
    const n = C(null), t = Qn(e, "show"), { menuOptions: o, length: r, bindMenuOptions: a } = VS(), { computeLabel: i, getSelectedValue: l } = em({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => o,
      optionProvidersLength: () => r.value
    }), s = {
      size: N(() => e.size),
      multiple: N(() => e.multiple),
      computeLabel: i,
      onSelect: u
    };
    a(s);
    function u(m) {
      const { multiple: g, closeOnSelect: p } = e;
      w(e["onUpdate:modelValue"], l(m)), !g && p && (t.value = !1);
    }
    function d() {
      var m;
      (m = n.value) == null || m.open();
    }
    function c() {
      var m;
      (m = n.value) == null || m.close();
    }
    function f() {
      var m;
      (m = n.value) == null || m.resize();
    }
    return {
      show: t,
      menu: n,
      n: qS,
      classes: GS,
      formatElevation: dn,
      open: d,
      close: c,
      resize: f
    };
  }
});
nm.render = XS;
var Ma = nm;
ie(Ma);
ue(Ma, xv);
const JI = Ma;
var vl = Ma;
const tm = Symbol("SELECT_BIND_OPTION_KEY");
function KS() {
  const { length: e, childProviders: n, bindChildren: t } = ln(tm);
  return {
    length: e,
    options: n,
    bindOptions: t
  };
}
function ZS() {
  const { index: e, parentProvider: n, bindParent: t } = an(tm);
  return t || Pn("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: t
  };
}
const om = {
  label: {},
  value: {},
  disabled: Boolean
}, { name: JS, n: QS, classes: _S } = ne("option");
function xS(e, n) {
  const t = ae("var-checkbox"), o = ae("var-hover-overlay"), r = ze("ripple"), a = ze("hover");
  return De((b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")], [e.disabled, e.n("--disabled")])),
      style: F({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = (...i) => e.handleClick && e.handleClick(...i))
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
          style: F({
            background: e.optionSelected ? e.focusColor : void 0
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      e.multiple ? (b(), Ce(t, {
        key: 0,
        ref: "checkbox",
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => e.optionSelected = i),
        "checked-color": e.focusColor,
        disabled: e.disabled,
        onClick: n[1] || (n[1] = yn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      }, null, 8, ["modelValue", "checked-color", "disabled", "onChange"])) : Q("v-if", !0),
      R(e.$slots, "default", {}, () => [
        B(
          "div",
          {
            class: v(e.classes(e.n("text"), e.n("$--ellipsis")))
          },
          re(e.label),
          3
          /* TEXT, CLASS */
        )
      ]),
      G(o, {
        hovering: e.hovering && !e.disabled
      }, null, 8, ["hovering"])
    ],
    6
    /* CLASS, STYLE */
  )), [
    [r, { disabled: e.disabled }],
    [a, e.handleHovering, "desktop"]
  ]);
}
const rm = ee({
  name: JS,
  directives: { Ripple: Qe, Hover: On },
  components: {
    VarCheckbox: Oo,
    VarHoverOverlay: Bn
  },
  props: om,
  setup(e) {
    const n = C(!1), t = N(() => n.value), o = N(() => e.label), r = N(() => e.value), { select: a, bindSelect: i } = ZS(), { multiple: l, focusColor: s, onSelect: u, computeLabel: d } = a, { hovering: c, handleHovering: f } = Fn(), m = {
      label: o,
      value: r,
      selected: t,
      sync: y
    };
    ce([() => e.label, () => e.value], d), i(m);
    function g() {
      e.disabled || p();
    }
    function p() {
      l.value && (n.value = !n.value), u(m);
    }
    function y(h) {
      n.value = h;
    }
    return {
      optionSelected: n,
      multiple: l,
      focusColor: s,
      hovering: c,
      n: QS,
      classes: _S,
      handleHovering: f,
      handleClick: g,
      handleSelect: p
    };
  }
});
rm.render = xS;
var Na = rm;
ie(Na);
ue(Na, om);
const QI = Na;
var ml = Na;
const am = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: A(),
  "onUpdate:show": A()
}, {
  name: ek,
  n: pd
} = ne("overlay");
var Va = ee({
  name: ek,
  inheritAttrs: !1,
  props: am,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const {
      zIndex: o
    } = Ho(() => e.show, 1), {
      disabled: r
    } = zt();
    Uo(() => e.show, () => e.lockScroll);
    function a() {
      w(e.onClick), w(e["onUpdate:show"], !1);
    }
    function i() {
      return G("div", Ae({
        class: pd(),
        style: {
          zIndex: o.value - 1
        }
      }, t, {
        onClick: a
      }), [w(n.default)]);
    }
    function l() {
      return G(We, {
        name: pd("--fade")
      }, {
        default: () => [e.show && i()]
      });
    }
    return () => {
      const {
        teleport: s
      } = e;
      return s ? G(qn, {
        to: s,
        disabled: r.value
      }, {
        default: () => [l()]
      }) : l();
    };
  }
});
ie(Va);
ue(Va, am);
const _I = Va;
var pl = Va;
const im = {
  current: [Number, String],
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: Boolean,
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: Boolean,
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: Function,
  onChange: A(),
  "onUpdate:current": A(),
  "onUpdate:size": A()
}, { name: nk, n: tk, classes: ok } = ne("pagination"), rk = ["item-mode", "onClick"];
function ak(e, n) {
  const t = ae("var-icon"), o = ae("var-input"), r = ae("var-cell"), a = ae("var-menu"), i = ze("ripple");
  return b(), k(
    "ul",
    {
      class: v(e.n())
    },
    [
      De((b(), k(
        "li",
        {
          class: v(
            e.classes(
              e.n("item"),
              e.n("prev"),
              [e.current <= 1 || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
        },
        [
          R(e.$slots, "prev", {}, () => [
            G(t, { name: "chevron-left" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current <= 1 || e.disabled }]
      ]),
      e.simple ? (b(), k(
        "li",
        {
          key: 0,
          class: v(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
        },
        [
          G(o, {
            "var-pagination-cover": "",
            hint: !1,
            disabled: e.disabled,
            modelValue: e.simpleCurrentValue,
            "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleCurrentValue = l),
            onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleCurrentValue, l)),
            onKeydown: n[3] || (n[3] = Cs((l) => e.setPage("simple", e.simpleCurrentValue, l), ["enter"]))
          }, null, 8, ["disabled", "modelValue"]),
          B("span", null, [
            Ie(
              " / " + re(e.pageCount) + " ",
              1
              /* TEXT */
            ),
            B(
              "div",
              {
                class: v(e.n("simple-line"))
              },
              null,
              2
              /* CLASS */
            )
          ])
        ],
        2
        /* CLASS */
      )) : (b(!0), k(
        Ve,
        { key: 1 },
        Ke(e.pageList, (l, s) => De((b(), k("li", {
          key: s,
          "item-mode": e.getMode(l, s),
          class: v(
            e.classes(
              e.n("item"),
              e.formatElevation(e.elevation, 2),
              [l === e.current && !e.disabled, e.n("item--active")],
              [e.isHideEllipsis(l, s), e.n("item--hide")],
              [e.disabled, e.n("item--disabled")],
              [l === e.current && e.disabled, e.n("item--disabled--active")]
            )
          ),
          onClick: (u) => e.clickItem(l, s)
        }, [
          Ie(
            re(l),
            1
            /* TEXT */
          )
        ], 10, rk)), [
          [i, { disabled: e.disabled }]
        ])),
        128
        /* KEYED_FRAGMENT */
      )),
      De((b(), k(
        "li",
        {
          class: v(
            e.classes(
              e.n("item"),
              e.n("next"),
              [e.current >= e.pageCount || e.disabled, e.n("item--disabled")],
              [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)]
            )
          ),
          onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
        },
        [
          R(e.$slots, "next", {}, () => [
            G(t, { name: "chevron-right" })
          ])
        ],
        2
        /* CLASS */
      )), [
        [i, { disabled: e.current >= e.pageCount || e.disabled }]
      ]),
      e.showSizeChanger ? (b(), k(
        "li",
        {
          key: 2,
          class: v(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
        },
        [
          G(a, {
            placement: "cover-top",
            disabled: e.disabled,
            show: e.menuVisible,
            "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l)
          }, {
            menu: me(() => [
              (b(!0), k(
                Ve,
                null,
                Ke(e.sizeOption, (l, s) => De((b(), Ce(r, {
                  class: v(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                  key: s,
                  onClick: (u) => e.clickSize(l)
                }, {
                  default: me(() => [
                    Ie(
                      re(l) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["class", "onClick"])), [
                  [i]
                ])),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            default: me(() => [
              B(
                "div",
                {
                  class: v(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
                  onClick: n[5] || (n[5] = yn((...l) => e.showMenu && e.showMenu(...l), ["stop"]))
                },
                [
                  B(
                    "span",
                    null,
                    re(e.size) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
                    1
                    /* TEXT */
                  ),
                  G(t, {
                    class: v(e.n("size--open-icon")),
                    "var-pagination-cover": "",
                    name: "menu-down"
                  }, null, 8, ["class"])
                ],
                2
                /* CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "show"])
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.showQuickJumper && !e.simple ? (b(), k(
        "li",
        {
          key: 3,
          class: v(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
        },
        [
          Ie(
            re(e.pack.paginationJump) + " ",
            1
            /* TEXT */
          ),
          G(o, {
            modelValue: e.quickJumperValue,
            "onUpdate:modelValue": n[7] || (n[7] = (l) => e.quickJumperValue = l),
            disabled: e.disabled,
            "var-pagination-cover": "",
            onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.quickJumperValue, l)),
            onKeydown: n[9] || (n[9] = Cs((l) => e.setPage("quick", e.quickJumperValue, l), ["enter"]))
          }, null, 8, ["modelValue", "disabled"])
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.totalText ? (b(), k(
        "li",
        {
          key: 4,
          class: v(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
        },
        re(e.totalText),
        3
        /* TEXT, CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const lm = ee({
  name: nk,
  components: {
    VarMenu: eo,
    VarIcon: He,
    VarCell: br,
    VarInput: Tr
  },
  directives: { Ripple: Qe },
  props: im,
  setup(e) {
    const n = C(!1), t = C(""), o = C("1"), r = C(!1), a = C(!1), i = C(z(e.current) || 1), l = C(z(e.size) || 10), s = C([]), u = N(() => Math.ceil(e.maxPagerCount / 2)), d = N(() => Math.ceil(z(e.total) / z(l.value))), c = N(() => {
      const $ = l.value * (i.value - 1) + 1, P = Math.min(l.value * i.value, z(e.total));
      return [$, P];
    }), f = N(() => e.showTotal ? e.showTotal(z(e.total), c.value) : "");
    ce([() => e.current, () => e.size], ([$, P]) => {
      i.value = z($) || 1, l.value = z(P || 10);
    }), ce(
      [i, l, d],
      ([$, P, I], [O, M]) => {
        let E = [];
        const { maxPagerCount: V, total: L, onChange: U } = e, _ = Math.ceil(z(L) / z(M)), X = I - (V - u.value) - 1;
        if (o.value = `${$}`, I - 2 > V) {
          if (O === void 0 || I !== _)
            for (let j = 2; j < V + 2; j++)
              E.push(j);
          if ($ <= V && $ < X) {
            E = [];
            for (let j = 1; j < V + 1; j++)
              E.push(j + 1);
            r.value = !0, a.value = !1;
          }
          if ($ > V && $ < X) {
            E = [];
            for (let j = 1; j < V + 1; j++)
              E.push($ + j - u.value);
            r.value = $ === 2 && V === 1, a.value = !1;
          }
          if ($ >= X) {
            E = [];
            for (let j = 1; j < V + 1; j++)
              E.push(I - (V - j) - 1);
            r.value = !1, a.value = !0;
          }
          E = [1, "...", ...E, "...", I];
        } else
          for (let j = 1; j <= I; j++)
            E.push(j);
        s.value = E, O != null && I > 0 && w(U, $, P), w(e["onUpdate:current"], $), w(e["onUpdate:size"], P);
      },
      {
        immediate: !0
      }
    );
    function m($, P) {
      return bn($) ? !1 : P === 1 ? r.value : a.value;
    }
    function g($, P) {
      return bn($) ? "basic" : P === 1 ? "head" : "tail";
    }
    function p($, P) {
      if (!($ === i.value || e.disabled)) {
        if ($ === "...") {
          i.value = P === 1 ? Math.max(i.value - e.maxPagerCount, 1) : Math.min(i.value + e.maxPagerCount, d.value);
          return;
        }
        if ($ === "prev") {
          i.value = S(i.value - 1);
          return;
        }
        if ($ === "next") {
          i.value = S(i.value + 1);
          return;
        }
        bn($) && (i.value = $);
      }
    }
    function y() {
      e.disabled || (n.value = !0);
    }
    function h($) {
      l.value = $, n.value = !1;
      const P = S(i.value);
      o.value = String(P), i.value = P;
    }
    function S($) {
      return $ > d.value ? d.value : $ < 1 ? 1 : $;
    }
    function T($, P, I) {
      I.target.blur();
      const O = S(z(P));
      o.value = String(O), i.value = O, $ === "quick" && (t.value = "");
    }
    return {
      pack: Je,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      quickJumperValue: t,
      simpleCurrentValue: o,
      totalText: f,
      n: tk,
      classes: ok,
      getMode: g,
      isHideEllipsis: m,
      clickItem: p,
      showMenu: y,
      clickSize: h,
      setPage: T,
      toNumber: z,
      formatElevation: dn
    };
  }
});
lm.render = ak;
var Aa = lm;
ie(Aa);
ue(Aa, im);
const xI = Aa;
var hl = Aa;
const sm = {
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  ripple: Boolean,
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  onClick: A()
}, { name: ik, n: lk, classes: sk } = ne("paper");
function uk(e, n) {
  const t = ze("ripple");
  return De((b(), k(
    "div",
    {
      class: v(
        e.classes(
          e.n(),
          e.n("$--box"),
          e.formatElevation(e.elevation, 2),
          [e.onClick, e.n("--cursor")],
          [e.round, e.n("--round")],
          [e.inline, e.n("$--inline-flex")]
        )
      ),
      style: F({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: !e.ripple }]
  ]);
}
const um = ee({
  name: ik,
  directives: { Ripple: Qe },
  props: sm,
  setup(e) {
    function n(t) {
      w(e.onClick, t);
    }
    return {
      n: lk,
      classes: sk,
      formatElevation: dn,
      toSizeUnit: we,
      handleClick: n
    };
  }
});
um.render = uk;
var za = um;
ie(za);
ue(za, sm);
const e6 = za;
var gl = za, dk = Object.defineProperty, hd = Object.getOwnPropertySymbols, ck = Object.prototype.hasOwnProperty, fk = Object.prototype.propertyIsEnumerable, gd = (e, n, t) => n in e ? dk(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, vk = (e, n) => {
  for (var t in n || (n = {}))
    ck.call(n, t) && gd(e, t, n[t]);
  if (hd)
    for (var t of hd(n))
      fk.call(n, t) && gd(e, t, n[t]);
  return e;
};
const dm = vk({
  modelValue: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  },
  title: String,
  textKey: {
    type: String,
    default: "text"
  },
  valueKey: {
    type: String,
    default: "value"
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: Boolean,
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  // dynamic internal
  dynamic: Boolean,
  onChange: A(),
  onConfirm: A(),
  onCancel: A(),
  "onUpdate:modelValue": A()
}, Be(uo, [
  "show",
  "onUpdate:show",
  "closeOnClickOverlay",
  "teleport",
  "safeArea",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  "onRouteChange"
])), { name: mk, n: pk, classes: hk } = ne("picker"), bd = 300, gk = 15, yd = 200, bk = 1e3;
let $d = 0;
const yk = ["onTouchstartPassive", "onTouchmove", "onTouchend"], $k = ["onTransitionend"], wk = ["onClick"];
function Ck(e, n) {
  const t = ae("var-button");
  return b(), Ce(
    ro(e.dynamic ? e.n("$-popup") : e.Transition),
    Ae(
      e.dynamic ? {
        onOpen: e.onOpen,
        onOpened: e.onOpened,
        onClose: e.onClose,
        onClosed: e.onClosed,
        onClickOverlay: e.onClickOverlay,
        onRouteChange: e.onRouteChange,
        closeOnClickOverlay: e.closeOnClickOverlay,
        teleport: e.teleport,
        show: e.show,
        safeArea: e.safeArea,
        "onUpdate:show": e.handlePopupUpdateShow,
        position: "bottom",
        class: e.n("popup")
      } : null,
      { "var-picker-cover": "" }
    ),
    {
      default: me(() => [
        B(
          "div",
          Ae({
            class: e.n()
          }, e.$attrs),
          [
            e.toolbar ? (b(), k(
              "div",
              {
                key: 0,
                class: v(e.n("toolbar"))
              },
              [
                R(e.$slots, "cancel", {}, () => [
                  G(t, {
                    class: v(e.n("cancel-button")),
                    "var-picker-cover": "",
                    text: "",
                    "text-color": e.cancelButtonTextColor,
                    onClick: e.cancel
                  }, {
                    default: me(() => {
                      var o;
                      return [
                        Ie(
                          re((o = e.cancelButtonText) != null ? o : e.pack.pickerCancelButtonText),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ]),
                R(e.$slots, "title", {}, () => {
                  var o;
                  return [
                    B(
                      "div",
                      {
                        class: v(e.n("title"))
                      },
                      re((o = e.title) != null ? o : e.pack.pickerTitle),
                      3
                      /* TEXT, CLASS */
                    )
                  ];
                }),
                R(e.$slots, "confirm", {}, () => [
                  G(t, {
                    class: v(e.n("confirm-button")),
                    text: "",
                    "var-picker-cover": "",
                    "text-color": e.confirmButtonTextColor,
                    onClick: e.confirm
                  }, {
                    default: me(() => {
                      var o;
                      return [
                        Ie(
                          re((o = e.confirmButtonText) != null ? o : e.pack.pickerConfirmButtonText),
                          1
                          /* TEXT */
                        )
                      ];
                    }),
                    _: 1
                    /* STABLE */
                  }, 8, ["class", "text-color", "onClick"])
                ])
              ],
              2
              /* CLASS */
            )) : Q("v-if", !0),
            B(
              "div",
              {
                class: v(e.n("columns")),
                style: F({ height: `${e.columnHeight}px` })
              },
              [
                (b(!0), k(
                  Ve,
                  null,
                  Ke(e.scrollColumns, (o) => (b(), k("div", {
                    class: v(e.n("column")),
                    key: o.id,
                    onTouchstartPassive: (r) => e.handleTouchstart(r, o),
                    onTouchmove: yn((r) => e.handleTouchmove(r, o), ["prevent"]),
                    onTouchend: (r) => e.handleTouchend(o)
                  }, [
                    B("div", {
                      class: v(e.n("scroller")),
                      ref_for: !0,
                      ref: (r) => e.setScrollEl(r, o),
                      style: F({
                        transform: `translateY(${o.translate}px)`,
                        transitionDuration: `${o.duration}ms`,
                        transitionProperty: o.duration ? "transform" : "none"
                      }),
                      onTransitionend: (r) => e.handleTransitionend(o)
                    }, [
                      (b(!0), k(
                        Ve,
                        null,
                        Ke(o.column, (r, a) => (b(), k("div", {
                          key: e.getValue(r),
                          class: v(e.classes(e.n("option"), r.className)),
                          style: F({ height: `${e.optionHeight}px` }),
                          onClick: (i) => e.handleClick(o, a)
                        }, [
                          B(
                            "div",
                            {
                              class: v(e.classes(e.n("text"), r.textClassName))
                            },
                            re(r[e.getOptionKey("text")]),
                            3
                            /* TEXT, CLASS */
                          )
                        ], 14, wk))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ], 46, $k)
                  ], 42, yk))),
                  128
                  /* KEYED_FRAGMENT */
                )),
                B(
                  "div",
                  {
                    class: v(e.n("picked")),
                    style: F({
                      top: `${e.center}px`,
                      height: `${e.optionHeight}px`
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ),
                B(
                  "div",
                  {
                    class: v(e.n("mask")),
                    style: F({ backgroundSize: `100% ${(e.columnHeight - e.optionHeight) / 2}px` })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          16
          /* FULL_PROPS */
        )
      ]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
const cm = ee({
  name: mk,
  components: {
    VarButton: pn,
    VarPopup: gt
  },
  inheritAttrs: !1,
  props: dm,
  setup(e) {
    const n = Qn(e, "modelValue"), t = C([]), o = N(() => Ge(e.optionHeight)), r = N(() => Ge(e.optionCount)), a = N(() => r.value * o.value / 2 - o.value / 2), i = N(() => r.value * o.value), { prevY: l, moveY: s, dragging: u, startTouch: d, moveTouch: c, endTouch: f } = lo();
    let m = [];
    P(), ce(() => e.columns, P, { deep: !0 }), ce(() => n.value, I);
    function g(D) {
      return {
        text: e.textKey,
        value: e.valueKey,
        children: e.childrenKey
      }[D];
    }
    function p(D) {
      var Y;
      return (Y = D[g("value")]) != null ? Y : D[g("text")];
    }
    function y(D) {
      m = [...D];
    }
    function h(D) {
      return D.map((Y) => {
        const pe = {
          id: $d++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: Y,
          scrollEl: null,
          scrolling: !1
        };
        return _(pe), pe;
      });
    }
    function S(D) {
      const Y = [];
      return T(Y, D), Y;
    }
    function T(D, Y) {
      var pe;
      if (Y.length) {
        const Te = {
          id: $d++,
          prevY: 0,
          momentumPrevY: 0,
          touching: !1,
          translate: a.value,
          index: 0,
          duration: 0,
          momentumTime: 0,
          column: Y,
          scrollEl: null,
          scrolling: !1
        };
        D.push(Te), _(Te), T(D, (pe = Te.column[Te.index][g("children")]) != null ? pe : []);
      }
    }
    function $(D) {
      var Y;
      t.value.splice(t.value.indexOf(D) + 1), T(t.value, (Y = D.column[D.index][g("children")]) != null ? Y : []);
    }
    function P() {
      t.value = e.cascade ? S(e.columns) : h(e.columns), I();
    }
    function I() {
      t.value.forEach((Y, pe) => {
        const Te = Y.column.findIndex((x) => n.value[pe] === p(x));
        Y.index = Te === -1 ? 0 : Te, _(Y);
      });
      const { indexes: D } = U();
      y(D);
    }
    function O(D, Y) {
      Y.scrollEl = D;
    }
    function M(D) {
      w(e["onUpdate:show"], D);
    }
    function E(D) {
      const Y = a.value - D.column.length * o.value, pe = o.value + a.value;
      D.translate = pt(D.translate, Y, pe);
    }
    function V(D, Y) {
      const pe = Math.round((a.value - Y) / o.value);
      return Kp(pe, D.column);
    }
    function L(D) {
      return D.translate = a.value - D.index * o.value, D.translate;
    }
    function U() {
      const D = [], Y = [], pe = [];
      return t.value.forEach(({ column: Te, index: x }) => {
        const ve = Te[x];
        D.push(p(ve)), Y.push(x), pe.push(ve);
      }), {
        values: D,
        indexes: Y,
        options: pe
      };
    }
    function _(D, Y = 0) {
      L(D), D.duration = Y;
    }
    function X(D, Y, pe) {
      D.translate += Math.abs(Y / pe) / 3e-3 * (Y < 0 ? -1 : 1);
    }
    function j(D, Y) {
      u.value || (D.index = Y, _(D, yd));
    }
    function Z(D, Y) {
      Y.touching = !0, Y.translate = ui(Y.scrollEl), d(D);
    }
    function he(D, Y) {
      if (!Y.touching)
        return;
      c(D), Y.scrolling = !1, Y.duration = 0, Y.prevY = l.value, Y.translate += s.value, E(Y);
      const pe = performance.now();
      pe - Y.momentumTime > bd && (Y.momentumTime = pe, Y.momentumPrevY = Y.translate);
    }
    function H(D) {
      f(), D.touching = !1, D.prevY = 0;
      const Y = D.translate - D.momentumPrevY, pe = performance.now() - D.momentumTime, Te = Math.abs(Y) >= gk && pe <= bd, x = D.translate;
      Te && X(D, Y, pe), D.index = V(D, D.translate), _(D, Te ? bk : yd), D.scrolling = D.translate !== x, D.scrolling || J(D);
    }
    function oe(D) {
      D.scrolling = !1, J(D);
    }
    function W() {
      const { indexes: D } = U();
      return D.every((Y, pe) => Y === m[pe]);
    }
    function J(D) {
      const { cascade: Y, onChange: pe } = e;
      if (W())
        return;
      Y && $(D);
      const Te = t.value.some((de) => de.scrolling), x = t.value.some((de) => de.touching);
      if (Te || x)
        return;
      const { values: ve, indexes: $e, options: Fe } = U();
      y($e), w(pe, ve, $e, Fe), n.value = ve;
    }
    function te() {
      if (e.cascade) {
        const D = t.value.find((Y) => Y.scrolling);
        D && (D.index = V(D, ui(D.scrollEl)), D.scrolling = !1, _(D), $(D));
      } else
        t.value.forEach((D) => {
          D.index = V(D, ui(D.scrollEl)), _(D);
        });
    }
    function q() {
      te();
      const { values: D, indexes: Y, options: pe } = U();
      y(Y), w(e.onConfirm, D, Y, pe);
    }
    function se() {
      te();
      const { values: D, indexes: Y, options: pe } = U();
      y(Y), w(e.onCancel, D, Y, pe);
    }
    return {
      pack: Je,
      optionHeight: o,
      optionCount: r,
      scrollColumns: t,
      columnHeight: i,
      center: a,
      Transition: We,
      n: pk,
      classes: hk,
      setScrollEl: O,
      getOptionKey: g,
      getValue: p,
      handlePopupUpdateShow: M,
      handleTouchstart: Z,
      handleTouchmove: he,
      handleTouchend: H,
      handleTransitionend: oe,
      confirm: q,
      cancel: se,
      handleClick: j
    };
  }
});
cm.render = Ck;
var qo = cm;
let qt;
function fo(e) {
  return new Promise((n) => {
    fo.close();
    const t = Ye(e) ? { columns: e } : e, o = je(t);
    o.dynamic = !0, o.teleport = "body", qt = o;
    function r() {
      qt === o && (qt = null);
    }
    const { unmountInstance: a } = so(qo, o, {
      onConfirm: (i, l, s) => {
        w(o.onConfirm, i, l, s), n({
          state: "confirm",
          values: i,
          indexes: l,
          options: s
        }), o.show = !1, r();
      },
      onCancel: (i, l, s) => {
        w(o.onCancel, i, l, s), n({
          state: "cancel",
          values: i,
          indexes: l,
          options: s
        }), o.show = !1, r();
      },
      onClose: () => {
        w(o.onClose), n({
          state: "close"
        }), r();
      },
      onClosed: () => {
        w(o.onClosed), a(), r();
      },
      onRouteChange: () => {
        a(), r();
      },
      "onUpdate:show": (i) => {
        o.show = i;
      }
    });
    o.show = !0;
  });
}
fo.close = function() {
  if (qt == null)
    return;
  const e = qt;
  qt = null, qe().then(() => {
    e.show = !1;
  });
};
fo.Component = qo;
ie(qo);
ie(qo, fo);
ue(fo, dm);
const n6 = qo;
var bl = fo;
const fm = {
  mode: {
    type: String,
    default: "linear"
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: [String, Object],
  trackColor: String,
  ripple: Boolean,
  value: {
    type: [Number, String],
    default: 0
  },
  label: Boolean,
  labelClass: String,
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  },
  indeterminate: Boolean,
  type: {
    type: String,
    default: "primary"
  }
}, ot = 100, Xn = 20, wd = 2 * Math.PI * Xn, { name: Sk, n: kk, classes: Pk } = ne("progress"), Ok = ["viewBox"], Tk = { key: 0 }, Ek = ["id"], Ik = ["offset", "stop-color"], Bk = ["d", "stroke-width", "stroke-dasharray"], Dk = ["d", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function Mk(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      e.mode === "linear" ? (b(), k(
        "div",
        {
          key: 0,
          class: v(e.n("linear"))
        },
        [
          B(
            "div",
            {
              class: v(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
              style: F({ height: e.toSizeUnit(e.lineWidth), background: e.trackColor })
            },
            [
              e.indeterminate ? (b(), k(
                "div",
                {
                  key: 0,
                  class: v(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
                },
                [
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n(`linear--${e.type}`))),
                      style: F({ background: e.progressColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  ),
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n(`linear--${e.type}`))),
                      style: F({ background: e.progressColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )) : (b(), k(
                "div",
                {
                  key: 1,
                  class: v(e.classes(e.n("linear-certain"), e.n(`linear--${e.type}`), [e.ripple, e.n("linear-ripple")])),
                  style: F({ background: e.progressColor, width: e.linearProps.width })
                },
                null,
                6
                /* CLASS, STYLE */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          e.label ? (b(), k(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
            },
            [
              R(e.$slots, "default", {}, () => [
                Ie(
                  re(e.linearProps.roundValue),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.mode === "circle" ? (b(), k(
        "div",
        {
          key: 1,
          class: v(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
          style: F({ width: e.toSizeUnit(e.size), height: e.toSizeUnit(e.size) })
        },
        [
          (b(), k("svg", {
            class: v(e.n("circle-svg")),
            viewBox: e.circleProps.viewBox
          }, [
            e.isPlainObject(e.color) ? (b(), k("defs", Tk, [
              B("linearGradient", {
                id: e.id,
                x1: "100%",
                y1: "0%",
                x2: "0%",
                y2: "0%"
              }, [
                (b(!0), k(
                  Ve,
                  null,
                  Ke(e.linearGradientProgress, (t, o) => (b(), k("stop", {
                    key: o,
                    offset: t,
                    "stop-color": e.color[t]
                  }, null, 8, Ik))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 8, Ek)
            ])) : Q("v-if", !0),
            e.track ? (b(), k("path", {
              key: 1,
              class: v(e.n("circle-background")),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              style: F({
                stroke: e.trackColor
              })
            }, null, 14, Bk)) : Q("v-if", !0),
            B("path", {
              class: v(e.classes(e.n("circle-certain"), e.n(`circle--${e.type}`), [e.indeterminate, e.n("circle-overlay")])),
              d: e.circleProps.path,
              fill: "transparent",
              "stroke-width": e.circleProps.strokeWidth,
              "stroke-dasharray": e.CIRCUMFERENCE,
              "stroke-dashoffset": e.circleProps.strokeOffset,
              style: F({
                stroke: e.progressColor,
                transform: `rotateZ(${e.rotate}deg)`,
                transformOrigin: "50% 50%"
              })
            }, null, 14, Dk)
          ], 10, Ok)),
          e.label ? (b(), k(
            "div",
            {
              key: 0,
              class: v(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
            },
            [
              R(e.$slots, "default", {}, () => [
                Ie(
                  re(e.circleProps.roundValue),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        6
        /* CLASS, STYLE */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const vm = ee({
  name: Sk,
  props: fm,
  setup(e) {
    const n = Zd(), t = N(() => {
      const i = z(e.value), l = i > ot ? ot : i, s = i > ot ? ot : Math.round(i);
      return {
        width: `${l}%`,
        roundValue: `${s}%`
      };
    }), o = N(() => {
      const { size: i, lineWidth: l, value: s } = e, u = Xn / (1 - Ge(l) / Ge(i)) * 2, d = `0 0 ${u} ${u}`, c = z(s) > ot ? ot : Math.round(z(s)), f = `${(ot - c) / ot * wd}`, m = Ge(l) / Ge(i) * u, g = 0, p = -Xn, y = 0, h = -2 * Xn, S = `M ${u / 2} ${u / 2} m ${g} ${p} a ${Xn} ${Xn} 
        0 1 1 ${y} ${-h} a ${Xn} ${Xn} 0 1 1 ${-y} ${h}`;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: `${c}%`,
        path: S
      };
    }), r = N(() => Gt(e.color) ? `url(#${n.value})` : e.color), a = N(
      () => Object.keys(e.color).sort((i, l) => parseFloat(i) - parseFloat(l))
    );
    return {
      id: n,
      linearProps: t,
      CIRCUMFERENCE: wd,
      RADIUS: Xn,
      circleProps: o,
      progressColor: r,
      linearGradientProgress: a,
      n: kk,
      classes: Pk,
      toSizeUnit: we,
      isPlainObject: Gt
    };
  }
});
vm.render = Mk;
var La = vm;
ie(La);
ue(La, fm);
const t6 = La;
var yl = La;
const mm = {
  modelValue: Boolean,
  disabled: Boolean,
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: String,
  successBgColor: String,
  color: String,
  successColor: String,
  target: [String, Object],
  onRefresh: A(),
  "onUpdate:modelValue": A()
};
var Cd = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: Nk, n: Sd, classes: Vk } = ne("pull-refresh"), kd = 150;
function Ak(e, n) {
  const t = ae("var-icon");
  return b(), k(
    "div",
    {
      ref: "freshNode",
      class: v(e.n()),
      onTouchstart: n[0] || (n[0] = (...o) => e.handleTouchstart && e.handleTouchstart(...o)),
      onTouchend: n[1] || (n[1] = (...o) => e.handleTouchend && e.handleTouchend(...o)),
      onTouchcancel: n[2] || (n[2] = (...o) => e.handleTouchend && e.handleTouchend(...o))
    },
    [
      B(
        "div",
        {
          ref: "controlNode",
          class: v(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
          style: F(e.controlStyle)
        },
        [
          G(t, {
            name: e.iconName,
            transition: e.ICON_TRANSITION,
            class: v(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
            "var-pull-refresh-cover": ""
          }, null, 8, ["name", "transition", "class"])
        ],
        6
        /* CLASS, STYLE */
      ),
      R(e.$slots, "default")
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const pm = ee({
  name: Nk,
  components: { VarIcon: He },
  props: mm,
  setup(e) {
    const n = C(0), t = C(null), o = C(null), r = C(0), a = C("-125%"), i = C("arrow-down"), l = C("default"), s = C(!1), u = N(() => Math.abs(2 * n.value)), d = N(() => l.value === "success"), c = N(
      () => l.value !== "loading" && l.value !== "success" && !e.disabled
    ), f = N(() => ({
      transform: `translate3d(0px, ${un(a.value) ? a.value : `${a.value}px`}, 0px) translate(-50%, 0)`,
      transition: s.value ? `transform ${e.animationDuration}ms` : void 0,
      background: d.value ? e.successBgColor : e.bgColor,
      color: d.value ? e.successColor : e.color
    })), { startTouch: m, moveTouch: g, endTouch: p, isReachTop: y } = lo();
    let h, S;
    ce(
      () => e.modelValue,
      (V) => {
        V === !1 && (s.value = !0, l.value = "success", i.value = "checkbox-marked-circle", setTimeout(() => {
          a.value = n.value, E();
        }, z(e.successDuration)));
      }
    ), rn(M), ht(t, "touchmove", I);
    function T(V) {
      return Cd(this, null, function* () {
        if (i.value !== V)
          return i.value = V, new Promise((L) => {
            window.setTimeout(L, kd);
          });
      });
    }
    function $(V) {
      ("classList" in h ? h : document.body).classList[V](`${Sd()}--lock`);
    }
    function P(V) {
      if (m(V), n.value === 0) {
        const { width: L } = en(o.value);
        n.value = -(L + L * 0.25);
      }
      S = bt(V.target);
    }
    function I(V) {
      if (g(V), !c.value || !S || S !== h && Dt(S) > 0 || Dt(h) > 0)
        return;
      y(h) && Rn(V), l.value !== "pulling" && (l.value = "pulling", r.value = V.touches[0].clientY), y(h) && bn(a.value) && a.value > n.value && $("add");
      const U = (V.touches[0].clientY - r.value) / 2 + n.value;
      a.value = U >= u.value ? u.value : U, T(a.value >= u.value * 0.2 ? "refresh" : "arrow-down");
    }
    function O() {
      return Cd(this, null, function* () {
        p(), c.value && (s.value = !0, z(a.value) >= u.value * 0.2 ? (yield T("refresh"), l.value = "loading", a.value = u.value * 0.3, w(e["onUpdate:modelValue"], !0), qe(() => {
          w(e.onRefresh);
        }), $("remove")) : (l.value = "loosing", i.value = "arrow-down", a.value = n.value, setTimeout(() => {
          s.value = !1, $("remove");
        }, z(e.animationDuration))), S = null);
      });
    }
    function M() {
      h = e.target ? rc(e.target, "PullRefresh") : bt(t.value);
    }
    function E() {
      setTimeout(() => {
        l.value = "default", i.value = "arrow-down", s.value = !1;
      }, z(e.animationDuration));
    }
    return {
      ICON_TRANSITION: kd,
      refreshStatus: l,
      freshNode: t,
      controlNode: o,
      iconName: i,
      controlStyle: f,
      isSuccess: d,
      n: Sd,
      classes: Vk,
      handleTouchstart: P,
      handleTouchmove: I,
      handleTouchend: O
    };
  }
});
pm.render = Ak;
var Ra = pm;
ie(Ra);
ue(Ra, mm);
const o6 = Ra;
var $l = Ra;
const hm = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: Boolean,
  readonly: Boolean,
  checkedColor: String,
  uncheckedColor: String,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, gm = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function zk() {
  const { bindChildren: e, childProviders: n, length: t } = ln(
    gm
  );
  return {
    length: t,
    radios: n,
    bindRadios: e
  };
}
function Lk() {
  const { bindParent: e, parentProvider: n, index: t } = an(gm);
  return {
    index: t,
    radioGroup: n,
    bindRadioGroup: e
  };
}
const { name: Rk, n: Uk, classes: Hk } = ne("radio");
function Fk(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = ze("ripple"), i = ze("hover");
  return b(), k(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      B(
        "div",
        Ae({
          class: e.n(),
          onClick: n[0] || (n[0] = (...l) => e.handleClick && e.handleClick(...l))
        }, e.$attrs),
        [
          De((b(), k(
            "div",
            {
              class: v(
                e.classes(
                  e.n("action"),
                  [e.checked, e.n("--checked"), e.n("--unchecked")],
                  [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              ),
              style: F({ color: e.checked ? e.checkedColor : e.uncheckedColor })
            },
            [
              e.checked ? R(e.$slots, "checked-icon", { key: 0 }, () => [
                G(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  "var-radio-cover": "",
                  name: "radio-marked",
                  size: e.iconSize
                }, null, 8, ["class", "size"])
              ]) : R(e.$slots, "unchecked-icon", { key: 1 }, () => [
                G(t, {
                  class: v(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
                  "var-radio-cover": "",
                  name: "radio-blank",
                  size: e.iconSize
                }, null, 8, ["class", "size"])
              ]),
              G(o, {
                hovering: !e.disabled && !e.formDisabled && e.hovering
              }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
            [i, e.handleHovering, "desktop"]
          ]),
          B(
            "div",
            {
              class: v(
                e.classes(
                  e.n("text"),
                  [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")],
                  [e.formDisabled || e.disabled, e.n("--disabled")]
                )
              )
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const bm = ee({
  name: Rk,
  directives: { Ripple: Qe, Hover: On },
  components: {
    VarIcon: He,
    VarFormDetails: $n,
    VarHoverOverlay: Bn
  },
  inheritAttrs: !1,
  props: hm,
  setup(e) {
    const n = Qn(e, "modelValue"), t = N(() => n.value === e.checkedValue), o = C(!1), { radioGroup: r, bindRadioGroup: a } = Lk(), { hovering: i, handleHovering: l } = Fn(), { form: s, bindForm: u } = Mn(), {
      errorMessage: d,
      validateWithTrigger: c,
      validate: f,
      // expose
      resetValidation: m
    } = Dn(), g = {
      sync: S,
      validate: $,
      resetValidation: m,
      reset: T
    };
    w(a, g), w(u, g);
    function p(I) {
      qe(() => {
        const { validateTrigger: O, rules: M, modelValue: E } = e;
        c(O, I, M, E);
      });
    }
    function y(I) {
      const { checkedValue: O, onChange: M } = e;
      r && n.value === O || (n.value = I, w(M, n.value), r == null || r.onToggle(O), p("onChange"));
    }
    function h(I) {
      const { disabled: O, readonly: M, uncheckedValue: E, checkedValue: V, onClick: L } = e;
      s != null && s.disabled.value || O || (w(L, I), !(s != null && s.readonly.value || M) && (o.value = !0, y(t.value ? E : V)));
    }
    function S(I) {
      const { checkedValue: O, uncheckedValue: M } = e;
      n.value = I === O ? O : M;
    }
    function T() {
      n.value = e.uncheckedValue, m();
    }
    function $() {
      return f(e.rules, e.modelValue);
    }
    function P(I) {
      const { uncheckedValue: O, checkedValue: M } = e;
      ![O, M].includes(I) && (I = t.value ? O : M), y(I);
    }
    return {
      withAnimation: o,
      checked: t,
      errorMessage: d,
      radioGroupErrorMessage: r == null ? void 0 : r.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: i,
      handleHovering: l,
      n: Uk,
      classes: Hk,
      handleClick: h,
      toggle: P,
      reset: T,
      validate: $,
      resetValidation: m
    };
  }
});
bm.render = Fk;
var Ua = bm;
ie(Ua);
ue(Ua, hm);
const r6 = Ua;
var wl = Ua;
const ym = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: Yk, n: jk, classes: Wk } = ne("radio-group");
function qk(e, n) {
  const t = ae("var-form-details");
  return b(), k(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n(), e.n(`--${e.direction}`)))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      ),
      G(t, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const $m = ee({
  name: Yk,
  components: { VarFormDetails: $n },
  props: ym,
  setup(e) {
    const { length: n, radios: t, bindRadios: o } = zk(), { bindForm: r } = Mn(), {
      errorMessage: a,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = Dn(), u = N(() => a.value), d = {
      onToggle: m,
      validate: g,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    ce(() => e.modelValue, f), ce(() => n.value, f), w(r, d), o(d);
    function c(y) {
      qe(() => {
        const { validateTrigger: h, rules: S, modelValue: T } = e;
        i(h, y, S, T);
      });
    }
    function f() {
      return t.forEach(({ sync: y }) => y(e.modelValue));
    }
    function m(y) {
      w(e["onUpdate:modelValue"], y), w(e.onChange, y), c("onChange");
    }
    function g() {
      return l(e.rules, e.modelValue);
    }
    function p() {
      w(e["onUpdate:modelValue"], void 0), s();
    }
    return {
      errorMessage: a,
      n: jk,
      classes: Wk,
      reset: p,
      validate: g,
      resetValidation: s
    };
  }
});
$m.render = qk;
var Ha = $m;
ie(Ha);
ue(Ha, ym);
const a6 = Ha;
var Cl = Ha;
const wm = {
  modelValue: {
    type: Number,
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: String,
  icon: {
    type: String,
    default: "star"
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  namespace: Be(Xe, "namespace"),
  emptyIconNamespace: Be(Xe, "namespace"),
  halfIconNamespace: Be(Xe, "namespace"),
  emptyColor: String,
  size: [String, Number],
  gap: [String, Number],
  half: Boolean,
  disabled: Boolean,
  disabledColor: String,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  clearable: Boolean,
  rules: Array,
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: Gk, n: po } = ne("rate"), Xk = ["onClick"];
function Kk(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = ze("ripple"), i = ze("hover");
  return b(), k(
    "div",
    {
      class: v(e.n("wrap"))
    },
    [
      B(
        "div",
        {
          class: v(e.n())
        },
        [
          (b(!0), k(
            Ve,
            null,
            Ke(e.toNumber(e.count), (l) => De((b(), k("div", {
              key: l,
              style: F(e.getStyle(l)),
              class: v(e.getClass(l)),
              onClick: (s) => e.handleClick(l, s)
            }, [
              G(t, {
                class: v(e.n("content-icon")),
                "var-rate-cover": "",
                transition: 0,
                namespace: e.getCurrentState(l).namespace,
                name: e.getCurrentState(l).name,
                style: F({ fontSize: e.toSizeUnit(e.size) })
              }, null, 8, ["class", "namespace", "name", "style"]),
              G(o, {
                hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
              }, null, 8, ["hovering"])
            ], 14, Xk)), [
              [a, { disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple }],
              [i, e.createHoverHandler(l), "desktop"]
            ])),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      G(r, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Cm = ee({
  name: Gk,
  components: {
    VarIcon: He,
    VarFormDetails: $n,
    VarHoverOverlay: Bn
  },
  directives: { Ripple: Qe, Hover: On },
  props: wm,
  setup(e) {
    const n = C(-1), { form: t, bindForm: o } = Mn(), { errorMessage: r, validateWithTrigger: a, validate: i, resetValidation: l } = Dn(), { hovering: s } = Fn();
    let u = z(e.modelValue);
    w(o, {
      reset: T,
      validate: p,
      resetValidation: l
    });
    function c($) {
      const { count: P, gap: I } = e;
      return {
        color: m($).color,
        marginRight: $ !== z(P) ? we(I) : 0
      };
    }
    function f($) {
      const { name: P, color: I } = m($);
      return {
        [po("content")]: !0,
        [po("--disabled")]: (t == null ? void 0 : t.disabled.value) || e.disabled,
        [po("--error")]: r.value,
        [po("--primary")]: P !== e.emptyIcon && !I
      };
    }
    function m($) {
      const {
        modelValue: P,
        disabled: I,
        disabledColor: O,
        color: M,
        half: E,
        emptyColor: V,
        icon: L,
        halfIcon: U,
        emptyIcon: _,
        namespace: X,
        halfIconNamespace: j,
        emptyIconNamespace: Z
      } = e;
      let he = M;
      return (I || t != null && t.disabled.value) && (he = O), $ <= P ? { color: he, name: L, namespace: X } : E && $ <= P + 0.5 ? { color: he, name: U, namespace: j } : {
        color: I || t != null && t.disabled.value ? O : V,
        name: _,
        namespace: Z
      };
    }
    function g($, P) {
      const { half: I, clearable: O } = e, { offsetWidth: M } = P.target;
      I && P.offsetX <= Math.floor(M / 2) && ($ -= 0.5), u === $ && O && ($ = 0), u !== $ && (w(e["onUpdate:modelValue"], $), w(e.onChange, $)), u = $;
    }
    function p() {
      return i(e.rules, e.modelValue);
    }
    function y() {
      return qe(() => a(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function h($, P) {
      const { readonly: I, disabled: O } = e;
      I || O || t != null && t.disabled.value || t != null && t.readonly.value || (g($, P), y());
    }
    function S($) {
      return (P) => {
        n.value = $, s.value = P;
      };
    }
    function T() {
      w(e["onUpdate:modelValue"], 0), l();
    }
    return {
      errorMessage: r,
      formDisabled: t == null ? void 0 : t.disabled,
      formReadonly: t == null ? void 0 : t.readonly,
      hovering: s,
      currentHoveringValue: n,
      getStyle: c,
      getClass: f,
      getCurrentState: m,
      handleClick: h,
      createHoverHandler: S,
      reset: T,
      validate: p,
      resetValidation: l,
      toSizeUnit: we,
      toNumber: z,
      n: po
    };
  }
});
Cm.render = Kk;
var Fa = Cm;
ie(Fa);
ue(Fa, wm);
const i6 = Fa;
var Sl = Fa;
const Zk = (e) => (Ct(""), e = e(), St(), e), Jk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Qk = /* @__PURE__ */ Zk(() => /* @__PURE__ */ B(
  "path",
  { d: "M11,9H13V7H11M11,20H13V11H11V20Z" },
  null,
  -1
  /* HOISTED */
)), _k = [
  Qk
];
function xk(e, n) {
  return b(), k("svg", Jk, _k);
}
const Sm = ee({});
Sm.render = xk;
var eP = Sm;
const nP = (e) => (Ct(""), e = e(), St(), e), tP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, oP = /* @__PURE__ */ nP(() => /* @__PURE__ */ B(
  "path",
  { d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" },
  null,
  -1
  /* HOISTED */
)), rP = [
  oP
];
function aP(e, n) {
  return b(), k("svg", tP, rP);
}
const km = ee({});
km.render = aP;
var iP = km;
const lP = (e) => (Ct(""), e = e(), St(), e), sP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, uP = /* @__PURE__ */ lP(() => /* @__PURE__ */ B(
  "path",
  { d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11" },
  null,
  -1
  /* HOISTED */
)), dP = [
  uP
];
function cP(e, n) {
  return b(), k("svg", sP, dP);
}
const Pm = ee({});
Pm.render = cP;
var fP = Pm;
const { n: vP, classes: mP } = ne("result");
function pP(e, n) {
  return b(), k(
    Ve,
    null,
    [
      B(
        "span",
        {
          class: v(e.n("success-cover-left"))
        },
        null,
        2
        /* CLASS */
      ),
      B(
        "span",
        {
          class: v(e.classes(e.n("success-line"), e.n("success-line-tip"))),
          style: F({
            animationDuration: e.animation ? "760ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      B(
        "span",
        {
          class: v(e.classes(e.n("success-line"), e.n("success-line-long"))),
          style: F({
            animationDuration: e.animation ? "770ms" : "0ms",
            borderRadius: `calc(${e.borderSize} * 0.625)`
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      B(
        "span",
        {
          ref: "circle",
          class: v(e.n("success-circle")),
          style: F({ left: `-${e.borderSize}`, top: `-${e.borderSize}`, borderWidth: e.borderSize })
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      B(
        "span",
        {
          class: v(e.n("success-line-fix"))
        },
        null,
        2
        /* CLASS */
      ),
      B(
        "span",
        {
          class: v(e.n("success-cover-right")),
          style: F({
            animationDuration: e.animation ? "4250ms" : "0ms"
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Om = ee({
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: vP,
      classes: mP,
      toNumber: z
    };
  }
});
Om.render = pP;
var hP = Om;
const gP = (e) => (Ct(""), e = e(), St(), e), bP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, yP = /* @__PURE__ */ gP(() => /* @__PURE__ */ B(
  "path",
  { d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z" },
  null,
  -1
  /* HOISTED */
)), $P = [
  yP
];
function wP(e, n) {
  return b(), k("svg", bP, $P);
}
const Tm = ee({});
Tm.render = wP;
var CP = Tm;
const SP = (e) => (Ct(""), e = e(), St(), e), kP = { viewBox: "-4 -4 32 32" }, PP = /* @__PURE__ */ SP(() => /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), OP = [
  PP
];
function TP(e, n) {
  return b(), k("svg", kP, OP);
}
const Em = ee({});
Em.render = TP;
var EP = Em;
const Im = {
  imageSize: [String, Number],
  type: {
    type: String,
    default: "success"
  },
  title: String,
  description: String,
  animation: {
    type: Boolean,
    default: !0
  }
}, { name: IP, n: BP, classes: DP } = ne("result");
function MP(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      R(e.$slots, "image", {}, () => [
        e.type ? (b(), k(
          "div",
          {
            key: 0,
            class: v(e.n("image-container"))
          },
          [
            B(
              "div",
              {
                class: v(e.classes(e.n("image"), e.n(e.type))),
                style: F({
                  width: e.circleSize,
                  height: e.circleSize,
                  borderWidth: e.borderSize
                })
              },
              [
                (b(), Ce(ro(e.type), {
                  "border-size": e.borderSize,
                  animation: e.animation
                }, null, 8, ["border-size", "animation"]))
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        )) : Q("v-if", !0)
      ]),
      R(e.$slots, "title", {}, () => [
        e.title ? (b(), k(
          "div",
          {
            key: 0,
            class: v(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)
      ]),
      R(e.$slots, "description", {}, () => [
        e.description ? (b(), k(
          "div",
          {
            key: 0,
            class: v(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)
      ]),
      e.$slots.footer ? (b(), k(
        "div",
        {
          key: 0,
          class: v(e.n("footer"))
        },
        [
          R(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const Bm = ee({
  name: IP,
  components: {
    Info: eP,
    Success: hP,
    Warning: fP,
    Error: iP,
    Question: CP,
    Empty: EP
  },
  props: Im,
  setup(e) {
    const n = N(() => {
      const { imageSize: o } = e;
      return `calc(${o ? we(o) : "var(--result-image-size)"} * 0.9)`;
    }), t = N(() => {
      const { imageSize: o } = e;
      return `calc(${o ? we(e.imageSize) : "var(--result-image-size)"} * 0.05)`;
    });
    return {
      circleSize: n,
      borderSize: t,
      toSizeUnit: we,
      n: BP,
      classes: DP,
      toNumber: z,
      toPxNum: Ge
    };
  }
});
Bm.render = MP;
var Ya = Bm;
ie(Ya);
ue(Ya, Im);
const l6 = Ya;
var kl = Ya;
const Dm = {
  gutter: {
    type: [String, Number, Array],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: {
    type: String,
    default: "flex-start"
  },
  onClick: A()
}, { name: NP, n: VP, classes: AP } = ne("row");
function zP(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"))),
      style: F({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: `${-e.average[0]}px ${-e.average[1]}px`
      }),
      onClick: n[0] || (n[0] = (...t) => e.handleClick && e.handleClick(...t))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Mm = ee({
  name: NP,
  props: Dm,
  setup(e) {
    const n = N(
      () => Ye(e.gutter) ? e.gutter.map((s) => Ge(s) / 2) : [0, Ge(e.gutter) / 2]
    ), { cols: t, bindCols: o, length: r } = Yb(), a = { computePadding: i };
    ce(() => r.value, i), ce(() => e.gutter, i), o(a);
    function i() {
      t.forEach((s) => {
        const [u, d] = n.value;
        s.setPadding({ left: d, right: d, top: u, bottom: u });
      });
    }
    function l(s) {
      w(e.onClick, s);
    }
    return {
      average: n,
      n: VP,
      classes: AP,
      handleClick: l,
      padStartFlex: pr
    };
  }
});
Mm.render = zP;
var ja = Mm;
ie(ja);
ue(ja, Dm);
const s6 = ja;
var Pl = ja, LP = Object.defineProperty, Pd = Object.getOwnPropertySymbols, RP = Object.prototype.hasOwnProperty, UP = Object.prototype.propertyIsEnumerable, Od = (e, n, t) => n in e ? LP(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, HP = (e, n) => {
  for (var t in n || (n = {}))
    RP.call(n, t) && Od(e, t, n[t]);
  if (Pd)
    for (var t of Pd(n))
      UP.call(n, t) && Od(e, t, n[t]);
  return e;
};
const Nm = HP({
  modelValue: {
    default: void 0
  },
  multiple: Boolean,
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: Boolean,
  readonly: Boolean,
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: Array,
  onFocus: A(),
  onBlur: A(),
  onClose: A(),
  onChange: A(),
  onClear: A(),
  "onUpdate:modelValue": A()
}, Be(ya, [
  "size",
  "variant",
  "placeholder",
  "line",
  "hint",
  "textColor",
  "focusColor",
  "blurColor",
  "disabled",
  "clearable",
  "onClick"
])), { name: FP, n: YP, classes: jP } = ne("select"), WP = { key: 1 };
function qP(e, n) {
  const t = ae("var-chip"), o = ae("var-icon"), r = ae("var-field-decorator"), a = ae("var-menu"), i = ae("var-form-details");
  return b(), k(
    "div",
    {
      class: v(e.n()),
      onClick: n[3] || (n[3] = (...l) => e.handleFocus && e.handleFocus(...l))
    },
    [
      G(a, {
        "var-select-cover": "",
        "same-width": "",
        "close-on-click-reference": "",
        show: e.showMenu,
        "onUpdate:show": n[1] || (n[1] = (l) => e.showMenu = l),
        class: v(e.n("menu")),
        "popover-class": e.variant === "standard" && e.hint ? e.n("--standard-menu-margin") : void 0,
        "offset-y": e.offsetY,
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
        placement: e.placement,
        "default-style": !1,
        onClickOutside: e.handleBlur
      }, {
        menu: me(() => [
          B(
            "div",
            {
              ref: "menuEl",
              class: v(e.classes(e.n("scroller"), e.n("$-elevation--3")))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ]),
        default: me(() => [
          G(
            r,
            ft(Ro({
              value: e.modelValue,
              size: e.size,
              variant: e.variant,
              placeholder: e.placeholder,
              line: e.line,
              hint: e.hint,
              textColor: e.textColor,
              focusColor: e.focusColor,
              blurColor: e.blurColor,
              isFocus: e.isFocus,
              errorMessage: e.errorMessage,
              formDisabled: e.formDisabled,
              disabled: e.disabled,
              clearable: e.clearable,
              cursor: e.cursor,
              onClick: e.handleClick,
              onClear: e.handleClear
            })),
            fr({
              "append-icon": me(() => [
                R(e.$slots, "append-icon")
              ]),
              default: me(() => [
                B(
                  "div",
                  {
                    class: v(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                    style: F({
                      textAlign: e.textAlign,
                      color: e.textColor
                    })
                  },
                  [
                    B(
                      "div",
                      {
                        class: v(e.n("label"))
                      },
                      [
                        e.isEmptyModelValue ? Q("v-if", !0) : R(e.$slots, "selected", { key: 0 }, () => [
                          e.multiple ? (b(), k(
                            Ve,
                            { key: 0 },
                            [
                              e.chip ? (b(), k(
                                "div",
                                {
                                  key: 0,
                                  class: v(e.n("chips"))
                                },
                                [
                                  (b(!0), k(
                                    Ve,
                                    null,
                                    Ke(e.labels, (l) => (b(), Ce(t, {
                                      class: v(e.n("chip")),
                                      "var-select-cover": "",
                                      closeable: "",
                                      size: "small",
                                      type: e.errorMessage ? "danger" : void 0,
                                      key: l,
                                      onClick: n[0] || (n[0] = yn(() => {
                                      }, ["stop"])),
                                      onClose: () => e.handleClose(l)
                                    }, {
                                      default: me(() => [
                                        Ie(
                                          re(l),
                                          1
                                          /* TEXT */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    }, 1032, ["class", "type", "onClose"]))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ],
                                2
                                /* CLASS */
                              )) : (b(), k(
                                "div",
                                {
                                  key: 1,
                                  class: v(e.n("values"))
                                },
                                re(e.labels.join(e.separator)),
                                3
                                /* TEXT, CLASS */
                              ))
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (b(), k(
                            "span",
                            WP,
                            re(e.label),
                            1
                            /* TEXT */
                          ))
                        ])
                      ],
                      2
                      /* CLASS */
                    ),
                    e.enableCustomPlaceholder ? (b(), k(
                      "span",
                      {
                        key: 0,
                        class: v(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                        style: F({
                          color: e.placeholderColor
                        })
                      },
                      re(e.placeholder),
                      7
                      /* TEXT, CLASS, STYLE */
                    )) : Q("v-if", !0),
                    R(e.$slots, "arrow-icon", { focus: e.showMenu }, () => [
                      G(o, {
                        class: v(e.classes(e.n("arrow"), [e.showMenu, e.n("--arrow-rotate")])),
                        "var-select-cover": "",
                        name: "menu-down",
                        transition: 300
                      }, null, 8, ["class"])
                    ])
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, [
              e.$slots["prepend-icon"] ? {
                name: "prepend-icon",
                fn: me(() => [
                  R(e.$slots, "prepend-icon")
                ]),
                key: "0"
              } : void 0
            ]),
            1040
            /* FULL_PROPS, DYNAMIC_SLOTS */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]),
      G(i, {
        "error-message": e.errorMessage,
        onClick: n[2] || (n[2] = yn(() => {
        }, ["stop"]))
      }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  );
}
const Vm = ee({
  name: FP,
  components: {
    VarIcon: He,
    VarMenu: eo,
    VarChip: yr,
    VarFieldDecorator: Bo,
    VarFormDetails: $n
  },
  props: Nm,
  setup(e) {
    const n = C(!1), t = C(!1), o = N(() => e.multiple), r = N(() => e.focusColor), a = N(() => Un(e.modelValue)), i = N(() => e.disabled || e.readonly ? "" : "pointer"), l = C(0), { bindForm: s, form: u } = Mn(), { length: d, options: c, bindOptions: f } = KS(), { label: m, labels: g, computeLabel: p, getSelectedValue: y } = em({
      modelValue: () => e.modelValue,
      multiple: () => e.multiple,
      optionProviders: () => c,
      optionProvidersLength: () => d.value
    }), {
      errorMessage: h,
      validateWithTrigger: S,
      validate: T,
      // expose
      resetValidation: $
    } = Dn(), P = C(null), I = N(() => e.variant === "outlined" ? "bottom" : "cover-top"), O = N(() => {
      const { hint: J, blurColor: te, focusColor: q } = e;
      if (!J)
        return h.value ? "var(--field-decorator-error-color)" : n.value ? q || "var(--field-decorator-focus-color)" : te || "var(--field-decorator-placeholder-color, var(--field-decorator-blur-color))";
    }), M = N(() => !e.hint && Un(e.modelValue)), E = {
      multiple: o,
      focusColor: r,
      computeLabel: p,
      onSelect: _,
      reset: W,
      validate: oe,
      resetValidation: $
    };
    ce(
      () => e.multiple,
      () => {
        const { multiple: J, modelValue: te } = e;
        J && !Ye(te) && Pn("Select", "The modelValue must be an array when multiple is true");
      }
    ), f(E), w(s, E);
    function V(J) {
      qe(() => {
        const { validateTrigger: te, rules: q, modelValue: se } = e;
        S(te, J, q, se);
      });
    }
    function L() {
      const { disabled: J, readonly: te, onFocus: q } = e;
      u != null && u.disabled.value || u != null && u.readonly.value || J || te || (l.value = Ge(e.offsetY), n.value = !0, w(q), V("onFocus"));
    }
    function U() {
      const { disabled: J, readonly: te, onBlur: q } = e;
      u != null && u.disabled.value || u != null && u.readonly.value || J || te || (H(), w(q), V("onBlur"));
    }
    function _(J) {
      const { disabled: te, readonly: q, multiple: se, onChange: D } = e;
      if (u != null && u.disabled.value || u != null && u.readonly.value || te || q)
        return;
      const Y = y(J);
      w(e["onUpdate:modelValue"], Y), w(D, Y), V("onChange"), se || H();
    }
    function X() {
      const { disabled: J, readonly: te, multiple: q, clearable: se, onClear: D } = e;
      if (u != null && u.disabled.value || u != null && u.readonly.value || J || te || !se)
        return;
      const Y = q ? [] : void 0;
      w(e["onUpdate:modelValue"], Y), w(D, Y), V("onClear");
    }
    function j(J) {
      const { disabled: te, onClick: q } = e;
      u != null && u.disabled.value || te || (w(q, J), V("onClick"));
    }
    function Z(J) {
      const { disabled: te, readonly: q, modelValue: se, onClose: D } = e;
      if (u != null && u.disabled.value || u != null && u.readonly.value || te || q)
        return;
      const Y = c.find(({ label: Te }) => Te.value === J), pe = se.filter(
        (Te) => {
          var x;
          return Te !== ((x = Y.value.value) != null ? x : Y.label.value);
        }
      );
      w(e["onUpdate:modelValue"], pe), w(D, pe), V("onClose");
    }
    function he() {
      l.value = Ge(e.offsetY), n.value = !0, t.value = !0;
    }
    function H() {
      n.value = !1, t.value = !1;
    }
    function oe() {
      return T(e.rules, e.modelValue);
    }
    function W() {
      w(e["onUpdate:modelValue"], e.multiple ? [] : void 0), $();
    }
    return {
      offsetY: l,
      isFocus: n,
      showMenu: t,
      errorMessage: h,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      label: m,
      labels: g,
      isEmptyModelValue: a,
      menuEl: P,
      placement: I,
      cursor: i,
      placeholderColor: O,
      enableCustomPlaceholder: M,
      n: YP,
      classes: jP,
      handleFocus: L,
      handleBlur: U,
      handleClear: X,
      handleClick: j,
      handleClose: Z,
      reset: W,
      validate: oe,
      resetValidation: $,
      focus: he,
      blur: H
    };
  }
});
Vm.render = qP;
var Wa = Vm;
ie(Wa);
ue(Wa, Nm);
const u6 = Wa;
var Ol = Wa;
const Am = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: Boolean,
  card: Boolean,
  avatar: Boolean,
  fullscreen: Boolean,
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: [Number, String],
  cardHeight: [Number, String],
  avatarSize: [Number, String],
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, { name: GP, n: XP, classes: KP } = ne("skeleton");
function ZP(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n("$--box"), e.n()))
    },
    [
      e.loading ? Q("v-if", !0) : (b(), k(
        "div",
        {
          key: 0,
          class: v(e.n("data"))
        },
        [
          R(e.$slots, "default")
        ],
        2
        /* CLASS */
      )),
      e.loading && !e.fullscreen ? (b(), k(
        "div",
        {
          key: 1,
          class: v(e.n("content"))
        },
        [
          e.card ? (b(), k(
            "div",
            {
              key: 0,
              class: v(e.n("card")),
              style: F({ height: e.toSizeUnit(e.cardHeight) })
            },
            [
              B(
                "div",
                {
                  class: v(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )
            ],
            6
            /* CLASS, STYLE */
          )) : Q("v-if", !0),
          e.avatar || e.title || e.toNumber(e.rows) > 0 ? (b(), k(
            "div",
            {
              key: 1,
              class: v(e.n("article"))
            },
            [
              e.avatar ? (b(), k(
                "div",
                {
                  key: 0,
                  class: v(e.n("avatar")),
                  style: F({
                    width: e.toSizeUnit(e.avatarSize),
                    height: e.toSizeUnit(e.avatarSize)
                  })
                },
                [
                  B(
                    "div",
                    {
                      class: v(e.n("--animation"))
                    },
                    null,
                    2
                    /* CLASS */
                  )
                ],
                6
                /* CLASS, STYLE */
              )) : Q("v-if", !0),
              e.title || e.toNumber(e.rows) > 0 ? (b(), k(
                "div",
                {
                  key: 1,
                  class: v(e.n("section"))
                },
                [
                  e.title ? (b(), k(
                    "div",
                    {
                      key: 0,
                      class: v(e.n("title")),
                      style: F({ width: e.toSizeUnit(e.titleWidth) })
                    },
                    [
                      B(
                        "div",
                        {
                          class: v(e.n("--animation"))
                        },
                        null,
                        2
                        /* CLASS */
                      )
                    ],
                    6
                    /* CLASS, STYLE */
                  )) : Q("v-if", !0),
                  (b(!0), k(
                    Ve,
                    null,
                    Ke(e.toNumber(e.rows), (t, o) => (b(), k(
                      "div",
                      {
                        class: v(e.n("row")),
                        key: t,
                        style: F({ width: e.toSizeUnit(e.rowsWidth[o]) })
                      },
                      [
                        B(
                          "div",
                          {
                            class: v(e.n("--animation"))
                          },
                          null,
                          2
                          /* CLASS */
                        )
                      ],
                      6
                      /* CLASS, STYLE */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ],
                2
                /* CLASS */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          )) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0),
      e.loading && e.fullscreen ? (b(), k(
        "div",
        {
          key: 2,
          class: v(e.n("fullscreen")),
          style: F({ zIndex: e.toNumber(e.fullscreenZIndex) })
        },
        [
          B(
            "div",
            {
              class: v(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const zm = ee({
  name: GP,
  props: Am,
  setup: () => ({
    n: XP,
    classes: KP,
    toSizeUnit: we,
    toNumber: z
  })
});
zm.render = ZP;
var qa = zm;
ie(qa);
ue(qa, Am);
const d6 = qa;
var Tl = qa, Ze = /* @__PURE__ */ ((e) => (e.First = "1", e.Second = "2", e))(Ze || {});
const Lm = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  labelVisible: {
    type: String,
    default: "normal"
  },
  activeColor: String,
  trackColor: String,
  thumbColor: String,
  labelColor: String,
  labelTextColor: String,
  trackHeight: [String, Number],
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  rules: Array,
  onChange: A(),
  onStart: A(),
  onEnd: A(),
  "onUpdate:modelValue": A()
}, { name: JP, n: Td, classes: QP } = ne("slider"), _P = ["onTouchstart"];
function xP(e, n) {
  const t = ae("var-hover-overlay"), o = ae("var-form-details"), r = ze("hover");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n(`${e.direction}-block`), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(`${e.direction}--error`)])),
          ref: "sliderEl",
          onClick: n[0] || (n[0] = (...a) => e.click && e.click(...a))
        },
        [
          B(
            "div",
            {
              class: v(e.n(`${e.direction}-track`))
            },
            [
              B(
                "div",
                {
                  class: v(e.n(`${e.direction}-track-background`)),
                  style: F({
                    background: e.trackColor,
                    height: e.isVertical ? "100%" : e.multiplySizeUnit(e.trackHeight),
                    width: e.isVertical ? e.multiplySizeUnit(e.trackHeight) : "100%"
                  })
                },
                null,
                6
                /* CLASS, STYLE */
              ),
              B(
                "div",
                {
                  class: v(e.n(`${e.direction}-track-fill`)),
                  style: F(e.getFillStyle)
                },
                null,
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          ),
          (b(!0), k(
            Ve,
            null,
            Ke(e.thumbList, (a) => (b(), k("div", {
              class: v(e.n(`${e.direction}-thumb`)),
              key: a.enumValue,
              style: F(e.thumbStyle(a)),
              onTouchstart: yn((i) => e.start(i, a.enumValue), ["stop"])
            }, [
              R(e.$slots, "button", {
                currentValue: a.text
              }, () => [
                De(B(
                  "div",
                  {
                    class: v(e.n(`${e.direction}-thumb-block`)),
                    style: F({
                      background: e.thumbColor
                    })
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                ), [
                  [r, (i) => e.hover(i, a), "desktop"]
                ]),
                B(
                  "div",
                  {
                    class: v(
                      e.classes(e.n(`${e.direction}-thumb-ripple`), [
                        e.thumbsProps[a.enumValue].active,
                        e.n(`${e.direction}-thumb-ripple--active`)
                      ])
                    ),
                    style: F({
                      background: e.thumbsProps[a.enumValue].active ? e.thumbColor : void 0
                    })
                  },
                  [
                    G(t, {
                      hovering: a.hovering
                    }, null, 8, ["hovering"])
                  ],
                  6
                  /* CLASS, STYLE */
                ),
                B(
                  "div",
                  {
                    class: v(
                      e.classes(e.n(`${e.direction}-thumb-label`), [e.showLabel(a.enumValue), e.n(`${e.direction}-thumb-label--active`)])
                    ),
                    style: F({
                      background: e.labelColor,
                      color: e.labelTextColor,
                      height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                      width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
                    })
                  },
                  [
                    B(
                      "span",
                      null,
                      re(a.text),
                      1
                      /* TEXT */
                    )
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ])
            ], 46, _P))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      ),
      G(o, {
        "error-message": e.errorMessage,
        class: v(e.n("form")),
        "var-slider-cover": ""
      }, null, 8, ["error-message", "class"])
    ],
    2
    /* CLASS */
  );
}
const Rm = ee({
  name: JP,
  components: {
    VarFormDetails: $n,
    VarHoverOverlay: Bn
  },
  directives: { Hover: On },
  props: Lm,
  setup(e) {
    const n = C(0), t = C(null), o = C(!1), r = N(() => z(e.max) - z(e.min)), a = N(() => n.value / r.value * z(e.step)), i = N(() => e.disabled || (d == null ? void 0 : d.disabled.value)), l = N(() => e.readonly || (d == null ? void 0 : d.readonly.value)), s = N(() => e.direction === "vertical"), { bindForm: u, form: d } = Mn(), { errorMessage: c, validateWithTrigger: f, validate: m, resetValidation: g } = Dn(), { hovering: p, handleHovering: y } = Fn(), { hovering: h, handleHovering: S } = Fn(), T = N(() => {
      const { modelValue: x, range: ve } = e;
      let $e = [];
      return ve && Ye(x) ? $e = [
        {
          value: X(x[0]),
          enumValue: Ze.First,
          text: j(x[0]),
          hovering: go(p),
          handleHovering: y
        },
        {
          value: X(x[1]),
          enumValue: Ze.Second,
          text: j(x[1]),
          hovering: go(h),
          handleHovering: S
        }
      ] : bn(x) && ($e = [
        {
          value: X(x),
          enumValue: Ze.First,
          text: j(x),
          hovering: go(p),
          handleHovering: y
        }
      ]), $e;
    }), $ = N(() => {
      const { activeColor: x, range: ve, modelValue: $e } = e, Fe = ve && Ye($e) ? X(Math.min($e[0], $e[1])) : 0, de = ve && Ye($e) ? X(Math.max($e[0], $e[1])) - Fe : X($e);
      return s.value ? {
        left: "0px",
        height: `${de}%`,
        bottom: `${Fe}%`,
        background: x
      } : {
        top: "0px",
        width: `${de}%`,
        left: `${Fe}%`,
        background: x
      };
    }), P = je({
      [Ze.First]: E(),
      [Ze.Second]: E()
    });
    let I;
    w(u, {
      reset: Te,
      validate: M,
      resetValidation: g
    }), ce([() => e.modelValue, () => e.step], ([x, ve]) => {
      !D() || !Y() || o.value || pe(x, z(ve));
    }), ce(n, () => pe()), rn(() => {
      !D() || !Y() || (n.value = t.value[s.value ? "offsetHeight" : "offsetWidth"]);
    }), Er(() => {
      W();
    });
    function M() {
      return m(e.rules, e.modelValue);
    }
    function E() {
      return {
        startPosition: 0,
        currentOffset: 0,
        active: !1,
        percentValue: 0
      };
    }
    function V() {
      return qe(() => f(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function L(x) {
      const ve = x.currentTarget;
      return ve ? s.value ? n.value - (x.clientY - en(ve).top) : x.clientX - Dh(ve) : 0;
    }
    function U(x) {
      return {
        [s.value ? "bottom" : "left"]: `${x.value}%`,
        zIndex: P[x.enumValue].active ? 1 : void 0
      };
    }
    function _(x) {
      return e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : P[x].active;
    }
    function X(x) {
      const { min: ve, max: $e } = e;
      return x < z(ve) ? 0 : x > z($e) ? 100 : (x - z(ve)) / r.value * 100;
    }
    function j(x) {
      if (!bn(x))
        return 0;
      let ve = x;
      return ve < Number(e.min) && (ve = Number(e.min)), ve > Number(e.max) && (ve = Number(e.max)), parseInt(`${ve}`, 10) === ve ? ve : z(ve.toPrecision(5));
    }
    function Z(x, ve) {
      i.value || ve.handleHovering(x);
    }
    function he(x, ve) {
      let $e = [];
      const { step: Fe, range: de, modelValue: Pe, onChange: Ee, min: Le } = e, et = z(Fe), Gn = Math.round(x / a.value), nt = Gn * et + z(Le), Go = P[ve].percentValue * et + z(Le);
      if (P[ve].percentValue = Gn, de && Ye(Pe) && ($e = ve === Ze.First ? [nt, Pe[1]] : [Pe[0], nt]), Go !== nt) {
        const fe = de ? $e.map((be) => j(be)) : j(nt);
        w(Ee, fe), w(e["onUpdate:modelValue"], fe), V();
      }
    }
    function H(x) {
      if (!e.range)
        return Ze.First;
      const ve = P[Ze.First].percentValue * a.value, $e = P[Ze.Second].percentValue * a.value, Fe = Math.abs(x - ve), de = Math.abs(x - $e);
      return Fe <= de ? Ze.First : Ze.Second;
    }
    function oe() {
      document.addEventListener("touchmove", te, { passive: !1 }), document.addEventListener("touchend", q), document.addEventListener("touchcancel", q);
    }
    function W() {
      document.removeEventListener("touchmove", te), document.removeEventListener("touchend", q), document.removeEventListener("touchcancel", q);
    }
    function J(x, ve) {
      if (n.value || (n.value = t.value.offsetWidth), i.value || (P[ve].active = !0), I = ve, oe(), i.value || l.value)
        return;
      w(e.onStart), o.value = !0;
      const { clientX: $e, clientY: Fe } = x.touches[0];
      P[ve].startPosition = s.value ? Fe : $e;
    }
    function te(x) {
      if (Rn(x), i.value || l.value || !o.value)
        return;
      const { startPosition: ve, currentOffset: $e } = P[I], { clientX: Fe, clientY: de } = x.touches[0];
      let Pe = (s.value ? ve - de : Fe - ve) + $e;
      Pe <= 0 ? Pe = 0 : Pe >= n.value && (Pe = n.value), he(Pe, I);
    }
    function q() {
      W();
      const { range: x, modelValue: ve, onEnd: $e, step: Fe, min: de } = e;
      if (i.value || (P[I].active = !1), i.value || l.value)
        return;
      let Pe = [];
      P[I].currentOffset = P[I].percentValue * a.value;
      const Ee = P[I].percentValue * z(Fe) + z(de);
      x && Ye(ve) && (Pe = I === Ze.First ? [Ee, ve[1]] : [ve[0], Ee]), w($e, x ? Pe : Ee), o.value = !1;
    }
    function se(x) {
      if (i.value || l.value || x.target.closest(`.${Td("thumb")}`))
        return;
      const ve = L(x), $e = H(ve);
      I = $e, he(ve, $e), q();
    }
    function D() {
      const x = z(e.step);
      return isNaN(x) ? (zs("Slider", 'type of prop "step" should be Number'), !1) : x < 0 ? (zs("Slider", '"step" should be > 0'), !1) : !0;
    }
    function Y() {
      const { range: x, modelValue: ve } = e;
      return x && !Ye(ve) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !x && Ye(ve) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : x && Ye(ve) && ve.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }
    function pe(x = e.modelValue, ve = z(e.step)) {
      const $e = (Fe) => {
        const { min: de, max: Pe } = e;
        return Fe < z(de) ? 0 : Fe > z(Pe) ? r.value / ve : (Fe - z(de)) / ve;
      };
      e.range && Ye(x) ? (P[Ze.First].percentValue = $e(x[0]), P[Ze.First].currentOffset = P[Ze.First].percentValue * a.value, P[Ze.Second].percentValue = $e(x[1]), P[Ze.Second].currentOffset = P[Ze.Second].percentValue * a.value) : bn(x) && (P[Ze.First].currentOffset = $e(x) * a.value);
    }
    function Te() {
      const x = e.range ? [0, 0] : 0;
      w(e["onUpdate:modelValue"], x), g();
    }
    return {
      Thumbs: Ze,
      sliderEl: t,
      getFillStyle: $,
      isDisabled: i,
      isVertical: s,
      errorMessage: c,
      thumbsProps: P,
      thumbList: T,
      n: Td,
      classes: QP,
      thumbStyle: U,
      hover: Z,
      multiplySizeUnit: fn,
      toNumber: z,
      showLabel: _,
      start: J,
      move: te,
      end: q,
      click: se
    };
  }
});
Rm.render = xP;
var Ga = Rm;
ie(Ga);
ue(Ga, Lm);
const c6 = Ga;
var El = Ga, eO = Object.defineProperty, nO = Object.defineProperties, tO = Object.getOwnPropertyDescriptors, Ed = Object.getOwnPropertySymbols, oO = Object.prototype.hasOwnProperty, rO = Object.prototype.propertyIsEnumerable, Id = (e, n, t) => n in e ? eO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, aO = (e, n) => {
  for (var t in n || (n = {}))
    oO.call(n, t) && Id(e, t, n[t]);
  if (Ed)
    for (var t of Ed(n))
      rO.call(n, t) && Id(e, t, n[t]);
  return e;
}, iO = (e, n) => nO(e, tO(n));
const ys = {
  type: String,
  position: {
    type: String,
    default: "top"
  },
  content: {
    type: [String, Function, Object]
  },
  contentClass: String,
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: Boolean,
  loadingType: Be(Kn, "type"),
  loadingSize: Be(Kn, "size"),
  loadingRadius: Be(Kn, "radius"),
  loadingColor: iO(aO({}, Be(Kn, "color")), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: A(),
  onOpened: A(),
  onClose: A(),
  onClosed: A(),
  "onUpdate:show": A(),
  _update: String
}, { n: lO, classes: sO } = ne("snackbar"), uO = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function dO(e, n) {
  const t = ae("var-icon"), o = ae("var-loading");
  return De((b(), k(
    "div",
    {
      class: v(e.n()),
      style: F({ pointerEvents: e.isForbidClick ? "auto" : "none", zIndex: e.zIndex })
    },
    [
      B(
        "div",
        {
          class: v(
            e.classes(
              e.n("wrapper"),
              e.n(`wrapper-${e.position}`),
              e.n("$-elevation--4"),
              [e.vertical, e.n("vertical")],
              [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n(`wrapper-${e.type}`)]
            )
          ),
          style: F({ zIndex: e.zIndex })
        },
        [
          B(
            "div",
            {
              class: v([e.n("content"), e.contentClass])
            },
            [
              R(e.$slots, "default", {}, () => [
                Ie(
                  re(e.content),
                  1
                  /* TEXT */
                )
              ])
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v([e.n("icon")])
            },
            [
              e.iconName ? (b(), Ce(t, {
                key: 0,
                name: e.iconName
              }, null, 8, ["name"])) : Q("v-if", !0),
              e.type === "loading" ? (b(), Ce(o, {
                key: 1,
                type: e.loadingType,
                size: e.loadingSize,
                color: e.loadingColor,
                radius: e.loadingRadius
              }, null, 8, ["type", "size", "color", "radius"])) : Q("v-if", !0),
              R(e.$slots, "icon")
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n("action"))
            },
            [
              R(e.$slots, "action")
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      )
    ],
    6
    /* CLASS, STYLE */
  )), [
    [Hn, e.show]
  ]);
}
const Um = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Kt,
    VarIcon: He
  },
  props: ys,
  setup(e) {
    const n = C(null), { zIndex: t } = Ho(() => e.show, 1);
    Uo(
      () => e.show,
      () => e.lockScroll
    );
    const o = N(() => e.type === "loading" || e.forbidClick), r = N(() => e.type ? uO[e.type] : ""), a = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && w(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ce(
      () => e.show,
      (i) => {
        i ? (w(e.onOpen), a()) : i === !1 && (clearTimeout(n.value), w(e.onClose));
      }
    ), ce(
      () => e._update,
      () => {
        clearTimeout(n.value), a();
      }
    ), rn(() => {
      e.show && (w(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: Ym,
      n: lO,
      classes: sO,
      zIndex: t,
      iconName: r,
      isForbidClick: o
    };
  }
});
Um.render = dO;
var Hm = Um;
const { name: cO, n: fO } = ne("snackbar");
function vO(e, n) {
  const t = ae("var-snackbar-core");
  return b(), Ce(qn, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [
    G(We, {
      name: `${e.n()}-fade`,
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed
    }, {
      default: me(() => [
        G(t, Ae(e.$props, {
          class: e.n("transition")
        }), {
          icon: me(() => [
            R(e.$slots, "icon")
          ]),
          action: me(() => [
            R(e.$slots, "action")
          ]),
          default: me(() => [
            R(e.$slots, "default", {}, () => [
              Ie(
                re(e.content),
                1
                /* TEXT */
              )
            ])
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["class"])
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])
  ], 8, ["to", "disabled"]);
}
const Fm = ee({
  name: cO,
  components: { VarSnackbarCore: Hm },
  props: ys,
  setup() {
    const { disabled: e } = zt();
    return {
      disabled: e,
      n: fO
    };
  }
});
Fm.render = vO;
var Xa = Fm, mO = Object.defineProperty, Bd = Object.getOwnPropertySymbols, pO = Object.prototype.hasOwnProperty, hO = Object.prototype.propertyIsEnumerable, Dd = (e, n, t) => n in e ? mO(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Vo = (e, n) => {
  for (var t in n || (n = {}))
    pO.call(n, t) && Dd(e, t, n[t]);
  if (Bd)
    for (var t of Bd(n))
      hO.call(n, t) && Dd(e, t, n[t]);
  return e;
};
const Ym = ["loading", "success", "warning", "info", "error"];
let Md = 0, Il = !1, jm, Ao = !1;
const Wm = {
  type: void 0,
  content: "",
  icon: "",
  action: "",
  position: "top",
  duration: 3e3,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
};
let In = je([]), $s = Wm;
const gO = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, gi = (e) => () => ao(e) ? e() : e, bO = {
  setup() {
    return () => {
      const e = In.map(({
        id: n,
        reactiveSnackOptions: t,
        _update: o
      }) => {
        const r = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? r.classList.add("var-pointer-auto") : r.classList.remove("var-pointer-auto");
        const a = Vo({
          position: Ao ? "relative" : "absolute"
        }, kO(t.position)), {
          content: i,
          icon: l,
          action: s
        } = t, u = {
          default: gi(i),
          icon: gi(l),
          action: gi(s)
        };
        return G(Hm, Ae(t, {
          key: n,
          style: a,
          "data-id": n,
          _update: o,
          show: t.show,
          "onUpdate:show": (d) => t.show = d
        }), u);
      });
      return G(Mp, Ae(gO, {
        style: {
          zIndex: kn.zIndex
        },
        onAfterEnter: yO,
        onAfterLeave: $O
      }), {
        default: () => [e]
      });
    };
  }
}, Wn = function(e) {
  const n = CO(e), t = je(Vo(Vo({}, $s), n));
  t.show = !0, Il || (Il = !0, jm = so(bO).unmountInstance);
  const {
    length: o
  } = In, r = {
    id: Md++,
    reactiveSnackOptions: t
  };
  if (o === 0 || Ao)
    wO(r);
  else {
    const a = `update-${Md}`;
    SO(t, a);
  }
  return {
    clear() {
      !Ao && In.length ? In[0].reactiveSnackOptions.show = !1 : t.show = !1;
    }
  };
};
Ym.forEach((e) => {
  Wn[e] = (n) => (Gt(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Wn(n));
});
Wn.allowMultiple = function(e = !1) {
  e !== Ao && (In.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ao = e);
};
Wn.clear = function() {
  In.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Wn.setDefaultOptions = function(e) {
  $s = e;
};
Wn.resetDefaultOptions = function() {
  $s = Wm;
};
function yO(e) {
  const n = e.getAttribute("data-id"), t = In.find((o) => o.id === z(n));
  t && w(t.reactiveSnackOptions.onOpened);
}
function $O(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  const n = e.getAttribute("data-id"), t = In.find((r) => r.id === z(n));
  t && (t.animationEnd = !0, w(t.reactiveSnackOptions.onClosed)), In.every((r) => r.animationEnd) && (w(jm), In = je([]), Il = !1);
}
function wO(e) {
  In.push(e);
}
function CO(e = {}) {
  return un(e) ? {
    content: e
  } : e;
}
function SO(e, n) {
  const [t] = In;
  t.reactiveSnackOptions = Vo(Vo({}, t.reactiveSnackOptions), e), t._update = n;
}
function kO(e = "top") {
  return e === "bottom" ? {
    top: "85%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Wn.Component = Xa;
ie(Xa);
ie(Xa, Wn);
ue(Wn, ys);
const f6 = Xa;
var Bl = Wn;
const qm = {
  size: {
    type: [String, Number, Array],
    default: "normal"
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: String,
  inline: Boolean
};
function Sn(e) {
  return `calc(${e} / 2)`;
}
function PO(e, n, t) {
  const { direction: o, justify: r, index: a, lastIndex: i } = t;
  let l = "0";
  return o === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(r) ? a !== i ? l = `${Sn(e)} ${n} ${Sn(e)} 0` : l = `${Sn(e)} 0` : r === "space-around" ? l = `${Sn(e)} ${Sn(n)}` : r === "space-between" && (a === 0 ? l = `${Sn(e)} ${Sn(n)} ${Sn(e)} 0` : a === i ? l = `${Sn(e)} 0 ${Sn(e)} ${Sn(n)}` : l = `${Sn(e)} ${Sn(n)}`)), o === "column" && a !== i && (l = `0 0 ${e} 0`), l;
}
const OO = (e) => ["mini", "small", "normal", "large"].includes(e), {
  name: TO,
  n: bi,
  classes: EO
} = ne("space");
function IO(e, n) {
  return n ? [`var(--space-size-${e}-y)`, `var(--space-size-${e}-x)`] : Ye(e) ? e.map(we) : [we(e), we(e)];
}
var Ka = ee({
  name: TO,
  props: qm,
  setup(e, {
    slots: n
  }) {
    return () => {
      var t;
      const {
        inline: o,
        justify: r,
        align: a,
        wrap: i,
        direction: l,
        size: s
      } = e;
      let u = (t = w(n.default)) != null ? t : [];
      const [d, c] = IO(s, OO(s));
      u = Jd(u);
      const f = u.length - 1, m = u.map((g, p) => {
        const y = PO(d, c, {
          direction: l,
          justify: r,
          index: p,
          lastIndex: f
        });
        return G("div", {
          style: {
            margin: y
          }
        }, [g]);
      });
      return G("div", {
        class: EO(bi(), bi("$--box"), [o, bi("--inline")]),
        style: {
          flexDirection: l,
          justifyContent: pr(r),
          alignItems: pr(a),
          flexWrap: i ? "wrap" : "nowrap",
          margin: l === "row" ? `calc(-1 * ${d} / 2) 0` : void 0
        }
      }, [m]);
    };
  }
});
ie(Ka);
ue(Ka, qm);
const v6 = Ka;
var Dl = Ka;
const Gm = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: Be(Xe, "name"),
  inactiveIcon: Be(Xe, "name"),
  activeIconNamespace: Be(Xe, "namespace"),
  currentIconNamespace: Be(Xe, "namespace"),
  inactiveIconNamespace: Be(Xe, "namespace")
}, Xm = Symbol("STEPS_BIND_STEP_KEY");
function BO() {
  const { bindChildren: e, childProviders: n } = ln(Xm);
  return {
    step: n,
    bindStep: e
  };
}
function DO() {
  const { parentProvider: e, index: n, bindParent: t } = an(Xm);
  return t || Pn("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: t
  };
}
const { name: MO, n: NO, classes: VO } = ne("step"), AO = { key: 3 };
function zO(e, n) {
  const t = ae("var-icon");
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      B(
        "div",
        {
          class: v(e.n(e.direction))
        },
        [
          B(
            "div",
            {
              class: v(e.classes(e.n(`${e.direction}-tag`), [e.isActive || e.isCurrent, e.n(`${e.direction}-tag--active`)])),
              style: F({ backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor }),
              onClick: n[0] || (n[0] = (...o) => e.click && e.click(...o))
            },
            [
              e.isActive ? (b(), Ce(t, {
                key: 0,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.activeIcon,
                namespace: e.activeIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.isCurrent && e.currentIcon ? (b(), Ce(t, {
                key: 1,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.currentIcon,
                namespace: e.currentIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : e.inactiveIcon ? (b(), Ce(t, {
                key: 2,
                class: v(e.n("icon")),
                "var-step-cover": "",
                name: e.inactiveIcon,
                namespace: e.inactiveIconNamespace
              }, null, 8, ["class", "name", "namespace"])) : (b(), k(
                "span",
                AO,
                re(e.index + 1),
                1
                /* TEXT */
              ))
            ],
            6
            /* CLASS, STYLE */
          ),
          B(
            "div",
            {
              class: v(e.classes(e.n(`${e.direction}-content`), [e.isActive || e.isCurrent, e.n(`${e.direction}-content--active`)])),
              onClick: n[1] || (n[1] = (...o) => e.click && e.click(...o))
            },
            [
              R(e.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n(`${e.direction}-line`))
            },
            null,
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const Km = ee({
  name: MO,
  components: { VarIcon: He },
  props: Gm,
  setup() {
    const { index: e, steps: n, bindSteps: t } = DO(), { active: o, activeColor: r, inactiveColor: a, direction: i, clickStep: l } = n, s = N(() => o.value === e.value), u = N(() => e.value !== -1 && z(o.value) > e.value);
    t({ index: e });
    function c() {
      return l(e.value);
    }
    return {
      index: e,
      isActive: u,
      isCurrent: s,
      direction: i,
      activeColor: r,
      inactiveColor: a,
      n: NO,
      classes: VO,
      click: c
    };
  }
});
Km.render = zO;
var Za = Km;
ie(Za);
ue(Za, Gm);
const m6 = Za;
var Ml = Za;
const Zm = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  activeColor: String,
  inactiveColor: String,
  onClickStep: A()
}, { name: LO, n: RO } = ne("steps");
function UO(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n()),
      style: F({ flexDirection: e.direction === "horizontal" ? "row" : "column" })
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
const Jm = ee({
  name: LO,
  props: Zm,
  setup(e) {
    const n = N(() => e.active), t = N(() => e.activeColor), o = N(() => e.inactiveColor), r = N(() => e.direction), { bindStep: a } = BO();
    a({
      active: n,
      direction: r,
      activeColor: t,
      inactiveColor: o,
      clickStep: l
    });
    function l(s) {
      w(e.onClickStep, s);
    }
    return { n: RO };
  }
});
Jm.render = UO;
var Ja = Jm;
ie(Ja);
ue(Ja, Zm);
const p6 = Ja;
var Nl = Ja;
const Qm = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, { name: HO, n: FO } = ne("style-provider"), YO = ee({
  name: HO,
  props: Qm,
  setup(e, { slots: n }) {
    return () => Hd(
      e.tag,
      {
        class: FO(),
        style: ac(e.styleVars)
      },
      w(n.default)
    );
  }
});
var Qa = YO;
const yi = [];
function _a(e) {
  yi.forEach((t) => document.documentElement.style.removeProperty(t)), yi.length = 0;
  const n = ac(e ?? {});
  Object.entries(n).forEach(([t, o]) => {
    document.documentElement.style.setProperty(t, o), yi.push(t);
  });
}
_a.Component = Qa;
ie(Qa);
ie(Qa, _a);
ue(_a, Qm);
const h6 = Qa;
var Vl = _a;
const _m = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  color: String,
  loadingColor: String,
  closeColor: String,
  size: [String, Number],
  rules: Array,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: A(),
  onChange: A(),
  "onUpdate:modelValue": A()
}, { name: jO, n: WO, classes: qO } = ne("switch"), GO = (e) => (Ct(""), e = e(), St(), e), XO = /* @__PURE__ */ GO(() => /* @__PURE__ */ B(
  "svg",
  { viewBox: "25 25 50 50" },
  [
    /* @__PURE__ */ B("circle", {
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ],
  -1
  /* HOISTED */
)), KO = [
  XO
];
function ZO(e, n) {
  const t = ae("var-hover-overlay"), o = ae("var-form-details"), r = ze("ripple"), a = ze("hover");
  return De((b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      B(
        "div",
        {
          class: v(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[0] || (n[0] = (...i) => e.switchActive && e.switchActive(...i)),
          style: F(e.styleComputed.switch)
        },
        [
          B(
            "div",
            {
              style: F(e.styleComputed.track),
              class: v(
                e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")])
              )
            },
            null,
            6
            /* CLASS, STYLE */
          ),
          De((b(), k(
            "div",
            {
              class: v(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
              style: F(e.styleComputed.ripple)
            },
            [
              B(
                "div",
                {
                  style: F(e.styleComputed.handle),
                  class: v(
                    e.classes(
                      e.n("handle"),
                      e.n("$-elevation--2"),
                      [e.modelValue === e.activeValue, e.n("handle--active")],
                      [e.errorMessage, e.n("handle--error")]
                    )
                  )
                },
                [
                  e.loading ? (b(), k(
                    "span",
                    {
                      key: 0,
                      class: v(e.n("loading")),
                      style: F({
                        width: e.radius,
                        height: e.radius
                      })
                    },
                    KO,
                    6
                    /* CLASS, STYLE */
                  )) : Q("v-if", !0)
                ],
                6
                /* CLASS, STYLE */
              ),
              G(t, { hovering: e.hovering }, null, 8, ["hovering"])
            ],
            6
            /* CLASS, STYLE */
          )), [
            [r, {
              disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
            }]
          ])
        ],
        6
        /* CLASS, STYLE */
      ),
      G(o, { "error-message": e.errorMessage }, null, 8, ["error-message"])
    ],
    2
    /* CLASS */
  )), [
    [a, e.hover, "desktop"]
  ]);
}
const xm = ee({
  name: jO,
  components: {
    VarFormDetails: $n,
    VarHoverOverlay: Bn
  },
  directives: { Ripple: Qe, Hover: On },
  props: _m,
  setup(e) {
    const { bindForm: n, form: t } = Mn(), { errorMessage: o, validateWithTrigger: r, validate: a, resetValidation: i } = Dn(), { hovering: l, handleHovering: s } = Fn(), u = N(() => {
      const { size: h, modelValue: S, color: T, closeColor: $, loadingColor: P, activeValue: I } = e;
      return {
        handle: {
          width: fn(h),
          height: fn(h),
          backgroundColor: S === I ? T : $,
          color: P
        },
        ripple: {
          left: S === I ? fn(h, 0.5) : `-${fn(h, 0.5)}`,
          color: S === I ? T : $ || "#999",
          width: fn(h, 2),
          height: fn(h, 2)
        },
        track: {
          height: fn(h, 0.72),
          width: fn(h, 1.9),
          borderRadius: fn(h, 2 / 3),
          filter: S === I || o != null && o.value ? void 0 : "brightness(.6)",
          backgroundColor: S === I ? T : $
        },
        switch: {
          height: fn(h, 1.2),
          width: fn(h, 2)
        }
      };
    }), d = N(() => fn(e.size, 0.8));
    w(n, {
      reset: y,
      validate: f,
      resetValidation: i
    });
    function f() {
      return a(e.rules, e.modelValue);
    }
    function m() {
      return qe(() => r(["onChange"], "onChange", e.rules, e.modelValue));
    }
    function g(h) {
      const {
        onClick: S,
        onChange: T,
        disabled: $,
        loading: P,
        readonly: I,
        modelValue: O,
        activeValue: M,
        inactiveValue: E,
        "onUpdate:modelValue": V
      } = e;
      if (w(S, h), $ || P || I || t != null && t.disabled.value || t != null && t.readonly.value)
        return;
      const L = O === M ? E : M;
      w(T, L), w(V, L), m();
    }
    function p(h) {
      e.disabled || t != null && t.disabled.value || s(h);
    }
    function y() {
      w(e["onUpdate:modelValue"], e.inactiveValue), i();
    }
    return {
      hovering: l,
      radius: d,
      styleComputed: u,
      errorMessage: o,
      formDisabled: t == null ? void 0 : t.disabled,
      formReadonly: t == null ? void 0 : t.readonly,
      n: WO,
      classes: qO,
      multiplySizeUnit: fn,
      switchActive: g,
      hover: p
    };
  }
});
xm.render = ZO;
var xa = xm;
ie(xa);
ue(xa, _m);
const g6 = xa;
var Al = xa;
const ep = {
  name: [String, Number],
  disabled: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: A()
}, np = Symbol("TABS_BIND_TAB_KEY");
function JO() {
  const { childProviders: e, bindChildren: n, length: t } = ln(np);
  return {
    length: t,
    tabList: e,
    bindTabList: n
  };
}
function QO() {
  const { parentProvider: e, bindParent: n, index: t } = an(np);
  return n || Pn("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: t,
    tabs: e,
    bindTabs: n
  };
}
const { name: _O, n: ar, classes: xO } = ne("tab");
function eT(e, n) {
  const t = ze("ripple");
  return De((b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n(`--${e.itemDirection}`))),
      ref: "tabEl",
      style: F({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = (...o) => e.handleClick && e.handleClick(...o))
    },
    [
      R(e.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  )), [
    [t, { disabled: e.disabled || !e.ripple }]
  ]);
}
const tp = ee({
  name: _O,
  directives: { Ripple: Qe },
  props: ep,
  setup(e) {
    const n = C(null), t = N(() => n.value), o = N(() => e.name), r = N(() => e.disabled), { index: a, tabs: i, bindTabs: l } = QO(), { onTabClick: s, active: u, activeColor: d, inactiveColor: c, disabledColor: f, itemDirection: m, resize: g } = i, p = {
      name: o,
      index: a,
      disabled: r,
      element: t
    };
    l(p), ce(() => [e.name, e.disabled], g);
    function y() {
      return e.name != null ? u.value === e.name : u.value === (a == null ? void 0 : a.value);
    }
    function h() {
      return e.disabled ? f.value : y() ? d.value : c.value;
    }
    function S() {
      return e.disabled ? ar("$-tab--disabled") : y() ? ar("$-tab--active") : ar("$-tab--inactive");
    }
    function T($) {
      const { disabled: P, name: I, onClick: O } = e;
      P || (w(O, I ?? a.value, $), s(p));
    }
    return {
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: c,
      itemDirection: m,
      n: ar,
      classes: xO,
      computeColorStyle: h,
      computeColorClass: S,
      handleClick: T
    };
  }
});
tp.render = eT;
var ei = tp;
ie(ei);
ue(ei, ep);
const b6 = ei;
var zl = ei;
const op = {
  name: [String, Number]
}, { name: nT, n: tT, classes: oT } = ne("tab-item");
function rT(e, n) {
  const t = ae("var-swipe-item");
  return b(), Ce(t, {
    class: v(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: me(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
const rp = ee({
  name: nT,
  components: { VarSwipeItem: Mo },
  props: op,
  setup(e) {
    const n = C(!1), t = N(() => e.name), { index: o, bindTabsItems: r } = fS(), { bindLists: a } = vS(), i = {
      index: o,
      name: t,
      current: N(() => n.value),
      setCurrent: l
    };
    r(i), a(i);
    function l(s) {
      n.value = s;
    }
    return {
      current: n,
      n: tT,
      classes: oT
    };
  }
});
rp.render = rT;
var ni = rp;
ie(ni);
ue(ni, op);
const y6 = ni;
var Ll = ni;
const ap = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, { name: aT, n: iT, classes: lT } = ne("table");
function sT(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [
      B(
        "div",
        {
          class: v(e.n("main"))
        },
        [
          B(
            "table",
            {
              class: v(e.n("table")),
              style: F({ width: e.toSizeUnit(e.fullWidth) })
            },
            [
              R(e.$slots, "default")
            ],
            6
            /* CLASS, STYLE */
          )
        ],
        2
        /* CLASS */
      ),
      e.$slots.footer ? (b(), k(
        "div",
        {
          key: 0,
          class: v(e.n("footer"))
        },
        [
          R(e.$slots, "footer")
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const ip = ee({
  name: aT,
  props: ap,
  setup: () => ({
    toSizeUnit: we,
    n: iT,
    classes: lT,
    formatElevation: dn
  })
});
ip.render = sT;
var ti = ip;
ie(ti);
ue(ti, ap);
const $6 = ti;
var Rl = ti;
const lp = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal"
  },
  itemDirection: {
    type: String,
    default: "horizontal"
  },
  fixedBottom: Boolean,
  activeColor: String,
  inactiveColor: String,
  disabledColor: String,
  color: String,
  indicatorColor: String,
  indicatorSize: [String, Number],
  elevation: {
    type: [Boolean, String, Number],
    default: !1
  },
  scrollable: {
    type: String,
    default: "auto"
  },
  indicatorPosition: {
    type: String,
    default: "normal"
  },
  safeArea: Boolean,
  sticky: Boolean,
  stickyCssMode: Be(yo, "cssMode"),
  stickyZIndex: Be(yo, "zIndex"),
  offsetTop: Be(yo, "offsetTop"),
  onClick: A(),
  onChange: A(),
  "onUpdate:active": A()
};
var Nd = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: uT, n: dT, classes: cT } = ne("tabs");
function fT(e, n) {
  return b(), Ce(ro(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: me(() => [
      B(
        "div",
        Ae({
          class: e.classes(
            e.n(),
            e.n("$--box"),
            e.n(`--item-${e.itemDirection}`),
            e.n(`--layout-${e.layoutDirection}-padding`),
            e.formatElevation(e.elevation, 4),
            [e.fixedBottom, e.n("--fixed-bottom")],
            [e.safeArea, e.n("--safe-area")]
          ),
          style: { background: e.color }
        }, e.$attrs),
        [
          B(
            "div",
            {
              ref: "scrollerEl",
              class: v(
                e.classes(
                  e.n("tab-wrap"),
                  [e.localScrollable, e.n(`--layout-${e.layoutDirection}-scrollable`)],
                  e.n(`--layout-${e.layoutDirection}`)
                )
              )
            },
            [
              R(e.$slots, "default"),
              B(
                "div",
                {
                  class: v(e.classes(e.n("indicator"), e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),
                  style: F({
                    width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                    height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                    transform: e.layoutDirection === "horizontal" ? `translateX(${e.indicatorX})` : `translateY(${e.indicatorY})`
                  })
                },
                [
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n("indicator-inner"), e.n(`--layout-${e.layoutDirection}-indicator-inner`))),
                      style: F({ background: e.indicatorColor || e.activeColor })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                6
                /* CLASS, STYLE */
              )
            ],
            2
            /* CLASS */
          )
        ],
        16
        /* FULL_PROPS */
      )
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["css-mode", "offset-top", "z-index"]);
}
const sp = ee({
  name: uT,
  components: { VarSticky: Qt },
  inheritAttrs: !1,
  props: lp,
  setup(e) {
    const n = C("0px"), t = C("0px"), o = C("0px"), r = C("0px"), a = C(!1), i = C(null), l = N(() => e.active), s = N(() => e.activeColor), u = N(() => e.inactiveColor), d = N(() => e.disabledColor), c = N(() => e.itemDirection), f = C(null), m = N(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), { tabList: g, bindTabList: p, length: y } = JO();
    p({
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: c,
      resize: E,
      onTabClick: S
    }), ce(
      () => y.value,
      () => Nd(this, null, function* () {
        yield mn(), E();
      })
    ), ce(() => [e.active, e.scrollable], E), wt(E), io(E);
    function S(L) {
      var U;
      const _ = (U = L.name.value) != null ? U : L.index.value, { active: X, onChange: j, onClick: Z } = e;
      w(e["onUpdate:active"], _), w(Z, _), _ !== X && w(j, _);
    }
    function T() {
      return g.find(({ name: L }) => e.active === L.value);
    }
    function $(L) {
      return g.find(({ index: U }) => (L ?? e.active) === U.value);
    }
    function P() {
      if (y.value === 0)
        return;
      const { active: L } = e;
      if (bn(L)) {
        const U = pt(L, 0, y.value - 1);
        return w(e["onUpdate:active"], U), $(U);
      }
    }
    function I() {
      a.value = e.scrollable === "always" || g.length >= 5;
    }
    function O({ element: L }) {
      const U = L.value;
      U && (e.layoutDirection === "horizontal" ? (n.value = `${U.offsetWidth}px`, o.value = `${U.offsetLeft}px`) : (t.value = `${U.offsetHeight}px`, r.value = `${U.offsetTop}px`));
    }
    function M({ element: L }) {
      if (!a.value)
        return;
      const U = i.value, _ = L.value;
      if (e.layoutDirection === "horizontal") {
        const X = _.offsetLeft + _.offsetWidth / 2 - U.offsetWidth / 2;
        ko(U, {
          left: X,
          animation: Pi
        });
      } else {
        const X = _.offsetTop + _.offsetHeight / 2 - U.offsetHeight / 2;
        ko(U, {
          top: X,
          animation: Pi
        });
      }
    }
    function E() {
      const L = T() || $() || P();
      !L || L.disabled.value || (I(), O(L), M(L));
    }
    function V() {
      return Nd(this, null, function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
    }
    return {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: t,
      indicatorX: o,
      indicatorY: r,
      indicatorPosition: m,
      localScrollable: a,
      scrollerEl: i,
      Transition: We,
      toSizeUnit: we,
      n: dT,
      classes: cT,
      resize: E,
      resizeSticky: V,
      formatElevation: dn
    };
  }
});
sp.render = fT;
var oi = sp;
ie(oi);
ue(oi, lp);
const w6 = oi;
var Ul = oi;
const up = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": A()
};
var vT = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: mT, n: pT } = ne("tabs-items");
function hT(e, n) {
  const t = ae("var-swipe");
  return b(), Ce(t, {
    class: v(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: me(() => [
      R(e.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
const dp = ee({
  name: mT,
  components: { VarSwipe: Do },
  props: up,
  setup(e) {
    const n = C(null), { tabItemList: t, bindTabItem: o, length: r } = cS();
    o({}), ce(() => e.active, s), ce(
      () => r.value,
      () => vT(this, null, function* () {
        yield mn(), s(e.active);
      })
    );
    function a(c) {
      return t.find(({ name: f }) => c === f.value);
    }
    function i(c) {
      return t.find(({ index: f }) => c === f.value);
    }
    function l(c) {
      return a(c) || i(c);
    }
    function s(c) {
      var f;
      const m = l(c);
      m && (t.forEach(({ setCurrent: g }) => g(!1)), m.setCurrent(!0), (f = n.value) == null || f.to(m.index.value));
    }
    function u(c) {
      var f;
      const m = t.find(({ index: p }) => p.value === c), g = (f = m.name.value) != null ? f : m.index.value;
      w(e["onUpdate:active"], g);
    }
    function d() {
      return n.value;
    }
    return {
      swipe: n,
      n: pT,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
dp.render = hT;
var ri = dp;
ie(ri);
ue(ri, up);
const C6 = ri;
var Hl = ri, gT = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, bT = {
  "--badge-default-color": "#555"
}, yT = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, $T = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, wT = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, CT = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, ST = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, kT = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, PT = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, OT = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, TT = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, ET = {
  "--floating-panel-background": "#272727"
}, IT = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, BT = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, DT = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, MT = {
  "--popup-content-background-color": "#1e1e1e"
}, NT = {
  "--pull-refresh-background": "#303030"
}, VT = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, AT = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, zT = {
  "--select-scroller-background": "#303030"
}, LT = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, RT = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, UT = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, HT = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, FT = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, YT = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, jT = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, WT = {
  "--tabs-background": "#1e1e1e"
}, qT = {
  "--app-bar-color": "#272727"
}, GT = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, XT = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, KT = {
  "--menu-background-color": "#272727"
}, ZT = {
  "--breadcrumb-inactive-color": "#aaa"
}, JT = {
  "--paper-background": "#303030"
}, QT = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, _T = {
  "--link-default-color": "#fff"
}, xT = {
  "--progress-label-color": "#fff"
}, eE = {
  "--option-text-color": "#fff"
}, nE = {
  "--countdown-text-color": "#fff"
}, tE = {
  "--watermark-content-color": "#ffffff"
}, oE = {
  "--menu-select-menu-background-color": "#272727"
}, rE = {
  "--menu-option-text-color": "#fff"
}, aE = Object.defineProperty, Vd = Object.getOwnPropertySymbols, iE = Object.prototype.hasOwnProperty, lE = Object.prototype.propertyIsEnumerable, Ad = (e, n, t) => n in e ? aE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, Oe = (e, n) => {
  for (var t in n || (n = {}))
    iE.call(n, t) && Ad(e, t, n[t]);
  if (Vd)
    for (var t of Vd(n))
      lE.call(n, t) && Ad(e, t, n[t]);
  return e;
}, sE = Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe(Oe({
  // common
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, yT), wT), $T), YT), PT), LT), WT), HT), MT), OT), gT), ST), bT), jT), kT), NT), UT), RT), BT), FT), IT), zT), VT), CT), TT), DT), qT), GT), XT), KT), AT), ZT), JT), QT), _T), xT), eE), nE), tE), oE), rE), ET);
const uE = { dark: sE }, S6 = null;
var Fl = uE;
const Tn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], vn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], zd = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], cp = {
  modelValue: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  hint: String,
  color: String,
  /** @deprecated Use titleColor to instead. */
  headerColor: String,
  titleColor: String,
  format: {
    type: String,
    default: "ampm"
  },
  allowedTime: Object,
  min: String,
  max: String,
  useSeconds: Boolean,
  readonly: Boolean,
  "onUpdate:modelValue": A(),
  onChange: A()
}, fp = (e, n) => e === "24hr" || n === "am", ws = (e, n, t) => {
  const o = Tn.findIndex((a) => z(a) === z(t)), r = fp(e, n) ? t : vn[o];
  return {
    hourStr: r,
    hourNum: z(r)
  };
}, gn = (e) => {
  const [n, t, o] = e.split(":");
  return {
    hour: z(n),
    minute: z(t),
    second: z(o)
  };
}, vp = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, max: l, min: s, disableHour: u } = e, { hourStr: d, hourNum: c } = ws(r, a, i);
  let f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    const { hour: g, minute: p } = gn(l);
    f = g === c && o > p;
  }
  if (!l && s) {
    const { hour: g, minute: p } = gn(s);
    f = g === c && o < p;
  }
  if (l && s) {
    const { hour: g, minute: p } = gn(l), { hour: y, minute: h } = gn(s);
    f = y === c && o < h || g === c && o > p;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (t = e.allowedTime) == null ? void 0 : t.minutes(o)), f || m;
}, mp = (e) => {
  var n, t;
  const { time: o, format: r, ampm: a, hour: i, minute: l, max: s, min: u, disableHour: d } = e, { hourStr: c, hourNum: f } = ws(r, a, i);
  let m = !1, g = !1;
  if (d.includes(c))
    return !0;
  if (s && !u) {
    const { hour: p, minute: y, second: h } = gn(s);
    m = p === f && y < l || y === l && o > h;
  }
  if (!s && u) {
    const { hour: p, minute: y, second: h } = gn(u);
    m = p === f && y > l || y === l && o > h;
  }
  if (s && u) {
    const { hour: p, minute: y, second: h } = gn(s), { hour: S, minute: T, second: $ } = gn(u);
    m = p === f && y < l || S === f && T > l || p === f && y === l && o > h || S === f && T === l && o < $;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (t = e.allowedTime) == null ? void 0 : t.seconds(o)), m || g;
}, { n: dE, classes: cE } = ne("time-picker");
function fE(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n("clock"))
    },
    [
      B(
        "div",
        {
          class: v(e.n("clock-hand")),
          style: F(e.handStyle)
        },
        null,
        6
        /* CLASS, STYLE */
      ),
      (b(!0), k(
        Ve,
        null,
        Ke(e.timeScales, (t, o) => (b(), k(
          "div",
          {
            class: v(
              e.classes(
                e.n("clock-item"),
                [e.isActive(o, !1), e.n("clock-item--active")],
                [e.isDisable(t), e.n("clock-item--disable")]
              )
            ),
            key: t,
            style: F(e.getStyle(o, t, !1))
          },
          re(t),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      )),
      e.format === "24hr" && e.type === "hour" ? (b(), k(
        "div",
        {
          key: 0,
          class: v(e.n("clock-inner")),
          ref: "inner"
        },
        [
          (b(!0), k(
            Ve,
            null,
            Ke(e.hours24, (t, o) => (b(), k(
              "div",
              {
                class: v(
                  e.classes(
                    e.n("clock-item"),
                    [e.isActive(o, !0), e.n("clock-item--active")],
                    [e.isDisable(t), e.n("clock-item--disable")]
                  )
                ),
                key: t,
                style: F(e.getStyle(o, t, !0))
              },
              re(t),
              7
              /* TEXT, CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : Q("v-if", !0)
    ],
    2
    /* CLASS */
  );
}
const pp = ee({
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean,
      default: !1
    },
    preventNextUpdate: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, { emit: n }) {
    const t = C(null), o = C([]), r = C([]), a = N(() => ({
      transform: `rotate(${z(e.rad)}deg)`,
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: u(),
      borderColor: u()
    })), i = N(() => {
      if (e.rad === void 0)
        return;
      const p = e.rad / 30;
      return p >= 0 ? p : p + 12;
    }), l = N(() => e.type === "hour" ? Tn : zd), s = (p, y) => {
      p = p ?? (e.type === "minute" ? e.time.minute : e.time.second);
      const h = e.type === "minute" ? vp : mp, S = {
        time: z(p),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: o.value
      };
      return y && e.type === "minute" && Reflect.deleteProperty(S, "minute"), h(S);
    }, u = () => {
      if (i.value === void 0)
        return e.color;
      const p = e.isInner ? vn[i.value] : l.value[i.value];
      return l.value === zd ? s() ? "#bdbdbd" : e.color : c(p) ? "#bdbdbd" : e.color;
    }, d = (p, y) => y ? i.value === p && e.isInner : i.value === p && (!e.isInner || e.type !== "hour"), c = (p) => {
      if (e.type === "hour") {
        if (fp(e.format, e.ampm))
          return o.value.includes(p);
        const y = Tn.findIndex((h) => h === p);
        return r.value.includes(y);
      }
      return s(p, !0);
    }, f = (p, y, h) => {
      const S = 2 * Math.PI / 12 * p - Math.PI / 2, T = 50 * (1 + Math.cos(S)), $ = 50 * (1 + Math.sin(S)), P = () => d(p, h) ? c(y) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, { backgroundColor: I, color: O } = P();
      return {
        left: `${T}%`,
        top: `${$}%`,
        backgroundColor: I,
        color: O
      };
    }, m = () => {
      const { width: p, height: y } = en(t.value);
      return {
        width: p,
        height: y
      };
    }, g = () => {
      if (i.value === void 0)
        return;
      const p = e.ampm === "am" ? Tn : vn;
      return Mt(p[i.value], 2, "0");
    };
    return ce([i, () => e.isInner], ([p, y], [h, S]) => {
      if (p === h && y === S || e.type !== "hour" || i.value === void 0)
        return;
      const $ = y ? vn[i.value] : g(), P = e.useSeconds ? `:${e.time.second}` : "", I = `${$}:${e.time.minute}${P}`;
      e.preventNextUpdate || n("update", I), n("change-prevent-update");
    }), ce(
      () => e.rad,
      (p, y) => {
        if (e.type === "hour" || p === void 0 || y === void 0)
          return;
        const h = p / 6 >= 0 ? p / 6 : p / 6 + 60, S = y / 6 >= 0 ? y / 6 : y / 6 + 60;
        if (h === S)
          return;
        let T;
        const { hourStr: $ } = ws(e.format, e.ampm, e.time.hour);
        if (e.type === "minute") {
          const P = le().minute(h).format("mm"), I = e.useSeconds ? `:${e.time.second}` : "";
          T = `${$}:${P}${I}`;
        }
        if (e.type === "second") {
          const P = le().second(h).format("ss"), I = e.useSeconds ? `:${P}` : "";
          T = `${$}:${e.time.minute}${I}`;
        }
        n("update", T);
      }
    ), ce(
      [() => e.max, () => e.min, () => e.allowedTime],
      ([p, y, h]) => {
        if (o.value = [], p && !y) {
          const { hour: S } = gn(p), T = Tn.filter((P) => z(P) > S), $ = vn.filter((P) => z(P) > S);
          o.value = [...T, ...$];
        }
        if (!p && y) {
          const { hour: S } = gn(y), T = Tn.filter((P) => z(P) < S), $ = vn.filter((P) => z(P) < S);
          o.value = [...T, ...$];
        }
        if (p && y) {
          const { hour: S } = gn(p), { hour: T } = gn(y), $ = Tn.filter((I) => z(I) < T || z(I) > S), P = vn.filter((I) => z(I) < T || z(I) > S);
          o.value = [...$, ...P];
        }
        if (h != null && h.hours) {
          const { hours: S } = h, T = Tn.filter((P) => !S(z(P))), $ = vn.filter((P) => !S(z(P)));
          o.value = [.../* @__PURE__ */ new Set([...o.value, ...T, ...$])];
        }
        r.value = o.value.map((S) => vn.findIndex((T) => S === T)).filter((S) => S >= 0);
      },
      { immediate: !0 }
    ), {
      n: dE,
      classes: cE,
      hours24: vn,
      timeScales: l,
      inner: t,
      handStyle: a,
      disableHour: o,
      isActive: d,
      isDisable: c,
      getSize: m,
      getStyle: f,
      activeItemIndex: i
    };
  }
});
pp.render = fE;
var vE = pp;
const { name: mE, n: pE, classes: hE } = ne("time-picker"), gE = (e) => (Ct(""), e = e(), St(), e), bE = /* @__PURE__ */ gE(() => /* @__PURE__ */ B(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), yE = { key: 0 };
function $E(e, n) {
  var t;
  const o = ae("clock");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [
      B(
        "div",
        {
          class: v(e.n("title")),
          style: F({ background: e.titleColor || e.headerColor || e.color })
        },
        [
          B(
            "div",
            {
              class: v(e.n("title-hint"))
            },
            re((t = e.hint) != null ? t : e.pack.timePickerHint),
            3
            /* TEXT, CLASS */
          ),
          B(
            "div",
            {
              class: v(e.n("title-time-container"))
            },
            [
              B(
                "div",
                {
                  class: v(e.n("title-time"))
                },
                [
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
                      onClick: n[0] || (n[0] = (r) => e.checkPanel("hour"))
                    },
                    re(e.time.hour),
                    3
                    /* TEXT, CLASS */
                  ),
                  bE,
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
                      onClick: n[1] || (n[1] = (r) => e.checkPanel("minute"))
                    },
                    re(e.time.minute),
                    3
                    /* TEXT, CLASS */
                  ),
                  e.useSeconds ? (b(), k("span", yE, ":")) : Q("v-if", !0),
                  e.useSeconds ? (b(), k(
                    "div",
                    {
                      key: 1,
                      class: v(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
                      onClick: n[2] || (n[2] = (r) => e.checkPanel("second"))
                    },
                    re(e.time.second),
                    3
                    /* TEXT, CLASS */
                  )) : Q("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.format === "ampm" ? (b(), k(
                "div",
                {
                  key: 0,
                  class: v(e.n("title-ampm"))
                },
                [
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
                      onClick: n[3] || (n[3] = (r) => e.checkAmpm("am"))
                    },
                    " AM ",
                    2
                    /* CLASS */
                  ),
                  B(
                    "div",
                    {
                      class: v(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
                      onClick: n[4] || (n[4] = (r) => e.checkAmpm("pm"))
                    },
                    " PM ",
                    2
                    /* CLASS */
                  )
                ],
                2
                /* CLASS */
              )) : Q("v-if", !0)
            ],
            2
            /* CLASS */
          )
        ],
        6
        /* CLASS, STYLE */
      ),
      B(
        "div",
        {
          class: v(e.n("body"))
        },
        [
          B(
            "div",
            {
              class: v(e.n("clock-container")),
              onTouchstart: n[5] || (n[5] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchmove: n[6] || (n[6] = (...r) => e.moveHand && e.moveHand(...r)),
              onTouchend: n[7] || (n[7] = (...r) => e.end && e.end(...r)),
              ref: "container"
            },
            [
              G(We, {
                name: `${e.n()}-panel-fade`
              }, {
                default: me(() => [
                  (b(), Ce(o, {
                    key: e.type,
                    ref: "inner",
                    type: e.type,
                    ampm: e.ampm,
                    color: e.color,
                    "is-inner": e.isInner,
                    format: e.format,
                    "allowed-time": e.allowedTime,
                    rad: e.getRad,
                    time: e.time,
                    "prevent-next-update": e.isPreventNextUpdate,
                    "use-seconds": e.useSeconds,
                    max: e.max,
                    min: e.min,
                    onUpdate: e.update,
                    onChangePreventUpdate: e.changePreventUpdate
                  }, null, 8, ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            34
            /* CLASS, HYDRATE_EVENTS */
          )
        ],
        2
        /* CLASS */
      )
    ],
    2
    /* CLASS */
  );
}
const hp = ee({
  name: mE,
  components: { Clock: vE },
  props: cp,
  setup(e) {
    const n = C(null), t = C(null), o = C(null), r = C(!1), a = C(!1), i = C(!1), l = C(!1), s = C(!1), u = C(!1), d = C(!1), c = C(0), f = C(0), m = C(), g = C("hour"), p = C("am"), y = C({
      hour: "00",
      minute: "00",
      second: "00"
    }), h = je({
      x: 0,
      y: 0
    }), S = je({
      x: [],
      y: []
    }), T = N(() => g.value === "hour" ? m.value : g.value === "minute" ? c.value : f.value);
    ce(
      () => e.modelValue,
      (W) => {
        if (W) {
          const { hour: J, minute: te, second: q } = gn(W), se = le().hour(J).format("hh"), D = le().hour(J).format("HH"), Y = le().minute(te).format("mm"), pe = le().second(q).format("ss");
          m.value = (se === "12" ? 0 : z(se)) * 30, c.value = z(Y) * 6, f.value = z(pe) * 6, y.value = V(W), e.format !== "24hr" && (p.value = Mt(`${J}`, 2, "0") === D && vn.includes(D) ? "pm" : "am"), r.value = e.format === "24hr" && vn.includes(D);
        }
      },
      { immediate: !0 }
    );
    function $(W) {
      w(e["onUpdate:modelValue"], W), w(e.onChange, W);
    }
    function P(W) {
      return W * 57.29577951308232;
    }
    function I(W) {
      l.value = !1, d.value = !1, g.value = W;
    }
    function O(W) {
      const { disableHour: J } = o.value, te = Tn.findIndex((D) => z(D) === z(y.value.hour)), q = W === "am" ? Tn : vn;
      return [...q.slice(te), ...q.slice(0, te)].find((D, Y) => (a.value = Y !== 0, !J.includes(D)));
    }
    function M(W) {
      if (e.readonly)
        return;
      p.value = W;
      const J = O(W);
      if (!J)
        return;
      const te = e.useSeconds ? `:${y.value.second}` : "", q = `${Mt(J, 2, "0")}:${y.value.minute}${te}`;
      $(q);
    }
    function E(W, J) {
      const te = W >= S.x[0] && W <= S.x[1], q = J >= S.y[0] && J <= S.y[1];
      return te && q;
    }
    function V(W) {
      const J = e.format === "24hr" ? "HH" : "hh", { hour: te, minute: q, second: se } = gn(W);
      return {
        hour: le().hour(te).format(J),
        minute: le().minute(q).format("mm"),
        second: le().second(se).format("ss")
      };
    }
    function L(W) {
      const J = W / 30;
      return J >= 0 ? J : J + 12;
    }
    function U() {
      const { width: W, height: J } = o.value.getSize(), te = h.x - W / 2 - 8, q = h.x + W / 2 + 8, se = h.y - J / 2 - 8, D = h.y + J / 2 + 8;
      return {
        rangeXMin: te,
        rangeXMax: q,
        rangeYMin: se,
        rangeYMax: D
      };
    }
    function _(W, J, te) {
      const { disableHour: q } = o.value;
      i.value = E(W, J);
      const se = Math.round(te / 30) * 30 + 90, D = L(se), Y = r.value ? Tn[D] : vn[D];
      if (q.includes(Y) || (r.value = e.format === "24hr" ? E(W, J) : !1), r.value !== i.value)
        return;
      const pe = r.value || p.value === "pm" ? vn[D] : Tn[D];
      u.value = q.includes(pe), !u.value && (m.value = se, l.value = !0);
    }
    function X(W) {
      const { disableHour: J } = o.value, te = Math.round(W / 6) * 6 + 90, se = {
        time: te / 6 >= 0 ? te / 6 : te / 6 + 60,
        format: e.format,
        ampm: p.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      d.value = vp(se), !d.value && (c.value = te, s.value = !0);
    }
    function j(W) {
      const { disableHour: J } = o.value, te = Math.round(W / 6) * 6 + 90, se = {
        time: te / 6 >= 0 ? te / 6 : te / 6 + 60,
        format: e.format,
        ampm: p.value,
        hour: y.value.hour,
        minute: z(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      mp(se) || (f.value = te);
    }
    function Z() {
      const { left: W, top: J, width: te, height: q } = en(n.value);
      if (h.x = W + te / 2, h.y = J + q / 2, g.value === "hour" && e.format === "24hr") {
        const { rangeXMin: se, rangeXMax: D, rangeYMin: Y, rangeYMax: pe } = U();
        S.x = [se, D], S.y = [Y, pe];
      }
    }
    function he(W) {
      if (Rn(W), e.readonly)
        return;
      Z();
      const { clientX: J, clientY: te } = W.touches[0], q = J - h.x, se = te - h.y, D = Math.round(P(Math.atan2(se, q)));
      g.value === "hour" ? _(J, te, D) : g.value === "minute" ? X(D) : j(D);
    }
    function H() {
      if (!e.readonly) {
        if (g.value === "hour" && l.value) {
          g.value = "minute";
          return;
        }
        g.value === "minute" && e.useSeconds && s.value && (g.value = "second");
      }
    }
    function oe() {
      a.value = !1;
    }
    return {
      getRad: T,
      time: y,
      container: n,
      inner: o,
      picker: t,
      isInner: r,
      type: g,
      ampm: p,
      isPreventNextUpdate: a,
      n: pE,
      classes: hE,
      pack: Je,
      moveHand: he,
      checkPanel: I,
      checkAmpm: M,
      end: H,
      update: $,
      changePreventUpdate: oe,
      formatElevation: dn
    };
  }
});
hp.render = $E;
var ai = hp;
ie(ai);
ue(ai, cp);
const k6 = ai;
var Yl = ai;
const gp = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  resolveType: {
    type: String,
    default: "default"
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: [Number, String],
  maxsize: [Number, String],
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: Array,
  hideList: Boolean,
  preventDefaultPreview: Boolean,
  onClickAction: A(),
  onBeforeFilter: A(),
  onBeforeRead: A(),
  onAfterRead: A(),
  onBeforeRemove: A(),
  onRemove: A(),
  onOversize: A(),
  onPreview: A(),
  "onUpdate:modelValue": A()
};
var ir = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: wE, n: CE, classes: SE } = ne("uploader");
let kE = 0;
const PE = ["onClick"], OE = ["onClick"], TE = ["src", "alt"], EE = ["multiple", "accept", "capture", "disabled"], IE = ["src"];
function BE(e, n) {
  const t = ae("var-icon"), o = ae("var-hover-overlay"), r = ae("var-form-details"), a = ae("var-popup"), i = ze("ripple"), l = ze("hover");
  return b(), k(
    "div",
    {
      class: v(e.classes(e.n(), e.n("$--box")))
    },
    [
      B(
        "div",
        {
          class: v(e.n("file-list"))
        },
        [
          (b(!0), k(
            Ve,
            null,
            Ke(e.files, (s) => De((b(), k("div", {
              class: v(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
              key: s.id,
              onClick: (u) => e.preview(s)
            }, [
              B(
                "div",
                {
                  class: v(e.n("file-name"))
                },
                re(s.name || s.url),
                3
                /* TEXT, CLASS */
              ),
              e.removable ? (b(), k("div", {
                key: 0,
                class: v(e.n("file-close")),
                onClick: yn((u) => e.handleRemove(s), ["stop"])
              }, [
                G(t, {
                  class: v(e.n("file-close-icon")),
                  "var-uploader-cover": "",
                  name: "delete"
                }, null, 8, ["class"])
              ], 10, OE)) : Q("v-if", !0),
              s.cover ? (b(), k("img", {
                key: 1,
                class: v(e.n("file-cover")),
                style: F({ objectFit: s.fit }),
                src: s.cover,
                alt: s.name
              }, null, 14, TE)) : Q("v-if", !0),
              B(
                "div",
                {
                  class: v(e.n("file-indicator"))
                },
                [
                  B(
                    "div",
                    {
                      class: v(
                        e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])
                      ),
                      style: F({ width: s.state === "success" || s.state === "error" ? "100%" : `${s.progress}%` })
                    },
                    null,
                    6
                    /* CLASS, STYLE */
                  )
                ],
                2
                /* CLASS */
              )
            ], 10, PE)), [
              [i, { disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple }]
            ])),
            128
            /* KEYED_FRAGMENT */
          )),
          !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? De((b(), k(
            "div",
            {
              key: 0,
              class: v(
                e.classes(
                  [!e.$slots.default, `${e.n("action")} ${e.formatElevation(e.elevation, 2)}`],
                  [e.disabled || e.formDisabled, e.n("--disabled")]
                )
              ),
              onClick: n[2] || (n[2] = (...s) => e.handleActionClick && e.handleActionClick(...s))
            },
            [
              B("input", {
                ref: "input",
                type: "file",
                class: v(e.n("action-input")),
                multiple: e.multiple,
                accept: e.accept,
                capture: e.capture,
                disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
                onChange: n[0] || (n[0] = (...s) => e.handleChange && e.handleChange(...s)),
                onClick: n[1] || (n[1] = yn(() => {
                }, ["stop"]))
              }, null, 42, EE),
              R(e.$slots, "default", {}, () => [
                G(t, {
                  class: v(e.n("action-icon")),
                  "var-uploader-cover": "",
                  name: "plus"
                }, null, 8, ["class"]),
                G(o, {
                  hovering: e.hovering && !e.disabled && !e.formDisabled
                }, null, 8, ["hovering"])
              ])
            ],
            2
            /* CLASS */
          )), [
            [i, {
              disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || !!e.$slots.default
            }],
            [l, e.handleHovering, "desktop"]
          ]) : Q("v-if", !0)
        ],
        2
        /* CLASS */
      ),
      G(r, {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      }, fr({
        _: 2
        /* DYNAMIC */
      }, [
        e.$slots["extra-message"] ? {
          name: "extra-message",
          fn: me(() => [
            R(e.$slots, "extra-message")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["error-message", "extra-message"]),
      G(a, {
        class: v(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[3] || (n[3] = (s) => e.showPreview = s),
        onClosed: n[4] || (n[4] = (s) => e.currentPreview = null)
      }, {
        default: me(() => {
          var s, u;
          return [
            e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (b(), k("video", {
              key: 0,
              class: v(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (u = e.currentPreview) == null ? void 0 : u.url
            }, null, 10, IE)) : Q("v-if", !0)
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["class", "show"])
    ],
    2
    /* CLASS */
  );
}
const bp = ee({
  name: wE,
  directives: { Ripple: Qe, Hover: On },
  components: {
    VarIcon: He,
    VarPopup: gt,
    VarFormDetails: $n,
    VarHoverOverlay: Bn
  },
  props: gp,
  setup(e) {
    const n = C(null), t = C(!1), o = C(null), r = N(() => {
      const {
        maxlength: H,
        modelValue: { length: oe }
      } = e;
      return bn(H) ? `${oe} / ${H}` : "";
    }), { form: a, bindForm: i } = Mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Dn(), { hovering: c, handleHovering: f } = Fn(), m = N(() => {
      const { modelValue: H, hideList: oe } = e;
      return oe ? [] : H;
    });
    let g = !1;
    const p = {
      getSuccess: V,
      getError: L,
      getLoading: U
    };
    w(i, {
      validate: Z,
      resetValidation: d,
      reset: he
    }), ce(
      () => e.modelValue,
      () => {
        !g && j("onChange"), g = !1;
      },
      { deep: !0 }
    );
    function h(H) {
      const { disabled: oe, previewed: W, preventDefaultPreview: J, onPreview: te } = e;
      if (a != null && a.disabled.value || oe || !W || (w(te, je(H)), J))
        return;
      const { url: q } = H;
      if (Gs(q)) {
        No(q);
        return;
      }
      Xs(q) && (o.value = H, t.value = !0);
    }
    function S(H) {
      return {
        id: kE++,
        url: "",
        cover: "",
        name: H.name,
        file: H,
        progress: 0
      };
    }
    function T(H) {
      const oe = H.target, { files: W } = oe;
      return Array.from(W);
    }
    function $(H) {
      return ir(this, null, function* () {
        const oe = H.file;
        if (e.resolveType === "default" && oe.type.startsWith("image") || e.resolveType === "data-url") {
          const J = yield Xp(oe);
          H.cover = J, H.url = J;
        }
        return H;
      });
    }
    function P(H) {
      return H.map($);
    }
    function I(H) {
      const { onBeforeRead: oe } = e;
      return H.map(
        (W) => new Promise((J) => {
          oe || J({
            valid: !0,
            varFile: W
          });
          const te = Wt(w(oe, je(W)));
          Promise.all(te).then((q) => {
            J({
              valid: q.every(Boolean),
              varFile: W
            });
          });
        })
      );
    }
    function O(H) {
      return ir(this, null, function* () {
        const { maxsize: oe, maxlength: W, modelValue: J, onOversize: te, onAfterRead: q, onBeforeFilter: se, readonly: D, disabled: Y } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || Y || D)
          return;
        const pe = (Ee) => Ee.filter((Le) => Le.file.size > z(oe) ? (w(te, je(Le)), !1) : !0), Te = (Ee) => {
          const Le = Math.min(Ee.length, z(W) - J.length);
          return Ee.slice(0, Le);
        }, x = (Ee) => ir(this, null, function* () {
          if (!se)
            return Ee;
          const Le = Wt(se);
          for (const et of Le)
            Ee = yield et(Ee);
          return Ee;
        });
        let $e = T(H).map(S);
        $e = yield x($e), $e = oe != null ? pe($e) : $e, $e = W != null ? Te($e) : $e;
        const Fe = yield Promise.all(P($e)), Pe = (yield Promise.all(I(Fe))).filter(({ valid: Ee }) => Ee).map(({ varFile: Ee }) => Ee);
        w(e["onUpdate:modelValue"], [...J, ...Pe]), H.target.value = "", Pe.forEach((Ee) => w(q, je(Ee)));
      });
    }
    function M(H) {
      return ir(this, null, function* () {
        const { disabled: oe, readonly: W, modelValue: J, onBeforeRemove: te, onRemove: q } = e;
        if (a != null && a.disabled.value || a != null && a.readonly.value || oe || W)
          return;
        if (te) {
          const D = Wt(w(te, je(H)));
          if ((yield Promise.all(D)).some((Y) => !Y))
            return;
        }
        const se = J.filter((D) => D !== H);
        w(q, je(H)), j("onRemove"), w(e["onUpdate:modelValue"], se);
      });
    }
    function E(H) {
      if (!(a != null && a.disabled.value || e.disabled)) {
        if (e.onClickAction) {
          w(e.onClickAction, _, H);
          return;
        }
        _();
      }
    }
    function V() {
      return e.modelValue.filter((H) => H.state === "success");
    }
    function L() {
      return e.modelValue.filter((H) => H.state === "error");
    }
    function U() {
      return e.modelValue.filter((H) => H.state === "loading");
    }
    function _() {
      n.value.click();
    }
    function X() {
      o.value = null, t.value = !1, No.close();
    }
    function j(H) {
      qe(() => {
        const { validateTrigger: oe, rules: W, modelValue: J } = e;
        s(oe, H, W, J, p);
      });
    }
    function Z() {
      return u(e.rules, e.modelValue, p);
    }
    function he() {
      g = !0, w(e["onUpdate:modelValue"], []), d();
    }
    return {
      input: n,
      files: m,
      showPreview: t,
      currentPreview: o,
      errorMessage: l,
      maxlengthText: r,
      hovering: c,
      formDisabled: a == null ? void 0 : a.disabled,
      formReadonly: a == null ? void 0 : a.readonly,
      n: CE,
      classes: SE,
      formatElevation: dn,
      toNumber: z,
      handleHovering: f,
      isHTMLSupportVideo: Xs,
      isHTMLSupportImage: Gs,
      preview: h,
      handleChange: O,
      handleRemove: M,
      getSuccess: V,
      getError: L,
      getLoading: U,
      validate: Z,
      resetValidation: d,
      reset: he,
      chooseFile: _,
      closePreview: X,
      handleActionClick: E,
      toSizeUnit: we
    };
  }
});
bp.render = BE;
var ii = bp;
ie(ii);
ue(ii, gp);
const P6 = ii;
var jl = ii;
const yp = {
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  content: String,
  image: String,
  rotate: {
    type: Number,
    default: -22
  },
  offsetX: {
    type: Number,
    default: 0
  },
  offsetY: {
    type: Number,
    default: 0
  },
  gapX: {
    type: Number,
    default: 0
  },
  gapY: {
    type: Number,
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 10
  },
  opacity: {
    type: [Number, String],
    default: 0.5
  },
  fullscreen: Boolean,
  font: {
    type: Object,
    default: () => ({
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      fontSize: 14
    })
  }
};
var DE = Object.defineProperty, ME = Object.defineProperties, NE = Object.getOwnPropertyDescriptors, Ld = Object.getOwnPropertySymbols, VE = Object.prototype.hasOwnProperty, AE = Object.prototype.propertyIsEnumerable, Rd = (e, n, t) => n in e ? DE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, zE = (e, n) => {
  for (var t in n || (n = {}))
    VE.call(n, t) && Rd(e, t, n[t]);
  if (Ld)
    for (var t of Ld(n))
      AE.call(n, t) && Rd(e, t, n[t]);
  return e;
}, LE = (e, n) => ME(e, NE(n)), Ud = (e, n, t) => new Promise((o, r) => {
  var a = (s) => {
    try {
      l(t.next(s));
    } catch (u) {
      r(u);
    }
  }, i = (s) => {
    try {
      l(t.throw(s));
    } catch (u) {
      r(u);
    }
  }, l = (s) => s.done ? o(s.value) : Promise.resolve(s.value).then(a, i);
  l((t = t.apply(e, n)).next());
});
const { name: RE, n: UE, classes: HE } = ne("watermark"), FE = { ref: "svgRef" }, YE = ["viewBox", "width", "height"], jE = ["width", "height"], WE = ["href", "xlink:href", "x", "y", "width", "height"];
function qE(e, n) {
  return b(), k(
    "div",
    {
      class: v(e.n())
    },
    [
      R(e.$slots, "default"),
      (b(), Ce(qn, {
        to: "body",
        disabled: !e.fullscreen
      }, [
        B(
          "div",
          {
            ref: "containerRef",
            class: v(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
            style: F({
              backgroundImage: `url(${e.watermarkUrl})`,
              zIndex: e.zIndex
            })
          },
          [
            De(B(
              "div",
              FE,
              [
                (b(), k("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: `0 0 ${e.width + e.gapX} ${e.height + e.gapY}`,
                  width: `${e.width + e.gapX}`,
                  height: `${e.height + e.gapY}`,
                  style: F({
                    padding: `0 ${e.gapX}px ${e.gapY}px 0`,
                    opacity: e.opacity
                  })
                }, [
                  e.showContent() ? (b(), k("foreignObject", {
                    key: 0,
                    x: "0",
                    y: "0",
                    width: e.width,
                    height: e.height
                  }, [
                    B(
                      "div",
                      {
                        xmlns: "http://www.w3.org/1999/xhtml",
                        style: F({
                          transform: `translate(${e.offsetX}px, ${e.offsetY}px) rotate(${e.rotate}deg)`,
                          transformOrigin: "center"
                        })
                      },
                      [
                        R(e.$slots, "content", {}, () => [
                          B(
                            "span",
                            {
                              style: F(LE(zE({}, e.font), { fontSize: `${e.font.fontSize}px`, color: e.textColor }))
                            },
                            re(e.content),
                            5
                            /* TEXT, STYLE */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    )
                  ], 8, jE)) : Q("v-if", !0),
                  !e.$slots.content && e.image ? (b(), k("image", {
                    key: 1,
                    href: e.imageUrl,
                    "xlink:href": e.imageUrl,
                    x: e.offsetX,
                    y: e.offsetY,
                    width: e.width,
                    height: e.height,
                    style: F({
                      transform: `rotate(${e.rotate}deg)`,
                      transformOrigin: "center"
                    })
                  }, null, 12, WE)) : Q("v-if", !0)
                ], 12, YE))
              ],
              512
              /* NEED_PATCH */
            ), [
              [Hn, !1]
            ])
          ],
          6
          /* CLASS, STYLE */
        )
      ], 8, ["disabled"]))
    ],
    2
    /* CLASS */
  );
}
const $p = ee({
  name: RE,
  props: yp,
  setup(e, { slots: n }) {
    const t = C(""), o = C(""), r = C(""), a = C(null), i = C(null);
    ce(
      () => [
        e.image,
        e.font,
        e.content,
        e.height,
        e.width,
        e.rotate,
        e.gapX,
        e.gapY,
        e.offsetX,
        e.offsetY,
        e.opacity
      ],
      c,
      {
        deep: !0
      }
    ), no(c), zo(d);
    function l() {
      return !!(n.content || e.content && !e.image);
    }
    function s() {
      return Ud(this, null, function* () {
        return new Promise((f) => {
          const m = document.createElement("canvas"), g = m.getContext("2d"), p = new Image();
          p.crossOrigin = "anonymous", p.referrerPolicy = "no-referrer", p.src = e.image, p.onload = () => {
            m.width = p.width, m.height = p.height, g.drawImage(p, 0, 0), f(m.toDataURL());
          };
        });
      });
    }
    function u(f) {
      const m = new Blob([f], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(m);
    }
    function d() {
      t.value && URL.revokeObjectURL(t.value);
    }
    function c() {
      return Ud(this, null, function* () {
        r.value = At(i.value).color, e.image && (o.value = yield s()), yield qe(), d(), t.value = u(a.value.innerHTML);
      });
    }
    return {
      svgRef: a,
      containerRef: i,
      watermarkUrl: t,
      imageUrl: o,
      textColor: r,
      n: UE,
      classes: HE,
      showContent: l,
      resize: c
    };
  }
});
$p.render = qE;
var li = $p;
ie(li);
ue(li, yp);
const O6 = li;
var Wl = li;
const GE = "2.20.0";
function XE(e) {
  Si.install && e.use(Si), ki.install && e.use(ki), Ti.install && e.use(Ti), Ei.install && e.use(Ei), Ii.install && e.use(Ii), gr.install && e.use(gr), Bi.install && e.use(Bi), Di.install && e.use(Di), Mi.install && e.use(Mi), Ni.install && e.use(Ni), pn.install && e.use(pn), Vi.install && e.use(Vi), Ai.install && e.use(Ai), br.install && e.use(br), Oo.install && e.use(Oo), zi.install && e.use(zi), yr.install && e.use(yr), Li.install && e.use(Li), Ri.install && e.use(Ri), Ui.install && e.use(Ui), kn.install && e.use(kn), ji.install && e.use(ji), Zi.install && e.use(Zi), Qi.install && e.use(Qi), _i.install && e.use(_i), xi.install && e.use(xi), Pr.install && e.use(Pr), tl.install && e.use(tl), ol.install && e.use(ol), Bo.install && e.use(Bo), rl.install && e.use(rl), al.install && e.use(al), $n.install && e.use($n), On.install && e.use(On), Bn.install && e.use(Bn), He.install && e.use(He), il.install && e.use(il), No.install && e.use(No), ll.install && e.use(ll), sl.install && e.use(sl), Tr.install && e.use(Tr), Po.install && e.use(Po), ul.install && e.use(ul), dl.install && e.use(dl), Kt.install && e.use(Kt), cl.install && e.use(cl), Ci.install && e.use(Ci), eo.install && e.use(eo), fl.install && e.use(fl), vl.install && e.use(vl), ml.install && e.use(ml), pl.install && e.use(pl), hl.install && e.use(hl), gl.install && e.use(gl), bl.install && e.use(bl), gt.install && e.use(gt), yl.install && e.use(yl), $l.install && e.use($l), wl.install && e.use(wl), Cl.install && e.use(Cl), Sl.install && e.use(Sl), kl.install && e.use(kl), Qe.install && e.use(Qe), Pl.install && e.use(Pl), Ol.install && e.use(Ol), Tl.install && e.use(Tl), El.install && e.use(El), Bl.install && e.use(Bl), Dl.install && e.use(Dl), Ml.install && e.use(Ml), Nl.install && e.use(Nl), Qt.install && e.use(Qt), Vl.install && e.use(Vl), Do.install && e.use(Do), Mo.install && e.use(Mo), Al.install && e.use(Al), zl.install && e.use(zl), Ll.install && e.use(Ll), Rl.install && e.use(Rl), Ul.install && e.use(Ul), Hl.install && e.use(Hl), Fl.install && e.use(Fl), Yl.install && e.use(Yl), Or.install && e.use(Or), jl.install && e.use(jl), Wl.install && e.use(Wl);
}
const T6 = {
  version: GE,
  install: XE,
  ActionSheet: Si,
  AppBar: ki,
  Avatar: Ti,
  AvatarGroup: Ei,
  BackTop: Ii,
  Badge: gr,
  BottomNavigation: Bi,
  BottomNavigationItem: Di,
  Breadcrumb: Mi,
  Breadcrumbs: Ni,
  Button: pn,
  ButtonGroup: Vi,
  Card: Ai,
  Cell: br,
  Checkbox: Oo,
  CheckboxGroup: zi,
  Chip: yr,
  Col: Li,
  Collapse: Ri,
  CollapseItem: Ui,
  Context: kn,
  Countdown: ji,
  Counter: Zi,
  DatePicker: Qi,
  Dialog: _i,
  Divider: xi,
  Drag: Pr,
  Ellipsis: tl,
  Fab: ol,
  FieldDecorator: Bo,
  FloatingPanel: rl,
  Form: al,
  FormDetails: $n,
  Hover: On,
  HoverOverlay: Bn,
  Icon: He,
  Image: il,
  ImagePreview: No,
  IndexAnchor: ll,
  IndexBar: sl,
  Input: Tr,
  Lazy: Po,
  Link: ul,
  List: dl,
  Loading: Kt,
  LoadingBar: cl,
  Locale: Ci,
  Menu: eo,
  MenuOption: fl,
  MenuSelect: vl,
  Option: ml,
  Overlay: pl,
  Pagination: hl,
  Paper: gl,
  Picker: bl,
  Popup: gt,
  Progress: yl,
  PullRefresh: $l,
  Radio: wl,
  RadioGroup: Cl,
  Rate: Sl,
  Result: kl,
  Ripple: Qe,
  Row: Pl,
  Select: Ol,
  Skeleton: Tl,
  Slider: El,
  Snackbar: Bl,
  Space: Dl,
  Step: Ml,
  Steps: Nl,
  Sticky: Qt,
  StyleProvider: Vl,
  Swipe: Do,
  SwipeItem: Mo,
  Switch: Al,
  Tab: zl,
  TabItem: Ll,
  Table: Rl,
  Tabs: Ul,
  TabsItems: Hl,
  Themes: Fl,
  TimePicker: Yl,
  Tooltip: Or,
  Uploader: jl,
  Watermark: Wl
};
export {
  Si as ActionSheet,
  ki as AppBar,
  Ti as Avatar,
  Ei as AvatarGroup,
  Ii as BackTop,
  gr as Badge,
  Bi as BottomNavigation,
  Di as BottomNavigationItem,
  Mi as Breadcrumb,
  Ni as Breadcrumbs,
  pn as Button,
  Vi as ButtonGroup,
  Ai as Card,
  br as Cell,
  Oo as Checkbox,
  zi as CheckboxGroup,
  yr as Chip,
  Li as Col,
  Ri as Collapse,
  Ui as CollapseItem,
  kn as Context,
  ji as Countdown,
  Zi as Counter,
  Qi as DatePicker,
  _i as Dialog,
  xi as Divider,
  Pr as Drag,
  tl as Ellipsis,
  ol as Fab,
  Bo as FieldDecorator,
  rl as FloatingPanel,
  al as Form,
  $n as FormDetails,
  On as Hover,
  Bn as HoverOverlay,
  He as Icon,
  il as Image,
  No as ImagePreview,
  ll as IndexAnchor,
  sl as IndexBar,
  Tr as Input,
  Po as Lazy,
  ul as Link,
  dl as List,
  Kt as Loading,
  cl as LoadingBar,
  Ci as Locale,
  eo as Menu,
  fl as MenuOption,
  vl as MenuSelect,
  ml as Option,
  pl as Overlay,
  Oi as PIXEL,
  hl as Pagination,
  gl as Paper,
  bl as Picker,
  gt as Popup,
  yl as Progress,
  $l as PullRefresh,
  wl as Radio,
  Cl as RadioGroup,
  Sl as Rate,
  kl as Result,
  Qe as Ripple,
  Pl as Row,
  Ym as SNACKBAR_TYPE,
  Ol as Select,
  Tl as Skeleton,
  El as Slider,
  Bl as Snackbar,
  Dl as Space,
  Ml as Step,
  Nl as Steps,
  Qt as Sticky,
  Vl as StyleProvider,
  Do as Swipe,
  Mo as SwipeItem,
  Al as Switch,
  zl as Tab,
  Ll as TabItem,
  Rl as Table,
  Ul as Tabs,
  Hl as TabsItems,
  Fl as Themes,
  Yl as TimePicker,
  Or as Tooltip,
  jl as Uploader,
  Wl as Watermark,
  eI as _ActionSheetComponent,
  nI as _AppBarComponent,
  oI as _AvatarComponent,
  rI as _AvatarGroupComponent,
  uI as _BackTopComponent,
  dI as _BadgeComponent,
  cI as _BottomNavigationComponent,
  fI as _BottomNavigationItemComponent,
  vI as _BreadcrumbComponent,
  mI as _BreadcrumbsComponent,
  sI as _ButtonComponent,
  pI as _ButtonGroupComponent,
  hI as _CardComponent,
  gI as _CellComponent,
  yI as _CheckboxComponent,
  $I as _CheckboxGroupComponent,
  wI as _ChipComponent,
  CI as _ColComponent,
  SI as _CollapseComponent,
  kI as _CollapseItemComponent,
  ZE as _ContextComponent,
  PI as _CountdownComponent,
  OI as _CounterComponent,
  EI as _DatePickerComponent,
  II as _DialogComponent,
  BI as _DividerComponent,
  DI as _DragComponent,
  NI as _EllipsisComponent,
  VI as _FabComponent,
  AI as _FieldDecoratorComponent,
  zI as _FloatingPanelComponent,
  LI as _FormComponent,
  bI as _FormDetailsComponent,
  lI as _HoverComponent,
  iI as _HoverOverlayComponent,
  _E as _IconComponent,
  RI as _ImageComponent,
  FI as _ImagePreviewComponent,
  YI as _IndexAnchorComponent,
  jI as _IndexBarComponent,
  WI as _InputComponent,
  tI as _LazyComponent,
  qI as _LinkComponent,
  GI as _ListComponent,
  XI as _LoadingBarComponent,
  aI as _LoadingComponent,
  xE as _LocaleComponent,
  KI as _MenuComponent,
  ZI as _MenuOptionComponent,
  JI as _MenuSelectComponent,
  QI as _OptionComponent,
  _I as _OverlayComponent,
  xI as _PaginationComponent,
  e6 as _PaperComponent,
  n6 as _PickerComponent,
  QE as _PopupComponent,
  t6 as _ProgressComponent,
  o6 as _PullRefreshComponent,
  r6 as _RadioComponent,
  a6 as _RadioGroupComponent,
  i6 as _RateComponent,
  l6 as _ResultComponent,
  JE as _RippleComponent,
  s6 as _RowComponent,
  u6 as _SelectComponent,
  d6 as _SkeletonComponent,
  c6 as _SliderComponent,
  f6 as _SnackbarComponent,
  v6 as _SpaceComponent,
  m6 as _StepComponent,
  p6 as _StepsComponent,
  TI as _StickyComponent,
  h6 as _StyleProviderComponent,
  UI as _SwipeComponent,
  HI as _SwipeItemComponent,
  g6 as _SwitchComponent,
  b6 as _TabComponent,
  y6 as _TabItemComponent,
  $6 as _TableComponent,
  w6 as _TabsComponent,
  C6 as _TabsItemsComponent,
  S6 as _ThemesComponent,
  k6 as _TimePickerComponent,
  MI as _TooltipComponent,
  P6 as _UploaderComponent,
  O6 as _WatermarkComponent,
  lc as actionSheetProps,
  Ql as add,
  vc as appBarProps,
  Sc as avatarGroupProps,
  wc as avatarProps,
  Rc as backTopProps,
  Hc as badgeProps,
  qc as bottomNavigationItemProps,
  Yc as bottomNavigationProps,
  Xc as breadcrumbProps,
  Jc as breadcrumbsProps,
  _c as buttonGroupProps,
  Ac as buttonProps,
  ef as cardProps,
  tf as cellProps,
  cf as checkboxGroupProps,
  lf as checkboxProps,
  vf as chipProps,
  pf as colProps,
  wf as collapseItemProps,
  yf as collapseProps,
  Sf as countdownProps,
  zf as counterProps,
  qf as datePickerProps,
  T6 as default,
  _e as defaultLazyOptions,
  _f as dialogProps,
  ev as dividerProps,
  tv as dragProps,
  mv as ellipsisProps,
  sc as enUS,
  hv as fabProps,
  ya as fieldDecoratorProps,
  rf as formDetailsProps,
  $v as formProps,
  Oc as hoverOverlayProps,
  Xe as iconProps,
  hc as imageCache,
  Tv as imagePreviewProps,
  Cv as imageProps,
  Bv as indexAnchorProps,
  Mv as indexBarProps,
  Vv as inputProps,
  XE as install,
  zv as linkProps,
  Rv as listProps,
  $S as loadingBarProps,
  Kn as loadingProps,
  Qv as menuOptionProps,
  bs as menuProps,
  xv as menuSelectProps,
  cc as merge,
  om as optionProps,
  am as overlayProps,
  Je as pack,
  dc as packs,
  im as paginationProps,
  sm as paperProps,
  dm as pickerProps,
  uo as popupProps,
  fm as progressProps,
  mm as pullRefreshProps,
  ym as radioGroupProps,
  hm as radioProps,
  wm as rateProps,
  Im as resultProps,
  Dm as rowProps,
  Nm as selectProps,
  Am as skeletonProps,
  Lm as sliderProps,
  ys as snackbarProps,
  qm as spaceProps,
  Gm as stepProps,
  Zm as stepsProps,
  yo as stickyProps,
  Qm as styleProviderProps,
  ms as swipeProps,
  _m as switchProps,
  op as tabItemProps,
  ep as tabProps,
  ap as tableProps,
  up as tabsItemsProps,
  lp as tabsProps,
  cp as timePickerProps,
  fv as tooltipProps,
  gp as uploaderProps,
  _l as use,
  Fn as useHoverOverlay,
  Jl as useLocale,
  GE as version,
  yp as watermarkProps,
  Zl as zhCN
};
