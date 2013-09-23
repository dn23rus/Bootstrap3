var Chart = function(e) {
    function v(e, t, n) {
        e = A((e - t.graphMin) / (t.steps * t.stepValue), 1, 0);
        return n * t.steps * e;
    }
    function x(e, t, s, o) {
        function h() {
            f += u;
            var n = e.animation ? A(a(f), null, 0) : 1;
            o.clearRect(0, 0, r, i);
            e.scaleOverlay ? (s(n), t()) : (t(), s(n));
            1 >= f ? c(h) : "function" == typeof e.onAnimationComplete && e.onAnimationComplete();
        }
        var u = e.animation ? 1 / A(e.animationSteps, Number.MAX_VALUE, 1) : 1, a = n[e.animationEasing], f = e.animation ? 0 : 1;
        "function" != typeof t && (t = function() {});
        c(h);
    }
    function C(e, t, n, r, i, s) {
        var o;
        e = Math.floor(Math.log(r - i) / Math.LN10);
        i = Math.floor(i / (1 * Math.pow(10, e))) * Math.pow(10, e);
        r = Math.ceil(r / (1 * Math.pow(10, e))) * Math.pow(10, e) - i;
        e = Math.pow(10, e);
        for (o = Math.round(r / e); o < n || o > t; ) e = o < n ? e / 2 : 2 * e, o = Math.round(r / e);
        t = [];
        z(s, t, o, i, e);
        return {
            steps: o,
            stepValue: e,
            graphMin: i,
            labels: t
        };
    }
    function z(e, t, n, r, i) {
        if (e) for (var s = 1; s < n + 1; s++) t.push(E(e, {
            value: (r + i * s).toFixed(0 != i % 1 ? i.toString().split(".")[1].length : 0)
        }));
    }
    function A(e, t, n) {
        return !isNaN(parseFloat(t)) && isFinite(t) && e > t ? t : !isNaN(parseFloat(n)) && isFinite(n) && e < n ? n : e;
    }
    function y(e, t) {
        var n = {}, r;
        for (r in e) n[r] = e[r];
        for (r in t) n[r] = t[r];
        return n;
    }
    function E(e, t) {
        var n = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : h[e] = h[e] || E(document.getElementById(e).innerHTML);
        return t ? n(t) : n;
    }
    var t = this, n = {
        linear: function(e) {
            return e;
        },
        easeInQuad: function(e) {
            return e * e;
        },
        easeOutQuad: function(e) {
            return -1 * e * (e - 2);
        },
        easeInOutQuad: function(e) {
            return 1 > (e /= .5) ? .5 * e * e : -0.5 * (--e * (e - 2) - 1);
        },
        easeInCubic: function(e) {
            return e * e * e;
        },
        easeOutCubic: function(e) {
            return 1 * ((e = e / 1 - 1) * e * e + 1);
        },
        easeInOutCubic: function(e) {
            return 1 > (e /= .5) ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2);
        },
        easeInQuart: function(e) {
            return e * e * e * e;
        },
        easeOutQuart: function(e) {
            return -1 * ((e = e / 1 - 1) * e * e * e - 1);
        },
        easeInOutQuart: function(e) {
            return 1 > (e /= .5) ? .5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
        },
        easeInQuint: function(e) {
            return 1 * (e /= 1) * e * e * e * e;
        },
        easeOutQuint: function(e) {
            return 1 * ((e = e / 1 - 1) * e * e * e * e + 1);
        },
        easeInOutQuint: function(e) {
            return 1 > (e /= .5) ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2);
        },
        easeInSine: function(e) {
            return -1 * Math.cos(e / 1 * (Math.PI / 2)) + 1;
        },
        easeOutSine: function(e) {
            return 1 * Math.sin(e / 1 * (Math.PI / 2));
        },
        easeInOutSine: function(e) {
            return -0.5 * (Math.cos(Math.PI * e / 1) - 1);
        },
        easeInExpo: function(e) {
            return 0 == e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1));
        },
        easeOutExpo: function(e) {
            return 1 == e ? 1 : 1 * (-Math.pow(2, -10 * e / 1) + 1);
        },
        easeInOutExpo: function(e) {
            return 0 == e ? 0 : 1 == e ? 1 : 1 > (e /= .5) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2);
        },
        easeInCirc: function(e) {
            return 1 <= e ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1);
        },
        easeOutCirc: function(e) {
            return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e);
        },
        easeInOutCirc: function(e) {
            return 1 > (e /= .5) ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        },
        easeInElastic: function(e) {
            var t = 1.70158, n = 0, r = 1;
            if (0 == e) return 0;
            if (1 == (e /= 1)) return 1;
            n || (n = .3);
            r < Math.abs(1) ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * 2 * Math.PI / n));
        },
        easeOutElastic: function(e) {
            var t = 1.70158, n = 0, r = 1;
            if (0 == e) return 0;
            if (1 == (e /= 1)) return 1;
            n || (n = .3);
            r < Math.abs(1) ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r);
            return r * Math.pow(2, -10 * e) * Math.sin((1 * e - t) * 2 * Math.PI / n) + 1;
        },
        easeInOutElastic: function(e) {
            var t = 1.70158, n = 0, r = 1;
            if (0 == e) return 0;
            if (2 == (e /= .5)) return 1;
            n || (n = .3 * 1.5);
            r < Math.abs(1) ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r);
            return 1 > e ? -0.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * 2 * Math.PI / n) : .5 * r * Math.pow(2, -10 * (e -= 1)) * Math.sin((1 * e - t) * 2 * Math.PI / n) + 1;
        },
        easeInBack: function(e) {
            return 1 * (e /= 1) * e * (2.70158 * e - 1.70158);
        },
        easeOutBack: function(e) {
            return 1 * ((e = e / 1 - 1) * e * (2.70158 * e + 1.70158) + 1);
        },
        easeInOutBack: function(e) {
            var t = 1.70158;
            return 1 > (e /= .5) ? .5 * e * e * (((t *= 1.525) + 1) * e - t) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        },
        easeInBounce: function(e) {
            return 1 - n.easeOutBounce(1 - e);
        },
        easeOutBounce: function(e) {
            return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375);
        },
        easeInOutBounce: function(e) {
            return .5 > e ? .5 * n.easeInBounce(2 * e) : .5 * n.easeOutBounce(2 * e - 1) + .5;
        }
    }, r = e.canvas.width, i = e.canvas.height;
    window.devicePixelRatio && (e.canvas.style.width = r + "px", e.canvas.style.height = i + "px", e.canvas.height = i * window.devicePixelRatio, e.canvas.width = r * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio));
    this.PolarArea = function(n, r) {
        t.PolarArea.defaults = {
            scaleOverlay: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var i = r ? y(t.PolarArea.defaults, r) : t.PolarArea.defaults;
        return new s(n, i, e);
    };
    this.Radar = function(n, r) {
        t.Radar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !1,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            angleShowLineOut: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 12,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var i = r ? y(t.Radar.defaults, r) : t.Radar.defaults;
        return new o(n, i, e);
    };
    this.Pie = function(n, r) {
        t.Pie.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var i = r ? y(t.Pie.defaults, r) : t.Pie.defaults;
        return new u(n, i, e);
    };
    this.Doughnut = function(n, r) {
        t.Doughnut.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var i = r ? y(t.Doughnut.defaults, r) : t.Doughnut.defaults;
        return new a(n, i, e);
    };
    this.Line = function(n, r) {
        t.Line.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            bezierCurve: !0,
            pointDot: !0,
            pointDotRadius: 4,
            pointDotStrokeWidth: 2,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var i = r ? y(t.Line.defaults, r) : t.Line.defaults;
        return new f(n, i, e);
    };
    this.Bar = function(n, r) {
        t.Bar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            barShowStroke: !0,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 1,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var i = r ? y(t.Bar.defaults, r) : t.Bar.defaults;
        return new l(n, i, e);
    };
    var s = function(e, t, n) {
        var s, o, u, a, f, l, c, h, p;
        f = Math.min.apply(Math, [ r, i ]) / 2;
        f -= Math.max.apply(Math, [ .5 * t.scaleFontSize, .5 * t.scaleLineWidth ]);
        a = 2 * t.scaleFontSize;
        t.scaleShowLabelBackdrop && (a += 2 * t.scaleBackdropPaddingY, f -= 1.5 * t.scaleBackdropPaddingY);
        h = f;
        a = a ? a : 5;
        s = Number.MIN_VALUE;
        o = Number.MAX_VALUE;
        for (u = 0; u < e.length; u++) e[u].value > s && (s = e[u].value), e[u].value < o && (o = e[u].value);
        u = Math.floor(h / (.66 * a));
        a = Math.floor(.5 * (h / a));
        p = t.scaleShowLabels ? t.scaleLabel : null;
        t.scaleOverride ? (c = {
            steps: t.scaleSteps,
            stepValue: t.scaleStepWidth,
            graphMin: t.scaleStartValue,
            labels: []
        }, z(p, c.labels, c.steps, t.scaleStartValue, t.scaleStepWidth)) : c = C(h, u, a, s, o, p);
        l = f / c.steps;
        x(t, function() {
            for (var e = 0; e < c.steps; e++) if (t.scaleShowLine && (n.beginPath(), n.arc(r / 2, i / 2, l * (e + 1), 0, 2 * Math.PI, !0), n.strokeStyle = t.scaleLineColor, n.lineWidth = t.scaleLineWidth, n.stroke()), t.scaleShowLabels) {
                n.textAlign = "center";
                n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
                var s = c.labels[e];
                if (t.scaleShowLabelBackdrop) {
                    var o = n.measureText(s).width;
                    n.fillStyle = t.scaleBackdropColor;
                    n.beginPath();
                    n.rect(Math.round(r / 2 - o / 2 - t.scaleBackdropPaddingX), Math.round(i / 2 - l * (e + 1) - .5 * t.scaleFontSize - t.scaleBackdropPaddingY), Math.round(o + 2 * t.scaleBackdropPaddingX), Math.round(t.scaleFontSize + 2 * t.scaleBackdropPaddingY));
                    n.fill();
                }
                n.textBaseline = "middle";
                n.fillStyle = t.scaleFontColor;
                n.fillText(s, r / 2, i / 2 - l * (e + 1));
            }
        }, function(s) {
            var o = -Math.PI / 2, u = 2 * Math.PI / e.length, a = 1, f = 1;
            t.animation && (t.animateScale && (a = s), t.animateRotate && (f = s));
            for (s = 0; s < e.length; s++) n.beginPath(), n.arc(r / 2, i / 2, a * v(e[s].value, c, l), o, o + f * u, !1), n.lineTo(r / 2, i / 2), n.closePath(), n.fillStyle = e[s].color, n.fill(), t.segmentShowStroke && (n.strokeStyle = t.segmentStrokeColor, n.lineWidth = t.segmentStrokeWidth, n.stroke()), o += f * u;
        }, n);
    }, o = function(e, t, n) {
        var s, o, u, a, f, l, c, h, p;
        e.labels || (e.labels = []);
        f = Math.min.apply(Math, [ r, i ]) / 2;
        a = 2 * t.scaleFontSize;
        for (s = h = 0; s < e.labels.length; s++) n.font = t.pointLabelFontStyle + " " + t.pointLabelFontSize + "px " + t.pointLabelFontFamily, o = n.measureText(e.labels[s]).width, o > h && (h = o);
        f -= Math.max.apply(Math, [ h, 1.5 * (t.pointLabelFontSize / 2) ]);
        f -= t.pointLabelFontSize;
        h = f = A(f, null, 0);
        a = a ? a : 5;
        s = Number.MIN_VALUE;
        o = Number.MAX_VALUE;
        for (u = 0; u < e.datasets.length; u++) for (p = 0; p < e.datasets[u].data.length; p++) e.datasets[u].data[p] > s && (s = e.datasets[u].data[p]), e.datasets[u].data[p] < o && (o = e.datasets[u].data[p]);
        u = Math.floor(h / (.66 * a));
        a = Math.floor(.5 * (h / a));
        p = t.scaleShowLabels ? t.scaleLabel : null;
        t.scaleOverride ? (c = {
            steps: t.scaleSteps,
            stepValue: t.scaleStepWidth,
            graphMin: t.scaleStartValue,
            labels: []
        }, z(p, c.labels, c.steps, t.scaleStartValue, t.scaleStepWidth)) : c = C(h, u, a, s, o, p);
        l = f / c.steps;
        x(t, function() {
            var s = 2 * Math.PI / e.datasets[0].data.length;
            n.save();
            n.translate(r / 2, i / 2);
            if (t.angleShowLineOut) {
                n.strokeStyle = t.angleLineColor;
                n.lineWidth = t.angleLineWidth;
                for (var o = 0; o < e.datasets[0].data.length; o++) n.rotate(s), n.beginPath(), n.moveTo(0, 0), n.lineTo(0, -f), n.stroke();
            }
            for (o = 0; o < c.steps; o++) {
                n.beginPath();
                if (t.scaleShowLine) {
                    n.strokeStyle = t.scaleLineColor;
                    n.lineWidth = t.scaleLineWidth;
                    n.moveTo(0, -l * (o + 1));
                    for (var u = 0; u < e.datasets[0].data.length; u++) n.rotate(s), n.lineTo(0, -l * (o + 1));
                    n.closePath();
                    n.stroke();
                }
                t.scaleShowLabels && (n.textAlign = "center", n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily, n.textBaseline = "middle", t.scaleShowLabelBackdrop && (u = n.measureText(c.labels[o]).width, n.fillStyle = t.scaleBackdropColor, n.beginPath(), n.rect(Math.round(-u / 2 - t.scaleBackdropPaddingX), Math.round(-l * (o + 1) - .5 * t.scaleFontSize - t.scaleBackdropPaddingY), Math.round(u + 2 * t.scaleBackdropPaddingX), Math.round(t.scaleFontSize + 2 * t.scaleBackdropPaddingY)), n.fill()), n.fillStyle = t.scaleFontColor, n.fillText(c.labels[o], 0, -l * (o + 1)));
            }
            for (o = 0; o < e.labels.length; o++) {
                n.font = t.pointLabelFontStyle + " " + t.pointLabelFontSize + "px " + t.pointLabelFontFamily;
                n.fillStyle = t.pointLabelFontColor;
                var u = Math.sin(s * o) * (f + t.pointLabelFontSize), a = Math.cos(s * o) * (f + t.pointLabelFontSize);
                n.textAlign = s * o == Math.PI || 0 == s * o ? "center" : s * o > Math.PI ? "right" : "left";
                n.textBaseline = "middle";
                n.fillText(e.labels[o], u, -a);
            }
            n.restore();
        }, function(s) {
            var o = 2 * Math.PI / e.datasets[0].data.length;
            n.save();
            n.translate(r / 2, i / 2);
            for (var u = 0; u < e.datasets.length; u++) {
                n.beginPath();
                n.moveTo(0, s * -1 * v(e.datasets[u].data[0], c, l));
                for (var a = 1; a < e.datasets[u].data.length; a++) n.rotate(o), n.lineTo(0, s * -1 * v(e.datasets[u].data[a], c, l));
                n.closePath();
                n.fillStyle = e.datasets[u].fillColor;
                n.strokeStyle = e.datasets[u].strokeColor;
                n.lineWidth = t.datasetStrokeWidth;
                n.fill();
                n.stroke();
                if (t.pointDot) {
                    n.fillStyle = e.datasets[u].pointColor;
                    n.strokeStyle = e.datasets[u].pointStrokeColor;
                    n.lineWidth = t.pointDotStrokeWidth;
                    for (a = 0; a < e.datasets[u].data.length; a++) n.rotate(o), n.beginPath(), n.arc(0, s * -1 * v(e.datasets[u].data[a], c, l), t.pointDotRadius, 2 * Math.PI, !1), n.fill(), n.stroke();
                }
                n.rotate(o);
            }
            n.restore();
        }, n);
    }, u = function(e, t, n) {
        for (var s = 0, o = Math.min.apply(Math, [ i / 2, r / 2 ]) - 5, u = 0; u < e.length; u++) s += e[u].value;
        x(t, null, function(u) {
            var a = -Math.PI / 2, f = 1, l = 1;
            t.animation && (t.animateScale && (f = u), t.animateRotate && (l = u));
            for (u = 0; u < e.length; u++) {
                var c = l * e[u].value / s * 2 * Math.PI;
                n.beginPath();
                n.arc(r / 2, i / 2, f * o, a, a + c);
                n.lineTo(r / 2, i / 2);
                n.closePath();
                n.fillStyle = e[u].color;
                n.fill();
                t.segmentShowStroke && (n.lineWidth = t.segmentStrokeWidth, n.strokeStyle = t.segmentStrokeColor, n.stroke());
                a += c;
            }
        }, n);
    }, a = function(e, t, n) {
        for (var s = 0, o = Math.min.apply(Math, [ i / 2, r / 2 ]) - 5, u = o * (t.percentageInnerCutout / 100), a = 0; a < e.length; a++) s += e[a].value;
        x(t, null, function(a) {
            var f = -Math.PI / 2, l = 1, c = 1;
            t.animation && (t.animateScale && (l = a), t.animateRotate && (c = a));
            for (a = 0; a < e.length; a++) {
                var h = c * e[a].value / s * 2 * Math.PI;
                n.beginPath();
                n.arc(r / 2, i / 2, l * o, f, f + h, !1);
                n.arc(r / 2, i / 2, l * u, f + h, f, !0);
                n.closePath();
                n.fillStyle = e[a].color;
                n.fill();
                t.segmentShowStroke && (n.lineWidth = t.segmentStrokeWidth, n.strokeStyle = t.segmentStrokeColor, n.stroke());
                f += h;
            }
        }, n);
    }, f = function(e, t, n) {
        var s, o, u, a, f, l, c, h, p, d, m, g, y, b = 0;
        f = i;
        n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
        d = 1;
        for (a = 0; a < e.labels.length; a++) s = n.measureText(e.labels[a]).width, d = s > d ? s : d;
        r / e.labels.length < d ? (b = 45, r / e.labels.length < Math.cos(b) * d ? (b = 90, f -= d) : f -= Math.sin(b) * d) : f -= t.scaleFontSize;
        a = t.scaleFontSize;
        f = f - 5 - a;
        s = Number.MIN_VALUE;
        o = Number.MAX_VALUE;
        for (u = 0; u < e.datasets.length; u++) for (h = 0; h < e.datasets[u].data.length; h++) e.datasets[u].data[h] > s && (s = e.datasets[u].data[h]), e.datasets[u].data[h] < o && (o = e.datasets[u].data[h]);
        u = Math.floor(f / (.66 * a));
        a = Math.floor(.5 * (f / a));
        h = t.scaleShowLabels ? t.scaleLabel : "";
        t.scaleOverride ? (c = {
            steps: t.scaleSteps,
            stepValue: t.scaleStepWidth,
            graphMin: t.scaleStartValue,
            labels: []
        }, z(h, c.labels, c.steps, t.scaleStartValue, t.scaleStepWidth)) : c = C(f, u, a, s, o, h);
        l = Math.floor(f / c.steps);
        a = 1;
        if (t.scaleShowLabels) {
            n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
            for (s = 0; s < c.labels.length; s++) o = n.measureText(c.labels[s]).width, a = o > a ? o : a;
            a += 10;
        }
        m = r - a - d;
        p = Math.floor(m / (e.labels.length - 1));
        g = r - d / 2 - m;
        y = f + t.scaleFontSize / 2;
        x(t, function() {
            n.lineWidth = t.scaleLineWidth;
            n.strokeStyle = t.scaleLineColor;
            n.beginPath();
            n.moveTo(r - d / 2 + 5, y);
            n.lineTo(r - d / 2 - m - 5, y);
            n.stroke();
            0 < b ? (n.save(), n.textAlign = "right") : n.textAlign = "center";
            n.fillStyle = t.scaleFontColor;
            for (var i = 0; i < e.labels.length; i++) n.save(), 0 < b ? (n.translate(g + i * p, y + t.scaleFontSize), n.rotate(-(b * (Math.PI / 180))), n.fillText(e.labels[i], 0, 0), n.restore()) : n.fillText(e.labels[i], g + i * p, y + t.scaleFontSize + 3), n.beginPath(), n.moveTo(g + i * p, y + 3), t.scaleShowGridLines && 0 < i ? (n.lineWidth = t.scaleGridLineWidth, n.strokeStyle = t.scaleGridLineColor, n.lineTo(g + i * p, 5)) : n.lineTo(g + i * p, y + 3), n.stroke();
            n.lineWidth = t.scaleLineWidth;
            n.strokeStyle = t.scaleLineColor;
            n.beginPath();
            n.moveTo(g, y + 5);
            n.lineTo(g, 5);
            n.stroke();
            n.textAlign = "right";
            n.textBaseline = "middle";
            for (i = 0; i < c.steps; i++) n.beginPath(), n.moveTo(g - 3, y - (i + 1) * l), t.scaleShowGridLines ? (n.lineWidth = t.scaleGridLineWidth, n.strokeStyle = t.scaleGridLineColor, n.lineTo(g + m + 5, y - (i + 1) * l)) : n.lineTo(g - .5, y - (i + 1) * l), n.stroke(), t.scaleShowLabels && n.fillText(c.labels[i], g - 8, y - (i + 1) * l);
        }, function(r) {
            function e(t, n) {
                return y - r * v(e.datasets[t].data[n], c, l);
            }
            for (var i = 0; i < e.datasets.length; i++) {
                n.strokeStyle = e.datasets[i].strokeColor;
                n.lineWidth = t.datasetStrokeWidth;
                n.beginPath();
                n.moveTo(g, y - r * v(e.datasets[i].data[0], c, l));
                for (var s = 1; s < e.datasets[i].data.length; s++) t.bezierCurve ? n.bezierCurveTo(g + p * (s - .5), e(i, s - 1), g + p * (s - .5), e(i, s), g + p * s, e(i, s)) : n.lineTo(g + p * s, e(i, s));
                n.stroke();
                t.datasetFill ? (n.lineTo(g + p * (e.datasets[i].data.length - 1), y), n.lineTo(g, y), n.closePath(), n.fillStyle = e.datasets[i].fillColor, n.fill()) : n.closePath();
                if (t.pointDot) {
                    n.fillStyle = e.datasets[i].pointColor;
                    n.strokeStyle = e.datasets[i].pointStrokeColor;
                    n.lineWidth = t.pointDotStrokeWidth;
                    for (s = 0; s < e.datasets[i].data.length; s++) n.beginPath(), n.arc(g + p * s, y - r * v(e.datasets[i].data[s], c, l), t.pointDotRadius, 0, 2 * Math.PI, !0), n.fill(), n.stroke();
                }
            }
        }, n);
    }, l = function(e, t, n) {
        var s, o, u, a, f, l, c, h, p, d, m, g, y, b, w = 0;
        f = i;
        n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
        d = 1;
        for (a = 0; a < e.labels.length; a++) s = n.measureText(e.labels[a]).width, d = s > d ? s : d;
        r / e.labels.length < d ? (w = 45, r / e.labels.length < Math.cos(w) * d ? (w = 90, f -= d) : f -= Math.sin(w) * d) : f -= t.scaleFontSize;
        a = t.scaleFontSize;
        f = f - 5 - a;
        s = Number.MIN_VALUE;
        o = Number.MAX_VALUE;
        for (u = 0; u < e.datasets.length; u++) for (h = 0; h < e.datasets[u].data.length; h++) e.datasets[u].data[h] > s && (s = e.datasets[u].data[h]), e.datasets[u].data[h] < o && (o = e.datasets[u].data[h]);
        u = Math.floor(f / (.66 * a));
        a = Math.floor(.5 * (f / a));
        h = t.scaleShowLabels ? t.scaleLabel : "";
        t.scaleOverride ? (c = {
            steps: t.scaleSteps,
            stepValue: t.scaleStepWidth,
            graphMin: t.scaleStartValue,
            labels: []
        }, z(h, c.labels, c.steps, t.scaleStartValue, t.scaleStepWidth)) : c = C(f, u, a, s, o, h);
        l = Math.floor(f / c.steps);
        a = 1;
        if (t.scaleShowLabels) {
            n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
            for (s = 0; s < c.labels.length; s++) o = n.measureText(c.labels[s]).width, a = o > a ? o : a;
            a += 10;
        }
        m = r - a - d;
        p = Math.floor(m / e.labels.length);
        b = (p - 2 * t.scaleGridLineWidth - 2 * t.barValueSpacing - (t.barDatasetSpacing * e.datasets.length - 1) - (t.barStrokeWidth / 2 * e.datasets.length - 1)) / e.datasets.length;
        g = r - d / 2 - m;
        y = f + t.scaleFontSize / 2;
        x(t, function() {
            n.lineWidth = t.scaleLineWidth;
            n.strokeStyle = t.scaleLineColor;
            n.beginPath();
            n.moveTo(r - d / 2 + 5, y);
            n.lineTo(r - d / 2 - m - 5, y);
            n.stroke();
            0 < w ? (n.save(), n.textAlign = "right") : n.textAlign = "center";
            n.fillStyle = t.scaleFontColor;
            for (var i = 0; i < e.labels.length; i++) n.save(), 0 < w ? (n.translate(g + i * p, y + t.scaleFontSize), n.rotate(-(w * (Math.PI / 180))), n.fillText(e.labels[i], 0, 0), n.restore()) : n.fillText(e.labels[i], g + i * p + p / 2, y + t.scaleFontSize + 3), n.beginPath(), n.moveTo(g + (i + 1) * p, y + 3), n.lineWidth = t.scaleGridLineWidth, n.strokeStyle = t.scaleGridLineColor, n.lineTo(g + (i + 1) * p, 5), n.stroke();
            n.lineWidth = t.scaleLineWidth;
            n.strokeStyle = t.scaleLineColor;
            n.beginPath();
            n.moveTo(g, y + 5);
            n.lineTo(g, 5);
            n.stroke();
            n.textAlign = "right";
            n.textBaseline = "middle";
            for (i = 0; i < c.steps; i++) n.beginPath(), n.moveTo(g - 3, y - (i + 1) * l), t.scaleShowGridLines ? (n.lineWidth = t.scaleGridLineWidth, n.strokeStyle = t.scaleGridLineColor, n.lineTo(g + m + 5, y - (i + 1) * l)) : n.lineTo(g - .5, y - (i + 1) * l), n.stroke(), t.scaleShowLabels && n.fillText(c.labels[i], g - 8, y - (i + 1) * l);
        }, function(r) {
            n.lineWidth = t.barStrokeWidth;
            for (var i = 0; i < e.datasets.length; i++) {
                n.fillStyle = e.datasets[i].fillColor;
                n.strokeStyle = e.datasets[i].strokeColor;
                for (var s = 0; s < e.datasets[i].data.length; s++) {
                    var o = g + t.barValueSpacing + p * s + b * i + t.barDatasetSpacing * i + t.barStrokeWidth * i;
                    n.beginPath();
                    n.moveTo(o, y);
                    n.lineTo(o, y - r * v(e.datasets[i].data[s], c, l) + t.barStrokeWidth / 2);
                    n.lineTo(o + b, y - r * v(e.datasets[i].data[s], c, l) + t.barStrokeWidth / 2);
                    n.lineTo(o + b, y);
                    t.barShowStroke && n.stroke();
                    n.closePath();
                    n.fill();
                }
            }
        }, n);
    }, c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60);
    }, h = {};
};