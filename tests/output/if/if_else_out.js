(function f(
  vars0 = {},
  body = (
    ctrl = 0,
    1 == 2 ? (
      (
        (function f(
          object = console,
          args = ["true"],
          body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
        ) {})(),
        retval
      )
    ) : (
      (
        (function f(
          object = console,
          args = ["false"],
          body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
        ) {})(),
        retval
      )
    )
  )
) {})();
