(function f(
  vars0 = {
    a: undefined,
    x: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.a = [1, 2, 3]
    ),
    (function f(
      it = vars0.a[Symbol.iterator](),
      itval = it.next(),
      body = itval.done || (
        vars0.x = itval.value,
        (
          (
            (function f(
              object = console,
              args = [vars0.x],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          ),
          ctrl = 2
        ),
        ctrl < 2 ? (
          ctrl = 0,
          f(it)
        ) : ctrl != 3 && (ctrl = 0)
      )
    ) {})()
  )
) {})();
