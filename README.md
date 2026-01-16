# Arknights-Damage-Calculator
Website for Arknights Damage Calcualtion

This is a program that will display a website that allows you to calculate the damage done by an operator in the game Arknights.

Damage Formula:

a = [(b * (1 + x)) + y] * z

a = final attack damage
b = operator base attack
x = sum of all base atk buffs
y = inspiration buff
z = attack multiplier

Post-Defense Mitigation Formula:

f = [atk - (d-if) * (1 - is)] * (amp * red)

f = final physical damage
atk = final attack damage
d = defense post buff/debuff
if = flat defense ignore
is = scaling def ignore
amp = sum of all physical damage amp
red = sum of all physical damage reductions

d = [(def + mod1) * (1 + b) - mod2] * (1 - mod3)

def = defense after stage buffs/mults
mod1 = sum of flat defense increase
b = sum of all scaling defense buff
mod2 = sum of flat defense decrease
mod3 = product of scaling defense debuffs

Post-Arts Mitigation Formula:

f = [atk * (1 - ((r - if)*(1 - is)) / 100)] * (amp * red)

f = final arts damage
atk = final attack damage
r = resistance post buff/debuff
if = flat resistance ignore
is = scaling resistance ignore
amp = sum of all resistance damage amp
red = sum of all resistance damage reductions

r = [(res + mod1) * (1-b) - mod2] * (1 - mod3)

res = resistance after stage buffs/debuffs
mod1 = sum of flat resistance increase
b = sum of all scaling resistance buff
mod2 = sum of all flat resistance decrease
mod3 = product of all scaling resistance debuffs