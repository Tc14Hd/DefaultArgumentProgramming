(function f(
  vars0 = {
    a: undefined,
    x: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.a = 0
    ),
    (
      vars0.x = {
        a: vars0.a
      }
    ),
    (
      (function f(
        object = console,
        args = [vars0.x],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    (
      (function f(
        object = console,
        args = [vars0.x.a],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
