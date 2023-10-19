# Elf_fast

The ELF FAST type challenge are the same challenge as in the ELF type but the flag timeout after a few seconds after downloading the file thus forcing the use of a script.

## Solution

```python
#!/usr/bin/env python3    
from elftools.elf.elffile import ELFFile
import requests

import struct
import sys

FILE = 'ELF_02'
ADDR = 0x00002051

from elftools.elf.elffile import ELFFile

def read_string_at_address(FILE, ADDR):
    with open(FILE, 'rb') as f:
        elf_file = ELFFile(f)

        for segment in elf_file.iter_segments():
            if segment['p_type'] == 'PT_LOAD' and \
               segment['p_vaddr'] <= ADDR < (segment['p_vaddr'] + segment['p_memsz']):
                offset = ADDR - segment['p_vaddr']

                f.seek(segment['p_offset'] + 79)

                string_value = b''
                while True:
                    byte = f.read(1)
                    if byte == b'\x00':
                        break
                    string_value += byte

                return string_value.decode('utf-8')
    return None

if __name__ == "__main__":
    response = requests.get("http://reverse.blackfoot.io:8080/ELF_02")
    open(FILE, "wb").write(response.content)

    string_value = read_string_at_address(FILE, ADDR)
    if string_value is not None:
        print(f"String at address 0x{ADDR:X}: {string_value}")
        a = "http://reverse.blackfoot.io:8080/validate/ELF_02/" + string_value
        response = requests.get(a)
        print(response.content)

```

## Flag

BFS[OmgSuchF4stn3ss]