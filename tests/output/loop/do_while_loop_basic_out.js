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
          vars0.i++
        ),
        0 <= vars0.i && vars0.i <= 5 && f()
      )
    ) {})(),
    (
      (function f(
        object = console,
        args = ["End", vars0.i],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
