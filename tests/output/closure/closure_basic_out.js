(function f(
  vars0 = {
    f: undefined,
    x: undefined,
    r: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.f = function f(
        args,
        vars1 = {
          x: undefined,
          g: undefined
        },
        body = (
          (
            vars1.g = function f(
              args,
              vars2 = {},
              body = (
                (
                  retval = vars1.x,
                  ctrl = 3
                ),
                ctrl != 3 && (retval = undefined),
                ctrl = 0
              )
            ) {},
            vars1.g.customfunc = true
          ),
          (
            vars1.x = 0
          ),
          (
            retval = vars1.g,
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.f.customfunc = true
    ),
    (
      vars0.x = 1
    ),
    (
      vars0.r = (
        (function f(
          callee = (
            (function f(
              object = vars0,
              args = [],
              body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
            ) {})(),
            retval
          ),
          args = [],
          body = callee.customfunc ? callee(args) : retval = callee(...args)
        ) {})(),
        retval
      )
    ),
    (
      (function f(
        object = console,
        args = [vars0.r],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
