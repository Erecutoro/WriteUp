# Queue

I just learned about stacks and queues in DSA!
```
nc challs.actf.co 31322
```
[queue](https://files.actf.co/4ce1e57e70aef28da53698fd9199c818dee3933055406a9de7d45bd6b51d5153/queue)

## Solution (unfinished)

Using gdb we can get inside the file and search for potential vulnerability

```bash
gdb queue
info functions
```

The queue bin use fgets that can be vulnerable to buffer overflow

## Flag

\-------