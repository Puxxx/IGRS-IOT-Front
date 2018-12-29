export class LoginSrc {
  drawPath(ctx, fn) {
    ctx.save();
    ctx.beginPath();
    fn();
    ctx.closePath();
    ctx.restore();
  }

  random(min, max, int) {
    const result = (min + Math.random() * ((max + (int ? 1 : 0)) - min));
    return int ? parseInt(result, 0) : result;
  }

  getVectorLength(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
  }

  easing(t, b, c, d, s) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }

  cellEasing(t, b, c, d, s) {
    return c * (t /= d) * t * t * t + b;
  }
}
