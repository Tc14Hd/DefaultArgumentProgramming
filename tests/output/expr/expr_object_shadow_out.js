(function f(
  vars0 = {
    a: undefined,
    x: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.a = 1
    ),
    (
      vars0.x = {
        a: 0
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
