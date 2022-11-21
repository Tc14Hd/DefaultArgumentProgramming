(function f(
  vars0 = {
    i: undefined
  },
  body = (
    ctrl = 0,
    (
      (
        vars0.i = 0
      ),
      (function f(
        body = vars0.i <= 2 && (
          (
            (function f(
              disc = vars0.i,
              fallthru = false,
              body = (
                (fallthru || disc === 0) && (
                  fallthru = true,
                  (
                    (function f(
                      object = console,
                      args = ["A"],
                      body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 2
                ),
                ctrl == 0 && ((fallthru || disc === 1) && (
                  fallthru = true,
                  (
                    (function f(
                      object = console,
                      args = ["B"],
                      body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 2
                )),
                ctrl == 0 && ((fallthru || disc === 2) && (
                  fallthru = true,
                  (
                    (function f(
                      object = console,
                      args = ["C"],
                      body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
                    ) {})(),
                    retval
                  ),
                  ctrl = 2
                )),
                ctrl == 2 && (ctrl = 0)
              )
            ) {})()
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
