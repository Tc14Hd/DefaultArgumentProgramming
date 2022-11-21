(function f(
  vars0 = {
    i: undefined
  },
  body = (
    ctrl = 0,
    (
      (
        vars0.i = 1
      ),
      (function f(
        body = vars0.i <= 100 && (
          (
            vars0.i % 15 == 0 ? (
              (function f(
                object = console,
                args = ["FizzBuzz"],
                body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
              ) {})(),
              retval
            ) : vars0.i % 3 == 0 ? (
              (function f(
                object = console,
                args = ["Fizz"],
                body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
              ) {})(),
              retval
            ) : vars0.i % 5 == 0 ? (
              (function f(
                object = console,
                args = ["Bizz"],
                body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
              ) {})(),
              retval
            ) : (
              (function f(
                object = console,
                args = [vars0.i],
                body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
              ) {})(),
              retval
            )
          ),
          (
            vars0.i++,
            f()
          )
        )
      ) {})()
    )
  )
) {})();
