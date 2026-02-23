import json

with open('/Volumes/LaCie/Apps/Buildify Website/data/gsc_data.json') as f:
    data = json.load(f)

by_page = {}
for r in data:
    page = r['keys'][1]
    if page not in by_page:
        by_page[page] = {'clicks': 0, 'impressions': 0, 'queries': 0}
    by_page[page]['clicks'] += r['clicks']
    by_page[page]['impressions'] += r['impressions']
    by_page[page]['queries'] += 1

print('=== TOP PAGES BY IMPRESSIONS ===')
for page, d in sorted(by_page.items(), key=lambda x: -x[1]['impressions'])[:15]:
    print(f"{d['impressions']} imp | {d['clicks']} clicks | {d['queries']} queries | {page}")

by_query = {}
for r in data:
    q = r['keys'][0]
    if q not in by_query:
        by_query[q] = {'clicks': 0, 'impressions': 0, 'positions': []}
    by_query[q]['clicks'] += r['clicks']
    by_query[q]['impressions'] += r['impressions']
    by_query[q]['positions'].append(r['position'])

print('\n=== TOP QUERIES BY IMPRESSIONS ===')
for q, d in sorted(by_query.items(), key=lambda x: -x[1]['impressions'])[:25]:
    avg_pos = sum(d['positions']) / len(d['positions'])
    print(f"{d['impressions']} imp | {d['clicks']} clicks | pos {avg_pos:.1f} | \"{q}\"")

print('\n=== STRIKING DISTANCE (pos 5-20, 3+ imp) ===')
striking = [r for r in data if 5 <= r['position'] <= 20 and r['impressions'] >= 3]
for r in sorted(striking, key=lambda x: -x['impressions'])[:20]:
    p = r['keys'][1].replace('https://usebuildify.com','')
    print(f"pos {r['position']:.1f} | {r['impressions']} imp | {r['clicks']} clicks | \"{r['keys'][0]}\" -> {p}")

print('\n=== QUICK WINS (pos 1-10, 0 clicks, 3+ imp) ===')
qw = [r for r in data if r['position'] <= 10 and r['clicks'] == 0 and r['impressions'] >= 3]
for r in sorted(qw, key=lambda x: -x['impressions'])[:15]:
    p = r['keys'][1].replace('https://usebuildify.com','')
    print(f"pos {r['position']:.1f} | {r['impressions']} imp | \"{r['keys'][0]}\" -> {p}")

print('\n=== PAGES WITH CLICKS ===')
for r in sorted([r for r in data if r['clicks'] > 0], key=lambda x: -x['clicks']):
    p = r['keys'][1].replace('https://usebuildify.com','')
    print(f"{r['clicks']} clicks | {r['impressions']} imp | pos {r['position']:.1f} | \"{r['keys'][0]}\" -> {p}")

tc = sum(r['clicks'] for r in data)
ti = sum(r['impressions'] for r in data)
print(f'\n=== TOTAL STATS ===')
print(f'Total clicks: {tc}')
print(f'Total impressions: {ti}')
print(f'Overall CTR: {tc/ti*100:.2f}%')
print(f'Unique queries: {len(by_query)}')
print(f'Unique pages: {len(by_page)}')
