(function f(
  vars0 = {
    x: undefined,
    y: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.x = {
        a: 0
      }
    ),
    (
      (function f(
        object = console,
        args = [vars0.x.a],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    (
      vars0.y = [1, 2, 3]
    ),
    (
      (function f(
        object = console,
        args = [vars0.y[1 + 1]],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
