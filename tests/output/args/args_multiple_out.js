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
          vars1.a = args[0],
          vars1.b = args[1],
          (
            (function f(
              object = console,
              args = [vars1.a, vars1.b],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.f.customfunc = true
    ),
    (
      (function f(
        object = vars0,
        args = [0, 1],
        body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
      ) {})(),
      retval
    )
  )
) {})();
