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
        body = vars0.i < 10 && (
          (
            vars0.i == 5 ? (
              ctrl = 2,
              ctrl == 0 && (
                (function f(
                  object = console,
                  args = ["Unreachable"],
                  body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
                ) {})(),
                retval
              )
            ) : 0,
            ctrl == 0 && (
              (function f(
                object = console,
                args = [vars0.i],
                body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
              ) {})(),
              retval
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
    ),
    ctrl == 0 && (
      (function f(
        object = console,
        args = ["End", vars0.i],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
