#!/usr/bin/python3
import json
from pprint import pprint
if __name__ == '__main__':
    with open('./c1p1-En.csv', encoding='utf8') as f:
        d = {}
        next(f) # Skip the first line
        for l in f: 
            (book,
             parasha,
             torah_parasha,
             riddle_number,
             riddle,
             answer) = l.strip().split(',')
            
            if book not in d:
                d[book] = {}
            if parasha not in d[book]:
                d[book][parasha] = {}
            if 'riddles' not in d[book][parasha]:
                d[book][parasha]['riddles'] = []

            d[book][parasha]['torah_parasha'] = torah_parasha
            d[book][parasha]['riddles'].append({ riddle_number: {'riddle': riddle, 'answer': answer} })
        print(json.dumps(d, sort_keys=True, indent=2, ensure_ascii=False))
