(function f(
  vars0 = {
    f: undefined
  },
  body = (
    ctrl = 0,
    (
      vars0.f = function f(
        args,
        vars1 = {
          x: undefined,
          g: undefined
        },
        body = (
          (
            vars1.g = function f(
              args,
              vars2 = {
                h: undefined
              },
              body = (
                (
                  vars2.h = function f(
                    args,
                    vars3 = {},
                    body = (
                      (
                        ctrl = 3,
                        retval = [vars1.x, y]
                      ),
                      ctrl != 3 && (retval = undefined),
                      ctrl = 0
                    )
                  ) {},
                  vars2.h.customfunc = true
                ),
                y = 1,
                (
                  ctrl = 3,
                  retval = vars2.h
                ),
                ctrl != 3 && (retval = undefined),
                ctrl = 0
              )
            ) {},
            vars1.g.customfunc = true
          ),
          (
            vars1.x = 0
          ),
          (
            ctrl = 3,
            retval = vars1.g
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
            callee = (
              (function f(
                callee = (
                  (function f(
                    object = vars0,
                    args = [],
                    body = object.f.customfunc ? object.f(args) : retval = object.f(...args)
                  ) {})(),
                  retval
                ),
                args = [],
                body = callee.customfunc ? callee(args) : retval = callee(...args)
              ) {})(),
              retval
            ),
            args = [],
            body = callee.customfunc ? callee(args) : retval = callee(...args)
          ) {})(),
          retval
        )],
        body = object.log.customfunc ? object.log(args) : retval = object.log(...args)
      ) {})(),
      retval
    )
  )
) {})();
