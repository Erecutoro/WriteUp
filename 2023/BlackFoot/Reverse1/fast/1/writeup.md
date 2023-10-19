# Elf_fast

The ELF FAST type challenge are the same challenge as in the ELF type but the flag timeout after a few seconds after downloading the file thus forcing the use of a script.

## Solution

```python
#!/usr/bin/env python3    
from elftools.elf.elffile import ELFFile
import requests

import struct
import sys

FILE = 'ELF_01'
ADDR = 0x2022

from elftools.elf.elffile import ELFFile

def read_string_at_address(FILE, ADDR):
    with open(FILE, 'rb') as f:
        elf_file = ELFFile(f)

        # Iterate through program headers to find the relevant one
        for segment in elf_file.iter_segments():
            if segment['p_type'] == 'PT_LOAD' and \
               segment['p_vaddr'] <= ADDR < (segment['p_vaddr'] + segment['p_memsz']):
                # Calculate the offset within the segment
                offset = ADDR - segment['p_vaddr']

                # Seek to the offset within the file
                f.seek(segment['p_offset'] + offset)

                # Read a string from the target address until a null byte is encountered
                string_value = b''
                while True:
                    byte = f.read(1)
                    if byte == b'\x00':
                        break
                    string_value += byte

                return string_value.decode('utf-8')
    return None

if __name__ == "__main__":
    # Get the file
    response = requests.get("http://reverse.blackfoot.io:8080/ELF_01")
    open(FILE, "wb").write(response.content)

    string_value = read_string_at_address(FILE, ADDR)
    if string_value is not None:
        # Check if value is what we want
        print(f"String at address 0x{ADDR:X}: {string_value}")
        a = "http://reverse.blackfoot.io:8080/validate/ELF_01/" + string_value
        response = requests.get(a)
        print(response.content)

```

## Flag

BFS[OmgSuchF4stn3ss]