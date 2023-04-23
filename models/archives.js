const archives = [
  { seq: 0, email: 'rok.ksohn@gmail.com', storeId: '26571895' },
  { seq: 1, email: 'bin000527@naver.com', storeId: '26571895' },
  { seq: 2, email: 'alswl99710@naver.com', storeId: '26571895' },
  { seq: 3, email: 'sanbondeveloper@gmail.com', storeId: '26571895' },
  { seq: 4, email: 'rok.ksohn@gmail.com', storeId: '27514796' },
  { seq: 5, email: 'bin000527@naver.com', storeId: '27514796' },
  { seq: 6, email: 'alswl99710@naver.com', storeId: '27514796' },
  { seq: 7, email: 'sanbondeveloper@gmail.com', storeId: '27514796' },
  { seq: 8, email: 'rok.ksohn@gmail.com', storeId: '589846825' },
  { seq: 9, email: 'bin000527@naver.com', storeId: '589846825' },
  { seq: 10, email: 'alswl99710@naver.com', storeId: '589846825' },
  { seq: 11, email: 'sanbondeveloper@gmail.com', storeId: '589846825' },
  { seq: 12, email: 'rok.ksohn@gmail.com', storeId: '20328809' },
  { seq: 13, email: 'bin000527@naver.com', storeId: '20328809' },
  { seq: 14, email: 'alswl99710@naver.com', storeId: '20328809' },
  { seq: 15, email: 'sanbondeveloper@gmail.com', storeId: '20328809' },
  { seq: 16, email: 'rok.ksohn@gmail.com', storeId: '427510472' },
  { seq: 17, email: 'bin000527@naver.com', storeId: '427510472' },
  { seq: 18, email: 'alswl99710@naver.com', storeId: '427510472' },
  { seq: 19, email: 'sanbondeveloper@gmail.com', storeId: '427510472' },
  { seq: 20, email: 'rok.ksohn@gmail.com', storeId: '682483214' },
  { seq: 21, email: 'bin000527@naver.com', storeId: '682483214' },
  { seq: 22, email: 'alswl99710@naver.com', storeId: '682483214' },
  { seq: 23, email: 'sanbondeveloper@gmail.com', storeId: '682483214' },
  { seq: 24, email: 'rok.ksohn@gmail.com', storeId: '19037502' },
  { seq: 25, email: 'bin000527@naver.com', storeId: '19037502' },
  { seq: 26, email: 'alswl99710@naver.com', storeId: '19037502' },
  { seq: 27, email: 'sanbondeveloper@gmail.com', storeId: '19037502' },
  { seq: 28, email: 'rok.ksohn@gmail.com', storeId: '1130537615' },
  { seq: 29, email: 'bin000527@naver.com', storeId: '1130537615' },
  { seq: 30, email: 'alswl99710@naver.com', storeId: '1130537615' },
  { seq: 31, email: 'sanbondeveloper@gmail.com', storeId: '1130537615' },
  { seq: 32, email: 'rok.ksohn@gmail.com', storeId: '21180713' },
  { seq: 33, email: 'bin000527@naver.com', storeId: '21180713' },
  { seq: 34, email: 'alswl99710@naver.com', storeId: '21180713' },
  { seq: 35, email: 'sanbondeveloper@gmail.com', storeId: '21180713' },
  { seq: 36, email: 'rok.ksohn@gmail.com', storeId: '26356307' },
  { seq: 37, email: 'bin000527@naver.com', storeId: '26356307' },
  { seq: 38, email: 'alswl99710@naver.com', storeId: '26356307' },
  { seq: 39, email: 'sanbondeveloper@gmail.com', storeId: '26356307' },
  { seq: 40, email: 'rok.ksohn@gmail.com', storeId: '1453970380' },
  { seq: 41, email: 'bin000527@naver.com', storeId: '1453970380' },
  { seq: 42, email: 'alswl99710@naver.com', storeId: '1453970380' },
  { seq: 43, email: 'sanbondeveloper@gmail.com', storeId: '1453970380' },
  { seq: 44, email: 'rok.ksohn@gmail.com', storeId: '984709951' },
  { seq: 45, email: 'bin000527@naver.com', storeId: '984709951' },
  { seq: 46, email: 'alswl99710@naver.com', storeId: '984709951' },
  { seq: 47, email: 'sanbondeveloper@gmail.com', storeId: '984709951' },
  { seq: 48, email: 'rok.ksohn@gmail.com', storeId: '21366133' },
  { seq: 49, email: 'bin000527@naver.com', storeId: '21366133' },
  { seq: 50, email: 'alswl99710@naver.com', storeId: '21366133' },
  { seq: 51, email: 'sanbondeveloper@gmail.com', storeId: '21366133' },
  { seq: 52, email: 'rok.ksohn@gmail.com', storeId: '1855041852' },
  { seq: 53, email: 'bin000527@naver.com', storeId: '1855041852' },
  { seq: 54, email: 'alswl99710@naver.com', storeId: '1855041852' },
  { seq: 55, email: 'sanbondeveloper@gmail.com', storeId: '1855041852' },
  { seq: 56, email: 'rok.ksohn@gmail.com', storeId: '2092147534' },
  { seq: 57, email: 'bin000527@naver.com', storeId: '2092147534' },
  { seq: 58, email: 'alswl99710@naver.com', storeId: '2092147534' },
  { seq: 59, email: 'sanbondeveloper@gmail.com', storeId: '2092147534' },
  { seq: 60, email: 'rok.ksohn@gmail.com', storeId: '1386103378' },
  { seq: 61, email: 'bin000527@naver.com', storeId: '1386103378' },
  { seq: 62, email: 'alswl99710@naver.com', storeId: '1386103378' },
  { seq: 63, email: 'sanbondeveloper@gmail.com', storeId: '1386103378' },
  { seq: 64, email: 'rok.ksohn@gmail.com', storeId: '971062870' },
  { seq: 65, email: 'bin000527@naver.com', storeId: '971062870' },
  { seq: 66, email: 'alswl99710@naver.com', storeId: '971062870' },
  { seq: 67, email: 'sanbondeveloper@gmail.com', storeId: '971062870' },
  { seq: 68, email: 'rok.ksohn@gmail.com', storeId: '1798961498' },
  { seq: 69, email: 'bin000527@naver.com', storeId: '1798961498' },
  { seq: 70, email: 'alswl99710@naver.com', storeId: '1798961498' },
  { seq: 71, email: 'sanbondeveloper@gmail.com', storeId: '1798961498' },
  { seq: 72, email: 'rok.ksohn@gmail.com', storeId: '11162155' },
  { seq: 73, email: 'bin000527@naver.com', storeId: '11162155' },
  { seq: 74, email: 'alswl99710@naver.com', storeId: '11162155' },
  { seq: 75, email: 'sanbondeveloper@gmail.com', storeId: '11162155' },
  { seq: 76, email: 'rok.ksohn@gmail.com', storeId: '1349950333' },
  { seq: 77, email: 'bin000527@naver.com', storeId: '1349950333' },
  { seq: 78, email: 'alswl99710@naver.com', storeId: '1349950333' },
  { seq: 79, email: 'sanbondeveloper@gmail.com', storeId: '1349950333' },
  { seq: 80, email: 'rok.ksohn@gmail.com', storeId: '14513092' },
  { seq: 81, email: 'bin000527@naver.com', storeId: '14513092' },
  { seq: 82, email: 'alswl99710@naver.com', storeId: '14513092' },
  { seq: 83, email: 'sanbondeveloper@gmail.com', storeId: '14513092' },
  { seq: 84, email: 'rok.ksohn@gmail.com', storeId: '19499643' },
  { seq: 85, email: 'bin000527@naver.com', storeId: '19499643' },
  { seq: 86, email: 'alswl99710@naver.com', storeId: '19499643' },
  { seq: 87, email: 'sanbondeveloper@gmail.com', storeId: '19499643' },
  { seq: 88, email: 'rok.ksohn@gmail.com', storeId: '1490921549' },
  { seq: 89, email: 'bin000527@naver.com', storeId: '1490921549' },
  { seq: 90, email: 'alswl99710@naver.com', storeId: '1490921549' },
  { seq: 91, email: 'sanbondeveloper@gmail.com', storeId: '1490921549' },
  { seq: 92, email: 'rok.ksohn@gmail.com', storeId: '16273915' },
  { seq: 93, email: 'bin000527@naver.com', storeId: '16273915' },
  { seq: 94, email: 'alswl99710@naver.com', storeId: '16273915' },
  { seq: 95, email: 'sanbondeveloper@gmail.com', storeId: '16273915' },
  { seq: 96, email: 'rok.ksohn@gmail.com', storeId: '8187153' },
  { seq: 97, email: 'bin000527@naver.com', storeId: '8187153' },
  { seq: 98, email: 'alswl99710@naver.com', storeId: '8187153' },
  { seq: 99, email: 'sanbondeveloper@gmail.com', storeId: '8187153' },
  { seq: 100, email: 'rok.ksohn@gmail.com', storeId: '497570902' },
  { seq: 101, email: 'bin000527@naver.com', storeId: '497570902' },
  { seq: 102, email: 'alswl99710@naver.com', storeId: '497570902' },
  { seq: 103, email: 'sanbondeveloper@gmail.com', storeId: '497570902' },
  { seq: 104, email: 'rok.ksohn@gmail.com', storeId: '8149629' },
  { seq: 105, email: 'bin000527@naver.com', storeId: '8149629' },
  { seq: 106, email: 'alswl99710@naver.com', storeId: '8149629' },
  { seq: 107, email: 'sanbondeveloper@gmail.com', storeId: '8149629' },
  { seq: 108, email: 'rok.ksohn@gmail.com', storeId: '1314518762' },
  { seq: 109, email: 'bin000527@naver.com', storeId: '1314518762' },
  { seq: 110, email: 'alswl99710@naver.com', storeId: '1314518762' },
  { seq: 111, email: 'sanbondeveloper@gmail.com', storeId: '1314518762' },
  { seq: 112, email: 'rok.ksohn@gmail.com', storeId: '231113168' },
  { seq: 113, email: 'bin000527@naver.com', storeId: '231113168' },
  { seq: 114, email: 'alswl99710@naver.com', storeId: '231113168' },
  { seq: 115, email: 'sanbondeveloper@gmail.com', storeId: '231113168' },
  { seq: 116, email: 'rok.ksohn@gmail.com', storeId: '21298181' },
  { seq: 117, email: 'bin000527@naver.com', storeId: '21298181' },
  { seq: 118, email: 'alswl99710@naver.com', storeId: '21298181' },
  { seq: 119, email: 'sanbondeveloper@gmail.com', storeId: '21298181' },
  { seq: 120, email: 'rok.ksohn@gmail.com', storeId: '23701213' },
  { seq: 121, email: 'bin000527@naver.com', storeId: '23701213' },
  { seq: 122, email: 'alswl99710@naver.com', storeId: '23701213' },
  { seq: 123, email: 'sanbondeveloper@gmail.com', storeId: '23701213' },
  { seq: 124, email: 'rok.ksohn@gmail.com', storeId: '13288545' },
  { seq: 125, email: 'bin000527@naver.com', storeId: '13288545' },
  { seq: 126, email: 'alswl99710@naver.com', storeId: '13288545' },
  { seq: 127, email: 'sanbondeveloper@gmail.com', storeId: '13288545' },
  { seq: 128, email: 'rok.ksohn@gmail.com', storeId: '491141513' },
  { seq: 129, email: 'bin000527@naver.com', storeId: '491141513' },
  { seq: 130, email: 'alswl99710@naver.com', storeId: '491141513' },
  { seq: 131, email: 'sanbondeveloper@gmail.com', storeId: '491141513' },
  { seq: 132, email: 'rok.ksohn@gmail.com', storeId: '1976028871' },
  { seq: 133, email: 'bin000527@naver.com', storeId: '1976028871' },
  { seq: 134, email: 'alswl99710@naver.com', storeId: '1976028871' },
  { seq: 135, email: 'sanbondeveloper@gmail.com', storeId: '1976028871' },
  { seq: 136, email: 'rok.ksohn@gmail.com', storeId: '287476545' },
  { seq: 137, email: 'bin000527@naver.com', storeId: '287476545' },
  { seq: 138, email: 'alswl99710@naver.com', storeId: '287476545' },
  { seq: 139, email: 'sanbondeveloper@gmail.com', storeId: '287476545' },
  { seq: 140, email: 'rok.ksohn@gmail.com', storeId: '15526158' },
  { seq: 141, email: 'bin000527@naver.com', storeId: '15526158' },
  { seq: 142, email: 'alswl99710@naver.com', storeId: '15526158' },
  { seq: 143, email: 'sanbondeveloper@gmail.com', storeId: '15526158' },
  { seq: 144, email: 'rok.ksohn@gmail.com', storeId: '27099765' },
  { seq: 145, email: 'bin000527@naver.com', storeId: '27099765' },
  { seq: 146, email: 'alswl99710@naver.com', storeId: '27099765' },
  { seq: 147, email: 'sanbondeveloper@gmail.com', storeId: '27099765' },
  { seq: 148, email: 'rok.ksohn@gmail.com', storeId: '14733302' },
  { seq: 149, email: 'bin000527@naver.com', storeId: '14733302' },
  { seq: 150, email: 'alswl99710@naver.com', storeId: '14733302' },
  { seq: 151, email: 'sanbondeveloper@gmail.com', storeId: '14733302' },
  { seq: 152, email: 'rok.ksohn@gmail.com', storeId: '10915533' },
  { seq: 153, email: 'bin000527@naver.com', storeId: '10915533' },
  { seq: 154, email: 'alswl99710@naver.com', storeId: '10915533' },
  { seq: 155, email: 'sanbondeveloper@gmail.com', storeId: '10915533' },
  { seq: 156, email: 'rok.ksohn@gmail.com', storeId: '10684837' },
  { seq: 157, email: 'bin000527@naver.com', storeId: '10684837' },
  { seq: 158, email: 'alswl99710@naver.com', storeId: '10684837' },
  { seq: 159, email: 'sanbondeveloper@gmail.com', storeId: '10684837' },
  { seq: 160, email: 'rok.ksohn@gmail.com', storeId: '1648266796' },
  { seq: 161, email: 'bin000527@naver.com', storeId: '1648266796' },
  { seq: 162, email: 'alswl99710@naver.com', storeId: '1648266796' },
  { seq: 163, email: 'sanbondeveloper@gmail.com', storeId: '1648266796' },
  { seq: 164, email: 'rok.ksohn@gmail.com', storeId: '1697940758' },
  { seq: 165, email: 'bin000527@naver.com', storeId: '1697940758' },
  { seq: 166, email: 'alswl99710@naver.com', storeId: '1697940758' },
  { seq: 167, email: 'sanbondeveloper@gmail.com', storeId: '1697940758' },
  { seq: 168, email: 'rok.ksohn@gmail.com', storeId: '504236629' },
  { seq: 169, email: 'bin000527@naver.com', storeId: '504236629' },
  { seq: 170, email: 'alswl99710@naver.com', storeId: '504236629' },
  { seq: 171, email: 'sanbondeveloper@gmail.com', storeId: '504236629' },
  { seq: 172, email: 'rok.ksohn@gmail.com', storeId: '263830255' },
  { seq: 173, email: 'bin000527@naver.com', storeId: '263830255' },
  { seq: 174, email: 'alswl99710@naver.com', storeId: '263830255' },
  { seq: 175, email: 'sanbondeveloper@gmail.com', storeId: '263830255' },
  { seq: 176, email: 'rok.ksohn@gmail.com', storeId: '25550206' },
  { seq: 177, email: 'bin000527@naver.com', storeId: '25550206' },
  { seq: 178, email: 'alswl99710@naver.com', storeId: '25550206' },
  { seq: 179, email: 'sanbondeveloper@gmail.com', storeId: '25550206' },
  { seq: 180, email: 'rok.ksohn@gmail.com', storeId: '1912522814' },
  { seq: 181, email: 'bin000527@naver.com', storeId: '1912522814' },
  { seq: 182, email: 'alswl99710@naver.com', storeId: '1912522814' },
  { seq: 183, email: 'sanbondeveloper@gmail.com', storeId: '1912522814' },
  { seq: 184, email: 'rok.ksohn@gmail.com', storeId: '13499124' },
  { seq: 185, email: 'bin000527@naver.com', storeId: '13499124' },
  { seq: 186, email: 'alswl99710@naver.com', storeId: '13499124' },
  { seq: 187, email: 'sanbondeveloper@gmail.com', storeId: '13499124' },
  { seq: 188, email: 'rok.ksohn@gmail.com', storeId: '487052758' },
  { seq: 189, email: 'bin000527@naver.com', storeId: '487052758' },
  { seq: 190, email: 'alswl99710@naver.com', storeId: '487052758' },
  { seq: 191, email: 'sanbondeveloper@gmail.com', storeId: '487052758' },
  { seq: 192, email: 'rok.ksohn@gmail.com', storeId: '8086138' },
  { seq: 193, email: 'bin000527@naver.com', storeId: '8086138' },
  { seq: 194, email: 'alswl99710@naver.com', storeId: '8086138' },
  { seq: 195, email: 'sanbondeveloper@gmail.com', storeId: '8086138' },
  { seq: 196, email: 'rok.ksohn@gmail.com', storeId: '1378177446' },
  { seq: 197, email: 'bin000527@naver.com', storeId: '1378177446' },
  { seq: 198, email: 'alswl99710@naver.com', storeId: '1378177446' },
  { seq: 199, email: 'sanbondeveloper@gmail.com', storeId: '1378177446' },
  { seq: 200, email: 'rok.ksohn@gmail.com', storeId: '1885154773' },
  { seq: 201, email: 'bin000527@naver.com', storeId: '1885154773' },
  { seq: 202, email: 'alswl99710@naver.com', storeId: '1885154773' },
  { seq: 203, email: 'sanbondeveloper@gmail.com', storeId: '1885154773' },
  { seq: 204, email: 'rok.ksohn@gmail.com', storeId: '1367196580' },
  { seq: 205, email: 'bin000527@naver.com', storeId: '1367196580' },
  { seq: 206, email: 'alswl99710@naver.com', storeId: '1367196580' },
  { seq: 207, email: 'sanbondeveloper@gmail.com', storeId: '1367196580' },
  { seq: 208, email: 'rok.ksohn@gmail.com', storeId: '27455203' },
  { seq: 209, email: 'bin000527@naver.com', storeId: '27455203' },
  { seq: 210, email: 'alswl99710@naver.com', storeId: '27455203' },
  { seq: 211, email: 'sanbondeveloper@gmail.com', storeId: '27455203' },
  { seq: 212, email: 'rok.ksohn@gmail.com', storeId: '8015540' },
  { seq: 213, email: 'bin000527@naver.com', storeId: '8015540' },
  { seq: 214, email: 'alswl99710@naver.com', storeId: '8015540' },
  { seq: 215, email: 'sanbondeveloper@gmail.com', storeId: '8015540' },
  { seq: 216, email: 'rok.ksohn@gmail.com', storeId: '23293789' },
  { seq: 217, email: 'bin000527@naver.com', storeId: '23293789' },
  { seq: 218, email: 'alswl99710@naver.com', storeId: '23293789' },
  { seq: 219, email: 'sanbondeveloper@gmail.com', storeId: '23293789' },
  { seq: 220, email: 'rok.ksohn@gmail.com', storeId: '1804081660' },
  { seq: 221, email: 'bin000527@naver.com', storeId: '1804081660' },
  { seq: 222, email: 'alswl99710@naver.com', storeId: '1804081660' },
  { seq: 223, email: 'sanbondeveloper@gmail.com', storeId: '1804081660' },
  { seq: 224, email: 'rok.ksohn@gmail.com', storeId: '553953483' },
  { seq: 225, email: 'bin000527@naver.com', storeId: '553953483' },
  { seq: 226, email: 'alswl99710@naver.com', storeId: '553953483' },
  { seq: 227, email: 'sanbondeveloper@gmail.com', storeId: '553953483' },
  { seq: 228, email: 'rok.ksohn@gmail.com', storeId: '1963568153' },
  { seq: 229, email: 'bin000527@naver.com', storeId: '1963568153' },
  { seq: 230, email: 'alswl99710@naver.com', storeId: '1963568153' },
  { seq: 231, email: 'sanbondeveloper@gmail.com', storeId: '1963568153' },
  { seq: 232, email: 'rok.ksohn@gmail.com', storeId: '1153109923' },
  { seq: 233, email: 'bin000527@naver.com', storeId: '1153109923' },
  { seq: 234, email: 'alswl99710@naver.com', storeId: '1153109923' },
  { seq: 235, email: 'sanbondeveloper@gmail.com', storeId: '1153109923' },
  { seq: 236, email: 'rok.ksohn@gmail.com', storeId: '720883151' },
  { seq: 237, email: 'bin000527@naver.com', storeId: '720883151' },
  { seq: 238, email: 'alswl99710@naver.com', storeId: '720883151' },
  { seq: 239, email: 'sanbondeveloper@gmail.com', storeId: '720883151' },
  { seq: 240, email: 'rok.ksohn@gmail.com', storeId: '218274780' },
  { seq: 241, email: 'bin000527@naver.com', storeId: '218274780' },
  { seq: 242, email: 'alswl99710@naver.com', storeId: '218274780' },
  { seq: 243, email: 'sanbondeveloper@gmail.com', storeId: '218274780' },
  { seq: 244, email: 'rok.ksohn@gmail.com', storeId: '431631970' },
  { seq: 245, email: 'bin000527@naver.com', storeId: '431631970' },
  { seq: 246, email: 'alswl99710@naver.com', storeId: '431631970' },
  { seq: 247, email: 'sanbondeveloper@gmail.com', storeId: '431631970' },
  { seq: 248, email: 'rok.ksohn@gmail.com', storeId: '915707641' },
  { seq: 249, email: 'bin000527@naver.com', storeId: '915707641' },
  { seq: 250, email: 'alswl99710@naver.com', storeId: '915707641' },
  { seq: 251, email: 'sanbondeveloper@gmail.com', storeId: '915707641' },
  { seq: 252, email: 'rok.ksohn@gmail.com', storeId: '63121054' },
  { seq: 253, email: 'bin000527@naver.com', storeId: '63121054' },
  { seq: 254, email: 'alswl99710@naver.com', storeId: '63121054' },
  { seq: 255, email: 'sanbondeveloper@gmail.com', storeId: '63121054' },
  { seq: 256, email: 'rok.ksohn@gmail.com', storeId: '1641451756' },
  { seq: 257, email: 'bin000527@naver.com', storeId: '1641451756' },
  { seq: 258, email: 'alswl99710@naver.com', storeId: '1641451756' },
  { seq: 259, email: 'sanbondeveloper@gmail.com', storeId: '1641451756' },
  { seq: 260, email: 'rok.ksohn@gmail.com', storeId: '2104936093' },
  { seq: 261, email: 'bin000527@naver.com', storeId: '2104936093' },
  { seq: 262, email: 'alswl99710@naver.com', storeId: '2104936093' },
  { seq: 263, email: 'sanbondeveloper@gmail.com', storeId: '2104936093' },
  { seq: 264, email: 'rok.ksohn@gmail.com', storeId: '625712749' },
  { seq: 265, email: 'bin000527@naver.com', storeId: '625712749' },
  { seq: 266, email: 'alswl99710@naver.com', storeId: '625712749' },
  { seq: 267, email: 'sanbondeveloper@gmail.com', storeId: '625712749' },
  { seq: 268, email: 'rok.ksohn@gmail.com', storeId: '1310208191' },
  { seq: 269, email: 'bin000527@naver.com', storeId: '1310208191' },
  { seq: 270, email: 'alswl99710@naver.com', storeId: '1310208191' },
  { seq: 271, email: 'sanbondeveloper@gmail.com', storeId: '1310208191' },
  { seq: 272, email: 'rok.ksohn@gmail.com', storeId: '1878339483' },
  { seq: 273, email: 'bin000527@naver.com', storeId: '1878339483' },
  { seq: 274, email: 'alswl99710@naver.com', storeId: '1878339483' },
  { seq: 275, email: 'sanbondeveloper@gmail.com', storeId: '1878339483' },
  { seq: 276, email: 'rok.ksohn@gmail.com', storeId: '301531935' },
  { seq: 277, email: 'bin000527@naver.com', storeId: '301531935' },
  { seq: 278, email: 'alswl99710@naver.com', storeId: '301531935' },
  { seq: 279, email: 'sanbondeveloper@gmail.com', storeId: '301531935' },
  { seq: 280, email: 'rok.ksohn@gmail.com', storeId: '2061169084' },
  { seq: 281, email: 'bin000527@naver.com', storeId: '2061169084' },
  { seq: 282, email: 'alswl99710@naver.com', storeId: '2061169084' },
  { seq: 283, email: 'sanbondeveloper@gmail.com', storeId: '2061169084' },
  { seq: 284, email: 'rok.ksohn@gmail.com', storeId: '27315733' },
  { seq: 285, email: 'bin000527@naver.com', storeId: '27315733' },
  { seq: 286, email: 'alswl99710@naver.com', storeId: '27315733' },
  { seq: 287, email: 'sanbondeveloper@gmail.com', storeId: '27315733' },
  { seq: 288, email: 'rok.ksohn@gmail.com', storeId: '474254018' },
  { seq: 289, email: 'bin000527@naver.com', storeId: '474254018' },
  { seq: 290, email: 'alswl99710@naver.com', storeId: '474254018' },
  { seq: 291, email: 'sanbondeveloper@gmail.com', storeId: '474254018' },
  { seq: 292, email: 'rok.ksohn@gmail.com', storeId: '913901166' },
  { seq: 293, email: 'bin000527@naver.com', storeId: '913901166' },
  { seq: 294, email: 'alswl99710@naver.com', storeId: '913901166' },
  { seq: 295, email: 'sanbondeveloper@gmail.com', storeId: '913901166' },
  { seq: 296, email: 'rok.ksohn@gmail.com', storeId: '763211643' },
  { seq: 297, email: 'bin000527@naver.com', storeId: '763211643' },
  { seq: 298, email: 'alswl99710@naver.com', storeId: '763211643' },
  { seq: 299, email: 'sanbondeveloper@gmail.com', storeId: '763211643' },
  { seq: 300, email: 'rok.ksohn@gmail.com', storeId: '661872026' },
  { seq: 301, email: 'bin000527@naver.com', storeId: '661872026' },
  { seq: 302, email: 'alswl99710@naver.com', storeId: '661872026' },
  { seq: 303, email: 'sanbondeveloper@gmail.com', storeId: '661872026' },
  { seq: 304, email: 'rok.ksohn@gmail.com', storeId: '1055005741' },
  { seq: 305, email: 'bin000527@naver.com', storeId: '1055005741' },
  { seq: 306, email: 'alswl99710@naver.com', storeId: '1055005741' },
  { seq: 307, email: 'sanbondeveloper@gmail.com', storeId: '1055005741' },
  { seq: 308, email: 'rok.ksohn@gmail.com', storeId: '954522598' },
  { seq: 309, email: 'bin000527@naver.com', storeId: '954522598' },
  { seq: 310, email: 'alswl99710@naver.com', storeId: '954522598' },
  { seq: 311, email: 'sanbondeveloper@gmail.com', storeId: '954522598' },
  { seq: 312, email: 'rok.ksohn@gmail.com', storeId: '1694359692' },
  { seq: 313, email: 'bin000527@naver.com', storeId: '1694359692' },
  { seq: 314, email: 'alswl99710@naver.com', storeId: '1694359692' },
  { seq: 315, email: 'sanbondeveloper@gmail.com', storeId: '1694359692' },
  { seq: 316, email: 'rok.ksohn@gmail.com', storeId: '21236405' },
  { seq: 317, email: 'bin000527@naver.com', storeId: '21236405' },
  { seq: 318, email: 'alswl99710@naver.com', storeId: '21236405' },
  { seq: 319, email: 'sanbondeveloper@gmail.com', storeId: '21236405' },
  { seq: 320, email: 'rok.ksohn@gmail.com', storeId: '17968277' },
  { seq: 321, email: 'bin000527@naver.com', storeId: '17968277' },
  { seq: 322, email: 'alswl99710@naver.com', storeId: '17968277' },
  { seq: 323, email: 'sanbondeveloper@gmail.com', storeId: '17968277' },
  { seq: 324, email: 'rok.ksohn@gmail.com', storeId: '26966117' },
  { seq: 325, email: 'bin000527@naver.com', storeId: '26966117' },
  { seq: 326, email: 'alswl99710@naver.com', storeId: '26966117' },
  { seq: 327, email: 'sanbondeveloper@gmail.com', storeId: '26966117' },
  { seq: 328, email: 'rok.ksohn@gmail.com', storeId: '1742465670' },
  { seq: 329, email: 'bin000527@naver.com', storeId: '1742465670' },
  { seq: 330, email: 'alswl99710@naver.com', storeId: '1742465670' },
  { seq: 331, email: 'sanbondeveloper@gmail.com', storeId: '1742465670' },
  { seq: 332, email: 'rok.ksohn@gmail.com', storeId: '23931288' },
  { seq: 333, email: 'bin000527@naver.com', storeId: '23931288' },
  { seq: 334, email: 'alswl99710@naver.com', storeId: '23931288' },
  { seq: 335, email: 'sanbondeveloper@gmail.com', storeId: '23931288' },
  { seq: 336, email: 'rok.ksohn@gmail.com', storeId: '864100804' },
  { seq: 337, email: 'bin000527@naver.com', storeId: '864100804' },
  { seq: 338, email: 'alswl99710@naver.com', storeId: '864100804' },
  { seq: 339, email: 'sanbondeveloper@gmail.com', storeId: '864100804' },
  { seq: 340, email: 'rok.ksohn@gmail.com', storeId: '1859634829' },
  { seq: 341, email: 'bin000527@naver.com', storeId: '1859634829' },
  { seq: 342, email: 'alswl99710@naver.com', storeId: '1859634829' },
  { seq: 343, email: 'sanbondeveloper@gmail.com', storeId: '1859634829' },
  { seq: 344, email: 'rok.ksohn@gmail.com', storeId: '1908121915' },
  { seq: 345, email: 'bin000527@naver.com', storeId: '1908121915' },
  { seq: 346, email: 'alswl99710@naver.com', storeId: '1908121915' },
  { seq: 347, email: 'sanbondeveloper@gmail.com', storeId: '1908121915' },
  { seq: 348, email: 'rok.ksohn@gmail.com', storeId: '19153287' },
  { seq: 349, email: 'bin000527@naver.com', storeId: '19153287' },
  { seq: 350, email: 'alswl99710@naver.com', storeId: '19153287' },
  { seq: 351, email: 'sanbondeveloper@gmail.com', storeId: '19153287' },
  { seq: 352, email: 'rok.ksohn@gmail.com', storeId: '1247140514' },
  { seq: 353, email: 'bin000527@naver.com', storeId: '1247140514' },
  { seq: 354, email: 'alswl99710@naver.com', storeId: '1247140514' },
  { seq: 355, email: 'sanbondeveloper@gmail.com', storeId: '1247140514' },
  { seq: 356, email: 'rok.ksohn@gmail.com', storeId: '26235884' },
  { seq: 357, email: 'bin000527@naver.com', storeId: '26235884' },
  { seq: 358, email: 'alswl99710@naver.com', storeId: '26235884' },
  { seq: 359, email: 'sanbondeveloper@gmail.com', storeId: '26235884' },
  { seq: 360, email: 'rok.ksohn@gmail.com', storeId: '24546118' },
  { seq: 361, email: 'bin000527@naver.com', storeId: '24546118' },
  { seq: 362, email: 'alswl99710@naver.com', storeId: '24546118' },
  { seq: 363, email: 'sanbondeveloper@gmail.com', storeId: '24546118' },
  { seq: 364, email: 'rok.ksohn@gmail.com', storeId: '735994320' },
  { seq: 365, email: 'bin000527@naver.com', storeId: '735994320' },
  { seq: 366, email: 'alswl99710@naver.com', storeId: '735994320' },
  { seq: 367, email: 'sanbondeveloper@gmail.com', storeId: '735994320' },
  { seq: 368, email: 'rok.ksohn@gmail.com', storeId: '1736742094' },
  { seq: 369, email: 'bin000527@naver.com', storeId: '1736742094' },
  { seq: 370, email: 'alswl99710@naver.com', storeId: '1736742094' },
  { seq: 371, email: 'sanbondeveloper@gmail.com', storeId: '1736742094' },
  { seq: 372, email: 'rok.ksohn@gmail.com', storeId: '27341509' },
  { seq: 373, email: 'bin000527@naver.com', storeId: '27341509' },
  { seq: 374, email: 'alswl99710@naver.com', storeId: '27341509' },
  { seq: 375, email: 'sanbondeveloper@gmail.com', storeId: '27341509' },
  { seq: 376, email: 'rok.ksohn@gmail.com', storeId: '15110084' },
  { seq: 377, email: 'bin000527@naver.com', storeId: '15110084' },
  { seq: 378, email: 'alswl99710@naver.com', storeId: '15110084' },
  { seq: 379, email: 'sanbondeveloper@gmail.com', storeId: '15110084' },
  { seq: 380, email: 'rok.ksohn@gmail.com', storeId: '27494588' },
  { seq: 381, email: 'bin000527@naver.com', storeId: '27494588' },
  { seq: 382, email: 'alswl99710@naver.com', storeId: '27494588' },
  { seq: 383, email: 'sanbondeveloper@gmail.com', storeId: '27494588' },
  { seq: 384, email: 'rok.ksohn@gmail.com', storeId: '13123075' },
  { seq: 385, email: 'bin000527@naver.com', storeId: '13123075' },
  { seq: 386, email: 'alswl99710@naver.com', storeId: '13123075' },
  { seq: 387, email: 'sanbondeveloper@gmail.com', storeId: '13123075' },
  { seq: 388, email: 'rok.ksohn@gmail.com', storeId: '1165755646' },
  { seq: 389, email: 'bin000527@naver.com', storeId: '1165755646' },
  { seq: 390, email: 'alswl99710@naver.com', storeId: '1165755646' },
  { seq: 391, email: 'sanbondeveloper@gmail.com', storeId: '1165755646' },
  { seq: 392, email: 'rok.ksohn@gmail.com', storeId: '2010386564' },
  { seq: 393, email: 'bin000527@naver.com', storeId: '2010386564' },
  { seq: 394, email: 'alswl99710@naver.com', storeId: '2010386564' },
  { seq: 395, email: 'sanbondeveloper@gmail.com', storeId: '2010386564' },
  { seq: 396, email: 'rok.ksohn@gmail.com', storeId: '27253757' },
  { seq: 397, email: 'bin000527@naver.com', storeId: '27253757' },
  { seq: 398, email: 'alswl99710@naver.com', storeId: '27253757' },
  { seq: 399, email: 'sanbondeveloper@gmail.com', storeId: '27253757' },
];

const getArcivesByStoreId = (storeid) =>
  archives.filter((arc) => arc.storeId === storeid).length;

module.exports = {
  getArcivesByStoreId,
};
