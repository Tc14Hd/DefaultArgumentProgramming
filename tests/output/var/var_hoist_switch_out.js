(function f(
  vars0 = {
    x: undefined
  },
  body = (
    ctrl = 0,
    (
      (function f(
        object = console,
        args = [vars0.x],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    (function f(
      disc = 1,
      fallthru = false,
      body = (
        (fallthru || disc === 0) && (
          fallthru = true,
          (
            vars0.x = 2
          ),
          ctrl = 2
        ),
        ctrl == 0 && ((fallthru || disc === 1) && (
          fallthru = true,
          (
            vars0.x = 3
          ),
          ctrl = 2
        )),
        ctrl == 2 && (ctrl = 0)
      )
    ) {})(),
    ctrl == 0 && (
      (function f(
        object = console,
        args = [vars0.x],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
