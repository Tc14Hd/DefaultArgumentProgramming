(function f(
  vars0 = {},
  body = (
    ctrl = 0,
    (function f(
      disc = 0,
      fallthru = false,
      body = (
        (fallthru || disc === 0) && (
          fallthru = true,
          (
            (function f(
              object = console,
              args = ["X"],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          ),
          ctrl = 2,
          ctrl == 0 && (
            (function f(
              object = console,
              args = ["Unreachable"],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          )
        ),
        ctrl == 2 && (ctrl = 0)
      )
    ) {})()
  )
) {})();
