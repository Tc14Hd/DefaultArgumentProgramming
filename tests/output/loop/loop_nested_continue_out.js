(function f(
  vars0 = {
    i: undefined,
    j: undefined
  },
  body = (
    ctrl = 0,
    (
      (
        vars0.i = 0
      ),
      (function f(
        body = vars0.i < 10 && (
          (
            (
              (
                vars0.j = 0
              ),
              (function f(
                body = vars0.j <= 5 && (
                  (
                    vars0.j == 3 ? ctrl = 1 : 0,
                    ctrl == 0 && (
                      (function f(
                        object = console,
                        args = [vars0.i, vars0.j],
                        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
                      ) {})(),
                      retval
                    )
                  ),
                  ctrl < 2 ? (
                    ctrl = 0,
                    (
                      vars0.j++,
                      f()
                    )
                  ) : ctrl != 3 && (ctrl = 0)
                )
              ) {})()
            )
          ),
          ctrl < 2 ? (
            ctrl = 0,
            (
              vars0.i++,
              f()
            )
          ) : ctrl != 3 && (ctrl = 0)
        )
      ) {})()
    )
  )
) {})();
