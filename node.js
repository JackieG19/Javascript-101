> var things = ["thing1", "thing2", "thing3", "thing5"]
undefined
> things
[ 'thing1', 'thing2', 'thing3', 'thing5' ]
> things.push(4, "thing4")
6
> things
[ 'thing1', 'thing2', 'thing3', 'thing5', 4, 'thing4' ]
> things.splice(3, "thing4")
[]
> things
[ 'thing1', 'thing2', 'thing3', 'thing5', 4, 'thing4' ]
> things.splice(3, 1, "thing4")
[ 'thing5' ]
> things
[ 'thing1', 'thing2', 'thing3', 'thing4', 4, 'thing4' ]
> things.splice(4, 1, "thing5")
[ 4 ]
> things
[ 'thing1', 'thing2', 'thing3', 'thing4', 'thing5', 'thing4' ]
> things.splice(-5, 1)
[ 'thing2' ]
> things
[ 'thing1', 'thing3', 'thing4', 'thing5', 'thing4' ]
> things.splice(-1, 3)
[ 'thing4' ]
> things
[ 'thing1', 'thing3', 'thing4', 'thing5' ]
