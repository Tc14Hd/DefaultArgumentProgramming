(function f(
  vars0 = {
    x: undefined,
    y: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.x = 0,
      vars0.y = 1
    ),
    (
      (function f(
        object = console,
        args = [vars0.x, vars0.y],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
