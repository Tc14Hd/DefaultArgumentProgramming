(function f(
  vars0 = {
    f: undefined,
    g: undefined
  },
  body = (
    ctrl = 0,
    (
      (function f(
        object = console,
        args = [vars0.f, vars0.g],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    (function f(
      disc = 0,
      fallthru = false,
      body = (
        (
          vars0.f = function f(
            args,
            vars1 = {},
            body = (
              (
                (function f(
                  object = console,
                  args = ["f"],
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
          vars0.g = function f(
            args,
            vars1 = {},
            body = (
              (
                (function f(
                  object = console,
                  args = ["g"],
                  body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
                ) {})(),
                retval
              ),
              ctrl != 3 && (retval = undefined),
              ctrl = 0
            )
          ) {},
          vars0.g.customfunc = true
        ),
        (fallthru || disc === 0) && (
          fallthru = true,
          (
            (function f(
              object = vars0,
              args = [],
              body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
            ) {})(),
            retval
          ),
          (
            (function f(
              object = vars0,
              args = [],
              body = object.g.customfunc ? object.g(args) : retval = object.g(...args)
            ) {})(),
            retval
          ),
          ctrl = 2
        ),
        ctrl == 0 && ((fallthru || disc === 1) && (
          fallthru = true,
          ctrl = 2
        )),
        ctrl == 2 && (ctrl = 0)
      )
    ) {})()
  )
) {})();
