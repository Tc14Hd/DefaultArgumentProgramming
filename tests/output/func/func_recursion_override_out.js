(function f(
  vars0 = {
    f: undefined,
    g: undefined,
    h: undefined
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
      vars0.g = function f(
        args,
        vars1 = {},
        body = (
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.g.customfunc = true
    ),
    (
      vars0.h = vars0.f
    ),
    vars0.f = vars0.g,
    (
      (function f(
        object = vars0,
        args = [7],
        body = object.h.customfunc ? object.h(args) : retval = object.h(...args)
      ) {})(),
      retval
    )
  )
) {})();
