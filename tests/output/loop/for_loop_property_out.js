(function f(
  vars0 = {},
  body = (
    ctrl = 0,
    a = {},
    (
      a.i,
      (function f(
        body = a.i < 5 && (
          (
            (
              (function f(
                object = console,
                args = [a.i],
                body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
              ) {})(),
              retval
            )
          ),
          (
            a.i++,
            f()
          )
        )
      ) {})()
    ),
    (
      (function f(
        object = console,
        args = ["End", a.i],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
