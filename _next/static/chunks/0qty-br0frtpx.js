(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  98879,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let i = e.r(71645),
      a = "u" < typeof window,
      n = a ? () => {} : i.useLayoutEffect,
      l = a ? () => {} : i.useEffect;
    function s(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function s() {
        if (t && t.mountedInstances) {
          let e = i.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        a && (t?.mountedInstances?.add(e.children), s()),
        n(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        n(
          () => (
            t && (t._pendingUpdate = s),
            () => {
              t && (t._pendingUpdate = s);
            }
          )
        ),
        l(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  25633,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      default: function () {
        return g;
      },
      defaultHead: function () {
        return u;
      },
    };
    for (var a in i) Object.defineProperty(r, a, { enumerable: !0, get: i[a] });
    let n = e.r(55682),
      l = e.r(90809),
      s = e.r(43476),
      o = l._(e.r(71645)),
      d = n._(e.r(98879)),
      c = e.r(42732);
    function u() {
      return [
        (0, s.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, s.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function m(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === o.default.Fragment
        ? e.concat(
            o.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(33525);
    let f = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
      let t, r, i, a;
      return e
        .reduce(m, [])
        .reverse()
        .concat(u().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (i = new Set()),
          (a = {}),
          (e) => {
            let n = !0,
              l = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              l = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (n = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (n = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = f.length; t < r; t++) {
                  let r = f[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) i.has(r) ? (n = !1) : i.add(r);
                    else {
                      let t = e.props[r],
                        i = a[r] || new Set();
                      ("name" !== r || !l) && i.has(t)
                        ? (n = !1)
                        : (i.add(t), (a[r] = i));
                    }
                }
            }
            return n;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return o.default.cloneElement(e, { key: r });
        });
    }
    let g = function ({ children: e }) {
      let t = (0, o.useContext)(c.HeadManagerContext);
      return (0, s.jsx)(d.default, {
        reduceComponentsToState: p,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  88143,
  (e, t, r) => {
    "use strict";
    function i({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: a,
      blurDataURL: n,
      objectFit: l,
    }) {
      let s = r ? 40 * r : e,
        o = a ? 40 * a : t,
        d = s && o ? `viewBox='0 0 ${s} ${o}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        d
          ? "none"
          : "contain" === l
          ? "xMidYMid"
          : "cover" === l
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
  },
  87690,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      VALID_LOADERS: function () {
        return n;
      },
      imageConfigDefault: function () {
        return l;
      },
    };
    for (var a in i) Object.defineProperty(r, a, { enumerable: !0, get: i[a] });
    let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
      l = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1,
      };
  },
  8927,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return d;
        },
      }),
      e.r(33525);
    let i = e.r(43369),
      a = e.r(88143),
      n = e.r(87690),
      l = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function s(e) {
      return void 0 !== e.default;
    }
    function o(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function d(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: c = !1,
        preload: u = !1,
        loading: m,
        className: f,
        quality: p,
        width: g,
        height: h,
        fill: x = !1,
        style: _,
        overrideSrc: b,
        onLoad: v,
        onLoadingComplete: w,
        placeholder: y = "empty",
        blurDataURL: j,
        fetchPriority: C,
        decoding: S = "async",
        layout: N,
        objectFit: P,
        objectPosition: k,
        lazyBoundary: T,
        lazyRoot: O,
        ...R
      },
      E
    ) {
      var I;
      let z,
        M,
        X,
        { imgConf: $, showAltText: W, blurComplete: D, defaultLoader: L } = E,
        A = $ || n.imageConfigDefault;
      if ("allSizes" in A) z = A;
      else {
        let e = [...A.deviceSizes, ...A.imageSizes].sort((e, t) => e - t),
          t = A.deviceSizes.sort((e, t) => e - t),
          r = A.qualities?.sort((e, t) => e - t);
        z = { ...A, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === L)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let B = R.loader || L;
      delete R.loader, delete R.srcSet;
      let q = "__next_img_default" in B;
      if (q) {
        if ("custom" === z.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = B;
        B = (t) => {
          let { config: r, ...i } = t;
          return e(i);
        };
      }
      if (N) {
        "fill" === N && (x = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[N];
        e && (_ = { ..._, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[N];
        r && !t && (t = r);
      }
      let U = "",
        F = o(g),
        G = o(h);
      if ((I = e) && "object" == typeof I && (s(I) || void 0 !== I.src)) {
        let t = s(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((M = t.blurWidth),
          (X = t.blurHeight),
          (j = j || t.blurDataURL),
          (U = t.src),
          !x)
        )
          if (F || G) {
            if (F && !G) {
              let e = F / t.width;
              G = Math.round(t.height * e);
            } else if (!F && G) {
              let e = G / t.height;
              F = Math.round(t.width * e);
            }
          } else (F = t.width), (G = t.height);
      }
      let V = !c && !u && ("lazy" === m || void 0 === m);
      (!(e = "string" == typeof e ? e : U) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (V = !1)),
        z.unoptimized && (r = !0),
        q &&
          !z.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0);
      let H = o(p),
        Q = Object.assign(
          x
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: P,
                objectPosition: k,
              }
            : {},
          W ? {} : { color: "transparent" },
          _
        ),
        K =
          D || "empty" === y
            ? null
            : "blur" === y
            ? `url("data:image/svg+xml;charset=utf-8,${(0, a.getImageBlurSvg)({
                widthInt: F,
                heightInt: G,
                blurWidth: M,
                blurHeight: X,
                blurDataURL: j || "",
                objectFit: Q.objectFit,
              })}")`
            : `url("${y}")`,
        J = l.includes(Q.objectFit)
          ? "fill" === Q.objectFit
            ? "100% 100%"
            : "cover"
          : Q.objectFit,
        Y = K
          ? {
              backgroundSize: J,
              backgroundPosition: Q.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: K,
            }
          : {},
        Z = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: a,
          quality: n,
          sizes: l,
          loader: s,
        }) {
          if (r) {
            if (t.startsWith("/") && !t.startsWith("//")) {
              let e = (0, i.getDeploymentId)();
              if (e) {
                let r = t.indexOf("?");
                if (-1 !== r) {
                  let i = new URLSearchParams(t.slice(r + 1));
                  i.get("dpl") ||
                    (i.append("dpl", e),
                    (t = t.slice(0, r) + "?" + i.toString()));
                } else t += `?dpl=${e}`;
              }
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: o, kind: d } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              i
            ) {
              if (i) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  a = [];
                for (let e; (e = r.exec(i)); ) a.push(parseInt(e[2]));
                if (a.length) {
                  let r = 0.01 * Math.min(...a);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, a, l),
            c = o.length - 1;
          return {
            sizes: l || "w" !== d ? l : "100vw",
            srcSet: o
              .map(
                (r, i) =>
                  `${s({ config: e, src: t, quality: n, width: r })} ${
                    "w" === d ? r : i + 1
                  }${d}`
              )
              .join(", "),
            src: s({ config: e, src: t, quality: n, width: o[c] }),
          };
        })({
          config: z,
          src: e,
          unoptimized: r,
          width: F,
          quality: H,
          sizes: t,
          loader: B,
        }),
        ee = V ? "lazy" : m;
      return {
        props: {
          ...R,
          loading: ee,
          fetchPriority: C,
          width: F,
          height: G,
          decoding: S,
          className: f,
          style: { ...Q, ...Y },
          sizes: Z.sizes,
          srcSet: Z.srcSet,
          src: b || Z.src,
        },
        meta: { unoptimized: r, preload: u || c, placeholder: y, fill: x },
      };
    }
  },
  18556,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let i = e.r(55682)._(e.r(71645)),
      a = e.r(87690),
      n = i.default.createContext(a.imageConfigDefault);
  },
  65856,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let i = e.r(55682)._(e.r(71645)).default.createContext(null);
  },
  70965,
  (e, t, r) => {
    "use strict";
    function i(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            t.qualities[0]
          )
        : r;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
  },
  1948,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return l;
        },
      });
    let i = e.r(70965),
      a = e.r(43369);
    function n({ config: e, src: t, width: r, quality: l }) {
      let s = (0, a.getDeploymentId)();
      if (t.startsWith("/") && !t.startsWith("//")) {
        let e = t.indexOf("?");
        if (-1 !== e) {
          let r = new URLSearchParams(t.slice(e + 1)),
            i = r.get("dpl");
          if (i) {
            (s = i), r.delete("dpl");
            let a = r.toString();
            t = t.slice(0, e) + (a ? "?" + a : "");
          }
        }
      }
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let o = (0, i.findClosestQuality)(l, e);
      return `${e.path}${t}`;
    }
    n.__next_img_default = !0;
    let l = n;
  },
  18581,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let i = e.r(71645);
    function a(e, t) {
      let r = (0, i.useRef)(null),
        a = (0, i.useRef)(null);
      return (0, i.useCallback)(
        (i) => {
          if (null === i) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = a.current;
            t && ((a.current = null), t());
          } else e && (r.current = n(e, i)), t && (a.current = n(t, i));
        },
        [e, t]
      );
    }
    function n(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  5500,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return v;
        },
      });
    let i = e.r(55682),
      a = e.r(90809),
      n = e.r(43476),
      l = a._(e.r(71645)),
      s = i._(e.r(74080)),
      o = i._(e.r(25633)),
      d = e.r(8927),
      c = e.r(87690),
      u = e.r(18556);
    e.r(33525);
    let m = e.r(65856),
      f = i._(e.r(1948)),
      p = e.r(18581),
      g = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !0,
        unoptimized: !1,
      };
    function h(e, t, r, i, a, n, l) {
      let s = e?.src;
      e &&
        e["data-loaded-src"] !== s &&
        ((e["data-loaded-src"] = s),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && a(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let i = !1,
                  a = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => i,
                  isPropagationStopped: () => a,
                  persist: () => {},
                  preventDefault: () => {
                    (i = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (a = !0), t.stopPropagation();
                  },
                });
              }
              i?.current && i.current(e);
            }
          }));
    }
    function x(e) {
      return l.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let _ = (0, l.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: i,
          width: a,
          decoding: s,
          className: o,
          style: d,
          fetchPriority: c,
          placeholder: u,
          loading: m,
          unoptimized: f,
          fill: g,
          onLoadRef: _,
          onLoadingCompleteRef: b,
          setBlurComplete: v,
          setShowAltText: w,
          sizesInput: y,
          onLoad: j,
          onError: C,
          ...S
        },
        N
      ) => {
        let P = (0, l.useCallback)(
            (e) => {
              e && (C && (e.src = e.src), e.complete && h(e, u, _, b, v, f, y));
            },
            [e, u, _, b, v, C, f, y]
          ),
          k = (0, p.useMergedRef)(N, P);
        return (0, n.jsx)("img", {
          ...S,
          ...x(c),
          loading: m,
          width: a,
          height: i,
          decoding: s,
          "data-nimg": g ? "fill" : "1",
          className: o,
          style: d,
          sizes: r,
          srcSet: t,
          src: e,
          ref: k,
          onLoad: (e) => {
            h(e.currentTarget, u, _, b, v, f, y);
          },
          onError: (e) => {
            w(!0), "empty" !== u && v(!0), C && C(e);
          },
        });
      }
    );
    function b({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...x(t.fetchPriority),
      };
      return e && s.default.preload
        ? (s.default.preload(t.src, r), null)
        : (0, n.jsx)(o.default, {
            children: (0, n.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let v = (0, l.forwardRef)((e, t) => {
      let r = (0, l.useContext)(m.RouterContext),
        i = (0, l.useContext)(u.ImageConfigContext),
        a = (0, l.useMemo)(() => {
          let e = g || i || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            a = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: a,
            localPatterns:
              "u" < typeof window ? i?.localPatterns : e.localPatterns,
          };
        }, [i]),
        { onLoad: s, onLoadingComplete: o } = e,
        p = (0, l.useRef)(s);
      (0, l.useEffect)(() => {
        p.current = s;
      }, [s]);
      let h = (0, l.useRef)(o);
      (0, l.useEffect)(() => {
        h.current = o;
      }, [o]);
      let [x, v] = (0, l.useState)(!1),
        [w, y] = (0, l.useState)(!1),
        { props: j, meta: C } = (0, d.getImgProps)(e, {
          defaultLoader: f.default,
          imgConf: a,
          blurComplete: x,
          showAltText: w,
        });
      return (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsx)(_, {
            ...j,
            unoptimized: C.unoptimized,
            placeholder: C.placeholder,
            fill: C.fill,
            onLoadRef: p,
            onLoadingCompleteRef: h,
            setBlurComplete: v,
            setShowAltText: y,
            sizesInput: e.sizes,
            ref: t,
          }),
          C.preload
            ? (0, n.jsx)(b, { isAppRouter: !r, imgAttributes: j })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  60358,
  (e) => {
    e.v({
      grid2Columns: "tweet-media-module__TReg5a__grid2Columns",
      grid2x2: "tweet-media-module__TReg5a__grid2x2",
      grid3: "tweet-media-module__TReg5a__grid3",
      image: "tweet-media-module__TReg5a__image",
      mediaContainer: "tweet-media-module__TReg5a__mediaContainer",
      mediaLink: "tweet-media-module__TReg5a__mediaLink",
      mediaWrapper: "tweet-media-module__TReg5a__mediaWrapper",
      root: "tweet-media-module__TReg5a__root",
      rounded: "tweet-media-module__TReg5a__rounded",
      skeleton: "tweet-media-module__TReg5a__skeleton",
    });
  },
  21697,
  (e) => {
    e.v({
      anchor: "tweet-media-video-module__CjSC8q__anchor",
      videoButton: "tweet-media-video-module__CjSC8q__videoButton",
      videoButtonIcon: "tweet-media-video-module__CjSC8q__videoButtonIcon",
      viewReplies: "tweet-media-video-module__CjSC8q__viewReplies",
      watchOnTwitter: "tweet-media-video-module__CjSC8q__watchOnTwitter",
    });
  },
  11759,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645);
    let i = function () {
      for (var e, t, r = 0, i = "", a = arguments.length; r < a; r++)
        (e = arguments[r]) &&
          (t = (function e(t) {
            var r,
              i,
              a = "";
            if ("string" == typeof t || "number" == typeof t) a += t;
            else if ("object" == typeof t)
              if (Array.isArray(t)) {
                var n = t.length;
                for (r = 0; r < n; r++)
                  t[r] && (i = e(t[r])) && (a && (a += " "), (a += i));
              } else for (i in t) t[i] && (a && (a += " "), (a += i));
            return a;
          })(e)) &&
          (i && (i += " "), (i += t));
      return i;
    };
    var a = e.i(60358),
      n = e.i(21697);
    e.s(
      [
        "TweetMediaVideo",
        0,
        ({ tweet: e, media: l }) => {
          let s,
            o,
            d,
            [c, u] = (0, r.useState)(!0),
            [m, f] = (0, r.useState)(!1),
            [p, g] = (0, r.useState)(!1),
            h =
              (s = ((e) => {
                let { variants: t } = e.video_info;
                return t
                  .filter((e) => "video/mp4" === e.content_type)
                  .sort((e, t) => {
                    var r, i;
                    return (
                      (null != (r = t.bitrate) ? r : 0) -
                      (null != (i = e.bitrate) ? i : 0)
                    );
                  });
              })(l)).length > 1
                ? s[1]
                : s[0],
            x = 0;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("video", {
                className: a.default.image,
                poster: (d = (o = new URL(l.media_url_https)).pathname
                  .split(".")
                  .pop())
                  ? ((o.pathname = o.pathname.replace(`.${d}`, "")),
                    o.searchParams.set("format", d),
                    o.searchParams.set("name", "small"),
                    o.toString())
                  : l.media_url_https,
                controls: !c,
                playsInline: !0,
                preload: "none",
                tabIndex: c ? -1 : 0,
                onPlay: () => {
                  x && window.clearTimeout(x), m || f(!0), p && g(!1);
                },
                onPause: () => {
                  x && window.clearTimeout(x),
                    (x = window.setTimeout(() => {
                      m && f(!1), (x = 0);
                    }, 100));
                },
                onEnded: () => {
                  g(!0);
                },
                children: (0, t.jsx)("source", {
                  src: h.url,
                  type: h.content_type,
                }),
              }),
              c &&
                (0, t.jsx)("button", {
                  type: "button",
                  className: n.default.videoButton,
                  "aria-label": "View video on X",
                  onClick: (e) => {
                    let t = e.currentTarget.previousSibling;
                    e.preventDefault(),
                      u(!1),
                      t.load(),
                      t
                        .play()
                        .then(() => {
                          f(!0), t.focus();
                        })
                        .catch((e) => {
                          console.error("Error playing video:", e),
                            u(!0),
                            f(!1);
                        });
                  },
                  children: (0, t.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    className: n.default.videoButtonIcon,
                    "aria-hidden": "true",
                    children: (0, t.jsx)("g", {
                      children: (0, t.jsx)("path", {
                        d: "M21 12L4 2v20l17-10z",
                      }),
                    }),
                  }),
                }),
              !m &&
                !p &&
                (0, t.jsx)("div", {
                  className: n.default.watchOnTwitter,
                  children: (0, t.jsx)("a", {
                    href: e.url,
                    className: n.default.anchor,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: c ? "Watch on X" : "Continue watching on X",
                  }),
                }),
              p &&
                (0, t.jsx)("a", {
                  href: e.url,
                  className: i(n.default.anchor, n.default.viewReplies),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "View replies",
                }),
            ],
          });
        },
      ],
      11759
    );
  },
  25628,
  (e) => {
    e.v({
      actions: "tweet-actions-module__TCXXfW__actions",
      copy: "tweet-actions-module__TCXXfW__copy",
      copyIcon: "tweet-actions-module__TCXXfW__copyIcon",
      copyIconWrapper: "tweet-actions-module__TCXXfW__copyIconWrapper",
      copyText: "tweet-actions-module__TCXXfW__copyText",
      like: "tweet-actions-module__TCXXfW__like",
      likeCount: "tweet-actions-module__TCXXfW__likeCount",
      likeIcon: "tweet-actions-module__TCXXfW__likeIcon",
      likeIconWrapper: "tweet-actions-module__TCXXfW__likeIconWrapper",
      reply: "tweet-actions-module__TCXXfW__reply",
      replyIcon: "tweet-actions-module__TCXXfW__replyIcon",
      replyIconWrapper: "tweet-actions-module__TCXXfW__replyIconWrapper",
      replyText: "tweet-actions-module__TCXXfW__replyText",
    });
  },
  79009,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      i = e.i(25628);
    e.s([
      "TweetActionsCopy",
      0,
      ({ tweet: e }) => {
        let [a, n] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (a) {
              let e = setTimeout(() => {
                n(!1);
              }, 6e3);
              return () => clearTimeout(e);
            }
          }, [a]),
          (0, t.jsxs)("button", {
            type: "button",
            className: i.default.copy,
            "aria-label": "Copy link",
            onClick: () => {
              navigator.clipboard.writeText(e.url), n(!0);
            },
            children: [
              (0, t.jsx)("div", {
                className: i.default.copyIconWrapper,
                children: a
                  ? (0, t.jsx)("svg", {
                      viewBox: "0 0 24 24",
                      className: i.default.copyIcon,
                      "aria-hidden": "true",
                      children: (0, t.jsx)("g", {
                        children: (0, t.jsx)("path", {
                          d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z",
                        }),
                      }),
                    })
                  : (0, t.jsx)("svg", {
                      viewBox: "0 0 24 24",
                      className: i.default.copyIcon,
                      "aria-hidden": "true",
                      children: (0, t.jsx)("g", {
                        children: (0, t.jsx)("path", {
                          d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z",
                        }),
                      }),
                    }),
              }),
              (0, t.jsx)("span", {
                className: i.default.copyText,
                children: a ? "Copied!" : "Copy link",
              }),
            ],
          })
        );
      },
    ]);
  },
  22669,
  (e) => {
    e.v({
      article: "quoted-tweet-container-module__cim9QG__article",
      root: "quoted-tweet-container-module__cim9QG__root",
    });
  },
  94533,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(22669);
    e.s([
      "QuotedTweetContainer",
      0,
      ({ tweet: e, children: i }) =>
        (0, t.jsx)("div", {
          className: r.default.root,
          onClick: (t) => {
            t.preventDefault(), window.open(e.url, "_blank");
          },
          children: (0, t.jsx)("article", {
            className: r.default.article,
            children: i,
          }),
        }),
    ]);
  },
  94909,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return d;
      },
    };
    for (var a in i) Object.defineProperty(r, a, { enumerable: !0, get: i[a] });
    let n = e.r(55682),
      l = e.r(8927),
      s = e.r(5500),
      o = n._(e.r(1948));
    function d(e) {
      let { props: t } = (0, l.getImgProps)(e, {
        defaultLoader: o.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !0,
          unoptimized: !1,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let c = s.Image;
  },
  57688,
  (e, t, r) => {
    t.exports = e.r(94909);
  },
  25132,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(57688),
      i = e.i(71645);
    let a = "https://app.uniswap.org/swap?chain=mainnet&inputCurrency=NATIVE&outputCurrency=0xComingSoon";
    function n(e) {
      return null == e || Number.isNaN(e)
        ? "—"
        : e.toLocaleString("en-US", { maximumFractionDigits: 0 });
    }
    e.s([
      "TokenTracker",
      0,
      function () {
        let [e, l] = (0, i.useState)(null),
          [s, o] = (0, i.useState)(null),
          [d, c] = (0, i.useState)(!1),
          u = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
          let e = !1;
          async function t() {
            try {
              let t = await fetch("/api/fees", { cache: "no-store" });
              if (!t.ok) throw Error(`HTTP ${t.status}`);
              let r = await t.json();
              if (e) return;
              l(r), o(r.lifetimeFees.error);
              let i = r.lifetimeFees.sol;
              null != i &&
                null != u.current &&
                i !== u.current &&
                (c(!0), setTimeout(() => c(!1), 800)),
                (u.current = i);
            } catch (t) {
              if (e) return;
              o(t instanceof Error ? t.message : "Unable to fetch");
            }
          }
          t();
          let r = setInterval(t, 6e4);
          return () => {
            (e = !0), clearInterval(r);
          };
        }, []);
        let m = e?.lifetimeFees.usd ?? null,
          f = e?.lifetimeFees.sol ?? null,
          p = e?.token.change24h ?? null,
          g = null != p && p >= 0,
          h = e?.updatedAt ? new Date(e.updatedAt) : null;
        return (0, t.jsxs)("div", {
          className: "relative max-w-3xl mx-auto",
          children: [


          ],
        });
      },
    ]);
  },
]);
