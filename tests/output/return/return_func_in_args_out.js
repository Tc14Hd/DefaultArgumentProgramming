(function f(
  vars0 = {
    f: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.f = function f(
        args,
        vars1 = {},
        body = (
          (
            ctrl = 3,
            retval = 1
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.f.customfunc = true
    ),
    (
      (function f(
        object = console,
        args = [(
          (function f(
            object = vars0,
            args = [],
            body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
          ) {})(),
          retval
        )],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
