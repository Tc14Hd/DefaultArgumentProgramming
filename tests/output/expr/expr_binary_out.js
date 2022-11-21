(function f(
  vars0 = {},
  body = (
    ctrl = 0,
    (
      (function f(
        object = console,
        args = [1 + 2],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
