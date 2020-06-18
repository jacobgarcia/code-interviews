import re
import requests
import time
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry
from typing import List


def parse_tracks(s: str) -> List[int]:  # SOLUTION 1
    parsed_list = re.findall(r'[^,\s]+', s)
    range_tracks = [e for e in parsed_list if not e.isnumeric()]
    tracks = [int(n) for n in list(set(parsed_list) - set(range_tracks))]
    for ranges in range_tracks:
        start, stop = [int(n) for n in ranges.split('-')]
        tracks += [n for n in range(start, stop + 1)]
    return sorted(tracks)


def do_request():
    # This solution may not work because the backoff_factor uses an exponential
    # and we need a linear increase
    s = requests.Session()
    retries = Retry(total=5, backoff_factor=1, status_forcelist=[502, 503, 504])
    s.mount('http://', HTTPAdapter(max_retries=retries))
    s.get("http://httpstat.us/503")


def request(seconds: int = 0, retries: int = 5):  # SOLUTION 2
    if seconds <= retries:
        try:
            requests.get("http://api.open-notify.rg/iss-now.jsn")
        except requests.exceptions.RequestException:
            seconds += 1
            time.sleep(seconds)
            request(seconds)


print(parse_tracks('1-3,5, 7,10 ,11-12'))
request()
