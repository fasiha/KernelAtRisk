```
$ git clone https://github.com/torvalds/linux
$ cd linux
$ git log  --format='format: "%ad"' --shortstat master > ../log.txt
$ cd ..
$ node index.js
$ python index.py
```