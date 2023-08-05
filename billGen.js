 // JavaScript code goes here

        // Sample products object
        const products = [
            { id:1 , name: '1\' Shalimar milky garden pipe', rate: 1050 },
            { id:2 , name: '1/2\' Elbow brass', rate: 160 },
            { id:3 , name: '1/2\'×1/2\' brass valve', rate: 160 },
            { id:4 , name: '1/2\'×1/4\' brass valve', rate: 160 },
            { id:5 , name: '1/2\'×3/8 trolley pipe 40\' PTR', rate: 430 },
            { id:6 , name: '1/2\'×3/8\' Brass valve', rate: 160 },
            { id:7 , name: '11\' Tan heavy', rate: 46 },
            { id:8 , name: '11x40 gear gdr', rate: 790 },
            { id:9 , name: '12 A FULL LOCK EXTRA', rate: 35 },
            { id:10 , name: '12 B FULL LOCK 3/4\, rate: 35 },
            { id:11 , name: '12 B HALF LOCK 3/4\, rate: 35 },
            { id:12 , name: '12a1 10feet chain kdv', rate: 2230 },
            { id:13 , name: '12a1 7.5feet chain kdv', rate: 1680 },
            { id:14 , name: '12b1 10feet chain kdv', rate: 1830 },
            { id:15 , name: '12b1 7.5feet chain kdv', rate: 1310 },
            { id:16 , name: '12x12 pinion sainik small', rate: 2050 },
            { id:17 , name: '12X16 BREAK AXLE 11.5\, rate: 1050 },
            { id:18 , name: '13\' filter PTR', rate: 480 },
            { id:19 , name: '14x35 garari tempererate, rate: 280 },
            { id:20 , name: '16x12 pinion kartar sainik', rate: 2850 },
            { id:21 , name: '16X16 AXLE SUPER 14\, rate: 980 },
            { id:22 , name: '16X16 AXLE SUPER 15\, rate: 1050 },
            { id:23 , name: '16X16 AXLE SUPER 18'', rate: 1260 },
            { id:24 , name: '16X16 AXLE SUPER 18.5'', rate: 1295 },
            { id:25 , name: '16X16 AXLE SUPER 19\, rate: 1330 },
            { id:26 , name: '16X16 AXLE SUPER 19.5\, rate: 1370 },
            { id:27 , name: '16X16 AXLE SUPER 20.5\, rate: 1440 },
            { id:28 , name: '16X16 AXLE SUPER 29.5\, rate: 2065 },
            { id:29 , name: '16X16 AXLE SUPER 32\, rate: 2240 },
            { id:30 , name: '16X16 AXLE SUPER 34\, rate: 2380 },
            { id:31 , name: '16X16 AXLE SUPER 34.5\, rate: 2415 },
            { id:32 , name: '16X16 AXLE SUPER 36\, rate: 2520 },
            { id:33 , name: '16X16 AXLE SUPER 37\, rate: 2590 },
            { id:34 , name: '16X17 BREAK AXLE LONG', rate: 2480 },
            { id:35 , name: '16X17 BREAK AXLE SMALL PTL', rate: 2090 },
            { id:36 , name: '16X20 BREAK AXLE 11.5\, rate: 1050 },
            { id:37 , name: '16X20 BREAK AXLE 8.5\, rate: 1050 },
            { id:38 , name: '16X20 BREAK AXLE 9.5\, rate: 1090 },
            { id:39 , name: '17\' double filter Leylanrate, rate: 2250 },
            { id:40 , name: '17T m.d shaft sainik', rate: 0 },
            { id:41, name: '17X22 BREAK AXLE LONG', rate: 2580 },
            { id:42 , name: '1kg Red gel Radiant grease', rate: 260 },
            { id:43 , name: '1st gear dashmesh sainik', rate: 1100 },
            { id:44 , name: '1ST GEAR GDR', rate: 850 },
            { id:45 , name: '1ST GEAR PREET 5TH', rate: 2450 },
            { id:46 , name: '2 hole patti big', rate: 220 },
            { id:47 , name: '2.5 sut katar', rate: 20 },
            { id:48 , name: '20X20 BREAK AXLE 8.5\, rate: 1090 },
            { id:49 , name: '21\' filter balti type', rate: 3850 },
            { id:50 , name: '2311k fld bearing', rate: 1150 },
            { id:51 , name: '24no. 18\' hydraulic pipe 18mm PTR', rate: 230 },
            { id:52 , name: '24no. 24\' hydraulic pipe 18mm PTR', rate: 280 },
            { id:53 , name: '24no. 30\' hydraulic pipe 18mm PTR', rate: 320 },
            { id:54 , name: '24no. 36\' hydraulic pipe 18mm PTR', rate: 370 },
            { id:55 , name: '28t came 5x6+6×6+6×7', rate: 950 },
            { id:56 , name: '2kg Red gel Radiant grease', rate: 520 },
            { id:57 , name: '2nd & 3rd gear GDR sainik', rate: 5600 },
            { id:58 , name: '2ND GEAR 35/31/14 DASHMESH', rate: 3130 },
            { id:59 , name: '2nd+3rd gear PTL sainik', rate: 5890 },
            { id:60 , name: '3175 housing N/T 10\, rate: 2250 },
            { id:61 , name: '3175 housing N/T 7\, rate: 2250 },
            { id:62 , name: '3175 pully all size price in inch', rate: 130 },
            { id:63 , name: '32208 cup degi', rate: 190 },
            { id:64 , name: '32x35 garari', rate: 890 },
            { id:65 , name: '34x30 garari', rate: 930 },
            { id:66 , name: '34x35 garari', rate: 930 },
            { id:67 , name: '36x35 garari', rate: 990 },
            { id:68 , name: '38 pad daimond chain', rate: 5450 },
            { id:69 , name: '38x35 garari tempererate, rate: 1220 },
            { id:70 , name: '39T hub sainik', rate: 6200 },
            { id:71 , name: '39x59 sainik', rate: 9100 },
            { id:72 , name: '3feet gun 708 pump', rate: 280 },
            { id:73 , name: '3kg Red gel Radiant grease', rate: 780 },
            { id:74 , name: '40 pad daimond chain', rate: 5650 },
            { id:75 , name: '43x30 garari tempererate, rate: 1350 },
            { id:76 , name: '43x35 garari', rate: 1150 },
            { id:77 , name: '5\' thippa pully 35mm', rate: 750 },
            { id:78 , name: '5\' thippa pully k.s', rate: 750 },
            { id:79 , name: '500gm pensol grease', rate: 240 },
            { id:80 , name: '500gm Red gel Radiant grease', rate: 140 },
            { id:81 , name: '50x30 garari Tempererate, rate: 1650 },
            { id:82 , name: '52x30 garari', rate: 1650 },
            { id:83 , name: '5kg Red gel Radiant grease', rate: 1300 },
            { id:84 , name: '5x1c adel 6205 aluminum', rate: 320 },
            { id:85 , name: '6 feet gun connector pipe HTP', rate: 330 },
            { id:86 , name: '6\' changer bush degi', rate: 980 },
            { id:87 , name: '6\' guidrum bush degi', rate: 690 },
            { id:88 , name: '6205 housing', rate: 990 },
            { id:89 , name: '6205 Rollon bearing', rate: 140 },
            { id:90 , name: '6308 housing', rate: 990 },
            { id:91 , name: '6309 housing D/name, rate: 690 },
            { id:92 , name: '6311 Gear drum housing', rate: 2580 },
            { id:93 , name: '6311 Gear drum housing PTL', rate: 2850 },
            { id:94 , name: '6mm+8mm grease housing pipe 9\'+12\'+15\, rate: 607080 },
            { id:95 , name: '7\' reel pully 6205', rate: 1050 },
            { id:96 , name: '7x35 suprod gear', rate: 280 },
            { id:97 , name: '8pk 1250 fenner', rate: 650 },
            { id:98 , name: '8x30 suprod gear tempererate, rate: 350 },
            { id:99 , name: '8x35 suprod gear', rate: 280 },
            { id:100 , name: '9\' Tan heavy', rate: 43 },
            { id:101 , name: '9x45 gear', rate: 560 },
            { id:102 , name: 'Aara big', rate: 140 },
            { id:103 , name: 'Air cleaner galss soft all tractor', rate: 100 },
            { id:104 , name: 'Alkey bolt mix', rate: 450 },
            { id:105 , name: 'Altinator hinno R879', rate: 4600 },
            { id:106 , name: 'Altinator Leyland R804', rate: 3800 },
            { id:107 , name: 'Altinator maruti', rate: 2580 },
            { id:108 , name: 'ARAM BOLT 16X139', rate: 90 },
            { id:109 , name: 'ARAM KARTAR PIN SIDE', rate: 1800 },
            { id:110 , name: 'ARAM N/T WITHOUT PIN', rate: 1800 },
            { id:111 , name: 'Arbidol', rate: 11400 },
            { id:112 , name: 'Arm hira', rate: 1750 },
            { id:113 , name: 'Arm kartar N/M pinwali', rate: 1750 },
            { id:114 , name: 'Arm kartar N/M plate', rate: 1750 },
            { id:115 , name: 'Arm kartar O/M pinwali', rate: 1850 },
            { id:116 , name: 'Arm malkit', rate: 1750 },
            { id:117 , name: 'Arm N/T N/M kartar', rate: 1750 },
            { id:118 , name: 'Arm N/T pinwali', rate: 1750 },
            { id:119 , name: 'Arm preet pinwali', rate: 1750 },
            { id:120 , name: 'Auger bush preet', rate: 290 },
            { id:121 , name: 'Auger bush vishal', rate: 290 },
            { id:122 , name: 'Auto filter set HTP pump', rate: 1500 },
            { id:123 , name: 'BASKET 51\' N/T', rate: 7600 },
            { id:124 , name: 'Basket blade Panther', rate: 550 },
            { id:125 , name: 'Basket saria 52\, rate: 0 },
            { id:126 , name: 'BCN nozzel', rate: 60 },
            { id:127 , name: 'BED SHAFT ROUND 30 MM', rate: 1450 },
            { id:128 , name: 'BED SHAFT ROUND 30 MM 63\, rate: 1450 },
            { id:129 , name: 'BED SHAFT ROUND 35 MM', rate: 2090 },
            { id:130 , name: 'BED SHAFT SQUARE', rate: 1850 },
            { id:131 , name: 'BED SHEET 48X84', rate: 3400 },
            { id:132 , name: 'BELL CRANK REAPER', rate: 1250 },
            { id:133 , name: 'BELL CRANK SHAFT 4 NO.', rate: 400 },
            { id:134 , name: 'BELL CRANK SHAFT 5 NO.', rate: 400 },
            { id:135 , name: 'Belt 1450', rate: 290 },
            { id:136 , name: 'Belt 1470 fenner', rate: 350 },
            { id:137 , name: 'Betterfly Nipple 8.5mm MS', rate: 120 },
            { id:138 , name: 'Big braketi', rate: 90 },
            { id:139 , name: 'Big cut rubber', rate: 95 },
            { id:140 , name: 'BIG RING 8T', rate: 2450 },
            { id:141 , name: 'Blower nabh 35mm+30mm', rate: 630 },
            { id:142 , name: 'Blower nabh kartar', rate: 850 },
            { id:143 , name: 'BLOWER SHAFT 35 MM', rate: 2090 },
            { id:144 , name: 'Blue pipe th. 8mm', rate: 14 },
            { id:145 , name: 'BREAK DRUM 2511', rate: 1800 },
            { id:146 , name: 'Break Kaliper assembly sumo TVS rate, rate: 1950 },
            { id:147 , name: 'Break Kaliper pin sumo', rate: 90 },
            { id:148 , name: 'Break pad red PTR', rate: 650 },
            { id:149 , name: 'Break pad tvs rate, rate: 700 },
            { id:150 , name: 'Break shoe 2011 small complete', rate: 390 },
            { id:151 , name: 'Break shoe 5911 big complete', rate: 450 },
            { id:152 , name: 'Breather cap', rate: 550 },
            { id:153 , name: 'Butterfly Nipple 10mm MS', rate: 150 },
            { id:154 , name: 'Butterfly Nipple 8.5mm brass', rate: 150 },
            { id:155 , name: 'CAME SHAFT 35 MM', rate: 0 },
            { id:156 , name: 'Came shaft 6no. 30mm', rate: 1550 },
            { id:157 , name: 'Castrol oil 900ml', rate: 280 },
            { id:158 , name: 'CATTER 2.5 SOOT', rate: 20 },
            { id:159 , name: 'Center pin bush dashmesh', rate: 510 },
            { id:160 , name: 'Center pin bush GDR', rate: 770 },
            { id:161 , name: 'Center pin bush kartar N/M', rate: 950 },
            { id:162 , name: 'Center pin bush PTL', rate: 590 },
            { id:163 , name: 'Center pin bush vishal', rate: 610 },
            { id:164 , name: 'CHAIN SPROCKET 14/35 HC', rate: 0 },
            { id:165 , name: 'CHAIN SPROCKET 15/30 HC', rate: 0 },
            { id:166 , name: 'CHAIN SPROCKET 15/35 HC', rate: 0 },
            { id:167 , name: 'CHAIN SPROCKET 18/35', rate: 270 },
            { id:168 , name: 'CHAIN SPROCKET 20/30 HC', rate: 0 },
            { id:169 , name: 'CHAIN SPROCKET 22/30 HC', rate: 0 },
            { id:170 , name: 'CHAIN SPROCKET 24/30 HC', rate: 0 },
            { id:171 , name: 'CHAIN SPROCKET 24/35', rate: 0 },
            { id:172 , name: 'CHANGER COMPLETE', rate: 12800 },
            { id:173 , name: 'Check valve 50c HTP', rate: 45 },
            { id:174 , name: 'Check valve 80c HTP', rate: 100 },
            { id:175 , name: 'Chidi 10mm+12mm', rate: 50 },
            { id:176 , name: 'CHISEL 10\, rate: 210 },
            { id:177 , name: 'CHISEL 6\, rate: 130 },
            { id:178 , name: 'Class blade shinetec', rate: 750 },
            { id:179 , name: 'Clutch bush 110mm  PTL', rate: 850 },
            { id:180 , name: 'Clutch chilam 1312', rate: 850 },
            { id:181 , name: 'Clutch fork GDR', rate: 650 },
            { id:182 , name: 'CLUTCH SHAFT PREET 5TH', rate: 6200 },
            { id:183 , name: 'Coolent bottle', rate: 650 },
            { id:184 , name: 'COUNTER SHAFT 4X4 PREET', rate: 6950 },
            { id:185 , name: 'COUNTER SHAFT 5TH KARTAR', rate: 6200 },
            { id:186 , name: 'COUNTER SHAFT 5TH PREET', rate: 6200 },
            { id:187 , name: 'COUNTER SHAFT PTL (K)', rate: 4100 },
            { id:188 , name: 'COUNTER SHAFT PTL (P)', rate: 4100 },
            { id:189 , name: 'Crank 5x6x51\, rate: 6200 },
            { id:190 , name: 'CRANK 5X7X51\, rate: 6800 },
            { id:191 , name: 'CRANK 6X6X51\, rate: 6800 },
            { id:192 , name: 'CRANK 6X7X51\, rate: 7000 },
            { id:193 , name: 'DAname, rate: 30 },
            { id:194 , name: 'DAB PATTI heavy', rate: 16 },
            { id:195 , name: 'Diesel filter 1 Liter', rate: 220 },
            { id:196 , name: 'DISK TAWA 12 T', rate: 1750 },
            { id:197 , name: 'DISK TAWA 14 T', rate: 1750 },
            { id:198 , name: 'DISK TAWA 16 T', rate: 1650 },
            { id:199 , name: 'DISK TAWA 20 T', rate: 1650 },
            { id:200 , name: 'DISK TAWA KARTAR', rate: 3050 },
            { id:201 , name: 'Distributer dowty', rate: 16900 },
            { id:202 , name: 'Drain pipe 42\' benrate, rate: 650 },
            { id:203 , name: 'Drain pipe 55\' benrate, rate: 670 },
            { id:204 , name: 'Drain pipe kartar', rate: 950 },
            { id:205 , name: 'Drain pipe turbo', rate: 850 },
            { id:206 , name: 'EDEL 6205 3/4\, rate: 230 },
            { id:207 , name: 'EDEL 6205 5/8\, rate: 190 },
            { id:208 , name: 'Electric lans adjustable yellow', rate: 50 },
            { id:209 , name: 'Electric pump delivery pipe', rate: 60 },
            { id:210 , name: 'Electric pump gun', rate: 260 },
            { id:211 , name: 'Elevator chain 40 pad class', rate: 4900 },
            { id:212 , name: 'Elevator chain 40 pad kdv', rate: 4880 },
            { id:213 , name: 'Elevator kundi nm', rate: 170 },
            { id:214 , name: 'F 206', rate: 350 },
            { id:215 , name: 'F 207', rate: 460 },
            { id:216 , name: 'F 209', rate: 520 },
            { id:217 , name: 'F 211', rate: 0 },
            { id:218 , name: 'F211', rate: 750 },
            { id:219 , name: 'Feeder chain 21x42 daimonrate, rate: 8800 },
            { id:220 , name: 'Feeder chain 21x42 kartar delux', rate: 10200 },
            { id:221 , name: 'Feeder chain 21x42 kdv', rate: 7500 },
            { id:222 , name: 'FEEDER FATTI 27\' LIGHT', rate: 150 },
            { id:223 , name: 'FEEDER FULL LOCK', rate: 60 },
            { id:224 , name: 'FEEDER FULL LOCK CLASS', rate: 60 },
            { id:225 , name: 'Feeder gear 10x35', rate: 680 },
            { id:226 , name: 'Feeder gear 20x35', rate: 1040 },
            { id:227 , name: 'Feeder gear 24x35', rate: 1350 },
            { id:228 , name: 'FEEDER HALF LOCK', rate: 60 },
            { id:229 , name: 'FEEDER JACK 31/40', rate: 3650 },
            { id:230 , name: 'FEEDER JACK 31/45', rate: 3750 },
            { id:231 , name: 'FEEDER JACK 34/40', rate: 3650 },
            { id:232 , name: 'FEEDER JACK 34/45', rate: 3750 },
            { id:233 , name: 'FEEDER KAN LOCK', rate: 80 },
            { id:234 , name: 'FINGER HALF CLASS GAGAN', rate: 180 },
            { id:235 , name: 'FINGER HALF CLASS SPOT', rate: 190 },
            { id:236 , name: 'FINGER HALF CLASS STrate, rate: 170 },
            { id:237 , name: 'Finger half class tempered gagan', rate: 230 },
            { id:238 , name: 'Finger half class vishal strate, rate: 170 },
            { id:239 , name: 'Finger red gagan', rate: 240 },
            { id:240 , name: 'Flat adel 6207', rate: 1680 },
            { id:241 , name: 'Flat adel 6207 (H) preet', rate: 2290 },
            { id:242 , name: 'Flat adel shaft n/m', rate: 690 },
            { id:243 , name: 'Flat edel 6207 steel', rate: 2050 },
            { id:244 , name: 'Flate adel shaft o/m', rate: 690 },
            { id:245 , name: 'FULL LOCK 5/8\, rate: 30 },
            { id:246 , name: 'GEAR 2ND & 3RD PTL Gname, rate: 5800 },
            { id:247 , name: 'Gear fork nut', rate: 25 },
            { id:248 , name: 'Gear goli kit', rate: 50 },
            { id:249 , name: 'Gear handi Preet Rocky', rate: 15500 },
            { id:250 , name: 'Gear knob all', rate: 80 },
            { id:251 , name: 'GEAR ROD GDR', rate: 390 },
            { id:252 , name: 'Grease gun pipe 12\, rate: 80 },
            { id:253 , name: 'Grease gun pipe 15\, rate: 90 },
            { id:254 , name: 'Grease gun pipe 18\, rate: 100 },
            { id:255 , name: 'Grease gun pipe 24\, rate: 120 },
            { id:256 , name: 'GUCCHA SHAFT 30 MM 68\, rate: 0 },
            { id:257 , name: 'GUCCHA SHAFT 35 MM 68\, rate: 0 },
            { id:258 , name: 'GUCHHA SHAFT 30 MM 46\, rate: 1690 },
            { id:259 , name: 'GUCHHA SHAFT 30 MM 72\, rate: 1800 },
            { id:260 , name: 'GUCHHA SHAFT 35 MM 46\, rate: 2050 },
            { id:261 , name: 'GUCHHA SHAFT 35 MM 72\, rate: 2100 },
            { id:262 , name: 'Guidrum pin', rate: 150 },
            { id:263 , name: 'Guidrum shaft 11no.', rate: 5700 },
            { id:264 , name: 'Gutka 5 wala T2', rate: 130 },
            { id:265 , name: 'HALF LOCK 5/8\, rate: 30 },
            { id:266 , name: 'Haval 6205 Double bearing N/M', rate: 820 },
            { id:267 , name: 'Haval 6205 singel bearing N/M', rate: 780 },
            { id:268 , name: 'Head 22\' N/M', rate: 190 },
            { id:269 , name: 'HEAD BUSH 6205 D/name, rate: 80 },
            { id:270 , name: 'Head dashmesh', rate: 480 },
            { id:271 , name: 'Head k.s', rate: 480 },
            { id:272 , name: 'HEAD PILLOW 6205 S/B DEGI', rate: 580 },
            { id:273 , name: 'Head pillow 6205 steel d/name, rate: 600 },
            { id:274 , name: 'Head pillow 6205 steel s/name, rate: 450 },
            { id:275 , name: 'Head preet', rate: 690 },
            { id:276 , name: 'HIGHLOW JACK 22 MM', rate: 2150 },
            { id:277 , name: 'HIGHLOW JACK 28 MM', rate: 2550 },
            { id:278 , name: 'Hose Nipple 10mm', rate: 60 },
            { id:279 , name: 'Hose pipe 1\, rate: 257 },
            { id:280 , name: 'HOUSE PIPE Z LONG', rate: 260 },
            { id:281 , name: 'HTP control valve 50c', rate: 260 },
            { id:282 , name: 'HTP control valve 80c', rate: 480 },
            { id:283 , name: 'HTP Roller Light', rate: 350 },
            { id:284 , name: 'HTP suction pipe', rate: 650 },
            { id:285 , name: 'Hub 39T rvs', rate: 4450 },
            { id:286 , name: 'HUB BOLT KARTAR SMALL', rate: 90 },
            { id:287 , name: 'HUB BOLT SMALL', rate: 60 },
            { id:288 , name: 'Hub R/W GDR', rate: 2050 },
            { id:289 , name: 'Hydraulic filter nut big', rate: 150 },
            { id:290 , name: 'Hydraulic pump adopter', rate: 3250 },
            { id:291 , name: 'Hydrolic filter O/T', rate: 650 },
            { id:292 , name: 'JACK ROD 3 FEET', rate: 650 },
            { id:293 , name: 'JACK ROD 5 FEET', rate: 890 },
            { id:294 , name: 'JAIN PAPER', rate: 170 },
            { id:295 , name: 'Jvk 32208 bearing', rate: 360 },
            { id:296 , name: 'KAPDA BLACK', rate: 500 },
            { id:297 , name: 'KAPDA FOJI', rate: 600 },
            { id:298 , name: 'KAPDA GREEN', rate: 550 },
            { id:299 , name: 'KARCHHI BHARAT 205 NO.', rate: 620 },
            { id:300 , name: 'KING PIN 1210 STrate, rate: 450 },
            { id:301 , name: 'KING PIN BUSH', rate: 180 },
            { id:302 , name: 'King pin kit gdr', rate: 130 },
            { id:303 , name: 'King pin kit kartar N/M', rate: 170 },
            { id:304 , name: 'L HOUSE PIPE', rate: 190 },
            { id:305 , name: 'L ROD 18\, rate: 450 },
            { id:306 , name: 'L rod 18\' heavy', rate: 450 },
            { id:307 , name: 'L/R socket 10mm brass', rate: 120 },
            { id:308 , name: 'L/R socket 8.5mm brass', rate: 90 },
            { id:309 , name: 'Level pipe 24\, rate: 85 },
            { id:310 , name: 'Level pipe 27\, rate: 90 },
            { id:311 , name: 'Level pipe 30\, rate: 100 },
            { id:312 , name: 'LOCK 160 MM', rate: 90 },
            { id:313 , name: 'LOCK 6207', rate: 20 },
            { id:314 , name: 'LOCK PLASS 10\' INNER', rate: 300 },
            { id:315 , name: 'LOCK PLASS 7\' INNER', rate: 170 },
            { id:316 , name: 'Lota 100no.', rate: 850 },
            { id:317 , name: 'Lota 50no.', rate: 500 },
            { id:318 , name: 'Low rate 6205 bearing', rate: 80 },
            { id:319 , name: 'M D PLATE 14\, rate: 2650 },
            { id:320 , name: 'M D PLATE 16\, rate: 2950 },
            { id:321 , name: 'M-type blade shinetec', rate: 750 },
            { id:322 , name: 'Macchi bush tyer', rate: 14 },
            { id:323 , name: 'MOTOR CAP KARTAR 5TH', rate: 190 },
            { id:324 , name: 'MOTOR PINION 17T', rate: 790 },
            { id:325 , name: 'MOTOR T KARTAR', rate: 750 },
            { id:326 , name: 'Nutnipple 10mm', rate: 80 },
            { id:327 , name: 'Oil filter bb382 bnname, rate: 260 },
            { id:328 , name: 'Oil pipe 14feet', rate: 460 },
            { id:329 , name: 'Oil pipe 21 feet', rate: 690 },
            { id:330 , name: 'Over flow pipe 96\, rate: 260 },
            { id:331 , name: 'PAD CLASS', rate: 15 },
            { id:332 , name: 'PAD GDR', rate: 15 },
            { id:333 , name: 'PAD PREET', rate: 15 },
            { id:334 , name: 'PAD PTL', rate: 20 },
            { id:335 , name: 'PAD SOYABIN', rate: 50 },
            { id:336 , name: 'Pinion kartar double seal rvs', rate: 2550 },
            { id:337 , name: 'Pinion kartar single seal rvs', rate: 2390 },
            { id:338 , name: 'PLAIN BUSH PREET', rate: 180 },
            { id:339 , name: 'Poiner finger half class', rate: 280 },
            { id:340 , name: 'Preet oil break pad 17T', rate: 590 },
            { id:341 , name: 'Pressure horn pipe 240\, rate: 240 },
            { id:342 , name: 'Pressure jack big', rate: 3550 },
            { id:343 , name: 'PULLER ROD 17\, rate: 120 },
            { id:344 , name: 'PULLER ROD PTL', rate: 120 },
            { id:345 , name: 'PULLY PIN BUSH', rate: 140 },
            { id:346 , name: 'Pump makhi', rate: 100 },
            { id:347 , name: 'PUMP PULLY 10\' A', rate: 720 },
            { id:348 , name: 'PUMP PULLY 10\' name, rate: 720 },
            { id:349 , name: 'PUMP PULLY 10.5\' name, rate: 760 },
            { id:350 , name: 'PUMP PULLY 8\' A', rate: 580 },
            { id:351 , name: 'PUMP PULLY 8\' name, rate: 580 },
            { id:352 , name: 'PUMP PULLY 9\' A', rate: 650 },
            { id:353 , name: 'PUMP PULLY 9.5\' name, rate: 690 },
            { id:354 , name: 'Push pull switch small', rate: 40 },
            { id:355 , name: 'Reaper blade Panther', rate: 550 },
            { id:356 , name: 'Reaper huname, rate: 1760 },
            { id:357 , name: 'REEL FIRKI 6205 N/T GDR', rate: 220 },
            { id:358 , name: 'REEL JACK', rate: 1980 },
            { id:359 , name: 'REEM BIG', rate: 9200 },
            { id:360 , name: 'Rim plate big', rate: 1150 },
            { id:361 , name: 'Rim plate small', rate: 850 },
            { id:362 , name: 'Rivet kg rate', rate: 200 },
            { id:363 , name: 'RIVET MIX GAGAN', rate: 200 },
            { id:364 , name: 'Rollon blade class 2mm', rate: 480 },
            { id:365 , name: 'Sa 205', rate: 360 },
            { id:366 , name: 'Sa 206', rate: 490 },
            { id:367 , name: 'Sa 207', rate: 615 },
            { id:368 , name: 'SEEP 47X49', rate: 4490 },
            { id:369 , name: 'SEEP 48X25', rate: 2540 },
            { id:370 , name: 'SEEP 48X26', rate: 2635 },
            { id:371 , name: 'SEEP 48X30', rate: 3010 },
            { id:372 , name: 'SEEP 48X55', rate: 5150 },
            { id:373 , name: 'SEEP 48X56', rate: 5245 },
            { id:374 , name: 'SEEP 48X57', rate: 5335 },
            { id:375 , name: 'SEEP 48X58', rate: 5430 },
            { id:376 , name: 'SEEP 48X60', rate: 5620 },
            { id:377 , name: 'SEEP 48X62', rate: 5810 },
            { id:378 , name: 'Seep tar', rate: 50 },
            { id:379 , name: 'Self kada', rate: 2200 },
            { id:380 , name: 'Servo 1 Liter', rate: 250 },
            { id:381 , name: 'Shell clamp goli gdr', rate: 120 },
            { id:382 , name: 'Shell goli gdr', rate: 120 },
            { id:383 , name: 'Shell goli ptl', rate: 120 },
            { id:384 , name: 'SILENCER JAIN', rate: 50 },
            { id:385 , name: 'Sleeve 16T coupling rvs', rate: 390 },
            { id:386 , name: 'Sleeve 20T coupling rvs', rate: 390 },
            { id:387 , name: 'SMALL COUPLER 25T', rate: 1490 },
            { id:388 , name: 'Sonalika aircleaner assm. Steel cap', rate: 380 },
            { id:389 , name: 'Speedometer cable 156\' 13feet', rate: 430 },
            { id:390 , name: 'Speedometer cable 180\' 15feet', rate: 490 },
            { id:391 , name: 'Speedometer cable 42\'3.5feet', rate: 210 },
            { id:392 , name: 'Spendel bush PTL', rate: 490 },
            { id:393 , name: 'SPIKE MALKIT', rate: 0 },
            { id:394 , name: 'SPIKE N/M', rate: 0 },
            { id:395 , name: 'SPIKE VISHAL', rate: 0 },
            { id:396 , name: 'Spring kit gb50', rate: 490 },
            { id:397 , name: 'Star 18x18 supros', rate: 1480 },
            { id:398 , name: 'Star 21x21 supros', rate: 1590 },
            { id:399 , name: 'Starforce blade class 2mm', rate: 750 },
            { id:400 , name: 'Std blade class 2mm', rate: 450 },
            { id:401 , name: 'STEARING JACK 22 MM', rate: 2650 },
            { id:402 , name: 'STEARING JACK 28 MM', rate: 2850 },
            { id:403 , name: 'Stearing pipe 14mm 22\, rate: 330 },
            { id:404 , name: 'Stearing pipe arjun', rate: 490 },
            { id:405 , name: 'Stearing pipe farmtrac', rate: 410 },
            { id:406 , name: 'Stearing pipe Jhondheer', rate: 590 },
            { id:407 , name: 'Stearing pipe sonalika', rate: 410 },
            { id:408 , name: 'Steering jack 22mm', rate: 2450 },
            { id:409 , name: 'Steering pipe 14mm 30\, rate: 450 },
            { id:410 , name: 'Strip 15feet 3/4\, rate: 900 },
            { id:411 , name: 'Strip 15feet 6mm', rate: 900 },
            { id:412 , name: 'Strip 8.5feet force', rate: 600 },
            { id:413 , name: 'Tata cross panther', rate: 550 },
            { id:414 , name: 'TEMP METER 21 FEET', rate: 890 },
            { id:415 , name: 'TEMP METER ELECTRONIC', rate: 0 },
            { id:416 , name: 'Temperature meter 5feet wire kkk', rate: 510 },
            { id:417 , name: 'Temperature meter swaraj electric', rate: 850 },
            { id:418 , name: 'Thresher shaft 11no.', rate: 5600 },
            { id:419 , name: 'TINE 11\' HEAVY', rate: 45 },
            { id:420 , name: 'TINE 11\' LIGHT', rate: 38 },
            { id:421 , name: 'TINE 9\' HEAVY', rate: 42 },
            { id:422 , name: 'TINE 9\' LIGHT', rate: 35 },
            { id:423 , name: 'TRALLA HUK BOLT 16 MM', rate: 140 },
            { id:424 , name: 'TRALLA HUK BOLT 18 MM', rate: 160 },
            { id:425 , name: 'UC 205 MHR', rate: 250 },
            { id:426 , name: 'Uc 206', rate: 330 },
            { id:427 , name: 'Uc 207', rate: 420 },
            { id:428 , name: 'Uc 209', rate: 620 },
            { id:429 , name: 'Uc 210', rate: 740 },
            { id:430 , name: 'Uc 211', rate: 910 },
            { id:431 , name: 'Uc 212', rate: 1240 },
            { id:432 , name: 'Uc204 Light', rate: 170 },
            { id:433 , name: 'Uc208', rate: 530 },
            { id:434 , name: 'Ucf 205', rate: 420 },
            { id:435 , name: 'Ucf 206', rate: 570 },
            { id:436 , name: 'Ucf 208', rate: 885 },
            { id:437 , name: 'Ucf 209', rate: 980 },
            { id:438 , name: 'Ucf 210', rate: 1140 },
            { id:439 , name: 'Ucf 212', rate: 2120 },
            { id:440 , name: 'VARM 3 NO.', rate: 140 },
            { id:441 , name: 'VARM 4 NO.', rate: 140 },
            { id:442 , name: 'Viswkarma blade M-Type 2mm', rate: 450 },
            { id:443 , name: 'Water body combine 3416', rate: 2750 },
            { id:444 , name: 'Water body hino special', rate: 2690 },
            { id:445 , name: 'Water pump fan 20\' 8hole', rate: 1250 },
            { id:446 , name: 'White pipe th. 8mm', rate: 14 },
            { id:447 , name: 'WOODEN GUTKA 5', rate: 120 },
            { id:448 , name: 'WOODEN GUTKA 6', rate: 120 },
            { id:449 , name: 'Yellow pipe 10mm', rate: 20 },
            { id:450 , name: 'Yellow pipe 8mm', rate: 16 },
            { id:451 , name: 'Z 22/23 T PREET', rate: 1950 },
            { id:452 , name: 'Z 23 5TH KARTAR', rate: 2400 },
            { id:453 , name: 'Z 27/17 5TH KARTAR', rate: 3210 },
            { id:454 , name: 'Z 31/41 3RD GEAR DASHMESH', rate: 4410 },
            { id:455 , name: 'Z 32 DASHMESH SPL', rate: 1730 },
            { id:456 , name: 'Z 32 PTL', rate: 1550 },
            { id:457 , name: 'Z 47 8T COUNTER GEAR PREET', rate: 5490 },
            { id:458 , name: 'Z HOUSE PIPE', rate: 190 },
            { id:459 , name: 'Z-79 sainik bullgear', rate: 10300 },
            { id:460 , name: 'Z73 crown 18hole sainik', rate: 6380 },
            { id:461 , name: 'Z73 crown kartar 13\' 19no. Rvs', rate: 4980 }
          // Add more products as needed
        ];

        let bill;

        function getRandomQuantity(temp) {          if(temp>1000)
            {            const randomNumber = Math.random();
             return randomNumber >= 0.5 ? 2 : 1;
            }
            else if(temp<=1000 && temp>=500)
            {               // Generate a random quantity between 1 and 10
            return Math.floor(Math.random() * 10) + 1;
            }
            else
            {               // Generate a random quantity between 1 and 10
            return Math.floor(Math.random() * 20) + 1;
            }
           
        }

        function getRandomProduct() 
        { 
            const productSize = 461;
            return Math.floor(Math.random() * productSize) + 1;
        }

        function getProductById(id) 
        {          return products.find(product => product.id === id);
        }

        function generateBill() {          const amount = parseFloat(document.getElementById('amount').value);
            if (isNaN(amount)) {              alert('Please enter a valid amount.');
                return;
            }

            const table = document.getElementById('bill-table');
            table.innerHTML = '<tr><th>#</th><th>Product Name</th><th>Rate</th><th>Quantity</th><th>Total</th></tr>';
            let amountLeft = amount;
            let total = 0;
            let i=1;
           while(amountLeft>0) {              if(amountLeft<50)
                {                  const row = table.insertRow(-1);
                    row.innerHTML = `
                    <td>${i}</td>
                    <td>${'Packaging'}</td>
                    <td>${amountLeft}</td>
                    <td>${1}</td>
                    <td>${amountLeft}</td>
                `;
                    break;
                }
                let product = getProductById(getRandomProduct());
                const quantity = getRandomQuantity(product.rate);
                const productTotal = quantity * product.rate;
                
                if(productTotal<amountLeft)
                {                  amountLeft -= productTotal;
                    const row = table.insertRow(-1);
                    row.innerHTML = `
                    <td>${i}</td>
                    <td>${product.name}</td>
                    <td>${product.rate}</td>
                    <td>${quantity}</td>
                    <td>${productTotal}</td>
                `;
                i++;
                }
                

            }
            
            

            const totalRow = table.insertRow(-1);
            totalRow.innerHTML = `<td colspan='4'><em><strong>Total</strong></em></td><td>${amount}</td>`;

        }

        function deleteProduct(button) {          const row = button.parentNode.parentNode;
            const productTotal = parseFloat(row.cells[3].innerText);
            const totalElement = document.getElementById('total');
            const total = parseFloat(totalElement.innerText.replace('Total: ', ''));
            totalElement.innerText = `Total: ${(total - productTotal).toFixed(2)}`;
            row.remove();
        }

        function showProducts() {          const table = document.getElementById('product-table');
            table.innerHTML = '<tr><th>#</th><th>Product Name</th><th>Rate</th></tr>';
            let i=1;
            for (const product of products) {              const row = table.insertRow(-1);
                row.innerHTML = `
                    <td>${i}</td>
                    <td>${product.name}</td>
                    <td>${product.rate}</td>
                `;
                i++;
            }
        }
