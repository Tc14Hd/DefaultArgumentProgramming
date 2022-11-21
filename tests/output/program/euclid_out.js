(function f(
  vars0 = {},
  body = (
    ctrl = 0,
    a = 27,
    b = 18,
    (function f(
      body = b > 0 && (
        (
          t = b,
          b = a % b,
          a = t
        ),
        f()
      )
    ) {})(),
    (
      (function f(
        object = console,
        args = [a],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
