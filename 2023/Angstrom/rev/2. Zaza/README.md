# Zaza

Bedtime!

```
nc challs.actf.co 32760
```

[zaza](https://files.actf.co/ea58fcd01cef923ea88d023f52548c7be73dcf74f7eeb9c0280a0d3ea7162213/zaza)

Author: JoshDaBosh

## Solution (Unfinished)

```bash
Strings zaza

~~~
flag.txt
Error: missing flag.txt.
anextremelycomplicatedkeythatisdefinitelyuselessss
I'm going to sleep. Count me some sheep: 
That's not enough sheep!
Nice, now reset it. Bet you can't: 
%d %d
Not good enough for me.
Okay, what's the magic word?
2& =$!-( <*+*( ?!&$$6,. )' $19 , #9=!1 <*=6 <6;66#
Nope
;*3$"

~~~
```

By using gdb we can try to get how the zaza bin function.

```
gdb zaza
layout asm
```

In here we can find 3 function
```
win
xor
main
```

And from here we need to check one by element from the bin's registry and get the correct argument to get to the flag.

## Flag

\-------