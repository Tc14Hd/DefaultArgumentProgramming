(function f(
  vars0 = {
    f: undefined,
    r: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.f = function f(
        args,
        vars1 = {
          x: undefined,
          g: undefined,
          h: undefined
        },
        body = (
          (
            vars1.g = function f(
              args,
              vars2 = {},
              body = (
                (
                  retval = vars1.x,
                  ctrl = 3
                ),
                ctrl != 3 && (retval = undefined),
                ctrl = 0
              )
            ) {},
            vars1.g.customfunc = true
          ),
          (
            vars1.h = function f(
              args,
              vars2 = {},
              body = (
                vars2.a = args[0],
                vars1.x = vars2.a,
                ctrl != 3 && (retval = undefined),
                ctrl = 0
              )
            ) {},
            vars1.h.customfunc = true
          ),
          (
            vars1.x = 0
          ),
          (
            retval = [vars1.g, vars1.h],
            ctrl = 3
          ),
          ctrl != 3 && (retval = undefined),
          ctrl = 0
        )
      ) {},
      vars0.f.customfunc = true
    ),
    (
      vars0.r = (
        (function f(
          object = vars0,
          args = [],
          body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
        ) {})(),
        retval
      )
    ),
    (
      (function f(
        object = console,
        args = [(
          (function f(
            object = vars0.r,
            property = 0,
            args = [],
            body = object[property].customfunc ? object[property](args) : retval = object[property](...args)
          ) {})(),
          retval
        )],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    ),
    (
      (function f(
        object = vars0.r,
        property = 1,
        args = [2],
        body = object[property].customfunc ? object[property](args) : retval = object[property](...args)
      ) {})(),
      retval
    ),
    (
      (function f(
        object = console,
        args = [(
          (function f(
            object = vars0.r,
            property = 0,
            args = [],
            body = object[property].customfunc ? object[property](args) : retval = object[property](...args)
          ) {})(),
          retval
        )],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
