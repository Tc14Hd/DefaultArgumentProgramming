(function f(
  vars0 = {
    f: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.f = function f(
        args,
        vars1 = {
          g: undefined
        },
        body = (
          (
            vars1.g = function f(
              args,
              vars2 = {},
              body = (
                (
                  (function f(
                    object = console,
                    args = ["X"],
                    body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
                  ) {})(),
                  retval
                ),
                ctrl != 3 && (retval = undefined),
                ctrl = 0
              )
            ) {},
            vars1.g.customfunc = true
          ),
          (
            (function f(
              object = vars1,
              args = [],
              body = object.g.customfunc ? object.g(args) : retval = object.g(...args)
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
        args = [],
        body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
      ) {})(),
      retval
    )
  )
) {})();
