(function f(
  vars0 = {
    i: undefined,
    f: undefined
  },
  body = (
    ctrl = 0,
    (
      (function f(
        object = console,
        args = [vars0.f],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    (
      (
        vars0.i = 0
      ),
      (function f(
        body = vars0.i < 0 && (
          (
            (
              vars0.f = function f(
                args,
                vars1 = {},
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
        args = [vars0.f],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
