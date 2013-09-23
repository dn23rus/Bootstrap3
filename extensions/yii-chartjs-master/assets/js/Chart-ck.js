/*!
 * Chart.js
 * http://chartjs.org/
 *
 * Copyright 2013 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 *///Define the global Chart Variable as a class.
window.Chart = function(e) {
    function calculateOffset(e, t, n) {
        var r = t.steps * t.stepValue, i = e - t.graphMin, s = CapValue(i / r, 1, 0);
        return n * t.steps * s;
    }
    function animationLoop(e, t, r, i) {
        function animateFrame() {
            var n = e.animation ? CapValue(u(a), null, 0) : 1;
            s(i);
            if (e.scaleOverlay) {
                r(n);
                t();
            } else {
                t();
                r(n);
            }
        }
        function animLoop() {
            a += o;
            animateFrame();
            a <= 1 ? h(animLoop) : typeof e.onAnimationComplete == "function" && e.onAnimationComplete();
        }
        var o = e.animation ? 1 / CapValue(e.animationSteps, Number.MAX_VALUE, 1) : 1, u = n[e.animationEasing], a = e.animation ? 0 : 1;
        typeof t != "function" && (t = function() {});
        h(animLoop);
    }
    function calculateScale(e, t, n, r, i, s) {
        function calculateOrderOfMagnitude(e) {
            return Math.floor(Math.log(e) / Math.LN10);
        }
        var o, u, a, f, l, c, h, p;
        c = r - i;
        h = calculateOrderOfMagnitude(c);
        o = Math.floor(i / (1 * Math.pow(10, h))) * Math.pow(10, h);
        u = Math.ceil(r / (1 * Math.pow(10, h))) * Math.pow(10, h);
        a = u - o;
        f = Math.pow(10, h);
        l = Math.round(a / f);
        while (l < n || l > t) if (l < n) {
            f /= 2;
            l = Math.round(a / f);
        } else {
            f *= 2;
            l = Math.round(a / f);
        }
        var d = [];
        populateLabels(s, d, l, o, f);
        return {
            steps: l,
            stepValue: f,
            graphMin: o,
            labels: d
        };
    }
    function populateLabels(e, t, n, r, i) {
        if (e) for (var s = 1; s < n + 1; s++) t.push(tmpl(e, {
            value: (r + i * s).toFixed(getDecimalPlaces(i))
        }));
    }
    function Max(e) {
        return Math.max.apply(Math, e);
    }
    function Min(e) {
        return Math.min.apply(Math, e);
    }
    function Default(e, t) {
        return e ? e : t;
    }
    function isNumber(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function CapValue(e, t, n) {
        return isNumber(t) && e > t ? t : isNumber(n) && e < n ? n : e;
    }
    function getDecimalPlaces(e) {
        var t;
        return e % 1 != 0 ? e.toString().split(".")[1].length : 0;
    }
    function mergeChartConfig(e, t) {
        var n = {};
        for (var r in e) n[r] = e[r];
        for (var r in t) n[r] = t[r];
        return n;
    }
    function tmpl(e, t) {
        var n = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : p[e] = p[e] || tmpl(document.getElementById(e).innerHTML);
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
            return (e /= .5) < 1 ? .5 * e * e : -0.5 * (--e * (e - 2) - 1);
        },
        easeInCubic: function(e) {
            return e * e * e;
        },
        easeOutCubic: function(e) {
            return 1 * ((e = e / 1 - 1) * e * e + 1);
        },
        easeInOutCubic: function(e) {
            return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2);
        },
        easeInQuart: function(e) {
            return e * e * e * e;
        },
        easeOutQuart: function(e) {
            return -1 * ((e = e / 1 - 1) * e * e * e - 1);
        },
        easeInOutQuart: function(e) {
            return (e /= .5) < 1 ? .5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
        },
        easeInQuint: function(e) {
            return 1 * (e /= 1) * e * e * e * e;
        },
        easeOutQuint: function(e) {
            return 1 * ((e = e / 1 - 1) * e * e * e * e + 1);
        },
        easeInOutQuint: function(e) {
            return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2);
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
            return e == 0 ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1));
        },
        easeOutExpo: function(e) {
            return e == 1 ? 1 : 1 * (-Math.pow(2, -10 * e / 1) + 1);
        },
        easeInOutExpo: function(e) {
            return e == 0 ? 0 : e == 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2);
        },
        easeInCirc: function(e) {
            return e >= 1 ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1);
        },
        easeOutCirc: function(e) {
            return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e);
        },
        easeInOutCirc: function(e) {
            return (e /= .5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        },
        easeInElastic: function(e) {
            var t = 1.70158, n = 0, r = 1;
            if (e == 0) return 0;
            if ((e /= 1) == 1) return 1;
            n || (n = .3);
            if (r < Math.abs(1)) {
                r = 1;
                var t = n / 4;
            } else var t = n / (2 * Math.PI) * Math.asin(1 / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * 1 - t) * 2 * Math.PI / n));
        },
        easeOutElastic: function(e) {
            var t = 1.70158, n = 0, r = 1;
            if (e == 0) return 0;
            if ((e /= 1) == 1) return 1;
            n || (n = .3);
            if (r < Math.abs(1)) {
                r = 1;
                var t = n / 4;
            } else var t = n / (2 * Math.PI) * Math.asin(1 / r);
            return r * Math.pow(2, -10 * e) * Math.sin((e * 1 - t) * 2 * Math.PI / n) + 1;
        },
        easeInOutElastic: function(e) {
            var t = 1.70158, n = 0, r = 1;
            if (e == 0) return 0;
            if ((e /= 1 / 2) == 2) return 1;
            n || (n = 1 * .3 * 1.5);
            if (r < Math.abs(1)) {
                r = 1;
                var t = n / 4;
            } else var t = n / (2 * Math.PI) * Math.asin(1 / r);
            return e < 1 ? -0.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * 1 - t) * 2 * Math.PI / n) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * 1 - t) * 2 * Math.PI / n) * .5 + 1;
        },
        easeInBack: function(e) {
            var t = 1.70158;
            return 1 * (e /= 1) * e * ((t + 1) * e - t);
        },
        easeOutBack: function(e) {
            var t = 1.70158;
            return 1 * ((e = e / 1 - 1) * e * ((t + 1) * e + t) + 1);
        },
        easeInOutBack: function(e) {
            var t = 1.70158;
            return (e /= .5) < 1 ? .5 * e * e * (((t *= 1.525) + 1) * e - t) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        },
        easeInBounce: function(e) {
            return 1 - n.easeOutBounce(1 - e);
        },
        easeOutBounce: function(e) {
            return (e /= 1) < 1 / 2.75 ? 1 * 7.5625 * e * e : e < 2 / 2.75 ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375);
        },
        easeInOutBounce: function(e) {
            return e < .5 ? n.easeInBounce(e * 2) * .5 : n.easeOutBounce(e * 2 - 1) * .5 + .5;
        }
    }, r = e.canvas.width, i = e.canvas.height;
    if (window.devicePixelRatio) {
        e.canvas.style.width = r + "px";
        e.canvas.style.height = i + "px";
        e.canvas.height = i * window.devicePixelRatio;
        e.canvas.width = r * window.devicePixelRatio;
        e.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
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
        var i = r ? mergeChartConfig(t.PolarArea.defaults, r) : t.PolarArea.defaults;
        return new o(n, i, e);
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
        var i = r ? mergeChartConfig(t.Radar.defaults, r) : t.Radar.defaults;
        return new u(n, i, e);
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
        var i = r ? mergeChartConfig(t.Pie.defaults, r) : t.Pie.defaults;
        return new a(n, i, e);
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
        var i = r ? mergeChartConfig(t.Doughnut.defaults, r) : t.Doughnut.defaults;
        return new f(n, i, e);
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
        var i = r ? mergeChartConfig(t.Line.defaults, r) : t.Line.defaults;
        return new l(n, i, e);
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
        var i = r ? mergeChartConfig(t.Bar.defaults, r) : t.Bar.defaults;
        return new c(n, i, e);
    };
    var s = function(e) {
        e.clearRect(0, 0, r, i);
    }, o = function(e, t, n) {
        function calculateDrawingSizes() {
            s = Min([ r, i ]) / 2;
            s -= Max([ t.scaleFontSize * .5, t.scaleLineWidth * .5 ]);
            a = t.scaleFontSize * 2;
            if (t.scaleShowLabelBackdrop) {
                a += 2 * t.scaleBackdropPaddingY;
                s -= t.scaleBackdropPaddingY * 1.5;
            }
            f = s;
            a = Default(a, 5);
        }
        function drawScale() {
            for (var e = 0; e < u.steps; e++) {
                if (t.scaleShowLine) {
                    n.beginPath();
                    n.arc(r / 2, i / 2, o * (e + 1), 0, Math.PI * 2, !0);
                    n.strokeStyle = t.scaleLineColor;
                    n.lineWidth = t.scaleLineWidth;
                    n.stroke();
                }
                if (t.scaleShowLabels) {
                    n.textAlign = "center";
                    n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
                    var s = u.labels[e];
                    if (t.scaleShowLabelBackdrop) {
                        var a = n.measureText(s).width;
                        n.fillStyle = t.scaleBackdropColor;
                        n.beginPath();
                        n.rect(Math.round(r / 2 - a / 2 - t.scaleBackdropPaddingX), Math.round(i / 2 - o * (e + 1) - t.scaleFontSize * .5 - t.scaleBackdropPaddingY), Math.round(a + t.scaleBackdropPaddingX * 2), Math.round(t.scaleFontSize + t.scaleBackdropPaddingY * 2));
                        n.fill();
                    }
                    n.textBaseline = "middle";
                    n.fillStyle = t.scaleFontColor;
                    n.fillText(s, r / 2, i / 2 - o * (e + 1));
                }
            }
        }
        function drawAllSegments(s) {
            var a = -Math.PI / 2, f = Math.PI * 2 / e.length, l = 1, c = 1;
            if (t.animation) {
                t.animateScale && (l = s);
                t.animateRotate && (c = s);
            }
            for (var h = 0; h < e.length; h++) {
                n.beginPath();
                n.arc(r / 2, i / 2, l * calculateOffset(e[h].value, u, o), a, a + c * f, !1);
                n.lineTo(r / 2, i / 2);
                n.closePath();
                n.fillStyle = e[h].color;
                n.fill();
                if (t.segmentShowStroke) {
                    n.strokeStyle = t.segmentStrokeColor;
                    n.lineWidth = t.segmentStrokeWidth;
                    n.stroke();
                }
                a += c * f;
            }
        }
        function getValueBounds() {
            var t = Number.MIN_VALUE, n = Number.MAX_VALUE;
            for (var r = 0; r < e.length; r++) {
                e[r].value > t && (t = e[r].value);
                e[r].value < n && (n = e[r].value);
            }
            var i = Math.floor(f / (a * .66)), s = Math.floor(f / a * .5);
            return {
                maxValue: t,
                minValue: n,
                maxSteps: i,
                minSteps: s
            };
        }
        var s, o, u, a, f, l, c;
        calculateDrawingSizes();
        l = getValueBounds();
        c = t.scaleShowLabels ? t.scaleLabel : null;
        if (!t.scaleOverride) u = calculateScale(f, l.maxSteps, l.minSteps, l.maxValue, l.minValue, c); else {
            u = {
                steps: t.scaleSteps,
                stepValue: t.scaleStepWidth,
                graphMin: t.scaleStartValue,
                labels: []
            };
            populateLabels(c, u.labels, u.steps, t.scaleStartValue, t.scaleStepWidth);
        }
        o = s / u.steps;
        animationLoop(t, drawScale, drawAllSegments, n);
    }, u = function(e, t, n) {
        function drawAllDataPoints(s) {
            var a = 2 * Math.PI / e.datasets[0].data.length;
            n.save();
            n.translate(r / 2, i / 2);
            for (var f = 0; f < e.datasets.length; f++) {
                n.beginPath();
                n.moveTo(0, s * -1 * calculateOffset(e.datasets[f].data[0], u, o));
                for (var l = 1; l < e.datasets[f].data.length; l++) {
                    n.rotate(a);
                    n.lineTo(0, s * -1 * calculateOffset(e.datasets[f].data[l], u, o));
                }
                n.closePath();
                n.fillStyle = e.datasets[f].fillColor;
                n.strokeStyle = e.datasets[f].strokeColor;
                n.lineWidth = t.datasetStrokeWidth;
                n.fill();
                n.stroke();
                if (t.pointDot) {
                    n.fillStyle = e.datasets[f].pointColor;
                    n.strokeStyle = e.datasets[f].pointStrokeColor;
                    n.lineWidth = t.pointDotStrokeWidth;
                    for (var c = 0; c < e.datasets[f].data.length; c++) {
                        n.rotate(a);
                        n.beginPath();
                        n.arc(0, s * -1 * calculateOffset(e.datasets[f].data[c], u, o), t.pointDotRadius, 2 * Math.PI, !1);
                        n.fill();
                        n.stroke();
                    }
                }
                n.rotate(a);
            }
            n.restore();
        }
        function drawScale() {
            var a = 2 * Math.PI / e.datasets[0].data.length;
            n.save();
            n.translate(r / 2, i / 2);
            if (t.angleShowLineOut) {
                n.strokeStyle = t.angleLineColor;
                n.lineWidth = t.angleLineWidth;
                for (var f = 0; f < e.datasets[0].data.length; f++) {
                    n.rotate(a);
                    n.beginPath();
                    n.moveTo(0, 0);
                    n.lineTo(0, -s);
                    n.stroke();
                }
            }
            for (var l = 0; l < u.steps; l++) {
                n.beginPath();
                if (t.scaleShowLine) {
                    n.strokeStyle = t.scaleLineColor;
                    n.lineWidth = t.scaleLineWidth;
                    n.moveTo(0, -o * (l + 1));
                    for (var c = 0; c < e.datasets[0].data.length; c++) {
                        n.rotate(a);
                        n.lineTo(0, -o * (l + 1));
                    }
                    n.closePath();
                    n.stroke();
                }
                if (t.scaleShowLabels) {
                    n.textAlign = "center";
                    n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
                    n.textBaseline = "middle";
                    if (t.scaleShowLabelBackdrop) {
                        var h = n.measureText(u.labels[l]).width;
                        n.fillStyle = t.scaleBackdropColor;
                        n.beginPath();
                        n.rect(Math.round(-h / 2 - t.scaleBackdropPaddingX), Math.round(-o * (l + 1) - t.scaleFontSize * .5 - t.scaleBackdropPaddingY), Math.round(h + t.scaleBackdropPaddingX * 2), Math.round(t.scaleFontSize + t.scaleBackdropPaddingY * 2));
                        n.fill();
                    }
                    n.fillStyle = t.scaleFontColor;
                    n.fillText(u.labels[l], 0, -o * (l + 1));
                }
            }
            for (var p = 0; p < e.labels.length; p++) {
                n.font = t.pointLabelFontStyle + " " + t.pointLabelFontSize + "px " + t.pointLabelFontFamily;
                n.fillStyle = t.pointLabelFontColor;
                var d = Math.sin(a * p) * (s + t.pointLabelFontSize), v = Math.cos(a * p) * (s + t.pointLabelFontSize);
                a * p == Math.PI || a * p == 0 ? n.textAlign = "center" : a * p > Math.PI ? n.textAlign = "right" : n.textAlign = "left";
                n.textBaseline = "middle";
                n.fillText(e.labels[p], d, -v);
            }
            n.restore();
        }
        function calculateDrawingSizes() {
            s = Min([ r, i ]) / 2;
            a = t.scaleFontSize * 2;
            var o = 0;
            for (var u = 0; u < e.labels.length; u++) {
                n.font = t.pointLabelFontStyle + " " + t.pointLabelFontSize + "px " + t.pointLabelFontFamily;
                var l = n.measureText(e.labels[u]).width;
                l > o && (o = l);
            }
            s -= Max([ o, t.pointLabelFontSize / 2 * 1.5 ]);
            s -= t.pointLabelFontSize;
            s = CapValue(s, null, 0);
            f = s;
            a = Default(a, 5);
        }
        function getValueBounds() {
            var t = Number.MIN_VALUE, n = Number.MAX_VALUE;
            for (var r = 0; r < e.datasets.length; r++) for (var i = 0; i < e.datasets[r].data.length; i++) {
                e.datasets[r].data[i] > t && (t = e.datasets[r].data[i]);
                e.datasets[r].data[i] < n && (n = e.datasets[r].data[i]);
            }
            var s = Math.floor(f / (a * .66)), o = Math.floor(f / a * .5);
            return {
                maxValue: t,
                minValue: n,
                maxSteps: s,
                minSteps: o
            };
        }
        var s, o, u, a, f, l, c;
        e.labels || (e.labels = []);
        calculateDrawingSizes();
        var l = getValueBounds();
        c = t.scaleShowLabels ? t.scaleLabel : null;
        if (!t.scaleOverride) u = calculateScale(f, l.maxSteps, l.minSteps, l.maxValue, l.minValue, c); else {
            u = {
                steps: t.scaleSteps,
                stepValue: t.scaleStepWidth,
                graphMin: t.scaleStartValue,
                labels: []
            };
            populateLabels(c, u.labels, u.steps, t.scaleStartValue, t.scaleStepWidth);
        }
        o = s / u.steps;
        animationLoop(t, drawScale, drawAllDataPoints, n);
    }, a = function(e, t, n) {
        function drawPieSegments(u) {
            var a = -Math.PI / 2, f = 1, l = 1;
            if (t.animation) {
                t.animateScale && (f = u);
                t.animateRotate && (l = u);
            }
            for (var c = 0; c < e.length; c++) {
                var h = l * e[c].value / s * Math.PI * 2;
                n.beginPath();
                n.arc(r / 2, i / 2, f * o, a, a + h);
                n.lineTo(r / 2, i / 2);
                n.closePath();
                n.fillStyle = e[c].color;
                n.fill();
                if (t.segmentShowStroke) {
                    n.lineWidth = t.segmentStrokeWidth;
                    n.strokeStyle = t.segmentStrokeColor;
                    n.stroke();
                }
                a += h;
            }
        }
        var s = 0, o = Min([ i / 2, r / 2 ]) - 5;
        for (var u = 0; u < e.length; u++) s += e[u].value;
        animationLoop(t, null, drawPieSegments, n);
    }, f = function(e, t, n) {
        function drawPieSegments(a) {
            var f = -Math.PI / 2, l = 1, c = 1;
            if (t.animation) {
                t.animateScale && (l = a);
                t.animateRotate && (c = a);
            }
            for (var h = 0; h < e.length; h++) {
                var p = c * e[h].value / s * Math.PI * 2;
                n.beginPath();
                n.arc(r / 2, i / 2, l * o, f, f + p, !1);
                n.arc(r / 2, i / 2, l * u, f + p, f, !0);
                n.closePath();
                n.fillStyle = e[h].color;
                n.fill();
                if (t.segmentShowStroke) {
                    n.lineWidth = t.segmentStrokeWidth;
                    n.strokeStyle = t.segmentStrokeColor;
                    n.stroke();
                }
                f += p;
            }
        }
        var s = 0, o = Min([ i / 2, r / 2 ]) - 5, u = o * (t.percentageInnerCutout / 100);
        for (var a = 0; a < e.length; a++) s += e[a].value;
        animationLoop(t, null, drawPieSegments, n);
    }, l = function(e, t, n) {
        function drawLines(r) {
            function yPos(t, n) {
                return m - r * calculateOffset(e.datasets[t].data[n], u, o);
            }
            function xPos(e) {
                return v + h * e;
            }
            for (var i = 0; i < e.datasets.length; i++) {
                n.strokeStyle = e.datasets[i].strokeColor;
                n.lineWidth = t.datasetStrokeWidth;
                n.beginPath();
                n.moveTo(v, m - r * calculateOffset(e.datasets[i].data[0], u, o));
                for (var s = 1; s < e.datasets[i].data.length; s++) t.bezierCurve ? n.bezierCurveTo(xPos(s - .5), yPos(i, s - 1), xPos(s - .5), yPos(i, s), xPos(s), yPos(i, s)) : n.lineTo(xPos(s), yPos(i, s));
                n.stroke();
                if (t.datasetFill) {
                    n.lineTo(v + h * (e.datasets[i].data.length - 1), m);
                    n.lineTo(v, m);
                    n.closePath();
                    n.fillStyle = e.datasets[i].fillColor;
                    n.fill();
                } else n.closePath();
                if (t.pointDot) {
                    n.fillStyle = e.datasets[i].pointColor;
                    n.strokeStyle = e.datasets[i].pointStrokeColor;
                    n.lineWidth = t.pointDotStrokeWidth;
                    for (var a = 0; a < e.datasets[i].data.length; a++) {
                        n.beginPath();
                        n.arc(v + h * a, m - r * calculateOffset(e.datasets[i].data[a], u, o), t.pointDotRadius, 0, Math.PI * 2, !0);
                        n.fill();
                        n.stroke();
                    }
                }
            }
        }
        function drawScale() {
            n.lineWidth = t.scaleLineWidth;
            n.strokeStyle = t.scaleLineColor;
            n.beginPath();
            n.moveTo(r - p / 2 + 5, m);
            n.lineTo(r - p / 2 - d - 5, m);
            n.stroke();
            if (g > 0) {
                n.save();
                n.textAlign = "right";
            } else n.textAlign = "center";
            n.fillStyle = t.scaleFontColor;
            for (var i = 0; i < e.labels.length; i++) {
                n.save();
                if (g > 0) {
                    n.translate(v + i * h, m + t.scaleFontSize);
                    n.rotate(-(g * (Math.PI / 180)));
                    n.fillText(e.labels[i], 0, 0);
                    n.restore();
                } else n.fillText(e.labels[i], v + i * h, m + t.scaleFontSize + 3);
                n.beginPath();
                n.moveTo(v + i * h, m + 3);
                if (t.scaleShowGridLines && i > 0) {
                    n.lineWidth = t.scaleGridLineWidth;
                    n.strokeStyle = t.scaleGridLineColor;
                    n.lineTo(v + i * h, 5);
                } else n.lineTo(v + i * h, m + 3);
                n.stroke();
            }
            n.lineWidth = t.scaleLineWidth;
            n.strokeStyle = t.scaleLineColor;
            n.beginPath();
            n.moveTo(v, m + 5);
            n.lineTo(v, 5);
            n.stroke();
            n.textAlign = "right";
            n.textBaseline = "middle";
            for (var s = 0; s < u.steps; s++) {
                n.beginPath();
                n.moveTo(v - 3, m - (s + 1) * o);
                if (t.scaleShowGridLines) {
                    n.lineWidth = t.scaleGridLineWidth;
                    n.strokeStyle = t.scaleGridLineColor;
                    n.lineTo(v + d + 5, m - (s + 1) * o);
                } else n.lineTo(v - .5, m - (s + 1) * o);
                n.stroke();
                t.scaleShowLabels && n.fillText(u.labels[s], v - 8, m - (s + 1) * o);
            }
        }
        function calculateXAxisSize() {
            var i = 1;
            if (t.scaleShowLabels) {
                n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
                for (var s = 0; s < u.labels.length; s++) {
                    var o = n.measureText(u.labels[s]).width;
                    i = o > i ? o : i;
                }
                i += 10;
            }
            d = r - i - p;
            h = Math.floor(d / (e.labels.length - 1));
            v = r - p / 2 - d;
            m = f + t.scaleFontSize / 2;
        }
        function calculateDrawingSizes() {
            s = i;
            n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
            p = 1;
            for (var o = 0; o < e.labels.length; o++) {
                var u = n.measureText(e.labels[o]).width;
                p = u > p ? u : p;
            }
            if (r / e.labels.length < p) {
                g = 45;
                if (r / e.labels.length < Math.cos(g) * p) {
                    g = 90;
                    s -= p;
                } else s -= Math.sin(g) * p;
            } else s -= t.scaleFontSize;
            s -= 5;
            a = t.scaleFontSize;
            s -= a;
            f = s;
        }
        function getValueBounds() {
            var t = Number.MIN_VALUE, n = Number.MAX_VALUE;
            for (var r = 0; r < e.datasets.length; r++) for (var i = 0; i < e.datasets[r].data.length; i++) {
                e.datasets[r].data[i] > t && (t = e.datasets[r].data[i]);
                e.datasets[r].data[i] < n && (n = e.datasets[r].data[i]);
            }
            var s = Math.floor(f / (a * .66)), o = Math.floor(f / a * .5);
            return {
                maxValue: t,
                minValue: n,
                maxSteps: s,
                minSteps: o
            };
        }
        var s, o, u, a, f, l, c, h, p, d, v, m, g = 0;
        calculateDrawingSizes();
        l = getValueBounds();
        c = t.scaleShowLabels ? t.scaleLabel : "";
        if (!t.scaleOverride) u = calculateScale(f, l.maxSteps, l.minSteps, l.maxValue, l.minValue, c); else {
            u = {
                steps: t.scaleSteps,
                stepValue: t.scaleStepWidth,
                graphMin: t.scaleStartValue,
                labels: []
            };
            populateLabels(c, u.labels, u.steps, t.scaleStartValue, t.scaleStepWidth);
        }
        o = Math.floor(f / u.steps);
        calculateXAxisSize();
        animationLoop(t, drawScale, drawLines, n);
    }, c = function(e, t, n) {
        function drawBars(r) {
            n.lineWidth = t.barStrokeWidth;
            for (var i = 0; i < e.datasets.length; i++) {
                n.fillStyle = e.datasets[i].fillColor;
                n.strokeStyle = e.datasets[i].strokeColor;
                for (var s = 0; s < e.datasets[i].data.length; s++) {
                    var a = v + t.barValueSpacing + h * s + g * i + t.barDatasetSpacing * i + t.barStrokeWidth * i;
                    n.beginPath();
                    n.moveTo(a, m);
                    n.lineTo(a, m - r * calculateOffset(e.datasets[i].data[s], u, o) + t.barStrokeWidth / 2);
                    n.lineTo(a + g, m - r * calculateOffset(e.datasets[i].data[s], u, o) + t.barStrokeWidth / 2);
                    n.lineTo(a + g, m);
                    t.barShowStroke && n.stroke();
                    n.closePath();
                    n.fill();
                }
            }
        }
        function drawScale() {
            n.lineWidth = t.scaleLineWidth;
            n.strokeStyle = t.scaleLineColor;
            n.beginPath();
            n.moveTo(r - p / 2 + 5, m);
            n.lineTo(r - p / 2 - d - 5, m);
            n.stroke();
            if (y > 0) {
                n.save();
                n.textAlign = "right";
            } else n.textAlign = "center";
            n.fillStyle = t.scaleFontColor;
            for (var i = 0; i < e.labels.length; i++) {
                n.save();
                if (y > 0) {
                    n.translate(v + i * h, m + t.scaleFontSize);
                    n.rotate(-(y * (Math.PI / 180)));
                    n.fillText(e.labels[i], 0, 0);
                    n.restore();
                } else n.fillText(e.labels[i], v + i * h + h / 2, m + t.scaleFontSize + 3);
                n.beginPath();
                n.moveTo(v + (i + 1) * h, m + 3);
                n.lineWidth = t.scaleGridLineWidth;
                n.strokeStyle = t.scaleGridLineColor;
                n.lineTo(v + (i + 1) * h, 5);
                n.stroke();
            }
            n.lineWidth = t.scaleLineWidth;
            n.strokeStyle = t.scaleLineColor;
            n.beginPath();
            n.moveTo(v, m + 5);
            n.lineTo(v, 5);
            n.stroke();
            n.textAlign = "right";
            n.textBaseline = "middle";
            for (var s = 0; s < u.steps; s++) {
                n.beginPath();
                n.moveTo(v - 3, m - (s + 1) * o);
                if (t.scaleShowGridLines) {
                    n.lineWidth = t.scaleGridLineWidth;
                    n.strokeStyle = t.scaleGridLineColor;
                    n.lineTo(v + d + 5, m - (s + 1) * o);
                } else n.lineTo(v - .5, m - (s + 1) * o);
                n.stroke();
                t.scaleShowLabels && n.fillText(u.labels[s], v - 8, m - (s + 1) * o);
            }
        }
        function calculateXAxisSize() {
            var i = 1;
            if (t.scaleShowLabels) {
                n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
                for (var s = 0; s < u.labels.length; s++) {
                    var o = n.measureText(u.labels[s]).width;
                    i = o > i ? o : i;
                }
                i += 10;
            }
            d = r - i - p;
            h = Math.floor(d / e.labels.length);
            g = (h - t.scaleGridLineWidth * 2 - t.barValueSpacing * 2 - (t.barDatasetSpacing * e.datasets.length - 1) - (t.barStrokeWidth / 2 * e.datasets.length - 1)) / e.datasets.length;
            v = r - p / 2 - d;
            m = f + t.scaleFontSize / 2;
        }
        function calculateDrawingSizes() {
            s = i;
            n.font = t.scaleFontStyle + " " + t.scaleFontSize + "px " + t.scaleFontFamily;
            p = 1;
            for (var o = 0; o < e.labels.length; o++) {
                var u = n.measureText(e.labels[o]).width;
                p = u > p ? u : p;
            }
            if (r / e.labels.length < p) {
                y = 45;
                if (r / e.labels.length < Math.cos(y) * p) {
                    y = 90;
                    s -= p;
                } else s -= Math.sin(y) * p;
            } else s -= t.scaleFontSize;
            s -= 5;
            a = t.scaleFontSize;
            s -= a;
            f = s;
        }
        function getValueBounds() {
            var t = Number.MIN_VALUE, n = Number.MAX_VALUE;
            for (var r = 0; r < e.datasets.length; r++) for (var i = 0; i < e.datasets[r].data.length; i++) {
                e.datasets[r].data[i] > t && (t = e.datasets[r].data[i]);
                e.datasets[r].data[i] < n && (n = e.datasets[r].data[i]);
            }
            var s = Math.floor(f / (a * .66)), o = Math.floor(f / a * .5);
            return {
                maxValue: t,
                minValue: n,
                maxSteps: s,
                minSteps: o
            };
        }
        var s, o, u, a, f, l, c, h, p, d, v, m, g, y = 0;
        calculateDrawingSizes();
        l = getValueBounds();
        c = t.scaleShowLabels ? t.scaleLabel : "";
        if (!t.scaleOverride) u = calculateScale(f, l.maxSteps, l.minSteps, l.maxValue, l.minValue, c); else {
            u = {
                steps: t.scaleSteps,
                stepValue: t.scaleStepWidth,
                graphMin: t.scaleStartValue,
                labels: []
            };
            populateLabels(c, u.labels, u.steps, t.scaleStartValue, t.scaleStepWidth);
        }
        o = Math.floor(f / u.steps);
        calculateXAxisSize();
        animationLoop(t, drawScale, drawBars, n);
    }, h = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            window.setTimeout(e, 1e3 / 60);
        };
    }(), p = {};
};