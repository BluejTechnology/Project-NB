"use strict"; if (!Date.now) Date.now = function () { return (new Date).getTime() }; (function () { var n = ["webkit", "moz"]; for (var e = 0; e < n.length && !window.requestAnimationFrame; ++e) { var i = n[e]; window.requestAnimationFrame = window[i + "RequestAnimationFrame"]; window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"] } if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) { var a = 0; window.requestAnimationFrame = function (n) { var e = Date.now(); var i = Math.max(a + 16, e); return setTimeout(function () { n(a = i) }, i - e) }; window.cancelAnimationFrame = clearTimeout } })()


export default (fps, drawHandle) => {
    const Fps = fps || 60;
    let now;
    let then = Date.now();
    let interval = 1000 / Fps;
    let delta;
    return function tick() {
        requestAnimationFrame(tick);
        now = Date.now();
        delta = now - then;
        if (delta > interval) {
            // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
            then = now - (delta % interval);
            typeof drawHandle === 'function' && drawHandle.call(this, arguments); // ... Code for Drawing the Frame ...
        }
    }
}