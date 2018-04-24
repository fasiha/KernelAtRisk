import pandas as pd
import json
with open('parsed.json', 'r') as fid:
    db = json.load(fid)
df = pd.DataFrame(
    list(map(lambda x: x[1], db)),
    columns=['loc'],
    index=list(map(lambda x: pd.to_datetime(x[0]), db)))

import matplotlib
matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
plt.figure()
plt.semilogy(df.index, df['loc'])
plt.grid()
plt.xlabel('Date')
plt.ylabel('Daily lines of code committed')
plt.savefig('linux.png', dpi=150)