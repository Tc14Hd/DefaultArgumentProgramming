(function f(
  vars0 = {
    i: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.i = -1
    ),
    (function f(
      body = (
        (
          (
            (function f(
              object = console,
              args = [vars0.i],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          ),
          vars0.i++,
          ctrl = 1
        ),
        ctrl < 2 ? (
          ctrl = 0,
          0 <= vars0.i && vars0.i <= 5 && f()
        ) : ctrl != 3 && (ctrl = 0)
      )
    ) {})()
  )
) {})();
