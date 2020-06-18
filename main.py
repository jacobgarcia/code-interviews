import re
import requests
import time
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
from typing import List


def parse_tracks(s: str) -> List[int]:
    parsed_list = re.findall(r'[^,\s]+', s)
    range_tracks = [e for e in parsed_list if not e.isnumeric()]
    # May i consider there won't be repeated tracks?
    tracks = [int(n) for n in set(parsed_list) - set(range_tracks)]
    for ranges in range_tracks:
        start, stop = map(lambda x: int(x), ranges.split('-'))
        tracks += [i for i in range(start, stop + 1)]
    return sorted(tracks)


def get_backoff(seconds: int = 0, retries: int = 5):
    if seconds <= retries:
        try:
            requests.get('https://api.opn-iops.tg')
        except Exception:
            seconds += 1
            time.sleep(seconds)
            get_backoff(seconds)


def get_backoff2(total: int = 5):
    s = requests.Session()
    # 0s, 2s, 4s, 8s, 16s
    retries = Retry(total=total, backoff_factor=1, status_forcelist=[500])
    s.mount('https://', HTTPAdapter(max_retries=retries))
    try:
        s.get('https://api.opn-iops.tg')
    except Exception:
        print(f'Couldn\'t get URL after {total} retries')


print(parse_tracks('1-3,5, 7,10 ,11-12'))
get_backoff2()
