(function f(
  vars0 = {},
  body = (
    ctrl = 0,
    (function f(
      disc = 1,
      fallthru = false,
      body = (
        (fallthru || disc === (
          (
            (function f(
              object = console,
              args = ["A Test"],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          ),
          0
        )) && (
          fallthru = true,
          (
            (function f(
              object = console,
              args = ["A Case"],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          )
        ),
        (fallthru || disc === (
          (
            (function f(
              object = console,
              args = ["B Test"],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          ),
          1
        )) && (
          fallthru = true,
          (
            (function f(
              object = console,
              args = ["B Case"],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          )
        ),
        (fallthru || disc === (
          (
            (function f(
              object = console,
              args = ["C Test"],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          ),
          2
        )) && (
          fallthru = true,
          (
            (function f(
              object = console,
              args = ["C Case"],
              body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
            ) {})(),
            retval
          )
        ),
        ctrl == 2 && (ctrl = 0)
      )
    ) {})()
  )
) {})();
