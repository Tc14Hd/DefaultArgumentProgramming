(function f(
  vars0 = {},
  body = (
    ctrl = 0,
    (function f(
      disc = 1,
      fallthru = false,
      body = (
        (fallthru || disc === "1") && (
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
        ctrl == 2 && (ctrl = 0)
      )
    ) {})()
  )
) {})();
