(function f(
  vars0 = {
    f: undefined,
    x: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.f = function f(
        args,
        vars1 = {},
        body = (
          vars1.x = args[0],
          vars1.x == 0 ? (
            ctrl = 3,
            retval = "A"
          ) : (
            ctrl = 3,
            retval = "B"
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.f.customfunc = true
    ),
    (
      vars0.x = (
        (function f(
          object = vars0,
          args = [0],
          body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
        ) {})(),
        retval
      )
    ),
    (
      (function f(
        object = console,
        args = [vars0.x],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    vars0.x = (
      (function f(
        object = vars0,
        args = [1],
        body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
      ) {})(),
      retval
    ),
    (
      (function f(
        object = console,
        args = [vars0.x],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
