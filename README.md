# dours-minimalist-clock
<img width="356" height="401" alt="image" src="https://github.com/user-attachments/assets/d0b5786b-0a07-4837-9ec9-e6c7e2ba68f4" />

## First line

represents seconds

0 : 00-10s

1 : 10-20s

2 : 20-30s

3 : 30-40s

4 : 40-50s

5 : 50-60s

## Second line
represents minutes

0 : 00-10m

1 : 10-20m

2 : 20-30m

3 : 30-40m

4 : 40-50m

5 : 50-60m

## Third line
represents hours

0 : 00:00-04:00

1 : 04:00-08:00

2 : 08:00-12:00

3 : 12:00-16:00

4 : 16:00-20:00

5 : 20:00-24:00

## Forth line
represents days (dynamically scaled to the current month's length)

0 : Days 01-05

1 : Days 06-10

2 : Days 11-15

3 : Days 16-20

4 : Days 21-25

5 : Days 26-End (28-31)

## Fifth line
represents months

0 : January-February

1 : March-April

2 : May-June

3 : July-August

4 : September-October

5 : November-December

## Sixth line
represents years ( work in progress ! )

Format: [ 2 M | 2 C | 2 D ] (Pairs of modules per digit/scale)

### States per pair:

  [ - - ] : 0 / Inactive
  
  [ - X ] : < 50% of the block
  
  [ X - ] : > 50% of the block
  
  [ X X ] : Complete / Max value
  
### Example (Year 2026):
  [ - X ] [ - - ] [ - X ] : 2000s     00s     26 yrs
  
  
