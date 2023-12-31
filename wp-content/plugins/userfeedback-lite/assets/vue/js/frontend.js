(function(e) {
    function t(t) {
        for (var r, i, a = t[0], c = t[1], u = t[2], f = 0, l = []; f < a.length; f++) i = a[f], Object.prototype.hasOwnProperty.call(o, i) && o[i] && l.push(o[i][0]), o[i] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        d && d(t);
        while (l.length) l.shift()();
        return s.push.apply(s, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], r = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== o[c] && (r = !1)
            }
            r && (s.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
        o = {
            frontend: 0
        },
        s = [];

    function i(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = r, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "";
    var a = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = a.push.bind(a);
    a.push = t, a = a.slice();
    for (var u = 0; u < a.length; u++) t(a[u]);
    var d = c;
    s.push([2, "chunk-vendors", "chunk-common"]), n()
})({
    2: function(e, t, n) {
        e.exports = n("d67f")
    },
    ceb9: function(e, t, n) {},
    d67f: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("a026"),
            o = (n("ceb9"), n("2f62")),
            s = n("6b96");
        r["a"].use(o["a"]);
        const i = () => new o["a"].Store({
            modules: {
                widget: s["a"]
            }
        });
        var a = n("c0cc"),
            c = n("918d");
        const u = e => {
                "function" === typeof __gtagTracker && __gtagTracker("event", "impression", {
                    event_category: "userfeedback-survey",
                    event_label: e.title,
                    non_interaction: !0,
                    survey_id: e.id
                })
            },
            d = e => {
                "function" === typeof __gtagTracker && __gtagTracker("event", "submission", {
                    event_category: "userfeedback-survey",
                    event_label: e.title,
                    non_interaction: !1,
                    survey_id: e.id
                })
            },
            f = {
                install(e, {
                    store: t
                }) {
                    t.subscribe(e => {
                        const {
                            type: n,
                            payload: r
                        } = e, {
                            isPreview: o
                        } = t.state.widget;
                        if (!o) switch (n) {
                            case "widget/setSurvey":
                                r.settings.enable_tracking && u(r);
                                break
                        }
                    }), t.subscribeAction((e, n) => {
                        const {
                            type: r
                        } = e, {
                            survey: o
                        } = n.widget, {
                            isPreview: s
                        } = t.state.widget;
                        if (!s) switch (r) {
                            case "widget/saveResponse":
                                o.settings.enable_tracking && d(o);
                                break
                        }
                    })
                }
            };
        var l = f,
            p = n("d4a7"),
            b = n("ed75");
        (() => {
            window.userfeedback_no_show_reasons = {};
            const e = document.createElement("div");
            document.body.append(e), r["a"].use(a["a"], {
                componentPrefix: "UserFeedback",
                classPrefix: "user-feedback"
            }), window.userfeedback_addons_frontend && window.userfeedback_addons_frontend.forEach(e => {
                r["a"].use(e)
            });
            const t = i();
            r["a"].use(c["a"], {
                store: t,
                wpObjectKey: "userfeedback_frontend"
            });
            const {
                monsterinsights: n
            } = t.state.$uf.integrations;
            n && n.is_active && r["a"].use(l, {
                store: t
            }), new r["a"]({
                store: t,
                mounted: () => {
                    if (t.state.$uf.is_preview) return;
                    const e = t.state.$uf.surveys,
                        n = t.state.$uf.logic,
                        r = Object(b["b"])(e, n);
                    t.dispatch("widget/init", r)
                },
                render: e => t.state.$uf.is_preview ? e(p["a"], {
                    props: {
                        isInline: !0,
                        isPreview: !0,
                        useSurvey: t.state.$uf.use_survey
                    }
                }) : e(p["a"])
            }).$mount(t.state.$uf.is_preview ? "#" + t.state.$uf.preview_element_id : e);
            const o = document.querySelectorAll(".userfeedback-survey-container");
            o.forEach(e => {
                const t = e.dataset.id;
                if (!t) return;
                const n = window.userfeedback_frontend.surveys,
                    o = n.find(e => e.id === t);
                if (!o) return;
                const s = i();
                c["a"].registerStoreModule(s, "userfeedback_frontend"), new r["a"]({
                    store: s,
                    mounted: () => {
                        const e = Object(b["b"])([o]);
                        s.dispatch("widget/init", e)
                    },
                    render: e => e(p["a"], {
                        props: {
                            isInline: !0
                        }
                    })
                }).$mount(e)
            })
        })()
    }
});