(function f(
  vars0 = {
    i: undefined,
    x: undefined
  },
  body = (
    ctrl = 0,
    (
      (function f(
        object = console,
        args = [vars0.x, vars0.i],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    (
      (
        vars0.i = 0
      ),
      (function f(
        body = vars0.i < 10 && (
          (
            (
              vars0.x = vars0.i
            )
          ),
          (
            vars0.i++,
            f()
          )
        )
      ) {})()
    ),
    (
      (function f(
        object = console,
        args = [vars0.x, vars0.i],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
