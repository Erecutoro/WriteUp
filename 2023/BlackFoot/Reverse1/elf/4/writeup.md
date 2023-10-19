# Elf_04

## Solution

open Cutter and uncompile the main function.

We can see that iVar1 have to be 0x10, 16 in decimal meaning that the argument that are to given to the binaries is of length 16.

If we observe what is left of the condition to access the "Yes, .. is correct!" we can see that iVar4 have to be of value 0x680, 1664 in decimal.

This mean that we just need to give an argument of length 16 totaling to 1664 in decimal.

So we use characters to highten the value. (16 * 9 = 144) 

```
./ELF_04 cccccccccccsssss 
```
## Flag

cccccccccccsssss