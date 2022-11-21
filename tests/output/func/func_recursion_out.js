(function f(
  vars0 = {
    f: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.f = function f(
        args,
        vars1 = {},
        body = (
          vars1.n = args[0],
          vars1.n > 0 ? (
            (
              (function f(
                object = console,
                args = [vars1.n],
                body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
              ) {})(),
              retval
            ),
            (
              (function f(
                object = vars0,
                args = [vars1.n - 1],
                body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
              ) {})(),
              retval
            )
          ) : 0,
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.f.customfunc = true
    ),
    (
      (function f(
        object = vars0,
        args = [5],
        body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
      ) {})(),
      retval
    )
  )
) {})();
