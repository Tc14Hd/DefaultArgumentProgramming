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
          vars1.i = args[0],
          (function f(
            disc = vars1.i,
            fallthru = false,
            body = (
              (fallthru || disc === 0) && (
                fallthru = true,
                (
                  ctrl = 3,
                  retval = 1
                )
              ),
              ctrl == 0 && ((fallthru || disc === 1) && (
                fallthru = true,
                (
                  ctrl = 3,
                  retval = 2
                )
              )),
              ctrl == 0 && ((fallthru || disc === 2) && (
                fallthru = true,
                (
                  ctrl = 3,
                  retval = 3
                )
              )),
              ctrl == 2 && (ctrl = 0)
            )
          ) {})(),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.f.customfunc = true
    ),
    (
      (function f(
        object = console,
        args = [(
          (function f(
            object = vars0,
            args = [0],
            body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
          ) {})(),
          retval
        )],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    (
      (function f(
        object = console,
        args = [(
          (function f(
            object = vars0,
            args = [1],
            body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
          ) {})(),
          retval
        )],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    (
      (function f(
        object = console,
        args = [(
          (function f(
            object = vars0,
            args = [2],
            body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
          ) {})(),
          retval
        )],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    (
      (function f(
        object = console,
        args = [(
          (function f(
            object = vars0,
            args = [3],
            body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
          ) {})(),
          retval
        )],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
