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
        vars1 = {
          i: undefined
        },
        body = (
          (
            (
              vars1.i = 0
            ),
            (function f(
              body = vars1.i < 10 && (
                (
                  (
                    (function f(
                      object = console,
                      args = [vars1.i],
                      body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 2
                ),
                ctrl < 2 ? (
                  ctrl = 0,
                  (
                    vars1.i++,
                    f()
                  )
                ) : ctrl != 3 && (ctrl = 0)
              )
            ) {})()
          ),
          ctrl == 0 && (
            retval = 1,
            ctrl = 3
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
          args = [],
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
    )
  )
) {})();
