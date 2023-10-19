# QT

In the QT type challenge we are faced with bin using the QT library thus making it harder to find data due to the sheer amount of data unless you know what you are looking for.

## Given data

    Hello notepad
    You may have to install libqt5printsupport5
    sudo apt install libqt5printsupport5

nodepad (bin)

## Solution

With the ELF_FAST challenge I noticed that the flags were structured like so.

> BFS[flag]

Using this information we can go ahead and try to grep the flag out of the bin.

```
strings notepad | grep 'BFS'
```

## Flag

BFS[youpwndnotepad]