(function f(
  vars0 = {},
  body = (
    ctrl = 0,
    (function f(
      disc = (
        (
          (function f(
            object = console,
            args = ["X"],
            body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
          ) {})(),
          retval
        ),
        2
      ),
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
  )
) {})();
